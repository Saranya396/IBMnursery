import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 200, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 250, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 300, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 180, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Rubber Plant", price: 350, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Areca Palm", price: 400, img: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 150, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Hibiscus", price: 200, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Jasmine", price: 180, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Tulip", price: 220, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Sunflower", price: 160, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Bougainvillea", price: 250, img: "https://via.placeholder.com/100" }
  ],
  Succulent: [
    { id: 13, name: "Cactus", price: 120, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Jade Plant", price: 220, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Echeveria", price: 180, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Haworthia", price: 200, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Aloe", price: 160, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Sedum", price: 190, img: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = (id) => cartItems.find(i => i.id === id);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> | 
        <Link to="/cart"> Cart ({cartItems.length})</Link>
      </nav>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          {plants[category].map(p => (
            <div key={p.id}>
              <img src={p.img} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <button
                disabled={isAdded(p.id)}
                onClick={() => dispatch(addItem(p))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
