import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleUserInputChange = (e) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    newUserInput[e.target.id] = e.target.value;
    setUserInput(newUserInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", {
        fisrtName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
        password: userInput.password,
      });
      navigate("/loginpage");
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
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default RegisterPage;
