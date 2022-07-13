
const express = require('./express-like')

// 本次http请求实例
const app = express()

app.use((req, res, next)=> {
    console.log('请求开始...', req.method, req.url)
    next()
})

app.use((req, res, next)=> {
    // 假设在处理cookies
    console.log('处理cookies')
    req.cookie = {
        userId: '1234'
    }
    next()
})

app.use('/api', (req, res, next)=> {
    console.log('处理/api路由')
    next()
})

app.get('/api', (req, res, next) => {
    console.log('get /api 路由')
    next()
})

// 模拟登录验证
function loginCheck(req, res, next){
    setTimeout(()=> {
        console.log('模拟登录成功');
        next()
    })
}
app.get('/hello', (req,res) => {
    res.end('Hello world')
})

app.get('/api/get-cookies', loginCheck, (req, res, next) => {
    console.log('get /api/get-cookie');
    res.json({
        errno: 0,
        data: req.cookie
    })
})

app.post('/login', loginCheck, (req, res, next) => {
    res.end('xxx, 登录成功')
})
app.listen(3000, () => {
    console.log('server is running on port 3000');
})

