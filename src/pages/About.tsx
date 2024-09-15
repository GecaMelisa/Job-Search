import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import BackgroundImage from "../utils/slika.avif";
import Partnerships from "../utils/partneri6.png";
import MissionImage from "../utils/job.jpg";
import FounderImage from "../utils/founder1.jpg";
import ContactBackgroundImage from "../utils/contactBackground.jpg";

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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: -1,
  },
});

const ContentContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  padding: "60px 20px",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  marginTop: "80px",
  marginBottom: "80px",
  maxWidth: "1200px",
});

const EnhancedCard = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: "#ffffff",
  border: "1px solid #e0e0e0",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  },
  flex: 1,
  height: "100%",
});

const EnhancedHeading = styled(Typography)({
  fontSize: "2.2em",
  fontWeight: 700,
  color: "#175e5e",
  marginBottom: "12px",
  textAlign: "center",
  lineHeight: "1.3",
});

const EnhancedSubHeading = styled(Typography)({
  fontSize: "1.6em",
  fontWeight: 600,
  color: "#175e5e",
  marginTop: "10px",
  marginBottom: "10px",
  textAlign: "center",
  lineHeight: "1.4",
});

const EnhancedParagraph = styled(Typography)({
  textAlign: "justify",
  fontSize: "1em",
  lineHeight: "1.6",
  marginBottom: "20px",
  color: "#555",
});

const ImageStyled = styled("img")({
  width: "100%",
  maxWidth: "370px",
  borderRadius: "12px",
  marginBottom: "15px",
  marginTop: "20px",
});

const ImageStylish = styled("img")({
  width: "100%",
  maxWidth: "450px",
  borderRadius: "12px",
  marginBottom: "15px",
  marginTop: "20px",
});
const FounderImageStyled = styled("img")({
  width: "100%",
  maxWidth: "350px",
  height: "auto",
  borderRadius: "12px",
  marginBottom: "15px",
});

const Separator = styled("div")({
  width: "40%",
  height: "2px",
  backgroundColor: "#175e5e",
  margin: "40px auto",
});

const ContactBox = styled(Box)({
  textAlign: "center",
  padding: "40px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
  marginTop: "40px",
});

const GetInTouchContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  padding: "30px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
  marginTop: "40px",
});

const GetInTouchText = styled(Box)({
  flex: 1,
  padding: "15px",
  textAlign: "left",
});

const GetInTouchImage = styled("img")({
  flex: 1,
  maxWidth: "100%",
  height: "auto",
  borderRadius: "12px",
});

const About = () => {
  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <BackgroundBox />
        <NavBar />
        <ContentContainer>
          <Grid container spacing={5} justifyContent={"center"}>
            <Grid item xs={12} md={5}>
              <EnhancedCard>
                <EnhancedSubHeading variant="h5">
                  Meet the Founder
                </EnhancedSubHeading>
                <FounderImageStyled src={FounderImage} alt="Founder" />
                <EnhancedParagraph>
                  As the main driver and lead developer of both the backend and
                  frontend, including databases and system architecture, I am
                  deeply committed to the success of our platform. My role
                  encompasses overseeing the development process, ensuring the
                  seamless integration of technologies, and driving innovation
                  to deliver the best possible solutions for our users.
                </EnhancedParagraph>
                <EnhancedSubHeading variant="h5">
                  Melisa Geca
                </EnhancedSubHeading>
              </EnhancedCard>
            </Grid>
            <Grid item xs={12} md={5}>
              <EnhancedCard>
                <EnhancedSubHeading variant="h4">
                  Our Partnerships
                </EnhancedSubHeading>
                <EnhancedParagraph>
                  We take pride in our strong partnerships with industry-leading
                  companies and organizations. Through these collaborations, we
                  enhance our platform's capabilities and offer our users
                  unparalleled opportunities. Our esteemed partners include
                  Infobip, International Burch University and Ministry of
                  Programming whose support and insights help us deliver
                  exceptional value to our community.
                </EnhancedParagraph>
                <ImageStyled src={Partnerships} alt="Partnerships" />
              </EnhancedCard>
            </Grid>
          </Grid>
          <Separator />
          <Grid container spacing={5} justifyContent={"center"}>
            <Grid item xs={12} md={5}>
              <EnhancedCard>
                <EnhancedSubHeading variant="h5">
                  Our Mission
                </EnhancedSubHeading>
                <EnhancedParagraph>
                  Our mission is to bridge the gap between talent and
                  opportunity. We strive to make the job search process seamless
                  and effective for job seekers, while providing employers with
                  top-tier candidates who align with their values and needs. We
                  are committed to creating a platform that fosters professional
                  growth and career advancement for everyone involved. By
                  leveraging technology and insights, we aim to transform the
                  way people find their ideal jobs and how companies discover
                  their future stars.
                </EnhancedParagraph>
                <ImageStylish src={MissionImage} alt="Our Mission" />
              </EnhancedCard>
            </Grid>
            <Grid item xs={12} md={5}>
              <EnhancedCard>
                <ImageStyled src={ContactBackgroundImage} alt="Contact" />
                <EnhancedSubHeading variant="h5">
                  Get in Touch
                </EnhancedSubHeading>
                <EnhancedParagraph>
                  Have questions or want to get in touch with us? We’d love to
                  hear from you. Whether you're looking for more information or
                  want to discuss opportunities, feel free to reach out to us.
                  Our team is here to assist you with any inquiries you may
                  have.
                </EnhancedParagraph>
                <Typography variant="h6" color="#175e5e">
                  Email: jobsearch@gmail.comcom
                </Typography>
                <Typography variant="h6" color="#175e5e">
                  Location: Stupska 19d, Sarajevo
                </Typography>
              </EnhancedCard>
            </Grid>
          </Grid>
        </ContentContainer>
        <Footer />
      </Box>
    </>
  );
};

export default About;
