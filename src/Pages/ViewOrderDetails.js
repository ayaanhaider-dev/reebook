import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../Context/firebase";


const ViewOrderDetails = () => {
  const params = useParams();
  const firebase = useFirebase();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, [firebase, params.bookId]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Orders</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {orders.map((order) => {
          const data = order.data();
          return (
            <div
              key={order.id}
              className="bg-white shadow-md p-6 rounded-lg"
            >
              <h5 className="text-lg font-bold mb-2">Order By: {data.displayName}</h5>
              <h6 className="text-md mb-2">Qty: {data.qty}</h6>
              <p className="text-sm">Email: {data.userEmail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewOrderDetails;
