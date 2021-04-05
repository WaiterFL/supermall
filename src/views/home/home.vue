<template>
  <div>
    <Navbar class="center"><div  slot="center">购物街</div></Navbar>
    <child-swiper :banner="banner"></child-swiper>
    <ReCommendView :recommends="recommends"></ReCommendView>
    <FeatureView></FeatureView>
    <tab-control class="tabcontrol" :title="['流行','最新','潮流']" @itemClick="itemClick"></tab-control>
    <goods-list :goods="showGoods" ></goods-list>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import childSwiper from "@/views/home/homeComps/childSwiper";
import ReCommendView from "@/views/home/homeComps/ReCommendView";
import FeatureView from "@/views/home/homeComps/FeatureView";
import tabControl from "@/components/content/tabControl/tabControl";
import goodsList from "@/components/content/goods/goodsList";

 export default {
name: "home",
  components:{
  Navbar,
    childSwiper,
    ReCommendView,
    FeatureView,
    tabControl,
    goodsList
  },
  data(){
  return{
    banner:[],
   recommends:[],
    goods:{
      'pop':{page:0, list:[]},
      'new':{page:0, list:[]},
      'sell':{page:0, list:[]}
    },
    currentType:'pop'
  }
  },
   computed:{
     showGoods(){
       return this.goods[this.currentType].list
     }
   },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop',0)
    this.getHomeGoods('new',0)
    this.getHomeGoods('sell',0)
  },

   methods:{
  /*/
    监听相关方法
   */
     itemClick(index){
       switch (index){
         case 0: this.currentType= 'pop'
           break
         case 1: this.currentType= 'new'
           break
         case 2: this.currentType= 'sell'
           break
       }
     },

     /*/
     网络请求相关方法
      */
     getHomeMultidata(){
       getHomeMultidata().then(res =>{
         // console.log(res);
         this.banner= res.data.data.banner.list;
         this.recommends= res.data.data.recommend.list;
       })
     },
     getHomeGoods(type,page){
       const pages = page +1
       getHomeGoods(type,pages).then(res => {
         console.log(res);
         this.goods[type].list.push(...res.data.data.list)
         this.page++
       })
     }
   }
}
</script>

<style scoped>
   .center{
     color: #f6f6f6;
     background: #ff8198;
   }
   .center{
     position: sticky;
     top:0px
   }
   .tabControl{
     position:sticky;
     top: 43px;
   }

</style>
