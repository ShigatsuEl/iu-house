import { Reducer } from 'react';
import { Types } from './types';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type translatePayload = {
  [Types.Update]: number;
};

export type translateActions = ActionMap<translatePayload>[keyof ActionMap<translatePayload>];

export const translateReducer: Reducer<number, translateActions> = (state: number, action: translateActions) => {
  switch (action.type) {
    case Types.Update:
      if (state + action.payload > 0) {
        return state;
      } else {
        return state + action.payload;
      }
    default:
      return state;
  }
};
