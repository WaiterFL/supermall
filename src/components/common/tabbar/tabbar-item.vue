<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon" ></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeColor"><slot name="item-text"></slot></div>

  </div>
</template>

<script>

export default {
  name: "tabbar-item",
  props:{
    path :String,
    activeStyle:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      link:'/home',

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
  activeColor(){
      return this.isActive ? {color :this.activeStyle} : {}
  }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },

}
</script>

<style scoped>
.tabbar-item{
  float: left;
  flex:1;
  text-align:  center;
  height: 49px;
  font-size: 13px;

}
img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
}

</style>
