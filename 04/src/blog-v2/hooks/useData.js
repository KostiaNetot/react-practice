import { useEffect, useState } from 'react';
import apiService from "../apiService";

export default function useData(path, initialValue, immediateLoading = true) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    if (immediateLoading) {
      setFetching(true);
      apiService.get(path).then(response => {
        setData(response.data);
        setFetching(false)
      })
    }
  }, [path, immediateLoading]);

  return [data, isFetching]
}
