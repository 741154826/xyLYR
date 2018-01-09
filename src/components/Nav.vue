<template>
  <nav>
    <ul>
      <li>
        <router-link to="">
          <a>加入我们</a>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <a>企业动态</a>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <a>产品和服务</a>
        </router-link>
      </li>
      <li>
        <router-link to="/two">
          <a>关于我们</a>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <a>首页</a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
  nav{
    width: 100%;
    height: 0.8rem;
    position: fixed;
    z-index: 1;
    ul{
      width: 92%;
      padding-top: 2vw;
      li{
        float: right;
        padding: 0 1vw;
        a{
          display: block;
          font-size: 1.2vw;
          color: white;
          font-weight: 300;
        }
        .b{
          color: #666668;
        }
      }
    }
  } 
</style>
