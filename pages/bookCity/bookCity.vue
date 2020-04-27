<template>
	<view>
		<headbar :head_bar="type" :currentindex="currentindex" :swiper_current="current" @current_tap="current_tap"></headbar>
		<swiper class="swiper" @change="index_change" :current="current">
			<swiper-item v-for="(book,book_index) in 4" :key="book_index">
				<view class="top" v-for="(item,index) in list" :key="index">
					<navigator url="../../App" class="nav">
						<view class="left">
							<image class="view-img" :src="'http://statics.zhuishushenqi.com'+item.bookCover[0]"></image>
						</view>
						<view class="right">
							<view class="title"> {{item.name}}</view>
							<view>总数:{{item.bookCount}}</view>
							<view>月增:{{item.monthlyCount}}</view>
						</view>
					</navigator>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: [{
						name: '男生',
						type: "male"

					},
					{
						name: '女生',
						type: "female"
					},
					{
						name: '漫画',
						type: "picture"
					}, {
						name: '出版',
						type: "press"
					},
				],
				iscateygory: true,
				currentindex: 0,
				list: "",
				data: "",
				current: 0
			}
		},
		methods: {
			// 点击分类
			current_tap(e) {
				switch (e) {
					case 'male':
						this.current = 0;
						break;
					case 'female':
						this.current = 1;
						break;
					case 'picture':
						this.current = 2;
						break;
					case 'press':
						this.current = 3;
						break;
				}
			},
			// 左右滑动
			index_change(e) {
				this.currentindex = e.detail.current
				switch (this.currentindex) {
					case 0:
						this.list = this.data.male;
						break;
					case 1:
						this.list = this.data.female;
						break;
					case 2:
						this.list = this.data.picture;
						break;
					case 3:
						this.list = this.data.press;
						break;
				}
			},
			async getinfo() {
				var url = '/api/cats/lv2/statistics'
				const data = await this.$uniRequest({
					url
				})
				this.data = data.data;
				this.list = this.data.male;
			}
		},
		created() {
			this.getinfo()
		}
	}
</script>

<style scoped>
	.swiper {
		width: 100%;
		height: 100vh;
	}

	.top {
		width: 100%;
		display: flex;
	}

	/* 图片 */
	.left {
		width: 30%;
	}

	.view-img {
		width: 240rpx;
		height: 160rpx;
		margin: 40rpx;
	}

	/* 分类 */
	.right {
		width: 70%;
		text-align: center;
		display: inline-block;
		font-size: 10rpx;
		padding: 37px;
	}

	/* 分类名 */
	.title {
		font-size: 16px;
		color: orange;
	}

	.nav {
		width: 100%;
		display: flex;
	}
</style>
