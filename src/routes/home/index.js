import useQuery from "../../hooks/useQuery";
import { DefaultQuery } from "../../graphql/queries";
import style from "./style";

const Home = () => {
  const { data, loading, error } = useQuery(DefaultQuery);
  console.log({ data, loading, error });
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;
