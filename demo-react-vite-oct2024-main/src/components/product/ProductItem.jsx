const ProductItem = function (props) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card m-3">
          <img className="" src={props.data.prodImage}></img>
          <div className="card-title">
            <h5>{props.data.prodName}</h5>
          </div>
          <div className="card-text">
            <h6>Product ID: {props.data.prodId}</h6>
          </div>
          <div className="card-text">
            <h6>Product Price: {props.data.prodCost}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
