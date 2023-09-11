import Link from "next/link";
import React from "react";

const Informations = () => {
  return (
    <>
      <div className=" border border-first/50 rounded-md text-center p-3 linear-background  mt-10">
        <p className=" text-xl">Informationen</p>
        <div className="flex flex-col items-center mt-5 gap-2">
          <Link
            className="underline  underline-offset-2 "
            href="/calculators/heartrate_by_age"
          >
            Maximalpuls nach Alter
          </Link>
          <Link
            className="underline  underline-offset-2 "
            href="/calculators/heartrate_max"
          >
            Puls Zonen
          </Link>
          <Link
            className="underline  underline-offset-2 "
            href="/calculators/power_watt"
          >
            Watt Zonen
          </Link>
        </div>
      </div>
    </>
  );
};

export default Informations;
