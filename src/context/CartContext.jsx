import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (prodId) => {
    return cart.some((x) => x.id === prodId);
  };
  const addItem = (producto, cant) => {
    const newItem = {
      ...producto,
      cant: cant,
    };
    if (isInCart(producto.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].cant += cant;
      setCart(auxArray);
    } else {
        
      setCart([...cart, newItem]);

    }
  };
  const emptyCart = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id != id));
  };
  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.cant)+0, 0);
  };
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.cant * x.price), 0);
  };

  return <Provider value={{isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice, cart}}>{children}</Provider>;
};

export default MyProvider;
