import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import BackgroundImage from "../utils/slika.avif";
import Partnerships from "../utils/partnerships5.png";
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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: -1,
  },
});

const ContentContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  padding: "50px 30px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
  marginTop: "70px",
  marginBottom: "70px",
  maxWidth: "1200px",
});

const EnhancedCard = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderRadius: "15px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.4)",
  },
  flex: 1,
  height: "100%",
});

const EnhancedHeading = styled(Typography)({
  fontSize: "2.5em",
  fontWeight: 600,
  color: "#175e5e",
  marginBottom: "15px",
  textAlign: "center",
});

const EnhancedSubHeading = styled(Typography)({
  fontSize: "2em",
  fontWeight: 600,
  color: "#175e5e",
  marginTop: "15px",
  marginBottom: "15px",
  textAlign: "center",
});

const EnhancedParagraph = styled(Typography)({
  textAlign: "justify",
  fontSize: "1.1em",
  lineHeight: "1.7",
  marginBottom: "15px",
  color: "#333",
});

const ImageStyled = styled("img")({
  width: "80%",
  maxWidth: "500px",
  borderRadius: "12px",
  marginBottom: "20px",
  marginTop: "68px",
});

const FounderCard = styled(EnhancedCard)({
  height: "auto",
});

const FounderImageStyled = styled("img")({
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  borderRadius: "12px",
  marginBottom: "20px",
});

const Separator = styled("div")({
  width: "60%",
  height: "2px",
  backgroundColor: "#175e5e",
  margin: "40px auto",
});

const ContactBox = styled(Box)({
  textAlign: "center",
  padding: "40px",
  backgroundColor: "#f5f5f5",
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
  padding: "40px",
  backgroundColor: "#f5f5f5",
  borderRadius: "12px",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
  marginTop: "40px",
});

const GetInTouchText = styled(Box)({
  flex: 1,
  padding: "20px",
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
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FounderCard>
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
              </FounderCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <EnhancedCard>
                <ImageStyled src={Partnerships} alt="Partnerships" />
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
              </EnhancedCard>
            </Grid>
          </Grid>
          <Separator />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <EnhancedCard>
                <ImageStyled src={MissionImage} alt="Our Mission" />
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
              </EnhancedCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <EnhancedCard style={{ height: "auto" }}>
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
                <Typography variant="h6" color="#000">
                  Email: contact@yourplatform.com
                </Typography>
                <Typography variant="h6" color="#000">
                  Location: Stup, Sarajevo
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
