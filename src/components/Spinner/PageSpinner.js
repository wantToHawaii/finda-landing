import { CSSTransition } from "react-transition-group";
import style from "./style";

const PageSpinner = ({ loading }) => {
  return (
    <CSSTransition in={loading} classNames={{ ...style }} timeout={300}>
      <div class={style.overlay}>
        <div class={style.loader}>Loading...</div>
      </div>
    </CSSTransition>
  );
};

export default PageSpinner;
