import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContextProvider";

const useArticleContext = () => {
  return useContext(ArticleContext);
};

export default useArticleContext;
