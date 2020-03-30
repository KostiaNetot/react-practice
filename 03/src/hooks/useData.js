import {useEffect, useState} from "react";
import apiService from "../services/apiService";

function useData(path, initVal) {
  const [data, setData] = useState(initVal);
  const [isFethcing, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    apiService.get(path)
      .then(res => {
        setData(res.data);
        setFetching(false)
      });
  }, []);

  return [data, isFethcing];
}

export default useData;
