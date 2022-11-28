import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import './ordHist.css';
import './admin.css';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className=" container my-1" >
        <Link className="adminContainer1" to="/"><i className="arrow fa-regular fa-square-caret-left"></i></Link>

        {user ? (
          <>
            <h2 className="userMessage">
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3 className="dateNow">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="placeRow1">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className=" my-2 card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                        
                      </div>
                     
                    </div>
                    
                  ))}
                  
                </div>
                
              </div>
              
            ))}
             <div className="pushDown"></div>
          </>
          
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
