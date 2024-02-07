import { useOutletContext } from "react-router-dom";
import "../css/ProductCard.css";

const ProductCard = (prop) => {
  // console.log(prop);
  const handleClick = () => {
    prop.setCart([...prop.cart, prop.info]);
    // console.log(prop.cart);
  };
  return (
    <>
      <div className="productItem">
        <img src={prop.info.image} alt="" className="productImage" />
        <h1 className="productName">{prop.info.title}</h1>
        <h2 className="productPrice">${prop.info.price}</h2>
        <button className="addCartButton" type="button" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
