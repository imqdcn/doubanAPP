<template>
    <div class="wrapper">
        <div class="searchBox">
            <form action="#" id="searchForm" onsubmit="return false">
                <input type="text" class="ipt" v-model="val" @keyup.enter.prevent.stop="search" placeholder="书名、作者">
                <input type="button" class="subBtn" @click.prevent="search" value="搜索">
            </form>
        </div>
        <!-- 展示图书信息 -->
        <div class="content">
            <ul class="infoList">
                <!-- <li>
                    <a href="">
                    <div class="pic"><img src="../assets/1.jpg"></div>
                    <div class="pItem">
                        <h4 class="black">名称：移动联通电信4G手机</h4>
                        <div class="tags">
                            <span>推荐</span><span>真好</span>
                        </div>
                        <p>作者：罗伯特</p>
                        <p>评分：9.0</p>
                        <div class="gray">时间：2018-12-7</div>
                    </div>
                    </a>
                </li> -->
                <!-- 添加v-if的目的是解决数据嵌套过多导致的读取失败报错 -->
                <li v-if="blist['books']" v-for="item,i in blist['books']" @click="selectBook(item)">
                    <!-- <a href=""> -->
                    <div class="pic"><img :src="'https://images.weserv.nl/?url='+item.image"></div>
                    <div class="pItem">
                        <h4 class="black cutFont" ref='bookName'>名称：{{item.title}}</h4>
                        <div class="tags">
                            <!-- v-if='j<=1'控制循环次数 -->
                            <span v-for="option,j in item.tags" v-if='j<=2'>{{option.name}}</span>
                        </div>
                        <p class="cutFont">作者：{{item.author[0]}}</p>
                        <p>评分：{{item.rating.average}}</p>
                        <div class="gray">时间：{{item.pubdate}}</div>
                    </div>
                    <!-- </a> -->
                </li>
            </ul>
        </div>
        <!-- 显示详情页 -->
        <!--  :listData="selectedBook"是将父级获取的数据通过自定义属性传到子组件，子组件需要通过props属性接受改数据
        添加ref属性可以让父组件控制子组件
         -->
        <c-details :listData="selectedBook" ref="showDetail"></c-details>
    </div>
</template>

<script>
// 导入详情页模板
import bdetails from '@/components/bdetails'
export default {
    data(){
        return{
            val:"",
            // 设置搜索展示数量
            count:10,
            // 显示的所有图书
            blist:{},
            // 点击的图书信息
            selectedBook:{}
        }
    },
    methods:{
        search(){
            this.$http.jsonp('https://api.douban.com/v2/book/search?q='+this.val+'&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
            console.log(res.body);
            // 将获取的数据赋值给list,让数据响应式
            this.blist=res.body;
        }).catch((res)=>{
            console.log("获取数据出错时");
        });
        },
        // 点击当前书本信息后获取该书本信息
        selectBook(item){
            console.dir(item);
            // console.log(this.$refs);//成功拿到了详情页的组件,如果是写在元素标签上，那么拿到的是该DOM对象
            // 通过数据传递到详情页组件中
            this.selectedBook=item;
            // 获取名为showDetail的子组件(元素)，并调用其show方法
            this.$refs.showDetail.show();
            
        }
    },
    components:{
        "c-details":bdetails
    },
  // 通过created钩子函数在DOM没渲染完成之前去取数据，避免数据没准备好导致报错
    created(){
        // 通过vue-resource加载ajax数据
        // vue-resource的用法
        //语法：获取jsonpthis.$http.jsonp(url,{params: {pageID:29},jsonp:"callback"})
        // 参数：{params: {pageID:29},jsonp:"callback"} 会拼接到url上
        //获取本地数据：https://github.com/pagekit/vue-resource
        // 语法： this.$http.get('/someUrl').then(response => {
        //     this.someData = response.body;
        // }, response => {
        //     // error callback
        // });
        // }
        this.$http.jsonp('https://api.douban.com/v2/book/search?q=前端&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
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

</style>
