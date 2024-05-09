import { App, Directive } from 'vue'
import { useAnimate, useIntersectionObserver } from '@vueuse/core'

const keyframes = [
  { transform: 'translateY(80px) scale(0.9)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 },
]
const slideIn: Directive = {
  mounted(el, binding) {
    let lastY = 0
    useIntersectionObserver(el, ([{ isIntersecting, target, boundingClientRect }]) => {
      // scroll down ?
      const isBottom = lastY > boundingClientRect.y
      lastY = boundingClientRect.y
      if(!isBottom) return
      if(isIntersecting && target == el) {
        useAnimate(el, keyframes, {
          duration: 300,
          easing: 'ease-in',
          ...(binding.value || {})
        })
      }
    })
  }
}

export default {
  install: function(app: App) {
    app.directive('slide-in', slideIn)
  }
}