import React from "react";

export type stateType = {
  mode: string;
  imgSrc: string;
  outwardImgSrc: string;
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

export type childrenType = {
  children: React.ReactNode;
};

export interface PreviewPropTypes {
  id: number;
  title: string;
}

export interface CommentsPropTypes {
  id?: string;
}

export interface CreateCommentPropTypes {
  id?: string;
}

export interface CommentPropTypes {
  content: string;
  userId: number;
}

export interface PostUseParamsTypes {
  id: string;
}
