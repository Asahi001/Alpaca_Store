import React, { useState } from "react";
import { ReactComponent as Cross } from "../../assets/icons/x-circle.svg";
import { ReactComponent as Down } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Up } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";

export default function MenuSidebar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [accordianTracker, setAccordianTracker] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    props.passModal(false);
    event.preventDefault();
  };

  const accordianList = [
    {
      label: "Single Speed",
      link: "/",
      list: [
        {
          type: "Single Speed/ Fixed Gear",
          link: "/",
        },
        {
          type: "Coaster",
          link: "/",
        },
      ],
    },
    {
      label: "City Bikes",
      link: "/",
      list: [
        {
          type: "City Classic",
          link: "/",
        },
        {
          type: "City Step Through",
          link: "/",
        },
      ],
    },
    {
      label: "Commuter Bikes",
      link: "/",
      list: [
        {
          type: "Urban Commuter",
          link: "/",
        },
        {
          type: "Commuter Accessories",
          link: "/",
        },
      ],
    },
    {
      label: "Gravel Bikes",
      link: "/",
      list: [
        {
          type: "Adventure AL",
          link: "/",
        },
      ],
    },
    {
      label: "All Bikes",
    },
    {
      label: "Accessories",
    },
  ];

  const setAccHook = (key) => {
    if (accordianTracker.find((ele) => ele === key)) {
      setAccordianTracker(accordianTracker.filter((ele) => ele !== key));
    } else setAccordianTracker([...accordianTracker, key]);
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="z-30 absolute top-0 left-0 w-1/3 h-full bg-white overflow-y-auto">
        <div className="flex justify-end pt-4 pr-4 text-blue-500">
          <button
            onClick={() => {
              props.passModal(false);
            }}
          >
            <Cross />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="pt-8 px-4 w-full">
          <input
            className="border-2 outline-none border-blue-500 p-2 rounded-tl-lg rounded-bl-lg w-9/12"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Let's find your ideal bike..."
          />
          <button
            className="border-2 p-2 border-blue-500 rounded-tr-lg rounded-br-lg text-blue-500 bg-blue-100 hover:bg-blue-200 w-3/12"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="pt-8 px-4 w-full">
          {accordianList.map((ele) => {
            return (
              <>
                <div className="flex flex-row py-4 border-b-2 border-blue-100 hover:bg-blue-200 px-2 rounded-lg">
                  <div className="text-xl font-bold w-80 hover:cursor-pointer">
                    {ele?.label}
                  </div>

                  {ele?.list?.length > 0 && (
                    <div>
                      {accordianTracker?.find((avl) => avl === ele?.label) ? (
                        <button
                          className="pl-4 pt-1 border-l-2 border-blue-500"
                          type="button"
                          onClick={() => {
                            setAccHook(ele?.label);
                          }}
                        >
                          <Up />
                        </button>
                      ) : (
                        <button
                          className="pl-4 pt-1 border-l-2 border-blue-500"
                          type="button"
                          onClick={() => {
                            setAccHook(ele?.label);
                          }}
                        >
                          <Down />
                        </button>
                      )}
                    </div>
                  )}
                </div>
                {ele?.list?.length > 0 &&
                  accordianTracker.find((acc) => acc === ele?.label) &&
                  ele?.list?.map((lst) => {
                    return (
                      <div className="text-xl w-full py-2 px-6 bg-blue-100 hover:bg-blue-200 rounded-lg hover:cursor-pointer mb-1">
                        {lst?.type}
                      </div>
                    );
                  })}
              </>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="p-2 w-4/5 text-xl bg-blue-100 border-2 border-blue-200 rounded-xl mx-6 mt-4 hover:bg-blue-200"
            type="button"
          >
            Log in
          </button>
        </div>
        <div className="grid grid-cols-2 grid-flow-rows border-2 border-blue-200 mx-6 my-8">
          <button
            className="flex justify-center p-4 bg-blue-100 hover:bg-blue-200 border-r-2 border-b-2 border-blue-200"
            type="button"
            onClick={() => {}}
          >
            <Facebook />
          </button>
          <button
            className="flex justify-center p-4 bg-blue-100 hover:bg-blue-200 border-b-2 border-blue-200"
            type="button"
            onClick={() => {}}
          >
            <Twitter />
          </button>
          <button
            className=" flex justify-center p-4 bg-blue-100 hover:bg-blue-200 border-r-2 border-blue-200"
            type="button"
            onClick={() => {}}
          >
            <Youtube />
          </button>
          <button
            className="flex justify-center p-4 bg-blue-100 hover:bg-blue-200"
            type="button"
            onClick={() => {}}
          >
            <Instagram />
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          props.passModal(false);
        }}
        className="z-30 absolute top-0 left-1/3 w-2/3 h-full bg-black opacity-50"
      >
        {" "}
      </div>
    </div>
  );
}
