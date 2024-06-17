import { MetadataRoute } from "next";
import { BASE_URL } from "@/url";

let Posts = Array.from({ length: 100 }, (_v, i) => ({
  url: `${BASE_URL}/posts/${i + 1}`,
  lastModified: new Date(),
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...Posts,
  ];
}
