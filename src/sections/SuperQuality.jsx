import { Button } from "../components";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-md:flex-col gap-10 w-full max-container "
    >
      <div className=" flex flex-1 flex-col">
        <h2 className=" fon text-4xl capitalize font-bold lg:max-w-lg">
          {" "}
          We Provide You <span className=" text-coral-red">Super</span>{" "}
          <span className=" text-coral-red">Quality</span> Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          {" "}
          Ensuring prenium comfort and style our meticulously crafted footwear
          is desinged to elevate your experience providing you with unmatched
          quality, innovation and a touch of elegance
        </p>
        <p className="lg:max-w-lg mt-6 info-text">
          Our dedication to detail and excellence ensure your satisfation
        </p>
        <div className=" mt-11 ">
          <Button
            label="View details"
            borderColor="border-coral-red"
            textColor="text-white"
            hover="bg-red-500"
            backgroundColor="bg-coral-red"
          />
        </div>
      </div>
      <div className=" flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="offer"
          xidth={570}
          height={522}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
