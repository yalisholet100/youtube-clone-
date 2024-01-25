"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [147],
  {
    24256: function (e, t, n) {
      function r(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "number" == typeof e
            ? "[MobX] minified error nr: " +
                e +
                (n.length ? " " + n.map(String).join(",") : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + e
        );
      }
      n.d(t, {
        Gf: function () {
          return tB;
        },
        jQ: function () {
          return tL;
        },
        ky: function () {
          return t2;
        },
        le: function () {
          return tp;
        },
        rC: function () {
          return t0;
        },
      });
      var i,
        o,
        a,
        s,
        u,
        c,
        l,
        h,
        _,
        f,
        d,
        v,
        p,
        b,
        g,
        y,
        m = {};
      function O() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== n.g
          ? n.g
          : "undefined" != typeof self
          ? self
          : m;
      }
      var A = Object.assign,
        w = Object.getOwnPropertyDescriptor,
        S = Object.defineProperty,
        j = Object.prototype,
        x = [];
      Object.freeze(x);
      var k = {};
      Object.freeze(k);
      var P = "undefined" != typeof Proxy,
        E = Object.toString();
      function V() {
        P || r("Proxy not available");
      }
      function T(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var C = function () {};
      function N(e) {
        return "function" == typeof e;
      }
      function R(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function L(e) {
        return null !== e && "object" == typeof e;
      }
      function D(e) {
        if (!L(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === E;
      }
      function B(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function M(e, t, n) {
        S(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function I(e, t, n) {
        S(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function U(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return L(e) && !0 === e[n];
          }
        );
      }
      function K(e) {
        return e instanceof Map;
      }
      function G(e) {
        return e instanceof Set;
      }
      var q = void 0 !== Object.getOwnPropertySymbols,
        z =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : q
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames;
      function H(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function W(e, t) {
        return j.hasOwnProperty.call(e, t);
      }
      var X =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            z(e).forEach(function (n) {
              t[n] = w(e, n);
            }),
            t
          );
        };
      function F(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var n = e[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == typeof t ? t : String(t);
              })(r.key),
              r
            );
        }
      }
      function Y(e, t, n) {
        return (
          t && F(e.prototype, t),
          n && F(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function J() {
        return (J = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function $(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          Q(e, t);
      }
      function Q(e, t) {
        return (Q = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function Z(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function et(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ee(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return ee(e, t);
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var en = Symbol("mobx-stored-annotations");
      function er(e) {
        return Object.assign(function (t, n) {
          if (eo(n)) return e.decorate_20223_(t, n);
          ei(t, n, e);
        }, e);
      }
      function ei(e, t, n) {
        W(e, en) || M(e, en, J({}, e[en])),
          "override" === n.annotationType_ || (e[en][t] = n);
      }
      function eo(e) {
        return "object" == typeof e && "string" == typeof e.kind;
      }
      var ea = Symbol("mobx administration"),
        es = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation_ = !1),
              (this.isBeingObserved_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = d.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return td(this);
            }),
            (t.reportChanged = function () {
              t_(), tv(this), tf();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        eu = U("Atom", es);
      function ec(e, t, n) {
        void 0 === t && (t = C), void 0 === n && (n = C);
        var r = new es(e);
        return t !== C && tN("onBO", r, t, void 0), n !== C && tC(r, n), r;
      }
      var el = {
        structural: function (e, t) {
          return nV(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
            ? 0 !== e || 1 / e == 1 / t
            : e != e && t != t;
        },
      };
      function eh(e, t, n) {
        return tH(e)
          ? e
          : Array.isArray(e)
          ? ez.array(e, { name: n })
          : D(e)
          ? ez.object(e, void 0, { name: n })
          : K(e)
          ? ez.map(e, { name: n })
          : G(e)
          ? ez.set(e, { name: n })
          : "function" != typeof e || tV(e) || tz(e)
          ? e
          : B(e)
          ? tG(e)
          : tE(n, e);
      }
      function e_(e) {
        return e;
      }
      function ef(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ed,
          extend_: ev,
          decorate_20223_: ep,
        };
      }
      function ed(e, t, n, r) {
        if (null != (i = this.options_) && i.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (tV(n.value)) return 1;
        var i,
          o = eb(e, this, t, n, !1);
        return S(r, t, o), 2;
      }
      function ev(e, t, n, r) {
        var i = eb(e, this, t, n);
        return e.defineProperty_(t, i, r);
      }
      function ep(e, t) {
        var n,
          i,
          o,
          a,
          s,
          u,
          c = t.kind,
          l = t.name,
          h = t.addInitializer,
          _ = this;
        if ("field" == c) {
          h(function () {
            ei(this, l, _);
          });
          return;
        }
        if ("method" == c)
          return (
            tV(e) ||
              ((n = e),
              (e = eZ(
                null != (i = null == (o = _.options_) ? void 0 : o.name)
                  ? i
                  : l.toString(),
                n,
                null !=
                  (a = null == (s = _.options_) ? void 0 : s.autoAction) && a
              ))),
            null != (u = this.options_) &&
              u.bound &&
              h(function () {
                var e = this[l].bind(this);
                (e.isMobxAction = !0), (this[l] = e);
              }),
            e
          );
        r(
          "Cannot apply '" +
            _.annotationType_ +
            "' to '" +
            String(l) +
            "' (kind: " +
            c +
            "):\n'" +
            _.annotationType_ +
            "' can only be used on properties with a function value."
        );
      }
      function eb(e, t, n, r, i) {
        void 0 === i && (i = tc.safeDescriptors), t.annotationType_, r.value;
        var o,
          a,
          s,
          u,
          c,
          l,
          h,
          _,
          f = r.value;
        return (
          null != (o = t.options_) &&
            o.bound &&
            (f = f.bind(null != (_ = e.proxy_) ? _ : e.target_)),
          {
            value: eZ(
              null != (a = null == (s = t.options_) ? void 0 : s.name)
                ? a
                : n.toString(),
              f,
              null != (u = null == (c = t.options_) ? void 0 : c.autoAction) &&
                u,
              null != (l = t.options_) && l.bound
                ? null != (h = e.proxy_)
                  ? h
                  : e.target_
                : void 0
            ),
            configurable: !i || e.isPlainObject_,
            enumerable: !1,
            writable: !i,
          }
        );
      }
      function eg(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ey,
          extend_: em,
          decorate_20223_: eO,
        };
      }
      function ey(e, t, n, r) {
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          null != (i = this.options_) &&
          i.bound &&
          (!W(e.target_, t) || !tz(e.target_[t])) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (tz(n.value)) return 1;
        var i,
          o = eA(e, this, t, n, !1, !1);
        return S(r, t, o), 2;
      }
      function em(e, t, n, r) {
        var i,
          o = eA(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
        return e.defineProperty_(t, o, r);
      }
      function eO(e, t) {
        var n,
          r = t.name,
          i = t.addInitializer;
        return (
          tz(e) || (e = tG(e)),
          null != (n = this.options_) &&
            n.bound &&
            i(function () {
              var e = this[r].bind(this);
              (e.isMobXFlow = !0), (this[r] = e);
            }),
          e
        );
      }
      function eA(e, t, n, r, i, o) {
        void 0 === o && (o = tc.safeDescriptors), t.annotationType_, r.value;
        var a,
          s = r.value;
        return (
          tz(s) || (s = tG(s)),
          i &&
            ((s = s.bind(null != (a = e.proxy_) ? a : e.target_)).isMobXFlow =
              !0),
          {
            value: s,
            configurable: !o || e.isPlainObject_,
            enumerable: !1,
            writable: !o,
          }
        );
      }
      function ew(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: eS,
          extend_: ej,
          decorate_20223_: ex,
        };
      }
      function eS(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function ej(e, t, n, r) {
        return (
          this.annotationType_,
          n.get,
          e.defineComputedProperty_(
            t,
            J({}, this.options_, { get: n.get, set: n.set }),
            r
          )
        );
      }
      function ex(e, t) {
        var n = this,
          r = t.name;
        return (
          (0, t.addInitializer)(function () {
            var t = nd(this)[ea],
              i = J({}, n.options_, { get: e, context: this });
            i.name || (i.name = "ObservableObject." + r.toString()),
              t.values_.set(r, new e3(i));
          }),
          function () {
            return this[ea].getObservablePropValue_(r);
          }
        );
      }
      function ek(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: eP,
          extend_: eE,
          decorate_20223_: eV,
        };
      }
      function eP(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function eE(e, t, n, r) {
        var i, o;
        return (
          this.annotationType_,
          e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer)
              ? i
              : eh,
            r
          )
        );
      }
      function eV(e, t) {
        var n = this,
          r = t.kind,
          i = t.name,
          o = new WeakSet();
        function a(e, t) {
          var r,
            a,
            s = nd(e)[ea],
            u = new e2(
              t,
              null != (r = null == (a = n.options_) ? void 0 : a.enhancer)
                ? r
                : eh,
              "ObservableObject." + i.toString(),
              !1
            );
          s.values_.set(i, u), o.add(e);
        }
        if ("accessor" == r)
          return {
            get: function () {
              return (
                o.has(this) || a(this, e.get.call(this)),
                this[ea].getObservablePropValue_(i)
              );
            },
            set: function (e) {
              return (
                o.has(this) || a(this, e),
                this[ea].setObservablePropValue_(i, e)
              );
            },
            init: function (e) {
              return o.has(this) || a(this, e), e;
            },
          };
      }
      var eT = eC();
      function eC(e) {
        return {
          annotationType_: "true",
          options_: e,
          make_: eN,
          extend_: eR,
          decorate_20223_: eL,
        };
      }
      function eN(e, t, n, r) {
        if (n.get) return eF.make_(e, t, n, r);
        if (n.set) {
          var i,
            o,
            a,
            s,
            u,
            c = eZ(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !tc.safeDescriptors || e.isPlainObject_,
                set: c,
              })
              ? 0
              : 2
            : (S(r, t, { configurable: !0, set: c }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return B(n.value)
            ? (null != (s = this.options_) && s.autoBind ? tG.bound : tG).make_(
                e,
                t,
                n,
                r
              )
            : (null != (a = this.options_) && a.autoBind ? tE.bound : tE).make_(
                e,
                t,
                n,
                r
              );
        var l =
          (null == (i = this.options_) ? void 0 : i.deep) === !1 ? ez.ref : ez;
        return (
          "function" == typeof n.value &&
            null != (o = this.options_) &&
            o.autoBind &&
            (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_)),
          l.make_(e, t, n, r)
        );
      }
      function eR(e, t, n, r) {
        var i, o, a;
        return n.get
          ? eF.extend_(e, t, n, r)
          : n.set
          ? e.defineProperty_(
              t,
              {
                configurable: !tc.safeDescriptors || e.isPlainObject_,
                set: eZ(t.toString(), n.set),
              },
              r
            )
          : ("function" == typeof n.value &&
              null != (i = this.options_) &&
              i.autoBind &&
              (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_)),
            ((null == (o = this.options_) ? void 0 : o.deep) === !1
              ? ez.ref
              : ez
            ).extend_(e, t, n, r));
      }
      function eL(e, t) {
        r("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var eD = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      Object.freeze(eD);
      var eB = ek("observable"),
        eM = ek("observable.ref", { enhancer: e_ }),
        eI = ek("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || nb(e) || nr(e) || ns(e) || nl(e)
              ? e
              : Array.isArray(e)
              ? ez.array(e, { name: n, deep: !1 })
              : D(e)
              ? ez.object(e, void 0, { name: n, deep: !1 })
              : K(e)
              ? ez.map(e, { name: n, deep: !1 })
              : G(e)
              ? ez.set(e, { name: n, deep: !1 })
              : void 0;
          },
        }),
        eU = ek("observable.struct", {
          enhancer: function (e, t) {
            return nV(e, t) ? t : e;
          },
        }),
        eK = er(eB);
      function eG(e) {
        var t, n, r;
        return !0 === e.deep
          ? eh
          : !1 === e.deep
          ? e_
          : (t = e.defaultDecorator) &&
            null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
          ? n
          : eh;
      }
      function eq(e, t, n) {
        if (eo(t)) return eB.decorate_20223_(e, t);
        if (R(t)) {
          ei(e, t, eB);
          return;
        }
        return tH(e)
          ? e
          : D(e)
          ? ez.object(e, t, n)
          : Array.isArray(e)
          ? ez.array(e, t)
          : K(e)
          ? ez.map(e, t)
          : G(e)
          ? ez.set(e, t)
          : "object" == typeof e && null !== e
          ? e
          : ez.box(e, t);
      }
      A(eq, eK);
      var ez = A(eq, {
          box: function (e, t) {
            var n = t || eD;
            return new e2(e, eG(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = t || eD;
            return (
              !1 === tc.useProxies || !1 === n.proxy
                ? function (e, t, n) {
                    return new nw(e, t, n);
                  }
                : function (e, t, n, r) {
                    return (
                      void 0 === n && (n = "ObservableArray"),
                      void 0 === r && (r = !1),
                      V(),
                      nP(function () {
                        var i = new t7(n, t, r, !1);
                        I(i.values_, ea, i);
                        var o = new Proxy(i.values_, t6);
                        return (
                          (i.proxy_ = o),
                          e && e.length && i.spliceWithArray_(0, 0, e),
                          o
                        );
                      })
                    );
                  }
            )(e, eG(n), n.name);
          },
          map: function (e, t) {
            var n = t || eD;
            return new na(e, eG(n), n.name);
          },
          set: function (e, t) {
            var n = t || eD;
            return new nc(e, eG(n), n.name);
          },
          object: function (e, t, n) {
            return nP(function () {
              var r, i, o;
              return tD(
                !1 === tc.useProxies || (null == n ? void 0 : n.proxy) === !1
                  ? nd({}, n)
                  : ((r = {}),
                    V(),
                    null != (o = (i = (r = nd(r, n))[ea]).proxy_)
                      ? o
                      : (i.proxy_ = new Proxy(r, tX))),
                e,
                t
              );
            });
          },
          ref: er(eM),
          shallow: er(eI),
          deep: eK,
          struct: er(eU),
        }),
        eH = "computed",
        eW = ew(eH),
        eX = ew("computed.struct", { equals: el.structural }),
        eF = function (e, t) {
          if (eo(t)) return eW.decorate_20223_(e, t);
          if (R(t)) return ei(e, t, eW);
          if (D(e)) return er(ew(eH, e));
          var n = D(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new e3(n);
        };
      Object.assign(eF, eW), (eF.struct = er(eX));
      var eY = 0,
        eJ = 1,
        e$ =
          null !=
            (l =
              null == (h = w(function () {}, "name"))
                ? void 0
                : h.configurable) && l,
        eQ = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function eZ(e, t, n, i) {
        function o() {
          return (function (e, t, n, i, o) {
            var a,
              s,
              u,
              c,
              l =
                ((a = tc.trackingDerivation),
                (s = !t || !a),
                t_(),
                (u = tc.allowStateChanges),
                s && (tt(), (u = e0(!0))),
                (eY = (c = {
                  runAsAction_: s,
                  prevDerivation_: a,
                  prevAllowStateChanges_: u,
                  prevAllowStateReads_: tr(!0),
                  notifySpy_: !1,
                  startTime_: 0,
                  actionId_: eJ++,
                  parentActionId_: eY,
                }).actionId_),
                c);
            try {
              return n.apply(i, o);
            } catch (e) {
              throw ((l.error_ = e), e);
            } finally {
              eY !== l.actionId_ && r(30),
                (eY = l.parentActionId_),
                void 0 !== l.error_ && (tc.suppressReactionErrors = !0),
                e1(l.prevAllowStateChanges_),
                ti(l.prevAllowStateReads_),
                tf(),
                l.runAsAction_ && tn(l.prevDerivation_),
                (tc.suppressReactionErrors = !1);
            }
          })(0, n, t, i || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (o.isMobxAction = !0),
          (o.toString = function () {
            return t.toString();
          }),
          e$ && ((eQ.value = e), S(o, "name", eQ)),
          o
        );
      }
      function e0(e) {
        var t = tc.allowStateChanges;
        return (tc.allowStateChanges = e), t;
      }
      function e1(e) {
        tc.allowStateChanges = e;
      }
      _ = Symbol.toPrimitive;
      var e2 = (function (e) {
        function t(t, n, r, i, o) {
          var a;
          return (
            void 0 === r && (r = "ObservableValue"),
            void 0 === i && (i = !0),
            void 0 === o && (o = el.default),
            ((a = e.call(this, r) || this).enhancer = void 0),
            (a.name_ = void 0),
            (a.equals = void 0),
            (a.hasUnreportedChange_ = !1),
            (a.interceptors_ = void 0),
            (a.changeListeners_ = void 0),
            (a.value_ = void 0),
            (a.dehancer = void 0),
            (a.enhancer = n),
            (a.name_ = r),
            (a.equals = o),
            (a.value_ = n(t, void 0, r)),
            a
          );
        }
        $(t, e);
        var n = t.prototype;
        return (
          (n.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (n.set = function (e) {
            this.value_,
              (e = this.prepareNewValue_(e)) !== tc.UNCHANGED &&
                this.setNewValue_(e);
          }),
          (n.prepareNewValue_ = function (e) {
            if (tF(this)) {
              var t = tJ(this, { object: this, type: t4, newValue: e });
              if (!t) return tc.UNCHANGED;
              e = t.newValue;
            }
            return (
              (e = this.enhancer(e, this.value_, this.name_)),
              this.equals(this.value_, e) ? tc.UNCHANGED : e
            );
          }),
          (n.setNewValue_ = function (e) {
            var t = this.value_;
            (this.value_ = e),
              this.reportChanged(),
              t$(this) &&
                tZ(this, { type: t4, object: this, newValue: e, oldValue: t });
          }),
          (n.get = function () {
            return this.reportObserved(), this.dehanceValue(this.value_);
          }),
          (n.intercept_ = function (e) {
            return tY(this, e);
          }),
          (n.observe_ = function (e, t) {
            return (
              t &&
                e({
                  observableKind: "value",
                  debugObjectName: this.name_,
                  object: this,
                  type: t4,
                  newValue: this.value_,
                  oldValue: void 0,
                }),
              tQ(this, e)
            );
          }),
          (n.raw = function () {
            return this.value_;
          }),
          (n.toJSON = function () {
            return this.get();
          }),
          (n.toString = function () {
            return this.name_ + "[" + this.value_ + "]";
          }),
          (n.valueOf = function () {
            return H(this.get());
          }),
          (n[_] = function () {
            return this.valueOf();
          }),
          t
        );
      })(es);
      f = Symbol.toPrimitive;
      var e3 = (function () {
          function e(e) {
            (this.dependenciesState_ = d.NOT_TRACKING_),
              (this.observing_ = []),
              (this.newObserving_ = null),
              (this.isBeingObserved_ = !1),
              (this.isPendingUnobservation_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = d.UP_TO_DATE_),
              (this.unboundDepsCount_ = 0),
              (this.value_ = new e6(null)),
              (this.name_ = void 0),
              (this.triggeredBy_ = void 0),
              (this.isComputing_ = !1),
              (this.isRunningSetter_ = !1),
              (this.derivation = void 0),
              (this.setter_ = void 0),
              (this.isTracing_ = v.NONE),
              (this.scope_ = void 0),
              (this.equals_ = void 0),
              (this.requiresReaction_ = void 0),
              (this.keepAlive_ = void 0),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              e.get || r(31),
              (this.derivation = e.get),
              (this.name_ = e.name || "ComputedValue"),
              e.set && (this.setter_ = eZ("ComputedValue-setter", e.set)),
              (this.equals_ =
                e.equals ||
                (e.compareStructural || e.struct ? el.structural : el.default)),
              (this.scope_ = e.context),
              (this.requiresReaction_ = e.requiresReaction),
              (this.keepAlive_ = !!e.keepAlive);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              this.lowestObserverState_ === d.UP_TO_DATE_ &&
                ((this.lowestObserverState_ = d.POSSIBLY_STALE_),
                this.observers_.forEach(function (e) {
                  e.dependenciesState_ === d.UP_TO_DATE_ &&
                    ((e.dependenciesState_ = d.POSSIBLY_STALE_),
                    e.onBecomeStale_());
                }));
            }),
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.get = function () {
              if (
                (this.isComputing_ && r(32, this.name_, this.derivation),
                0 !== tc.inBatch ||
                  0 !== this.observers_.size ||
                  this.keepAlive_)
              ) {
                if ((td(this), e5(this))) {
                  var e,
                    t = tc.trackingContext;
                  this.keepAlive_ && !t && (tc.trackingContext = this),
                    this.trackAndCompute() &&
                      ((e = this),
                      e.lowestObserverState_ !== d.STALE_ &&
                        ((e.lowestObserverState_ = d.STALE_),
                        e.observers_.forEach(function (t) {
                          t.dependenciesState_ === d.POSSIBLY_STALE_
                            ? (t.dependenciesState_ = d.STALE_)
                            : t.dependenciesState_ === d.UP_TO_DATE_ &&
                              (e.lowestObserverState_ = d.UP_TO_DATE_);
                        }))),
                    (tc.trackingContext = t);
                }
              } else
                e5(this) &&
                  (this.warnAboutUntrackedRead_(),
                  t_(),
                  (this.value_ = this.computeValue_(!1)),
                  tf());
              var n = this.value_;
              if (e7(n)) throw n.cause;
              return n;
            }),
            (t.set = function (e) {
              if (this.setter_) {
                this.isRunningSetter_ && r(33, this.name_),
                  (this.isRunningSetter_ = !0);
                try {
                  this.setter_.call(this.scope_, e);
                } finally {
                  this.isRunningSetter_ = !1;
                }
              } else r(34, this.name_);
            }),
            (t.trackAndCompute = function () {
              var e = this.value_,
                t = this.dependenciesState_ === d.NOT_TRACKING_,
                n = this.computeValue_(!0),
                r = t || e7(e) || e7(n) || !this.equals_(e, n);
              return r && (this.value_ = n), r;
            }),
            (t.computeValue_ = function (e) {
              this.isComputing_ = !0;
              var t,
                n = e0(!1);
              if (e) t = e8(this, this.derivation, this.scope_);
              else if (!0 === tc.disableErrorBoundaries)
                t = this.derivation.call(this.scope_);
              else
                try {
                  t = this.derivation.call(this.scope_);
                } catch (e) {
                  t = new e6(e);
                }
              return e1(n), (this.isComputing_ = !1), t;
            }),
            (t.suspend_ = function () {
              this.keepAlive_ || (e9(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
              var n = this,
                r = !0,
                i = void 0;
              return (function (e, t) {
                void 0 === t && (t = k);
                var n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u =
                    null != (n = null == (r = t) ? void 0 : r.name)
                      ? n
                      : "Autorun";
                if (t.scheduler || t.delay) {
                  var c,
                    l = (c = t).scheduler
                      ? c.scheduler
                      : c.delay
                      ? function (e) {
                          return setTimeout(e, c.delay);
                        }
                      : tT,
                    h = !1;
                  s = new tp(
                    u,
                    function () {
                      h ||
                        ((h = !0),
                        l(function () {
                          (h = !1), s.isDisposed_ || s.track(_);
                        }));
                    },
                    t.onError,
                    t.requiresObservable
                  );
                } else
                  s = new tp(
                    u,
                    function () {
                      this.track(_);
                    },
                    t.onError,
                    t.requiresObservable
                  );
                function _() {
                  e(s);
                }
                return (
                  (null != (i = t) && null != (o = i.signal) && o.aborted) ||
                    s.schedule_(),
                  s.getDisposer_(null == (a = t) ? void 0 : a.signal)
                );
              })(function () {
                var o = n.get();
                if (!r || t) {
                  var a = tt();
                  e({
                    observableKind: "computed",
                    debugObjectName: n.name_,
                    type: t4,
                    object: n,
                    newValue: o,
                    oldValue: i,
                  }),
                    tn(a);
                }
                (r = !1), (i = o);
              });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
              return this.name_ + "[" + this.derivation.toString() + "]";
            }),
            (t.valueOf = function () {
              return H(this.get());
            }),
            (t[f] = function () {
              return this.valueOf();
            }),
            e
          );
        })(),
        e4 = U("ComputedValue", e3);
      ((i = d || (d = {}))[(i.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
        (i[(i.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
        (i[(i.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
        (i[(i.STALE_ = 2)] = "STALE_"),
        ((o = v || (v = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.LOG = 1)] = "LOG"),
        (o[(o.BREAK = 2)] = "BREAK");
      var e6 = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function e7(e) {
        return e instanceof e6;
      }
      function e5(e) {
        switch (e.dependenciesState_) {
          case d.UP_TO_DATE_:
            return !1;
          case d.NOT_TRACKING_:
          case d.STALE_:
            return !0;
          case d.POSSIBLY_STALE_:
            for (
              var t = tr(!0), n = tt(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (e4(a)) {
                if (tc.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return tn(n), ti(t), !0;
                  }
                if (e.dependenciesState_ === d.STALE_) return tn(n), ti(t), !0;
              }
            }
            return to(e), tn(n), ti(t), !1;
        }
      }
      function e8(e, t, n) {
        var r,
          i = tr(!0);
        to(e),
          (e.newObserving_ = Array(e.observing_.length + 100)),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++tc.runId);
        var o = tc.trackingDerivation;
        if (
          ((tc.trackingDerivation = e),
          tc.inBatch++,
          !0 === tc.disableErrorBoundaries)
        )
          r = t.call(n);
        else
          try {
            r = t.call(n);
          } catch (e) {
            r = new e6(e);
          }
        return (
          tc.inBatch--,
          (tc.trackingDerivation = o),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = d.UP_TO_DATE_,
                i = 0,
                o = e.unboundDepsCount_,
                a = 0;
              a < o;
              a++
            ) {
              var s = n[a];
              0 === s.diffValue_ &&
                ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                s.dependenciesState_ > r && (r = s.dependenciesState_);
            }
            for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
              var u = t[o];
              0 === u.diffValue_ && tl(u, e), (u.diffValue_ = 0);
            }
            for (; i--; ) {
              var c = n[i];
              1 === c.diffValue_ &&
                ((c.diffValue_ = 0),
                c.observers_.add(e),
                c.lowestObserverState_ > e.dependenciesState_ &&
                  (c.lowestObserverState_ = e.dependenciesState_));
            }
            r !== d.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          ti(i),
          r
        );
      }
      function e9(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) tl(t[n], e);
        e.dependenciesState_ = d.NOT_TRACKING_;
      }
      function te(e) {
        var t = tt();
        try {
          return e();
        } finally {
          tn(t);
        }
      }
      function tt() {
        var e = tc.trackingDerivation;
        return (tc.trackingDerivation = null), e;
      }
      function tn(e) {
        tc.trackingDerivation = e;
      }
      function tr(e) {
        var t = tc.allowStateReads;
        return (tc.allowStateReads = e), t;
      }
      function ti(e) {
        tc.allowStateReads = e;
      }
      function to(e) {
        if (e.dependenciesState_ !== d.UP_TO_DATE_) {
          e.dependenciesState_ = d.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = d.UP_TO_DATE_;
        }
      }
      var ta = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        ts = !0,
        tu = !1,
        tc = ((a = O()).__mobxInstanceCount > 0 &&
          !a.__mobxGlobals &&
          (ts = !1),
        a.__mobxGlobals &&
          a.__mobxGlobals.version !== new ta().version &&
          (ts = !1),
        ts)
          ? a.__mobxGlobals
            ? ((a.__mobxInstanceCount += 1),
              a.__mobxGlobals.UNCHANGED || (a.__mobxGlobals.UNCHANGED = {}),
              a.__mobxGlobals)
            : ((a.__mobxInstanceCount = 1), (a.__mobxGlobals = new ta()))
          : (setTimeout(function () {
              tu || r(35);
            }, 1),
            new ta());
      function tl(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && th(e);
      }
      function th(e) {
        !1 === e.isPendingUnobservation_ &&
          ((e.isPendingUnobservation_ = !0), tc.pendingUnobservations.push(e));
      }
      function t_() {
        tc.inBatch++;
      }
      function tf() {
        if (0 == --tc.inBatch) {
          tg();
          for (var e = tc.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation_ = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                n instanceof e3 && n.suspend_());
          }
          tc.pendingUnobservations = [];
        }
      }
      function td(e) {
        var t = tc.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ &&
                tc.trackingContext &&
                ((e.isBeingObserved_ = !0), e.onBO())),
            e.isBeingObserved_)
          : (0 === e.observers_.size && tc.inBatch > 0 && th(e), !1);
      }
      function tv(e) {
        e.lowestObserverState_ !== d.STALE_ &&
          ((e.lowestObserverState_ = d.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === d.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = d.STALE_);
          }));
      }
      var tp = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "Reaction"),
              (this.name_ = void 0),
              (this.onInvalidate_ = void 0),
              (this.errorHandler_ = void 0),
              (this.requiresObservable_ = void 0),
              (this.observing_ = []),
              (this.newObserving_ = []),
              (this.dependenciesState_ = d.NOT_TRACKING_),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.unboundDepsCount_ = 0),
              (this.isDisposed_ = !1),
              (this.isScheduled_ = !1),
              (this.isTrackPending_ = !1),
              (this.isRunning_ = !1),
              (this.isTracing_ = v.NONE),
              (this.name_ = e),
              (this.onInvalidate_ = t),
              (this.errorHandler_ = n),
              (this.requiresObservable_ = r);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              this.schedule_();
            }),
            (t.schedule_ = function () {
              this.isScheduled_ ||
                ((this.isScheduled_ = !0),
                tc.pendingReactions.push(this),
                tg());
            }),
            (t.isScheduled = function () {
              return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
              if (!this.isDisposed_) {
                t_(), (this.isScheduled_ = !1);
                var e = tc.trackingContext;
                if (((tc.trackingContext = this), e5(this))) {
                  this.isTrackPending_ = !0;
                  try {
                    this.onInvalidate_();
                  } catch (e) {
                    this.reportExceptionInDerivation_(e);
                  }
                }
                (tc.trackingContext = e), tf();
              }
            }),
            (t.track = function (e) {
              if (!this.isDisposed_) {
                t_(), (this.isRunning_ = !0);
                var t = tc.trackingContext;
                tc.trackingContext = this;
                var n = e8(this, e, void 0);
                (tc.trackingContext = t),
                  (this.isRunning_ = !1),
                  (this.isTrackPending_ = !1),
                  this.isDisposed_ && e9(this),
                  e7(n) && this.reportExceptionInDerivation_(n.cause),
                  tf();
              }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
              var t = this;
              if (this.errorHandler_) {
                this.errorHandler_(e, this);
                return;
              }
              if (tc.disableErrorBoundaries) throw e;
              tc.suppressReactionErrors ||
                console.error("[mobx] uncaught error in '" + this + "'", e),
                tc.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }),
            (t.dispose = function () {
              this.isDisposed_ ||
                ((this.isDisposed_ = !0),
                this.isRunning_ || (t_(), e9(this), tf()));
            }),
            (t.getDisposer_ = function (e) {
              var t = this,
                n = function n() {
                  t.dispose(),
                    null == e ||
                      null == e.removeEventListener ||
                      e.removeEventListener("abort", n);
                };
              return (
                null == e ||
                  null == e.addEventListener ||
                  e.addEventListener("abort", n),
                (n[ea] = this),
                n
              );
            }),
            (t.toString = function () {
              return "Reaction[" + this.name_ + "]";
            }),
            (t.trace = function (e) {
              void 0 === e && (e = !1);
            }),
            e
          );
        })(),
        tb = function (e) {
          return e();
        };
      function tg() {
        tc.inBatch > 0 || tc.isRunningReactions || tb(ty);
      }
      function ty() {
        tc.isRunningReactions = !0;
        for (var e = tc.pendingReactions, t = 0; e.length > 0; ) {
          100 == ++t &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        tc.isRunningReactions = !1;
      }
      var tm = U("Reaction", tp),
        tO = "action",
        tA = "autoAction",
        tw = ef(tO),
        tS = ef("action.bound", { bound: !0 }),
        tj = ef(tA, { autoAction: !0 }),
        tx = ef("autoAction.bound", { autoAction: !0, bound: !0 });
      function tk(e) {
        return function (t, n) {
          return N(t)
            ? eZ(t.name || "<unnamed action>", t, e)
            : N(n)
            ? eZ(t, n, e)
            : eo(n)
            ? (e ? tj : tw).decorate_20223_(t, n)
            : R(n)
            ? ei(t, n, e ? tj : tw)
            : R(t)
            ? er(ef(e ? tA : tO, { name: t, autoAction: e }))
            : void 0;
        };
      }
      var tP = tk(!1);
      Object.assign(tP, tw);
      var tE = tk(!0);
      function tV(e) {
        return N(e) && !0 === e.isMobxAction;
      }
      Object.assign(tE, tj), (tP.bound = er(tS)), (tE.bound = er(tx));
      var tT = function (e) {
        return e();
      };
      function tC(e, t, n) {
        return tN("onBUO", e, t, n);
      }
      function tN(e, t, n, r) {
        var i = "function" == typeof r ? nx(t, n) : nx(t),
          o = N(r) ? r : n,
          a = e + "L";
        return (
          i[a] ? i[a].add(o) : (i[a] = new Set([o])),
          function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
          }
        );
      }
      var tR = "always";
      function tL(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((tc.pendingReactions.length ||
                tc.inBatch ||
                tc.isRunningReactions) &&
                r(36),
              (tu = !0),
              ts)
            ) {
              var e = O();
              0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (tc = new ta());
            }
          })();
        var t,
          n,
          i = e.useProxies,
          o = e.enforceActions;
        if (
          (void 0 !== i &&
            (tc.useProxies =
              i === tR || ("never" !== i && "undefined" != typeof Proxy)),
          "ifavailable" === i && (tc.verifyProxies = !0),
          void 0 !== o)
        ) {
          var a = o === tR ? tR : "observed" === o;
          (tc.enforceActions = a),
            (tc.allowStateChanges = !0 !== a && a !== tR);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (tc[t] = !!e[t]);
        }),
          (tc.allowStateReads = !tc.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = tb),
            (tb = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function tD(e, t, n, r) {
        var i = X(t);
        return (
          nP(function () {
            var t = nd(e, r)[ea];
            z(i).forEach(function (e) {
              t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
          }),
          e
        );
      }
      function tB(e, t) {
        return (function e(t) {
          var n,
            r = { name: t.name_ };
          return (
            t.observing_ &&
              t.observing_.length > 0 &&
              (r.dependencies = ((n = t.observing_),
              Array.from(new Set(n))).map(e)),
            r
          );
        })(nx(e, t));
      }
      var tM = 0;
      function tI() {
        this.message = "FLOW_CANCELLED";
      }
      tI.prototype = Object.create(Error.prototype);
      var tU = eg("flow"),
        tK = eg("flow.bound", { bound: !0 }),
        tG = Object.assign(function (e, t) {
          if (eo(t)) return tU.decorate_20223_(e, t);
          if (R(t)) return ei(e, t, tU);
          var n = e.name || "<unnamed flow>",
            r = function () {
              var t,
                r = arguments,
                i = ++tM,
                o = tP(n + " - runid: " + i + " - init", e).apply(this, r),
                a = void 0,
                s = new Promise(function (e, r) {
                  var s = 0;
                  function u(e) {
                    var t;
                    a = void 0;
                    try {
                      t = tP(
                        n + " - runid: " + i + " - yield " + s++,
                        o.next
                      ).call(o, e);
                    } catch (e) {
                      return r(e);
                    }
                    l(t);
                  }
                  function c(e) {
                    var t;
                    a = void 0;
                    try {
                      t = tP(
                        n + " - runid: " + i + " - yield " + s++,
                        o.throw
                      ).call(o, e);
                    } catch (e) {
                      return r(e);
                    }
                    l(t);
                  }
                  function l(t) {
                    if (N(null == t ? void 0 : t.then)) {
                      t.then(l, r);
                      return;
                    }
                    return t.done
                      ? e(t.value)
                      : (a = Promise.resolve(t.value)).then(u, c);
                  }
                  (t = r), u(void 0);
                });
              return (
                (s.cancel = tP(n + " - runid: " + i + " - cancel", function () {
                  try {
                    a && tq(a);
                    var e = o.return(void 0),
                      n = Promise.resolve(e.value);
                    n.then(C, C), tq(n), t(new tI());
                  } catch (e) {
                    t(e);
                  }
                })),
                s
              );
            };
          return (r.isMobXFlow = !0), r;
        }, tU);
      function tq(e) {
        N(e.cancel) && e.cancel();
      }
      function tz(e) {
        return (null == e ? void 0 : e.isMobXFlow) === !0;
      }
      function tH(e) {
        var t;
        return (
          !!e &&
          (void 0 !== t
            ? !!nb(e) && e[ea].values_.has(t)
            : nb(e) || !!e[ea] || eu(e) || tm(e) || e4(e))
        );
      }
      function tW(e, t) {
        void 0 === t && (t = void 0), t_();
        try {
          return e.apply(t);
        } finally {
          tf();
        }
      }
      tG.bound = er(tK);
      var tX = {
        has: function (e, t) {
          return e[ea].has_(t);
        },
        get: function (e, t) {
          return e[ea].get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!R(t) && (null == (r = e[ea].set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!R(t) && (null == (n = e[ea].delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = e[ea].defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return e[ea].ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function tF(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function tY(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          T(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function tJ(e, t) {
        var n = tt();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a && ((t = i[o](t)) && !t.type && r(14), t);
            o++
          );
          return t;
        } finally {
          tn(n);
        }
      }
      function t$(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function tQ(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          T(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function tZ(e, t) {
        var n = tt(),
          r = e.changeListeners_;
        if (r) {
          r = r.slice();
          for (var i = 0, o = r.length; i < o; i++) r[i](t);
          tn(n);
        }
      }
      function t0(e, t, n) {
        return (
          nP(function () {
            var r = nd(e, n)[ea];
            null != t || (W(e, en) || M(e, en, J({}, e[en])), (t = e[en])),
              z(t).forEach(function (e) {
                return r.make_(e, t[e]);
              });
          }),
          e
        );
      }
      var t1 = Symbol("mobx-keys");
      function t2(e, t, n) {
        return D(e)
          ? tD(e, e, t, n)
          : (nP(function () {
              var r = nd(e, n)[ea];
              if (!e[t1]) {
                var i = Object.getPrototypeOf(e),
                  o = new Set([].concat(z(e), z(i)));
                o.delete("constructor"), o.delete(ea), M(i, t1, o);
              }
              e[t1].forEach(function (e) {
                return r.make_(e, !t || !(e in t) || t[e]);
              });
            }),
            e);
      }
      var t3 = "splice",
        t4 = "update",
        t6 = {
          get: function (e, t) {
            var n = e[ea];
            return t === ea
              ? n
              : "length" === t
              ? n.getArrayLength_()
              : "string" != typeof t || isNaN(t)
              ? W(t5, t)
                ? t5[t]
                : e[t]
              : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[ea];
            return (
              "length" === t && r.setArrayLength_(n),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = n)
                : r.set_(parseInt(t), n),
              !0
            );
          },
          preventExtensions: function () {
            r(15);
          },
        },
        t7 = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = n),
              (this.legacyMode_ = r),
              (this.atom_ = new es(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return tY(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                tQ(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                r("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t) {
                if (e > t) {
                  for (var n = Array(e - t), i = 0; i < e - t; i++)
                    n[i] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
              }
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && r(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && nj(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, n) {
              var r = this;
              this.atom_;
              var i = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                  ? (e = i)
                  : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 == arguments.length
                    ? i - e
                    : null == t
                    ? 0
                    : Math.max(0, Math.min(t, i - e))),
                void 0 === n && (n = x),
                tF(this))
              ) {
                var o = tJ(this, {
                  object: this.proxy_,
                  type: t3,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!o) return x;
                (t = o.removedCount), (n = o.added);
              }
              if (
                ((n =
                  0 === n.length
                    ? n
                    : n.map(function (e) {
                        return r.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = n.length - t;
                this.updateArrayLength_(i, a);
              }
              var s = this.spliceItemsIntoValues_(e, t, n);
              return (
                (0 !== t || 0 !== n.length) && this.notifyArraySplice_(e, n, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              if (n.length < 1e4) {
                var r;
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              }
              var i = this.values_.slice(e, e + t),
                o = this.values_.slice(e + t);
              this.values_.length += n.length - t;
              for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
              for (var s = 0; s < o.length; s++)
                this.values_[e + n.length + s] = o[s];
              return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = t$(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: t4,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && tZ(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = t$(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: t3,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && tZ(this, o);
            }),
            (t.get_ = function (e) {
              if (this.legacyMode_ && e >= this.values_.length) {
                console.warn("[mobx] Out of bounds read: " + e);
                return;
              }
              return (
                this.atom_.reportObserved(), this.dehanceValue_(this.values_[e])
              );
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (
                (this.legacyMode_ && e > n.length && r(17, e, n.length),
                e < n.length)
              ) {
                this.atom_;
                var i = n[e];
                if (tF(this)) {
                  var o = tJ(this, {
                    type: t4,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!o) return;
                  t = o.newValue;
                }
                (t = this.enhancer_(t, i)) !== i &&
                  ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
              } else {
                for (
                  var a = Array(e + 1 - n.length), s = 0;
                  s < a.length - 1;
                  s++
                )
                  a[s] = void 0;
                (a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a);
              }
            }),
            e
          );
        })(),
        t5 = {
          clear: function () {
            return this.splice(0);
          },
          replace: function (e) {
            var t = this[ea];
            return t.spliceWithArray_(0, t.values_.length, e);
          },
          toJSON: function () {
            return this.slice();
          },
          splice: function (e, t) {
            for (
              var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
              i < n;
              i++
            )
              r[i - 2] = arguments[i];
            var o = this[ea];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return o.spliceWithArray_(e);
              case 2:
                return o.spliceWithArray_(e, t);
            }
            return o.spliceWithArray_(e, t, r);
          },
          spliceWithArray: function (e, t, n) {
            return this[ea].spliceWithArray_(e, t, n);
          },
          push: function () {
            for (
              var e = this[ea], t = arguments.length, n = Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
          },
          pop: function () {
            return this.splice(Math.max(this[ea].values_.length - 1, 0), 1)[0];
          },
          shift: function () {
            return this.splice(0, 1)[0];
          },
          unshift: function () {
            for (
              var e = this[ea], t = arguments.length, n = Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            return e.spliceWithArray_(0, 0, n), e.values_.length;
          },
          reverse: function () {
            return (
              tc.trackingDerivation && r(37, "reverse"),
              this.replace(this.slice().reverse()),
              this
            );
          },
          sort: function () {
            tc.trackingDerivation && r(37, "sort");
            var e = this.slice();
            return e.sort.apply(e, arguments), this.replace(e), this;
          },
          remove: function (e) {
            var t = this[ea],
              n = t.dehanceValues_(t.values_).indexOf(e);
            return n > -1 && (this.splice(n, 1), !0);
          },
        };
      function t8(e, t) {
        "function" == typeof Array.prototype[e] && (t5[e] = t(e));
      }
      function t9(e) {
        return function () {
          var t = this[ea];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function ne(e) {
        return function (t, n) {
          var r = this,
            i = this[ea];
          return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
              return t.call(n, e, i, r);
            })
          );
        };
      }
      function nt(e) {
        return function () {
          var t = this,
            n = this[ea];
          n.atom_.reportObserved();
          var r = n.dehanceValues_(n.values_),
            i = arguments[0];
          return (
            (arguments[0] = function (e, n, r) {
              return i(e, n, r, t);
            }),
            r[e].apply(r, arguments)
          );
        };
      }
      t8("at", t9),
        t8("concat", t9),
        t8("flat", t9),
        t8("includes", t9),
        t8("indexOf", t9),
        t8("join", t9),
        t8("lastIndexOf", t9),
        t8("slice", t9),
        t8("toString", t9),
        t8("toLocaleString", t9),
        t8("toSorted", t9),
        t8("toSpliced", t9),
        t8("with", t9),
        t8("every", ne),
        t8("filter", ne),
        t8("find", ne),
        t8("findIndex", ne),
        t8("findLast", ne),
        t8("findLastIndex", ne),
        t8("flatMap", ne),
        t8("forEach", ne),
        t8("map", ne),
        t8("some", ne),
        t8("toReversed", ne),
        t8("reduce", nt),
        t8("reduceRight", nt);
      var nn = U("ObservableArrayAdministration", t7);
      function nr(e) {
        return L(e) && nn(e[ea]);
      }
      var ni = {},
        no = "delete";
      (p = Symbol.iterator), (b = Symbol.toStringTag);
      var na = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = eh),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[ea] = ni),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              N(Map) || r(18),
              nP(function () {
                (i.keysAtom_ = ec("ObservableMap.keys()")),
                  (i.data_ = new Map()),
                  (i.hasMap_ = new Map()),
                  e && i.merge(e);
              });
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!tc.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new e2(
                  this.has_(e),
                  e_,
                  "ObservableMap.key?",
                  !1
                ));
                this.hasMap_.set(e, r),
                  tC(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (tF(this)) {
                var r = tJ(this, {
                  type: n ? t4 : "add",
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_,
                tF(this) && !tJ(this, { type: no, object: this, name: e }))
              )
                return !1;
              if (this.has_(e)) {
                var n = t$(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: no,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  tW(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && tZ(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== tc.UNCHANGED) {
                var r = t$(this),
                  i = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: t4,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                n.setNewValue_(t), r && tZ(this, i);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                tW(function () {
                  var r,
                    i = new e2(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, i),
                    (t = i.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = t$(this),
                i = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: "add",
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              r && tZ(this, i);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return nC({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : e.get(i) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return nC({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : [i, e.get(i)] };
                },
              });
            }),
            (t[p] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = et(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                ns(e) && (e = new Map(e)),
                tW(function () {
                  D(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!q) return t;
                        var n = Object.getOwnPropertySymbols(e);
                        return n.length
                          ? [].concat(
                              t,
                              n.filter(function (t) {
                                return j.propertyIsEnumerable.call(e, t);
                              })
                            )
                          : t;
                      })(e).forEach(function (n) {
                        return t.set(n, e[n]);
                      })
                    : Array.isArray(e)
                    ? e.forEach(function (e) {
                        var n = e[0],
                          r = e[1];
                        return t.set(n, r);
                      })
                    : K(e)
                    ? (e.constructor !== Map && r(19, e),
                      e.forEach(function (e, n) {
                        return t.set(n, e);
                      }))
                    : null != e && r(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              tW(function () {
                te(function () {
                  for (var t, n = et(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                tW(function () {
                  for (
                    var n,
                      i = (function (e) {
                        if (K(e) || ns(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (!D(e)) return r(21, e);
                        var t = new Map();
                        for (var n in e) t.set(n, e[n]);
                        return t;
                      })(e),
                      o = new Map(),
                      a = !1,
                      s = et(t.data_.keys());
                    !(n = s()).done;

                  ) {
                    var u = n.value;
                    if (!i.has(u)) {
                      if (t.delete(u)) a = !0;
                      else {
                        var c = t.data_.get(u);
                        o.set(u, c);
                      }
                    }
                  }
                  for (var l, h = et(i.entries()); !(l = h()).done; ) {
                    var _ = l.value,
                      f = _[0],
                      d = _[1],
                      v = t.data_.has(f);
                    if ((t.set(f, d), t.data_.has(f))) {
                      var p = t.data_.get(f);
                      o.set(f, p), v || (a = !0);
                    }
                  }
                  if (!a) {
                    if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var b = t.data_.keys(),
                          g = o.keys(),
                          y = b.next(),
                          m = g.next();
                        !y.done;

                      ) {
                        if (y.value !== m.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (y = b.next()), (m = g.next());
                      }
                  }
                  t.data_ = o;
                }),
                this
              );
            }),
            (t.toString = function () {
              return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return tQ(this, e);
            }),
            (t.intercept_ = function (e) {
              return tY(this, e);
            }),
            Y(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: b,
                get: function () {
                  return "Map";
                },
              },
            ]),
            e
          );
        })(),
        ns = U("ObservableMap", na),
        nu = {};
      (g = Symbol.iterator), (y = Symbol.toStringTag);
      var nc = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = eh),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[ea] = nu),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              N(Set) || r(22),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              nP(function () {
                (i.atom_ = ec(i.name_)), e && i.replace(e);
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              tW(function () {
                te(function () {
                  for (var t, n = et(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = et(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_,
                tF(this) &&
                  !tJ(this, { type: "add", object: this, newValue: e }))
              )
                return this;
              if (!this.has(e)) {
                tW(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = t$(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: "add",
                        object: this,
                        newValue: e,
                      }
                    : null;
                n && tZ(this, r);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                tF(this) &&
                !tJ(this, { type: no, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = t$(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: no,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  tW(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && tZ(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return nC({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this.data_.values());
              return nC({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                nl(e) && (e = new Set(e)),
                tW(function () {
                  Array.isArray(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : G(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null != e && r("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return tQ(this, e);
            }),
            (t.intercept_ = function (e) {
              return tY(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[g] = function () {
              return this.values();
            }),
            Y(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: y,
                get: function () {
                  return "Set";
                },
              },
            ]),
            e
          );
        })(),
        nl = U("ObservableSet", nc),
        nh = Object.create(null),
        n_ = "remove",
        nf = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = eT),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = n),
              (this.defaultAnnotation_ = r),
              (this.keysAtom_ = new es("ObservableObject.keys")),
              (this.isPlainObject_ = D(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof e3) return n.set(t), !0;
              if (tF(this)) {
                var r = tJ(this, {
                  type: t4,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== tc.UNCHANGED) {
                var i = t$(this),
                  o = i
                    ? {
                        type: t4,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                n.setNewValue_(t), i && tZ(this, o);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                tc.trackingDerivation && !W(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (void 0 === n && (n = !1), W(this.target_, e))
                ? this.values_.has(e)
                  ? this.setObservablePropValue_(e, t)
                  : n
                  ? Reflect.set(this.target_, e, t)
                  : ((this.target_[e] = t), !0)
                : this.extend_(
                    e,
                    {
                      value: t,
                      enumerable: !0,
                      writable: !0,
                      configurable: !0,
                    },
                    this.defaultAnnotation_,
                    n
                  );
            }),
            (t.has_ = function (e) {
              if (!tc.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new e2(
                    e in this.target_,
                    e_,
                    "ObservableObject.key?",
                    !1
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if (!(e in this.target_)) {
                  var n;
                  if (null != (n = this.target_[en]) && n[e]) return;
                  r(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var i = this.target_; i && i !== j; ) {
                  var o = w(i, e);
                  if (o) {
                    var a = t.make_(this, e, o, i);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  i = Object.getPrototypeOf(i);
                }
                ng(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              var i = n.extend_(this, e, t, r);
              return i && ng(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                t_();
                var r = this.delete_(e);
                if (!r) return r;
                if (tF(this)) {
                  var i = tJ(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: "add",
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = J({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else S(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                tf();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                t_();
                var i = this.delete_(e);
                if (!i) return i;
                if (tF(this)) {
                  var o = tJ(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: "add",
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = np(e),
                  s = {
                    configurable: !tc.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else S(this.target_, e, s);
                var u = new e2(t, n, "ObservableObject.key", !1);
                this.values_.set(e, u),
                  this.notifyPropertyAddition_(e, u.value_);
              } finally {
                tf();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                t_();
                var r = this.delete_(e);
                if (!r) return r;
                if (
                  tF(this) &&
                  !tJ(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: "add",
                    newValue: void 0,
                  })
                )
                  return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var i = np(e),
                  o = {
                    configurable: !tc.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: i.get,
                    set: i.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else S(this.target_, e, o);
                this.values_.set(e, new e3(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                tf();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if (
                (void 0 === t && (t = !1), this.keysAtom_, !W(this.target_, e))
              )
                return !0;
              if (
                tF(this) &&
                !tJ(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: n_,
                })
              )
                return null;
              try {
                t_();
                var n,
                  r,
                  i,
                  o = t$(this),
                  a = this.values_.get(e),
                  s = void 0;
                if (
                  (!a &&
                    o &&
                    (s = null == (i = w(this.target_, e)) ? void 0 : i.value),
                  t)
                ) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (a &&
                    (this.values_.delete(e),
                    a instanceof e2 && (s = a.value_),
                    tv(a)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (r = n.get(e)) ||
                    r.set(e in this.target_),
                  o)
                ) {
                  var u = {
                    type: n_,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: s,
                    name: e,
                  };
                  o && tZ(this, u);
                }
              } finally {
                tf();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return tQ(this, e);
            }),
            (t.intercept_ = function (e) {
              return tY(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r,
                i = t$(this);
              if (i) {
                var o = i
                  ? {
                      type: "add",
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                i && tZ(this, o);
              }
              null == (n = this.pendingKeys_) ||
                null == (r = n.get(e)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), z(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function nd(e, t) {
        if (W(e, ea)) return e;
        var n,
          r,
          i =
            null != (r = null == t ? void 0 : t.name) ? r : "ObservableObject",
          o = new nf(
            e,
            new Map(),
            String(i),
            t ? (null != (n = t.defaultDecorator) ? n : eC(t)) : void 0
          );
        return M(e, ea, o), e;
      }
      var nv = U("ObservableObjectAdministration", nf);
      function np(e) {
        return (
          nh[e] ||
          (nh[e] = {
            get: function () {
              return this[ea].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[ea].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function nb(e) {
        return !!L(e) && nv(e[ea]);
      }
      function ng(e, t, n) {
        var r;
        null == (r = e.target_[en]) || delete r[n];
      }
      var ny = nS(0),
        nm =
          ((s = !1),
          Object.defineProperty((u = {}), "0", {
            set: function () {
              s = !0;
            },
          }),
          (Object.create(u)["0"] = 1),
          !1 === s),
        nO = 0,
        nA = function () {};
      (c = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(nA.prototype, c)
          : void 0 !== nA.prototype.__proto__
          ? (nA.prototype.__proto__ = c)
          : (nA.prototype = c);
      var nw = (function (e, t, n) {
        function r(t, n, r, i) {
          var o;
          return (
            void 0 === r && (r = "ObservableArray"),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            nP(function () {
              var e = new t7(r, n, i, !0);
              (e.proxy_ = Z(o)),
                I(Z(o), ea, e),
                t && t.length && o.spliceWithArray(0, 0, t),
                nm && Object.defineProperty(Z(o), "0", ny);
            }),
            o
          );
        }
        $(r, e);
        var i = r.prototype;
        return (
          (i.concat = function () {
            this[ea].atom_.reportObserved();
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return nr(e) ? e.slice() : e;
              })
            );
          }),
          (i[n] = function () {
            var e = this,
              t = 0;
            return nC({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          Y(r, [
            {
              key: "length",
              get: function () {
                return this[ea].getArrayLength_();
              },
              set: function (e) {
                this[ea].setArrayLength_(e);
              },
            },
            {
              key: t,
              get: function () {
                return "Array";
              },
            },
          ]),
          r
        );
      })(nA, Symbol.toStringTag, Symbol.iterator);
      function nS(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[ea].get_(e);
          },
          set: function (t) {
            this[ea].set_(e, t);
          },
        };
      }
      function nj(e) {
        if (e > nO) {
          for (var t, n = nO; n < e + 100; n++)
            (t = n), S(nw.prototype, "" + t, nS(t));
          nO = e;
        }
      }
      function nx(e, t) {
        if ("object" == typeof e && null !== e) {
          if (nr(e)) return void 0 !== t && r(23), e[ea].atom_;
          if (nl(e)) return e.atom_;
          if (ns(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, nk(e)), n;
          }
          if (nb(e)) {
            if (!t) return r(26);
            var i = e[ea].values_.get(t);
            return i || r(27, t, nk(e)), i;
          }
          if (eu(e) || e4(e) || tm(e)) return e;
        } else if (N(e) && tm(e[ea])) return e[ea];
        r(28);
      }
      function nk(e, t) {
        var n;
        if (void 0 !== t) n = nx(e, t);
        else {
          if (tV(e)) return e.name;
          n =
            nb(e) || ns(e) || nl(e)
              ? (function e(t, n) {
                  return (t || r(29), void 0 !== n)
                    ? e(nx(t, n))
                    : eu(t) || e4(t) || tm(t) || ns(t) || nl(t)
                    ? t
                    : t[ea]
                    ? t[ea]
                    : void r(24, t);
                })(e)
              : nx(e);
        }
        return n.name_;
      }
      function nP(e) {
        var t = tt(),
          n = e0(!0);
        t_();
        try {
          return e();
        } finally {
          tf(), e1(n), tn(t);
        }
      }
      Object.entries(t5).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && M(nw.prototype, t, n);
      }),
        nj(1e3);
      var nE = j.toString;
      function nV(e, t, n) {
        return (
          void 0 === n && (n = -1),
          (function e(t, n, r, i, o) {
            if (t === n) return 0 !== t || 1 / t == 1 / n;
            if (null == t || null == n) return !1;
            if (t != t) return n != n;
            var a = typeof t;
            if ("function" !== a && "object" !== a && "object" != typeof n)
              return !1;
            var s = nE.call(t);
            if (s !== nE.call(n)) return !1;
            switch (s) {
              case "[object RegExp]":
              case "[object String]":
                return "" + t == "" + n;
              case "[object Number]":
                if (+t != +t) return +n != +n;
                return 0 == +t ? 1 / +t == 1 / n : +t == +n;
              case "[object Date]":
              case "[object Boolean]":
                return +t == +n;
              case "[object Symbol]":
                return (
                  "undefined" != typeof Symbol &&
                  Symbol.valueOf.call(t) === Symbol.valueOf.call(n)
                );
              case "[object Map]":
              case "[object Set]":
                r >= 0 && r++;
            }
            (t = nT(t)), (n = nT(n));
            var u = "[object Array]" === s;
            if (!u) {
              if ("object" != typeof t || "object" != typeof n) return !1;
              var c = t.constructor,
                l = n.constructor;
              if (
                c !== l &&
                !(N(c) && c instanceof c && N(l) && l instanceof l) &&
                "constructor" in t &&
                "constructor" in n
              )
                return !1;
            }
            if (0 === r) return !1;
            r < 0 && (r = -1), (o = o || []);
            for (var h = (i = i || []).length; h--; )
              if (i[h] === t) return o[h] === n;
            if ((i.push(t), o.push(n), u)) {
              if ((h = t.length) !== n.length) return !1;
              for (; h--; ) if (!e(t[h], n[h], r - 1, i, o)) return !1;
            } else {
              var _,
                f = Object.keys(t);
              if (((h = f.length), Object.keys(n).length !== h)) return !1;
              for (; h--; )
                if (!(W(n, (_ = f[h])) && e(t[_], n[_], r - 1, i, o)))
                  return !1;
            }
            return i.pop(), o.pop(), !0;
          })(e, t, n)
        );
      }
      function nT(e) {
        return nr(e)
          ? e.slice()
          : K(e) || ns(e) || G(e) || nl(e)
          ? Array.from(e.entries())
          : e;
      }
      function nC(e) {
        return (e[Symbol.iterator] = nN), e;
      }
      function nN() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === O()[e] &&
          r("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: { getDebugName: nk },
            $mobx: ea,
          });
    },
  },
]);
