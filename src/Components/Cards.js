import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const firebase = useFirebase();

  const navigate = useNavigate()

  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setURL(url));
  }, [firebase, props.imageURL]);

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <img
        src={url}
        alt=""
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <p className="text-gray-600 mt-2">
          The Book {props.name}. It Cost Rs.{props.price}
        </p>
        <button onClick={e => navigate(props.link)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
