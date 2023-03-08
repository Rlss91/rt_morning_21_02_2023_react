import PropTypes from "prop-types";

const CourseCardComponent = ({
  courseName,
  lecturerName,
  description,
  category,
  price,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Course name</h5>
        <h6 className="card-subtitle mb-2 text-muted">Lecturer name</h6>
        <p className="card-text">Description</p>
        <p className="card-text">
          <small className="text-muted">Category</small>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price 1</li>
        <li className="list-group-item">Price 2</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

CourseCardComponent.propTypes = {
  courseName: PropTypes.string.isRequired,
  lecturerName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.shape({
    coursePrice: PropTypes.number.isRequired,
    privetPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseCardComponent;
