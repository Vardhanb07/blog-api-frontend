import { useParams } from "react-router";
import { useThemeContext, useDispatchContext } from "../utils/hooks";
import { useEffect, useState } from "react";
import instance from "../utils/api";
import Navbar from "../components/Navbar";
import Comments from "../components/Comments";

export default function Post() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const themeContext = useThemeContext();
  const dispatch = useDispatchContext();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await instance.get(`/post/${id}?published=true`);
      const data = response.data.data;
      setTitle(data.title);
      setContent(data.content);
      setLoading(false);
    }
    fetchData();
  }, [id]);
  return (
    <div
      className={`${themeContext.bgColor} ${themeContext.textColor} flex flex-col h-screen font-jbmono`}
    >
      <Navbar themeState={themeContext} dispatch={dispatch} />
      <hr />
      {loading && (
        <div className="flex h-full justify-center items-center text-xl">
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col h-full p-4">
          <h1 className="flex-1 flex justify-center items-center text-2xl">
            {title}
          </h1>
          <div className="flex-6 p-8 text-xl flex justify-center">
            <p>{content}</p>
          </div>
          <div className="flex-4 flex justify-center">
            <Comments id={id} />
          </div>
        </div>
      )}
    </div>
  );
}
