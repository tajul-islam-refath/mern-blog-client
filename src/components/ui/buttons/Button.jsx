import "./buttons.scss";

const Button = ({ type, className, text, ...props }) => {
  return (
    <button type={type} className={`button ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
