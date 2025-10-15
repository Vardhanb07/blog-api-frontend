import { Link } from "react-router";


interface propTypes {
  themeState: {
    mode: string;
    imgSrc: string;
    bgColor: string;
    textColor: string;
  };
  dispatch: React.ActionDispatch<[action: { type: "dark" | "light" }]>;
}

export default function Navbar({ themeState, dispatch }: propTypes) {
  return (
    <div className="flex p-4">
      <div className="flex-2 text-center text-2xl">
        <p className="cursor-pointer">
          <Link to="/">Blogs</Link>
        </p>
      </div>
      <div className="flex-2 text-center text-2xl">
        <p className="cursor-pointer" title="About blogs">
          <Link to="/about">About</Link>
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={themeState.imgSrc}
          alt={`${themeState.mode}-mode`}
          className="cursor-pointer"
          title={`switch to ${themeState.mode} mode`}
          onClick={() => {
            if (themeState.mode === "dark") {
              dispatch({ type: "light" });
            } else if (themeState.mode === "light") {
              dispatch({ type: "dark" });
            }
          }}
        />
      </div>
    </div>
  );
}
