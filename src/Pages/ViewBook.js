import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFirebase } from "../Context/firebase";
import { FaSpinner } from "react-icons/fa";

function ViewBook(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.getBookDetailbyID(params.bookId).then((value) => {
      setData(value.data());
      setIsLoading(false);
    });
  }, [firebase, params.bookId]);

  const orderPlacement = async () => {
    await firebase.orderPlacement(params.bookId, qty);
    setIsOrderPlaced(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect to "/" after 3 seconds
  };

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data, firebase]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-4xl animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center text-center h-screen font-bold text-4xl">
        Book not found
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      {isOrderPlaced && (
        <div className="bg-green-500 text-white text-center py-2">
          Order placed successfully! Redirecting...
        </div>
      )}
      <h1 className="text-4xl font-bold text-center mt-8 border-b-2 pb-2">
        Book Details
      </h1>
      <div className="container mx-auto mt-5 p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
          <h1 className="text-xl mb-2">Details</h1>
          <p>Price: Rs. {data.price}</p>
          <p>ISBN Number: {data.isbn}</p>
          <h1 className="text-xl mt-4 mb-2">Owner Details</h1>
          <p>Name: {data.displayName}</p>
          <p>Email: {data.userEmail}</p>
          <div className="mb-3 mt-4">
            <label htmlFor="quantity" className="block mb-1">
              Qty
            </label>
            <input
              id="quantity"
              onChange={(e) => setQty(e.target.value)}
              value={qty}
              type="number"
              placeholder="Enter Qty"
              className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={orderPlacement}
            className="bg-blue-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Buy Now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center mt-5 lg:mt-0">
          <img src={url} alt={data.name} className="w-3/4 lg:w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
