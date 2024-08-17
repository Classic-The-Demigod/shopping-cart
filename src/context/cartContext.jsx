import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiUrl = "https://dummyjson.com/products";
      const apiResponse = await fetch(apiUrl);
      const result = await apiResponse.json();

      if (result && result?.products) {
        setListOfProducts(result?.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }

  // console.log(listOfProducts);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
