
<template>
  <div id="user">
    列表页面{{$route.query.userId}}    <!--从页面路由取到的值-->
   <button type="button" class="btn btn-success" @click="getUserList">成功按钮</button>
    <table class="table table-hover">
      <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
           </tr>
      </thead>
      <tbody>
      <tr v-for="user in userList">
        <td>{{user.uid}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td><button type="button" class="btn btn-warning" @click="deleteUserById(user.uid)">删除</button></td>
      </tr>
      </tbody>

    </table>

  </div>
</template>

<script>

    export default {
        name: "userList",
        data(){
          return{
            message2:'nihao',
            userList:[]
          }
      },
      mounted:function () {    //vue的生命周期，用created或mounted定义可用来初始化
        this.getUserList();
      },
      methods:{
        getUserList(){
          var _this=this;    //如果回调函数格式为function，必须定义此段，否则不能用this.userList 若为格式response =>可以用this.userList
          console.log(this.userList)
          this.$ajax.post('/api/user/userList')
            .then(function (response) {
              _this.userList=response.data
              console.log(response.data)
            }).catch(function (error) {
             console.log(error)
          })
        },
        deleteUserById(uid){
          var _this=this;
          this.$ajax.post('/api/user/deleteUserById',{
            uid:uid
          }).then(function (response) {
            console.log(response);
            if(response.status==200) {
              alert('删除成功');
              _this.getUserList();
            }
          })
            .catch(function (error) {
              console.log(error);
            })
        }

      }
    }
</script>

<style scoped>

</style>
