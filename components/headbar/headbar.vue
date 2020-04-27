<template>
	<view class="head" :class="firsthead==true?'black_head':''">
		<scroll-view class="scroll-view" scroll-x="true">
			<view :id="item.type" class="scroll-view-item" @tap="current_tap" v-for="(item,index) in head_bar" :key="index"
			 :class="[
				currentindex==index?'active':'',
				iscateygory==true?'noacitve':''
				]">
				{{item.name}}
				<view class="view-border"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			head_bar: {
				type: Array,
				default () {
					return []
				}
			},
			firsthead: {
				type: Boolean,
				default: false
			},
			currentindex: {
				type: Number,
				default: 0
			},
			iscateygory: {
				tyep: Boolean,
				default: false
			},
			swiper_current: {
				type: Number,
				default: 0
			},
		},
		methods: {
			current_tap(e) {
				this.$emit('current_tap', e.currentTarget.id)
			},
		}
	}
</script>

<style scoped>
	.head {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.scroll-view-item {
		display: inline-block;
		text-align: center;
		width: 25%;
		position: relative;
		height: 2rem;
		line-height: 80rpx;
	}

	.active :after {
		content: '';
		position: absolute;
		left: 32rpx;
		top: auto;
		bottom: 0;
		right: auto;
		height: 8rpx;
		width: 120rpx;
		background-color: orange;
	}

	.noacitve :after {
		content: '';
		position: absolute;
		left: 32rpx;
		top: auto;
		bottom: 0;
		right: auto;
		height: 8rpx;
		width: 120rpx;
		background-color: rgb(39, 40, 34);
	}

	.black_head {
		background: rgb(39, 40, 34);
		color: #fff;
	}
</style>
