/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(d, r) {
    "use strict";
    var g = [],
        b = d.document,
        K = Object.getPrototypeOf,
        L = g.slice,
        M = g.concat,
        s = g.push,
        N = g.indexOf,
        n = {},
        O = n.toString,
        t = n.hasOwnProperty,
        u = t.toString,
        P = u.call(Object),
        c = {},
        v = function(a) { return "function" == typeof a && "number" != typeof a.nodeType },
        w = function(a) { return null != a && a === a.window },
        Q = { type: !0, src: !0, noModule: !0 };

    function R(f, d, e) {
        var a, c = (d = d || b).createElement("script");
        if (c.text = f, e)
            for (a in Q) e[a] && (c[a] = e[a]);
        d.head.appendChild(c).parentNode.removeChild(c)
    }

    function x(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? n[O.call(a)] || "object" : typeof a }
    var a = function(b, c) { return new a.fn.init(b, c) },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(a) {
        var b = !!a && "length" in a && a.length,
            c = x(a);
        return !v(a) && !w(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    a.fn = a.prototype = {
        jquery: "3.3.1",
        constructor: a,
        length: 0,
        toArray: function() { return L.call(this) },
        get: function(a) { return null == a ? L.call(this) : a < 0 ? this[a + this.length] : this[a] },
        pushStack: function(c) { var b = a.merge(this.constructor(), c); return b.prevObject = this, b },
        each: function(b) { return a.each(this, b) },
        map: function(b) { return this.pushStack(a.map(this, function(a, c) { return b.call(a, c, a) })) },
        slice: function() { return this.pushStack(L.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(b) {
            var c = this.length,
                a = +b + (b < 0 ? c : 0);
            return this.pushStack(a >= 0 && a < c ? [this[a]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: s,
        sort: g.sort,
        splice: g.splice
    }, a.extend = a.fn.extend = function() {
        var g, f, c, d, h, i, b = arguments[0] || {},
            e = 1,
            k = arguments.length,
            j = !1;
        for ("boolean" == typeof b && (j = b, b = arguments[e] || {}, e++), "object" == typeof b || v(b) || (b = {}), e === k && (b = this, e--); e < k; e++)
            if (null != (g = arguments[e]))
                for (f in g) c = b[f], b !== (d = g[f]) && (j && d && (a.isPlainObject(d) || (h = Array.isArray(d))) ? (h ? (h = !1, i = c && Array.isArray(c) ? c : []) : i = c && a.isPlainObject(c) ? c : {}, b[f] = a.extend(j, i, d)) : void 0 !== d && (b[f] = d));
        return b
    }, a.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== O.call(a)) && (!(b = K(a)) || "function" == typeof(c = t.call(b, "constructor") && b.constructor) && u.call(c) === P) },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        globalEval: function(a) { R(a) },
        each: function(b, c) {
            var d, a = 0;
            if (T(b))
                for (d = b.length; a < d && !1 !== c.call(b[a], a, b[a]); a++);
            else
                for (a in b)
                    if (!1 === c.call(b[a], a, b[a])) break; return b
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(S, "") },
        makeArray: function(b, d) { var c = d || []; return null != b && (T(Object(b)) ? a.merge(c, "string" == typeof b ? [b] : b) : s.call(c, b)), c },
        inArray: function(b, a, c) { return null == a ? -1 : N.call(a, b, c) },
        merge: function(a, c) { for (var e = +c.length, b = 0, d = a.length; b < e; b++) a[d++] = c[b]; return a.length = d, a },
        grep: function(b, d, e) { for (var c = [], a = 0, f = b.length, g = !e; a < f; a++) !d(b[a], a) !== g && c.push(b[a]); return c },
        map: function(b, e, f) {
            var g, c, a = 0,
                d = [];
            if (T(b))
                for (g = b.length; a < g; a++) null != (c = e(b[a], a, f)) && d.push(c);
            else
                for (a in b) null != (c = e(b[a], a, f)) && d.push(c);
            return M.apply([], d)
        },
        guid: 1,
        support: c
    }), "function" == typeof Symbol && (a.fn[Symbol.iterator] = g[Symbol.iterator]), a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(b, a) { n["[object " + a + "]"] = a.toLowerCase() });
    var h = function(u) {
        var g, h, c, v, w, x, y, z, G, H, A, m, I, J, K, L, M, N, O, n = "sizzle" + 1 * new Date,
            k = u.document,
            P = 0,
            Q = 0,
            R = ap(),
            S = ap(),
            T = ap(),
            B = function(a, b) { return a === b && (A = !0), 0 },
            U = {}.hasOwnProperty,
            d = [],
            V = d.pop,
            W = d.push,
            o = d.push,
            C = d.slice,
            X = function(b, c) {
                for (var a = 0, d = b.length; a < d; a++)
                    if (b[a] === c) return a;
                return -1
            },
            p = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            a = "[\\x20\\t\\r\\n\\f]",
            e = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + a + "*(" + e + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + a + "*\\]",
            r = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            $ = new RegExp(a + "+", "g"),
            Y = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
            Z = new RegExp("^" + a + "*," + a + "*"),
            _ = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
            aa = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
            ab = new RegExp(r),
            ac = new RegExp("^" + e + "$"),
            D = { ID: new RegExp("^#(" + e + ")"), CLASS: new RegExp("^\\.(" + e + ")"), TAG: new RegExp("^(" + e + "|[*])"), ATTR: new RegExp("^" + q), PSEUDO: new RegExp("^" + r), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"), bool: new RegExp("^(?:" + p + ")$", "i"), needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i") },
            ad = /^(?:input|select|textarea|button)$/i,
            ae = /^h\d$/i,
            af = /^[^{]+\{\s*\[native \w/,
            ag = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ah = /[+~]/,
            ai = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig"),
            aj = function(d, b, c) { var a = "0x" + b - 65536; return a != a || c ? b : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320) },
            ak = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            al = function(a, b) { return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            am = function() { m() },
            an = at(function(a) { return !0 === a.disabled && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" });
        try { o.apply(d = C.call(k.childNodes), k.childNodes), d[k.childNodes.length].nodeType } catch (ao) {
            o = {
                apply: d.length ? function(a, b) { W.apply(a, C.call(b)) } : function(a, c) {
                    for (var b = a.length, d = 0; a[b++] = c[d++];);
                    a.length = b - 1
                }
            }
        }

        function b(c, a, b, r) {
            var d, j, e, f, l, p, q, i = a && a.ownerDocument,
                g = a ? a.nodeType : 9;
            if (b = b || [], "string" != typeof c || !c || 1 !== g && 9 !== g && 11 !== g) return b;
            if (!r && ((a ? a.ownerDocument || a : k) !== I && m(a), a = a || I, K)) {
                if (11 !== g && (l = ag.exec(c))) { if (d = l[1]) { if (9 === g) { if (!(e = a.getElementById(d))) return b; if (e.id === d) return b.push(e), b } else if (i && (e = i.getElementById(d)) && O(a, e) && e.id === d) return b.push(e), b } else { if (l[2]) return o.apply(b, a.getElementsByTagName(c)), b; if ((d = l[3]) && h.getElementsByClassName && a.getElementsByClassName) return o.apply(b, a.getElementsByClassName(d)), b } }
                if (h.qsa && !T[c + " "] && (!L || !L.test(c))) {
                    if (1 !== g) i = a, q = c;
                    else if ("object" !== a.nodeName.toLowerCase()) {
                        for ((f = a.getAttribute("id")) ? f = f.replace(ak, al) : a.setAttribute("id", f = n), j = (p = x(c)).length; j--;) p[j] = "#" + f + " " + as(p[j]);
                        q = p.join(","), i = ah.test(c) && ar(a.parentNode) || a
                    }
                    if (q) try { return o.apply(b, i.querySelectorAll(q)), b } catch (s) {} finally { f === n && a.removeAttribute("id") }
                }
            }
            return z(c.replace(Y, "$1"), a, b, r)
        }

        function ap() {
            var b = [];

            function a(d, e) { return b.push(d + " ") > c.cacheLength && delete a[b.shift()], a[d + " "] = e }
            return a
        }

        function i(a) { return a[n] = !0, a }

        function j(b) { var a = I.createElement("fieldset"); try { return !!b(a) } catch (c) { return !1 } finally { a.parentNode && a.parentNode.removeChild(a), a = null } }

        function l(d, e) { for (var a = d.split("|"), b = a.length; b--;) c.attrHandle[a[b]] = e }

        function aq(b, c) {
            var a = c && b,
                d = a && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (d) return d;
            if (a) {
                for (; a = a.nextSibling;)
                    if (a === c) return -1
            }
            return b ? 1 : -1
        }

        function E(a) { return function(b) { return "input" === b.nodeName.toLowerCase() && b.type === a } }

        function F(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function s(a) { return function(b) { return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || !a !== b.isDisabled && an(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

        function f(a) { return i(function(b) { return b = +b, i(function(c, g) { for (var d, e = a([], c.length, b), f = e.length; f--;) c[d = e[f]] && (c[d] = !(g[d] = c[d])) }) }) }

        function ar(a) { return a && void 0 !== a.getElementsByTagName && a }
        for (g in h = b.support = {}, w = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = b.setDocument = function(e) {
                var f, b, d = e ? e.ownerDocument || e : k;
                return d !== I && 9 === d.nodeType && d.documentElement && (J = (I = d).documentElement, K = !w(I), k !== I && (b = I.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", am, !1) : b.attachEvent && b.attachEvent("onunload", am)), h.attributes = j(function(a) { return a.className = "i", !a.getAttribute("className") }), h.getElementsByTagName = j(function(a) { return a.appendChild(I.createComment("")), !a.getElementsByTagName("*").length }), h.getElementsByClassName = af.test(I.getElementsByClassName), h.getById = j(function(a) { return J.appendChild(a).id = n, !I.getElementsByName || !I.getElementsByName(n).length }), h.getById ? (c.filter.ID = function(a) { var b = a.replace(ai, aj); return function(a) { return a.getAttribute("id") === b } }, c.find.ID = function(c, a) { if (void 0 !== a.getElementById && K) { var b = a.getElementById(c); return b ? [b] : [] } }) : (c.filter.ID = function(a) { var b = a.replace(ai, aj); return function(a) { var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, c.find.ID = function(b, d) {
                    if (void 0 !== d.getElementById && K) {
                        var c, e, f, a = d.getElementById(b);
                        if (a) {
                            if ((c = a.getAttributeNode("id")) && c.value === b) return [a];
                            for (f = d.getElementsByName(b), e = 0; a = f[e++];)
                                if ((c = a.getAttributeNode("id")) && c.value === b) return [a]
                        }
                        return []
                    }
                }), c.find.TAG = h.getElementsByTagName ? function(b, a) { return void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b) : h.qsa ? a.querySelectorAll(b) : void 0 } : function(b, e) {
                    var a, c = [],
                        f = 0,
                        d = e.getElementsByTagName(b);
                    if ("*" === b) { for (; a = d[f++];) 1 === a.nodeType && c.push(a); return c }
                    return d
                }, c.find.CLASS = h.getElementsByClassName && function(b, a) { if (void 0 !== a.getElementsByClassName && K) return a.getElementsByClassName(b) }, M = [], L = [], (h.qsa = af.test(I.querySelectorAll)) && (j(function(b) { J.appendChild(b).innerHTML = "<a id='" + n + "'></a><select id='" + n + "-\r\\' msallowcapture=''><option selected=''></option></select>", b.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + a + "*(?:''|\"\")"), b.querySelectorAll("[selected]").length || L.push("\\[" + a + "*(?:value|" + p + ")"), b.querySelectorAll("[id~=" + n + "-]").length || L.push("~="), b.querySelectorAll(":checked").length || L.push(":checked"), b.querySelectorAll("a#" + n + "+*").length || L.push(".#.+[+~]") }), j(function(b) {
                    b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var c = I.createElement("input");
                    c.setAttribute("type", "hidden"), b.appendChild(c).setAttribute("name", "D"), b.querySelectorAll("[name=d]").length && L.push("name" + a + "*[*^$|!~]?="), 2 !== b.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), J.appendChild(b).disabled = !0, 2 !== b.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), b.querySelectorAll("*,:x"), L.push(",.*:")
                })), (h.matchesSelector = af.test(N = J.matches || J.webkitMatchesSelector || J.mozMatchesSelector || J.oMatchesSelector || J.msMatchesSelector)) && j(function(a) { h.disconnectedMatch = N.call(a, "*"), N.call(a, "[s!='']:x"), M.push("!=", r) }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), f = af.test(J.compareDocumentPosition), O = f || af.test(J.contains) ? function(a, c) {
                    var d = 9 === a.nodeType ? a.documentElement : a,
                        b = c && c.parentNode;
                    return a === b || !(!b || 1 !== b.nodeType || !(d.contains ? d.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
                } : function(b, a) {
                    if (a) {
                        for (; a = a.parentNode;)
                            if (a === b) return !0
                    }
                    return !1
                }, B = f ? function(a, b) { if (a === b) return A = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c || (1 & (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !h.sortDetached && b.compareDocumentPosition(a) === c ? a === I || a.ownerDocument === k && O(k, a) ? -1 : b === I || b.ownerDocument === k && O(k, b) ? 1 : H ? X(H, a) - X(H, b) : 0 : 4 & c ? -1 : 1) } : function(c, d) {
                    if (c === d) return A = !0, 0;
                    var a, b = 0,
                        g = c.parentNode,
                        h = d.parentNode,
                        e = [c],
                        f = [d];
                    if (!g || !h) return c === I ? -1 : d === I ? 1 : g ? -1 : h ? 1 : H ? X(H, c) - X(H, d) : 0;
                    if (g === h) return aq(c, d);
                    for (a = c; a = a.parentNode;) e.unshift(a);
                    for (a = d; a = a.parentNode;) f.unshift(a);
                    for (; e[b] === f[b];) b++;
                    return b ? aq(e[b], f[b]) : e[b] === k ? -1 : f[b] === k ? 1 : 0
                }), I
            }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== I && m(a), c = c.replace(aa, "='$1']"), h.matchesSelector && K && !T[c + " "] && (!M || !M.test(c)) && (!L || !L.test(c))) try { var d = N.call(a, c); if (d || h.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
                return b(c, I, null, [a]).length > 0
            }, b.contains = function(a, b) { return (a.ownerDocument || a) !== I && m(a), O(a, b) }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== I && m(a);
                var e = c.attrHandle[b.toLowerCase()],
                    d = e && U.call(c.attrHandle, b.toLowerCase()) ? e(a, b, !K) : void 0;
                return void 0 !== d ? d : h.attributes || !K ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.escape = function(a) { return (a + "").replace(ak, al) }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) {
                var d, e = [],
                    b = 0,
                    c = 0;
                if (A = !h.detectDuplicates, H = !h.sortStable && a.slice(0), a.sort(B), A) { for (; d = a[c++];) d === a[c] && (b = e.push(c)); for (; b--;) a.splice(e[b], 1) }
                return H = null, a
            }, v = b.getText = function(a) {
                var d, c = "",
                    e = 0,
                    b = a.nodeType;
                if (b) { if (1 === b || 9 === b || 11 === b) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += v(a) } else if (3 === b || 4 === b) return a.nodeValue } else
                    for (; d = a[e++];) c += v(d);
                return c
            }, (c = b.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: D,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ai, aj), a[3] = (a[3] || a[4] || a[5] || "").replace(ai, aj), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var c, b = !a[6] && a[2]; return D.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : b && ab.test(b) && (c = x(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c), a[2] = b.slice(0, c)), a.slice(0, 3)) } },
                filter: {
                    TAG: function(a) { var b = a.replace(ai, aj).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                    CLASS: function(b) { var c = R[b + " "]; return c || (c = new RegExp("(^|" + a + ")" + b + "(" + a + "|$)"), R(b, function(a) { return c.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "") })) },
                    ATTR: function(a, c, d) { return function(f) { var e = b.attr(f, a); return null == e ? "!=" === c : !c || (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && e.indexOf(d) > -1 : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? (" " + e.replace($, " ") + " ").indexOf(d) > -1 : "|=" === c && (e === d || e.slice(0, d.length + 1) === d + "-")) } },
                    CHILD: function(a, b, e, c, d) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === c && 0 === d ? function(a) { return !!a.parentNode } : function(j, u, t) {
                            var l, q, k, b, i, m, o = f !== g ? "nextSibling" : "previousSibling",
                                p = j.parentNode,
                                s = h && j.nodeName.toLowerCase(),
                                r = !t && !h,
                                e = !1;
                            if (p) {
                                if (f) {
                                    for (; o;) {
                                        for (b = j; b = b[o];)
                                            if (h ? b.nodeName.toLowerCase() === s : 1 === b.nodeType) return !1;
                                        m = o = "only" === a && !m && "nextSibling"
                                    }
                                    return !0
                                }
                                if (m = [g ? p.firstChild : p.lastChild], g && r) {
                                    for (e = (i = (l = (q = (k = (b = p)[n] || (b[n] = {}))[b.uniqueID] || (k[b.uniqueID] = {}))[a] || [])[0] === P && l[1]) && l[2], b = i && p.childNodes[i]; b = ++i && b && b[o] || (e = i = 0) || m.pop();)
                                        if (1 === b.nodeType && ++e && b === j) { q[a] = [P, i, e]; break }
                                } else if (r && (e = i = (l = (q = (k = (b = j)[n] || (b[n] = {}))[b.uniqueID] || (k[b.uniqueID] = {}))[a] || [])[0] === P && l[1]), !1 === e)
                                    for (;
                                        (b = ++i && b && b[o] || (e = i = 0) || m.pop()) && (!((h ? b.nodeName.toLowerCase() === s : 1 === b.nodeType) && ++e) || (r && ((q = (k = b[n] || (b[n] = {}))[b.uniqueID] || (k[b.uniqueID] = {}))[a] = [P, e]), b !== j)););
                                return (e -= d) === c || e % c == 0 && e / c >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, e) { var f, d = c.pseudos[a] || c.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return d[n] ? d(e) : d.length > 1 ? (f = [a, a, "", e], c.setFilters.hasOwnProperty(a.toLowerCase()) ? i(function(a, g) { for (var f, b = d(a, e), c = b.length; c--;) a[f = X(a, b[c])] = !(g[f] = b[c]) }) : function(a) { return d(a, 0, f) }) : d }
                },
                pseudos: {
                    not: i(function(a) {
                        var c = [],
                            d = [],
                            b = y(a.replace(Y, "$1"));
                        return b[n] ? i(function(c, e, h, f) { for (var d, g = b(c, null, f, []), a = c.length; a--;)(d = g[a]) && (c[a] = !(e[a] = d)) }) : function(a, f, e) { return c[0] = a, b(c, null, e, d), c[0] = null, !d.pop() }
                    }),
                    has: i(function(a) { return function(c) { return b(a, c).length > 0 } }),
                    contains: i(function(a) {
                        return a = a.replace(ai, aj),
                            function(b) { return (b.textContent || b.innerText || v(b)).indexOf(a) > -1 }
                    }),
                    lang: i(function(a) {
                        return ac.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ai, aj).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = K ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType) return !1
                            }
                    }),
                    target: function(b) { var a = u.location && u.location.hash; return a && a.slice(1) === b.id },
                    root: function(a) { return a === J },
                    focus: function(a) { return a === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                    selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) { return !c.pseudos.empty(a) },
                    header: function(a) { return ae.test(a.nodeName) },
                    input: function(a) { return ad.test(a.nodeName) },
                    button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                    text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                    first: f(function() { return [0] }),
                    last: f(function(b, a) { return [a - 1] }),
                    eq: f(function(c, b, a) { return [a < 0 ? a + b : a] }),
                    even: f(function(b, c) { for (var a = 0; a < c; a += 2) b.push(a); return b }),
                    odd: f(function(b, c) { for (var a = 1; a < c; a += 2) b.push(a); return b }),
                    lt: f(function(b, d, a) { for (var c = a < 0 ? a + d : a; --c >= 0;) b.push(c); return b }),
                    gt: f(function(b, c, a) { for (var d = a < 0 ? a + c : a; ++d < c;) b.push(d); return b })
                }
            }).pseudos.nth = c.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) c.pseudos[g] = E(g);
        for (g in { submit: !0, reset: !0 }) c.pseudos[g] = F(g);

        function t() {}

        function as(b) { for (var a = 0, d = b.length, c = ""; a < d; a++) c += b[a].value; return c }

        function at(f, a, b) {
            var c = a.dir,
                d = a.next,
                e = d || c,
                g = b && "parentNode" === e,
                h = Q++;
            return a.first ? function(a, b, d) {
                for (; a = a[c];)
                    if (1 === a.nodeType || g) return f(a, b, d);
                return !1
            } : function(a, l, i) {
                var b, j, m, k = [P, h];
                if (i) {
                    for (; a = a[c];)
                        if ((1 === a.nodeType || g) && f(a, l, i)) return !0
                } else
                    for (; a = a[c];)
                        if (1 === a.nodeType || g) {
                            if (j = (m = a[n] || (a[n] = {}))[a.uniqueID] || (m[a.uniqueID] = {}), d && d === a.nodeName.toLowerCase()) a = a[c] || a;
                            else { if ((b = j[e]) && b[0] === P && b[1] === h) return k[2] = b[2]; if (j[e] = k, k[2] = f(a, l, i)) return !0 }
                        } return !1
            }
        }

        function au(a) {
            return a.length > 1 ? function(c, d, e) {
                for (var b = a.length; b--;)
                    if (!a[b](c, d, e)) return !1;
                return !0
            } : a[0]
        }

        function av(c, d, e, g, h) { for (var b, f = [], a = 0, i = c.length, j = null != d; a < i; a++)(b = c[a]) && (e && !e(b, g, h) || (f.push(b), j && d.push(a))); return f }

        function aw(e, f, g, a, c, d) {
            return a && !a[n] && (a = aw(a)), c && !c[n] && (c = aw(c, d)), i(function(k, l, m, n) {
                var i, h, j, r = [],
                    q = [],
                    s = l.length,
                    t = k || function(e, c, d) { for (var a = 0, f = c.length; a < f; a++) b(e, c[a], d); return d }(f || "*", m.nodeType ? [m] : m, []),
                    p = e && (k || !f) ? av(t, r, e, m, n) : t,
                    d = g ? c || (k ? e : s || a) ? [] : l : p;
                if (g && g(p, d, m, n), a)
                    for (i = av(d, q), a(i, [], m, n), h = i.length; h--;)(j = i[h]) && (d[q[h]] = !(p[q[h]] = j));
                if (k) {
                    if (c || e) {
                        if (c) {
                            for (i = [], h = d.length; h--;)(j = d[h]) && i.push(p[h] = j);
                            c(null, d = [], i, n)
                        }
                        for (h = d.length; h--;)(j = d[h]) && (i = c ? X(k, j) : r[h]) > -1 && (k[i] = !(l[i] = j))
                    }
                } else d = av(d === l ? d.splice(s, d.length) : d), c ? c(null, l, d, n) : o.apply(l, d)
            })
        }

        function ax(a) {
            for (var j, e, d, g = a.length, h = c.relative[a[0].type], i = h || c.relative[" "], b = h ? 1 : 0, k = at(function(a) { return a === j }, i, !0), l = at(function(a) { return X(j, a) > -1 }, i, !0), f = [function(c, a, b) { var d = !h && (b || a !== G) || ((j = a).nodeType ? k(c, a, b) : l(c, a, b)); return j = null, d }]; b < g; b++)
                if (e = c.relative[a[b].type]) f = [at(au(f), e)];
                else {
                    if ((e = c.filter[a[b].type].apply(null, a[b].matches))[n]) { for (d = ++b; d < g && !c.relative[a[d].type]; d++); return aw(b > 1 && au(f), b > 1 && as(a.slice(0, b - 1).concat({ value: " " === a[b - 2].type ? "*" : "" })).replace(Y, "$1"), e, b < d && ax(a.slice(b, d)), d < g && ax(a = a.slice(d)), d < g && as(a)) }
                    f.push(e)
                }
            return au(f)
        }
        return t.prototype = c.filters = c.pseudos, c.setFilters = new t, x = b.tokenize = function(g, k) { var e, d, h, f, a, i, j, l = S[g + " "]; if (l) return k ? 0 : l.slice(0); for (a = g, i = [], j = c.preFilter; a;) { for (f in (!e || (d = Z.exec(a))) && (d && (a = a.slice(d[0].length) || a), i.push(h = [])), e = !1, (d = _.exec(a)) && (e = d.shift(), h.push({ value: e, type: d[0].replace(Y, " ") }), a = a.slice(e.length)), c.filter)(d = D[f].exec(a)) && (!j[f] || (d = j[f](d))) && (e = d.shift(), h.push({ value: e, type: f, matches: d }), a = a.slice(e.length)); if (!e) break } return k ? a.length : a ? b.error(g) : S(g, i).slice(0) }, y = b.compile = function(d, e) {
            var h, p, j, q, f, g, k = [],
                l = [],
                a = T[d + " "];
            if (!a) {
                for (e || (e = x(d)), g = e.length; g--;)(a = ax(e[g]))[n] ? k.push(a) : l.push(a);
                (a = T(d, (h = l, j = (p = k).length > 0, q = h.length > 0, f = function(g, i, t, n, f) {
                    var a, r, k, l = 0,
                        d = "0",
                        s = g && [],
                        e = [],
                        u = G,
                        v = g || q && c.find.TAG("*", f),
                        w = P += null == u ? 1 : Math.random() || .1,
                        x = v.length;
                    for (f && (G = i === I || i || f); d !== x && null != (a = v[d]); d++) {
                        if (q && a) {
                            for (r = 0, i || a.ownerDocument === I || (m(a), t = !K); k = h[r++];)
                                if (k(a, i || I, t)) { n.push(a); break }
                            f && (P = w)
                        }
                        j && ((a = !k && a) && l--, g && s.push(a))
                    }
                    if (l += d, j && d !== l) {
                        for (r = 0; k = p[r++];) k(s, e, i, t);
                        if (g) {
                            if (l > 0)
                                for (; d--;) s[d] || e[d] || (e[d] = V.call(n));
                            e = av(e)
                        }
                        o.apply(n, e), f && !g && e.length > 0 && l + p.length > 1 && b.uniqueSort(n)
                    }
                    return f && (P = w, G = u), s
                }, j ? i(f) : f))).selector = d
            }
            return a
        }, z = b.select = function(b, a, e, f) {
            var h, d, g, k, l, j = "function" == typeof b && b,
                i = !f && x(b = j.selector || b);
            if (e = e || [], 1 === i.length) {
                if ((d = i[0] = i[0].slice(0)).length > 2 && "ID" === (g = d[0]).type && 9 === a.nodeType && K && c.relative[d[1].type]) {
                    if (!(a = (c.find.ID(g.matches[0].replace(ai, aj), a) || [])[0])) return e;
                    j && (a = a.parentNode), b = b.slice(d.shift().value.length)
                }
                for (h = D.needsContext.test(b) ? 0 : d.length;
                    (h--) && (g = d[h], !c.relative[k = g.type]);)
                    if ((l = c.find[k]) && (f = l(g.matches[0].replace(ai, aj), ah.test(d[0].type) && ar(a.parentNode) || a))) { if (d.splice(h, 1), !(b = f.length && as(d))) return o.apply(e, f), e; break }
            }
            return (j || y(b, i))(f, a, !K, e, !a || ah.test(b) && ar(a.parentNode) || a), e
        }, h.sortStable = n.split("").sort(B).join("") === n, h.detectDuplicates = !!A, m(), h.sortDetached = j(function(a) { return 1 & a.compareDocumentPosition(I.createElement("fieldset")) }), j(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || l("type|href|height|width", function(b, a, c) { if (!c) return b.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2) }), h.attributes && j(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || l("value", function(a, c, b) { if (!b && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), j(function(a) { return null == a.getAttribute("disabled") }) || l(p, function(c, a, d) { var b; if (!d) return !0 === c[a] ? a.toLowerCase() : (b = c.getAttributeNode(a)) && b.specified ? b.value : null }), b
    }(d);
    a.find = h, a.expr = h.selectors, a.expr[":"] = a.expr.pseudos, a.uniqueSort = a.unique = h.uniqueSort, a.text = h.getText, a.isXMLDoc = h.isXML, a.contains = h.contains, a.escapeSelector = h.escape;
    var U = function(b, e, c) {
            for (var d = [], f = void 0 !== c;
                (b = b[e]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (f && a(b).is(c)) break;
                    d.push(b)
                }
            return d
        },
        V = function(a, c) { for (var b = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && b.push(a); return b },
        W = a.expr.match.needsContext;

    function y(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }
    var X = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function Y(b, c, d) { return v(c) ? a.grep(b, function(a, b) { return !!c.call(a, b, a) !== d }) : c.nodeType ? a.grep(b, function(a) { return a === c !== d }) : "string" != typeof c ? a.grep(b, function(a) { return N.call(c, a) > -1 !== d }) : a.filter(c, b, d) }
    a.filter = function(b, c, e) { var d = c[0]; return e && (b = ":not(" + b + ")"), 1 === c.length && 1 === d.nodeType ? a.find.matchesSelector(d, b) ? [d] : [] : a.find.matches(b, a.grep(c, function(a) { return 1 === a.nodeType })) }, a.fn.extend({
        find: function(d) {
            var b, c, e = this.length,
                f = this;
            if ("string" != typeof d) return this.pushStack(a(d).filter(function() {
                for (b = 0; b < e; b++)
                    if (a.contains(f[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < e; b++) a.find(d, f[b], c);
            return e > 1 ? a.uniqueSort(c) : c
        },
        filter: function(a) { return this.pushStack(Y(this, a || [], !1)) },
        not: function(a) { return this.pushStack(Y(this, a || [], !0)) },
        is: function(b) { return !!Y(this, "string" == typeof b && W.test(b) ? a(b) : b || [], !1).length }
    });
    var z, Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (a.fn.init = function(d, c, f) {
        var e, g;
        if (!d) return this;
        if (f = f || z, "string" == typeof d) {
            if (!(e = "<" === d[0] && ">" === d[d.length - 1] && d.length >= 3 ? [null, d, null] : Z.exec(d)) || !e[1] && c) return !c || c.jquery ? (c || f).find(d) : this.constructor(c).find(d);
            if (e[1]) {
                if (c = c instanceof a ? c[0] : c, a.merge(this, a.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : b, !0)), X.test(e[1]) && a.isPlainObject(c))
                    for (e in c) v(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                return this
            }
            return (g = b.getElementById(e[2])) && (this[0] = g, this.length = 1), this
        }
        return d.nodeType ? (this[0] = d, this.length = 1, this) : v(d) ? void 0 !== f.ready ? f.ready(d) : d(a) : a.makeArray(d, this)
    }).prototype = a.fn, z = a(b);
    var aa = /^(?:parents|prev(?:Until|All))/,
        ab = { children: !0, contents: !0, next: !0, prev: !0 };

    function ac(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    a.fn.extend({
        has: function(b) {
            var c = a(b, this),
                d = c.length;
            return this.filter(function() {
                for (var b = 0; b < d; b++)
                    if (a.contains(this, c[b])) return !0
            })
        },
        closest: function(c, g) {
            var b, e = 0,
                h = this.length,
                d = [],
                f = "string" != typeof c && a(c);
            if (!W.test(c)) {
                for (; e < h; e++)
                    for (b = this[e]; b && b !== g; b = b.parentNode)
                        if (b.nodeType < 11 && (f ? f.index(b) > -1 : 1 === b.nodeType && a.find.matchesSelector(b, c))) { d.push(b); break }
            }
            return this.pushStack(d.length > 1 ? a.uniqueSort(d) : d)
        },
        index: function(b) { return b ? "string" == typeof b ? N.call(a(b), this[0]) : N.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(b, c) { return this.pushStack(a.uniqueSort(a.merge(this.get(), a(b, c)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    }), a.each({ parent: function(b) { var a = b.parentNode; return a && 11 !== a.nodeType ? a : null }, parents: function(a) { return U(a, "parentNode") }, parentsUntil: function(a, c, b) { return U(a, "parentNode", b) }, next: function(a) { return ac(a, "nextSibling") }, prev: function(a) { return ac(a, "previousSibling") }, nextAll: function(a) { return U(a, "nextSibling") }, prevAll: function(a) { return U(a, "previousSibling") }, nextUntil: function(a, c, b) { return U(a, "nextSibling", b) }, prevUntil: function(a, c, b) { return U(a, "previousSibling", b) }, siblings: function(a) { return V((a.parentNode || {}).firstChild, a) }, children: function(a) { return V(a.firstChild) }, contents: function(b) { return y(b, "iframe") ? b.contentDocument : (y(b, "template") && (b = b.content || b), a.merge([], b.childNodes)) } }, function(b, c) { a.fn[b] = function(f, e) { var d = a.map(this, c, f); return "Until" !== b.slice(-5) && (e = f), e && "string" == typeof e && (d = a.filter(e, d)), this.length > 1 && (ab[b] || a.uniqueSort(d), aa.test(b) && d.reverse()), this.pushStack(d) } });
    var ad = /[^\x20\t\r\n\f]+/g;

    function ae(a) { return a }

    function af(a) { throw a }

    function $(a, c, d, e) { var b; try { a && v(b = a.promise) ? b.call(a).done(c).fail(d) : a && v(b = a.then) ? b.call(a, c, d) : c.apply(void 0, [a].slice(e)) } catch (f) { d.apply(void 0, [f]) } }
    a.Callbacks = function(b) {
        b = "string" == typeof b ? (d = b, e = {}, a.each(d.match(ad) || [], function(b, a) { e[a] = !0 }), e) : a.extend({}, b);
        var d, e, f, g, h, i, j = [],
            k = [],
            l = -1,
            m = function() {
                for (i = i || b.once, h = f = !0; k.length; l = -1)
                    for (g = k.shift(); ++l < j.length;) !1 === j[l].apply(g[0], g[1]) && b.stopOnFalse && (l = j.length, g = !1);
                b.memory || (g = !1), f = !1, i && (j = g ? [] : "")
            },
            c = {
                add: function() { return j && (g && !f && (l = j.length - 1, k.push(g)), function e(d) { a.each(d, function(d, a) { v(a) ? b.unique && c.has(a) || j.push(a) : a && a.length && "string" !== x(a) && e(a) }) }(arguments), g && !f && m()), this },
                remove: function() {
                    return a.each(arguments, function(d, c) {
                        for (var b;
                            (b = a.inArray(c, j, b)) > -1;) j.splice(b, 1), b <= l && l--
                    }), this
                },
                has: function(b) { return b ? a.inArray(b, j) > -1 : j.length > 0 },
                empty: function() { return j && (j = []), this },
                disable: function() { return i = k = [], j = g = "", this },
                disabled: function() { return !j },
                lock: function() { return i = k = [], g || f || (j = g = ""), this },
                locked: function() { return !!i },
                fireWith: function(b, a) { return i || (a = [b, (a = a || []).slice ? a.slice() : a], k.push(a), f || m()), this },
                fire: function() { return c.fireWith(this, arguments), this },
                fired: function() { return !!h }
            };
        return c
    }, a.extend({
        Deferred: function(c) {
            var e = [
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory"), 2],
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), 1, "rejected"]
                ],
                g = "pending",
                f = {
                    state: function() { return g },
                    always: function() { return b.done(arguments).fail(arguments), this },
                    catch: function(a) { return f.then(null, a) },
                    pipe: function() {
                        var c = arguments;
                        return a.Deferred(function(d) {
                            a.each(e, function(e, a) {
                                var f = v(c[a[4]]) && c[a[4]];
                                b[a[1]](function() {
                                    var b = f && f.apply(this, arguments);
                                    b && v(b.promise) ? b.promise().progress(d.notify).done(d.resolve).fail(d.reject) : d[a[0] + "With"](this, f ? [b] : arguments)
                                })
                            }), c = null
                        }).promise()
                    },
                    then: function(b, c, f) {
                        var g = 0;

                        function h(b, c, e, f) {
                            return function() {
                                var k = this,
                                    l = arguments,
                                    j = function() {
                                        var a, d;
                                        if (!(b < g)) {
                                            if ((a = e.apply(k, l)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                            v(d = a && ("object" == typeof a || "function" == typeof a) && a.then) ? f ? d.call(a, h(g, c, ae, f), h(g, c, af, f)) : (g++, d.call(a, h(g, c, ae, f), h(g, c, af, f), h(g, c, ae, c.notifyWith))) : (e !== ae && (k = void 0, l = [a]), (f || c.resolveWith)(k, l))
                                        }
                                    },
                                    i = f ? j : function() { try { j() } catch (d) { a.Deferred.exceptionHook && a.Deferred.exceptionHook(d, i.stackTrace), b + 1 >= g && (e !== af && (k = void 0, l = [d]), c.rejectWith(k, l)) } };
                                b ? i() : (a.Deferred.getStackHook && (i.stackTrace = a.Deferred.getStackHook()), d.setTimeout(i))
                            }
                        }
                        return a.Deferred(function(a) { e[0][3].add(h(0, a, v(f) ? f : ae, a.notifyWith)), e[1][3].add(h(0, a, v(b) ? b : ae)), e[2][3].add(h(0, a, v(c) ? c : af)) }).promise()
                    },
                    promise: function(b) { return null != b ? a.extend(b, f) : f }
                },
                b = {};
            return a.each(e, function(d, a) {
                var c = a[2],
                    h = a[5];
                f[a[1]] = c.add, h && c.add(function() { g = h }, e[3 - d][2].disable, e[3 - d][3].disable, e[0][2].lock, e[0][3].lock), c.add(a[3].fire), b[a[0]] = function() { return b[a[0] + "With"](this === b ? void 0 : this, arguments), this }, b[a[0] + "With"] = c.fireWith
            }), f.promise(b), c && c.call(b, b), b
        },
        when: function(g) {
            var d = arguments.length,
                b = d,
                h = Array(b),
                e = L.call(arguments),
                c = a.Deferred(),
                f = function(a) { return function(b) { h[a] = this, e[a] = arguments.length > 1 ? L.call(arguments) : b, --d || c.resolveWith(h, e) } };
            if (d <= 1 && ($(g, c.done(f(b)).resolve, c.reject, !d), "pending" === c.state() || v(e[b] && e[b].then))) return c.then();
            for (; b--;) $(e[b], f(b), c.reject);
            return c.promise()
        }
    });
    var ag = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    a.Deferred.exceptionHook = function(a, b) { d.console && d.console.warn && a && ag.test(a.name) && d.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b) }, a.readyException = function(a) { d.setTimeout(function() { throw a }) };
    var A = a.Deferred();

    function _() { b.removeEventListener("DOMContentLoaded", _), d.removeEventListener("load", _), a.ready() }
    a.fn.ready = function(b) { return A.then(b).catch(function(b) { a.readyException(b) }), this }, a.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(c) {
            (!0 === c ? --a.readyWait : a.isReady) || (a.isReady = !0, !0 !== c && --a.readyWait > 0 || A.resolveWith(b, [a]))
        }
    }), a.ready.then = A.then, "complete" !== b.readyState && ("loading" === b.readyState || b.documentElement.doScroll) ? (b.addEventListener("DOMContentLoaded", _), d.addEventListener("load", _)) : d.setTimeout(a.ready);
    var ah = function(c, b, e, f, h, j, g) {
            var d = 0,
                k = c.length,
                i = null == e;
            if ("object" === x(e))
                for (d in h = !0, e) ah(c, b, d, e[d], !0, j, g);
            else if (void 0 !== f && (h = !0, v(f) || (g = !0), i && (g ? (b.call(c, f), b = null) : (i = b, b = function(b, d, c) { return i.call(a(b), c) })), b))
                for (; d < k; d++) b(c[d], e, g ? f : f.call(c[d], d, b(c[d], e)));
            return h ? c : i ? b.call(c) : k ? b(c[0], e) : j
        },
        ai = /^-ms-/,
        aj = /-([a-z])/g;

    function ak(b, a) { return a.toUpperCase() }

    function B(a) { return a.replace(ai, "ms-").replace(aj, ak) }
    var al = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function i() { this.expando = a.expando + i.uid++ }
    i.uid = 1, i.prototype = {
        cache: function(a) { var b = a[this.expando]; return b || (b = {}, al(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
        set: function(d, a, e) {
            var b, c = this.cache(d);
            if ("string" == typeof a) c[B(a)] = e;
            else
                for (b in a) c[B(b)] = a[b];
            return c
        },
        get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][B(b)] },
        access: function(c, a, b) { return void 0 === a || a && "string" == typeof a && void 0 === b ? this.get(c, a) : (this.set(c, a, b), void 0 !== b ? b : a) },
        remove: function(c, b) {
            var e, d = c[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b)
                    for (e = (b = Array.isArray(b) ? b.map(B) : ((b = B(b)) in d) ? [b] : b.match(ad) || []).length; e--;) delete d[b[e]];
                (void 0 === b || a.isEmptyObject(d)) && (c.nodeType ? c[this.expando] = void 0 : delete c[this.expando])
            }
        },
        hasData: function(c) { var b = c[this.expando]; return void 0 !== b && !a.isEmptyObject(b) }
    };
    var am = new i,
        an = new i,
        ao = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ap = /[A-Z]/g;

    function aq(c, d, b) {
        var e, a;
        if (void 0 === b && 1 === c.nodeType) {
            if (e = "data-" + d.replace(ap, "-$&").toLowerCase(), "string" == typeof(b = c.getAttribute(e))) {
                try { b = (a = b, "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : ao.test(a) ? JSON.parse(a) : a)) } catch (f) {}
                an.set(c, d, b)
            } else b = void 0
        }
        return b
    }
    a.extend({ hasData: function(a) { return an.hasData(a) || am.hasData(a) }, data: function(a, b, c) { return an.access(a, b, c) }, removeData: function(a, b) { an.remove(a, b) }, _data: function(a, b, c) { return am.access(a, b, c) }, _removeData: function(a, b) { am.remove(a, b) } }), a.fn.extend({
        data: function(f, g) {
            var b, c, d, a = this[0],
                e = a && a.attributes;
            if (void 0 === f) {
                if (this.length && (d = an.get(a), 1 === a.nodeType && !am.get(a, "hasDataAttrs"))) {
                    for (b = e.length; b--;) e[b] && 0 === (c = e[b].name).indexOf("data-") && aq(a, c = B(c.slice(5)), d[c]);
                    am.set(a, "hasDataAttrs", !0)
                }
                return d
            }
            return "object" == typeof f ? this.each(function() { an.set(this, f) }) : ah(this, function(c) { var b; if (a && void 0 === c) { if (void 0 !== (b = an.get(a, f)) || void 0 !== (b = aq(a, f))) return b } else this.each(function() { an.set(this, f, c) }) }, null, g, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { an.remove(this, a) }) }
    }), a.extend({
        queue: function(e, c, d) { var b; if (e) return c = (c || "fx") + "queue", b = am.get(e, c), d && (!b || Array.isArray(d) ? b = am.access(e, c, a.makeArray(d)) : b.push(d)), b || [] },
        dequeue: function(f, b) {
            b = b || "fx";
            var c = a.queue(f, b),
                g = c.length,
                d = c.shift(),
                e = a._queueHooks(f, b),
                h = function() { a.dequeue(f, b) };
            "inprogress" === d && (d = c.shift(), g--), d && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(f, h, e)), !g && e && e.empty.fire()
        },
        _queueHooks: function(b, d) { var c = d + "queueHooks"; return am.get(b, c) || am.access(b, c, { empty: a.Callbacks("once memory").add(function() { am.remove(b, [d + "queue", c]) }) }) }
    }), a.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? a.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = a.queue(this, b, c);
                a._queueHooks(this, b), "fx" === b && "inprogress" !== d[0] && a.dequeue(this, b)
            })
        },
        dequeue: function(b) { return this.each(function() { a.dequeue(this, b) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(b, d) {
            var c, g = 1,
                h = a.Deferred(),
                i = this,
                e = this.length,
                f = function() {--g || h.resolveWith(i, [i]) };
            for ("string" != typeof b && (d = b, b = void 0), b = b || "fx"; e--;)(c = am.get(i[e], b + "queueHooks")) && c.empty && (g++, c.empty.add(f));
            return f(), h.promise(d)
        }
    });
    var o = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ar = new RegExp("^(?:([+-])=|)(" + o + ")([a-z%]*)$", "i"),
        C = ["Top", "Right", "Bottom", "Left"],
        as = function(b, c) { return "none" === (b = c || b).style.display || "" === b.style.display && a.contains(b.ownerDocument, b) && "none" === a.css(b, "display") },
        at = function(b, c, f, g) { var d, a, e = {}; for (a in c) e[a] = b.style[a], b.style[a] = c[a]; for (a in d = f.apply(b, g || []), c) b.style[a] = e[a]; return d };

    function au(h, e, c, f) {
        var i, j, k = 20,
            l = f ? function() { return f.cur() } : function() { return a.css(h, e, "") },
            g = l(),
            d = c && c[3] || (a.cssNumber[e] ? "" : "px"),
            b = (a.cssNumber[e] || "px" !== d && +g) && ar.exec(a.css(h, e));
        if (b && b[3] !== d) {
            for (g /= 2, d = d || b[3], b = +g || 1; k--;) a.style(h, e, b + d), (1 - j) * (1 - (j = l() / g || .5)) <= 0 && (k = 0), b /= j;
            b *= 2, a.style(h, e, b + d), c = c || []
        }
        return c && (b = +b || +g || 0, i = c[1] ? b + (c[1] + 1) * c[2] : +c[2], f && (f.unit = d, f.start = b, f.end = i)), i
    }
    var av = {};

    function aw(e) {
        var c, f = e.ownerDocument,
            d = e.nodeName,
            b = av[d];
        return b || (c = f.body.appendChild(f.createElement(d)), b = a.css(c, "display"), c.parentNode.removeChild(c), "none" === b && (b = "block"), av[d] = b, b)
    }

    function ax(d, g) { for (var e, b, c = [], a = 0, f = d.length; a < f; a++)(b = d[a]).style && (e = b.style.display, g ? ("none" === e && (c[a] = am.get(b, "display") || null, c[a] || (b.style.display = "")), "" === b.style.display && as(b) && (c[a] = aw(b))) : "none" !== e && (c[a] = "none", am.set(b, "display", e))); for (a = 0; a < f; a++) null != c[a] && (d[a].style.display = c[a]); return d }
    a.fn.extend({ show: function() { return ax(this, !0) }, hide: function() { return ax(this) }, toggle: function(b) { return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() { as(this) ? a(this).show() : a(this).hide() }) } });
    var ay = /^(?:checkbox|radio)$/i,
        az = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        aA = /^$|^module$|\/(?:java|ecma)script/i,
        e = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function aB(b, c) { var d; return d = void 0 !== b.getElementsByTagName ? b.getElementsByTagName(c || "*") : void 0 !== b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && y(b, c) ? a.merge([b], d) : d }

    function aC(b, c) { for (var a = 0, d = b.length; a < d; a++) am.set(b[a], "globalEval", !c || am.get(c[a], "globalEval")) }
    e.optgroup = e.option, e.tbody = e.tfoot = e.colgroup = e.caption = e.thead, e.th = e.td;
    var aD = /<|&#?\w+;/;

    function aE(k, j, l, m, n) {
        for (var b, c, g, o, h, d = j.createDocumentFragment(), i = [], f = 0, p = k.length; f < p; f++)
            if ((b = k[f]) || 0 === b) {
                if ("object" === x(b)) a.merge(i, b.nodeType ? [b] : b);
                else if (aD.test(b)) {
                    for (c = c || d.appendChild(j.createElement("div")), g = e[(az.exec(b) || ["", ""])[1].toLowerCase()] || e._default, c.innerHTML = g[1] + a.htmlPrefilter(b) + g[2], h = g[0]; h--;) c = c.lastChild;
                    a.merge(i, c.childNodes), (c = d.firstChild).textContent = ""
                } else i.push(j.createTextNode(b))
            }
        for (d.textContent = "", f = 0; b = i[f++];)
            if (m && a.inArray(b, m) > -1) n && n.push(b);
            else if (o = a.contains(b.ownerDocument, b), c = aB(d.appendChild(b), "script"), o && aC(c), l)
            for (h = 0; b = c[h++];) aA.test(b.type || "") && l.push(b);
        return d
    }
    a9 = b.createDocumentFragment().appendChild(b.createElement("div")), ba = b.createElement("input"), ba.setAttribute("type", "radio"), ba.setAttribute("checked", "checked"), ba.setAttribute("name", "t"), a9.appendChild(ba), c.checkClone = a9.cloneNode(!0).cloneNode(!0).lastChild.checked, a9.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!a9.cloneNode(!0).lastChild.defaultValue;
    var aF = b.documentElement,
        aG = /^key/,
        aH = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        aI = /^([^.]*)(?:\.(.+)|)/;

    function aJ() { return !0 }

    function k() { return !1 }

    function aK() { try { return b.activeElement } catch (a) {} }

    function aL(e, f, c, d, b, i) {
        var g, h;
        if ("object" == typeof f) { for (h in "string" != typeof c && (d = d || c, c = void 0), f) aL(e, h, c, d, f[h], i); return e }
        if (null == d && null == b ? (b = c, d = c = void 0) : null == b && ("string" == typeof c ? (b = d, d = void 0) : (b = d, d = c, c = void 0)), !1 === b) b = k;
        else if (!b) return e;
        return 1 === i && (g = b, (b = function(b) { return a().off(b), g.apply(this, arguments) }).guid = g.guid || (g.guid = a.guid++)), e.each(function() { a.event.add(this, f, b, d, c) })
    }
    a.event = {
        global: {},
        add: function(g, l, c, p, d) {
            var m, j, q, k, n, f, e, h, b, o, r, i = am.get(g);
            if (i)
                for (c.handler && (c = (m = c).handler, d = m.selector), d && a.find.matchesSelector(aF, d), c.guid || (c.guid = a.guid++), (k = i.events) || (k = i.events = {}), (j = i.handle) || (j = i.handle = function(b) { return a.event.triggered !== b.type ? a.event.dispatch.apply(g, arguments) : void 0 }), n = (l = (l || "").match(ad) || [""]).length; n--;) b = r = (q = aI.exec(l[n]) || [])[1], o = (q[2] || "").split(".").sort(), b && (e = a.event.special[b] || {}, b = (d ? e.delegateType : e.bindType) || b, e = a.event.special[b] || {}, f = a.extend({ type: b, origType: r, data: p, handler: c, guid: c.guid, selector: d, needsContext: d && a.expr.match.needsContext.test(d), namespace: o.join(".") }, m), (h = k[b]) || ((h = k[b] = []).delegateCount = 0, e.setup && !1 !== e.setup.call(g, p, o, j) || g.addEventListener && g.addEventListener(b, j)), e.add && (e.add.call(g, f), f.handler.guid || (f.handler.guid = c.guid)), d ? h.splice(h.delegateCount++, 0, f) : h.push(f), a.event.global[b] = !0)
        },
        remove: function(d, j, n, h, r) {
            var k, p, f, i, l, c, e, g, b, o, q, m = am.hasData(d) && am.get(d);
            if (m && (i = m.events)) {
                for (l = (j = (j || "").match(ad) || [""]).length; l--;)
                    if (b = q = (f = aI.exec(j[l]) || [])[1], o = (f[2] || "").split(".").sort(), b) {
                        for (e = a.event.special[b] || {}, g = i[b = (h ? e.delegateType : e.bindType) || b] || [], f = f[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), p = k = g.length; k--;) c = g[k], !r && q !== c.origType || n && n.guid !== c.guid || f && !f.test(c.namespace) || h && h !== c.selector && ("**" !== h || !c.selector) || (g.splice(k, 1), c.selector && g.delegateCount--, e.remove && e.remove.call(d, c));
                        p && !g.length && (e.teardown && !1 !== e.teardown.call(d, o, m.handle) || a.removeEvent(d, b, m.handle), delete i[b])
                    } else
                        for (b in i) a.event.remove(d, b + j[l], n, h, !0);
                a.isEmptyObject(i) && am.remove(d, "handle events")
            }
        },
        dispatch: function(k) {
            var c, h, i, e, d, j, b = a.event.fix(k),
                g = new Array(arguments.length),
                l = (am.get(this, "events") || {})[b.type] || [],
                f = a.event.special[b.type] || {};
            for (g[0] = b, c = 1; c < arguments.length; c++) g[c] = arguments[c];
            if (b.delegateTarget = this, !f.preDispatch || !1 !== f.preDispatch.call(this, b)) {
                for (j = a.event.handlers.call(this, b, l), c = 0;
                    (e = j[c++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = e.elem, h = 0;
                        (d = e.handlers[h++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(d.namespace) || (b.handleObj = d, b.data = d.data, void 0 !== (i = ((a.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, g)) && !1 === (b.result = i) && (b.preventDefault(), b.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(d, e) {
            var f, j, c, g, h, k = [],
                i = e.delegateCount,
                b = d.target;
            if (i && b.nodeType && !("click" === d.type && d.button >= 1)) {
                for (; b !== this; b = b.parentNode || this)
                    if (1 === b.nodeType && ("click" !== d.type || !0 !== b.disabled)) {
                        for (g = [], h = {}, f = 0; f < i; f++) void 0 === h[c = (j = e[f]).selector + " "] && (h[c] = j.needsContext ? a(c, this).index(b) > -1 : a.find(c, this, null, [b]).length), h[c] && g.push(j);
                        g.length && k.push({ elem: b, handlers: g })
                    }
            }
            return b = this, i < e.length && k.push({ elem: b, handlers: e.slice(i) }), k
        },
        addProp: function(b, c) { Object.defineProperty(a.Event.prototype, b, { enumerable: !0, configurable: !0, get: v(c) ? function() { if (this.originalEvent) return c(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[b] }, set: function(a) { Object.defineProperty(this, b, { enumerable: !0, configurable: !0, writable: !0, value: a }) } }) },
        fix: function(b) { return b[a.expando] ? b : new a.Event(b) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== aK() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === aK() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && y(this, "input")) return this.click(), !1 }, _default: function(a) { return y(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }, a.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, a.Event = function(b, c) {
        if (!(this instanceof a.Event)) return new a.Event(b, c);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? aJ : k, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && a.extend(this, c), this.timeStamp = b && b.timeStamp || Date.now(), this[a.expando] = !0
    }, a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aJ, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aJ, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aJ, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, a.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && aG.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && aH.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, a.event.addProp), a.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(c, b) {
        a.event.special[c] = {
            delegateType: b,
            bindType: b,
            handle: function(c) {
                var e, d = c.relatedTarget,
                    f = c.handleObj;
                return d && (d === this || a.contains(this, d)) || (c.type = f.origType, e = f.handler.apply(this, arguments), c.type = b), e
            }
        }
    }), a.fn.extend({ on: function(a, b, c, d) { return aL(this, a, b, c, d) }, one: function(a, b, c, d) { return aL(this, a, b, c, d, 1) }, off: function(b, d, e) { var c, f; if (b && b.preventDefault && b.handleObj) return c = b.handleObj, a(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler), this; if ("object" == typeof b) { for (f in b) this.off(f, d, b[f]); return this } return !1 !== d && "function" != typeof d || (e = d, d = void 0), !1 === e && (e = k), this.each(function() { a.event.remove(this, b, e, d) }) } });
    var aM = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        aN = /<script|<style|<link/i,
        aO = /checked\s*(?:[^=]|=\s*.checked.)/i,
        aP = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function aQ(b, c) { return y(b, "table") && y(11 !== c.nodeType ? c : c.firstChild, "tr") && a(b).children("tbody")[0] || b }

    function aR(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function aS(a) { return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a }

    function aT(b, c) {
        var d, i, e, g, h, j, k, f;
        if (1 === c.nodeType) {
            if (am.hasData(b) && (g = am.access(b), h = am.set(c, g), f = g.events))
                for (e in delete h.handle, h.events = {}, f)
                    for (d = 0, i = f[e].length; d < i; d++) a.event.add(c, e, f[e][d]);
            an.hasData(b) && (j = an.access(b), k = a.extend({}, j), an.set(c, k))
        }
    }

    function aU(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ay.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function aV(e, h, o, n) {
        h = M.apply([], h);
        var g, k, f, i, b, l, d = 0,
            j = e.length,
            p = j - 1,
            m = h[0],
            q = v(m);
        if (q || j > 1 && "string" == typeof m && !c.checkClone && aO.test(m)) return e.each(function(a) {
            var b = e.eq(a);
            q && (h[0] = m.call(this, a, b.html())), aV(b, h, o, n)
        });
        if (j && (k = (g = aE(h, e[0].ownerDocument, !1, e, n)).firstChild, 1 === g.childNodes.length && (g = k), k || n)) {
            for (i = (f = a.map(aB(g, "script"), aR)).length; d < j; d++) b = g, d !== p && (b = a.clone(b, !0, !0), i && a.merge(f, aB(b, "script"))), o.call(e[d], b, d);
            if (i)
                for (l = f[f.length - 1].ownerDocument, a.map(f, aS), d = 0; d < i; d++) b = f[d], aA.test(b.type || "") && !am.access(b, "globalEval") && a.contains(l, b) && (b.src && "module" !== (b.type || "").toLowerCase() ? a._evalUrl && a._evalUrl(b.src) : R(b.textContent.replace(aP, ""), l, b))
        }
        return e
    }

    function aW(c, d, e) { for (var b, g = d ? a.filter(d, c) : c, f = 0; null != (b = g[f]); f++) e || 1 !== b.nodeType || a.cleanData(aB(b)), b.parentNode && (e && a.contains(b.ownerDocument, b) && aC(aB(b, "script")), b.parentNode.removeChild(b)); return c }
    a.extend({
        htmlPrefilter: function(a) { return a.replace(aM, "<$1></$2>") },
        clone: function(b, i, j) {
            var d, h, f, e, g = b.cloneNode(!0),
                k = a.contains(b.ownerDocument, b);
            if (!(c.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || a.isXMLDoc(b)))
                for (e = aB(g), d = 0, h = (f = aB(b)).length; d < h; d++) aU(f[d], e[d]);
            if (i) {
                if (j)
                    for (f = f || aB(b), e = e || aB(g), d = 0, h = f.length; d < h; d++) aT(f[d], e[d]);
                else aT(b, g)
            }
            return (e = aB(g, "script")).length > 0 && aC(e, !k && aB(b, "script")), g
        },
        cleanData: function(f) {
            for (var c, b, d, g = a.event.special, e = 0; void 0 !== (b = f[e]); e++)
                if (al(b)) {
                    if (c = b[am.expando]) {
                        if (c.events)
                            for (d in c.events) g[d] ? a.event.remove(b, d) : a.removeEvent(b, d, c.handle);
                        b[am.expando] = void 0
                    }
                    b[an.expando] && (b[an.expando] = void 0)
                }
        }
    }), a.fn.extend({
        detach: function(a) { return aW(this, a, !0) },
        remove: function(a) { return aW(this, a) },
        text: function(b) { return ah(this, function(b) { return void 0 === b ? a.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b) }) }, null, b, arguments.length) },
        append: function() { return aV(this, arguments, function(a) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || aQ(this, a).appendChild(a) }) },
        prepend: function() {
            return aV(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = aQ(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return aV(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return aV(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() { for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (a.cleanData(aB(b, !1)), b.textContent = ""); return this },
        clone: function(b, c) { return b = null != b && b, c = null == c ? b : c, this.map(function() { return a.clone(this, b, c) }) },
        html: function(b) {
            return ah(this, function(b) {
                var c = this[0] || {},
                    d = 0,
                    f = this.length;
                if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof b && !aN.test(b) && !e[(az.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = a.htmlPrefilter(b);
                    try {
                        for (; d < f; d++) 1 === (c = this[d] || {}).nodeType && (a.cleanData(aB(c, !1)), c.innerHTML = b);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return aV(this, arguments, function(d) {
                var c = this.parentNode;
                0 > a.inArray(this, b) && (a.cleanData(aB(this)), c && c.replaceChild(d, this))
            }, b)
        }
    }), a.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(b, c) { a.fn[b] = function(h) { for (var d, e = [], f = a(h), g = f.length - 1, b = 0; b <= g; b++) d = b === g ? this : this.clone(!0), a(f[b])[c](d), s.apply(e, d.get()); return this.pushStack(e) } });
    var aX = new RegExp("^(" + o + ")(?!px)[a-z%]+$", "i"),
        aY = function(b) { var a = b.ownerDocument.defaultView; return a && a.opener || (a = d), a.getComputedStyle(b) },
        aZ = new RegExp(C.join("|"), "i");

    function a$(e, g, f) { var h, i, j, d, b = e.style; return (f = f || aY(e)) && ("" !== (d = f.getPropertyValue(g) || f[g]) || a.contains(e.ownerDocument, e) || (d = a.style(e, g)), !c.pixelBoxStyles() && aX.test(d) && aZ.test(g) && (h = b.width, i = b.minWidth, j = b.maxWidth, b.minWidth = b.maxWidth = b.width = d, d = f.width, b.width = h, b.minWidth = i, b.maxWidth = j)), void 0 !== d ? d + "" : d }

    function D(a, b) {
        return {
            get: function() {
                if (!a()) return (this.get = b).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function f() {
            if (e) {
                m.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", e.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", aF.appendChild(m).appendChild(e);
                var a = d.getComputedStyle(e);
                h = "1%" !== a.top, l = 12 === g(a.marginLeft), e.style.right = "60%", k = 36 === g(a.right), i = 36 === g(a.width), e.style.position = "absolute", j = 36 === e.offsetWidth || "absolute", aF.removeChild(m), e = null
            }
        }

        function g(a) { return Math.round(parseFloat(a)) }
        var h, i, j, k, l, m = b.createElement("div"),
            e = b.createElement("div");
        e.style && (e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === e.style.backgroundClip, a.extend(c, { boxSizingReliable: function() { return f(), i }, pixelBoxStyles: function() { return f(), k }, pixelPosition: function() { return f(), h }, reliableMarginLeft: function() { return f(), l }, scrollboxSize: function() { return f(), j } }))
    }();
    var a_ = /^(none|table(?!-c[ea]).+)/,
        a0 = /^--/,
        a1 = { position: "absolute", visibility: "hidden", display: "block" },
        a2 = { letterSpacing: "0", fontWeight: "400" },
        a3 = ["Webkit", "Moz", "ms"],
        a4 = b.createElement("div").style;

    function a5(b) {
        var c = a.cssProps[b];
        return c || (c = a.cssProps[b] = function(a) {
            if (a in a4) return a;
            for (var c = a[0].toUpperCase() + a.slice(1), b = a3.length; b--;)
                if ((a = a3[b] + c) in a4) return a
        }(b) || b), c
    }

    function a6(d, b, c) { var a = ar.exec(b); return a ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b }

    function a7(d, g, e, h, f, i) {
        var b = "width" === g ? 1 : 0,
            j = 0,
            c = 0;
        if (e === (h ? "border" : "content")) return 0;
        for (; b < 4; b += 2) "margin" === e && (c += a.css(d, e + C[b], !0, f)), h ? ("content" === e && (c -= a.css(d, "padding" + C[b], !0, f)), "margin" !== e && (c -= a.css(d, "border" + C[b] + "Width", !0, f))) : (c += a.css(d, "padding" + C[b], !0, f), "padding" !== e ? c += a.css(d, "border" + C[b] + "Width", !0, f) : j += a.css(d, "border" + C[b] + "Width", !0, f));
        return !h && i >= 0 && (c += Math.max(0, Math.ceil(d["offset" + g[0].toUpperCase() + g.slice(1)] - i - c - j - .5))), c
    }

    function a8(d, e, h) {
        var f = aY(d),
            b = a$(d, e, f),
            i = "border-box" === a.css(d, "boxSizing", !1, f),
            g = i;
        if (aX.test(b)) {
            if (!h) return b;
            b = "auto"
        }
        return g = g && (c.boxSizingReliable() || b === d.style[e]), "auto" !== b && (parseFloat(b) || "inline" !== a.css(d, "display", !1, f)) || (b = d["offset" + e[0].toUpperCase() + e.slice(1)], g = !0), (b = parseFloat(b) || 0) + a7(d, e, h || (i ? "border" : "content"), g, f, b) + "px"
    }

    function f(a, b, c, d, e) { return new f.prototype.init(a, b, c, d, e) }
    a.extend({
        cssHooks: { opacity: { get: function(b, c) { if (c) { var a = a$(b, "opacity"); return "" === a ? "1" : a } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, d, b, k) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var f, i, g, j = B(d),
                    l = a0.test(d),
                    h = e.style;
                if (l || (d = a5(j)), g = a.cssHooks[d] || a.cssHooks[j], void 0 === b) return g && "get" in g && void 0 !== (f = g.get(e, !1, k)) ? f : h[d];
                "string" == (i = typeof b) && (f = ar.exec(b)) && f[1] && (b = au(e, d, f), i = "number"), null != b && b == b && ("number" === i && (b += f && f[3] || (a.cssNumber[j] ? "" : "px")), c.clearCloneStyle || "" !== b || 0 !== d.indexOf("background") || (h[d] = "inherit"), g && "set" in g && void 0 === (b = g.set(e, b, k)) || (l ? h.setProperty(d, b) : h[d] = b))
            }
        },
        css: function(g, c, d, i) { var b, e, f, h = B(c); return a0.test(c) || (c = a5(h)), (f = a.cssHooks[c] || a.cssHooks[h]) && "get" in f && (b = f.get(g, !0, d)), void 0 === b && (b = a$(g, c, i)), "normal" === b && c in a2 && (b = a2[c]), "" === d || d ? (e = parseFloat(b), !0 === d || isFinite(e) ? e || 0 : b) : b }
    }), a.each(["height", "width"], function(d, b) {
        a.cssHooks[b] = {
            get: function(c, d, e) { if (d) return !a_.test(a.css(c, "display")) || c.getClientRects().length && c.getBoundingClientRect().width ? a8(c, b, e) : at(c, a1, function() { return a8(c, b, e) }) },
            set: function(d, f, h) {
                var i, e = aY(d),
                    j = "border-box" === a.css(d, "boxSizing", !1, e),
                    g = h && a7(d, b, h, j, e);
                return j && c.scrollboxSize() === e.position && (g -= Math.ceil(d["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(e[b]) - a7(d, b, "border", !1, e) - .5)), g && (i = ar.exec(f)) && "px" !== (i[3] || "px") && (d.style[b] = f, f = a.css(d, b)), a6(d, f, g)
            }
        }
    }), a.cssHooks.marginLeft = D(c.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(a$(a, "marginLeft")) || a.getBoundingClientRect().left - at(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), a.each({ margin: "", padding: "", border: "Width" }, function(b, c) { a.cssHooks[b + c] = { expand: function(d) { for (var a = 0, f = {}, e = "string" == typeof d ? d.split(" ") : [d]; a < 4; a++) f[b + C[a] + c] = e[a] || e[a - 2] || e[0]; return f } }, "margin" !== b && (a.cssHooks[b + c].set = a6) }), a.fn.extend({
        css: function(b, c) {
            return ah(this, function(c, b, e) {
                var f, g, h = {},
                    d = 0;
                if (Array.isArray(b)) { for (f = aY(c), g = b.length; d < g; d++) h[b[d]] = a.css(c, b[d], !1, f); return h }
                return void 0 !== e ? a.style(c, b, e) : a.css(c, b)
            }, b, c, arguments.length > 1)
        }
    }), a.Tween = f, f.prototype = { constructor: f, init: function(c, d, b, e, f, g) { this.elem = c, this.prop = b, this.easing = f || a.easing._default, this.options = d, this.start = this.now = this.cur(), this.end = e, this.unit = g || (a.cssNumber[b] ? "" : "px") }, cur: function() { var a = f.propHooks[this.prop]; return a && a.get ? a.get(this) : f.propHooks._default.get(this) }, run: function(b) { var c, d = f.propHooks[this.prop]; return this.options.duration ? this.pos = c = a.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : f.propHooks._default.set(this), this } }, f.prototype.init.prototype = f.prototype, f.propHooks = { _default: { get: function(b) { var c; return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = a.css(b.elem, b.prop, "")) && "auto" !== c ? c : 0 }, set: function(b) { a.fx.step[b.prop] ? a.fx.step[b.prop](b) : 1 === b.elem.nodeType && (null != b.elem.style[a.cssProps[b.prop]] || a.cssHooks[b.prop]) ? a.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now } } }, f.propHooks.scrollTop = f.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, a.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, a.fx = f.prototype.init, a.fx.step = {};
    var a9, ba, bb, bc, bd = /^(?:toggle|show|hide)$/,
        be = /queueHooks$/;

    function bf() { bc && (!1 === b.hidden && d.requestAnimationFrame ? d.requestAnimationFrame(bf) : d.setTimeout(bf, a.fx.interval), a.fx.tick()) }

    function bg() { return d.setTimeout(function() { bb = void 0 }), bb = Date.now() }

    function l(c, b) {
        var e, d = 0,
            a = { height: c };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) a["margin" + (e = C[d])] = a["padding" + e] = c;
        return b && (a.opacity = a.width = c), a
    }

    function bh(e, b, f) {
        for (var c, d = (E.tweeners[b] || []).concat(E.tweeners["*"]), a = 0, g = d.length; a < g; a++)
            if (c = d[a].call(f, b, e)) return c
    }

    function E(d, h, e) {
        var c, l, f = 0,
            i = E.prefilters.length,
            j = a.Deferred().always(function() { delete k.elem }),
            k = function() { if (l) return !1; for (var g = bb || bg(), a = Math.max(0, b.startTime + b.duration - g), c = 1 - (a / b.duration || 0), e = 0, f = b.tweens.length; e < f; e++) b.tweens[e].run(c); return j.notifyWith(d, [b, c, a]), c < 1 && f ? a : (f || j.notifyWith(d, [b, 1, 0]), j.resolveWith(d, [b]), !1) },
            b = j.promise({
                elem: d,
                props: a.extend({}, h),
                opts: a.extend(!0, { specialEasing: {}, easing: a.easing._default }, e),
                originalProperties: h,
                originalOptions: e,
                startTime: bb || bg(),
                duration: e.duration,
                tweens: [],
                createTween: function(c, f) { var e = a.Tween(d, b.opts, c, f, b.opts.specialEasing[c] || b.opts.easing); return b.tweens.push(e), e },
                stop: function(a) {
                    var c = 0,
                        e = a ? b.tweens.length : 0;
                    if (l) return this;
                    for (l = !0; c < e; c++) b.tweens[c].run(1);
                    return a ? (j.notifyWith(d, [b, 1, 0]), j.resolveWith(d, [b, a])) : j.rejectWith(d, [b, a]), this
                }
            }),
            g = b.props;
        for (function(d, g) {
                var b, e, f, c, h;
                for (b in d)
                    if (f = g[e = B(b)], c = d[b], Array.isArray(c) && (f = c[1], c = d[b] = c[0]), b !== e && (d[e] = c, delete d[b]), (h = a.cssHooks[e]) && ("expand" in h))
                        for (b in c = h.expand(c), delete d[e], c)(b in d) || (d[b] = c[b], g[b] = f);
                    else g[e] = f
            }(g, b.opts.specialEasing); f < i; f++)
            if (c = E.prefilters[f].call(b, d, g, b.opts)) return v(c.stop) && (a._queueHooks(b.elem, b.opts.queue).stop = c.stop.bind(c)), c;
        return a.map(g, bh, b), v(b.opts.start) && b.opts.start.call(d, b), b.progress(b.opts.progress).done(b.opts.done, b.opts.complete).fail(b.opts.fail).always(b.opts.always), a.fx.timer(a.extend(k, { elem: d, anim: b, queue: b.opts.queue })), b
    }
    a.Animation = a.extend(E, {
        tweeners: { "*": [function(b, c) { var a = this.createTween(b, c); return au(a.elem, b, ar.exec(c), a), a }] },
        tweener: function(a, d) { v(a) ? (d = a, a = ["*"]) : a = a.match(ad); for (var b, c = 0, e = a.length; c < e; c++) b = a[c], E.tweeners[b] = E.tweeners[b] || [], E.tweeners[b].unshift(d) },
        prefilters: [function(b, i, n) {
            var d, k, o, l, q, f, e, g, m = this,
                p = {},
                j = b.style,
                h = b.nodeType && as(b),
                c = am.get(b, "fxshow");
            for (d in n.queue || (null == (l = a._queueHooks(b, "fx")).unqueued && (l.unqueued = 0, q = l.empty.fire, l.empty.fire = function() { l.unqueued || q() }), l.unqueued++, m.always(function() { m.always(function() { l.unqueued--, a.queue(b, "fx").length || l.empty.fire() }) })), i)
                if (k = i[d], bd.test(k)) {
                    if (delete i[d], o = o || "toggle" === k, k === (h ? "hide" : "show")) {
                        if ("show" !== k || !c || void 0 === c[d]) continue;
                        h = !0
                    }
                    p[d] = c && c[d] || a.style(b, d)
                }
            if ((f = !a.isEmptyObject(i)) || !a.isEmptyObject(p))
                for (d in ("width" in i || "height" in i) && 1 === b.nodeType && (n.overflow = [j.overflow, j.overflowX, j.overflowY], null == (e = c && c.display) && (e = am.get(b, "display")), "none" === (g = a.css(b, "display")) && (e ? g = e : (ax([b], !0), e = b.style.display || e, g = a.css(b, "display"), ax([b]))), ("inline" === g || "inline-block" === g && null != e) && "none" === a.css(b, "float") && (f || (m.done(function() { j.display = e }), null == e && (e = "none" === (g = j.display) ? "" : g)), j.display = "inline-block")), n.overflow && (j.overflow = "hidden", m.always(function() { j.overflow = n.overflow[0], j.overflowX = n.overflow[1], j.overflowY = n.overflow[2] })), f = !1, p) f || (c ? "hidden" in c && (h = c.hidden) : c = am.access(b, "fxshow", { display: e }), o && (c.hidden = !h), h && ax([b], !0), m.done(function() { for (d in h || ax([b]), am.remove(b, "fxshow"), p) a.style(b, d, p[d]) })), f = bh(h ? c[d] : 0, d, m), d in c || (c[d] = f.start, h && (f.end = f.start, f.start = 0))
        }],
        prefilter: function(a, b) { b ? E.prefilters.unshift(a) : E.prefilters.push(a) }
    }), a.speed = function(c, d, e) { var b = c && "object" == typeof c ? a.extend({}, c) : { complete: e || !e && d || v(c) && c, duration: c, easing: e && d || d && !v(d) && d }; return a.fx.off ? b.duration = 0 : "number" != typeof b.duration && (b.duration in a.fx.speeds ? b.duration = a.fx.speeds[b.duration] : b.duration = a.fx.speeds._default), null != b.queue && !0 !== b.queue || (b.queue = "fx"), b.old = b.complete, b.complete = function() { v(b.old) && b.old.call(this), b.queue && a.dequeue(this, b.queue) }, b }, a.fn.extend({
        fadeTo: function(a, b, c, d) { return this.filter(as).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
        animate: function(d, e, f, g) {
            var h = a.isEmptyObject(d),
                c = a.speed(e, f, g),
                b = function() {
                    var b = E(this, a.extend({}, d), c);
                    (h || am.get(this, "finish")) && b.stop(!0)
                };
            return b.finish = b, h || !1 === c.queue ? this.each(b) : this.queue(c.queue, b)
        },
        stop: function(b, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var h = !0,
                    c = null != b && b + "queueHooks",
                    g = a.timers,
                    f = am.get(this);
                if (c) f[c] && f[c].stop && e(f[c]);
                else
                    for (c in f) f[c] && f[c].stop && be.test(c) && e(f[c]);
                for (c = g.length; c--;) g[c].elem !== this || null != b && g[c].queue !== b || (g[c].anim.stop(d), h = !1, g.splice(c, 1));
                !h && d || a.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, f = am.get(this),
                    d = f[b + "queue"],
                    g = f[b + "queueHooks"],
                    e = a.timers,
                    h = d ? d.length : 0;
                for (f.finish = !0, a.queue(this, b, []), g && g.stop && g.stop.call(this, !0), c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; c < h; c++) d[c] && d[c].finish && d[c].finish.call(this);
                delete f.finish
            })
        }
    }), a.each(["toggle", "show", "hide"], function(c, b) {
        var d = a.fn[b];
        a.fn[b] = function(a, c, e) { return null == a || "boolean" == typeof a ? d.apply(this, arguments) : this.animate(l(b, !0), a, c, e) }
    }), a.each({ slideDown: l("show"), slideUp: l("hide"), slideToggle: l("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(b, c) { a.fn[b] = function(a, b, d) { return this.animate(c, a, b, d) } }), a.timers = [], a.fx.tick = function() {
        var d, b = 0,
            c = a.timers;
        for (bb = Date.now(); b < c.length; b++)(d = c[b])() || c[b] !== d || c.splice(b--, 1);
        c.length || a.fx.stop(), bb = void 0
    }, a.fx.timer = function(b) { a.timers.push(b), a.fx.start() }, a.fx.interval = 13, a.fx.start = function() { bc || (bc = !0, bf()) }, a.fx.stop = function() { bc = null }, a.fx.speeds = { slow: 600, fast: 200, _default: 400 }, a.fn.delay = function(b, c) {
        return b = a.fx && a.fx.speeds[b] || b, c = c || "fx", this.queue(c, function(a, c) {
            var e = d.setTimeout(a, b);
            c.stop = function() { d.clearTimeout(e) }
        })
    }, bi = b.createElement("input"), bj = b.createElement("select").appendChild(b.createElement("option")), bi.type = "checkbox", c.checkOn = "" !== bi.value, c.optSelected = bj.selected, (bi = b.createElement("input")).value = "t", bi.type = "radio", c.radioValue = "t" === bi.value;
    var bi, bj, F, bk = a.expr.attrHandle;
    a.fn.extend({ attr: function(b, c) { return ah(this, a.attr, b, c, arguments.length > 1) }, removeAttr: function(b) { return this.each(function() { a.removeAttr(this, b) }) } }), a.extend({
        attr: function(b, c, e) { var f, d, g = b.nodeType; if (3 !== g && 8 !== g && 2 !== g) return void 0 === b.getAttribute ? a.prop(b, c, e) : (1 === g && a.isXMLDoc(b) || (d = a.attrHooks[c.toLowerCase()] || (a.expr.match.bool.test(c) ? F : void 0)), void 0 !== e ? null === e ? void a.removeAttr(b, c) : d && "set" in d && void 0 !== (f = d.set(b, e, c)) ? f : (b.setAttribute(c, e + ""), e) : d && "get" in d && null !== (f = d.get(b, c)) ? f : null == (f = a.find.attr(b, c)) ? void 0 : f) },
        attrHooks: { type: { set: function(a, b) { if (!c.radioValue && "radio" === b && y(a, "input")) { var d = a.value; return a.setAttribute("type", b), d && (a.value = d), b } } } },
        removeAttr: function(a, b) {
            var c, e = 0,
                d = b && b.match(ad);
            if (d && 1 === a.nodeType)
                for (; c = d[e++];) a.removeAttribute(c)
        }
    }), F = { set: function(c, d, b) { return !1 === d ? a.removeAttr(c, b) : c.setAttribute(b, b), b } }, a.each(a.expr.match.bool.source.match(/\w+/g), function(c, b) {
        var d = bk[b] || a.find.attr;
        bk[b] = function(g, c, e) { var b, f, a = c.toLowerCase(); return e || (f = bk[a], bk[a] = b, b = null != d(g, c, e) ? a : null, bk[a] = f), b }
    });
    var bl = /^(?:input|select|textarea|button)$/i,
        bm = /^(?:a|area)$/i;

    function bn(a) { return (a.match(ad) || []).join(" ") }

    function bo(a) { return a.getAttribute && a.getAttribute("class") || "" }

    function bp(a) { return Array.isArray(a) ? a : "string" == typeof a && a.match(ad) || [] }
    a.fn.extend({ prop: function(b, c) { return ah(this, a.prop, b, c, arguments.length > 1) }, removeProp: function(b) { return this.each(function() { delete this[a.propFix[b] || b] }) } }), a.extend({ prop: function(d, b, g) { var e, c, f = d.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && a.isXMLDoc(d) || (b = a.propFix[b] || b, c = a.propHooks[b]), void 0 !== g ? c && "set" in c && void 0 !== (e = c.set(d, g, b)) ? e : d[b] = g : c && "get" in c && null !== (e = c.get(d, b)) ? e : d[b] }, propHooks: { tabIndex: { get: function(b) { var c = a.find.attr(b, "tabindex"); return c ? parseInt(c, 10) : bl.test(b.nodeName) || bm.test(b.nodeName) && b.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), c.optSelected || (a.propHooks.selected = {
        get: function(b) { var a = b.parentNode; return a && a.parentNode && a.parentNode.selectedIndex, null },
        set: function(b) {
            var a = b.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex)
        }
    }), a.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { a.propFix[this.toLowerCase()] = this }), a.fn.extend({
        addClass: function(f) {
            var g, b, c, d, e, h, i, j = 0;
            if (v(f)) return this.each(function(b) { a(this).addClass(f.call(this, b, bo(this))) });
            if ((g = bp(f)).length) {
                for (; b = this[j++];)
                    if (d = bo(b), c = 1 === b.nodeType && " " + bn(d) + " ") {
                        for (h = 0; e = g[h++];) 0 > c.indexOf(" " + e + " ") && (c += e + " ");
                        d !== (i = bn(c)) && b.setAttribute("class", i)
                    }
            }
            return this
        },
        removeClass: function(f) {
            var g, c, b, d, e, h, i, j = 0;
            if (v(f)) return this.each(function(b) { a(this).removeClass(f.call(this, b, bo(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((g = bp(f)).length) {
                for (; c = this[j++];)
                    if (d = bo(c), b = 1 === c.nodeType && " " + bn(d) + " ") {
                        for (h = 0; e = g[h++];)
                            for (; b.indexOf(" " + e + " ") > -1;) b = b.replace(" " + e + " ", " ");
                        d !== (i = bn(b)) && c.setAttribute("class", i)
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                e = "string" === d || Array.isArray(b);
            return "boolean" == typeof c && e ? c ? this.addClass(b) : this.removeClass(b) : v(b) ? this.each(function(d) { a(this).toggleClass(b.call(this, d, bo(this), c), c) }) : this.each(function() {
                var c, g, f, h;
                if (e)
                    for (g = 0, f = a(this), h = bp(b); c = h[g++];) f.hasClass(c) ? f.removeClass(c) : f.addClass(c);
                else void 0 !== b && "boolean" !== d || ((c = bo(this)) && am.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : am.get(this, "__className__") || ""))
            })
        },
        hasClass: function(c) {
            var b, a, d = 0;
            for (b = " " + c + " "; a = this[d++];)
                if (1 === a.nodeType && (" " + bn(bo(a)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var bq = /\r/g;
    a.fn.extend({
        val: function(e) {
            var d, b, f, c = this[0];
            return arguments.length ? (f = v(e), this.each(function(c) {
                var b;
                1 === this.nodeType && (null == (b = f ? e.call(this, c, a(this).val()) : e) ? b = "" : "number" == typeof b ? b += "" : Array.isArray(b) && (b = a.map(b, function(a) { return null == a ? "" : a + "" })), (d = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()]) && "set" in d && void 0 !== d.set(this, b, "value") || (this.value = b))
            })) : c ? (d = a.valHooks[c.type] || a.valHooks[c.nodeName.toLowerCase()]) && "get" in d && void 0 !== (b = d.get(c, "value")) ? b : "string" == typeof(b = c.value) ? b.replace(bq, "") : null == b ? "" : b : void 0
        }
    }), a.extend({
        valHooks: {
            option: { get: function(b) { var c = a.find.attr(b, "value"); return null != c ? c : bn(a.text(b)) } },
            select: {
                get: function(f) {
                    var g, b, c, h = f.options,
                        d = f.selectedIndex,
                        e = "select-one" === f.type,
                        i = e ? null : [],
                        j = e ? d + 1 : h.length;
                    for (c = d < 0 ? j : e ? d : 0; c < j; c++)
                        if (((b = h[c]).selected || c === d) && !b.disabled && (!b.parentNode.disabled || !y(b.parentNode, "optgroup"))) {
                            if (g = a(b).val(), e) return g;
                            i.push(g)
                        }
                    return i
                },
                set: function(b, h) { for (var c, d, e = b.options, f = a.makeArray(h), g = e.length; g--;)((d = e[g]).selected = a.inArray(a.valHooks.option.get(d), f) > -1) && (c = !0); return c || (b.selectedIndex = -1), f }
            }
        }
    }), a.each(["radio", "checkbox"], function() { a.valHooks[this] = { set: function(b, c) { if (Array.isArray(c)) return b.checked = a.inArray(a(b).val(), c) > -1 } }, c.checkOn || (a.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }), c.focusin = "onfocusin" in d;
    var br = /^(?:focusinfocus|focusoutblur)$/,
        bs = function(a) { a.stopPropagation() };
    a.extend(a.event, {
        trigger: function(c, j, f, m) {
            var q, g, h, r, k, l, i, n, o = [f || b],
                e = t.call(c, "type") ? c.type : c,
                p = t.call(c, "namespace") ? c.namespace.split(".") : [];
            if (g = n = h = f = f || b, 3 !== f.nodeType && 8 !== f.nodeType && !br.test(e + a.event.triggered) && (e.indexOf(".") > -1 && (e = (p = e.split(".")).shift(), p.sort()), k = 0 > e.indexOf(":") && "on" + e, (c = c[a.expando] ? c : new a.Event(e, "object" == typeof c && c)).isTrigger = m ? 2 : 3, c.namespace = p.join("."), c.rnamespace = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = f), j = null == j ? [c] : a.makeArray(j, [c]), i = a.event.special[e] || {}, m || !i.trigger || !1 !== i.trigger.apply(f, j))) {
                if (!m && !i.noBubble && !w(f)) {
                    for (r = i.delegateType || e, br.test(r + e) || (g = g.parentNode); g; g = g.parentNode) o.push(g), h = g;
                    h === (f.ownerDocument || b) && o.push(h.defaultView || h.parentWindow || d)
                }
                for (q = 0;
                    (g = o[q++]) && !c.isPropagationStopped();) n = g, c.type = q > 1 ? r : i.bindType || e, (l = (am.get(g, "events") || {})[c.type] && am.get(g, "handle")) && l.apply(g, j), (l = k && g[k]) && l.apply && al(g) && (c.result = l.apply(g, j), !1 === c.result && c.preventDefault());
                return c.type = e, m || c.isDefaultPrevented() || i._default && !1 !== i._default.apply(o.pop(), j) || !al(f) || k && v(f[e]) && !w(f) && ((h = f[k]) && (f[k] = null), a.event.triggered = e, c.isPropagationStopped() && n.addEventListener(e, bs), f[e](), c.isPropagationStopped() && n.removeEventListener(e, bs), a.event.triggered = void 0, h && (f[k] = h)), c.result
            }
        },
        simulate: function(b, c, d) {
            var e = a.extend(new a.Event, d, { type: b, isSimulated: !0 });
            a.event.trigger(e, null, c)
        }
    }), a.fn.extend({ trigger: function(b, c) { return this.each(function() { a.event.trigger(b, c, this) }) }, triggerHandler: function(c, d) { var b = this[0]; if (b) return a.event.trigger(c, d, b, !0) } }), c.focusin || a.each({ focus: "focusin", blur: "focusout" }, function(c, b) {
        var d = function(c) { a.event.simulate(b, c.target, a.event.fix(c)) };
        a.event.special[b] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    e = am.access(a, b);
                e || a.addEventListener(c, d, !0), am.access(a, b, (e || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    e = am.access(a, b) - 1;
                e ? am.access(a, b, e) : (a.removeEventListener(c, d, !0), am.remove(a, b))
            }
        }
    });
    var m = d.location,
        bt = Date.now(),
        bu = /\?/;
    a.parseXML = function(c) { var b; if (!c || "string" != typeof c) return null; try { b = (new d.DOMParser).parseFromString(c, "text/xml") } catch (e) { b = void 0 } return b && !b.getElementsByTagName("parsererror").length || a.error("Invalid XML: " + c), b };
    var bv = /\[\]$/,
        bw = /\r?\n/g,
        bx = /^(?:submit|button|image|reset|file)$/i,
        by = /^(?:input|select|textarea|keygen)/i;

    function bz(d, b, e, f) {
        var c;
        if (Array.isArray(b)) a.each(b, function(b, a) { e || bv.test(d) ? f(d, a) : bz(d + "[" + ("object" == typeof a && null != a ? b : "") + "]", a, e, f) });
        else if (e || "object" !== x(b)) f(d, b);
        else
            for (c in b) bz(d + "[" + c + "]", b[c], e, f)
    }
    a.param = function(b, d) {
        var c, e = [],
            f = function(c, a) {
                var b = v(a) ? a() : a;
                e[e.length] = encodeURIComponent(c) + "=" + encodeURIComponent(null == b ? "" : b)
            };
        if (Array.isArray(b) || b.jquery && !a.isPlainObject(b)) a.each(b, function() { f(this.name, this.value) });
        else
            for (c in b) bz(c, b[c], d, f);
        return e.join("&")
    }, a.fn.extend({ serialize: function() { return a.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var b = a.prop(this, "elements"); return b ? a.makeArray(b) : this }).filter(function() { var b = this.type; return this.name && !a(this).is(":disabled") && by.test(this.nodeName) && !bx.test(b) && (this.checked || !ay.test(b)) }).map(function(d, c) { var b = a(this).val(); return null == b ? null : Array.isArray(b) ? a.map(b, function(a) { return { name: c.name, value: a.replace(bw, "\r\n") } }) : { name: c.name, value: b.replace(bw, "\r\n") } }).get() } });
    var bA = /%20/g,
        bB = /#.*$/,
        bC = /([?&])_=[^&]*/,
        bD = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        bE = /^(?:GET|HEAD)$/,
        bF = /^\/\//,
        G = {},
        H = {},
        I = "*/".concat("*"),
        J = b.createElement("a");

    function p(a) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var b, e = 0,
                f = c.toLowerCase().match(ad) || [];
            if (v(d))
                for (; b = f[e++];) "+" === b[0] ? (a[b = b.slice(1) || "*"] = a[b] || []).unshift(d) : (a[b] = a[b] || []).push(d)
        }
    }

    function bG(c, d, f, g) {
        var e = {},
            h = c === H;

        function b(i) { var j; return e[i] = !0, a.each(c[i] || [], function(i, c) { var a = c(d, f, g); return "string" != typeof a || h || e[a] ? h ? !(j = a) : void 0 : (d.dataTypes.unshift(a), b(a), !1) }), j }
        return b(d.dataTypes[0]) || !e["*"] && b("*")
    }

    function bH(d, e) { var b, c, f = a.ajaxSettings.flatOptions || {}; for (b in e) void 0 !== e[b] && ((f[b] ? d : c || (c = {}))[b] = e[b]); return c && a.extend(!0, d, c), d }
    J.href = m.href, a.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: m.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(m.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": I, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": a.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(b, c) { return c ? bH(bH(b, a.ajaxSettings), c) : bH(a.ajaxSettings, b) },
        ajaxPrefilter: p(G),
        ajaxTransport: p(H),
        ajax: function(j, g) {
            "object" == typeof j && (g = j, j = void 0), g = g || {};
            var o, f, x, y, r, h, i, p, n, k, c = a.ajaxSetup({}, g),
                l = c.context || c,
                s = c.context && (l.nodeType || l.jquery) ? a(l) : a.event,
                t = a.Deferred(),
                u = a.Callbacks("once memory"),
                z = c.statusCode || {},
                v = {},
                A = {},
                w = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var a;
                        if (i) {
                            if (!y)
                                for (y = {}; a = bD.exec(x);) y[a[1].toLowerCase()] = a[2];
                            a = y[b.toLowerCase()]
                        }
                        return null == a ? null : a
                    },
                    getAllResponseHeaders: function() { return i ? x : null },
                    setRequestHeader: function(a, b) { return null == i && (v[a = A[a.toLowerCase()] = A[a.toLowerCase()] || a] = b), this },
                    overrideMimeType: function(a) { return null == i && (c.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (i) e.always(a[e.status]);
                            else
                                for (b in a) z[b] = [z[b], a[b]]
                        }
                        return this
                    },
                    abort: function(b) { var a = b || w; return o && o.abort(a), C(0, a), this }
                };
            if (t.promise(e), c.url = ((j || c.url || m.href) + "").replace(bF, m.protocol + "//"), c.type = g.method || g.type || c.method || c.type, c.dataTypes = (c.dataType || "*").toLowerCase().match(ad) || [""], null == c.crossDomain) { h = b.createElement("a"); try { h.href = c.url, h.href = h.href, c.crossDomain = J.protocol + "//" + J.host != h.protocol + "//" + h.host } catch (B) { c.crossDomain = !0 } }
            if (c.data && c.processData && "string" != typeof c.data && (c.data = a.param(c.data, c.traditional)), bG(G, c, g, e), i) return e;
            for (n in (p = a.event && c.global) && 0 == a.active++ && a.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !bE.test(c.type), f = c.url.replace(bB, ""), c.hasContent ? c.data && c.processData && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && (c.data = c.data.replace(bA, "+")) : (k = c.url.slice(f.length), c.data && (c.processData || "string" == typeof c.data) && (f += (bu.test(f) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (f = f.replace(bC, "$1"), k = (bu.test(f) ? "&" : "?") + "_=" + bt++ + k), c.url = f + k), c.ifModified && (a.lastModified[f] && e.setRequestHeader("If-Modified-Since", a.lastModified[f]), a.etag[f] && e.setRequestHeader("If-None-Match", a.etag[f])), (c.data && c.hasContent && !1 !== c.contentType || g.contentType) && e.setRequestHeader("Content-Type", c.contentType), e.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + I + "; q=0.01" : "") : c.accepts["*"]), c.headers) e.setRequestHeader(n, c.headers[n]);
            if (c.beforeSend && (!1 === c.beforeSend.call(l, e, c) || i)) return e.abort();
            if (w = "abort", u.add(c.complete), e.done(c.success), e.fail(c.error), o = bG(H, c, g, e)) {
                if (e.readyState = 1, p && s.trigger("ajaxSend", [e, c]), i) return e;
                c.async && c.timeout > 0 && (r = d.setTimeout(function() { e.abort("timeout") }, c.timeout));
                try { i = !1, o.send(v, C) } catch (q) {
                    if (i) throw q;
                    C(-1, q)
                }
            } else C(-1, "No Transport");

            function C(b, q, v, w) {
                var h, n, k, j, m, g = q;
                i || (i = !0, r && d.clearTimeout(r), o = void 0, x = w || "", e.readyState = b > 0 ? 4 : 0, h = b >= 200 && b < 300 || 304 === b, v && (j = function(d, i, f) {
                    for (var e, b, c, g, h = d.contents, a = d.dataTypes;
                        "*" === a[0];) a.shift(), void 0 === e && (e = d.mimeType || i.getResponseHeader("Content-Type"));
                    if (e) {
                        for (b in h)
                            if (h[b] && h[b].test(e)) { a.unshift(b); break }
                    }
                    if (a[0] in f) c = a[0];
                    else {
                        for (b in f) {
                            if (!a[0] || d.converters[b + " " + a[0]]) { c = b; break }
                            g || (g = b)
                        }
                        c = c || g
                    }
                    if (c) return c !== a[0] && a.unshift(c), f[c]
                }(c, e, v)), j = function(c, d, j, k) {
                    var h, a, b, g, e, f = {},
                        i = c.dataTypes.slice();
                    if (i[1])
                        for (b in c.converters) f[b.toLowerCase()] = c.converters[b];
                    for (a = i.shift(); a;)
                        if (c.responseFields[a] && (j[c.responseFields[a]] = d), !e && k && c.dataFilter && (d = c.dataFilter(d, c.dataType)), e = a, a = i.shift()) {
                            if ("*" === a) a = e;
                            else if ("*" !== e && e !== a) {
                                if (!(b = f[e + " " + a] || f["* " + a])) {
                                    for (h in f)
                                        if ((g = h.split(" "))[1] === a && (b = f[e + " " + g[0]] || f["* " + g[0]])) {!0 === b ? b = f[h] : !0 !== f[h] && (a = g[0], i.unshift(g[1])); break }
                                }
                                if (!0 !== b) {
                                    if (b && c.throws) d = b(d);
                                    else try { d = b(d) } catch (l) { return { state: "parsererror", error: b ? l : "No conversion from " + e + " to " + a } }
                                }
                            }
                        }
                    return { state: "success", data: d }
                }(c, j, e, h), h ? (c.ifModified && ((m = e.getResponseHeader("Last-Modified")) && (a.lastModified[f] = m), (m = e.getResponseHeader("etag")) && (a.etag[f] = m)), 204 === b || "HEAD" === c.type ? g = "nocontent" : 304 === b ? g = "notmodified" : (g = j.state, n = j.data, h = !(k = j.error))) : (k = g, !b && g || (g = "error", b < 0 && (b = 0))), e.status = b, e.statusText = (q || g) + "", h ? t.resolveWith(l, [n, g, e]) : t.rejectWith(l, [e, g, k]), e.statusCode(z), z = void 0, p && s.trigger(h ? "ajaxSuccess" : "ajaxError", [e, c, h ? n : k]), u.fireWith(l, [e, g]), p && (s.trigger("ajaxComplete", [e, c]), --a.active || a.event.trigger("ajaxStop")))
            }
            return e
        },
        getJSON: function(b, c, d) { return a.get(b, c, d, "json") },
        getScript: function(b, c) { return a.get(b, void 0, c, "script") }
    }), a.each(["get", "post"], function(c, b) { a[b] = function(d, c, e, f) { return v(c) && (f = f || e, e = c, c = void 0), a.ajax(a.extend({ url: d, type: b, dataType: f, data: c, success: e }, a.isPlainObject(d) && d)) } }), a._evalUrl = function(b) { return a.ajax({ url: b, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, a.fn.extend({
        wrapAll: function(b) { var c; return this[0] && (v(b) && (b = b.call(this[0])), c = a(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() { for (var a = this; a.firstElementChild;) a = a.firstElementChild; return a }).append(this)), this },
        wrapInner: function(b) {
            return v(b) ? this.each(function(c) { a(this).wrapInner(b.call(this, c)) }) : this.each(function() {
                var c = a(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) { var c = v(b); return this.each(function(d) { a(this).wrapAll(c ? b.call(this, d) : b) }) },
        unwrap: function(b) { return this.parent(b).not("body").each(function() { a(this).replaceWith(this.childNodes) }), this }
    }), a.expr.pseudos.hidden = function(b) { return !a.expr.pseudos.visible(b) }, a.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, a.ajaxSettings.xhr = function() { try { return new d.XMLHttpRequest } catch (a) {} };
    var bI = { 0: 200, 1223: 204 },
        j = a.ajaxSettings.xhr();
    c.cors = !!j && "withCredentials" in j, c.ajax = j = !!j, a.ajaxTransport(function(a) {
        var b, e;
        if (c.cors || j && !a.crossDomain) return {
            send: function(g, i) {
                var f, c = a.xhr();
                if (c.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (f in a.xhrFields) c[f] = a.xhrFields[f];
                for (f in a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType), a.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest"), g) c.setRequestHeader(f, g[f]);
                b = function(a) { return function() { b && (b = e = c.onload = c.onerror = c.onabort = c.ontimeout = c.onreadystatechange = null, "abort" === a ? c.abort() : "error" === a ? "number" != typeof c.status ? i(0, "error") : i(c.status, c.statusText) : i(bI[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? { binary: c.response } : { text: c.responseText }, c.getAllResponseHeaders())) } }, c.onload = b(), e = c.onerror = c.ontimeout = b("error"), void 0 !== c.onabort ? c.onabort = e : c.onreadystatechange = function() { 4 === c.readyState && d.setTimeout(function() { b && e() }) }, b = b("abort");
                try { c.send(a.hasContent && a.data || null) } catch (h) { if (b) throw h }
            },
            abort: function() { b && b() }
        }
    }), a.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), a.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(b) { return a.globalEval(b), b } } }), a.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), a.ajaxTransport("script", function(c) { if (c.crossDomain) { var d, e; return { send: function(f, g) { d = a("<script>").prop({ charset: c.scriptCharset, src: c.url }).on("load error", e = function(a) { d.remove(), e = null, a && g("error" === a.type ? 404 : 200, a.type) }), b.head.appendChild(d[0]) }, abort: function() { e && e() } } } });
    var q, bJ = [],
        bK = /(=)\?(?=&|$)|\?\?/;
    a.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var b = bJ.pop() || a.expando + "_" + bt++; return this[b] = !0, b } }), a.ajaxPrefilter("json jsonp", function(b, h, f) { var c, g, i, e = !1 !== b.jsonp && (bK.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && bK.test(b.data) && "data"); if (e || "jsonp" === b.dataTypes[0]) return c = b.jsonpCallback = v(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, e ? b[e] = b[e].replace(bK, "$1" + c) : !1 !== b.jsonp && (b.url += (bu.test(b.url) ? "&" : "?") + b.jsonp + "=" + c), b.converters["script json"] = function() { return i || a.error(c + " was not called"), i[0] }, b.dataTypes[0] = "json", g = d[c], d[c] = function() { i = arguments }, f.always(function() { void 0 === g ? a(d).removeProp(c) : d[c] = g, b[c] && (b.jsonpCallback = h.jsonpCallback, bJ.push(c)), i && v(g) && g(i[0]), i = g = void 0 }), "script" }), c.createHTMLDocument = ((q = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === q.childNodes.length), a.parseHTML = function(g, d, h) { var i, e, f; return "string" != typeof g ? [] : ("boolean" == typeof d && (h = d, d = !1), d || (c.createHTMLDocument ? ((i = (d = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, d.head.appendChild(i)) : d = b), e = X.exec(g), f = !h && [], e ? [d.createElement(e[1])] : (e = aE([g], d, f), f && f.length && a(f).remove(), a.merge([], e.childNodes))) }, a.fn.load = function(c, b, e) {
        var g, f, i, h = this,
            d = c.indexOf(" ");
        return d > -1 && (g = bn(c.slice(d)), c = c.slice(0, d)), v(b) ? (e = b, b = void 0) : b && "object" == typeof b && (f = "POST"), h.length > 0 && a.ajax({ url: c, type: f || "GET", dataType: "html", data: b }).done(function(b) { i = arguments, h.html(g ? a("<div>").append(a.parseHTML(b)).find(g) : b) }).always(e && function(a, b) { h.each(function() { e.apply(this, i || [a.responseText, b, a]) }) }), this
    }, a.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(c, b) { a.fn[b] = function(a) { return this.on(b, a) } }), a.expr.pseudos.animated = function(b) { return a.grep(a.timers, function(a) { return b === a.elem }).length }, a.offset = {
        setOffset: function(c, b, m) {
            var l, f, g, h, d, i, j = a.css(c, "position"),
                k = a(c),
                e = {};
            "static" === j && (c.style.position = "relative"), d = k.offset(), g = a.css(c, "top"), i = a.css(c, "left"), ("absolute" === j || "fixed" === j) && (g + i).indexOf("auto") > -1 ? (h = (l = k.position()).top, f = l.left) : (h = parseFloat(g) || 0, f = parseFloat(i) || 0), v(b) && (b = b.call(c, m, a.extend({}, d))), null != b.top && (e.top = b.top - d.top + h), null != b.left && (e.left = b.left - d.left + f), "using" in b ? b.using.call(c, e) : k.css(e)
        }
    }, a.fn.extend({
        offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(b) { a.offset.setOffset(this, e, b) }); var c, d, b = this[0]; if (b) return b.getClientRects().length ? (c = b.getBoundingClientRect(), d = b.ownerDocument.defaultView, { top: c.top + d.pageYOffset, left: c.left + d.pageXOffset }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var b, d, e, c = this[0],
                    f = { top: 0, left: 0 };
                if ("fixed" === a.css(c, "position")) d = c.getBoundingClientRect();
                else {
                    for (d = this.offset(), e = c.ownerDocument, b = c.offsetParent || e.documentElement; b && (b === e.body || b === e.documentElement) && "static" === a.css(b, "position");) b = b.parentNode;
                    b && b !== c && 1 === b.nodeType && ((f = a(b).offset()).top += a.css(b, "borderTopWidth", !0), f.left += a.css(b, "borderLeftWidth", !0))
                }
                return { top: d.top - f.top - a.css(c, "marginTop", !0), left: d.left - f.left - a.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var b = this.offsetParent; b && "static" === a.css(b, "position");) b = b.offsetParent; return b || aF }) }
    }), a.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b, c) {
        var d = "pageYOffset" === c;
        a.fn[b] = function(a) {
            return ah(this, function(b, f, e) {
                var a;
                if (w(b) ? a = b : 9 === b.nodeType && (a = b.defaultView), void 0 === e) return a ? a[c] : b[f];
                a ? a.scrollTo(d ? a.pageXOffset : e, d ? e : a.pageYOffset) : b[f] = e
            }, b, a, arguments.length)
        }
    }), a.each(["top", "left"], function(d, b) { a.cssHooks[b] = D(c.pixelPosition, function(d, c) { if (c) return c = a$(d, b), aX.test(c) ? a(d).position()[b] + "px" : c }) }), a.each({ Height: "height", Width: "width" }, function(b, c) {
        a.each({ padding: "inner" + b, content: c, "": "outer" + b }, function(e, d) {
            a.fn[d] = function(f, h) {
                var g = arguments.length && (e || "boolean" != typeof f),
                    i = e || (!0 === f || !0 === h ? "margin" : "border");
                return ah(this, function(c, f, g) { var e; return w(c) ? 0 === d.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (e = c.documentElement, Math.max(c.body["scroll" + b], e["scroll" + b], c.body["offset" + b], e["offset" + b], e["client" + b])) : void 0 === g ? a.css(c, f, i) : a.style(c, f, g, i) }, c, g ? f : void 0, g)
            }
        })
    }), a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(c, b) { a.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), a.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), a.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), a.proxy = function(b, c) { var d, f, e; if ("string" == typeof c && (d = b[c], c = b, b = d), v(b)) return f = L.call(arguments, 2), (e = function() { return b.apply(c || this, f.concat(L.call(arguments))) }).guid = b.guid = b.guid || a.guid++, e }, a.holdReady = function(b) { b ? a.readyWait++ : a.ready(!0) }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = y, a.isFunction = v, a.isWindow = w, a.camelCase = B, a.type = x, a.now = Date.now, a.isNumeric = function(b) { var c = a.type(b); return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return a });
    var bL = d.jQuery,
        bM = d.$;
    return a.noConflict = function(b) { return d.$ === a && (d.$ = bM), b && d.jQuery === a && (d.jQuery = bL), a }, r || (d.jQuery = d.$ = a), a
})