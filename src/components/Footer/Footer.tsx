import {
  LocationOn,
  Email,
  LinkedIn,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import "./footer.css";
import { styled } from "@mui/system";

const StyledLink = styled("a")({
  textDecoration: "none",
  color: "#175e5e",
  fontWeight: 500,
  fontSize: "18px",

  ":hover": {
    textDecoration: "underline",
  },
});

const Footer = () => {
  return (
    <div className="footer-container">
      <h1
        className="display-3 fw-bold ls-tight"
        style={{
          fontFamily: "Apple Chancery, cursive",
          fontSize: "54px",
          marginLeft: "50px",
        }}
      >
        <span style={{ color: "#175e5e" }}>The best offer</span> <br />
        <span style={{ color: "#a9a965e3" }}>for your career</span>
      </h1>
      {/* <p className="footer-title">JobMatch</p> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/about">About us</StyledLink>
        <StyledLink href="/companies">Companies</StyledLink>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#175e5e",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        <p style={{ marginBottom: "0px" }}>Follow Us</p>
        <span className="">
          <LinkedIn
            style={{
              width: "18px",
              height: "18px",
              marginRight: "2px",
              marginLeft: "0px",
            }}
          />{" "}
          <StyledLink href="https://www.linkedin.com">LinkedIn</StyledLink>
        </span>
        <span className="">
          <Facebook
            style={{
              width: "18px",
              height: "18px",
              marginRight: "2px",
              marginLeft: "0px",
            }}
          />{" "}
          <StyledLink href="https://www.facebook.com">Facebook</StyledLink>
        </span>
        <span className="">
          <Instagram
            style={{
              width: "18px",
              height: "18px",
              marginRight: "2px",
              marginLeft: "0px",
            }}
          />{" "}
          <StyledLink href="https://www.instagram.com">Instagram</StyledLink>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#175e5e",
          fontWeight: "500",
          fontSize: "18px",
          marginRight: "100px",
        }}
      >
        <p style={{ marginBottom: "0px" }}>Contact Us</p>
        <span className="">
          <LocationOn
            style={{
              width: "18px",
              height: "18px",
              marginRight: "2px",
              marginLeft: "0px",
            }}
          />{" "}
          Stup, Sarajevo
        </span>
        <span className="">
          <Email
            style={{
              width: "18px",
              height: "18px",
              marginRight: "3px",
              marginLeft: "0px",
            }}
          />{" "}
          melisa.geca@gmail.com
        </span>
      </div>
      {/* <div
        style={{
          display: "flex",
          gap: "200px",
          marginRight: "150px",
          // alignItems: "center",
        }}
      ></div> */}
    </div>
  );
};

export default Footer;
