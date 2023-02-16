export const selectCategory = (state) => {
    const docsArray = state.category.currentCategory;

    const categoryMap = docsArray.reduce((acc, docSnapshot) => {
          const { title, items } = docSnapshot.data();
          acc[title.toLowerCase()] = items;
          return acc;
        }, {});

    return categoryMap;
}
