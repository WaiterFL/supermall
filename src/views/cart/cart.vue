<template>
  <div class="car" >
    <Navbar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </Navbar>
      <cart-list ></cart-list>
    <cart-buttom-bar></cart-buttom-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from "@/components/common/navbar/Navbar";
import cartList from "@/views/cart/childComps/cartList";
import cartButtomBar from "@/views/cart/childComps/cartButtomBar";
export default {
name: "cart",
  components:{
    Navbar,
    cartList,
    cartButtomBar
  },
  computed:{
  ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .navbar{
    background: #ff8198;
    color: white;
  }

</style>
