快速搭建 ts + express 开发环境

快速搭建一个 ts + express 环境，用于调试或试用一些 npm 包，或者做一个简易的临时测试接口等。

1、初始化项目
```
npm init -y

```
2、初始化 ts / ts-node
```
npm i -D typescript ts-node
npx tsc --init

```
3、初始化 eslint
```
npm i -D eslint
npx eslint --init

```
4、安装 express
```
npm i -S express
npm i -D @types/express
```
5、编写入口文件代码 src/main.ts

```
import express, { Request, Response } from "express";

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.json({ msg: "hello world" });
});

app.listen(3000);

```
6、运行代码，然后访问 http://localhost:3000/ping ：

```
npx ts-node main.ts

```
一个测试用的开发环境，为什么要搭建 ts 和 eslint 版本？写惯了，搭建起来也简单，在命令行交互中点几下就可以了。

如果需要热更新，还可以通过 ts-node-dev 来启用：

```
npm i -D ts-node-dev

```
运行代码：

```
ts-node-dev main.ts

```