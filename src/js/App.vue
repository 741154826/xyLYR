<template>
  <div id="app">
    <!-- <app-navbar></app-navbar> 
    <app-aside></app-aside> -->
    <!-- 头部 -->
    <header>
        <!-- 导航 -->
        <v-nav></v-nav>
    </header>
    <!-- 中间内容 -->
    <v-content>
      <!-- 左边栏 -->
      <!-- <aside></aside> -->
      <!-- 右边栏 -->
      <!-- <section></section> -->
    </v-content>
    <!-- 页脚 -->
    <footer></footer>
    <!-- 路由出口 -->
    <!-- <router-view></router-view>  -->
  </div>
</template>

<script>
  //头部导航
  import VNav from '../components/Nav.vue'
  //中间内容
  import VContent from '../components/Content.vue'
  
  export default {
    components: {
      VNav,
      VContent
      //VSection
    }
  }
</script>
