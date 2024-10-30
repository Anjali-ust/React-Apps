import { useState } from "react";

export default function EcomEdit() {
  const [gadgetData, setGadgetData] = useState({
    prodId: 0,
    prodName: "",
    prodCost: 0,
    prodImage: "",
  });

  function handleFormSubmit(event) {
    // 1. prevent the default nature of submit button
    event.preventDefault();
    // 2. for now console.log the form data which is in the state variable gadgetData.
    //  later this form data will be sent to the back end application
    console.log(gadgetData);
  }
  return (
    <>
      <div className="container m-5">
        <div className="card">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="card-header bg-primary text-light">
              <h3>EDIT A GADGET</h3>
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
                  onChange={(e) =>
                    setGadgetData({ ...gadgetData, prodName: e.target.value })
                  }
                ></input>
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
                  onChange={(e) =>
                    setGadgetData({ ...gadgetData, prodCost: e.target.value })
                  }
                ></input>
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
                    setGadgetData({ ...gadgetData, prodImage: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="card-footer bg-primary text-light">
              <button type="submit" className="btn btn-light text-primary">
                UPDATE
              </button>
              <button type="reset" className="btn btn-light text-primary mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
