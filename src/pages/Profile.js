import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

const CryptoJS = require("crypto-js");

const Profile = () => {
  const [state, setState] = useState({ data: {} });

  useEffect(() => {
    const encryptData = window.location.href.split("profile/")[1];
    const key = "my@secret";
    const data = JSON.parse(
      CryptoJS.AES.decrypt(encryptData, key).toString(CryptoJS.enc.Utf8)
    );
    setState({ ...state, data: data });
  }, []);

  const { data } = state;

  return (
    <div className="profile">
      <div className="images-icon">
        <img src={data.avtaar} alt={data.id} />
      </div>
      <div className="details">
        <h5>{data.name}</h5>
        <div className="details-para email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{data.email}</span>
        </div>
        <div className="details-para phone">
          <FontAwesomeIcon icon={faPhone} />
          <span>{data.phone_number}</span>
        </div>
        <div className="details-para global">
          <FontAwesomeIcon icon={faGlobe} />
          <span>{data.website}</span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
