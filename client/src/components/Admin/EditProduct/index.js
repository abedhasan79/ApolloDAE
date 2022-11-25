import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';


import { useStoreContext } from '../../../utils/GlobalState';
import {
  UPDATE_PRODUCTS,
} from '../../../utils/actions';
import { QUERY_PRODUCTS } from '../../../utils/queries';
import { idbPromise } from '../../../utils/helpers';
import spinner from '../../../assets/spinner.gif';
import { EDIT_PRODUCT } from '../../../utils/mutations';
import { DELETE_PRODUCT } from '../../../utils/mutations';

const style = {
  MT: {
    marginTop: '15vh'
  }
}

function EditProduct() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products } = state;

  const [editProduct, { error }] = useMutation(EDIT_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const [formState, setFormState] = useState(
    {
      _id: '',
      name: '',
      description: '',
      price: '',
      quantity: ''
    });

  const handleFormSubmitEditProduct = async (event) => {
    event.preventDefault();

    try {

      const EditPro = await editProduct({
        variables: {
          id: currentProduct._id,
          name: formState.name,
          description: formState.description,
          price: JSON.parse(formState.price),
          quantity: JSON.parse(formState.quantity)
        }
      });
      return EditPro;
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

  const handleFormSubmitDeleteProduct = async  (event)=>{
    event.preventDefault();
    try{
      const {data} =await deleteProduct({
        variables: {
          id: currentProduct._id
        }
        
      });
      
      if(data){
        window.location.reload();
      }
      
    }catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <div style={style.MT}>
        {currentProduct ? (
          <div className="container my-1">
            <Link to="/admin">← Back to Products</Link>
            <div>
              <img
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
              />
              <form onSubmit={handleFormSubmitEditProduct}>
                <input
                  placeholder="id"
                  name="_id"
                  type="text"
                  defaultValue={currentProduct._id}
                  onChange={handleChange}
                  hidden
                />
                <input
                  placeholder="name"
                  name="name"
                  type="text"
                  defaultValue={currentProduct.name}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="description"
                  name="description"
                  type="text"
                  defaultValue={currentProduct.description}
                  onChange={handleChange}
                />

                <input
                  placeholder="price"
                  name="price"
                  type="number"
                  defaultValue={currentProduct.price}
                  onChange={handleChange}
                />
                <input
                  placeholder="quantity"
                  name="quantity"
                  type="number"
                  defaultValue={currentProduct.quantity}
                  onChange={handleChange}
                />
                <button type="submit">Update Product</button>
              </form>

              <button type='button' onClick={handleFormSubmitDeleteProduct}>DELETE PRODUCT</button>
            </div>


          </div>
        ) : <Link to="/admin">← Product has been deleted. Click here to go Back to Products</Link>}
        {loading ? <img src={spinner} alt="loading" /> : null}
      </div>
    </>
  );
}

export default EditProduct;