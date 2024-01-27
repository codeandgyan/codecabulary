import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
// import https from "https";

function useGetArticles() {
  const fetchArticles = async (pageParam = 1) => {
    // const agent = new https.Agent({
    //   rejectUnauthorized: false,
    // });

    const { data } = await axios.get<Article[]>(
      "http://localhost:3000/articles",
      {
        // httpsAgent: agent,
        params: {
          page: pageParam,
        },
      }
    );
    return data;
  };

  return useInfiniteQuery({
    queryKey: ["fetchArticles"],
    queryFn: ({ pageParam }) => fetchArticles(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(
        "lastPage.length",
        lastPage.length,
        "allPages.length ------->>>>>>>>",
        allPages.length
      );
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
}

export default useGetArticles;
