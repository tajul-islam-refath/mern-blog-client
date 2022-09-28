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
      <div className="row">
        <div className="col-md-3">
          <SocialIcon name="social-twitter">
            <FaTwitter />
          </SocialIcon>
        </div>
        <div className="col-md-3">
          <SocialIcon>
            <FaLinkedin />
          </SocialIcon>
        </div>
        <div className="col-md-3">
          <SocialIcon>
            <FaFacebookSquare />
          </SocialIcon>
        </div>
        <div className="col-md-3">
          <SocialIcon>
            <FaInstagramSquare />
          </SocialIcon>
        </div>
      </div>
    </section>
  );
};

export default Social;
