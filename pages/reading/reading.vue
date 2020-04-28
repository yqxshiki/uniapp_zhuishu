<template>
	<view>
		<view>
			<view v-for="(item,index) in list" :key="index">{{item.title}}</view>
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
				var url = '/api/mix-atoc/' + this.id + '?view=chapters'
				const book = await this.$uniRequest({
					url
				})
				this.list = book.data.mixToc.chapters;
				console.log(this.list)
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

</style>
