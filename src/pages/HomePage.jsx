import { useState, useEffect } from "react";
import CourseCardComponent from "../components/CourseCardComponent";
import axios from "axios";
import { toast } from "react-toastify";

const HomePage = () => {
  const [courseArr, setCourseArr] = useState(null);
  useEffect(() => {
    axios
      .get("/1")
      .then(({ data }) => {
        setCourseArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddToWishListClick = async (id) => {
    // console.log(id);
    try {
      await axios.post("/users/wish", { productID: id });
      toast.error("🦄 Wow so easy!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (courseArr) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courseArr.map((item) => (
          <div className="col" key={item._id + Date.now()}>
            <CourseCardComponent
              id={item._id}
              courseName={item.couseName}
              lecturerName={item.lecturer}
              description={item.description}
              category={item.category}
              price={item.price}
              onAddToWishList={handleAddToWishListClick}
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
