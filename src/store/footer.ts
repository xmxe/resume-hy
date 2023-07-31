import { ref } from 'vue'
import { defineStore } from 'pinia';

export const footerStore = defineStore('footerStore', () => {
  // 执行速度
  const speed = ref(0)
  function changeSpeed() {
    speed.value = speed.value === 0 ? 35 : 0
  }

  // 暂停/继续
  const paused = ref(false)
  function changePaused() {
    paused.value = !paused.value
  }
  
  // 跳过
  const animationSkipped = ref(false)
  function changeAnimationSkipped() {
    animationSkipped.value = !animationSkipped.value
  }

  return { speed, changeSpeed, paused, changePaused, animationSkipped, changeAnimationSkipped }
})
