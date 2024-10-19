/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkelton from "../ProductCardSkelton/ProductCardSkelton";
import "./ProductList.css";

function ProductsList({
  products,
  isLoading,
}: {
  products: any[] | undefined;
  isLoading: boolean;
}) {
  return (
    <div>
      <h3>Total Products: {products?.length}</h3>
      <div className="products">
        <div className="list">
          {isLoading ? (
            <>
              <ProductCardSkelton />
              <ProductCardSkelton />
              <ProductCardSkelton />
              <ProductCardSkelton />
            </>
          ) : (
            products?.map((product: any) => <ProductCard product={product} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
