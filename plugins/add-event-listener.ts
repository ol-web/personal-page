import Vue from 'vue'

Vue.mixin({
  methods: {
    $addEventListener(el, type, fn, ...rest) {
      el.addEventListener(type, fn, ...rest)

      const destroy = () => {
        el.removeEventListener(type, fn)
      }

      this.$once('hook:beforeDestroy', destroy)
      return destroy
    }
  }
})
