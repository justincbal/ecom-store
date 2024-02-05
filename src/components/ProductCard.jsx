import "../css/ProductCard.css";

const ProductCard = (prop) => {
  console.log(prop);

  return (
    <>
      <div className="productItem">
        <img src={prop.info.image} alt="" className="productImage" />
        <h1 className="productName">{prop.info.title}</h1>
        <h2 className="productPrice">${prop.info.price}</h2>
        <button className="addCartButton">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
