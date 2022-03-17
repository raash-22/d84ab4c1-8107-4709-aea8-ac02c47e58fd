import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./styles/ProductList.module.css";
import axios from "axios";
import NavBar from "../NavBar";

export const HomePage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      setProduct(response.data);
      
    });

  }, []);
  if(!product)
    return null;

  return (
    <>
    <NavBar />
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {product.map((item) => (
          <ProductCard id={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
    </>
  );
};
