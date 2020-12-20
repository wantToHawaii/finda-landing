import { useState } from "preact/hooks";
import { animated } from "react-spring";
import style from "./style";

const circles = [
  "dinner buddy",
  "cinema lover",
  "Chinese",
  "friend",
  "barber",
  "German",
  "party friend",
  "boyfriend",
  "Russian",
];

const Circle = ({ size, text, rotate, index, spring }) => {
  const [pos] = useState({ x: 0, y: 0 });

  const transform = (x, y) => {
    const result = `rotate(${rotate}deg) translate(${x / 10 + pos.x}px, ${
      y / 10 + pos.y
    }px)`;
    return result;
  };

  return (
    <animated.div
      class={`${style.circle} ${style[`circle_${index}`]}`}
      style={{
        width: size * 10,
        height: size * 10,
        fontSize: size,
        transform: spring.xy.interpolate(transform),
      }}
    >
      <span>Find a</span>
      <span>{text}</span>
    </animated.div>
  );
};

const AnimatedBackground = ({ spring }) => {
  return (
    <div class={style.animated_bg_container}>
      {circles.map((text, index) => {
        const randomN = Math.floor(Math.random() * (circles.length / 2));
        const rotationSide = Math.floor(Math.random() * 2) ? "-" : "";
        const rotate = `${rotationSide}${randomN * 10}`;
        return (
          <Circle spring={spring} text={text} rotate={rotate} index={index} />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
