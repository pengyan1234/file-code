
//使用第三方的express模块创建web服务器
var express = require('express');   //引入express模块

var app = express();   //创建express实例

app.get('/',function (req,res) {    //1.path路由
  res.send('hello \n');
  //next();          //调用下一个中间件
})


var Router = express.Router();    //2.定义Router路由（比较适合同一个路由下的子路由）
//可定义一组路由
/*
   http://example.com/post/add
   http://example.com/post/list
 */
Router.get('/add',function (req,res) {
  res.send('Router /add\n');
});
Router.get('/list',function (req,res) {
  res.send('Router /list\n');
})
app.use('/post',Router);    //绑定路由


app.route('/article')          //3.route路由（比较适合RESTful API）
  .get(function (req,res) {
    res.send('route /article get\n');
  })
  .post(function (req,res) {
    res.send('route /article post\n');
  })


app.listen(1800,function afterListen() {
  console.log('server running at http://127.0.0.1:1800/');
})
