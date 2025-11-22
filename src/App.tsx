import ThemeProvider from "./providers/ThemeProvider";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Post from "./pages/Post";
import NoMatch from "./pages/NoMatch";

export function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
  
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
