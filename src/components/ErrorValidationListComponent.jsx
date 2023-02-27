const ErrorValidationListComponent = ({ errorsArr }) => {
  return (
    <ul className="list-group">
      {errorsArr.map((item) => (
        <li
          className="list-group-item list-group-item-danger"
          key={Date.now() + item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ErrorValidationListComponent;
