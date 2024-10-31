const ButtonCTA = ({ value }) => {
  const font = {
    fontFamily: "poppinsRegular",
  };
  return (
    <button style={font} className="w-fit py-3 px-16 text-white text-xl border-white border-4 rounded-full hover:bg-white hover:text-landingpagebackground1">
      {value}
    </button>
  );
};

export default ButtonCTA;
