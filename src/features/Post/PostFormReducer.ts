export interface PostFormState {
  title: string;
  lead: string;
  body: string;
}
export const enum postFormActionTypes {
  TITLE = "TITLE",
  LEAD = "LEAD",
  BODY = "BODY",
}

interface IPostFormAction {
  type: postFormActionTypes;
  payload: string;
}
export const postFormReducer = (
  state: PostFormState,
  action: IPostFormAction
) => {
  switch (action.type) {
    case postFormActionTypes.TITLE:
      return { ...state, title: action.payload };
    case postFormActionTypes.LEAD:
      return { ...state, lead: action.payload };
    case postFormActionTypes.BODY:
      return { ...state, body: action.payload };
    default:
      return state;
  }
};
