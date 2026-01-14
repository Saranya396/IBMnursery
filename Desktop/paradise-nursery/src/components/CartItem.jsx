import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.img} />
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, type: "inc" }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, type: "dec" }))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}

export default CartItem;
