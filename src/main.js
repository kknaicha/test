import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  url:'https://api.apiopen.top/musicRankings',
}).then( res=>{
  console.log(res)
  console.log(res.data.result[5].name)
})