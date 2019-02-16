<template>
    <div id="app">
        <!-- 路由视图 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <div class="fixedTop"></div>
        <ul class="navList">
            <router-link to="/" tag="li" exact>
                <a>
                    <i class="iconfont icon-tushu"></i>
                    <span>图书</span>
                </a>
            </router-link>
            <router-link :to="{path:'movies'}" tag="li">
                <a>
                    <i class="iconfont icon-movie"></i>
                    <span>电影</span>
                </a>
            </router-link>
            <router-link :to="{path:'music'}" tag="li">
                <a>
                    <i class="iconfont icon-music"></i>
                    <span>音乐</span>
                </a>
            </router-link>
           
        </ul>
        

        <!-- 循环来自豆瓣的数据 -->
        <!-- <ul>
            <li v-for="item,i in list['books']">{{item.title}}</li>
        </ul> -->
    </div>
</template>

<script>
// 将头部组件导入进来
// import header from '@/components/header'
export default {
    data(){
        return{
            msg:"Hello,Vue!全家桶工具",
            // home:"/"
            list:{}
        }
    }
    
}
</script>
