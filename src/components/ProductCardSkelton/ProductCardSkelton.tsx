import "./ProductCardSkelton.css";

function ProductCardSkelton() {
  return (
    <div className="card skeleton">
      <div className="col col-1 skeleton">
        <div className="image" />
      </div>
      <div className="col col-2 skeleton">
        <div className="details-main skeleton">
          <div className="name"></div>
          <div className="description skeleton">
            <div className="name"></div>
            <div className="name"></div>
          </div>
        </div>
        <div className="details-info skeleton">
          <div className="name"></div>
          <div className="badges skeleton">
            <p className="badge category"></p>
            <p className="badge brand"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkelton;
