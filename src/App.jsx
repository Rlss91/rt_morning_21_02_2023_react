import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main>
        <HomePage />
        {/* <RegisterPage /> */}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
