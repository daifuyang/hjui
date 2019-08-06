<template>
	<scroll-view class="page" scroll-y="true">
		<view class="hj-content-padded">
			<view class="h1">标题一 H1</view>
			<view class="h2">标题二 H2</view>
			<view class="h3">标题三 H3</view>
			<view class="h4">标题四 H4</view>
			<view class="h5">标题五 H5</view>
			<view class="h6">标题六 H6</view>
			<view class="p">P标签字体，默认为14px,下边距15px</view>
		</view>

		<hj_list class="hj-bg-white">
			<hj_list_item theme="0" title=" 常用颜色对照表"></hj_list_item>
			<hj_list_item theme="3" iclass="hj-text-primary" title="primary" itext="#00bcd4"></hj_list_item>
			<hj_list_item theme="3" iclass="hj-text-success" title="success" itext="#009688"></hj_list_item>
			<hj_list_item theme="3" iclass="hj-text-info" title="info" itext="#00bcd4"></hj_list_item>
			<hj_list_item theme="3" iclass="hj-text-warning" title="warning" itext="#ffc107"></hj_list_item>
			<hj_list_item theme="3" iclass="hj-text-danger" title="danger" itext="#e51c23"></hj_list_item>

		</hj_list>

		<view class="hj-content-padded">
			<view class="p hj-text-danger">更多颜色参考值可百度《web安全色》</view>
		</view>

	</scroll-view>
</template>

<script>
	import hj_list from "../../components/hj-list.vue"
	import hj_list_item from "../../components/hj-list-item.vue"
	export default {
		data() {
			return {

			};
		},
		components: {
			hj_list,
			hj_list_item
		}
	}
</script>

<style>
</style>
