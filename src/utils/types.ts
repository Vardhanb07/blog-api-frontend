export type stateType = {
  mode: string;
  imgSrc: string;
  bgColor: string;
  textColor: string;
};

export type actionType = {
  type: "dark" | "light";
};

export interface navBarPropTypes {
  themeState: stateType;
  dispatch: React.ActionDispatch<[action: actionType]>;
}
