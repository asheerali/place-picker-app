import { useEffect, useState } from "react";

function useFetch(fetchFn, initialValue) {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data.",
        });
      }

      setFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return { fetching, fetchedData, setFetchedData, error };
}

export default useFetch;
