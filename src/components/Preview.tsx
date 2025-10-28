import type { PreviewPropTypes } from "../utils/types";
import { useThemeContext } from "../utils/hooks";
import { useNavigate } from "react-router";

export default function Preview({ id, title }: PreviewPropTypes) {
  const navigate = useNavigate();
  const { outwardImgSrc } = useThemeContext();
  return (
    <div className="flex m-4 border p-3">
      <p className="flex-4 text-xl">{title}</p>
      <div
        className="flex-1 flex justify-center items-center cursor-pointer"
        onClick={() => {
          navigate(`/post/${id}`);
        }}
      >
        <img src={outwardImgSrc} alt="Open" />
      </div>
    </div>
  );
}
