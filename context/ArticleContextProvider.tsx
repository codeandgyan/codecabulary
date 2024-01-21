import { createContext, useState, Dispatch, SetStateAction } from "react";
import reactData from "../assets/ReactJS.json";

const defaultContext: ArticleContext = {
  articles: {} as Article[],
  index: 0,
  setIndex: () => {},
  currentId: "",
  setNextId: () => {},
};

export const ArticleContext = createContext(defaultContext);

type Props = {
  children: React.JSX.Element;
};

const ArticleContextProvider = ({ children }: Props) => {
  const [index, setIndex] = useState(1);
  const articles = reactData.data as Article[]; //TODO:
  return (
    <ArticleContext.Provider
      value={{
        articles: articles,
        index: index,
        setIndex: setIndex,
        currentId: "test",
        setNextId: () => {},
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
