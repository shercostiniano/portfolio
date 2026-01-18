import { PortableTextBlock } from "next-sanity";

export interface Technology {
  _id: string;
  name: string;
  icon?: string;
  color?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Portfolio {
  _id: string;
  title: string;
  slug: { current: string };
  description?: PortableTextBlock[];
  category?: Category;
  technologies?: Technology[];
  mainImage?: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  };
  images?: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  }[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order?: number;
}
