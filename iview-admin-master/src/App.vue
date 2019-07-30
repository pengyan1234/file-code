<template>
  <div id="app">
    <router-view/>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
export default {
  name: 'App',
    components: {
    LoginForm
  },
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
