import { SchemaTypeDefinition } from "sanity";
import { portfolio } from "./portfolio";
import { category } from "./category";
import { technology } from "./technology";

export const schemaTypes: SchemaTypeDefinition[] = [
  portfolio,
  category,
  technology,
];
