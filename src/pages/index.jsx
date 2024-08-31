import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import { WEBSITE_NAME } from "../config/Constant";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={WEBSITE_NAME} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;