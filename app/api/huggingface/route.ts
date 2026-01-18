import { NextResponse } from "next/server";

const HUGGINGFACE_USERNAME = "scostiniano";

interface HuggingFaceModel {
  modelId: string;
  downloads: number;
}

interface ModelResponse {
  name: string;
  downloads: number;
}

// Fallback data if HuggingFace API fails
const FALLBACK_DATA: ModelResponse[] = [
  { name: "sentiment-analyzer", downloads: 1250 },
  { name: "text-classifier", downloads: 890 },
  { name: "ner-model", downloads: 650 },
  { name: "summarizer", downloads: 420 },
];

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const response = await fetch(
      `https://huggingface.co/api/models?author=${HUGGINGFACE_USERNAME}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error(`HuggingFace API error: ${response.status}`);
      return NextResponse.json(FALLBACK_DATA);
    }

    const data: HuggingFaceModel[] = await response.json();

    if (!data || data.length === 0) {
      return NextResponse.json(FALLBACK_DATA);
    }

    const models: ModelResponse[] = data.map((model) => ({
      name: model.modelId.split("/").pop() || model.modelId,
      downloads: model.downloads || 0,
    }));

    // Sort by downloads descending
    models.sort((a, b) => b.downloads - a.downloads);

    return NextResponse.json(models);
  } catch (error: unknown) {
    console.error("Error fetching HuggingFace data:", error);
    return NextResponse.json(FALLBACK_DATA);
  }
}
