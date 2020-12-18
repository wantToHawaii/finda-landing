import { useEffect, useState } from "react";
import { request } from "../utils";

const useQuery = (query) => {
  const [result, setResult] = useState({
    loading: true,
    data: undefined,
    error: undefined,
  });

  if (!query) {
    throw new Error('Hook useQuery: invalid "query" parameter');
  }

  useEffect(() => {
    request(query)
      .then(({ data } = {}) => {
        setResult({ data, loading: false, error: undefined });
      })
      .catch((error) => {
        setResult({ data: undefined, loading: false, error });
      });
  }, [query]);

  return result;
};

export default useQuery;
