import React from "react";
import { useRouter } from "next/navigation";

const NoDataPush = ({ data, isLoading }) => {
  const router = useRouter();

  if (data.length === 0) {
    setTimeout(() => {
      router.push("/");
    }, 500);
  }
  return (
    <>
      {!isLoading && data.length === 0 ? (
        <div className="text-center">
          Keine Daten, die App wird neu geladen.
        </div>
      ) : null}
    </>
  );
};

export default NoDataPush;
