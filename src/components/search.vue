<template>
  <view class="search" :class="{active:isFocus}">
			<view class="search-input">
				<input type="text" 
               placeholder="请输入搜索商品"
               @focus="getSearch">
        <text class="cancel" @click="goCancel">取消</text>
			</view>
			<view class="search-content"></view>
	</view>
</template>

<script>
export default {
  data(){
    return {
      isFocus:false
    }
  },
  methods:{
    getSearch(){
      this.isFocus=true
      const res = uni.getSystemInfoSync(); //获取当前设备屏幕高度
      this.$emit('my',res.windowHeight+'px') //传入父组件
    },
    goCancel(){
      this.isFocus=false
      this.$emit('my','auto') //点击取消 将高度设置为自动 恢复滑动
    }
  }
}
</script>

<style lang='less'>
  .search {
		.search-input {
			background-color: #eb4450;
			padding: 20rpx 15rpx;
			input {
				background-color: #fff;
				height: 60rpx;
				padding-left: 10rpx;
				font-size: 28rpx;
				border-radius: 5rpx;
      }
      .cancel {
        display: none;
        width: 100rpx;
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
        color: #333;
      }
		}
  }
  &.active {
    // 最外层的大盒子
    position: absolute; //上下左右都是0 自动撑开
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: pink;
    .search-input{
      background-color: #eee;
      display: flex;
      input {
        flex: 1;
      }
      .cancel {
        display: block;
      }
    }
    .search-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 98rpx;
      background-color: #fff;
    }
  }
</style>