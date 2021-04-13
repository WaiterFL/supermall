<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name: "scroll",
  data() {
    return{
      scroll: null
    }
  },

  props :{
  //封装probeType让需要实时监听位置的组件传入probeType的值
    probeType:{
      type:Number,
      default:0
    },
    //传入上啦加载更多的布尔值
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    scrollY(){
      return this.scroll.y
    }
  },
  mounted() {
    //$refs确保获取的是当前的wrapper
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM:true,
      observeImage:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动的位置
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    //监听下拉到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }

  },


  methods:{
    //封装一个scrollTo方法
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
  },


  }
}
</script>

<style scoped>

</style>