import "./card.scss";
import { ImFrustrated2 } from "react-icons/im";

const Card = ({ title, count, className, Icon }) => {
  return (
    <div className={`dashboardCard ${className}`}>
      <ImFrustrated2 className={`${className}--base-icon base-icon`} />
      <div className="dashboardCard__hader">
        <h4>
          <span>{title}</span>
          {count}
        </h4>
        <Icon className={`${className}--icon icon`} />
      </div>
    </div>
  );
};

export default Card;
