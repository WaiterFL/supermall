<template>
  <div >
    <swiper class="detailSwiper">
      <SwiperItem v-for="(item,index) in topImage " :key="index" >
        <img :src="item">
      </SwiperItem>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper";
export default {
name: "detailSwiper",
  components:{
    Swiper,
    SwiperItem
  },

  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detailSwiper{
    height: 300px;
    overflow: hidden;
  }
</style>