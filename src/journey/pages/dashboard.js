import React, { useState, useEffect, useContext } from "react";
import "./pages.css";
import AutoImageCarousel from "../components/carousel";
import image1 from "../../assets/images/bicycle-01.jpg";
import image2 from "../../assets/images/bicycle-02.jpg";
import image3 from "../../assets/images/bicycle-03.jpg";
import image4 from "../../assets/images/bicycle-04.jpg";
import alpaca from "../../assets/images/alpaca.png";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Cart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import bs1 from "../../assets/images/cycle-01.jpg";
import bs2 from "../../assets/images/cycle-02.jpg";
import bs3 from "../../assets/images/cycle-05.jpg";
import bs4 from "../../assets/images/cycle-04.jpg";
import introVid from "../../assets/videos/cyclingVideo.mp4";
import Footer from "../components/footer";
import MenuSidebar from "../components/menu_sidebar";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import CartModal from "../components/cart";
import { GlobalContext } from "../usecontext";

export default function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuData, setMenuData] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const getContxtState = useContext(GlobalContext);
  const { screen } = { ...getContxtState };

  const imageLst = [image1, image2, image3, image4];
  const bsList = [
    {
      brand: "Trek",
      image: bs1,
      model: "Fuel EX 9.8",
      frame: "Carbon Fiber",
      suspension: " Front and Rear (Full Suspension)",
      gear: " 12-speed Shimano XT",
      brake: "Hydraulic Disc Brakes",
      price: "5499",
    },
    {
      brand: "Trek",
      image: bs3,
      model: "Fuel EX 1.0",
      frame: "Carbon Fiber",
      suspension: " Front and Rear (Full Suspension)",
      gear: " 16-speed Shimano XT",
      brake: "Hydraulic Disc Brakes",
      price: "6499",
    },
    {
      brand: "Specialized",
      image: bs2,
      model: "Tarmac SL7 Expert",
      frame: "Carbon Fiber",
      suspension: " Front and Rear (Full Suspension)",
      gear: " 12-speed Shimano Ultegra Di2",
      brake: "Hydraulic Disc Brakes",
      price: "6000",
    },
    {
      brand: "Specialized",
      image: bs4,
      model: "Tarmac SL8 Expert",
      frame: "Carbon Fiber",
      suspension: " Front and Rear (Full Suspension)",
      gear: " 12-speed Shimano UXT Di6",
      brake: "Hydraulic Disc Brakes",
      price: "6200",
    },
  ];
  const textStyle = {
    WebkitTextStroke: "1px red",
  };
  const textStyle2 = {
    WebkitTextStroke: "1px black",
  };
  const storeName = "Alpaca Cycles";

  useEffect(() => {
    if (showMenu || showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showMenu, showCart]);

  function showModal(value) {
    setShowMenu(value);
    setShowCart(value);
  }

  const getSideModalData = (data) => {
    setMenuData(data);
  };

  return (
    <>
      <Header />
      <div className="lg:h-screen relative">
        <AutoImageCarousel
          imageList={imageLst}
          speed="3000"
          slidesToShow={screen === "Des" ? "2" : "1"}
          slidesToScroll="1"
          autoplaySpeed="4000"
        />
        <div className="overlay absolute top-0 left-0 w-full h-24 bg-black opacity-0"></div>

        <div className="overlay-content absolute top-0 left-0 w-full h-24 text-red-500 pl-16 pr-16">
          <span className="grid grid-flow-col lg:grid-cols-3 sm:grid-cols-2">
            <button
              className="flex justify-start items-center h-24 w-10"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                setShowMenu(true);
              }}
            >
              <Menu />
            </button>

            {screen === "Des" ? (
              <span className="flex gap-2 items-center justify-center h-24">
                <span style={textStyle} className="text-4xl text-white">
                  {storeName}
                </span>
                <img
                  className="w-8 h-8 relative"
                  src={alpaca}
                  alt={`Image Not Found - 404`}
                />
              </span>
            ) : (
              <></>
            )}

            <span className="flex gap-2 items-center h-24 justify-end">
              <button
                onClick={() => {
                  navigate("/signin");
                }}
              >
                <User />
              </button>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  setShowCart(true);
                }}
              >
                <Cart />
              </button>
            </span>
          </span>
          {screen !== "Des" ? (
            <span className="flex gap-2 items-center justify-center h-24">
              <span style={textStyle} className="text-4xl text-white">
                {storeName}
              </span>
              <img
                className="w-8 h-8 relative"
                src={alpaca}
                alt={`Image Not Found - 404`}
              />
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      ``
      <div>
        <span
          style={textStyle2}
          className="lg:text-6xl sm:text-4xl font-extrabold h-36 w-full flex justify-center items-center font-sans text-red-500"
        >
          Best Selling Bikes
        </span>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 px-12 grid-flow-row gap-6">
          {bsList.map((ele, index) => (
            <div key={index}>
              <img
                className="w-full h-80 hover:border-4 hover:border-blue-200 hover:cursor-pointer"
                src={ele?.image}
                alt={`Image ${index + 1}`}
              />
              <span className="flex justify-center mt-4">
                {ele?.brand + " " + "( " + ele?.gear + " )"}
              </span>
              <span className="flex justify-center">
                Alpaca Best Price: {"$" + " " + ele?.price}
              </span>
            </div>
          ))}
        </div>
        <span className="flex justify-center pt-4">
          <button className="rounded-sm bg-teal-500 text-white px-4 py-2 text-xl hover:opacity-50">
            View All
          </button>
        </span>
      </div>
      <div className="pt-16">
        <video controls muted autoPlay loop className="w-full h-1/2">
          <source src={introVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
      {showMenu && (
        <div className="overlay absolute top-0 left-0">
          <MenuSidebar passModal={showModal} formDta={getSideModalData} />
        </div>
      )}
      {showCart && (
        <div className="overlay absolute top-0 left-0">
          <CartModal passModal={showModal} />
        </div>
      )}
    </>
  );
}
