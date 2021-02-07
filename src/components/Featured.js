import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Freatured = (props) => {
  return (
    <span onClick={props.handleRefresh}>
      <FontAwesomeIcon icon={faHeart} />
    </span>
  );
};
export default Freatured;
