import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


import $uniRequest from './uniRequest.js'

Vue.prototype.$uniRequest = $uniRequest;

import headbar from './components/headbar/headbar.vue'
Vue.component('headbar',headbar)

App.mpType = 'app'


const app = new Vue({
	...App
})
app.$mount()
