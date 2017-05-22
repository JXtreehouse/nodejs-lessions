var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();



//设置模板引擎
app.set('view engine', 'ejs');


// static files

app.use(express.static('./public'));// localhost:3000/assets/styles.css





//调用 controllers
todoController(app);



// 监听端口
app.listen(3000);
console.log('You are listening to port 3000');
