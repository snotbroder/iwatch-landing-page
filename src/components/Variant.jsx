import Image from "next/image";
import navy from "../media/navy.png";
import mint from "../media/mint.png";
import ocean from "../media/ocean.png";
import "../app/style.css";
const Variant = () => {
  return (
    <div className="flex justify-around  ">
      <button className="variant-button">
        <Image
          className="variant-image"
          src={navy} // Path to the image
          alt="Sample Image"
          width={90} // The desired width of the image
          height={90} // The desired height of the image
        />
        <div className="variant-backdrop navy-backdrop"></div>
      </button>
      <button className="variant-button">
        <Image
          className="variant-image"
          src={mint} // Path to the image
          alt="Sample Image"
          width={90} // The desired width of the image
          height={90} // The desired height of the image
        />
        <div className="variant-backdrop mint-backdrop"></div>
      </button>
      <button className="variant-button">
        <Image
          className="variant-image"
          src={ocean} // Path to the image
          alt="Sample Image"
          width={90} // The desired width of the image
          height={90} // The desired height of the image
        />
        <div className="variant-backdrop ocean-backdrop"></div>
      </button>
    </div>
  );
};

export default Variant;
