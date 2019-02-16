<template>
    <div class="wrapper">
        <div class="searchBox">
            <form action="#" id="searchForm" onsubmit="return false">
                <input type="text" class="ipt" v-model="val" @keyup.enter.prevent.stop="search" placeholder="电影、影人、影院、电视剧">
                <input type="button" class="subBtn" @click.prevent="search" value="搜索">
            </form>
        </div>
        <!-- 展示图书信息 -->
        <div class="content">
            <ul class="infoList">
                <!-- 添加v-if的目的是解决数据嵌套过多导致的读取失败报错 -->
                <li v-if="blist['subjects']" v-for="item,i in blist['subjects']" @click="selectMovie(item)">
                    <!-- <a href=""> -->
                    <div class="pic"><img :src="'https://images.weserv.nl/?url='+item.images.small"></div>
                    <div class="pItem">
                        <h4 class="black cutFont" ref='bookName'>名称：{{item.title}}</h4>
                        <div class="tags">
                            <!-- v-if='j<=1'控制循环次数 -->
                            <span v-for="option,j in item.genres" v-if='j<=2'>{{option}}</span>
                        </div>
                        <p class="cutFont gray" >演员：<span v-for="cast in item.casts">{{cast.name}} &nbsp;</span></p>
                        <p>评分：{{item.rating.average}}</p>
                        <div class="gray">时间：{{item.year}}</div>
                    </div>
                    <!-- </a> -->
                </li>
            </ul>
        </div>
        <!-- 显示详情页 -->
        <!--  :listData="selectedMovie"是将父级获取的数据通过自定义属性传到子组件，子组件需要通过props属性接受改数据
        添加ref属性可以让父组件控制子组件
         -->
        <c-details :listData="selectedMovie" ref="showDetail"></c-details>
    </div>
</template>

<script>
// 导入详情页模板
import mdetails from '@/components/mvdetails'
export default {
    data(){
        return{
            val:"",
            // 设置搜索展示数量
            count:10,
            // 显示的所有电影
            blist:{},
            // 点击的电影信息
            selectedMovie:{}
        }
    },
    methods:{
        search(){
            this.$http.jsonp('https://api.douban.com/v2/movie/search?q='+this.val+'&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
            console.log(res.body);
            // 将获取的数据赋值给list,让数据响应式
            this.blist=res.body;
        }).catch((res)=>{
            console.log("获取数据出错时");
        });
        },
        // 点击当前书本信息后获取该书本信息
        selectMovie(item){
            console.dir(item);
            // console.log(this.$refs);//成功拿到了详情页的组件,如果是写在元素标签上，那么拿到的是该DOM对象
            // 通过数据传递到详情页组件中
            this.selectedMovie=item;
            // 获取名为showDetail的子组件(元素)，并调用其show方法
            this.$refs.showDetail.show();
            
        }
    },
    components:{
        "c-details":mdetails
    },
  // 通过created钩子函数在DOM没渲染完成之前去取数据，避免数据没准备好导致报错
    created(){
        // 通过vue-resource加载ajax数据
        
        this.$http.jsonp('https://api.douban.com/v2/movie/search?q=黄渤&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
            console.log(res.body);
            // 将获取的数据赋值给list,让数据响应式
            this.blist=res.body;
        }).catch((res)=>{
            console.log("获取数据出错时");
        });
    }  
}
</script>
<style scoped>
    .infoList .tags span{
        background-color: #F52400;
    }
</style>
