import React from "react";
import ProductList from "../components/Admin/ProductList";
import AddProductFrom from "../components/Admin/AddProductFrom";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import spinner from '../assets/spinner.gif'
import { useStoreContext } from '../utils/GlobalState';
import { Link } from "react-router-dom";
const style = {
    hw: {
        marginTop: '10vh'
    },

    hw2:{
        marginTop: '10vh',
        marginBottom: '10vh'
    }
}

const Admin = () => {

    const { loading, data } = useQuery(QUERY_USER);
    
    // console.log(data.user.isAdmin);

    return (

        <div className="container" style={style.hw2}>
            {data && data.user.isAdmin? (
                <div>
                    welcome to Admin
                    <AddProductFrom />
                    <ProductList />
                </div>
            ):(
                <Link to='/' > YOU NEDD TO LOG IN AS A ADMIN TO USE THIS PAGE. CLICK HERE TO GO BACK TO HOME PAGE.</Link>
            )}
            
        </div>

    );


};

export default Admin;