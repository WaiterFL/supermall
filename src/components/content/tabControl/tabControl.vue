<template>
  <div class="tabControl">
    <div v-for="(item,index) in title" :key="index"
         class="itemcontrol"
         :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "tabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('itemClick',index)
    },
  },
  data(){
    return{
      currentIndex: 0,
    }
  }

}
</script>

<style scoped>
  .tabControl{
    display: flex;
    padding-top: 10px;
    text-align: center;
    line-height: 18px;
    font-size: 14px;
    background: #f6f6f6;
    z-index: 9;
    padding-bottom: 10px;
  }
  .itemcontrol{
    flex: 1;
    /*background: #f6f6f6;*/
  }
  .itemcontrol span{
    padding :5px;

  }
  .active{
    color: palevioletred;
  }
  .active span{
    padding-top: 5px;
    border-bottom: 3px solid #ff8198;
  }
</style>