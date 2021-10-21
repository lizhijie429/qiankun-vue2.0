/*
 * @Author: lizhijie429
 * @Date: 2021-10-20 13:48:16
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-10-21 11:19:00
 * @Description:
 */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlicer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
