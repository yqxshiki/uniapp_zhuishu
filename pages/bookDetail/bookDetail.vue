<template>
	<view class="wrap">
		<view class="flex container">
			<view>
				<image class="book-image" :src="'http://statics.zhuishushenqi.com'+list.cover" mode=""></image>
			</view>
			<view class="book-info">
				<view class="book-title">{{list.title}}</view>
				<view class="book-min">作者:{{list.author}}</view>
				<view class="book-min">分类:{{list.cat}}</view>
				<view class="book-min">来源:{{list.copyright}}</view>
			</view>
		</view>
		<view class="book-chapter">
			<view>{{list.lastChapter}}</view>
			<view class="book-time">
				更新时间:{{list.updated |formatDate}}
			</view>
		</view>

		<view class="flex">
			<view class="nav">
				<navigator :url="'../reading/reading?id='+list._id">追更</navigator>
			</view>
			<view class="nav">
				<navigator :url="'../reading/reading?id='+list._id">阅读</navigator>
			</view>

		</view>

		<view class="book-content">
			<text class="book-content-content">内容简介</text>
			<view class="book-content-info">
				{{list.longIntro}}
			</view>
		</view>

		<view class="book-category">
			<view v-for="(item,index) in list.tags" :key="index">
				{{item}}
			</view>
		</view>

		<view class="book-pic">
			<view class="pic-info">图书信息</view>
			<view>{{list.copyrightInfo}}</view>
			<view>{{list.copyrightDesc}}</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				list: ""
			}
		},
		filters: {
			formatDate: function(value) {
				var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + '-';
				var h = date.getHours() + ':';
				var m = date.getMinutes() + ':';
				var s = date.getSeconds();
				return Y + M + D + h + m + s;
			}
		},
		methods: {
			async getinfo() {
				var url = '/api/book/' + this.id
				const book = await this.$uniRequest({
					url
				})
				this.list = book.data
				console.log(book.data)
			}
		},
		created() {
			this.getinfo()
		},
		onLoad(data) {
			this.id = data.id;
		}
	}
</script>

<style scoped>
	.container {
		background: url(../../static/f7ef41ec0381220dd1e1ad31fc84eb4a.jpg) no-repeat;
	}

	.flex {
		display: flex;
		justify-content: space-around;
	}
	.nav{
		padding: 20rpx 40rpx;
		background: red;
		color: #fff;
	}
	.book-title {
		color: #fff;
	}

	.book-info {
		line-height: 60rpx;
	}

	.book-min {
		font-size: 24rpx;
		color: orange;
	}

	.book-image {
		width: 200rpx;
		height: 250rpx;
	}

	/* 最新章节 */
	.book-chapter {
		font-size: 30rpx;
		margin: 40rpx;
	}

	.book-chapter view {
		margin: 20rpx;
		font-size: 20rpx;
	}

	.book-time {
		color: red;
	}

	/* 内容简介 */
	.book-content {
		border-top: 5px solid #eee;
		margin-top: 40rpx;
	}

	.book-content-content {
		font-size: 30rpx;
		color: #aaa;
		margin: 20rpx;
	}

	.book-content-info {
		font-size: 30rpx;
		text-indent: 2rem;
	}

	/* 分类 */
	.book-category {
		display: flex;
		flex-wrap: wrap;
	}

	.book-category view {
		background: #eee;
		width: 24%;
		margin: 20rpx;
		text-align: center;
		padding: 4rpx;
		font-size: 24rpx;
		border-radius: 50rpx;
		box-shadow: 5rpx 5rpx 5rpx #ff861c;
	}

	.book-pic {
		border-top: 5px solid #eee;
		font-size: 30rpx;
		margin-top: 40rpx;
	}

	.book-pic view {
		margin: 40rpx;
	}

	.pic-info {
		font-size: 10rpx;
	}
</style>
