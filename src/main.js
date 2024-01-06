import Vue from 'vue'
import Wedding from './Wedding.vue'
import utils from './utils'             //获取url参数

Vue.prototype.$utils = utils            //注册全局方法

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(Wedding)
})