(this["webpackJsonptweet_lite-web"] = this["webpackJsonptweet_lite-web"] || []).push([
	[0],
	{
		12: function (e, t, c) {},
		14: function (e, t, c) {},
		15: function (e, t, c) {
			"use strict";
			c.r(t);
			var s = c(1),
				n = c.n(s),
				a = c(6),
				r = c.n(a),
				i = (c(12), c(7)),
				o = c(2);
			var l = c(0);
			function j(e) {
				var t = n.a.createRef(),
					c = Object(s.useState)([]),
					a = Object(o.a)(c, 2),
					r = a[0],
					j = a[1];
				return Object(l.jsxs)("div", {
					className: e.className,
					children: [
						Object(l.jsx)("div", {
							className: "col-12 mb-3",
							children: Object(l.jsxs)("form", {
								onSubmit: function (e) {
									e.preventDefault();
									var c = t.current.value;
									console.log(c);
									var s = Object(i.a)(r);
									s.unshift({ content: c, likes: 0, id: 1234 }), j(s), (t.current.value = "");
								},
								children: [
									Object(l.jsx)("textarea", { ref: t, required: !0, className: "form-control" }),
									Object(l.jsx)("button", {
										type: "submit",
										className: "btn btn-success my-3",
										children: "Tweet",
									}),
								],
							}),
						}),
						Object(l.jsx)(b, { newTweets: r }),
					],
				});
			}
			function b(e) {
				var t = Object(s.useState)([]),
					c = Object(o.a)(t, 2),
					n = c[0],
					a = c[1],
					r = Object(s.useState)([]),
					j = Object(o.a)(r, 2),
					b = j[0],
					u = j[1];
				return (
					Object(s.useEffect)(
						function () {
							var t = Object(i.a)(e.newTweets).concat(n);
							t.length !== b.length && u(t);
						},
						[e.newTweets, b, n]
					),
					Object(s.useEffect)(
						function () {
							!(function (e) {
								var t = new XMLHttpRequest();
								(t.responseType = "json"),
									t.open("GET", "http://localhost:8000/api/tweets/"),
									(t.onload = function () {
										e(t.response, t.status);
									}),
									(t.onerror = function (t) {
										console.log(t), e({ message: "the request was an error" }, 400);
									}),
									t.send();
							})(function (e, t) {
								200 === t ? a(e) : alert("There was an error");
							});
						},
						[n]
					),
					b.map(function (e, t) {
						return Object(l.jsx)(
							d,
							{ tweet: e, className: "my-5 py-5 border bg-white text-dark" },
							"".concat(t, "-item.id")
						);
					})
				);
			}
			function u(e) {
				var t = e.tweet,
					c = e.action,
					n = Object(s.useState)(t.likes ? t.likes : 0),
					a = Object(o.a)(n, 2),
					r = a[0],
					i = a[1],
					j = Object(s.useState)(!0 === t.userLike),
					b = Object(o.a)(j, 2),
					u = b[0],
					d = b[1],
					p = e.className ? e.className : "btn btn-success btn-sm",
					O = c.display ? c.display : "Action",
					m = "like" === c.type ? "".concat(r, " ").concat(O) : O;
				return Object(l.jsx)("button", {
					className: p,
					onClick: function (e) {
						e.preventDefault(),
							"like" === c.type && (!0 === u ? (i(r - 1), d(!1)) : (i(r + 1), d(!0)));
					},
					children: m,
				});
			}
			function d(e) {
				var t = e.tweet,
					c = e.className ? e.className : "col-10 mx-auto col-md-6";
				return Object(l.jsxs)("div", {
					className: c,
					children: [
						Object(l.jsxs)("p", { children: [t.id, " - ", t.content] }),
						Object(l.jsxs)("div", {
							className: "btn btn-group",
							children: [
								Object(l.jsx)(u, { tweet: t, action: { type: "like", display: "Like" } }),
								Object(l.jsx)(u, { tweet: t, action: { type: "unlike", display: "UnLike" } }),
								Object(l.jsx)(u, { tweet: t, action: { type: "retweet", display: "Retweet" } }),
							],
						}),
					],
				});
			}
			var p = c.p + "static/media/logo.6ce24c58.svg";
			c(14);
			var O = function () {
					return Object(l.jsx)("div", {
						className: "App",
						children: Object(l.jsxs)("header", {
							className: "App-header",
							children: [
								Object(l.jsx)("img", { src: p, className: "App-logo", alt: "logo" }),
								Object(l.jsxs)("p", {
									children: [
										"Edit ",
										Object(l.jsx)("code", { children: "src/App.js" }),
										" and save to reload.",
									],
								}),
								Object(l.jsx)("div", { children: Object(l.jsx)(j, {}) }),
								Object(l.jsx)("a", {
									className: "App-link",
									href: "https://reactjs.org",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Learn React",
								}),
							],
						}),
					});
				},
				m = document.getElementById("root");
			m && r.a.render(Object(l.jsx)(n.a.StrictMode, { children: Object(l.jsx)(O, {}) }), m);
			var f = document.getElementById("tweet_lite");
			f && r.a.render(Object(l.jsx)(j, {}), f);
		},
	},
	[[15, 1, 2]],
]);
//# sourceMappingURL=main.a8675eed.chunk.js.map
