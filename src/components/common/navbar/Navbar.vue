<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
  .navbar{
    display: flex;
    /*height: 44px;*/
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100,100,100,.1) ;
    z-index: 9;
  }
  .left ,.right{
    width: 60px;
    /*background: #ff5777;*/
  }
  .center{
    flex: 1;
    /*background: #ff8198;*/
  }
</style>