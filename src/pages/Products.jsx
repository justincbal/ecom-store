import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Products.css";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

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

  const item = <ProductCard info={data[0]} />
  const items = data.map(item => <ProductCard info={item} />)

  console.log(items)
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
