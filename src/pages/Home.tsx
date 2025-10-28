import Navbar from "../components/Navbar";
import Previews from "../components/Previews";
import { useThemeContext, useDispatchContext } from "../utils/hooks";

export default function Home() {
  const themeState = useThemeContext();
  const dispatch = useDispatchContext();
  return (
    <div
      className={`${themeState.bgColor} ${themeState.textColor} font-jbmono flex flex-col h-screen `}
    >
      <Navbar themeState={themeState} dispatch={dispatch} />
      <hr />
      <Previews />
    </div>
  );
}
