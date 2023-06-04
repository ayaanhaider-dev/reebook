import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import Card from "../Components/Cards";

function Home() {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, [firebase]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold mb-8">Listed Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {books.slice(0, 5).map((book) => (
        <Card link={`/view/${book.id}`} key={book.id} id={book.id} {...book.data()} />
        ))}
      </div>
    </div>
  );
}

export default Home;
