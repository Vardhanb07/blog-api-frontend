import Navbar from "../components/Navbar";
import { useThemeContext, useDispatchContext } from "../utils/hooks";

export default function About() {
  const themeState = useThemeContext();
  const dispatch = useDispatchContext();

  return (
    <div
      className={`${themeState.bgColor} ${themeState.textColor} h-screen flex flex-col font-jbmono`}
    >
      <Navbar themeState={themeState} dispatch={dispatch} />
      <hr />
      <div className="flex flex-col h-full justify-center items-center gap-1">
        <p className="text-2xl">
          Features slop written by{" "}
          <a
            href="https://github.com/Vardhanb07"
            target="_blank"
            className="underline"
          >
            me
          </a>
        </p>
        <p className="text-2xl">
          Find source {" "}
          <a
            href="https://github.com/Vardhanb07/blog-api-frontend"
            target="_blank"
            className="underline"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}
