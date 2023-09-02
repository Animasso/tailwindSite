import React from "react";
import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className=" flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className=" fon text-4xl capitalize font-bold lg:max-w-lg">
          {" "}
          <span className=" text-coral-red">Special</span> Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          {" "}
          Embark on a shopping journey that redefines your experience with
          unbeatable deals.From premier selection to incredible savings, we
          offer unparalleled value that sets us appart.
        </p>
        <p className="lg:max-w-lg mt-6 info-text textg">
          Navigate a realm of possibities designed to fulfill your unique
          desires, surpassing the loftiest expectations.Your journey with us is
          noting short of exceptional.
        </p>
        <div className=" mt-11 flex flex-wrap gap-4 bgb  ">
          <Button
            label="Shop now"
            iconUrl={arrowRight}
            borderColor="border-coral-red"
            textColor="text-white"
            hover="bg-red-500"
            backgroundColor="bg-coral-red"
          />
          <Button
            label="Learn more"
            backgroundColor=" bg-white"
            borderColor="border-slate-grey"
            textColor="text-slate-grey"
            hover="bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
