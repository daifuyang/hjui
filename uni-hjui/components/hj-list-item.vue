<template>

	<view>
		<!-- 列表头部样式 -->
		<view :style="istyle" :hover-class="ihover" :hover-stay-time = "istay"  v-if="theme == 0" class="hj-list-header">{{title}}</view>
		
		<!-- 简单列表：只含标题 -->
		<view :style="istyle" :hover-class="ihover" :hover-stay-time = "istay" v-else-if="theme == 1" class="hj-list-item">
			{{title}}
		</view>
		
		<!-- 简单列表：包含右边箭头 -->
		<view :style="istyle" :hover-class="ihover" :hover-stay-time = "istay" v-else-if="theme == 2" class="hj-list-item">
			<view class="flex-1">{{title}}</view>
			<view class="more">
				<text class="iconfont iconright"></text>
			</view>
		</view>

		<!-- 简单列表：包含字体图标-->
		<view :style="istyle" :hover-class="ihover" :hover-stay-time = "istay" v-else-if="theme == 3" class="hj-list-item">
			<view class="icon">
				<text :class="'iconfont '+iicon"></text>
			</view>
			<view class="hj-media-body ml-3">
				{{title}}
			</view>
		</view>
		
		<!-- 简单列表：包含字体图标右边箭头-->
		<view :style="istyle" :hover-class="ihover" :hover-stay-time = "istay" v-else-if="theme == 4" class="hj-list-item">
			<view class="icon">
				<text :class="'iconfont '+iicon"></text>
			</view>
			<view class="hj-media-body ml-3">
				<view class="flex-1">{{title}}</view>
				<view class="more">
					<text class="iconfont iconright"></text>
				</view>
			</view>
		</view>
		
		<!-- 简单列表：字体无下划线图标右边箭头-->
		<view :style="istyle" :hover-class="ihover" :hover-stay-time = "istay" v-else-if="theme == 5" class="hj-list-item hj-list-noicob-item">
			<view class="icon">
				<text :class="'iconfont '+iicon"></text>
			</view>
			<view class="hj-media-body ml-3">
				<view class="flex-1">{{title}}</view>
				<view class="more">
					<text class="iconfont iconright"></text>
				</view>
			</view>
		</view>
		
	</view>

</template>

<script scoped>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			istyle: {
				type: String,
				default: ''
			},
			ihover:{
				type: String,
				default: 'bg-grey'
			},
			istay:{
				type:Number,
				default: 100
			},
			iicon:{
				type: String,
				default: ''
			},
			theme: {
				type: String
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	/* 列表头部提示语 */
	.hj-list-header {
		background-color: #e0e0e0;
		color: #212121;
		padding: 16rpx 30rpx;
		font-size: 24rpx;
	}

	.hj-list-item {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		padding: 20rpx 30rpx;
		border-bottom: 2rpx #f5f5f5 solid;
	}

	.hj-list-item .icon {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.hj-list-item .hj-media-body{
		display: flex;
		width: 100%;
	}

	.hj-list-item .iconfont {
		font-size: 32rpx;
		vertical-align: middle;
	}
	
	.hj-list-noicob-item{
		border-bottom: 0;
		padding:20rpx 0rpx 0rpx 30rpx;
	}
	
	.hj-list-noicob-item .more{
		margin-right: 30rpx;
	}
	
	.hj-list-noicob-item .hj-media-body{
		padding-bottom: 20rpx;
		border-bottom: 2rpx #f5f5f5 solid;
	}
</style>
