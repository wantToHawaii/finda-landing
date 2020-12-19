// import useQuery from "../../hooks/useQuery";
// import { DefaultQuery } from "../../graphql/queries";
import HeroSection from "../../components/HeroSection/HeroSection";
import style from "./style";

const Home = () => {
  // const { data, loading, error } = useQuery(DefaultQuery);
  // console.log({ data, loading, error });
  return (
    <main class={style.home}>
      <HeroSection />
    </main>
  );
};

export default Home;
