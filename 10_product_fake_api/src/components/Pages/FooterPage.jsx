import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        <p>
          Follow us on: {" "}
          <a href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
