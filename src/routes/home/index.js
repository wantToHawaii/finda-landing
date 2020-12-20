import useQuery from "../../hooks/useQuery";
import { DefaultQuery, FeaturesQuery } from "../../graphql/queries";
import Helmet from "preact-helmet";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import PageSpinner from "../../components/Spinner/PageSpinner";
import style from "./style";

const Home = () => {
  const { data, loading } = useQuery(DefaultQuery);
  const { data: featuresResponse, loading: featuresLoading } = useQuery(
    FeaturesQuery
  );

  const { Title, Keywords, SEO_Description } = data?.default ?? {
    Title: "",
    Keywords: "",
    SEO_Description: "",
  };

  const defaultData = data?.default ?? {};
  const featuresData = featuresResponse?.features ?? [];

  const pageLoading = loading && featuresLoading;

  return (
    <>
      {!pageLoading && (
        <Helmet
          title={Title}
          meta={[
            { name: "description", content: SEO_Description },
            { name: "keywords", content: Keywords },
          ]}
        />
      )}

      <PageSpinner loading={pageLoading} />

      <main class={`${style.home} ${pageLoading ? style.home_loading : ""}`}>
        <HeroSection {...defaultData} />
        <div class={style.features_container}>
          {featuresData.map((feature, index) => (
            <FeatureSection
              {...feature}
              swapContentSides={Boolean(index % 2)}
            />
          ))}
        </div>
        <Footer {...defaultData} />
      </main>
    </>
  );
};

export default Home;
