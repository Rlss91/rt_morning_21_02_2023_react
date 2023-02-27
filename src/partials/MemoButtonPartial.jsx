import { memo } from "react";
import PropTypes from "prop-types";

import { buttonPartialOptions } from "./ButtonPartial";

// parent: <ButtonPartial btnOption="">click me</ButtonPartial>

const MemoButtonPartial = ({ btnOption, icon, children }) => {
  console.log("MemoButtonPartial rendered");
  // const defaultBtnOption = buttonPartialOptions.primary;
  return (
    // <button className={`btn btn-${btnOption ? btnOption : defaultBtnOption}`}>
    <button className={`btn btn-${btnOption}`}>
      {icon && <i className={`bi ${icon}`}></i>}
      {children}
    </button>
  );
};

MemoButtonPartial.propTypes = {
  btnOption: PropTypes.oneOf(Object.values(buttonPartialOptions)), //convert object values to array of values
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
};

MemoButtonPartial.defaultProps = {
  btnOption: buttonPartialOptions.primary,
};

export default memo(MemoButtonPartial);
