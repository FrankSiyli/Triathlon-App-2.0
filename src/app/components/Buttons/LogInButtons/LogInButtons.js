import Link from "next/link";
import React from "react";

function LogInButtons() {
  return (
    <div>
      <div className="flex flex-row justify-center mx-auto w-screen max-w-xl">
        <Link
          onClick={handleAlertClick_2}
          href=""
          className="btn btn-sm  m-3 bg-third border border-first/50 text-first"
        >
          Log in
        </Link>
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
          {showAlertLogIn && (
            <div className="alert alert-info fixed inset-x-0 inset-y-3 mx-auto max-w-md h-10 bg-first  flex justify-center ">
              <span>Coming soon</span>
            </div>
          )}
        </div>
        <Link
          onClick={handleAlertClick_2}
          href=""
          className="btn btn-sm  m-3 bg-fourth border border-first/50 text-first"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default LogInButtons;
