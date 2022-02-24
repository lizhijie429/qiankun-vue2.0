# qiankun-vue2.0

在你决定 clone 项目的时候，希望你可以帮我点个 ⭐，这将对我是极大的鼓励。

## 介绍

基于 qiankun+vue2.0 技术栈实现的前端微应用架构，实现了动态路由（所有路由均使用 history 模式）、主子应用以及子子应用之间的通信，并做了简单的自动化脚本命令，可用一行命令所有子应用的依赖安装、启动以及打包部署。

开源该 demo 的目的，只是想为大家在使用 qiankun 时提供一种思路。

## 问答

关于问题，请使用[issues](https://gitee.com/lizhijie429/qiankun-vue2.0/issues)或加微信 lizhijie429

## 关于项目依赖包 qiankun-vue2-common

**包内容简介：** 所有子应用都需要对主应用下发的数据进行接收及处理、如果数据修改则通知到其他应用以及对主应用下发的路由数据进行处理，因为这些逻辑完全一样，因此将这些实现逻辑提取为一个 npm 包统一管理。

**npm 地址：**[qiankun-vue2-common - npm (npmjs.com)](https://www.npmjs.com/package/qiankun-vue2-common)

**gitee 源码地址：**[qiankun-vue2-common](https://gitee.com/lizhijie429/qiankun-vue2-common)

**实现的功能：** 在 vuex 中动态添加了 global 模块及 routes 模块；

1. global 模块：封装了全局下发的数据，以及数据修改通知到其他应用；
2. routes 模块：路由数据的封装以及组件的导入。

## 项目运行

1. 项目克隆

   ```bash
   git clone https://gitee.com/lizhijie429/qiankun-vue2.0.git
   ```

2. 依赖安装

   依赖安装采用pnpm，具体使用文档请查阅[pnpm官网](https://www.pnpm.cn)

   ```bash
   cd qiankun-vue2.0
   pnpm install
   ```

3. 项目启动

   ```bash
   cd qiankun-vue2.0
   pnpm run start
   ```

4. 升级依赖 qiankun-vue2-common

   ```bash
   cd qiankun-vue2.0
   pnpm run update
   ```

## 编译部署

关于 qiankun 项目打包编译请查看文档：[入门教程 (umijs.org)](https://qiankun.umijs.org/zh/cookbook#场景-1：主应用和微应用部署到同一个服务器（同一个-ip-和端口）) demo 将主应用和微应用部署到同一个服务器（同一个 IP 和端口），其他部署方式请自行查看官网文档。

打包编译

```bash
cd qiankun-vue2.0
pnpm run build
```

本地部署测试（请使用nginx进行部署测试）

## 支持

如果觉得 qiankun-vue2.0 这个 demo 为你提供了不错的思路，或者已经在使用了，希望你可以帮我点个 ⭐ ，这将对我是极大的鼓励。
