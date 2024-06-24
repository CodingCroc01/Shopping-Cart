import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  let content;
  if (items.length === 0) {
    content = <p style={{ textAlign: "center" }}>Your cart is empty</p>;
  } else {
    content = items.map((item) => (
      <CartItem
        key={item.itemId}
        item={{
          id: item.itemId,
          title: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price,
        }}
      />
    ));
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{content}</ul>
    </Card>
  );
};

export default Cart;
