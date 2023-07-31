<template>
  <pre v-show="show" id="work-text" ref="el" :class="workCls">
    <div v-if="preview" v-html="text"></div><div v-else style="position: absolute;width: 99%;">
      <div v-show="!showMd" class="text" v-html="workTxt"></div>
      <div v-show="showMd" class="md" v-html="mdText"></div>
      <!-- <keep-alive> 
        <transition>
          <component :is="currentComponent" v-show="showMd" class="compCls" @click="switchComponent"></component>
        </transition>
      </keep-alive> -->
    </div>
  </pre>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useMixin } from '@/common/js/mixin'
import Promise from 'bluebird'
import workTxt from './work.txt?raw'
import wheel from 'mouse-wheel'
import { marked } from 'marked'
// import Markdown from 'markdown'
// const toHTML = Markdown.markdown.toHTML

const { writeTo, text } = useMixin()
const el = ref(null)

const flipped = ref(false) // true为翻转后的markdown格式并加上'class=flipped'  false为翻转前的markdown源码格式
const preview = ref(true)// true为左侧简历还没有开始展示  false为左侧简历开始展示了
const show = ref(false) // 同preview
const showMd = ref(true)
const mdText = marked(workTxt)

const workCls = computed(() => {
  return flipped.value ? 'flipped' : ''
})

const write = async function () {
  show.value = true
  await writeTo(el.value, workTxt, 0, false, 1)
}
const showWorkBox = function () {
  show.value = true
  preview.value = false
  flipped.value = true
  // 当数据更新了，在dom中渲染后，⾃动执⾏该函数
  nextTick(() => {
    el.value.scrollTop = 9999
    // 是否正在翻转
    let flipping = false
    // 滑动事件
    wheel(el.value, async function (dx, dy) {
      if (flipping) {
        return
      }
      // clienthight:693 scrollTop:text 856  md 2318 scrollHeight:text 1550 md 3018
      // let half = (this.$el.scrollHeight - this.$el.clientHeight) / 10
      // let pastHalf = this.flipped ? this.$el.scrollTop < half : this.$el.scrollTop < half

      let pastHalf = flipped.value ? el.value.scrollTop <= 0 : el.value.scrollTop + el.value.clientHeight >= el.value.scrollHeight - 10
      // debugger
      if (pastHalf) {
        showMd.value = !showMd.value
        flipped.value = !flipped.value
        flipping = true
        await Promise.delay(500)
        el.value.scrollTop = flipped.value ? 9999 : 0
        flipping = false
      }

      el.value.scrollTop += (dy * (flipped.value ? -1 : 1))
    }.bind(this), true)
  })
}

// const currentComponentIndex = ref(0)
// const components = import.meta.glob('../animation/**/*.vue')
// const componentKeys = Object.keys(components)
// // 只保留组件对象
// const componentObjects = componentKeys.map((key) => components[key])
// // 计算属性，动态获取当前展示的组件
// const currentComponent = computed(() => componentObjects[currentComponentIndex.value])
// const switchComponent = () => {
//   currentComponentIndex.value = (currentComponentIndex.value + 1) % componentObjects.length
// }
// debugger

defineExpose({
  write,
  showWorkBox
})

</script>
<style lang="stylus" scoped>
  .compCls
    position: absolute
    bottom: 1px
    right: 1px
    transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg)

  // 组件过渡动画 https://v2.cn.vuejs.org/v2/guide/transitions.html
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-to, .v-leave
    opacity: 1
  .v-enter-active
  //, .v-leave-active
    animation: bounce-in 1s

  @keyframes bounce-in
    0%
      transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg) scale(0)
    50%
      transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg) scale(1.5)
    100%
      transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg) scale(1)
</style>
