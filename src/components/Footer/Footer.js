import style from "./style";
import iconAppStore from "../../assets/images/icon-apple.svg";
import iconGooglePlay from "../../assets/images/icon-android.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";
import iconTweeter from "../../assets/images/icon-tweeter.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import Button from "../Button/Button";
import DynamicTitle from "./DynamicTitle";

const socials = [
  {
    icon: iconInstagram,
    link: "https://www.instagram.com/finda_app/",
  },
  {
    icon: iconYoutube,
    link: "https://www.youtube.com/channel/UCsg3gQzNAAZyoWrtDxEivWw",
  },
  {
    icon: iconTweeter,
    link: "https://twitter.com/Findaapp",
  },
  {
    icon: iconFacebook,
    link: "https://www.facebook.com/findaapp",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class={style.footer}>
      <div class={style.background}>
        <svg
          class={style.wave_blue}
          viewBox="0 0 1442 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1441.49 0.993286V101.993C1339.99 133.493 1148.49 193.993 1008.99 186.493C869.487 178.993 717.987 137.493 590.487 114.993C464.402 92.743 405.794 102.275 285.558 121.831L281.487 122.493C183.087 138.493 53.4868 191.16 0.986816 215.493V0.993286L1441.49 0.993286Z"
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
            d="M1440.51 0.00671387V101.007C1427.51 105.507 1158.01 141.507 1040.51 141.507C923.013 141.507 865.013 123.007 782.013 107.507C699.013 92.0067 594.967 52.9169 415.013 57.0067C261.013 60.5067 78.3466 162.007 0.0131836 214.507V0.00671387L1440.51 0.00671387Z"
            fill="white"
          />
        </svg>
      </div>

      <div class={style.container}>
        <div class={style.content}>
          <DynamicTitle />

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
          <ul class={style.socials}>
            {socials.map((social) => (
              <li>
                <a href={social.link} target="blank">
                  <img src={social.icon} />
                </a>
              </li>
            ))}
          </ul>
          <nav class={style.nav}>
            <ul>
              <li>
                <a href="mailto:info@finda.me">mailto:info@finda.me</a>
              </li>
              <li>
                <a href="mailto:info@finda.me">Help and Support</a>
              </li>
              <li>
                <a href="https://api.finda.me//api/terms/" target="blank">
                  Privacy
                </a>
              </li>
              <li>&#169; {currentYear} FINDA</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
