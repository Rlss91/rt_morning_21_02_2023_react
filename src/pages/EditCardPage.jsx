import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonPartial, { buttonPartialOptions } from "../partials/ButtonPartial";

const EditCardPage = () => {
  const [courseData, setCourseData] = useState(null);
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const courseId = searchParams.get("id");
  const { courseId } = useParams();

  useEffect(() => {
    axios
      .get("/admin/getCourse/" + courseId)
      .then(({ data }) => {
        setCourseData(data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (ev) => {
    const newcourseData = JSON.parse(JSON.stringify(courseData));
    newcourseData[ev.target.id] = ev.target.value;
    setCourseData(newcourseData);
  };

  const handleDiscard = (e) => {
    e.preventDefault();

    axios
      .get("/admin/getCourse/" + courseId)
      .then(({ data }) => {
        setCourseData(data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      console.log(courseData);
      await axios.post("/admin/editCourse/", {
        productID: courseData._id,
        //TODO FIX BUG IN BACKEND, SHOULD BE CALL FOR UPDATING MORE THAN COLUMN!
      });
    } catch (err) {
      console.log(err);
    }
  };
  if (courseData) {
    return (
      <form>
        <h5 className="font-weight-bold">
          <i className="bi bi-pencil-square"></i>
          {"  "}Updating course: {courseData.couseName}
        </h5>

        <p className="font-italic">ID: {courseData._id}</p>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Course Name:</label>
            <input
              type="text"
              id="couseName"
              className="form-control mb-3"
              onChange={handleInputChange}
              value={courseData.couseName}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Category</label>
            <input
              type="text"
              className="form-control mb-3"
              id="category"
              value={courseData.category}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Lecturer:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="lecturer"
              value={courseData.lecturer}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Description:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="description"
              value={courseData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <ButtonPartial
          btnOption={buttonPartialOptions.warning}
          onClick={handleSaveChanges}
        >
          Save changes
        </ButtonPartial>
        <ButtonPartial
          btnOption={buttonPartialOptions.danger}
          onClick={handleDiscard}
        >
          Discard
        </ButtonPartial>
      </form>
    );
  } else {
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
};
export default EditCardPage;
