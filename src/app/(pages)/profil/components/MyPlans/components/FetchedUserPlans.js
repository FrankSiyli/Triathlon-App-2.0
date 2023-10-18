import { loggedInUserLastLoadedPlanState } from "@/app/recoil/atoms/user/loggedInUserLastLoadedPlanState";
import React from "react";
import { useRecoilState } from "recoil";

const FetchedUserPlans = ({
  userPlans,
  expandedPlanIndex,
  setExpandedPlanIndex,
  setHomepagePlan,
  setShowLoadOnHomepageToast,
  userEmail,
  setUserPlans,
  setIsLoading,
}) => {
  const [loggedInUserLastLoadedPlan, setLoggedInUserLastLoadedPlan] =
    useRecoilState(loggedInUserLastLoadedPlanState);
  const handleInfoClick = (index) => {
    if (index === expandedPlanIndex) {
      setExpandedPlanIndex(null);
    } else {
      setExpandedPlanIndex(index);
    }
  };
  const handleLoadPlanClick = () => {
    const expandedPlan = userPlans[expandedPlanIndex];
    setHomepagePlan(expandedPlan);
    setShowLoadOnHomepageToast(true);
    setLoggedInUserLastLoadedPlan(expandedPlan);
    setTimeout(() => {
      setShowLoadOnHomepageToast(false);
    }, 2000);
  };

  const handleRemovePlanClick = async (planId, userEmail) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/mongoDbDeleteUserPlan?planId=${planId}&email=${userEmail}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setUserPlans((prevUserPlans) =>
          prevUserPlans.filter((plan) => plan._id !== planId)
        );
      } else {
        console.error("Failed to delete plan");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className=" flex flex-col items-center  mt-10 gap-1  max-w-xl mx-5 ">
        {userPlans?.map((myPlan, myPlanIndex) => {
          return (
            <div
              key={myPlanIndex}
              className="w-full max-w-xl shadow-md p-2 rounded-md mx-5 my-1 last:mb-20"
            >
              <div
                onClick={() => handleInfoClick(myPlanIndex)}
                className=" flex flex-row justify-between cursor-pointer"
              >
                <div className="ml-5">{myPlan.name}</div>
                {expandedPlanIndex === myPlanIndex ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {expandedPlanIndex === myPlanIndex && (
                <div className="mt-5 select-none ">
                  <hr />
                  <div className="m-3 mx-auto p-1 w-24 text-sm text-center">
                    Wochen: {myPlan.duration}
                  </div>
                  <div className="font-light text-center">{myPlan.info}</div>
                  <div className="flex justify-between mt-20 mb-20">
                    <div
                      onClick={() =>
                        handleRemovePlanClick(myPlan._id, userEmail)
                      }
                      className="btn btn-sm btn-outline w-20 text-first shadow-xl "
                    >
                      Löschen
                    </div>
                    <div
                      onClick={() => handleLoadPlanClick(expandedPlanIndex)}
                      className="btn btn-sm  w-20  border border-transparent bg-third  text-first shadow-xl "
                    >
                      Laden
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchedUserPlans;
