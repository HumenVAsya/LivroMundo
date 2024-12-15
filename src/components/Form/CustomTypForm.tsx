import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface CustomTypographyProps {
  children: ReactNode;
}

export const CustomTypForm: FC<CustomTypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <Typography fontFamily="inter" color="white" padding={"8px 0"} {...props}>
      {children}
    </Typography>
  );
};
