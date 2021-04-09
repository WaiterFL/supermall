import axios from "axios";
export function request(config){
  //创建axios实例
  const instance= axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });
  //axios的拦截器
  //请求拦截的作用
  instance.interceptors.request.use(
      config => {
    return config;
  },err =>{
    console.log(err);
  });
  //响应拦截
  instance.interceptors.request.use(
      res => {
    return res;
  },error => {
    console.log(error);
  });
  //发送正在的网络请求
  return instance(config);
}