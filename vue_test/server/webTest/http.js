
//内置的HTTP模块创建web服务器
var http=require('http');
var querystring = require('querystring');   //对http请求所带的数据进行解析

var postHTML =
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

/*
*  http 获取post请求体的内容
* */
http.createServer(function (req,res){

  // 1.定义了一个post变量，用于暂存请求体的信息
  var postBody = '';

  // 2.（data:当服务端接收到数据时触发）通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
  req.on('data', function(chunk){
    postBody += chunk;
  });

  // 3.(end:数据接收完时触发)在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(postBody);   //parse这个方法是将一个字符串反序列化为一个对象(包含的方法：序列化，反序列化，编码，解码)。
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

    if(body.name && body.url) { // 输出提交的数据
      res.write('post提交后的数据为：');
      res.write("<br>");
      res.write("网站名：" + body.name);   //服务端响应内容,若用http,必须使用http.res.write
      res.write("<br>");                 //服务端响应内容,若用express,必须使用res.send
      res.write("网站 URL：" + body.url);
    } else {  // 输出表单
      res.write(postHTML);
    }
    res.end();
  });
}).listen(8888,function afterListen() {
  console.log('server running at http://127.0.0.1:8888/');
});


