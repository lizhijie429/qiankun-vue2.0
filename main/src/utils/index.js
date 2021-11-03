export const homeMenuData = {
  title: "首页",
  moduleName: "main",
  name: "home",
  path: "/home",
  meta: { isTabs: false, isSide: false, moduleName: "main", title: "首页" },
};
// 查找数组末级节点
export const getLastLevelNode = (list) => {
  let result = [];
  if (!Array.isArray(list) || !list.length > 0) return false;
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    if (item.children && item.children.length > 0) {
      result = [...result, ...getLastLevelNode(item.children)];
    } else {
      result.push(item);
    }
  }
  return result;
};
