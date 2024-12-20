import React from "react";
import "./FilterBar.css";

const FilterBar = ({ categories, onFilter, onSort }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select onChange={(e) => onSort(e.target.value)}>
        <option value="default">Sort by</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default FilterBar;
