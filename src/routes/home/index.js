// import useQuery from "../../hooks/useQuery";
// import { DefaultQuery } from "../../graphql/queries";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import style from "./style";

const Home = () => {
  // const { data, loading, error } = useQuery(DefaultQuery);
  // console.log({ data, loading, error });
  return (
    <main class={style.home}>
      <HeroSection />
      <div class={style.features_container}>
        <FeatureSection />
        <FeatureSection swapContentSides />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
