import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
const Loader = () => {
  return (
    <div className="preloader">
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
};

export default Loader;
