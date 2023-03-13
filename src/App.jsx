import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import StaticHomePage from "./pages/StaticHomePage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseMemoPage from "./pages/UseMemoPage";
import ItemPage from "./pages/ItemPage";
import HomePage from "./pages/HomePage";
import ReduxPage from "./pages/ReduxPage";

const App = () => {
  return (
    <div className="container">
      <ToastContainer />
      <header>
        <Navbar isDark={true} />
      </header>
      <main className="mt-2">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<ReduxPage />} />
          <Route path="/statichomepage" element={<StaticHomePage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
          <Route path="/usecallbackpage" element={<UseCallbackPage />} />
          <Route path="/usememopage" element={<UseMemoPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
