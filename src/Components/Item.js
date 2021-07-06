import { useStateValue } from "../StateProvider";

function Item(props) {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        name: props.name,
        image: props.image,
        brand: props.brand,
        size: props.size,
        price: props.price
      }
    });
  };

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <section className="item-info">
        <p>{props.brand}</p>
        <p>{props.name}</p>
        <p>{props.size}</p>
        <p>{props.price}</p>
      </section>
      <button
        onClick={addToCart}
        style={{
          margin: "10px",
          padding: "5px",
          backgroundColor: "rgb(74, 74, 226)",
          color: "white"
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Item;
