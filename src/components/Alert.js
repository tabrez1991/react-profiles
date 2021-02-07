import React from "react";

const Alert = (props) => {
  return (
    <div className="alertify">
      <div className="dialog">
        <div>
          <p className="msg">Do you want to delete?</p>
          <nav>
            <button
              className="cancel"
              tabIndex="2"
              onClick={() => props.action("no")}
            >
              No
            </button>
            <button
              className="ok"
              tabIndex="1"
              onClick={() => props.action("yes")}
            >
              Yes
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Alert;
