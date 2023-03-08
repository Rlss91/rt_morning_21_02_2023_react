import PropTypes from "prop-types";
import ButtonPartial from "../partials/ButtonPartial";

const CourseCardComponent = ({
  id,
  courseName,
  lecturerName,
  description,
  category,
  price,
  onAddToWishList,
}) => {
  const handleAddToWishListClick = () => {
    onAddToWishList(id);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{courseName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{lecturerName}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{category}</small>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">In class: {price.coursePrice}</li>
        <li className="list-group-item">Private lesson: {price.privetPrice}</li>
      </ul>
      <div className="card-body">
        <ButtonPartial icon="bi-bag-heart" onClick={handleAddToWishListClick}>
          Add to wish list
        </ButtonPartial>
      </div>
    </div>
  );
};

CourseCardComponent.propTypes = {
  id: PropTypes.string,
  courseName: PropTypes.string.isRequired,
  lecturerName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.shape({
    coursePrice: PropTypes.number.isRequired,
    privetPrice: PropTypes.number.isRequired,
  }).isRequired,
  onAddToWishList: PropTypes.func,
};

export default CourseCardComponent;
