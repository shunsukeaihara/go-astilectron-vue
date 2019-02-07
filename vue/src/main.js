import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.__webpack_public_path__ = ""

let index = {
  about: function (html) {
    let c = document.createElement('div')
    c.innerHTML = html
  },
  init: function () {
    // Wait for astilectron to be ready
    document.addEventListener('astilectron-ready', function () {
      // Listen
      index.listen(store)
      router.push({ name: "home" })
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    })
  },
  listen: function (store) {
    window.astilectron.onMessage(function (message) {
      switch (message.name) {
        case 'about':
          this.about(message.payload)
          return {
            payload: 'payload'
          }
      }
    })
  }
}

index.init()
