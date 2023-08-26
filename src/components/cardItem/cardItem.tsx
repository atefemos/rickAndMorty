//@ts-nocheck
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton, Stack, styled } from "@mui/material";
import { useSelector } from "react-redux";

const StyledCard = styled("div")(({ theme }) => ({
  width: "346px",
  margin: "8px",
  border: "1px solid gray",
  borderRadius: "6px",
}));

export interface Props {
  title: string;
  status: string;
  gender: string;
  image: string;
}

export default function CardItem(props: Props) {
  const { pending } = useSelector((state) => state.landingPage);

  const statusColor = (status: string) => {
    switch (status) {
      case "Alive":
        return "#7A9163";
      case "Dead":
        return "#AB302F";
      case "unknown":
        return "#7f7f7f";

      default:
        return "blue";
    }
  };

  return (
    <StyledCard>
      {pending ? (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" width={346} height={260} />
          <Skeleton
            variant="rectangular"
            width={346}
            height={60}
            animation="wave"
          />
        </Stack>
      ) : (
        <CardActionArea>
          <Typography
            variant="body2"
            fontWeight={900}
            color={statusColor(props.status)}
            padding={1}
            width={60}
            borderRadius={2}
            top={2}
            left={2}
            position={"absolute"}
            style={{ backgroundColor: "white" }}
            data-testid="status"
          >
            {props.status}
          </Typography>
          <CardMedia
            component="img"
            height="260"
            image={props.img}
            alt="green iguana"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              data-testid="title"
            >
              {props.title}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              data-testid="gender"
              borderBottom={"1px solid blue"}
            >
              {props.gender}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </StyledCard>
  );
}
