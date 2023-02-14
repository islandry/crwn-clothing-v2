import {CATEGORY_ACTION_TYPES} from './category.type';

const INITIAL_STATE = {
    currentCategory: {}
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case CATEGORY_ACTION_TYPES.SET_CATEGORY:
            return {
                ...state,
                currentCategory: payload
            };
        default:
            return state;
    };
}