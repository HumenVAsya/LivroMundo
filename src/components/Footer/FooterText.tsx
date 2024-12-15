import { Typography } from "@mui/material";

export const FooterText = ({ sx }: { sx?: any }) => (
  <Typography
    sx={{
      fontFamily: "inter",
      fontSize: "12px",
      lineHeight: "14.52px",
      fontWeight: "400",
      ...sx,
    }}
  >
    ©"LivroMundo" JSC, 2023 - 2024
  </Typography>
);