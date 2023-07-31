import Promise from "bluebird";
import { handleChar } from "@/common/js/util";
import { ref } from "vue";
import { footerStore } from "@/store/footer";

const endOfSentence = /[？！。~：]$/;
const comma = /\D[，；、]$/;
const endOfBlock = /[^/]\n\n$/;

// vue3推荐使用组合式函数替代mixin
export function useMixin() {
  let styleTagEl = document.getElementById("style-tag");

  // 在index.html里面加上css
  const styleAppend = (styleText) => {
    styleTagEl.textContent += styleText;
  };

  const styleOverwrite = (styleText) => {
    styleTagEl.textContent = styleText;
  };

  const store = footerStore();
  // 页面展示的字符文本
  const text = ref("");
  const styleBuffer = ref("");

  /**
   * @param {*} el 组件元素
   * @param {*} message style.css文件内容
   * @param {*} index 从第几个字符开始展示
   * @param {*} mirrorToStyle true:页面展示css false:页面不展示css
   * @param {*} charsPerInterval 一次展示多少个字 测试发现如果展示超过1个字符的话也会导致css不生效
   */
  const writeTo = async function (el,message,index,mirrorToStyle,charsPerInterval) {
    // 点击跳过动画
    if (store.animationSkipped) {
      throw new Error("SKIP IT");
    }

    let chars = message.slice(index, index + charsPerInterval);
    index += charsPerInterval;

    el.scrollTop = el.scrollHeight;

    if (mirrorToStyle) {
      // 让页面展示css style-text调用
      writeChar(chars, index === message.length);
    } else {
      // 让页面不展示css work-text调用
      writeSimpleChar(chars);
    }

    if (index < message.length) {
      let thisInterval = store.speed;
      let thisSlice = message.slice(index - 2, index);
      // 控制特殊字符的展示速度
      if (comma.test(thisSlice)) {
        thisInterval = store.speed * 1;
      }
      if (endOfSentence.test(thisSlice)) {
        thisInterval = store.speed * 1.1;
      }
      thisSlice = message.slice(index - 2, index + 1);
      if (endOfBlock.test(thisSlice)) {
        thisInterval = store.speed * 1.2;
      }
      // 当暂停时无限延时
      do {
        await Promise.delay(thisInterval);
      } while (store.paused);

      return writeTo(el, message, index, mirrorToStyle, charsPerInterval);
    }
  };
  /**
   * @param {*} char 单个字符
   * @param {*} lastChar 最后一个字符
   * 往id=style-tag里面写的css样式会写到最后一个分号,之后就不再往里面写了，加上这个判断让所有字符都写进样式里面,而不是止步于最后一个分号
   */
  const writeChar = function (char, lastChar) {
    // 针对一些字符加上标签以使css修饰代码可读
    text.value = handleChar(text.value, char);
    styleBuffer.value += char;
    // css以分号结束 将css加到index.html里面来使页面的css样式生效
    if (char === ";" || lastChar) {
      styleAppend(styleBuffer.value);
      styleBuffer.value = "";
    }
  };
  // 不在index.html实时展示css
  const writeSimpleChar = function (char) {
    text.value += char;
  };

  return { writeTo, text, styleOverwrite, styleAppend };
}
