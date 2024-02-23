import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "./utils/cartSlice";



const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () =>{
     dispatch(clearCart());
    }
  
    return(
        <div className="m-4 p-4 text-center">
          <h1 className="font-bold text-2xl">Cart</h1>

         
          <div className="w-6/12 m-auto">
          <button className="p-1 m-2 bg-black text-white rounded-sm" 
          onClick={handleClearCart}
          >Clear Cart</button>

          {cartItems.length === 0 && <h1>Your cart is empty.
        Add items to the cart</h1>}

            <ItemList items = {cartItems}/>
          </div>
        </div>
    )
}

export default Cart;