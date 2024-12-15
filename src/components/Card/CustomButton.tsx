import Button from "@mui/material/Button";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { theme } from "../../theme/theme"; 

interface CustomButtonProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const CustomButton: FC<CustomButtonProps> = ({ children, sx, ...props }) => {
  return (
    <Button
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50px",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "19px",
        ...sx, 
      }}
      {...props}
    >
      {children}
    </Button>
  );
};


