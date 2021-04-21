<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
       :key="index"
       :product="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from "@/components/common/scroll/scroll";
import cartListItem from "@/views/cart/childComps/cartListItem";
export default {
name: "cartList",
  computed :{
    ...mapGetters(['cartList'])
  },
  components:{
  scroll,
    cartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cartList{
    /*height: 100vh;*/
    height: calc(100vh - 44px - 49px - 40px );

  }
  .content{
    /*height: calc(100vh - 44px - 49px - 40px);*/
    overflow: hidden;
    height: 100%;


  }
</style>