const Article  = require('../models').Article; 

let articleArr = [

	{
		article: 'Ex-Trump aide jailed in Russia inquiry',
		link: 'http://www.bbc.co.uk/news/world-us-canada-45455050',
		saved:['Ex-Trump aide jailed in Russia inquiry', 'http://www.bbc.co.uk/news/world-us-canada-45455050']
	},
	{
		article: 'Apple is creating an online portal for law enforcement data requests',
		link: 'https://www.engadget.com/2018/09/07/apple-online-portal-law-enforcement-data-requests/',
		saved: ['Apple is creating an online portal for law enforcement data requests', 'https://www.engadget.com/2018/09/07/apple-online-portal-law-enforcement-data-requests/']
	},

]

const articleSeed() =>{
	Article.bulkcreate(articleArr)
}

module.exports = articleSeed;