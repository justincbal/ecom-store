import '../css/CartCard.css'

const CartCard = (prop) => {

    return (
        <>
            <div className="cartItem">
            <img src={prop.info.image} alt="" className="cartItemPic" />
            <div className="cartItemText"><h3 className='cartText'>{prop.info.title}</h3>
            <h3 className='cartText'>${prop.info.price}</h3>
            </div>
            

            </div>
            
        </>
    )
}

export default CartCard;