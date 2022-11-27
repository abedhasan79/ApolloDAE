
import React from "react";
import ProductList from "../components/Admin/ProductList";
import AddProductFrom from "../components/Admin/AddProductFrom";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import './admin.css';

const Admin = () => {

  const { data } = useQuery(QUERY_USER);

  return (

    <div className="dashAdmin">
      {data && data.user.isAdmin ? (
        <div >
          <div className="welcome">
            <h1 >
              Welcome to Admin. Add a product or click on a Product to update information
            </h1>
          </div>
          <AddProductFrom />
          <ProductList />
        </div>
      ) : (
        <>
          <div className="adminContainer">

            <h1 className="message">YOU NEED TO LOG IN AS A ADMIN TO USE THIS PAGE.

              <hr className="goBack"></hr><Link to='/' ><i className=" adminArrow  fa-regular fa-square-caret-left"></i> </Link>
            </h1>



          </div>
        </>
      )}
    </div>
  );

}


export default Admin
