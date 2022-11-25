import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from "../../../utils/mutations";
import { QUERY_PRODUCTS } from "../../../utils/queries";

import Auth from '../../../utils/auth';



const AddProductFrom = () => {
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
        <div className="container">
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        placeholder="name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="description"
                        name="description"
                        type="text"
                        onChange={handleChange}
                    />
                    {/* <input
                        placeholder="image"
                        name="image"
                        type="text"
                        onChange={handleChange}
                    /> */}
                    <input
                        placeholder="price"
                        name="price"
                        type="number"
                        onChange={handleChange}
                    />
                    <input
                        placeholder="quantity"
                        name="quantity"
                        type="number"
                        onChange={handleChange}
                    />
                    {/* <input
                        placeholder="category"
                        name="category"
                        type="text"
                        onChange={handleChange}
                    /> */}
                    <select name="category" placeholder="select category" onChange={handleChange}>
                        <option value="">select category</option>
                        <option value="63810e33d46cdc0d2e98abb2">Electronics</option>
                        <option value="63810e33d46cdc0d2e98abb4">Toys</option>
                        <option value="63810e33d46cdc0d2e98abb5">Clothes</option>
                        <option value="63810e33d46cdc0d2e98abb0">Snacks</option>
                        <option value="63810e33d46cdc0d2e98abb3">Video Games</option>
                        <option value="63810e33d46cdc0d2e98abb1">Household Supply</option>
                    </select>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>

    );
};

export default AddProductFrom;