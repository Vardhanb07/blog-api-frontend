import DisptachContext from "./context/DispatchContext";
import ThemeContext from "./context/ThemeContext";
import type { actionType, stateType } from "./utils/types";
import darkModeImg from "./assets/images/dark_mode.svg";
import lightModeImg from "./assets/images/light_mode.svg";
import { useReducer } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";

function reducer(state: stateType, action: actionType): stateType {
  if (action.type === "dark") {
    return {
      mode: "dark",
      imgSrc: darkModeImg,
      bgColor: "bg-white",
      textColor: "text-black",
    };
  }
  return {
    mode: "light",
    imgSrc: lightModeImg,
    bgColor: "bg-neutral-900",
    textColor: "text-white",
  };
}

export default function App() {
  const [themeState, dispatch] = useReducer(reducer, {
    mode: "dark",
    imgSrc: darkModeImg,
    bgColor: "bg-white",
    textColor: "text-black",
  });
  return (
    <ThemeContext value={themeState}>
      <DisptachContext value={dispatch}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </DisptachContext>
    </ThemeContext>
  );
}
