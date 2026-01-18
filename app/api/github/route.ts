import { NextResponse } from "next/server";

const GITHUB_USERNAME = "shercostiniano";

// Fallback data if GitHub API fails
const FALLBACK_DATA = {
  public_repos: 40,
  followers: 10,
  following: 16,
};

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return NextResponse.json(FALLBACK_DATA);
    }

    const data = await response.json();

    return NextResponse.json({
      public_repos: data.public_repos ?? FALLBACK_DATA.public_repos,
      followers: data.followers ?? FALLBACK_DATA.followers,
      following: data.following ?? FALLBACK_DATA.following,
    });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(FALLBACK_DATA);
  }
}
