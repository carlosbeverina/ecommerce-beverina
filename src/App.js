import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`)
  }
  
  return (
  <>
  <NavBar />
  <ItemListContainer />
  {/* <ItemCount initial={1} stock={10} onAdd= {onAdd} /> */}
  </>
  );
}

export default App;
