<template>
  <div class="goodsListItem" @click="goodsItemClick">
    <a >
      <img :src="showImage"  >
      <div class="goods_info" >
        <P>{{goodsItem.title}}</P>
        <span class="price">{{showPrice}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
name: "goodsListItem",
  props:{
   goodsItem:{
     type:Object,
     default(){
       return {}
     }
   }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    },
    showPrice(){
      return this.goodsItem.price || this.goodsItem.orgPrice
    }
  },
  methods:{
    // imageLoad(){
    //   // this.$bus.$emit('itemImageLoad')
    //   console.log(this.goodsItem);
    // }
    goodsItemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>

.goodsListItem {
  padding: 0.21rem;
  width: 50%;
  position: relative;
  padding-bottom: 1.68rem;

}
.goodsListItem img {
  width: 100%;
  border-radius: 5px;
}
.goods_info {
  /* 信息 */
  font-size: 0.64rem;
  text-align: center;
  position: absolute;
  bottom: 0.21rem;
  left: 0;
  right: 0;
}
.goods_info p {
  /* 标题 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.price {
  /* 价格 */
  color: var(--color-high-text);
  margin-right: 0.85rem;
}

.cfav::before {
  display: inline-block;
  content: "";
  background: url("~assets/img/common/collect.svg") 0 0/0.6rem 0.6rem;
  position: relative;
  top: 0.04rem;
  right: 0.08rem;
  height: 0.6rem;
  width: 0.6rem;
}
</style>