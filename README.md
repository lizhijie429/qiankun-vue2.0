# qiankun-vue2.0

#### 介绍

基于 qiankun+vue2.0 技术栈实现的前端微应用架构，实现了动态路由（所有路由均使用 history 模式）、主子应用以及子子应用之间的通信，并做了简单的自动化脚本命令，可用一行命令所有子应用的依赖安装、启动以及打包部署。

开源该 demo 的目的，只是想为大家在使用 qiankun 时提供一种思路。

#### 项目运行

1. 项目克隆

   ```bash
   git clone https://gitee.com/lizhijie429/qiankun-vue2.0.git
   ```

2. 依赖安装

   ```bash
   cd qiankun-vue2.0
   npm install
   ```

3. 项目启动

   ```bash
   cd qiankun-vue2.0
   npm run start
   ```

4. 升级依赖 qiankun-vue2-common

   ```bash
   cd qiankun-vue2.0
   npm run update
   ```

5. 打包编译

   ```bash
   cd qiankun-vue2.0
   npm run lint // 修复esLint警告
   npm run build
   ```

#### 问答

有关问题和支持，请使用[issues](https://gitee.com/lizhijie429/qiankun-vue2.0/issues)或加微信 lizhijie429.
