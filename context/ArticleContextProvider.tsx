import { createContext, useState, Dispatch, SetStateAction } from "react";
import reactData from "../assets/ReactJS.json";
import useGetArticles from "../hooks/query/useGetArticles";

const defaultContext: ArticleContext = {
  articles: {} as Article[],
  index: 0,
  setIndex: () => {},
  currentId: "",
  setNextId: () => {},
  isLoading: false,
  hasNextPage: false,
  fetchNextPage: async () => {},
};

export const ArticleContext = createContext(defaultContext);

type Props = {
  children: React.JSX.Element;
};

const ArticleContextProvider = ({ children }: Props) => {
  const [index, setIndex] = useState(1);
  const { data, isLoading, refetch, hasNextPage, fetchNextPage } =
    useGetArticles();

  const articles = data?.pages?.map((page) => page).flat();

  // const articles = reactData.data as Article[]; //TODO:
  return (
    <ArticleContext.Provider
      value={{
        articles: articles ?? undefined,
        index: index,
        setIndex: setIndex,
        currentId: "test",
        setNextId: () => {},
        fetchNextPage: fetchNextPage,
        hasNextPage: hasNextPage,
        isLoading: isLoading,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
