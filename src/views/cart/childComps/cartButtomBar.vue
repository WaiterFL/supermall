<template>
  <div class="buttomBar">
    <div class="checkButtom">
      <check-buttom :is-check="isSelectAll"
                    @click.native="selectAll"
      ></check-buttom>
      <span>全选</span>
    </div>
    <div class="totlePrice">
      合计:{{totlePrice}}
    </div>
      <div class="goCompute" @click="toCompute">
        去计算({{checkLength}})
      </div>
  </div>
</template>

<script>
import checkButtom from "@/components/content/checkButtom";
export default {
  name: "cartButtomBar",
  components:{
    checkButtom
  },
  computed:{
    totlePrice(){
      return '￥' + this.$store.state.cartList.filter(item  =>{
        return item.check
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => item.check).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.check)
    },

  },
  methods:{
    selectAll(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.check = false)
      }else{
        this.$store.state.cartList.forEach(item => item.check= true)
      }
    },
    toCompute(){
      if(! this.isSelectAll) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
 .buttomBar{
   background-color:gainsboro;
   height: 40px;
   position: relative;
   font-size:14px ;

 }
 .buttomBar{
   display: flex;
   align-items: center;
 }
 .checkButtom{
   /*padding-left: 4px;*/
   float: left;

   margin-right: 5px;
 }
 .checkButtom span{
   /*padding-left: 4px;*/
   margin-right: 12px;
 }
.totlePrice{
  margin-right: 70px;
}
 .goCompute{
   background-color: #ff8198;
   width: 100px;
   height: 100%;
   flex: 1;
   text-align: center;
   padding-top: 12px;
 }
</style>