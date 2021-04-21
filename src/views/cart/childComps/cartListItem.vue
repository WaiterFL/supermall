<template>
 <div>
   <div class="border"></div>
   <div class="shopCart">
     <!--    <cart-check-button-->
     <!--        @click.native="checkClick"-->
     <!--        :isChecked="item.checked"-->
     <!--        ref="checkButtonRef"-->
     <!--    />-->
     <div class="checkButtom">
       <check-buttom :is-check="product.check" @click.native="checkClick"></check-buttom>
     </div>
     <div class="item_img">
       <img :src="product.image" alt="" />
     </div>

     <div class="item_info" >
       <p class="item_title">{{ product.title }}</p>
       <p class="item_desc">{{ product.desc }}</p>
       <span class="item_price">￥{{ product.price }}</span>
       <span class="item_count">x{{ product.count }}</span>
     </div>
   </div>

 </div>
</template>

<script>
import checkButtom from "@/components/content/checkButtom";
export default {
  components:{
    checkButtom
  },
props:{
  product:{
    type:Object,
    default(){
      return {}
    }
  }
},
  methods:{
    checkClick(){
      this.product.check = ! this.product.check
    }
  }
}
</script>

<style scoped>
/*.cart_list_item {*/
/*  width: 100%;*/
/*  height: 5.5rem;*/
/*  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);*/
/*  display: flex;*/
/*  padding: 0.4rem;*/
/*  padding-left: 0rem;*/
/*}*/
.checkButtom{

  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shopCart{
  /*position: absolute;*/
  display: flex;
}
.item_img {

  padding-bottom: 4px;
  padding-left: 1px;
  width: 4.9rem;
  height: 100%;
  padding-top: 8px;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}

.item_info {
  padding-left: 5px;
  padding-top: 12px;
  flex: 1;
  position: relative;
  width: calc(100% - 3.5rem - 1.2rem - 0.4rem);
  margin-left: 0.4rem;
}
.item_info p {
  padding-right: 15px;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  font-size: 0.89rem;
  padding-bottom: 0.5rem;

}
.item_desc {
  font-size: 0.8rem;
  color: gray;


}
.item_price {
  position: absolute;
  left: 0;
  bottom: 0.4rem;
  font-size: 0.89rem;
  color: orangered;
  padding-left: 14px;
}
.item_count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
  font-size: 0.89rem;
  padding-right: 14px;
}
.border{
  border-bottom: 1px solid silver;
}
</style>