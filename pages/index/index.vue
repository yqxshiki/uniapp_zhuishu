<template>
	<view class="content">
		<headbar :head_bar="head_bar" :iscateygory="iscateygory" :firsthead='firsthead'></headbar>
		<swiper class="swiper">
			<swiper-item>
				<view class="swiper-item">
					<bookcity></bookcity>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<subcategory></subcategory>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<bookcity></bookcity>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<subcategory></subcategory>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import bookcity from '../bookCity/bookCity.vue'
	import subcategory from '../subCategory/subCategory.vue'
	export default {
		components: {
			bookcity,
			subcategory
		},
		data() {
			return {
				head_bar: [{
						name: "我的书架"
					},
					{
						name: "书城"
					},
					{
						name: "标签"
					},
					{
						name: "全网"
					}
				],
				iscateygory: true,
				firsthead: true,
			}
		}
	}
</script>

<style scoped>
	.swiper {
		width: 100%;
		height: 100vh;
	}


</style>
