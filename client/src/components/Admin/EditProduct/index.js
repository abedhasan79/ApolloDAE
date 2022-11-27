import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { useStoreContext } from '../../../utils/GlobalState';
import {
  UPDATE_PRODUCTS,
} from '../../../utils/actions';
import { QUERY_PRODUCTS, QUERY_USER } from '../../../utils/queries';
import { idbPromise } from '../../../utils/helpers';
import { EDIT_PRODUCT_DESCRIPTION, EDIT_PRODUCT_IMAGE, EDIT_PRODUCT_NAME, EDIT_PRODUCT_PRICE, EDIT_PRODUCT_QUANTITY } from '../../../utils/mutations';
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


  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [editProductName] = useMutation(EDIT_PRODUCT_NAME, {
    update(cache, { data: { editProductName } }) {
      try {
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [editProductName, ...products] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [editProductDescription] = useMutation(EDIT_PRODUCT_DESCRIPTION, {
    update(cache, { data: { editProductDescription } }) {
      try {
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [editProductDescription, ...products] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [editProductPrice] = useMutation(EDIT_PRODUCT_PRICE, {
    update(cache, { data: { editProductPrice } }) {
      try {
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [editProductPrice, ...products] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [editProductQuantity] = useMutation(EDIT_PRODUCT_QUANTITY, {
    update(cache, { data: { editProductQuantity } }) {
      try {
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [editProductQuantity, ...products] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const [editProductImage] = useMutation(EDIT_PRODUCT_IMAGE, {
    update(cache, { data: { editProductImage } }) {
      try {
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [editProductImage, ...products] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { data: data2 } = useQuery(QUERY_USER);

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


  const [formStateName, setFormStateName] = useState(
    {
      _id: '',
      name: ''
    }
  );

  const [formStateDescription, setFormStateDescription] = useState(
    {
      _id: '',
      description: ''
    }
  );

  const [formStatePrice, setFormStatePrice] = useState(
    {
      _id: '',
      price: ''
    }
  );

  const [formStateQuantity, setFormStateQuantity] = useState(
    {
      _id: '',
      quantity: ''
    }
  );

  // const [formStateImage, setFormStateImage] = useState(
  //   {
  //     _id: '',
  //     image:''
  //   }
  // );

  const [imagee, setImagee] = useState("");
  const [url, setUrl] = useState("");
  const [formStateImage, setFormStateImage] = useState(
    {
      _id: '',
      image: url
    }
  );


  const handleformSubmitEditProductImage = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", imagee);
    data.append("upload_preset", "h1eyn8ot");
    data.append("cloud__name", "dh9lklwph");
    await fetch("https://api.cloudinary.com/v1_1/dh9lklwph/image/upload", { method: "post", body: data })
      .then(res => res.json())
      .then(data => { editProductImage({ variables: { id: currentProduct._id, image: data.url } }); setUrl(data.url) })
      .catch(err => console.log(err));

  }

  const handleFormSubmitEditProductName = async (event) => {
    event.preventDefault();

    try {

      const EditName = await editProductName({
        variables: {
          id: currentProduct._id,
          name: formStateName.name
        }
      });
      return EditName;
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormSubmitEditProductDescription = async (event) => {
    event.preventDefault();

    try {

      const EditDescription = await editProductDescription({
        variables: {
          id: currentProduct._id,
          description: formStateDescription.description
        }
      });
      return EditDescription;
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormSubmitEditProductPrice = async (event) => {
    event.preventDefault();

    try {

      const EditPrice = await editProductPrice({
        variables: {
          id: currentProduct._id,
          price: JSON.parse(formStatePrice.price)
        }
      });
      return EditPrice;
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormSubmitEditProductQuantity = async (event) => {
    event.preventDefault();

    try {

      const EditQuantity = await editProductQuantity({
        variables: {
          id: currentProduct._id,
          quantity: JSON.parse(formStateQuantity.quantity)
        }
      });
      return EditQuantity;
    } catch (e) {
      console.log(e);
    }
  };


  const handleChangeName = (event) => {
    const { name, value } = event.target;
    setFormStateName({
      ...formStateName,
      [name]: value,
    });
  };

  const handleChangeDescripion = (event) => {
    const { name, value } = event.target;
    setFormStateDescription({
      ...formStateDescription,
      [name]: value,
    });
  };

  const handleChangePrice = (event) => {
    const { name, value } = event.target;
    setFormStatePrice({
      ...formStatePrice,
      [name]: value,
    });
  };

  const handleChangeQuantity = (event) => {
    const { name, value } = event.target;
    setFormStateQuantity({
      ...formStateQuantity,
      [name]: value,
    });
  };

  const handleChangeImage = (event) => {

    const { name, value } = event.target;
    setFormStateImage({
      ...formStateImage,
      [name]: value,
    });
  };

  const handleFormSubmitDeleteProduct = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deleteProduct({
        variables: {
          id: currentProduct._id
        }

      });

      if (data) {
        window.location.reload();
      }

    } catch (e) {
      console.log(e);
    }
  }

  if (!data2 || !data2.user.isAdmin) {
    return (
      <>
        <div style={style.MT}>
          <a href='/'>MUST BE A ADMIN TO USE THIS PAGE. CLICK HERE TO GO BACK TO HOME PAGE</a>
        </div>
      </>
    );
  } else if (data2 && data2.user.isAdmin) {
    return (
      <>
        <div style={style.MT}>
          {currentProduct ? (
            <div className="container my-1">
              <Link to="/admin">← Back to Products</Link>
              <div>
                

                <form onSubmit={handleformSubmitEditProductImage}>

                  <input
                    placeholder="id"
                    name="_id"
                    type="text"
                    defaultValue={currentProduct._id}
                    hidden
                    onChange={handleChangeImage}
                  />

                  <input
                    placeholder="name"
                    name="image"
                    type="file"
                    onChange={(e) => setImagee(e.target.files[0])}

                  />
                  <button type="submit" >Update Product Image</button>
                </form>

                <form onSubmit={handleFormSubmitEditProductName}>

                  <input
                    placeholder="id"
                    name="_id"
                    type="text"
                    defaultValue={currentProduct._id}
                    onChange={handleChangeName}
                    hidden
                  />

                  <input
                    placeholder="name"
                    name="name"
                    type="text"
                    defaultValue={currentProduct.name}
                    onChange={handleChangeName}
                  />
                  <button type="submit">Update Product Name</button>
                </form>



                <form onSubmit={handleFormSubmitEditProductPrice}>

                  <input
                    placeholder="id"
                    name="_id"
                    type="text"
                    defaultValue={currentProduct._id}
                    onChange={handleChangePrice}
                    hidden
                  />

                  <input
                    placeholder="price"
                    name="price"
                    type="number"
                    defaultValue={currentProduct.price}
                    onChange={handleChangePrice}
                  />
                  <button type="submit">Update Product Price</button>
                </form>

                <form onSubmit={handleFormSubmitEditProductQuantity}>

                  <input
                    placeholder="id"
                    name="_id"
                    type="text"
                    defaultValue={currentProduct._id}
                    onChange={handleChangeQuantity}
                    hidden
                  />

                  <input
                    placeholder="quantity"
                    name="quantity"
                    type="number"
                    defaultValue={currentProduct.quantity}
                    onChange={handleChangeQuantity}
                  />
                  <button type="submit">Update Product Quantity</button>
                </form>

                <form onSubmit={handleFormSubmitEditProductDescription}>

                  <input
                    placeholder="id"
                    name="_id"
                    type="text"
                    defaultValue={currentProduct._id}
                    onChange={handleChangeDescripion}
                    hidden
                  />

                  <textarea
                    placeholder="description"
                    name="description"
                    type="text"
                    defaultValue={currentProduct.description}
                    onChange={handleChangeDescripion}
                  />
                  <button type="submit">Update Product Description</button>
                </form>

                <button type='button' onClick={handleFormSubmitDeleteProduct}>DELETE PRODUCT</button>

              </div>


            </div>
          ) : <Link to="/admin">← Product has been deleted. Click here to go Back to Products</Link>}
        </div>
      </>
    );
  }

}

export default EditProduct;