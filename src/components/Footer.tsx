import { Box, Container } from "@mui/material";
import { theme } from "../theme/theme";
import { Logo } from "./Header/logo";
import { SocialIconsFooter } from "./Footer/SocialIconsFooter";
import { CommunicationInfoFooter } from "./Footer/CommunicationIconsFooter";
import { FooterText } from "./Footer/FooterText";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "332px", md: "247px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: { xs: "center", md: "space-between" },
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "start" },
            flexDirection: "column",
          }}
        >
          <Logo
            display={{ xs: "none", md: "flex" }}
            width={"53px"}
            height={"58px"}
            marginRight={"29px"}
            fontSize={"34px"}
            lineHeight={"41.45px"}
          />
          <Logo
            display={{ xs: "flex", md: "none" }}
            width={"39px"}
            height={"43px"}
            marginRight={"4px"}
            fontSize={"16px"}
            lineHeight={"19.5px"}
            flexGrow={1}
          />
          <SocialIconsFooter />
          <FooterText sx={{ display: { xs: "none", md: "flex" } }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CommunicationInfoFooter />
          <FooterText sx={{ display: { xs: "display", md: "none" } }} />
        </Box>
      </Container>
    </Box>
  );
};
