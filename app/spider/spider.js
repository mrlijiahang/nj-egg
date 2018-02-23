/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Feb 23 2018
 *  File : spider.js
 *******************************************/
const getGoods = require('./getGoods')

async function f(){
	await getGoods()
	process.on('exit', (code) => {
		console.log(`数据抓取完毕`)
	})
	process.exit()
}
f()

