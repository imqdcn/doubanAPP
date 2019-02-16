import Vue from 'vue'
// 把路由导入进来：路由是一个插件
import Router from 'vue-router'
// 在vue中使用路由,启用路由插件
Vue.use(Router);
// 导入图书组件
import books from '@/components/books'
// 导入电影组件
import movies from '@/components/movies'
// 导入音乐组件
import music from '@/components/music'
// 导入404页面
import notfound from '@/components/404'
// 导入详情页
// import details from '@/components/details'


// 生成一个路由对象，该对象就是url与组件的映射
export default new Router({
    // 路由默认的url是hash方式，后面会有#
    // 可以改成history模式，如同普通url显示
    mode:"history",
    linkActiveClass:'cur',
    routes:[
        {   
            // path指的是访问该组件的url
            path:"/",
            // 对应的组件,类似于物理路径
            component:books
        },
        {   
            // path指的是访问该组件的url
            path:"/books",
            // name属性就是给该路由起名字：
            // 作用，给其他路由识别
            //
            name:"Books",
            component:books
        },
        {   
            // path指的是访问该组件的url
            path:"/movies",
            // 对应的组件,类似于物理路径
            name:'Movies',
            component:movies
        },
        {   
            // path指的是访问该组件的url
            path:"/music",
            // 对应的组件,类似于物理路径
            name:'Music',
            component:music
        },
        {
            path:"*",
            component:notfound
            // redirect:'/home'
            // redirect:'Books'
            // redirect:{path:"/about"}
            // 动态跳转
            // redirect:(to)=>{
            //     console.log(to);
            //     if(to.path=='/123'){
            //         return '/home'
            //     }else if(to.path=="/abc"){
            //         return {path:"/about"}
            //     }else{
            //         return 'Document'
            //     }
            // }
        }
    ]
});