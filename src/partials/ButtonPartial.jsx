const buttonPartialOptions = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
  link: "link",
};

// parent: <ButtonPartial btnOption="">click me</ButtonPartial>

const ButtonPartial = ({ btnOption, icon, children }) => {
  const defaultBtnOption = buttonPartialOptions.primary;
  return (
    <button className={`btn btn-${btnOption ? btnOption : defaultBtnOption}`}>
      <i className={`bi ${icon}`}></i>
      {children}
    </button>
  );
};

export { buttonPartialOptions };
export default ButtonPartial;
