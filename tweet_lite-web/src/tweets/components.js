import React, { useState, useEffect } from "react";
import { apiTweetCreate, apiTweetList, apiTweetAction } from "./lookup";

export function TweetsComponent(props) {
	const textAreaRef = React.createRef();
	const [newTweets, setNewTweets] = useState([]);

	const handleBackendUpdate = (response, status) => {
		// backend api response handler
		let tempNewTweets = [...newTweets];
		if (status === 201) {
			tempNewTweets.unshift(response);
			setNewTweets(tempNewTweets);
		} else {
			console.log(response);
			alert("an error occured, please try again");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newVal = textAreaRef.current.value;
		// backend api request handler
		apiTweetCreate(newVal, handleBackendUpdate);
		textAreaRef.current.value = "";
	};

	return (
		<div className={props.className}>
			<div className="col-12 mb-3">
				<form onSubmit={handleSubmit}>
					<textarea ref={textAreaRef} required={true} className="form-control"></textarea>
					<button type="submit" className="btn btn-success my-3">
						Tweet
					</button>
				</form>
			</div>
			<TweetsList newTweets={newTweets} />
		</div>
	);
}

export function TweetsList(props) {
	const [tweetsInit, setTweetsInit] = useState([]);
	const [tweets, setTweets] = useState([]);
	const [tweetsDidSet, setTweetsDidSet] = useState(false);

	useEffect(() => {
		const final = [...props.newTweets].concat(tweetsInit);
		if (final.length !== tweets.length) {
			setTweets(final);
		}
	}, [props.newTweets, tweets, tweetsInit]);

	useEffect(() => {
		if (tweetsDidSet === false) {
			const handleTweetListLookup = (response, status) => {
				if (status === 200) {
					setTweetsInit(response);
					setTweetsDidSet(true);
				} else {
					alert("There was an error");
				}
			};
			apiTweetList(handleTweetListLookup);
		}
	}, [tweetsInit, tweetsDidSet, setTweetsDidSet]);

	const handleDidRetweet = (newTweet) => {
		const updatedTweetsInit = [...tweetsInit];
		updatedTweetsInit.unshift(newTweet);
		setTweetsInit(updatedTweetsInit);

		const updatedFinalTweets = [...tweets];
		updatedFinalTweets.unshift(tweets);
		setTweets(updatedFinalTweets);
	};

	return tweets.map((item, index) => {
		return (
			<Tweet
				tweet={item}
				didRetweet={handleDidRetweet}
				key={`${index}-item.id`}
				className="my-5 py-5 border bg-white text-dark"
			/>
		);
	});
}

export function ActionBtn(props) {
	const { tweet, action, didPerformAction } = props;
	const likes = tweet.likes ? tweet.likes : 0;
	const className = props.className ? props.className : "btn btn-success btn-sm";
	const actionDisplay = action.display ? action.display : "Action";

	const handleBackendEvent = (response, status) => {
		if ((status === 200 || status === 201) && didPerformAction) {
			didPerformAction(response, status);
		}
	};

	const handleClick = (event) => {
		event.preventDefault();
		apiTweetAction(tweet.id, action.type, handleBackendEvent);
	};
	const display = action.type === "like" ? `${likes} ${actionDisplay}` : actionDisplay;

	return (
		<button className={className} onClick={handleClick}>
			{display}
		</button>
	);
}

export function ParentTweet(props) {
	const { tweet } = props;

	return tweet.parent ? (
		<div className="row">
			<div className="col-11 mx-auto p-3 border rounded">
				<p className="mb-0 text-muted sm">Retweet</p>
				<Tweet hideActions className={" "} tweet={tweet.parent} />
			</div>
		</div>
	) : null;
}

export function Tweet(props) {
	const { tweet, didRetweet, hideActions } = props;
	const className = props.className ? props.className : "col-10 mx-auto col-md-6";
	const [actionTweet, setActionTweet] = useState(props.tweet ? props.tweet : null);

	const handlePerformAction = (newActionTweet, status) => {
		if (status === 200) {
			setActionTweet(newActionTweet);
		} else if (status === 201) {
			if (didRetweet) {
				didRetweet(newActionTweet);
			}
		}
	};

	return (
		<div className={className}>
			<div>
				<p>
					{tweet.id} - {tweet.content}
				</p>
			</div>
			<ParentTweet tweet={tweet} />
			{actionTweet && hideActions !== true && (
				<div className="btn btn-group">
					<ActionBtn
						tweet={actionTweet}
						didPerformAction={handlePerformAction}
						action={{ type: "like", display: "Like" }}
					/>
					<ActionBtn
						tweet={actionTweet}
						didPerformAction={handlePerformAction}
						action={{ type: "unlike", display: "UnLike" }}
					/>
					<ActionBtn
						tweet={actionTweet}
						didPerformAction={handlePerformAction}
						action={{ type: "retweet", display: "Retweet" }}
					/>
				</div>
			)}
		</div>
	);
}
