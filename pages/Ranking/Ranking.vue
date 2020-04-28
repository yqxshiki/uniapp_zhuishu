<template>
	<list :category="category" :iscategory="true" :main_url="main_url" :isrankgin='true'></list>
</template>

<script>
	import list from '../../components/list/list.vue'
	export default {
		components: {
			list
		},
		data() {
			return {
				category: [{
						name: "男生喜爱排行榜",
						type: 'male'
					},
					{
						name: "女生喜爱排行榜",
						type: 'female'
					},
					{
						name: "电子图书喜爱排行榜",
						type: 'picture'
					},
					{
						name: "出版喜爱排行榜",
						type: 'epub'
					}
				],
				main_url: "/api/ranking/gender"
			}
		},
	}
</script>

<style>
</style>
