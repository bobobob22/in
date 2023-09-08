import { accountantUrl } from "../api/const";
import { Accountants } from "../components/accountant/Accountants/Accountants";
import { useFetchWithPagination } from "../hooks/useFetchwIthPagination";
import { IAccountInfo } from "../types/accountant";
import { Loader } from "../ui/Loader/Loader";

export const AccountantPage = () => {
  const {
    data,
    loading,
    error,
    nextPage,
  } = useFetchWithPagination<IAccountInfo>({
    url: accountantUrl,
    initialPage: 1,
    initialPageSize: 4,
  });


  if (error) {
    return <p>Error: </p>;
  }

  console.log("DDDDDDDDDDDD", data)


  if (!data) {
    return <p>There is no more data</p>;
  }

  const showMore = () => {
    nextPage()
  };



  return (
    <>
      <Accountants accountantsList={data} />
      {loading ? (
        <Loader />
      ) : (
        <button onClick={showMore} disabled={loading}>
          Pokaz wiecej
        </button>
      )}
    </>
  );
};
