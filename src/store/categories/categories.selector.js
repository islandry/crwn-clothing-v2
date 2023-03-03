import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>{
    console.log("category output selector runs");
    return categories.categories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {}
    );
  }
);

// export const selectCategoriesMap = (state) => {
//   console.log("category selector fired");
//   const categoriesMap = state.categories.categories.reduce(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   );
//   return categoriesMap;
// };
