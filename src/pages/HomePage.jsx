import { useState, useEffect } from "react";
import CourseCardComponent from "../components/CourseCardComponent";
import axios from "axios";

const HomePage = () => {
  const [courseArr, setCourseArr] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3030/api/1")
      .then(({ data }) => {
        setCourseArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (courseArr) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courseArr.map((item) => (
          <div className="col" key={item._id + Date.now()}>
            <CourseCardComponent
              courseName={item.couseName}
              lecturerName={item.lecturer}
              description={item.description}
              category={item.category}
              price={item.price}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};

export default HomePage;
