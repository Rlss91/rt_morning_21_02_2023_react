import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseMemoPage from "./pages/UseMemoPage";
import ItemPage from "./pages/ItemPage";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
