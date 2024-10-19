/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./FilterCard.css";
//@ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function FilterCard({
  brands,
  categories,
  maxPrice,
  filterHandler,
  resetHandler,
  searchHandler,
}: {
  brands: any[] | undefined;
  categories: any[] | undefined;
  maxPrice: number | undefined;
  searchHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
  filterHandler: ({
    brand,
    category,
    price,
  }: {
    brand: string;
    category: string;
    price: number[];
  }) => void;
  resetHandler: () => void;
}) {
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState([0, 0]);

  const resetFilters = () => {
    setBrand("All");
    setCategory("All");

    setPrice([0, maxPrice || 0]);
    resetHandler();
  };

  useEffect(() => {
    if (maxPrice) {
      setPrice([0, maxPrice]);
    }
  }, [maxPrice]);

  return (
    <div className="filter-card">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name..."
          className="search-input"
          onChange={searchHandler}
        />
      </div>
      <div className="filters-box">
        <div className="filter-price">
          <h4>Select the price range:</h4>
          <p>price range: {`${price[0]}-${price[1]}`}</p>
          <RangeSlider
            min={0}
            max={maxPrice}
            onInput={(value: any) => setPrice(value)}
            value={price}
          />
        </div>
        <div className="filter-category">
          <h4>select the category</h4>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="All">All</option>
            {categories?.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
        <div className="filter-brand">
          <h4>select the brand</h4>
          <select
            name="brand"
            id="brand"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
          >
            <option value="All">All</option>
            {brands?.map((brand) => {
              return <option value={brand}>{brand}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="buttons-box">
        <button
          className="btn apply-btn"
          onClick={() => filterHandler({ brand, category, price })}
        >
          Apply The Filters
        </button>
        <button className=" btn reset-btn" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default FilterCard;
