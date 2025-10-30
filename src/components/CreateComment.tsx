import { useState } from "react";
import instance from "../utils/api";
import type { CreateCommentPropTypes } from "../utils/types";
import { useNavigate } from "react-router";

export default function CreateComment({ id }: CreateCommentPropTypes) {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await instance.post(`/post/${id}/comment`, {
            email: email,
            content: content,
          });
          setEmail("")
          setContent("")
          navigate(0);
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border p-2"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content">Comment: </label>
          <textarea
            name="content"
            id="content"
            rows={5}
            cols={30}
            defaultValue="What are your thoughts?"
            className="border p-2"
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
            required
          ></textarea>
        </div>
        <button className="border px-4 py-2 cursor-pointer">Submit</button>
      </form>
    </div>
  );
}
