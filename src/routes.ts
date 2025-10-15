import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "post",
    Component: Post,
  },
]);
