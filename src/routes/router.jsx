import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StaticHomePage from "../pages/StaticHomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import EditCardPage from "../pages/EditCardPage";
import LifeCycleHooksPage from "../pages/LifeCycleHooksPage";
import UseCallbackPage from "../pages/UseCallbackPage";
import UseMemoPage from "../pages/UseMemoPage";
import ItemPage from "../pages/ItemPage";
import ReduxPage2 from "../pages/ReduxPage2";
import ReduxPage3 from "../pages/ReduxPage3";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<ReduxPage />} /> */}
      <Route path="/statichomepage" element={<StaticHomePage />} />
      <Route path="/registerpage" element={<RegisterPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route
        path="/profilepage"
        element={<ProtectedRoute element={<ProfilePage />} />}
      />
      <Route path="/editcard/:courseId" element={<EditCardPage />} />
      <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
      <Route path="/usecallbackpage" element={<UseCallbackPage />} />
      <Route path="/usememopage" element={<UseMemoPage />} />
      <Route path="/item/:id" element={<ItemPage />} />
      <Route path="/redux2" element={<ReduxPage2 />} />
      <Route path="/redux3" element={<ReduxPage3 />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
export default Router;
