import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from "../../../utils/mutations";
import { QUERY_PRODUCTS } from "../../../utils/queries";
import './style.css';


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
            <div className="grid gap-20 mb-6 md:grid-cols-2">
                <form onSubmit={handleFormSubmit} className="addProForm">
                    <h2 className="addpro">Add a new Product</h2>
                    <div className="text-center">
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                            <input
                                placeholder="name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <textarea
                                placeholder="description"
                                name="description"
                                type="text"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />

                            <input
                                placeholder="price"
                                name="price"
                                type="number"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <input
                                placeholder="quantity"
                                name="quantity"
                                type="number"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />

                            <select name="category" placeholder="select category" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">select category</option>
                                <option value="63810e33d46cdc0d2e98abb2">Electronics</option>
                                <option value="63810e33d46cdc0d2e98abb4">Toys</option>
                                <option value="63810e33d46cdc0d2e98abb5">Clothes</option>
                                <option value="63810e33d46cdc0d2e98abb0">Snacks</option>
                                <option value="63810e33d46cdc0d2e98abb3">Video Games</option>
                                <option value="63810e33d46cdc0d2e98abb1">Household Supply</option>
                            </select>
                        </div>
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-breen-700 dark:focus:ring-green-800">submit</button>

                    </div>

                </form>
            </div>
        </div>

    );
};

export default AddProductFrom;