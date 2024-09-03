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
      <div className="footer-title-container">
        <h1 className="footer-title">
          <span style={{ color: "#175e5e" }}>The best offer</span> <br />
          <span style={{ color: "#a9a965e3" }}> for your career</span>
        </h1>
      </div>
      <div className="footer-section">
        <p className="footer-heading">Quick Links</p>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/about">About us</StyledLink>
        <StyledLink href="/companies">Companies</StyledLink>
      </div>
      <div className="footer-section">
        <p className="footer-heading">Follow Us</p>
        <span>
          <LinkedIn className="footer-icon" />{" "}
          <StyledLink href="https://www.linkedin.com">LinkedIn</StyledLink>
        </span>
        <span>
          <Facebook className="footer-icon" />{" "}
          <StyledLink href="https://www.facebook.com">Facebook</StyledLink>
        </span>
        <span>
          <Instagram className="footer-icon" />{" "}
          <StyledLink href="https://www.instagram.com">Instagram</StyledLink>
        </span>
      </div>
      <div
        className="footer-section"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <p className="footer-heading">Contact Us</p>
        <span>
          <LocationOn className="footer-icon" /> Stup, Sarajevo
        </span>
        <span>
          <Email className="footer-icon" /> melisa.geca@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
