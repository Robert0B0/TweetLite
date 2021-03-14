import React, { useState, useEffect } from "react";
import { loadTweets } from "../lookup";

export function TweetsComponent(props) {
	const textAreaRef = React.createRef();
	const [newTweets, setNewTweets] = useState([]);
	const handleSubmit = (event) => {
		event.preventDefault();
		const newVal = textAreaRef.current.value;
		console.log(newVal);
		let tempNewTweets = [...newTweets];
		tempNewTweets.unshift({
			content: newVal,
			likes: 0,
			id: 1234,
		});
		setNewTweets(tempNewTweets);
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

	useEffect(() => {
		const final = [...props.newTweets].concat(tweetsInit);
		if (final.length !== tweets.length) {
			setTweets(final);
		}
	}, [props.newTweets, tweets, tweetsInit]);

	useEffect(() => {
		const myCallBack = (response, status) => {
			if (status === 200) {
				setTweetsInit(response);
			} else {
				alert("There was an error");
			}
		};
		loadTweets(myCallBack);
	}, [tweetsInit]);

	return tweets.map((item, index) => {
		return (
			<Tweet
				tweet={item}
				key={`${index}-item.id`}
				className="my-5 py-5 border bg-white text-dark"
			/>
		);
	});
}

export function ActionBtn(props) {
	const { tweet, action } = props;
	const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);
	const [userLike, setUserLike] = useState(tweet.userLike === true ? true : false);
	const className = props.className ? props.className : "btn btn-success btn-sm";
	const actionDisplay = action.display ? action.display : "Action";

	const handleClick = (event) => {
		event.preventDefault();
		if (action.type === "like") {
			if (userLike === true) {
				setLikes(likes - 1);
				setUserLike(false);
			} else {
				setLikes(likes + 1);
				setUserLike(true);
			}
		}
	};
	const display = action.type === "like" ? `${likes} ${actionDisplay}` : actionDisplay;

	return (
		<button className={className} onClick={handleClick}>
			{display}
		</button>
	);
}

export function Tweet(props) {
	const { tweet } = props;
	const className = props.className ? props.className : "col-10 mx-auto col-md-6";

	return (
		<div className={className}>
			<p>
				{tweet.id} - {tweet.content}
			</p>
			<div className="btn btn-group">
				<ActionBtn tweet={tweet} action={{ type: "like", display: "Like" }} />
				<ActionBtn tweet={tweet} action={{ type: "unlike", display: "UnLike" }} />
				<ActionBtn tweet={tweet} action={{ type: "retweet", display: "Retweet" }} />
			</div>
		</div>
	);
}
