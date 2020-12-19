import style from "./style";
import iphoneMockup from "../../assets/images/mockup-iphone.png";
import iphoneMockupToolbar from "../../assets/images/mockup-iphone-toolbar.png";

import emojiBall from "../../assets/images/mocks/icon-emoji-ball.png";
import emojiController from "../../assets/images/mocks/icon-emoji-controller.png";
import emojiMasks from "../../assets/images/mocks/icon-emoji-masks.png";
import iphoneAnimation from "../../assets/images/mocks/iphone-animation.gif";

const emoji = [emojiBall, emojiController, emojiMasks];

const FeatureSection = ({ swapContentSides }) => {
  const reverseContent = swapContentSides ? style.content_reverse : "";

  return (
    <section class={style.feature_section}>
      <div class={style.container}>
        <div class={style.row}>
          <div class={`${style.content} ${reverseContent}`}>
            <div class={style.text}>
              <div class={style.emoji}>
                {emoji.map((src) => (
                  <img src={src} />
                ))}
              </div>
              <h2 class={style.title}>
                <span>Find</span> new friends based on interests
              </h2>
              <p class={style.subtitle}>
                This is Anna, she loves to play tennis, but she could not{" "}
                <span>find</span> friends who share the same interest. By using{" "}
                <span>Finda</span> Anna discovered that there are a lot of
                interesting people in her neighbourhood, who would join her at
                the tennis court!
              </p>
            </div>

            <div class={style.image}>
              <div class={style.iphone_mockup_container}>
                <img class={style.iphone_mockup} src={iphoneMockup} />
                <img
                  class={style.iphone_mockup_toolbar}
                  src={iphoneMockupToolbar}
                />
                <div class={style.iphone_animation}>
                  <img src={iphoneAnimation} />
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
