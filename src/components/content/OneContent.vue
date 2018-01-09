<template>
  <div class="content">
    <aside></aside>
    <section>
      <div></div>
      <div></div>
    </section>
    <span></span>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
@num: 2.5vw;
@btm: 3%;
  .content{
    width: 100%;
    height: 100%;
    position: relative;
    aside{
      width: 44%;
      height: 100%;
      background: url(../../img/oneSide.png) no-repeat top left/100% 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      transform: translateY(100%);
      animation: side 0.5s ease forwards;
    }
    .asideA{
      animation: asideA 0.5s ease forwards;
    }
    @keyframes asideA{
      from{
        transform: translateY(0%);
        opacity: 1;
      }
      to{
        transform: translateY(100%);
        opacity: 0;
      }
    }
    section{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      background: url(../../img/oneSection.jpg) no-repeat top left/100% 100%;
      animation: sect 10s linear forwards;
      .left{
        width: 44%;
        height: 100%;
        background-image: -webkit-linear-gradient(top, #f3daa7, #e1a670);
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        transform: translateY(100%);
        animation: side 0.5s ease forwards;
      }
      @keyframes side{
        to{
          transform: translateY(0%);
        }
      }
      .right{
        width: 56%;
        height: 100%;
        background: url(../../img/right1.jpg) no-repeat top left/100% 100%;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 44%;
        transform: translateY(-100%);
        animation: sectB 0.5s ease forwards;
      }
      @keyframes sectB{
        to{
          transform: translateY(0%);
        }
      }
    }
    @keyframes sect{
      0%{
        transform: translateY(-100%);
      }
      5%{
        transform: translateY(0%);
      }
      100%{
        transform: scale(1.6);
      }
    }
    .sectA{
      animation: sectA 0.2s ease forwards;
    }
    @keyframes sectA{
      to{
        top: 0.8rem;
        left: 6%;
        width: 88%;
        bottom: 0.8rem;
      }
    }
    span{
      width: @num;
      height: @num;
      background: url(../../img/down.png) no-repeat top left/100% 100%;
      position: absolute;
      bottom: @btm;
      left: 50%;
      z-index: 1;
      transform: translateX(-50%);
      animation: upDown 0.8s ease infinite;
      cursor: pointer;
    }
    @keyframes upDown{
      0%{
        bottom: @btm;
      }
      50%{
        bottom: 2%;
      }
      100%{
        bottom: @btm;
      }
    }
    .spanA{
      background: url(../../img/down2.png) no-repeat top left/100% 100%;
    }
    .up{
      background: url(../../img/up.png) no-repeat top left/100% 100%;
    }
    
  }
</style>

// <script>
//   $(function(){
//     content();
//     $(window).resize(function(){
//       content();   
//     })
//     function content(){
//       var setH = $(window).height();
//       $('div').css('height', setH);
//     }
//   })
// </script>
