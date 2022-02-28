"use strict";
function burgerMenu() {
  var e = document.querySelector(".burger"),
    t = document.querySelector(".menu__list");
  e.addEventListener("click", function () {
    t.classList.contains("active")
      ? (t.classList.remove("active"), e.classList.remove("active-burger"))
      : (t.classList.add("active"), e.classList.add("active-burger"));
  }),
    window.addEventListener("resize", function () {
      window.innerWidth > 1050 &&
        (t.classList.remove("active"), e.classList.remove("active-burger"));
    });
}
function fixedNav() {
  var e = document.querySelector("nav");
  window.scrollY >= 1
    ? e.classList.add("fixed__nav")
    : e.classList.remove("fixed__nav");
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */ burgerMenu(),
  window.addEventListener("scroll", fixedNav),
  (function (e, t) {
    "object" ==
      ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
    "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).SmoothScroll = t());
  })(void 0, function () {
    var e = {
        ignore: "[data-scroll-ignore]",
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        speedAsDuration: !1,
        durationMax: null,
        durationMin: null,
        clip: !0,
        offset: 0,
        easing: "easeInOutCubic",
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0,
      },
      t = function () {
        var e = {};
        return (
          Array.prototype.forEach.call(arguments, function (t) {
            for (var n in t) {
              if (!t.hasOwnProperty(n)) return;
              e[n] = t[n];
            }
          }),
          e
        );
      },
      n = function (e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (
          var t,
            n = String(e),
            o = n.length,
            r = -1,
            i = "",
            a = n.charCodeAt(0);
          ++r < o;

        ) {
          if (0 === (t = n.charCodeAt(r)))
            throw new InvalidCharacterError(
              "Invalid character: the input contains U+0000."
            );
          i +=
            (t >= 1 && t <= 31) ||
            127 == t ||
            (0 === r && t >= 48 && t <= 57) ||
            (1 === r && t >= 48 && t <= 57 && 45 === a)
              ? "\\" + t.toString(16) + " "
              : t >= 128 ||
                45 === t ||
                95 === t ||
                (t >= 48 && t <= 57) ||
                (t >= 65 && t <= 90) ||
                (t >= 97 && t <= 122)
              ? n.charAt(r)
              : "\\" + n.charAt(r);
        }
        return "#" + i;
      },
      o = function () {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      },
      r = function (e, t, n) {
        0 === e && document.body.focus(),
          n ||
            (e.focus(),
            document.activeElement !== e &&
              (e.setAttribute("tabindex", "-1"),
              e.focus(),
              (e.style.outline = "none")),
            window.scrollTo(0, t));
      },
      i = function (e, t, n, o) {
        if (t.emitEvents && "function" == typeof window.CustomEvent) {
          var r = new CustomEvent(e, {
            bubbles: !0,
            detail: { anchor: n, toggle: o },
          });
          document.dispatchEvent(r);
        }
      };
    return function (a, c) {
      var s,
        u,
        l,
        d,
        f = {
          cancelScroll: function (e) {
            cancelAnimationFrame(d), (d = null), e || i("scrollCancel", s);
          },
        };
      f.animateScroll = function (n, a, c) {
        f.cancelScroll();
        var u = t(s || e, c || {}),
          m = "[object Number]" === Object.prototype.toString.call(n),
          h = m || !n.tagName ? null : n;
        if (m || h) {
          var p = window.pageYOffset;
          u.header && !l && (l = document.querySelector(u.header));
          var w,
            y,
            v,
            g = (function (e) {
              return e
                ? ((t = e),
                  parseInt(window.getComputedStyle(t).height, 10) + e.offsetTop)
                : 0;
              var t;
            })(l),
            S = m
              ? n
              : (function (e, t, n, r) {
                  var i = 0;
                  if (e.offsetParent)
                    do {
                      (i += e.offsetTop), (e = e.offsetParent);
                    } while (e);
                  return (
                    (i = Math.max(i - t - n, 0)),
                    r && (i = Math.min(i, o() - window.innerHeight)),
                    i
                  );
                })(
                  h,
                  g,
                  parseInt(
                    "function" == typeof u.offset ? u.offset(n, a) : u.offset,
                    10
                  ),
                  u.clip
                ),
            b = S - p,
            E = o(),
            L = 0,
            O = (function (e, t) {
              var n = t.speedAsDuration
                ? t.speed
                : Math.abs((e / 1e3) * t.speed);
              return t.durationMax && n > t.durationMax
                ? t.durationMax
                : t.durationMin && n < t.durationMin
                ? t.durationMin
                : parseInt(n, 10);
            })(b, u);
          0 === window.pageYOffset && window.scrollTo(0, 0),
            (function (e, t, n) {
              t ||
                (history.pushState &&
                  n.updateURL &&
                  history.pushState(
                    { smoothScroll: JSON.stringify(n), anchor: e.id },
                    document.title,
                    e === document.documentElement ? "#top" : "#" + e.id
                  ));
            })(n, m, u),
            "matchMedia" in window &&
            window.matchMedia("(prefers-reduced-motion)").matches
              ? r(n, Math.floor(S), !1)
              : (i("scrollStart", u, n, a),
                f.cancelScroll(!0),
                window.requestAnimationFrame(function e(t) {
                  w || (w = t),
                    (L += t - w),
                    (v =
                      p +
                      b *
                        (function (e, t) {
                          var n;
                          return (
                            "easeInQuad" === e.easing && (n = t * t),
                            "easeOutQuad" === e.easing && (n = t * (2 - t)),
                            "easeInOutQuad" === e.easing &&
                              (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1),
                            "easeInCubic" === e.easing && (n = t * t * t),
                            "easeOutCubic" === e.easing &&
                              (n = --t * t * t + 1),
                            "easeInOutCubic" === e.easing &&
                              (n =
                                t < 0.5
                                  ? 4 * t * t * t
                                  : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
                            "easeInQuart" === e.easing && (n = t * t * t * t),
                            "easeOutQuart" === e.easing &&
                              (n = 1 - --t * t * t * t),
                            "easeInOutQuart" === e.easing &&
                              (n =
                                t < 0.5
                                  ? 8 * t * t * t * t
                                  : 1 - 8 * --t * t * t * t),
                            "easeInQuint" === e.easing &&
                              (n = t * t * t * t * t),
                            "easeOutQuint" === e.easing &&
                              (n = 1 + --t * t * t * t * t),
                            "easeInOutQuint" === e.easing &&
                              (n =
                                t < 0.5
                                  ? 16 * t * t * t * t * t
                                  : 1 + 16 * --t * t * t * t * t),
                            e.customEasing && (n = e.customEasing(t)),
                            n || t
                          );
                        })(u, (y = (y = 0 === O ? 0 : L / O) > 1 ? 1 : y))),
                    window.scrollTo(0, Math.floor(v)),
                    (function (e, t) {
                      var o = window.pageYOffset;
                      if (
                        e == t ||
                        o == t ||
                        (p < t && window.innerHeight + o) >= E
                      )
                        return (
                          f.cancelScroll(!0),
                          r(n, t, m),
                          i("scrollStop", u, n, a),
                          (w = null),
                          (d = null),
                          !0
                        );
                    })(v, S) ||
                      ((d = window.requestAnimationFrame(e)), (w = t));
                }));
        }
      };
      var m = function (e) {
          if (
            !e.defaultPrevented &&
            !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
            "closest" in e.target &&
            (u = e.target.closest(a)) &&
            "a" === u.tagName.toLowerCase() &&
            !e.target.closest(s.ignore) &&
            u.hostname === window.location.hostname &&
            u.pathname === window.location.pathname &&
            /#/.test(u.href)
          ) {
            var t, o;
            try {
              t = n(decodeURIComponent(u.hash));
            } catch (e) {
              t = n(u.hash);
            }
            if ("#" === t) {
              if (!s.topOnEmptyHash) return;
              o = document.documentElement;
            } else o = document.querySelector(t);
            (o = o || "#top" !== t ? o : document.documentElement) &&
              (e.preventDefault(),
              (function (e) {
                if (history.replaceState && e.updateURL && !history.state) {
                  var t = window.location.hash;
                  (t = t || ""),
                    history.replaceState(
                      {
                        smoothScroll: JSON.stringify(e),
                        anchor: t || window.pageYOffset,
                      },
                      document.title,
                      t || window.location.href
                    );
                }
              })(s),
              f.animateScroll(o, u));
          }
        },
        h = function () {
          if (
            null !== history.state &&
            history.state.smoothScroll &&
            history.state.smoothScroll === JSON.stringify(s)
          ) {
            var e = history.state.anchor;
            ("string" == typeof e &&
              e &&
              !(e = document.querySelector(n(history.state.anchor)))) ||
              f.animateScroll(e, null, { updateURL: !1 });
          }
        };
      return (
        (f.destroy = function () {
          s &&
            (document.removeEventListener("click", m, !1),
            window.removeEventListener("popstate", h, !1),
            f.cancelScroll(),
            (s = null),
            (u = null),
            (l = null),
            (d = null));
        }),
        (function () {
          if (
            !(
              "querySelector" in document &&
              "addEventListener" in window &&
              "requestAnimationFrame" in window &&
              "closest" in window.Element.prototype
            )
          )
            throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
          f.destroy(),
            (s = t(e, c || {})),
            (l = s.header ? document.querySelector(s.header) : null),
            document.addEventListener("click", m, !1),
            s.updateURL &&
              s.popstate &&
              window.addEventListener("popstate", h, !1);
        })(),
        f
      );
    };
  }),
  new SmoothScroll('a[href*="#"]');
