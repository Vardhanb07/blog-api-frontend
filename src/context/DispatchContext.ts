import { createContext } from "react";
import type { actionType } from "../utils/types";

const DisptachContext = createContext<
  React.ActionDispatch<[action: actionType]>
>(() => {});

export default DisptachContext;
