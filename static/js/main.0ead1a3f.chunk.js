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
				o = (c(12), c(7)),
				i = c(2);
			function l(e) {
				!(function (e, t, c, s) {
					var n;
					s && (n = JSON.stringify(s));
					var a = new XMLHttpRequest(),
						r = "http://localhost:8000/api".concat(t);
					(a.responseType = "json"),
						a.open(e, r),
						(a.onload = function () {
							c(a.response, a.status);
						}),
						(a.onerror = function (e) {
							console.log(e), c({ message: "the request was an error" }, 400);
						}),
						a.send(n);
				})("GET", "/tweets/", e);
			}
			var j = c(0);
			function b(e) {
				var t = n.a.createRef(),
					c = Object(s.useState)([]),
					a = Object(i.a)(c, 2),
					r = a[0],
					l = a[1];
				return Object(j.jsxs)("div", {
					className: e.className,
					children: [
						Object(j.jsx)("div", {
							className: "col-12 mb-3",
							children: Object(j.jsxs)("form", {
								onSubmit: function (e) {
									e.preventDefault();
									var c = t.current.value;
									console.log(c);
									var s = Object(o.a)(r);
									s.unshift({ content: c, likes: 0, id: 1234 }), l(s), (t.current.value = "");
								},
								children: [
									Object(j.jsx)("textarea", { ref: t, required: !0, className: "form-control" }),
									Object(j.jsx)("button", {
										type: "submit",
										className: "btn btn-success my-3",
										children: "Tweet",
									}),
								],
							}),
						}),
						Object(j.jsx)(u, { newTweets: r }),
					],
				});
			}
			function u(e) {
				var t = Object(s.useState)([]),
					c = Object(i.a)(t, 2),
					n = c[0],
					a = c[1],
					r = Object(s.useState)([]),
					b = Object(i.a)(r, 2),
					u = b[0],
					d = b[1],
					O = Object(s.useState)(!1),
					m = Object(i.a)(O, 2),
					f = m[0],
					h = m[1];
				return (
					Object(s.useEffect)(
						function () {
							var t = Object(o.a)(e.newTweets).concat(n);
							t.length !== u.length && d(t);
						},
						[e.newTweets, u, n]
					),
					Object(s.useEffect)(
						function () {
							if (!1 === f) {
								l(function (e, t) {
									200 === t ? (a(e), h(!0), console.log("reload")) : alert("There was an error");
								});
							}
						},
						[n, f, h]
					),
					u.map(function (e, t) {
						return Object(j.jsx)(
							p,
							{ tweet: e, className: "my-5 py-5 border bg-white text-dark" },
							"".concat(t, "-item.id")
						);
					})
				);
			}
			function d(e) {
				var t = e.tweet,
					c = e.action,
					n = Object(s.useState)(t.likes ? t.likes : 0),
					a = Object(i.a)(n, 2),
					r = a[0],
					o = a[1],
					l = Object(s.useState)(!0 === t.userLike),
					b = Object(i.a)(l, 2),
					u = b[0],
					d = b[1],
					p = e.className ? e.className : "btn btn-success btn-sm",
					O = c.display ? c.display : "Action",
					m = "like" === c.type ? "".concat(r, " ").concat(O) : O;
				return Object(j.jsx)("button", {
					className: p,
					onClick: function (e) {
						e.preventDefault(),
							"like" === c.type && (!0 === u ? (o(r - 1), d(!1)) : (o(r + 1), d(!0)));
					},
					children: m,
				});
			}
			function p(e) {
				var t = e.tweet,
					c = e.className ? e.className : "col-10 mx-auto col-md-6";
				return Object(j.jsxs)("div", {
					className: c,
					children: [
						Object(j.jsxs)("p", { children: [t.id, " - ", t.content] }),
						Object(j.jsxs)("div", {
							className: "btn btn-group",
							children: [
								Object(j.jsx)(d, { tweet: t, action: { type: "like", display: "Like" } }),
								Object(j.jsx)(d, { tweet: t, action: { type: "unlike", display: "UnLike" } }),
							],
						}),
					],
				});
			}
			var O = c.p + "static/media/logo.6ce24c58.svg";
			c(14);
			var m = function () {
					return Object(j.jsx)("div", {
						className: "App",
						children: Object(j.jsxs)("header", {
							className: "App-header",
							children: [
								Object(j.jsx)("img", { src: O, className: "App-logo", alt: "logo" }),
								Object(j.jsxs)("p", {
									children: [
										"Edit ",
										Object(j.jsx)("code", { children: "src/App.js" }),
										" and save to reload.",
									],
								}),
								Object(j.jsx)("div", { children: Object(j.jsx)(b, {}) }),
								Object(j.jsx)("a", {
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
				f = document.getElementById("root");
			f && r.a.render(Object(j.jsx)(n.a.StrictMode, { children: Object(j.jsx)(m, {}) }), f);
			var h = document.getElementById("tweet_lite");
			h && r.a.render(Object(j.jsx)(b, {}), h);
		},
	},
	[[15, 1, 2]],
]);
//# sourceMappingURL=main.0ead1a3f.chunk.js.map
