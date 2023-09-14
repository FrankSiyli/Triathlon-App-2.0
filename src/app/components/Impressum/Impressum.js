import Link from "next/link";
import React from "react";

function Impressum() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <div className="mt-10  flex flex-row justify-center text-first gap-2 underline">
        <Link className=" " href="/legal/impressum">
          Impressum
        </Link>
        <Link className="" href="/legal/agb">
          AGB
        </Link>
        <Link className="" href="/legal/privacy_policy">
          Datenschutz
        </Link>
      </div>
      <div className="mb-40 mt-5  flex  justify-center">
        © Siyli-endurance-coaching 2022-{currentYear}{" "}
      </div>
    </div>
  );
}

export default Impressum;
