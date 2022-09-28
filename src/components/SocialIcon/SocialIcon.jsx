import "./socialIcon.scss";

const SocialIcon = ({ children, name }) => {
  return <div className={`social-icon ${name}`}>{children}</div>;
};

export default SocialIcon;
