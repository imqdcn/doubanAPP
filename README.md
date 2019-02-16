# 豆瓣APP应用

在豆瓣应用我们可以获取（或者搜索获取）到豆瓣的图书，电影，音乐列表以及相关的详情信息。该信息与豆瓣搜索的结果一致。

## 快速构建应用

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 项目说明

本项目是给学生或新手练手使用，应用数据来自于豆瓣API，与豆瓣数据同步。

本应用基于`H5`+`CSS3`+`less`+`webpack模板`+`Vue(2.5+)`+`vue-router(3.0.1+)`+`vue-resource(1.5+)`，运行在`node.js`平台上，即使用`vue的全家桶工具`构建。

> PS:因为用的是jsonp方式获取的豆瓣数据，所以没有使用目前官方推荐的vue-axios,axios解决方案。


## 功能描述

在该应用中，我们可以获取（或者搜索获取）到豆瓣的图书，电影，音乐列表以及相关的详情信息，具体效果图见图片。

1. 图书、音乐、电影列表页展示（见效果图1,3,5）
2. 底部 Tab 切换类别
3. 顶部搜索框功能
4. 点击 item 展示详情页（见效果图：2,4,6）
5. 返回列表页等功能。

![效果图1](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/01.png)
![效果图2](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/02.png)
![效果图3](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/03.png)
![效果图4](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/04.png)
![效果图5](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/05.png)
![效果图6](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/06.png)
![效果图7](https://github.com/kouok/doubanAPP/blob/master/PSD/thumb/07.png)

## 附：豆瓣API数据地址

1. 图书地址：
``` bash
格式：
https://api.douban.com/v2/book/search?q=书名&count=要展示的图书数量&alt=xd&callback=回调函数名
比如：
https://api.douban.com/v2/book/search?q=JavaScript&count=10&alt=xd&callback=fun
```
2. 音乐地址：
``` bash
格式：
https://api.douban.com/v2/music/search?q=歌手或歌曲名&count=要显示的数量&alt=xd&callback=回调函数名
比如：
https://api.douban.com/v2/music/search?q=陈奕迅&count=10&alt=xd&callback=fun
```

3. 电影地址：
``` bash
格式：
https://api.douban.com/v2/movie/search?q=电影&count=数量&alt=xd&callback=回调函数名
比如：
https://api.douban.com/v2/movie/search?q=毒液&count=5&alt=xd&callback=fun
```

> PS：以上API存在不稳定性，随时都有可能被禁用。


