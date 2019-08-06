<template>
	<view class="page">
		<view class="hj-tab hj-bg-white">
			<view @click="setTab" data-id="0" class="hj-tab-item" :class="currentIndex == 0 ? 'active' : ''">
				<text>TAB按钮一</text>
				<text class="ud-line"></text>
			</view>
			<view @click="setTab" data-id="1" class="hj-tab-item" :class="currentIndex == 1 ? 'active' : ''">
				<text>TAB按钮二</text>
				<text class="ud-line"></text>
			</view>
			<view @click="setTab" data-id="2" class="hj-tab-item" :class="currentIndex == 2 ? 'active' : ''">
				<text>TAB按钮三</text>
				<text class="ud-line"></text>
			</view>
		</view>

		<view class="hj-tab-content flex-1">
			<swiper class="fullHeight" @change="swiperChange" :current="currentIndex">
				<swiper-item>
					<scroll-view class="tab_content_item" scroll-y="true">
						1
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="tab_content_item" scroll-y="true">
						2
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="tab_content_item" scroll-y="true">
						3
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			setTab: function(e) {
				this.currentIndex = e.currentTarget.dataset.id;
			},
			swiperChange:function(e){
				console.log(e);
				this.currentIndex = e.detail.current;
			}
		}
	}
</script>

<style>
	.page{
		display: flex;
		flex-direction: column;
	}
</style>
