import { Helmet } from "react-helmet";

const AppTitle = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default AppTitle;
