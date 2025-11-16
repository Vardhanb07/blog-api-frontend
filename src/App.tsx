import DisptachContext from "./context/DispatchContext";
import ThemeContext from "./context/ThemeContext";
import type { actionType, stateType } from "./utils/types";
import darkModeImg from "./assets/images/dark_mode.svg";
import lightModeImg from "./assets/images/light_mode.svg";
import outwardWhiteImg from "./assets/images/arrow-outward-white.svg";
import outwardBlackImg from "./assets/images/arrow-outward-black.svg";
import { useReducer } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Post from "./pages/Post";
import NoMatch from "./pages/NoMatch";

function reducer(state: stateType, action: actionType): stateType {
  if (action.type === "dark") {
    return {
      ...state,
      mode: "dark",
      imgSrc: darkModeImg,
      outwardImgSrc: outwardBlackImg,
      bgColor: "bg-white",
      textColor: "text-black",
    };
  }
  return {
    ...state,
    mode: "light",
    imgSrc: lightModeImg,
    outwardImgSrc: outwardWhiteImg,
    bgColor: "bg-neutral-900",
    textColor: "text-white",
  };
}

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default function App() {
  const [themeState, dispatch] = useReducer(reducer, {
    mode: "dark",
    imgSrc: darkModeImg,
    outwardImgSrc: outwardBlackImg,
    bgColor: "bg-white",
    textColor: "text-black",
  });
  return (
    <ThemeContext value={themeState}>
      <DisptachContext value={dispatch}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </DisptachContext>
    </ThemeContext>
  );
}
