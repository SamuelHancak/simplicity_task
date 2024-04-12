export const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";

export const CATEGORIES = ["City", "Health", "Science", "Technology"] as const;

export type CategoriesType = (typeof CATEGORIES)[number];

export type NoticeType = {
  id: string;
  title: string;
  publicationDate: Date;
  lastUpdate: Date;
  categories: CategoriesType[];
  link: string;
  content?: string;
};
