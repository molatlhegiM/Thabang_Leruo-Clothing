import { defineConfig } from "tinacms";
import { heroBlockSchema } from "../components/blocks/hero";
import { contentBlockSchema } from "../components/blocks/content";
import { featureBlockSchema } from "../components/blocks/features";
import { testimonialBlockSchema } from "../components/blocks/testimonial";
import { videoBlockSchema } from "../components/blocks/video";
import { calloutBlockSchema } from "../components/blocks/callout";
import { statsBlockSchema } from "../components/blocks/stats";
import { featuredProductsSectionSchema } from "../components/blocks/featured-products-section";
import { recentProductsSectionSchema } from "../components/blocks/recent-products-section";


export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        format: "mdx",
        match: {
          include: [
            "pre-school",
            "primary-school",
            "high-school",
            "workwear",
            "officewear",
            "warehouse-uniforms",
            "chef-kitchen-uniforms",
            "dressing-gowns",
            "towels-linen",
            "lab-coats-housekeeping",
            "industrial-mining",
            "work-overalls",
            "medical-scrubs",
          ],
        },
        fields: [
          {
            type: "object",
            label: "Page Sections",
            name: "blocks",
            list: true,
            templates: [
              heroBlockSchema,
              contentBlockSchema,
              featureBlockSchema,
              testimonialBlockSchema,
              videoBlockSchema,
              calloutBlockSchema,
              statsBlockSchema,
              featuredProductsSectionSchema,
              recentProductsSectionSchema,
            ],
          },
        ],
      },
    ],
  },
});
