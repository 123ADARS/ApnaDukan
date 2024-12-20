import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import "./Home.css";

const Home = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  // Safe filtering by checking if p.title exists and is a string
  const filteredProductsBySearch = filteredProducts.filter((product) => {
    // Ensure p.title is defined and is a string before calling toLowerCase
    return product.title && typeof product.title === 'string' && product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
      setCategories([...new Set(response.data.map((p) => p.category))]);
    });
  }, []);

  const handleFilter = (category) => {
    setFilteredProducts(
      category === "all"
        ? products
        : products.filter((p) => p.category === category)
    );
  };

  const handleSort = (sortType) => {
    const sorted = [...filteredProducts];
    if (sortType === "priceLow") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceHigh") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === "name") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredProducts(sorted);
  };

  return (
    <>
      <FilterBar
        categories={categories}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    
      <div className="product-list">
        {filteredProductsBySearch.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;


