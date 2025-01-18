"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const BookingUpdateForm = ({ data }) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  console.log("FROM UPDATE FORM", data);

  const handleBookService = async (e) => {
    toast("Submitting Booking...");
    e.preventDefault();

    const form = e.target;

    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const bookingPayload = {
      // Session
      // customerName: name,
      // email,

      // User Inputs
      date,
      phone,
      address,

      // Extra information
      // service_id: data._id,
      // service_name: data.title,
      // service_img: data.img,
      // service_price: data.price,
    };

    console.log(bookingPayload);
    const res = await fetch(
      `https://nextjs-car-doctor-kappa.vercel.app/api/my-bookings/${data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(bookingPayload),
      }
    );
    const postedResponse = await res.json();
    console.log("Updated DATA response", postedResponse);
    router.push("/my-bookings");
  };

  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl mb-4">
          Book Service : {data?.service_name}
        </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={session?.user?.name}
                readOnly
                type="text"
                name="name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={session?.user?.email}
                readOnly
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={data?.service_price}
                readOnly
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={data?.date}
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={data?.phone}
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                defaultValue={data?.address}
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingUpdateForm;
