# 参与贡献

❤️ Loving Bmixjs and want to get involved? Thanks!

## 环境准备

### node 和 pnpm

开发 Bmixjs 需要 node 14+ 和 pnpm。node 推荐用 nvm 安装，避免权限问题的同时还随时切换 node 版本；pnpm
去[他的官网](https://pnpm.io/installation)选择一种方式安装即可。

### Clone 项目

```bash
$ git clone git@github.com:bmixjs/bmix.git
$ cd bmix
```

### 安装依赖

```bash
$ pnpm i
```

## 常用任务

### 启动 dev 命令

本地开发 Bmixjs 必开命令，用于编译 src 下的 TypeScript 文件到 dist 目录，同时监听文件变更，有变更时增量编译。

```bash
$ pnpm dev
```

如果觉得比较慢，也可以只跑特定 pacakge 的 dev 命令，比如。

```bash
$ cd packages/bmix
$ pnpm dev
```

### 跑 example

examples 目录下保存了各种用于测试的例子，跑 example 是开发 Bmixjs 时确认功能正常的常用方式。每个 example 都配了 dev script，所以进入 example 然后执行 `pnpm dev` 即可。

```bash
$ cd examples/boilerplate
$ pnpm dev
```

### 测试

TODO

### 文档

TODO

### 新增 package(WIP)

新增 package 有封装脚本，无需手动复制 package.json 等文件。分两步，1）创建目录 2）执行 `pnpm bootstrap`。

```bash
$ mkdir packages/foo
$ pnpm bootstrap
```

### 更新依赖

TODO

### 发布

只有 Core Maintainer 才能执行发布。

```bash
$ pnpm release
```
