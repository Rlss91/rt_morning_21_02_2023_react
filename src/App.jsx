import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
