<template>
  <div class="backtop" >
    <img src="~assets/img/common/top.png" >
  </div>
</template>

<script>
export default {
name: "backTop",
  methods:{

  // backClick(){
  //   console.log('返回顶部');
  // }
  }
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
  .backtop img{
    width: 50px;
    height: 50px;
  }
</style>