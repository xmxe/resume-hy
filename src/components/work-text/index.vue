<template>
  <pre id="work-text" :class="workCls" v-show="show">
    <div v-if="preview" v-html="text"></div><div v-else>
      <div class="text" v-html="workText" v-show="!showMd"></div>
      <div class="md" v-html="mdText" v-show="showMd"></div>
      <keep-alive>
        <transition>
          <component :is="animation" class="compCls" @click.native="changeAnimation" v-show="showMd"></component>
        </transition>
      </keep-alive>
    </div>
  </pre>
</template>

<script>
import biker from '../animation/biker'
import dove from '../animation/dove'
import { writeMixin } from 'common/js/mixin'
import Promise from 'bluebird'
import workText from './work.txt'
import wheel from 'mouse-wheel'
import marked from 'marked'
// import Markdown from 'markdown'
// const toHTML = Markdown.markdown.toHTML

export default {
  name: 'work-text',
  mixins: [writeMixin],
  components: {biker, dove},
  data() {
    return {
      flipped: false, // true为翻转后的markdown格式并加上'class=flipped'  false为翻转前的markdown源码格式
      preview: true, // true为左侧简历还没有开始展示  false为左侧简历开始展示了
      show: false, // 同preview
      showMd: true,
      workText: workText,
      mdText: marked(workText),
      animation: 'dove',
      animationArrays: ['biker', 'dove']
    }
  },
  computed: {
    workCls() {
      return this.flipped ? 'flipped' : ''
    }
  },
  methods: {
    async write() {
      this.show = true
      await this.writeTo(this.$el, workText, 0, this.speed, false, 1)
    },
    showWorkBox() {
      this.show = true
      this.preview = false
      this.flipped = true
      // 当数据更新了，在dom中渲染后，⾃动执⾏该函数
      this.$nextTick(() => {
        this.$el.scrollTop = 9999
        // 是否正在翻转
        let flipping = false
        // 滑动事件
        wheel(this.$el, async function (dx, dy) {
          if (flipping) {
            return
          }
          // clienthight:693 scrollTop:text 856  md 2318 scrollHeight:text 1550 md 3018
          // let half = (this.$el.scrollHeight - this.$el.clientHeight) / 10
          // let pastHalf = this.flipped ? this.$el.scrollTop < half : this.$el.scrollTop < half

          let pastHalf = this.flipped ? this.$el.scrollTop <= 0 : this.$el.scrollTop + this.$el.clientHeight >= this.$el.scrollHeight - 10
          // debugger
          if (pastHalf) {
            this.showMd = !this.showMd
            this.flipped = !this.flipped
            flipping = true
            await Promise.delay(500)
            this.$el.scrollTop = this.flipped ? 9999 : 0
            flipping = false
          }

          this.$el.scrollTop += (dy * (this.flipped ? -1 : 1))
        }.bind(this), true)
      })
    },
    changeAnimation() {
      const length = this.animationArrays.length
      // 获取数组元素下标 方法1
      // let i = this.animationArrays.map(item => item).indexOf(this.animation)
      // 获取数组元素下标 方法2
      let i = (this.animationArrays || []).findIndex((item) => item === this.animation)
      i++
      // setInterval(() => {
      if (i >= length) i = 0
      this.animation = this.animationArrays[i]
      // }, 5000)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .compCls
    float: right
    margin-top: -30rem !important
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
