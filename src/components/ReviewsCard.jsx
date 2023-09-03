import { star } from "../assets/icons";

const ReviewsCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" flex justify-center flex-col items-center">
      <img
        src={imgURL}
        alt="custumer"
        className=" rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className=" mt-6 max-w-sm text-center info-text">{feedback} </p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className=" object-contain m-0"
        />
        <p className=" text-xl font-montserrat text-slate-gray">{rating} </p>
      </div>
      <h3 className=" font-bold mt-1 font-palanquin text-center text-3xl ">
        {customerName}{" "}
      </h3>
    </div>
  );
};

export default ReviewsCard;
