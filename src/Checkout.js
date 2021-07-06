import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Checkout = (props) => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          width="75"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Flipkart"
          title="Flipkart"
          class="_2xm1JU"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your Basket Is Empty!!!</h2>
            <p>
              You have no item in your basket.To buy one or more item click "Add
              to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>No of items in cart is: {basket.length}</h2>
            {/* {basket.map(function add(item) {
                        return(
                          <CheckoutProduct
                          id: item.id,
                          name: item.name,
                          image: item.image,
                          brand: item.brand,
                          size: item.size,
                          price: item.price
                        />
                        )
                    })} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
