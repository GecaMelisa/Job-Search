import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import NavBar from "../components/NavBar";
import JobListAxios from "../components/JobList/JobListAxios";
import BackgroundImage from "../utils/slika.avif";
import Footer from "../components/Footer/Footer";
import ChatBot from "../components/ChatBot/Chatbot";

const BackgroundBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(0.5px)",
  zIndex: -1,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: -1,
  },
});

const ContentBox = styled(Box)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

type Props = {};

const CompanyJobs = (props: Props) => {
  const urlParams = new URLSearchParams(window.location.search);
  const companyId = urlParams.get("companyId");
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundBox />
      <ContentBox>
        <NavBar />
        <JobListAxios companyId={companyId || ""} />
      </ContentBox>
      <ChatBot />
      <Footer />
    </Box>
  );
};

export default CompanyJobs;
