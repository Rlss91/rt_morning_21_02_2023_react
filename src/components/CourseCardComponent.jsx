import PropTypes from "prop-types";
import ButtonPartial, { buttonPartialOptions } from "../partials/ButtonPartial";
import { Fragment } from "react";

const CourseCardComponent = ({
  id,
  courseName,
  lecturerName,
  description,
  category,
  price,
  isAdmin,
  onAddToWishList,
  onDelete,
  onEdit,
}) => {
  const handleAddToWishListClick = () => {
    onAddToWishList(id);
  };
  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleEditClick = () => {
    onEdit(id);
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
        {isAdmin && (
          <Fragment>
            <ButtonPartial
              icon="bi-pen"
              btnOption={buttonPartialOptions.warning}
              onClick={handleEditClick}
            >
              Edit
            </ButtonPartial>
            <ButtonPartial
              icon="bi-trash"
              btnOption={buttonPartialOptions.danger}
              onClick={handleDeleteClick}
            >
              Delete
            </ButtonPartial>
          </Fragment>
        )}
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
  isAdmin: PropTypes.bool,
  onAddToWishList: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};
CourseCardComponent.defaultProps = {
  isAdmin: false,
};

export default CourseCardComponent;
