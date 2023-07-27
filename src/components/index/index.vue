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
      let msg = '点击切换其他有趣的动画≧▽≦'
      if (this.isMobile()) {
        msg = '木叶飞舞之处 火亦生生不息🔥'
      }
      // 延时展示提示框
      setTimeout(() => {
          // 弹出提示框
        this.$toast(msg)
      }, 2000)
    },
    // 判断是否是移动设备
    isMobile() {
      // navigator.userAgent会返回一个只读的字符串,声明了浏览器在发送http请求时的用户代理头的值,/i是表示不区分大小写
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  }
}
</script>

<style lang='stylus' scoped>
  div
    width: 100%
    height: 100%
</style>
