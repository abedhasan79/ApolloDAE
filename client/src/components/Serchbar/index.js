import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import '../ProductList/style.css';
import { Link } from "react-router-dom";

const Searchbar = () => {

    const { data } = useQuery(QUERY_PRODUCTS);
    console.log(data);
    const [query, setquery] = useState("");

    const [state, setstate] = useState({
        query: '',
        list: []
    })

    const handleChange = (e) => {
        const results = data.products.filter(post => {
            if (e.target.value === "") return data.products
            return post.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setstate({
            query: e.target.value,
            list: results
        })
    }
    const clearField = () => {
        setstate({
            query: "",
            list: []
        })
    }
    return (
        <>
            <div>
                <form>
                    <input
                        id='searBarClear'
                        type="search"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        defaultValue={query}
                        onChange={handleChange}
                    />

                </form>

            </div>
            <ul>
                {(state.query === '' ? "" : state.list.map(post => {
                    return <li key={post.name} onClick={clearField}><Link to={`/products/${post._id}`} >{post.name}</Link></li>
                }))}
            </ul>
        </>
    )
}

export default Searchbar;
