/*
 * @Author: AlexZ33 775136985@qq.com
 * @Date: 2022-07-11 18:03:59
 * @LastEditors: AlexZ33 775136985@qq.com
 * @LastEditTime: 2022-07-13 18:53:28
 * @FilePath: /nodejs-lessions/koa/1/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World' 
}

app.use(main);
app.listen(3000);
