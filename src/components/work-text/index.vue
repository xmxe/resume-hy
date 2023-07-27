<template>
  <pre id="work-text" :class="workCls" v-show="show">
    <div v-if="preview" v-html="text"></div><div style="position: absolute;width: 99%;" v-else>
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
import { writeMixin } from 'common/js/mixin'
import Promise from 'bluebird'
import workText from './work.txt'
import wheel from 'mouse-wheel'
import marked from 'marked'
// import Markdown from 'markdown'
// const toHTML = Markdown.markdown.toHTML

let components = {}
let animationArrays = []
// 参数1:要搜索的文件夹目录 参数2:是否搜索它的子目录 参数3:匹配文件的正则表达式。
const fieldsComponents = require.context('@/components/animation', true, /\.vue$/)
fieldsComponents.keys().forEach(element => {
  // 组件实例
  const com = fieldsComponents(element)
  // 截取路径作为组件名
  const comName = com.default.name
  animationArrays.push(comName)
  // 截取组件去扩展名后, 添加到组件对象
  components[comName] = com.default || com
})

export default {
  name: 'work-text',
  mixins: [writeMixin],
  components: components,
  data() {
    return {
      flipped: false, // true为翻转后的markdown格式并加上'class=flipped'  false为翻转前的markdown源码格式
      preview: true, // true为左侧简历还没有开始展示  false为左侧简历开始展示了
      show: false, // 同preview
      showMd: true,
      workText: workText,
      mdText: marked(workText),
      animation: 'biker',
      animationArrays: animationArrays
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
      await this.writeTo(this.$el, workText, 0, false, 1)
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
      // 顺序获取动画
      // 获取数组元素下标 方法1
      // let i = this.animationArrays.map(item => item).indexOf(this.animation)
      // 获取数组元素下标 方法2
      let i = (this.animationArrays || []).findIndex(item => item === this.animation)
      i++
      this.animation = this.animationArrays[i === length ? 0 : i]

      // 随机获取动画
      // this.animation = this.animationArrays[Math.floor(Math.random() * length)]
    }
  }
}
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
