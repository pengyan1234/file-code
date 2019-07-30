<template>
  <div>
    社区
    {{ $route.query.userId }}    <!--使用了链接中的query属性里的字段值-->
    <br>
    <router-link :to="{name:'userlist', query: {userId:222}}">路由跳转：列表页面</router-link>
  </div>
</template>

<script>
    export default {
        name: "shequ"
    }
</script>

<style scoped></style>


