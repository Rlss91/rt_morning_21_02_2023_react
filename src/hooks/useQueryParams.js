import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let qParams = {};
  for (const [key, value] of searchParams.entries()) {
    qParams[key] = value;
  }
  return qParams;
};

export default useQueryParams;
