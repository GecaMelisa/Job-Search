import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import BackgroundImage from "../utils/slika.avif";
import TeamImage from "../utils/teamImage4.jpg";
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
  filter: "blur(0.2px)",
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

const ContentContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  padding: "50px 50px",
  backgroundColor: "transaprent",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  marginTop: "70px",
  marginBottom: "70px",
  maxWidth: "1500px",
});

const Card = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  },
  flex: 1,
  height: "100%", // Ensures cards take full height of their container
});

const Heading = styled(Typography)({
  fontSize: "2.5em",
  fontWeight: 700,
  color: "#175e5e",
  marginBottom: "20px",
  textAlign: "center",
});

const SubHeading = styled(Typography)({
  fontSize: "2em",
  fontWeight: 600,
  color: "#175e5e",
  marginTop: "20px",
  marginBottom: "20px",
  textAlign: "center",
});

const Paragraph = styled(Typography)({
  textAlign: "justify",
  fontSize: "1.1em",
  lineHeight: "1.8",
  marginBottom: "20px",
});

const ImageStyled = styled("img")({
  width: "75%",
  borderRadius: "8px",
});

const FounderCard = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  },
  flex: 1,
  height: "100%", // Ensures cards take full height of their container
});

const FounderImageStyled = styled("img")({
  width: "75%",
  height: "auto",
  borderRadius: "4px",
  marginBottom: "20px",
});

const Separator = styled("div")({
  width: "50%",
  height: "2px",
  backgroundColor: "#175e5e",
  margin: "40px auto",
});

const ContactBox = styled(Box)({
  textAlign: "center",
  padding: "40px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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
  borderRadius: "8px",
});

const About = () => {
  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <BackgroundBox />
        <NavBar />
        <ContentContainer>
          <Grid container spacing={4}>
            {/* Sekcija sa osnivačem */}
            <Grid item xs={12} md={6}>
              <FounderCard>
                <SubHeading variant="h2">Meet the Founder</SubHeading>
                <FounderImageStyled src={FounderImage} alt="Founder" />
                <Paragraph>
                  As the main driver and lead developer of both the backend and
                  frontend, including databases and system architecture, I am
                  deeply committed to the success of our platform. My role
                  encompasses overseeing the development process, ensuring the
                  seamless integration of technologies, and driving innovation
                  to deliver the best possible solutions for our users.
                </Paragraph>
                <SubHeading variant="h5">Melisa Geca</SubHeading>
              </FounderCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <ImageStyled src={TeamImage} alt="Our Team" />
                <SubHeading variant="h2">Our Team</SubHeading>
                <Paragraph>
                  Meet our dedicated team that works tirelessly to connect
                  talented individuals with exceptional career opportunities.
                  Our diverse backgrounds and expertise drive us to deliver the
                  best results for our clients and candidates.
                </Paragraph>
              </Card>
            </Grid>
          </Grid>
          <Separator />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <ImageStyled src={MissionImage} alt="Our Mission" />
                <SubHeading variant="h2">Our Mission</SubHeading>
                <Paragraph>
                  Our mission is to bridge the gap between talent and
                  opportunity. We strive to make the job search process seamless
                  and effective for job seekers, while providing employers with
                  top-tier candidates who align with their values and needs. We
                  are committed to creating a platform that fosters professional
                  growth and career advancement for everyone involved. By
                  leveraging technology and insights, we aim to transform the
                  way people find their ideal jobs and how companies discover
                  their future stars.
                </Paragraph>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactBox>
                <SubHeading variant="h2">Get in Touch</SubHeading>
                <GetInTouchText>
                  <Paragraph>
                    Have questions or want to get in touch with us? We’d love to
                    hear from you. Whether you're looking for more information
                    or want to discuss opportunities, feel free to reach out to
                    us. Our team is here to assist you with any inquiries you
                    may have.
                  </Paragraph>
                  <Typography variant="h6" color="#000">
                    Email: contact@yourplatform.com
                  </Typography>
                  <Typography variant="h6" color="#000">
                    Location: Stup, Sarajevo
                  </Typography>
                </GetInTouchText>
                <GetInTouchImage src={ContactBackgroundImage} alt="Contact" />
              </ContactBox>
            </Grid>
          </Grid>
        </ContentContainer>
        <Footer />
      </Box>
    </>
  );
};

export default About;
