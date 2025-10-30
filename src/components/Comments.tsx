import CreateComment from "./CreateComment";
import Comment from "./Comment";
import type { CommentsPropTypes } from "../utils/types";
import { useEffect, useState } from "react";
import instance from "../utils/api";

export default function Comments({ id }: CommentsPropTypes) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await instance.get(`/post/${id}/comment`);
      const content = response.data.data;
      setData(content);
      setLoading(false);
    }
    fetchData();
  }, [id]);
  return (
    <div className="flex flex-col w-full items-center text-xl">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="flex flex-col items-center">
          <p>Resposnes</p>
          {data.map(({ content, userId }) => {
            return <Comment content={content} userId={userId} key={userId} />;
          })}
        </div>
      )}
      <CreateComment id={id} />
    </div>
  );
}
