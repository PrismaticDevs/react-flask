import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <span title="https://github.com/PrismaticDevs">
          <a
            href="https://github.com/PrismaticDevs"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" />
            <div>PrismaticDevs</div>
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
