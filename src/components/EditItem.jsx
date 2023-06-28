import React, { useEffect, useState } from "react";

const EditItem = (item) => {
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [status, setStatus] = useState("");
  const [consginee, setConsginee] = useState("");
  //console.log(item.item)

  useEffect(() => {

    if (item.item !== "") {
      var elemnet = document.getElementById(item.item);
      setDate(elemnet.children[1].getAttribute('name'));
      setCustomer(elemnet.children[2].getAttribute('name'));
      setTrackingNo(elemnet.children[3].getAttribute('name'));
      setStatus(elemnet.children[4].getAttribute('name'));
      setConsginee(elemnet.children[5].getAttribute('name'));
    }
  }, [item.item])

  function saveEdit() {
    var editedVal = document.getElementById(item.item)
    editedVal.children[1].innerHTML = date
    editedVal.children[2].innerHTML = customer
    editedVal.children[3].innerHTML = trackingNo
    editedVal.children[4].innerHTML = status
    editedVal.children[5].innerHTML = consginee

    editedVal.children[1].setAttribute('name',date)
    editedVal.children[2].setAttribute('name',customer) 
    editedVal.children[3].setAttribute('name',trackingNo) 
    editedVal.children[4].setAttribute('name',status) 
    editedVal.children[5].setAttribute('name',consginee)

    const tableCells = document.querySelectorAll('.table-cell');

    for (let i = 0; i < tableCells.length; i++) {
      const cell = tableCells[i];
      const originalText = cell.innerText;

      if (originalText.length > 12) { // Проверка длины текста
        const truncatedText = originalText.substring(0, 10) + '...'; // Обрезка и добавление многоточия
        cell.innerText = truncatedText;
      }
    }

  }
  return (
    <div className="modal" tabIndex={-1} id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit shipment info</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3 ">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="text"
                className="form-control "
                id="date"
                placeholder="Enter your new date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="customer" className="form-label">Customer</label>
              <input
                type="text"
                className="form-control "
                id="customer"
                placeholder="Enter your new customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="trackingNo" className="form-label">Tracking number</label>
              <input
                type="text"
                className="form-control "
                id="trackingNo"
                placeholder="Enter your new tracking number"
                value={trackingNo}
                onChange={(e) => setTrackingNo(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="status" className="form-label">Status</label>
              <input
                type="text"
                className="form-control "
                id="status"
                placeholder="Enter your new status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 ">
              <label htmlFor="consignee" className="form-label">Consignee</label>
              <input
                type="text"
                className="form-control "
                id="consignee"
                placeholder="Enter your new consignee"
                value={consginee}
                onChange={(e) => setConsginee(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={saveEdit}
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditItem;
