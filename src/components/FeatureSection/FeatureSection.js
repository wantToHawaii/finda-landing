import style from "./style";
import iphoneMockup from "../../assets/images/mockup-iphone.png";
import iphoneMockupToolbar from "../../assets/images/mockup-iphone-toolbar.png";

const formatString = (s) => {
  return s
    .split(" ")
    .map((w) => {
      if (w.includes("**")) {
        const newWord = w.split("**").join("");
        return `<strong>${newWord}</strong>`;
      }
      return w;
    })
    .join(" ");
};

const FeatureSection = ({
  Title = "",
  Description = "",
  Video = {},
  Emoji = [],
  swapContentSides,
}) => {
  const reverseContent = swapContentSides ? style.content_reverse : "";
  const bgVariant = swapContentSides ? style.background_1 : style.background_2;

  const formattedTitle = formatString(Title);
  const formattedDescription = formatString(Description);
  const videoUrl = `${process.env.PREACT_APP_API_URL}${Video?.url}` ?? "";
  const emoji = Emoji.map(
    (item) => `${process.env.PREACT_APP_API_URL}${item.url}`
  );

  return (
    <section class={`${style.feature_section} ${bgVariant}`}>
      <div class={`${style.container} ${bgVariant}`}>
        <div class={style.row}>
          <div class={`${style.content} ${reverseContent}`}>
            <div class={style.text}>
              <div class={style.emoji}>
                {emoji.map((src) => (
                  <img src={src} />
                ))}
              </div>
              <h2
                class={style.title}
                dangerouslySetInnerHTML={{ __html: formattedTitle }}
              />
              <p
                class={style.subtitle}
                dangerouslySetInnerHTML={{ __html: formattedDescription }}
              />
            </div>

            <div class={style.image}>
              <div class={style.iphone_mockup_container}>
                <img class={style.iphone_mockup} src={iphoneMockup} />
                <img
                  class={style.iphone_mockup_toolbar}
                  src={iphoneMockupToolbar}
                />
                <div class={style.iphone_animation}>
                  <img src={videoUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
