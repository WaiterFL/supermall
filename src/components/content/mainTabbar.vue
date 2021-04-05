<template>
  <tabbar>

    <tabbar-item path="/home" activeStyle="blue">
      <img slot="item-icon" src="~/assets/img/tabbar/shouye.svg" >
      <img slot="item-icon-active" src="~/assets/img/tabbar/shouye_hover.svg">
      <div slot="item-text">首页</div>
    </tabbar-item>

    <tabbar-item path="/category" activeStyle="red">
      <img slot="item-icon" src="~/assets/img/tabbar/fenlei.svg">
      <img slot="item-icon-active" src="~/assets/img/tabbar/fenlei_hover.svg">
      <div slot="item-text">分类</div>
    </tabbar-item>

    <tabbar-item path="/cart" activeStyle="red">
      <img slot="item-icon" src="~/assets/img/tabbar/baoshuicang.svg">
      <img slot="item-icon-active" src="~/assets/img/tabbar/baoshuicang_hover.svg">
      <div slot="item-text">购物车</div>
    </tabbar-item>

    <tabbar-item path="/profile" activeStyle="red">
      <img slot="item-icon" src="~/assets/img/tabbar/wo.svg">
      <img slot="item-icon-active" src="~/assets/img/tabbar/wo_hover.svg">
      <div slot="item-text">我的</div>
    </tabbar-item>
    <!--      <tabbar-item>-->
    <!--        <img slot="item-icon" src="./assets/img/tabbar-img/proflie.svg">-->
    <!--        <div slot="item-text">我的</div>-->
    <!--      </tabbar-item>-->
  </tabbar>
</template>
<script>
import tabbar from "@/components/common/tabbar/tabbar";
import TabbarItem from '@/components/common/tabbar/tabbar-item'
export default {
name: "mainTabbar",
  components: {
    tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
