import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import NavBar from "../components/NavBar";
import JobList from "../components/JobList/JobList";
import JobListAxios from "../components/JobList/JobListAxios";
import BackgroundImage from "../utils/slika.avif";
import Footer from "../components/Footer/Footer";

const BackgroundBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(0.5px)", // Efekat zamagljenja
  zIndex: -1, // Da bi pozadinska slika bila iza sadržaja
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

const Home = (props: Props) => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundBox />
      <ContentBox>
        <NavBar />
        {/*<JobList />*/}
        <JobListAxios />
      </ContentBox>
      <Footer />
    </Box>
  );
};

export default Home;
