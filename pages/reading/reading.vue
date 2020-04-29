<template>
	<view id="wrap">
		<view>
			<view v-for="(item,index) in list" :key="index">
				<button size="mini" class="book-button" @tap="check(item.link)"> {{item.title}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				list: ""
			}
		},
		methods: {
			async getinfo() {

				// var url = '/api/atoc?view=summary&book=' + this.id

				// 568fef99adb27bfb4b3a58dc
				// var url = '/api/atoc/' + this.id + '?view=chapters'
				var url = '/api/atoc/568fef99adb27bfb4b3a58dc?view=chapters'
				const book = await this.$uniRequest({
					url
				})
				// this.list = book.data.mixToc.chapters;
				this.list = book.data.chapters;
			},
			async getdetail(data) {
				// var url = '/' + data;
				// const res = await this.$uniRequest({
				// 	url
				// })
				// // this.list = book.data;
				console.log(data)
			},
			check(data) {
				this.getdetail(data)
			}
		},
		created() {
			this.getinfo()
		},
		onLoad(data) {
			this.id = data.id
		}
	}
</script>

<style>
	#wrap {
		width: 100%;
		background-color: rgb(255, 255, 237);
	}

	.book-button {
		width: 80%;
		text-align: left;
	}
</style>
