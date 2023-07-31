<template>
  <div>
    <style-text ref='styleText'></style-text>
    <work-text ref='workText'></work-text>
    <v-footer ref='footer'></v-footer>
  </div>
</template>

<script setup>
import StyleText from '@/components/style-text/index.vue'
import doneTxt from '@/components/style-text/done.txt?raw'
import WorkText from '@/components/work-text/index.vue'
import VFooter from '@/components/footer/index.vue'
import Promise from 'bluebird'
import { onMounted, ref } from 'vue'
import { useToast } from "vue-toastification";
import { useMixin } from '@/common/js/mixin'

const styleText = ref(null)
const workText = ref(null)
const footer = ref(null)
const toast = useToast();
const { styleAppend } = useMixin();

onMounted(() => {
  startAnimation()
})

const startAnimation = async () => {
  try {
    await styleText.value.write(0)
    await workText.value.write()
    await styleText.value.write(1)
    workText.value.showWorkBox()
    await Promise.delay(2000)
    await styleText.value.write(2)
    footer.value.end()
    await Promise.delay(1500)
    otherOperations()
  } catch (e) {
    if (e.message === 'SKIP IT') {
      surprisinglyShortAttentionSpan()
    } else {
      throw e
    }
  }
}
const surprisinglyShortAttentionSpan = () => {
  // 一次性覆盖所有style样式
  styleText.value.writeToEnd()
  workText.value.showWorkBox()
  footer.value.end()
  otherOperations()
}
// 其他的一些自定义操作
const otherOperations = () => {
  // 自定义的css
  styleAppend(doneTxt)
  let msg = '点击切换其他有趣的动画≧▽≦'
  if (isMobile()) {
    msg = '木叶飞舞之处 火亦生生不息🔥'
  }
  // 延时展示提示框
  setTimeout(() => {
    toast(msg)
  }, 2000)
}
// 判断是否是移动设备
const isMobile = () => {
  // navigator.userAgent会返回一个只读的字符串,声明了浏览器在发送http请求时的用户代理头的值,/i是表示不区分大小写
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
}

</script>

<style lang='stylus' scoped>
  div
    width: 100%
    height: 100%
</style>
