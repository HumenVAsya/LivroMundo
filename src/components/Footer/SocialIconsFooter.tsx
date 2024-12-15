import { Box } from "@mui/material";
import { theme } from "../../theme/theme"; 
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const socialIcons = [
  { component: FacebookRoundedIcon },
  { component: InstagramIcon },
  { component: TwitterIcon },
  { component: PinterestIcon },
];

export const SocialIconsFooter = () => (
  <Box sx={{ display: "flex", gap: "12px" }}>
    {socialIcons.map((icon, index) => {
      const IconComponent = icon.component;
      return (
        <Box
          key={index}
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: theme.palette.secondary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "12px 0",
          }}
        >
          <IconComponent sx={{ width: "20px", height: "20px" }} />
        </Box>
      );
    })}
  </Box>
);
