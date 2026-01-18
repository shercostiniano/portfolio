import { groq } from "next-sanity";

export const portfolioFields = groq`
  _id,
  title,
  slug,
  description,
  category->{
    _id,
    title,
    slug,
    description
  },
  technologies[]->{
    _id,
    name,
    icon,
    color
  },
  mainImage{
    asset->{
      _ref,
      url
    },
    alt
  },
  images[]{
    asset->{
      _ref,
      url
    },
    alt
  },
  liveUrl,
  repoUrl,
  featured,
  order
`;

export const getAllPortfoliosQuery = groq`
  *[_type == "portfolio"] | order(order asc, _createdAt desc) {
    ${portfolioFields}
  }
`;

export const getPortfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    ${portfolioFields}
  }
`;

export const getFeaturedPortfoliosQuery = groq`
  *[_type == "portfolio" && featured == true] | order(order asc, _createdAt desc) {
    ${portfolioFields}
  }
`;

export const getPortfoliosByCategoryQuery = groq`
  *[_type == "portfolio" && category->slug.current == $category] | order(order asc, _createdAt desc) {
    ${portfolioFields}
  }
`;

export const getAllCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;
