import '../css/common.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  components: { App },
  template: '<App />',
  router
}).$mount('#app')


$(function(){
  var n=0;
  $('span').click(function(){
    $('nav').css('box-shadow','0 0 1px 1px #e8e8e8');
    $('a').css('color','#666668');
    $(this).addClass('spanA');
    $('aside').addClass('asideA');
    $('section').addClass('sectA');
    n++;
    if(n==1){
      setTimeout(function(){
        $('section>div:first-child').addClass('left');
        $('section>div:last-child').addClass('right');
      },500);
    }else if(n==2){
      $('section>div:first-child').css('background-image','-webkit-linear-gradient(top, #57b2e3, #5e96cd)')
    }else if(n==3){
      $(this).addClass('up');
    }else if(n>3){
      n=0;
      $('nav').css('box-shadow','');
      $('a').css('color','white');
      $(this).toggleClass('spanA').removeClass('up');
      $('aside').toggleClass('asideA');
      $('section').toggleClass('sectA');
      $('section>div:first-child').removeClass('left');
      $('section>div:last-child').removeClass('right');
    }
  })
})
