import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface CostTypographyProps extends TypographyProps {
  children: ReactNode;
}

export const CostTypShop: FC<CostTypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontSize: { xs: "12px", md: "16px" },
        lineHeight: { xs: "18px", md: "24px" },
        fontWeight: "400",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
