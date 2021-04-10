<template>
  <div id="home">
    <Navbar class="center"><div  slot="center">购物街</div></Navbar>
    <tab-control class="tabcontrol" :title="['流行','最新','潮流']"
                 @itemClick="itemClick"
                 ref="tabControl"
                 v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <child-swiper :banner="banner" class="swiper" @swiperImageLoad="imageLoad"></child-swiper>
      <ReCommendView :recommends="recommends"></ReCommendView>
      <FeatureView></FeatureView>
      <tab-control class="tabcontrol" :title="['流行','最新','潮流']" @itemClick="itemClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods" ></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import FeatureView from "@/views/home/homeComps/FeatureView";
import tabControl from "@/components/content/tabControl/tabControl";

import childSwiper from "@/views/home/homeComps/childSwiper";
import ReCommendView from "@/views/home/homeComps/ReCommendView";
import goodsList from "@/components/content/goods/goodsList";
import scroll from "@/components/common/scroll/scroll";
import backTop from "@/components/content/backTop/backTop";


import {getHomeMultidata,getHomeGoods} from "@/network/home";

 export default {
name: "home",
  components:{
  Navbar,
    childSwiper,
    ReCommendView,
    FeatureView,
    tabControl,
    goodsList,
    scroll,
    backTop,

  },
  data(){
  return{
    banner:[],
   recommends:[],
    goods:{
      'pop':{page:0, list:[]},
      'new':{page:0, list:[]},
      'sell':{page:0, list:[]}
    },
    currentType:'pop',
    isShowBackTop: false,
    offsetTop: 0,
    isTabFixed :false
  }
  },
   computed:{
     showGoods(){
       return this.goods[this.currentType].list
     }
   },
  created() {
  //请求多个数据
    this.getHomeMultidata()

    //请求商品数据
    this.getHomeGoods('pop',0)
    this.getHomeGoods('new',0)
    this.getHomeGoods('sell',0)

    //监听item中图片加载完成
    // this.$bus.$on('itemImageLoad',()=> {
    //   this.$refs.scroll.scroll.refresh()
    //   // console.log(this.$refs.scroll)
    // })
  },

   methods:{
     /*/
       监听相关方法
      */

     imageLoad(){
       this.offsetTop = this.$refs.tabControl.$el.offsetTop

     },
     //下拉加载更多
     loadMore(){
       this.getHomeGoods(this.currentType)
     },

     //设置返回顶部图标什么位置显示
     contentScroll(position){
       // console.log(position);
       this.isShowBackTop = -(position.y ) > 1000
       //设置选项导航什么时候显示
       this.isTabFixed = -(position.y ) > this.offsetTop - 44
     },

     //点击返回顶部
     backClick(){
       this.$refs.scroll.scrollTo(0,0)
     },

     //首页选择商品类型
     itemClick(index){
       switch (index){
         case 0: this.currentType= 'pop'
           break
         case 1: this.currentType= 'new'
           break
         case 2: this.currentType= 'sell'
           break
       }
     },

     // contentScroll(positon){
     //   this.isShowBackTop = (-positon.y) > 1000
     // },
     /*/
     网络请求相关方法
      */
     //获取所有数据
     getHomeMultidata(){
       getHomeMultidata().then(res =>{
         // console.log(res);
         this.banner= res.data.data.banner.list;
         this.recommends= res.data.data.recommend.list;
         // console.log(this.banner);
       })
     },
      //获取首页数据
     getHomeGoods(type,page){
       page= this.goods[type].page + 1
       getHomeGoods(type,page).then(res => {
         // console.log(res);
         this.goods[type].list.push(...res.data.data.list)
         this.goods[type].page += 1
         //完成上拉加载更多
         this.$refs.scroll.scroll.finishPullUp()
       })
     }
   }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }

   .center{
     color: #f6f6f6;
     background: #ff8198;
     position: sticky;
     top:0px;

   }
   .swiper{
     padding-top:44px;
   }
  .tabcontrol{
     position: relative;
    z-index: 9;
  }
   .content{
     /*height: 900px;*/
     /*!*overflow: hidden;*!*/

     position: absolute;
     /*overflow: hidden;*/
     top:0px;
     bottom: 44px;
     left: 0px;
     right: 0px;

   }
</style>
