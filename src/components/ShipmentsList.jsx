
import EditItem from './EditItem'
import LookUp from './LookUp'

import { useState } from 'react';

const ShipmentsList = ({ shipments, deleteShipment }) => {
  const [item, setItem] = useState("");

  return (
    <div className="container mt-4">
      <table className="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <th scope="col">orderNo</th>
            <th scope="col">date</th>
            <th scope="col">customer</th>
            <th scope="col">trackingNo</th>
            <th scope="col">status</th>
            <th scope="col">consignee</th>
            <th scope="col" className="text-center text-nowrap">
              Edit
            </th>
          </tr>
        </thead>
        <tbody id="table" className='table-group-divider'>
          {shipments?.map((item) => {
            const { orderNo, date, customer, trackingNo, status, consignee } = item;
            return (
              <tr id={orderNo}>
                <td>{orderNo}</td>
                <td>{date}</td>
                <td>{customer}</td>
                <td>{trackingNo}</td>
                <td>{status}</td>
                <td>{consignee}</td>
                <td className="text-center">
                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#look-modal" onClick={() => setItem(orderNo)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </button>
                  <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-modal" onClick={() => setItem(orderNo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                    </svg>
                  </button>

                  <button className="btn btn-danger" onClick={() => { deleteShipment(item.orderNo); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditItem item={item} />
      <LookUp item={item} />
    </div>
  );
};

export default ShipmentsList;
