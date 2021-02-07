import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import Alert from "./Alert";
import axios from "axios";

const Delete = (props) => {
  const [state, setState] = useState({
    isDelete: false
  });

  const handleDelete = () => {
    setState({ ...state, isDelete: true });
  };

  const handleAction = (action) => {
    if (action === "yes") {
      deleteProfile(props.id);
    }
    setState({ ...state, isDelete: false });
  };

  const deleteProfile = async (id) => {
    props.Loading();
    await axios
      .post(
        "https://us-central1-myapplication-9376e.cloudfunctions.net/deleteProfile",
        { id: id }
      )
      .then(() => {
        props.handleRefresh();
      });
  };

  const { isDelete } = state;

  return (
    <Fragment>
      {isDelete ? <Alert action={handleAction} /> : null}
      <span onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </Fragment>
  );
};
export default Delete;
