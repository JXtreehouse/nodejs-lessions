// 如果开发者没有对请求中携带的输入参数做校验，那么攻击者可以不仅仅只传一个整数 ID，还可以传一个能够获取敏感信息甚至删除它的 SQL 命令。（这里不是强调合理的备份策略的重要性）
// 大多数的编程语言和他们各自的对象关系映射框架都提供了避免 SQL 注入的方法。这些方法通常是在直接连接数据库执行语句之前，对语句中的输入参数进行参数化。这一参数化的过程由编程语言可执行库中的内部逻辑完成。
// 在这种情况下，你需要深入了解这门语言/框架，并学习它如何实现这些功能，这非常重要。
// 比方说，你使用 Sequelize 来做这件事，那么一个简单的实现如下：

const sequelize = require('sequelize')
const {QueryTypes} = require('sequelize')
// const id = ctx.query.id
await sequelize.query(
    'select * from MyTable where id = :p1',
    {
        replacements: {p1: id}, // id 来自于请求参数
        type: QueryTypes.SELECT
    }
);