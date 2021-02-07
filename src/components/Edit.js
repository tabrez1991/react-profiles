import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const CryptoJS = require("crypto-js");
const Edit = (props) => {
  const handleEdit = () => {
    const data = props.data;
    const key = "my@secret";
    const encryptData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      key
    ).toString();
    props.history.push(`/profile/${encryptData}`);
  };

  return (
    <span onClick={handleEdit}>
      <FontAwesomeIcon icon={faEdit} />
    </span>
  );
};
export default withRouter(Edit);
