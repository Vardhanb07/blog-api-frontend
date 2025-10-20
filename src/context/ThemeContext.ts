import { createContext } from "react";
import type { stateType } from "../utils/types";

const ThemeContext = createContext<stateType>({
  mode: "",
  imgSrc: "",
  bgColor: "",
  textColor: "",
});

export default ThemeContext;
