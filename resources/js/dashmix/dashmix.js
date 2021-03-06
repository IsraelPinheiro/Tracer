/*!
 * dashmix - v5.0.0
 * @author pixelcave - https://pixelcave.com
 * Copyright (c) 2021
 */
/*! For license information please see app.js.LICENSE.txt */
!(function () {
    var e = {
            1807: function (e) {
                var t = !("undefined" == typeof window || !window.document || !window.document.createElement);
                e.exports = t;
            },
            1296: function (e, t, i) {
                var n = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    s = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    a = parseInt,
                    l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    d = l || c || Function("return this")(),
                    u = Object.prototype.toString,
                    h = Math.max,
                    f = Math.min,
                    p = function () {
                        return d.Date.now();
                    };
                function g(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function m(e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return !!e && "object" == typeof e;
                                })(e) &&
                                    "[object Symbol]" == u.call(e))
                            );
                        })(e)
                    )
                        return NaN;
                    if (g(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = g(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var i = s.test(e);
                    return i || o.test(e) ? a(e.slice(2), i ? 2 : 8) : r.test(e) ? NaN : +e;
                }
                e.exports = function (e, t, i) {
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        c = 0,
                        d = !1,
                        u = !1,
                        v = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    function b(t) {
                        var i = n,
                            s = r;
                        return (n = r = void 0), (c = t), (o = e.apply(s, i));
                    }
                    function _(e) {
                        return (c = e), (a = setTimeout(w, t)), d ? b(e) : o;
                    }
                    function y(e) {
                        var i = e - l;
                        return void 0 === l || i >= t || i < 0 || (u && e - c >= s);
                    }
                    function w() {
                        var e = p();
                        if (y(e)) return x(e);
                        a = setTimeout(
                            w,
                            (function (e) {
                                var i = t - (e - l);
                                return u ? f(i, s - (e - c)) : i;
                            })(e)
                        );
                    }
                    function x(e) {
                        return (a = void 0), v && n ? b(e) : ((n = r = void 0), o);
                    }
                    function E() {
                        var e = p(),
                            i = y(e);
                        if (((n = arguments), (r = this), (l = e), i)) {
                            if (void 0 === a) return _(l);
                            if (u) return (a = setTimeout(w, t)), b(l);
                        }
                        return void 0 === a && (a = setTimeout(w, t)), o;
                    }
                    return (
                        (t = m(t) || 0),
                        g(i) && ((d = !!i.leading), (s = (u = "maxWait" in i) ? h(m(i.maxWait) || 0, t) : s), (v = "trailing" in i ? !!i.trailing : v)),
                        (E.cancel = function () {
                            void 0 !== a && clearTimeout(a), (c = 0), (n = l = r = a = void 0);
                        }),
                        (E.flush = function () {
                            return void 0 === a ? o : x(p());
                        }),
                        E
                    );
                };
            },
            773: function (e, t, i) {
                var n,
                    r = "__lodash_hash_undefined__",
                    s = /^\[object .+?Constructor\]$/,
                    o = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                    a = "object" == typeof self && self && self.Object === Object && self,
                    l = o || a || Function("return this")(),
                    c = Array.prototype,
                    d = Function.prototype,
                    u = Object.prototype,
                    h = l["__core-js_shared__"],
                    f = (n = /[^.]+$/.exec((h && h.keys && h.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + n : "",
                    p = d.toString,
                    g = u.hasOwnProperty,
                    m = u.toString,
                    v = RegExp(
                        "^" +
                            p
                                .call(g)
                                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                            "$"
                    ),
                    b = c.splice,
                    _ = L(l, "Map"),
                    y = L(Object, "create");
                function w(e) {
                    var t = -1,
                        i = e ? e.length : 0;
                    for (this.clear(); ++t < i; ) {
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                function x(e) {
                    var t = -1,
                        i = e ? e.length : 0;
                    for (this.clear(); ++t < i; ) {
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                function E(e) {
                    var t = -1,
                        i = e ? e.length : 0;
                    for (this.clear(); ++t < i; ) {
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                function k(e, t) {
                    for (var i, n, r = e.length; r--; ) if ((i = e[r][0]) === (n = t) || (i != i && n != n)) return r;
                    return -1;
                }
                function S(e, t) {
                    var i,
                        n,
                        r = e.__data__;
                    return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map;
                }
                function L(e, t) {
                    var i = (function (e, t) {
                        return null == e ? void 0 : e[t];
                    })(e, t);
                    return (function (e) {
                        return (
                            !(!A(e) || ((t = e), f && f in t)) &&
                            ((function (e) {
                                var t = A(e) ? m.call(e) : "";
                                return "[object Function]" == t || "[object GeneratorFunction]" == t;
                            })(e) ||
                            (function (e) {
                                var t = !1;
                                if (null != e && "function" != typeof e.toString)
                                    try {
                                        t = !!(e + "");
                                    } catch (e) {}
                                return t;
                            })(e)
                                ? v
                                : s
                            ).test(
                                (function (e) {
                                    if (null != e) {
                                        try {
                                            return p.call(e);
                                        } catch (e) {}
                                        try {
                                            return e + "";
                                        } catch (e) {}
                                    }
                                    return "";
                                })(e)
                            )
                        );
                        var t;
                    })(i)
                        ? i
                        : void 0;
                }
                function O(e, t) {
                    if ("function" != typeof e || (t && "function" != typeof t)) throw new TypeError("Expected a function");
                    var i = function () {
                        var n = arguments,
                            r = t ? t.apply(this, n) : n[0],
                            s = i.cache;
                        if (s.has(r)) return s.get(r);
                        var o = e.apply(this, n);
                        return (i.cache = s.set(r, o)), o;
                    };
                    return (i.cache = new (O.Cache || E)()), i;
                }
                function A(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                (w.prototype.clear = function () {
                    this.__data__ = y ? y(null) : {};
                }),
                    (w.prototype.delete = function (e) {
                        return this.has(e) && delete this.__data__[e];
                    }),
                    (w.prototype.get = function (e) {
                        var t = this.__data__;
                        if (y) {
                            var i = t[e];
                            return i === r ? void 0 : i;
                        }
                        return g.call(t, e) ? t[e] : void 0;
                    }),
                    (w.prototype.has = function (e) {
                        var t = this.__data__;
                        return y ? void 0 !== t[e] : g.call(t, e);
                    }),
                    (w.prototype.set = function (e, t) {
                        return (this.__data__[e] = y && void 0 === t ? r : t), this;
                    }),
                    (x.prototype.clear = function () {
                        this.__data__ = [];
                    }),
                    (x.prototype.delete = function (e) {
                        var t = this.__data__,
                            i = k(t, e);
                        return !(i < 0 || (i == t.length - 1 ? t.pop() : b.call(t, i, 1), 0));
                    }),
                    (x.prototype.get = function (e) {
                        var t = this.__data__,
                            i = k(t, e);
                        return i < 0 ? void 0 : t[i][1];
                    }),
                    (x.prototype.has = function (e) {
                        return k(this.__data__, e) > -1;
                    }),
                    (x.prototype.set = function (e, t) {
                        var i = this.__data__,
                            n = k(i, e);
                        return n < 0 ? i.push([e, t]) : (i[n][1] = t), this;
                    }),
                    (E.prototype.clear = function () {
                        this.__data__ = { hash: new w(), map: new (_ || x)(), string: new w() };
                    }),
                    (E.prototype.delete = function (e) {
                        return S(this, e).delete(e);
                    }),
                    (E.prototype.get = function (e) {
                        return S(this, e).get(e);
                    }),
                    (E.prototype.has = function (e) {
                        return S(this, e).has(e);
                    }),
                    (E.prototype.set = function (e, t) {
                        return S(this, e).set(e, t), this;
                    }),
                    (O.Cache = E),
                    (e.exports = O);
            },
            3096: function (e, t, i) {
                var n = "Expected a function",
                    r = /^\s+|\s+$/g,
                    s = /^[-+]0x[0-9a-f]+$/i,
                    o = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    l = parseInt,
                    c = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    u = c || d || Function("return this")(),
                    h = Object.prototype.toString,
                    f = Math.max,
                    p = Math.min,
                    g = function () {
                        return u.Date.now();
                    };
                function m(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t);
                }
                function v(e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return !!e && "object" == typeof e;
                                })(e) &&
                                    "[object Symbol]" == h.call(e))
                            );
                        })(e)
                    )
                        return NaN;
                    if (m(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = m(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(r, "");
                    var i = o.test(e);
                    return i || a.test(e) ? l(e.slice(2), i ? 2 : 8) : s.test(e) ? NaN : +e;
                }
                e.exports = function (e, t, i) {
                    var r = !0,
                        s = !0;
                    if ("function" != typeof e) throw new TypeError(n);
                    return (
                        m(i) && ((r = "leading" in i ? !!i.leading : r), (s = "trailing" in i ? !!i.trailing : s)),
                        (function (e, t, i) {
                            var r,
                                s,
                                o,
                                a,
                                l,
                                c,
                                d = 0,
                                u = !1,
                                h = !1,
                                b = !0;
                            if ("function" != typeof e) throw new TypeError(n);
                            function _(t) {
                                var i = r,
                                    n = s;
                                return (r = s = void 0), (d = t), (a = e.apply(n, i));
                            }
                            function y(e) {
                                return (d = e), (l = setTimeout(x, t)), u ? _(e) : a;
                            }
                            function w(e) {
                                var i = e - c;
                                return void 0 === c || i >= t || i < 0 || (h && e - d >= o);
                            }
                            function x() {
                                var e = g();
                                if (w(e)) return E(e);
                                l = setTimeout(
                                    x,
                                    (function (e) {
                                        var i = t - (e - c);
                                        return h ? p(i, o - (e - d)) : i;
                                    })(e)
                                );
                            }
                            function E(e) {
                                return (l = void 0), b && r ? _(e) : ((r = s = void 0), a);
                            }
                            function k() {
                                var e = g(),
                                    i = w(e);
                                if (((r = arguments), (s = this), (c = e), i)) {
                                    if (void 0 === l) return y(c);
                                    if (h) return (l = setTimeout(x, t)), _(c);
                                }
                                return void 0 === l && (l = setTimeout(x, t)), a;
                            }
                            return (
                                (t = v(t) || 0),
                                m(i) && ((u = !!i.leading), (o = (h = "maxWait" in i) ? f(v(i.maxWait) || 0, t) : o), (b = "trailing" in i ? !!i.trailing : b)),
                                (k.cancel = function () {
                                    void 0 !== l && clearTimeout(l), (d = 0), (r = c = s = l = void 0);
                                }),
                                (k.flush = function () {
                                    return void 0 === l ? a : E(g());
                                }),
                                k
                            );
                        })(e, t, { leading: r, maxWait: t, trailing: s })
                    );
                };
            },
            6653: function (e) {
                e.exports = function (e) {
                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                    return e;
                };
            },
            2004: function (e, t, i) {
                var n = i(5896);
                e.exports = function (e) {
                    if (!n(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
                    return e;
                };
            },
            9256: function (e, t, i) {
                var n = i(8149),
                    r = i(1525),
                    s = i(9168),
                    o = n("unscopables"),
                    a = Array.prototype;
                null == a[o] && s.f(a, o, { configurable: !0, value: r(null) }),
                    (e.exports = function (e) {
                        a[o][e] = !0;
                    });
            },
            3615: function (e, t, i) {
                "use strict";
                var n = i(7321).charAt;
                e.exports = function (e, t, i) {
                    return t + (i ? n(e, t).length : 1);
                };
            },
            3046: function (e) {
                e.exports = function (e, t, i) {
                    if (!(e instanceof t)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
                    return e;
                };
            },
            1474: function (e, t, i) {
                var n = i(5896);
                e.exports = function (e) {
                    if (!n(e)) throw TypeError(String(e) + " is not an object");
                    return e;
                };
            },
            1269: function (e, t, i) {
                "use strict";
                var n = i(528).forEach,
                    r = i(1923)("forEach");
                e.exports = r
                    ? [].forEach
                    : function (e) {
                          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
                      };
            },
            5675: function (e, t, i) {
                var n = i(3206),
                    r = i(3917),
                    s = i(9623),
                    o = function (e) {
                        return function (t, i, o) {
                            var a,
                                l = n(t),
                                c = r(l.length),
                                d = s(o, c);
                            if (e && i != i) {
                                for (; c > d; ) if ((a = l[d++]) != a) return !0;
                            } else for (; c > d; d++) if ((e || d in l) && l[d] === i) return e || d || 0;
                            return !e && -1;
                        };
                    };
                e.exports = { includes: o(!0), indexOf: o(!1) };
            },
            528: function (e, t, i) {
                var n = i(1098),
                    r = i(7530),
                    s = i(9473),
                    o = i(3917),
                    a = i(2768),
                    l = [].push,
                    c = function (e) {
                        var t = 1 == e,
                            i = 2 == e,
                            c = 3 == e,
                            d = 4 == e,
                            u = 6 == e,
                            h = 7 == e,
                            f = 5 == e || u;
                        return function (p, g, m, v) {
                            for (var b, _, y = s(p), w = r(y), x = n(g, m, 3), E = o(w.length), k = 0, S = v || a, L = t ? S(p, E) : i || h ? S(p, 0) : void 0; E > k; k++)
                                if ((f || k in w) && ((_ = x((b = w[k]), k, y)), e))
                                    if (t) L[k] = _;
                                    else if (_)
                                        switch (e) {
                                            case 3:
                                                return !0;
                                            case 5:
                                                return b;
                                            case 6:
                                                return k;
                                            case 2:
                                                l.call(L, b);
                                        }
                                    else
                                        switch (e) {
                                            case 4:
                                                return !1;
                                            case 7:
                                                l.call(L, b);
                                        }
                            return u ? -1 : c || d ? d : L;
                        };
                    };
                e.exports = { forEach: c(0), map: c(1), filter: c(2), some: c(3), every: c(4), find: c(5), findIndex: c(6), filterReject: c(7) };
            },
            4820: function (e, t, i) {
                var n = i(6183),
                    r = i(8149),
                    s = i(4324),
                    o = r("species");
                e.exports = function (e) {
                    return (
                        s >= 51 ||
                        !n(function () {
                            var t = [];
                            return (
                                ((t.constructor = {})[o] = function () {
                                    return { foo: 1 };
                                }),
                                1 !== t[e](Boolean).foo
                            );
                        })
                    );
                };
            },
            1923: function (e, t, i) {
                "use strict";
                var n = i(6183);
                e.exports = function (e, t) {
                    var i = [][e];
                    return (
                        !!i &&
                        n(function () {
                            i.call(
                                null,
                                t ||
                                    function () {
                                        throw 1;
                                    },
                                1
                            );
                        })
                    );
                };
            },
            6589: function (e, t, i) {
                var n = i(6653),
                    r = i(9473),
                    s = i(7530),
                    o = i(3917),
                    a = function (e) {
                        return function (t, i, a, l) {
                            n(i);
                            var c = r(t),
                                d = s(c),
                                u = o(c.length),
                                h = e ? u - 1 : 0,
                                f = e ? -1 : 1;
                            if (a < 2)
                                for (;;) {
                                    if (h in d) {
                                        (l = d[h]), (h += f);
                                        break;
                                    }
                                    if (((h += f), e ? h < 0 : u <= h)) throw TypeError("Reduce of empty array with no initial value");
                                }
                            for (; e ? h >= 0 : u > h; h += f) h in d && (l = i(l, d[h], h, c));
                            return l;
                        };
                    };
                e.exports = { left: a(!1), right: a(!0) };
            },
            9882: function (e, t, i) {
                var n = i(5896),
                    r = i(7931),
                    s = i(8149)("species");
                e.exports = function (e) {
                    var t;
                    return r(e) && ("function" != typeof (t = e.constructor) || (t !== Array && !r(t.prototype)) ? n(t) && null === (t = t[s]) && (t = void 0) : (t = void 0)), void 0 === t ? Array : t;
                };
            },
            2768: function (e, t, i) {
                var n = i(9882);
                e.exports = function (e, t) {
                    return new (n(e))(0 === t ? 0 : t);
                };
            },
            1751: function (e, t, i) {
                var n = i(8149)("iterator"),
                    r = !1;
                try {
                    var s = 0,
                        o = {
                            next: function () {
                                return { done: !!s++ };
                            },
                            return: function () {
                                r = !0;
                            },
                        };
                    (o[n] = function () {
                        return this;
                    }),
                        Array.from(o, function () {
                            throw 2;
                        });
                } catch (e) {}
                e.exports = function (e, t) {
                    if (!t && !r) return !1;
                    var i = !1;
                    try {
                        var s = {};
                        (s[n] = function () {
                            return {
                                next: function () {
                                    return { done: (i = !0) };
                                },
                            };
                        }),
                            e(s);
                    } catch (e) {}
                    return i;
                };
            },
            1510: function (e) {
                var t = {}.toString;
                e.exports = function (e) {
                    return t.call(e).slice(8, -1);
                };
            },
            9225: function (e, t, i) {
                var n = i(4823),
                    r = i(1510),
                    s = i(8149)("toStringTag"),
                    o =
                        "Arguments" ==
                        r(
                            (function () {
                                return arguments;
                            })()
                        );
                e.exports = n
                    ? r
                    : function (e) {
                          var t, i, n;
                          return void 0 === e
                              ? "Undefined"
                              : null === e
                              ? "Null"
                              : "string" ==
                                typeof (i = (function (e, t) {
                                    try {
                                        return e[t];
                                    } catch (e) {}
                                })((t = Object(e)), s))
                              ? i
                              : o
                              ? r(t)
                              : "Object" == (n = r(t)) && "function" == typeof t.callee
                              ? "Arguments"
                              : n;
                      };
            },
            7790: function (e, t, i) {
                "use strict";
                var n = i(9573),
                    r = i(6582).getWeakData,
                    s = i(1474),
                    o = i(5896),
                    a = i(3046),
                    l = i(1518),
                    c = i(528),
                    d = i(3520),
                    u = i(1030),
                    h = u.set,
                    f = u.getterFor,
                    p = c.find,
                    g = c.findIndex,
                    m = 0,
                    v = function (e) {
                        return e.frozen || (e.frozen = new b());
                    },
                    b = function () {
                        this.entries = [];
                    },
                    _ = function (e, t) {
                        return p(e.entries, function (e) {
                            return e[0] === t;
                        });
                    };
                (b.prototype = {
                    get: function (e) {
                        var t = _(this, e);
                        if (t) return t[1];
                    },
                    has: function (e) {
                        return !!_(this, e);
                    },
                    set: function (e, t) {
                        var i = _(this, e);
                        i ? (i[1] = t) : this.entries.push([e, t]);
                    },
                    delete: function (e) {
                        var t = g(this.entries, function (t) {
                            return t[0] === e;
                        });
                        return ~t && this.entries.splice(t, 1), !!~t;
                    },
                }),
                    (e.exports = {
                        getConstructor: function (e, t, i, c) {
                            var u = e(function (e, n) {
                                    a(e, u, t), h(e, { type: t, id: m++, frozen: void 0 }), null != n && l(n, e[c], { that: e, AS_ENTRIES: i });
                                }),
                                p = f(t),
                                g = function (e, t, i) {
                                    var n = p(e),
                                        o = r(s(t), !0);
                                    return !0 === o ? v(n).set(t, i) : (o[n.id] = i), e;
                                };
                            return (
                                n(u.prototype, {
                                    delete: function (e) {
                                        var t = p(this);
                                        if (!o(e)) return !1;
                                        var i = r(e);
                                        return !0 === i ? v(t).delete(e) : i && d(i, t.id) && delete i[t.id];
                                    },
                                    has: function (e) {
                                        var t = p(this);
                                        if (!o(e)) return !1;
                                        var i = r(e);
                                        return !0 === i ? v(t).has(e) : i && d(i, t.id);
                                    },
                                }),
                                n(
                                    u.prototype,
                                    i
                                        ? {
                                              get: function (e) {
                                                  var t = p(this);
                                                  if (o(e)) {
                                                      var i = r(e);
                                                      return !0 === i ? v(t).get(e) : i ? i[t.id] : void 0;
                                                  }
                                              },
                                              set: function (e, t) {
                                                  return g(this, e, t);
                                              },
                                          }
                                        : {
                                              add: function (e) {
                                                  return g(this, e, !0);
                                              },
                                          }
                                ),
                                u
                            );
                        },
                    });
            },
            6645: function (e, t, i) {
                "use strict";
                var n = i(4761),
                    r = i(8454),
                    s = i(1949),
                    o = i(3971),
                    a = i(6582),
                    l = i(1518),
                    c = i(3046),
                    d = i(5896),
                    u = i(6183),
                    h = i(1751),
                    f = i(820),
                    p = i(7770);
                e.exports = function (e, t, i) {
                    var g = -1 !== e.indexOf("Map"),
                        m = -1 !== e.indexOf("Weak"),
                        v = g ? "set" : "add",
                        b = r[e],
                        _ = b && b.prototype,
                        y = b,
                        w = {},
                        x = function (e) {
                            var t = _[e];
                            o(
                                _,
                                e,
                                "add" == e
                                    ? function (e) {
                                          return t.call(this, 0 === e ? 0 : e), this;
                                      }
                                    : "delete" == e
                                    ? function (e) {
                                          return !(m && !d(e)) && t.call(this, 0 === e ? 0 : e);
                                      }
                                    : "get" == e
                                    ? function (e) {
                                          return m && !d(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                                      }
                                    : "has" == e
                                    ? function (e) {
                                          return !(m && !d(e)) && t.call(this, 0 === e ? 0 : e);
                                      }
                                    : function (e, i) {
                                          return t.call(this, 0 === e ? 0 : e, i), this;
                                      }
                            );
                        };
                    if (
                        s(
                            e,
                            "function" != typeof b ||
                                !(
                                    m ||
                                    (_.forEach &&
                                        !u(function () {
                                            new b().entries().next();
                                        }))
                                )
                        )
                    )
                        (y = i.getConstructor(t, e, g, v)), a.enable();
                    else if (s(e, !0)) {
                        var E = new y(),
                            k = E[v](m ? {} : -0, 1) != E,
                            S = u(function () {
                                E.has(1);
                            }),
                            L = h(function (e) {
                                new b(e);
                            }),
                            O =
                                !m &&
                                u(function () {
                                    for (var e = new b(), t = 5; t--; ) e[v](t, t);
                                    return !e.has(-0);
                                });
                        L ||
                            (((y = t(function (t, i) {
                                c(t, y, e);
                                var n = p(new b(), t, y);
                                return null != i && l(i, n[v], { that: n, AS_ENTRIES: g }), n;
                            })).prototype = _),
                            (_.constructor = y)),
                            (S || O) && (x("delete"), x("has"), g && x("get")),
                            (O || k) && x(v),
                            m && _.clear && delete _.clear;
                    }
                    return (w[e] = y), n({ global: !0, forced: y != b }, w), f(y, e), m || i.setStrong(y, e, g), y;
                };
            },
            882: function (e, t, i) {
                var n = i(3520),
                    r = i(1441),
                    s = i(5663),
                    o = i(9168);
                e.exports = function (e, t) {
                    for (var i = r(t), a = o.f, l = s.f, c = 0; c < i.length; c++) {
                        var d = i[c];
                        n(e, d) || a(e, d, l(t, d));
                    }
                };
            },
            7401: function (e, t, i) {
                var n = i(6183);
                e.exports = !n(function () {
                    function e() {}
                    return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
                });
            },
            2538: function (e, t, i) {
                "use strict";
                var n = i(6524).IteratorPrototype,
                    r = i(1525),
                    s = i(9273),
                    o = i(820),
                    a = i(6126),
                    l = function () {
                        return this;
                    };
                e.exports = function (e, t, i) {
                    var c = t + " Iterator";
                    return (e.prototype = r(n, { next: s(1, i) })), o(e, c, !1, !0), (a[c] = l), e;
                };
            },
            1501: function (e, t, i) {
                var n = i(723),
                    r = i(9168),
                    s = i(9273);
                e.exports = n
                    ? function (e, t, i) {
                          return r.f(e, t, s(1, i));
                      }
                    : function (e, t, i) {
                          return (e[t] = i), e;
                      };
            },
            9273: function (e) {
                e.exports = function (e, t) {
                    return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
                };
            },
            7583: function (e, t, i) {
                "use strict";
                var n = i(4761),
                    r = i(2538),
                    s = i(4204),
                    o = i(5900),
                    a = i(820),
                    l = i(1501),
                    c = i(3971),
                    d = i(8149),
                    u = i(8977),
                    h = i(6126),
                    f = i(6524),
                    p = f.IteratorPrototype,
                    g = f.BUGGY_SAFARI_ITERATORS,
                    m = d("iterator"),
                    v = "keys",
                    b = "values",
                    _ = "entries",
                    y = function () {
                        return this;
                    };
                e.exports = function (e, t, i, d, f, w, x) {
                    r(i, t, d);
                    var E,
                        k,
                        S,
                        L = function (e) {
                            if (e === f && C) return C;
                            if (!g && e in j) return j[e];
                            switch (e) {
                                case v:
                                case b:
                                case _:
                                    return function () {
                                        return new i(this, e);
                                    };
                            }
                            return function () {
                                return new i(this);
                            };
                        },
                        O = t + " Iterator",
                        A = !1,
                        j = e.prototype,
                        T = j[m] || j["@@iterator"] || (f && j[f]),
                        C = (!g && T) || L(f),
                        P = ("Array" == t && j.entries) || T;
                    if (
                        (P && ((E = s(P.call(new e()))), p !== Object.prototype && E.next && (u || s(E) === p || (o ? o(E, p) : "function" != typeof E[m] && l(E, m, y)), a(E, O, !0, !0), u && (h[O] = y))),
                        f == b &&
                            T &&
                            T.name !== b &&
                            ((A = !0),
                            (C = function () {
                                return T.call(this);
                            })),
                        (u && !x) || j[m] === C || l(j, m, C),
                        (h[t] = C),
                        f)
                    )
                        if (((k = { values: L(b), keys: w ? C : L(v), entries: L(_) }), x)) for (S in k) (g || A || !(S in j)) && c(j, S, k[S]);
                        else n({ target: t, proto: !0, forced: g || A }, k);
                    return k;
                };
            },
            723: function (e, t, i) {
                var n = i(6183);
                e.exports = !n(function () {
                    return (
                        7 !=
                        Object.defineProperty({}, 1, {
                            get: function () {
                                return 7;
                            },
                        })[1]
                    );
                });
            },
            7282: function (e, t, i) {
                var n = i(8454),
                    r = i(5896),
                    s = n.document,
                    o = r(s) && r(s.createElement);
                e.exports = function (e) {
                    return o ? s.createElement(e) : {};
                };
            },
            6181: function (e) {
                e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0,
                };
            },
            7594: function (e, t, i) {
                var n = i(1510),
                    r = i(8454);
                e.exports = "process" == n(r.process);
            },
            2543: function (e, t, i) {
                var n = i(4991);
                e.exports = n("navigator", "userAgent") || "";
            },
            4324: function (e, t, i) {
                var n,
                    r,
                    s = i(8454),
                    o = i(2543),
                    a = s.process,
                    l = s.Deno,
                    c = (a && a.versions) || (l && l.version),
                    d = c && c.v8;
                d ? (r = (n = d.split("."))[0] < 4 ? 1 : n[0] + n[1]) : o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (r = n[1]), (e.exports = r && +r);
            },
            8409: function (e) {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            },
            4761: function (e, t, i) {
                var n = i(8454),
                    r = i(5663).f,
                    s = i(1501),
                    o = i(3971),
                    a = i(7852),
                    l = i(882),
                    c = i(1949);
                e.exports = function (e, t) {
                    var i,
                        d,
                        u,
                        h,
                        f,
                        p = e.target,
                        g = e.global,
                        m = e.stat;
                    if ((i = g ? n : m ? n[p] || a(p, {}) : (n[p] || {}).prototype))
                        for (d in t) {
                            if (((h = t[d]), (u = e.noTargetGet ? (f = r(i, d)) && f.value : i[d]), !c(g ? d : p + (m ? "." : "#") + d, e.forced) && void 0 !== u)) {
                                if (typeof h == typeof u) continue;
                                l(h, u);
                            }
                            (e.sham || (u && u.sham)) && s(h, "sham", !0), o(i, d, h, e);
                        }
                };
            },
            6183: function (e) {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            9696: function (e, t, i) {
                "use strict";
                i(9989);
                var n = i(3971),
                    r = i(5510),
                    s = i(6183),
                    o = i(8149),
                    a = i(1501),
                    l = o("species"),
                    c = RegExp.prototype;
                e.exports = function (e, t, i, d) {
                    var u = o(e),
                        h = !s(function () {
                            var t = {};
                            return (
                                (t[u] = function () {
                                    return 7;
                                }),
                                7 != ""[e](t)
                            );
                        }),
                        f =
                            h &&
                            !s(function () {
                                var t = !1,
                                    i = /a/;
                                return (
                                    "split" === e &&
                                        (((i = {}).constructor = {}),
                                        (i.constructor[l] = function () {
                                            return i;
                                        }),
                                        (i.flags = ""),
                                        (i[u] = /./[u])),
                                    (i.exec = function () {
                                        return (t = !0), null;
                                    }),
                                    i[u](""),
                                    !t
                                );
                            });
                    if (!h || !f || i) {
                        var p = /./[u],
                            g = t(u, ""[e], function (e, t, i, n, s) {
                                var o = t.exec;
                                return o === r || o === c.exec ? (h && !s ? { done: !0, value: p.call(t, i, n) } : { done: !0, value: e.call(i, t, n) }) : { done: !1 };
                            });
                        n(String.prototype, e, g[0]), n(c, u, g[1]);
                    }
                    d && a(c[u], "sham", !0);
                };
            },
            3116: function (e, t, i) {
                var n = i(6183);
                e.exports = !n(function () {
                    return Object.isExtensible(Object.preventExtensions({}));
                });
            },
            1098: function (e, t, i) {
                var n = i(6653);
                e.exports = function (e, t, i) {
                    if ((n(e), void 0 === t)) return e;
                    switch (i) {
                        case 0:
                            return function () {
                                return e.call(t);
                            };
                        case 1:
                            return function (i) {
                                return e.call(t, i);
                            };
                        case 2:
                            return function (i, n) {
                                return e.call(t, i, n);
                            };
                        case 3:
                            return function (i, n, r) {
                                return e.call(t, i, n, r);
                            };
                    }
                    return function () {
                        return e.apply(t, arguments);
                    };
                };
            },
            4991: function (e, t, i) {
                var n = i(8454),
                    r = function (e) {
                        return "function" == typeof e ? e : void 0;
                    };
                e.exports = function (e, t) {
                    return arguments.length < 2 ? r(n[e]) : n[e] && n[e][t];
                };
            },
            650: function (e, t, i) {
                var n = i(9225),
                    r = i(6126),
                    s = i(8149)("iterator");
                e.exports = function (e) {
                    if (null != e) return e[s] || e["@@iterator"] || r[n(e)];
                };
            },
            7755: function (e, t, i) {
                var n = i(1474),
                    r = i(650);
                e.exports = function (e, t) {
                    var i = arguments.length < 2 ? r(e) : t;
                    if ("function" != typeof i) throw TypeError(String(e) + " is not iterable");
                    return n(i.call(e));
                };
            },
            4742: function (e, t, i) {
                var n = i(9473),
                    r = Math.floor,
                    s = "".replace,
                    o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                    a = /\$([$&'`]|\d{1,2})/g;
                e.exports = function (e, t, i, l, c, d) {
                    var u = i + e.length,
                        h = l.length,
                        f = a;
                    return (
                        void 0 !== c && ((c = n(c)), (f = o)),
                        s.call(d, f, function (n, s) {
                            var o;
                            switch (s.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return e;
                                case "`":
                                    return t.slice(0, i);
                                case "'":
                                    return t.slice(u);
                                case "<":
                                    o = c[s.slice(1, -1)];
                                    break;
                                default:
                                    var a = +s;
                                    if (0 === a) return n;
                                    if (a > h) {
                                        var d = r(a / 10);
                                        return 0 === d ? n : d <= h ? (void 0 === l[d - 1] ? s.charAt(1) : l[d - 1] + s.charAt(1)) : n;
                                    }
                                    o = l[a - 1];
                            }
                            return void 0 === o ? "" : o;
                        })
                    );
                };
            },
            8454: function (e, t, i) {
                var n = function (e) {
                    return e && e.Math == Math && e;
                };
                e.exports =
                    n("object" == typeof globalThis && globalThis) ||
                    n("object" == typeof window && window) ||
                    n("object" == typeof self && self) ||
                    n("object" == typeof i.g && i.g) ||
                    (function () {
                        return this;
                    })() ||
                    Function("return this")();
            },
            3520: function (e, t, i) {
                var n = i(9473),
                    r = {}.hasOwnProperty;
                e.exports =
                    Object.hasOwn ||
                    function (e, t) {
                        return r.call(n(e), t);
                    };
            },
            4377: function (e) {
                e.exports = {};
            },
            7461: function (e, t, i) {
                var n = i(4991);
                e.exports = n("document", "documentElement");
            },
            4985: function (e, t, i) {
                var n = i(723),
                    r = i(6183),
                    s = i(7282);
                e.exports =
                    !n &&
                    !r(function () {
                        return (
                            7 !=
                            Object.defineProperty(s("div"), "a", {
                                get: function () {
                                    return 7;
                                },
                            }).a
                        );
                    });
            },
            7530: function (e, t, i) {
                var n = i(6183),
                    r = i(1510),
                    s = "".split;
                e.exports = n(function () {
                    return !Object("z").propertyIsEnumerable(0);
                })
                    ? function (e) {
                          return "String" == r(e) ? s.call(e, "") : Object(e);
                      }
                    : Object;
            },
            7770: function (e, t, i) {
                var n = i(5896),
                    r = i(5900);
                e.exports = function (e, t, i) {
                    var s, o;
                    return r && "function" == typeof (s = t.constructor) && s !== i && n((o = s.prototype)) && o !== i.prototype && r(e, o), e;
                };
            },
            6901: function (e, t, i) {
                var n = i(2047),
                    r = Function.toString;
                "function" != typeof n.inspectSource &&
                    (n.inspectSource = function (e) {
                        return r.call(e);
                    }),
                    (e.exports = n.inspectSource);
            },
            6582: function (e, t, i) {
                var n = i(4761),
                    r = i(4377),
                    s = i(5896),
                    o = i(3520),
                    a = i(9168).f,
                    l = i(6785),
                    c = i(6675),
                    d = i(9059),
                    u = i(3116),
                    h = !1,
                    f = d("meta"),
                    p = 0,
                    g =
                        Object.isExtensible ||
                        function () {
                            return !0;
                        },
                    m = function (e) {
                        a(e, f, { value: { objectID: "O" + p++, weakData: {} } });
                    },
                    v = (e.exports = {
                        enable: function () {
                            (v.enable = function () {}), (h = !0);
                            var e = l.f,
                                t = [].splice,
                                i = {};
                            (i[f] = 1),
                                e(i).length &&
                                    ((l.f = function (i) {
                                        for (var n = e(i), r = 0, s = n.length; r < s; r++)
                                            if (n[r] === f) {
                                                t.call(n, r, 1);
                                                break;
                                            }
                                        return n;
                                    }),
                                    n({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: c.f }));
                        },
                        fastKey: function (e, t) {
                            if (!s(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                            if (!o(e, f)) {
                                if (!g(e)) return "F";
                                if (!t) return "E";
                                m(e);
                            }
                            return e[f].objectID;
                        },
                        getWeakData: function (e, t) {
                            if (!o(e, f)) {
                                if (!g(e)) return !0;
                                if (!t) return !1;
                                m(e);
                            }
                            return e[f].weakData;
                        },
                        onFreeze: function (e) {
                            return u && h && g(e) && !o(e, f) && m(e), e;
                        },
                    });
                r[f] = !0;
            },
            1030: function (e, t, i) {
                var n,
                    r,
                    s,
                    o = i(4404),
                    a = i(8454),
                    l = i(5896),
                    c = i(1501),
                    d = i(3520),
                    u = i(2047),
                    h = i(8873),
                    f = i(4377),
                    p = "Object already initialized",
                    g = a.WeakMap;
                if (o || u.state) {
                    var m = u.state || (u.state = new g()),
                        v = m.get,
                        b = m.has,
                        _ = m.set;
                    (n = function (e, t) {
                        if (b.call(m, e)) throw new TypeError(p);
                        return (t.facade = e), _.call(m, e, t), t;
                    }),
                        (r = function (e) {
                            return v.call(m, e) || {};
                        }),
                        (s = function (e) {
                            return b.call(m, e);
                        });
                } else {
                    var y = h("state");
                    (f[y] = !0),
                        (n = function (e, t) {
                            if (d(e, y)) throw new TypeError(p);
                            return (t.facade = e), c(e, y, t), t;
                        }),
                        (r = function (e) {
                            return d(e, y) ? e[y] : {};
                        }),
                        (s = function (e) {
                            return d(e, y);
                        });
                }
                e.exports = {
                    set: n,
                    get: r,
                    has: s,
                    enforce: function (e) {
                        return s(e) ? r(e) : n(e, {});
                    },
                    getterFor: function (e) {
                        return function (t) {
                            var i;
                            if (!l(t) || (i = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                            return i;
                        };
                    },
                };
            },
            5859: function (e, t, i) {
                var n = i(8149),
                    r = i(6126),
                    s = n("iterator"),
                    o = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (r.Array === e || o[s] === e);
                };
            },
            7931: function (e, t, i) {
                var n = i(1510);
                e.exports =
                    Array.isArray ||
                    function (e) {
                        return "Array" == n(e);
                    };
            },
            1949: function (e, t, i) {
                var n = i(6183),
                    r = /#|\.prototype\./,
                    s = function (e, t) {
                        var i = a[o(e)];
                        return i == c || (i != l && ("function" == typeof t ? n(t) : !!t));
                    },
                    o = (s.normalize = function (e) {
                        return String(e).replace(r, ".").toLowerCase();
                    }),
                    a = (s.data = {}),
                    l = (s.NATIVE = "N"),
                    c = (s.POLYFILL = "P");
                e.exports = s;
            },
            5896: function (e) {
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e;
                };
            },
            8977: function (e) {
                e.exports = !1;
            },
            1527: function (e, t, i) {
                var n = i(4991),
                    r = i(4746);
                e.exports = r
                    ? function (e) {
                          return "symbol" == typeof e;
                      }
                    : function (e) {
                          var t = n("Symbol");
                          return "function" == typeof t && Object(e) instanceof t;
                      };
            },
            1518: function (e, t, i) {
                var n = i(1474),
                    r = i(5859),
                    s = i(3917),
                    o = i(1098),
                    a = i(7755),
                    l = i(650),
                    c = i(9193),
                    d = function (e, t) {
                        (this.stopped = e), (this.result = t);
                    };
                e.exports = function (e, t, i) {
                    var u,
                        h,
                        f,
                        p,
                        g,
                        m,
                        v,
                        b = i && i.that,
                        _ = !(!i || !i.AS_ENTRIES),
                        y = !(!i || !i.IS_ITERATOR),
                        w = !(!i || !i.INTERRUPTED),
                        x = o(t, b, 1 + _ + w),
                        E = function (e) {
                            return u && c(u, "normal", e), new d(!0, e);
                        },
                        k = function (e) {
                            return _ ? (n(e), w ? x(e[0], e[1], E) : x(e[0], e[1])) : w ? x(e, E) : x(e);
                        };
                    if (y) u = e;
                    else {
                        if ("function" != typeof (h = l(e))) throw TypeError("Target is not iterable");
                        if (r(h)) {
                            for (f = 0, p = s(e.length); p > f; f++) if ((g = k(e[f])) && g instanceof d) return g;
                            return new d(!1);
                        }
                        u = a(e, h);
                    }
                    for (m = u.next; !(v = m.call(u)).done; ) {
                        try {
                            g = k(v.value);
                        } catch (e) {
                            c(u, "throw", e);
                        }
                        if ("object" == typeof g && g && g instanceof d) return g;
                    }
                    return new d(!1);
                };
            },
            9193: function (e, t, i) {
                var n = i(1474);
                e.exports = function (e, t, i) {
                    var r, s;
                    n(e);
                    try {
                        if (void 0 === (r = e.return)) {
                            if ("throw" === t) throw i;
                            return i;
                        }
                        r = r.call(e);
                    } catch (e) {
                        (s = !0), (r = e);
                    }
                    if ("throw" === t) throw i;
                    if (s) throw r;
                    return n(r), i;
                };
            },
            6524: function (e, t, i) {
                "use strict";
                var n,
                    r,
                    s,
                    o = i(6183),
                    a = i(4204),
                    l = i(1501),
                    c = i(3520),
                    d = i(8149),
                    u = i(8977),
                    h = d("iterator"),
                    f = !1;
                [].keys && ("next" in (s = [].keys()) ? (r = a(a(s))) !== Object.prototype && (n = r) : (f = !0));
                var p =
                    null == n ||
                    o(function () {
                        var e = {};
                        return n[h].call(e) !== e;
                    });
                p && (n = {}),
                    (u && !p) ||
                        c(n, h) ||
                        l(n, h, function () {
                            return this;
                        }),
                    (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: f });
            },
            6126: function (e) {
                e.exports = {};
            },
            323: function (e, t, i) {
                var n = i(4324),
                    r = i(6183);
                e.exports =
                    !!Object.getOwnPropertySymbols &&
                    !r(function () {
                        var e = Symbol();
                        return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && n && n < 41);
                    });
            },
            4404: function (e, t, i) {
                var n = i(8454),
                    r = i(6901),
                    s = n.WeakMap;
                e.exports = "function" == typeof s && /native code/.test(r(s));
            },
            8513: function (e, t, i) {
                var n = i(8454),
                    r = i(7655),
                    s = i(9749).trim,
                    o = i(8342),
                    a = n.parseInt,
                    l = /^[+-]?0[Xx]/,
                    c = 8 !== a(o + "08") || 22 !== a(o + "0x16");
                e.exports = c
                    ? function (e, t) {
                          var i = s(r(e));
                          return a(i, t >>> 0 || (l.test(i) ? 16 : 10));
                      }
                    : a;
            },
            4727: function (e, t, i) {
                "use strict";
                var n = i(723),
                    r = i(6183),
                    s = i(1340),
                    o = i(8074),
                    a = i(4043),
                    l = i(9473),
                    c = i(7530),
                    d = Object.assign,
                    u = Object.defineProperty;
                e.exports =
                    !d ||
                    r(function () {
                        if (
                            n &&
                            1 !==
                                d(
                                    { b: 1 },
                                    d(
                                        u({}, "a", {
                                            enumerable: !0,
                                            get: function () {
                                                u(this, "b", { value: 3, enumerable: !1 });
                                            },
                                        }),
                                        { b: 2 }
                                    )
                                ).b
                        )
                            return !0;
                        var e = {},
                            t = {},
                            i = Symbol(),
                            r = "abcdefghijklmnopqrst";
                        return (
                            (e[i] = 7),
                            r.split("").forEach(function (e) {
                                t[e] = e;
                            }),
                            7 != d({}, e)[i] || s(d({}, t)).join("") != r
                        );
                    })
                        ? function (e, t) {
                              for (var i = l(e), r = arguments.length, d = 1, u = o.f, h = a.f; r > d; )
                                  for (var f, p = c(arguments[d++]), g = u ? s(p).concat(u(p)) : s(p), m = g.length, v = 0; m > v; ) (f = g[v++]), (n && !h.call(p, f)) || (i[f] = p[f]);
                              return i;
                          }
                        : d;
            },
            1525: function (e, t, i) {
                var n,
                    r = i(1474),
                    s = i(262),
                    o = i(8409),
                    a = i(4377),
                    l = i(7461),
                    c = i(7282),
                    d = i(8873)("IE_PROTO"),
                    u = function () {},
                    h = function (e) {
                        return "<script>" + e + "</script>";
                    },
                    f = function (e) {
                        e.write(h("")), e.close();
                        var t = e.parentWindow.Object;
                        return (e = null), t;
                    },
                    p = function () {
                        try {
                            n = new ActiveXObject("htmlfile");
                        } catch (e) {}
                        var e, t;
                        p =
                            "undefined" != typeof document
                                ? document.domain && n
                                    ? f(n)
                                    : (((t = c("iframe")).style.display = "none"), l.appendChild(t), (t.src = String("javascript:")), (e = t.contentWindow.document).open(), e.write(h("document.F=Object")), e.close(), e.F)
                                : f(n);
                        for (var i = o.length; i--; ) delete p.prototype[o[i]];
                        return p();
                    };
                (a[d] = !0),
                    (e.exports =
                        Object.create ||
                        function (e, t) {
                            var i;
                            return null !== e ? ((u.prototype = r(e)), (i = new u()), (u.prototype = null), (i[d] = e)) : (i = p()), void 0 === t ? i : s(i, t);
                        });
            },
            262: function (e, t, i) {
                var n = i(723),
                    r = i(9168),
                    s = i(1474),
                    o = i(1340);
                e.exports = n
                    ? Object.defineProperties
                    : function (e, t) {
                          s(e);
                          for (var i, n = o(t), a = n.length, l = 0; a > l; ) r.f(e, (i = n[l++]), t[i]);
                          return e;
                      };
            },
            9168: function (e, t, i) {
                var n = i(723),
                    r = i(4985),
                    s = i(1474),
                    o = i(2988),
                    a = Object.defineProperty;
                t.f = n
                    ? a
                    : function (e, t, i) {
                          if ((s(e), (t = o(t)), s(i), r))
                              try {
                                  return a(e, t, i);
                              } catch (e) {}
                          if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
                          return "value" in i && (e[t] = i.value), e;
                      };
            },
            5663: function (e, t, i) {
                var n = i(723),
                    r = i(4043),
                    s = i(9273),
                    o = i(3206),
                    a = i(2988),
                    l = i(3520),
                    c = i(4985),
                    d = Object.getOwnPropertyDescriptor;
                t.f = n
                    ? d
                    : function (e, t) {
                          if (((e = o(e)), (t = a(t)), c))
                              try {
                                  return d(e, t);
                              } catch (e) {}
                          if (l(e, t)) return s(!r.f.call(e, t), e[t]);
                      };
            },
            6675: function (e, t, i) {
                var n = i(3206),
                    r = i(6785).f,
                    s = {}.toString,
                    o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                e.exports.f = function (e) {
                    return o && "[object Window]" == s.call(e)
                        ? (function (e) {
                              try {
                                  return r(e);
                              } catch (e) {
                                  return o.slice();
                              }
                          })(e)
                        : r(n(e));
                };
            },
            6785: function (e, t, i) {
                var n = i(5113),
                    r = i(8409).concat("length", "prototype");
                t.f =
                    Object.getOwnPropertyNames ||
                    function (e) {
                        return n(e, r);
                    };
            },
            8074: function (e, t) {
                t.f = Object.getOwnPropertySymbols;
            },
            4204: function (e, t, i) {
                var n = i(3520),
                    r = i(9473),
                    s = i(8873),
                    o = i(7401),
                    a = s("IE_PROTO"),
                    l = Object.prototype;
                e.exports = o
                    ? Object.getPrototypeOf
                    : function (e) {
                          return (e = r(e)), n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null;
                      };
            },
            5113: function (e, t, i) {
                var n = i(3520),
                    r = i(3206),
                    s = i(5675).indexOf,
                    o = i(4377);
                e.exports = function (e, t) {
                    var i,
                        a = r(e),
                        l = 0,
                        c = [];
                    for (i in a) !n(o, i) && n(a, i) && c.push(i);
                    for (; t.length > l; ) n(a, (i = t[l++])) && (~s(c, i) || c.push(i));
                    return c;
                };
            },
            1340: function (e, t, i) {
                var n = i(5113),
                    r = i(8409);
                e.exports =
                    Object.keys ||
                    function (e) {
                        return n(e, r);
                    };
            },
            4043: function (e, t) {
                "use strict";
                var i = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    r = n && !i.call({ 1: 2 }, 1);
                t.f = r
                    ? function (e) {
                          var t = n(this, e);
                          return !!t && t.enumerable;
                      }
                    : i;
            },
            5900: function (e, t, i) {
                var n = i(1474),
                    r = i(2004);
                e.exports =
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function () {
                              var e,
                                  t = !1,
                                  i = {};
                              try {
                                  (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), (t = i instanceof Array);
                              } catch (e) {}
                              return function (i, s) {
                                  return n(i), r(s), t ? e.call(i, s) : (i.__proto__ = s), i;
                              };
                          })()
                        : void 0);
            },
            4117: function (e, t, i) {
                "use strict";
                var n = i(4823),
                    r = i(9225);
                e.exports = n
                    ? {}.toString
                    : function () {
                          return "[object " + r(this) + "]";
                      };
            },
            6891: function (e, t, i) {
                var n = i(5896);
                e.exports = function (e, t) {
                    var i, r;
                    if ("string" === t && "function" == typeof (i = e.toString) && !n((r = i.call(e)))) return r;
                    if ("function" == typeof (i = e.valueOf) && !n((r = i.call(e)))) return r;
                    if ("string" !== t && "function" == typeof (i = e.toString) && !n((r = i.call(e)))) return r;
                    throw TypeError("Can't convert object to primitive value");
                };
            },
            1441: function (e, t, i) {
                var n = i(4991),
                    r = i(6785),
                    s = i(8074),
                    o = i(1474);
                e.exports =
                    n("Reflect", "ownKeys") ||
                    function (e) {
                        var t = r.f(o(e)),
                            i = s.f;
                        return i ? t.concat(i(e)) : t;
                    };
            },
            9573: function (e, t, i) {
                var n = i(3971);
                e.exports = function (e, t, i) {
                    for (var r in t) n(e, r, t[r], i);
                    return e;
                };
            },
            3971: function (e, t, i) {
                var n = i(8454),
                    r = i(1501),
                    s = i(3520),
                    o = i(7852),
                    a = i(6901),
                    l = i(1030),
                    c = l.get,
                    d = l.enforce,
                    u = String(String).split("String");
                (e.exports = function (e, t, i, a) {
                    var l,
                        c = !!a && !!a.unsafe,
                        h = !!a && !!a.enumerable,
                        f = !!a && !!a.noTargetGet;
                    "function" == typeof i && ("string" != typeof t || s(i, "name") || r(i, "name", t), (l = d(i)).source || (l.source = u.join("string" == typeof t ? t : ""))),
                        e !== n ? (c ? !f && e[t] && (h = !0) : delete e[t], h ? (e[t] = i) : r(e, t, i)) : h ? (e[t] = i) : o(t, i);
                })(Function.prototype, "toString", function () {
                    return ("function" == typeof this && c(this).source) || a(this);
                });
            },
            8734: function (e, t, i) {
                var n = i(1510),
                    r = i(5510);
                e.exports = function (e, t) {
                    var i = e.exec;
                    if ("function" == typeof i) {
                        var s = i.call(e, t);
                        if ("object" != typeof s) throw TypeError("RegExp exec method returned something other than an Object or null");
                        return s;
                    }
                    if ("RegExp" !== n(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                    return r.call(e, t);
                };
            },
            5510: function (e, t, i) {
                "use strict";
                var n,
                    r,
                    s = i(7655),
                    o = i(8383),
                    a = i(6558),
                    l = i(1748),
                    c = i(1525),
                    d = i(1030).get,
                    u = i(7672),
                    h = i(9729),
                    f = RegExp.prototype.exec,
                    p = l("native-string-replace", String.prototype.replace),
                    g = f,
                    m = ((n = /a/), (r = /b*/g), f.call(n, "a"), f.call(r, "a"), 0 !== n.lastIndex || 0 !== r.lastIndex),
                    v = a.UNSUPPORTED_Y || a.BROKEN_CARET,
                    b = void 0 !== /()??/.exec("")[1];
                (m || b || v || u || h) &&
                    (g = function (e) {
                        var t,
                            i,
                            n,
                            r,
                            a,
                            l,
                            u,
                            h = this,
                            _ = d(h),
                            y = s(e),
                            w = _.raw;
                        if (w) return (w.lastIndex = h.lastIndex), (t = g.call(w, y)), (h.lastIndex = w.lastIndex), t;
                        var x = _.groups,
                            E = v && h.sticky,
                            k = o.call(h),
                            S = h.source,
                            L = 0,
                            O = y;
                        if (
                            (E &&
                                (-1 === (k = k.replace("y", "")).indexOf("g") && (k += "g"),
                                (O = y.slice(h.lastIndex)),
                                h.lastIndex > 0 && (!h.multiline || (h.multiline && "\n" !== y.charAt(h.lastIndex - 1))) && ((S = "(?: " + S + ")"), (O = " " + O), L++),
                                (i = new RegExp("^(?:" + S + ")", k))),
                            b && (i = new RegExp("^" + S + "$(?!\\s)", k)),
                            m && (n = h.lastIndex),
                            (r = f.call(E ? i : h, O)),
                            E ? (r ? ((r.input = r.input.slice(L)), (r[0] = r[0].slice(L)), (r.index = h.lastIndex), (h.lastIndex += r[0].length)) : (h.lastIndex = 0)) : m && r && (h.lastIndex = h.global ? r.index + r[0].length : n),
                            b &&
                                r &&
                                r.length > 1 &&
                                p.call(r[0], i, function () {
                                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (r[a] = void 0);
                                }),
                            r && x)
                        )
                            for (r.groups = l = c(null), a = 0; a < x.length; a++) l[(u = x[a])[0]] = r[u[1]];
                        return r;
                    }),
                    (e.exports = g);
            },
            8383: function (e, t, i) {
                "use strict";
                var n = i(1474);
                e.exports = function () {
                    var e = n(this),
                        t = "";
                    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
                };
            },
            6558: function (e, t, i) {
                var n = i(6183),
                    r = i(8454).RegExp;
                (t.UNSUPPORTED_Y = n(function () {
                    var e = r("a", "y");
                    return (e.lastIndex = 2), null != e.exec("abcd");
                })),
                    (t.BROKEN_CARET = n(function () {
                        var e = r("^r", "gy");
                        return (e.lastIndex = 2), null != e.exec("str");
                    }));
            },
            7672: function (e, t, i) {
                var n = i(6183),
                    r = i(8454).RegExp;
                e.exports = n(function () {
                    var e = r(".", "s");
                    return !(e.dotAll && e.exec("\n") && "s" === e.flags);
                });
            },
            9729: function (e, t, i) {
                var n = i(6183),
                    r = i(8454).RegExp;
                e.exports = n(function () {
                    var e = r("(?<a>b)", "g");
                    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
                });
            },
            7431: function (e) {
                e.exports = function (e) {
                    if (null == e) throw TypeError("Can't call method on " + e);
                    return e;
                };
            },
            7852: function (e, t, i) {
                var n = i(8454);
                e.exports = function (e, t) {
                    try {
                        Object.defineProperty(n, e, { value: t, configurable: !0, writable: !0 });
                    } catch (i) {
                        n[e] = t;
                    }
                    return t;
                };
            },
            820: function (e, t, i) {
                var n = i(9168).f,
                    r = i(3520),
                    s = i(8149)("toStringTag");
                e.exports = function (e, t, i) {
                    e && !r((e = i ? e : e.prototype), s) && n(e, s, { configurable: !0, value: t });
                };
            },
            8873: function (e, t, i) {
                var n = i(1748),
                    r = i(9059),
                    s = n("keys");
                e.exports = function (e) {
                    return s[e] || (s[e] = r(e));
                };
            },
            2047: function (e, t, i) {
                var n = i(8454),
                    r = i(7852),
                    s = "__core-js_shared__",
                    o = n[s] || r(s, {});
                e.exports = o;
            },
            1748: function (e, t, i) {
                var n = i(8977),
                    r = i(2047);
                (e.exports = function (e, t) {
                    return r[e] || (r[e] = void 0 !== t ? t : {});
                })("versions", []).push({ version: "3.17.1", mode: n ? "pure" : "global", copyright: "?? 2021 Denis Pushkarev (zloirock.ru)" });
            },
            7321: function (e, t, i) {
                var n = i(8874),
                    r = i(7655),
                    s = i(7431),
                    o = function (e) {
                        return function (t, i) {
                            var o,
                                a,
                                l = r(s(t)),
                                c = n(i),
                                d = l.length;
                            return c < 0 || c >= d
                                ? e
                                    ? ""
                                    : void 0
                                : (o = l.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === d || (a = l.charCodeAt(c + 1)) < 56320 || a > 57343
                                ? e
                                    ? l.charAt(c)
                                    : o
                                : e
                                ? l.slice(c, c + 2)
                                : a - 56320 + ((o - 55296) << 10) + 65536;
                        };
                    };
                e.exports = { codeAt: o(!1), charAt: o(!0) };
            },
            9749: function (e, t, i) {
                var n = i(7431),
                    r = i(7655),
                    s = "[" + i(8342) + "]",
                    o = RegExp("^" + s + s + "*"),
                    a = RegExp(s + s + "*$"),
                    l = function (e) {
                        return function (t) {
                            var i = r(n(t));
                            return 1 & e && (i = i.replace(o, "")), 2 & e && (i = i.replace(a, "")), i;
                        };
                    };
                e.exports = { start: l(1), end: l(2), trim: l(3) };
            },
            9623: function (e, t, i) {
                var n = i(8874),
                    r = Math.max,
                    s = Math.min;
                e.exports = function (e, t) {
                    var i = n(e);
                    return i < 0 ? r(i + t, 0) : s(i, t);
                };
            },
            3206: function (e, t, i) {
                var n = i(7530),
                    r = i(7431);
                e.exports = function (e) {
                    return n(r(e));
                };
            },
            8874: function (e) {
                var t = Math.ceil,
                    i = Math.floor;
                e.exports = function (e) {
                    return isNaN((e = +e)) ? 0 : (e > 0 ? i : t)(e);
                };
            },
            3917: function (e, t, i) {
                var n = i(8874),
                    r = Math.min;
                e.exports = function (e) {
                    return e > 0 ? r(n(e), 9007199254740991) : 0;
                };
            },
            9473: function (e, t, i) {
                var n = i(7431);
                e.exports = function (e) {
                    return Object(n(e));
                };
            },
            3948: function (e, t, i) {
                var n = i(5896),
                    r = i(1527),
                    s = i(6891),
                    o = i(8149)("toPrimitive");
                e.exports = function (e, t) {
                    if (!n(e) || r(e)) return e;
                    var i,
                        a = e[o];
                    if (void 0 !== a) {
                        if ((void 0 === t && (t = "default"), (i = a.call(e, t)), !n(i) || r(i))) return i;
                        throw TypeError("Can't convert object to primitive value");
                    }
                    return void 0 === t && (t = "number"), s(e, t);
                };
            },
            2988: function (e, t, i) {
                var n = i(3948),
                    r = i(1527);
                e.exports = function (e) {
                    var t = n(e, "string");
                    return r(t) ? t : String(t);
                };
            },
            4823: function (e, t, i) {
                var n = {};
                (n[i(8149)("toStringTag")] = "z"), (e.exports = "[object z]" === String(n));
            },
            7655: function (e, t, i) {
                var n = i(1527);
                e.exports = function (e) {
                    if (n(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return String(e);
                };
            },
            9059: function (e) {
                var t = 0,
                    i = Math.random();
                e.exports = function (e) {
                    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + i).toString(36);
                };
            },
            4746: function (e, t, i) {
                var n = i(323);
                e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            8149: function (e, t, i) {
                var n = i(8454),
                    r = i(1748),
                    s = i(3520),
                    o = i(9059),
                    a = i(323),
                    l = i(4746),
                    c = r("wks"),
                    d = n.Symbol,
                    u = l ? d : (d && d.withoutSetter) || o;
                e.exports = function (e) {
                    return (s(c, e) && (a || "string" == typeof c[e])) || (a && s(d, e) ? (c[e] = d[e]) : (c[e] = u("Symbol." + e))), c[e];
                };
            },
            8342: function (e) {
                e.exports = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff";
            },
            8165: function (e, t, i) {
                "use strict";
                var n = i(4761),
                    r = i(528).filter;
                n(
                    { target: "Array", proto: !0, forced: !i(4820)("filter") },
                    {
                        filter: function (e) {
                            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    }
                );
            },
            9399: function (e, t, i) {
                "use strict";
                var n = i(4761),
                    r = i(1269);
                n({ target: "Array", proto: !0, forced: [].forEach != r }, { forEach: r });
            },
            7543: function (e, t, i) {
                "use strict";
                var n = i(3206),
                    r = i(9256),
                    s = i(6126),
                    o = i(1030),
                    a = i(7583),
                    l = "Array Iterator",
                    c = o.set,
                    d = o.getterFor(l);
                (e.exports = a(
                    Array,
                    "Array",
                    function (e, t) {
                        c(this, { type: l, target: n(e), index: 0, kind: t });
                    },
                    function () {
                        var e = d(this),
                            t = e.target,
                            i = e.kind,
                            n = e.index++;
                        return !t || n >= t.length ? ((e.target = void 0), { value: void 0, done: !0 }) : "keys" == i ? { value: n, done: !1 } : "values" == i ? { value: t[n], done: !1 } : { value: [n, t[n]], done: !1 };
                    },
                    "values"
                )),
                    (s.Arguments = s.Array),
                    r("keys"),
                    r("values"),
                    r("entries");
            },
            7985: function (e, t, i) {
                "use strict";
                var n = i(4761),
                    r = i(6589).left,
                    s = i(1923),
                    o = i(4324),
                    a = i(7594);
                n(
                    { target: "Array", proto: !0, forced: !s("reduce") || (!a && o > 79 && o < 83) },
                    {
                        reduce: function (e) {
                            return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    }
                );
            },
            6618: function (e, t, i) {
                var n = i(723),
                    r = i(9168).f,
                    s = Function.prototype,
                    o = s.toString,
                    a = /^\s*function ([^ (]*)/,
                    l = "name";
                n &&
                    !(l in s) &&
                    r(s, l, {
                        configurable: !0,
                        get: function () {
                            try {
                                return o.call(this).match(a)[1];
                            } catch (e) {
                                return "";
                            }
                        },
                    });
            },
            7692: function (e, t, i) {
                var n = i(4761),
                    r = i(4727);
                n({ target: "Object", stat: !0, forced: Object.assign !== r }, { assign: r });
            },
            2352: function (e, t, i) {
                var n = i(4823),
                    r = i(3971),
                    s = i(4117);
                n || r(Object.prototype, "toString", s, { unsafe: !0 });
            },
            4249: function (e, t, i) {
                var n = i(4761),
                    r = i(8513);
                n({ global: !0, forced: parseInt != r }, { parseInt: r });
            },
            9989: function (e, t, i) {
                "use strict";
                var n = i(4761),
                    r = i(5510);
                n({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
            },
            3344: function (e, t, i) {
                "use strict";
                var n = i(7321).charAt,
                    r = i(7655),
                    s = i(1030),
                    o = i(7583),
                    a = "String Iterator",
                    l = s.set,
                    c = s.getterFor(a);
                o(
                    String,
                    "String",
                    function (e) {
                        l(this, { type: a, string: r(e), index: 0 });
                    },
                    function () {
                        var e,
                            t = c(this),
                            i = t.string,
                            r = t.index;
                        return r >= i.length ? { value: void 0, done: !0 } : ((e = n(i, r)), (t.index += e.length), { value: e, done: !1 });
                    }
                );
            },
            8307: function (e, t, i) {
                "use strict";
                var n = i(9696),
                    r = i(1474),
                    s = i(3917),
                    o = i(7655),
                    a = i(7431),
                    l = i(3615),
                    c = i(8734);
                n("match", function (e, t, i) {
                    return [
                        function (t) {
                            var i = a(this),
                                n = null == t ? void 0 : t[e];
                            return void 0 !== n ? n.call(t, i) : new RegExp(t)[e](o(i));
                        },
                        function (e) {
                            var n = r(this),
                                a = o(e),
                                d = i(t, n, a);
                            if (d.done) return d.value;
                            if (!n.global) return c(n, a);
                            var u = n.unicode;
                            n.lastIndex = 0;
                            for (var h, f = [], p = 0; null !== (h = c(n, a)); ) {
                                var g = o(h[0]);
                                (f[p] = g), "" === g && (n.lastIndex = l(a, s(n.lastIndex), u)), p++;
                            }
                            return 0 === p ? null : f;
                        },
                    ];
                });
            },
            4390: function (e, t, i) {
                "use strict";
                var n = i(9696),
                    r = i(6183),
                    s = i(1474),
                    o = i(8874),
                    a = i(3917),
                    l = i(7655),
                    c = i(7431),
                    d = i(3615),
                    u = i(4742),
                    h = i(8734),
                    f = i(8149)("replace"),
                    p = Math.max,
                    g = Math.min,
                    m = "$0" === "a".replace(/./, "$0"),
                    v = !!/./[f] && "" === /./[f]("a", "$0");
                n(
                    "replace",
                    function (e, t, i) {
                        var n = v ? "$" : "$0";
                        return [
                            function (e, i) {
                                var n = c(this),
                                    r = null == e ? void 0 : e[f];
                                return void 0 !== r ? r.call(e, n, i) : t.call(l(n), e, i);
                            },
                            function (e, r) {
                                var c = s(this),
                                    f = l(e);
                                if ("string" == typeof r && -1 === r.indexOf(n) && -1 === r.indexOf("$<")) {
                                    var m = i(t, c, f, r);
                                    if (m.done) return m.value;
                                }
                                var v = "function" == typeof r;
                                v || (r = l(r));
                                var b = c.global;
                                if (b) {
                                    var _ = c.unicode;
                                    c.lastIndex = 0;
                                }
                                for (var y = []; ; ) {
                                    var w = h(c, f);
                                    if (null === w) break;
                                    if ((y.push(w), !b)) break;
                                    "" === l(w[0]) && (c.lastIndex = d(f, a(c.lastIndex), _));
                                }
                                for (var x, E = "", k = 0, S = 0; S < y.length; S++) {
                                    w = y[S];
                                    for (var L = l(w[0]), O = p(g(o(w.index), f.length), 0), A = [], j = 1; j < w.length; j++) A.push(void 0 === (x = w[j]) ? x : String(x));
                                    var T = w.groups;
                                    if (v) {
                                        var C = [L].concat(A, O, f);
                                        void 0 !== T && C.push(T);
                                        var P = l(r.apply(void 0, C));
                                    } else P = u(L, f, O, A, T, r);
                                    O >= k && ((E += f.slice(k, O) + P), (k = O + L.length));
                                }
                                return E + f.slice(k);
                            },
                        ];
                    },
                    !!r(function () {
                        var e = /./;
                        return (
                            (e.exec = function () {
                                var e = [];
                                return (e.groups = { a: "7" }), e;
                            }),
                            "7" !== "".replace(e, "$<a>")
                        );
                    }) ||
                        !m ||
                        v
                );
            },
            7323: function (e, t, i) {
                "use strict";
                var n,
                    r = i(8454),
                    s = i(9573),
                    o = i(6582),
                    a = i(6645),
                    l = i(7790),
                    c = i(5896),
                    d = i(1030).enforce,
                    u = i(4404),
                    h = !r.ActiveXObject && "ActiveXObject" in r,
                    f = Object.isExtensible,
                    p = function (e) {
                        return function () {
                            return e(this, arguments.length ? arguments[0] : void 0);
                        };
                    },
                    g = (e.exports = a("WeakMap", p, l));
                if (u && h) {
                    (n = l.getConstructor(p, "WeakMap", !0)), o.enable();
                    var m = g.prototype,
                        v = m.delete,
                        b = m.has,
                        _ = m.get,
                        y = m.set;
                    s(m, {
                        delete: function (e) {
                            if (c(e) && !f(e)) {
                                var t = d(this);
                                return t.frozen || (t.frozen = new n()), v.call(this, e) || t.frozen.delete(e);
                            }
                            return v.call(this, e);
                        },
                        has: function (e) {
                            if (c(e) && !f(e)) {
                                var t = d(this);
                                return t.frozen || (t.frozen = new n()), b.call(this, e) || t.frozen.has(e);
                            }
                            return b.call(this, e);
                        },
                        get: function (e) {
                            if (c(e) && !f(e)) {
                                var t = d(this);
                                return t.frozen || (t.frozen = new n()), b.call(this, e) ? _.call(this, e) : t.frozen.get(e);
                            }
                            return _.call(this, e);
                        },
                        set: function (e, t) {
                            if (c(e) && !f(e)) {
                                var i = d(this);
                                i.frozen || (i.frozen = new n()), b.call(this, e) ? y.call(this, e, t) : i.frozen.set(e, t);
                            } else y.call(this, e, t);
                            return this;
                        },
                    });
                }
            },
            3542: function (e, t, i) {
                var n = i(8454),
                    r = i(6181),
                    s = i(1269),
                    o = i(1501);
                for (var a in r) {
                    var l = n[a],
                        c = l && l.prototype;
                    if (c && c.forEach !== s)
                        try {
                            o(c, "forEach", s);
                        } catch (e) {
                            c.forEach = s;
                        }
                }
            },
            4079: function (e, t, i) {
                var n = i(8454),
                    r = i(6181),
                    s = i(7543),
                    o = i(1501),
                    a = i(8149),
                    l = a("iterator"),
                    c = a("toStringTag"),
                    d = s.values;
                for (var u in r) {
                    var h = n[u],
                        f = h && h.prototype;
                    if (f) {
                        if (f[l] !== d)
                            try {
                                o(f, l, d);
                            } catch (e) {
                                f[l] = d;
                            }
                        if ((f[c] || o(f, c, u), r[u]))
                            for (var p in s)
                                if (f[p] !== s[p])
                                    try {
                                        o(f, p, s[p]);
                                    } catch (e) {
                                        f[p] = s[p];
                                    }
                    }
                }
            },
        },
        t = {};
    function i(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var s = (t[n] = { exports: {} });
        return e[n](s, s.exports, i), s.exports;
    }
    (i.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                      return e.default;
                  }
                : function () {
                      return e;
                  };
        return i.d(t, { a: t }), t;
    }),
        (i.d = function (e, t) {
            for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (i.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (function () {
            "use strict";
            var e = {};
            i.r(e),
                i.d(e, {
                    afterMain: function () {
                        return x;
                    },
                    afterRead: function () {
                        return _;
                    },
                    afterWrite: function () {
                        return S;
                    },
                    applyStyles: function () {
                        return P;
                    },
                    arrow: function () {
                        return G;
                    },
                    auto: function () {
                        return a;
                    },
                    basePlacements: function () {
                        return l;
                    },
                    beforeMain: function () {
                        return y;
                    },
                    beforeRead: function () {
                        return v;
                    },
                    beforeWrite: function () {
                        return E;
                    },
                    bottom: function () {
                        return r;
                    },
                    clippingParents: function () {
                        return u;
                    },
                    computeStyles: function () {
                        return te;
                    },
                    createPopper: function () {
                        return Te;
                    },
                    createPopperBase: function () {
                        return je;
                    },
                    createPopperLite: function () {
                        return Ce;
                    },
                    detectOverflow: function () {
                        return me;
                    },
                    end: function () {
                        return d;
                    },
                    eventListeners: function () {
                        return ne;
                    },
                    flip: function () {
                        return ve;
                    },
                    hide: function () {
                        return ye;
                    },
                    left: function () {
                        return o;
                    },
                    main: function () {
                        return w;
                    },
                    modifierPhases: function () {
                        return L;
                    },
                    offset: function () {
                        return we;
                    },
                    placements: function () {
                        return m;
                    },
                    popper: function () {
                        return f;
                    },
                    popperGenerator: function () {
                        return Ae;
                    },
                    popperOffsets: function () {
                        return xe;
                    },
                    preventOverflow: function () {
                        return Ee;
                    },
                    read: function () {
                        return b;
                    },
                    reference: function () {
                        return p;
                    },
                    right: function () {
                        return s;
                    },
                    start: function () {
                        return c;
                    },
                    top: function () {
                        return n;
                    },
                    variationPlacements: function () {
                        return g;
                    },
                    viewport: function () {
                        return h;
                    },
                    write: function () {
                        return k;
                    },
                });
            var t = {};
            i.r(t),
                i.d(t, {
                    Alert: function () {
                        return bt;
                    },
                    Button: function () {
                        return yt;
                    },
                    Carousel: function () {
                        return Mt;
                    },
                    Collapse: function () {
                        return Vt;
                    },
                    Dropdown: function () {
                        return ui;
                    },
                    Modal: function () {
                        return zi;
                    },
                    Offcanvas: function () {
                        return Vi;
                    },
                    Popover: function () {
                        return vn;
                    },
                    ScrollSpy: function () {
                        return kn;
                    },
                    Tab: function () {
                        return Tn;
                    },
                    Toast: function () {
                        return Rn;
                    },
                    Tooltip: function () {
                        return fn;
                    },
                });
            var n = "top",
                r = "bottom",
                s = "right",
                o = "left",
                a = "auto",
                l = [n, r, s, o],
                c = "start",
                d = "end",
                u = "clippingParents",
                h = "viewport",
                f = "popper",
                p = "reference",
                g = l.reduce(function (e, t) {
                    return e.concat([t + "-" + c, t + "-" + d]);
                }, []),
                m = [].concat(l, [a]).reduce(function (e, t) {
                    return e.concat([t, t + "-" + c, t + "-" + d]);
                }, []),
                v = "beforeRead",
                b = "read",
                _ = "afterRead",
                y = "beforeMain",
                w = "main",
                x = "afterMain",
                E = "beforeWrite",
                k = "write",
                S = "afterWrite",
                L = [v, b, _, y, w, x, E, k, S];
            function O(e) {
                return e ? (e.nodeName || "").toLowerCase() : null;
            }
            function A(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return (t && t.defaultView) || window;
                }
                return e;
            }
            function j(e) {
                return e instanceof A(e).Element || e instanceof Element;
            }
            function T(e) {
                return e instanceof A(e).HTMLElement || e instanceof HTMLElement;
            }
            function C(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof A(e).ShadowRoot || e instanceof ShadowRoot);
            }
            var P = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                        var i = t.styles[e] || {},
                            n = t.attributes[e] || {},
                            r = t.elements[e];
                        T(r) &&
                            O(r) &&
                            (Object.assign(r.style, i),
                            Object.keys(n).forEach(function (e) {
                                var t = n[e];
                                !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
                            }));
                    });
                },
                effect: function (e) {
                    var t = e.state,
                        i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                    return (
                        Object.assign(t.elements.popper.style, i.popper),
                        (t.styles = i),
                        t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
                        function () {
                            Object.keys(t.elements).forEach(function (e) {
                                var n = t.elements[e],
                                    r = t.attributes[e] || {},
                                    s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function (e, t) {
                                        return (e[t] = ""), e;
                                    }, {});
                                T(n) &&
                                    O(n) &&
                                    (Object.assign(n.style, s),
                                    Object.keys(r).forEach(function (e) {
                                        n.removeAttribute(e);
                                    }));
                            });
                        }
                    );
                },
                requires: ["computeStyles"],
            };
            function N(e) {
                return e.split("-")[0];
            }
            var I = Math.round;
            function D(e, t) {
                void 0 === t && (t = !1);
                var i = e.getBoundingClientRect(),
                    n = 1,
                    r = 1;
                if (T(e) && t) {
                    var s = e.offsetHeight,
                        o = e.offsetWidth;
                    o > 0 && (n = i.width / o || 1), s > 0 && (r = i.height / s || 1);
                }
                return { width: I(i.width / n), height: I(i.height / r), top: I(i.top / r), right: I(i.right / n), bottom: I(i.bottom / r), left: I(i.left / n), x: I(i.left / n), y: I(i.top / r) };
            }
            function M(e) {
                var t = D(e),
                    i = e.offsetWidth,
                    n = e.offsetHeight;
                return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: i, height: n };
            }
            function R(e, t) {
                var i = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (i && C(i)) {
                    var n = t;
                    do {
                        if (n && e.isSameNode(n)) return !0;
                        n = n.parentNode || n.host;
                    } while (n);
                }
                return !1;
            }
            function z(e) {
                return A(e).getComputedStyle(e);
            }
            function q(e) {
                return ["table", "td", "th"].indexOf(O(e)) >= 0;
            }
            function W(e) {
                return ((j(e) ? e.ownerDocument : e.document) || window.document).documentElement;
            }
            function B(e) {
                return "html" === O(e) ? e : e.assignedSlot || e.parentNode || (C(e) ? e.host : null) || W(e);
            }
            function H(e) {
                return T(e) && "fixed" !== z(e).position ? e.offsetParent : null;
            }
            function F(e) {
                for (var t = A(e), i = H(e); i && q(i) && "static" === z(i).position; ) i = H(i);
                return i && ("html" === O(i) || ("body" === O(i) && "static" === z(i).position))
                    ? t
                    : i ||
                          (function (e) {
                              var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                              if (-1 !== navigator.userAgent.indexOf("Trident") && T(e) && "fixed" === z(e).position) return null;
                              for (var i = B(e); T(i) && ["html", "body"].indexOf(O(i)) < 0; ) {
                                  var n = z(i);
                                  if (
                                      "none" !== n.transform ||
                                      "none" !== n.perspective ||
                                      "paint" === n.contain ||
                                      -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                                      (t && "filter" === n.willChange) ||
                                      (t && n.filter && "none" !== n.filter)
                                  )
                                      return i;
                                  i = i.parentNode;
                              }
                              return null;
                          })(e) ||
                          t;
            }
            function $(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
            }
            var V = Math.max,
                Q = Math.min,
                X = Math.round;
            function Y(e, t, i) {
                return V(e, Q(t, i));
            }
            function U(e) {
                return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
            }
            function K(e, t) {
                return t.reduce(function (t, i) {
                    return (t[i] = e), t;
                }, {});
            }
            var G = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t,
                        i = e.state,
                        a = e.name,
                        c = e.options,
                        d = i.elements.arrow,
                        u = i.modifiersData.popperOffsets,
                        h = N(i.placement),
                        f = $(h),
                        p = [o, s].indexOf(h) >= 0 ? "height" : "width";
                    if (d && u) {
                        var g = (function (e, t) {
                                return U("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : K(e, l));
                            })(c.padding, i),
                            m = M(d),
                            v = "y" === f ? n : o,
                            b = "y" === f ? r : s,
                            _ = i.rects.reference[p] + i.rects.reference[f] - u[f] - i.rects.popper[p],
                            y = u[f] - i.rects.reference[f],
                            w = F(d),
                            x = w ? ("y" === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
                            E = _ / 2 - y / 2,
                            k = g[v],
                            S = x - m[p] - g[b],
                            L = x / 2 - m[p] / 2 + E,
                            O = Y(k, L, S),
                            A = f;
                        i.modifiersData[a] = (((t = {})[A] = O), (t.centerOffset = O - L), t);
                    }
                },
                effect: function (e) {
                    var t = e.state,
                        i = e.options.element,
                        n = void 0 === i ? "[data-popper-arrow]" : i;
                    null != n && ("string" != typeof n || (n = t.elements.popper.querySelector(n))) && R(t.elements.popper, n) && (t.elements.arrow = n);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
            };
            function J(e) {
                return e.split("-")[1];
            }
            var Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
            function ee(e) {
                var t,
                    i = e.popper,
                    a = e.popperRect,
                    l = e.placement,
                    c = e.variation,
                    u = e.offsets,
                    h = e.position,
                    f = e.gpuAcceleration,
                    p = e.adaptive,
                    g = e.roundOffsets,
                    m =
                        !0 === g
                            ? (function (e) {
                                  var t = e.x,
                                      i = e.y,
                                      n = window.devicePixelRatio || 1;
                                  return { x: X(X(t * n) / n) || 0, y: X(X(i * n) / n) || 0 };
                              })(u)
                            : "function" == typeof g
                            ? g(u)
                            : u,
                    v = m.x,
                    b = void 0 === v ? 0 : v,
                    _ = m.y,
                    y = void 0 === _ ? 0 : _,
                    w = u.hasOwnProperty("x"),
                    x = u.hasOwnProperty("y"),
                    E = o,
                    k = n,
                    S = window;
                if (p) {
                    var L = F(i),
                        O = "clientHeight",
                        j = "clientWidth";
                    L === A(i) && "static" !== z((L = W(i))).position && "absolute" === h && ((O = "scrollHeight"), (j = "scrollWidth")),
                        (L = L),
                        (l !== n && ((l !== o && l !== s) || c !== d)) || ((k = r), (y -= L[O] - a.height), (y *= f ? 1 : -1)),
                        (l !== o && ((l !== n && l !== r) || c !== d)) || ((E = s), (b -= L[j] - a.width), (b *= f ? 1 : -1));
                }
                var T,
                    C = Object.assign({ position: h }, p && Z);
                return f
                    ? Object.assign({}, C, (((T = {})[k] = x ? "0" : ""), (T[E] = w ? "0" : ""), (T.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)"), T))
                    : Object.assign({}, C, (((t = {})[k] = x ? y + "px" : ""), (t[E] = w ? b + "px" : ""), (t.transform = ""), t));
            }
            var te = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function (e) {
                        var t = e.state,
                            i = e.options,
                            n = i.gpuAcceleration,
                            r = void 0 === n || n,
                            s = i.adaptive,
                            o = void 0 === s || s,
                            a = i.roundOffsets,
                            l = void 0 === a || a,
                            c = { placement: N(t.placement), variation: J(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r };
                        null != t.modifiersData.popperOffsets &&
                            (t.styles.popper = Object.assign({}, t.styles.popper, ee(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: l })))),
                            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ee(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
                            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
                    },
                    data: {},
                },
                ie = { passive: !0 },
                ne = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function () {},
                    effect: function (e) {
                        var t = e.state,
                            i = e.instance,
                            n = e.options,
                            r = n.scroll,
                            s = void 0 === r || r,
                            o = n.resize,
                            a = void 0 === o || o,
                            l = A(t.elements.popper),
                            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return (
                            s &&
                                c.forEach(function (e) {
                                    e.addEventListener("scroll", i.update, ie);
                                }),
                            a && l.addEventListener("resize", i.update, ie),
                            function () {
                                s &&
                                    c.forEach(function (e) {
                                        e.removeEventListener("scroll", i.update, ie);
                                    }),
                                    a && l.removeEventListener("resize", i.update, ie);
                            }
                        );
                    },
                    data: {},
                },
                re = { left: "right", right: "left", bottom: "top", top: "bottom" };
            function se(e) {
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return re[e];
                });
            }
            var oe = { start: "end", end: "start" };
            function ae(e) {
                return e.replace(/start|end/g, function (e) {
                    return oe[e];
                });
            }
            function le(e) {
                var t = A(e);
                return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
            }
            function ce(e) {
                return D(W(e)).left + le(e).scrollLeft;
            }
            function de(e) {
                var t = z(e),
                    i = t.overflow,
                    n = t.overflowX,
                    r = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(i + r + n);
            }
            function ue(e) {
                return ["html", "body", "#document"].indexOf(O(e)) >= 0 ? e.ownerDocument.body : T(e) && de(e) ? e : ue(B(e));
            }
            function he(e, t) {
                var i;
                void 0 === t && (t = []);
                var n = ue(e),
                    r = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
                    s = A(n),
                    o = r ? [s].concat(s.visualViewport || [], de(n) ? n : []) : n,
                    a = t.concat(o);
                return r ? a : a.concat(he(B(o)));
            }
            function fe(e) {
                return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
            }
            function pe(e, t) {
                return t === h
                    ? fe(
                          (function (e) {
                              var t = A(e),
                                  i = W(e),
                                  n = t.visualViewport,
                                  r = i.clientWidth,
                                  s = i.clientHeight,
                                  o = 0,
                                  a = 0;
                              return n && ((r = n.width), (s = n.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((o = n.offsetLeft), (a = n.offsetTop))), { width: r, height: s, x: o + ce(e), y: a };
                          })(e)
                      )
                    : T(t)
                    ? (function (e) {
                          var t = D(e);
                          return (
                              (t.top = t.top + e.clientTop),
                              (t.left = t.left + e.clientLeft),
                              (t.bottom = t.top + e.clientHeight),
                              (t.right = t.left + e.clientWidth),
                              (t.width = e.clientWidth),
                              (t.height = e.clientHeight),
                              (t.x = t.left),
                              (t.y = t.top),
                              t
                          );
                      })(t)
                    : fe(
                          (function (e) {
                              var t,
                                  i = W(e),
                                  n = le(e),
                                  r = null == (t = e.ownerDocument) ? void 0 : t.body,
                                  s = V(i.scrollWidth, i.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                                  o = V(i.scrollHeight, i.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                                  a = -n.scrollLeft + ce(e),
                                  l = -n.scrollTop;
                              return "rtl" === z(r || i).direction && (a += V(i.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: o, x: a, y: l };
                          })(W(e))
                      );
            }
            function ge(e) {
                var t,
                    i = e.reference,
                    a = e.element,
                    l = e.placement,
                    u = l ? N(l) : null,
                    h = l ? J(l) : null,
                    f = i.x + i.width / 2 - a.width / 2,
                    p = i.y + i.height / 2 - a.height / 2;
                switch (u) {
                    case n:
                        t = { x: f, y: i.y - a.height };
                        break;
                    case r:
                        t = { x: f, y: i.y + i.height };
                        break;
                    case s:
                        t = { x: i.x + i.width, y: p };
                        break;
                    case o:
                        t = { x: i.x - a.width, y: p };
                        break;
                    default:
                        t = { x: i.x, y: i.y };
                }
                var g = u ? $(u) : null;
                if (null != g) {
                    var m = "y" === g ? "height" : "width";
                    switch (h) {
                        case c:
                            t[g] = t[g] - (i[m] / 2 - a[m] / 2);
                            break;
                        case d:
                            t[g] = t[g] + (i[m] / 2 - a[m] / 2);
                    }
                }
                return t;
            }
            function me(e, t) {
                void 0 === t && (t = {});
                var i = t,
                    o = i.placement,
                    a = void 0 === o ? e.placement : o,
                    c = i.boundary,
                    d = void 0 === c ? u : c,
                    g = i.rootBoundary,
                    m = void 0 === g ? h : g,
                    v = i.elementContext,
                    b = void 0 === v ? f : v,
                    _ = i.altBoundary,
                    y = void 0 !== _ && _,
                    w = i.padding,
                    x = void 0 === w ? 0 : w,
                    E = U("number" != typeof x ? x : K(x, l)),
                    k = b === f ? p : f,
                    S = e.rects.popper,
                    L = e.elements[y ? k : b],
                    A = (function (e, t, i) {
                        var n =
                                "clippingParents" === t
                                    ? (function (e) {
                                          var t = he(B(e)),
                                              i = ["absolute", "fixed"].indexOf(z(e).position) >= 0 && T(e) ? F(e) : e;
                                          return j(i)
                                              ? t.filter(function (e) {
                                                    return j(e) && R(e, i) && "body" !== O(e);
                                                })
                                              : [];
                                      })(e)
                                    : [].concat(t),
                            r = [].concat(n, [i]),
                            s = r[0],
                            o = r.reduce(function (t, i) {
                                var n = pe(e, i);
                                return (t.top = V(n.top, t.top)), (t.right = Q(n.right, t.right)), (t.bottom = Q(n.bottom, t.bottom)), (t.left = V(n.left, t.left)), t;
                            }, pe(e, s));
                        return (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o;
                    })(j(L) ? L : L.contextElement || W(e.elements.popper), d, m),
                    C = D(e.elements.reference),
                    P = ge({ reference: C, element: S, strategy: "absolute", placement: a }),
                    N = fe(Object.assign({}, S, P)),
                    I = b === f ? N : C,
                    M = { top: A.top - I.top + E.top, bottom: I.bottom - A.bottom + E.bottom, left: A.left - I.left + E.left, right: I.right - A.right + E.right },
                    q = e.modifiersData.offset;
                if (b === f && q) {
                    var H = q[a];
                    Object.keys(M).forEach(function (e) {
                        var t = [s, r].indexOf(e) >= 0 ? 1 : -1,
                            i = [n, r].indexOf(e) >= 0 ? "y" : "x";
                        M[e] += H[i] * t;
                    });
                }
                return M;
            }
            var ve = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t = e.state,
                        i = e.options,
                        d = e.name;
                    if (!t.modifiersData[d]._skip) {
                        for (
                            var u = i.mainAxis,
                                h = void 0 === u || u,
                                f = i.altAxis,
                                p = void 0 === f || f,
                                v = i.fallbackPlacements,
                                b = i.padding,
                                _ = i.boundary,
                                y = i.rootBoundary,
                                w = i.altBoundary,
                                x = i.flipVariations,
                                E = void 0 === x || x,
                                k = i.allowedAutoPlacements,
                                S = t.options.placement,
                                L = N(S),
                                O =
                                    v ||
                                    (L !== S && E
                                        ? (function (e) {
                                              if (N(e) === a) return [];
                                              var t = se(e);
                                              return [ae(e), t, ae(t)];
                                          })(S)
                                        : [se(S)]),
                                A = [S].concat(O).reduce(function (e, i) {
                                    return e.concat(
                                        N(i) === a
                                            ? (function (e, t) {
                                                  void 0 === t && (t = {});
                                                  var i = t,
                                                      n = i.placement,
                                                      r = i.boundary,
                                                      s = i.rootBoundary,
                                                      o = i.padding,
                                                      a = i.flipVariations,
                                                      c = i.allowedAutoPlacements,
                                                      d = void 0 === c ? m : c,
                                                      u = J(n),
                                                      h = u
                                                          ? a
                                                              ? g
                                                              : g.filter(function (e) {
                                                                    return J(e) === u;
                                                                })
                                                          : l,
                                                      f = h.filter(function (e) {
                                                          return d.indexOf(e) >= 0;
                                                      });
                                                  0 === f.length && (f = h);
                                                  var p = f.reduce(function (t, i) {
                                                      return (t[i] = me(e, { placement: i, boundary: r, rootBoundary: s, padding: o })[N(i)]), t;
                                                  }, {});
                                                  return Object.keys(p).sort(function (e, t) {
                                                      return p[e] - p[t];
                                                  });
                                              })(t, { placement: i, boundary: _, rootBoundary: y, padding: b, flipVariations: E, allowedAutoPlacements: k })
                                            : i
                                    );
                                }, []),
                                j = t.rects.reference,
                                T = t.rects.popper,
                                C = new Map(),
                                P = !0,
                                I = A[0],
                                D = 0;
                            D < A.length;
                            D++
                        ) {
                            var M = A[D],
                                R = N(M),
                                z = J(M) === c,
                                q = [n, r].indexOf(R) >= 0,
                                W = q ? "width" : "height",
                                B = me(t, { placement: M, boundary: _, rootBoundary: y, altBoundary: w, padding: b }),
                                H = q ? (z ? s : o) : z ? r : n;
                            j[W] > T[W] && (H = se(H));
                            var F = se(H),
                                $ = [];
                            if (
                                (h && $.push(B[R] <= 0),
                                p && $.push(B[H] <= 0, B[F] <= 0),
                                $.every(function (e) {
                                    return e;
                                }))
                            ) {
                                (I = M), (P = !1);
                                break;
                            }
                            C.set(M, $);
                        }
                        if (P)
                            for (
                                var V = function (e) {
                                        var t = A.find(function (t) {
                                            var i = C.get(t);
                                            if (i)
                                                return i.slice(0, e).every(function (e) {
                                                    return e;
                                                });
                                        });
                                        if (t) return (I = t), "break";
                                    },
                                    Q = E ? 3 : 1;
                                Q > 0 && "break" !== V(Q);
                                Q--
                            );
                        t.placement !== I && ((t.modifiersData[d]._skip = !0), (t.placement = I), (t.reset = !0));
                    }
                },
                requiresIfExists: ["offset"],
                data: { _skip: !1 },
            };
            function be(e, t, i) {
                return void 0 === i && (i = { x: 0, y: 0 }), { top: e.top - t.height - i.y, right: e.right - t.width + i.x, bottom: e.bottom - t.height + i.y, left: e.left - t.width - i.x };
            }
            function _e(e) {
                return [n, s, r, o].some(function (t) {
                    return e[t] >= 0;
                });
            }
            var ye = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function (e) {
                        var t = e.state,
                            i = e.name,
                            n = t.rects.reference,
                            r = t.rects.popper,
                            s = t.modifiersData.preventOverflow,
                            o = me(t, { elementContext: "reference" }),
                            a = me(t, { altBoundary: !0 }),
                            l = be(o, n),
                            c = be(a, r, s),
                            d = _e(l),
                            u = _e(c);
                        (t.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: u }),
                            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": u }));
                    },
                },
                we = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function (e) {
                        var t = e.state,
                            i = e.options,
                            r = e.name,
                            a = i.offset,
                            l = void 0 === a ? [0, 0] : a,
                            c = m.reduce(function (e, i) {
                                return (
                                    (e[i] = (function (e, t, i) {
                                        var r = N(e),
                                            a = [o, n].indexOf(r) >= 0 ? -1 : 1,
                                            l = "function" == typeof i ? i(Object.assign({}, t, { placement: e })) : i,
                                            c = l[0],
                                            d = l[1];
                                        return (c = c || 0), (d = (d || 0) * a), [o, s].indexOf(r) >= 0 ? { x: d, y: c } : { x: c, y: d };
                                    })(i, t.rects, l)),
                                    e
                                );
                            }, {}),
                            d = c[t.placement],
                            u = d.x,
                            h = d.y;
                        null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += u), (t.modifiersData.popperOffsets.y += h)), (t.modifiersData[r] = c);
                    },
                },
                xe = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function (e) {
                        var t = e.state,
                            i = e.name;
                        t.modifiersData[i] = ge({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
                    },
                    data: {},
                },
                Ee = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function (e) {
                        var t = e.state,
                            i = e.options,
                            a = e.name,
                            l = i.mainAxis,
                            d = void 0 === l || l,
                            u = i.altAxis,
                            h = void 0 !== u && u,
                            f = i.boundary,
                            p = i.rootBoundary,
                            g = i.altBoundary,
                            m = i.padding,
                            v = i.tether,
                            b = void 0 === v || v,
                            _ = i.tetherOffset,
                            y = void 0 === _ ? 0 : _,
                            w = me(t, { boundary: f, rootBoundary: p, padding: m, altBoundary: g }),
                            x = N(t.placement),
                            E = J(t.placement),
                            k = !E,
                            S = $(x),
                            L = "x" === S ? "y" : "x",
                            O = t.modifiersData.popperOffsets,
                            A = t.rects.reference,
                            j = t.rects.popper,
                            T = "function" == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
                            C = { x: 0, y: 0 };
                        if (O) {
                            if (d || h) {
                                var P = "y" === S ? n : o,
                                    I = "y" === S ? r : s,
                                    D = "y" === S ? "height" : "width",
                                    R = O[S],
                                    z = O[S] + w[P],
                                    q = O[S] - w[I],
                                    W = b ? -j[D] / 2 : 0,
                                    B = E === c ? A[D] : j[D],
                                    H = E === c ? -j[D] : -A[D],
                                    X = t.elements.arrow,
                                    U = b && X ? M(X) : { width: 0, height: 0 },
                                    K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                    G = K[P],
                                    Z = K[I],
                                    ee = Y(0, A[D], U[D]),
                                    te = k ? A[D] / 2 - W - ee - G - T : B - ee - G - T,
                                    ie = k ? -A[D] / 2 + W + ee + Z + T : H + ee + Z + T,
                                    ne = t.elements.arrow && F(t.elements.arrow),
                                    re = ne ? ("y" === S ? ne.clientTop || 0 : ne.clientLeft || 0) : 0,
                                    se = t.modifiersData.offset ? t.modifiersData.offset[t.placement][S] : 0,
                                    oe = O[S] + te - se - re,
                                    ae = O[S] + ie - se;
                                if (d) {
                                    var le = Y(b ? Q(z, oe) : z, R, b ? V(q, ae) : q);
                                    (O[S] = le), (C[S] = le - R);
                                }
                                if (h) {
                                    var ce = "x" === S ? n : o,
                                        de = "x" === S ? r : s,
                                        ue = O[L],
                                        he = ue + w[ce],
                                        fe = ue - w[de],
                                        pe = Y(b ? Q(he, oe) : he, ue, b ? V(fe, ae) : fe);
                                    (O[L] = pe), (C[L] = pe - ue);
                                }
                            }
                            t.modifiersData[a] = C;
                        }
                    },
                    requiresIfExists: ["offset"],
                };
            function ke(e, t, i) {
                void 0 === i && (i = !1);
                var n,
                    r,
                    s = T(t),
                    o =
                        T(t) &&
                        (function (e) {
                            var t = e.getBoundingClientRect(),
                                i = t.width / e.offsetWidth || 1,
                                n = t.height / e.offsetHeight || 1;
                            return 1 !== i || 1 !== n;
                        })(t),
                    a = W(t),
                    l = D(e, o),
                    c = { scrollLeft: 0, scrollTop: 0 },
                    d = { x: 0, y: 0 };
                return (
                    (s || (!s && !i)) &&
                        (("body" !== O(t) || de(a)) && (c = (n = t) !== A(n) && T(n) ? { scrollLeft: (r = n).scrollLeft, scrollTop: r.scrollTop } : le(n)),
                        T(t) ? (((d = D(t, !0)).x += t.clientLeft), (d.y += t.clientTop)) : a && (d.x = ce(a))),
                    { x: l.left + c.scrollLeft - d.x, y: l.top + c.scrollTop - d.y, width: l.width, height: l.height }
                );
            }
            function Se(e) {
                var t = new Map(),
                    i = new Set(),
                    n = [];
                function r(e) {
                    i.add(e.name),
                        [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                            if (!i.has(e)) {
                                var n = t.get(e);
                                n && r(n);
                            }
                        }),
                        n.push(e);
                }
                return (
                    e.forEach(function (e) {
                        t.set(e.name, e);
                    }),
                    e.forEach(function (e) {
                        i.has(e.name) || r(e);
                    }),
                    n
                );
            }
            var Le = { placement: "bottom", modifiers: [], strategy: "absolute" };
            function Oe() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return !t.some(function (e) {
                    return !(e && "function" == typeof e.getBoundingClientRect);
                });
            }
            function Ae(e) {
                void 0 === e && (e = {});
                var t = e,
                    i = t.defaultModifiers,
                    n = void 0 === i ? [] : i,
                    r = t.defaultOptions,
                    s = void 0 === r ? Le : r;
                return function (e, t, i) {
                    void 0 === i && (i = s);
                    var r,
                        o,
                        a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Le, s), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                        l = [],
                        c = !1,
                        d = {
                            state: a,
                            setOptions: function (i) {
                                var r = "function" == typeof i ? i(a.options) : i;
                                u(), (a.options = Object.assign({}, s, a.options, r)), (a.scrollParents = { reference: j(e) ? he(e) : e.contextElement ? he(e.contextElement) : [], popper: he(t) });
                                var o,
                                    c,
                                    h = (function (e) {
                                        var t = Se(e);
                                        return L.reduce(function (e, i) {
                                            return e.concat(
                                                t.filter(function (e) {
                                                    return e.phase === i;
                                                })
                                            );
                                        }, []);
                                    })(
                                        ((o = [].concat(n, a.options.modifiers)),
                                        (c = o.reduce(function (e, t) {
                                            var i = e[t.name];
                                            return (e[t.name] = i ? Object.assign({}, i, t, { options: Object.assign({}, i.options, t.options), data: Object.assign({}, i.data, t.data) }) : t), e;
                                        }, {})),
                                        Object.keys(c).map(function (e) {
                                            return c[e];
                                        }))
                                    );
                                return (
                                    (a.orderedModifiers = h.filter(function (e) {
                                        return e.enabled;
                                    })),
                                    a.orderedModifiers.forEach(function (e) {
                                        var t = e.name,
                                            i = e.options,
                                            n = void 0 === i ? {} : i,
                                            r = e.effect;
                                        if ("function" == typeof r) {
                                            var s = r({ state: a, name: t, instance: d, options: n });
                                            l.push(s || function () {});
                                        }
                                    }),
                                    d.update()
                                );
                            },
                            forceUpdate: function () {
                                if (!c) {
                                    var e = a.elements,
                                        t = e.reference,
                                        i = e.popper;
                                    if (Oe(t, i)) {
                                        (a.rects = { reference: ke(t, F(i), "fixed" === a.options.strategy), popper: M(i) }),
                                            (a.reset = !1),
                                            (a.placement = a.options.placement),
                                            a.orderedModifiers.forEach(function (e) {
                                                return (a.modifiersData[e.name] = Object.assign({}, e.data));
                                            });
                                        for (var n = 0; n < a.orderedModifiers.length; n++)
                                            if (!0 !== a.reset) {
                                                var r = a.orderedModifiers[n],
                                                    s = r.fn,
                                                    o = r.options,
                                                    l = void 0 === o ? {} : o,
                                                    u = r.name;
                                                "function" == typeof s && (a = s({ state: a, options: l, name: u, instance: d }) || a);
                                            } else (a.reset = !1), (n = -1);
                                    }
                                }
                            },
                            update:
                                ((r = function () {
                                    return new Promise(function (e) {
                                        d.forceUpdate(), e(a);
                                    });
                                }),
                                function () {
                                    return (
                                        o ||
                                            (o = new Promise(function (e) {
                                                Promise.resolve().then(function () {
                                                    (o = void 0), e(r());
                                                });
                                            })),
                                        o
                                    );
                                }),
                            destroy: function () {
                                u(), (c = !0);
                            },
                        };
                    if (!Oe(e, t)) return d;
                    function u() {
                        l.forEach(function (e) {
                            return e();
                        }),
                            (l = []);
                    }
                    return (
                        d.setOptions(i).then(function (e) {
                            !c && i.onFirstUpdate && i.onFirstUpdate(e);
                        }),
                        d
                    );
                };
            }
            var je = Ae(),
                Te = Ae({ defaultModifiers: [ne, xe, te, P, we, ve, Ee, G, ye] }),
                Ce = Ae({ defaultModifiers: [ne, xe, te, P] });
            const Pe = "transitionend",
                Ne = (e) => {
                    let t = e.getAttribute("data-bs-target");
                    if (!t || "#" === t) {
                        let i = e.getAttribute("href");
                        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), (t = i && "#" !== i ? i.trim() : null);
                    }
                    return t;
                },
                Ie = (e) => {
                    const t = Ne(e);
                    return t && document.querySelector(t) ? t : null;
                },
                De = (e) => {
                    const t = Ne(e);
                    return t ? document.querySelector(t) : null;
                },
                Me = (e) => {
                    e.dispatchEvent(new Event(Pe));
                },
                Re = (e) => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
                ze = (e) => (Re(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null),
                qe = (e, t, i) => {
                    Object.keys(i).forEach((n) => {
                        const r = i[n],
                            s = t[n],
                            o =
                                s && Re(s)
                                    ? "element"
                                    : null == (a = s)
                                    ? `${a}`
                                    : {}.toString
                                          .call(a)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase();
                        var a;
                        if (!new RegExp(r).test(o)) throw new TypeError(`${e.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${r}".`);
                    });
                },
                We = (e) => !(!Re(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                Be = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
                He = (e) => {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof e.getRootNode) {
                        const t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null;
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? He(e.parentNode) : null;
                },
                Fe = () => {},
                $e = (e) => {
                    e.offsetHeight;
                },
                Ve = () => {
                    const { jQuery: e } = window;
                    return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
                },
                Qe = [],
                Xe = () => "rtl" === document.documentElement.dir,
                Ye = (e) => {
                    var t;
                    (t = () => {
                        const t = Ve();
                        if (t) {
                            const i = e.NAME,
                                n = t.fn[i];
                            (t.fn[i] = e.jQueryInterface), (t.fn[i].Constructor = e), (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
                        }
                    }),
                        "loading" === document.readyState
                            ? (Qe.length ||
                                  document.addEventListener("DOMContentLoaded", () => {
                                      Qe.forEach((e) => e());
                                  }),
                              Qe.push(t))
                            : t();
                },
                Ue = (e) => {
                    "function" == typeof e && e();
                },
                Ke = (e, t, i = !0) => {
                    if (!i) return void Ue(e);
                    const n =
                        ((e) => {
                            if (!e) return 0;
                            let { transitionDuration: t, transitionDelay: i } = window.getComputedStyle(e);
                            const n = Number.parseFloat(t),
                                r = Number.parseFloat(i);
                            return n || r ? ((t = t.split(",")[0]), (i = i.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0;
                        })(t) + 5;
                    let r = !1;
                    const s = ({ target: i }) => {
                        i === t && ((r = !0), t.removeEventListener(Pe, s), Ue(e));
                    };
                    t.addEventListener(Pe, s),
                        setTimeout(() => {
                            r || Me(t);
                        }, n);
                },
                Ge = (e, t, i, n) => {
                    let r = e.indexOf(t);
                    if (-1 === r) return e[!i && n ? e.length - 1 : 0];
                    const s = e.length;
                    return (r += i ? 1 : -1), n && (r = (r + s) % s), e[Math.max(0, Math.min(r, s - 1))];
                },
                Je = /[^.]*(?=\..*)\.|.*/,
                Ze = /\..*/,
                et = /::\d+$/,
                tt = {};
            let it = 1;
            const nt = { mouseenter: "mouseover", mouseleave: "mouseout" },
                rt = /^(mouseenter|mouseleave)/i,
                st = new Set([
                    "click",
                    "dblclick",
                    "mouseup",
                    "mousedown",
                    "contextmenu",
                    "mousewheel",
                    "DOMMouseScroll",
                    "mouseover",
                    "mouseout",
                    "mousemove",
                    "selectstart",
                    "selectend",
                    "keydown",
                    "keypress",
                    "keyup",
                    "orientationchange",
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                    "pointerdown",
                    "pointermove",
                    "pointerup",
                    "pointerleave",
                    "pointercancel",
                    "gesturestart",
                    "gesturechange",
                    "gestureend",
                    "focus",
                    "blur",
                    "change",
                    "reset",
                    "select",
                    "submit",
                    "focusin",
                    "focusout",
                    "load",
                    "unload",
                    "beforeunload",
                    "resize",
                    "move",
                    "DOMContentLoaded",
                    "readystatechange",
                    "error",
                    "abort",
                    "scroll",
                ]);
            function ot(e, t) {
                return (t && `${t}::${it++}`) || e.uidEvent || it++;
            }
            function at(e) {
                const t = ot(e);
                return (e.uidEvent = t), (tt[t] = tt[t] || {}), tt[t];
            }
            function lt(e, t, i = null) {
                const n = Object.keys(e);
                for (let r = 0, s = n.length; r < s; r++) {
                    const s = e[n[r]];
                    if (s.originalHandler === t && s.delegationSelector === i) return s;
                }
                return null;
            }
            function ct(e, t, i) {
                const n = "string" == typeof t,
                    r = n ? i : t;
                let s = ht(e);
                return st.has(s) || (s = e), [n, r, s];
            }
            function dt(e, t, i, n, r) {
                if ("string" != typeof t || !e) return;
                if ((i || ((i = n), (n = null)), rt.test(t))) {
                    const e = (e) =>
                        function (t) {
                            if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);
                        };
                    n ? (n = e(n)) : (i = e(i));
                }
                const [s, o, a] = ct(t, i, n),
                    l = at(e),
                    c = l[a] || (l[a] = {}),
                    d = lt(c, o, s ? i : null);
                if (d) return void (d.oneOff = d.oneOff && r);
                const u = ot(o, t.replace(Je, "")),
                    h = s
                        ? (function (e, t, i) {
                              return function n(r) {
                                  const s = e.querySelectorAll(t);
                                  for (let { target: o } = r; o && o !== this; o = o.parentNode) for (let a = s.length; a--; ) if (s[a] === o) return (r.delegateTarget = o), n.oneOff && ft.off(e, r.type, t, i), i.apply(o, [r]);
                                  return null;
                              };
                          })(e, i, n)
                        : (function (e, t) {
                              return function i(n) {
                                  return (n.delegateTarget = e), i.oneOff && ft.off(e, n.type, t), t.apply(e, [n]);
                              };
                          })(e, i);
                (h.delegationSelector = s ? i : null), (h.originalHandler = o), (h.oneOff = r), (h.uidEvent = u), (c[u] = h), e.addEventListener(a, h, s);
            }
            function ut(e, t, i, n, r) {
                const s = lt(t[i], n, r);
                s && (e.removeEventListener(i, s, Boolean(r)), delete t[i][s.uidEvent]);
            }
            function ht(e) {
                return (e = e.replace(Ze, "")), nt[e] || e;
            }
            const ft = {
                    on(e, t, i, n) {
                        dt(e, t, i, n, !1);
                    },
                    one(e, t, i, n) {
                        dt(e, t, i, n, !0);
                    },
                    off(e, t, i, n) {
                        if ("string" != typeof t || !e) return;
                        const [r, s, o] = ct(t, i, n),
                            a = o !== t,
                            l = at(e),
                            c = t.startsWith(".");
                        if (void 0 !== s) {
                            if (!l || !l[o]) return;
                            return void ut(e, l, o, s, r ? i : null);
                        }
                        c &&
                            Object.keys(l).forEach((i) => {
                                !(function (e, t, i, n) {
                                    const r = t[i] || {};
                                    Object.keys(r).forEach((s) => {
                                        if (s.includes(n)) {
                                            const n = r[s];
                                            ut(e, t, i, n.originalHandler, n.delegationSelector);
                                        }
                                    });
                                })(e, l, i, t.slice(1));
                            });
                        const d = l[o] || {};
                        Object.keys(d).forEach((i) => {
                            const n = i.replace(et, "");
                            if (!a || t.includes(n)) {
                                const t = d[i];
                                ut(e, l, o, t.originalHandler, t.delegationSelector);
                            }
                        });
                    },
                    trigger(e, t, i) {
                        if ("string" != typeof t || !e) return null;
                        const n = Ve(),
                            r = ht(t),
                            s = t !== r,
                            o = st.has(r);
                        let a,
                            l = !0,
                            c = !0,
                            d = !1,
                            u = null;
                        return (
                            s && n && ((a = n.Event(t, i)), n(e).trigger(a), (l = !a.isPropagationStopped()), (c = !a.isImmediatePropagationStopped()), (d = a.isDefaultPrevented())),
                            o ? ((u = document.createEvent("HTMLEvents")), u.initEvent(r, l, !0)) : (u = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                            void 0 !== i &&
                                Object.keys(i).forEach((e) => {
                                    Object.defineProperty(u, e, { get: () => i[e] });
                                }),
                            d && u.preventDefault(),
                            c && e.dispatchEvent(u),
                            u.defaultPrevented && void 0 !== a && a.preventDefault(),
                            u
                        );
                    },
                },
                pt = new Map();
            var gt = {
                set(e, t, i) {
                    pt.has(e) || pt.set(e, new Map());
                    const n = pt.get(e);
                    n.has(t) || 0 === n.size ? n.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
                },
                get: (e, t) => (pt.has(e) && pt.get(e).get(t)) || null,
                remove(e, t) {
                    if (!pt.has(e)) return;
                    const i = pt.get(e);
                    i.delete(t), 0 === i.size && pt.delete(e);
                },
            };
            class mt {
                constructor(e) {
                    (e = ze(e)) && ((this._element = e), gt.set(this._element, this.constructor.DATA_KEY, this));
                }
                dispose() {
                    gt.remove(this._element, this.constructor.DATA_KEY),
                        ft.off(this._element, this.constructor.EVENT_KEY),
                        Object.getOwnPropertyNames(this).forEach((e) => {
                            this[e] = null;
                        });
                }
                _queueCallback(e, t, i = !0) {
                    Ke(e, t, i);
                }
                static getInstance(e) {
                    return gt.get(ze(e), this.DATA_KEY);
                }
                static getOrCreateInstance(e, t = {}) {
                    return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
                }
                static get VERSION() {
                    return "5.1.1";
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!');
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`;
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`;
                }
            }
            const vt = (e, t = "hide") => {
                const i = `click.dismiss${e.EVENT_KEY}`,
                    n = e.NAME;
                ft.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
                    if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), Be(this))) return;
                    const r = De(this) || this.closest(`.${n}`);
                    e.getOrCreateInstance(r)[t]();
                });
            };
            class bt extends mt {
                static get NAME() {
                    return "alert";
                }
                close() {
                    if (ft.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                    this._element.classList.remove("show");
                    const e = this._element.classList.contains("fade");
                    this._queueCallback(() => this._destroyElement(), this._element, e);
                }
                _destroyElement() {
                    this._element.remove(), ft.trigger(this._element, "closed.bs.alert"), this.dispose();
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = bt.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e](this);
                        }
                    });
                }
            }
            vt(bt, "close"), Ye(bt);
            const _t = '[data-bs-toggle="button"]';
            class yt extends mt {
                static get NAME() {
                    return "button";
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = yt.getOrCreateInstance(this);
                        "toggle" === e && t[e]();
                    });
                }
            }
            function wt(e) {
                return "true" === e || ("false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e));
            }
            function xt(e) {
                return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
            }
            ft.on(document, "click.bs.button.data-api", _t, (e) => {
                e.preventDefault();
                const t = e.target.closest(_t);
                yt.getOrCreateInstance(t).toggle();
            }),
                Ye(yt);
            const Et = {
                    setDataAttribute(e, t, i) {
                        e.setAttribute(`data-bs-${xt(t)}`, i);
                    },
                    removeDataAttribute(e, t) {
                        e.removeAttribute(`data-bs-${xt(t)}`);
                    },
                    getDataAttributes(e) {
                        if (!e) return {};
                        const t = {};
                        return (
                            Object.keys(e.dataset)
                                .filter((e) => e.startsWith("bs"))
                                .forEach((i) => {
                                    let n = i.replace(/^bs/, "");
                                    (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)), (t[n] = wt(e.dataset[i]));
                                }),
                            t
                        );
                    },
                    getDataAttribute: (e, t) => wt(e.getAttribute(`data-bs-${xt(t)}`)),
                    offset(e) {
                        const t = e.getBoundingClientRect();
                        return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset };
                    },
                    position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
                },
                kt = {
                    find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                    findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                    children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
                    parents(e, t) {
                        const i = [];
                        let n = e.parentNode;
                        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; ) n.matches(t) && i.push(n), (n = n.parentNode);
                        return i;
                    },
                    prev(e, t) {
                        let i = e.previousElementSibling;
                        for (; i; ) {
                            if (i.matches(t)) return [i];
                            i = i.previousElementSibling;
                        }
                        return [];
                    },
                    next(e, t) {
                        let i = e.nextElementSibling;
                        for (; i; ) {
                            if (i.matches(t)) return [i];
                            i = i.nextElementSibling;
                        }
                        return [];
                    },
                    focusableChildren(e) {
                        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
                        return this.find(t, e).filter((e) => !Be(e) && We(e));
                    },
                },
                St = "carousel",
                Lt = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                Ot = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                At = "next",
                jt = "prev",
                Tt = "left",
                Ct = "right",
                Pt = { ArrowLeft: Ct, ArrowRight: Tt },
                Nt = "slid.bs.carousel",
                It = "active",
                Dt = ".active.carousel-item";
            class Mt extends mt {
                constructor(e, t) {
                    super(e),
                        (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(t)),
                        (this._indicatorsElement = kt.findOne(".carousel-indicators", this._element)),
                        (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                        (this._pointerEvent = Boolean(window.PointerEvent)),
                        this._addEventListeners();
                }
                static get Default() {
                    return Lt;
                }
                static get NAME() {
                    return St;
                }
                next() {
                    this._slide(At);
                }
                nextWhenVisible() {
                    !document.hidden && We(this._element) && this.next();
                }
                prev() {
                    this._slide(jt);
                }
                pause(e) {
                    e || (this._isPaused = !0), kt.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Me(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }
                cycle(e) {
                    e || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
                }
                to(e) {
                    this._activeElement = kt.findOne(Dt, this._element);
                    const t = this._getItemIndex(this._activeElement);
                    if (e > this._items.length - 1 || e < 0) return;
                    if (this._isSliding) return void ft.one(this._element, Nt, () => this.to(e));
                    if (t === e) return this.pause(), void this.cycle();
                    const i = e > t ? At : jt;
                    this._slide(i, this._items[e]);
                }
                _getConfig(e) {
                    return (e = { ...Lt, ...Et.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), qe(St, e, Ot), e;
                }
                _handleSwipe() {
                    const e = Math.abs(this.touchDeltaX);
                    if (e <= 40) return;
                    const t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0), t && this._slide(t > 0 ? Ct : Tt);
                }
                _addEventListeners() {
                    this._config.keyboard && ft.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
                        "hover" === this._config.pause && (ft.on(this._element, "mouseenter.bs.carousel", (e) => this.pause(e)), ft.on(this._element, "mouseleave.bs.carousel", (e) => this.cycle(e))),
                        this._config.touch && this._touchSupported && this._addTouchEventListeners();
                }
                _addTouchEventListeners() {
                    const e = (e) => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
                        t = (t) => {
                            e(t) ? (this.touchStartX = t.clientX) : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
                        },
                        i = (e) => {
                            this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
                        },
                        n = (t) => {
                            e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
                                this._handleSwipe(),
                                "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout((e) => this.cycle(e), 500 + this._config.interval)));
                        };
                    kt.find(".carousel-item img", this._element).forEach((e) => {
                        ft.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
                    }),
                        this._pointerEvent
                            ? (ft.on(this._element, "pointerdown.bs.carousel", (e) => t(e)), ft.on(this._element, "pointerup.bs.carousel", (e) => n(e)), this._element.classList.add("pointer-event"))
                            : (ft.on(this._element, "touchstart.bs.carousel", (e) => t(e)), ft.on(this._element, "touchmove.bs.carousel", (e) => i(e)), ft.on(this._element, "touchend.bs.carousel", (e) => n(e)));
                }
                _keydown(e) {
                    if (/input|textarea/i.test(e.target.tagName)) return;
                    const t = Pt[e.key];
                    t && (e.preventDefault(), this._slide(t));
                }
                _getItemIndex(e) {
                    return (this._items = e && e.parentNode ? kt.find(".carousel-item", e.parentNode) : []), this._items.indexOf(e);
                }
                _getItemByOrder(e, t) {
                    const i = e === At;
                    return Ge(this._items, t, i, this._config.wrap);
                }
                _triggerSlideEvent(e, t) {
                    const i = this._getItemIndex(e),
                        n = this._getItemIndex(kt.findOne(Dt, this._element));
                    return ft.trigger(this._element, "slide.bs.carousel", { relatedTarget: e, direction: t, from: n, to: i });
                }
                _setActiveIndicatorElement(e) {
                    if (this._indicatorsElement) {
                        const t = kt.findOne(".active", this._indicatorsElement);
                        t.classList.remove(It), t.removeAttribute("aria-current");
                        const i = kt.find("[data-bs-target]", this._indicatorsElement);
                        for (let t = 0; t < i.length; t++)
                            if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                                i[t].classList.add(It), i[t].setAttribute("aria-current", "true");
                                break;
                            }
                    }
                }
                _updateInterval() {
                    const e = this._activeElement || kt.findOne(Dt, this._element);
                    if (!e) return;
                    const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                    t ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                }
                _slide(e, t) {
                    const i = this._directionToOrder(e),
                        n = kt.findOne(Dt, this._element),
                        r = this._getItemIndex(n),
                        s = t || this._getItemByOrder(i, n),
                        o = this._getItemIndex(s),
                        a = Boolean(this._interval),
                        l = i === At,
                        c = l ? "carousel-item-start" : "carousel-item-end",
                        d = l ? "carousel-item-next" : "carousel-item-prev",
                        u = this._orderToDirection(i);
                    if (s && s.classList.contains(It)) return void (this._isSliding = !1);
                    if (this._isSliding) return;
                    if (this._triggerSlideEvent(s, u).defaultPrevented) return;
                    if (!n || !s) return;
                    (this._isSliding = !0), a && this.pause(), this._setActiveIndicatorElement(s), (this._activeElement = s);
                    const h = () => {
                        ft.trigger(this._element, Nt, { relatedTarget: s, direction: u, from: r, to: o });
                    };
                    if (this._element.classList.contains("slide")) {
                        s.classList.add(d), $e(s), n.classList.add(c), s.classList.add(c);
                        const e = () => {
                            s.classList.remove(c, d), s.classList.add(It), n.classList.remove(It, d, c), (this._isSliding = !1), setTimeout(h, 0);
                        };
                        this._queueCallback(e, n, !0);
                    } else n.classList.remove(It), s.classList.add(It), (this._isSliding = !1), h();
                    a && this.cycle();
                }
                _directionToOrder(e) {
                    return [Ct, Tt].includes(e) ? (Xe() ? (e === Tt ? jt : At) : e === Tt ? At : jt) : e;
                }
                _orderToDirection(e) {
                    return [At, jt].includes(e) ? (Xe() ? (e === jt ? Tt : Ct) : e === jt ? Ct : Tt) : e;
                }
                static carouselInterface(e, t) {
                    const i = Mt.getOrCreateInstance(e, t);
                    let { _config: n } = i;
                    "object" == typeof t && (n = { ...n, ...t });
                    const r = "string" == typeof t ? t : n.slide;
                    if ("number" == typeof t) i.to(t);
                    else if ("string" == typeof r) {
                        if (void 0 === i[r]) throw new TypeError(`No method named "${r}"`);
                        i[r]();
                    } else n.interval && n.ride && (i.pause(), i.cycle());
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        Mt.carouselInterface(this, e);
                    });
                }
                static dataApiClickHandler(e) {
                    const t = De(this);
                    if (!t || !t.classList.contains("carousel")) return;
                    const i = { ...Et.getDataAttributes(t), ...Et.getDataAttributes(this) },
                        n = this.getAttribute("data-bs-slide-to");
                    n && (i.interval = !1), Mt.carouselInterface(t, i), n && Mt.getInstance(t).to(n), e.preventDefault();
                }
            }
            ft.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Mt.dataApiClickHandler),
                ft.on(window, "load.bs.carousel.data-api", () => {
                    const e = kt.find('[data-bs-ride="carousel"]');
                    for (let t = 0, i = e.length; t < i; t++) Mt.carouselInterface(e[t], Mt.getInstance(e[t]));
                }),
                Ye(Mt);
            const Rt = "collapse",
                zt = { toggle: !0, parent: null },
                qt = { toggle: "boolean", parent: "(null|element)" },
                Wt = "show",
                Bt = "collapse",
                Ht = "collapsing",
                Ft = "collapsed",
                $t = '[data-bs-toggle="collapse"]';
            class Vt extends mt {
                constructor(e, t) {
                    super(e), (this._isTransitioning = !1), (this._config = this._getConfig(t)), (this._triggerArray = []);
                    const i = kt.find($t);
                    for (let e = 0, t = i.length; e < t; e++) {
                        const t = i[e],
                            n = Ie(t),
                            r = kt.find(n).filter((e) => e === this._element);
                        null !== n && r.length && ((this._selector = n), this._triggerArray.push(t));
                    }
                    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
                }
                static get Default() {
                    return zt;
                }
                static get NAME() {
                    return Rt;
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show();
                }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let e,
                        t = [];
                    if (this._config.parent) {
                        const e = kt.find(".collapse .collapse", this._config.parent);
                        t = kt.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((t) => !e.includes(t));
                    }
                    const i = kt.findOne(this._selector);
                    if (t.length) {
                        const n = t.find((e) => i !== e);
                        if (((e = n ? Vt.getInstance(n) : null), e && e._isTransitioning)) return;
                    }
                    if (ft.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                    t.forEach((t) => {
                        i !== t && Vt.getOrCreateInstance(t, { toggle: !1 }).hide(), e || gt.set(t, "bs.collapse", null);
                    });
                    const n = this._getDimension();
                    this._element.classList.remove(Bt), this._element.classList.add(Ht), (this._element.style[n] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                    const r = `scroll${n[0].toUpperCase() + n.slice(1)}`;
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1), this._element.classList.remove(Ht), this._element.classList.add(Bt, Wt), (this._element.style[n] = ""), ft.trigger(this._element, "shown.bs.collapse");
                        },
                        this._element,
                        !0
                    ),
                        (this._element.style[n] = `${this._element[r]}px`);
                }
                hide() {
                    if (this._isTransitioning || !this._isShown()) return;
                    if (ft.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                    const e = this._getDimension();
                    (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), $e(this._element), this._element.classList.add(Ht), this._element.classList.remove(Bt, Wt);
                    const t = this._triggerArray.length;
                    for (let e = 0; e < t; e++) {
                        const t = this._triggerArray[e],
                            i = De(t);
                        i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1);
                    }
                    (this._isTransitioning = !0),
                        (this._element.style[e] = ""),
                        this._queueCallback(
                            () => {
                                (this._isTransitioning = !1), this._element.classList.remove(Ht), this._element.classList.add(Bt), ft.trigger(this._element, "hidden.bs.collapse");
                            },
                            this._element,
                            !0
                        );
                }
                _isShown(e = this._element) {
                    return e.classList.contains(Wt);
                }
                _getConfig(e) {
                    return ((e = { ...zt, ...Et.getDataAttributes(this._element), ...e }).toggle = Boolean(e.toggle)), (e.parent = ze(e.parent)), qe(Rt, e, qt), e;
                }
                _getDimension() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
                }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const e = kt.find(".collapse .collapse", this._config.parent);
                    kt.find($t, this._config.parent)
                        .filter((t) => !e.includes(t))
                        .forEach((e) => {
                            const t = De(e);
                            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
                        });
                }
                _addAriaAndCollapsedClass(e, t) {
                    e.length &&
                        e.forEach((e) => {
                            t ? e.classList.remove(Ft) : e.classList.add(Ft), e.setAttribute("aria-expanded", t);
                        });
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = {};
                        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                        const i = Vt.getOrCreateInstance(this, t);
                        if ("string" == typeof e) {
                            if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                            i[e]();
                        }
                    });
                }
            }
            ft.on(document, "click.bs.collapse.data-api", $t, function (e) {
                ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
                const t = Ie(this);
                kt.find(t).forEach((e) => {
                    Vt.getOrCreateInstance(e, { toggle: !1 }).toggle();
                });
            }),
                Ye(Vt);
            const Qt = "dropdown",
                Xt = "Escape",
                Yt = "Space",
                Ut = "ArrowUp",
                Kt = "ArrowDown",
                Gt = new RegExp("ArrowUp|ArrowDown|Escape"),
                Jt = "click.bs.dropdown.data-api",
                Zt = "keydown.bs.dropdown.data-api",
                ei = "show",
                ti = '[data-bs-toggle="dropdown"]',
                ii = ".dropdown-menu",
                ni = Xe() ? "top-end" : "top-start",
                ri = Xe() ? "top-start" : "top-end",
                si = Xe() ? "bottom-end" : "bottom-start",
                oi = Xe() ? "bottom-start" : "bottom-end",
                ai = Xe() ? "left-start" : "right-start",
                li = Xe() ? "right-start" : "left-start",
                ci = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
                di = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
            class ui extends mt {
                constructor(e, t) {
                    super(e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar());
                }
                static get Default() {
                    return ci;
                }
                static get DefaultType() {
                    return di;
                }
                static get NAME() {
                    return Qt;
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show();
                }
                show() {
                    if (Be(this._element) || this._isShown(this._menu)) return;
                    const e = { relatedTarget: this._element };
                    if (ft.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) return;
                    const t = ui.getParentFromElement(this._element);
                    this._inNavbar ? Et.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t),
                        "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e) => ft.on(e, "mouseover", Fe)),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        this._menu.classList.add(ei),
                        this._element.classList.add(ei),
                        ft.trigger(this._element, "shown.bs.dropdown", e);
                }
                hide() {
                    if (Be(this._element) || !this._isShown(this._menu)) return;
                    const e = { relatedTarget: this._element };
                    this._completeHide(e);
                }
                dispose() {
                    this._popper && this._popper.destroy(), super.dispose();
                }
                update() {
                    (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
                }
                _completeHide(e) {
                    ft.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
                        ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => ft.off(e, "mouseover", Fe)),
                        this._popper && this._popper.destroy(),
                        this._menu.classList.remove(ei),
                        this._element.classList.remove(ei),
                        this._element.setAttribute("aria-expanded", "false"),
                        Et.removeDataAttribute(this._menu, "popper"),
                        ft.trigger(this._element, "hidden.bs.dropdown", e));
                }
                _getConfig(e) {
                    if (
                        ((e = { ...this.constructor.Default, ...Et.getDataAttributes(this._element), ...e }),
                        qe(Qt, e, this.constructor.DefaultType),
                        "object" == typeof e.reference && !Re(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                    )
                        throw new TypeError(`${Qt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return e;
                }
                _createPopper(t) {
                    if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let i = this._element;
                    "parent" === this._config.reference ? (i = t) : Re(this._config.reference) ? (i = ze(this._config.reference)) : "object" == typeof this._config.reference && (i = this._config.reference);
                    const n = this._getPopperConfig(),
                        r = n.modifiers.find((e) => "applyStyles" === e.name && !1 === e.enabled);
                    (this._popper = Te(i, this._menu, n)), r && Et.setDataAttribute(this._menu, "popper", "static");
                }
                _isShown(e = this._element) {
                    return e.classList.contains(ei);
                }
                _getMenuElement() {
                    return kt.next(this._element, ii)[0];
                }
                _getPlacement() {
                    const e = this._element.parentNode;
                    if (e.classList.contains("dropend")) return ai;
                    if (e.classList.contains("dropstart")) return li;
                    const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return e.classList.contains("dropup") ? (t ? ri : ni) : t ? oi : si;
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar");
                }
                _getOffset() {
                    const { offset: e } = this._config;
                    return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
                }
                _getPopperConfig() {
                    const e = {
                        placement: this._getPlacement(),
                        modifiers: [
                            { name: "preventOverflow", options: { boundary: this._config.boundary } },
                            { name: "offset", options: { offset: this._getOffset() } },
                        ],
                    };
                    return (
                        "static" === this._config.display && (e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) }
                    );
                }
                _selectMenuItem({ key: e, target: t }) {
                    const i = kt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(We);
                    i.length && Ge(i, t, e === Kt, !i.includes(t)).focus();
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = ui.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
                static clearMenus(e) {
                    if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))) return;
                    const t = kt.find(ti);
                    for (let i = 0, n = t.length; i < n; i++) {
                        const n = ui.getInstance(t[i]);
                        if (!n || !1 === n._config.autoClose) continue;
                        if (!n._isShown()) continue;
                        const r = { relatedTarget: n._element };
                        if (e) {
                            const t = e.composedPath(),
                                i = t.includes(n._menu);
                            if (t.includes(n._element) || ("inside" === n._config.autoClose && !i) || ("outside" === n._config.autoClose && i)) continue;
                            if (n._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                            "click" === e.type && (r.clickEvent = e);
                        }
                        n._completeHide(r);
                    }
                }
                static getParentFromElement(e) {
                    return De(e) || e.parentNode;
                }
                static dataApiKeydownHandler(e) {
                    if (/input|textarea/i.test(e.target.tagName) ? e.key === Yt || (e.key !== Xt && ((e.key !== Kt && e.key !== Ut) || e.target.closest(ii))) : !Gt.test(e.key)) return;
                    const t = this.classList.contains(ei);
                    if (!t && e.key === Xt) return;
                    if ((e.preventDefault(), e.stopPropagation(), Be(this))) return;
                    const i = this.matches(ti) ? this : kt.prev(this, ti)[0],
                        n = ui.getOrCreateInstance(i);
                    if (e.key !== Xt) return e.key === Ut || e.key === Kt ? (t || n.show(), void n._selectMenuItem(e)) : void ((t && e.key !== Yt) || ui.clearMenus());
                    n.hide();
                }
            }
            ft.on(document, Zt, ti, ui.dataApiKeydownHandler),
                ft.on(document, Zt, ii, ui.dataApiKeydownHandler),
                ft.on(document, Jt, ui.clearMenus),
                ft.on(document, "keyup.bs.dropdown.data-api", ui.clearMenus),
                ft.on(document, Jt, ti, function (e) {
                    e.preventDefault(), ui.getOrCreateInstance(this).toggle();
                }),
                Ye(ui);
            const hi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                fi = ".sticky-top";
            class pi {
                constructor() {
                    this._element = document.body;
                }
                getWidth() {
                    const e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e);
                }
                hide() {
                    const e = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t) => t + e), this._setElementAttributes(hi, "paddingRight", (t) => t + e), this._setElementAttributes(fi, "marginRight", (t) => t - e);
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
                }
                _setElementAttributes(e, t, i) {
                    const n = this.getWidth();
                    this._applyManipulationCallback(e, (e) => {
                        if (e !== this._element && window.innerWidth > e.clientWidth + n) return;
                        this._saveInitialAttribute(e, t);
                        const r = window.getComputedStyle(e)[t];
                        e.style[t] = `${i(Number.parseFloat(r))}px`;
                    });
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(hi, "paddingRight"), this._resetElementAttributes(fi, "marginRight");
                }
                _saveInitialAttribute(e, t) {
                    const i = e.style[t];
                    i && Et.setDataAttribute(e, t, i);
                }
                _resetElementAttributes(e, t) {
                    this._applyManipulationCallback(e, (e) => {
                        const i = Et.getDataAttribute(e, t);
                        void 0 === i ? e.style.removeProperty(t) : (Et.removeDataAttribute(e, t), (e.style[t] = i));
                    });
                }
                _applyManipulationCallback(e, t) {
                    Re(e) ? t(e) : kt.find(e, this._element).forEach(t);
                }
                isOverflowing() {
                    return this.getWidth() > 0;
                }
            }
            const gi = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
                mi = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
                vi = "show",
                bi = "mousedown.bs.backdrop";
            class _i {
                constructor(e) {
                    (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
                }
                show(e) {
                    this._config.isVisible
                        ? (this._append(),
                          this._config.isAnimated && $e(this._getElement()),
                          this._getElement().classList.add(vi),
                          this._emulateAnimation(() => {
                              Ue(e);
                          }))
                        : Ue(e);
                }
                hide(e) {
                    this._config.isVisible
                        ? (this._getElement().classList.remove(vi),
                          this._emulateAnimation(() => {
                              this.dispose(), Ue(e);
                          }))
                        : Ue(e);
                }
                _getElement() {
                    if (!this._element) {
                        const e = document.createElement("div");
                        (e.className = this._config.className), this._config.isAnimated && e.classList.add("fade"), (this._element = e);
                    }
                    return this._element;
                }
                _getConfig(e) {
                    return ((e = { ...gi, ...("object" == typeof e ? e : {}) }).rootElement = ze(e.rootElement)), qe("backdrop", e, mi), e;
                }
                _append() {
                    this._isAppended ||
                        (this._config.rootElement.append(this._getElement()),
                        ft.on(this._getElement(), bi, () => {
                            Ue(this._config.clickCallback);
                        }),
                        (this._isAppended = !0));
                }
                dispose() {
                    this._isAppended && (ft.off(this._element, bi), this._element.remove(), (this._isAppended = !1));
                }
                _emulateAnimation(e) {
                    Ke(e, this._getElement(), this._config.isAnimated);
                }
            }
            const yi = { trapElement: null, autofocus: !0 },
                wi = { trapElement: "element", autofocus: "boolean" },
                xi = ".bs.focustrap",
                Ei = "backward";
            class ki {
                constructor(e) {
                    (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
                }
                activate() {
                    const { trapElement: e, autofocus: t } = this._config;
                    this._isActive ||
                        (t && e.focus(), ft.off(document, xi), ft.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)), ft.on(document, "keydown.tab.bs.focustrap", (e) => this._handleKeydown(e)), (this._isActive = !0));
                }
                deactivate() {
                    this._isActive && ((this._isActive = !1), ft.off(document, xi));
                }
                _handleFocusin(e) {
                    const { target: t } = e,
                        { trapElement: i } = this._config;
                    if (t === document || t === i || i.contains(t)) return;
                    const n = kt.focusableChildren(i);
                    0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
                }
                _handleKeydown(e) {
                    "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Ei : "forward");
                }
                _getConfig(e) {
                    return (e = { ...yi, ...("object" == typeof e ? e : {}) }), qe("focustrap", e, wi), e;
                }
            }
            const Si = "modal",
                Li = "Escape",
                Oi = { backdrop: !0, keyboard: !0, focus: !0 },
                Ai = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
                ji = "hidden.bs.modal",
                Ti = "show.bs.modal",
                Ci = "resize.bs.modal",
                Pi = "click.dismiss.bs.modal",
                Ni = "keydown.dismiss.bs.modal",
                Ii = "mousedown.dismiss.bs.modal",
                Di = "modal-open",
                Mi = "show",
                Ri = "modal-static";
            class zi extends mt {
                constructor(e, t) {
                    super(e),
                        (this._config = this._getConfig(t)),
                        (this._dialog = kt.findOne(".modal-dialog", this._element)),
                        (this._backdrop = this._initializeBackDrop()),
                        (this._focustrap = this._initializeFocusTrap()),
                        (this._isShown = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollBar = new pi());
                }
                static get Default() {
                    return Oi;
                }
                static get NAME() {
                    return Si;
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e);
                }
                show(e) {
                    this._isShown ||
                        this._isTransitioning ||
                        ft.trigger(this._element, Ti, { relatedTarget: e }).defaultPrevented ||
                        ((this._isShown = !0),
                        this._isAnimated() && (this._isTransitioning = !0),
                        this._scrollBar.hide(),
                        document.body.classList.add(Di),
                        this._adjustDialog(),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        ft.on(this._dialog, Ii, () => {
                            ft.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
                                e.target === this._element && (this._ignoreBackdropClick = !0);
                            });
                        }),
                        this._showBackdrop(() => this._showElement(e)));
                }
                hide() {
                    if (!this._isShown || this._isTransitioning) return;
                    if (ft.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                    this._isShown = !1;
                    const e = this._isAnimated();
                    e && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        this._focustrap.deactivate(),
                        this._element.classList.remove(Mi),
                        ft.off(this._element, Pi),
                        ft.off(this._dialog, Ii),
                        this._queueCallback(() => this._hideModal(), this._element, e);
                }
                dispose() {
                    [window, this._dialog].forEach((e) => ft.off(e, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
                }
                handleUpdate() {
                    this._adjustDialog();
                }
                _initializeBackDrop() {
                    return new _i({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
                }
                _initializeFocusTrap() {
                    return new ki({ trapElement: this._element });
                }
                _getConfig(e) {
                    return (e = { ...Oi, ...Et.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), qe(Si, e, Ai), e;
                }
                _showElement(e) {
                    const t = this._isAnimated(),
                        i = kt.findOne(".modal-body", this._dialog);
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.append(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        (this._element.scrollTop = 0),
                        i && (i.scrollTop = 0),
                        t && $e(this._element),
                        this._element.classList.add(Mi),
                        this._queueCallback(
                            () => {
                                this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), ft.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
                            },
                            this._dialog,
                            t
                        );
                }
                _setEscapeEvent() {
                    this._isShown
                        ? ft.on(this._element, Ni, (e) => {
                              this._config.keyboard && e.key === Li ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== Li || this._triggerBackdropTransition();
                          })
                        : ft.off(this._element, Ni);
                }
                _setResizeEvent() {
                    this._isShown ? ft.on(window, Ci, () => this._adjustDialog()) : ft.off(window, Ci);
                }
                _hideModal() {
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._backdrop.hide(() => {
                            document.body.classList.remove(Di), this._resetAdjustments(), this._scrollBar.reset(), ft.trigger(this._element, ji);
                        });
                }
                _showBackdrop(e) {
                    ft.on(this._element, Pi, (e) => {
                        this._ignoreBackdropClick ? (this._ignoreBackdropClick = !1) : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
                    }),
                        this._backdrop.show(e);
                }
                _isAnimated() {
                    return this._element.classList.contains("fade");
                }
                _triggerBackdropTransition() {
                    if (ft.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                    const { classList: e, scrollHeight: t, style: i } = this._element,
                        n = t > document.documentElement.clientHeight;
                    (!n && "hidden" === i.overflowY) ||
                        e.contains(Ri) ||
                        (n || (i.overflowY = "hidden"),
                        e.add(Ri),
                        this._queueCallback(() => {
                            e.remove(Ri),
                                n ||
                                    this._queueCallback(() => {
                                        i.overflowY = "";
                                    }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
                }
                _adjustDialog() {
                    const e = this._element.scrollHeight > document.documentElement.clientHeight,
                        t = this._scrollBar.getWidth(),
                        i = t > 0;
                    ((!i && e && !Xe()) || (i && !e && Xe())) && (this._element.style.paddingLeft = `${t}px`), ((i && !e && !Xe()) || (!i && e && Xe())) && (this._element.style.paddingRight = `${t}px`);
                }
                _resetAdjustments() {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }
                static jQueryInterface(e, t) {
                    return this.each(function () {
                        const i = zi.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                            i[e](t);
                        }
                    });
                }
            }
            ft.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (e) {
                const t = De(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    ft.one(t, Ti, (e) => {
                        e.defaultPrevented ||
                            ft.one(t, ji, () => {
                                We(this) && this.focus();
                            });
                    });
                const i = kt.findOne(".modal.show");
                i && zi.getInstance(i).hide(), zi.getOrCreateInstance(t).toggle(this);
            }),
                vt(zi),
                Ye(zi);
            const qi = "offcanvas",
                Wi = { backdrop: !0, keyboard: !0, scroll: !1 },
                Bi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
                Hi = "show",
                Fi = ".offcanvas.show",
                $i = "hidden.bs.offcanvas";
            class Vi extends mt {
                constructor(e, t) {
                    super(e), (this._config = this._getConfig(t)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
                }
                static get NAME() {
                    return qi;
                }
                static get Default() {
                    return Wi;
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e);
                }
                show(e) {
                    this._isShown ||
                        ft.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e }).defaultPrevented ||
                        ((this._isShown = !0),
                        (this._element.style.visibility = "visible"),
                        this._backdrop.show(),
                        this._config.scroll || new pi().hide(),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        this._element.classList.add(Hi),
                        this._queueCallback(
                            () => {
                                this._config.scroll || this._focustrap.activate(), ft.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: e });
                            },
                            this._element,
                            !0
                        ));
                }
                hide() {
                    this._isShown &&
                        (ft.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
                            (this._focustrap.deactivate(),
                            this._element.blur(),
                            (this._isShown = !1),
                            this._element.classList.remove(Hi),
                            this._backdrop.hide(),
                            this._queueCallback(
                                () => {
                                    this._element.setAttribute("aria-hidden", !0),
                                        this._element.removeAttribute("aria-modal"),
                                        this._element.removeAttribute("role"),
                                        (this._element.style.visibility = "hidden"),
                                        this._config.scroll || new pi().reset(),
                                        ft.trigger(this._element, $i);
                                },
                                this._element,
                                !0
                            )));
                }
                dispose() {
                    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
                }
                _getConfig(e) {
                    return (e = { ...Wi, ...Et.getDataAttributes(this._element), ...("object" == typeof e ? e : {}) }), qe(qi, e, Bi), e;
                }
                _initializeBackDrop() {
                    return new _i({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
                }
                _initializeFocusTrap() {
                    return new ki({ trapElement: this._element });
                }
                _addEventListeners() {
                    ft.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                        this._config.keyboard && "Escape" === e.key && this.hide();
                    });
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Vi.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e](this);
                        }
                    });
                }
            }
            ft.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
                const t = De(this);
                if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Be(this))) return;
                ft.one(t, $i, () => {
                    We(this) && this.focus();
                });
                const i = kt.findOne(Fi);
                i && i !== t && Vi.getInstance(i).hide(), Vi.getOrCreateInstance(t).toggle(this);
            }),
                ft.on(window, "load.bs.offcanvas.data-api", () => kt.find(Fi).forEach((e) => Vi.getOrCreateInstance(e).show())),
                vt(Vi),
                Ye(Vi);
            const Qi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                Xi = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
                Yi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                Ui = (e, t) => {
                    const i = e.nodeName.toLowerCase();
                    if (t.includes(i)) return !Qi.has(i) || Boolean(Xi.test(e.nodeValue) || Yi.test(e.nodeValue));
                    const n = t.filter((e) => e instanceof RegExp);
                    for (let e = 0, t = n.length; e < t; e++) if (n[e].test(i)) return !0;
                    return !1;
                };
            function Ki(e, t, i) {
                if (!e.length) return e;
                if (i && "function" == typeof i) return i(e);
                const n = new window.DOMParser().parseFromString(e, "text/html"),
                    r = Object.keys(t),
                    s = [].concat(...n.body.querySelectorAll("*"));
                for (let e = 0, i = s.length; e < i; e++) {
                    const i = s[e],
                        n = i.nodeName.toLowerCase();
                    if (!r.includes(n)) {
                        i.remove();
                        continue;
                    }
                    const o = [].concat(...i.attributes),
                        a = [].concat(t["*"] || [], t[n] || []);
                    o.forEach((e) => {
                        Ui(e, a) || i.removeAttribute(e.nodeName);
                    });
                }
                return n.body.innerHTML;
            }
            const Gi = "tooltip",
                Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
                Zi = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(array|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacements: "array",
                    boundary: "(string|element)",
                    customClass: "(string|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    allowList: "object",
                    popperConfig: "(null|object|function)",
                },
                en = { AUTO: "auto", TOP: "top", RIGHT: Xe() ? "left" : "right", BOTTOM: "bottom", LEFT: Xe() ? "right" : "left" },
                tn = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: [0, 0],
                    container: !1,
                    fallbackPlacements: ["top", "right", "bottom", "left"],
                    boundary: "clippingParents",
                    customClass: "",
                    sanitize: !0,
                    sanitizeFn: null,
                    allowList: {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "srcset", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: [],
                    },
                    popperConfig: null,
                },
                nn = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip",
                },
                rn = "fade",
                sn = "show",
                on = "show",
                an = "out",
                ln = ".tooltip-inner",
                cn = ".modal",
                dn = "hide.bs.modal",
                un = "hover",
                hn = "focus";
            class fn extends mt {
                constructor(t, i) {
                    if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(t), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(i)), (this.tip = null), this._setListeners();
                }
                static get Default() {
                    return tn;
                }
                static get NAME() {
                    return Gi;
                }
                static get Event() {
                    return nn;
                }
                static get DefaultType() {
                    return Zi;
                }
                enable() {
                    this._isEnabled = !0;
                }
                disable() {
                    this._isEnabled = !1;
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled;
                }
                toggle(e) {
                    if (this._isEnabled)
                        if (e) {
                            const t = this._initializeOnDelegatedTarget(e);
                            (t._activeTrigger.click = !t._activeTrigger.click), t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
                        } else {
                            if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }
                dispose() {
                    clearTimeout(this._timeout), ft.off(this._element.closest(cn), dn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
                }
                show() {
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (!this.isWithContent() || !this._isEnabled) return;
                    const e = ft.trigger(this._element, this.constructor.Event.SHOW),
                        t = He(this._element),
                        i = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
                    if (e.defaultPrevented || !i) return;
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(ln).innerHTML && (this._disposePopper(), this.tip.remove(), (this.tip = null));
                    const n = this.getTipElement(),
                        r = ((e) => {
                            do {
                                e += Math.floor(1e6 * Math.random());
                            } while (document.getElementById(e));
                            return e;
                        })(this.constructor.NAME);
                    n.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && n.classList.add(rn);
                    const s = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
                        o = this._getAttachment(s);
                    this._addAttachmentClass(o);
                    const { container: a } = this._config;
                    gt.set(n, this.constructor.DATA_KEY, this),
                        this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), ft.trigger(this._element, this.constructor.Event.INSERTED)),
                        this._popper ? this._popper.update() : (this._popper = Te(this._element, n, this._getPopperConfig(o))),
                        n.classList.add(sn);
                    const l = this._resolvePossibleFunction(this._config.customClass);
                    l && n.classList.add(...l.split(" ")),
                        "ontouchstart" in document.documentElement &&
                            [].concat(...document.body.children).forEach((e) => {
                                ft.on(e, "mouseover", Fe);
                            });
                    const c = this.tip.classList.contains(rn);
                    this._queueCallback(
                        () => {
                            const e = this._hoverState;
                            (this._hoverState = null), ft.trigger(this._element, this.constructor.Event.SHOWN), e === an && this._leave(null, this);
                        },
                        this.tip,
                        c
                    );
                }
                hide() {
                    if (!this._popper) return;
                    const e = this.getTipElement();
                    if (ft.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                    e.classList.remove(sn),
                        "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => ft.off(e, "mouseover", Fe)),
                        (this._activeTrigger.click = !1),
                        (this._activeTrigger.focus = !1),
                        (this._activeTrigger.hover = !1);
                    const t = this.tip.classList.contains(rn);
                    this._queueCallback(
                        () => {
                            this._isWithActiveTrigger() ||
                                (this._hoverState !== on && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), ft.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
                        },
                        this.tip,
                        t
                    ),
                        (this._hoverState = "");
                }
                update() {
                    null !== this._popper && this._popper.update();
                }
                isWithContent() {
                    return Boolean(this.getTitle());
                }
                getTipElement() {
                    if (this.tip) return this.tip;
                    const e = document.createElement("div");
                    e.innerHTML = this._config.template;
                    const t = e.children[0];
                    return this.setContent(t), t.classList.remove(rn, sn), (this.tip = t), this.tip;
                }
                setContent(e) {
                    this._sanitizeAndSetContent(e, this.getTitle(), ln);
                }
                _sanitizeAndSetContent(e, t, i) {
                    const n = kt.findOne(i, e);
                    t || !n ? this.setElementContent(n, t) : n.remove();
                }
                setElementContent(e, t) {
                    if (null !== e)
                        return Re(t)
                            ? ((t = ze(t)), void (this._config.html ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t)) : (e.textContent = t.textContent)))
                            : void (this._config.html ? (this._config.sanitize && (t = Ki(t, this._config.allowList, this._config.sanitizeFn)), (e.innerHTML = t)) : (e.textContent = t));
                }
                getTitle() {
                    const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
                    return this._resolvePossibleFunction(e);
                }
                updateAttachment(e) {
                    return "right" === e ? "end" : "left" === e ? "start" : e;
                }
                _initializeOnDelegatedTarget(e, t) {
                    return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
                }
                _getOffset() {
                    const { offset: e } = this._config;
                    return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
                }
                _resolvePossibleFunction(e) {
                    return "function" == typeof e ? e.call(this._element) : e;
                }
                _getPopperConfig(e) {
                    const t = {
                        placement: e,
                        modifiers: [
                            { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                            { name: "offset", options: { offset: this._getOffset() } },
                            { name: "preventOverflow", options: { boundary: this._config.boundary } },
                            { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                            { name: "onChange", enabled: !0, phase: "afterWrite", fn: (e) => this._handlePopperPlacementChange(e) },
                        ],
                        onFirstUpdate: (e) => {
                            e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
                        },
                    };
                    return { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
                }
                _addAttachmentClass(e) {
                    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`);
                }
                _getAttachment(e) {
                    return en[e.toUpperCase()];
                }
                _setListeners() {
                    this._config.trigger.split(" ").forEach((e) => {
                        if ("click" === e) ft.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e) => this.toggle(e));
                        else if ("manual" !== e) {
                            const t = e === un ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                i = e === un ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                            ft.on(this._element, t, this._config.selector, (e) => this._enter(e)), ft.on(this._element, i, this._config.selector, (e) => this._leave(e));
                        }
                    }),
                        (this._hideModalHandler = () => {
                            this._element && this.hide();
                        }),
                        ft.on(this._element.closest(cn), dn, this._hideModalHandler),
                        this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
                }
                _fixTitle() {
                    const e = this._element.getAttribute("title"),
                        t = typeof this._element.getAttribute("data-bs-original-title");
                    (e || "string" !== t) &&
                        (this._element.setAttribute("data-bs-original-title", e || ""),
                        !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e),
                        this._element.setAttribute("title", ""));
                }
                _enter(e, t) {
                    (t = this._initializeOnDelegatedTarget(e, t)),
                        e && (t._activeTrigger["focusin" === e.type ? hn : un] = !0),
                        t.getTipElement().classList.contains(sn) || t._hoverState === on
                            ? (t._hoverState = on)
                            : (clearTimeout(t._timeout),
                              (t._hoverState = on),
                              t._config.delay && t._config.delay.show
                                  ? (t._timeout = setTimeout(() => {
                                        t._hoverState === on && t.show();
                                    }, t._config.delay.show))
                                  : t.show());
                }
                _leave(e, t) {
                    (t = this._initializeOnDelegatedTarget(e, t)),
                        e && (t._activeTrigger["focusout" === e.type ? hn : un] = t._element.contains(e.relatedTarget)),
                        t._isWithActiveTrigger() ||
                            (clearTimeout(t._timeout),
                            (t._hoverState = an),
                            t._config.delay && t._config.delay.hide
                                ? (t._timeout = setTimeout(() => {
                                      t._hoverState === an && t.hide();
                                  }, t._config.delay.hide))
                                : t.hide());
                }
                _isWithActiveTrigger() {
                    for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1;
                }
                _getConfig(e) {
                    const t = Et.getDataAttributes(this._element);
                    return (
                        Object.keys(t).forEach((e) => {
                            Ji.has(e) && delete t[e];
                        }),
                        ((e = { ...this.constructor.Default, ...t, ...("object" == typeof e && e ? e : {}) }).container = !1 === e.container ? document.body : ze(e.container)),
                        "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                        "number" == typeof e.title && (e.title = e.title.toString()),
                        "number" == typeof e.content && (e.content = e.content.toString()),
                        qe(Gi, e, this.constructor.DefaultType),
                        e.sanitize && (e.template = Ki(e.template, e.allowList, e.sanitizeFn)),
                        e
                    );
                }
                _getDelegateConfig() {
                    const e = {};
                    for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                    return e;
                }
                _cleanTipClass() {
                    const e = this.getTipElement(),
                        t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                        i = e.getAttribute("class").match(t);
                    null !== i && i.length > 0 && i.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
                }
                _getBasicClassPrefix() {
                    return "bs-tooltip";
                }
                _handlePopperPlacementChange(e) {
                    const { state: t } = e;
                    t && ((this.tip = t.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
                }
                _disposePopper() {
                    this._popper && (this._popper.destroy(), (this._popper = null));
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = fn.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            Ye(fn);
            const pn = {
                    ...fn.Default,
                    placement: "right",
                    offset: [0, 8],
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                },
                gn = { ...fn.DefaultType, content: "(string|element|function)" },
                mn = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover",
                };
            class vn extends fn {
                static get Default() {
                    return pn;
                }
                static get NAME() {
                    return "popover";
                }
                static get Event() {
                    return mn;
                }
                static get DefaultType() {
                    return gn;
                }
                isWithContent() {
                    return this.getTitle() || this._getContent();
                }
                setContent(e) {
                    this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content);
                }
                _getBasicClassPrefix() {
                    return "bs-popover";
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = vn.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            Ye(vn);
            const bn = "scrollspy",
                _n = { offset: 10, method: "auto", target: "" },
                yn = { offset: "number", method: "string", target: "(string|element)" },
                wn = "active",
                xn = ".nav-link, .list-group-item, .dropdown-item",
                En = "position";
            class kn extends mt {
                constructor(e, t) {
                    super(e),
                        (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
                        (this._config = this._getConfig(t)),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        ft.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
                        this.refresh(),
                        this._process();
                }
                static get Default() {
                    return _n;
                }
                static get NAME() {
                    return bn;
                }
                refresh() {
                    const e = this._scrollElement === this._scrollElement.window ? "offset" : En,
                        t = "auto" === this._config.method ? e : this._config.method,
                        i = t === En ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        kt
                            .find(xn, this._config.target)
                            .map((e) => {
                                const n = Ie(e),
                                    r = n ? kt.findOne(n) : null;
                                if (r) {
                                    const e = r.getBoundingClientRect();
                                    if (e.width || e.height) return [Et[t](r).top + i, n];
                                }
                                return null;
                            })
                            .filter((e) => e)
                            .sort((e, t) => e[0] - t[0])
                            .forEach((e) => {
                                this._offsets.push(e[0]), this._targets.push(e[1]);
                            });
                }
                dispose() {
                    ft.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
                }
                _getConfig(e) {
                    return ((e = { ..._n, ...Et.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }).target = ze(e.target) || document.documentElement), qe(bn, e, yn), e;
                }
                _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }
                _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }
                _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }
                _process() {
                    const e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        i = this._config.offset + t - this._getOffsetHeight();
                    if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
                        const e = this._targets[this._targets.length - 1];
                        this._activeTarget !== e && this._activate(e);
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                        for (let t = this._offsets.length; t--; ) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t]);
                    }
                }
                _activate(e) {
                    (this._activeTarget = e), this._clear();
                    const t = xn.split(",").map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                        i = kt.findOne(t.join(","), this._config.target);
                    i.classList.add(wn),
                        i.classList.contains("dropdown-item")
                            ? kt.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(wn)
                            : kt.parents(i, ".nav, .list-group").forEach((e) => {
                                  kt.prev(e, ".nav-link, .list-group-item").forEach((e) => e.classList.add(wn)),
                                      kt.prev(e, ".nav-item").forEach((e) => {
                                          kt.children(e, ".nav-link").forEach((e) => e.classList.add(wn));
                                      });
                              }),
                        ft.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: e });
                }
                _clear() {
                    kt.find(xn, this._config.target)
                        .filter((e) => e.classList.contains(wn))
                        .forEach((e) => e.classList.remove(wn));
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = kn.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            ft.on(window, "load.bs.scrollspy.data-api", () => {
                kt.find('[data-bs-spy="scroll"]').forEach((e) => new kn(e));
            }),
                Ye(kn);
            const Sn = "active",
                Ln = "fade",
                On = "show",
                An = ".active",
                jn = ":scope > li > .active";
            class Tn extends mt {
                static get NAME() {
                    return "tab";
                }
                show() {
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Sn)) return;
                    let e;
                    const t = De(this._element),
                        i = this._element.closest(".nav, .list-group");
                    if (i) {
                        const t = "UL" === i.nodeName || "OL" === i.nodeName ? jn : An;
                        (e = kt.find(t, i)), (e = e[e.length - 1]);
                    }
                    const n = e ? ft.trigger(e, "hide.bs.tab", { relatedTarget: this._element }) : null;
                    if (ft.trigger(this._element, "show.bs.tab", { relatedTarget: e }).defaultPrevented || (null !== n && n.defaultPrevented)) return;
                    this._activate(this._element, i);
                    const r = () => {
                        ft.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }), ft.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
                    };
                    t ? this._activate(t, t.parentNode, r) : r();
                }
                _activate(e, t, i) {
                    const n = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? kt.children(t, An) : kt.find(jn, t))[0],
                        r = i && n && n.classList.contains(Ln),
                        s = () => this._transitionComplete(e, n, i);
                    n && r ? (n.classList.remove(On), this._queueCallback(s, e, !0)) : s();
                }
                _transitionComplete(e, t, i) {
                    if (t) {
                        t.classList.remove(Sn);
                        const e = kt.findOne(":scope > .dropdown-menu .active", t.parentNode);
                        e && e.classList.remove(Sn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                    }
                    e.classList.add(Sn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), $e(e), e.classList.contains(Ln) && e.classList.add(On);
                    let n = e.parentNode;
                    if ((n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu"))) {
                        const t = e.closest(".dropdown");
                        t && kt.find(".dropdown-toggle", t).forEach((e) => e.classList.add(Sn)), e.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Tn.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            ft.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (e) {
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(), Be(this) || Tn.getOrCreateInstance(this).show();
            }),
                Ye(Tn);
            const Cn = "toast",
                Pn = "hide",
                Nn = "show",
                In = "showing",
                Dn = { animation: "boolean", autohide: "boolean", delay: "number" },
                Mn = { animation: !0, autohide: !0, delay: 5e3 };
            class Rn extends mt {
                constructor(e, t) {
                    super(e), (this._config = this._getConfig(t)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
                }
                static get DefaultType() {
                    return Dn;
                }
                static get Default() {
                    return Mn;
                }
                static get NAME() {
                    return Cn;
                }
                show() {
                    ft.trigger(this._element, "show.bs.toast").defaultPrevented ||
                        (this._clearTimeout(),
                        this._config.animation && this._element.classList.add("fade"),
                        this._element.classList.remove(Pn),
                        $e(this._element),
                        this._element.classList.add(Nn),
                        this._element.classList.add(In),
                        this._queueCallback(
                            () => {
                                this._element.classList.remove(In), ft.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
                            },
                            this._element,
                            this._config.animation
                        ));
                }
                hide() {
                    this._element.classList.contains(Nn) &&
                        (ft.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                            (this._element.classList.add(In),
                            this._queueCallback(
                                () => {
                                    this._element.classList.add(Pn), this._element.classList.remove(In), this._element.classList.remove(Nn), ft.trigger(this._element, "hidden.bs.toast");
                                },
                                this._element,
                                this._config.animation
                            )));
                }
                dispose() {
                    this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose();
                }
                _getConfig(e) {
                    return (e = { ...Mn, ...Et.getDataAttributes(this._element), ...("object" == typeof e && e ? e : {}) }), qe(Cn, e, this.constructor.DefaultType), e;
                }
                _maybeScheduleHide() {
                    this._config.autohide &&
                        (this._hasMouseInteraction ||
                            this._hasKeyboardInteraction ||
                            (this._timeout = setTimeout(() => {
                                this.hide();
                            }, this._config.delay)));
                }
                _onInteraction(e, t) {
                    switch (e.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = t;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = t;
                    }
                    if (t) return void this._clearTimeout();
                    const i = e.relatedTarget;
                    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
                }
                _setListeners() {
                    ft.on(this._element, "mouseover.bs.toast", (e) => this._onInteraction(e, !0)),
                        ft.on(this._element, "mouseout.bs.toast", (e) => this._onInteraction(e, !1)),
                        ft.on(this._element, "focusin.bs.toast", (e) => this._onInteraction(e, !0)),
                        ft.on(this._element, "focusout.bs.toast", (e) => this._onInteraction(e, !1));
                }
                _clearTimeout() {
                    clearTimeout(this._timeout), (this._timeout = null);
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Rn.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e](this);
                        }
                    });
                }
            }
            vt(Rn), Ye(Rn), i(9399), i(3542);
            var zn,
                qn = i(1807),
                Wn = i.n(qn),
                Bn = (i(8165), i(7543), i(7692), i(2352), i(4249), i(3344), i(7323), i(4079), i(3096)),
                Hn = i.n(Bn),
                Fn = i(1296),
                $n = i.n(Fn),
                Vn = i(773),
                Qn = i.n(Vn),
                Xn = [],
                Yn = "ResizeObserver loop completed with undelivered notifications.";
            !(function (e) {
                (e.BORDER_BOX = "border-box"), (e.CONTENT_BOX = "content-box"), (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
            })(zn || (zn = {}));
            var Un,
                Kn = function (e) {
                    return Object.freeze(e);
                },
                Gn = function (e, t) {
                    (this.inlineSize = e), (this.blockSize = t), Kn(this);
                },
                Jn = (function () {
                    function e(e, t, i, n) {
                        return (this.x = e), (this.y = t), (this.width = i), (this.height = n), (this.top = this.y), (this.left = this.x), (this.bottom = this.top + this.height), (this.right = this.left + this.width), Kn(this);
                    }
                    return (
                        (e.prototype.toJSON = function () {
                            var e = this;
                            return { x: e.x, y: e.y, top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.width, height: e.height };
                        }),
                        (e.fromRect = function (t) {
                            return new e(t.x, t.y, t.width, t.height);
                        }),
                        e
                    );
                })(),
                Zn = function (e) {
                    return e instanceof SVGElement && "getBBox" in e;
                },
                er = function (e) {
                    if (Zn(e)) {
                        var t = e.getBBox(),
                            i = t.width,
                            n = t.height;
                        return !i && !n;
                    }
                    var r = e,
                        s = r.offsetWidth,
                        o = r.offsetHeight;
                    return !(s || o || e.getClientRects().length);
                },
                tr = function (e) {
                    var t, i;
                    if (e instanceof Element) return !0;
                    var n = null === (i = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) || void 0 === i ? void 0 : i.defaultView;
                    return !!(n && e instanceof n.Element);
                },
                ir = "undefined" != typeof window ? window : {},
                nr = new WeakMap(),
                rr = /auto|scroll/,
                sr = /^tb|vertical/,
                or = /msie|trident/i.test(ir.navigator && ir.navigator.userAgent),
                ar = function (e) {
                    return parseFloat(e || "0");
                },
                lr = function (e, t, i) {
                    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = !1), new Gn((i ? t : e) || 0, (i ? e : t) || 0);
                },
                cr = Kn({ devicePixelContentBoxSize: lr(), borderBoxSize: lr(), contentBoxSize: lr(), contentRect: new Jn(0, 0, 0, 0) }),
                dr = function (e, t) {
                    if ((void 0 === t && (t = !1), nr.has(e) && !t)) return nr.get(e);
                    if (er(e)) return nr.set(e, cr), cr;
                    var i = getComputedStyle(e),
                        n = Zn(e) && e.ownerSVGElement && e.getBBox(),
                        r = !or && "border-box" === i.boxSizing,
                        s = sr.test(i.writingMode || ""),
                        o = !n && rr.test(i.overflowY || ""),
                        a = !n && rr.test(i.overflowX || ""),
                        l = n ? 0 : ar(i.paddingTop),
                        c = n ? 0 : ar(i.paddingRight),
                        d = n ? 0 : ar(i.paddingBottom),
                        u = n ? 0 : ar(i.paddingLeft),
                        h = n ? 0 : ar(i.borderTopWidth),
                        f = n ? 0 : ar(i.borderRightWidth),
                        p = n ? 0 : ar(i.borderBottomWidth),
                        g = u + c,
                        m = l + d,
                        v = (n ? 0 : ar(i.borderLeftWidth)) + f,
                        b = h + p,
                        _ = a ? e.offsetHeight - b - e.clientHeight : 0,
                        y = o ? e.offsetWidth - v - e.clientWidth : 0,
                        w = r ? g + v : 0,
                        x = r ? m + b : 0,
                        E = n ? n.width : ar(i.width) - w - y,
                        k = n ? n.height : ar(i.height) - x - _,
                        S = E + g + y + v,
                        L = k + m + _ + b,
                        O = Kn({ devicePixelContentBoxSize: lr(Math.round(E * devicePixelRatio), Math.round(k * devicePixelRatio), s), borderBoxSize: lr(S, L, s), contentBoxSize: lr(E, k, s), contentRect: new Jn(u, l, E, k) });
                    return nr.set(e, O), O;
                },
                ur = function (e, t, i) {
                    var n = dr(e, i),
                        r = n.borderBoxSize,
                        s = n.contentBoxSize,
                        o = n.devicePixelContentBoxSize;
                    switch (t) {
                        case zn.DEVICE_PIXEL_CONTENT_BOX:
                            return o;
                        case zn.BORDER_BOX:
                            return r;
                        default:
                            return s;
                    }
                },
                hr = function (e) {
                    var t = dr(e);
                    (this.target = e), (this.contentRect = t.contentRect), (this.borderBoxSize = Kn([t.borderBoxSize])), (this.contentBoxSize = Kn([t.contentBoxSize])), (this.devicePixelContentBoxSize = Kn([t.devicePixelContentBoxSize]));
                },
                fr = function (e) {
                    if (er(e)) return 1 / 0;
                    for (var t = 0, i = e.parentNode; i; ) (t += 1), (i = i.parentNode);
                    return t;
                },
                pr = function () {
                    var e = 1 / 0,
                        t = [];
                    Xn.forEach(function (i) {
                        if (0 !== i.activeTargets.length) {
                            var n = [];
                            i.activeTargets.forEach(function (t) {
                                var i = new hr(t.target),
                                    r = fr(t.target);
                                n.push(i), (t.lastReportedSize = ur(t.target, t.observedBox)), r < e && (e = r);
                            }),
                                t.push(function () {
                                    i.callback.call(i.observer, n, i.observer);
                                }),
                                i.activeTargets.splice(0, i.activeTargets.length);
                        }
                    });
                    for (var i = 0, n = t; i < n.length; i++) (0, n[i])();
                    return e;
                },
                gr = function (e) {
                    Xn.forEach(function (t) {
                        t.activeTargets.splice(0, t.activeTargets.length),
                            t.skippedTargets.splice(0, t.skippedTargets.length),
                            t.observationTargets.forEach(function (i) {
                                i.isActive() && (fr(i.target) > e ? t.activeTargets.push(i) : t.skippedTargets.push(i));
                            });
                    });
                },
                mr = [],
                vr = 0,
                br = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
                _r = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                yr = function (e) {
                    return void 0 === e && (e = 0), Date.now() + e;
                },
                wr = !1,
                xr = new ((function () {
                    function e() {
                        var e = this;
                        (this.stopped = !0),
                            (this.listener = function () {
                                return e.schedule();
                            });
                    }
                    return (
                        (e.prototype.run = function (e) {
                            var t = this;
                            if ((void 0 === e && (e = 250), !wr)) {
                                wr = !0;
                                var i,
                                    n = yr(e);
                                (i = function () {
                                    var i = !1;
                                    try {
                                        i = (function () {
                                            var e,
                                                t = 0;
                                            for (
                                                gr(t);
                                                Xn.some(function (e) {
                                                    return e.activeTargets.length > 0;
                                                });

                                            )
                                                (t = pr()), gr(t);
                                            return (
                                                Xn.some(function (e) {
                                                    return e.skippedTargets.length > 0;
                                                }) &&
                                                    ("function" == typeof ErrorEvent ? (e = new ErrorEvent("error", { message: Yn })) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = Yn)),
                                                    window.dispatchEvent(e)),
                                                t > 0
                                            );
                                        })();
                                    } finally {
                                        if (((wr = !1), (e = n - yr()), !vr)) return;
                                        i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                                    }
                                }),
                                    (function (e) {
                                        if (!Un) {
                                            var t = 0,
                                                i = document.createTextNode("");
                                            new MutationObserver(function () {
                                                return mr.splice(0).forEach(function (e) {
                                                    return e();
                                                });
                                            }).observe(i, { characterData: !0 }),
                                                (Un = function () {
                                                    i.textContent = "" + (t ? t-- : t++);
                                                });
                                        }
                                        mr.push(e), Un();
                                    })(function () {
                                        requestAnimationFrame(i);
                                    });
                            }
                        }),
                        (e.prototype.schedule = function () {
                            this.stop(), this.run();
                        }),
                        (e.prototype.observe = function () {
                            var e = this,
                                t = function () {
                                    return e.observer && e.observer.observe(document.body, br);
                                };
                            document.body ? t() : ir.addEventListener("DOMContentLoaded", t);
                        }),
                        (e.prototype.start = function () {
                            var e = this;
                            this.stopped &&
                                ((this.stopped = !1),
                                (this.observer = new MutationObserver(this.listener)),
                                this.observe(),
                                _r.forEach(function (t) {
                                    return ir.addEventListener(t, e.listener, !0);
                                }));
                        }),
                        (e.prototype.stop = function () {
                            var e = this;
                            this.stopped ||
                                (this.observer && this.observer.disconnect(),
                                _r.forEach(function (t) {
                                    return ir.removeEventListener(t, e.listener, !0);
                                }),
                                (this.stopped = !0));
                        }),
                        e
                    );
                })())(),
                Er = function (e) {
                    !vr && e > 0 && xr.start(), !(vr += e) && xr.stop();
                },
                kr = (function () {
                    function e(e, t) {
                        (this.target = e), (this.observedBox = t || zn.CONTENT_BOX), (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
                    }
                    return (
                        (e.prototype.isActive = function () {
                            var e,
                                t = ur(this.target, this.observedBox, !0);
                            return (
                                (e = this.target),
                                Zn(e) ||
                                    (function (e) {
                                        switch (e.tagName) {
                                            case "INPUT":
                                                if ("image" !== e.type) break;
                                            case "VIDEO":
                                            case "AUDIO":
                                            case "EMBED":
                                            case "OBJECT":
                                            case "CANVAS":
                                            case "IFRAME":
                                            case "IMG":
                                                return !0;
                                        }
                                        return !1;
                                    })(e) ||
                                    "inline" !== getComputedStyle(e).display ||
                                    (this.lastReportedSize = t),
                                this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                            );
                        }),
                        e
                    );
                })(),
                Sr = function (e, t) {
                    (this.activeTargets = []), (this.skippedTargets = []), (this.observationTargets = []), (this.observer = e), (this.callback = t);
                },
                Lr = new WeakMap(),
                Or = function (e, t) {
                    for (var i = 0; i < e.length; i += 1) if (e[i].target === t) return i;
                    return -1;
                },
                Ar = (function () {
                    function e() {}
                    return (
                        (e.connect = function (e, t) {
                            var i = new Sr(e, t);
                            Lr.set(e, i);
                        }),
                        (e.observe = function (e, t, i) {
                            var n = Lr.get(e),
                                r = 0 === n.observationTargets.length;
                            Or(n.observationTargets, t) < 0 && (r && Xn.push(n), n.observationTargets.push(new kr(t, i && i.box)), Er(1), xr.schedule());
                        }),
                        (e.unobserve = function (e, t) {
                            var i = Lr.get(e),
                                n = Or(i.observationTargets, t),
                                r = 1 === i.observationTargets.length;
                            n >= 0 && (r && Xn.splice(Xn.indexOf(i), 1), i.observationTargets.splice(n, 1), Er(-1));
                        }),
                        (e.disconnect = function (e) {
                            var t = this,
                                i = Lr.get(e);
                            i.observationTargets.slice().forEach(function (i) {
                                return t.unobserve(e, i.target);
                            }),
                                i.activeTargets.splice(0, i.activeTargets.length);
                        }),
                        e
                    );
                })(),
                jr = (function () {
                    function e(e) {
                        if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if ("function" != typeof e) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        Ar.connect(this, e);
                    }
                    return (
                        (e.prototype.observe = function (e, t) {
                            if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                            if (!tr(e)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                            Ar.observe(this, e, t);
                        }),
                        (e.prototype.unobserve = function (e) {
                            if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                            if (!tr(e)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                            Ar.unobserve(this, e);
                        }),
                        (e.prototype.disconnect = function () {
                            Ar.disconnect(this);
                        }),
                        (e.toString = function () {
                            return "function ResizeObserver () { [polyfill code] }";
                        }),
                        e
                    );
                })(),
                Tr =
                    (i(7985),
                    i(6618),
                    i(9989),
                    i(8307),
                    i(4390),
                    function (e) {
                        return Array.prototype.reduce.call(
                            e,
                            function (e, t) {
                                var i = t.name.match(/data-simplebar-(.+)/);
                                if (i) {
                                    var n = i[1].replace(/\W+(.)/g, function (e, t) {
                                        return t.toUpperCase();
                                    });
                                    switch (t.value) {
                                        case "true":
                                            e[n] = !0;
                                            break;
                                        case "false":
                                            e[n] = !1;
                                            break;
                                        case void 0:
                                            e[n] = !0;
                                            break;
                                        default:
                                            e[n] = t.value;
                                    }
                                }
                                return e;
                            },
                            {}
                        );
                    });
            function Cr(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
            }
            function Pr(e) {
                return e && e.ownerDocument ? e.ownerDocument : document;
            }
            var Nr = null,
                Ir = null;
            function Dr(e) {
                if (null === Nr) {
                    var t = Pr(e);
                    if (void 0 === t) return (Nr = 0);
                    var i = t.body,
                        n = t.createElement("div");
                    n.classList.add("simplebar-hide-scrollbar"), i.appendChild(n);
                    var r = n.getBoundingClientRect().right;
                    i.removeChild(n), (Nr = r);
                }
                return Nr;
            }
            Wn() &&
                window.addEventListener("resize", function () {
                    Ir !== window.devicePixelRatio && ((Ir = window.devicePixelRatio), (Nr = null));
                });
            var Mr = (function () {
                function e(t, i) {
                    var n = this;
                    (this.onScroll = function () {
                        var e = Cr(n.el);
                        n.scrollXTicking || (e.requestAnimationFrame(n.scrollX), (n.scrollXTicking = !0)), n.scrollYTicking || (e.requestAnimationFrame(n.scrollY), (n.scrollYTicking = !0));
                    }),
                        (this.scrollX = function () {
                            n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), (n.scrollXTicking = !1);
                        }),
                        (this.scrollY = function () {
                            n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), (n.scrollYTicking = !1);
                        }),
                        (this.onMouseEnter = function () {
                            n.showScrollbar("x"), n.showScrollbar("y");
                        }),
                        (this.onMouseMove = function (e) {
                            (n.mouseX = e.clientX), (n.mouseY = e.clientY), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
                        }),
                        (this.onMouseLeave = function () {
                            n.onMouseMove.cancel(),
                                (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"),
                                (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"),
                                (n.mouseX = -1),
                                (n.mouseY = -1);
                        }),
                        (this.onWindowResize = function () {
                            (n.scrollbarWidth = n.getScrollbarWidth()), n.hideNativeScrollbar();
                        }),
                        (this.hideScrollbars = function () {
                            (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
                                (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
                                n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), (n.axis.y.isVisible = !1)),
                                n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), (n.axis.x.isVisible = !1));
                        }),
                        (this.onPointerEvent = function (e) {
                            var t, i;
                            (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
                                (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
                                (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (t = n.isWithinBounds(n.axis.x.track.rect)),
                                (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (i = n.isWithinBounds(n.axis.y.track.rect)),
                                (t || i) &&
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    "mousedown" === e.type &&
                                        (t && ((n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect()), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(e, "x") : n.onTrackClick(e, "x")),
                                        i && ((n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect()), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(e, "y") : n.onTrackClick(e, "y"))));
                        }),
                        (this.drag = function (t) {
                            var i = n.axis[n.draggedAxis].track,
                                r = i.rect[n.axis[n.draggedAxis].sizeAttr],
                                s = n.axis[n.draggedAxis].scrollbar,
                                o = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                                a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                            t.preventDefault(), t.stopPropagation();
                            var l = ((("y" === n.draggedAxis ? t.pageY : t.pageX) - i.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (r - s.size)) * (o - a);
                            "x" === n.draggedAxis && ((l = n.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? l - (r + s.size) : l), (l = n.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -l : l)),
                                (n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = l);
                        }),
                        (this.onEndDrag = function (e) {
                            var t = Pr(n.el),
                                i = Cr(n.el);
                            e.preventDefault(),
                                e.stopPropagation(),
                                n.el.classList.remove(n.classNames.dragging),
                                t.removeEventListener("mousemove", n.drag, !0),
                                t.removeEventListener("mouseup", n.onEndDrag, !0),
                                (n.removePreventClickId = i.setTimeout(function () {
                                    t.removeEventListener("click", n.preventClick, !0), t.removeEventListener("dblclick", n.preventClick, !0), (n.removePreventClickId = null);
                                }));
                        }),
                        (this.preventClick = function (e) {
                            e.preventDefault(), e.stopPropagation();
                        }),
                        (this.el = t),
                        (this.minScrollbarWidth = 20),
                        (this.options = Object.assign({}, e.defaultOptions, {}, i)),
                        (this.classNames = Object.assign({}, e.defaultOptions.classNames, {}, this.options.classNames)),
                        (this.axis = {
                            x: {
                                scrollOffsetAttr: "scrollLeft",
                                sizeAttr: "width",
                                scrollSizeAttr: "scrollWidth",
                                offsetSizeAttr: "offsetWidth",
                                offsetAttr: "left",
                                overflowAttr: "overflowX",
                                dragOffset: 0,
                                isOverflowing: !0,
                                isVisible: !1,
                                forceVisible: !1,
                                track: {},
                                scrollbar: {},
                            },
                            y: {
                                scrollOffsetAttr: "scrollTop",
                                sizeAttr: "height",
                                scrollSizeAttr: "scrollHeight",
                                offsetSizeAttr: "offsetHeight",
                                offsetAttr: "top",
                                overflowAttr: "overflowY",
                                dragOffset: 0,
                                isOverflowing: !0,
                                isVisible: !1,
                                forceVisible: !1,
                                track: {},
                                scrollbar: {},
                            },
                        }),
                        (this.removePreventClickId = null),
                        e.instances.has(this.el) ||
                            ((this.recalculate = Hn()(this.recalculate.bind(this), 64)),
                            (this.onMouseMove = Hn()(this.onMouseMove.bind(this), 64)),
                            (this.hideScrollbars = $n()(this.hideScrollbars.bind(this), this.options.timeout)),
                            (this.onWindowResize = $n()(this.onWindowResize.bind(this), 64, { leading: !0 })),
                            (e.getRtlHelpers = Qn()(e.getRtlHelpers)),
                            this.init());
                }
                (e.getRtlHelpers = function () {
                    var t = document.createElement("div");
                    t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                    var i = t.firstElementChild;
                    document.body.appendChild(i);
                    var n = i.firstElementChild;
                    i.scrollLeft = 0;
                    var r = e.getOffset(i),
                        s = e.getOffset(n);
                    i.scrollLeft = 999;
                    var o = e.getOffset(n);
                    return { isRtlScrollingInverted: r.left !== s.left && s.left - o.left != 0, isRtlScrollbarInverted: r.left !== s.left };
                }),
                    (e.getOffset = function (e) {
                        var t = e.getBoundingClientRect(),
                            i = Pr(e),
                            n = Cr(e);
                        return { top: t.top + (n.pageYOffset || i.documentElement.scrollTop), left: t.left + (n.pageXOffset || i.documentElement.scrollLeft) };
                    });
                var t = e.prototype;
                return (
                    (t.init = function () {
                        e.instances.set(this.el, this), Wn() && (this.initDOM(), (this.scrollbarWidth = this.getScrollbarWidth()), this.recalculate(), this.initListeners());
                    }),
                    (t.initDOM = function () {
                        var e = this;
                        if (
                            Array.prototype.filter.call(this.el.children, function (t) {
                                return t.classList.contains(e.classNames.wrapper);
                            }).length
                        )
                            (this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper)),
                                (this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper)),
                                (this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl)),
                                (this.offsetEl = this.el.querySelector("." + this.classNames.offset)),
                                (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
                                (this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder)),
                                (this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl)),
                                (this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl)),
                                (this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal)),
                                (this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical));
                        else {
                            for (
                                this.wrapperEl = document.createElement("div"),
                                    this.contentWrapperEl = document.createElement("div"),
                                    this.offsetEl = document.createElement("div"),
                                    this.maskEl = document.createElement("div"),
                                    this.contentEl = document.createElement("div"),
                                    this.placeholderEl = document.createElement("div"),
                                    this.heightAutoObserverWrapperEl = document.createElement("div"),
                                    this.heightAutoObserverEl = document.createElement("div"),
                                    this.wrapperEl.classList.add(this.classNames.wrapper),
                                    this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                                    this.offsetEl.classList.add(this.classNames.offset),
                                    this.maskEl.classList.add(this.classNames.mask),
                                    this.contentEl.classList.add(this.classNames.contentEl),
                                    this.placeholderEl.classList.add(this.classNames.placeholder),
                                    this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                                    this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);
                                this.el.firstChild;

                            )
                                this.contentEl.appendChild(this.el.firstChild);
                            this.contentWrapperEl.appendChild(this.contentEl),
                                this.offsetEl.appendChild(this.contentWrapperEl),
                                this.maskEl.appendChild(this.offsetEl),
                                this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                                this.wrapperEl.appendChild(this.maskEl),
                                this.wrapperEl.appendChild(this.placeholderEl),
                                this.el.appendChild(this.wrapperEl);
                        }
                        if (!this.axis.x.track.el || !this.axis.y.track.el) {
                            var t = document.createElement("div"),
                                i = document.createElement("div");
                            t.classList.add(this.classNames.track),
                                i.classList.add(this.classNames.scrollbar),
                                t.appendChild(i),
                                (this.axis.x.track.el = t.cloneNode(!0)),
                                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                                (this.axis.y.track.el = t.cloneNode(!0)),
                                this.axis.y.track.el.classList.add(this.classNames.vertical),
                                this.el.appendChild(this.axis.x.track.el),
                                this.el.appendChild(this.axis.y.track.el);
                        }
                        (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar)),
                            (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar)),
                            this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
                            this.el.setAttribute("data-simplebar", "init");
                    }),
                    (t.initListeners = function () {
                        var e = this,
                            t = Cr(this.el);
                        this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
                            ["mousedown", "click", "dblclick"].forEach(function (t) {
                                e.el.addEventListener(t, e.onPointerEvent, !0);
                            }),
                            ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                                e.el.addEventListener(t, e.onPointerEvent, { capture: !0, passive: !0 });
                            }),
                            this.el.addEventListener("mousemove", this.onMouseMove),
                            this.el.addEventListener("mouseleave", this.onMouseLeave),
                            this.contentWrapperEl.addEventListener("scroll", this.onScroll),
                            t.addEventListener("resize", this.onWindowResize);
                        var i = !1,
                            n = t.ResizeObserver || jr;
                        (this.resizeObserver = new n(function () {
                            i && e.recalculate();
                        })),
                            this.resizeObserver.observe(this.el),
                            this.resizeObserver.observe(this.contentEl),
                            t.requestAnimationFrame(function () {
                                i = !0;
                            }),
                            (this.mutationObserver = new t.MutationObserver(this.recalculate)),
                            this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
                    }),
                    (t.recalculate = function () {
                        var e = Cr(this.el);
                        (this.elStyles = e.getComputedStyle(this.el)), (this.isRtl = "rtl" === this.elStyles.direction);
                        var t = this.heightAutoObserverEl.offsetHeight <= 1,
                            i = this.heightAutoObserverEl.offsetWidth <= 1,
                            n = this.contentEl.offsetWidth,
                            r = this.contentWrapperEl.offsetWidth,
                            s = this.elStyles.overflowX,
                            o = this.elStyles.overflowY;
                        (this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft),
                            (this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft);
                        var a = this.contentEl.scrollHeight,
                            l = this.contentEl.scrollWidth;
                        (this.contentWrapperEl.style.height = t ? "auto" : "100%"), (this.placeholderEl.style.width = i ? n + "px" : "auto"), (this.placeholderEl.style.height = a + "px");
                        var c = this.contentWrapperEl.offsetHeight;
                        (this.axis.x.isOverflowing = l > n),
                            (this.axis.y.isOverflowing = a > c),
                            (this.axis.x.isOverflowing = "hidden" !== s && this.axis.x.isOverflowing),
                            (this.axis.y.isOverflowing = "hidden" !== o && this.axis.y.isOverflowing),
                            (this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible),
                            (this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible),
                            this.hideNativeScrollbar();
                        var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                            u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                        (this.axis.x.isOverflowing = this.axis.x.isOverflowing && l > r - u),
                            (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > c - d),
                            (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                            (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                            (this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px"),
                            (this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px"),
                            this.positionScrollbar("x"),
                            this.positionScrollbar("y"),
                            this.toggleTrackVisibility("x"),
                            this.toggleTrackVisibility("y");
                    }),
                    (t.getScrollbarSize = function (e) {
                        if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing)) return 0;
                        var t,
                            i = this.contentEl[this.axis[e].scrollSizeAttr],
                            n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                            r = n / i;
                        return (t = Math.max(~~(r * n), this.options.scrollbarMinSize)), this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)), t;
                    }),
                    (t.positionScrollbar = function (t) {
                        if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
                            var i = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                                n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                                r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                                s = this.axis[t].scrollbar,
                                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                                a = (o = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (i - r),
                                l = ~~((n - s.size) * a);
                            (l = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? l + (n - s.size) : l), (s.el.style.transform = "x" === t ? "translate3d(" + l + "px, 0, 0)" : "translate3d(0, " + l + "px, 0)");
                        }
                    }),
                    (t.toggleTrackVisibility = function (e) {
                        void 0 === e && (e = "y");
                        var t = this.axis[e].track.el,
                            i = this.axis[e].scrollbar.el;
                        this.axis[e].isOverflowing || this.axis[e].forceVisible
                            ? ((t.style.visibility = "visible"), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll"))
                            : ((t.style.visibility = "hidden"), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden")),
                            this.axis[e].isOverflowing ? (i.style.display = "block") : (i.style.display = "none");
                    }),
                    (t.hideNativeScrollbar = function () {
                        (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0),
                            (this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0);
                    }),
                    (t.onMouseMoveForAxis = function (e) {
                        void 0 === e && (e = "y"),
                            (this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect()),
                            (this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect()),
                            this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),
                            this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e), this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover);
                    }),
                    (t.onMouseLeaveForAxis = function (e) {
                        void 0 === e && (e = "y"), this.axis[e].track.el.classList.remove(this.classNames.hover), this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
                    }),
                    (t.showScrollbar = function (e) {
                        void 0 === e && (e = "y");
                        var t = this.axis[e].scrollbar.el;
                        this.axis[e].isVisible || (t.classList.add(this.classNames.visible), (this.axis[e].isVisible = !0)), this.options.autoHide && this.hideScrollbars();
                    }),
                    (t.onDragStart = function (e, t) {
                        void 0 === t && (t = "y");
                        var i = Pr(this.el),
                            n = Cr(this.el),
                            r = this.axis[t].scrollbar,
                            s = "y" === t ? e.pageY : e.pageX;
                        (this.axis[t].dragOffset = s - r.rect[this.axis[t].offsetAttr]),
                            (this.draggedAxis = t),
                            this.el.classList.add(this.classNames.dragging),
                            i.addEventListener("mousemove", this.drag, !0),
                            i.addEventListener("mouseup", this.onEndDrag, !0),
                            null === this.removePreventClickId
                                ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0))
                                : (n.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
                    }),
                    (t.onTrackClick = function (e, t) {
                        var i = this;
                        if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
                            var n = Cr(this.el);
                            this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect();
                            var r = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                                s = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                                a = ("y" === t ? this.mouseY - r : this.mouseX - r) < 0 ? -1 : 1,
                                l = -1 === a ? o - s : o + s;
                            !(function e() {
                                var r, s;
                                -1 === a
                                    ? o > l && ((o -= i.options.clickOnTrackSpeed), i.contentWrapperEl.scrollTo((((r = {})[i.axis[t].offsetAttr] = o), r)), n.requestAnimationFrame(e))
                                    : o < l && ((o += i.options.clickOnTrackSpeed), i.contentWrapperEl.scrollTo((((s = {})[i.axis[t].offsetAttr] = o), s)), n.requestAnimationFrame(e));
                            })();
                        }
                    }),
                    (t.getContentElement = function () {
                        return this.contentEl;
                    }),
                    (t.getScrollElement = function () {
                        return this.contentWrapperEl;
                    }),
                    (t.getScrollbarWidth = function () {
                        try {
                            return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style
                                ? 0
                                : Dr(this.el);
                        } catch (e) {
                            return Dr(this.el);
                        }
                    }),
                    (t.removeListeners = function () {
                        var e = this,
                            t = Cr(this.el);
                        this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
                            ["mousedown", "click", "dblclick"].forEach(function (t) {
                                e.el.removeEventListener(t, e.onPointerEvent, !0);
                            }),
                            ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                                e.el.removeEventListener(t, e.onPointerEvent, { capture: !0, passive: !0 });
                            }),
                            this.el.removeEventListener("mousemove", this.onMouseMove),
                            this.el.removeEventListener("mouseleave", this.onMouseLeave),
                            this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
                            t.removeEventListener("resize", this.onWindowResize),
                            this.mutationObserver && this.mutationObserver.disconnect(),
                            this.resizeObserver && this.resizeObserver.disconnect(),
                            this.recalculate.cancel(),
                            this.onMouseMove.cancel(),
                            this.hideScrollbars.cancel(),
                            this.onWindowResize.cancel();
                    }),
                    (t.unMount = function () {
                        this.removeListeners(), e.instances.delete(this.el);
                    }),
                    (t.isWithinBounds = function (e) {
                        return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height;
                    }),
                    (t.findChild = function (e, t) {
                        var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                        return Array.prototype.filter.call(e.children, function (e) {
                            return i.call(e, t);
                        })[0];
                    }),
                    e
                );
            })();
            (Mr.defaultOptions = {
                autoHide: !0,
                forceVisible: !1,
                clickOnTrack: !0,
                clickOnTrackSpeed: 40,
                classNames: {
                    contentEl: "simplebar-content",
                    contentWrapper: "simplebar-content-wrapper",
                    offset: "simplebar-offset",
                    mask: "simplebar-mask",
                    wrapper: "simplebar-wrapper",
                    placeholder: "simplebar-placeholder",
                    scrollbar: "simplebar-scrollbar",
                    track: "simplebar-track",
                    heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                    heightAutoObserverEl: "simplebar-height-auto-observer",
                    visible: "simplebar-visible",
                    horizontal: "simplebar-horizontal",
                    vertical: "simplebar-vertical",
                    hover: "simplebar-hover",
                    dragging: "simplebar-dragging",
                },
                scrollbarMinSize: 25,
                scrollbarMaxSize: 0,
                timeout: 1e3,
            }),
                (Mr.instances = new WeakMap()),
                (Mr.initDOMLoadedElements = function () {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                        window.removeEventListener("load", this.initDOMLoadedElements),
                        Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (e) {
                            "init" === e.getAttribute("data-simplebar") || Mr.instances.has(e) || new Mr(e, Tr(e.attributes));
                        });
                }),
                (Mr.removeObserver = function () {
                    this.globalObserver.disconnect();
                }),
                (Mr.initHtmlApi = function () {
                    (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
                        "undefined" != typeof MutationObserver && ((this.globalObserver = new MutationObserver(Mr.handleMutations)), this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
                        "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll)
                            ? window.setTimeout(this.initDOMLoadedElements)
                            : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
                }),
                (Mr.handleMutations = function (e) {
                    e.forEach(function (e) {
                        Array.prototype.forEach.call(e.addedNodes, function (e) {
                            1 === e.nodeType &&
                                (e.hasAttribute("data-simplebar")
                                    ? !Mr.instances.has(e) && document.documentElement.contains(e) && new Mr(e, Tr(e.attributes))
                                    : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), function (e) {
                                          "init" !== e.getAttribute("data-simplebar") && !Mr.instances.has(e) && document.documentElement.contains(e) && new Mr(e, Tr(e.attributes));
                                      }));
                        }),
                            Array.prototype.forEach.call(e.removedNodes, function (e) {
                                1 === e.nodeType &&
                                    ("init" === e.getAttribute("data-simplebar")
                                        ? Mr.instances.has(e) && !document.documentElement.contains(e) && Mr.instances.get(e).unMount()
                                        : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), function (e) {
                                              Mr.instances.has(e) && !document.documentElement.contains(e) && Mr.instances.get(e).unMount();
                                          }));
                            });
                    });
                }),
                (Mr.getOptions = Tr),
                Wn() && Mr.initHtmlApi();
            var Rr = Mr;
            let zr,
                qr = !1;
            class Wr {
                static run(e, t = {}) {
                    let i = {
                        "bs-tooltip": () => this.bsTooltip(),
                        "bs-popover": () => this.bsPopover(),
                        "dm-toggle-class": () => this.dmToggleClass(),
                        "dm-year-copy": () => this.dmYearCopy(),
                        "dm-ripple": () => this.dmRipple(),
                        "dm-print": () => this.dmPrint(),
                        "dm-table-tools-sections": () => this.dmTableToolsSections(),
                        "dm-table-tools-checkable": () => this.dmTableToolsCheckable(),
                        "js-ckeditor": () => this.jsCkeditor(),
                        "js-ckeditor5": () => this.jsCkeditor5(),
                        "js-simplemde": () => this.jsSimpleMDE(),
                        "js-highlightjs": () => this.jsHighlightjs(),
                        "js-flatpickr": () => this.jsFlatpickr(),
                        "jq-appear": () => this.jqAppear(),
                        "jq-magnific-popup": () => this.jqMagnific(),
                        "jq-slick": () => this.jqSlick(),
                        "jq-datepicker": () => this.jqDatepicker(),
                        "jq-colorpicker": () => this.jqColorpicker(),
                        "jq-masked-inputs": () => this.jqMaskedInputs(),
                        "jq-select2": () => this.jqSelect2(),
                        "jq-notify": (e) => this.jqNotify(e),
                        "jq-easy-pie-chart": () => this.jqEasyPieChart(),
                        "jq-maxlength": () => this.jqMaxlength(),
                        "jq-rangeslider": () => this.jqRangeslider(),
                        "jq-pw-strength": () => this.jqPwStrength(),
                        "jq-sparkline": () => this.jqSparkline(),
                        "jq-validation": () => this.jqValidation(),
                    };
                    if (e instanceof Array) for (let n in e) i[e[n]] && i[e[n]](t);
                    else i[e] && i[e](t);
                }
                static bsTooltip() {
                    let e = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]:not(.js-bs-tooltip-enabled), .js-bs-tooltip:not(.js-bs-tooltip-enabled)'));
                    window.helperBsTooltips = e.map(
                        (e) => (
                            e.classList.add("js-bs-tooltip-enabled"), new bootstrap.Tooltip(e, { container: e.dataset.bsContainer || "#page-container", animation: !(!e.dataset.bsAnimation || "true" != e.dataset.bsAnimation.toLowerCase()) })
                        )
                    );
                }
                static bsPopover() {
                    let e = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]:not(.js-bs-popover-enabled), .js-bs-popover:not(.js-bs-popover-enabled)'));
                    window.helperBsPopovers = e.map(
                        (e) => (
                            e.classList.add("js-bs-popover-enabled"),
                            new bootstrap.Popover(e, {
                                container: e.dataset.bsContainer || "#page-container",
                                animation: !(!e.dataset.bsAnimation || "true" != e.dataset.bsAnimation.toLowerCase()),
                                trigger: e.dataset.bsTrigger || "hover focus",
                            })
                        )
                    );
                }
                static dmToggleClass() {
                    document.querySelectorAll('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled), .js-class-toggle:not(.js-class-toggle-enabled)').forEach((e) => {
                        e.addEventListener("click", () => {
                            e.classList.add("js-class-toggle-enabled");
                            let t = !!e.dataset.class && e.dataset.class.split(" ");
                            document.querySelectorAll(e.dataset.target).forEach((e) => {
                                t &&
                                    t.forEach((t) => {
                                        e.classList.toggle(t);
                                    });
                            });
                        });
                    });
                }
                static dmYearCopy() {
                    document.querySelectorAll('[data-toggle="year-copy"]:not(.js-year-copy-enabled)').forEach((e) => {
                        let t = new Date().getFullYear(),
                            i = e.textContent || t;
                        e.classList.add("js-year-copy-enabled"), (e.textContent = parseInt(i) >= t ? t : i + "-" + t.toString().substr(2, 2));
                    });
                }
                static dmRipple() {
                    document.querySelectorAll('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)').forEach((e) => {
                        e.classList.add("js-click-ripple-enabled"),
                            (e.style.overflow = "hidden"),
                            (e.style.position = "relative"),
                            (e.style.zIndex = 1),
                            e.addEventListener("click", (t) => {
                                let i,
                                    n,
                                    r,
                                    s = "click-ripple",
                                    o = e.querySelector("." + s);
                                if (o) o.classList.remove("animate");
                                else {
                                    let t = document.createElement("span");
                                    t.classList.add(s), e.insertBefore(t, e.firstChild);
                                }
                                (o = e.querySelector("." + s)),
                                    ("0px" !== getComputedStyle(o).height && "0px" !== getComputedStyle(o).width) || ((i = Math.max(e.offsetWidth, e.offsetHeight)), (o.style.height = i + "px"), (o.style.width = i + "px")),
                                    (n = t.pageX - (e.getBoundingClientRect().left + window.scrollX) - parseFloat(getComputedStyle(o).width.replace("px", "")) / 2),
                                    (r = t.pageY - (e.getBoundingClientRect().top + window.scrollY) - parseFloat(getComputedStyle(o).height.replace("px", "")) / 2),
                                    (o.style.top = r + "px"),
                                    (o.style.left = n + "px"),
                                    o.classList.add("animate");
                            });
                    });
                }
                static dmPrint() {
                    let e = document.getElementById("page-container"),
                        t = e.className;
                    console.log(t), (e.classList = ""), window.print(), (e.classList = t);
                }
                static dmTableToolsSections() {
                    document.querySelectorAll(".js-table-sections:not(.js-table-sections-enabled)").forEach((e) => {
                        e.classList.add("js-table-sections-enabled"),
                            e.querySelectorAll(".js-table-sections-header > tr").forEach((t) => {
                                t.addEventListener("click", (i) => {
                                    if (
                                        "checkbox" !== i.target.type &&
                                        "button" !== i.target.type &&
                                        "a" !== i.target.tagName.toLowerCase() &&
                                        "a" !== i.target.parentNode.nodeName.toLowerCase() &&
                                        "button" !== i.target.parentNode.nodeName.toLowerCase() &&
                                        "label" !== i.target.parentNode.nodeName.toLowerCase() &&
                                        !i.target.parentNode.classList.contains("custom-control")
                                    ) {
                                        let i = t.parentNode,
                                            n = e.querySelectorAll("tbody");
                                        i.classList.contains("show") ||
                                            (n &&
                                                n.forEach((e) => {
                                                    e.classList.remove("show"), e.classList.remove("table-active");
                                                })),
                                            i.classList.toggle("show"),
                                            i.classList.toggle("table-active");
                                    }
                                });
                            });
                    });
                }
                static dmTableToolsCheckable() {
                    document.querySelectorAll(".js-table-checkable:not(.js-table-checkable-enabled)").forEach((e) => {
                        e.classList.add("js-table-checkable-enabled"),
                            e.querySelector("thead input[type=checkbox]").addEventListener("click", (t) => {
                                e.querySelectorAll("tbody input[type=checkbox]").forEach((e) => {
                                    (e.checked = t.currentTarget.checked), this.tableToolscheckRow(e, t.currentTarget.checked);
                                });
                            }),
                            e.querySelectorAll("tbody input[type=checkbox], tbody input + label").forEach((t) => {
                                t.addEventListener("click", (i) => {
                                    let n = e.querySelector("thead input[type=checkbox]");
                                    t.checked ? e.querySelectorAll("tbody input[type=checkbox]:checked").length === e.querySelectorAll("tbody input[type=checkbox]").length && (n.checked = !0) : (n.checked = !1),
                                        this.tableToolscheckRow(t, t.checked);
                                });
                            }),
                            e.querySelectorAll("tbody > tr").forEach((t) => {
                                t.addEventListener("click", (t) => {
                                    if (
                                        "checkbox" !== t.target.type &&
                                        "button" !== t.target.type &&
                                        "a" !== t.target.tagName.toLowerCase() &&
                                        "a" !== t.target.parentNode.nodeName.toLowerCase() &&
                                        "button" !== t.target.parentNode.nodeName.toLowerCase() &&
                                        "label" !== t.target.parentNode.nodeName.toLowerCase() &&
                                        !t.target.parentNode.classList.contains("custom-control")
                                    ) {
                                        let i = e.querySelector("thead input[type=checkbox]"),
                                            n = t.currentTarget.querySelector("input[type=checkbox]");
                                        (n.checked = !n.checked),
                                            this.tableToolscheckRow(n, n.checked),
                                            n.checked ? e.querySelectorAll("tbody input[type=checkbox]:checked").length === e.querySelectorAll("tbody input[type=checkbox]").length && (i.checked = !0) : (i.checked = !1);
                                    }
                                });
                            });
                    });
                }
                static tableToolscheckRow(e, t) {
                    t ? e.closest("tr").classList.add("table-active") : e.closest("tr").classList.remove("table-active");
                }
                static jsCkeditor() {
                    let e = document.querySelector("#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)"),
                        t = document.querySelector("#js-ckeditor:not(.js-ckeditor-enabled)");
                    e && (e.setAttribute("contenteditable", "true"), CKEDITOR.inline("js-ckeditor-inline"), e.classList.add("js-ckeditor-inline-enabled")), t && (CKEDITOR.replace("js-ckeditor"), t.classList.add("js-ckeditor-enabled"));
                }
                static jsCkeditor5() {
                    let e = document.querySelector("#js-ckeditor5-inline"),
                        t = document.querySelector("#js-ckeditor5-classic");
                    e &&
                        InlineEditor.create(document.querySelector("#js-ckeditor5-inline"))
                            .then((e) => {
                                window.editor = e;
                            })
                            .catch((e) => {
                                console.error("There was a problem initializing the inline editor.", e);
                            }),
                        t &&
                            ClassicEditor.create(document.querySelector("#js-ckeditor5-classic"))
                                .then((e) => {
                                    window.editor = e;
                                })
                                .catch((e) => {
                                    console.error("There was a problem initializing the classic editor.", e);
                                });
                }
                static jsSimpleMDE() {
                    let e = document.querySelectorAll(".js-simplemde");
                    e.forEach((e) => {
                        new SimpleMDE({ element: e, autoDownloadFontAwesome: !1 });
                    }),
                        e && (document.querySelector(".editor-toolbar > a.fa-header").classList.replace("fa-header", "fa-heading"), document.querySelector(".editor-toolbar > a.fa-picture-o").classList.replace("fa-picture-o", "fa-image"));
                }
                static jsHighlightjs() {
                    hljs.isHighlighted || hljs.initHighlighting();
                }
                static jsFlatpickr() {
                    document.querySelectorAll(".js-flatpickr:not(.js-flatpickr-enabled)").forEach((e) => {
                        e.classList.add("js-flatpickr-enabled"), flatpickr(e);
                    });
                }
                static jqAppear() {
                    jQuery('[data-toggle="appear"]:not(.js-appear-enabled)').each((e, t) => {
                        let i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            n = jQuery(t),
                            r = n.data("class") || "animated fadeIn",
                            s = n.data("offset") || 0,
                            o = i < 992 ? 0 : n.data("timeout") ? n.data("timeout") : 0;
                        n.addClass("js-appear-enabled").appear(
                            () => {
                                setTimeout(() => {
                                    n.removeClass("invisible").addClass(r);
                                }, o);
                            },
                            { accY: s }
                        );
                    });
                }
                static jqMagnific() {
                    jQuery(".js-gallery:not(.js-gallery-enabled)").each((e, t) => {
                        jQuery(t)
                            .addClass("js-gallery-enabled")
                            .magnificPopup({ delegate: "a.img-lightbox", type: "image", gallery: { enabled: !0 } });
                    });
                }
                static jqSlick() {
                    jQuery(".js-slider:not(.js-slider-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-slider-enabled").slick({
                            arrows: i.data("arrows") || !1,
                            dots: i.data("dots") || !1,
                            slidesToShow: i.data("slides-to-show") || 1,
                            centerMode: i.data("center-mode") || !1,
                            autoplay: i.data("autoplay") || !1,
                            autoplaySpeed: i.data("autoplay-speed") || 3e3,
                            infinite: void 0 === i.data("infinite") || i.data("infinite"),
                        });
                    });
                }
                static jqDatepicker() {
                    jQuery(".js-datepicker:not(.js-datepicker-enabled)")
                        .add(".input-daterange:not(.js-datepicker-enabled)")
                        .each((e, t) => {
                            let i = jQuery(t);
                            i.addClass("js-datepicker-enabled").datepicker({
                                weekStart: i.data("week-start") || 0,
                                autoclose: i.data("autoclose") || !1,
                                todayHighlight: i.data("today-highlight") || !1,
                                container: i.data("container") || "#page-container",
                                orientation: "bottom",
                            });
                        });
                }
                static jqColorpicker() {
                    jQuery(".js-colorpicker:not(.js-colorpicker-enabled)").each((e, t) => {
                        setTimeout(() => {
                            jQuery(t).addClass("js-colorpicker-enabled").colorpicker();
                        }, 500);
                    });
                }
                static jqMaskedInputs() {
                    jQuery(".js-masked-date:not(.js-masked-enabled)").mask("99/99/9999"),
                        jQuery(".js-masked-date-dash:not(.js-masked-enabled)").mask("99-99-9999"),
                        jQuery(".js-masked-phone:not(.js-masked-enabled)").mask("(999) 999-9999"),
                        jQuery(".js-masked-phdm-ext:not(.js-masked-enabled)").mask("(999) 999-9999? x99999"),
                        jQuery(".js-masked-taxid:not(.js-masked-enabled)").mask("99-9999999"),
                        jQuery(".js-masked-ssn:not(.js-masked-enabled)").mask("999-99-9999"),
                        jQuery(".js-masked-pkey:not(.js-masked-enabled)").mask("a*-999-a999"),
                        jQuery(".js-masked-time:not(.js-masked-enabled)").mask("99:99"),
                        jQuery(".js-masked-date")
                            .add(".js-masked-date-dash")
                            .add(".js-masked-phone")
                            .add(".js-masked-phdm-ext")
                            .add(".js-masked-taxid")
                            .add(".js-masked-ssn")
                            .add(".js-masked-pkey")
                            .add(".js-masked-time")
                            .addClass("js-masked-enabled");
                }
                static jqSelect2() {
                    jQuery(".js-select2:not(.js-select2-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-select2-enabled").select2({ placeholder: i.data("placeholder") || !1, dropdownParent: i.data("container") || document.getElementById("page-container") });
                    });
                }
                static jqNotify(e = {}) {
                    jQuery.isEmptyObject(e)
                        ? jQuery(".js-notify:not(.js-notify-enabled)").each((e, t) => {
                              jQuery(t)
                                  .addClass("js-notify-enabled")
                                  .on("click.pixelcave.helpers", (e) => {
                                      let t = jQuery(e.currentTarget);
                                      jQuery.notify(
                                          { icon: t.data("icon") || "", message: t.data("message"), url: t.data("url") || "" },
                                          {
                                              element: "body",
                                              type: t.data("type") || "info",
                                              placement: { from: t.data("from") || "top", align: t.data("align") || "right" },
                                              allow_dismiss: !0,
                                              newest_on_top: !0,
                                              showProgressbar: !1,
                                              offset: 20,
                                              spacing: 10,
                                              z_index: 1033,
                                              delay: 5e3,
                                              timer: 1e3,
                                              animate: { enter: "animated fadeIn", exit: "animated fadeOutDown" },
                                              template:
                                                  '<div data-notify="container" class="col-11 col-sm-4 alert alert-{0} alert-dismissible" role="alert">\n  <p class="mb-0">\n    <span data-notify="icon"></span>\n    <span data-notify="title">{1}</span>\n    <span data-notify="message">{2}</span>\n  </p>\n  <div class="progress" data-notify="progressbar">\n    <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>\n  </div>\n  <a href="{3}" target="{4}" data-notify="url"></a>\n  <a class="p-2 m-1 text-dark" href="javascript:void(0)" aria-label="Close" data-notify="dismiss">\n    <i class="fa fa-times"></i>\n  </a>\n</div>',
                                          }
                                      );
                                  });
                          })
                        : jQuery.notify(
                              { icon: e.icon || "", message: e.message, url: e.url || "" },
                              {
                                  element: e.element || "body",
                                  type: e.type || "info",
                                  placement: { from: e.from || "top", align: e.align || "right" },
                                  allow_dismiss: !1 !== e.allow_dismiss,
                                  newest_on_top: !1 !== e.newest_on_top,
                                  showProgressbar: !!e.show_progress_bar,
                                  offset: e.offset || 20,
                                  spacing: e.spacing || 10,
                                  z_index: e.z_index || 1033,
                                  delay: e.delay || 5e3,
                                  timer: e.timer || 1e3,
                                  animate: { enter: e.animate_enter || "animated fadeIn", exit: e.animate_exit || "animated fadeOutDown" },
                                  template:
                                      '<div data-notify="container" class="col-11 col-sm-4 alert alert-{0} alert-dismissible" role="alert">\n  <p class="mb-0">\n    <span data-notify="icon"></span>\n    <span data-notify="title">{1}</span>\n    <span data-notify="message">{2}</span>\n  </p>\n  <div class="progress" data-notify="progressbar">\n    <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>\n  </div>\n  <a href="{3}" target="{4}" data-notify="url"></a>\n  <a class="p-2 m-1 text-dark" href="javascript:void(0)" aria-label="Close" data-notify="dismiss">\n    <i class="fa fa-times"></i>\n  </a>\n</div>',
                              }
                          );
                }
                static jqEasyPieChart() {
                    jQuery(".js-pie-chart:not(.js-pie-chart-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-pie-chart-enabled").easyPieChart({
                            barColor: i.data("bar-color") || "#777777",
                            trackColor: i.data("track-color") || "#eeeeee",
                            lineWidth: i.data("line-width") || 3,
                            size: i.data("size") || "80",
                            animate: i.data("animate") || 750,
                            scaleColor: i.data("scale-color") || !1,
                        });
                    });
                }
                static jqMaxlength() {
                    jQuery(".js-maxlength:not(.js-maxlength-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-maxlength-enabled").maxlength({
                            alwaysShow: !!i.data("always-show"),
                            threshold: i.data("threshold") || 10,
                            warningClass: i.data("warning-class") || "badge bg-warning",
                            limitReachedClass: i.data("limit-reached-class") || "badge bg-danger",
                            placement: i.data("placement") || "bottom",
                            preText: i.data("pre-text") || "",
                            separator: i.data("separator") || "/",
                            postText: i.data("post-text") || "",
                        });
                    });
                }
                static jqRangeslider() {
                    jQuery(".js-rangeslider:not(.js-rangeslider-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        jQuery(t)
                            .addClass("js-rangeslider-enabled")
                            .ionRangeSlider({ input_values_separator: ";", skin: i.data("skin") || "round" });
                    });
                }
                static jqPwStrength() {
                    jQuery(".js-pw-strength:not(.js-pw-strength-enabled)").each((e, t) => {
                        let i = jQuery(t),
                            n = i.parents(".js-pw-strength-container"),
                            r = jQuery(".js-pw-strength-progress", n),
                            s = jQuery(".js-pw-strength-feedback", n);
                        i.addClass("js-pw-strength-enabled").pwstrength({ ui: { container: n, viewports: { progress: r, verdict: s } } });
                    });
                }
                static jqSparkline() {
                    let e = this;
                    jQuery(".js-sparkline:not(.js-sparkline-enabled)").each((t, i) => {
                        let n = jQuery(i),
                            r = n.data("type"),
                            s = {},
                            o = {
                                line: () => {
                                    (s.type = r),
                                        (s.lineWidth = n.data("line-width") || 2),
                                        (s.lineColor = n.data("line-color") || "#0665d0"),
                                        (s.fillColor = n.data("fill-color") || "#0665d0"),
                                        (s.spotColor = n.data("spot-color") || "#495057"),
                                        (s.minSpotColor = n.data("min-spot-color") || "#495057"),
                                        (s.maxSpotColor = n.data("max-spot-color") || "#495057"),
                                        (s.highlightSpotColor = n.data("highlight-spot-color") || "#495057"),
                                        (s.highlightLineColor = n.data("highlight-line-color") || "#495057"),
                                        (s.spotRadius = n.data("spot-radius") || 2),
                                        (s.tooltipFormat = "{{prefix}}{{y}}{{suffix}}");
                                },
                                bar: () => {
                                    (s.type = r), (s.barWidth = n.data("bar-width") || 8), (s.barSpacing = n.data("bar-spacing") || 6), (s.barColor = n.data("bar-color") || "#0665d0"), (s.tooltipFormat = "{{prefix}}{{value}}{{suffix}}");
                                },
                                pie: () => {
                                    (s.type = r), (s.sliceColors = ["#fadb7d", "#faad7d", "#75b0eb", "#abe37d"]), (s.highlightLighten = n.data("highlight-lighten") || 1.1), (s.tooltipFormat = "{{prefix}}{{value}}{{suffix}}");
                                },
                                tristate: () => {
                                    (s.type = r),
                                        (s.barWidth = n.data("bar-width") || 8),
                                        (s.barSpacing = n.data("bar-spacing") || 6),
                                        (s.posBarColor = n.data("pos-bar-color") || "#82b54b"),
                                        (s.negBarColor = n.data("neg-bar-color") || "#e04f1a");
                                },
                            };
                        o[r]
                            ? (o[r](),
                              "line" === r &&
                                  ((n.data("chart-range-min") >= 0 || n.data("chart-range-min")) && (s.chartRangeMin = n.data("chart-range-min")),
                                  (n.data("chart-range-max") >= 0 || n.data("chart-range-max")) && (s.chartRangeMax = n.data("chart-range-max"))),
                              (s.width = n.data("width") || "120px"),
                              (s.height = n.data("height") || "80px"),
                              (s.tooltipPrefix = n.data("tooltip-prefix") ? n.data("tooltip-prefix") + " " : ""),
                              (s.tooltipSuffix = n.data("tooltip-suffix") ? " " + n.data("tooltip-suffix") : ""),
                              "100%" === s.width
                                  ? qr ||
                                    ((qr = !0),
                                    jQuery(window).on("resize.pixelcave.helpers.sparkline", function (t) {
                                        clearTimeout(zr),
                                            (zr = setTimeout(() => {
                                                e.sparkline();
                                            }, 500));
                                    }))
                                  : jQuery(i).addClass("js-sparkline-enabled"),
                              jQuery(i).sparkline(n.data("points") || [0], s))
                            : console.log("[jQuery Sparkline JS Helper] Please add a correct type (line, bar, pie or tristate) in all your elements with 'js-sparkline' class.");
                    });
                }
                static jqValidation() {
                    jQuery.validator.setDefaults({
                        errorClass: "invalid-feedback animated fadeIn",
                        errorElement: "div",
                        errorPlacement: (e, t) => {
                            jQuery(t).addClass("is-invalid"), jQuery(t).parents("div:not(.input-group)").first().append(e);
                        },
                        highlight: (e) => {
                            jQuery(e).parents("div:not(.input-group)").first().find(".is-invalid").removeClass("is-invalid").addClass("is-invalid");
                        },
                        success: (e) => {
                            jQuery(e).parents("div:not(.input-group)").first().find(".is-invalid").removeClass("is-invalid"), jQuery(e).remove();
                        },
                    });
                }
            }
            (window.bootstrap = t),
                (window.SimpleBar = Rr),
                (window.Dashmix = new (class extends class {
                    constructor() {
                        this.onLoad(this._uiInit());
                    }
                    _uiInit() {
                        (this._lHtml = document.documentElement),
                            (this._lBody = document.body),
                            (this._lpageLoader = document.getElementById("page-loader")),
                            (this._lPage = document.getElementById("page-container")),
                            (this._lSidebar = document.getElementById("sidebar")),
                            (this._lSidebarScrollCon = this._lSidebar && this._lSidebar.querySelector(".js-sidebar-scroll")),
                            (this._lSideOverlay = document.getElementById("side-overlay")),
                            (this._lResize = !1),
                            (this._lHeader = document.getElementById("page-header")),
                            (this._lHeaderSearch = document.getElementById("page-header-search")),
                            (this._lHeaderSearchInput = document.getElementById("page-header-search-input")),
                            (this._lHeaderLoader = document.getElementById("page-header-loader")),
                            (this._lMain = document.getElementById("main-container")),
                            (this._lFooter = document.getElementById("page-footer")),
                            (this._lSidebarScroll = !1),
                            (this._lSideOverlayScroll = !1),
                            this._uiHandleTheme(),
                            this._uiHandleDarkMode(),
                            this._uiHandleSidebars(),
                            this._uiHandleHeader(),
                            this._uiHandleNav(),
                            this._uiApiLayout(),
                            this._uiApiBlocks(),
                            this.helpers(["bs-tooltip", "bs-popover", "dm-toggle-class", "dm-year-copy", "dm-ripple"]),
                            this._uiHandlePageLoader();
                    }
                    _uiHandleSidebars(e = "init") {
                        let t = this;
                        (t._lSidebar || t._lSideOverlay) &&
                            ("init" === e
                                ? (t._lPage.classList.add("side-trans-enabled"),
                                  window.addEventListener("resize", () => {
                                      clearTimeout(t._lResize),
                                          t._lPage.classList.remove("side-trans-enabled"),
                                          (t._lResize = setTimeout(() => {
                                              t._lPage.classList.add("side-trans-enabled");
                                          }, 500));
                                  }),
                                  this._uiHandleSidebars("custom-scroll"))
                                : (e = "custom-scroll") &&
                                  t._lPage.classList.contains("side-scroll") &&
                                  (t._lSidebar && !t._lSidebarScroll && (t._lSidebarScroll = new Rr(t._lSidebarScrollCon)), t._lSideOverlay && !t._lSideOverlayScroll && (t._lSideOverlayScroll = new Rr(t._lSideOverlay))));
                    }
                    _uiHandleHeader() {
                        let e = this;
                        e._lPage.classList.contains("page-header-glass") &&
                            e._lPage.classList.contains("page-header-fixed") &&
                            (window.addEventListener("scroll", (t) => {
                                window.scrollY > 60 ? e._lPage.classList.add("page-header-scroll") : e._lPage.classList.remove("page-header-scroll");
                            }),
                            window.dispatchEvent(new CustomEvent("scroll")));
                    }
                    _uiHandleNav() {
                        let e = document.querySelectorAll('[data-toggle="submenu"]');
                        e &&
                            e.forEach((e) => {
                                e.addEventListener("click", (t) => {
                                    t.preventDefault();
                                    let i = e.closest(".nav-main");
                                    if (!((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 991 && i.classList.contains("nav-main-horizontal") && i.classList.contains("nav-main-hover"))) {
                                        let t = e.closest("li");
                                        t.classList.contains("open")
                                            ? (t.classList.remove("open"), e.setAttribute("aria-expanded", "false"))
                                            : (e.closest("ul").children.forEach((e) => {
                                                  e.classList.remove("open");
                                              }),
                                              t.classList.add("open"),
                                              e.setAttribute("aria-expanded", "true"));
                                    }
                                    return !1;
                                });
                            });
                    }
                    _uiHandlePageLoader(e = "hide", t) {
                        if ("show" === e)
                            if (this._lpageLoader) t && ((this._lpageLoader.className = ""), this._lpageLoader.classList.add(t)), this._lpageLoader.classList.add("show");
                            else {
                                let e = document.createElement("div");
                                (e.id = "page-loader"), t && e.classList.add(t), e.classList.add("show"), this._lPage.insertBefore(e, this._lPage.firstChild), (this._lpageLoader = document.getElementById("page-loader"));
                            }
                        else "hide" === e && this._lpageLoader && this._lpageLoader.classList.remove("show");
                    }
                    _uiHandleDarkMode(e = "init") {
                        let t = this;
                        if (this._lPage.classList.contains("remember-theme")) {
                            let i = localStorage.getItem("dashmixDarkMode") || !1;
                            "init" === e
                                ? i
                                    ? (t._lPage.classList.add("sidebar-dark"), t._lPage.classList.add("page-header-dark"), t._lPage.classList.add("dark-mode"))
                                    : "init" === e && t._lPage.classList.remove("dark-mode")
                                : "on" === e
                                ? localStorage.setItem("dashmixDarkMode", !0)
                                : "off" === e && localStorage.removeItem("dashmixDarkMode");
                        } else "init" === e && localStorage.removeItem("dashmixDarkMode");
                    }
                    _uiHandleTheme() {
                        let e = this,
                            t = document.getElementById("css-theme"),
                            i = !!this._lPage.classList.contains("remember-theme");
                        if (i) {
                            let i = localStorage.getItem("dashmixThemeName") || !1;
                            i && e._uiUpdateTheme(t, i), (t = document.getElementById("css-theme"));
                        } else localStorage.removeItem("dashmixThemeName");
                        document.querySelectorAll('[data-toggle="theme"][data-theme="' + (t ? t.getAttribute("href") : "default") + '"]').forEach((e) => {
                            e.classList.add("active");
                        }),
                            document.querySelectorAll('[data-toggle="theme"]').forEach((n) => {
                                n.addEventListener("click", (r) => {
                                    r.preventDefault();
                                    let s = n.dataset.theme;
                                    document.querySelectorAll('[data-toggle="theme"]').forEach((e) => {
                                        e.classList.remove("active");
                                    }),
                                        document.querySelector('[data-toggle="theme"][data-theme="' + s + '"]').classList.add("active"),
                                        e._uiUpdateTheme(t, s),
                                        (t = document.getElementById("css-theme")),
                                        i && localStorage.setItem("dashmixThemeName", s);
                                });
                            });
                    }
                    _uiUpdateTheme(e, t) {
                        if ("default" === t) e && e.parentNode.removeChild(e);
                        else if (e) e.setAttribute("href", t);
                        else {
                            let e = document.createElement("link");
                            (e.id = "css-theme"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), document.getElementById("css-main").insertAdjacentElement("afterend", e);
                        }
                    }
                    _uiApiLayout(e = "init") {
                        let t = this,
                            i = {
                                init: () => {
                                    let e = document.querySelectorAll('[data-toggle="layout"]');
                                    if (
                                        (e &&
                                            e.forEach((e) => {
                                                e.addEventListener("click", (i) => {
                                                    t._uiApiLayout(e.dataset.action);
                                                });
                                            }),
                                        t._lPage.classList.contains("enable-page-overlay"))
                                    ) {
                                        let e = document.createElement("div");
                                        (e.id = "page-overlay"),
                                            t._lPage.insertBefore(e, t._lPage.firstChild),
                                            document.getElementById("page-overlay").addEventListener("click", (e) => {
                                                t._uiApiLayout("side_overlay_close");
                                            });
                                    }
                                },
                                sidebar_pos_toggle: () => {
                                    t._lPage.classList.toggle("sidebar-r");
                                },
                                sidebar_pos_left: () => {
                                    t._lPage.classList.remove("sidebar-r");
                                },
                                sidebar_pos_right: () => {
                                    t._lPage.classList.add("sidebar-r");
                                },
                                sidebar_toggle: () => {
                                    window.innerWidth > 991 ? t._lPage.classList.toggle("sidebar-o") : t._lPage.classList.toggle("sidebar-o-xs");
                                },
                                sidebar_open: () => {
                                    window.innerWidth > 991 ? t._lPage.classList.add("sidebar-o") : t._lPage.classList.add("sidebar-o-xs");
                                },
                                sidebar_close: () => {
                                    window.innerWidth > 991 ? t._lPage.classList.remove("sidebar-o") : t._lPage.classList.remove("sidebar-o-xs");
                                },
                                sidebar_mini_toggle: () => {
                                    window.innerWidth > 991 && t._lPage.classList.toggle("sidebar-mini");
                                },
                                sidebar_mini_on: () => {
                                    window.innerWidth > 991 && t._lPage.classList.add("sidebar-mini");
                                },
                                sidebar_mini_off: () => {
                                    window.innerWidth > 991 && t._lPage.classList.remove("sidebar-mini");
                                },
                                sidebar_style_toggle: () => {
                                    t._lPage.classList.contains("sidebar-dark") && t._lPage.classList.remove("dark-mode"), t._lPage.classList.toggle("sidebar-dark");
                                },
                                sidebar_style_dark: () => {
                                    t._lPage.classList.add("sidebar-dark");
                                },
                                sidebar_style_light: () => {
                                    t._lPage.classList.remove("sidebar-dark"), t._lPage.classList.remove("dark-mode");
                                },
                                side_overlay_toggle: () => {
                                    t._lPage.classList.contains("side-overlay-o") ? t._uiApiLayout("side_overlay_close") : t._uiApiLayout("side_overlay_open");
                                },
                                side_overlay_open: () => {
                                    document.addEventListener("keydown", (e) => {
                                        ("Esc" !== e.key && "Escape" !== e.key) || t._uiApiLayout("side_overlay_close");
                                    }),
                                        t._lPage.classList.add("side-overlay-o");
                                },
                                side_overlay_close: () => {
                                    t._lPage.classList.remove("side-overlay-o");
                                },
                                side_overlay_mode_hover_toggle: () => {
                                    t._lPage.classList.toggle("side-overlay-hover");
                                },
                                side_overlay_mode_hover_on: () => {
                                    t._lPage.classList.add("side-overlay-hover");
                                },
                                side_overlay_mode_hover_off: () => {
                                    t._lPage.classList.remove("side-overlay-hover");
                                },
                                header_glass_toggle: () => {
                                    t._lPage.classList.toggle("page-header-glass"), t._uiHandleHeader();
                                },
                                header_glass_on: () => {
                                    t._lPage.classList.add("page-header-glass"), t._uiHandleHeader();
                                },
                                header_glass_off: () => {
                                    t._lPage.classList.remove("page-header-glass"), t._uiHandleHeader();
                                },
                                header_mode_toggle: () => {
                                    t._lPage.classList.toggle("page-header-fixed");
                                },
                                header_mode_static: () => {
                                    t._lPage.classList.remove("page-header-fixed");
                                },
                                header_mode_fixed: () => {
                                    t._lPage.classList.add("page-header-fixed");
                                },
                                header_style_toggle: () => {
                                    t._lPage.classList.toggle("page-header-dark");
                                },
                                header_style_dark: () => {
                                    t._lPage.classList.add("page-header-dark");
                                },
                                header_style_light: () => {
                                    t._lPage.classList.remove("page-header-dark"), t._lPage.classList.remove("dark-mode");
                                },
                                header_search_on: () => {
                                    t._lHeaderSearch.classList.add("show"),
                                        t._lHeaderSearchInput.focus(),
                                        document.addEventListener("keydown", (e) => {
                                            ("Esc" !== e.key && "Escape" !== e.key) || t._uiApiLayout("header_search_off");
                                        });
                                },
                                header_search_off: () => {
                                    t._lHeaderSearch.classList.remove("show"), t._lHeaderSearchInput.blur();
                                },
                                header_loader_on: () => {
                                    t._lHeaderLoader.classList.add("show");
                                },
                                header_loader_off: () => {
                                    t._lHeaderLoader.classList.remove("show");
                                },
                                dark_mode_toggle: () => {
                                    t._lPage.classList.contains("dark-mode") ? t._uiApiLayout("dark_mode_off") : t._uiApiLayout("dark_mode_on");
                                },
                                dark_mode_on: () => {
                                    t._uiApiLayout("sidebar_style_dark"), t._uiApiLayout("header_style_dark"), t._lPage.classList.add("dark-mode"), this._uiHandleDarkMode("on");
                                },
                                dark_mode_off: () => {
                                    t._uiApiLayout("header_style_light"), t._lPage.classList.remove("dark-mode"), this._uiHandleDarkMode("off");
                                },
                                content_layout_toggle: () => {
                                    t._lPage.classList.contains("main-content-boxed")
                                        ? t._uiApiLayout("content_layout_narrow")
                                        : t._lPage.classList.contains("main-content-narrow")
                                        ? t._uiApiLayout("content_layout_full_width")
                                        : t._uiApiLayout("content_layout_boxed");
                                },
                                content_layout_boxed: () => {
                                    t._lPage.classList.remove("main-content-narrow"), t._lPage.classList.add("main-content-boxed");
                                },
                                content_layout_narrow: () => {
                                    t._lPage.classList.remove("main-content-boxed"), t._lPage.classList.add("main-content-narrow");
                                },
                                content_layout_full_width: () => {
                                    t._lPage.classList.remove("main-content-boxed"), t._lPage.classList.remove("main-content-narrow");
                                },
                            };
                        i[e] && i[e]();
                    }
                    _uiApiBlocks(e = "init", t = !1) {
                        let i,
                            n,
                            r,
                            s = "si-size-fullscreen",
                            o = "si-size-actual",
                            a = "si-arrow-up",
                            l = "si-arrow-down",
                            c = {
                                init: () => {
                                    document.querySelectorAll('[data-toggle="block-option"][data-action="fullscreen_toggle"]').forEach((e) => {
                                        e.innerHTML = '<i class="si ' + (e.closest(".block").classList.contains("block-mode-fullscreen") ? o : s) + '"></i>';
                                    }),
                                        document.querySelectorAll('[data-toggle="block-option"][data-action="content_toggle"]').forEach((e) => {
                                            e.innerHTML = '<i class="si ' + (e.closest(".block").classList.contains("block-mode-hidden") ? l : a) + '"></i>';
                                        }),
                                        document.querySelectorAll('[data-toggle="block-option"]').forEach((e) => {
                                            e.addEventListener("click", (t) => {
                                                this._uiApiBlocks(e.dataset.action, e.closest(".block"));
                                            });
                                        });
                                },
                                fullscreen_toggle: () => {
                                    i.classList.remove("block-mode-pinned"),
                                        i.classList.toggle("block-mode-fullscreen"),
                                        n && (i.classList.contains("block-mode-fullscreen") ? n && n.querySelector("i").classList.replace(s, o) : n && n.querySelector("i").classList.replace(o, s));
                                },
                                fullscreen_on: () => {
                                    i.classList.remove("block-mode-pinned"), i.classList.add("block-mode-fullscreen"), n && n.querySelector("i").classList.replace(s, o);
                                },
                                fullscreen_off: () => {
                                    i.classList.remove("block-mode-fullscreen"), n && n.querySelector("i").classList.replace(o, s);
                                },
                                content_toggle: () => {
                                    i.classList.toggle("block-mode-hidden"), r && (i.classList.contains("block-mode-hidden") ? r.querySelector("i").classList.replace(a, l) : r.querySelector("i").classList.replace(l, a));
                                },
                                content_hide: () => {
                                    i.classList.add("block-mode-hidden"), r && r.querySelector("i").classList.replace(a, l);
                                },
                                content_show: () => {
                                    i.classList.remove("block-mode-hidden"), r && r.querySelector("i").classList.replace(l, a);
                                },
                                state_toggle: () => {
                                    i.classList.toggle("block-mode-loading"),
                                        i.querySelector('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]') &&
                                            setTimeout(() => {
                                                i.classList.remove("block-mode-loading");
                                            }, 2e3);
                                },
                                state_loading: () => {
                                    i.classList.add("block-mode-loading");
                                },
                                state_normal: () => {
                                    i.classList.remove("block-mode-loading");
                                },
                                pinned_toggle: () => {
                                    i.classList.remove("block-mode-fullscreen"), i.classList.toggle("block-mode-pinned");
                                },
                                pinned_on: () => {
                                    i.classList.remove("block-mode-fullscreen"), i.classList.add("block-mode-pinned");
                                },
                                pinned_off: () => {
                                    i.classList.remove("block-mode-pinned");
                                },
                                close: () => {
                                    i.classList.add("d-none");
                                },
                                open: () => {
                                    i.classList.remove("d-none");
                                },
                            };
                        "init" === e
                            ? c[e]()
                            : ((i = t instanceof Element ? t : document.querySelector("".concat(t))),
                              i && ((n = i.querySelector('[data-toggle="block-option"][data-action="fullscreen_toggle"]')), (r = i.querySelector('[data-toggle="block-option"][data-action="content_toggle"]')), c[e] && c[e]()));
                    }
                    onLoad(e) {
                        "loading" != document.readyState ? e : document.addEventListener("DOMContentLoaded", e);
                    }
                    init() {
                        this._uiInit();
                    }
                    layout(e) {
                        this._uiApiLayout(e);
                    }
                    block(e, t) {
                        this._uiApiBlocks(e, t);
                    }
                    loader(e, t) {
                        this._uiHandlePageLoader(e, t);
                    }
                    helpers(e, t = {}) {
                        Wr.run(e, t);
                    }
                    helpersOnLoad(e, t = {}) {
                        this.onLoad(Wr.run(e, t));
                    }
                } {
                    constructor() {
                        super();
                    }
                })());
        })();
})();
