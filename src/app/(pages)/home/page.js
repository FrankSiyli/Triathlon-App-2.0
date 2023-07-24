"use client";
import Footer from "@/app/components/Footer/Footer";
import "../../globals.css";
import { v1 as uuidv1 } from "uuid";
import Week from "@/app/components/ScheduleComponents/Week/Week";

function Page(week, handleBackClick, handleNextClick) {
  return (
    <>
      <button className="btn btn-sm pointer-events-none border-first  bg-third m-5 text-xl text-first">
        Beispielplan
      </button>
      <div>
        <div className="max-w-xl mx-auto">
          <Week
            key={uuidv1()}
            week={week}
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Page;
