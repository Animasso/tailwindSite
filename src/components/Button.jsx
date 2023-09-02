const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  hover,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor} rounded-full ${textColor} ${borderColor} hover:${hover}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="arrow" className=" ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
