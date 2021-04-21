export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //判断olsproduct
      if(oldProduct){//数量加一
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量加1')
      }else{//添加新商品
        payload.count =1
        context.commit('addToCart',payload)
        resolve('添加了新的商品')
      }
      reject('rejcet')
    })
  }
}