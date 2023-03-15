import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const useLogin = () => {
  const dispatch = useDispatch();
  return () => {
    axios
      .get("/users/getuserinfo")
      .then(({ data }) => {
        dispatch(authActions.login(data));
      })
      .catch((err) => {
        console.log("err", err);
        // console.log("err", err.response.data);
      });
  };
};

export default useLogin;
