import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(undefined);

function GlobalState({ children }) {
  function getDesc(width) {
    if (width < 600) {
      return "Mob";
    } else if (width >= 600 && width < 1024) {
      return "Tab";
    } else {
      return "Des";
    }
  }
  const [windowWidth, setWindowWidth] = useState(getDesc(window.innerWidth));
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getDesc(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GlobalContext.Provider value={{ screen: windowWidth }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
