import { useNavigate, useLocation } from 'react-router-dom';

export const useQueryParameter = (searchQueryParamName: string): string | null => {
  const location = useLocation();
  return (new URLSearchParams(location.search)).get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  return ({ key, value }: { key: string, value: string | undefined }) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
};
