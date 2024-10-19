import './ProductCard.css';

function ProductCard({ product }: { product: any }) {
   return (
      <div className='card'>
         <div className='col col-1'>
            <img src={'https://products-catalog2.vercel.app' + product?.image} alt={product.name} className='image' />
         </div>
         <div className='col col-2'>
            <div className="details-main">
               <div className='name'>{product.name}</div>
               <div className='description'>
                  <p>{product.description}</p>
               </div>
            </div>
            <div className='details-info'>
               <p className='price'>${product.price}</p>
               <div className="badges">
                  <p className='badge category'>{product.category}</p>
                  <p className='badge brand'>{product.brand}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
