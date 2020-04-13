<template>
<!-- 滑动需要配合溢出隐藏和屏幕高度 -->
	<view :style="{overflow:'hidden',height:h}">
		<!-- 搜索区域 -->
		<search @my='indexGetHeight'></search>
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
		<!-- 菜单导航区域 -->
		<view class="navs">
			<navigator url="" >
				<image src="../../static/uploads/icon_index_nav_1@2x.png" />
			</navigator>
			<navigator url="" >
				<image src="../../static/uploads/icon_index_nav_2@2x.png" />
			</navigator>
			<navigator url="" >
				<image src="../../static/uploads/icon_index_nav_3@2x.png" />
			</navigator>
			<navigator url="" >
				<image src="../../static/uploads/icon_index_nav_4@2x.png" />
			</navigator>
		</view>
		<!-- 楼层区域 -->
		<view class="box">
			<view class="floor">
				<view class="floor-title">
					<image src="../../static/uploads/pic_floor01_title.png" />
				</view>
				<view class="item">
					<navigator url="" >
						<image src="../../static/uploads/pic_floor01_1@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor01_2@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor01_3@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor01_4@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor01_5@2x.png"  />
					</navigator>
				</view>
			</view>
			<view class="floor">
				<view class="floor-title">
					<image src="../../static/uploads/pic_floor02_title.png" />
				</view>
				<view class="item">
					<navigator url="" >
						<image src="../../static/uploads/pic_floor02_1@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor02_2@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor02_3@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor02_4@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor02_5@2x.png"  />
					</navigator>
				</view>
			</view>
			<view class="floor">
				<view class="floor-title">
					<image src="../../static/uploads/pic_floor03_title.png" />
				</view>
				<view class="item">
					<navigator url="" >
						<image src="../../static/uploads/pic_floor03_1@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor03_2@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor03_3@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor03_4@2x.png"  />
					</navigator>
					<navigator url="" >
						<image src="../../static/uploads/pic_floor03_5@2x.png"  />
					</navigator>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import search from '@/components/search.vue'
	export default {
		data() {
			return {
				h:"auto" //溢出隐藏，设置高度为自动即可滑动，固定高度不能滑
			}
		},
		components:{
			search
		},
		onLoad() {

		},
		methods: {
			indexGetHeight(height){
				this.h=height //子组件传递进来固定高度，使屏幕不能滑动
			}
		}
	}
</script>

<style lang='less' scoped>
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
	.navs {
		display: flex; // navigator 水平显示
		flex-wrap: wrap;
		padding: 30rpx 0;
		navigator {
			width: 25%;
			display: flex; //image 水平垂直居中
			justify-content: center;
			align-items: center;
			image {
				width: 128rpx;
				height: 140rpx;
			}
		}
	}
	// 楼层区域
	.box {
		.floor {
			.floor-title {
				padding-top: 30rpx;
				background-color: #f4f4f4;
				image {
					width: 750rpx;
					height: 60rpx;
				}
			}
			.item {
				padding: 20rpx 16rpx;
				overflow: hidden; //清除浮动，防止内边距塌陷 (标题与图片)
				navigator {
					float: left;
					margin-left: 10rpx;
					margin-bottom: 10rpx;
					width: 193rpx;
					height: 188rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				navigator:nth-child(1) {
					margin-left: 0;
					width: 232rpx;
					height: 386rpx;
				}
				navigator:nth-child(2),
				navigator:nth-child(5) {
					width: 273rpx;
				}
			}
		}
		.floor:nth-child(1){
			.item {
				navigator {
					width: 233rpx;
				}
			}
		}
	}
</style>
