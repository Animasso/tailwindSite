import React from "react";
import { reviews } from "../constants";
import ReviewsCard from "../components/ReviewsCard";
const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        {" "}
        What Our <span className=" text-coral-red">Customers</span> Say?
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center">
        Hear geniune stories from our satisfied customers about their exeptional
        experiences with us.{" "}
      </p>
      <div className=" mt-24 flex flex-1 justify-evenly text-center max-md:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewsCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
