import styled from "styled-components";
import { accountantUrl } from "../api/const";
import { Accountants } from "../components/accountant/Accountants/Accountants";
import { useFetchWithPagination } from "../hooks/useFetchwIthPagination";
import { IAccountInfo } from "../types/accountant";
import { Button } from "../ui/Button/Button";
import { Loader } from "../ui/Loader/Loader";

const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AccountantPage = () => {
  const { data, loading, error, nextPage } =
    useFetchWithPagination<IAccountInfo>({
      url: accountantUrl,
      initialPage: 1,
      initialPageSize: 4,
    });

  if (error) {
    return <p>Error: </p>;
  }

  if (!data) {
    return <p>There is no more data</p>;
  }

  const showMore = () => {
    nextPage();
  };

  return (
    <>
      <Accountants accountantsList={data} />

      {loading ? (
        <Loader />
      ) : (
        <ShowMoreWrapper>
          <Button onClick={showMore} disabled={loading}>
            Pokaz wiecej
          </Button>
        </ShowMoreWrapper>
      )}
    </>
  );
};
