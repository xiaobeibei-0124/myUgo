<template>
	<view>
		<!-- 搜索区域 -->
		<view class="search">
			<view class="search-input">
				<input type="text" placeholder="请输入搜索商品">
			</view>
			<view class="search-content"></view>
		</view>
		<!-- 轮播图区域 -->
		<view class="swiper-box">
			<swiper autoplay 
							indicator-dots 
							indicator-color="rgba(255,255,255,.5)" 
							indicator-active-color="#fff">
				<swiper-item>
					<navigator url="">
						<image src="../../static/uploads/banner1.png"></image>
					</navigator>
				</swiper-item>
				<swiper-item>
					<navigator url="">
						<image src="../../static/uploads/banner2.png"></image>
					</navigator>
				</swiper-item>
				<swiper-item>
					<navigator url="">
						<image src="../../static/uploads/banner3.png"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='less' scoped>
	.search {
		.search-input {
			background-color: #eb4450;
			padding: 20rpx 15rpx;
			input {
				background-color: #fff;
				color: #ccc;
				height: 60rpx;
				padding-left: 10rpx;
				font-size: 28rpx;
				border-radius: 5rpx;
			}
		}
	}
	.swiper-box {
		swiper {
			width: 750rpx;
			height: 340rpx;
			navigator {
				width: 750rpx;
				height: 340rpx;
				image {
				width: 100%;
				height: 100%;
			}
			}	
		}
	}
</style>
