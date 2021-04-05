<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item" class="goodsItem"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "@/components/content/goods/goodsListItem";
export default {
  name: "goodsList",
  components:{
    goodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding :2px;
  }
</style>