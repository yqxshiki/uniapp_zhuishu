<template>
	<view id="subcategory">
		<view :class="isrankgin==false?'sub_center':'ranking-container'" v-for="(bookcity,bookcity_index) in category" :key="bookcity_index">
			<view :class="isrankgin==false?'orange':'ranking-name'">
				{{bookcity.name}}
			</view>
			<view class="category">

				<navigator :url="'../../pages/book/book?major='+item.major" :class="isrankgin==false?'sub_nav':'ranking_nav'"
				 :data-name="bookcity.type" v-for="(item,index) in list[bookcity.type]" :key="index">
					<!-- <view v-if="isrankgin">
						<image class="ranking-img" :src="'http://statics.zhuishushenqi.com/'+item.cover" mode=""></image>
					</view> -->
					<view :class="isrankgin==false?'':'ranking-shortTitle'">
						<view> {{iscategory==false?item.major:item.shortTitle}}
						</view>
						<!-- <view v-if="item.mins.length!==0" :class="isrankgin==false?'mins':'ranking_nav'">
							<view v-for="(mins,mins_index) in item.mins">
								<view>
									{{mins}}
								</view>
							</view>
						</view> -->
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: "",
			}
		},
		props: {
			category: {
				type: Array,
				default () {
					return []
				}
			},
			main_url: {
				type: String,
				default: ''
			},
			iscategory: {
				type: Boolean,
				default: false
			},
			isrankgin: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			async getinfo() {
				var url = this.main_url.toString();
				const data = await this.$uniRequest({
					url
				})
				this.list = data.data;
				console.log(this.list)
			}
		},
		created() {
			this.getinfo()
		}
	}
</script>

<style scoped>
	#subcategory {
		width: 100%;
		background: rgba(222, 222, 222, .74);
	}

	.orange {
		color: red;
	}

	.sub_center {
		text-align: center;
		padding-top: 40rpx;
	}

	.ranking-container {
		padding: 10rpx;
		margin: 10rpx;
	}

	.ranking-name {
		border-left: 2px solid orange;
		padding: 20rpx;
	}

	.ranking_nav {
		width: 100%;
		margin: 20rpx;
	}

	.ranking_nav view {
		display: inline-block;
	}

	.ranking-img {
		width: 80rpx;
		height: 120rpx;
		vertical-align: middle;
	}

	.ranking-shortTitle {
		/* margin-left: 40rpx; */
		font-size: 32rpx;
		color: orange;
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
		text-align: center;
		padding: 6rpx;
		margin: 20rpx;
		background: #fff;
	}

	/* .mins {
		margin-top: 10rpx;
	}

	.mins view {
		background: #fff;
		margin: 6rpx;
		padding: 6rpx;

	} */
</style>
