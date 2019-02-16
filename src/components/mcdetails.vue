<template>
    <!-- 设置转场动画 -->
    <transition name="move">
        <!-- 详情页默认不显示，点击li时将数据传递过来，并通过更改showFlag的值切换可见性 -->
        <div class="bDetails details" v-show="showFlag">
            <!-- 顶栏 -->
            <!-- <div>{{listData}}</div> -->
            <div class="dBox" ref="booksInfo">
            <div class="topBar white">
                <span  @click="showFlag=false"><i class="iconfont icon-left"></i>音乐</span>
                <h2>{{listData.title}}</h2>
            </div>
            <!--内容主体  -->
            <div class="post">
                <!-- 图书信息 -->
                <div class="infoList clearfix">
                    <div class="pic"><img :src="'https://images.weserv.nl/?url='+listData.image"></div>
                    <div class="pItem">
                        <h4 class="black cutFont">名称：{{listData.title}}</h4>
                        
                        <div class="tags">
                                标签：<span v-for="option,j in listData.tags" v-if='j<2'>{{option.name}}</span>
                            </div>
                            <p class="cutFont gray" >歌手：<span v-for="cast in listData.author">{{cast.name}} &nbsp;</span></p>
                            <p>评分：<span v-for="pf,z in listData.rating" v-if="z=='average'">{{pf}}</span></p>
                            <div>时间：{{listData.attrs.pubdate[0]}}</div>
                    </div>
                </div>
                <section class="postTxt">
                    <!-- 内容：对应的是attrs.tracks数据部分 -->
                    <h3>内容</h3>
                    <div class="txj">
                        <!-- <p v-html="listData.summary"></p> -->
                        <pre v-for="tracks in listData.attrs.tracks">
                            {{tracks}}
                        </pre>
                    </div>
                </section>
            </div>
           </div>
        </div>
    </transition>
    
</template>

<script>
export default {
    props:{
        // 通过props接收来自父级的数据时，做一个验证，以免数据格式传递错误
        listData:Object
    },
    data(){
        return {
            showFlag:false
        }
    },
    methods:{
      show(){ //父组件通过refs可读取子组件所有的属性和方法
        this.showFlag = true; //显示详情的标识

        } 
    }
}
</script>

<style lang="less" scoped>
@red:red;
@fl:left;

.details{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0.68rem;
    overflow-y:scroll;
    z-index: 30;
    background-color: #fff;
    transition: all 0.3s linear;
    &.move-enter,&.move-leave{
        transform: translate(0,0);
    }
    &.move-enter-active,&.move-leave-active{
        transform: translate(100%,0);
    }
    .topBar{
        background-color: #3CA2FF;
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.1rem;
        overflow: hidden;
        position: relative;
        span{
                font-size: 0.26rem;
                position: absolute;
                top: 0;
                left: 0.1rem;
                width: 1.5rem;
                i{
                    vertical-align: -1px;
                }
        }
        h2{
            font-size: 0.32rem;
            text-align: center;
            font-weight: 400
        }
    }
}
// 内容主体
.post{
    padding: 0.1rem;
    .infoList{
        height: 2.7rem;
        padding-bottom: 0.2rem;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        .pic{
            width: 1.65rem;
            height: 2.45rem;
        }
        .pItem{
            width: 4.25rem;
        }
    }
}
// 内容文字
.postTxt{
    font-size: 0.2rem;
    padding: 0.2rem 0;
    h3{
        font-size: 0.24rem;
        text-align: center;
        padding-top: 0.1rem;
        border-bottom: 1px dashed #ddd;
        padding-bottom: 0.1rem;
        margin-bottom: 0.1rem;
    }
    p{
        text-indent: 2em;
    }
    pre{
        white-space: pre-line;
    }
}
.tags span{
    background-color: #138A64;
}
</style>