import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index.js'

export function createApp () {
  const router = createRouter('history')
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    render: h => h(App)
  })
  return {app, router, App}
}