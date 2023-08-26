//@ts-nocheck
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import { dispatch } from "../redux/store";
import { getLandingPageData } from "../redux/slices/landingPageSlice";

const StyledContainer = styled("div")(() => ({
  margin: "32px",
}));

export default function PaginationRounded() {
  const [pages, setPages] = React.useState(0);

  const count = useSelector(
    (state: any) => state.landingPage?.data?.data?.characters?.info?.count
  );
  const { search } = useSelector((state: any) => state.landingPage);

  React.useEffect(() => {
    setPages(Math.ceil(count / 10));
  }, [count]);

  let query = `query ($page: Int!, $name: String!) {
    characters(page: $page, filter: {name : $name} ) {
        info {
          count
        }
        results {
          name,
          image,
          status,
          gender
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
}`;

  const handleChangePagination = (e, page) => {
    dispatch(
      getLandingPageData({
        query,
        variables: { page, name: search },
      })
    );
  };

  return (
    <StyledContainer>
      <Pagination
        count={pages}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePagination}
      />
    </StyledContainer>
  );
}
