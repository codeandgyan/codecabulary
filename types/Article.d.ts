declare type ArticleContext = {
  articles: Article[] | undefined;
  currentId: string;
  loadNextPage(): void;
  status: "pending" | "success" | "error";
  isFetchingPreviousPage: boolean;
  isFetchingNextPage: boolean;
  setCurrentId(id: string): void;
};

declare type ArticleResponse = {
  articleCount: number;
  articles: Article[];
};

declare type Article = {
  _id: string;
  category: string;
  tags: string;
  title: string;
  explanation: string;
  example: Example;
};

declare type Example = {
  snippet: string;
  description: string;
};
