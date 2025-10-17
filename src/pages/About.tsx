import darkModeImg from "../assets/images/dark_mode.svg";
import lightModeImg from "../assets/images/light_mode.svg";
import { useReducer } from "react";
import Navbar from "../components/Navbar";
import type { stateType, actionType } from "../utils/types";

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

export default function About() {
  const [themeState, dispatch] = useReducer(reducer, {
    mode: "dark",
    imgSrc: darkModeImg,
    bgColor: "bg-white",
    textColor: "text-black",
  });
  return (
    <div className={`${themeState.bgColor} ${themeState.textColor} h-screen flex flex-col`}>
      <Navbar themeState={themeState} dispatch={dispatch} />
      <div className="flex flex-col h-full justify-center items-center gap-1">
        <p className="text-2xl">Features slop written by me</p>
        <p className="text-2xl">
          Built by{" "}
          <a href="https://github.com/Vardhanb07" target="_blank">
            Vardhanb07
          </a>
        </p>
      </div>
    </div>
  );
}
