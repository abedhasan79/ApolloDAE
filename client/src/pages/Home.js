import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import { Banner } from '../components/Banner'

const style = {
  hw: {
    marginTop: '30vh'
  }
}


const Home = () => {
  return (
     <div style={style.hw}>
      <Banner />
       <div>
      <CategoryMenu />
      <ProductList />
    </div>
    </div>
   
  );
};

export default Home;
