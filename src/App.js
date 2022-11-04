import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
