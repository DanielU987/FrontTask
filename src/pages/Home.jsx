import axios from "axios";
import { useEffect, useState } from "react";
import ShipmentsList from "../components/ShipmentsList";
import Loading from "../components/Loading";

const Home = () => {
  const [shipment, setShipment] = useState();
  const [loading, setLoading] = useState(true);

  const url = "https://my.api.mockaroo.com/shipments.json?key=1b04a560"; // I used a custom api to create this work, because the original one was unavailable.
  
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setShipment(data);
      
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    getData();
  }, []);

  const deleteShipment = async (orderNo) => {
    try {
      {
        const element = document.getElementById(orderNo);
        element.remove();
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ShipmentsList
            shipments={shipment}
            deleteShipment={deleteShipment}
          />
        </>
      )}
    </>
  );
};

export default Home;
