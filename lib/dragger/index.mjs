var st = (r, t, e) => new Promise((s, i) => {
  var o = (a) => {
    try {
      h(e.next(a));
    } catch (l) {
      i(l);
    }
  }, n = (a) => {
    try {
      h(e.throw(a));
    } catch (l) {
      i(l);
    }
  }, h = (a) => a.done ? s(a.value) : Promise.resolve(a.value).then(o, n);
  h((e = e.apply(r, t)).next());
});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis, Q = W.ShadowRoot && (W.ShadyCSS === void 0 || W.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Y = Symbol(), it = /* @__PURE__ */ new WeakMap();
let mt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Y) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Q && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = it.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && it.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const St = (r) => new mt(typeof r == "string" ? r : r + "", void 0, Y), xt = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((s, i, o) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o + 1], r[0]);
  return new mt(e, r, Y);
}, Ct = (r, t) => {
  if (Q) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = W.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, rt = Q ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return St(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Mt, defineProperty: Ot, getOwnPropertyDescriptor: Ut, getOwnPropertyNames: Tt, getOwnPropertySymbols: Dt, getPrototypeOf: Ht } = Object, g = globalThis, nt = g.trustedTypes, Rt = nt ? nt.emptyScript : "", K = g.reactiveElementPolyfillSupport, O = (r, t) => r, q = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Rt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch (s) {
        e = null;
      }
  }
  return e;
} }, tt = (r, t) => !Mt(r, t), ot = { attribute: !0, type: String, converter: q, reflect: !1, useDefault: !1, hasChanged: tt };
var ut, $t;
(ut = Symbol.metadata) != null || (Symbol.metadata = Symbol("metadata")), ($t = g.litPropertyMetadata) != null || (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let E = class extends HTMLElement {
  static addInitializer(t) {
    var e;
    this._$Ei(), ((e = this.l) != null ? e : this.l = []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = ot) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Ot(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    var n;
    const { get: i, set: o } = (n = Ut(this.prototype, t)) != null ? n : { get() {
      return this[e];
    }, set(h) {
      this[e] = h;
    } };
    return { get: i, set(h) {
      const a = i == null ? void 0 : i.call(this);
      o == null || o.call(this, h), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    var e;
    return (e = this.elementProperties.get(t)) != null ? e : ot;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties"))) return;
    const t = Ht(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, s = [...Tt(e), ...Dt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(rt(i));
    } else t !== void 0 && e.push(rt(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$EO) != null ? e : this._$EO = /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) == null || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) != null ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Ct(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t, e;
    (t = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostConnected) == null ? void 0 : i.call(s);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const n = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : q).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, n, h, a;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const l = s.getPropertyOptions(i), d = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((o = l.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? l.converter : q;
      this._$Em = i, this[i] = (a = (h = d.fromAttribute(e, l.type)) != null ? h : (n = this._$Ej) == null ? void 0 : n.get(i)) != null ? a : null, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var i, o;
    if (t !== void 0) {
      const n = this.constructor, h = this[t];
      if (s != null || (s = n.getPropertyOptions(t)), !(((i = s.hasChanged) != null ? i : tt)(h, e) || s.useDefault && s.reflect && h === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(n._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: o }, n) {
    var h, a, l;
    s && !((h = this._$Ej) != null ? h : this._$Ej = /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, (a = n != null ? n : e) != null ? a : this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && ((l = this._$Eq) != null ? l : this._$Eq = /* @__PURE__ */ new Set()).add(t));
  }
  _$EP() {
    return st(this, null, function* () {
      this.isUpdatePending = !0;
      try {
        yield this._$ES;
      } catch (e) {
        Promise.reject(e);
      }
      const t = this.scheduleUpdate();
      return t != null && (yield t), !this.isUpdatePending;
    });
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s, i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if ((s = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, h] of this._$Ep) this[n] = h;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [n, h] of o) {
        const { wrapped: a } = h, l = this[n];
        a !== !0 || this._$AL.has(n) || l === void 0 || this.C(n, void 0, h, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((o) => {
        var n;
        return (n = o.hostUpdate) == null ? void 0 : n.call(o);
      }), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
var ft;
E.elementStyles = [], E.shadowRootOptions = { mode: "open" }, E[O("elementProperties")] = /* @__PURE__ */ new Map(), E[O("finalized")] = /* @__PURE__ */ new Map(), K == null || K({ ReactiveElement: E }), ((ft = g.reactiveElementVersions) != null ? ft : g.reactiveElementVersions = []).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis, V = U.trustedTypes, at = V ? V.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, yt = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, At = "?" + f, kt = `<${At}>`, A = document, D = () => A.createComment(""), H = (r) => r === null || typeof r != "object" && typeof r != "function", et = Array.isArray, Nt = (r) => et(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Z = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ht = /-->/g, lt = />/g, v = RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, dt = /"/g, Et = /^(?:script|style|textarea|title)$/i, Wt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), zt = Wt(1), b = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), m = A.createTreeWalker(A, 129);
function bt(r, t) {
  if (!et(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return at !== void 0 ? at.createHTML(t) : t;
}
const Lt = (r, t) => {
  const e = r.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = S;
  for (let h = 0; h < e; h++) {
    const a = r[h];
    let l, d, c = -1, u = 0;
    for (; u < a.length && (n.lastIndex = u, d = n.exec(a), d !== null); ) u = n.lastIndex, n === S ? d[1] === "!--" ? n = ht : d[1] !== void 0 ? n = lt : d[2] !== void 0 ? (Et.test(d[2]) && (i = RegExp("</" + d[2], "g")), n = v) : d[3] !== void 0 && (n = v) : n === v ? d[0] === ">" ? (n = i != null ? i : S, c = -1) : d[1] === void 0 ? c = -2 : (c = n.lastIndex - d[2].length, l = d[1], n = d[3] === void 0 ? v : d[3] === '"' ? dt : ct) : n === dt || n === ct ? n = v : n === ht || n === lt ? n = S : (n = v, i = void 0);
    const $ = n === v && r[h + 1].startsWith("/>") ? " " : "";
    o += n === S ? a + kt : c >= 0 ? (s.push(l), a.slice(0, c) + yt + a.slice(c) + f + $) : a + f + (c === -2 ? h : $);
  }
  return [bt(r, o + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class R {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const h = t.length - 1, a = this.parts, [l, d] = Lt(t, e);
    if (this.el = R.createElement(l, s), m.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (i = m.nextNode()) !== null && a.length < h; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const c of i.getAttributeNames()) if (c.endsWith(yt)) {
          const u = d[n++], $ = i.getAttribute(c).split(f), N = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: o, name: N[2], strings: $, ctor: N[1] === "." ? Bt : N[1] === "?" ? It : N[1] === "@" ? qt : X }), i.removeAttribute(c);
        } else c.startsWith(f) && (a.push({ type: 6, index: o }), i.removeAttribute(c));
        if (Et.test(i.tagName)) {
          const c = i.textContent.split(f), u = c.length - 1;
          if (u > 0) {
            i.textContent = V ? V.emptyScript : "";
            for (let $ = 0; $ < u; $++) i.append(c[$], D()), m.nextNode(), a.push({ type: 2, index: ++o });
            i.append(c[u], D());
          }
        }
      } else if (i.nodeType === 8) if (i.data === At) a.push({ type: 2, index: o });
      else {
        let c = -1;
        for (; (c = i.data.indexOf(f, c + 1)) !== -1; ) a.push({ type: 7, index: o }), c += f.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function P(r, t, e = r, s) {
  var n, h, a;
  if (t === b) return t;
  let i = s !== void 0 ? (n = e._$Co) == null ? void 0 : n[s] : e._$Cl;
  const o = H(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((h = i == null ? void 0 : i._$AO) == null || h.call(i, !1), o === void 0 ? i = void 0 : (i = new o(r), i._$AT(r, e, s)), s !== void 0 ? ((a = e._$Co) != null ? a : e._$Co = [])[s] = i : e._$Cl = i), i !== void 0 && (t = P(r, i._$AS(r, t.values), i, s)), t;
}
class jt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var l;
    const { el: { content: e }, parts: s } = this._$AD, i = ((l = t == null ? void 0 : t.creationScope) != null ? l : A).importNode(e, !0);
    m.currentNode = i;
    let o = m.nextNode(), n = 0, h = 0, a = s[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let d;
        a.type === 2 ? d = new k(o, o.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (d = new Vt(o, this, t)), this._$AV.push(d), a = s[++h];
      }
      n !== (a == null ? void 0 : a.index) && (o = m.nextNode(), n++);
    }
    return m.currentNode = A, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class k {
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) == null ? void 0 : t._$AU) != null ? e : this._$Cv;
  }
  constructor(t, e, s, i) {
    var o;
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (o = i == null ? void 0 : i.isConnected) != null ? o : !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = P(this, t, e), H(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== b && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Nt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && H(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = R.createElement(bt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(e);
    else {
      const n = new jt(i, this), h = n.u(this.options);
      n.p(e), this.T(h), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = pt.get(t.strings);
    return e === void 0 && pt.set(t.strings, e = new R(t)), e;
  }
  k(t) {
    et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new k(this.O(D()), this.O(D()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class X {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = P(this, t, e, 0), n = !H(t) || t !== this._$AH && t !== b, n && (this._$AH = t);
    else {
      const h = t;
      let a, l;
      for (t = o[0], a = 0; a < o.length - 1; a++) l = P(this, h[s + a], e, a), l === b && (l = this._$AH[a]), n || (n = !H(l) || l !== this._$AH[a]), l === p ? t = p : t !== p && (t += (l != null ? l : "") + o[a + 1]), this._$AH[a] = l;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class Bt extends X {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class It extends X {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class qt extends X {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var n;
    if ((t = (n = P(this, t, e, 0)) != null ? n : p) === b) return;
    const s = this._$AH, i = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== p && (s === p || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) == null ? void 0 : e.host) != null ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Vt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const F = U.litHtmlPolyfillSupport;
var gt;
F == null || F(R, k), ((gt = U.litHtmlVersions) != null ? gt : U.litHtmlVersions = []).push("3.3.0");
const Xt = (r, t, e) => {
  var o, n;
  const s = (o = e == null ? void 0 : e.renderBefore) != null ? o : t;
  let i = s._$litPart$;
  if (i === void 0) {
    const h = (n = e == null ? void 0 : e.renderBefore) != null ? n : null;
    s._$litPart$ = i = new k(t.insertBefore(D(), h), h, void 0, e != null ? e : {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = globalThis;
class T extends E {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, s;
    const t = super.createRenderRoot();
    return (s = (e = this.renderOptions).renderBefore) != null || (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Xt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return b;
  }
}
var _t;
T._$litElement$ = !0, T.finalized = !0, (_t = y.litElementHydrateSupport) == null || _t.call(y, { LitElement: T });
const G = y.litElementPolyfillSupport;
G == null || G({ LitElement: T });
var vt;
((vt = y.litElementVersions) != null ? vt : y.litElementVersions = []).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jt = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: tt }, Zt = (r = Kt, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), s === "setter" && ((r = Object.create(r)).wrapped = !0), o.set(e.name, r), s === "accessor") {
    const { name: n } = e;
    return { set(h) {
      const a = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(n, a, r);
    }, init(h) {
      return h !== void 0 && this.C(n, void 0, r, h), h;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(h) {
      const a = this[n];
      t.call(this, h), this.requestUpdate(n, a, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function Ft(r) {
  return (t, e) => typeof e == "object" ? Zt(r, t, e) : ((s, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, s), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(r, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gt = (r, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(r, t, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function J(r, t) {
  return (e, s, i) => {
    const o = (n) => {
      var h, a;
      return (a = (h = n.renderRoot) == null ? void 0 : h.querySelector(r)) != null ? a : null;
    };
    return Gt(e, s, { get() {
      return o(this);
    } });
  };
}
const Qt = xt`
 .container {
    display: flex;
    height: 100%;
    width: 100%;
  }
  
  .container #leftPanel{
    width: 50%;
  }

  .container #rightPanel{
    display: block;
  }
  .container #divider{
    display: block;
  }

  .container.single-page #leftPanel{
    width: 100% !important;
  }

  .container.single-page #rightPanel{
    display: none;
  }

  .container.single-page #divider{
    display: none;
  }
  

  .panel {
    overflow: auto;
    box-sizing: border-box;
    height: 100%;
  }

  .left-panel {
    background-color: #f5f5f5;
    min-width: 100px;
     /* max-width: calc(100% - 100px); */
  }

  .right-panel {
    background-color: #e9e9e9;
    flex: 1;
  }

  .divider {
    width: 10px;
    background-color: #ddd;
    cursor: col-resize;
    position: relative;
    z-index: 10;
  }

  .divider:hover {
    background-color: #ccc;
  }

  .divider::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2px;
    right: 2px;
    background-color: #aaa;
  }
`;
var Yt = Object.defineProperty, te = Object.getOwnPropertyDescriptor, Pt = (r) => {
  throw TypeError(r);
}, w = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? te(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && Yt(t, e, i), i;
}, wt = (r, t, e) => t.has(r) || Pt("Cannot " + e), x = (r, t, e) => (wt(r, t, "read from private field"), e ? e.call(r) : t.get(r)), C = (r, t, e) => t.has(r) ? Pt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), M = (r, t, e, s) => (wt(r, t, "write to private field"), t.set(r, e), e), z, L, j, B, I;
let _ = class extends T {
  constructor() {
    super(...arguments), this.isDragging = !1, this.startX = 0, this.startWidth = 0, this.minWidth = 100, this.maxWidthPercent = 0.8, C(this, z, !1), C(this, L), C(this, j), C(this, B), C(this, I), this.getMaxWidth = () => this.singlePage ? this.container.clientWidth : this.container.clientWidth * this.maxWidthPercent, this._startDrag = (r) => {
      this.isDragging = !0, this.startX = r.clientX, this.startWidth = this.leftPanel.offsetWidth, r.preventDefault(), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", document.addEventListener("mousemove", this.onDrag), document.addEventListener("mouseup", this.stopDrag);
    }, this.onDrag = (r) => {
      if (!this.isDragging) return;
      const e = r.clientX - this.startX;
      let s = this.startWidth + e;
      s = Math.max(this.minWidth, s), s = Math.min(this.getMaxWidth(), s), this.leftPanel.style.width = s + "px", r.preventDefault();
    }, this.stopDrag = () => {
      this.isDragging && (this.isDragging = !1, document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", this.onDrag), document.removeEventListener("mouseup", this.stopDrag));
    }, this._handleResize = () => {
      this.leftPanel.offsetWidth > this.getMaxWidth() && (this.leftPanel.style.width = this.getMaxWidth() + "px");
    };
  }
  get singlePage() {
    return x(this, z);
  }
  set singlePage(r) {
    M(this, z, r);
  }
  get divider() {
    return x(this, L);
  }
  set divider(r) {
    M(this, L, r);
  }
  get leftPanel() {
    return x(this, j);
  }
  set leftPanel(r) {
    M(this, j, r);
  }
  get rightPanel() {
    return x(this, B);
  }
  set rightPanel(r) {
    M(this, B, r);
  }
  get container() {
    return x(this, I);
  }
  set container(r) {
    M(this, I, r);
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("resize", this._handleResize), setTimeout(() => {
      this.divider.addEventListener("mousedown", this._startDrag);
    }, 1e3);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.divider.removeEventListener("mousedown", this._startDrag), window.removeEventListener("resize", this._handleResize);
  }
  render() {
    return zt`
            <div class="container ${this.singlePage ? "single-page" : ""}">
                <div class="panel left-panel" id="leftPanel">
                <slot name="left"></slot>
                </div>
                <div class="divider" id="divider"></div>
                <div class="panel right-panel" id="rightPanel">
                <slot name="right"></slot>
                </div>
            </div>
            `;
  }
};
z = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
_.styles = [Qt];
w([
  Ft({ type: Boolean })
], _.prototype, "singlePage", 1);
w([
  J("#divider")
], _.prototype, "divider", 1);
w([
  J("#leftPanel")
], _.prototype, "leftPanel", 1);
w([
  J("#rightPanel")
], _.prototype, "rightPanel", 1);
w([
  J(".container")
], _.prototype, "container", 1);
_ = w([
  Jt("rxhui-dragger")
], _);
export {
  _ as RxhuiDragger
};
