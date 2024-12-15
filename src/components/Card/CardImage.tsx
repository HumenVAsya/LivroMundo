import Card from "@mui/material/Card";
import { FC } from "react";

interface CardImageProps {
  img: string;
}

export const CardImage: FC<CardImageProps> = ({ img }) => {
  return (
    <Card sx={{ minWidth: 309, height: 276, borderRadius: "30px" }}>
      <img
        src={img}
        style={{ width: "100%", height: "100%", borderRadius: "30px" }}
        alt="Book cover"
      />
    </Card>
  );
};

