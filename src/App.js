import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:cat" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      {/* <ItemDetailContainer /> */}
      {/* <ItemCount initial={1} stock={10} onAdd= {onAdd} /> */}
    </>
  );
}

export default App;
