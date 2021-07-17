import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $addEventListener: (
      el: Document | Window | HTMLElement | Element,
      type: string,
      fn: Function,
      ...rest: any[]
    ) => Function
  }
}
