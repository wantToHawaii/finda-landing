// import useQuery from "../../hooks/useQuery";
// import { DefaultQuery } from "../../graphql/queries";
import Helmet from "preact-helmet";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import PageSpinner from "../../components/Spinner/PageSpinner";
import style from "./style";

const Home = () => {
  // const { data, loading, error } = useQuery(DefaultQuery);
  // console.log({ data, loading, error });

  const pageLoading = false;

  return (
    <>
      <Helmet
        title="Some title"
        meta={[
          { name: "description", content: "some description" },
          { name: "keywords", content: "keyword1,keyword2" },
        ]}
      />

      <PageSpinner loading={pageLoading} />

      <main class={`${style.home} ${pageLoading ? style.home_loading : ""}`}>
        <HeroSection />
        <div class={style.features_container}>
          <FeatureSection />
          <FeatureSection swapContentSides />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
