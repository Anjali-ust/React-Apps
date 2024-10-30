import { useRef, useState } from "react";

export default function EcomAddValidationRef() {
  const prodNameRef = useRef(null);
  const prodCostRef = useRef(null);
  const myFormRef = useRef(null);
  const [gadgetData, setGadgetData] = useState({
    prodId: 0,
    prodName: "",
    prodCost: 0,
    prodImage: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(myFormRef);
    console.log(gadgetData);
  }
  return (
    <>
      <div className="container m-5">
        <div className="card">
          <form onSubmit={(e) => handleFormSubmit(e)} ref={myFormRef}>
            <div className="card-header bg-success text-light">
              <h3>ADD A NEW GADGET</h3>
            </div>
            <div className="card-body">
              <div className="form-control-group m-1">
                <label htmlFor="gName" className="form-label">
                  Gadget Name:
                </label>
                <input
                  type="text"
                  id="gName"
                  placeholder="Enter Gadget Name"
                  className="form-control"
                  ref={prodNameRef}
                  required
                  minLength={5}
                  onChange={(e) =>
                    setGadgetData({
                      ...gadgetData,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="text-danger text-small">
                {prodNameRef.current &&
                prodNameRef.current.validity.valueMissing
                  ? "Gadget Name is required!"
                  : ""}
              </div>
              <div className="text-danger text-small">
                {prodNameRef.current && prodNameRef.current.validity.tooShort
                  ? "Length should be atleast 5 characters!!"
                  : ""}
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="gCost" className="form-label">
                  Gadget Cost:
                </label>
                <input
                  type="text"
                  id="gCost"
                  placeholder="Enter Gadget Cost"
                  className="form-control"
                  ref={prodCostRef}
                  required
                  onChange={(e) =>
                    setGadgetData({
                      ...gadgetData,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></input>
                <div className="text-danger text-small">
                  {prodCostRef.current &&
                  prodCostRef.current.validity.valueMissing
                    ? "Gadget Cost is required!"
                    : ""}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="gImage" className="form-label">
                  Gadget Image Url:
                </label>
                <input
                  type="text"
                  id="gImage"
                  placeholder="Enter Gadget Image Url"
                  className="form-control"
                  onChange={(e) =>
                    setGadgetData({
                      ...gadgetData,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="card-footer bg-success text-light">
              <button type="submit" className="btn btn-light text-success">
                ADD
              </button>
              <button type="reset" className="btn btn-light text-success mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
