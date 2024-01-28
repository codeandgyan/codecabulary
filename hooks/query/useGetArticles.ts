import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
// import https from "https";

function useGetArticles() {
  const fetchArticles = async (pageParam = 1) => {
    console.log(`Fetching articles for page: ${pageParam}`);
    const { data } = await axios.get<Article[]>(
      `http://127.0.0.1:3000/articles?page=${pageParam}`
    );
    return data;
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
