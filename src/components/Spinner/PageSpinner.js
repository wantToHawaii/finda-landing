import style from "./style";

const PageSpinner = ({ loading }) => {
  const overlayClass = loading ? style.overlay_fade_in : style.overlay_fade_out;
  return (
    <div class={`${style.overlay} ${overlayClass}`}>
      <div class={style.loader}>Loading...</div>
    </div>
  );
};

export default PageSpinner;
