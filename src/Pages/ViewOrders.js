import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import Card from "../Components/Cards";
import { FaSpinner } from "react-icons/fa";

function ViewOrders() {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      firebase.fetchMyBooks(firebase.user.uid)?.then((books) => {
        setBooks(books.docs);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [firebase]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-4xl animate-spin" />
      </div>
    );
  }

  if (!firebase.isLoggedIn) {
    return (
        <div className="flex items-center justify-center text-center h-screen font-bold text-4xl">
        Please Login to see Orders
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {books.map((book) => (
          <div key={book.id}>
            <Card link={`/orders/${book.id}`} id={book.id} {...book.data()} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewOrders;
