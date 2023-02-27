import { memo } from "react";
const ErrorValidationListComponent = ({ errorsArr }) => {
  console.log("ErrorValidationListComponent");
  return (
    <ul className="list-group">
      {errorsArr.map((item, index) => (
        <li
          className="list-group-item list-group-item-danger"
          key={Date.now() + item + index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default memo(ErrorValidationListComponent);
