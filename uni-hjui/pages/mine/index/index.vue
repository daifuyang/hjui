<template>
	<scroll-view class="page" scroll-y>
		<view class="d-flex hj-info">
			<view class="hj-media">
				<view class="wrap_img">
					<image src="http://iph.href.lu/120x120" mode="widthFix"></image>
				</view>
			</view>
			<view class="hj-meida-body flex-1">
				<view class="nickname">Return、归来</view>
				<view class="desc">上海</view>
			</view>
			<view class="d-flex-center">
				<view class="label">个人主页</view>
			</view>
		</view>
		
		<!-- 宫格菜单 -->
		<view class="icon-menu mb-3">
			
			<view class="icon-item">
				<view class="num">0</view>
				<view class="name">粉丝</view>
			</view>
			
			<view class="bv-line"></view>
			<view class="icon-item">
				<view class="num">0</view>
				<view class="name">关注</view>
			</view>
			
			<view class="bv-line"></view>
			<view class="icon-item">
				<view class="num">0</view>
				<view class="name">消息</view>
			</view>
			
			<view class="bv-line"></view>
			<view class="icon-item">
				<view class="num">0</view>
				<view class="name">收藏</view>
			</view>
		</view>
		
		<hj_list class="hj-bg-white">
			<hj_list_item theme="5" title="我的作品" iicon="iconsetting"></hj_list_item>
			<hj_list_item theme="2" title="我的V币"></hj_list_item>
			<hj_list_item theme="2" title="我的评论"></hj_list_item>
			<hj_list_item theme="2" title="我的喜欢" iicon="iconheart"></hj_list_item>
			<hj_list_item theme="2" title="关于我们"></hj_list_item>
			<hj_list_item theme="2" title="意见反馈"></hj_list_item>
			<hj_list_item theme="2" title="帮助中心"></hj_list_item>
			<hj_list_item theme="5" title="系统设置" iicon="iconsetting"></hj_list_item>
		</hj_list>
		
		<!-- 菜单列表 -->
	</scroll-view>
</template>

<script>
	import hj_list from "../../../components/hj-list.vue"
	import hj_list_item from "../../../components/hj-list-item.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			hj_list,
			hj_list_item
		}
	}
</script>

<style>
	.hj-info {
		padding: 20rpx 0rpx 50rpx 30rpx;
		background-color: #fff;
		border-bottom: 2rpx #f6f6f6 solid;
		box-shadow: 0px 4rpx 4rpx 0px rgba(169, 165, 157, 0.07);
		border: 2rpx solid rgba(239, 242, 255, 1);
	}

	.d-flex .hj-media {
		background-color: #DCDCDC;
		margin-right: 20rpx;
		border-radius: 50%;
		overflow: hidden;
	}

	.d-flex .hj-media .wrap_img {
		width: 120rpx;
		height: 120rpx;
		overflow: hidden;
	}

	.d-flex .hj-meida-body {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.d-flex .hj-meida-body .nickname {
		font-size: 32rpx;
		font-weight: bold;
	}

	.d-flex .hj-meida-body .desc {
		font-size: 28rpx;
		color: #999;
	}

	.d-flex .d-flex-center .label {
		background-color: #FF0033;
		color: #fff;
		border-radius: 40rpx 0 0 40rpx;
		font-size: 24rpx;
		padding: 10rpx 20rpx;
	}
	
	.icon-menu{
		background-color: #fff;
		text-align: center;
		display: flex;
		align-items: center;
	}
	
	.icon-menu .bv-line{
		height: 60rpx;
		width: 2rpx;
		background-color: #f5f5f5;
	}
	
	.icon-menu .icon-item{
		flex: 1;
		padding: 20rpx 0;
	}
	
	.icon-menu .icon-item .num{
		color: #333;
		font-weight: bold;
		font-size: 32rpx;
	}
	
	.icon-menu .icon-item .name{
		color: #999;
		font-size: 30rpx;
	}
	
</style>
