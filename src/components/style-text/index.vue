<template>
  <pre id="style-text" ref="el" contenteditable v-html="text"></pre>
</template>

<script setup>
import { useMixin } from '@/common/js/mixin'
import { handleChar } from '@/common/js/util'
import { ref } from 'vue'
import styles0 from './styles0.css?inline'
import styles1 from './styles1.css?inline'
import styles2 from './styles2.css?inline'

const el = ref(null)
const { writeTo, text, styleOverwrite } = useMixin()

const styleText = [styles0, styles1, styles2]

const write = async index => {
  await writeTo(el.value, styleText[index], 0, true, 1)
}

const writeToEnd = () => {
  let txt = styleText.join('\n')

  let styleHTML = ''
  for (let i = 0; i < txt.length; i++) {
    styleHTML = handleChar(styleHTML, txt[i])
  }
  text.value = styleHTML
  styleOverwrite('#work-text * {transition: none; }' + txt)
}

defineExpose({
  write,
  writeToEnd
})

</script>
