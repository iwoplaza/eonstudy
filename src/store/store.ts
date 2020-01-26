import { createStore } from 'redux';
import { RootState, CHANGE_PAGE, Action } from './types';

const initialState: RootState = {
    page: '',
};

const reducer = (state: RootState = initialState, action: Action) => {
    switch(action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
            };
        default:
            return state;
    }
};

export const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);