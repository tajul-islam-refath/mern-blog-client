import "./social.scss";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import NavTitle from "../NavTitle/NavTitle";
import SocialIcon from "../SocialIcon/SocialIcon";

const Social = () => {
  return (
    <section>
      <NavTitle text="Social" />
      <div className="row Social__row">
        <SocialIcon name="social-twitter">
          <FaTwitter />
        </SocialIcon>

        <SocialIcon name="social-twitter">
          <FaLinkedin />
        </SocialIcon>

        <SocialIcon name="social-facebook">
          <FaFacebookSquare />
        </SocialIcon>

        <SocialIcon name="social-insta">
          <FaInstagramSquare />
        </SocialIcon>
      </div>
    </section>
  );
};

export default Social;
