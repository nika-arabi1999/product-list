/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
// import "./FilterCard.css";
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
    <div className="flex flex-col justify-between border border-solid border-gray-200 rounded-xl px-4 py-5 shadow-sm h-[550px]">
      <div className="search-box border border-solid px-2 py-3 rounded-xl">
        <input
          type="text"
          placeholder="Search by name..."
          className="search-input active:outline-none focus:outline-none"
          onChange={searchHandler}
        />
      </div>
      <div className="filters-box flex flex-col gap-8 *:flex *:flex-col *:gap-3">
        <div className="filter-price">
          <h4 className="font-semibold">Select the price range:</h4>
          <p>price range: {`$${price[0]}-$${price[1]}`}</p>
          <RangeSlider
            min={0}
            max={maxPrice}
            onInput={(value: any) => setPrice(value)}
            value={price}
          />
        </div>
        <div className="filter-category">
          <h4 className="font-semibold">select the category</h4>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="border border-solid p-2 rounded-xl"
          >
            <option value="All">All</option>
            {categories?.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
        <div className="filter-brand">
          <h4 className="font-semibold">select the brand</h4>
          <select
            name="brand"
            id="brand"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            className="border border-solid p-2 rounded-xl"
          >
            <option value="All">All</option>
            {brands?.map((brand) => {
              return <option value={brand}>{brand}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <button
          className="flex items-center justify-center rounded-lg bg-blue-400 px-4 py-2 text-lg font-normal text-gray-50  ring-1 ring-inset ring-blue-700/10"
          onClick={() => filterHandler({ brand, category, price })}
        >
          Apply The Filters
        </button>
        <button className="flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 text-lg font-normal text-gray-950 ring-1 ring-inset ring-blue-700/10" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default FilterCard;
