import { Fragment, useState } from "react";

const RegisterPage = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const handleBtnClick = () => {
    console.log("clicked");
  };
  const handleNameInputChange = (ev) => {
    setNameInputValue(ev.target.value);
  };
  const handleEmailInputChange = (ev) => {
    setEmailInputValue(ev.target.value);
  };
  const handlePasswordInputChange = (ev) => {
    setPasswordInputValue(ev.target.value);
  };
  return (
    <Fragment>
      <h1>Register page</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name - {nameInputValue}
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          aria-describedby="emailHelp"
          value={nameInputValue}
          onChange={handleNameInputChange}
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          value={emailInputValue}
          onChange={handleEmailInputChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="passwordInput" />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          value={passwordInputValue}
          onChange={handlePasswordInputChange}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button className="btn btn-primary" onClick={handleBtnClick}>
        Submit
      </button>
    </Fragment>
  );
};

export default RegisterPage;
