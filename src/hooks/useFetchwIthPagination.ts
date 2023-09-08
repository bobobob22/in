import { useState, useEffect } from "react";

export interface FetchWithPaginationResult<T> {
  results: T[];
}

interface FetchWithPaginationProps {
  url: string;
  initialPage?: number;
  initialPageSize?: number;
}

interface PaginatedData<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
  page: number;
  numberOfResults: number;
  setNumberOfResults: React.Dispatch<React.SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
}

export function useFetchWithPagination<T>({
  url,
  initialPage = 1,
  initialPageSize = 5,
}: FetchWithPaginationProps): PaginatedData<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [numberOfResults, setNumberOfResults] =
    useState<number>(initialPageSize);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}?page=${page}&results=${numberOfResults}`
        );
        if (!response.ok) {
          throw new Error("Response was wrong");
        }

        const jsonData: FetchWithPaginationResult<T> = await response.json();
        setLoading(false);

        setData((prevData) => [...prevData, ...jsonData.results]);

      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page, numberOfResults]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    data,
    loading,
    error,
    page,
    numberOfResults,
    setNumberOfResults,
    nextPage,
    prevPage,
  };
}
