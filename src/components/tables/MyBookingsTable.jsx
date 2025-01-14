"use client";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyAllBookings = ({ data }) => {
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
            {data?.map((item) => {
              return (
                <tr key={item._id} className="border">
                  <td>
                    <Image
                      src={item.service_img}
                      alt={item.service_name}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{item.service_name}</td>
                  <td>{item.date}</td>
                  <td>{item.service_price}</td>
                  <td>
                    <FaRegEdit className="h-8 w-8 font-bold" />
                  </td>

                  <td>
                    <MdDelete className="h-8 w-8 font-bold" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAllBookings;
