import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="socials">
      <a className="socials__link socials__link">
        <FontAwesomeIcon className="socials__icon" icon={faFacebookSquare} />
      </a>

      <a className="socials__link socials__link">
        <FontAwesomeIcon className="socials__icon" icon={faPinterest} />
      </a>

      <a className="socials__link socials__link">
        <FontAwesomeIcon className="socials__icon" icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialLinks;
