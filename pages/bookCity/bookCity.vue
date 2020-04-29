<template>
	<view>
		<headbar :head_bar="type" :currentindex="currentindex" :swiper_current="current" @current_tap="current_tap"></headbar>
		<swiper class="swiper" @change="index_change" :current="current">
			<swiper-item v-for="(book,book_index) in 4" :key="book_index">
				<view class="top" v-for="(item,index) in list" :key="index">
					<navigator :url="'../book/book?major='+item.name" class="nav">
						<view class="left">
							<image class="view-img img1" :src="'http://statics.zhuishushenqi.com'+item.bookCover[0]"></image>
							<image class="view-img img2" :src="'http://statics.zhuishushenqi.com'+item.bookCover[1]"></image>
							<image class="view-img img3" :src="'http://statics.zhuishushenqi.com'+item.bookCover[2]"></image>
						</view>
						<view class="right">
							<view class="title"> {{item.name}}</view>
							<view> {{item.bookCount}}本</view>
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
		position: relative;
	}

	.view-img {
		width: 140rpx;
		height: 200rpx;
		margin: 40rpx;
		position: absolute;
	}

	.img1 {
		z-index: 999;
	}

	.img2 {
		left: 30%;
		top: 10%;
		height: 176rpx;
		z-index: 888;
	}

	.img3 {
		left: 50%;
		top: 20%;
		height: 152rpx;
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
		margin: 10rpx;
	}

	.nav {
		width: 100%;
		display: flex;
	}
</style>
