<template>
  <div class="checkButtom" :class="{check: isCheck}">
    <img src="~assets/img/cart/yes.svg">
  </div>
</template>

<script>
export default {
name: "checkButtom",
  props:{
  isCheck: {
    type:Boolean,
    default:false
  }
  }
}
</script>

<style scoped>
.checkButtom img{
  width: 13px;
  height: 13px;
  /*padding-left: 1px;*/

  border-radius: 50%;
}
.check{
  width: 13px;
  height: 13px;
 margin-left: 1px;
  background: blanchedalmond;
  border-radius: 50%;
}
</style>