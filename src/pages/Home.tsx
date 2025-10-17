import { useReducer } from "react";
import darkModeImg from "../assets/images/dark_mode.svg";
import lightModeImg from "../assets/images/light_mode.svg";
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

export default function Home() {
  const [themeState, dispatch] = useReducer(reducer, {
    mode: "dark",
    imgSrc: darkModeImg,
    bgColor: "bg-white",
    textColor: "text-black",
  });
  return (
    <div className={`${themeState.bgColor} ${themeState.textColor}`}>
      <Navbar themeState={themeState} dispatch={dispatch} />
    </div>
  );
}
