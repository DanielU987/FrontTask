import React, { useEffect, useState } from "react";

const EditItem = ({ editTutorial, item }) => {
  const {
    orderno,
    newDate,
    newCustomer,
    newTrackingNo,
    newStatus,
    newConsignee,
  } = item;
  const [date, setDate] = useState(newDate);
  const [customer, setCustomer] = useState(newCustomer);
  const [trackingNo, setTrackingNo] = useState(newTrackingNo);
  const [status, setStatus] = useState(newStatus);
  const [consignee, setConsignee] = useState(newConsignee);

  useEffect(() => {
    setDate(newDate);
    setCustomer(newCustomer);
    setTrackingNo(newTrackingNo);
    setStatus(newTrackingNo);
    setConsignee(newConsignee);
  }, [newDate, newCustomer,newTrackingNo,newStatus,newConsignee]);

  const handleEdit = (e) => {
    e.preventDefault();
    editTutorial(orderno,date,customer,trackingNo,status,consignee);
    setDate("");
    setCustomer("");
    setTrackingNo("");
    setStatus("");
    setConsignee("");
  };

  return (
    <div className="modal" tabIndex={-1} id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Tutorial</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3 fs-5">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="date"
                placeholder="Enter your Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 fs-5">
              <label htmlFor="customer" className="form-label">
                newCustomer
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="customer"
                placeholder="Enter your newCustomer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 fs-5">
              <label htmlFor="trackingNo" className="form-label">
                NewTrackingNo
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="trackingNo"
                placeholder="Enter your newCustomer"
                value={trackingNo}
                onChange={(e) => setTrackingNo(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 fs-5">
              <label htmlFor="status" className="form-label">
              status
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="status"
                placeholder="Enter your newCustomer"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 fs-5">
              <label htmlFor="consignee" className="form-label">
              consignee
              </label>
              <input
                type="text"
                className="form-control fs-5"
                id="consignee"
                placeholder="Enter your newCustomer"
                value={consignee}
                onChange={(e) => setConsignee(e.target.value)}
                required
              />
            </div>

          </div>
          <div className="modal-footer">
            <button
              onClick={handleEdit}
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
