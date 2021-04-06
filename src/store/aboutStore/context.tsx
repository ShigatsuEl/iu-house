import React, { createContext, useContext, useReducer } from 'react';
import { InitialState } from './store';
import { InitialStateType } from './types';
import { translateActions, translateReducer } from './reducer';

type ProviderProps = {
  children: React.ReactNode;
};

const AboutContext = createContext<{ state: InitialStateType; dispatch: React.Dispatch<any> }>({
  state: InitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: translateActions): InitialStateType => ({
  translateX: translateReducer(state.translateX, action),
});

export const AboutProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, InitialState);

  return <AboutContext.Provider value={{ state, dispatch }}>{children}</AboutContext.Provider>;
};

export const useAboutState = (): InitialStateType => {
  const { state } = useContext(AboutContext);
  return state;
};

export const useAboutDispatch = (): React.Dispatch<any> => {
  const { dispatch } = useContext(AboutContext);
  return dispatch;
};
