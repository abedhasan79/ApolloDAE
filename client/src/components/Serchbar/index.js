import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_USER } from '../../utils/queries';
import '../ProductList/style.css';
import { Link } from "react-router-dom";
import './style.css';

const Searchbar = () => {
    const { data: data1 } = useQuery(QUERY_USER);
    const { data } = useQuery(QUERY_PRODUCTS);


    const [state, setstate] = useState([]);

    const [query, setquery] = useState("");

    const handleChange = (e) => {
        const searchWord = e.target.value;
        setquery(searchWord);
        const results = data.products.filter(post => {
            if (e.target.value === "") return data.products
            return post.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        // setstate({
        //     query: e.target.value,
        //     list: results
        // })

        if (searchWord === "") {
            setstate([]);
        } else {
            setstate(results);
        }
    }
    const clearField = () => {
        // setstate({
        //     query: "",
        //     list: []
        // });
        setstate([]);
        setquery("");
    }
    return (
        <>
            <div>
                <div className="searchInputs">
                    <input
                        id='searBarClear'
                        type="search"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        defaultValue={query}
                        onChange={handleChange}
                    />
                </div>

                {state.length !== 0 && (
                    <div className="dataResult">
                        {(!data1 || !data1.user.isAdmin) ? (
                            (state.query === '' ? "" : state.map(post => {
                                return <li key={post.name} onClick={clearField} className="dataItem"><Link to={`/products/${post._id}`} >{post.name}</Link></li>
                            }))
                        ) : (data1 && data1.user.isAdmin) ? (
                            (state.query === '' ? "" : state.map(post => {
                                return <li key={post.name} onClick={clearField} className="dataItem"><Link to={`/admin/products/${post._id}`} >{post.name}</Link></li>
                            }))
                        ) : null}

                    </div>)}
            </div>
        </>
    )
}

export default Searchbar;
