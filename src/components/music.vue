<template>
    <div class="wrapper">
        <div class="searchBox">
            <form action="#" id="searchForm" onsubmit="return false">
                <input type="text" class="ipt" v-model="val" @keyup.enter.prevent.stop="search" placeholder="唱片名、表演者、条码、ISRC">
                <input type="button" class="subBtn" @click.prevent="search" value="搜索">
            </form>
        </div>
        <!-- 展示图书信息 -->
        <div class="content">
            <ul class="infoList">
                <!-- 添加v-if的目的是解决数据嵌套过多导致的读取失败报错 -->
                <li v-if="blist['musics']" v-for="item,i in blist['musics']" @click="selectMovie(item)">
                    <!-- <a href=""> -->
                    <div class="pic"><img :src="'https://images.weserv.nl/?url='+item.image"></div>
                    <div class="pItem">
                        <h4 class="black cutFont" ref='bookName'>名称：{{item.title}}</h4>
                        <div class="tags">
                            <!-- v-if='j<=1'控制循环次数 -->
                            <span v-for="option,j in item.tags" v-if='j<2'>{{option.name}}</span>
                        </div>
                        <p class="cutFont gray" >歌手：<span v-for="cast in item.author">{{cast.name}} &nbsp;</span></p>
                        <p>评分：{{item.rating.average}}</p>
                        <div class="gray">时间：{{item.attrs.pubdate[0]}}</div>
                    </div>
                    <!-- </a> -->
                </li>
            </ul>
        </div>
        <!-- 显示详情页 -->
        <!--  :listData="selectedMusic"是将父级获取的数据通过自定义属性传到子组件，子组件需要通过props属性接受改数据
        添加ref属性可以让父组件控制子组件
         -->
        <c-details :listData="selectedMusic" ref="showDetail"></c-details>
    </div>
</template>

<script>
// 导入详情页模板
import mdetails from '@/components/mcdetails'
export default {
    data(){
        return{
            val:"",
            // 设置搜索展示数量
            count:10,
            // 显示的所有电影
            blist:{},
            // 点击的电影信息
            selectedMusic:{}
        }
    },
    methods:{
        search(){
            // https://api.douban.com/v2/music/search?q=歌手或歌曲名&count=要显示的数量&alt=xd&callback=回调函数名
            this.$http.jsonp('https://api.douban.com/v2/music/search?q='+this.val+'&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
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
            this.selectedMusic=item;
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
        
        this.$http.jsonp('https://api.douban.com/v2/music/search?q=beyond&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
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
        background-color: #138A64;
    }
</style>
