import PropTypes from "prop-types";
import ButtonPartial, { buttonPartialOptions } from "../partials/ButtonPartial";

const CardComponent = ({ imgUrl, title, description }) => {
  /*
    props = {
   imgUrl :
    "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
   title : "Horse",
   description : "a0936y4j-0yaos-mgpokgrma;lkfmg;lae,f;lawef"
    }
  */
  // const imgUrl =
  //   "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg";
  // const title = "Horse";
  // const description = "a0936y4j-0yaos-mgpokgrma;lkfmg;lae,f;lawef";
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        <ButtonPartial icon="bi-chat-left-heart-fill">click me</ButtonPartial>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: (props, propName, componentName) => {
    if (
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        props[propName]
      )
    ) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default CardComponent;
