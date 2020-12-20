import { CSSTransition } from "react-transition-group";
import style from "./style";

const PageSpinner = ({ loading }) => {
  console.log(loading);
  return (
    // <TransitionGroup component={null}>
    <CSSTransition
      in={loading}
      // classNames={{
      //   enter: style.overlay_enter,
      //   enterActive: style.overlay_enter_active,
      //   enterDome: style.overlay_enter_done,
      //   exit: style.overlay_exit,
      //   exitActive: style.overlay_exit_active,
      //   exitDone: style.overlay_exit_done,
      // }}
      classNames={{ ...style }}
      timeout={300}
    >
      <div class={style.overlay}>
        <div class={style.loader}>Loading...</div>
      </div>
    </CSSTransition>
    // </TransitionGroup>
  );
};

export default PageSpinner;
