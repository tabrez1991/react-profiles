import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import Delete from "./Delete";
import Edit from "./Edit";
import Freatured from "./Featured";

const Profiles = (props) => {
  return (
    <div className="profile">
      <div className="images-icon">
        <img src={props.data.avtaar} alt={props.data.id} />
      </div>
      <div className="details">
        <h5>{props.data.name}</h5>
        <div className="details-para email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{props.data.email}</span>
        </div>
        <div className="details-para phone">
          <FontAwesomeIcon icon={faPhone} />
          <span>{props.data.phone_number}</span>
        </div>
        <div className="details-para global">
          <FontAwesomeIcon icon={faGlobe} />
          <span>{props.data.website}</span>
        </div>
      </div>
      <div className="profileEvents">
        <Freatured handleRefresh={props.handleRefresh} />
        <Edit data={props.data} />
        <Delete
          id={props.data.id}
          handleRefresh={props.handleRefresh}
          Loading={props.Loading}
        />
      </div>
    </div>
  );
};
export default React.memo(Profiles);
