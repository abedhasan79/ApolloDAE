import React from "react";
import ProductList from "../components/Admin/ProductList";
import AddProductFrom from "../components/Admin/AddProductFrom";

import Auth from '../utils/auth';

const style = {
    hw: {
      marginTop: '10vh'
    }
  }

const Admin = () => {
    

    return (
        <div className="container" style={style.hw}>
            welcome to Admin
            <div>
                <AddProductFrom/>
                <ProductList />
            </div>
        </div>

    );
};

export default Admin;