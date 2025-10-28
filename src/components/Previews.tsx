import { useEffect, useState } from "react";
import instance from "../utils/api";
import Preview from "./Preview";

export default function Previews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await instance.get("/post");
      setData(response.data.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <div>
          {data.map(({ id, title }) => (
            <Preview id={id} title={title} key={id} />
          ))}
        </div>
      )}
    </div>
  );
}
