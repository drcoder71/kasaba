import { PhotoNewsType, VideoNewsType } from "@/types";

export const PhotoNewsData: PhotoNewsType[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: `id-${index + 1}`,
    title: `O'zbekiston Respublikasining Davlat Konstitutsiyasi ${index + 1}`,
    img: `/img/top-news.png`,
    time: "9-dekabr, 23:23",
  })
);
