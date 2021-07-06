import React from "react";

function CheckoutProduct(props) {
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__img" src={props.image} alt="" />
      <div className="checkproduct__info">
        <p className="checkoutproduct__title">{props.name}</p>
        <p>{props.brand}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
