export default {
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.check =false
    state.cartList.push(payload)
  }
}