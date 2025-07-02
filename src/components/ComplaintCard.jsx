import React from "react";
import { Link } from "react-router-dom";

function ComplaintCard({ title, imgSrc }) {
  const slug = title.toLowerCase().replace(/\s+/g, "-"); // convert to slug

  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card h-100">
        <img
          decoding="async"
          width={311}
          height={195}
          src={imgSrc}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <Link to={`/complaints/${slug}`} className="btn btn-primary mt-auto">
            Consult Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComplaintCard;
