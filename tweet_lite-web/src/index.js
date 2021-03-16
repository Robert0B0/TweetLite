import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TweetsComponent, TweetDetailComponent } from "./tweets";

const appEl = document.getElementById("root");
if (appEl) {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		appEl
	);
}

const e = React.createElement;

const tweetsEl = document.getElementById("tweet_lite");
if (tweetsEl) {
	console.log(tweetsEl.dataset.username);
	ReactDOM.render(e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetDetailElements = document.querySelectorAll(".tweet_lite-detail");

tweetDetailElements.forEach((container) => {
	ReactDOM.render(e(TweetDetailComponent, container.dataset), container);
});
