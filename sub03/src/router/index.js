import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

/* 导入静态路由 */
import Loading from "../views/loading";
import NotFound from "../views/notFound";

/* 封装导入组件的函数 */
const importViews = path => lazy(() => import(`../views${path}`));

/* 组装路由表 */
const BasicRoute = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/home" component={importViews("/home")} />
      <Route exact path="/about" component={importViews("/about")} />
      <Redirect exact path="/" to="/home" />
      <Route path="*" component={NotFound} />
    </Switch>
  </Suspense>
);

export default BasicRoute;
