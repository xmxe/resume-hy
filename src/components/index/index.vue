<template>
  <div>
    <style-text ref='styleText'></style-text>
    <work-text ref='workText'></work-text>
    <v-footer ref='footer'></v-footer>
  </div>
</template>

<script>
import StyleText from '@/components/style-text'
import doneTxt from '@/components/style-text/done.txt'
import WorkText from '@/components/work-text'
import VFooter from '@/components/footer'
import Promise from 'bluebird'

export default {
  name: 'Index',
  components: {
    VFooter,
    StyleText,
    WorkText
  },
  mounted() {
    this.done = false
    this.startAnimation()
  },
  methods: {
    async startAnimation() {
      try {
        // this.refs获取组件的实例对象
        await this.$refs.styleText.write(0)
        await this.$refs.workText.write()
        await this.$refs.styleText.write(1)
        this.$refs.workText.showWorkBox()
        await Promise.delay(2000)
        await this.$refs.styleText.write(2)
        this.$refs.footer.end()
        await Promise.delay(1500)
        this.otherOperations()
      } catch (e) {
        if (e.message === 'SKIP IT') {
          this.surprisinglyShortAttentionSpan()
        } else {
          throw e
        }
      }
    },
    surprisinglyShortAttentionSpan() {
      // 一次性覆盖所有style样式
      this.$refs.styleText.writeToEnd()
      this.$refs.workText.showWorkBox()
      this.$refs.footer.end()
      this.otherOperations()
    },
    // 其他的一些自定义操作
    otherOperations() {
      // 自定义的css
      this.$root.$emit('styleAppend', doneTxt)

      // 延时展示提示框
      setTimeout(() => {
        // 弹出提示框
        this.$toast('尝试点击切换其他有趣的动画≧▽≦')
      }, 2000)
    }
  }
}
</script>

<style lang='stylus' scoped>
  div
    width: 100%
    height: 100%
</style>
