import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const getApi = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return [response, getApi, isLoading, hasError];
};

export default useFetch;
