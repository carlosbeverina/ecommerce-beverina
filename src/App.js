import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
  <>
  <NavBar />
  <ItemListContainer greeting='Proximamente miles de productos para vos!!!' />
  </>
  );
}

export default App;
