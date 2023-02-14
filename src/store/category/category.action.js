import {CATEGORY_ACTION_TYPES} from './category.type';

export const setCategory = (categoryMap) => {
    // console.log("setCategory action fired")
    // console.log(categoryMap);
    return {type: CATEGORY_ACTION_TYPES.SET_CATEGORY, payload: categoryMap};
};