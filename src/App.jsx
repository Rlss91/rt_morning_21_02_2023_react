import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        {/* <HomePage /> */}
        {/* <RegisterPage /> */}
        <LifeCycleHooksPage />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
