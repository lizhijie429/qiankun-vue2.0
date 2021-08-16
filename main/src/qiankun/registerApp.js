/* 子应用列表 */
export const microApps = [
  {
    name: "sub01", // 应用名称
    entry: process.env.VUE_APP_CHILD_sub01,
    activeRule: "/sub01",
  },
  {
    name: "sub02",
    entry: process.env.VUE_APP_CHILD_sub02,
    activeRule: "/sub02",
  },
];

/* qiankun全局声明周期钩子 */
export const config = {
  beforeLoad: [
    (app) => {
      console.log("%c before load", "background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 挂载前回调
  beforeMount: [
    (app) => {
      console.log("%c before mount", "background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 挂载后回调
  afterUnmount: [
    (app) => {
      console.log("%c after unload", "background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 卸载后回调
};
