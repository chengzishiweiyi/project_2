// 引入vue
import Vue from 'vue'
//引入app组件他是所有的父组件
import App from '../src/App.vue'
//关闭生产提示
Vue.config.productionTip = false
// 创建vm
new Vue({
  // 将app组件放入
  render: h => h(App),
}).$mount('#app')
