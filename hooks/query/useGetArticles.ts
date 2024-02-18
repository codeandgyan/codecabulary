import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { CONFIG } from "../../shared/constants";
// import https from "https";

function useGetArticles() {
  const fetchArticles = async (pageParam = 1) => {
    console.log(`Fetching articles for page: ${pageParam}`);
    const { data } = await axios.get<ArticleResponse>(
      `http://192.168.29.59:3000/articles?page=${pageParam}&&limit=${CONFIG.ITEMS_LIMIT_PER_PAGE}`
    );
    return data.articles;
  };

  return useInfiniteQuery({
    queryKey: ["fetchArticles"],
    queryFn: ({ pageParam }) => fetchArticles(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
}

export default useGetArticles;
