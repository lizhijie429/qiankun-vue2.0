export const findCurrentPage = (list, key) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    console.log("item+++++++++++", item);
    if (item.children && item.children.length > 0 && item.component === null) {
      findCurrentPage(item.children, key);
    } else {
      if (item.path === key) {
        return item;
      } else {
        findCurrentPage(item.children, key);
      }
    }
  }
};
