
const  http = require('http')

// 组合中间件 将所有中间件组合,返回一个包含所有传入中间件的函数
// 参考koa-compose源码 
// 关于koa-compose的解读: https://github.com/HXWfromDJTU/blog/issues/11
function compose(middlewareList) {
    // 传入middwareList的必须为数组
    // 数组内的元素必须为函数
    return function(ctx) {
        // 中间件调用
        // 递归包装每一个中间件,并且统一输出一个 Promise 对象
        function dispatch(i) {
            const fn = middlewareList[i]
            try {
                return Promise.resolve(
                    fn(ctx, dispatch.bind(null, i+1))//promise Promise.resolve包裹返回的都是promise对象
                )
            } catch (e) {
                return Promise.reject(e)
            }
        }
        return dispatch(0)
    }
}

class LikeKoa2 {
    constructor() {
        this.middlewareList = []
    }

    use(fn) {
        this.middlewareList.push(fn)
        return this
    }

    createContext(req, res) {
        const ctx = {
            req, 
            res
        }
        ctx.query = req.query
        return ctx
    }

    handleRequest(ctx, fn) {
        return fn(ctx)
    }

    callback() {
        const fn = compose(this.middlewareList)
        return (req, res) => {
            const ctx = this.createContext(req, res)
            return this.handleRequest(ctx,fn)
        }
    }

    listen(...args) {
        const server = http.createServer(this.callback())
        server.listen(...args)
    }
}

module.exports = LikeKoa2