import React, { useEffect, useState } from "react";

const LookUp = (item) => {
  const [orderNo, setOrderNo] = useState("");
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [status, setStatus] = useState("");
  const [consginee, setConsginee] = useState("");
  //console.log(item.item)

  useEffect(() => {
    if (item.item !== "") {
      var elemnet = document.getElementById(item.item);
      console.log(elemnet);
      setOrderNo(elemnet.children[0].innerHTML);
      setDate(elemnet.children[1].innerHTML);
      setCustomer(elemnet.children[2].innerHTML);
      setTrackingNo(elemnet.children[3].innerHTML);
      setStatus(elemnet.children[4].innerHTML);
      setConsginee(elemnet.children[5].innerHTML);
    }
  }, [item.item])

  function close() {

  }
  return (
    <div className="modal" tabIndex={-1} id="look-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Shipment info</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
          <div className="mb-3 ">
              <label htmlFor="orderNo" className="form-label">
                Order number
              </label>
              <input
                type="text"
                className="form-control "
                id="orderNo"
                value={orderNo}
                readOnly
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control "
                id="date"
                value={date}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="customer" className="form-label">
                Customer
              </label>
              <input
                type="text"
                className="form-control "
                id="customer"

                value={customer}
                readOnly
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="trackingNo" className="form-label">
                Tracking number
              </label>
              <input
                type="text"
                className="form-control "
                id="trackingNo"

                value={trackingNo}

                readOnly
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <input
                type="text"
                className="form-control "
                id="status"

                value={status}
                readOnly
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="consignee" className="form-label">
                Consignee
              </label>
              <input
                type="text"
                className="form-control "
                id="consignee"

                value={consginee}
                readOnly
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={close}
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LookUp;
