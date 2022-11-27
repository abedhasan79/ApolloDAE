
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

    <div >
      {data && data.user.isAdmin ? (
        <div>
          welcome to Admin
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
