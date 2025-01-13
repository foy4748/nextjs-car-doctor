"use client";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyAllBookings = () => {
  return (
    <div className="my-8">
      <h1 className="text-center font-bold text-3xl my-4">My All Bookings</h1>
      <div className="w-11/12 mx-auto overflow-x-auto">
        <table className="w-full table table-zebra">
          <thead className="border">
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td>Image</td>
              <td>Service</td>
              <td>Date</td>
              <td>Price</td>
              <td>
                <FaRegEdit className="h-8 w-8 font-bold" />
              </td>

              <td>
                <MdDelete className="h-8 w-8 font-bold" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAllBookings;
