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
    <div className="theCard px-1 py-1">
      <Link to={`/admin/products/${_id}`}>
        <img
          className="productPic1"
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
