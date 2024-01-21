declare type ArticleContext = {
  articles: Article[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currentId: string;
  setNextId(): void;
};

declare type Article = {
  id: string;
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
