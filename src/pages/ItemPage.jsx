import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

let initialArray = [
  {
    id: 1,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 1",
    description: "asdfasdfasdfasdfasdfasdf",
  },
  {
    id: 2,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 2",
    description: "asdfasdfasdfasdfasdfasdf",
  },
  {
    id: 3,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 3",
    description: "asdfasdfasdfasdfasdfasdf",
  },
  {
    id: 4,
    imgUrl:
      "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
    title: "Horse 4",
    description: "asdfasdfasdfasdfasdfasdf",
  },
];

const ItemPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const item = initialArray.find((item) => item.id == id);
    setSelectedItem(item);
  }, [id]);
  if (selectedItem) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={selectedItem.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
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
export default ItemPage;
