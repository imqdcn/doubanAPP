// 将vue导进来，
import Vue from 'vue'

// 将主组件导入到当前JS中
import App from './App'
// 将全局样式导进来
import style from './assets/css/style.css'
import reset from './assets/css/reset.css'
import iconfont from './assets/css/iconfont.css'

// 将路由的配置文件，即router/index.js导入
import router from './router'
// 在这里将vue-resource导入进来
import vueResource from 'vue-resource'
// 启用该插件
Vue.use(vueResource)

new Vue({
    
    router,
    // 将组件导进来后在实例中注册
    components:{
        customView:App
    },
    // 使用该组件，最终会将index.html替换为该组件的内容
    template:'<customView />'
}).$mount("#app")