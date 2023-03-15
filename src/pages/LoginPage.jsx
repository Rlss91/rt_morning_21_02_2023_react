import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import validateLoginSchema from "../validation/loginValidation";
import AlertPartial from "../partials/AlertPartial";
import { authActions } from "../store/auth";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [userInputs, setUserInputs] = useState({
    emailInput: "",
    passwordInput: "",
  });
  const [errorState, setErrorState] = useState(null);
  const navigate = useNavigate();
  const loginFunc = useLogin();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(userInputs));
    newInputsValue[ev.target.id] = ev.target.value;
    setUserInputs(newInputsValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const errors = validateLoginSchema(userInputs);
      if (errors) {
        console.log(errors);
        setErrorState(errors);
      } else {
        const { data } = await axios.post("/login", {
          email: userInputs.emailInput,
          password: userInputs.passwordInput,
        });
        console.log(data);
        localStorage.setItem("token", data.userToken);
        // useDispatch(authActions.login())
        loginFunc();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
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
        {errorState && errorState.emailInput && (
          <AlertPartial>
            {errorState.emailInput.map((item) => (
              <div key={item + "email"}>{item}</div>
            ))}
          </AlertPartial>
        )}
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
        {errorState && errorState.passwordInput && (
          <AlertPartial>
            {errorState.passwordInput.map((item) => (
              <div key={item + "pass"}>{item}</div>
            ))}
          </AlertPartial>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
