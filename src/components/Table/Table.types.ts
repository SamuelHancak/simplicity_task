export const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";

export type CategoriesType = "City" | "Health" | "Science" | "Technology";

export type NoticeType = {
  id: string;
  title: string;
  publicationDate: Date;
  lastUpdate: Date;
  categories: CategoriesType[];
  link: string;
};
