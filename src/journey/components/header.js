import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../usecontext";

const navMsg = "Welcome to the Alpaca Store 🙏";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Find a Dealer", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Videos", href: "#", current: false },
];

const countries = [
  {
    country: "Antigua and Barbuda",
    currency: "Eastern Caribbean dollar",
    symbol: "$",
  },
  { country: "Argentina", currency: "Argentine peso", symbol: "$" },
  { country: "Australia", currency: "Australian dollar", symbol: "$" },
  { country: "Austria", currency: "Euro", symbol: "€" },
  { country: "Belgium", currency: "Euro", symbol: "€" },
  { country: "Canada", currency: "Canadian dollar", symbol: "$" },
  { country: "Chile", currency: "Chilean peso", symbol: "$" },
  { country: "China", currency: "Chinese yuan", symbol: "¥" },
  { country: "Colombia", currency: "Colombian peso", symbol: "$" },
  { country: "Cuba", currency: "Cuban peso", symbol: "$" },
  { country: "Cyprus", currency: "Euro", symbol: "€" },
  { country: "Dominica", currency: "Eastern Caribbean dollar", symbol: "$" },
  { country: "East Timor", currency: "United States dollar", symbol: "$" },
  { country: "Ecuador", currency: "United States dollar", symbol: "$" },
  { country: "Egypt", currency: "Egyptian pound", symbol: "E£" },
  { country: "El Salvador", currency: "United States dollar", symbol: "$" },
  { country: "Estonia", currency: "Euro", symbol: "€" },
  { country: "Finland", currency: "Euro", symbol: "€" },
  { country: "France", currency: "Euro", symbol: "€" },
  {
    country: "India",
    currency: "Indian Rupee",
    symbol: "₹",
  },
];

const phone = "123123221-8979854";

export default function Header() {
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [navOption, setNavOption] = useState(undefined);
  const navigate = useNavigate();
  const getContxtState = useContext(GlobalContext);
  const { screen } = { ...getContxtState };

  const handleCountrySelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <nav className="bg-blue-600 h-8 flex justify-center text-lg text-white">
        {navMsg}
      </nav>
      {screen === "Des" ? (
        <nav className="bg-blue-400 h-10 text-lg text-white pl-16 pr-16">
          <div className="grid grid-cols-2 grid-flow-col h-8 content-center">
            <div className="self-center">
              {navigation.map((ele, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`mr-8 hover:underline underline-offset-4 font-bold font-mono`}
                    onClick={(event) => {
                      setNavOption(event?.target?.innerText);
                      if (event?.target?.innerText === "Home") {
                        navigate("/");
                      } else {
                        const navigateUrl = "/" + event?.target?.innerText;
                        navigate(navigateUrl);
                      }
                    }}
                  >
                    {ele?.name}
                  </button>
                );
              })}
            </div>
            <div className="flex text-center justify-end gap-8">
              {phone}
              <div>
                <span className="">Country Selected: </span>
                <select
                  name="countries"
                  id="countries"
                  value={selectedOption}
                  onChange={(e) => handleCountrySelect(e.target.value)}
                  className="text-white outline-none bg-blue-400 font-bold"
                >
                  <option
                    value=""
                    className={`${selectedOption ? "bg-white" : ""} text-black`}
                  >
                    Select
                  </option>
                  {countries.map((option, index) => (
                    <option
                      className={` text-black ${
                        selectedOption &&
                        selectedOption.split("(")[0] === option?.country
                          ? ""
                          : "bg-white"
                      }`}
                      key={index}
                      value={option?.country + "(" + option?.symbol + ")"}
                    >
                      {option?.country + " - " + option?.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}
