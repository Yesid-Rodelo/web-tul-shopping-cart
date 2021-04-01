import { Action, createReducer, on } from '@ngrx/store';

export const initialState: object = {};

const _productReducer = createReducer(initialState);

export const productReducer = (state: object, action: Action) => {
  return _productReducer(state, action);
};
