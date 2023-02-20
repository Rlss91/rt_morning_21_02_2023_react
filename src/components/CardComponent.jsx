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
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        <ButtonPartial
          btnOption={buttonPartialOptions.danger}
          icon="bi-chat-left-heart-fill"
        >
          click me
        </ButtonPartial>
      </div>
    </div>
  );
};

export default CardComponent;
