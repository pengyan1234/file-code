//express服务器入口文件
//node 后端服务器
//const定义的变量不可以修改，而且必须初始化。 声明只读的常量，一旦声明，值（指向的内存地址）不能改变，与final修饰的变量非常相似
const userApi = require('./api/userApi');    //路由信息（接口地址），增加一个路由规则
const fs= require('fs');  //获取文件系统
const path=require('path');
//bodyparser 用来解析post的请求取代了 原生的 req.on 的方式 但是只能取到ajax 和表单的数据 ，取不到上传的文件类型
const bodyParser = require('body-parser');   //body-parser ：解析body中的数据，并将其保存为Request对象的body属性,req.body获取到前台传输的数据
const express=require('express');
const app=express();   //实例化对象

//Content-Type：请求报文主体的类型、编码,常见的类型有text/plain、application/json、application/x-www-form-urlencoded。
// 常见的编码有utf8、gbk等
// 解析json格式 application/json
app.use(bodyParser.json());
// 解析from表单提交 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend:false}));
//返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
//后端api路由
app.use('/api/user',userApi);    //配置路由，（‘自定义路径’，上面设置的接口地址）

/*
  app.use使用：
  1.app.use(path,callback)中的callback既可以是router对象又可以是函数
  例：
    1.app.use('/api/user',userApi);   将路由挂载至应用
    2.app.use('/addList',function(){'具体操作'})    当http请求，接收get，post请求
  2.app.use 为express程序注册中间件---（内置中间件，第三方中间件,自定义中间件）
  例：
    1.app.use(express.static(__dirname + '/public'));  express.static 是Express目前唯一内置的一个中间件。用来处理静态资源文件
    2.var bodyParser = require('body-parser');   第三方中间件，解析body数据  ，详见D:threeMiddle.js
      app.use(bodyParser.json());
    3.app.use([path],function(req,res,next){'执行next（）'})
    (可用于实现路由的功能) 根据浏览器输入的网址判断，path可选，也可在function里面对路径判断，是否用next() 详见：D:middle2.js

 个人理解：可以是一个处理某项功能的函数。第三方中间件需要引入，才能使用的函数
 */

//监听端口
app.listen(3000);
console.log('success listen at port:3000....');
