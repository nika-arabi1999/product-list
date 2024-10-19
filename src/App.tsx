/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import FilterCard from "./components/FilterCard/FilterCard";
import ProductsList from "./components/ProductsList.tsx/ProductList";

function App() {
  const [products, setProducts] = useState<any[]>();
  const [filteredProducts, setFilteredProducts] = useState<any[]>();
  const [lastFilteredProducts, setLastFilteredProducts] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(false);
  const brands = [...new Set(products?.map((product) => product?.brand))];
  const categories = [
    ...new Set(products?.map((product) => product?.category)),
  ];
  const price = products?.map((product) => product?.price);
  const maxPrice = price ? Math.max(...price) : undefined;

  const getAllProducts = async () => {
    setIsLoading(true);
    const data = await fetch(
      "https://products-catalog2.vercel.app/api/products"
    );

    const response = await data.json();
    setProducts(response);
    setFilteredProducts(response);
    setLastFilteredProducts(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const filterHandler = ({
    brand,
    category,
    price,
  }: {
    brand: string;
    category: string;
    price: number[];
  }) => {
    const filteredProducts = products
      ?.filter((product) => {
        if (category !== "All" && brand !== "All") {
          return product.category === category && product.brand === brand;
        } else if (category !== "All") {
          return product.category === category;
        } else if (brand !== "All") {
          return product.brand === brand;
        } else {
          return product;
        }
      })
      .filter((product) => {
        return product.price >= price[0] && product.price <= price[1];
      });
    setFilteredProducts(filteredProducts);
    setLastFilteredProducts(filteredProducts);
  };

  const resetHandler = () => {
     setFilteredProducts(products);
    setLastFilteredProducts(products);
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setLastFilteredProducts(filteredProducts);
    } else {
      const searchedData = filteredProducts?.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setLastFilteredProducts(searchedData);
    }
  };

  return (
    <div className="app">
      <FilterCard
        brands={brands}
        categories={categories}
        maxPrice={maxPrice}
        filterHandler={filterHandler}
        resetHandler={resetHandler}
        searchHandler={searchHandler}
      />
      <ProductsList products={lastFilteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default App;
