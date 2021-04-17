<template>
  <div id="detail">
    <detail-nav-bar class="navBar" ref="DetialNavBar" @detialTitleClick="titleClick"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scroll="contenScroll" :probe-type="3">
      <ul>
        <li v-for="item in $store.state.cartList" :key="item ">
          {{item}}
        </li>
      </ul>
      <detail-swiper :topImage="topImage"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="goodsInfo"></DetailGoodsInfo>
      <detail-params :paramInfo="detailParam" ref="param"></detail-params>
      <detial-comment-info :comment="commentInfo" ref="comment"></detial-comment-info>
      <goods-list :goods="recomment" ref="recomment"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detial-buttom-bar @addToCart="addToCart"></detial-buttom-bar>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/detailNavBar";
import {getDetail, Goods, GoodsParam, Shop,getRecomment} from "@/network/detail";

import detailSwiper from "@/views/detail/childComps/detailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParams from "@/views/detail/childComps/DetailParams";
import DetialCommentInfo from "@/views/detail/childComps/detialCommentInfo";
import detialButtomBar from "@/views/detail/childComps/detialButtomBar";
import goodsList from "@/components/content/goods/goodsList";
import scroll from "@/components/common/scroll/scroll";
import backTop from "@/components/content/backTop/backTop";
import BackTop from "@/components/content/backTop/backTop";

export default {
  name: "detail",
  components: {
    BackTop,
   DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetialCommentInfo,
    detialButtomBar,
    goodsList,
    backTop,
    scroll
  },
  data(){
    return {
      iid: null,
      topImage:[],
      goods: {},
      shop: {},
      goodsInfo:{},
      detailParam:{},
      commentInfo:{},
      recomment:[],
      titleTopY:[0],
      detialIndex:0,
      isShowBackTop: false
    }
  },
  methods:{
    addToCart(){
      // console.log('-------');
      //获取展示的商品信息需要
      const product = {}
      product.image = this.topImage[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.iid = this.iid;
      //将商品添加到购物车里
      this.$store.commit('addCart',product)
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.titleTopY[index],100)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    //
    contenScroll(position) {
      this.isShowBackTop = - position.y > 1000
      if(- position.y >= this.titleTopY[3]){
        this.$refs.DetialNavBar.currentIndex = 3;
      }
      for (let i = 0; i < this.titleTopY.length - 1; ++i) {
        if (
            this.detialIndex != i &&
            -position.y >= this.titleTopY[i] &&
            -position.y < this.titleTopY[i + 1]
        ) {
          //console.log(i);
          this.detialIndex = i;
          this.$refs.DetialNavBar.currentIndex = i;
          break;
        }
      }

    },

  },


  created() {
    // 保存传入的iid
    this.iid= this.$route.params.iid

    // 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result
      this.topImage = data.itemInfo.topImages

      // console.log(this.topImage);
      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //获取商品详情信息
      this.goodsInfo = data.detailInfo
      //获取参数信息
      this.detailParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //获取评论信息(一条）
      if(data.rate.cRate !==0 ){
        this.commentInfo = data.rate.list[0]
        // console.log(this.commentInfo);
      }
      setTimeout(()=>{
        this.titleTopY = []
        this.titleTopY.push(0)
        this.titleTopY.push(this.$refs.param.$el.offsetTop -44)
        this.titleTopY.push(this.$refs.comment.$el.offsetTop -44)
        this.titleTopY.push(this.$refs.recomment.$el.offsetTop -44)
        // console.log(this.titleTopY);
          },1000
      )
    })
    getRecomment().then(res =>{
      console.log(res);
      this.recomment = res.data.data.list
    })
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background: #f6f6f6;
    height: 100vh;
  }
  .navBar{
    position: relative;
    z-index: 9;
    background: #f6f6f6;
  }
  .scroll{
    height: calc(100% - 44px - 49px);
  }
</style>