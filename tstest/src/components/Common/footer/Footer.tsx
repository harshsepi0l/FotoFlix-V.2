import { Box } from "@mui/material";
import React from "react";
import "./Footer.css";
import fotoLogo from "../../../components/ImageLogo/footerLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Footer() {

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  });

  return (
    <Box className="footer-container">
      <Box className="footer-item">Copyright © 2022 RunMommy</Box>
      <Box className="footer-item footer-item-link" >
        <img
          style={{ color: "#937DC2", width: 200, height: 90 }}
          src={fotoLogo}
          alt="logo"
        />
      </Box>
      {!isMobile && (
        <Box className="footer-item ">
          <p><b >Quick Links</b></p>
          <Link className="footer-link" to="/"> Landing Page</Link>
          <Link className="footer-link" to="/login"> Login </Link>
          <Link className="footer-link" to="/signup"> Sign Up</Link>
          <Link className="footer-link" to="/homepage"> Account Page</Link>
        </Box>
      )}

    </Box>
  );
}

export default Footer;
