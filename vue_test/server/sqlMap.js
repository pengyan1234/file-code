//sql语句映射文件，以供api逻辑调用

//sql语句
var sqlMap={
  //用户
  user:{
    add:'insert into nodeUser(name,age) values (?,?)',
    select:'select * from nodeUser',
    delete:'delete from nodeUser where uid=?'
  }
}

module.exports=sqlMap;
