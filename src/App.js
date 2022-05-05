import "./App.scss";
import Product from "./components/Products/Product";
import "react-image-lightbox/style.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Product />
      </div>
    </div>
  );
}

export default App;
