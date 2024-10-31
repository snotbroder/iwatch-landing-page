import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const PageStatus = ({ value }) => {
  const font = {
    fontFamily: "poppinsRegular",
  };
  return (
    <div className="flex gap-2 text-white">
      <button>
        <HiArrowLongLeft />
      </button>
      <p style={font} className="">
        {value}
      </p>
      <button>
        <HiArrowLongRight />
      </button>
    </div>
  );
};

export default PageStatus;
