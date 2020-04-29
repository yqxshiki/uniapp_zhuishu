<template>
	<list :category="category" :main_url="main_url"></list>
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
						name: "男生标签",
						type: 'male'
					},
					{
						name: "女生标签",
						type: 'female'
					},
					{
						name: "图书标签",
						type: 'picture'
					},
					{
						name: "出版标签",
						type: 'press'
					}
				],
				main_url:'/api/cats/lv2'
			}
		},
	}
</script>

