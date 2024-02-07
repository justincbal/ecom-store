import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Products.css";
import { useOutletContext } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [cart, setCart] = useOutletContext();

  //   fetch data
  //   setTimeout added to simulate loading
  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products", {
        delay: 5000,
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Server Error");
          }
          return res.json();
        })
        .then((res) => setData(res))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  const items = data.map(item => <ProductCard info={item} key={item.id} cart={cart} setCart={setCart}/>)

  if (loading) return <div className="loadingText">LOADING</div>;
  if (error) return <p>Server Error</p>

  return (
    <>
      <div className="productPage">
        <h1 className="pageHeading">Shop All</h1>

        <div className="productListings">{items}</div>
      </div>
    </>
  );
};

export default Products;
