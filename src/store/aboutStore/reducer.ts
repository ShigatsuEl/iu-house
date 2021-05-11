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
  [Types.Update]: {
    wheelX: number;
    horizonX: number;
  };
};

export type translateActions = ActionMap<translatePayload>[keyof ActionMap<translatePayload>];

export const translateReducer: Reducer<number, translateActions> = (state: number, action: translateActions) => {
  switch (action.type) {
    case Types.Update:
      if (state + action.payload.wheelX > 0) {
        return state;
      } else if (Math.abs(state + action.payload.wheelX) > action.payload.horizonX - Math.abs(state) + 500) {
        return state;
      } else {
        return state + action.payload.wheelX;
      }
    default:
      return state;
  }
};
