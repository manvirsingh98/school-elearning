import React from "react";
import { Link } from "react-dom";
import TextTruncate from "react-text-truncate";

const CustomCard = ({
  _id,
  image,
  name,
  description,
  chapters,
  toRedirect,
}) => {
  return (
    <Link key={_id} to={toRedirect} className="card">
      <div>
        <img className="card-img-top" src={image} alt="Card  cap" />
        <div className="card-body">
          <h5 className="card-title font-weight-bolder">{name}</h5>
          <p className="card-text text-muted">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={description}
            />
          </p>
          <p className="card-text">
            {/* {chapters && (
              <small className="text-muted">
                {chapters.length <= 1
                  ? `${chapters.length} Lession`
                  : `${chapters.length} Lessions`}
              </small>
            )} */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CustomCard;
