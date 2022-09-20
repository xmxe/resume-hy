import Vue from 'vue'
import App from './App'

import 'common/stylus/index.styl'

// 开发模式
Vue.config.productionTip = true

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  created() {
    this.paused = false // 默认不暂停 即运行状态
    this.animationSkipped = false // 默认不跳过动画
  },
  render: h => h(App)
})

let styleTagEl = document.getElementById('style-tag')

// 在index.html里面加上css
app.$on('styleAppend', (styleText) => {
  styleTagEl.textContent += styleText
})

app.$on('styleOverwrite', (styleText) => {
  styleTagEl.textContent = styleText
})

app.$on('togglePause', function (state) {
  // 0运行状态 页面显示'暂停||', 1暂停状态 页面显示'继续>>'
  this.paused = state === 1
})

app.$on('skip', function () {
  this.animationSkipped = true
})
