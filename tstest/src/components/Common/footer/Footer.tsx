import { Box } from "@mui/material";
import React from "react";
import "./Footer.css";
import fotoLogo from "../../../components/ImageLogo/footerLogo.svg";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
    <Box className="footer-container">
      <Box className="footer-item">Copyright © 2022 RunMommy</Box>
      <Box className="footer-item">
        <img
          style={{ color: "#937DC2", width: 200, height: 90 }}
          src={fotoLogo}
          alt="logo"
        />
      </Box>
      <Box className="footer-item">
        <p>Quick Links</p>
        <Link to="/"> Landing Page</Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Sign Up</Link>
        <Link to="/homepage"> Account Page</Link>
      </Box>
    </Box>
  );
}

export default Footer;
