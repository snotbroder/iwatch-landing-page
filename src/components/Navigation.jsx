import "../app/style.css";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiLineVertical } from "react-icons/pi";
import { LuShoppingBag } from "react-icons/lu";
const Navigation = () => {
  const buttonStyle = {
    color: "white",
    fontSize: "18px",
    fontFamily: "poppinsRegular",
  };
  const buttonStyleSelected = {
    color: "#B6CCDA",
    backgroundColor: "white",
    padding: "0.1rem 1.5rem 0.1rem 1.5rem",
    borderRadius: "50px",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "poppinsBold",
  };
  return (
    <div className="flex justify-between">
      <FaApple className="text-white font-bold text-5xl" />

      <article className="flex gap-16 justify-between mt-auto mb-auto flex-wrap">
        <button style={buttonStyle}>Mac</button>
        <button style={buttonStyle}>iPhone</button>
        <button style={buttonStyle}>iPad</button>
        <button style={buttonStyleSelected}>iWatch</button>
        <button style={buttonStyle}>Support</button>
      </article>
      <div className="flex text-white font-bold text-xl gap-1 mt-auto mb-auto">
        <IoIosSearch />
        <PiLineVertical />
        <LuShoppingBag />
      </div>
    </div>
  );
};

export default Navigation;
