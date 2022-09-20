<template>
  <pre id="work-text" :class="workCls" v-show="show">
    <div v-if="preview" v-html="text"></div><div v-else>
      <div class="text" v-html="workText" v-show="!showMd"></div>
      <div class="md" v-html="mdText" v-show="showMd"></div>
    </div>
  </pre>
</template>

<script>
  import { writeMixin } from 'common/js/mixin'
  import Promise from 'bluebird'
  import workText from './work.txt'
  // import Markdown from 'markdown'
  import wheel from 'mouse-wheel'
  import marked from 'marked'

  // const toHTML = Markdown.markdown.toHTML

  export default {
    name: 'work-text',
    mixins: [writeMixin],
    data() {
      return {
        flipped: false, // true为翻转后的markdown格式并加上'class=flipped'  false为翻转前的markdown源码格式
        preview: true, // true为左侧简历还没有开始展示  false为左侧简历开始展示了
        show: false, // 同preview
        showMd: true,
        workText: workText,
        mdText: marked(workText)
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
      }
    }
  }
</script>
