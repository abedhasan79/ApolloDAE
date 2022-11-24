import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import ProductList from "../components/Admin/ProductList";
import { ADD_PRODUCT } from "../utils/mutations";
import { QUERY_PRODUCTS } from "../utils/queries";

import Auth from '../utils/auth';

const style = {
  hw: {
    marginTop: '30vh'
  }
}

const Admin = () => {
    const [formState, setFormState] = useState({ name: '', description: '', price: '', quantity: '', category: '' });
    const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
        update(cache, { data: { addProduct } }) {
            try {
                const { products } = cache.readQuery({ query: QUERY_PRODUCTS });

                cache.writeQuery({
                    query: QUERY_PRODUCTS,
                    data: { products: [addProduct, ...products] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const addNewP = await addProduct({
                variables: { name: formState.name, description: formState.description, price: JSON.parse(formState.price), quantity: JSON.parse(formState.quantity), category: formState.category },

            });

            return addNewP;
            
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container" style={style.hw}>
            welcome to 
            adminasfdsajflksajflsafasf

adminasfdsajflksajflsafasf
adminasfdsajflksajflsafasf

adminasfdsajflksajflsafasf

adminasfdsajflksajflsafasf


            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        placeholder="name"
                        name="name"
                        type="text"
                        on onChange={handleChange}
                    />
                    <input
                        placeholder="description"
                        name="description"
                        type="text"
                        on onChange={handleChange}
                    />
                    {/* <input
                        placeholder="image"
                        name="image"
                        type="text"
                        on onChange={handleChange}
                    /> */}
                    <input
                        placeholder="price"
                        name="price"
                        type="number"
                        on onChange={handleChange}
                    />
                    <input
                        placeholder="quantity"
                        name="quantity"
                        type="number"
                        on onChange={handleChange}
                    />
                    <input
                        placeholder="category"
                        name="category"
                        type="text"
                        on onChange={handleChange}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>

            <div>
                <ProductList />
            </div>
        </div>

    );
};

export default Admin;