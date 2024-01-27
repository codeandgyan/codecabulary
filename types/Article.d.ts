declare type ArticleContext = {
  isLoading: boolean;
  articles: Article[] | undefined;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currentId: string;
  setNextId(): void;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<TData, TError>>;
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
