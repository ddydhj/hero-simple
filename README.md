# HeroSimple 英雄的旅程简版（不使用观察者模式，适合新手）

本项目使用[Angular CLI](https://github.com/angular/angular-cli)1.0.0.版本生成。

## 安装依赖包
进入项目目录`hero-simple`，运行`npm install`命令，会根据`package.json`文件安装项目所需依赖项

## 启动项目

运行`ng serve --open`指令，启动一个服务，并自动在浏览器端打开 `http://localhost:4200/`.如果
你修改了源码，应用程序会自动重新加载

## 目录划分
commons：主要放置一些公共的类，及相关mock数据
components: 组件，每一个组件拥有独立的文件夹，比如: root表示根组件
modules：模块文件夹
routers: 路由模块文件夹
services: 服务文件夹

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
