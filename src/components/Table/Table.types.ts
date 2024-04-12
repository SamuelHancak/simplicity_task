export const DATE_FORMAT = "MM/dd/yyyy HH:mm";

export const CATEGORIES = ["City", "Health", "Science", "Technology"] as const;

export type CategoriesType = (typeof CATEGORIES)[number];

export type NoticeType = {
  id: string;
  title: string;
  publicationDate: Date;
  lastUpdate: Date;
  categories: CategoriesType[];
  content?: string;
};
