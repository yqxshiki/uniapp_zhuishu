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

<style>
	#subcategory {
		width: 100%;
		height: 100vh;
		background: rgba(222, 222, 222, .74);
	}

	.sub_center {
		text-align: center;
		padding-top: 40rpx;
	}

	/* 标签 */
	.category {
		display: flex;
		flex-wrap: wrap;
		margin-left: 36rpx;
		margin-right: 20rpx;
		font-size: 32rpx;
	}

	/* 链接 */
	.sub_nav {
		width: 20%;
		text-align: center;
		background: #fff;
		margin: 10rpx;
		padding: 6rpx;
	}
</style>
