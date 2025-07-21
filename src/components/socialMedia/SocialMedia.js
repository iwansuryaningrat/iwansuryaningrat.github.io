import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../repository/contacts";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        aria-label="GitHub Profile"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        aria-label="LinkedIn Profile"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.medium}
        className="icon-button medium"
        target="_blank"
        aria-label="Medium Profile"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        aria-label="Email"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.whatsapp}
        className="icon-button whatsapp"
        target="_blank"
        aria-label="WhatsApp"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        aria-label="Twitter Profile"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        aria-label="Instagram Profile"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
    </div>
  );
}
