import { client } from "./client";
import {
  getAllPortfoliosQuery,
  getPortfolioBySlugQuery,
  getFeaturedPortfoliosQuery,
  getPortfoliosByCategoryQuery,
  getAllCategoriesQuery,
} from "./queries";
import { Portfolio, Category } from "./types";

export async function getAllPortfolios(): Promise<Portfolio[]> {
  return client.fetch<Portfolio[]>(getAllPortfoliosQuery);
}

export async function getPortfolioBySlug(
  slug: string
): Promise<Portfolio | null> {
  return client.fetch<Portfolio | null>(getPortfolioBySlugQuery, { slug });
}

export async function getFeaturedPortfolios(): Promise<Portfolio[]> {
  return client.fetch<Portfolio[]>(getFeaturedPortfoliosQuery);
}

export async function getPortfoliosByCategory(
  category: string
): Promise<Portfolio[]> {
  return client.fetch<Portfolio[]>(getPortfoliosByCategoryQuery, { category });
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch<Category[]>(getAllCategoriesQuery);
}
