// import useQuery from "../../hooks/useQuery";
// import { DefaultQuery } from "../../graphql/queries";
import style from "./style";
import findaLogo from "../../assets/images/logo-finda.svg";
import iconAppStore from "../../assets/images/icon-apple.svg";
import iconGooglePlay from "../../assets/images/icon-android.svg";
import Button from "../../components/Button/Button";
import imagePicnic from "../../assets/images/hero-image-picnic.png";

const Home = () => {
  // const { data, loading, error } = useQuery(DefaultQuery);
  // console.log({ data, loading, error });
  return (
    <main class={style.home}>
      <section class={style.section_hero}>
        <div class={style.container}>
          <div class={style.logo_container}>
            <img src={findaLogo} alt="Finda" />
          </div>

          <div class={style.row}>
            <div class={style.content}>
              <h1 class={style.title}>
                <span>Finda</span>
                <small>more than a social app</small>
              </h1>
              <p class={style.subtitle}>
                Create meaningful connections by <span>finding</span> people
                based on
                <strong> languages, interests,</strong> and{" "}
                <strong>nationalities.</strong>
              </p>
              <div class={style.actions}>
                <Button
                  className={style.button}
                  href="https://apps.apple.com/us/app/finda-me/id1450441578?ls=1"
                  target="blank"
                  title="Finda on App Store"
                  icon={iconAppStore}
                />
                <Button
                  className={style.button}
                  href="https://play.google.com/store/apps/details?id=com.pureagency.finda&hl=en"
                  target="blank"
                  title="Finda on Google Play"
                  icon={iconGooglePlay}
                />
              </div>
            </div>

            <div class={style.content_image}>content image</div>
          </div>
        </div>

        <img src={imagePicnic} class={style.image_picnic} />

        <div class={style.background}>
          <svg
            class={style.wave_blue}
            viewBox="0 0 1441 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 214.5V113.5C101.5 82 293 21.5 432.5 29C572 36.5 723.5 78 851 100.5C977.085 122.75 1035.69 113.218 1155.93 93.6621L1160 93C1258.4 77 1388 24.3333 1440.5 0V214.5H0Z"
              fill="#EDF9FF"
            />
          </svg>
          <svg
            class={style.wave_white}
            viewBox="0 0 1441 215"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 214.5V113.5C13 109 282.5 73 400 73C517.5 73 575.5 91.5 658.5 107C741.5 122.5 845.546 161.59 1025.5 157.5C1179.5 154 1362.17 52.5 1440.5 0V214.5H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </main>
  );
};

export default Home;
