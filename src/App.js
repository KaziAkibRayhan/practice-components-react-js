import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
