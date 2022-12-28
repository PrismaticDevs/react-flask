import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <GitHubIcon className="icon" />
        <a
          href="https://github.com/PrismaticDevs"
          target="_blank"
          rel="noreferrer"
        >
          PrismaticDevs
        </a>
      </footer>
    </>
  );
};

export default Footer;
