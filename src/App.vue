<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <index></index>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from 'vue-toastification'
import index from '@/components/index'

// 弹窗选项配置
const options = {
  // You can set your default options here
  transition: 'Vue-Toastification__slideBlurred',
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false
}
Vue.use(Toast, options)

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style lang="stylus">
  // Import the CSS or use your own!
  @import 'vue-toastification/dist/index.css'

  #app
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 20px

  h1,h2,h3,h4,h5,h6,p,ul
    margin: 1px 0px

</style>
