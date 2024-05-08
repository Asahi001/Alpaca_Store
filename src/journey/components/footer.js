import { React, useState } from "react";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import alpaca from "../../assets/images/alpaca.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Submitted email:', email);
  };

  return (
    <span>
      <div className="w-screen mt-0.5 p-16 bg-black grid grid-cols-4 grid-flow-col gap-4 text-white">
        <div className="flex flex-col gap-1">
          <span className="pb-4">SHOP</span>
          <span>Bikes</span>
          <span>Accessories</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="pb-4">CONNECT</span>
          <span>Returns</span>
          <span>Warranty</span>
          <span>FAQ</span>
          <span>support@alpaca.com</span>
          <span>Become a Dealer</span>
          <span>Register your Bike</span>
          <span>Privacy Policy</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="pb-4">DON'T MISS OUT</span>
          <span>
            These days our bikes sell out fast! Sign up so you don't miss it.
          </span>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l px-4 mt-2 outline-none text-black"
            />
            <button
              type="submit"
              className="bg-black text-white font-bold py-2 px-4 rounded-r mt-2 border-2 border-white hover:opacity-50"
            >
              <Mail />
            </button>
          </form>
        </div>

        <div className="pl-16">
          <img
            className="w-30 h-20"
            src={alpaca}
            alt={`Image Not Found - 404`}
          />
        </div>
      </div>
      <div className="bg-black flex justify-center pb-16">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-2 border-2 border-white hover:opacity-50"
        >
          Back to top 👆
        </button>
      </div>
    </span>
  );
}
