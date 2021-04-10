<template>
  <div>
    <navbar>
      <div slot="left" class="backImg" @click="back">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
         <span v-for="(item,index) in titles" :key="index" class="titles"
               :class="{active:index === currentIndex}"
               @click="titleClick(index)">{{item}}</span>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
export default {
name: "detailNavBar",
  components: {
  Navbar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
    },
    back(){
       this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
  }
  .titles{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: palevioletred;
  }
  .backImg img{
    width: 30px;
    height: 30px;
    padding-top: 10px;
  }
</style>