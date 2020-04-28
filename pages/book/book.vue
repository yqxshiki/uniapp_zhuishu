<template>
	<view>
		<navigator :url="'../bookDetail/bookDetail?id='+item._id" v-for="(item,index) in list" :key="index" class="book">
			<view>
				<image class="detail_img" :src="'http://statics.zhuishushenqi.com'+item.cover" mode=""></image>
			</view>
			<view class="detail-right">
				<view>{{item.title}}</view>
				<view class="detail_detail">
					<view class="light">{{item.author}}</view>
					<view class="light">{{item.minorCate}}</view>
					<view class="detail-ellipsis light1">{{item.shortIntro}}</view>
					<view class="popularity">{{item.latelyFollower |person}}人气</view>
				</view>

			</view>

		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				options: "",
				start: 0,
				limit: 8
			}
		},
		filters: {
			person(value) {
				var li;
				if (value > 10000) {
					li = (value / 10000);
					li = li.toString().substr(0, 4);
					return li + '万'
				} else {
					return value
				}
			}
		},
		methods: {
			async getinfo() {
				var url = '/api/book/by-categories?gender=male&type=hot&major=' + this.options + '&minor=&start=' + this.start +
					'&limit=' + this.limit + ''
				const data = await this.$uniRequest({
					url
				})
				if (data.data.total == 0) {
					uni.showToast({
						title: "没有该类型的小说，请选择别的类型进行阅读！",
						icon: 'none'
					})
					setTimeout(() => {
						uni.navigateBack({
							delta: 1
						})
					}, 1500)
				}
				this.list = this.list.concat(data.data.books)
				console.log(this.list)
			}
		},
		mounted() {
			this.getinfo()
		},
		onLoad(data) {
			this.options = data.major
		},
		onReachBottom() {
			this.start++;
			this.getinfo()
		}
	}
</script>

<style>
	.book {
		display: flex;
		justify-content: space-around;
		margin: 40rpx;
	}

	.detail-right {
		margin-left: 40rpx;
		padding-left: 20rpx;
	}

	.detail_img {
		width: 120rpx;
		height: 240rpx;
	}

	.detail_detail {
		font-size: 20rpx;
	}

	.detail-ellipsis {
		height: 100rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.light {
		color: #999999;
	}

	.light1 {
		color: #555;
	}

	.popularity {
		color: orange;
		position: absolute;
		right: 10%;
	}
</style>
