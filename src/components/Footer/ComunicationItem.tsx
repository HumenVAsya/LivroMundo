import { Box, SvgIconProps, Typography } from "@mui/material";

interface CommunicationItemProps {
  Icon: React.ComponentType<SvgIconProps>;
  text: string;
  link: string;
}

export const CommunicationItem = ({
  Icon,
  text,
  link,
}: CommunicationItemProps) => (
  <Box
    sx={{
      margin: "12px 0",
      display: "flex",
      alignItems: "center",
      columnGap: "20px",
    }}
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        gap: "30px",
      }}
    >
      <Icon color="secondary" sx={{ fontSize: 22 }} />
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "14px",
          lineHeight: "21px",
          fontWeight: "400",
          maxWidth: "210px",
        }}
      >
        {text}
      </Typography>
    </a>
  </Box>
);
