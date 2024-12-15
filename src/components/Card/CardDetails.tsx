import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import {CustomButton} from "./CustomButton";

interface CardDetailsProps {
  title: string;
  cost: number;
}

export const CardDetails: FC<CardDetailsProps> = ({ title, cost }) => {
  return (
    <Card
      sx={{
        maxWidth: "307px",
        height: "106px",
        marginTop: "12px",
        borderRadius: "30px",
      }}
    >
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            paddingBlock: "13px",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "19px",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "139.5px",
              height: "39px",
              color: "red",
            }}
          >
            {cost} $
          </Typography>
          <CustomButton sx={{ width: "139.5px", height: "39px" }}>
            Buy
          </CustomButton>
        </Box>
      </CardActions>
    </Card>
  );
};
