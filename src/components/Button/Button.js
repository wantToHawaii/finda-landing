import style from "./style";

const Button = ({ href, target, icon, iconAlt, linkTitle, className }) => {
  return (
    <a
      class={`${style.button} ${className}`}
      href={href}
      target={target}
      title={linkTitle}
    >
      <img src={icon} alt={iconAlt} />
    </a>
  );
};

export default Button;
