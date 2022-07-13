/*
 * @Author: AlexZ33 775136985@qq.com
 * @Date: 2022-07-13 19:08:24
 * @LastEditors: AlexZ33 775136985@qq.com
 * @LastEditTime: 2022-07-13 19:08:27
 * @FilePath: /nodejs-lessions/http/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')
const querystring = require('querystring');


const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 设置返回格式为json
    res.setHeader('Content-type', 'application/json')

    //返回的数据‘
    const resData = {
        method,
        url,
        path,
        query
    }

    //  返回
    if (method === 'GET') {
        res.end(
            JSON.stringify(resData)
        )
    }
    if (method === 'POST') {
        let postdata = ''
        req.on('data', chunk => {
            postdata += chunk.toString()
        })
        req.on('end', () => {
            resData.postdata = postdata
                // 返回
            res.end(
                JSON.stringify(resData)
            )
        })
    }
})
server.listen(8000)
console.log('OK 8000');