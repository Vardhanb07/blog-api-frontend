import Navbar from "../components/Navbar";
import { useThemeContext, useDispatchContext } from "../utils/hooks";

export default function About() {
  const themeState = useThemeContext();
  const dispatch = useDispatchContext();

  return (
    <div
      className={`${themeState.bgColor} ${themeState.textColor} h-screen flex flex-col`}
    >
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
