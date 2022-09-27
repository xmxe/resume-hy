let openComment = false
const commentRegex = /(\/\*(?:[^](?!\/\*))*\*)$/
const keyRegex = /([a-zA-Z- ^\n]*)$/
const valueRegex = /([^:]*)$/
const selectorRegex = /(.*)$/
const pxRegex = /\dp/
const pxRegex2 = /p$/
const emRegex = /\de/
const emRegex2 = /e$/

/**
 * 加上标签以使css修饰代码可读
 * @param {*} fullText 所有文本
 * @param {*} char 单个字符
 * @returns 累加的字符
 */
export function handleChar(fullText, char) {
  if (openComment && char !== '/') {
    fullText += char
  } else if (char === '/' && openComment === false) {
    openComment = true
    fullText += char
  } else if (char === '/' && fullText.slice(-1) === '*' && openComment === true) {
    openComment = false
    fullText = fullText.replace(commentRegex, '<span class="comment">$1/</span>')
  } else if (char === ':') {
    fullText = fullText.replace(keyRegex, '<span class="key">$1</span>:')
  } else if (char === '') {
    fullText = fullText.replace(valueRegex, '<span class="value">$1</span>')
  } else if (char === '{') {
    fullText = fullText.replace(selectorRegex, '<span class="selector">$1</span>{')
  } else if (char === 'x' && pxRegex.test(fullText.slice(-2))) {
    fullText = fullText.replace(pxRegex2, '<span class="px">px</span>')
  } else if (char === 'm' && emRegex.test(fullText.slice(-2))) {
    fullText = fullText.replace(emRegex2, '<span class="em">em</span>')
  } else {
    fullText += char
  }
  return fullText
}
