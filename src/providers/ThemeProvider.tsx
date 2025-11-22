import { useReducer } from "react";
import type {
  actionType,
  stateType,
  ThemeProviderPropTypes,
} from "../utils/types";
import outwardWhiteImg from "../assets/images/arrow-outward-white.svg";
import outwardBlackImg from "../assets/images/arrow-outward-black.svg";
import darkModeImg from "../assets/images/dark_mode.svg";
import lightModeImg from "../assets/images/light_mode.svg";
import ThemeContext from "../context/ThemeContext";
import DisptachContext from "../context/DispatchContext";

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

export default function ThemeProvider({ children }: ThemeProviderPropTypes) {
  const [themeState, dispatch] = useReducer(reducer, {
    mode: "dark",
    imgSrc: darkModeImg,
    outwardImgSrc: outwardBlackImg,
    bgColor: "bg-white",
    textColor: "text-black",
  });
  return (
    <ThemeContext value={themeState}>
      <DisptachContext value={dispatch}>{children}</DisptachContext>
    </ThemeContext>
  );
}
