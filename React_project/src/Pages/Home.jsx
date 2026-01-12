import React from "react";
import { bg1 } from "../assets";

function Home() {
  return (
    <div>
      <div className=" p-40 relative h-[80vh]">
        <div
          className="absolute inset-0 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="p-10 relative pt-50 right-10 text-white text-2xl">
            <h1 className="font-bold  text-6xl text-white ">
              Secure Entrances With Smart Innovation
            </h1>
            <br></br>
            <p className="text-gray-600">
              High-end Security doors that blend advanced technology with
              elegant design.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white right-50  left-50 bottom-10 p-10 rounded-2xl absolute">
        <h1 className="flex justify-center text-3xl font-bold">
          Ishani Enterprices
        </h1>
        <br />
        <p className="text-gray-600 text-xl flex justify-center">
          Maharashtra's primer French door and window specialists since 2012
        </p><br />
        <div className="gap-5 flex justify-center ">
          <button className="bg-green-600 rounded-md px-22 font-bold py-3 mx-3 text-white ">
            Explore Doors
          </button>
          <button className="border border-green-600 rounded-md font-bold  text-green-600 px-22 py-3">
            Book a Visit
          </button>
        </div>
      </div>

      <div className="bg-gray-100  pb-500 ">
        <h1 className="flex justify-center pt-40 font-bold text-4xl">
          Crafting Elegance Since 2012
        </h1>
        <br />
        <br />
        <p className="text-xl m-5">
          Ishani Enterprises is Maharashtra's primier manufacturer of{" "}
          <b>Premium French doores and windows,</b>blending European elegance
          with Indian craftsmanship. since our founding in 2012, we've
          transformed over 500+ homes and commercial spaces with our{" "}
          <b>Precision-engineered,weather-resistant </b> entrance solution that
          combines asethetic appeal with upcompromising security.
        </p>
      </div>
    </div>
  );
}

export default Home;
