<template>
  <footer>
    <a href="#" v-show="!isEnd" :title="tips" @click.prevent="togglePause" v-html="text"></a>
    <a href="#" v-show="!isEnd" title="跳过" @click.prevent="skip">
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z" fill="#000000" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
      </svg>
    </a>
    <a href="https://github.com/xmxe/" title="GitHub" :target="target" v-show="isEnd">
      <svg width="23" height="28" class="icon" viewBox="0 0 16 14" version="1.1" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
        </path>
      </svg>
    </a>
    <a href="https://gitee.com/xmxe/" title="码云" :target="target" v-show="isEnd">
      <svg width="26" height="28" class="icon" viewBox="0 0 75 79" xmlns="http://www.w3.org/2000/svg">
        <path d="M67.558546,39.8714292 L42.0857966,39.8714292 C40.8627004,39.8720094 39.8710953,40.8633548 39.8701949,42.0864508 L39.8687448,47.623783 C39.867826,48.8471055 40.8592652,49.8390642 42.0825879,49.8393845 C42.0827874,49.8393846 42.0829869,49.8393846 42.0831864,49.8387862 L57.5909484,49.838657 C58.8142711,49.8386283 59.8059783,50.830319 59.8059885,52.0536417 C59.8059885,52.0536479 59.8059885,52.053654 59.8059701,52.0536602 L59.8059701,52.6073539 L59.8059701,52.6073539 L59.8059701,53.161115 C59.8059701,56.8310831 56.8308731,59.80618 53.160905,59.80618 L32.1165505,59.80618 C30.8934034,59.806119 29.9018373,58.8145802 29.9017425,57.5914331 L29.9011625,36.5491188 C29.9008781,32.8791508 32.8758931,29.9039718 36.5458611,29.9038706 C36.5459222,29.9038706 36.5459833,29.9038706 36.5460443,29.9040538 L67.5523638,29.9040538 C68.77515,29.9026795 69.7666266,28.9118177 69.7687593,27.6890325 L69.7721938,22.1516997 C69.774326,20.928378 68.7832423,19.9360642 67.5599198,19.9353054 C67.5594619,19.9353051 67.5590039,19.935305 67.558546,19.9366784 L36.5479677,19.9366784 C27.3730474,19.9366784 19.935305,27.3744208 19.935305,36.549341 L19.935305,67.558546 C19.935305,68.7818687 20.927004,69.7735676 22.1503267,69.7735676 L54.8224984,69.7735676 C63.079746,69.7735676 69.7735676,63.079746 69.7735676,54.8224984 L69.7735676,42.0864509 C69.7735676,40.8631282 68.7818687,39.8714292 67.558546,39.8714292 Z"
        fill="#000000">
        </path>
      </svg>
    </a>
    <a href="https://xmxe.github.io/blog" title="博客" :target="target" v-show="isEnd">
      <svg width="23" height="28" class="icon" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 10V4H8V38L14 35" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 44V10H40V44L27 37.7273L14 44Z" fill="#000000" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
      </svg>
    </a>
  </footer>
</template>

<script>
  const STATE_RUNNING = 0
  const STATE_PAUSED = 1
  // const pauseText = ['暂停<<', '继续>>']
  const pauseText = [
    '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12V36" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 12V36" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z" fill="#000000" stroke="#000000" stroke-width="3" stroke-linejoin="round"/></svg>'
    ]
  const tipsText = ['暂停', '继续']

  export default {
    name: 'v-footer',
    data() {
      return {
        state: STATE_RUNNING,
        isEnd: false,
        target: '_blank'
      }
    },
    computed: {
      text() {
        return pauseText[this.state]
      },
      tips() {
        return tipsText[this.state]
      }
    },
    methods: {
      togglePause() {
        this.state = this.state === STATE_RUNNING ? STATE_PAUSED : STATE_RUNNING
        this.$root.$emit('togglePause', this.state)
      },
      skip() {
        this.$root.$emit('skip')
        this.$root.$emit('togglePause', STATE_RUNNING)
      },
      end() {
        this.isEnd = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  footer
    position: absolute
    bottom: 0
    left: 50%
    transform: translate3d(-50%, 50%, 0)
    .icon
      vertical-align: bottom
</style>
