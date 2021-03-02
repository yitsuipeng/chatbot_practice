require('dotenv').config();
const express = require("express");
const app = express();

const {
	mainContent, 
	productsContent,
	discountPicture,
	discountContent,
	serviceQuery,
	serviceQuickReply,
} = require("./components");

// create LINE SDK config from env variables
const config = {
	channelAccessToken: process.env.channelAccessToken,
	channelSecret: process.env.channelSecret
};

const {
	Client,
	middleware,
	JSONParseError,
	SignatureValidationFailed
} = require("@line/bot-sdk");

// create LINE SDK client
const client = new Client(config);

// Testing
app.get("/test", (req, res) => {
	res.status(200).send("Test OK!!!");
});

// Webhook
app.post("/webhook", middleware(config), (req, res) => {
	if (req.body.destination) {
		console.log("Destination User ID: " + req.body.destination);
	}
	Promise
		.all(req.body.events.map(handleEvent))
		.then(() => { res.end(); })
		.catch((err) => {
			console.error(err);
			res.status(500).end();
		});
});

// User Record
let serviceList = {};

// Event Handler
async function handleEvent(event) {
	const {
		type,
		source,
		message,
	} = event; 

    switch(message.type) {
    case "text":
        if (message.text == "開始查詢" || message.text == "回主選單") {
            return client.replyMessage(event.replyToken, mainContent);
        } else if (message.text == "最新商品") {
            return client.replyMessage(event.replyToken, productsContent);
        } else if (message.text == "最新優惠") {
            return client.replyMessage(event.replyToken, [discountPicture, discountContent]);
        } else if (message.text == "找客服") {
            if(!serviceList[source.userId]) {
                serviceList[source.userId] = true;
            }
            return client.replyMessage(event.replyToken, serviceQuery);
        }
    default:
        if(serviceList[source.userId]) {
            delete serviceList[source.userId];
            return client.replyMessage(event.replyToken, serviceQuickReply(message.text));
        } else {
            return Promise.resolve(null);
        }
    }

}

// Error handling
app.use((err, req, res, next) => {
	if (err instanceof SignatureValidationFailed) {
		res.status(401).send(err.signature);
		return;
	} else if (err instanceof JSONParseError) {
		res.status(400).send(err.raw);
		return;
	}
	next(err); // will throw default 500
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

app.listen(8080, (err) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log(`port: 8080`);
	}
});