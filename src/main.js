import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//设置发送请求
Vue.prototype.http= async function (options) {
  //设置访问的基地址
  const baseURL='https://www.uinav.com'
  //请求之前，开启loading
  uni.showLoading({
    title: '加载中'
  });
  //发送请求
  let res = await uni.request({
    url:baseURL+options.url,
    method:options.method ? options.method : 'get',
    data:options.data ? options.data : {},
    header:options.header ? options.header : {}
  })
  //console.log(res);
  //请求结束，关闭loading
  uni.hideLoading();
  //res 返回的数据 第一个是个空 第二个是数据 具体数据是data
  return res[1].data
}

const app = new Vue({
  ...App
})
app.$mount()
