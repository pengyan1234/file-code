//测试用api示例

var models = require('../db');  //引入上上级目录下的db.js文件，可调用里面的变量
var express = require('express');
var router = express.Router();  //路由
var mysql = require('mysql');
var $sql=require('../sqlMap');
var app=express();   //创建express实例，可使用express的use，get，post方法  ，该项目使用router的post,get方法
/*app1.get('/addUser',function(req,res){});*/

//连接数据库
var conn = mysql.createConnection(models.mysql);   //创建连接
//var connection =mysql.createPool();        //创建数据库连接池

//创建一个connection
conn.connect(function(err){
  if(err){
    console.log('[query] - :'+err);
    return;
  }
  console.log('[connection connect] succeed!');
});

//响应JSON数据
var jsonWrite=function(res,ret){
  if(typeof ret === 'undefined'){
    res.json({
      code:'1',
      msg:'操作失败'
    })
  }else{
    res.json(ret);
  }
};

//增加用户接口
router.post('/addUser',(req,res)=> {
  var sql=$sql.user.add;
  var parms = req.body;     //需要先引入body-parser 模块,浏览器端Post过来的Form而且已经是一个JSON对象
  console.log(parms);
  conn.query(sql,[parms.username,parms.age],function(err,result){
    if(err){
      console.log(err);
    }
    if(result){
      jsonWrite(res,result);
    }
  })
})

//获取用户列表接口
/*router.post('/userList',(req,res)=>{
  var sql=$sql.user.select;     //获取SQL语句
  conn.query(sql,function (err,result) {    //执行
    if (err){
      console.log(err)
    }
    if (result){
      jsonWrite(res,result);
    }
  })
})*/
app.post('/userList',(req,res)=>{
  var sql=$sql.user.select;     //获取SQL语句
  conn.query(sql,function (err,result) {    //执行
    if (err){
      console.log(err)
    }
    if (result){
      jsonWrite(res,result);
    }
  })
})

//根据id删除用户
router.post('/deleteUserById',function (req,res) {
  var sql =$sql.user.delete;   //获取删除SQL
  var params=req.body;     //获取id
  console.log(params);
  conn.query(sql,[params.uid],function (err,result) {
    if (err){
      console.log(err)
    }
    if(result){
      console.log(result)
      jsonWrite(res,result);
    }
  })
})//关闭connection
/*conn.end(function(err){
  if(err){
    return;
  }
  console.log('[connection end] succeed!');
});*/


//不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到
module.exports=router;
