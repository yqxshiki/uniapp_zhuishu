<template>
	<view id="subcategory">
		<view class="sub_center" v-for="(bookcity,bookcity_index) in category" :key="bookcity_index">
			{{bookcity.name}}
			<view class="category">
				<navigator class="sub_nav" :data-name="bookcity.type" v-for="(item,index) in list[bookcity.type]" :key="index">{{item.major}}</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				category: [{
						name: "男生标签",
						type:'male'
					},
					{
						name: "女生标签",
						type:'female'
					},
					{
						name: "图书标签",
						type:'picture'
					},
					{
						name: "出版标签",
						type:'press'
					}
				],
				list: ""
			}
		},
		methods: {
			async getinfo() {
				var url = '/api/cats/lv2'
				const data = await this.$uniRequest({
					url
				})
				this.list = data.data;
			}
		},
		created() {
			this.getinfo()
		}
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
