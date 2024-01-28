import { createContext, useState, Dispatch, SetStateAction } from "react";
import reactData from "../assets/ReactJS.json";
import useGetArticles from "../hooks/query/useGetArticles";

const defaultContext: ArticleContext = {
  articles: {} as Article[],
  currentId: "",
  loadNextPage: async () => {},
  status: "pending",
  isFetchingPreviousPage: false,
  isFetchingNextPage: false,
  setCurrentId: () => {},
};

export const ArticleContext = createContext(defaultContext);

type Props = {
  children: React.JSX.Element;
};

const ArticleContextProvider = ({ children }: Props) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    status,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useGetArticles();

  const [currentArticleId, setCurrentArticleId] = useState("");

  const articles = data?.pages?.map((page) => page).flat();

  // const articles = reactData.data as Article[]; //TODO:
  return (
    <ArticleContext.Provider
      value={{
        articles: articles ?? undefined,
        currentId: "test",
        loadNextPage: () => {
          if (hasNextPage) {
            fetchNextPage();
          }
        },
        status: status,
        isFetchingPreviousPage: isFetchingPreviousPage,
        isFetchingNextPage: isFetchingNextPage,
        setCurrentId: (id: string) => {
          setCurrentArticleId(id);
        },
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
