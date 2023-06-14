import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditItem from '../components/EditItem'
import { useState } from 'react';

const TutorialList = ({tutorials,deleteTutorial,editTutorial}) => {
 const [item, setItem] = useState("");

  return (
    <div className="container mt-4">
      <table className="table table-dark fs-5 table-striped">
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
        <tbody>
          {tutorials?.map((item) => {
            const { orderNo, date, customer,trackingNo,status,consignee } = item;
            return (
              <tr key={orderNo}>
                <th>{orderNo}</th>
                <td>{date}</td>
                <td>{customer}</td>
                <td>{trackingNo}</td>
                <td>{status}</td>
                <td>{consignee}</td>
                <td className="text-center">
                  <FaEdit 
                  size={20} 
                  className="me-3 text-info cursor " 
                  data-bs-toggle="modal" 
                  data-bs-target="#edit-modal"
                  onClick={()=> 
                    setItem(item)
                 } />
                  <AiFillDelete size={22} className="text-danger cursor" onClick={()=>{
                    deleteTutorial(item.id);
                   
                  }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditItem editTutorial={editTutorial} item={item} />
    </div>
  );
};

export default TutorialList;
