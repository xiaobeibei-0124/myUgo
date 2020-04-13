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
				<swiper-item v-for="item in swiperdata" :key="item.goods_id">
					<navigator :url="item.navigator_url">
						<image :src="item.image_src"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- 菜单导航区域 -->
		<view class="navs">
			<navigator url="" v-for="item in navslist" :key="item.image_src">
				<image :src="item.image_src" />
			</navigator>
		</view>
		<!-- 楼层区域 -->
		<view class="box">
			<view class="floor" v-for="(item,index) in floors" :key="index">
				<view class="floor-title">
					<image :src="item.floor_title.image_src" />
				</view>
				<view class="item">
					<!-- 循环item下title的数据 -->
					<navigator url="" v-for="sub in item.product_list" :key="sub.name">
						<image :src="sub.image_src"  />
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
				h:"auto" ,//溢出隐藏，设置高度为自动即可滑动，固定高度不能滑
				swiperdata:[],//轮播图数据
				navslist:[],//导航数据
				floors:[] //楼层数据
			}
		},
		components:{
			search
		},
		onLoad() {
			this.getSwiper()
			this.getNavs()
			this.getFloors()
		},
		methods: {
			indexGetHeight(height){
				this.h=height //子组件传递进来固定高度，使屏幕不能滑动
			},
			//获取轮播图
			async getSwiper(){
				let res = await this.http({
					url:'/api/public/v1/home/swiperdata'
				})
				//console.log(res);
				this.swiperdata=res.message	
			},
			//获取导航图标
			async getNavs(){
				let res = await this.http({
					url:'/api/public/v1/home/catitems'
				})
				this.navslist=res.message
			},
			//获取楼层数据
			async getFloors(){
				let res = await this.http({
					url:'/api/public/v1/home/floordata'
				})
				this.floors=res.message
			}
		},
		//监听下拉刷新事件
		async onPullDownRefresh(){
      console.log('首页下拉啦~~')
      // 刷新 页面 就是从头请求数据 来一遍
      // 查看network请求 
      await this.getSwiper() //假如 3秒
      await this.getNavs()//假如 5秒
      await this.getFloors()//假如 2秒
      // 等待请求完毕 应该 立刻关闭下拉效果
      uni.stopPullDownRefresh()
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
