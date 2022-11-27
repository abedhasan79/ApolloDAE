import React from "react";
import ProductList from "../components/Admin/ProductList";
import AddProductFrom from "../components/Admin/AddProductFrom";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import spinner from '../assets/spinner.gif'
import { useStoreContext } from '../utils/GlobalState';
import { Link } from "react-router-dom";
import './admin.css';
// const style = {
//     hw: {
//         marginTop: '10vh'
//     },

//     hw2:{
//         marginTop: '10vh',
//         marginBottom: '10vh'
//     }
// }

const Admin = () => {

    const { loading, data } = useQuery(QUERY_USER);
    
    // console.log(data.user.isAdmin);

    return (

        <div >
            {data && data.user.isAdmin? (
                <div>
                    welcome to Admin
                    <AddProductFrom />
                    <ProductList />
                </div>
            ):(
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


};

export default Admin;