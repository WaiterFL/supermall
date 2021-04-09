<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>

import {Swiper,SwiperItem} from "@/components/common/swiper";
export default {
name: "homeSwiper",
  components:{
    Swiper,
    SwiperItem,

  },
  data() {
    return{
      isLoad:false
    }
  },
  props:{
    banner :{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad= true
      }
    }
  }
}
</script>

<style scoped>

</style>