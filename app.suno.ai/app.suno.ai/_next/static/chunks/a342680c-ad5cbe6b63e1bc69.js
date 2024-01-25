"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [603],
  {
    97131: function (e) {
      var t,
        r,
        i,
        o,
        n,
        s,
        a,
        c,
        p,
        u,
        _,
        h,
        l,
        f,
        d,
        g,
        m,
        y,
        v = { DEBUG: !1, LIB_VERSION: "2.48.1" };
      if ("undefined" == typeof window) {
        var b = { hostname: "" };
        g = {
          navigator: { userAgent: "" },
          document: { location: b, referrer: "" },
          screen: { width: 0, height: 0 },
          location: b,
        };
      } else g = window;
      var k = Array.prototype,
        x = Function.prototype,
        S = Object.prototype,
        w = k.slice,
        q = S.toString,
        E = S.hasOwnProperty,
        O = g.console,
        I = g.navigator,
        D = g.document,
        A = g.opera,
        T = g.screen,
        B = I.userAgent,
        U = x.bind,
        $ = k.forEach,
        P = k.indexOf,
        C = k.map,
        N = Array.isArray,
        j = {},
        M = {
          trim: function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
        },
        F = {
          log: function () {
            if (v.DEBUG && !M.isUndefined(O) && O)
              try {
                O.log.apply(O, arguments);
              } catch (e) {
                M.each(arguments, function (e) {
                  O.log(e);
                });
              }
          },
          warn: function () {
            if (v.DEBUG && !M.isUndefined(O) && O) {
              var e = ["Mixpanel warning:"].concat(M.toArray(arguments));
              try {
                O.warn.apply(O, e);
              } catch (t) {
                M.each(e, function (e) {
                  O.warn(e);
                });
              }
            }
          },
          error: function () {
            if (v.DEBUG && !M.isUndefined(O) && O) {
              var e = ["Mixpanel error:"].concat(M.toArray(arguments));
              try {
                O.error.apply(O, e);
              } catch (t) {
                M.each(e, function (e) {
                  O.error(e);
                });
              }
            }
          },
          critical: function () {
            if (!M.isUndefined(O) && O) {
              var e = ["Mixpanel error:"].concat(M.toArray(arguments));
              try {
                O.error.apply(O, e);
              } catch (t) {
                M.each(e, function (e) {
                  O.error(e);
                });
              }
            }
          },
        },
        R = function (e, t) {
          return function () {
            return (
              (arguments[0] = "[" + t + "] " + arguments[0]),
              e.apply(F, arguments)
            );
          };
        },
        z = function (e) {
          return {
            log: R(F.log, e),
            error: R(F.error, e),
            critical: R(F.critical, e),
          };
        };
      (M.bind = function (e, t) {
        var r, i;
        if (U && e.bind === U) return U.apply(e, w.call(arguments, 1));
        if (!M.isFunction(e)) throw TypeError();
        return (
          (r = w.call(arguments, 2)),
          (i = function () {
            if (!(this instanceof i))
              return e.apply(t, r.concat(w.call(arguments)));
            var o = {};
            o.prototype = e.prototype;
            var n = new o();
            o.prototype = null;
            var s = e.apply(n, r.concat(w.call(arguments)));
            return Object(s) === s ? s : n;
          })
        );
      }),
        (M.each = function (e, t, r) {
          if (null != e) {
            if ($ && e.forEach === $) e.forEach(t, r);
            else if (e.length === +e.length) {
              for (var i = 0, o = e.length; i < o; i++)
                if (i in e && t.call(r, e[i], i, e) === j) return;
            } else
              for (var n in e)
                if (E.call(e, n) && t.call(r, e[n], n, e) === j) return;
          }
        }),
        (M.extend = function (e) {
          return (
            M.each(w.call(arguments, 1), function (t) {
              for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
            }),
            e
          );
        }),
        (M.isArray =
          N ||
          function (e) {
            return "[object Array]" === q.call(e);
          }),
        (M.isFunction = function (e) {
          try {
            return /^\s*\bfunction\b/.test(e);
          } catch (e) {
            return !1;
          }
        }),
        (M.isArguments = function (e) {
          return !!(e && E.call(e, "callee"));
        }),
        (M.toArray = function (e) {
          return e
            ? e.toArray
              ? e.toArray()
              : M.isArray(e) || M.isArguments(e)
              ? w.call(e)
              : M.values(e)
            : [];
        }),
        (M.map = function (e, t, r) {
          if (C && e.map === C) return e.map(t, r);
          var i = [];
          return (
            M.each(e, function (e) {
              i.push(t.call(r, e));
            }),
            i
          );
        }),
        (M.keys = function (e) {
          var t = [];
          return (
            null === e ||
              M.each(e, function (e, r) {
                t[t.length] = r;
              }),
            t
          );
        }),
        (M.values = function (e) {
          var t = [];
          return (
            null === e ||
              M.each(e, function (e) {
                t[t.length] = e;
              }),
            t
          );
        }),
        (M.include = function (e, t) {
          var r = !1;
          return null === e
            ? r
            : P && e.indexOf === P
            ? -1 != e.indexOf(t)
            : (M.each(e, function (e) {
                if (r || (r = e === t)) return j;
              }),
              r);
        }),
        (M.includes = function (e, t) {
          return -1 !== e.indexOf(t);
        }),
        (M.inherit = function (e, t) {
          return (
            (e.prototype = new t()),
            (e.prototype.constructor = e),
            (e.superclass = t.prototype),
            e
          );
        }),
        (M.isObject = function (e) {
          return e === Object(e) && !M.isArray(e);
        }),
        (M.isEmptyObject = function (e) {
          if (M.isObject(e)) {
            for (var t in e) if (E.call(e, t)) return !1;
            return !0;
          }
          return !1;
        }),
        (M.isUndefined = function (e) {
          return void 0 === e;
        }),
        (M.isString = function (e) {
          return "[object String]" == q.call(e);
        }),
        (M.isDate = function (e) {
          return "[object Date]" == q.call(e);
        }),
        (M.isNumber = function (e) {
          return "[object Number]" == q.call(e);
        }),
        (M.isElement = function (e) {
          return !!(e && 1 === e.nodeType);
        }),
        (M.encodeDates = function (e) {
          return (
            M.each(e, function (t, r) {
              M.isDate(t)
                ? (e[r] = M.formatDate(t))
                : M.isObject(t) && (e[r] = M.encodeDates(t));
            }),
            e
          );
        }),
        (M.timestamp = function () {
          return (
            (Date.now =
              Date.now ||
              function () {
                return +new Date();
              }),
            Date.now()
          );
        }),
        (M.formatDate = function (e) {
          function t(e) {
            return e < 10 ? "0" + e : e;
          }
          return (
            e.getUTCFullYear() +
            "-" +
            t(e.getUTCMonth() + 1) +
            "-" +
            t(e.getUTCDate()) +
            "T" +
            t(e.getUTCHours()) +
            ":" +
            t(e.getUTCMinutes()) +
            ":" +
            t(e.getUTCSeconds())
          );
        }),
        (M.strip_empty_properties = function (e) {
          var t = {};
          return (
            M.each(e, function (e, r) {
              M.isString(e) && e.length > 0 && (t[r] = e);
            }),
            t
          );
        }),
        (M.truncate = function (e, t) {
          var r;
          return (
            "string" == typeof e
              ? (r = e.slice(0, t))
              : M.isArray(e)
              ? ((r = []),
                M.each(e, function (e) {
                  r.push(M.truncate(e, t));
                }))
              : M.isObject(e)
              ? ((r = {}),
                M.each(e, function (e, i) {
                  r[i] = M.truncate(e, t);
                }))
              : (r = e),
            r
          );
        }),
        (M.JSONEncode = function (e) {
          var t = function (e) {
              var t =
                  /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                r = {
                  "\b": "\\b",
                  "	": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\",
                };
              return (
                (t.lastIndex = 0),
                t.test(e)
                  ? '"' +
                    e.replace(t, function (e) {
                      var t = r[e];
                      return "string" == typeof t
                        ? t
                        : "\\u" +
                            ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                    }) +
                    '"'
                  : '"' + e + '"'
              );
            },
            r = function (e, i) {
              var o = "",
                n = 0,
                s = "",
                a = "",
                c = 0,
                p = o,
                u = [],
                _ = i[e];
              switch (
                (_ &&
                  "object" == typeof _ &&
                  "function" == typeof _.toJSON &&
                  (_ = _.toJSON(e)),
                typeof _)
              ) {
                case "string":
                  return t(_);
                case "number":
                  return isFinite(_) ? String(_) : "null";
                case "boolean":
                case "null":
                  return String(_);
                case "object":
                  if (!_) return "null";
                  if (
                    ((o += "    "), (u = []), "[object Array]" === q.apply(_))
                  ) {
                    for (n = 0, c = _.length; n < c; n += 1)
                      u[n] = r(n, _) || "null";
                    return (
                      (a =
                        0 === u.length
                          ? "[]"
                          : o
                          ? "[\n" + o + u.join(",\n" + o) + "\n" + p + "]"
                          : "[" + u.join(",") + "]"),
                      (o = p),
                      a
                    );
                  }
                  for (s in _)
                    E.call(_, s) &&
                      (a = r(s, _)) &&
                      u.push(t(s) + (o ? ": " : ":") + a);
                  return (
                    (a =
                      0 === u.length
                        ? "{}"
                        : o
                        ? "{" + u.join(",") + p + "}"
                        : "{" + u.join(",") + "}"),
                    (o = p),
                    a
                  );
              }
            };
          return r("", { "": e });
        }),
        (M.JSONDecode =
          ((n = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	",
          }),
          (s = function (e) {
            var r = SyntaxError(e);
            throw ((r.at = t), (r.text = i), r);
          }),
          (a = function (e) {
            return (
              e && e !== r && s("Expected '" + e + "' instead of '" + r + "'"),
              (r = i.charAt(t)),
              (t += 1),
              r
            );
          }),
          (c = function () {
            var e,
              t = "";
            for ("-" === r && ((t = "-"), a("-")); r >= "0" && r <= "9"; )
              (t += r), a();
            if ("." === r) for (t += "."; a() && r >= "0" && r <= "9"; ) t += r;
            if ("e" === r || "E" === r)
              for (
                t += r, a(), ("-" === r || "+" === r) && ((t += r), a());
                r >= "0" && r <= "9";

              )
                (t += r), a();
            if (isFinite((e = +t))) return e;
            s("Bad number");
          }),
          (p = function () {
            var e,
              t,
              i,
              o = "";
            if ('"' === r)
              for (; a(); ) {
                if ('"' === r) return a(), o;
                if ("\\" === r) {
                  if ((a(), "u" === r)) {
                    for (
                      t = 0, i = 0;
                      t < 4 && isFinite((e = parseInt(a(), 16)));
                      t += 1
                    )
                      i = 16 * i + e;
                    o += String.fromCharCode(i);
                  } else if ("string" == typeof n[r]) o += n[r];
                  else break;
                } else o += r;
              }
            s("Bad string");
          }),
          (u = function () {
            for (; r && r <= " "; ) a();
          }),
          (_ = function () {
            switch (r) {
              case "t":
                return a("t"), a("r"), a("u"), a("e"), !0;
              case "f":
                return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
              case "n":
                return a("n"), a("u"), a("l"), a("l"), null;
            }
            s('Unexpected "' + r + '"');
          }),
          (h = function () {
            var e = [];
            if ("[" === r) {
              if ((a("["), u(), "]" === r)) return a("]"), e;
              for (; r; ) {
                if ((e.push(o()), u(), "]" === r)) return a("]"), e;
                a(","), u();
              }
            }
            s("Bad array");
          }),
          (l = function () {
            var e,
              t = {};
            if ("{" === r) {
              if ((a("{"), u(), "}" === r)) return a("}"), t;
              for (; r; ) {
                if (
                  ((e = p()),
                  u(),
                  a(":"),
                  Object.hasOwnProperty.call(t, e) &&
                    s('Duplicate key "' + e + '"'),
                  (t[e] = o()),
                  u(),
                  "}" === r)
                )
                  return a("}"), t;
                a(","), u();
              }
            }
            s("Bad object");
          }),
          (o = function () {
            switch ((u(), r)) {
              case "{":
                return l();
              case "[":
                return h();
              case '"':
                return p();
              case "-":
                return c();
              default:
                return r >= "0" && r <= "9" ? c() : _();
            }
          }),
          function (e) {
            var n;
            return (
              (i = e),
              (t = 0),
              (r = " "),
              (n = o()),
              u(),
              r && s("Syntax error"),
              n
            );
          })),
        (M.base64Encode = function (e) {
          var t,
            r,
            i,
            o,
            n,
            s =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            c = 0,
            p = "",
            u = [];
          if (!e) return e;
          e = M.utf8Encode(e);
          do
            (t =
              ((n =
                (e.charCodeAt(a++) << 16) |
                (e.charCodeAt(a++) << 8) |
                e.charCodeAt(a++)) >>
                18) &
              63),
              (r = (n >> 12) & 63),
              (i = (n >> 6) & 63),
              (o = 63 & n),
              (u[c++] = s.charAt(t) + s.charAt(r) + s.charAt(i) + s.charAt(o));
          while (a < e.length);
          switch (((p = u.join("")), e.length % 3)) {
            case 1:
              p = p.slice(0, -2) + "==";
              break;
            case 2:
              p = p.slice(0, -1) + "=";
          }
          return p;
        }),
        (M.utf8Encode = function (e) {
          e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
          var t,
            r,
            i,
            o = "",
            n = 0;
          for (i = 0, t = r = 0, n = e.length; i < n; i++) {
            var s = e.charCodeAt(i),
              a = null;
            s < 128
              ? r++
              : (a =
                  s > 127 && s < 2048
                    ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                    : String.fromCharCode(
                        (s >> 12) | 224,
                        ((s >> 6) & 63) | 128,
                        (63 & s) | 128
                      )),
              null !== a &&
                (r > t && (o += e.substring(t, r)), (o += a), (t = r = i + 1));
          }
          return r > t && (o += e.substring(t, e.length)), o;
        }),
        (M.UUID =
          ((f = function () {
            var e,
              t = 1 * new Date();
            if (g.performance && g.performance.now) e = g.performance.now();
            else for (e = 0; t == 1 * new Date(); ) e++;
            return t.toString(16) + Math.floor(e).toString(16);
          }),
          (d = function () {
            var e,
              t,
              r = [],
              i = 0;
            function o(e, t) {
              var i,
                o = 0;
              for (i = 0; i < t.length; i++) o |= r[i] << (8 * i);
              return e ^ o;
            }
            for (e = 0; e < B.length; e++)
              (t = B.charCodeAt(e)),
                r.unshift(255 & t),
                r.length >= 4 && ((i = o(i, r)), (r = []));
            return r.length > 0 && (i = o(i, r)), i.toString(16);
          }),
          function () {
            var e = (T.height * T.width).toString(16);
            return (
              f() +
              "-" +
              Math.random().toString(16).replace(".", "") +
              "-" +
              d() +
              "-" +
              e +
              "-" +
              f()
            );
          }));
      var L = [
        "ahrefsbot",
        "baiduspider",
        "bingbot",
        "bingpreview",
        "chrome-lighthouse",
        "facebookexternal",
        "petalbot",
        "pinterest",
        "screaming frog",
        "yahoo! slurp",
        "yandexbot",
        "adsbot-google",
        "apis-google",
        "duplexweb-google",
        "feedfetcher-google",
        "google favicon",
        "google web preview",
        "google-read-aloud",
        "googlebot",
        "googleweblight",
        "mediapartners-google",
        "storebot-google",
      ];
      (M.isBlockedUA = function (e) {
        var t;
        for (t = 0, e = e.toLowerCase(); t < L.length; t++)
          if (-1 !== e.indexOf(L[t])) return !0;
        return !1;
      }),
        (M.HTTPBuildQuery = function (e, t) {
          var r,
            i,
            o = [];
          return (
            M.isUndefined(t) && (t = "&"),
            M.each(e, function (e, t) {
              (r = encodeURIComponent(e.toString())),
                (i = encodeURIComponent(t)),
                (o[o.length] = i + "=" + r);
            }),
            o.join(t)
          );
        }),
        (M.getQueryParam = function (e, t) {
          var r = RegExp(
            "[\\?&]" +
              (t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")) +
              "=([^&#]*)"
          ).exec(e);
          if (null === r || (r && "string" != typeof r[1] && r[1].length))
            return "";
          var i = r[1];
          try {
            i = decodeURIComponent(i);
          } catch (e) {
            F.error("Skipping decoding for malformed query param: " + i);
          }
          return i.replace(/\+/g, " ");
        }),
        (M.cookie = {
          get: function (e) {
            for (
              var t = e + "=", r = D.cookie.split(";"), i = 0;
              i < r.length;
              i++
            ) {
              for (var o = r[i]; " " == o.charAt(0); )
                o = o.substring(1, o.length);
              if (0 === o.indexOf(t))
                return decodeURIComponent(o.substring(t.length, o.length));
            }
            return null;
          },
          parse: function (e) {
            var t;
            try {
              t = M.JSONDecode(M.cookie.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set_seconds: function (e, t, r, i, o, n, s) {
            var a = "",
              c = "",
              p = "";
            if (s) a = "; domain=" + s;
            else if (i) {
              var u = Y(D.location.hostname);
              a = u ? "; domain=." + u : "";
            }
            if (r) {
              var _ = new Date();
              _.setTime(_.getTime() + 1e3 * r),
                (c = "; expires=" + _.toGMTString());
            }
            n && ((o = !0), (p = "; SameSite=None")),
              o && (p += "; secure"),
              (D.cookie =
                e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p);
          },
          set: function (e, t, r, i, o, n, s) {
            var a = "",
              c = "",
              p = "";
            if (s) a = "; domain=" + s;
            else if (i) {
              var u = Y(D.location.hostname);
              a = u ? "; domain=." + u : "";
            }
            if (r) {
              var _ = new Date();
              _.setTime(_.getTime() + 864e5 * r),
                (c = "; expires=" + _.toGMTString());
            }
            n && ((o = !0), (p = "; SameSite=None")), o && (p += "; secure");
            var h = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p;
            return (D.cookie = h), h;
          },
          remove: function (e, t, r) {
            M.cookie.set(e, "", -1, t, !1, !1, r);
          },
        });
      var J = null,
        Q = function (e, t) {
          if (null !== J && !t) return J;
          var r = !0;
          try {
            e = e || window.localStorage;
            var i = "__mplss_" + V(8);
            e.setItem(i, "xyz"),
              "xyz" !== e.getItem(i) && (r = !1),
              e.removeItem(i);
          } catch (e) {
            r = !1;
          }
          return (J = r), r;
        };
      (M.localStorage = {
        is_supported: function (e) {
          var t = Q(null, e);
          return (
            t ||
              F.error("localStorage unsupported; falling back to cookie store"),
            t
          );
        },
        error: function (e) {
          F.error("localStorage error: " + e);
        },
        get: function (e) {
          try {
            return window.localStorage.getItem(e);
          } catch (e) {
            M.localStorage.error(e);
          }
          return null;
        },
        parse: function (e) {
          try {
            return M.JSONDecode(M.localStorage.get(e)) || {};
          } catch (e) {}
          return null;
        },
        set: function (e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch (e) {
            M.localStorage.error(e);
          }
        },
        remove: function (e) {
          try {
            window.localStorage.removeItem(e);
          } catch (e) {
            M.localStorage.error(e);
          }
        },
      }),
        (M.register_event = (function () {
          function e(t) {
            return (
              t &&
                ((t.preventDefault = e.preventDefault),
                (t.stopPropagation = e.stopPropagation)),
              t
            );
          }
          return (
            (e.preventDefault = function () {
              this.returnValue = !1;
            }),
            (e.stopPropagation = function () {
              this.cancelBubble = !0;
            }),
            function (t, r, i, o, n) {
              if (!t) {
                F.error("No valid element provided to register_event");
                return;
              }
              if (t.addEventListener && !o) t.addEventListener(r, i, !!n);
              else {
                var s = "on" + r,
                  a = t[s];
                t[s] = function (r) {
                  if ((r = r || e(window.event))) {
                    var o,
                      n,
                      s = !0;
                    return (
                      M.isFunction(a) && (o = a(r)),
                      (n = i.call(t, r)),
                      (!1 === o || !1 === n) && (s = !1),
                      s
                    );
                  }
                };
              }
            }
          );
        })());
      var H = RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
      M.dom_query = (function () {
        function e(e) {
          return e.all ? e.all : e.getElementsByTagName("*");
        }
        var t = /[\t\r\n]/g;
        function r(r) {
          if (!D.getElementsByTagName) return [];
          var i = r.split(" "),
            o = [D];
          for (f = 0; f < i.length; f++) {
            if (
              (p = i[f].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") >
              -1
            ) {
              _ = (u = p.split("#"))[0];
              var n = u[1],
                s = D.getElementById(n);
              if (!s || (_ && s.nodeName.toLowerCase() != _)) return [];
              o = [s];
              continue;
            }
            if (p.indexOf(".") > -1) {
              _ = (u = p.split("."))[0];
              var a = u[1];
              for (_ || (_ = "*"), h = [], l = 0, d = 0; d < o.length; d++)
                for (
                  g = 0, m = "*" == _ ? e(o[d]) : o[d].getElementsByTagName(_);
                  g < m.length;
                  g++
                )
                  h[l++] = m[g];
              for (d = 0, o = [], y = 0; d < h.length; d++)
                h[d].className &&
                  M.isString(h[d].className) &&
                  (" " + h[d].className + " ")
                    .replace(t, " ")
                    .indexOf(" " + a + " ") >= 0 &&
                  (o[y++] = h[d]);
              continue;
            }
            var c = p.match(H);
            if (c) {
              _ = c[1];
              var p,
                u,
                _,
                h,
                l,
                f,
                d,
                g,
                m,
                y,
                v,
                b = c[2],
                k = c[3],
                x = c[4];
              for (_ || (_ = "*"), h = [], l = 0, d = 0; d < o.length; d++)
                for (
                  g = 0, m = "*" == _ ? e(o[d]) : o[d].getElementsByTagName(_);
                  g < m.length;
                  g++
                )
                  h[l++] = m[g];
              switch (((o = []), (y = 0), k)) {
                case "=":
                  v = function (e) {
                    return e.getAttribute(b) == x;
                  };
                  break;
                case "~":
                  v = function (e) {
                    return e.getAttribute(b).match(RegExp("\\b" + x + "\\b"));
                  };
                  break;
                case "|":
                  v = function (e) {
                    return e.getAttribute(b).match(RegExp("^" + x + "-?"));
                  };
                  break;
                case "^":
                  v = function (e) {
                    return 0 === e.getAttribute(b).indexOf(x);
                  };
                  break;
                case "$":
                  v = function (e) {
                    return (
                      e.getAttribute(b).lastIndexOf(x) ==
                      e.getAttribute(b).length - x.length
                    );
                  };
                  break;
                case "*":
                  v = function (e) {
                    return e.getAttribute(b).indexOf(x) > -1;
                  };
                  break;
                default:
                  v = function (e) {
                    return e.getAttribute(b);
                  };
              }
              for (d = 0, o = [], y = 0; d < h.length; d++)
                v(h[d]) && (o[y++] = h[d]);
              continue;
            }
            for (d = 0, _ = p, h = [], l = 0; d < o.length; d++)
              for (g = 0, m = o[d].getElementsByTagName(_); g < m.length; g++)
                h[l++] = m[g];
            o = h;
          }
          return o;
        }
        return function (e) {
          return M.isElement(e)
            ? [e]
            : M.isObject(e) && !M.isUndefined(e.length)
            ? e
            : r.call(this, e);
        };
      })();
      var K = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_content",
          "utm_term",
        ],
        G = [
          "dclid",
          "fbclid",
          "gclid",
          "ko_click_id",
          "li_fat_id",
          "msclkid",
          "ttclid",
          "twclid",
          "wbraid",
        ];
      M.info = {
        campaignParams: function (e) {
          var t = "",
            r = {};
          return (
            M.each(K, function (i) {
              (t = M.getQueryParam(D.URL, i)).length
                ? (r[i] = t)
                : void 0 !== e && (r[i] = e);
            }),
            r
          );
        },
        clickParams: function () {
          var e = "",
            t = {};
          return (
            M.each(G, function (r) {
              (e = M.getQueryParam(D.URL, r)).length && (t[r] = e);
            }),
            t
          );
        },
        marketingParams: function () {
          return M.extend(M.info.campaignParams(), M.info.clickParams());
        },
        searchEngine: function (e) {
          return 0 === e.search("https?://(.*)google.([^/?]*)")
            ? "google"
            : 0 === e.search("https?://(.*)bing.com")
            ? "bing"
            : 0 === e.search("https?://(.*)yahoo.com")
            ? "yahoo"
            : 0 === e.search("https?://(.*)duckduckgo.com")
            ? "duckduckgo"
            : null;
        },
        searchInfo: function (e) {
          var t = M.info.searchEngine(e),
            r = {};
          if (null !== t) {
            r.$search_engine = t;
            var i = M.getQueryParam(e, "yahoo" != t ? "q" : "p");
            i.length && (r.mp_keyword = i);
          }
          return r;
        },
        browser: function (e, t, r) {
          if (((t = t || ""), r || M.includes(e, " OPR/")))
            return M.includes(e, "Mini") ? "Opera Mini" : "Opera";
          if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
          if (M.includes(e, "IEMobile") || M.includes(e, "WPDesktop"))
            return "Internet Explorer Mobile";
          if (M.includes(e, "SamsungBrowser/")) return "Samsung Internet";
          if (M.includes(e, "Edge") || M.includes(e, "Edg/"))
            return "Microsoft Edge";
          if (M.includes(e, "FBIOS")) return "Facebook Mobile";
          if (M.includes(e, "Chrome")) return "Chrome";
          else if (M.includes(e, "CriOS")) return "Chrome iOS";
          else if (M.includes(e, "UCWEB") || M.includes(e, "UCBrowser"))
            return "UC Browser";
          else if (M.includes(e, "FxiOS")) return "Firefox iOS";
          else if (M.includes(t, "Apple"))
            return M.includes(e, "Mobile") ? "Mobile Safari" : "Safari";
          else if (M.includes(e, "Android")) return "Android Mobile";
          else if (M.includes(e, "Konqueror")) return "Konqueror";
          else if (M.includes(e, "Firefox")) return "Firefox";
          else if (M.includes(e, "MSIE") || M.includes(e, "Trident/"))
            return "Internet Explorer";
          else if (M.includes(e, "Gecko")) return "Mozilla";
          else return "";
        },
        browserVersion: function (e, t, r) {
          var i = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/,
          }[M.info.browser(e, t, r)];
          if (void 0 === i) return null;
          var o = e.match(i);
          return o ? parseFloat(o[o.length - 2]) : null;
        },
        os: function () {
          if (/Windows/i.test(B))
            return /Phone/.test(B) || /WPDesktop/.test(B)
              ? "Windows Phone"
              : "Windows";
          if (/(iPhone|iPad|iPod)/.test(B)) return "iOS";
          if (/Android/.test(B)) return "Android";
          if (/(BlackBerry|PlayBook|BB10)/i.test(B)) return "BlackBerry";
          if (/Mac/i.test(B)) return "Mac OS X";
          if (/Linux/.test(B)) return "Linux";
          if (/CrOS/.test(B)) return "Chrome OS";
          else return "";
        },
        device: function (e) {
          return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
            ? "Windows Phone"
            : /iPad/.test(e)
            ? "iPad"
            : /iPod/.test(e)
            ? "iPod Touch"
            : /iPhone/.test(e)
            ? "iPhone"
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? "BlackBerry"
            : /Android/.test(e)
            ? "Android"
            : "";
        },
        referringDomain: function (e) {
          var t = e.split("/");
          return t.length >= 3 ? t[2] : "";
        },
        properties: function () {
          return M.extend(
            M.strip_empty_properties({
              $os: M.info.os(),
              $browser: M.info.browser(B, I.vendor, A),
              $referrer: D.referrer,
              $referring_domain: M.info.referringDomain(D.referrer),
              $device: M.info.device(B),
            }),
            {
              $current_url: g.location.href,
              $browser_version: M.info.browserVersion(B, I.vendor, A),
              $screen_height: T.height,
              $screen_width: T.width,
              mp_lib: "web",
              $lib_version: v.LIB_VERSION,
              $insert_id: V(),
              time: M.timestamp() / 1e3,
            }
          );
        },
        people_properties: function () {
          return M.extend(
            M.strip_empty_properties({
              $os: M.info.os(),
              $browser: M.info.browser(B, I.vendor, A),
            }),
            { $browser_version: M.info.browserVersion(B, I.vendor, A) }
          );
        },
        mpPageViewProperties: function () {
          return M.strip_empty_properties({
            current_page_title: D.title,
            current_domain: g.location.hostname,
            current_url_path: g.location.pathname,
            current_url_protocol: g.location.protocol,
            current_url_search: g.location.search,
          });
        },
      };
      var V = function (e) {
          var t =
            Math.random().toString(36).substring(2, 10) +
            Math.random().toString(36).substring(2, 10);
          return e ? t.substring(0, e) : t;
        },
        W = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        X = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Y = function (e) {
          var t = X,
            r = e.split("."),
            i = r[r.length - 1];
          (i.length > 4 || "com" === i || "org" === i) && (t = W);
          var o = e.match(t);
          return o ? o[0] : "";
        },
        Z = null,
        ee = null;
      "undefined" != typeof JSON && ((Z = JSON.stringify), (ee = JSON.parse)),
        (Z = Z || M.JSONEncode),
        (ee = ee || M.JSONDecode),
        (M.toArray = M.toArray),
        (M.isObject = M.isObject),
        (M.JSONEncode = M.JSONEncode),
        (M.JSONDecode = M.JSONDecode),
        (M.isBlockedUA = M.isBlockedUA),
        (M.isEmptyObject = M.isEmptyObject),
        (M.info = M.info),
        (M.info.device = M.info.device),
        (M.info.browser = M.info.browser),
        (M.info.browserVersion = M.info.browserVersion),
        (M.info.properties = M.info.properties);
      var et = function () {};
      (et.prototype.create_properties = function () {}),
        (et.prototype.event_handler = function () {}),
        (et.prototype.after_track_handler = function () {}),
        (et.prototype.init = function (e) {
          return (this.mp = e), this;
        }),
        (et.prototype.track = function (e, t, r, i) {
          var o = this,
            n = M.dom_query(e);
          if (0 === n.length) {
            F.error("The DOM query (" + e + ") returned 0 elements");
            return;
          }
          return (
            M.each(
              n,
              function (e) {
                M.register_event(e, this.override_event, function (e) {
                  var n = {},
                    s = o.create_properties(r, this),
                    a = o.mp.get_config("track_links_timeout");
                  o.event_handler(e, this, n),
                    window.setTimeout(o.track_callback(i, s, n, !0), a),
                    o.mp.track(t, s, o.track_callback(i, s, n));
                });
              },
              this
            ),
            !0
          );
        }),
        (et.prototype.track_callback = function (e, t, r, i) {
          i = i || !1;
          var o = this;
          return function () {
            !r.callback_fired &&
              ((r.callback_fired = !0),
              (e && !1 === e(i, t)) || o.after_track_handler(t, r, i));
          };
        }),
        (et.prototype.create_properties = function (e, t) {
          return "function" == typeof e ? e(t) : M.extend({}, e);
        });
      var er = function () {
        this.override_event = "click";
      };
      M.inherit(er, et),
        (er.prototype.create_properties = function (e, t) {
          var r = er.superclass.create_properties.apply(this, arguments);
          return t.href && (r.url = t.href), r;
        }),
        (er.prototype.event_handler = function (e, t, r) {
          (r.new_tab =
            2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target),
            (r.href = t.href),
            r.new_tab || e.preventDefault();
        }),
        (er.prototype.after_track_handler = function (e, t) {
          t.new_tab ||
            setTimeout(function () {
              window.location = t.href;
            }, 0);
        });
      var ei = function () {
        this.override_event = "submit";
      };
      M.inherit(ei, et),
        (ei.prototype.event_handler = function (e, t, r) {
          (r.element = t), e.preventDefault();
        }),
        (ei.prototype.after_track_handler = function (e, t) {
          setTimeout(function () {
            t.element.submit();
          }, 0);
        });
      var eo = z("lock"),
        en = function (e, t) {
          (t = t || {}),
            (this.storageKey = e),
            (this.storage = t.storage || window.localStorage),
            (this.pollIntervalMS = t.pollIntervalMS || 100),
            (this.timeoutMS = t.timeoutMS || 2e3);
        };
      en.prototype.withLock = function (e, t, r) {
        r || "function" == typeof t || ((r = t), (t = null));
        var i = r || new Date().getTime() + "|" + Math.random(),
          o = new Date().getTime(),
          n = this.storageKey,
          s = this.pollIntervalMS,
          a = this.timeoutMS,
          c = this.storage,
          p = n + ":X",
          u = n + ":Y",
          _ = n + ":Z",
          h = function (e) {
            t && t(e);
          },
          l = function (e) {
            if (new Date().getTime() - o > a) {
              eo.error(
                "Timeout waiting for mutex on " +
                  n +
                  "; clearing lock. [" +
                  i +
                  "]"
              ),
                c.removeItem(_),
                c.removeItem(u),
                g();
              return;
            }
            setTimeout(function () {
              try {
                e();
              } catch (e) {
                h(e);
              }
            }, s * (Math.random() + 0.1));
          },
          f = function (e, t) {
            e()
              ? t()
              : l(function () {
                  f(e, t);
                });
          },
          d = function () {
            var e = c.getItem(u);
            if (e && e !== i) return !1;
            if ((c.setItem(u, i), c.getItem(u) === i)) return !0;
            if (!Q(c, !0))
              throw Error("localStorage support dropped while acquiring lock");
            return !1;
          },
          g = function () {
            c.setItem(p, i),
              f(d, function () {
                if (c.getItem(p) === i) {
                  m();
                  return;
                }
                l(function () {
                  if (c.getItem(u) !== i) {
                    g();
                    return;
                  }
                  f(function () {
                    return !c.getItem(_);
                  }, m);
                });
              });
          },
          m = function () {
            c.setItem(_, "1");
            try {
              e();
            } finally {
              c.removeItem(_),
                c.getItem(u) === i && c.removeItem(u),
                c.getItem(p) === i && c.removeItem(p);
            }
          };
        try {
          if (Q(c, !0)) g();
          else throw Error("localStorage support check failed");
        } catch (e) {
          h(e);
        }
      };
      var es = z("batch"),
        ea = function (e, t) {
          (t = t || {}),
            (this.storageKey = e),
            (this.storage = t.storage || window.localStorage),
            (this.reportError = t.errorReporter || M.bind(es.error, es)),
            (this.lock = new en(e, { storage: this.storage })),
            (this.pid = t.pid || null),
            (this.memQueue = []);
        };
      (ea.prototype.enqueue = function (e, t, r) {
        var i = {
          id: V(),
          flushAfter: new Date().getTime() + 2 * t,
          payload: e,
        };
        this.lock.withLock(
          M.bind(function () {
            var t;
            try {
              var o = this.readFromStorage();
              o.push(i), (t = this.saveToStorage(o)) && this.memQueue.push(i);
            } catch (r) {
              this.reportError("Error enqueueing item", e), (t = !1);
            }
            r && r(t);
          }, this),
          M.bind(function (e) {
            this.reportError("Error acquiring storage lock", e), r && r(!1);
          }, this),
          this.pid
        );
      }),
        (ea.prototype.fillBatch = function (e) {
          var t = this.memQueue.slice(0, e);
          if (t.length < e) {
            var r = this.readFromStorage();
            if (r.length) {
              var i = {};
              M.each(t, function (e) {
                i[e.id] = !0;
              });
              for (var o = 0; o < r.length; o++) {
                var n = r[o];
                if (
                  new Date().getTime() > n.flushAfter &&
                  !i[n.id] &&
                  ((n.orphaned = !0), t.push(n), t.length >= e)
                )
                  break;
              }
            }
          }
          return t;
        });
      var ec = function (e, t) {
        var r = [];
        return (
          M.each(e, function (e) {
            e.id && !t[e.id] && r.push(e);
          }),
          r
        );
      };
      ea.prototype.removeItemsByID = function (e, t) {
        var r = {};
        M.each(e, function (e) {
          r[e] = !0;
        }),
          (this.memQueue = ec(this.memQueue, r));
        var i = M.bind(function () {
          var t;
          try {
            var i = this.readFromStorage();
            if (((i = ec(i, r)), (t = this.saveToStorage(i)))) {
              i = this.readFromStorage();
              for (var o = 0; o < i.length; o++) {
                var n = i[o];
                if (n.id && r[n.id])
                  return this.reportError("Item not removed from storage"), !1;
              }
            }
          } catch (r) {
            this.reportError("Error removing items", e), (t = !1);
          }
          return t;
        }, this);
        this.lock.withLock(
          function () {
            var e = i();
            t && t(e);
          },
          M.bind(function (e) {
            var r = !1;
            if (
              (this.reportError("Error acquiring storage lock", e),
              !Q(this.storage, !0) && !(r = i()))
            )
              try {
                this.storage.removeItem(this.storageKey);
              } catch (e) {
                this.reportError("Error clearing queue", e);
              }
            t && t(r);
          }, this),
          this.pid
        );
      };
      var ep = function (e, t) {
        var r = [];
        return (
          M.each(e, function (e) {
            var i = e.id;
            if (i in t) {
              var o = t[i];
              null !== o && ((e.payload = o), r.push(e));
            } else r.push(e);
          }),
          r
        );
      };
      (ea.prototype.updatePayloads = function (e, t) {
        (this.memQueue = ep(this.memQueue, e)),
          this.lock.withLock(
            M.bind(function () {
              var r;
              try {
                var i = this.readFromStorage();
                (i = ep(i, e)), (r = this.saveToStorage(i));
              } catch (t) {
                this.reportError("Error updating items", e), (r = !1);
              }
              t && t(r);
            }, this),
            M.bind(function (e) {
              this.reportError("Error acquiring storage lock", e), t && t(!1);
            }, this),
            this.pid
          );
      }),
        (ea.prototype.readFromStorage = function () {
          var e;
          try {
            (e = this.storage.getItem(this.storageKey)) &&
              ((e = ee(e)),
              M.isArray(e) ||
                (this.reportError("Invalid storage entry:", e), (e = null)));
          } catch (t) {
            this.reportError("Error retrieving queue", t), (e = null);
          }
          return e || [];
        }),
        (ea.prototype.saveToStorage = function (e) {
          try {
            return this.storage.setItem(this.storageKey, Z(e)), !0;
          } catch (e) {
            return this.reportError("Error saving queue", e), !1;
          }
        }),
        (ea.prototype.clear = function () {
          (this.memQueue = []), this.storage.removeItem(this.storageKey);
        });
      var eu = z("batch"),
        e_ = function (e, t) {
          (this.errorReporter = t.errorReporter),
            (this.queue = new ea(e, {
              errorReporter: M.bind(this.reportError, this),
              storage: t.storage,
            })),
            (this.libConfig = t.libConfig),
            (this.sendRequest = t.sendRequestFunc),
            (this.beforeSendHook = t.beforeSendHook),
            (this.stopAllBatching = t.stopAllBatchingFunc),
            (this.batchSize = this.libConfig.batch_size),
            (this.flushInterval = this.libConfig.batch_flush_interval_ms),
            (this.stopped = !this.libConfig.batch_autostart),
            (this.consecutiveRemovalFailures = 0),
            (this.itemIdsSentSuccessfully = {});
        };
      function eh(e, t) {
        eS(!0, e, t);
      }
      function el(e, t) {
        eS(!1, e, t);
      }
      function ef(e, t) {
        return "1" === ex(e, t);
      }
      function ed(e, t) {
        if (
          (function (e) {
            if (e && e.ignoreDnt) return !1;
            var t = (e && e.window) || g,
              r = t.navigator || {},
              i = !1;
            return (
              M.each(
                [r.doNotTrack, r.msDoNotTrack, t.doNotTrack],
                function (e) {
                  M.includes([!0, 1, "1", "yes"], e) && (i = !0);
                }
              ),
              i
            );
          })(t)
        )
          return (
            F.warn(
              'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'
            ),
            !0
          );
        var r = "0" === ex(e, t);
        return (
          r &&
            F.warn(
              "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."
            ),
          r
        );
      }
      function eg(e) {
        return ew(e, function (e) {
          return this.get_config(e);
        });
      }
      function em(e) {
        return ew(e, function (e) {
          return this._get_config(e);
        });
      }
      function ey(e) {
        return ew(e, function (e) {
          return this._get_config(e);
        });
      }
      function ev(e, t) {
        eb((t = t || {})).remove(
          ek(e, t),
          !!t.crossSubdomainCookie,
          t.cookieDomain
        );
      }
      function eb(e) {
        return "localStorage" === (e = e || {}).persistenceType
          ? M.localStorage
          : M.cookie;
      }
      function ek(e, t) {
        return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e;
      }
      function ex(e, t) {
        return eb(t).get(ek(e, t));
      }
      function eS(e, t, r) {
        if (!M.isString(t) || !t.length) {
          F.error(
            "gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token"
          );
          return;
        }
        eb((r = r || {})).set(
          ek(t, r),
          e ? 1 : 0,
          M.isNumber(r.cookieExpiration) ? r.cookieExpiration : null,
          !!r.crossSubdomainCookie,
          !!r.secureCookie,
          !!r.crossSiteCookie,
          r.cookieDomain
        ),
          r.track &&
            e &&
            r.track(r.trackEventName || "$opt_in", r.trackProperties, {
              send_immediately: !0,
            });
      }
      function ew(e, t) {
        return function () {
          var r = !1;
          try {
            var i = t.call(this, "token"),
              o = t.call(this, "ignore_dnt"),
              n = t.call(this, "opt_out_tracking_persistence_type"),
              s = t.call(this, "opt_out_tracking_cookie_prefix"),
              a = t.call(this, "window");
            i &&
              (r = ed(i, {
                ignoreDnt: o,
                persistenceType: n,
                persistencePrefix: s,
                window: a,
              }));
          } catch (e) {
            F.error(
              "Unexpected error when checking tracking opt-out status: " + e
            );
          }
          if (!r) return e.apply(this, arguments);
          var c = arguments[arguments.length - 1];
          "function" == typeof c && c(0);
        };
      }
      (e_.prototype.enqueue = function (e, t) {
        this.queue.enqueue(e, this.flushInterval, t);
      }),
        (e_.prototype.start = function () {
          (this.stopped = !1),
            (this.consecutiveRemovalFailures = 0),
            this.flush();
        }),
        (e_.prototype.stop = function () {
          (this.stopped = !0),
            this.timeoutID &&
              (clearTimeout(this.timeoutID), (this.timeoutID = null));
        }),
        (e_.prototype.clear = function () {
          this.queue.clear();
        }),
        (e_.prototype.resetBatchSize = function () {
          this.batchSize = this.libConfig.batch_size;
        }),
        (e_.prototype.resetFlush = function () {
          this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
        }),
        (e_.prototype.scheduleFlush = function (e) {
          (this.flushInterval = e),
            this.stopped ||
              (this.timeoutID = setTimeout(
                M.bind(this.flush, this),
                this.flushInterval
              ));
        }),
        (e_.prototype.flush = function (e) {
          try {
            if (this.requestInProgress) {
              eu.log("Flush: Request already in progress");
              return;
            }
            e = e || {};
            var t = this.libConfig.batch_request_timeout_ms,
              r = new Date().getTime(),
              i = this.batchSize,
              o = this.queue.fillBatch(i),
              n = [],
              s = {};
            if (
              (M.each(
                o,
                function (e) {
                  var t = e.payload;
                  if (
                    (this.beforeSendHook &&
                      !e.orphaned &&
                      (t = this.beforeSendHook(t)),
                    t)
                  ) {
                    t.event &&
                      t.properties &&
                      (t.properties = M.extend({}, t.properties, {
                        mp_sent_by_lib_version: v.LIB_VERSION,
                      }));
                    var r = !0,
                      i = e.id;
                    i
                      ? (this.itemIdsSentSuccessfully[i] || 0) > 5 &&
                        (this.reportError(
                          "[dupe] item ID sent too many times, not sending",
                          {
                            item: e,
                            batchSize: o.length,
                            timesSent: this.itemIdsSentSuccessfully[i],
                          }
                        ),
                        (r = !1))
                      : this.reportError("[dupe] found item with no ID", {
                          item: e,
                        }),
                      r && n.push(t);
                  }
                  s[e.id] = t;
                },
                this
              ),
              n.length < 1)
            ) {
              this.resetFlush();
              return;
            }
            this.requestInProgress = !0;
            var a = M.bind(function (n) {
                this.requestInProgress = !1;
                try {
                  var a = !1;
                  if (e.unloading) this.queue.updatePayloads(s);
                  else if (
                    M.isObject(n) &&
                    "timeout" === n.error &&
                    new Date().getTime() - r >= t
                  )
                    this.reportError("Network timeout; retrying"), this.flush();
                  else if (
                    M.isObject(n) &&
                    n.xhr_req &&
                    (n.xhr_req.status >= 500 ||
                      429 === n.xhr_req.status ||
                      "timeout" === n.error)
                  ) {
                    var c = 2 * this.flushInterval,
                      p = n.xhr_req.responseHeaders;
                    if (p) {
                      var u = p["Retry-After"];
                      u && (c = 1e3 * parseInt(u, 10) || c);
                    }
                    (c = Math.min(6e5, c)),
                      this.reportError("Error; retry in " + c + " ms"),
                      this.scheduleFlush(c);
                  } else if (
                    M.isObject(n) &&
                    n.xhr_req &&
                    413 === n.xhr_req.status
                  ) {
                    if (o.length > 1) {
                      var _ = Math.max(1, Math.floor(i / 2));
                      (this.batchSize = Math.min(
                        this.batchSize,
                        _,
                        o.length - 1
                      )),
                        this.reportError(
                          "413 response; reducing batch size to " +
                            this.batchSize
                        ),
                        this.resetFlush();
                    } else
                      this.reportError(
                        "Single-event request too large; dropping",
                        o
                      ),
                        this.resetBatchSize(),
                        (a = !0);
                  } else a = !0;
                  a &&
                    (this.queue.removeItemsByID(
                      M.map(o, function (e) {
                        return e.id;
                      }),
                      M.bind(function (e) {
                        e
                          ? ((this.consecutiveRemovalFailures = 0),
                            this.flush())
                          : (this.reportError(
                              "Failed to remove items from queue"
                            ),
                            ++this.consecutiveRemovalFailures > 5
                              ? (this.reportError(
                                  "Too many queue failures; disabling batching system."
                                ),
                                this.stopAllBatching())
                              : this.resetFlush());
                      }, this)
                    ),
                    M.each(
                      o,
                      M.bind(function (e) {
                        var t = e.id;
                        t
                          ? ((this.itemIdsSentSuccessfully[t] =
                              this.itemIdsSentSuccessfully[t] || 0),
                            this.itemIdsSentSuccessfully[t]++,
                            this.itemIdsSentSuccessfully[t] > 5 &&
                              this.reportError(
                                "[dupe] item ID sent too many times",
                                {
                                  item: e,
                                  batchSize: o.length,
                                  timesSent: this.itemIdsSentSuccessfully[t],
                                }
                              ))
                          : this.reportError(
                              "[dupe] found item with no ID while removing",
                              { item: e }
                            );
                      }, this)
                    ));
                } catch (e) {
                  this.reportError("Error handling API response", e),
                    this.resetFlush();
                }
              }, this),
              c = {
                method: "POST",
                verbose: !0,
                ignore_json_errors: !0,
                timeout_ms: t,
              };
            e.unloading && (c.transport = "sendBeacon"),
              eu.log("MIXPANEL REQUEST:", n),
              this.sendRequest(n, c, a);
          } catch (e) {
            this.reportError("Error flushing request queue", e),
              this.resetFlush();
          }
        }),
        (e_.prototype.reportError = function (e, t) {
          if ((eu.error.apply(eu.error, arguments), this.errorReporter))
            try {
              t instanceof Error || (t = Error(e)), this.errorReporter(e, t);
            } catch (e) {
              eu.error(e);
            }
        });
      var eq = "$set",
        eE = "$set_once",
        eO = "$unset",
        eI = "$add",
        eD = "$append",
        eA = "$union",
        eT = "$remove",
        eB = {
          set_action: function (e, t) {
            var r = {},
              i = {};
            return (
              M.isObject(e)
                ? M.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[eq] = i),
              r
            );
          },
          unset_action: function (e) {
            var t = {},
              r = [];
            return (
              M.isArray(e) || (e = [e]),
              M.each(
                e,
                function (e) {
                  this._is_reserved_property(e) || r.push(e);
                },
                this
              ),
              (t[eO] = r),
              t
            );
          },
          set_once_action: function (e, t) {
            var r = {},
              i = {};
            return (
              M.isObject(e)
                ? M.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[eE] = i),
              r
            );
          },
          union_action: function (e, t) {
            var r = {},
              i = {};
            return (
              M.isObject(e)
                ? M.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) ||
                        (i[t] = M.isArray(e) ? e : [e]);
                    },
                    this
                  )
                : (i[e] = M.isArray(t) ? t : [t]),
              (r[eA] = i),
              r
            );
          },
          append_action: function (e, t) {
            var r = {},
              i = {};
            return (
              M.isObject(e)
                ? M.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[eD] = i),
              r
            );
          },
          remove_action: function (e, t) {
            var r = {},
              i = {};
            return (
              M.isObject(e)
                ? M.each(
                    e,
                    function (e, t) {
                      this._is_reserved_property(t) || (i[t] = e);
                    },
                    this
                  )
                : (i[e] = t),
              (r[eT] = i),
              r
            );
          },
          delete_action: function () {
            var e = {};
            return (e.$delete = ""), e;
          },
        },
        eU = function () {};
      M.extend(eU.prototype, eB),
        (eU.prototype._init = function (e, t, r) {
          (this._mixpanel = e), (this._group_key = t), (this._group_id = r);
        }),
        (eU.prototype.set = ey(function (e, t, r) {
          var i = this.set_action(e, t);
          return M.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (eU.prototype.set_once = ey(function (e, t, r) {
          var i = this.set_once_action(e, t);
          return M.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (eU.prototype.unset = ey(function (e, t) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        })),
        (eU.prototype.union = ey(function (e, t, r) {
          M.isObject(e) && (r = t);
          var i = this.union_action(e, t);
          return this._send_request(i, r);
        })),
        (eU.prototype.delete = ey(function (e) {
          var t = this.delete_action();
          return this._send_request(t, e);
        })),
        (eU.prototype.remove = ey(function (e, t, r) {
          var i = this.remove_action(e, t);
          return this._send_request(i, r);
        })),
        (eU.prototype._send_request = function (e, t) {
          (e.$group_key = this._group_key),
            (e.$group_id = this._group_id),
            (e.$token = this._get_config("token"));
          var r = M.encodeDates(e);
          return this._mixpanel._track_or_batch(
            {
              type: "groups",
              data: r,
              endpoint:
                this._get_config("api_host") +
                "/" +
                this._get_config("api_routes").groups,
              batcher: this._mixpanel.request_batchers.groups,
            },
            t
          );
        }),
        (eU.prototype._is_reserved_property = function (e) {
          return "$group_key" === e || "$group_id" === e;
        }),
        (eU.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }),
        (eU.prototype.toString = function () {
          return (
            this._mixpanel.toString() +
            ".group." +
            this._group_key +
            "." +
            this._group_id
          );
        }),
        (eU.prototype.remove = eU.prototype.remove),
        (eU.prototype.set = eU.prototype.set),
        (eU.prototype.set_once = eU.prototype.set_once),
        (eU.prototype.union = eU.prototype.union),
        (eU.prototype.unset = eU.prototype.unset),
        (eU.prototype.toString = eU.prototype.toString);
      var e$ = function () {};
      M.extend(e$.prototype, eB),
        (e$.prototype._init = function (e) {
          this._mixpanel = e;
        }),
        (e$.prototype.set = em(function (e, t, r) {
          var i = this.set_action(e, t);
          return (
            M.isObject(e) && (r = t),
            this._get_config("save_referrer") &&
              this._mixpanel.persistence.update_referrer_info(
                document.referrer
              ),
            (i[eq] = M.extend(
              {},
              M.info.people_properties(),
              this._mixpanel.persistence.get_referrer_info(),
              i[eq]
            )),
            this._send_request(i, r)
          );
        })),
        (e$.prototype.set_once = em(function (e, t, r) {
          var i = this.set_once_action(e, t);
          return M.isObject(e) && (r = t), this._send_request(i, r);
        })),
        (e$.prototype.unset = em(function (e, t) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        })),
        (e$.prototype.increment = em(function (e, t, r) {
          var i = {},
            o = {};
          return (
            M.isObject(e)
              ? (M.each(
                  e,
                  function (e, t) {
                    if (!this._is_reserved_property(t)) {
                      if (isNaN(parseFloat(e))) {
                        F.error(
                          "Invalid increment value passed to mixpanel.people.increment - must be a number"
                        );
                        return;
                      }
                      o[t] = e;
                    }
                  },
                  this
                ),
                (r = t))
              : (M.isUndefined(t) && (t = 1), (o[e] = t)),
            (i[eI] = o),
            this._send_request(i, r)
          );
        })),
        (e$.prototype.append = em(function (e, t, r) {
          M.isObject(e) && (r = t);
          var i = this.append_action(e, t);
          return this._send_request(i, r);
        })),
        (e$.prototype.remove = em(function (e, t, r) {
          M.isObject(e) && (r = t);
          var i = this.remove_action(e, t);
          return this._send_request(i, r);
        })),
        (e$.prototype.union = em(function (e, t, r) {
          M.isObject(e) && (r = t);
          var i = this.union_action(e, t);
          return this._send_request(i, r);
        })),
        (e$.prototype.track_charge = em(function (e, t, r) {
          if (!M.isNumber(e) && isNaN((e = parseFloat(e)))) {
            F.error(
              "Invalid value passed to mixpanel.people.track_charge - must be a number"
            );
            return;
          }
          return this.append("$transactions", M.extend({ $amount: e }, t), r);
        })),
        (e$.prototype.clear_charges = function (e) {
          return this.set("$transactions", [], e);
        }),
        (e$.prototype.delete_user = function () {
          if (!this._identify_called()) {
            F.error(
              "mixpanel.people.delete_user() requires you to call identify() first"
            );
            return;
          }
          var e = { $delete: this._mixpanel.get_distinct_id() };
          return this._send_request(e);
        }),
        (e$.prototype.toString = function () {
          return this._mixpanel.toString() + ".people";
        }),
        (e$.prototype._send_request = function (e, t) {
          (e.$token = this._get_config("token")),
            (e.$distinct_id = this._mixpanel.get_distinct_id());
          var r = this._mixpanel.get_property("$device_id"),
            i = this._mixpanel.get_property("$user_id"),
            o = this._mixpanel.get_property("$had_persisted_distinct_id");
          r && (e.$device_id = r),
            i && (e.$user_id = i),
            o && (e.$had_persisted_distinct_id = o);
          var n = M.encodeDates(e);
          return this._identify_called()
            ? this._mixpanel._track_or_batch(
                {
                  type: "people",
                  data: n,
                  endpoint:
                    this._get_config("api_host") +
                    "/" +
                    this._get_config("api_routes").engage,
                  batcher: this._mixpanel.request_batchers.people,
                },
                t
              )
            : (this._enqueue(e),
              M.isUndefined(t) ||
                t(
                  this._get_config("verbose") ? { status: -1, error: null } : -1
                ),
              M.truncate(n, 255));
        }),
        (e$.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }),
        (e$.prototype._identify_called = function () {
          return !0 === this._mixpanel._flags.identify_called;
        }),
        (e$.prototype._enqueue = function (e) {
          eq in e
            ? this._mixpanel.persistence._add_to_people_queue(eq, e)
            : eE in e
            ? this._mixpanel.persistence._add_to_people_queue(eE, e)
            : eO in e
            ? this._mixpanel.persistence._add_to_people_queue(eO, e)
            : eI in e
            ? this._mixpanel.persistence._add_to_people_queue(eI, e)
            : eD in e
            ? this._mixpanel.persistence._add_to_people_queue(eD, e)
            : eT in e
            ? this._mixpanel.persistence._add_to_people_queue(eT, e)
            : eA in e
            ? this._mixpanel.persistence._add_to_people_queue(eA, e)
            : F.error("Invalid call to _enqueue():", e);
        }),
        (e$.prototype._flush_one_queue = function (e, t, r, i) {
          var o = this,
            n = M.extend({}, this._mixpanel.persistence.load_queue(e)),
            s = n;
          !M.isUndefined(n) &&
            M.isObject(n) &&
            !M.isEmptyObject(n) &&
            (o._mixpanel.persistence._pop_from_people_queue(e, n),
            o._mixpanel.persistence.save(),
            i && (s = i(n)),
            t.call(o, s, function (t, i) {
              0 === t && o._mixpanel.persistence._add_to_people_queue(e, n),
                M.isUndefined(r) || r(t, i);
            }));
        }),
        (e$.prototype._flush = function (e, t, r, i, o, n, s) {
          var a = this;
          this._flush_one_queue(eq, this.set, e),
            this._flush_one_queue(eE, this.set_once, i),
            this._flush_one_queue(eO, this.unset, n, function (e) {
              return M.keys(e);
            }),
            this._flush_one_queue(eI, this.increment, t),
            this._flush_one_queue(eA, this.union, o);
          var c = this._mixpanel.persistence.load_queue(eD);
          if (!M.isUndefined(c) && M.isArray(c) && c.length)
            for (
              var p,
                u = function (e, t) {
                  0 === e &&
                    a._mixpanel.persistence._add_to_people_queue(eD, p),
                    M.isUndefined(r) || r(e, t);
                },
                _ = c.length - 1;
              _ >= 0;
              _--
            )
              (p = (c = this._mixpanel.persistence.load_queue(eD)).pop()),
                a._mixpanel.persistence.save(),
                M.isEmptyObject(p) || a.append(p, u);
          var h = this._mixpanel.persistence.load_queue(eT);
          if (!M.isUndefined(h) && M.isArray(h) && h.length)
            for (
              var l,
                f = function (e, t) {
                  0 === e &&
                    a._mixpanel.persistence._add_to_people_queue(eT, l),
                    M.isUndefined(s) || s(e, t);
                },
                d = h.length - 1;
              d >= 0;
              d--
            )
              (l = (h = this._mixpanel.persistence.load_queue(eT)).pop()),
                a._mixpanel.persistence.save(),
                M.isEmptyObject(l) || a.remove(l, f);
        }),
        (e$.prototype._is_reserved_property = function (e) {
          return (
            "$distinct_id" === e ||
            "$token" === e ||
            "$device_id" === e ||
            "$user_id" === e ||
            "$had_persisted_distinct_id" === e
          );
        }),
        (e$.prototype.set = e$.prototype.set),
        (e$.prototype.set_once = e$.prototype.set_once),
        (e$.prototype.unset = e$.prototype.unset),
        (e$.prototype.increment = e$.prototype.increment),
        (e$.prototype.append = e$.prototype.append),
        (e$.prototype.remove = e$.prototype.remove),
        (e$.prototype.union = e$.prototype.union),
        (e$.prototype.track_charge = e$.prototype.track_charge),
        (e$.prototype.clear_charges = e$.prototype.clear_charges),
        (e$.prototype.delete_user = e$.prototype.delete_user),
        (e$.prototype.toString = e$.prototype.toString);
      var eP = "__mps",
        eC = "__mpso",
        eN = "__mpus",
        ej = "__mpa",
        eM = "__mpap",
        eF = "__mpr",
        eR = "__mpu",
        ez = "$people_distinct_id",
        eL = "__alias",
        eJ = "__timers",
        eQ = [eP, eC, eN, ej, eM, eF, eR, ez, eL, eJ],
        eH = function (e) {
          (this.props = {}),
            (this.campaign_params_saved = !1),
            e.persistence_name
              ? (this.name = "mp_" + e.persistence_name)
              : (this.name = "mp_" + e.token + "_mixpanel");
          var t = e.persistence;
          "cookie" !== t &&
            "localStorage" !== t &&
            (F.critical(
              "Unknown persistence type " + t + "; falling back to cookie"
            ),
            (t = e.persistence = "cookie")),
            "localStorage" === t && M.localStorage.is_supported()
              ? (this.storage = M.localStorage)
              : (this.storage = M.cookie),
            this.load(),
            this.update_config(e),
            this.upgrade(e),
            this.save();
        };
      (eH.prototype.properties = function () {
        var e = {};
        return (
          this.load(),
          M.each(this.props, function (t, r) {
            M.include(eQ, r) || (e[r] = t);
          }),
          e
        );
      }),
        (eH.prototype.load = function () {
          if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = M.extend({}, e));
          }
        }),
        (eH.prototype.upgrade = function (e) {
          var t,
            r,
            i = e.upgrade;
          i &&
            ((t = "mp_super_properties"),
            "string" == typeof i && (t = i),
            (r = this.storage.parse(t)),
            this.storage.remove(t),
            this.storage.remove(t, !0),
            r && (this.props = M.extend(this.props, r.all, r.events))),
            !e.cookie_name &&
              "mixpanel" !== e.name &&
              ((t = "mp_" + e.token + "_" + e.name),
              (r = this.storage.parse(t)) &&
                (this.storage.remove(t),
                this.storage.remove(t, !0),
                this.register_once(r))),
            this.storage === M.localStorage &&
              ((r = M.cookie.parse(this.name)),
              M.cookie.remove(this.name),
              M.cookie.remove(this.name, !0),
              r && this.register_once(r));
        }),
        (eH.prototype.save = function () {
          this.disabled ||
            this.storage.set(
              this.name,
              M.JSONEncode(this.props),
              this.expire_days,
              this.cross_subdomain,
              this.secure,
              this.cross_site,
              this.cookie_domain
            );
        }),
        (eH.prototype.load_prop = function (e) {
          return this.load(), this.props[e];
        }),
        (eH.prototype.remove = function () {
          this.storage.remove(this.name, !1, this.cookie_domain),
            this.storage.remove(this.name, !0, this.cookie_domain);
        }),
        (eH.prototype.clear = function () {
          this.remove(), (this.props = {});
        }),
        (eH.prototype.register_once = function (e, t, r) {
          return (
            !!M.isObject(e) &&
            (void 0 === t && (t = "None"),
            (this.expire_days = void 0 === r ? this.default_expiry : r),
            this.load(),
            M.each(
              e,
              function (e, r) {
                (this.props.hasOwnProperty(r) && this.props[r] !== t) ||
                  (this.props[r] = e);
              },
              this
            ),
            this.save(),
            !0)
          );
        }),
        (eH.prototype.register = function (e, t) {
          return (
            !!M.isObject(e) &&
            ((this.expire_days = void 0 === t ? this.default_expiry : t),
            this.load(),
            M.extend(this.props, e),
            this.save(),
            !0)
          );
        }),
        (eH.prototype.unregister = function (e) {
          this.load(), e in this.props && (delete this.props[e], this.save());
        }),
        (eH.prototype.update_search_keyword = function (e) {
          this.register(M.info.searchInfo(e));
        }),
        (eH.prototype.update_referrer_info = function (e) {
          this.register_once(
            {
              $initial_referrer: e || "$direct",
              $initial_referring_domain: M.info.referringDomain(e) || "$direct",
            },
            ""
          );
        }),
        (eH.prototype.get_referrer_info = function () {
          return M.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain,
          });
        }),
        (eH.prototype.update_config = function (e) {
          (this.default_expiry = this.expire_days = e.cookie_expiration),
            this.set_disabled(e.disable_persistence),
            this.set_cookie_domain(e.cookie_domain),
            this.set_cross_site(e.cross_site_cookie),
            this.set_cross_subdomain(e.cross_subdomain_cookie),
            this.set_secure(e.secure_cookie);
        }),
        (eH.prototype.set_disabled = function (e) {
          (this.disabled = e), this.disabled ? this.remove() : this.save();
        }),
        (eH.prototype.set_cookie_domain = function (e) {
          e !== this.cookie_domain &&
            (this.remove(), (this.cookie_domain = e), this.save());
        }),
        (eH.prototype.set_cross_site = function (e) {
          e !== this.cross_site &&
            ((this.cross_site = e), this.remove(), this.save());
        }),
        (eH.prototype.set_cross_subdomain = function (e) {
          e !== this.cross_subdomain &&
            ((this.cross_subdomain = e), this.remove(), this.save());
        }),
        (eH.prototype.get_cross_subdomain = function () {
          return this.cross_subdomain;
        }),
        (eH.prototype.set_secure = function (e) {
          e !== this.secure &&
            ((this.secure = !!e), this.remove(), this.save());
        }),
        (eH.prototype._add_to_people_queue = function (e, t) {
          var r = this._get_queue_key(e),
            i = t[e],
            o = this._get_or_create_queue(eq),
            n = this._get_or_create_queue(eE),
            s = this._get_or_create_queue(eO),
            a = this._get_or_create_queue(eI),
            c = this._get_or_create_queue(eA),
            p = this._get_or_create_queue(eT, []),
            u = this._get_or_create_queue(eD, []);
          r === eP
            ? (M.extend(o, i),
              this._pop_from_people_queue(eI, i),
              this._pop_from_people_queue(eA, i),
              this._pop_from_people_queue(eO, i))
            : r === eC
            ? (M.each(i, function (e, t) {
                t in n || (n[t] = e);
              }),
              this._pop_from_people_queue(eO, i))
            : r === eN
            ? M.each(i, function (e) {
                M.each([o, n, a, c], function (t) {
                  e in t && delete t[e];
                }),
                  M.each(u, function (t) {
                    e in t && delete t[e];
                  }),
                  (s[e] = !0);
              })
            : r === ej
            ? (M.each(
                i,
                function (e, t) {
                  t in o ? (o[t] += e) : (t in a || (a[t] = 0), (a[t] += e));
                },
                this
              ),
              this._pop_from_people_queue(eO, i))
            : r === eR
            ? (M.each(i, function (e, t) {
                M.isArray(e) &&
                  (t in c || (c[t] = []), (c[t] = c[t].concat(e)));
              }),
              this._pop_from_people_queue(eO, i))
            : r === eF
            ? (p.push(i), this._pop_from_people_queue(eD, i))
            : r === eM && (u.push(i), this._pop_from_people_queue(eO, i)),
            F.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
            F.log(t),
            this.save();
        }),
        (eH.prototype._pop_from_people_queue = function (e, t) {
          var r = this.props[this._get_queue_key(e)];
          M.isUndefined(r) ||
            M.each(
              t,
              function (t, i) {
                e === eD || e === eT
                  ? M.each(r, function (e) {
                      e[i] === t && delete e[i];
                    })
                  : delete r[i];
              },
              this
            );
        }),
        (eH.prototype.load_queue = function (e) {
          return this.load_prop(this._get_queue_key(e));
        }),
        (eH.prototype._get_queue_key = function (e) {
          return e === eq
            ? eP
            : e === eE
            ? eC
            : e === eO
            ? eN
            : e === eI
            ? ej
            : e === eD
            ? eM
            : e === eT
            ? eF
            : e === eA
            ? eR
            : void F.error("Invalid queue:", e);
        }),
        (eH.prototype._get_or_create_queue = function (e, t) {
          var r = this._get_queue_key(e);
          return (
            (t = M.isUndefined(t) ? {} : t),
            this.props[r] || (this.props[r] = t)
          );
        }),
        (eH.prototype.set_event_timer = function (e, t) {
          var r = this.load_prop(eJ) || {};
          (r[e] = t), (this.props[eJ] = r), this.save();
        }),
        (eH.prototype.remove_event_timer = function (e) {
          var t = (this.load_prop(eJ) || {})[e];
          return M.isUndefined(t) || (delete this.props[eJ][e], this.save()), t;
        });
      var eK = function (e) {
          return e;
        },
        eG = function () {},
        eV = "mixpanel",
        eW = "base64",
        eX = "$device:",
        eY = g.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
        eZ = !eY && -1 === B.indexOf("MSIE") && -1 === B.indexOf("Mozilla"),
        e0 = null;
      I.sendBeacon &&
        (e0 = function () {
          return I.sendBeacon.apply(I, arguments);
        });
      var e1 = { track: "track/", engage: "engage/", groups: "groups/" },
        e2 = {
          api_host: "https://api-js.mixpanel.com",
          api_routes: e1,
          api_method: "POST",
          api_transport: "XHR",
          api_payload_format: eW,
          app_host: "https://mixpanel.com",
          cdn: "https://cdn.mxpnl.com",
          cross_site_cookie: !1,
          cross_subdomain_cookie: !0,
          error_reporter: eG,
          persistence: "cookie",
          persistence_name: "",
          cookie_domain: "",
          cookie_name: "",
          loaded: eG,
          track_marketing: !0,
          track_pageview: !1,
          skip_first_touch_marketing: !1,
          store_google: !0,
          save_referrer: !0,
          test: !1,
          verbose: !1,
          img: !1,
          debug: !1,
          track_links_timeout: 300,
          cookie_expiration: 365,
          upgrade: !1,
          disable_persistence: !1,
          disable_cookie: !1,
          secure_cookie: !1,
          ip: !0,
          opt_out_tracking_by_default: !1,
          opt_out_persistence_by_default: !1,
          opt_out_tracking_persistence_type: "localStorage",
          opt_out_tracking_cookie_prefix: null,
          property_blacklist: [],
          xhr_headers: {},
          ignore_dnt: !1,
          batch_requests: !0,
          batch_size: 50,
          batch_flush_interval_ms: 5e3,
          batch_request_timeout_ms: 9e4,
          batch_autostart: !0,
          hooks: {},
        },
        e6 = !1,
        e3 = function () {},
        e4 = function (e, t, r) {
          var i,
            o = r === eV ? y : y[r];
          if (o && 0 === m) i = o;
          else {
            if (o && !M.isArray(o)) {
              F.error("You have already initialized " + r);
              return;
            }
            i = new e3();
          }
          if (
            ((i._cached_groups = {}),
            i._init(e, t, r),
            (i.people = new e$()),
            i.people._init(i),
            !i.get_config("skip_first_touch_marketing"))
          ) {
            var n = M.info.campaignParams(null),
              s = {},
              a = !1;
            M.each(n, function (e, t) {
              (s["initial_" + t] = e), e && (a = !0);
            }),
              a && i.people.set_once(s);
          }
          return (
            (v.DEBUG = v.DEBUG || i.get_config("debug")),
            !M.isUndefined(o) &&
              M.isArray(o) &&
              (i._execute_array.call(i.people, o.people), i._execute_array(o)),
            i
          );
        };
      (e3.prototype.init = function (e, t, r) {
        if (M.isUndefined(r)) {
          this.report_error(
            "You must name your new library: init(token, config, name)"
          );
          return;
        }
        if (r === eV) {
          this.report_error(
            "You must initialize the main mixpanel object right after you include the Mixpanel js snippet"
          );
          return;
        }
        var i = e4(e, t, r);
        return (y[r] = i), i._loaded(), i;
      }),
        (e3.prototype._init = function (e, t, r) {
          (t = t || {}), (this.__loaded = !0), (this.config = {});
          var i = {};
          if (
            (!("api_payload_format" in t) &&
              (t.api_host || e2.api_host).match(/\.mixpanel\.com/) &&
              (i.api_payload_format = "json"),
            this.set_config(
              M.extend({}, e2, i, t, {
                name: r,
                token: e,
                callback_fn: (r === eV ? r : eV + "." + r) + "._jsc",
              })
            ),
            (this._jsc = eG),
            (this.__dom_loaded_queue = []),
            (this.__request_queue = []),
            (this.__disabled_events = []),
            (this._flags = { disable_all_events: !1, identify_called: !1 }),
            (this.request_batchers = {}),
            (this._batch_requests = this.get_config("batch_requests")),
            this._batch_requests)
          ) {
            if (M.localStorage.is_supported(!0) && eY) {
              if ((this.init_batchers(), e0 && g.addEventListener)) {
                var o = M.bind(function () {
                  this.request_batchers.events.stopped ||
                    this.request_batchers.events.flush({ unloading: !0 });
                }, this);
                g.addEventListener("pagehide", function (e) {
                  e.persisted && o();
                }),
                  g.addEventListener("visibilitychange", function () {
                    "hidden" === D.visibilityState && o();
                  });
              }
            } else
              (this._batch_requests = !1),
                F.log(
                  "Turning off Mixpanel request-queueing; needs XHR and localStorage support"
                ),
                M.each(this.get_batcher_configs(), function (e) {
                  F.log("Clearing batch queue " + e.queue_key),
                    M.localStorage.remove(e.queue_key);
                });
          }
          (this.persistence = this.cookie = new eH(this.config)),
            (this.unpersisted_superprops = {}),
            this._gdpr_init();
          var n = M.UUID();
          this.get_distinct_id() ||
            this.register_once({ distinct_id: eX + n, $device_id: n }, ""),
            this.get_config("track_pageview") && this.track_pageview();
        }),
        (e3.prototype._loaded = function () {
          this.get_config("loaded")(this), this._set_default_superprops();
        }),
        (e3.prototype._set_default_superprops = function () {
          this.persistence.update_search_keyword(D.referrer),
            this.get_config("store_google") &&
              this.register(M.info.campaignParams()),
            this.get_config("save_referrer") &&
              this.persistence.update_referrer_info(D.referrer);
        }),
        (e3.prototype._dom_loaded = function () {
          M.each(
            this.__dom_loaded_queue,
            function (e) {
              this._track_dom.apply(this, e);
            },
            this
          ),
            this.has_opted_out_tracking() ||
              M.each(
                this.__request_queue,
                function (e) {
                  this._send_request.apply(this, e);
                },
                this
              ),
            delete this.__dom_loaded_queue,
            delete this.__request_queue;
        }),
        (e3.prototype._track_dom = function (e, t) {
          if (this.get_config("img"))
            return (
              this.report_error(
                "You can't use DOM tracking functions with img = true."
              ),
              !1
            );
          if (!e6) return this.__dom_loaded_queue.push([e, t]), !1;
          var r = new e().init(this);
          return r.track.apply(r, t);
        }),
        (e3.prototype._prepare_callback = function (e, t) {
          if (M.isUndefined(e)) return null;
          if (eY)
            return function (r) {
              e(r, t);
            };
          var r = this._jsc,
            i = "" + Math.floor(1e8 * Math.random()),
            o = this.get_config("callback_fn") + "[" + i + "]";
          return (
            (r[i] = function (o) {
              delete r[i], e(o, t);
            }),
            o
          );
        }),
        (e3.prototype._send_request = function (e, t, r, i) {
          var o = !0;
          if (eZ) return this.__request_queue.push(arguments), o;
          var n = {
              method: this.get_config("api_method"),
              transport: this.get_config("api_transport"),
              verbose: this.get_config("verbose"),
            },
            s = null;
          !i &&
            (M.isFunction(r) || "string" == typeof r) &&
            ((i = r), (r = null)),
            (r = M.extend(n, r || {})),
            eY || (r.method = "GET");
          var a = "POST" === r.method,
            c = e0 && a && "sendbeacon" === r.transport.toLowerCase(),
            p = r.verbose;
          t.verbose && (p = !0),
            this.get_config("test") && (t.test = 1),
            p && (t.verbose = 1),
            this.get_config("img") && (t.img = 1),
            !eY &&
              (i
                ? (t.callback = i)
                : (p || this.get_config("test")) &&
                  (t.callback = "(function(){})")),
            (t.ip = this.get_config("ip") ? 1 : 0),
            (t._ = new Date().getTime().toString()),
            a && ((s = "data=" + encodeURIComponent(t.data)), delete t.data),
            (e += "?" + M.HTTPBuildQuery(t));
          var u = this;
          if ("img" in t) {
            var _ = D.createElement("img");
            (_.src = e), D.body.appendChild(_);
          } else if (c) {
            try {
              o = e0(e, s);
            } catch (e) {
              u.report_error(e), (o = !1);
            }
            try {
              i && i(o ? 1 : 0);
            } catch (e) {
              u.report_error(e);
            }
          } else if (eY)
            try {
              var h = new XMLHttpRequest();
              h.open(r.method, e, !0);
              var l = this.get_config("xhr_headers");
              if (
                (a && (l["Content-Type"] = "application/x-www-form-urlencoded"),
                M.each(l, function (e, t) {
                  h.setRequestHeader(t, e);
                }),
                r.timeout_ms && void 0 !== h.timeout)
              ) {
                h.timeout = r.timeout_ms;
                var f = new Date().getTime();
              }
              (h.withCredentials = !0),
                (h.onreadystatechange = function () {
                  if (4 === h.readyState) {
                    var e, t;
                    if (200 === h.status) {
                      if (i) {
                        if (p) {
                          try {
                            e = M.JSONDecode(h.responseText);
                          } catch (t) {
                            if ((u.report_error(t), !r.ignore_json_errors))
                              return;
                            e = h.responseText;
                          }
                          i(e);
                        } else i(Number(h.responseText));
                      }
                    } else
                      (t =
                        h.timeout &&
                        !h.status &&
                        new Date().getTime() - f >= h.timeout
                          ? "timeout"
                          : "Bad HTTP status: " +
                            h.status +
                            " " +
                            h.statusText),
                        u.report_error(t),
                        i &&
                          (p ? i({ status: 0, error: t, xhr_req: h }) : i(0));
                  }
                }),
                h.send(s);
            } catch (e) {
              u.report_error(e), (o = !1);
            }
          else {
            var d = D.createElement("script");
            (d.type = "text/javascript"),
              (d.async = !0),
              (d.defer = !0),
              (d.src = e);
            var g = D.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(d, g);
          }
          return o;
        }),
        (e3.prototype._execute_array = function (e) {
          var t,
            r = [],
            i = [],
            o = [];
          M.each(
            e,
            function (e) {
              e &&
                ((t = e[0]),
                M.isArray(t)
                  ? o.push(e)
                  : "function" == typeof e
                  ? e.call(this)
                  : M.isArray(e) && "alias" === t
                  ? r.push(e)
                  : M.isArray(e) &&
                    -1 !== t.indexOf("track") &&
                    "function" == typeof this[t]
                  ? o.push(e)
                  : i.push(e));
            },
            this
          );
          var n = function (e, t) {
            M.each(
              e,
              function (e) {
                if (M.isArray(e[0])) {
                  var r = t;
                  M.each(e, function (e) {
                    r = r[e[0]].apply(r, e.slice(1));
                  });
                } else this[e[0]].apply(this, e.slice(1));
              },
              t
            );
          };
          n(r, this), n(i, this), n(o, this);
        }),
        (e3.prototype.are_batchers_initialized = function () {
          return !!this.request_batchers.events;
        }),
        (e3.prototype.get_batcher_configs = function () {
          var e = "__mpq_" + this.get_config("token"),
            t = this.get_config("api_routes");
          return (
            (this._batcher_configs = this._batcher_configs || {
              events: {
                type: "events",
                endpoint: "/" + t.track,
                queue_key: e + "_ev",
              },
              people: {
                type: "people",
                endpoint: "/" + t.engage,
                queue_key: e + "_pp",
              },
              groups: {
                type: "groups",
                endpoint: "/" + t.groups,
                queue_key: e + "_gr",
              },
            }),
            this._batcher_configs
          );
        }),
        (e3.prototype.init_batchers = function () {
          if (!this.are_batchers_initialized()) {
            var e = M.bind(function (e) {
                return new e_(e.queue_key, {
                  libConfig: this.config,
                  sendRequestFunc: M.bind(function (t, r, i) {
                    this._send_request(
                      this.get_config("api_host") + e.endpoint,
                      this._encode_data_for_request(t),
                      r,
                      this._prepare_callback(i, t)
                    );
                  }, this),
                  beforeSendHook: M.bind(function (t) {
                    return this._run_hook("before_send_" + e.type, t);
                  }, this),
                  errorReporter: this.get_config("error_reporter"),
                  stopAllBatchingFunc: M.bind(this.stop_batch_senders, this),
                });
              }, this),
              t = this.get_batcher_configs();
            this.request_batchers = {
              events: e(t.events),
              people: e(t.people),
              groups: e(t.groups),
            };
          }
          this.get_config("batch_autostart") && this.start_batch_senders();
        }),
        (e3.prototype.start_batch_senders = function () {
          (this._batchers_were_started = !0),
            this.are_batchers_initialized() &&
              ((this._batch_requests = !0),
              M.each(this.request_batchers, function (e) {
                e.start();
              }));
        }),
        (e3.prototype.stop_batch_senders = function () {
          (this._batch_requests = !1),
            M.each(this.request_batchers, function (e) {
              e.stop(), e.clear();
            });
        }),
        (e3.prototype.push = function (e) {
          this._execute_array([e]);
        }),
        (e3.prototype.disable = function (e) {
          void 0 === e
            ? (this._flags.disable_all_events = !0)
            : (this.__disabled_events = this.__disabled_events.concat(e));
        }),
        (e3.prototype._encode_data_for_request = function (e) {
          var t = M.JSONEncode(e);
          return (
            this.get_config("api_payload_format") === eW &&
              (t = M.base64Encode(t)),
            { data: t }
          );
        }),
        (e3.prototype._track_or_batch = function (e, t) {
          var r = M.truncate(e.data, 255),
            i = e.endpoint,
            o = e.batcher,
            n = e.should_send_immediately,
            s = e.send_request_options || {};
          t = t || eG;
          var a = !0,
            c = M.bind(function () {
              return (s.skip_hooks ||
                (r = this._run_hook("before_send_" + e.type, r)),
              r)
                ? (F.log("MIXPANEL REQUEST:"),
                  F.log(r),
                  this._send_request(
                    i,
                    this._encode_data_for_request(r),
                    s,
                    this._prepare_callback(t, r)
                  ))
                : null;
            }, this);
          return (
            this._batch_requests && !n
              ? o.enqueue(r, function (e) {
                  e ? t(1, r) : c();
                })
              : (a = c()),
            a && r
          );
        }),
        (e3.prototype.track = eg(function (e, t, r, i) {
          i || "function" != typeof r || ((i = r), (r = null));
          var o = (r = r || {}).transport;
          o && (r.transport = o);
          var n = r.send_immediately;
          if (("function" != typeof i && (i = eG), M.isUndefined(e))) {
            this.report_error("No event name provided to mixpanel.track");
            return;
          }
          if (this._event_is_disabled(e)) {
            i(0);
            return;
          }
          (t = M.extend({}, t)).token = this.get_config("token");
          var s = this.persistence.remove_event_timer(e);
          if (!M.isUndefined(s)) {
            var a = new Date().getTime() - s;
            t.$duration = parseFloat((a / 1e3).toFixed(3));
          }
          this._set_default_superprops();
          var c = this.get_config("track_marketing")
            ? M.info.marketingParams()
            : {};
          t = M.extend(
            {},
            M.info.properties(),
            c,
            this.persistence.properties(),
            this.unpersisted_superprops,
            t
          );
          var p = this.get_config("property_blacklist");
          M.isArray(p)
            ? M.each(p, function (e) {
                delete t[e];
              })
            : this.report_error(
                "Invalid value for property_blacklist config: " + p
              );
          var u = { event: e, properties: t };
          return this._track_or_batch(
            {
              type: "events",
              data: u,
              endpoint:
                this.get_config("api_host") +
                "/" +
                this.get_config("api_routes").track,
              batcher: this.request_batchers.events,
              should_send_immediately: n,
              send_request_options: r,
            },
            i
          );
        })),
        (e3.prototype.set_group = eg(function (e, t, r) {
          M.isArray(t) || (t = [t]);
          var i = {};
          return (i[e] = t), this.register(i), this.people.set(e, t, r);
        })),
        (e3.prototype.add_group = eg(function (e, t, r) {
          var i = this.get_property(e),
            o = {};
          return (
            void 0 === i
              ? ((o[e] = [t]), this.register(o))
              : -1 === i.indexOf(t) &&
                (i.push(t), (o[e] = i), this.register(o)),
            this.people.union(e, t, r)
          );
        })),
        (e3.prototype.remove_group = eg(function (e, t, r) {
          var i = this.get_property(e);
          if (void 0 !== i) {
            var o = i.indexOf(t);
            o > -1 && (i.splice(o, 1), this.register({ group_key: i })),
              0 === i.length && this.unregister(e);
          }
          return this.people.remove(e, t, r);
        })),
        (e3.prototype.track_with_groups = eg(function (e, t, r, i) {
          var o = M.extend({}, t || {});
          return (
            M.each(r, function (e, t) {
              null != e && (o[t] = e);
            }),
            this.track(e, o, i)
          );
        })),
        (e3.prototype._create_map_key = function (e, t) {
          return e + "_" + JSON.stringify(t);
        }),
        (e3.prototype._remove_group_from_cache = function (e, t) {
          delete this._cached_groups[this._create_map_key(e, t)];
        }),
        (e3.prototype.get_group = function (e, t) {
          var r = this._create_map_key(e, t),
            i = this._cached_groups[r];
          return (
            (void 0 === i || i._group_key !== e || i._group_id !== t) &&
              ((i = new eU())._init(this, e, t), (this._cached_groups[r] = i)),
            i
          );
        }),
        (e3.prototype.track_pageview = eg(function (e, t) {
          "object" != typeof e && (e = {});
          var r = (t = t || {}).event_name || "$mp_web_page_view",
            i = M.extend(
              M.info.mpPageViewProperties(),
              M.info.campaignParams(),
              M.info.clickParams()
            ),
            o = M.extend({}, i, e);
          return this.track(r, o);
        })),
        (e3.prototype.track_links = function () {
          return this._track_dom.call(this, er, arguments);
        }),
        (e3.prototype.track_forms = function () {
          return this._track_dom.call(this, ei, arguments);
        }),
        (e3.prototype.time_event = function (e) {
          if (M.isUndefined(e)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return;
          }
          this._event_is_disabled(e) ||
            this.persistence.set_event_timer(e, new Date().getTime());
        });
      var e5 = { persistent: !0 },
        e8 = function (e) {
          var t;
          return (
            (t = M.isObject(e) ? e : M.isUndefined(e) ? {} : { days: e }),
            M.extend({}, e5, t)
          );
        };
      (e3.prototype.register = function (e, t) {
        var r = e8(t);
        r.persistent
          ? this.persistence.register(e, r.days)
          : M.extend(this.unpersisted_superprops, e);
      }),
        (e3.prototype.register_once = function (e, t, r) {
          var i = e8(r);
          i.persistent
            ? this.persistence.register_once(e, t, i.days)
            : (void 0 === t && (t = "None"),
              M.each(
                e,
                function (e, r) {
                  (this.unpersisted_superprops.hasOwnProperty(r) &&
                    this.unpersisted_superprops[r] !== t) ||
                    (this.unpersisted_superprops[r] = e);
                },
                this
              ));
        }),
        (e3.prototype.unregister = function (e, t) {
          (t = e8(t)).persistent
            ? this.persistence.unregister(e)
            : delete this.unpersisted_superprops[e];
        }),
        (e3.prototype._register_single = function (e, t) {
          var r = {};
          (r[e] = t), this.register(r);
        }),
        (e3.prototype.identify = function (e, t, r, i, o, n, s, a) {
          var c = this.get_distinct_id();
          if (e && c !== e) {
            if ("string" == typeof e && 0 === e.indexOf(eX))
              return (
                this.report_error("distinct_id cannot have $device: prefix"), -1
              );
            this.register({ $user_id: e });
          }
          this.get_property("$device_id") ||
            this.register_once(
              { $had_persisted_distinct_id: !0, $device_id: c },
              ""
            ),
            e !== c &&
              e !== this.get_property(eL) &&
              (this.unregister(eL), this.register({ distinct_id: e })),
            (this._flags.identify_called = !0),
            this.people._flush(t, r, i, o, n, s, a),
            e !== c &&
              this.track(
                "$identify",
                { distinct_id: e, $anon_distinct_id: c },
                { skip_hooks: !0 }
              );
        }),
        (e3.prototype.reset = function () {
          this.persistence.clear(), (this._flags.identify_called = !1);
          var e = M.UUID();
          this.register_once({ distinct_id: eX + e, $device_id: e }, "");
        }),
        (e3.prototype.get_distinct_id = function () {
          return this.get_property("distinct_id");
        }),
        (e3.prototype.alias = function (e, t) {
          if (e === this.get_property(ez))
            return (
              this.report_error(
                "Attempting to create alias for existing People user - aborting."
              ),
              -2
            );
          var r = this;
          return (M.isUndefined(t) && (t = this.get_distinct_id()), e !== t)
            ? (this._register_single(eL, e),
              this.track(
                "$create_alias",
                { alias: e, distinct_id: t },
                { skip_hooks: !0 },
                function () {
                  r.identify(e);
                }
              ))
            : (this.report_error(
                "alias matches current distinct_id - skipping api call."
              ),
              this.identify(e),
              -1);
        }),
        (e3.prototype.name_tag = function (e) {
          this._register_single("mp_name_tag", e);
        }),
        (e3.prototype.set_config = function (e) {
          M.isObject(e) &&
            (M.extend(this.config, e),
            e.batch_size &&
              M.each(this.request_batchers, function (e) {
                e.resetBatchSize();
              }),
            this.get_config("persistence_name") ||
              (this.config.persistence_name = this.config.cookie_name),
            this.get_config("disable_persistence") ||
              (this.config.disable_persistence = this.config.disable_cookie),
            this.persistence && this.persistence.update_config(this.config),
            (v.DEBUG = v.DEBUG || this.get_config("debug")));
        }),
        (e3.prototype.get_config = function (e) {
          return this.config[e];
        }),
        (e3.prototype._run_hook = function (e) {
          var t = (this.config.hooks[e] || eK).apply(
            this,
            w.call(arguments, 1)
          );
          return (
            void 0 === t &&
              (this.report_error(e + " hook did not return a value"),
              (t = null)),
            t
          );
        }),
        (e3.prototype.get_property = function (e) {
          return this.persistence.load_prop([e]);
        }),
        (e3.prototype.toString = function () {
          var e = this.get_config("name");
          return e !== eV && (e = eV + "." + e), e;
        }),
        (e3.prototype._event_is_disabled = function (e) {
          return (
            M.isBlockedUA(B) ||
            this._flags.disable_all_events ||
            M.include(this.__disabled_events, e)
          );
        }),
        (e3.prototype._gdpr_init = function () {
          "localStorage" ===
            this.get_config("opt_out_tracking_persistence_type") &&
            M.localStorage.is_supported() &&
            (!this.has_opted_in_tracking() &&
              this.has_opted_in_tracking({ persistence_type: "cookie" }) &&
              this.opt_in_tracking({ enable_persistence: !1 }),
            !this.has_opted_out_tracking() &&
              this.has_opted_out_tracking({ persistence_type: "cookie" }) &&
              this.opt_out_tracking({ clear_persistence: !1 }),
            this.clear_opt_in_out_tracking({
              persistence_type: "cookie",
              enable_persistence: !1,
            })),
            this.has_opted_out_tracking()
              ? this._gdpr_update_persistence({ clear_persistence: !0 })
              : !this.has_opted_in_tracking() &&
                (this.get_config("opt_out_tracking_by_default") ||
                  M.cookie.get("mp_optout")) &&
                (M.cookie.remove("mp_optout"),
                this.opt_out_tracking({
                  clear_persistence: this.get_config(
                    "opt_out_persistence_by_default"
                  ),
                }));
        }),
        (e3.prototype._gdpr_update_persistence = function (e) {
          var t;
          if (e && e.clear_persistence) t = !0;
          else {
            if (!e || !e.enable_persistence) return;
            t = !1;
          }
          this.get_config("disable_persistence") ||
            this.persistence.disabled === t ||
            this.persistence.set_disabled(t),
            t
              ? this.stop_batch_senders()
              : this._batchers_were_started && this.start_batch_senders();
        }),
        (e3.prototype._gdpr_call_func = function (e, t) {
          return (
            (t = M.extend(
              {
                track: M.bind(this.track, this),
                persistence_type: this.get_config(
                  "opt_out_tracking_persistence_type"
                ),
                cookie_prefix: this.get_config(
                  "opt_out_tracking_cookie_prefix"
                ),
                cookie_expiration: this.get_config("cookie_expiration"),
                cross_site_cookie: this.get_config("cross_site_cookie"),
                cross_subdomain_cookie: this.get_config(
                  "cross_subdomain_cookie"
                ),
                cookie_domain: this.get_config("cookie_domain"),
                secure_cookie: this.get_config("secure_cookie"),
                ignore_dnt: this.get_config("ignore_dnt"),
              },
              t
            )),
            M.localStorage.is_supported() || (t.persistence_type = "cookie"),
            e(this.get_config("token"), {
              track: t.track,
              trackEventName: t.track_event_name,
              trackProperties: t.track_properties,
              persistenceType: t.persistence_type,
              persistencePrefix: t.cookie_prefix,
              cookieDomain: t.cookie_domain,
              cookieExpiration: t.cookie_expiration,
              crossSiteCookie: t.cross_site_cookie,
              crossSubdomainCookie: t.cross_subdomain_cookie,
              secureCookie: t.secure_cookie,
              ignoreDnt: t.ignore_dnt,
            })
          );
        }),
        (e3.prototype.opt_in_tracking = function (e) {
          (e = M.extend({ enable_persistence: !0 }, e)),
            this._gdpr_call_func(eh, e),
            this._gdpr_update_persistence(e);
        }),
        (e3.prototype.opt_out_tracking = function (e) {
          (e = M.extend({ clear_persistence: !0, delete_user: !0 }, e))
            .delete_user &&
            this.people &&
            this.people._identify_called() &&
            (this.people.delete_user(), this.people.clear_charges()),
            this._gdpr_call_func(el, e),
            this._gdpr_update_persistence(e);
        }),
        (e3.prototype.has_opted_in_tracking = function (e) {
          return this._gdpr_call_func(ef, e);
        }),
        (e3.prototype.has_opted_out_tracking = function (e) {
          return this._gdpr_call_func(ed, e);
        }),
        (e3.prototype.clear_opt_in_out_tracking = function (e) {
          (e = M.extend({ enable_persistence: !0 }, e)),
            this._gdpr_call_func(ev, e),
            this._gdpr_update_persistence(e);
        }),
        (e3.prototype.report_error = function (e, t) {
          F.error.apply(F.error, arguments);
          try {
            t || e instanceof Error || (e = Error(e)),
              this.get_config("error_reporter")(e, t);
          } catch (e) {
            F.error(e);
          }
        }),
        (e3.prototype.init = e3.prototype.init),
        (e3.prototype.reset = e3.prototype.reset),
        (e3.prototype.disable = e3.prototype.disable),
        (e3.prototype.time_event = e3.prototype.time_event),
        (e3.prototype.track = e3.prototype.track),
        (e3.prototype.track_links = e3.prototype.track_links),
        (e3.prototype.track_forms = e3.prototype.track_forms),
        (e3.prototype.track_pageview = e3.prototype.track_pageview),
        (e3.prototype.register = e3.prototype.register),
        (e3.prototype.register_once = e3.prototype.register_once),
        (e3.prototype.unregister = e3.prototype.unregister),
        (e3.prototype.identify = e3.prototype.identify),
        (e3.prototype.alias = e3.prototype.alias),
        (e3.prototype.name_tag = e3.prototype.name_tag),
        (e3.prototype.set_config = e3.prototype.set_config),
        (e3.prototype.get_config = e3.prototype.get_config),
        (e3.prototype.get_property = e3.prototype.get_property),
        (e3.prototype.get_distinct_id = e3.prototype.get_distinct_id),
        (e3.prototype.toString = e3.prototype.toString),
        (e3.prototype.opt_out_tracking = e3.prototype.opt_out_tracking),
        (e3.prototype.opt_in_tracking = e3.prototype.opt_in_tracking),
        (e3.prototype.has_opted_out_tracking =
          e3.prototype.has_opted_out_tracking),
        (e3.prototype.has_opted_in_tracking =
          e3.prototype.has_opted_in_tracking),
        (e3.prototype.clear_opt_in_out_tracking =
          e3.prototype.clear_opt_in_out_tracking),
        (e3.prototype.get_group = e3.prototype.get_group),
        (e3.prototype.set_group = e3.prototype.set_group),
        (e3.prototype.add_group = e3.prototype.add_group),
        (e3.prototype.remove_group = e3.prototype.remove_group),
        (e3.prototype.track_with_groups = e3.prototype.track_with_groups),
        (e3.prototype.start_batch_senders = e3.prototype.start_batch_senders),
        (e3.prototype.stop_batch_senders = e3.prototype.stop_batch_senders),
        (e3.prototype.DEFAULT_API_ROUTES = e1),
        (eH.prototype.properties = eH.prototype.properties),
        (eH.prototype.update_search_keyword =
          eH.prototype.update_search_keyword),
        (eH.prototype.update_referrer_info = eH.prototype.update_referrer_info),
        (eH.prototype.get_cross_subdomain = eH.prototype.get_cross_subdomain),
        (eH.prototype.clear = eH.prototype.clear);
      var e9 = {},
        e7 = function () {
          M.each(e9, function (e, t) {
            t !== eV && (y[t] = e);
          }),
            (y._ = M);
        },
        te =
          ((m = 0),
          ((y = new e3()).init = function (e, t, r) {
            if (r)
              return (
                y[r] || ((y[r] = e9[r] = e4(e, t, r)), y[r]._loaded()), y[r]
              );
            var i = y;
            e9[eV]
              ? (i = e9[eV])
              : e && ((i = e4(e, t, eV))._loaded(), (e9[eV] = i)),
              (y = i),
              1 === m && (g[eV] = y),
              e7();
          }),
          y.init(),
          (function () {
            function e() {
              e.done ||
                ((e.done = !0),
                (e6 = !0),
                (eZ = !1),
                M.each(e9, function (e) {
                  e._dom_loaded();
                }));
            }
            if (D.addEventListener)
              "complete" === D.readyState
                ? e()
                : D.addEventListener("DOMContentLoaded", e, !1);
            else if (D.attachEvent) {
              D.attachEvent("onreadystatechange", e);
              var t = !1;
              try {
                t = null === g.frameElement;
              } catch (e) {}
              D.documentElement.doScroll &&
                t &&
                (function t() {
                  try {
                    D.documentElement.doScroll("left");
                  } catch (e) {
                    setTimeout(t, 1);
                    return;
                  }
                  e();
                })();
            }
            M.register_event(g, "load", e, !0);
          })(),
          y);
      e.exports = te;
    },
  },
]);
