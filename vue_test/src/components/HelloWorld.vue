<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
      <form>
        姓名：<input type="text" name="username" v-model="userName"><br>
        年龄：<input type="text" name="age" v-model="age"><br>
        <button type="button" @click="addUser">提交数据</button>
        <!--<button type="button" @click="userList">去列表查看数据</button>-->
        <router-link :to="{ name: 'SheQu', query: { userId: 123 }}">路由测试：社区</router-link>
      </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName:'',   //数据要实例化
      age:''
    }
  },
  methods:{   //定义的方法
    addUser(){  //添加用户方法
      var name=this.userName;
      var age=this.age;
      this.$http.post('/api/user/addUser',{
        username:name,
        age:age
      },{}).then((response) => {
        //此处为处理正确时的回调
        console.log(response);
        if(response.status==200){
            alert('添加成功')
          }
        /*if(response.ok){
          alert('添加成功！')
        }*/
      })
    },
    userList(){   //去列表页面，使用axios与后台交互
      this.$ajax.post('/api/user/userList')
        .then(function (response) {     //返回成功
          console.log(response.data);
        })
        .catch(function (error) {       //返回失败回调
          console.log(error);
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
