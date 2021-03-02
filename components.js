const mainContent = {
	"type": "template",
	"altText": "This is a buttons template",
	"template": {
		"type": "buttons",
		"imageAspectRatio": "rectangle",
		"imageSize": "contain",
		"imageBackgroundColor": "#FFFFFF",
		"text": "你好，我是機器人",
		"actions": [
			{
				"type": "message",
				"label": "最新商品",
				"text": "最新商品"
			},
			{
				"type": "message",
				"label": "最新優惠",
				"text": "最新優惠"
			},
			{
				"type": "message",
				"label": "找客服",
				"text": "找客服"
			}
		]
	}
};


const productsContent = {
	"type": "template",
	"altText": "this is a carousel template",
	"template": {
		"type": "carousel",
		"imageAspectRatio": "rectangle",
		"imageSize": "contain",
		"columns": [
			{
				"thumbnailImageUrl": "https://darrenstylish.s3-ap-northeast-1.amazonaws.com/omnichat/aopen_accer_27.jpg",
				"imageBackgroundColor": "#FFFFFF",
				"title": "AOPEN 27吋VA曲面電競螢幕",
				"text": "TWD$ 5488",
				"defaultAction": {
					"type": "uri",
					"label": "查看商品",
					"uri": "https://24h.pchome.com.tw/prod/DSABH1-1900AWVO2?fq=/S/DSABNY"
				},
				"actions": [
					{
						"type": "uri",
						"label": "查看商品",
						"uri": "https://24h.pchome.com.tw/prod/DSABH1-1900AWVO2?fq=/S/DSABNY"
					},
					{
						"type": "message",
						"label": "回主選單",
						"text": "回主選單"
					}
				]
			},
			{
				"thumbnailImageUrl": "https://darrenstylish.s3-ap-northeast-1.amazonaws.com/omnichat/acer_32.jpg",
				"imageBackgroundColor": "#FFFFFF",
				"title": "acer 32型2K HDR電競螢幕",
				"text": "TWD$ 9999",
				"defaultAction": {
					"type": "uri",
					"label": "查看商品",
					"uri": "https://24h.pchome.com.tw/prod/DSABHX-1900AYGIT?fq=/S/DSABNY"
				},
				"actions": [
					{
						"type": "uri",
						"label": "查看商品",
						"uri": "https://24h.pchome.com.tw/prod/DSABH1-1900AWVO2?fq=/S/DSABNY"
					},
					{
						"type": "message",
						"label": "回主選單",
						"text": "回主選單"
					}
				]
			}
		],
	}
};


const discountPicture = {
	"type": "image",
	"originalContentUrl": "https://darrenstylish.s3-ap-northeast-1.amazonaws.com/omnichat/samsung_49.jpg",
	"previewImageUrl": "https://darrenstylish.s3-ap-northeast-1.amazonaws.com/omnichat/samsung_49.jpg"
};


const discountContent = {
	"type": "template",
	"altText": "This is a buttons template",
	"template": {
		"type": "buttons",
		"imageAspectRatio": "rectangle",
		"imageSize": "contain",
		"imageBackgroundColor": "#FFFFFF",
		"text": "SAMSUNG 49吋曲面電競螢幕",
		"actions": [
			{
				"type": "uri",
				"label": "查看優惠",
				"uri": "https://24h.pchome.com.tw/prod/DSABBM-A900AQJPV"
			},
			{
				"type": "message",
				"label": "回主選單",
				"text": "回主選單"
			}
		]
	}
};


const serviceQuery = {
	type: "text",
	text: "您好，請問怎麼稱呼?" 
};


const serviceQuickReply = (userName) => {
	return {
		"type": "text",
		"text": `你好${userName}, 請問你想要查詢甚麼?`,
		"quickReply": {
			"items": [
				{
					"type": "action",
					"action": {
						"type": "message",
						"label": "會員積分",
						"text": "會員積分"
					}
				},
				{
					"type": "action",
					"action": {
						"type": "message",
						"label": "退/換貨",
						"text": "退/換貨"
					}
				},
				{
					"type": "action",
					"action": {
						"type": "message",
						"label": "點錯了",
						"text": "點錯了"
					}
				}
			]
		}
	};
};


module.exports = { 
	mainContent, 
	productsContent,
	discountPicture,
	discountContent,
	serviceQuery,
	serviceQuickReply,
};