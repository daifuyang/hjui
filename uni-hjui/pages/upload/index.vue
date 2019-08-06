<template>
	<scroll-view scroll-y class="page">

		<block v-if="src == ''">
			<view @click="uploadVideo" class="d-flex-center addVideo" :style="'width: 100%;height:'+videoHeight+'px;background-color:#ddd'">
				<view class="iconfont iconplus"></view>
				<view class="h6">上传视频</view>
			</view>
		</block>
		<block v-else>
			<video id="video" :style="'width: 100%;height:'+videoHeight+'px'" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4">

			</video>
		</block>

		<form @submit="formSubmit" @reset="formReset">
			<view class="form-group">
				<view class="label">缩略图</view>
				<view class="form-control">
					<image id="thumb" :src="thumb" mode="widthFix"></image>
				</view>
			</view>

			<view class="form-group">
				<view class="label">分类</view>
				<view class="form-control">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="label">标题</view>
				<view class="form-control">
					<input class="uni-input" placeholder="请输入视频标题" />
				</view>
			</view>

			<view class="form-group">
				<view class="label">标签</view>
				<view class="form-textarea">
					<textarea @blur="bindTextAreaBlur" placeholder="多个标签以英文逗号分隔" auto-height></textarea>
				</view>
			</view>

			<view class="form-group">
				<view class="label">描述</view>
				<view class="form-textarea">
					<textarea @blur="bindTextAreaBlur" placeholder="填写视频描述内容" auto-height></textarea>
				</view>
			</view>
			</view>

		</form>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				thumb: 'http://iph.href.lu/200x112?text=vlog',
				videoWidth: 0,
				videoHeight: 0,

				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
			}
		},
		mounted() {

		},
		onLoad(options) {
			this.init();
		},
		methods: {
			init: function() {
				var that = this;
				wx.getSystemInfo({
					success(res) {
						var videoWidth = res.screenWidth;
						var height = videoWidth * 9 / 16;
						that.videoWidth = videoWidth;
						that.videoHeight = height;
					}
				})
			},
			uploadVideo: function() {
				var that = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['album'],
					success: function(res) {
						let src = res.tempFilePath;
						console.log(src);
						that.src = src;
						// that.videoThumb();

					}
				});
			},
			//获取视频封面
			videoThumb: function() {
				var that = this;

				let thumb = document.getElementById("thumb");

				var canvas = document.createElement("canvas"); //创建一个canvas
				canvas.width = that.videoWidth; //设置canvas的宽度为视频的宽度
				canvas.height = that.videoHeight; //设置canvas的高度为视频的高度
				console.log(canvas);

				setTimeout(function() {
					let video = document.getElementsByTagName("video")[0];


					canvas.getContext('2d').drawImage(video, 0, 0, that.videoWidth, that.videoHeight);

					let src = canvas.toDataURL('image/png');

					that.thumb = src;
				}, 0);


			}
		}
	}
</script>

<style>
	.addVideo {
		flex-direction: column;
	}

	.addVideo .iconplus {
		font-size: 60rpx;
	}

	.form-group {
		padding: 20rpx 0rpx;
		display: flex;
		border-bottom: 2rpx solid #d9d9d9;
		margin: 0 30rpx;
	}

	.form-group .label {
		width: 100rpx;
		text-align: left;
		padding-right: 20rpx;
	}

	.form-group .form-control {
		flex: 1;
	}

	.form-group .form-textarea {
		flex: 1;
		height: 100rpx;
		overflow-x: hidden;
		overflow-y: scroll !important;
		padding-left: 0rpx;
		padding-right: 20rpx;
	}

	.form-group .form-textarea textarea {}

	.form-group .form-control image {
		width: 60%;
		height: 60%;
	}
</style>
