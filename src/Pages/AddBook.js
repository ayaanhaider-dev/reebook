import React, { useState } from "react";
import { useFirebase } from "../Context/firebase";

function AddBook() {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [isbnNo, setIsbnNo] = useState("");
  const [price, setprice] = useState("");
  const [coverPic, setCoverPic] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleAddBook(name, isbnNo, price, coverPic)
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={formSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Add your Book</h2>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Book Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            id="namebook"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Book Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            ISBN Number
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            id="IsBnNumber"
            onChange={(e) => setIsbnNo(e.target.value)}
            value={isbnNo}
            placeholder="ISBN Number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Price
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            id="price"
            onChange={(e) => setprice(e.target.value)}
            value={price}
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Cover Photo
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="file"
            id="coverpic"
            onChange={(e) => setCoverPic(e.target.files[0])}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
