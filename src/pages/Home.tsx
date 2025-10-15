import { useReducer } from "react";
import darkModeImg from "../assets/images/dark_mode.svg";
import lightModeImg from "../assets/images/light_mode.svg";
import Navbar from "../components/Navbar";

type stateTheme = {
  mode: string;
  imgSrc: string;
  bgColor: string;
  textColor: string;
};

type actionType = {
  type: "dark" | "light";
};

function reducer(state: stateTheme, action: actionType) {
  if (action.type == "dark") {
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
    imgSrc: lightModeImg,
    bgColor: "bg-white",
    textColor: "text-black",
  });
  return (
    <div className={`${themeState.bgColor} ${themeState.textColor}`}>
      <Navbar themeState={themeState} dispatch={dispatch} />
    </div>
  );
}
