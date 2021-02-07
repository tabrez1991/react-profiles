import { Fragment, useEffect, useState } from "react";
import Profile from "../components/Profiles";
import Loader from "../components/Loader";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({
    isLoading: true,
    data: []
  });

  const getData = async () => {
    setState({ ...state, isLoading: true, data: [] });
    let data = await axios.get(
      "https://us-central1-myapplication-9376e.cloudfunctions.net/getProfiles"
    );
    const dataProfile = data.data.interview;
    setState({
      ...state,
      isLoading: false,
      data: dataProfile
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRefresh = () => {
    getData();
  };

  const Loading = () => {
    setState({ isLoading: true });
  };

  const { isLoading, data } = state;
  return (
    <div className="dashboard">
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="container">
            {data.map((item) => (
              <Profile
                data={item}
                handleRefresh={handleRefresh}
                key={item.id}
                Loading={Loading}
              />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default App;
