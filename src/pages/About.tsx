import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
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

const About = (props: Props) => {
  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <BackgroundBox />
        <ContentBox>
          <NavBar />
          <Box
            sx={{
              maxWidth: "800px",
              margin: "auto",
              padding: "40px",
              color: "#fff",
            }}
          >
            <h1
              style={{
                color: "#175e5e",
                fontSize: "2.5em",
                marginBottom: "20px",
              }}
            >
              About Us
            </h1>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
              }}
            >
              Welcome to [Your Platform Name]! At [Your Platform Name], we
              believe that the right job can transform a life, and the right
              person can transform a business. Our mission is to connect
              talented individuals with exciting career opportunities, helping
              both job seekers and employers achieve their goals.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              **Our Story**
              <br />
              Founded in [Year], [Your Platform Name] was born out of a passion
              for innovation and a commitment to excellence in the recruitment
              industry. Our team of experts has decades of combined experience
              in talent acquisition, HR, and technology, making us uniquely
              positioned to understand the challenges and needs of both
              candidates and employers.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              **What We Offer**
              <br />
              - **Job Listings:** Explore thousands of job openings across
              various industries, tailored to meet your career aspirations.
              <br />
              - **Company Profiles:** Learn more about the companies behind the
              job postings. Our detailed company profiles provide insights into
              their culture, values, and mission.
              <br />- **Career Resources:** From resume tips to interview
              preparation, we offer a range of resources designed to help you
              succeed in your job search.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              **Our Values**
              <br />
              - **Integrity:** We are committed to honesty and transparency in
              everything we do.
              <br />
              - **Innovation:** We embrace new ideas and technologies to better
              serve our users.
              <br />- **Excellence:** We strive to exceed expectations and
              deliver outstanding results.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              **Get in Touch**
              <br />
              We are here to support you every step of the way. Whether you are
              a job seeker looking for your next opportunity or an employer
              searching for the perfect candidate, our team is ready to assist
              you.
              <br />
              - **Location:** Stup, Sarajevo
              <br />- **Email:** melisa.geca@gmail.com
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              **Connect with Us**
              <br />
              Stay updated on the latest job opportunities and company news by
              following us on social media:
              <br />
              - [LinkedIn Icon] [LinkedIn]
              <br />
              - [Facebook Icon] [Facebook]
              <br />- [Instagram Icon] [Instagram]
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.2em",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              **Join Us**
              <br />
              At [Your Platform Name], we are more than just a job search
              platform. We are a community dedicated to helping you achieve your
              career goals. Join us today and take the next step in your
              professional journey.
            </p>
          </Box>
        </ContentBox>
        <Footer />
      </Box>
    </>
  );
};

export default About;
