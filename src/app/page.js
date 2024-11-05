import Image from "next/image";
import navy from "../media/navy.png";
import Navigation from "../components/Navigation";
import "./style.css";
import ButtonCTA from "@/components/ButtonCTA";
import PageStatus from "@/components/PageStatus";
import Variant from "@/components/Variant";
import Indicator from "@/components/Indicator";

export default function Home() {
  const heroBold = {
    color: "white",
    fontSize: "64px",
    fontWeight: "900",
    fontFamily: "poppinsBold",
    letterSpacing: "1.28px",
    lineHeight: "86px",
  };
  const heroRegular = {
    color: "white",
    fontSize: "64px",
    fontFamily: "poppinsRegular",
    letterSpacing: "1.28px",
    lineHeight: "86px",
  };

  return (
    <section className="min-h-screen rounded-lg m-3 bg-gradient-to-r from-landingpagebackground1 to-landingpagebackground2 pt-8 px-12">
      <Navigation></Navigation>
      <article className="flex mt-16">
        <main className="grid grid-cols-5">
          <div className="col-start-1 col-end-4">
            <div className="flex flex-col justify-between">
              <div>
                <h1 style={heroBold}>The Perfect Moment</h1>
                <h1 style={heroRegular}>Between Past And Future.</h1>
              </div>
              <div className="mt-20">
                <ButtonCTA value="Buy Now"></ButtonCTA>
              </div>
            </div>
          </div>
          <Image
            className="col-start-4 col-end-6"
            src={navy} // Path to the image
            alt="Sample Image"
            width={486} // The desired width of the image
            height={486} // The desired height of the image
          />
        </main>

        <div className="flex flex-col mt-auto mb-auto justify-center gap-5">
          <button className="w-7 h-7 mx-auto rounded-full bg-navy outline outline-white outline-2"></button>
          <button className="w-5 h-5 mx-auto rounded-full bg-mint outline outline-white outline-1"></button>
          <button className="w-5 h-5 mx-auto rounded-full bg-ocean outline outline-white outline-1"></button>
        </div>
      </article>

      <footer className="mt-12 grid grid-cols-5 pb-16">
        <div className="col-start-1 col-end-4 mt-auto mb-auto">
          <PageStatus value="1" />
        </div>

        <div className="col-start-4 col-end-6">
          <Variant />
        </div>
      </footer>
    </section>
  );
}
