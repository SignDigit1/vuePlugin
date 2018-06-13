import vuetestwidget from './vue-test-widget.vue'

const importTestWidget = vuetestwidget
const install = function(Vue, options) {
  Vue.component('vueTestWidget', vuetestwidget)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(testwidget)
}

const testwidget = { importTestWidget, install }
export default testwidget
export { importTestWidget, install }
