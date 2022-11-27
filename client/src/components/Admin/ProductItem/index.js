import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../../utils/helpers"
import './style.css';


function ProductItem(item) {
  

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  

  return (
    <div className="theCard">
      <Link to={`/admin/products/${_id}`}>
        <img
          alt={name}
          src={`${image}`}
        />
        <p className="prodName">{name}</p>
      </Link>
      <div>
        <div className="inStock">{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      
    </div>
  );
}

export default ProductItem;
