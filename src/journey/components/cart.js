import React from "react";
import { ReactComponent as Cross } from "../../assets/icons/x-circle.svg";

export default function CartModal(props) {
  return (
    <>
      <div className="h-screen w-screen relative">
        <div className="z-30 absolute top-0 right-0 w-1/3 h-full bg-white overflow-y-auto pl-4 pr-4">
          <div className="flex w-full h-24 justify-between place-items-center border-b-2 border-blue-200">
            <div className="flex text-4xl text-blue-500 place-items-center">
              CART
            </div>
            <div className="flex h-8 place-items-center text-blue-500">
              <button
                onClick={() => {
                  props.passModal(false);
                }}
              >
                <Cross />
              </button>
            </div>
          </div>

          <div className="text-lg pt-8">
            Your cart is currently empty.
          </div>
        </div>

        <div
          onClick={() => {
            props.passModal(false);
          }}
          className="z-30 absolute top-0 right-1/3 w-2/3 h-full bg-black opacity-50"
        >
          {" "}
        </div>
      </div>
    </>
  );
}
