import uni_url from './url.js'

const $uniRequest = (data) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: "加载中。。。",
			mask: true
		})
		uni.request({
			url:  data.url,
			method: data.method || 'GET',
			data: data.data || '{}',
			success: (res) => {
				// if (res.data.status !== 0) {
				// 	return uni.showToast({
				// 		title: "请求接口失败!",
				// 		icon: 'none'
				// 	})
				// }
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: "请求接口失败!",
					icon: 'none'
				})
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
export default $uniRequest
