<template>
  <div id="detail">
    <detail-nav-bar class="navBar"></detail-nav-bar>
    <scroll class="scroll">
      <detail-swiper :topImage="topImage"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/detailNavBar";
import {getDetail,Goods,Shop} from "@/network/detail";

import detailSwiper from "@/views/detail/childComps/detailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import scroll from "@/components/common/scroll/scroll";
export default {
  name: "detail",
  components: {
   DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll
  },
  props:{

  },
  data(){
    return {
      iid: null,
      topImage:[],
      goods: {},
      shop: {}
    }
  },
  created() {
    // 保存传入的iid
    this.iid= this.$route.params.iid

    // 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result
      this.topImage = data.detailInfo.detailImage[0].list
      // console.log(this.topImage);
      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
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