/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkelton from "../ProductCardSkelton/ProductCardSkelton";
// import "./ProductList.css";

function ProductsList({
  products,
  isLoading,
}: {
  products: any[] | undefined;
  isLoading: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 font-semibold">
      <h3>Total Products: {products?.length}</h3>
      <div className="products ">
        <div className="list inline-grid md:grid-cols-2 lg:grid-cols-3  gap-4 md:min-w-[475px] lg:min-w-[730px]">
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
