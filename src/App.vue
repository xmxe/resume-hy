<template>
  <div id="app">
    <style-text ref="styleText"></style-text>
    <work-text ref="workText"></work-text>
    <v-footer ref="footer"></v-footer>
  </div>
</template>

<script>
  import StyleText from './components/style-text/style-text'
  import WorkText from './components/work-text/work-text'
  import VFooter from './components/footer/footer'
  import Promise from 'bluebird'
  import doneTxt from './components/style-text/done.txt'

  export default {
    name: 'App',
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
          await Promise.delay(2000)
          // resume全屏
          this.fullScreenResume()
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
        // resume全屏
        this.fullScreenResume()
      },
      fullScreenResume() {
        this.$root.$emit('styleAppend', doneTxt)
      }
    }
  }
</script>

<style lang="stylus">
  #app
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 20px

  h1,h2,h3,h4,h5,h6,p,ul
    margin: 1px 0px

</style>
