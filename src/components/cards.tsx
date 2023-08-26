//@ts-nocheck
import React, { useEffect } from "react";
import CardItem from "./cardItem/cardItem.tsx";
import { styled } from "@mui/material";
import { dispatch } from "../redux/store.js";
import { getLandingPageData } from "../redux/slices/landingPageSlice.js";
import { useSelector } from "react-redux";
import PaginationRounded from "./pagination.tsx";

const SearchCardsContainer = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 2),
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
}));
const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const Cards = () => {
  const results = useSelector(
    (state) => state.landingPage?.data?.data?.characters?.results
  );

  let query = `query {
    characters(page: 1, filter: { name: "rick" }) {
       info {
         count
       }
       results {
         name,image,status,gender
       }
     }
     location(id: 1) {
       id
     }
     episodesByIds(ids: [1, 2]) {
       id
     }
   }`;

  useEffect(() => {
    dispatch(
      getLandingPageData({
        query,
      })
    );
  }, []);

  return (
    <StyledContainer>
      <SearchCardsContainer>
        {results?.map((item: any, index) => (
          <CardItem
            title={item?.name}
            gender={item?.gender}
            img={item?.image}
            status={item.status}
            key={index}
          />
        ))}
      </SearchCardsContainer>
      <PaginationRounded />
    </StyledContainer>
  );
};

export default Cards;
