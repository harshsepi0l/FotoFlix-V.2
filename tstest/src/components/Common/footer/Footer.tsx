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
        <Link to="/login"> Test 1</Link>
        <Link to="/login"> Test 2</Link>
        <Link to="/login"> Test 3</Link>
        <Link to="/login"> Test 4</Link>
      </Box>
    </Box>
  );
}

export default Footer;
