import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userInputs, setUserInputs] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(userInputs));
    newInputsValue[ev.target.id] = ev.target.value;
    setUserInputs(newInputsValue);
  };
  const handleSubmit = () => {
    // everything is good
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          value={userInputs.emailInput}
          onChange={handleInputChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          value={userInputs.passwordInput}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
