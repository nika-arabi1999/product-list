/* eslint-disable @typescript-eslint/no-explicit-any */
// import "./ProductCard.css";

function ProductCard({ product }: { product: any }) {
  return (
    <div className="min-w-60 flex flex-col gap-4 justify-between border border-solid border-gray-200 rounded-xl px-4 py-3 shadow-sm">
      <div className="flex justify-center align-middle">
        <img
          src={"https://products-catalog2.vercel.app" + product?.image}
          alt={product.name}
          className="image w-64 aspect-square"
        />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-1">
          <div className="name font-bold text-xl">{product.name}</div>
          <div className="description">
            <p className="text-slate-500 font-normal">{product.description}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="price font-semibold text-lg">${product.price}</p>
          <div className="badges flex justify-between gap-2 font-normal text-sm">
            <p className="bg-slate-400 py-1 px-2 rounded-2xl">{product.category}</p>
            <p className="bg-blue-400 py-1 px-2 rounded-2xl">{product.brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
