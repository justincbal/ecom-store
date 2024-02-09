import "../css/CartCard.css";

const CartCard = (prop) => {

  const removeItem = (remId) => {
    const idToRem = prop.cart.findIndex((item) => item.id === remId);
    if (idToRem !== -1) {
    const newCart = [...prop.cart];
    newCart.splice(idToRem,1);
    prop.setCart(newCart);
  };
}
  return (
    <>
      <div className="cartItem">
        <img src={prop.info.image} alt="" className="cartItemPic" />
        <div className="cartItemText">
          <h3 className="cartText">{prop.info.title}</h3>
          <h3 className="cartText">${prop.info.price}</h3>
        </div>
        <button
          className="removeCart"
          onClick={() => {
            removeItem(prop.info.id);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default CartCard;
