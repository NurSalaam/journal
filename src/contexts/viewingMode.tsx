import React, { createContext, useReducer, useContext } from "react";

// Define the shape of the state
export type ViewingMode = {
  isPreview: boolean;
  isDraft: boolean;
};

// Define the shape of the action
export const enum actionTypes {
  TOGGLE_PREVIEW = "TOGGLE_PREVIEW",
  TOGGLE_DRAFT = "TOGGLE_DRAFT",
}

type Action =
  | { type: actionTypes.TOGGLE_PREVIEW }
  | { type: actionTypes.TOGGLE_DRAFT };

// Define the reducer
const reducer = (state: ViewingMode, action: Action): ViewingMode => {
  switch (action.type) {
    case actionTypes.TOGGLE_PREVIEW:
      return {
        ...state,
        isPreview: !state.isPreview,
      };
    case actionTypes.TOGGLE_DRAFT:
      return {
        ...state,
        isDraft: !state.isDraft,
      };

    default:
      return state;
  }
};

// Define the initial state
export const initialState: ViewingMode = {
  isPreview: false,
  isDraft: true,
};

// Create the context
export const ViewingModeContext = createContext<{
  state: ViewingMode;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface ViewingModeProviderProps {
  children: React.ReactNode;
}

export const ViewingModeProvider: React.FC<ViewingModeProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ViewingModeContext.Provider value={{ state, dispatch }}>
      {children}
    </ViewingModeContext.Provider>
  );
};
