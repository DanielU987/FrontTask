import axios from "axios";
import { useEffect, useState } from "react";
import TutorialList from "../components/TutorialList";
import Loading from "../components/Loading";

const Home = () => {
  const [tutorial, setTutorial] = useState();
  const [loading, setLoading] = useState(true);

  const url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setTutorial(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteTutorial = async (orderNo) => {
    try {
      await axios.delete(`${url}/${orderNo}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  //Update
  const editTutorial = async (
    orderNo,
    date,
    customer,
    trackingNo,
    status,
    consignee
  ) => {
    const filtered = tutorial
      .filter((tutor) => tutor.orderNo === orderNo)
      .map((tutor) => ({
        date: date,
        customer: customer,
        trackingNo: trackingNo,
        status: status,
        consignee: consignee,
      }));

    try {
      await axios.put(`${url}/${orderNo}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TutorialList
            tutorials={tutorial}
            deleteTutorial={deleteTutorial}
            editTutorial={editTutorial}
          />
        </>
      )}
    </>
  );
};

export default Home;
