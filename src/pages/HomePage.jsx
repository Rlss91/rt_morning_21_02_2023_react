import { Fragment, useState } from "react";
import CardComponent from "../components/CardComponent";

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

const HomePage = () => {
  const [arrayToDisplay, setArrayToDisplay] = useState(initialArray);
  const deleteItemFromArray = (id) => {
    console.log("delete from father");
    setArrayToDisplay((copyOfArrayToDisplay) =>
      copyOfArrayToDisplay.filter((item) => item.id != id)
    );
    // initialArray = initialArray.filter((item) => item.id != id);
    // console.log("initialArray", initialArray);
  };
  return (
    <Fragment>
      <h1>Title</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {arrayToDisplay.map((item) => (
          <div className="col" key={item.id + Date.now()}>
            <CardComponent
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              onDelete={deleteItemFromArray}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;
