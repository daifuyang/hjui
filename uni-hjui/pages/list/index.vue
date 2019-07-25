<template>
	<hj_list>
		<hj_list_item theme="0" title="简单标题"></hj_list_item>
		<hj_list_item theme="1" title="简单列表"></hj_list_item>
		<hj_list_item theme="2" title="列表包含右边箭头"></hj_list_item>
		<hj_list_item theme="3" title="列表包含右边箭头" iicon="iconsetting"></hj_list_item>
		<hj_list_item theme="4" title="列表包含右边箭头和图标" iicon="iconsetting"></hj_list_item>
		<hj_list_item theme="5" title="字体图标无下划线" iicon="iconsetting"></hj_list_item>
	</hj_list>
</template>

<script>
	import hj_list from "../../components/hj-list.vue"
	import hj_list_item from "../../components/hj-list-item.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			hj_list,
			hj_list_item
		}
	}
</script>

<style>
</style>
