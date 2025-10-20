import { useContext } from "react";
import DisptachContext from "../context/DispatchContext";
import ThemeContext from "../context/ThemeContext";

export function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}

export function useDispatchContext() {
  const context = useContext(
    DisptachContext
  );
  return context;
}
