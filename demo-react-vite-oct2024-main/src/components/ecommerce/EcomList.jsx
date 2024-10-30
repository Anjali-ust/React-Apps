import { useState } from "react";

function EcomList() {
  const [cart, setCart] = useState([]);
  const [wishlist,setWishlist] = useState([]);
  const [showWishlist,setShowWishlist] = useState(false);
  const [duplicateMessage,setDuplicateMessage] = useState("");
  const [wishlistMessage,setWishlistMessage] = useState("")
  let totalCost = 0;
  let allProducts = [
    {
      prodId: 501,
      prodName: "Laptop",
      prodCost: 40000,
      prodImage:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      prodId: 502,
      prodName: "Mobile",
      prodCost: 30000,
      prodImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
    },
    {
      prodId: 503,
      prodName: "Tablet",
      prodCost: 20000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    },
    {
      prodId: 504,
      prodName: "Watch",
      prodCost: 30000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1723561230205-3a8f566f8ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB3YXRjaCUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
    },
    {
      prodId: 505,
      prodName: "Desktop",
      prodCost: 25000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  function addToCart(prodId) {
    //console.log(prodId);
    // fetch the product with id prodId
    let fetchedProduct = allProducts.find(
      (eachProduct) => eachProduct.prodId == prodId
    );
    // add the product object to the cart array state variable
    let newId = cart.length == 0 ? 1 : cart[cart.length - 1].cartId + 1;
    setCart([...cart, { ...fetchedProduct, cartId: newId }]); // we cannot do this ---> cart.push(fetchedProduct)
  }

  function deleteCartItem(cartId) {
    let filteredCart = cart.filter(
      (eachCartItem) => eachCartItem.cartId != cartId
    );
    setCart(filteredCart);
  }

  function deleteWishlistItem(prodId){
    let filteredWishlist = wishlist.filter((eachWishlist)=> eachWishlist.prodId!=prodId);
    setWishlist(filteredWishlist);
  }

  function handleAddToWishlist(prodId)
  {
    let duplicateItem = wishlist.find((eachProduct) => eachProduct.prodId==prodId);
      if(duplicateItem){
         setDuplicateMessage("Item is already in the wishlist");
         setTimeout(() => {
          setDuplicateMessage("");
        }, 1000);
      }
      else{
        setDuplicateMessage("");
        setWishlistMessage("Item added successfully");
        let fetchedProduct = allProducts.find((eachProduct) => eachProduct.prodId==prodId);
        setWishlist([...wishlist,{...fetchedProduct}]);
        setTimeout(() => {
          setWishlistMessage("");
        }, 1000);
      }
    }
  function handleViewWishlist() {
    setShowWishlist(!showWishlist); 
  }

  let mappedWishList = wishlist.map((eachWishlist) =>
  (
    <li key={eachWishlist.prodId} onClick={()=>deleteWishlistItem(eachWishlist.prodId)}>{eachWishlist.prodName}</li>
  )
  );

  let mappedCart = cart.map((eachCartItem) => (
    <tr key={eachCartItem.cartId}>
      <td>{eachCartItem.cartId}</td>
      <td>{eachCartItem.prodId}</td>
      <td>{eachCartItem.prodName}</td>
      <td>Rs.{eachCartItem.prodCost}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteCartItem(eachCartItem.cartId)}
        >
          🗑️
        </button>
      </td>
    </tr>
  ));

  let mappedAllProducts = allProducts.map((eachProduct) => (
    <div className="col-sm-12 col-md-6 col-lg-3" key={eachProduct.prodId}>
      <div className="card m-1">
        <img className="" src={eachProduct.prodImage}></img>
        <div className="card-title">
          <h5>{eachProduct.prodName}</h5>
        </div>
        <div className="card-text">
          <p>Product ID: {eachProduct.prodId}</p>
        </div>
        <div className="card-text">
          <p>Product Price: {eachProduct.prodCost}</p>
        </div>
        <div>
          <button
            className="btn btn-dark"
            onClick={() => addToCart(eachProduct.prodId)}
          >
            🛒
          </button>
          <button className="btn btn-info m-2" onClick={()=>handleAddToWishlist(eachProduct.prodId)}>❤️</button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container m-3">
        <div className="row">
          <div className="col-10">
            <h3>LIST OF GADGETS</h3>
            {duplicateMessage && (
                  <div className="alert alert-warning mt-2">
                    {duplicateMessage}
                  </div>
                )}
               {wishlistMessage && (
                  <div className="alert alert-success mt-2">
                    {wishlistMessage}
                  </div>
                )}
            <div className="row">{mappedAllProducts}</div>
          </div>
          <div className="col-2">
            <h5 style={{ fontFamily: 'Arial, sans-serif', color: 'Purple' }}>Cart Items</h5>
            {cart.length == 0 ? (
              "CART IS EMPTY!"
            ) : (
              <div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>PROD ID</th>
                      <th>NAME</th>
                      <th>COST</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{mappedCart}</tbody>
                </table>
                <div>
                  <p>Total Items: {cart.length}</p>
                  <p>
                    Total Cost: Rs.
                    {cart.reduce(
                      (sum, eachCartItem) => sum + eachCartItem.prodCost,
                      0
                    )}
                  </p>
                </div>

              </div>
            )}
            <div className="mt-5">
             <button className="btn btn-primary" onClick={handleViewWishlist}>{showWishlist ? "Hide wishlist" : "View Wishlist"}</button>
            </div>
            {showWishlist && (
              <div className="mt-3">
                <h6>WISHLIST ITEMS</h6>
                {wishlist.length == 0 ? (
                  "WISHLIST IS EMPTY!"
                ) : (
                  <ul>
                    {mappedWishList}
                  </ul>
                )}
               
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EcomList;
