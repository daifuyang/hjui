<template>
	<scroll-view class="page" scroll-y="true">
		<view class="hj-list hj-bg-white">
			
			<hj_list>
				<hj_list_item theme="0" title="基本样式"></hj_list_item>
				<hj_list_item @click.native="openView('text/index')" theme="1" title="文本样式 (text)"></hj_list_item>
				<hj_list_item theme="1" title="辅助样式 (auxiliary)"></hj_list_item>
				<hj_list_item @click.native="openView('button/index')" theme="1" title="常用按钮 (button)"></hj_list_item>
				<hj_list_item @click.native="openView('tab/index')" theme="1" title="tab切换工具 (tab)"></hj_list_item>
				<hj_list_item @click.native="openView('list/index')" theme="1" title="列表布局 (list)"></hj_list_item>
				<hj_list_item theme="1" title="模态框 (modal)"></hj_list_item>
				<hj_list_item theme="1" title="富文本解析 (wxparse)"></hj_list_item>
				
				<hj_list_item theme="0" title="工具类"></hj_list_item>
				
				<hj_list_item theme="1" title="音频播放器"></hj_list_item>
				<hj_list_item theme="1" title="视频播放器"></hj_list_item>
				<hj_list_item theme="1" title="开放按钮"></hj_list_item>
				
				<hj_list_item theme="0" title="页面演示"></hj_list_item>
				
				<hj_list_item theme="1" title="日历签到"></hj_list_item>
				<hj_list_item theme="1" title="关于我们"></hj_list_item>
				<hj_list_item theme="1" title="页面上传"></hj_list_item>
				<hj_list_item @click.native="openView('mine/index/index')" theme="1" title="个人中心"></hj_list_item>
			</hj_list>

		</view>
		
	</scroll-view>
</template>

<script>
	
	import hj_list from "../../components/hj-list.vue"
	import hj_list_item from "../../components/hj-list-item.vue"
	export default {
		data() {
			return {
				list:{
					thumb:'http://iph.href.lu/200x150',
					title:'多媒体标题页',
					desc:'多媒体描述'
				}
			};
		},
		components:{
			hj_list,
			hj_list_item
		},
		mounted() {
			
		},
		methods:{
			openView:function(name){
				uni.navigateTo({
				  url: '../'+name,
				})
			}
		}
	}

</script>

<style>

</style>
