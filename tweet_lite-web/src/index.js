import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TweetsComponent } from "./tweets";

const appEl = document.getElementById("root");
if (appEl) {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		appEl
	);
}

const tweetsEl = document.getElementById("tweet_lite");
if (tweetsEl) {
	ReactDOM.render(<TweetsComponent />, tweetsEl);
}
