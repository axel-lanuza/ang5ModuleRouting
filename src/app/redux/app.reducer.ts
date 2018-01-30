import {initialState, State} from './app.state';
import {Action} from './app.actions';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';


export function AppReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export const appReducers: ActionReducerMap<any> = {
    app: AppReducer
};


export const getState = createFeatureSelector<State>('app');
export const getStateLayout = createSelector(
    getState,
    (state: State) => state.layout
);

