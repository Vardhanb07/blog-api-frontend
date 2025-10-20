import Navbar from "../components/Navbar";
import { useThemeContext, useDispatchContext } from "../utils/hooks";


export default function Home() {
  const themeState = useThemeContext();
  const dispatch = useDispatchContext();
  return (
    <div className={`${themeState.bgColor} ${themeState.textColor}`}>
      <Navbar themeState={themeState} dispatch={dispatch} />
    </div>
  );
}
