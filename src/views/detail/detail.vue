<template>
  <div id="detail">
    <detail-nav-bar class="navBar"  @detialTitleClick="titleClick"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" >
      <detail-swiper :topImage="topImage"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="goodsInfo"></DetailGoodsInfo>
      <detail-params :paramInfo="detailParam" ref="param"></detail-params>
      <detial-comment-info :comment="commentInfo" ref="comment"></detial-comment-info>
      <goods-list :goods="recomment" ref="recomment"></goods-list>
    </scroll>
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
import goodsList from "@/components/content/goods/goodsList";
import scroll from "@/components/common/scroll/scroll";


export default {
  name: "detail",
  components: {
   DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetialCommentInfo,
    goodsList,

    scroll
  },
  props:{

  },
  methods:{
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.titleTopY[index],100)

    },
    // contenScroll(position) {
    //   // this.isShowTop = - position.y > 1000;
    //   for (let i = 0; i < this.titleTopY.length - 1; ++i) {
    //     if (
    //         this.detialIndex != i &&
    //         -position.y >= this.titleTopY[i] &&
    //         -position.y < this.titleTopY[i + 1]
    //     ) {
    //       //console.log(i);
    //       this.detialIndex = i;
    //       this.$refs.navBar.currentIndex = i;
    //       break;
    //     }
    //   }
    //   let len= this.titleTopY.length -1
    //   while(- position.y > this.titleTopY[len]){
    //     this.$refs.navBar.currentIndex = len
    //   }
    // },

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
      // positionY :0,
      // detialIndex:0
    }
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
        this.titleTopY.push(this.$refs.param.$el.offsetTop - 44)
        this.titleTopY.push(this.$refs.comment.$el.offsetTop - 44)
        this.titleTopY.push(this.$refs.recomment.$el.offsetTop - 44)
        // console.log(this.titleTopY);
          },500
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
    height: calc(100% - 44px);
  }
</style>