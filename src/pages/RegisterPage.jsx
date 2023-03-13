import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validateRegisterSchema from "../validation/registerValidation";
import AlertPartial from "../partials/AlertPartial";

const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorState, setErrorState] = useState(null);
  const navigate = useNavigate();

  const handleUserInputChange = (e) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    newUserInput[e.target.id] = e.target.value;
    setUserInput(newUserInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const errors = validateRegisterSchema(userInput);
      if (errors) {
        console.log(errors);
        setErrorState(errors);
      } else {
        await axios.post("/register", {
          fisrtName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
        });
        navigate("/loginpage");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={userInput.firstName}
          onChange={handleUserInputChange}
        />
        {errorState && errorState.firstName && (
          <AlertPartial>{errorState.firstName.join("<br>")}</AlertPartial>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={userInput.lastName}
          onChange={handleUserInputChange}
        />
        {errorState && errorState.lastName && (
          <AlertPartial>
            {errorState.lastName.map((item) => (
              <div>{item}</div>
            ))}
          </AlertPartial>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={userInput.email}
          onChange={handleUserInputChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        {errorState && errorState.email && (
          <AlertPartial>
            {errorState.email.map((item) => (
              <div>{item}</div>
            ))}
          </AlertPartial>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={userInput.password}
          onChange={handleUserInputChange}
        />
        {errorState && errorState.password && (
          <AlertPartial>
            {errorState.password.map((item) => (
              <div>{item}</div>
            ))}
          </AlertPartial>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default RegisterPage;
