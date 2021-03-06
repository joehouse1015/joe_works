window.LineIt = window.LineIt || {},
function() {
	function t() {}

	function e(t, e) {
		this.entry = t, this.buttonType = e, this.elIframe = document.createElement("iframe"), this.params = [], this.lang = "en", this.env = "REAL"
	}

	function i(t) {
		e.call(this, t, r.BUTTON_TYPES.SHARE), this.init()
	}

	function a(t) {
		e.call(this, t, r.BUTTON_TYPES.FRIEND), this.init()
	}

	function n(t) {
		e.call(this, t, r.BUTTON_TYPES.LIKE), this.init()
	}
	var r = {
		BUTTON_TYPES: {
			SHARE: "SHARE",
			FRIEND: "FRIEND",
			LIKE: "LIKE"
		},
		IMG_SIZE: {},
		BUTTON_URL: {
			HOST: {
				REAL: "https://timeline.line.me"
			}
		}
	};
	r.BUTTON_URL[r.BUTTON_TYPES.SHARE] = "/social-plugin-widget/share?", r.BUTTON_URL[r.BUTTON_TYPES.FRIEND] = "/social-plugin-widget/friend?", r.BUTTON_URL[r.BUTTON_TYPES.LIKE] = "/social-plugin-widget/like?";
	var s = [],
	o = function() {
		var e = document.querySelectorAll(".line-it-button"),
		i = new t;
		Array.prototype.forEach.call(e, function(t) {
			if ("div" === t.tagName.toLowerCase()) {
				var e = i.makeButton(t);
				s.push(e)
			}
		})
	},
	h = document.readyState;
	"interactive" === h || "complete" === h ? window.addEventListener("load", o, !1) : document.addEventListener("DOMContentLoaded", o, !1), t.prototype.makeButton = function(t) {
		var e = t.getAttribute("data-type");
		if (e) {
			switch (e.split("-")[0].toUpperCase()) {
				case r.BUTTON_TYPES.SHARE:
				return new i(t);
				case r.BUTTON_TYPES.FRIEND:
				return new a(t);
				case r.BUTTON_TYPES.LIKE:
				return new n(t)
			}
		}
	}, e.prototype.initDefaultAttributes = function() {
		Array.prototype.forEach.call(this.entry.attributes, function(t) {
			var e = t.name.match(/^data\-(.+)$/);
			if (null != e) {
				switch (e[1]) {
					case "lang":
					this.lang = t.value, this.params.push(e[1] + "=" + encodeURIComponent(t.value));
					break;
					case "type":
					var i = t.value.split("-");
					this.params.push(e[1] + "=" + encodeURIComponent(i[0]));
					break;
					case "env":
					"BETA" !== t.value && "RC" !== t.value && "LOCAL" !== t.value || (this.env = t.value), this.params.push(e[1] + "=" + encodeURIComponent(this.env))
				}
				this.elIframe.setAttribute(t.name, t.value)
			}
		}.bind(this)), this.elIframe.setAttribute("data-line-it-id", s.length), this.elIframe.setAttribute("scrolling", "no"), this.elIframe.setAttribute("frameborder", "0"), this.elIframe.setAttribute("allowtransparency", "true"), this.params.push("id=" + s.length), this.params.push("origin=" + encodeURIComponent(location.href)), this.params.push("title=" + encodeURIComponent(document.title))
	}, e.prototype.setIframeStyle = function() {
		this.elIframe.style.width = "0px", this.elIframe.style.height = "0px", this.elIframe.style.visibility = "visible", this.elIframe.style.position = "static", this.elIframe.className = "line-it-button"
	}, e.prototype.setIframeSrc = function() {
		this.elIframe.src = r.BUTTON_URL.HOST[this.env] + r.BUTTON_URL[this.buttonType] + this.params.join("&")
	}, e.prototype.validateParam = function(t) {
		for (var e = 0; e < this.params.length; e++) {
			if (this.params[e].split("=")[0] == t) return !0
		}
	return !1
}, e.prototype.attach = function() {
	this.initDefaultAttributes(), this.setIframeStyle(), this.setIframeSrc(), this.entry.parentNode.replaceChild(this.elIframe, this.entry)
}, i.prototype = new e, i.prototype.constructor = i, i.prototype.setAdditionalParams = function() {
	var t = this.entry.getAttribute("data-url");
	t && this.params.push("url=" + encodeURIComponent(t));
	var e = this.entry.getAttribute("data-type");
	e && this.params.push("buttonType=" + encodeURIComponent(e))
}, i.prototype.init = function() {
	this.setAdditionalParams(), this.attach()
}, a.prototype = new e, a.prototype.constructor = a, a.prototype.setAdditionalParams = function() {
	var t = this.entry.getAttribute("data-lineId");
	t && this.params.push("lineId=" + encodeURIComponent(t));
	var e = this.entry.getAttribute("data-count");
	e && this.params.push("count=" + encodeURIComponent(e));
	var i = this.entry.getAttribute("data-home");
	i && this.params.push("home=" + encodeURIComponent(i))
}, a.prototype.init = function() {
	this.setAdditionalParams(), this.validateParam("lineId") && this.attach()
}, n.prototype = new e, n.prototype.constructor = n, n.prototype.setAdditionalParams = function() {
	var t = this.entry.getAttribute("data-url");
	t && this.params.push("url=" + encodeURIComponent(t));
	var e = this.entry.getAttribute("data-share");
	e && this.params.push("includeShare=" + encodeURIComponent(e));
	var i = this.entry.getAttribute("data-lineId");
	i && this.params.push("lineId=" + encodeURIComponent(i))
}, n.prototype.init = function() {
	this.setAdditionalParams(), this.validateParam("url") && this.attach()
}, null == window.LineIt.loadButton && (window.LineIt.loadButton = o, window.addEventListener("message", function(t) {
	var e = t.data,
	i = !1;
	for (var a in r.BUTTON_URL.HOST) t.origin === r.BUTTON_URL.HOST[a] && (i = !0);
		if (i && /^\{.+\}$/.test(e)) {
			var n = JSON.parse(e);
			if ("resize" === n.type) {
				var o = s[n.buttonId];
				o.elIframe.style.width = n.width + "px", o.elIframe.style.height = n.height + "px", o = null
			}
			if ("refresh" === n.type)
				for (var h = 0; h < s.length; h++) {
					var p = s[h].elIframe;
					p && h != n.buttonId && (p.src = p.src)
				}
			}
		}))
}();