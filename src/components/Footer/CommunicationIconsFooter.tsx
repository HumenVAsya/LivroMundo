import { Box } from "@mui/material";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { CommunicationItem } from "./ComunicationItem";

export const CommunicationInfoFooter = () => {
  const communicationData = [
    {
      Icon: RoomRoundedIcon,
      text: "Statensingel 52, 3039 LP Rotterdam, Netherlands",
      link: "https://www.google.com/maps?q=Statensingel+52,+3039+LP+Rotterdam,+Netherlands",
    },
    { Icon: CallRoundedIcon, text: "+31 6 18426954", link: "tel:+31618426954" },
    { Icon: EmailRoundedIcon, text: "info@moviestore.nl", link: "mailto:info@moviestore.nl" },
  ];

  return (
    <Box>
      {communicationData.map((item, index) => (
        <CommunicationItem
          key={index}
          Icon={item.Icon}
          text={item.text}
          link={item.link}
        />
      ))}
    </Box>
  );
};