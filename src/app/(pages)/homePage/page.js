"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import Image from "next/image";
import logo from "../../../../public/images/logoSmall.png";
import Week from "@/app/components/ScheduleComponents/Week/Week";

function Page(week, handleBackClick, handleNextClick) {
  return (
    <>
      <button className="btn btn-secondary pointer-events-none border-light  bg-red m-5 text-2xl text-light">
        Beispielplan
      </button>
      <div>
        <div>
          <Week
            key={uuidv1()}
            week={week}
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
        </div>
      </div>

      <Image
        src={logo}
        alt="hero-image"
        className=" opacity-5 mx-auto mb-20"
        width={300}
        height={300}
      />
      <Footer />
    </>
  );
}

export default Page;
