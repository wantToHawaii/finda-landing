import style from "./style";
import { useState, useEffect } from "preact/hooks";
import TextTransition, { presets } from "react-text-transition";

const INTERVAL = 1500;
const words = ["friend", "match"];

const DynamicTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      INTERVAL
    );
    return () => clearInterval(intervalId);
  });

  return (
    <h2 class={style.title}>
      <span>Find a </span>
      <span class={style.word}>
        <TextTransition
          inline
          text={words[index % words.length]}
          springConfig={presets.stiff}
        />
      </span>
    </h2>
  );
};

export default DynamicTitle;
