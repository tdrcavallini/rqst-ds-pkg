import { QBtn as tc, QSelect as nc, QBadge as ac, QBanner as lc, QIcon as ic, QInput as oc, Quasar as rc } from "quasar";
import { createVuetify as uc } from "vuetify";
import { shallowRef as Y, Fragment as oe, reactive as ct, computed as h, watchEffect as ze, toRefs as Mn, capitalize as Ln, isVNode as sc, Comment as cc, unref as nt, warn as Oa, getCurrentInstance as dc, ref as j, provide as Ie, inject as he, defineComponent as Gt, camelize as nr, h as fn, onBeforeUnmount as Ke, watch as X, readonly as ii, onDeactivated as ar, onActivated as vc, onMounted as lt, onScopeDispose as Je, effectScope as oi, toRaw as Me, createVNode as u, TransitionGroup as ri, Transition as Ht, mergeProps as R, isRef as Tn, toRef as M, onBeforeMount as ui, nextTick as Ce, withDirectives as pe, resolveDirective as rt, vShow as Ct, onUpdated as fc, Text as mc, resolveDynamicComponent as gc, markRaw as hc, Teleport as yc, cloneVNode as bc, createTextVNode as St, onUnmounted as Sc, onBeforeUpdate as kc, withModifiers as io, toDisplayString as en, vModelText as Cc, resolveComponent as Wt, render as lr, openBlock as dt, createBlock as On, normalizeClass as Fn, withCtx as bt, renderSlot as vt, createSlots as si, createElementBlock as An, renderList as wc, normalizeStyle as Vc, createCommentVNode as hl, createElementVNode as yl } from "vue";
function $(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...o,
      default: t[l]
    } : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const J = $({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Ae = typeof window < "u", ci = Ae && "IntersectionObserver" in window, oo = Ae && "EyeDropper" in window;
function ro(e, n, t) {
  xc(e, n), n.set(e, t);
}
function xc(e, n) {
  if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Pc(e, n, t) {
  return e.set(ir(e, n), t), t;
}
function Qt(e, n) {
  return e.get(ir(e, n));
}
function ir(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function or(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function It(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => It(e[a], n[a]));
}
function Yn(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), or(e, n.split("."), t));
}
function Ne(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return Yn(e, n, t);
  if (Array.isArray(n)) return or(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function Nt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function K(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function di(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function uo(e) {
  let n;
  return e !== null && typeof e == "object" && ((n = Object.getPrototypeOf(e)) === Object.prototype || n === null);
}
function vi(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const so = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), _l = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function rr(e) {
  return Object.keys(e);
}
function Zt(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function fi(e, n) {
  const t = {}, a = new Set(Object.keys(e));
  for (const l of n)
    a.has(l) && (t[l] = e[l]);
  return t;
}
function Bl(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(t != null && t.some((o) => o === i)) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Oe(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
function Fa(e, n) {
  const t = {};
  return n.forEach((a) => t[a] = e[a]), t;
}
const ur = /^on[^a-z]/, Ra = (e) => ur.test(e), Ic = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], _c = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function Bc(e) {
  return e.isComposing && _c.includes(e.key);
}
function Ut(e) {
  const [n, t] = Bl(e, [ur]), a = Oe(n, Ic), [l, i] = Bl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function Be(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function pc(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), nt(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function Le(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function co(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function vo(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function Ac(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function fo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function At() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (uo(i) && uo(o)) {
      a[l] = At(i, o, t);
      continue;
    }
    if (t && Array.isArray(i) && Array.isArray(o)) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function sr(e) {
  return e.map((n) => n.type === oe ? sr(n.children) : n).flat();
}
function tn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (tn.cache.has(e)) return tn.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return tn.cache.set(e, n), n;
}
tn.cache = /* @__PURE__ */ new Map();
function Bn(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => Bn(e, t)).flat(1);
  if (n.suspense)
    return Bn(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => Bn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Bn(e, n.component.subTree).flat(1);
  }
  return [];
}
var Sa = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap();
class Tc {
  constructor(n) {
    ro(this, Sa, []), ro(this, Pn, 0), this.size = n;
  }
  push(n) {
    Qt(Sa, this)[Qt(Pn, this)] = n, Pc(Pn, this, (Qt(Pn, this) + 1) % this.size);
  }
  values() {
    return Qt(Sa, this).slice(Qt(Pn, this)).concat(Qt(Sa, this).slice(0, Qt(Pn, this)));
  }
}
function $c(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function mi(e) {
  const n = ct({}), t = h(e);
  return ze(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), Mn(n);
}
function Ba(e, n) {
  return e.includes(n);
}
function cr(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ge = () => [Function, Array];
function mo(e, n) {
  return n = "on" + Ln(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function gi(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function qn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function dr(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function nn(e, n) {
  var a, l, i, o;
  const t = qn(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const r = dr(t, n);
    r ? r.focus() : nn(e, n === "next" ? "first" : "last");
  }
}
function ka(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function vr() {
}
function $n(e, n) {
  if (!(Ae && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function Na(e) {
  return e.some((n) => sc(n) ? n.type === cc ? !1 : n.type !== oe || Na(n.children) : !0) ? e : null;
}
function Ec(e, n) {
  if (!Ae || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function Dc(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return t >= i && t <= r && a >= o && a <= s;
}
function pa() {
  const e = Y(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => vi(e.value)
  }), n;
}
function Aa(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
const fr = ["top", "bottom"], Mc = ["start", "end", "left", "right"];
function pl(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = Ba(fr, t) ? "start" : Ba(Mc, t) ? "top" : "center"), {
    side: Al(t, n),
    align: Al(a, n)
  };
}
function Al(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function bl(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Sl(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function go(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function ho(e) {
  return Ba(fr, e.side) ? "y" : "x";
}
class an {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function yo(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function mr(e) {
  return Array.isArray(e) ? new an({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function hi(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], s = +l[5];
    else
      return new an(n);
    const c = t.transformOrigin, d = n.x - r - (1 - i) * parseFloat(c), v = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = i ? n.width / i : e.offsetWidth + 1, m = o ? n.height / o : e.offsetHeight + 1;
    return new an({
      x: d,
      y: v,
      width: f,
      height: m
    });
  } else
    return new an(n);
}
function Jt(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Pa = /* @__PURE__ */ new WeakMap();
function Lc(e, n) {
  Object.keys(n).forEach((t) => {
    if (Ra(t)) {
      const a = cr(t), l = Pa.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), Pa.has(e) || Pa.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function Oc(e, n) {
  Object.keys(n).forEach((t) => {
    if (Ra(t)) {
      const a = cr(t), l = Pa.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const In = 2.4, bo = 0.2126729, So = 0.7151522, ko = 0.072175, Fc = 0.55, Rc = 0.58, Nc = 0.57, zc = 0.62, Ca = 0.03, Co = 1.45, Hc = 5e-4, Wc = 1.25, jc = 1.25, wo = 0.078, Vo = 12.82051282051282, wa = 0.06, xo = 1e-3;
function Po(e, n) {
  const t = (e.r / 255) ** In, a = (e.g / 255) ** In, l = (e.b / 255) ** In, i = (n.r / 255) ** In, o = (n.g / 255) ** In, r = (n.b / 255) ** In;
  let s = t * bo + a * So + l * ko, c = i * bo + o * So + r * ko;
  if (s <= Ca && (s += (Ca - s) ** Co), c <= Ca && (c += (Ca - c) ** Co), Math.abs(c - s) < Hc) return 0;
  let d;
  if (c > s) {
    const v = (c ** Fc - s ** Rc) * Wc;
    d = v < xo ? 0 : v < wo ? v - v * Vo * wa : v - wa;
  } else {
    const v = (c ** zc - s ** Nc) * jc;
    d = v > -xo ? 0 : v > -wo ? v - v * Vo * wa : v + wa;
  }
  return d * 100;
}
function xt(e) {
  Oa(`Vuetify: ${e}`);
}
function za(e) {
  Oa(`Vuetify error: ${e}`);
}
function Gc(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, Oa(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const Uc = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Yc = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function qc(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], i = Yc, o = Uc;
  n = i(n / 255), t = i(t / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * n + o[r][1] * t + o[r][2] * a;
  return l;
}
function Tl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Kc(e) {
  return Tl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Io = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Xc = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => _o({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => _o({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => Tt({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => Tt({
    h: e,
    s: n,
    v: t,
    a
  })
};
function zt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && xt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Io.test(e)) {
    const {
      groups: n
    } = e.match(Io), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Xc[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || xt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && xt(`'${e}' is not a valid hex(a) color`), br(n);
  } else if (typeof e == "object") {
    if (Zt(e, ["r", "g", "b"]))
      return e;
    if (Zt(e, ["h", "s", "l"]))
      return Tt(yi(e));
    if (Zt(e, ["h", "s", "v"]))
      return Tt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Tt(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function _o(e) {
  return Tt(yi(e));
}
function Ha(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), i = Math.min(n, t, a);
  let o = 0;
  l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function gr(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = a - a * t / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: n,
    s: o,
    l: i,
    a: l
  };
}
function yi(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function hr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function yr(e) {
  return hr(Tt(e));
}
function Va(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function Qc(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[Va(n), Va(t), Va(a), l !== void 0 ? Va(Math.round(l * 255)) : ""].join("")}`;
}
function br(e) {
  e = Zc(e);
  let [n, t, a, l] = Ac(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function Sr(e) {
  const n = br(e);
  return Ha(n);
}
function kr(e) {
  return Qc(Tt(e));
}
function Zc(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = vo(vo(e, 6), 8, "F")), e;
}
function Bo(e) {
  const n = zt(e);
  return qc(n)[1];
}
function Jc(e, n) {
  const t = Bo(e), a = Bo(n), l = Math.max(t, a), i = Math.min(t, a);
  return (l + 0.05) / (i + 0.05);
}
function ed(e) {
  const n = Math.abs(Po(zt(0), zt(e)));
  return Math.abs(Po(zt(16777215), zt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function $e(e, n) {
  const t = dc();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function _t() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = $e(e).type;
  return tn((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Cr = 0, Ia = /* @__PURE__ */ new WeakMap();
function Xe() {
  const e = $e("getUid");
  if (Ia.has(e)) return Ia.get(e);
  {
    const n = Cr++;
    return Ia.set(e, n), n;
  }
}
Xe.reset = () => {
  Cr = 0, Ia = /* @__PURE__ */ new WeakMap();
};
function td(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Ta = Symbol.for("vuetify:defaults");
function bi() {
  const e = he(Ta);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Te(e, n) {
  const t = bi(), a = j(e), l = h(() => {
    if (nt(n == null ? void 0 : n.disabled)) return t.value;
    const o = nt(n == null ? void 0 : n.scoped), r = nt(n == null ? void 0 : n.reset), s = nt(n == null ? void 0 : n.root);
    if (a.value == null && !(o || r || s)) return t.value;
    let c = At(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (r || s) {
      const d = Number(r || 1 / 0);
      for (let v = 0; v <= d && !(!c || !("prev" in c)); v++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = At(At(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? At(c.prev, c) : c;
  });
  return Ie(Ta, l), l;
}
function nd(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[tn(n)]) < "u";
}
function ad() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bi();
  const a = $e("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = h(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, {
    get(s, c) {
      var v, f, m, y, b, g, S;
      const d = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(v = l.value) == null ? void 0 : v[c], d].filter((k) => k != null) : typeof c == "string" && !nd(a.vnode, c) ? ((f = l.value) == null ? void 0 : f[c]) !== void 0 ? (m = l.value) == null ? void 0 : m[c] : ((b = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : b[c]) !== void 0 ? (S = (g = t.value) == null ? void 0 : g.global) == null ? void 0 : S[c] : d : d;
    }
  }), o = Y();
  ze(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = td(Ta, a);
    Ie(Ta, h(() => o.value ? At((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function mt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return xt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = $(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return fi(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = bi();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = ad(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function F() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? mt : Gt)(n);
}
function ld(e, n) {
  return n.props = e, n;
}
function Bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return F()({
    name: t ?? Ln(nr(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...J()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return fn(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function wr(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Kn = "cubic-bezier(0.4, 0, 0.2, 1)", id = "cubic-bezier(0.0, 0, 0.2, 1)", od = "cubic-bezier(0.4, 0, 1, 1)";
function po(e, n, t) {
  return Object.keys(e).filter((a) => Ra(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (i) => e[l](i, t(i)), a), {});
}
function Si(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? rd(e) : ki(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function $a(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (ki(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function ki(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function rd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function ud(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function N(e) {
  const n = $e("useRender");
  n.render = e;
}
function kt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = pa(), a = j();
  if (Ae) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Ke(() => {
      l.disconnect();
    }), X(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: ii(a)
  };
}
const Xn = Symbol.for("vuetify:layout"), Vr = Symbol.for("vuetify:layout-item"), Ao = 1e3, xr = $({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), mn = $({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Pr() {
  const e = he(Xn);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function gn(e) {
  const n = he(Xn);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Xe()}`, a = $e("useLayoutItem");
  Ie(Vr, {
    id: t
  });
  const l = Y(!1);
  ar(() => l.value = !0), vc(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = n.register(a, {
    ...e,
    active: h(() => l.value ? !1 : e.active.value),
    id: t
  });
  return Ke(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: o
  };
}
const sd = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const r = n.get(o), s = t.get(o), c = a.get(o);
    if (!r || !s || !c) continue;
    const d = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: d
    }), l = d;
  }
  return i;
};
function Ir(e) {
  const n = he(Xn, null), t = h(() => n ? n.rootZIndex.value - 100 : Ao), a = j([]), l = ct(/* @__PURE__ */ new Map()), i = ct(/* @__PURE__ */ new Map()), o = ct(/* @__PURE__ */ new Map()), r = ct(/* @__PURE__ */ new Map()), s = ct(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: d
  } = kt(), v = h(() => {
    const P = /* @__PURE__ */ new Map(), A = e.overlaps ?? [];
    for (const w of A.filter((C) => C.includes(":"))) {
      const [C, p] = w.split(":");
      if (!a.value.includes(C) || !a.value.includes(p)) continue;
      const x = l.get(C), B = l.get(p), T = i.get(C), E = i.get(p);
      !x || !B || !T || !E || (P.set(p, {
        position: x.value,
        amount: parseInt(T.value, 10)
      }), P.set(C, {
        position: B.value,
        amount: -parseInt(E.value, 10)
      }));
    }
    return P;
  }), f = h(() => {
    const P = [...new Set([...o.values()].map((w) => w.value))].sort((w, C) => w - C), A = [];
    for (const w of P) {
      const C = a.value.filter((p) => {
        var x;
        return ((x = o.get(p)) == null ? void 0 : x.value) === w;
      });
      A.push(...C);
    }
    return sd(A, l, i, r);
  }), m = h(() => !Array.from(s.values()).some((P) => P.value)), y = h(() => f.value[f.value.length - 1].layer), b = h(() => ({
    "--v-layout-left": K(y.value.left),
    "--v-layout-right": K(y.value.right),
    "--v-layout-top": K(y.value.top),
    "--v-layout-bottom": K(y.value.bottom),
    ...m.value ? void 0 : {
      transition: "none"
    }
  })), g = h(() => f.value.slice(1).map((P, A) => {
    let {
      id: w
    } = P;
    const {
      layer: C
    } = f.value[A], p = i.get(w), x = l.get(w);
    return {
      id: w,
      ...C,
      size: Number(p.value),
      position: x.value
    };
  })), S = (P) => g.value.find((A) => A.id === P), k = $e("createLayout"), V = Y(!1);
  lt(() => {
    V.value = !0;
  }), Ie(Xn, {
    register: (P, A) => {
      let {
        id: w,
        order: C,
        position: p,
        layoutSize: x,
        elementSize: B,
        active: T,
        disableTransitions: E,
        absolute: z
      } = A;
      o.set(w, C), l.set(w, p), i.set(w, x), r.set(w, T), E && s.set(w, E);
      const Q = Bn(Vr, k == null ? void 0 : k.vnode).indexOf(P);
      Q > -1 ? a.value.splice(Q, 0, w) : a.value.push(w);
      const ee = h(() => g.value.findIndex((q) => q.id === w)), O = h(() => t.value + f.value.length * 2 - ee.value * 2), D = h(() => {
        const q = p.value === "left" || p.value === "right", te = p.value === "right", ne = p.value === "bottom", se = B.value ?? x.value, H = se === 0 ? "%" : "px", ae = {
          [p.value]: 0,
          zIndex: O.value,
          transform: `translate${q ? "X" : "Y"}(${(T.value ? 0 : -(se === 0 ? 100 : se)) * (te || ne ? -1 : 1)}${H})`,
          position: z.value || t.value !== Ao ? "absolute" : "fixed",
          ...m.value ? void 0 : {
            transition: "none"
          }
        };
        if (!V.value) return ae;
        const re = g.value[ee.value];
        if (!re) throw new Error(`[Vuetify] Could not find layout item "${w}"`);
        const Ve = v.value.get(w);
        return Ve && (re[Ve.position] += Ve.amount), {
          ...ae,
          height: q ? `calc(100% - ${re.top}px - ${re.bottom}px)` : B.value ? `${B.value}px` : void 0,
          left: te ? void 0 : `${re.left}px`,
          right: te ? `${re.right}px` : void 0,
          top: p.value !== "bottom" ? `${re.top}px` : void 0,
          bottom: p.value !== "top" ? `${re.bottom}px` : void 0,
          width: q ? B.value ? `${B.value}px` : void 0 : `calc(100% - ${re.left}px - ${re.right}px)`
        };
      }), L = h(() => ({
        zIndex: O.value - 1
      }));
      return {
        layoutItemStyles: D,
        layoutItemScrimStyles: L,
        zIndex: O
      };
    },
    unregister: (P) => {
      o.delete(P), l.delete(P), i.delete(P), r.delete(P), s.delete(P), a.value = a.value.filter((A) => A !== P);
    },
    mainRect: y,
    mainStyles: b,
    getLayoutItem: S,
    items: g,
    layoutRect: d,
    rootZIndex: t
  });
  const _ = h(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), I = h(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: _,
    layoutStyles: I,
    getLayoutItem: S,
    items: g,
    layoutRect: d,
    layoutRef: c
  };
}
function at(e, n) {
  let t;
  function a() {
    t = oi(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  X(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), Je(() => {
    t == null || t.stop();
  });
}
function ie(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const i = $e("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), r = tn(n), c = r !== n ? h(() => {
    var v, f, m, y;
    return e[n], !!(((v = i.vnode.props) != null && v.hasOwnProperty(n) || (f = i.vnode.props) != null && f.hasOwnProperty(r)) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : h(() => {
    var v, f;
    return e[n], !!((v = i.vnode.props) != null && v.hasOwnProperty(n) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  at(() => !c.value, () => {
    X(() => e[n], (v) => {
      o.value = v;
    });
  });
  const d = h({
    get() {
      const v = e[n];
      return a(c.value ? v : o.value);
    },
    set(v) {
      const f = l(v), m = Me(c.value ? e[n] : o.value);
      m === f || a(m) === v || (o.value = f, i == null || i.emit(`update:${n}`, f));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), d;
}
const Ea = Symbol.for("vuetify:locale");
function De() {
  const e = he(Ea);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function cd(e) {
  const n = he(Ea);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = dd(t, n.rtl, e), l = {
    ...t,
    ...a
  };
  return Ie(Ea, l), l;
}
function dd(e, n, t) {
  const a = h(() => t.rtl ?? n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: h(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function He() {
  const e = he(Ea);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const $l = Symbol.for("vuetify:theme"), ge = $({
  theme: String
}, "theme");
function ke(e) {
  $e("provideTheme");
  const n = he($l, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = h(() => e.theme ?? n.name.value), a = h(() => n.themes.value[t.value]), l = h(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return Ie($l, i), i;
}
function _r() {
  $e("useTheme");
  const e = he($l, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const vd = $({
  ...J(),
  ...xr({
    fullHeight: !0
  }),
  ...ge()
}, "VApp"), fd = F()({
  name: "VApp",
  props: vd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ke(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = Ir(e), {
      rtlClasses: s
    } = He();
    return N(() => {
      var c;
      return u("div", {
        ref: r,
        class: ["v-application", a.themeClasses.value, l.value, s.value, e.class],
        style: [e.style]
      }, [u("div", {
        class: "v-application__wrap"
      }, [(c = t.default) == null ? void 0 : c.call(t)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), ve = $({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Br = $({
  text: String,
  ...J(),
  ...ve()
}, "VToolbarTitle"), Ci = F()({
  name: "VToolbarTitle",
  props: Br(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      const a = !!(t.default || t.text || e.text);
      return u(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && u("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), md = $({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function ut(e, n, t) {
  return F()({
    name: e,
    props: md({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: v
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${v}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: d,
              width: v,
              height: f
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = d || "", r.style.width = v || "", r.style.height = f || "";
          }
        }
      };
      return () => {
        const r = a.group ? ri : Ht;
        return fn(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function pr(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return F()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? ri : Ht;
      return () => fn(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, i.default);
    }
  });
}
function Ar() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = nr(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const gd = $({
  target: [Object, Array]
}, "v-dialog-transition"), Wa = F()({
  name: "VDialogTransition",
  props: gd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var f;
        await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), l.style.visibility = "";
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = $o(e.target, l), v = Jt(l, [{
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: id
        });
        (f = To(l)) == null || f.forEach((m) => {
          Jt(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Kn
          });
        }), v.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var f;
        await new Promise((m) => requestAnimationFrame(m));
        const {
          x: o,
          y: r,
          sx: s,
          sy: c,
          speed: d
        } = $o(e.target, l);
        Jt(l, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: od
        }).finished.then(() => i()), (f = To(l)) == null || f.forEach((m) => {
          Jt(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Kn
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(Ht, R({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : u(Ht, {
      name: "dialog-transition"
    }, t);
  }
});
function To(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function $o(e, n) {
  const t = mr(e), a = hi(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  o === "left" || r === "left" ? s -= t.width / 2 : (o === "right" || r === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const d = t.width / a.width, v = t.height / a.height, f = Math.max(1, d, v), m = d / f || 0, y = v / f || 0, b = a.width * a.height / (window.innerWidth * window.innerHeight), g = b > 0.12 ? Math.min(1.5, (b - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: m,
    sy: y,
    speed: g
  };
}
const hd = ut("fab-transition", "center center", "out-in"), yd = ut("dialog-bottom-transition"), bd = ut("dialog-top-transition"), Qn = ut("fade-transition"), wi = ut("scale-transition"), Sd = ut("scroll-x-transition"), kd = ut("scroll-x-reverse-transition"), Cd = ut("scroll-y-transition"), wd = ut("scroll-y-reverse-transition"), Vd = ut("slide-x-transition"), xd = ut("slide-x-reverse-transition"), Vi = ut("slide-y-transition"), Pd = ut("slide-y-reverse-transition"), ja = pr("expand-transition", Ar()), xi = pr("expand-x-transition", Ar("", !0)), Id = $({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), me = F(!1)({
  name: "VDefaultsProvider",
  props: Id(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = Mn(e);
    return Te(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), Fe = $({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Re(e) {
  return {
    dimensionStyles: h(() => {
      const t = {}, a = K(e.height), l = K(e.maxHeight), i = K(e.maxWidth), o = K(e.minHeight), r = K(e.minWidth), s = K(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), s != null && (t.width = s), t;
    })
  };
}
function _d(e) {
  return {
    aspectStyles: h(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Tr = $({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...J(),
  ...Fe()
}, "VResponsive"), El = F()({
  name: "VResponsive",
  props: Tr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = _d(e), {
      dimensionStyles: l
    } = Re(e);
    return N(() => {
      var i;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function Pi(e) {
  return mi(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Tl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Kc(e.value.background)) {
          const a = zt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = ed(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Tl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function Ye(e, n) {
  const t = h(() => ({
    text: Tn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Pi(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function we(e, n) {
  const t = h(() => ({
    background: Tn(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Pi(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const _e = $({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ee(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    roundedClasses: h(() => {
      const a = Tn(e) ? e.value : e.rounded, l = Tn(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const wt = $({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Ze = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? ri : Ht,
    ...s
  } = typeof a == "object" ? a : {};
  return fn(r, R(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [d, v] = c;
    return v !== void 0;
  })), o), t);
};
function Bd(e, n) {
  if (!ci) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var v;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (v = e._observe) == null ? void 0 : v[n.instance.$.uid];
    if (!c) return;
    const d = r.some((f) => f.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || d || c.init) && l(d, r, s), d && t.once ? $r(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function $r(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const ia = {
  mounted: Bd,
  unmounted: $r
}, Er = $({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Tr(),
  ...J(),
  ..._e(),
  ...wt()
}, "VImg"), $t = F()({
  name: "VImg",
  directives: {
    intersect: ia
  },
  props: Er(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = we(M(e, "color")), {
      roundedClasses: o
    } = Ee(e), r = $e("VImg"), s = Y(""), c = j(), d = Y(e.eager ? "loading" : "idle"), v = Y(), f = Y(), m = h(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = h(() => m.value.aspect || v.value / f.value || 0);
    X(() => e.src, () => {
      b(d.value !== "idle");
    }), X(y, (B, T) => {
      !B && T && c.value && _(c.value);
    }), ui(() => b());
    function b(B) {
      if (!(e.eager && B) && !(ci && !B && !e.eager)) {
        if (d.value = "loading", m.value.lazySrc) {
          const T = new Image();
          T.src = m.value.lazySrc, _(T, null);
        }
        m.value.src && Ce(() => {
          var T;
          t("loadstart", ((T = c.value) == null ? void 0 : T.currentSrc) || m.value.src), setTimeout(() => {
            var E;
            if (!r.isUnmounted)
              if ((E = c.value) != null && E.complete) {
                if (c.value.naturalWidth || S(), d.value === "error") return;
                y.value || _(c.value, null), d.value === "loading" && g();
              } else
                y.value || _(c.value), k();
          });
        });
      }
    }
    function g() {
      var B;
      r.isUnmounted || (k(), _(c.value), d.value = "loaded", t("load", ((B = c.value) == null ? void 0 : B.currentSrc) || m.value.src));
    }
    function S() {
      var B;
      r.isUnmounted || (d.value = "error", t("error", ((B = c.value) == null ? void 0 : B.currentSrc) || m.value.src));
    }
    function k() {
      const B = c.value;
      B && (s.value = B.currentSrc || B.src);
    }
    let V = -1;
    Ke(() => {
      clearTimeout(V);
    });
    function _(B) {
      let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const E = () => {
        if (clearTimeout(V), r.isUnmounted) return;
        const {
          naturalHeight: z,
          naturalWidth: W
        } = B;
        z || W ? (v.value = W, f.value = z) : !B.complete && d.value === "loading" && T != null ? V = window.setTimeout(E, T) : (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (v.value = 1, f.value = 1);
      };
      E();
    }
    const I = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), P = () => {
      var E;
      if (!m.value.src || d.value === "idle") return null;
      const B = u("img", {
        class: ["v-img__img", I.value],
        style: {
          objectPosition: e.position
        },
        src: m.value.src,
        srcset: m.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: g,
        onError: S
      }, null), T = (E = a.sources) == null ? void 0 : E.call(a);
      return u(Ze, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [pe(T ? u("picture", {
          class: "v-img__picture"
        }, [T, B]) : B, [[Ct, d.value === "loaded"]])]
      });
    }, A = () => u(Ze, {
      transition: e.transition
    }, {
      default: () => [m.value.lazySrc && d.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", I.value],
        style: {
          objectPosition: e.position
        },
        src: m.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => a.placeholder ? u(Ze, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, C = () => a.error ? u(Ze, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, p = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, x = Y(!1);
    {
      const B = X(y, (T) => {
        T && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            x.value = !0;
          });
        }), B());
      });
    }
    return N(() => {
      const B = El.filterProps(e);
      return pe(u(El, R({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !x.value
        }, l.value, o.value, e.class],
        style: [{
          width: K(e.width === "auto" ? v.value : e.width)
        }, i.value, e.style]
      }, B, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(oe, null, [u(P, null, null), u(A, null, null), u(p, null, null), u(w, null, null), u(C, null, null)]),
        default: a.default
      }), [[rt("intersect"), {
        handler: b,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: d,
      naturalWidth: v,
      naturalHeight: f
    };
  }
}), it = $({
  border: [Boolean, Number, String]
}, "border");
function st(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    borderClasses: h(() => {
      const a = Tn(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const We = $({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function Ue(e) {
  return {
    elevationClasses: h(() => {
      const t = Tn(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
const pd = [null, "prominent", "default", "comfortable", "compact"], Dr = $({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => pd.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...it(),
  ...J(),
  ...We(),
  ..._e(),
  ...ve({
    tag: "header"
  }),
  ...ge()
}, "VToolbar"), Dl = F()({
  name: "VToolbar",
  props: Dr(),
  setup(e, n) {
    var m;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = we(M(e, "color")), {
      borderClasses: i
    } = st(e), {
      elevationClasses: o
    } = Ue(e), {
      roundedClasses: r
    } = Ee(e), {
      themeClasses: s
    } = ke(e), {
      rtlClasses: c
    } = He(), d = Y(!!(e.extended || (m = t.extension) != null && m.call(t))), v = h(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), f = h(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return Te({
      VBtn: {
        variant: "text"
      }
    }), N(() => {
      var S;
      const y = !!(e.title || t.title), b = !!(t.image || e.image), g = (S = t.extension) == null ? void 0 : S.call(t);
      return d.value = !!(e.extended || g), u(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, r.value, s.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [b && u("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? u(me, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : u($t, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), u(me, {
          defaults: {
            VTabs: {
              height: K(v.value)
            }
          }
        }, {
          default: () => {
            var k, V, _;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: K(v.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(k = t.prepend) == null ? void 0 : k.call(t)]), y && u(Ci, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (V = t.default) == null ? void 0 : V.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(_ = t.append) == null ? void 0 : _.call(t)])])];
          }
        }), u(me, {
          defaults: {
            VTabs: {
              height: K(f.value)
            }
          }
        }, {
          default: () => [u(ja, null, {
            default: () => [d.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: K(f.value)
              }
            }, [g])]
          })]
        })]
      });
    }), {
      contentHeight: v,
      extensionHeight: f
    };
  }
}), Ad = $({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Td(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const i = j(null), o = Y(0), r = Y(0), s = Y(0), c = Y(!1), d = Y(!1), v = h(() => Number(e.scrollThreshold)), f = h(() => Le((v.value - o.value) / v.value || 0)), m = () => {
    const y = i.value;
    if (!y || t && !t.value) return;
    a = o.value, o.value = "window" in y ? y.pageYOffset : y.scrollTop;
    const b = y instanceof Window ? document.documentElement.scrollHeight : y.scrollHeight;
    if (l !== b) {
      l = b;
      return;
    }
    d.value = o.value < a, s.value = Math.abs(o.value - v.value);
  };
  return X(d, () => {
    r.value = r.value || o.value;
  }), X(c, () => {
    r.value = 0;
  }), lt(() => {
    X(() => e.scrollTarget, (y) => {
      var g;
      const b = y ? document.querySelector(y) : window;
      if (!b) {
        xt(`Unable to locate element with identifier ${y}`);
        return;
      }
      b !== i.value && ((g = i.value) == null || g.removeEventListener("scroll", m), i.value = b, i.value.addEventListener("scroll", m, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Ke(() => {
    var y;
    (y = i.value) == null || y.removeEventListener("scroll", m);
  }), t && X(t, m, {
    immediate: !0
  }), {
    scrollThreshold: v,
    currentScroll: o,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: f,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: d,
    savedScroll: r
  };
}
function hn() {
  const e = Y(!1);
  return lt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: h(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: ii(e)
  };
}
const $d = $({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...Dr(),
  ...mn(),
  ...Ad(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), Ed = F()({
  name: "VAppBar",
  props: $d(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), l = ie(e, "modelValue"), i = h(() => {
      var V;
      const k = new Set(((V = e.scrollBehavior) == null ? void 0 : V.split(" ")) ?? []);
      return {
        hide: k.has("hide"),
        fullyHide: k.has("fully-hide"),
        inverted: k.has("inverted"),
        collapse: k.has("collapse"),
        elevate: k.has("elevate"),
        fadeImage: k.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = h(() => {
      const k = i.value;
      return k.hide || k.fullyHide || k.inverted || k.collapse || k.elevate || k.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: d
    } = Td(e, {
      canScroll: o
    }), v = h(() => i.value.hide || i.value.fullyHide), f = h(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), m = h(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), y = h(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), b = h(() => {
      var _, I;
      if (i.value.hide && i.value.inverted) return 0;
      const k = ((_ = a.value) == null ? void 0 : _.contentHeight) ?? 0, V = ((I = a.value) == null ? void 0 : I.extensionHeight) ?? 0;
      return v.value ? r.value < s.value || i.value.fullyHide ? k + V : k : k + V;
    });
    at(h(() => !!e.scrollBehavior), () => {
      ze(() => {
        v.value ? i.value.inverted ? l.value = r.value > s.value : l.value = c.value || r.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: g
    } = hn(), {
      layoutItemStyles: S
    } = gn({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: b,
      elementSize: Y(void 0),
      active: l,
      absolute: M(e, "absolute")
    });
    return N(() => {
      const k = Dl.filterProps(e);
      return u(Dl, R({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": y.value,
          height: void 0,
          ...g.value
        }, e.style]
      }, k, {
        collapse: f.value,
        flat: m.value
      }), t);
    }), {};
  }
}), Dd = [null, "default", "comfortable", "compact"], je = $({
  density: {
    type: String,
    default: "default",
    validator: (e) => Dd.includes(e)
  }
}, "density");
function et(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    densityClasses: h(() => `${n}--density-${e.density}`)
  };
}
const Md = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Yt(e, n) {
  return u(oe, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const gt = $({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Md.includes(e)
  }
}, "variant");
function yn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  const t = h(() => {
    const {
      variant: i
    } = nt(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Pi(h(() => {
    const {
      variant: i,
      color: o
    } = nt(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const Mr = $({
  baseColor: String,
  divided: Boolean,
  ...it(),
  ...J(),
  ...je(),
  ...We(),
  ..._e(),
  ...ve(),
  ...ge(),
  ...gt()
}, "VBtnGroup"), Ml = F()({
  name: "VBtnGroup",
  props: Mr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      densityClasses: l
    } = et(e), {
      borderClasses: i
    } = st(e), {
      elevationClasses: o
    } = Ue(e), {
      roundedClasses: r
    } = Ee(e);
    Te({
      VBtn: {
        height: "auto",
        baseColor: M(e, "baseColor"),
        color: M(e, "color"),
        density: M(e, "density"),
        flat: !0,
        variant: M(e, "variant")
      }
    }), N(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, t));
  }
}), bn = $({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Sn = $({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function kn(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = $e("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Xe();
  Ie(Symbol.for(`${n.description}:id`), l);
  const i = he(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = M(e, "value"), r = h(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), Ke(() => {
    i.unregister(l);
  });
  const s = h(() => i.isSelected(l)), c = h(() => i.items.value[0].id === l), d = h(() => i.items.value[i.items.value.length - 1].id === l), v = h(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return X(s, (f) => {
    a.emit("group:selected", {
      value: f
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: d,
    toggle: () => i.select(l, !s.value),
    select: (f) => i.select(l, f),
    selectedClass: v,
    value: o,
    disabled: r,
    group: i
  };
}
function qt(e, n) {
  let t = !1;
  const a = ct([]), l = ie(e, "modelValue", [], (f) => f == null ? [] : Lr(a, Be(f)), (f) => {
    const m = Od(a, f);
    return e.multiple ? m : m[0];
  }), i = $e("useGroup");
  function o(f, m) {
    const y = f, b = Symbol.for(`${n.description}:id`), S = Bn(b, i == null ? void 0 : i.vnode).indexOf(m);
    nt(y.value) == null && (y.value = S, y.useIndexAsValue = !0), S > -1 ? a.splice(S, 0, y) : a.push(y);
  }
  function r(f) {
    if (t) return;
    s();
    const m = a.findIndex((y) => y.id === f);
    a.splice(m, 1);
  }
  function s() {
    const f = a.find((m) => !m.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  lt(() => {
    s();
  }), Ke(() => {
    t = !0;
  }), fc(() => {
    for (let f = 0; f < a.length; f++)
      a[f].useIndexAsValue && (a[f].value = f);
  });
  function c(f, m) {
    const y = a.find((b) => b.id === f);
    if (!(m && (y != null && y.disabled)))
      if (e.multiple) {
        const b = l.value.slice(), g = b.findIndex((k) => k === f), S = ~g;
        if (m = m ?? !S, S && e.mandatory && b.length <= 1 || !S && e.max != null && b.length + 1 > e.max) return;
        g < 0 && m ? b.push(f) : g >= 0 && !m && b.splice(g, 1), l.value = b;
      } else {
        const b = l.value.includes(f);
        if (e.mandatory && b) return;
        l.value = m ?? !b ? [f] : [];
      }
  }
  function d(f) {
    if (e.multiple && xt('This method is not supported when using "multiple" prop'), l.value.length) {
      const m = l.value[0], y = a.findIndex((S) => S.id === m);
      let b = (y + f) % a.length, g = a[b];
      for (; g.disabled && b !== y; )
        b = (b + f) % a.length, g = a[b];
      if (g.disabled) return;
      l.value = [a[b].id];
    } else {
      const m = a.find((y) => !y.disabled);
      m && (l.value = [m.id]);
    }
  }
  const v = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: M(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: h(() => e.selectedClass),
    items: h(() => a),
    getItemIndex: (f) => Ld(a, f)
  };
  return Ie(n, v), v;
}
function Ld(e, n) {
  const t = Lr(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function Lr(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => It(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }), t;
}
function Od(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const Ii = Symbol.for("vuetify:v-btn-toggle"), Fd = $({
  ...Mr(),
  ...bn()
}, "VBtnToggle"), Rd = F()({
  name: "VBtnToggle",
  props: Fd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = qt(e, Ii);
    return N(() => {
      const s = Ml.filterProps(e);
      return u(Ml, R({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), le = [String, Function, Object, Array], Nd = Symbol.for("vuetify:icons"), Ga = $({
  icon: {
    type: le
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Ll = F()({
  name: "VComponentIcon",
  props: Ga(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return u(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? u(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), Or = mt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ga(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => u(e.tag, R(t, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? u("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : u("path", {
        d: a
      }, null)) : u("path", {
        d: e.icon
      }, null)])]
    });
  }
}), zd = mt({
  name: "VLigatureIcon",
  props: Ga(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), Hd = mt({
  name: "VClassIcon",
  props: Ga(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
}), Wd = (e) => {
  const n = he(Nd);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var s;
      const a = nt(e);
      if (!a) return {
        component: Ll
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])), l || xt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: Or,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Ll,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, jd = ["x-small", "small", "default", "large", "x-large"], pt = $({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Rn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return mi(() => {
    let t, a;
    return Ba(jd, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: K(e.size),
      height: K(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const Gd = $({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: le,
  ...J(),
  ...pt(),
  ...ve({
    tag: "i"
  }),
  ...ge()
}, "VIcon"), Se = F()({
  name: "VIcon",
  props: Gd(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = j(), {
      themeClasses: i
    } = ke(e), {
      iconData: o
    } = Wd(h(() => l.value || e.icon)), {
      sizeClasses: r
    } = Rn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ye(M(e, "color"));
    return N(() => {
      var f, m;
      const d = (f = a.default) == null ? void 0 : f.call(a);
      d && (l.value = (m = sr(d).filter((y) => y.type === mc && y.children && typeof y.children == "string")[0]) == null ? void 0 : m.children);
      const v = !!(t.onClick || t.onClickOnce);
      return u(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": v,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: K(e.size),
          height: K(e.size),
          width: K(e.size)
        }, c.value, e.style],
        role: v ? "button" : void 0,
        "aria-hidden": !v,
        tabindex: v ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function Ua(e, n) {
  const t = j(), a = Y(!1);
  if (ci) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Ke(() => {
      l.disconnect();
    }), X(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const Ud = $({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...J(),
  ...pt(),
  ...ve({
    tag: "div"
  }),
  ...ge()
}, "VProgressCircular"), En = F()({
  name: "VProgressCircular",
  props: Ud(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = j(), {
      themeClasses: o
    } = ke(e), {
      sizeClasses: r,
      sizeStyles: s
    } = Rn(e), {
      textColorClasses: c,
      textColorStyles: d
    } = Ye(M(e, "color")), {
      textColorClasses: v,
      textColorStyles: f
    } = Ye(M(e, "bgColor")), {
      intersectionRef: m,
      isIntersecting: y
    } = Ua(), {
      resizeRef: b,
      contentRect: g
    } = kt(), S = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = h(() => Number(e.width)), V = h(() => s.value ? Number(e.size) : g.value ? g.value.width : Math.max(k.value, 32)), _ = h(() => a / (1 - k.value / V.value) * 2), I = h(() => k.value / V.value * _.value), P = h(() => K((100 - S.value) / 100 * l));
    return ze(() => {
      m.value = i.value, b.value = i.value;
    }), N(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [s.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${_.value} ${_.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", v.value],
        style: f.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": I.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": I.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": P.value
      }, null)]), t.default && u("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: S.value
      })])]
    })), {};
  }
}), Eo = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Mt = $({
  location: String
}, "location");
function Cn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = He();
  return {
    locationStyles: h(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = pl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return i !== "center" && (n ? s[Eo[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? n ? s[Eo[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const Yd = $({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...J(),
  ...Mt({
    location: "top"
  }),
  ..._e(),
  ...ve(),
  ...ge()
}, "VProgressLinear"), Ya = F()({
  name: "VProgressLinear",
  props: Yd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var x;
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = He(), {
      themeClasses: o
    } = ke(e), {
      locationStyles: r
    } = Cn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ye(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = we(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: f,
      backgroundColorStyles: m
    } = we(h(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: b
    } = we(e, "color"), {
      roundedClasses: g
    } = Ee(e), {
      intersectionRef: S,
      isIntersecting: k
    } = Ua(), V = h(() => parseFloat(e.max)), _ = h(() => parseFloat(e.height)), I = h(() => Le(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), P = h(() => Le(parseFloat(a.value) / V.value * 100, 0, 100)), A = h(() => l.value !== e.reverse), w = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), C = Ae && ((x = window.matchMedia) == null ? void 0 : x.call(window, "(forced-colors: active)").matches);
    function p(B) {
      if (!S.value) return;
      const {
        left: T,
        right: E,
        width: z
      } = S.value.getBoundingClientRect(), W = A.value ? z - B.clientX + (E - z) : B.clientX - T;
      a.value = Math.round(W / z * V.value);
    }
    return N(() => u(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": A.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, g.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? K(_.value) : 0,
        "--v-progress-linear-height": K(_.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : P.value,
      onClick: e.clickable && p
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [A.value ? "left" : "right"]: K(-_.value),
          borderTop: `${K(_.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${K(_.value / 4)})`,
          width: K(100 - I.value, "%"),
          "--v-progress-linear-stream-to": K(_.value * (A.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", C ? void 0 : d.value],
        style: [v.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", C ? void 0 : f.value],
        style: [m.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: K(I.value, "%")
        }]
      }, null), u(Ht, {
        name: w.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((B) => u("div", {
          key: B,
          class: ["v-progress-linear__indeterminate", B, C ? void 0 : y.value],
          style: b.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", C ? void 0 : y.value],
          style: [b.value, {
            width: K(P.value, "%")
          }]
        }, null)]
      }), t.default && u("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: P.value,
        buffer: I.value
      })])]
    })), {};
  }
}), qa = $({
  loading: [Boolean, String]
}, "loader");
function oa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    loaderClasses: h(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function ra(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(Ya, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const qd = ["static", "relative", "fixed", "absolute", "sticky"], Nn = $({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => qd.includes(e)
    )
  }
}, "position");
function zn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  return {
    positionClasses: h(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function Kd() {
  const e = $e("useRoute");
  return h(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function Fr() {
  var e, n;
  return (n = (e = $e("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function ua(e, n) {
  var v, f;
  const t = gc("RouterLink"), a = h(() => !!(e.href || e.to)), l = h(() => (a == null ? void 0 : a.value) || mo(n, "click") || mo(e, "click"));
  if (typeof t == "string" || !("useLink" in t)) {
    const m = M(e, "href");
    return {
      isLink: a,
      isClickable: l,
      href: m,
      linkProps: ct({
        href: m
      })
    };
  }
  const i = h(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), r = h(() => e.to ? o : void 0), s = Kd(), c = h(() => {
    var m, y, b;
    return r.value ? e.exact ? s.value ? ((b = r.value.isExactActive) == null ? void 0 : b.value) && It(r.value.route.value.query, s.value.query) : ((y = r.value.isExactActive) == null ? void 0 : y.value) ?? !1 : ((m = r.value.isActive) == null ? void 0 : m.value) ?? !1 : !1;
  }), d = h(() => {
    var m;
    return e.to ? (m = r.value) == null ? void 0 : m.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: c,
    route: (v = r.value) == null ? void 0 : v.route,
    navigate: (f = r.value) == null ? void 0 : f.navigate,
    href: d,
    linkProps: ct({
      href: d,
      "aria-current": h(() => c.value ? "page" : void 0)
    })
  };
}
const sa = $({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let kl = !1;
function Xd(e, n) {
  let t = !1, a, l;
  Ae && (Ce(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((o, r, s) => {
      kl ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), kl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      kl = !1;
    });
  }), Je(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function Qd(e, n) {
  X(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && Ce(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const Ol = Symbol("rippleStop"), Zd = 80;
function Do(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Fl(e) {
  return e.constructor.name === "TouchEvent";
}
function Rr(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Jd = function(e, n) {
  var v;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Rr(e)) {
    const f = n.getBoundingClientRect(), m = Fl(e) ? e.touches[e.touches.length - 1] : e;
    a = m.clientX - f.left, l = m.clientY - f.top;
  }
  let i = 0, o = 0.3;
  (v = n._ripple) != null && v.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, s = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${a - i}px`, d = t.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: d,
    centerX: r,
    centerY: s
  };
}, Da = {
  /* eslint-disable max-statements */
  show(e, n) {
    var m;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((m = n == null ? void 0 : n._ripple) != null && m.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: c,
      centerY: d
    } = Jd(e, n, t), v = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = v, l.style.height = v, n.appendChild(a);
    const f = window.getComputedStyle(n);
    f && f.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Do(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Do(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function Nr(e) {
  return typeof e > "u" || !!e;
}
function Zn(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Ol])) {
    if (e[Ol] = !0, Fl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || Rr(e), t._ripple.class && (n.class = t._ripple.class), Fl(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        Da.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Zd);
    } else
      Da.show(e, t, n);
  }
}
function Mo(e) {
  e[Ol] = !0;
}
function ot(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        ot(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), Da.hide(n);
  }
}
function zr(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Jn = !1;
function Hr(e) {
  !Jn && (e.keyCode === so.enter || e.keyCode === so.space) && (Jn = !0, Zn(e));
}
function Wr(e) {
  Jn = !1, ot(e);
}
function jr(e) {
  Jn && (Jn = !1, ot(e));
}
function Gr(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, i = Nr(a);
  if (i || Da.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, di(a) && a.class && (e._ripple.class = a.class), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", Mo, {
        passive: !0
      }), e.addEventListener("mousedown", Mo);
      return;
    }
    e.addEventListener("touchstart", Zn, {
      passive: !0
    }), e.addEventListener("touchend", ot, {
      passive: !0
    }), e.addEventListener("touchmove", zr, {
      passive: !0
    }), e.addEventListener("touchcancel", ot), e.addEventListener("mousedown", Zn), e.addEventListener("mouseup", ot), e.addEventListener("mouseleave", ot), e.addEventListener("keydown", Hr), e.addEventListener("keyup", Wr), e.addEventListener("blur", jr), e.addEventListener("dragstart", ot, {
      passive: !0
    });
  } else !i && t && Ur(e);
}
function Ur(e) {
  e.removeEventListener("mousedown", Zn), e.removeEventListener("touchstart", Zn), e.removeEventListener("touchend", ot), e.removeEventListener("touchmove", zr), e.removeEventListener("touchcancel", ot), e.removeEventListener("mouseup", ot), e.removeEventListener("mouseleave", ot), e.removeEventListener("keydown", Hr), e.removeEventListener("keyup", Wr), e.removeEventListener("dragstart", ot), e.removeEventListener("blur", jr);
}
function ev(e, n) {
  Gr(e, n, !1);
}
function tv(e) {
  delete e._ripple, Ur(e);
}
function nv(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Nr(n.oldValue);
  Gr(e, n, t);
}
const Lt = {
  mounted: ev,
  unmounted: tv,
  updated: nv
}, Ka = $({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Ii
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: le,
  appendIcon: le,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...it(),
  ...J(),
  ...je(),
  ...Fe(),
  ...We(),
  ...Sn(),
  ...qa(),
  ...Mt(),
  ...Nn(),
  ..._e(),
  ...sa(),
  ...pt(),
  ...ve({
    tag: "button"
  }),
  ...ge(),
  ...gt({
    variant: "elevated"
  })
}, "VBtn"), be = F()({
  name: "VBtn",
  props: Ka(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      borderClasses: i
    } = st(e), {
      densityClasses: o
    } = et(e), {
      dimensionStyles: r
    } = Re(e), {
      elevationClasses: s
    } = Ue(e), {
      loaderClasses: c
    } = oa(e), {
      locationStyles: d
    } = Cn(e), {
      positionClasses: v
    } = zn(e), {
      roundedClasses: f
    } = Ee(e), {
      sizeClasses: m,
      sizeStyles: y
    } = Rn(e), b = kn(e, e.symbol, !1), g = ua(e, t), S = h(() => {
      var x;
      return e.active !== void 0 ? e.active : g.isLink.value ? (x = g.isActive) == null ? void 0 : x.value : b == null ? void 0 : b.isSelected.value;
    }), k = h(() => S.value ? e.activeColor ?? e.color : e.color), V = h(() => {
      var B, T;
      return {
        color: (b == null ? void 0 : b.isSelected.value) && (!g.isLink.value || ((B = g.isActive) == null ? void 0 : B.value)) || !b || ((T = g.isActive) == null ? void 0 : T.value) ? k.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: _,
      colorStyles: I,
      variantClasses: P
    } = yn(V), A = h(() => (b == null ? void 0 : b.disabled.value) || e.disabled), w = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), C = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function p(x) {
      var B;
      A.value || g.isLink.value && (x.metaKey || x.ctrlKey || x.shiftKey || x.button !== 0 || t.target === "_blank") || ((B = g.navigate) == null || B.call(g, x), b == null || b.toggle());
    }
    return Qd(g, b == null ? void 0 : b.select), N(() => {
      const x = g.isLink.value ? "a" : e.tag, B = !!(e.prependIcon || a.prepend), T = !!(e.appendIcon || a.append), E = !!(e.icon && e.icon !== !0);
      return pe(u(x, R({
        type: x === "a" ? void 0 : "button",
        class: ["v-btn", b == null ? void 0 : b.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": A.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, _.value, o.value, s.value, c.value, v.value, f.value, m.value, P.value, e.class],
        style: [I.value, r.value, d.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: A.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: p,
        value: C.value
      }, g.linkProps), {
        default: () => {
          var z;
          return [Yt(!0, "v-btn"), !e.icon && B && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : u(Se, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && E ? u(Se, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(me, {
            key: "content-defaults",
            disabled: !E,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var W;
              return [((W = a.default) == null ? void 0 : W.call(a)) ?? e.text];
            }
          })]), !e.icon && T && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? u(me, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : u(Se, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((z = a.loader) == null ? void 0 : z.call(a)) ?? u(En, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Lt, !A.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: b
    };
  }
}), av = $({
  ...Ka({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), lv = F()({
  name: "VAppBarNavIcon",
  props: av(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(be, R(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), iv = F()({
  name: "VAppBarTitle",
  props: Br(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(Ci, R(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), Yr = Bt("v-alert-title"), ov = ["success", "info", "warning", "error"], rv = $({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: le,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => ov.includes(e)
  },
  ...J(),
  ...je(),
  ...Fe(),
  ...We(),
  ...Mt(),
  ...Nn(),
  ..._e(),
  ...ve(),
  ...ge(),
  ...gt({
    variant: "flat"
  })
}, "VAlert"), uv = F()({
  name: "VAlert",
  props: rv(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), i = h(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), o = h(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = ke(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: d
    } = yn(o), {
      densityClasses: v
    } = et(e), {
      dimensionStyles: f
    } = Re(e), {
      elevationClasses: m
    } = Ue(e), {
      locationStyles: y
    } = Cn(e), {
      positionClasses: b
    } = zn(e), {
      roundedClasses: g
    } = Ee(e), {
      textColorClasses: S,
      textColorStyles: k
    } = Ye(M(e, "borderColor")), {
      t: V
    } = De(), _ = h(() => ({
      "aria-label": V(e.closeLabel),
      onClick(I) {
        l.value = !1, t("click:close", I);
      }
    }));
    return () => {
      const I = !!(a.prepend || i.value), P = !!(a.title || e.title), A = !!(a.close || e.closable);
      return l.value && u(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, v.value, m.value, b.value, g.value, d.value, e.class],
        style: [c.value, f.value, y.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var w, C;
          return [Yt(!1, "v-alert"), e.border && u("div", {
            key: "border",
            class: ["v-alert__border", S.value],
            style: k.value
          }, null), I && u("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : u(Se, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), u("div", {
            class: "v-alert__content"
          }, [P && u(Yr, {
            key: "title"
          }, {
            default: () => {
              var p;
              return [((p = a.title) == null ? void 0 : p.call(a)) ?? e.title];
            }
          }), ((w = a.text) == null ? void 0 : w.call(a)) ?? e.text, (C = a.default) == null ? void 0 : C.call(a)]), a.append && u("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), A && u("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? u(me, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var p;
              return [(p = a.close) == null ? void 0 : p.call(a, {
                props: _.value
              })];
            }
          }) : u(be, R({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, _.value), null)])];
        }
      });
    };
  }
}), sv = $({
  start: Boolean,
  end: Boolean,
  icon: le,
  image: String,
  text: String,
  ...it(),
  ...J(),
  ...je(),
  ..._e(),
  ...pt(),
  ...ve(),
  ...ge(),
  ...gt({
    variant: "flat"
  })
}, "VAvatar"), ft = F()({
  name: "VAvatar",
  props: sv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      borderClasses: l
    } = st(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = yn(e), {
      densityClasses: s
    } = et(e), {
      roundedClasses: c
    } = Ee(e), {
      sizeClasses: d,
      sizeStyles: v
    } = Rn(e);
    return N(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, d.value, r.value, e.class],
      style: [o.value, v.value, e.style]
    }, {
      default: () => [t.default ? u(me, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? u($t, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(Se, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Yt(!1, "v-avatar")]
    })), {};
  }
}), cv = $({
  text: String,
  onClick: Ge(),
  ...J(),
  ...ge()
}, "VLabel"), Hn = F()({
  name: "VLabel",
  props: cv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      var a;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), qr = Symbol.for("vuetify:selection-control-group"), _i = $({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: le,
  trueIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: It
  },
  ...J(),
  ...je(),
  ...ge()
}, "SelectionControlGroup"), dv = $({
  ..._i({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Kr = F()({
  name: "VSelectionControlGroup",
  props: dv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = Xe(), i = h(() => e.id || `v-selection-control-group-${l}`), o = h(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Ie(qr, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), Je(() => {
          r.delete(s);
        });
      }
    }), Te({
      [e.defaultsTarget]: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        density: M(e, "density"),
        error: M(e, "error"),
        inline: M(e, "inline"),
        modelValue: a,
        multiple: h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: M(e, "falseIcon"),
        trueIcon: M(e, "trueIcon"),
        readonly: M(e, "readonly"),
        ripple: M(e, "ripple"),
        type: M(e, "type"),
        valueComparator: M(e, "valueComparator")
      }
    }), N(() => {
      var s;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
}), Xa = $({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...J(),
  ..._i()
}, "VSelectionControl");
function vv(e) {
  const n = he(qr, void 0), {
    densityClasses: t
  } = et(e), a = ie(e, "modelValue"), l = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), o = h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = h({
    get() {
      const m = n ? n.modelValue.value : a.value;
      return o.value ? Be(m).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(m, l.value);
    },
    set(m) {
      if (e.readonly) return;
      const y = m ? l.value : i.value;
      let b = y;
      o.value && (b = m ? [...Be(a.value), y] : Be(a.value).filter((g) => !e.valueComparator(g, l.value))), n ? n.modelValue.value = b : a.value = b;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = Ye(h(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: v
  } = we(h(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), f = h(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: v,
    icon: f
  };
}
const jt = F()({
  name: "VSelectionControl",
  directives: {
    Ripple: Lt
  },
  inheritAttrs: !1,
  props: Xa(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: v,
      trueValue: f
    } = vv(e), m = Xe(), y = Y(!1), b = Y(!1), g = j(), S = h(() => e.id || `input-${m}`), k = h(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      g.value && (g.value.checked = r.value);
    });
    function V(A) {
      k.value && (y.value = !0, $n(A.target, ":focus-visible") !== !1 && (b.value = !0));
    }
    function _() {
      y.value = !1, b.value = !1;
    }
    function I(A) {
      A.stopPropagation();
    }
    function P(A) {
      if (!k.value) {
        g.value && (g.value.checked = r.value);
        return;
      }
      e.readonly && l && Ce(() => l.forceUpdate()), r.value = A.target.checked;
    }
    return N(() => {
      var x, B;
      const A = a.label ? a.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [w, C] = Ut(t), p = u("input", R({
        ref: g,
        checked: r.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: _,
        onFocus: V,
        onInput: P,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: f.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, C), null);
      return u("div", R({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": b.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [(x = a.default) == null ? void 0 : x.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: v
      }), pe(u("div", {
        class: ["v-selection-control__input"]
      }, [((B = a.input) == null ? void 0 : B.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: v,
        inputNode: p,
        icon: o.value,
        props: {
          onFocus: V,
          onBlur: _,
          id: S.value
        }
      })) ?? u(oe, null, [o.value && u(Se, {
        key: "icon",
        icon: o.value
      }, null), p])]), [[rt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), A && u(Hn, {
        for: S.value,
        onClick: I
      }, {
        default: () => [A]
      })]);
    }), {
      isFocused: y,
      input: g
    };
  }
}), Xr = $({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: le,
    default: "$checkboxIndeterminate"
  },
  ...Xa({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Et = F()({
  name: "VCheckboxBtn",
  props: Xr(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "indeterminate"), l = ie(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = h(() => a.value ? e.indeterminateIcon : e.falseIcon), r = h(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return N(() => {
      const s = Oe(jt.filterProps(e), ["modelValue"]);
      return u(jt, R(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function Qr(e) {
  const {
    t: n
  } = De();
  function t(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`], r = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(Se, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const fv = $({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...J(),
  ...wt({
    transition: {
      component: Vi,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Zr = F()({
  name: "VMessages",
  props: fv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = h(() => Be(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = Ye(h(() => e.color));
    return N(() => u(Ze, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((o, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), ca = $({
  focused: Boolean,
  "onUpdate:focused": Ge()
}, "focus");
function Ot(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  const t = ie(e, "focused"), a = h(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const Jr = Symbol.for("vuetify:form"), mv = $({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function gv(e) {
  const n = ie(e, "modelValue"), t = h(() => e.disabled), a = h(() => e.readonly), l = Y(!1), i = j([]), o = j([]);
  async function r() {
    const d = [];
    let v = !0;
    o.value = [], l.value = !0;
    for (const f of i.value) {
      const m = await f.validate();
      if (m.length > 0 && (v = !1, d.push({
        id: f.id,
        errorMessages: m
      })), !v && e.fastFail) break;
    }
    return o.value = d, l.value = !1, {
      valid: v,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((d) => d.reset());
  }
  function c() {
    i.value.forEach((d) => d.resetValidation());
  }
  return X(i, () => {
    let d = 0, v = 0;
    const f = [];
    for (const m of i.value)
      m.isValid === !1 ? (v++, f.push({
        id: m.id,
        errorMessages: m.errorMessages
      })) : m.isValid === !0 && d++;
    o.value = f, n.value = v > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Ie(Jr, {
    register: (d) => {
      let {
        id: v,
        vm: f,
        validate: m,
        reset: y,
        resetValidation: b
      } = d;
      i.value.some((g) => g.id === v) && xt(`Duplicate input name "${v}"`), i.value.push({
        id: v,
        validate: m,
        reset: y,
        resetValidation: b,
        vm: hc(f),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((v) => v.id !== d);
    },
    update: (d, v, f) => {
      const m = i.value.find((y) => y.id === d);
      m && (m.isValid = v, m.errorMessages = f);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validateOn: M(e, "validateOn")
  }), {
    errors: o,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validate: r,
    reset: s,
    resetValidation: c
  };
}
function Qa(e) {
  const n = he(Jr, null);
  return {
    ...n,
    isReadonly: h(() => !!((e == null ? void 0 : e.readonly) ?? (n == null ? void 0 : n.isReadonly.value))),
    isDisabled: h(() => !!((e == null ? void 0 : e.disabled) ?? (n == null ? void 0 : n.isDisabled.value)))
  };
}
const eu = $({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...ca()
}, "validation");
function tu(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xe();
  const a = ie(e, "modelValue"), l = h(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Qa(e), o = j([]), r = Y(!0), s = h(() => !!(Be(a.value === "" ? null : a.value).length || Be(l.value === "" ? null : l.value).length)), c = h(() => {
    var V;
    return (V = e.errorMessages) != null && V.length ? Be(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), d = h(() => {
    var I;
    let V = (e.validateOn ?? ((I = i.validateOn) == null ? void 0 : I.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const _ = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return {
      input: _.has("input"),
      blur: _.has("blur") || _.has("input") || _.has("invalid-input"),
      invalidInput: _.has("invalid-input"),
      lazy: _.has("lazy"),
      eager: _.has("eager")
    };
  }), v = h(() => {
    var V;
    return e.error || (V = e.errorMessages) != null && V.length ? !1 : e.rules.length ? r.value ? o.value.length || d.value.lazy ? null : !0 : !o.value.length : !0;
  }), f = Y(!1), m = h(() => ({
    [`${n}--error`]: v.value === !1,
    [`${n}--dirty`]: s.value,
    [`${n}--disabled`]: i.isDisabled.value,
    [`${n}--readonly`]: i.isReadonly.value
  })), y = $e("validation"), b = h(() => e.name ?? nt(t));
  ui(() => {
    var V;
    (V = i.register) == null || V.call(i, {
      id: b.value,
      vm: y,
      validate: k,
      reset: g,
      resetValidation: S
    });
  }), Ke(() => {
    var V;
    (V = i.unregister) == null || V.call(i, b.value);
  }), lt(async () => {
    var V;
    d.value.lazy || await k(!d.value.eager), (V = i.update) == null || V.call(i, b.value, v.value, c.value);
  }), at(() => d.value.input || d.value.invalidInput && v.value === !1, () => {
    X(l, () => {
      if (l.value != null)
        k();
      else if (e.focused) {
        const V = X(() => e.focused, (_) => {
          _ || k(), V();
        });
      }
    });
  }), at(() => d.value.blur, () => {
    X(() => e.focused, (V) => {
      V || k();
    });
  }), X([v, c], () => {
    var V;
    (V = i.update) == null || V.call(i, b.value, v.value, c.value);
  });
  async function g() {
    a.value = null, await Ce(), await S();
  }
  async function S() {
    r.value = !0, d.value.lazy ? o.value = [] : await k(!d.value.eager);
  }
  async function k() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const _ = [];
    f.value = !0;
    for (const I of e.rules) {
      if (_.length >= +(e.maxErrors ?? 1))
        break;
      const A = await (typeof I == "function" ? I : () => I)(l.value);
      if (A !== !0) {
        if (A !== !1 && typeof A != "string") {
          console.warn(`${A} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        _.push(A || "");
      }
    }
    return o.value = _, f.value = !1, r.value = V, o.value;
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: r,
    isValid: v,
    isValidating: f,
    reset: g,
    resetValidation: S,
    validate: k,
    validationClasses: m
  };
}
const Ft = $({
  id: String,
  appendIcon: le,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: le,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Ge(),
  "onClick:append": Ge(),
  ...J(),
  ...je(),
  ...Fa(Fe(), ["maxWidth", "minWidth", "width"]),
  ...ge(),
  ...eu()
}, "VInput"), qe = F()({
  name: "VInput",
  props: {
    ...Ft()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = et(e), {
      dimensionStyles: o
    } = Re(e), {
      themeClasses: r
    } = ke(e), {
      rtlClasses: s
    } = He(), {
      InputIcon: c
    } = Qr(e), d = Xe(), v = h(() => e.id || `input-${d}`), f = h(() => `${v.value}-messages`), {
      errorMessages: m,
      isDirty: y,
      isDisabled: b,
      isReadonly: g,
      isPristine: S,
      isValid: k,
      isValidating: V,
      reset: _,
      resetValidation: I,
      validate: P,
      validationClasses: A
    } = tu(e, "v-input", v), w = h(() => ({
      id: v,
      messagesId: f,
      isDirty: y,
      isDisabled: b,
      isReadonly: g,
      isPristine: S,
      isValid: k,
      isValidating: V,
      reset: _,
      resetValidation: I,
      validate: P
    })), C = h(() => {
      var p;
      return (p = e.errorMessages) != null && p.length || !S.value && m.value.length ? m.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return N(() => {
      var E, z, W, Q;
      const p = !!(a.prepend || e.prependIcon), x = !!(a.append || e.appendIcon), B = C.value.length > 0, T = !e.hideDetails || e.hideDetails === "auto" && (B || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, A.value, e.class],
        style: [o.value, e.style]
      }, [p && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(E = a.prepend) == null ? void 0 : E.call(a, w.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(z = a.default) == null ? void 0 : z.call(a, w.value)]), x && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (W = a.append) == null ? void 0 : W.call(a, w.value)]), T && u("div", {
        class: "v-input__details"
      }, [u(Zr, {
        id: f.value,
        active: B,
        messages: C.value
      }, {
        message: a.message
      }), (Q = a.details) == null ? void 0 : Q.call(a, w.value)])]);
    }), {
      reset: _,
      resetValidation: I,
      validate: P,
      isValid: k,
      errorMessages: m
    };
  }
}), hv = $({
  ...Ft(),
  ...Oe(Xr(), ["inline"])
}, "VCheckbox"), yv = F()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: hv(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = Ot(e), s = Xe(), c = h(() => e.id || `checkbox-${s}`);
    return N(() => {
      const [d, v] = Ut(t), f = qe.filterProps(e), m = Et.filterProps(e);
      return u(qe, R({
        class: ["v-checkbox", e.class]
      }, d, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (y) => {
          let {
            id: b,
            messagesId: g,
            isDisabled: S,
            isReadonly: k,
            isValid: V
          } = y;
          return u(Et, R(m, {
            id: b.value,
            "aria-describedby": g.value,
            disabled: S.value,
            readonly: k.value
          }, v, {
            error: V.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (_) => l.value = _,
            onFocus: o,
            onBlur: r
          }), a);
        }
      });
    }), {};
  }
}), Za = ["sm", "md", "lg", "xl", "xxl"], bv = Symbol.for("vuetify:display"), wn = $({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t();
  const t = he(bv);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = h(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), l = h(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const Sv = Symbol.for("vuetify:goto");
function kv() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function Cv(e) {
  return Bi(e) ?? (document.scrollingElement || document.body);
}
function Bi(e) {
  return typeof e == "string" ? document.querySelector(e) : vi(e);
}
function Cl(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = Bi(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
async function Lo(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", i = At((a == null ? void 0 : a.options) ?? kv(), n), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : Bi(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Cv(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let d;
  if (typeof r == "number")
    d = Cl(r, t, o);
  else if (d = Cl(r, t, o) - Cl(s, t, o), i.layout) {
    const y = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    y && (d -= parseInt(y, 10));
  }
  d += i.offset, d = Vv(s, d, !!o, !!t);
  const v = s[l] ?? 0;
  if (d === v) return Promise.resolve(d);
  const f = performance.now();
  return new Promise((m) => requestAnimationFrame(function y(b) {
    const S = (b - f) / i.duration, k = Math.floor(v + (d - v) * c(Le(S, 0, 1)));
    if (s[l] = k, S >= 1 && Math.abs(k - s[l]) < 10)
      return m(d);
    if (S > 2)
      return xt("Scroll target is not reachable"), m(s[l]);
    requestAnimationFrame(y);
  }));
}
function wv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = he(Sv), {
    isRtl: t
  } = He();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: h(() => n.rtl.value || t.value)
  };
  async function l(i, o) {
    return Lo(i, At(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => Lo(i, At(e, o), !0, a), l;
}
function Vv(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? t ? (s = -(l - o), c = 0) : (s = 0, c = l - o) : (s = 0, c = i + -r), Math.max(Math.min(n, c), s);
}
function xv(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = ea(l, t), o = nu(l, a, t), r = ea(l, n), s = au(l, n), c = r * 0.4;
  return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function Pv(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = ea(a, t), i = au(a, n), o = ea(a, n);
  return i - l / 2 + o / 2;
}
function Oo(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Iv(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function nu(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function ea(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function au(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const lu = Symbol.for("vuetify:v-slide-group"), pi = $({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: lu
  },
  nextIcon: {
    type: le,
    default: "$next"
  },
  prevIcon: {
    type: le,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...J(),
  ...wn({
    mobile: null
  }),
  ...ve(),
  ...bn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), ta = F()({
  name: "VSlideGroup",
  props: pi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = He(), {
      displayClasses: l,
      mobile: i
    } = ht(e), o = qt(e, e.symbol), r = Y(!1), s = Y(0), c = Y(0), d = Y(0), v = h(() => e.direction === "horizontal"), {
      resizeRef: f,
      contentRect: m
    } = kt(), {
      resizeRef: y,
      contentRect: b
    } = kt(), g = wv(), S = h(() => ({
      container: f.el,
      duration: 200,
      easing: "easeOutQuart"
    })), k = h(() => o.selected.value.length ? o.items.value.findIndex((D) => D.id === o.selected.value[0]) : -1), V = h(() => o.selected.value.length ? o.items.value.findIndex((D) => D.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Ae) {
      let D = -1;
      X(() => [o.selected.value, m.value, b.value, v.value], () => {
        cancelAnimationFrame(D), D = requestAnimationFrame(() => {
          if (m.value && b.value) {
            const L = v.value ? "width" : "height";
            c.value = m.value[L], d.value = b.value[L], r.value = c.value + 1 < d.value;
          }
          if (k.value >= 0 && y.el) {
            const L = y.el.children[V.value];
            I(L, e.centerActive);
          }
        });
      });
    }
    const _ = Y(!1);
    function I(D, L) {
      let q = 0;
      L ? q = Pv({
        containerElement: f.el,
        isHorizontal: v.value,
        selectedElement: D
      }) : q = xv({
        containerElement: f.el,
        isHorizontal: v.value,
        isRtl: a.value,
        selectedElement: D
      }), P(q);
    }
    function P(D) {
      if (!Ae || !f.el) return;
      const L = ea(v.value, f.el), q = nu(v.value, a.value, f.el);
      if (!(Oo(v.value, f.el) <= L || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(D - q) < 16)) {
        if (v.value && a.value && f.el) {
          const {
            scrollWidth: ne,
            offsetWidth: se
          } = f.el;
          D = ne - se - D;
        }
        v.value ? g.horizontal(D, S.value) : g(D, S.value);
      }
    }
    function A(D) {
      const {
        scrollTop: L,
        scrollLeft: q
      } = D.target;
      s.value = v.value ? q : L;
    }
    function w(D) {
      if (_.value = !0, !(!r.value || !y.el)) {
        for (const L of D.composedPath())
          for (const q of y.el.children)
            if (q === L) {
              I(q);
              return;
            }
      }
    }
    function C(D) {
      _.value = !1;
    }
    let p = !1;
    function x(D) {
      var L;
      !p && !_.value && !(D.relatedTarget && ((L = y.el) != null && L.contains(D.relatedTarget))) && E(), p = !1;
    }
    function B() {
      p = !0;
    }
    function T(D) {
      if (!y.el) return;
      function L(q) {
        D.preventDefault(), E(q);
      }
      v.value ? D.key === "ArrowRight" ? L(a.value ? "prev" : "next") : D.key === "ArrowLeft" && L(a.value ? "next" : "prev") : D.key === "ArrowDown" ? L("next") : D.key === "ArrowUp" && L("prev"), D.key === "Home" ? L("first") : D.key === "End" && L("last");
    }
    function E(D) {
      var q, te;
      if (!y.el) return;
      let L;
      if (!D)
        L = qn(y.el)[0];
      else if (D === "next") {
        if (L = (q = y.el.querySelector(":focus")) == null ? void 0 : q.nextElementSibling, !L) return E("first");
      } else if (D === "prev") {
        if (L = (te = y.el.querySelector(":focus")) == null ? void 0 : te.previousElementSibling, !L) return E("last");
      } else D === "first" ? L = y.el.firstElementChild : D === "last" && (L = y.el.lastElementChild);
      L && L.focus({
        preventScroll: !0
      });
    }
    function z(D) {
      const L = v.value && a.value ? -1 : 1, q = (D === "prev" ? -L : L) * c.value;
      let te = s.value + q;
      if (v.value && a.value && f.el) {
        const {
          scrollWidth: ne,
          offsetWidth: se
        } = f.el;
        te += ne - se;
      }
      P(te);
    }
    const W = h(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), Q = h(() => {
      switch (e.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return r.value || Math.abs(s.value) > 0;
        // Always show on mobile
        case "mobile":
          return i.value || r.value || Math.abs(s.value) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && (r.value || Math.abs(s.value) > 0);
      }
    }), ee = h(() => Math.abs(s.value) > 1), O = h(() => {
      if (!f.value) return !1;
      const D = Oo(v.value, f.el), L = Iv(v.value, f.el);
      return D - L - Math.abs(s.value) > 1;
    });
    return N(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !v.value,
        "v-slide-group--has-affixes": Q.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: _.value || o.selected.value.length ? -1 : 0,
      onFocus: x
    }, {
      default: () => {
        var D, L, q;
        return [Q.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !ee.value
          }],
          onMousedown: B,
          onClick: () => ee.value && z("prev")
        }, [((D = t.prev) == null ? void 0 : D.call(t, W.value)) ?? u(Qn, null, {
          default: () => [u(Se, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: f,
          class: "v-slide-group__container",
          onScroll: A
        }, [u("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: C,
          onKeydown: T
        }, [(L = t.default) == null ? void 0 : L.call(t, W.value)])]), Q.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !O.value
          }],
          onMousedown: B,
          onClick: () => O.value && z("next")
        }, [((q = t.next) == null ? void 0 : q.call(t, W.value)) ?? u(Qn, null, {
          default: () => [u(Se, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: z,
      scrollOffset: s,
      focus: E,
      hasPrev: ee,
      hasNext: O
    };
  }
}), iu = Symbol.for("vuetify:v-chip-group"), _v = $({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: It
  },
  ...pi(),
  ...J(),
  ...bn({
    selectedClass: "v-chip--selected"
  }),
  ...ve(),
  ...ge(),
  ...gt({
    variant: "tonal"
  })
}, "VChipGroup"), Bv = F()({
  name: "VChipGroup",
  props: _v(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = qt(e, iu);
    return Te({
      VChip: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        filter: M(e, "filter"),
        variant: M(e, "variant")
      }
    }), N(() => {
      const c = ta.filterProps(e);
      return u(ta, R(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = t.default) == null ? void 0 : d.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), pv = $({
  activeClass: String,
  appendAvatar: String,
  appendIcon: le,
  closable: Boolean,
  closeIcon: {
    type: le,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: le,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Ge(),
  onClickOnce: Ge(),
  ...it(),
  ...J(),
  ...je(),
  ...We(),
  ...Sn(),
  ..._e(),
  ...sa(),
  ...pt(),
  ...ve({
    tag: "span"
  }),
  ...ge(),
  ...gt({
    variant: "tonal"
  })
}, "VChip"), Wn = F()({
  name: "VChip",
  directives: {
    Ripple: Lt
  },
  props: pv(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = De(), {
      borderClasses: o
    } = st(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = yn(e), {
      densityClasses: d
    } = et(e), {
      elevationClasses: v
    } = Ue(e), {
      roundedClasses: f
    } = Ee(e), {
      sizeClasses: m
    } = Rn(e), {
      themeClasses: y
    } = ke(e), b = ie(e, "modelValue"), g = kn(e, iu, !1), S = ua(e, t), k = h(() => e.link !== !1 && S.isLink.value), V = h(() => !e.disabled && e.link !== !1 && (!!g || e.link || S.isClickable.value)), _ = h(() => ({
      "aria-label": i(e.closeLabel),
      onClick(A) {
        A.preventDefault(), A.stopPropagation(), b.value = !1, a("click:close", A);
      }
    }));
    function I(A) {
      var w;
      a("click", A), V.value && ((w = S.navigate) == null || w.call(S, A), g == null || g.toggle());
    }
    function P(A) {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), I(A));
    }
    return () => {
      var z;
      const A = S.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), C = !!(w || l.append), p = !!(l.close || e.closable), x = !!(l.filter || e.filter) && g, B = !!(e.prependIcon || e.prependAvatar), T = !!(B || l.prepend), E = !g || g.isSelected.value;
      return b.value && pe(u(A, R({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": V.value,
          "v-chip--filter": x,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && ((z = S.isActive) == null ? void 0 : z.value)
        }, y.value, o.value, E ? r.value : void 0, d.value, v.value, f.value, m.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class],
        style: [E ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: V.value ? 0 : void 0,
        onClick: I,
        onKeydown: V.value && !k.value && P
      }, S.linkProps), {
        default: () => {
          var W;
          return [Yt(V.value, "v-chip"), x && u(xi, {
            key: "filter"
          }, {
            default: () => [pe(u("div", {
              class: "v-chip__filter"
            }, [l.filter ? u(me, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : u(Se, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Ct, g.isSelected.value]])]
          }), T && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !B,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : u(oe, null, [e.prependIcon && u(Se, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(ft, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((W = l.default) == null ? void 0 : W.call(l, {
            isSelected: g == null ? void 0 : g.isSelected.value,
            selectedClass: g == null ? void 0 : g.selectedClass.value,
            select: g == null ? void 0 : g.select,
            toggle: g == null ? void 0 : g.toggle,
            value: g == null ? void 0 : g.value.value,
            disabled: e.disabled
          })) ?? e.text]), C && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? u(me, {
            key: "append-defaults",
            disabled: !w,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : u(oe, null, [e.appendIcon && u(Se, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(ft, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), p && u("button", R({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, _.value), [l.close ? u(me, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : u(Se, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[rt("ripple"), V.value && e.ripple, null]]);
    };
  }
}), Rl = Symbol.for("vuetify:list");
function ou() {
  const e = he(Rl, {
    hasPrepend: Y(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: Y(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return Ie(Rl, n), e;
}
function ru() {
  return he(Rl, null);
}
const Ai = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = Me(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Be(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, uu = (e) => {
  const n = Ai(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = Me(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Be(a);
        r.length && (o = n.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, Av = (e) => {
  const n = Ai(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Me(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Tv = (e) => {
  const n = uu(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Me(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, $v = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, su = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = l.get(n);
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, Ev = {
  open: su.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, Ti = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = Me(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [c, d] = s;
          return d === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, cu = (e) => {
  const n = Ti(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = Me(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Map();
      return a != null && a.length && (o = n.in(a.slice(0, 1), l, i)), o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, Dv = (e) => {
  const n = Ti(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Me(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Mv = (e) => {
  const n = cu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Me(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Lv = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r
      } = t;
      a = Me(a);
      const s = new Map(i), c = [a];
      for (; c.length; ) {
        const v = c.shift();
        i.set(Me(v), l ? "on" : "off"), o.has(v) && c.push(...o.get(v));
      }
      let d = Me(r.get(a));
      for (; d; ) {
        const v = o.get(d), f = v.every((y) => i.get(Me(y)) === "on"), m = v.every((y) => !i.has(Me(y)) || i.get(Me(y)) === "off");
        i.set(d, f ? "on" : m ? "off" : "indeterminate"), d = Me(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((f, m) => {
        let [y, b] = m;
        return b === "on" && f.push(y), f;
      }, []).length === 0 ? s : i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, na = Symbol.for("vuetify:nested"), du = {
  id: Y(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: j(/* @__PURE__ */ new Map()),
    children: j(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: j(!1),
    selectable: j(!1),
    opened: j(/* @__PURE__ */ new Set()),
    activated: j(/* @__PURE__ */ new Set()),
    selected: j(/* @__PURE__ */ new Map()),
    selectedValues: j([]),
    getPath: () => []
  }
}, Ov = $({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Fv = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), a = j(/* @__PURE__ */ new Map()), l = ie(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = h(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Av(e.mandatory);
      case "single-leaf":
        return Tv(e.mandatory);
      case "independent":
        return Ai(e.mandatory);
      case "single-independent":
      default:
        return uu(e.mandatory);
    }
  }), o = h(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Mv(e.mandatory);
      case "leaf":
        return Dv(e.mandatory);
      case "independent":
        return Ti(e.mandatory);
      case "single-independent":
        return cu(e.mandatory);
      case "classic":
      default:
        return Lv(e.mandatory);
    }
  }), r = h(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Ev;
      case "single":
        return $v;
      case "multiple":
      default:
        return su;
    }
  }), s = ie(e, "activated", e.activated, (y) => i.value.in(y, t.value, a.value), (y) => i.value.out(y, t.value, a.value)), c = ie(e, "selected", e.selected, (y) => o.value.in(y, t.value, a.value), (y) => o.value.out(y, t.value, a.value));
  Ke(() => {
    n = !0;
  });
  function d(y) {
    const b = [];
    let g = y;
    for (; g != null; )
      b.unshift(g), g = a.value.get(g);
    return b;
  }
  const v = $e("nested"), f = /* @__PURE__ */ new Set(), m = {
    id: Y(),
    root: {
      opened: l,
      activatable: M(e, "activatable"),
      selectable: M(e, "selectable"),
      activated: s,
      selected: c,
      selectedValues: h(() => {
        const y = [];
        for (const [b, g] of c.value.entries())
          g === "on" && y.push(b);
        return y;
      }),
      register: (y, b, g) => {
        if (f.has(y)) {
          const S = d(y).map(String).join(" -> "), k = d(b).concat(y).map(String).join(" -> ");
          za(`Multiple nodes with the same ID
	${S}
	${k}`);
          return;
        } else
          f.add(y);
        b && y !== b && a.value.set(y, b), g && t.value.set(y, []), b != null && t.value.set(b, [...t.value.get(b) || [], y]);
      },
      unregister: (y) => {
        if (n) return;
        f.delete(y), t.value.delete(y);
        const b = a.value.get(y);
        if (b) {
          const g = t.value.get(b) ?? [];
          t.value.set(b, g.filter((S) => S !== y));
        }
        a.value.delete(y);
      },
      open: (y, b, g) => {
        v.emit("click:open", {
          id: y,
          value: b,
          path: d(y),
          event: g
        });
        const S = r.value.open({
          id: y,
          value: b,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: g
        });
        S && (l.value = S);
      },
      openOnSelect: (y, b, g) => {
        const S = r.value.select({
          id: y,
          value: b,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: g
        });
        S && (l.value = S);
      },
      select: (y, b, g) => {
        v.emit("click:select", {
          id: y,
          value: b,
          path: d(y),
          event: g
        });
        const S = o.value.select({
          id: y,
          value: b,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: g
        });
        S && (c.value = S), m.root.openOnSelect(y, b, g);
      },
      activate: (y, b, g) => {
        if (!e.activatable)
          return m.root.select(y, !0, g);
        v.emit("click:activate", {
          id: y,
          value: b,
          path: d(y),
          event: g
        });
        const S = i.value.activate({
          id: y,
          value: b,
          activated: new Set(s.value),
          children: t.value,
          parents: a.value,
          event: g
        });
        S && (s.value = S);
      },
      children: t,
      parents: a,
      getPath: d
    }
  };
  return Ie(na, m), m.root;
}, vu = (e, n) => {
  const t = he(na, du), a = Symbol(Xe()), l = h(() => e.value !== void 0 ? e.value : a), i = {
    ...t,
    id: l,
    open: (o, r) => t.root.open(l.value, o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(l.value, o, r),
    isOpen: h(() => t.root.opened.value.has(l.value)),
    parent: h(() => t.root.parents.value.get(l.value)),
    activate: (o, r) => t.root.activate(l.value, o, r),
    isActivated: h(() => t.root.activated.value.has(Me(l.value))),
    select: (o, r) => t.root.select(l.value, o, r),
    isSelected: h(() => t.root.selected.value.get(Me(l.value)) === "on"),
    isIndeterminate: h(() => t.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: h(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(l.value, t.id.value, n), Ke(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && Ie(na, i), i;
}, Rv = () => {
  const e = he(na, du);
  Ie(na, {
    ...e,
    isGroupActivator: !0
  });
}, Nv = mt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Rv(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), zv = $({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: le,
    default: "$collapse"
  },
  expandIcon: {
    type: le,
    default: "$expand"
  },
  prependIcon: le,
  appendIcon: le,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...J(),
  ...ve()
}, "VListGroup"), Nl = F()({
  name: "VListGroup",
  props: zv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = vu(M(e, "value"), !0), o = h(() => `v-list-group--id-${String(i.value)}`), r = ru(), {
      isBooted: s
    } = hn();
    function c(m) {
      m.stopPropagation(), l(!a.value, m);
    }
    const d = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), v = h(() => a.value ? e.collapseIcon : e.expandIcon), f = h(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && v.value,
        appendIcon: e.appendIcon || !e.subgroup && v.value,
        title: e.title,
        value: e.value
      }
    }));
    return N(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(me, {
        defaults: f.value
      }, {
        default: () => [u(Nv, null, {
          default: () => [t.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), u(Ze, {
        transition: {
          component: ja
        },
        disabled: !s.value
      }, {
        default: () => {
          var m;
          return [pe(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(m = t.default) == null ? void 0 : m.call(t)]), [[Ct, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), Hv = $({
  opacity: [Number, String],
  ...J(),
  ...ve()
}, "VListItemSubtitle"), fu = F()({
  name: "VListItemSubtitle",
  props: Hv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), mu = Bt("v-list-item-title"), Wv = $({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: le,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Ge(),
  onClickOnce: Ge(),
  ...it(),
  ...J(),
  ...je(),
  ...Fe(),
  ...We(),
  ..._e(),
  ...sa(),
  ...ve(),
  ...ge(),
  ...gt({
    variant: "text"
  })
}, "VListItem"), Dt = F()({
  name: "VListItem",
  directives: {
    Ripple: Lt
  },
  props: Wv(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = ua(e, t), o = h(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isOpen: d,
      isSelected: v,
      isIndeterminate: f,
      isGroupActivator: m,
      root: y,
      parent: b,
      openOnSelect: g,
      id: S
    } = vu(o, !1), k = ru(), V = h(() => {
      var te;
      return e.active !== !1 && (e.active || ((te = i.isActive) == null ? void 0 : te.value) || (y.activatable.value ? s.value : v.value));
    }), _ = h(() => e.link !== !1 && i.isLink.value), I = h(() => !!k && (y.selectable.value || y.activatable.value || e.value != null)), P = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || I.value)), A = h(() => e.rounded || e.nav), w = h(() => e.color ?? e.activeColor), C = h(() => ({
      color: V.value ? w.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    X(() => {
      var te;
      return (te = i.isActive) == null ? void 0 : te.value;
    }, (te) => {
      te && b.value != null && y.open(b.value, !0), te && g(te);
    }, {
      immediate: !0
    });
    const {
      themeClasses: p
    } = ke(e), {
      borderClasses: x
    } = st(e), {
      colorClasses: B,
      colorStyles: T,
      variantClasses: E
    } = yn(C), {
      densityClasses: z
    } = et(e), {
      dimensionStyles: W
    } = Re(e), {
      elevationClasses: Q
    } = Ue(e), {
      roundedClasses: ee
    } = Ee(A), O = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), D = h(() => ({
      isActive: V.value,
      select: c,
      isOpen: d.value,
      isSelected: v.value,
      isIndeterminate: f.value
    }));
    function L(te) {
      var ne;
      l("click", te), P.value && ((ne = i.navigate) == null || ne.call(i, te), !m && (y.activatable.value ? r(!s.value, te) : (y.selectable.value || e.value != null) && c(!v.value, te)));
    }
    function q(te) {
      (te.key === "Enter" || te.key === " ") && (te.preventDefault(), te.target.dispatchEvent(new MouseEvent("click", te)));
    }
    return N(() => {
      const te = _.value ? "a" : e.tag, ne = a.title || e.title != null, se = a.subtitle || e.subtitle != null, H = !!(e.appendAvatar || e.appendIcon), ae = !!(H || a.append), re = !!(e.prependAvatar || e.prependIcon), Ve = !!(re || a.prepend);
      return k == null || k.updateHasPrepend(Ve), e.activeColor && Gc("active-color", ["color", "base-color"]), pe(u(te, R({
        class: ["v-list-item", {
          "v-list-item--active": V.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": P.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !Ve && (k == null ? void 0 : k.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && V.value
        }, p.value, x.value, B.value, z.value, Q.value, O.value, ee.value, E.value, e.class],
        style: [T.value, W.value, e.style],
        tabindex: P.value ? k ? -2 : 0 : void 0,
        "aria-selected": I.value ? y.activatable.value ? s.value : y.selectable.value ? v.value : V.value : void 0,
        onClick: L,
        onKeydown: P.value && !_.value && q
      }, i.linkProps), {
        default: () => {
          var ye;
          return [Yt(P.value || V.value, "v-list-item"), Ve && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !re,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var U;
              return [(U = a.prepend) == null ? void 0 : U.call(a, D.value)];
            }
          }) : u(oe, null, [e.prependAvatar && u(ft, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(Se, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [ne && u(mu, {
            key: "title"
          }, {
            default: () => {
              var U;
              return [((U = a.title) == null ? void 0 : U.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), se && u(fu, {
            key: "subtitle"
          }, {
            default: () => {
              var U;
              return [((U = a.subtitle) == null ? void 0 : U.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (ye = a.default) == null ? void 0 : ye.call(a, D.value)]), ae && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? u(me, {
            key: "append-defaults",
            disabled: !H,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var U;
              return [(U = a.append) == null ? void 0 : U.call(a, D.value)];
            }
          }) : u(oe, null, [e.appendIcon && u(Se, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(ft, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[rt("ripple"), P.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: m,
      isSelected: v,
      list: k,
      select: c,
      root: y,
      id: S
    };
  }
}), jv = $({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...J(),
  ...ve()
}, "VListSubheader"), gu = F()({
  name: "VListSubheader",
  props: jv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ye(M(e, "color"));
    return N(() => {
      const i = !!(t.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && u("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), Gv = $({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...J(),
  ...ge()
}, "VDivider"), da = F()({
  name: "VDivider",
  props: Gv(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      textColorClasses: i,
      textColorStyles: o
    } = Ye(M(e, "color")), r = h(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = K(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = K(e.thickness)), s;
    });
    return N(() => {
      const s = u("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? u("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [s, u("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), Uv = $({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), hu = F()({
  name: "VListChildren",
  props: Uv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return ou(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var f, m;
        let {
          children: o,
          props: r,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((f = t.divider) == null ? void 0 : f.call(t, {
            props: r
          })) ?? u(da, r, null);
        if (s === "subheader")
          return ((m = t.subheader) == null ? void 0 : m.call(t, {
            props: r
          })) ?? u(gu, r, null);
        const d = {
          subtitle: t.subtitle ? (y) => {
            var b;
            return (b = t.subtitle) == null ? void 0 : b.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (y) => {
            var b;
            return (b = t.prepend) == null ? void 0 : b.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          append: t.append ? (y) => {
            var b;
            return (b = t.append) == null ? void 0 : b.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          title: t.title ? (y) => {
            var b;
            return (b = t.title) == null ? void 0 : b.call(t, {
              ...y,
              item: c
            });
          } : void 0
        }, v = Nl.filterProps(r);
        return o ? u(Nl, R({
          value: r == null ? void 0 : r.value
        }, v), {
          activator: (y) => {
            let {
              props: b
            } = y;
            const g = {
              ...r,
              ...b,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: g
            }) : u(Dt, g, d);
          },
          default: () => u(hu, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : u(Dt, R(r, {
          value: e.returnObject ? c : r.value
        }), d);
      }));
    };
  }
}), yu = $({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: It
  }
}, "list-items");
function Rt(e, n) {
  const t = Ne(n, e.itemTitle, n), a = Ne(n, e.itemValue, t), l = Ne(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? Oe(n, ["children"]) : n : void 0 : Ne(n, e.itemProps), o = {
    title: t,
    value: a,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? bu(e, l) : void 0,
    raw: n
  };
}
function bu(e, n) {
  const t = [];
  for (const a of n)
    t.push(Rt(e, a));
  return t;
}
function $i(e) {
  const n = h(() => bu(e, e.items)), t = h(() => n.value.some((i) => i.value === null));
  function a(i) {
    return t.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? Rt(e, o) : n.value.find((r) => e.valueComparator(o, r.value)) || Rt(e, o));
  }
  function l(i) {
    return e.returnObject ? i.map((o) => {
      let {
        raw: r
      } = o;
      return r;
    }) : i.map((o) => {
      let {
        value: r
      } = o;
      return r;
    });
  }
  return {
    items: n,
    transformIn: a,
    transformOut: l
  };
}
function Yv(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function qv(e, n) {
  const t = Ne(n, e.itemType, "item"), a = Yv(n) ? n : Ne(n, e.itemTitle), l = Ne(n, e.itemValue, void 0), i = Ne(n, e.itemChildren), o = e.itemProps === !0 ? Oe(n, ["children"]) : Ne(n, e.itemProps), r = {
    title: a,
    value: l,
    ...o
  };
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && i ? Su(e, i) : void 0,
    raw: n
  };
}
function Su(e, n) {
  const t = [];
  for (const a of n)
    t.push(qv(e, a));
  return t;
}
function Kv(e) {
  return {
    items: h(() => Su(e, e.items))
  };
}
const Xv = $({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: le,
  collapseIcon: le,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Ge(),
  "onClick:select": Ge(),
  "onUpdate:opened": Ge(),
  ...Ov({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...it(),
  ...J(),
  ...je(),
  ...Fe(),
  ...We(),
  itemType: {
    type: String,
    default: "type"
  },
  ...yu(),
  ..._e(),
  ...ve(),
  ...ge(),
  ...gt({
    variant: "text"
  })
}, "VList"), Ja = F()({
  name: "VList",
  props: Xv(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = Kv(e), {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = we(M(e, "bgColor")), {
      borderClasses: r
    } = st(e), {
      densityClasses: s
    } = et(e), {
      dimensionStyles: c
    } = Re(e), {
      elevationClasses: d
    } = Ue(e), {
      roundedClasses: v
    } = Ee(e), {
      children: f,
      open: m,
      parents: y,
      select: b,
      getPath: g
    } = Fv(e), S = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = M(e, "activeColor"), V = M(e, "baseColor"), _ = M(e, "color");
    ou(), Te({
      VListGroup: {
        activeColor: k,
        baseColor: V,
        color: _,
        expandIcon: M(e, "expandIcon"),
        collapseIcon: M(e, "collapseIcon")
      },
      VListItem: {
        activeClass: M(e, "activeClass"),
        activeColor: k,
        baseColor: V,
        color: _,
        density: M(e, "density"),
        disabled: M(e, "disabled"),
        lines: M(e, "lines"),
        nav: M(e, "nav"),
        slim: M(e, "slim"),
        variant: M(e, "variant")
      }
    });
    const I = Y(!1), P = j();
    function A(T) {
      I.value = !0;
    }
    function w(T) {
      I.value = !1;
    }
    function C(T) {
      var E;
      !I.value && !(T.relatedTarget && ((E = P.value) != null && E.contains(T.relatedTarget))) && B();
    }
    function p(T) {
      const E = T.target;
      if (!(!P.value || ["INPUT", "TEXTAREA"].includes(E.tagName))) {
        if (T.key === "ArrowDown")
          B("next");
        else if (T.key === "ArrowUp")
          B("prev");
        else if (T.key === "Home")
          B("first");
        else if (T.key === "End")
          B("last");
        else
          return;
        T.preventDefault();
      }
    }
    function x(T) {
      I.value = !0;
    }
    function B(T) {
      if (P.value)
        return nn(P.value, T);
    }
    return N(() => u(e.tag, {
      ref: P,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, s.value, d.value, S.value, v.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || I.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: A,
      onFocusout: w,
      onFocus: C,
      onKeydown: p,
      onMousedown: x
    }, {
      default: () => [u(hu, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: m,
      select: b,
      focus: B,
      children: f,
      parents: y,
      getPath: g
    };
  }
}), Qv = Bt("v-list-img"), Zv = $({
  start: Boolean,
  end: Boolean,
  ...J(),
  ...ve()
}, "VListItemAction"), Jv = F()({
  name: "VListItemAction",
  props: Zv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), ef = $({
  start: Boolean,
  end: Boolean,
  ...J(),
  ...ve()
}, "VListItemMedia"), tf = F()({
  name: "VListItemMedia",
  props: ef(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
});
function wl(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function nf(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Fo(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return wl({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return wl({
      x: l,
      y: i
    }, n);
  }
  return wl({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const ku = {
  static: of,
  // specific viewport position, usually centered
  connected: uf
  // connected to a certain element
}, af = $({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in ku
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function lf(e, n) {
  const t = j({}), a = j();
  Ae && at(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    X(() => e.locationStrategy, i), Je(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (r = ku[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function of() {
}
function rf(e, n) {
  const t = hi(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function uf(e, n, t) {
  (Array.isArray(e.target.value) || ud(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = mi(() => {
    const y = pl(n.location, e.isRtl.value), b = n.origin === "overlap" ? y : n.origin === "auto" ? bl(y) : pl(n.origin, e.isRtl.value);
    return y.side === b.side && y.align === Sl(b).align ? {
      preferredAnchor: go(y),
      preferredOrigin: go(b)
    } : {
      preferredAnchor: y,
      preferredOrigin: b
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => h(() => {
    const b = parseFloat(n[y]);
    return isNaN(b) ? 1 / 0 : b;
  })), d = h(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let v = !1;
  const f = new ResizeObserver(() => {
    v && m();
  });
  X([e.target, e.contentEl], (y, b) => {
    let [g, S] = y, [k, V] = b;
    k && !Array.isArray(k) && f.unobserve(k), g && !Array.isArray(g) && f.observe(g), V && f.unobserve(V), S && f.observe(S);
  }, {
    immediate: !0
  }), Je(() => {
    f.disconnect();
  });
  function m() {
    if (v = !1, requestAnimationFrame(() => v = !0), !e.target.value || !e.contentEl.value) return;
    const y = mr(e.target.value), b = rf(e.contentEl.value, e.isRtl.value), g = $a(e.contentEl.value), S = 12;
    g.length || (g.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = g.reduce((x, B) => {
      const T = B.getBoundingClientRect(), E = new an({
        x: B === document.documentElement ? 0 : T.x,
        y: B === document.documentElement ? 0 : T.y,
        width: B.clientWidth,
        height: B.clientHeight
      });
      return x ? new an({
        x: Math.max(x.left, E.left),
        y: Math.max(x.top, E.top),
        width: Math.min(x.right, E.right) - Math.max(x.left, E.left),
        height: Math.min(x.bottom, E.bottom) - Math.max(x.top, E.top)
      }) : E;
    }, void 0);
    k.x += S, k.y += S, k.width -= S * 2, k.height -= S * 2;
    let V = {
      anchor: l.value,
      origin: i.value
    };
    function _(x) {
      const B = new an(b), T = Fo(x.anchor, y), E = Fo(x.origin, B);
      let {
        x: z,
        y: W
      } = nf(T, E);
      switch (x.anchor.side) {
        case "top":
          W -= d.value[0];
          break;
        case "bottom":
          W += d.value[0];
          break;
        case "left":
          z -= d.value[0];
          break;
        case "right":
          z += d.value[0];
          break;
      }
      switch (x.anchor.align) {
        case "top":
          W -= d.value[1];
          break;
        case "bottom":
          W += d.value[1];
          break;
        case "left":
          z -= d.value[1];
          break;
        case "right":
          z += d.value[1];
          break;
      }
      return B.x += z, B.y += W, B.width = Math.min(B.width, s.value), B.height = Math.min(B.height, c.value), {
        overflows: yo(B, k),
        x: z,
        y: W
      };
    }
    let I = 0, P = 0;
    const A = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let C = -1;
    for (; ; ) {
      if (C++ > 10) {
        za("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x,
        y: B,
        overflows: T
      } = _(V);
      I += x, P += B, b.x += x, b.y += B;
      {
        const E = ho(V.anchor), z = T.x.before || T.x.after, W = T.y.before || T.y.after;
        let Q = !1;
        if (["x", "y"].forEach((ee) => {
          if (ee === "x" && z && !w.x || ee === "y" && W && !w.y) {
            const O = {
              anchor: {
                ...V.anchor
              },
              origin: {
                ...V.origin
              }
            }, D = ee === "x" ? E === "y" ? Sl : bl : E === "y" ? bl : Sl;
            O.anchor = D(O.anchor), O.origin = D(O.origin);
            const {
              overflows: L
            } = _(O);
            (L[ee].before <= T[ee].before && L[ee].after <= T[ee].after || L[ee].before + L[ee].after < (T[ee].before + T[ee].after) / 2) && (V = O, Q = w[ee] = !0);
          }
        }), Q) continue;
      }
      T.x.before && (I += T.x.before, b.x += T.x.before), T.x.after && (I -= T.x.after, b.x -= T.x.after), T.y.before && (P += T.y.before, b.y += T.y.before), T.y.after && (P -= T.y.after, b.y -= T.y.after);
      {
        const E = yo(b, k);
        A.x = k.width - E.x.before - E.x.after, A.y = k.height - E.y.before - E.y.after, I += E.x.before, b.x += E.x.before, P += E.y.before, b.y += E.y.before;
      }
      break;
    }
    const p = ho(V.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${V.anchor.side} ${V.anchor.align}`,
      transformOrigin: `${V.origin.side} ${V.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: K(Vl(P)),
      left: e.isRtl.value ? void 0 : K(Vl(I)),
      right: e.isRtl.value ? K(Vl(-I)) : void 0,
      minWidth: K(p === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: K(Ro(Le(A.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: K(Ro(Le(A.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: A,
      contentBox: b
    };
  }
  return X(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => m()), Ce(() => {
    const y = m();
    if (!y) return;
    const {
      available: b,
      contentBox: g
    } = y;
    g.height > b.y && requestAnimationFrame(() => {
      m(), requestAnimationFrame(() => {
        m();
      });
    });
  }), {
    updateLocation: m
  };
}
function Vl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ro(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let zl = !0;
const Ma = [];
function sf(e) {
  !zl || Ma.length ? (Ma.push(e), Hl()) : (zl = !1, e(), Hl());
}
let No = -1;
function Hl() {
  cancelAnimationFrame(No), No = requestAnimationFrame(() => {
    const e = Ma.shift();
    e && e(), Ma.length ? Hl() : zl = !0;
  });
}
const _a = {
  none: null,
  close: vf,
  block: ff,
  reposition: mf
}, cf = $({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in _a
  }
}, "VOverlay-scroll-strategies");
function df(e, n) {
  if (!Ae) return;
  let t;
  ze(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = oi(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = _a[e.scrollStrategy]) == null || a.call(_a, n, e, t);
    }));
  }), Je(() => {
    t == null || t.stop();
  });
}
function vf(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Cu(e.targetEl.value ?? e.contentEl.value, n);
}
function ff(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...$a(e.targetEl.value, n.contained ? t : void 0), ...$a(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => ki(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", K(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", K(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", K(l)), r.classList.add("v-overlay-scroll-blocked");
  }), Je(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), v = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = v;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function mf(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    sf(() => {
      var d, v;
      const s = performance.now();
      (v = (d = e.updateLocation).value) == null || v.call(d, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      Cu(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), Je(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Cu(e, n) {
  const t = [document, ...$a(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), Je(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const Wl = Symbol.for("vuetify:v-menu"), Ei = $({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Di(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = Ec(r, () => {
        n == null || n(o), s(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const gf = $({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Ei()
}, "VOverlay-activator");
function hf(e, n) {
  let {
    isActive: t,
    isTop: a,
    contentEl: l
  } = n;
  const i = $e("useActivator"), o = j();
  let r = !1, s = !1, c = !0;
  const d = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !d.value), {
    runOpenDelay: f,
    runCloseDelay: m
  } = Di(e, (w) => {
    w === (e.openOnHover && r || d.value && s) && !(e.openOnHover && t.value && !a.value) && (t.value !== w && (c = !0), t.value = w);
  }), y = j(), b = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, t.value || (y.value = [w.clientX, w.clientY]), t.value = !t.value;
    },
    onMouseenter: (w) => {
      var C;
      (C = w.sourceCapabilities) != null && C.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, f());
    },
    onMouseleave: (w) => {
      r = !1, m();
    },
    onFocus: (w) => {
      $n(w.target, ":focus-visible") !== !1 && (s = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, f());
    },
    onBlur: (w) => {
      s = !1, w.stopPropagation(), m();
    }
  }, g = h(() => {
    const w = {};
    return v.value && (w.onClick = b.onClick), e.openOnHover && (w.onMouseenter = b.onMouseenter, w.onMouseleave = b.onMouseleave), d.value && (w.onFocus = b.onFocus, w.onBlur = b.onBlur), w;
  }), S = h(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, f();
    }, w.onMouseleave = () => {
      r = !1, m();
    }), d.value && (w.onFocusin = () => {
      s = !0, f();
    }, w.onFocusout = () => {
      s = !1, m();
    }), e.closeOnContentClick) {
      const C = he(Wl, null);
      w.onClick = () => {
        t.value = !1, C == null || C.closeParents();
      };
    }
    return w;
  }), k = h(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (r = !0, c = !1, f());
    }, w.onMouseleave = () => {
      r = !1, m();
    }), w;
  });
  X(a, (w) => {
    var C;
    w && (e.openOnHover && !r && (!d.value || !s) || d.value && !s && (!e.openOnHover || !r)) && !((C = l.value) != null && C.contains(document.activeElement)) && (t.value = !1);
  }), X(t, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, {
    flush: "post"
  });
  const V = pa();
  ze(() => {
    V.value && Ce(() => {
      o.value = V.el;
    });
  });
  const _ = pa(), I = h(() => e.target === "cursor" && y.value ? y.value : _.value ? _.el : wu(e.target, i) || o.value), P = h(() => Array.isArray(I.value) ? void 0 : I.value);
  let A;
  return X(() => !!e.activator, (w) => {
    w && Ae ? (A = oi(), A.run(() => {
      yf(e, i, {
        activatorEl: o,
        activatorEvents: g
      });
    })) : A && A.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Je(() => {
    A == null || A.stop();
  }), {
    activatorEl: o,
    activatorRef: V,
    target: I,
    targetEl: P,
    targetRef: _,
    activatorEvents: g,
    contentEvents: S,
    scrimEvents: k
  };
}
function yf(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  X(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const d = r(c);
      d && o(d);
    }
    s && Ce(() => i());
  }, {
    immediate: !0
  }), X(() => e.activatorProps, () => {
    i();
  }), Je(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Lc(s, R(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Oc(s, R(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = wu(s, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function wu(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function Vu() {
  if (!Ae) return Y(!1);
  const {
    ssr: e
  } = ht();
  if (e) {
    const n = Y(!1);
    return lt(() => {
      n.value = !0;
    }), n;
  } else
    return Y(!0);
}
const Mi = $({
  eager: Boolean
}, "lazy");
function Li(e, n) {
  const t = Y(!1), a = h(() => t.value || e.eager || n.value);
  X(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function Vn() {
  const n = $e("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const zo = Symbol.for("vuetify:stack"), Gn = ct([]);
function bf(e, n, t) {
  const a = $e("useStack"), l = !t, i = he(zo, void 0), o = ct({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ie(zo, o);
  const r = Y(+n.value);
  at(e, () => {
    var v;
    const d = (v = Gn.at(-1)) == null ? void 0 : v[1];
    r.value = d ? d + 10 : +n.value, l && Gn.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), Je(() => {
      if (l) {
        const f = Me(Gn).findIndex((m) => m[0] === a.uid);
        Gn.splice(f, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = Y(!0);
  l && ze(() => {
    var v;
    const d = ((v = Gn.at(-1)) == null ? void 0 : v[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const c = h(() => !o.activeChildren.size);
  return {
    globalTop: ii(s),
    localTop: c,
    stackStyles: h(() => ({
      zIndex: r.value
    }))
  };
}
function Sf(e) {
  return {
    teleportTarget: h(() => {
      const t = e();
      if (t === !0 || !Ae) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        Oa(`Unable to locate target ${t}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function kf() {
  return !0;
}
function xu(e, n, t) {
  if (!e || Pu(e, t) === !1) return !1;
  const a = wr(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Pu(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || kf)(e);
}
function Cf(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && xu(e, n, t) && setTimeout(() => {
    Pu(e, t) && a && a(e);
  }, 0);
}
function Ho(e, n) {
  const t = wr(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Iu = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => Cf(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = xu(l, e, n);
    };
    Ho(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (Ho(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function wf(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return u(Ht, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", R({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const va = $({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...gf(),
  ...J(),
  ...Fe(),
  ...Mi(),
  ...af(),
  ...cf(),
  ...ge(),
  ...wt()
}, "VOverlay"), Pt = F()({
  name: "VOverlay",
  directives: {
    ClickOutside: Iu
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...va()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = $e("VOverlay"), o = j(), r = j(), s = j(), c = ie(e, "modelValue"), d = h({
      get: () => c.value,
      set: (H) => {
        H && e.disabled || (c.value = H);
      }
    }), {
      themeClasses: v
    } = ke(e), {
      rtlClasses: f,
      isRtl: m
    } = He(), {
      hasContent: y,
      onAfterLeave: b
    } = Li(e, d), g = we(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: S,
      localTop: k,
      stackStyles: V
    } = bf(d, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: _,
      activatorRef: I,
      target: P,
      targetEl: A,
      targetRef: w,
      activatorEvents: C,
      contentEvents: p,
      scrimEvents: x
    } = hf(e, {
      isActive: d,
      isTop: k,
      contentEl: s
    }), {
      teleportTarget: B
    } = Sf(() => {
      var re, Ve, ye;
      const H = e.attach || e.contained;
      if (H) return H;
      const ae = ((re = _ == null ? void 0 : _.value) == null ? void 0 : re.getRootNode()) || ((ye = (Ve = i.proxy) == null ? void 0 : Ve.$el) == null ? void 0 : ye.getRootNode());
      return ae instanceof ShadowRoot ? ae : !1;
    }), {
      dimensionStyles: T
    } = Re(e), E = Vu(), {
      scopeId: z
    } = Vn();
    X(() => e.disabled, (H) => {
      H && (d.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: Q
    } = lf(e, {
      isRtl: m,
      contentEl: s,
      target: P,
      isActive: d
    });
    df(e, {
      root: o,
      contentEl: s,
      targetEl: A,
      isActive: d,
      updateLocation: Q
    });
    function ee(H) {
      l("click:outside", H), e.persistent ? te() : d.value = !1;
    }
    function O(H) {
      return d.value && S.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || H.target === r.value || H instanceof MouseEvent && H.shadowTarget === r.value);
    }
    Ae && X(d, (H) => {
      H ? window.addEventListener("keydown", D) : window.removeEventListener("keydown", D);
    }, {
      immediate: !0
    }), Ke(() => {
      Ae && window.removeEventListener("keydown", D);
    });
    function D(H) {
      var ae, re;
      H.key === "Escape" && S.value && (e.persistent ? te() : (d.value = !1, (ae = s.value) != null && ae.contains(document.activeElement) && ((re = _.value) == null || re.focus())));
    }
    const L = Fr();
    at(() => e.closeOnBack, () => {
      Xd(L, (H) => {
        S.value && d.value ? (H(!1), e.persistent ? te() : d.value = !1) : H();
      });
    });
    const q = j();
    X(() => d.value && (e.absolute || e.contained) && B.value == null, (H) => {
      if (H) {
        const ae = Si(o.value);
        ae && ae !== document.scrollingElement && (q.value = ae.scrollTop);
      }
    });
    function te() {
      e.noClickAnimation || s.value && Jt(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Kn
      });
    }
    function ne() {
      l("afterEnter");
    }
    function se() {
      b(), l("afterLeave");
    }
    return N(() => {
      var H;
      return u(oe, null, [(H = t.activator) == null ? void 0 : H.call(t, {
        isActive: d.value,
        targetRef: w,
        props: R({
          ref: I
        }, C.value, e.activatorProps)
      }), E.value && y.value && u(yc, {
        disabled: !B.value,
        to: B.value
      }, {
        default: () => [u("div", R({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": d.value,
            "v-overlay--contained": e.contained
          }, v.value, f.value, e.class],
          style: [V.value, {
            "--v-overlay-opacity": e.opacity,
            top: K(q.value)
          }, e.style],
          ref: o
        }, z, a), [u(wf, R({
          color: g,
          modelValue: d.value && !!e.scrim,
          ref: r
        }, x.value), null), u(Ze, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: P.value,
          onAfterEnter: ne,
          onAfterLeave: se
        }, {
          default: () => {
            var ae;
            return [pe(u("div", R({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [T.value, W.value]
            }, p.value, e.contentProps), [(ae = t.default) == null ? void 0 : ae.call(t, {
              isActive: d
            })]), [[Ct, d.value], [rt("click-outside"), {
              handler: ee,
              closeConditional: O,
              include: () => [_.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: _,
      scrimEl: r,
      target: P,
      animateClick: te,
      contentEl: s,
      globalTop: S,
      localTop: k,
      updateLocation: Q
    };
  }
}), xl = Symbol("Forwarded refs");
function Pl(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function yt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[xl] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of t) {
          if (!s.value) continue;
          const c = Pl(s.value, i) ?? ("_" in s.value ? Pl((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of t) {
          const c = s.value && s.value[xl];
          if (!c) continue;
          const d = c.slice();
          for (; d.length; ) {
            const v = d.shift(), f = Pl(v.value, i);
            if (f) return f;
            const m = v.value && v.value[xl];
            m && d.push(...m);
          }
        }
      }
    }
  });
}
const _u = $({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Oe(va({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Wa
    }
  }), ["absolute"])
}, "VMenu"), Dn = F()({
  name: "VMenu",
  props: _u(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      scopeId: l
    } = Vn(), {
      isRtl: i
    } = He(), o = Xe(), r = h(() => e.id || `v-menu-${o}`), s = j(), c = he(Wl, null), d = Y(/* @__PURE__ */ new Set());
    Ie(Wl, {
      register() {
        d.value.add(o);
      },
      unregister() {
        d.value.delete(o);
      },
      closeParents(g) {
        setTimeout(() => {
          var S;
          !d.value.size && !e.persistent && (g == null || (S = s.value) != null && S.contentEl && !Dc(g, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), Ke(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", v);
    }), ar(() => a.value = !1);
    async function v(g) {
      var V, _, I;
      const S = g.relatedTarget, k = g.target;
      await Ce(), a.value && S !== k && ((V = s.value) != null && V.contentEl) && // We're the topmost menu
      ((_ = s.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(k) && // It isn't inside the menu body
      !s.value.contentEl.contains(k) && ((I = qn(s.value.contentEl)[0]) == null || I.focus());
    }
    X(a, (g) => {
      g ? (c == null || c.register(), Ae && document.addEventListener("focusin", v, {
        once: !0
      })) : (c == null || c.unregister(), Ae && document.removeEventListener("focusin", v));
    }, {
      immediate: !0
    });
    function f(g) {
      c == null || c.closeParents(g);
    }
    function m(g) {
      var S, k, V, _, I;
      if (!e.disabled)
        if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
          if (g.key === "Enter" && (g.target instanceof HTMLTextAreaElement || g.target instanceof HTMLInputElement && g.target.closest("form"))) return;
          g.key === "Enter" && g.preventDefault(), dr(qn((S = s.value) == null ? void 0 : S.contentEl, !1), g.shiftKey ? "prev" : "next", (A) => A.tabIndex >= 0) || (a.value = !1, (V = (k = s.value) == null ? void 0 : k.activatorEl) == null || V.focus());
        } else e.submenu && g.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (I = (_ = s.value) == null ? void 0 : _.activatorEl) == null || I.focus());
    }
    function y(g) {
      var k;
      if (e.disabled) return;
      const S = (k = s.value) == null ? void 0 : k.contentEl;
      S && a.value ? g.key === "ArrowDown" ? (g.preventDefault(), g.stopImmediatePropagation(), nn(S, "next")) : g.key === "ArrowUp" ? (g.preventDefault(), g.stopImmediatePropagation(), nn(S, "prev")) : e.submenu && (g.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : g.key === (i.value ? "ArrowLeft" : "ArrowRight") && (g.preventDefault(), nn(S, "first"))) : (e.submenu ? g.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(g.key)) && (a.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => y(g))));
    }
    const b = h(() => R({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": r.value,
      onKeydown: y
    }, e.activatorProps));
    return N(() => {
      const g = Pt.filterProps(e);
      return u(Pt, R({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, g, {
        modelValue: a.value,
        "onUpdate:modelValue": (S) => a.value = S,
        absolute: !0,
        activatorProps: b.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": f,
        onKeydown: m
      }, l), {
        activator: t.activator,
        default: function() {
          for (var S = arguments.length, k = new Array(S), V = 0; V < S; V++)
            k[V] = arguments[V];
          return u(me, {
            root: "VMenu"
          }, {
            default: () => {
              var _;
              return [(_ = t.default) == null ? void 0 : _.call(t, ...k)];
            }
          });
        }
      });
    }), yt({
      id: r,
      ΨopenChildren: d
    }, s);
  }
}), Vf = $({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...J(),
  ...wt({
    transition: {
      component: Vi
    }
  })
}, "VCounter"), el = F()({
  name: "VCounter",
  functional: !0,
  props: Vf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = h(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return N(() => u(Ze, {
      transition: e.transition
    }, {
      default: () => [pe(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Ct, e.active]])]
    })), {};
  }
}), xf = $({
  floating: Boolean,
  ...J()
}, "VFieldLabel"), Un = F()({
  name: "VFieldLabel",
  props: xf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(Hn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), Pf = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], fa = $({
  appendInnerIcon: le,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: le,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: le,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Pf.includes(e)
  },
  "onClick:clear": Ge(),
  "onClick:appendInner": Ge(),
  "onClick:prependInner": Ge(),
  ...J(),
  ...qa(),
  ..._e(),
  ...ge()
}, "VField"), jn = F()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...ca(),
    ...fa()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = ke(e), {
      loaderClasses: o
    } = oa(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: d
    } = Ot(e), {
      InputIcon: v
    } = Qr(e), {
      roundedClasses: f
    } = Ee(e), {
      rtlClasses: m
    } = He(), y = h(() => e.dirty || e.active), b = h(() => !e.singleLine && !!(e.label || l.label)), g = Xe(), S = h(() => e.id || `input-${g}`), k = h(() => `${S.value}-messages`), V = j(), _ = j(), I = j(), P = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: A,
      backgroundColorStyles: w
    } = we(M(e, "bgColor")), {
      textColorClasses: C,
      textColorStyles: p
    } = Ye(h(() => e.error || e.disabled ? void 0 : y.value && s.value ? e.color : e.baseColor));
    X(y, (E) => {
      if (b.value) {
        const z = V.value.$el, W = _.value.$el;
        requestAnimationFrame(() => {
          const Q = hi(z), ee = W.getBoundingClientRect(), O = ee.x - Q.x, D = ee.y - Q.y - (Q.height / 2 - ee.height / 2), L = ee.width / 0.75, q = Math.abs(L - Q.width) > 1 ? {
            maxWidth: K(L)
          } : void 0, te = getComputedStyle(z), ne = getComputedStyle(W), se = parseFloat(te.transitionDuration) * 1e3 || 150, H = parseFloat(ne.getPropertyValue("--v-field-label-scale")), ae = ne.getPropertyValue("color");
          z.style.visibility = "visible", W.style.visibility = "hidden", Jt(z, {
            transform: `translate(${O}px, ${D}px) scale(${H})`,
            color: ae,
            ...q
          }, {
            duration: se,
            easing: Kn,
            direction: E ? "normal" : "reverse"
          }).finished.then(() => {
            z.style.removeProperty("visibility"), W.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const x = h(() => ({
      isActive: y,
      isFocused: s,
      controlRef: I,
      blur: d,
      focus: c
    }));
    function B(E) {
      E.target !== document.activeElement && E.preventDefault();
    }
    function T(E) {
      var z;
      E.key !== "Enter" && E.key !== " " || (E.preventDefault(), E.stopPropagation(), (z = e["onClick:clear"]) == null || z.call(e, new MouseEvent("click")));
    }
    return N(() => {
      var O, D, L;
      const E = e.variant === "outlined", z = !!(l["prepend-inner"] || e.prependInnerIcon), W = !!(e.clearable || l.clear), Q = !!(l["append-inner"] || e.appendInnerIcon || W), ee = () => l.label ? l.label({
        ...x.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return u("div", R({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": Q,
          "v-field--center-affix": e.centerAffix ?? !P.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": z,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !ee(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, A.value, r.value, o.value, f.value, m.value, e.class],
        style: [w.value, e.style],
        onClick: B
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(ra, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), z && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(v, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (O = l["prepend-inner"]) == null ? void 0 : O.call(l, x.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && u(Un, {
        key: "floating-label",
        ref: _,
        class: [C.value],
        floating: !0,
        for: S.value,
        style: p.value
      }, {
        default: () => [ee()]
      }), b.value && u(Un, {
        key: "label",
        ref: V,
        for: S.value
      }, {
        default: () => [ee()]
      }), (D = l.default) == null ? void 0 : D.call(l, {
        ...x.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: d
      })]), W && u(xi, {
        key: "clear"
      }, {
        default: () => [pe(u("div", {
          class: "v-field__clearable",
          onMousedown: (q) => {
            q.preventDefault(), q.stopPropagation();
          }
        }, [u(me, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...x.value,
            props: {
              onKeydown: T,
              onFocus: c,
              onBlur: d,
              onClick: e["onClick:clear"]
            }
          }) : u(v, {
            name: "clear",
            onKeydown: T,
            onFocus: c,
            onBlur: d
          }, null)]
        })]), [[Ct, e.dirty]])]
      }), Q && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(L = l["append-inner"]) == null ? void 0 : L.call(l, x.value), e.appendInnerIcon && u(v, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", C.value],
        style: p.value
      }, [E && u(oe, null, [u("div", {
        class: "v-field__outline__start"
      }, null), b.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Un, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [ee()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), P.value && b.value && u(Un, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [ee()]
      })])]);
    }), {
      controlRef: I
    };
  }
});
function Oi(e) {
  const n = Object.keys(jn.props).filter((t) => !Ra(t) && t !== "class" && t !== "style");
  return fi(e, n);
}
const If = ["color", "file", "time", "date", "datetime-local", "week", "month"], tl = $({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Ft(),
  ...fa()
}, "VTextField"), on = F()({
  name: "VTextField",
  directives: {
    Intersect: ia
  },
  inheritAttrs: !1,
  props: tl(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = ie(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Ot(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = h(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = h(() => ["plain", "underlined"].includes(e.variant));
    function f(P, A) {
      var w, C;
      !e.autofocus || !P || (C = (w = A[0].target) == null ? void 0 : w.focus) == null || C.call(w);
    }
    const m = j(), y = j(), b = j(), g = h(() => If.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var P;
      b.value !== document.activeElement && ((P = b.value) == null || P.focus()), o.value || r();
    }
    function k(P) {
      a("mousedown:control", P), P.target !== b.value && (S(), P.preventDefault());
    }
    function V(P) {
      S(), a("click:control", P);
    }
    function _(P) {
      P.stopPropagation(), S(), Ce(() => {
        i.value = null, gi(e["onClick:clear"], P);
      });
    }
    function I(P) {
      var w;
      const A = P.target;
      if (i.value = A.value, (w = e.modelModifiers) != null && w.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const C = [A.selectionStart, A.selectionEnd];
        Ce(() => {
          A.selectionStart = C[0], A.selectionEnd = C[1];
        });
      }
    }
    return N(() => {
      const P = !!(l.counter || e.counter !== !1 && e.counter != null), A = !!(P || l.details), [w, C] = Ut(t), {
        modelValue: p,
        ...x
      } = qe.filterProps(e), B = Oi(e);
      return u(qe, R({
        ref: m,
        modelValue: i.value,
        "onUpdate:modelValue": (T) => i.value = T,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, w, x, {
        centerAffix: !v.value,
        focused: o.value
      }), {
        ...l,
        default: (T) => {
          let {
            id: E,
            isDisabled: z,
            isDirty: W,
            isReadonly: Q,
            isValid: ee
          } = T;
          return u(jn, R({
            ref: y,
            onMousedown: k,
            onClick: V,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, B, {
            id: E.value,
            active: g.value || W.value,
            dirty: W.value || e.dirty,
            disabled: z.value,
            focused: o.value,
            error: ee.value === !1
          }), {
            ...l,
            default: (O) => {
              let {
                props: {
                  class: D,
                  ...L
                }
              } = O;
              const q = pe(u("input", R({
                ref: b,
                value: i.value,
                onInput: I,
                autofocus: e.autofocus,
                readonly: Q.value,
                disabled: z.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: s
              }, L, C), null), [[rt("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]);
              return u(oe, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: D,
                "data-no-activator": ""
              }, [l.default(), q]) : bc(q, {
                class: D
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: A ? (T) => {
          var E;
          return u(oe, null, [(E = l.details) == null ? void 0 : E.call(l, T), P && u(oe, null, [u("span", null, null), u(el, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), yt({}, m, y, b);
  }
}), _f = $({
  renderless: Boolean,
  ...J()
}, "VVirtualScrollItem"), Bu = F()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: _f(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = kt(void 0, "border");
    X(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), N(() => {
      var r, s;
      return e.renderless ? u(oe, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : u("div", R({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), Bf = -1, pf = 1, Il = 100, pu = $({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Au(e, n) {
  const t = ht(), a = Y(0);
  ze(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = Y(0), i = Y(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), o = Y(0), r = Y(0), s = j(), c = j();
  let d = 0;
  const {
    resizeRef: v,
    contentRect: f
  } = kt();
  ze(() => {
    v.value = s.value;
  });
  const m = h(() => {
    var O;
    return s.value === document.documentElement ? t.height.value : ((O = f.value) == null ? void 0 : O.height) || parseInt(e.height) || 0;
  }), y = h(() => !!(s.value && c.value && m.value && a.value));
  let b = Array.from({
    length: n.value.length
  }), g = Array.from({
    length: n.value.length
  });
  const S = Y(0);
  let k = -1;
  function V(O) {
    return b[O] || a.value;
  }
  const _ = pc(() => {
    const O = performance.now();
    g[0] = 0;
    const D = n.value.length;
    for (let L = 1; L <= D - 1; L++)
      g[L] = (g[L - 1] || 0) + V(L - 1);
    S.value = Math.max(S.value, performance.now() - O);
  }, S), I = X(y, (O) => {
    O && (I(), d = c.value.offsetTop, _.immediate(), z(), ~k && Ce(() => {
      Ae && window.requestAnimationFrame(() => {
        Q(k), k = -1;
      });
    }));
  });
  Je(() => {
    _.clear();
  });
  function P(O, D) {
    const L = b[O], q = a.value;
    a.value = q ? Math.min(a.value, D) : D, (L !== D || q !== a.value) && (b[O] = D, _());
  }
  function A(O) {
    return O = Le(O, 0, n.value.length - 1), g[O] || 0;
  }
  function w(O) {
    return Af(g, O);
  }
  let C = 0, p = 0, x = 0;
  X(m, (O, D) => {
    D && (z(), O < D && requestAnimationFrame(() => {
      p = 0, z();
    }));
  });
  function B() {
    if (!s.value || !c.value) return;
    const O = s.value.scrollTop, D = performance.now();
    D - x > 500 ? (p = Math.sign(O - C), d = c.value.offsetTop) : p = O - C, C = O, x = D, z();
  }
  function T() {
    !s.value || !c.value || (p = 0, x = 0, z());
  }
  let E = -1;
  function z() {
    cancelAnimationFrame(E), E = requestAnimationFrame(W);
  }
  function W() {
    if (!s.value || !m.value) return;
    const O = C - d, D = Math.sign(p), L = Math.max(0, O - Il), q = Le(w(L), 0, n.value.length), te = O + m.value + Il, ne = Le(w(te) + 1, q + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (D !== Bf || q < l.value) && (D !== pf || ne > i.value)
    ) {
      const se = A(l.value) - A(q), H = A(ne) - A(i.value);
      Math.max(se, H) > Il ? (l.value = q, i.value = ne) : (q <= 0 && (l.value = q), ne >= n.value.length && (i.value = ne));
    }
    o.value = A(l.value), r.value = A(n.value.length) - A(i.value);
  }
  function Q(O) {
    const D = A(O);
    !s.value || O && !D ? k = O : s.value.scrollTop = D;
  }
  const ee = h(() => n.value.slice(l.value, i.value).map((O, D) => ({
    raw: O,
    index: D + l.value
  })));
  return X(n, () => {
    b = Array.from({
      length: n.value.length
    }), g = Array.from({
      length: n.value.length
    }), _.immediate(), z();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: z,
    containerRef: s,
    markerRef: c,
    computedItems: ee,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: Q,
    handleScroll: B,
    handleScrollend: T,
    handleItemResize: P
  };
}
function Af(e, n) {
  let t = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, i = e[l], i > n)
      t = l - 1;
    else if (i < n)
      o = l, a = l + 1;
    else return i === n ? l : a;
  return o;
}
const Tf = $({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...pu(),
  ...J(),
  ...Fe()
}, "VVirtualScroll"), nl = F()({
  name: "VVirtualScroll",
  props: Tf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = $e("VVirtualScroll"), {
      dimensionStyles: l
    } = Re(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: c,
      handleItemResize: d,
      scrollToIndex: v,
      paddingTop: f,
      paddingBottom: m,
      computedItems: y
    } = Au(e, M(e, "items"));
    return at(() => e.renderless, () => {
      function b() {
        var k, V;
        const S = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[S]("scroll", s, {
          passive: !0
        }), document[S]("scrollend", c)) : ((k = o.value) == null || k[S]("scroll", s, {
          passive: !0
        }), (V = o.value) == null || V[S]("scrollend", c));
      }
      lt(() => {
        o.value = Si(a.vnode.el, !0), b(!0);
      }), Je(b);
    }), N(() => {
      const b = y.value.map((g) => u(Bu, {
        key: g.index,
        renderless: e.renderless,
        "onUpdate:height": (S) => d(g.index, S)
      }, {
        default: (S) => {
          var k;
          return (k = t.default) == null ? void 0 : k.call(t, {
            item: g.raw,
            index: g.index,
            ...S
          });
        }
      }));
      return e.renderless ? u(oe, null, [u("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: K(f.value)
        }
      }, null), b, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: K(m.value)
        }
      }, null)]) : u("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: s,
        onScrollend: c,
        style: [l.value, e.style]
      }, [u("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: K(f.value),
          paddingBottom: K(m.value)
        }
      }, [b])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: v
    };
  }
});
function Fi(e, n) {
  const t = Y(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (t.value) {
        const s = X(t, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var d, v;
    if (r.key === "Tab" && ((d = n.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (v = e.value) == null ? void 0 : v.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const f = s.getBoundingClientRect().top;
      for (const m of c)
        if (m.getBoundingClientRect().top >= f) {
          m.focus();
          break;
        }
    } else {
      const f = s.getBoundingClientRect().bottom;
      for (const m of [...c].reverse())
        if (m.getBoundingClientRect().bottom <= f) {
          m.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const Ri = $({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: le,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...yu({
    itemChildren: !1
  })
}, "Select"), $f = $({
  ...Ri(),
  ...Oe(tl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...wt({
    transition: {
      component: Wa
    }
  })
}, "VSelect"), Ni = F()({
  name: "VSelect",
  props: $f(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), l = j(), i = j(), o = j(), r = ie(e, "menu"), s = h({
      get: () => r.value,
      set: (O) => {
        var D;
        r.value && !O && ((D = i.value) != null && D.ΨopenChildren.size) || (r.value = O);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: v
    } = $i(e), f = ie(e, "modelValue", [], (O) => d(O === null ? [null] : Be(O)), (O) => {
      const D = v(O);
      return e.multiple ? D : D[0] ?? null;
    }), m = h(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), y = Qa(e), b = h(() => f.value.map((O) => O.value)), g = Y(!1), S = h(() => s.value ? e.closeText : e.openText);
    let k = "", V;
    const _ = h(() => e.hideSelected ? c.value.filter((O) => !f.value.some((D) => e.valueComparator(D, O))) : c.value), I = h(() => e.hideNoData && !_.value.length || y.isReadonly.value || y.isDisabled.value), P = h(() => {
      var O;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((O = e.menuProps) == null ? void 0 : O.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), A = j(), w = Fi(A, l);
    function C(O) {
      e.openOnClear && (s.value = !0);
    }
    function p() {
      I.value || (s.value = !s.value);
    }
    function x(O) {
      Aa(O) && B(O);
    }
    function B(O) {
      var te, ne;
      if (!O.key || y.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(O.key) && O.preventDefault(), ["Enter", "ArrowDown", " "].includes(O.key) && (s.value = !0), ["Escape", "Tab"].includes(O.key) && (s.value = !1), O.key === "Home" ? (te = A.value) == null || te.focus("first") : O.key === "End" && ((ne = A.value) == null || ne.focus("last"));
      const D = 1e3;
      if (e.multiple || !Aa(O)) return;
      const L = performance.now();
      L - V > D && (k = ""), k += O.key.toLowerCase(), V = L;
      const q = c.value.find((se) => se.title.toLowerCase().startsWith(k));
      if (q !== void 0) {
        f.value = [q];
        const se = _.value.indexOf(q);
        Ae && window.requestAnimationFrame(() => {
          var H;
          se >= 0 && ((H = o.value) == null || H.scrollToIndex(se));
        });
      }
    }
    function T(O) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!O.props.disabled)
        if (e.multiple) {
          const L = f.value.findIndex((te) => e.valueComparator(te.value, O.value)), q = D ?? !~L;
          if (~L) {
            const te = q ? [...f.value, O] : [...f.value];
            te.splice(L, 1), f.value = te;
          } else q && (f.value = [...f.value, O]);
        } else {
          const L = D !== !1;
          f.value = L ? [O] : [], Ce(() => {
            s.value = !1;
          });
        }
    }
    function E(O) {
      var D;
      (D = A.value) != null && D.$el.contains(O.relatedTarget) || (s.value = !1);
    }
    function z() {
      var O;
      e.eager && ((O = o.value) == null || O.calculateVisibleItems());
    }
    function W() {
      var O;
      g.value && ((O = l.value) == null || O.focus());
    }
    function Q(O) {
      g.value = !0;
    }
    function ee(O) {
      if (O == null) f.value = [];
      else if ($n(l.value, ":autofill") || $n(l.value, ":-webkit-autofill")) {
        const D = c.value.find((L) => L.title === O);
        D && T(D);
      } else l.value && (l.value.value = "");
    }
    return X(s, () => {
      if (!e.hideSelected && s.value && f.value.length) {
        const O = _.value.findIndex((D) => f.value.some((L) => e.valueComparator(L.value, D.value)));
        Ae && window.requestAnimationFrame(() => {
          var D;
          O >= 0 && ((D = o.value) == null || D.scrollToIndex(O));
        });
      }
    }), X(() => e.items, (O, D) => {
      s.value || g.value && !D.length && O.length && (s.value = !0);
    }), N(() => {
      const O = !!(e.chips || t.chip), D = !!(!e.hideNoData || _.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), L = f.value.length > 0, q = on.filterProps(e), te = L || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(on, R({
        ref: l
      }, q, {
        modelValue: f.value.map((ne) => ne.props.value).join(", "),
        "onUpdate:modelValue": ee,
        focused: g.value,
        "onUpdate:focused": (ne) => g.value = ne,
        validationValue: f.externalValue,
        counterValue: m.value,
        dirty: L,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": f.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: te,
        "onClick:clear": C,
        "onMousedown:control": p,
        onBlur: E,
        onKeydown: B,
        "aria-label": a(S.value),
        title: a(S.value)
      }), {
        ...t,
        default: () => u(oe, null, [u(Dn, R({
          ref: i,
          modelValue: s.value,
          "onUpdate:modelValue": (ne) => s.value = ne,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: I.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: z,
          onAfterLeave: W
        }, P.value), {
          default: () => [D && u(Ja, R({
            ref: A,
            selected: b.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ne) => ne.preventDefault(),
            onKeydown: x,
            onFocusin: Q,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, w, e.listProps), {
            default: () => {
              var ne, se, H;
              return [(ne = t["prepend-item"]) == null ? void 0 : ne.call(t), !_.value.length && !e.hideNoData && (((se = t["no-data"]) == null ? void 0 : se.call(t)) ?? u(Dt, {
                title: a(e.noDataText)
              }, null)), u(nl, {
                ref: o,
                renderless: !0,
                items: _.value
              }, {
                default: (ae) => {
                  var fe;
                  let {
                    item: re,
                    index: Ve,
                    itemRef: ye
                  } = ae;
                  const U = R(re.props, {
                    ref: ye,
                    key: Ve,
                    onClick: () => T(re, null)
                  });
                  return ((fe = t.item) == null ? void 0 : fe.call(t, {
                    item: re,
                    index: Ve,
                    props: U
                  })) ?? u(Dt, R(U, {
                    role: "option"
                  }), {
                    prepend: (G) => {
                      let {
                        isSelected: Z
                      } = G;
                      return u(oe, null, [e.multiple && !e.hideSelected ? u(Et, {
                        key: re.value,
                        modelValue: Z,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, re.props.prependAvatar && u(ft, {
                        image: re.props.prependAvatar
                      }, null), re.props.prependIcon && u(Se, {
                        icon: re.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (H = t["append-item"]) == null ? void 0 : H.call(t)];
            }
          })]
        }), f.value.map((ne, se) => {
          function H(ye) {
            ye.stopPropagation(), ye.preventDefault(), T(ne, !1);
          }
          const ae = {
            "onClick:close": H,
            onKeydown(ye) {
              ye.key !== "Enter" && ye.key !== " " || (ye.preventDefault(), ye.stopPropagation(), H(ye));
            },
            onMousedown(ye) {
              ye.preventDefault(), ye.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, re = O ? !!t.chip : !!t.selection, Ve = re ? Na(O ? t.chip({
            item: ne,
            index: se,
            props: ae
          }) : t.selection({
            item: ne,
            index: se
          })) : void 0;
          if (!(re && !Ve))
            return u("div", {
              key: ne.value,
              class: "v-select__selection"
            }, [O ? t.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ne.title
                }
              }
            }, {
              default: () => [Ve]
            }) : u(Wn, R({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ne.title,
              disabled: ne.props.disabled
            }, ae), null) : Ve ?? u("span", {
              class: "v-select__selection-text"
            }, [ne.title, e.multiple && se < f.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [St(",")])])]);
        })]),
        "append-inner": function() {
          var ae;
          for (var ne = arguments.length, se = new Array(ne), H = 0; H < ne; H++)
            se[H] = arguments[H];
          return u(oe, null, [(ae = t["append-inner"]) == null ? void 0 : ae.call(t, ...se), e.menuIcon ? u(Se, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), yt({
      isFocused: g,
      menu: s,
      select: T
    }, l);
  }
}), Ef = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), ma = $({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function Df(e, n, t) {
  var r;
  const a = [], l = (t == null ? void 0 : t.default) ?? Ef, i = t != null && t.filterKeys ? Be(t.filterKeys) : !1, o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [c, d = c] = Be(e[s]), v = {}, f = {};
    let m = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        const g = i || Object.keys(d);
        for (const S of g) {
          const k = Ne(d, S), V = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[S];
          if (m = V ? V(k, n, c) : l(k, n, c), m !== -1 && m !== !1)
            V ? v[S] = m : f[S] = m;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        m = l(c, n, c), m !== -1 && m !== !1 && (f.title = m);
      const y = Object.keys(f).length, b = Object.keys(v).length;
      if (!y && !b || (t == null ? void 0 : t.filterMode) === "union" && b !== o && !y || (t == null ? void 0 : t.filterMode) === "intersection" && (b !== o || !y)) continue;
    }
    a.push({
      index: s,
      matches: {
        ...f,
        ...v
      }
    });
  }
  return a;
}
function ga(e, n, t, a) {
  const l = j([]), i = j(/* @__PURE__ */ new Map()), o = h(() => a != null && a.transform ? nt(n).map((s) => [s, a.transform(s)]) : nt(n));
  ze(() => {
    const s = typeof t == "function" ? t() : nt(t), c = typeof s != "string" && typeof s != "number" ? "" : String(s), d = Df(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...nt(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), v = nt(n), f = [], m = /* @__PURE__ */ new Map();
    d.forEach((y) => {
      let {
        index: b,
        matches: g
      } = y;
      const S = v[b];
      f.push(S), m.set(S.value, g);
    }), l.value = f, i.value = m;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function Mf(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? u(oe, null, [u("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, n)]), u("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(n, t)]), u("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(n + t)])]) : e;
}
const Lf = $({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...ma({
    filterKeys: ["title"]
  }),
  ...Ri(),
  ...Oe(tl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...wt({
    transition: !1
  })
}, "VAutocomplete"), Of = F()({
  name: "VAutocomplete",
  props: Lf(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), l = j(), i = Y(!1), o = Y(!0), r = Y(!1), s = j(), c = j(), d = ie(e, "menu"), v = h({
      get: () => d.value,
      set: (U) => {
        var fe;
        d.value && !U && ((fe = s.value) != null && fe.ΨopenChildren.size) || (d.value = U);
      }
    }), f = Y(-1), m = h(() => {
      var U;
      return (U = l.value) == null ? void 0 : U.color;
    }), y = h(() => v.value ? e.closeText : e.openText), {
      items: b,
      transformIn: g,
      transformOut: S
    } = $i(e), {
      textColorClasses: k,
      textColorStyles: V
    } = Ye(m), _ = ie(e, "search", ""), I = ie(e, "modelValue", [], (U) => g(U === null ? [null] : Be(U)), (U) => {
      const fe = S(U);
      return e.multiple ? fe : fe[0] ?? null;
    }), P = h(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), A = Qa(e), {
      filteredItems: w,
      getMatches: C
    } = ga(e, b, () => o.value ? "" : _.value), p = h(() => e.hideSelected ? w.value.filter((U) => !I.value.some((fe) => fe.value === U.value)) : w.value), x = h(() => !!(e.chips || t.chip)), B = h(() => x.value || !!t.selection), T = h(() => I.value.map((U) => U.props.value)), E = h(() => {
      var fe;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && _.value === ((fe = p.value[0]) == null ? void 0 : fe.title)) && p.value.length > 0 && !o.value && !r.value;
    }), z = h(() => e.hideNoData && !p.value.length || A.isReadonly.value || A.isDisabled.value), W = j(), Q = Fi(W, l);
    function ee(U) {
      e.openOnClear && (v.value = !0), _.value = "";
    }
    function O() {
      z.value || (v.value = !0);
    }
    function D(U) {
      z.value || (i.value && (U.preventDefault(), U.stopPropagation()), v.value = !v.value);
    }
    function L(U) {
      var fe;
      Aa(U) && ((fe = l.value) == null || fe.focus());
    }
    function q(U) {
      var Z, ce, ue;
      if (A.isReadonly.value) return;
      const fe = l.value.selectionStart, G = I.value.length;
      if ((f.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(U.key)) && U.preventDefault(), ["Enter", "ArrowDown"].includes(U.key) && (v.value = !0), ["Escape"].includes(U.key) && (v.value = !1), E.value && ["Enter", "Tab"].includes(U.key) && !I.value.some((de) => {
        let {
          value: xe
        } = de;
        return xe === p.value[0].value;
      }) && ye(p.value[0]), U.key === "ArrowDown" && E.value && ((Z = W.value) == null || Z.focus("next")), ["Backspace", "Delete"].includes(U.key)) {
        if (!e.multiple && B.value && I.value.length > 0 && !_.value) return ye(I.value[0], !1);
        if (~f.value) {
          const de = f.value;
          ye(I.value[f.value], !1), f.value = de >= G - 1 ? G - 2 : de;
        } else U.key === "Backspace" && !_.value && (f.value = G - 1);
      }
      if (e.multiple) {
        if (U.key === "ArrowLeft") {
          if (f.value < 0 && fe > 0) return;
          const de = f.value > -1 ? f.value - 1 : G - 1;
          I.value[de] ? f.value = de : (f.value = -1, l.value.setSelectionRange((ce = _.value) == null ? void 0 : ce.length, (ue = _.value) == null ? void 0 : ue.length));
        }
        if (U.key === "ArrowRight") {
          if (f.value < 0) return;
          const de = f.value + 1;
          I.value[de] ? f.value = de : (f.value = -1, l.value.setSelectionRange(0, 0));
        }
      }
    }
    function te(U) {
      if ($n(l.value, ":autofill") || $n(l.value, ":-webkit-autofill")) {
        const fe = b.value.find((G) => G.title === U.target.value);
        fe && ye(fe);
      }
    }
    function ne() {
      var U;
      e.eager && ((U = c.value) == null || U.calculateVisibleItems());
    }
    function se() {
      var U;
      i.value && (o.value = !0, (U = l.value) == null || U.focus());
    }
    function H(U) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function ae(U) {
      r.value = !1;
    }
    function re(U) {
      (U == null || U === "" && !e.multiple && !B.value) && (I.value = []);
    }
    const Ve = Y(!1);
    function ye(U) {
      let fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!U || U.props.disabled))
        if (e.multiple) {
          const G = I.value.findIndex((ce) => e.valueComparator(ce.value, U.value)), Z = fe ?? !~G;
          if (~G) {
            const ce = Z ? [...I.value, U] : [...I.value];
            ce.splice(G, 1), I.value = ce;
          } else Z && (I.value = [...I.value, U]);
          e.clearOnSelect && (_.value = "");
        } else {
          const G = fe !== !1;
          I.value = G ? [U] : [], _.value = G && !B.value ? U.title : "", Ce(() => {
            v.value = !1, o.value = !0;
          });
        }
    }
    return X(i, (U, fe) => {
      var G;
      U !== fe && (U ? (Ve.value = !0, _.value = e.multiple || B.value ? "" : String(((G = I.value.at(-1)) == null ? void 0 : G.props.title) ?? ""), o.value = !0, Ce(() => Ve.value = !1)) : (!e.multiple && _.value == null && (I.value = []), v.value = !1, I.value.some((Z) => {
        let {
          title: ce
        } = Z;
        return ce === _.value;
      }) || (_.value = ""), f.value = -1));
    }), X(_, (U) => {
      !i.value || Ve.value || (U && (v.value = !0), o.value = !U);
    }), X(v, () => {
      if (!e.hideSelected && v.value && I.value.length) {
        const U = p.value.findIndex((fe) => I.value.some((G) => fe.value === G.value));
        Ae && window.requestAnimationFrame(() => {
          var fe;
          U >= 0 && ((fe = c.value) == null || fe.scrollToIndex(U));
        });
      }
    }), X(() => e.items, (U, fe) => {
      v.value || i.value && !fe.length && U.length && (v.value = !0);
    }), N(() => {
      const U = !!(!e.hideNoData || p.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), fe = I.value.length > 0, G = on.filterProps(e);
      return u(on, R({
        ref: l
      }, G, {
        modelValue: _.value,
        "onUpdate:modelValue": [(Z) => _.value = Z, re],
        focused: i.value,
        "onUpdate:focused": (Z) => i.value = Z,
        validationValue: I.externalValue,
        counterValue: P.value,
        dirty: fe,
        onChange: te,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": v.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!B.value,
          "v-autocomplete--selecting-index": f.value > -1
        }, e.class],
        style: e.style,
        readonly: A.isReadonly.value,
        placeholder: fe ? void 0 : e.placeholder,
        "onClick:clear": ee,
        "onMousedown:control": O,
        onKeydown: q
      }), {
        ...t,
        default: () => u(oe, null, [u(Dn, R({
          ref: s,
          modelValue: v.value,
          "onUpdate:modelValue": (Z) => v.value = Z,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: z.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: ne,
          onAfterLeave: se
        }, e.menuProps), {
          default: () => [U && u(Ja, R({
            ref: W,
            selected: T.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Z) => Z.preventDefault(),
            onKeydown: L,
            onFocusin: H,
            onFocusout: ae,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, Q, e.listProps), {
            default: () => {
              var Z, ce, ue;
              return [(Z = t["prepend-item"]) == null ? void 0 : Z.call(t), !p.value.length && !e.hideNoData && (((ce = t["no-data"]) == null ? void 0 : ce.call(t)) ?? u(Dt, {
                title: a(e.noDataText)
              }, null)), u(nl, {
                ref: c,
                renderless: !0,
                items: p.value
              }, {
                default: (de) => {
                  var Qe;
                  let {
                    item: xe,
                    index: tt,
                    itemRef: Pe
                  } = de;
                  const Vt = R(xe.props, {
                    ref: Pe,
                    key: tt,
                    active: E.value && tt === 0 ? !0 : void 0,
                    onClick: () => ye(xe, null)
                  });
                  return ((Qe = t.item) == null ? void 0 : Qe.call(t, {
                    item: xe,
                    index: tt,
                    props: Vt
                  })) ?? u(Dt, R(Vt, {
                    role: "option"
                  }), {
                    prepend: (Kt) => {
                      let {
                        isSelected: Xt
                      } = Kt;
                      return u(oe, null, [e.multiple && !e.hideSelected ? u(Et, {
                        key: xe.value,
                        modelValue: Xt,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, xe.props.prependAvatar && u(ft, {
                        image: xe.props.prependAvatar
                      }, null), xe.props.prependIcon && u(Se, {
                        icon: xe.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Kt, Xt;
                      return o.value ? xe.title : Mf(xe.title, (Kt = C(xe)) == null ? void 0 : Kt.title, ((Xt = _.value) == null ? void 0 : Xt.length) ?? 0);
                    }
                  });
                }
              }), (ue = t["append-item"]) == null ? void 0 : ue.call(t)];
            }
          })]
        }), I.value.map((Z, ce) => {
          function ue(Pe) {
            Pe.stopPropagation(), Pe.preventDefault(), ye(Z, !1);
          }
          const de = {
            "onClick:close": ue,
            onKeydown(Pe) {
              Pe.key !== "Enter" && Pe.key !== " " || (Pe.preventDefault(), Pe.stopPropagation(), ue(Pe));
            },
            onMousedown(Pe) {
              Pe.preventDefault(), Pe.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, xe = x.value ? !!t.chip : !!t.selection, tt = xe ? Na(x.value ? t.chip({
            item: Z,
            index: ce,
            props: de
          }) : t.selection({
            item: Z,
            index: ce
          })) : void 0;
          if (!(xe && !tt))
            return u("div", {
              key: Z.value,
              class: ["v-autocomplete__selection", ce === f.value && ["v-autocomplete__selection--selected", k.value]],
              style: ce === f.value ? V.value : {}
            }, [x.value ? t.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: Z.title
                }
              }
            }, {
              default: () => [tt]
            }) : u(Wn, R({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Z.title,
              disabled: Z.props.disabled
            }, de), null) : tt ?? u("span", {
              class: "v-autocomplete__selection-text"
            }, [Z.title, e.multiple && ce < I.value.length - 1 && u("span", {
              class: "v-autocomplete__selection-comma"
            }, [St(",")])])]);
        })]),
        "append-inner": function() {
          var de;
          for (var Z = arguments.length, ce = new Array(Z), ue = 0; ue < Z; ue++)
            ce[ue] = arguments[ue];
          return u(oe, null, [(de = t["append-inner"]) == null ? void 0 : de.call(t, ...ce), e.menuIcon ? u(Se, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: D,
            onClick: vr,
            "aria-label": a(y.value),
            title: a(y.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), yt({
      isFocused: i,
      isPristine: o,
      menu: v,
      search: _,
      filteredItems: w,
      select: ye
    }, l);
  }
}), Ff = $({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: le,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...J(),
  ...Mt({
    location: "top end"
  }),
  ..._e(),
  ...ve(),
  ...ge(),
  ...wt({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), Rf = F()({
  name: "VBadge",
  inheritAttrs: !1,
  props: Ff(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = we(M(e, "color")), {
      roundedClasses: l
    } = Ee(e), {
      t: i
    } = De(), {
      textColorClasses: o,
      textColorStyles: r
    } = Ye(M(e, "textColor")), {
      themeClasses: s
    } = _r(), {
      locationStyles: c
    } = Cn(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +(e.offsetY ?? 0) : ["left", "right"].includes(d) ? +(e.offsetX ?? 0) : 0));
    return N(() => {
      const d = Number(e.content), v = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`, [f, m] = Bl(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return u(e.tag, R({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, m, {
        style: e.style
      }), {
        default: () => {
          var y, b;
          return [u("div", {
            class: "v-badge__wrapper"
          }, [(b = (y = n.slots).default) == null ? void 0 : b.call(y), u(Ze, {
            transition: e.transition
          }, {
            default: () => {
              var g, S;
              return [pe(u("span", R({
                class: ["v-badge__badge", s.value, t.value, l.value, o.value],
                style: [a.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, f), [e.dot ? void 0 : n.slots.badge ? (S = (g = n.slots).badge) == null ? void 0 : S.call(g) : e.icon ? u(Se, {
                icon: e.icon
              }, null) : v]), [[Ct, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), Nf = $({
  color: String,
  density: String,
  ...J()
}, "VBannerActions"), Tu = F()({
  name: "VBannerActions",
  props: Nf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Te({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), N(() => {
      var a;
      return u("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), $u = Bt("v-banner-text"), zf = $({
  avatar: String,
  bgColor: String,
  color: String,
  icon: le,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...it(),
  ...J(),
  ...je(),
  ...Fe(),
  ...wn({
    mobile: null
  }),
  ...We(),
  ...Mt(),
  ...Nn(),
  ..._e(),
  ...ve(),
  ...ge()
}, "VBanner"), Hf = F()({
  name: "VBanner",
  props: zf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = we(e, "bgColor"), {
      borderClasses: i
    } = st(e), {
      densityClasses: o
    } = et(e), {
      displayClasses: r,
      mobile: s
    } = ht(e), {
      dimensionStyles: c
    } = Re(e), {
      elevationClasses: d
    } = Ue(e), {
      locationStyles: v
    } = Cn(e), {
      positionClasses: f
    } = zn(e), {
      roundedClasses: m
    } = Ee(e), {
      themeClasses: y
    } = ke(e), b = M(e, "color"), g = M(e, "density");
    Te({
      VBannerActions: {
        color: b,
        density: g
      }
    }), N(() => {
      const S = !!(e.text || t.text), k = !!(e.avatar || e.icon), V = !!(k || t.prepend);
      return u(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, y.value, a.value, i.value, o.value, r.value, d.value, f.value, m.value, e.class],
        style: [l.value, c.value, v.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var _;
          return [V && u("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !k,
            defaults: {
              VAvatar: {
                color: b.value,
                density: g.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : u(ft, {
            key: "prepend-avatar",
            color: b.value,
            density: g.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), u("div", {
            class: "v-banner__content"
          }, [S && u($u, {
            key: "text"
          }, {
            default: () => {
              var I;
              return [((I = t.text) == null ? void 0 : I.call(t)) ?? e.text];
            }
          }), (_ = t.default) == null ? void 0 : _.call(t)]), t.actions && u(Tu, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), Wf = $({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...it(),
  ...J(),
  ...je(),
  ...We(),
  ..._e(),
  ...mn({
    name: "bottom-navigation"
  }),
  ...ve({
    tag: "header"
  }),
  ...bn({
    selectedClass: "v-btn--selected"
  }),
  ...ge()
}, "VBottomNavigation"), jf = F()({
  name: "VBottomNavigation",
  props: Wf(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = _r(), {
      borderClasses: l
    } = st(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = we(M(e, "bgColor")), {
      densityClasses: r
    } = et(e), {
      elevationClasses: s
    } = Ue(e), {
      roundedClasses: c
    } = Ee(e), {
      ssrBootStyles: d
    } = hn(), v = h(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = ie(e, "active", e.active), {
      layoutItemStyles: m
    } = gn({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: h(() => "bottom"),
      layoutSize: h(() => f.value ? v.value : 0),
      elementSize: v,
      active: f,
      absolute: M(e, "absolute")
    });
    return qt(e, Ii), Te({
      VBtn: {
        baseColor: M(e, "baseColor"),
        color: M(e, "color"),
        density: M(e, "density"),
        stacked: h(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), N(() => u(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": f.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, r.value, s.value, c.value, e.class],
      style: [o.value, m.value, {
        height: K(v.value)
      }, d.value, e.style]
    }, {
      default: () => [t.default && u("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), {};
  }
}), Eu = $({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...va({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Wa
    },
    zIndex: 2400
  })
}, "VDialog"), jl = F()({
  name: "VDialog",
  props: Eu(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), {
      scopeId: i
    } = Vn(), o = j();
    function r(d) {
      var m, y;
      const v = d.relatedTarget, f = d.target;
      if (v !== f && ((m = o.value) != null && m.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(f) && // It isn't inside the dialog body
      !o.value.contentEl.contains(f)) {
        const b = qn(o.value.contentEl);
        if (!b.length) return;
        const g = b[0], S = b[b.length - 1];
        v === g ? S.focus() : g.focus();
      }
    }
    Ke(() => {
      document.removeEventListener("focusin", r);
    }), Ae && X(() => l.value && e.retainFocus, (d) => {
      d ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function s() {
      var d;
      t("afterEnter"), (d = o.value) != null && d.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return X(l, async (d) => {
      var v;
      d || (await Ce(), (v = o.value.activatorEl) == null || v.focus({
        preventScroll: !0
      }));
    }), N(() => {
      const d = Pt.filterProps(e), v = R({
        "aria-haspopup": "dialog"
      }, e.activatorProps), f = R({
        tabindex: -1
      }, e.contentProps);
      return u(Pt, R({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, d, {
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        "aria-modal": "true",
        activatorProps: v,
        contentProps: f,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var m = arguments.length, y = new Array(m), b = 0; b < m; b++)
            y[b] = arguments[b];
          return u(me, {
            root: "VDialog"
          }, {
            default: () => {
              var g;
              return [(g = a.default) == null ? void 0 : g.call(a, ...y)];
            }
          });
        }
      });
    }), yt({}, o);
  }
}), Gf = $({
  inset: Boolean,
  ...Eu({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), Uf = F()({
  name: "VBottomSheet",
  props: Gf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue");
    return N(() => {
      const l = jl.filterProps(e);
      return u(jl, R(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Yf = $({
  divider: [Number, String],
  ...J()
}, "VBreadcrumbsDivider"), Du = F()({
  name: "VBreadcrumbsDivider",
  props: Yf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      var a;
      return u("li", {
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider]);
    }), {};
  }
}), qf = $({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...J(),
  ...sa(),
  ...ve({
    tag: "li"
  })
}, "VBreadcrumbsItem"), Mu = F()({
  name: "VBreadcrumbsItem",
  props: qf(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = ua(e, a), i = h(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), o = h(() => i.value ? e.activeColor : e.color), {
      textColorClasses: r,
      textColorStyles: s
    } = Ye(o);
    return N(() => u(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, r.value, e.class],
      style: [s.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var c, d;
        return [l.isLink.value ? u("a", R({
          class: "v-breadcrumbs-item--link",
          onClick: l.navigate
        }, l.linkProps), [((d = t.default) == null ? void 0 : d.call(t)) ?? e.title]) : ((c = t.default) == null ? void 0 : c.call(t)) ?? e.title];
      }
    })), {};
  }
}), Kf = $({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: le,
  items: {
    type: Array,
    default: () => []
  },
  ...J(),
  ...je(),
  ..._e(),
  ...ve({
    tag: "ul"
  })
}, "VBreadcrumbs"), Xf = F()({
  name: "VBreadcrumbs",
  props: Kf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = we(M(e, "bgColor")), {
      densityClasses: i
    } = et(e), {
      roundedClasses: o
    } = Ee(e);
    Te({
      VBreadcrumbsDivider: {
        divider: M(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: M(e, "activeClass"),
        activeColor: M(e, "activeColor"),
        color: M(e, "color"),
        disabled: M(e, "disabled")
      }
    });
    const r = h(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return N(() => {
      const s = !!(t.prepend || e.icon);
      return u(e.tag, {
        class: ["v-breadcrumbs", a.value, i.value, o.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [s && u("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? u(me, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : u(Se, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((d, v, f) => {
            var b;
            let {
              item: m,
              raw: y
            } = d;
            return u(oe, null, [((b = t.item) == null ? void 0 : b.call(t, {
              item: m,
              index: v
            })) ?? u(Mu, R({
              key: v,
              disabled: v >= f.length - 1
            }, typeof m == "string" ? {
              title: m
            } : m), {
              default: t.title ? () => {
                var g;
                return (g = t.title) == null ? void 0 : g.call(t, {
                  item: m,
                  index: v
                });
              } : void 0
            }), v < f.length - 1 && u(Du, null, {
              default: t.divider ? () => {
                var g;
                return (g = t.divider) == null ? void 0 : g.call(t, {
                  item: y,
                  index: v
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), Lu = F()({
  name: "VCardActions",
  props: J(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Te({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), N(() => {
      var a;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Qf = $({
  opacity: [Number, String],
  ...J(),
  ...ve()
}, "VCardSubtitle"), Ou = F()({
  name: "VCardSubtitle",
  props: Qf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Fu = Bt("v-card-title"), Zf = $({
  appendAvatar: String,
  appendIcon: le,
  prependAvatar: String,
  prependIcon: le,
  subtitle: [String, Number],
  title: [String, Number],
  ...J(),
  ...je()
}, "VCardItem"), Ru = F()({
  name: "VCardItem",
  props: Zf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), r = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? u(me, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : u(oe, null, [e.prependAvatar && u(ft, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(Se, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(Fu, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = t.title) == null ? void 0 : d.call(t)) ?? e.title];
        }
      }), s && u(Ou, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = t.subtitle) == null ? void 0 : d.call(t)) ?? e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? u(me, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : u(oe, null, [e.appendIcon && u(Se, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(ft, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Jf = $({
  opacity: [Number, String],
  ...J(),
  ...ve()
}, "VCardText"), Nu = F()({
  name: "VCardText",
  props: Jf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), em = $({
  appendAvatar: String,
  appendIcon: le,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...it(),
  ...J(),
  ...je(),
  ...Fe(),
  ...We(),
  ...qa(),
  ...Mt(),
  ...Nn(),
  ..._e(),
  ...sa(),
  ...ve(),
  ...ge(),
  ...gt({
    variant: "elevated"
  })
}, "VCard"), tm = F()({
  name: "VCard",
  directives: {
    Ripple: Lt
  },
  props: em(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      borderClasses: i
    } = st(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = yn(e), {
      densityClasses: c
    } = et(e), {
      dimensionStyles: d
    } = Re(e), {
      elevationClasses: v
    } = Ue(e), {
      loaderClasses: f
    } = oa(e), {
      locationStyles: m
    } = Cn(e), {
      positionClasses: y
    } = zn(e), {
      roundedClasses: b
    } = Ee(e), g = ua(e, t), S = h(() => e.link !== !1 && g.isLink.value), k = h(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
    return N(() => {
      const V = S.value ? "a" : e.tag, _ = !!(a.title || e.title != null), I = !!(a.subtitle || e.subtitle != null), P = _ || I, A = !!(a.append || e.appendAvatar || e.appendIcon), w = !!(a.prepend || e.prependAvatar || e.prependIcon), C = !!(a.image || e.image), p = P || w || A, x = !!(a.text || e.text != null);
      return pe(u(V, R({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": k.value
        }, l.value, i.value, o.value, c.value, v.value, f.value, y.value, b.value, s.value, e.class],
        style: [r.value, d.value, m.value, e.style],
        onClick: k.value && g.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, g.linkProps), {
        default: () => {
          var B;
          return [C && u("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? u(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : u($t, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(ra, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), p && u(Ru, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), x && u(Nu, {
            key: "text"
          }, {
            default: () => {
              var T;
              return [((T = a.text) == null ? void 0 : T.call(a)) ?? e.text];
            }
          }), (B = a.default) == null ? void 0 : B.call(a), a.actions && u(Lu, null, {
            default: a.actions
          }), Yt(k.value, "v-card")];
        }
      }), [[rt("ripple"), k.value && e.ripple]]);
    }), {};
  }
}), nm = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function am(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function lm(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), nm(n);
}
function im(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function om() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => am(t, n),
    touchend: (t) => lm(t, n),
    touchmove: (t) => im(t, n)
  };
}
function rm(e, n) {
  var r;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, i = (r = n.instance) == null ? void 0 : r.$.uid;
  if (!a || !i) return;
  const o = om(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, rr(o).forEach((s) => {
    a.addEventListener(s, o[s], l);
  });
}
function um(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  rr(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const zi = {
  mounted: rm,
  unmounted: um
}, zu = Symbol.for("vuetify:v-window"), Hu = Symbol.for("vuetify:v-window-group"), al = $({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...J(),
  ...ve(),
  ...ge()
}, "VWindow"), rn = F()({
  name: "VWindow",
  directives: {
    Touch: zi
  },
  props: al(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      isRtl: l
    } = He(), {
      t: i
    } = De(), o = qt(e, Hu), r = j(), s = h(() => l.value ? !e.reverse : e.reverse), c = Y(!1), d = h(() => {
      const _ = e.direction === "vertical" ? "y" : "x", P = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${_}${P}-transition`;
    }), v = Y(0), f = j(void 0), m = h(() => o.items.value.findIndex((_) => o.selected.value.includes(_.id)));
    X(m, (_, I) => {
      const P = o.items.value.length, A = P - 1;
      P <= 2 ? c.value = _ < I : _ === A && I === 0 ? c.value = !0 : _ === 0 && I === A ? c.value = !1 : c.value = _ < I;
    }), Ie(zu, {
      transition: d,
      isReversed: c,
      transitionCount: v,
      transitionHeight: f,
      rootRef: r
    });
    const y = h(() => e.continuous || m.value !== 0), b = h(() => e.continuous || m.value !== o.items.value.length - 1);
    function g() {
      y.value && o.prev();
    }
    function S() {
      b.value && o.next();
    }
    const k = h(() => {
      const _ = [], I = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      _.push(y.value ? t.prev ? t.prev({
        props: I
      }) : u(be, I, null) : u("div", null, null));
      const P = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return _.push(b.value ? t.next ? t.next({
        props: P
      }) : u(be, P, null) : u("div", null, null)), _;
    }), V = h(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? g() : S();
        },
        right: () => {
          s.value ? S() : g();
        },
        start: (I) => {
          let {
            originalEvent: P
          } = I;
          P.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return N(() => pe(u(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var _, I;
        return [u("div", {
          class: "v-window__container",
          style: {
            height: f.value
          }
        }, [(_ = t.default) == null ? void 0 : _.call(t, {
          group: o
        }), e.showArrows !== !1 && u("div", {
          class: "v-window__controls"
        }, [k.value])]), (I = t.additional) == null ? void 0 : I.call(t, {
          group: o
        })];
      }
    }), [[rt("touch"), V.value]])), {
      group: o
    };
  }
}), sm = $({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: le,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...al({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), cm = F()({
  name: "VCarousel",
  props: sm(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      t: l
    } = De(), i = j();
    let o = -1;
    X(a, s), X(() => e.interval, s), X(() => e.cycle, (c) => {
      c ? s() : window.clearTimeout(o);
    }), lt(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function s() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return N(() => {
      const c = rn.filterProps(e);
      return u(rn, R({
        ref: i
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: K(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (d) => {
          let {
            group: v
          } = d;
          return u(oe, null, [!e.hideDelimiters && u("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [v.items.value.length > 0 && u(me, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [v.items.value.map((f, m) => {
              const y = {
                id: `carousel-item-${f.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", m + 1, v.items.value.length),
                class: ["v-carousel__controls__item", v.isSelected(f.id) && "v-btn--active"],
                onClick: () => v.select(f.id, !0)
              };
              return t.item ? t.item({
                props: y,
                item: f
              }) : u(be, R(f, y), null);
            })]
          })]), e.progress && u(Ya, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (v.getItemIndex(a.value) + 1) / v.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), ll = $({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...J(),
  ...Sn(),
  ...Mi()
}, "VWindowItem"), un = F()({
  name: "VWindowItem",
  directives: {
    Touch: zi
  },
  props: ll(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = he(zu), l = kn(e, Hu), {
      isBooted: i
    } = hn();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = Y(!1), r = h(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var y;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = K((y = a.rootRef.value) == null ? void 0 : y.clientHeight)), a.transitionCount.value += 1);
    }
    function d() {
      s();
    }
    function v(y) {
      o.value && Ce(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = K(y.clientHeight));
      });
    }
    const f = h(() => {
      const y = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof y != "string" ? a.transition.value : y,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: d,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: d,
        onEnter: v
      } : !1;
    }), {
      hasContent: m
    } = Li(e, l.isSelected);
    return N(() => u(Ze, {
      transition: f.value,
      disabled: !i.value
    }, {
      default: () => {
        var y;
        return [pe(u("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [m.value && ((y = t.default) == null ? void 0 : y.call(t))]), [[Ct, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), dm = $({
  ...Er(),
  ...ll()
}, "VCarouselItem"), vm = F()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: dm(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    N(() => {
      const l = $t.filterProps(e), i = un.filterProps(e);
      return u(un, R({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [u($t, R(a, l), t)]
      });
    });
  }
}), fm = Bt("v-code", "code"), mm = $({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...J()
}, "VColorPickerCanvas"), gm = mt({
  name: "VColorPickerCanvas",
  props: mm(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = Y(!1), l = j(), i = Y(parseFloat(e.width)), o = Y(parseFloat(e.height)), r = j({
      x: 0,
      y: 0
    }), s = h({
      get: () => r.value,
      set(g) {
        var V, _;
        if (!l.value) return;
        const {
          x: S,
          y: k
        } = g;
        r.value = g, t("update:color", {
          h: ((V = e.color) == null ? void 0 : V.h) ?? 0,
          s: Le(S, 0, i.value) / i.value,
          v: 1 - Le(k, 0, o.value) / o.value,
          a: ((_ = e.color) == null ? void 0 : _.a) ?? 1
        });
      }
    }), c = h(() => {
      const {
        x: g,
        y: S
      } = s.value, k = parseInt(e.dotSize, 10) / 2;
      return {
        width: K(e.dotSize),
        height: K(e.dotSize),
        transform: `translate(${K(g - k)}, ${K(S - k)})`
      };
    }), {
      resizeRef: d
    } = kt((g) => {
      var V;
      if (!((V = d.el) != null && V.offsetParent)) return;
      const {
        width: S,
        height: k
      } = g[0].contentRect;
      i.value = S, o.value = k;
    });
    function v(g, S, k) {
      const {
        left: V,
        top: _,
        width: I,
        height: P
      } = k;
      s.value = {
        x: Le(g - V, 0, I),
        y: Le(S - _, 0, P)
      };
    }
    function f(g) {
      g.type === "mousedown" && g.preventDefault(), !e.disabled && (m(g), window.addEventListener("mousemove", m), window.addEventListener("mouseup", y), window.addEventListener("touchmove", m), window.addEventListener("touchend", y));
    }
    function m(g) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const S = $c(g);
      v(S.clientX, S.clientY, l.value.getBoundingClientRect());
    }
    function y() {
      window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", y), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", y);
    }
    function b() {
      var _;
      if (!l.value) return;
      const g = l.value, S = g.getContext("2d");
      if (!S) return;
      const k = S.createLinearGradient(0, 0, g.width, 0);
      k.addColorStop(0, "hsla(0, 0%, 100%, 1)"), k.addColorStop(1, `hsla(${((_ = e.color) == null ? void 0 : _.h) ?? 0}, 100%, 50%, 1)`), S.fillStyle = k, S.fillRect(0, 0, g.width, g.height);
      const V = S.createLinearGradient(0, 0, 0, g.height);
      V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), S.fillStyle = V, S.fillRect(0, 0, g.width, g.height);
    }
    return X(() => {
      var g;
      return (g = e.color) == null ? void 0 : g.h;
    }, b, {
      immediate: !0
    }), X(() => [i.value, o.value], (g, S) => {
      b(), r.value = {
        x: s.value.x * g[0] / S[0],
        y: s.value.y * g[1] / S[1]
      };
    }, {
      flush: "post"
    }), X(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), lt(() => b()), N(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: f,
      onTouchstartPassive: f
    }, [u("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && u("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function hm(e, n) {
  if (n) {
    const {
      a: t,
      ...a
    } = e;
    return a;
  }
  return e;
}
function ym(e, n) {
  if (n == null || typeof n == "string") {
    const t = kr(e);
    return e.a === 1 ? t.slice(0, 7) : t;
  }
  if (typeof n == "object") {
    let t;
    return Zt(n, ["r", "g", "b"]) ? t = Tt(e) : Zt(n, ["h", "s", "l"]) ? t = gr(e) : Zt(n, ["h", "s", "v"]) && (t = e), hm(t, !Zt(n, ["a"]) && e.a === 1);
  }
  return e;
}
const pn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Gl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({
      ...e,
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({
      ...e,
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({
      ...e,
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Tt,
  from: Ha
};
var tr;
const bm = {
  ...Gl,
  inputs: (tr = Gl.inputs) == null ? void 0 : tr.slice(0, 3)
}, Ul = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({
      ...e,
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: gr,
  from: yi
}, Sm = {
  ...Ul,
  inputs: Ul.inputs.slice(0, 3)
}, Wu = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: kr,
  from: Sr
}, km = {
  ...Wu,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}, ln = {
  rgb: bm,
  rgba: Gl,
  hsl: Sm,
  hsla: Ul,
  hex: km,
  hexa: Wu
}, Cm = (e) => {
  let {
    label: n,
    ...t
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", t, null), u("span", null, [n])]);
}, wm = $({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(ln).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(ln),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(ln).includes(n))
  },
  ...J()
}, "VColorPickerEdit"), Vm = mt({
  name: "VColorPickerEdit",
  props: wm(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = h(() => e.modes.map((i) => ({
      ...ln[i],
      name: i
    }))), l = h(() => {
      var r;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: d,
          ...v
        } = s;
        return {
          ...i.inputProps,
          ...v,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (f) => {
            const m = f.target;
            m && t("update:color", i.from(d(o ?? i.to(pn), m.value)));
          }
        };
      });
    });
    return N(() => {
      var i;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => u(Cm, o, null)), a.value.length > 1 && u(be, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          t("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Hi = Symbol.for("vuetify:v-slider");
function Yl(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function xm(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const ju = $({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ..._e(),
  ...We({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Gu = (e) => {
  const n = h(() => parseFloat(e.min)), t = h(() => parseFloat(e.max)), a = h(() => +e.step > 0 ? parseFloat(e.step) : 0), l = h(() => Math.max(co(a.value), co(n.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = Le(o, n.value, t.value), s = n.value % a.value, c = Math.round((r - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: i
  };
}, Uu = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = He(), s = M(n, "reverse"), c = h(() => n.direction === "vertical"), d = h(() => c.value !== s.value), {
    min: v,
    max: f,
    step: m,
    decimals: y,
    roundValue: b
  } = t, g = h(() => parseInt(n.thumbSize, 10)), S = h(() => parseInt(n.tickSize, 10)), k = h(() => parseInt(n.trackSize, 10)), V = h(() => (f.value - v.value) / m.value), _ = M(n, "disabled"), I = h(() => n.error || n.disabled ? void 0 : n.thumbColor ?? n.color), P = h(() => n.error || n.disabled ? void 0 : n.trackColor ?? n.color), A = h(() => n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color), w = Y(!1), C = Y(0), p = j(), x = j();
  function B(H) {
    var ce;
    const ae = n.direction === "vertical", re = ae ? "top" : "left", Ve = ae ? "height" : "width", ye = ae ? "clientY" : "clientX", {
      [re]: U,
      [Ve]: fe
    } = (ce = p.value) == null ? void 0 : ce.$el.getBoundingClientRect(), G = xm(H, ye);
    let Z = Math.min(Math.max((G - U - C.value) / fe, 0), 1) || 0;
    return (ae ? d.value : d.value !== r.value) && (Z = 1 - Z), b(v.value + Z * (f.value - v.value));
  }
  const T = (H) => {
    i({
      value: B(H)
    }), w.value = !1, C.value = 0;
  }, E = (H) => {
    x.value = o(H), x.value && (x.value.focus(), w.value = !0, x.value.contains(H.target) ? C.value = Yl(H, x.value, n.direction) : (C.value = 0, l({
      value: B(H)
    })), a({
      value: B(H)
    }));
  }, z = {
    passive: !0,
    capture: !0
  };
  function W(H) {
    l({
      value: B(H)
    });
  }
  function Q(H) {
    H.stopPropagation(), H.preventDefault(), T(H), window.removeEventListener("mousemove", W, z), window.removeEventListener("mouseup", Q);
  }
  function ee(H) {
    var ae;
    T(H), window.removeEventListener("touchmove", W, z), (ae = H.target) == null || ae.removeEventListener("touchend", ee);
  }
  function O(H) {
    var ae;
    E(H), window.addEventListener("touchmove", W, z), (ae = H.target) == null || ae.addEventListener("touchend", ee, {
      passive: !1
    });
  }
  function D(H) {
    H.preventDefault(), E(H), window.addEventListener("mousemove", W, z), window.addEventListener("mouseup", Q, {
      passive: !1
    });
  }
  const L = (H) => {
    const ae = (H - v.value) / (f.value - v.value) * 100;
    return Le(isNaN(ae) ? 0 : ae, 0, 100);
  }, q = M(n, "showTicks"), te = h(() => q.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((H) => ({
    value: H,
    position: L(H),
    label: H.toString()
  })) : Object.keys(n.ticks).map((H) => ({
    value: parseFloat(H),
    position: L(parseFloat(H)),
    label: n.ticks[H]
  })) : V.value !== 1 / 0 ? Nt(V.value + 1).map((H) => {
    const ae = v.value + H * m.value;
    return {
      value: ae,
      position: L(ae)
    };
  }) : [] : []), ne = h(() => te.value.some((H) => {
    let {
      label: ae
    } = H;
    return !!ae;
  })), se = {
    activeThumbRef: x,
    color: M(n, "color"),
    decimals: y,
    disabled: _,
    direction: M(n, "direction"),
    elevation: M(n, "elevation"),
    hasLabels: ne,
    isReversed: s,
    indexFromEnd: d,
    min: v,
    max: f,
    mousePressed: w,
    numTicks: V,
    onSliderMousedown: D,
    onSliderTouchstart: O,
    parsedTicks: te,
    parseMouseMove: B,
    position: L,
    readonly: M(n, "readonly"),
    rounded: M(n, "rounded"),
    roundValue: b,
    showTicks: q,
    startOffset: C,
    step: m,
    thumbSize: g,
    thumbColor: I,
    thumbLabel: M(n, "thumbLabel"),
    ticks: M(n, "ticks"),
    tickSize: S,
    trackColor: P,
    trackContainerRef: p,
    trackFillColor: A,
    trackSize: k,
    vertical: c
  };
  return Ie(Hi, se), se;
}, Pm = $({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...J()
}, "VSliderThumb"), ql = F()({
  name: "VSliderThumb",
  directives: {
    Ripple: Lt
  },
  props: Pm(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = he(Hi), {
      isRtl: i,
      rtlClasses: o
    } = He();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: s,
      disabled: c,
      thumbSize: d,
      thumbLabel: v,
      direction: f,
      isReversed: m,
      vertical: y,
      readonly: b,
      elevation: g,
      mousePressed: S,
      decimals: k,
      indexFromEnd: V
    } = l, _ = h(() => c.value ? void 0 : g.value), {
      elevationClasses: I
    } = Ue(_), {
      textColorClasses: P,
      textColorStyles: A
    } = Ye(r), {
      pageup: w,
      pagedown: C,
      end: p,
      home: x,
      left: B,
      right: T,
      down: E,
      up: z
    } = _l, W = [w, C, p, x, B, T, E, z], Q = h(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function ee(D, L) {
      if (!W.includes(D.key)) return;
      D.preventDefault();
      const q = s.value || 0.1, te = (e.max - e.min) / q;
      if ([B, T, E, z].includes(D.key)) {
        const se = (y.value ? [i.value ? B : T, m.value ? E : z] : V.value !== i.value ? [B, z] : [T, z]).includes(D.key) ? 1 : -1, H = D.shiftKey ? 2 : D.ctrlKey ? 1 : 0;
        L = L + se * q * Q.value[H];
      } else if (D.key === x)
        L = e.min;
      else if (D.key === p)
        L = e.max;
      else {
        const ne = D.key === C ? 1 : -1;
        L = L - ne * q * (te > 100 ? te / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, L));
    }
    function O(D) {
      const L = ee(D, e.modelValue);
      L != null && a("update:modelValue", L);
    }
    return N(() => {
      const D = K(V.value ? 100 - e.position : e.position, "%");
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && S.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": D,
          "--v-slider-thumb-size": K(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!b.value,
        "aria-orientation": f.value,
        onKeydown: b.value ? void 0 : O
      }, [u("div", {
        class: ["v-slider-thumb__surface", P.value, I.value],
        style: {
          ...A.value
        }
      }, null), pe(u("div", {
        class: ["v-slider-thumb__ripple", P.value],
        style: A.value
      }, null), [[rt("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(wi, {
        origin: "bottom center"
      }, {
        default: () => {
          var L;
          return [pe(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((L = t["thumb-label"]) == null ? void 0 : L.call(t, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? k.value : 1)])])]), [[Ct, v.value && e.focused || v.value === "always"]])];
        }
      })]);
    }), {};
  }
}), Im = $({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...J()
}, "VSliderTrack"), Yu = F()({
  name: "VSliderTrack",
  props: Im(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = he(Hi);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: d,
      trackSize: v,
      vertical: f,
      min: m,
      max: y,
      indexFromEnd: b
    } = a, {
      roundedClasses: g
    } = Ee(o), {
      backgroundColorClasses: S,
      backgroundColorStyles: k
    } = we(d), {
      backgroundColorClasses: V,
      backgroundColorStyles: _
    } = we(c), I = h(() => `inset-${f.value ? "block" : "inline"}-${b.value ? "end" : "start"}`), P = h(() => f.value ? "height" : "width"), A = h(() => ({
      [I.value]: "0%",
      [P.value]: "100%"
    })), w = h(() => e.stop - e.start), C = h(() => ({
      [I.value]: K(e.start, "%"),
      [P.value]: K(w.value, "%")
    })), p = h(() => r.value ? (f.value ? i.value.slice().reverse() : i.value).map((B, T) => {
      var z;
      const E = B.value !== m.value && B.value !== y.value ? K(B.position, "%") : void 0;
      return u("div", {
        key: B.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": B.position >= e.start && B.position <= e.stop,
          "v-slider-track__tick--first": B.value === m.value,
          "v-slider-track__tick--last": B.value === y.value
        }],
        style: {
          [I.value]: E
        }
      }, [(B.label || t["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((z = t["tick-label"]) == null ? void 0 : z.call(t, {
        tick: B,
        index: T
      })) ?? B.label])]);
    }) : []);
    return N(() => u("div", {
      class: ["v-slider-track", g.value, e.class],
      style: [{
        "--v-slider-track-size": K(v.value),
        "--v-slider-tick-size": K(s.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", V.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...A.value,
        ..._.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", S.value],
      style: {
        ...C.value,
        ...k.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [p.value])])), {};
  }
}), _m = $({
  ...ca(),
  ...ju(),
  ...Ft(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Kl = F()({
  name: "VSlider",
  props: _m(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), {
      rtlClasses: i
    } = He(), o = Gu(e), r = ie(e, "modelValue", void 0, (P) => o.roundValue(P ?? o.min.value)), {
      min: s,
      max: c,
      mousePressed: d,
      roundValue: v,
      onSliderMousedown: f,
      onSliderTouchstart: m,
      trackContainerRef: y,
      position: b,
      hasLabels: g,
      readonly: S
    } = Uu({
      props: e,
      steps: o,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (P) => {
        let {
          value: A
        } = P;
        const w = v(A);
        r.value = w, a("end", w);
      },
      onSliderMove: (P) => {
        let {
          value: A
        } = P;
        return r.value = v(A);
      },
      getActiveThumb: () => {
        var P;
        return (P = l.value) == null ? void 0 : P.$el;
      }
    }), {
      isFocused: k,
      focus: V,
      blur: _
    } = Ot(e), I = h(() => b(r.value));
    return N(() => {
      const P = qe.filterProps(e), A = !!(e.label || t.label || t.prepend);
      return u(qe, R({
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || g.value,
          "v-slider--focused": k.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, P, {
        focused: k.value
      }), {
        ...t,
        prepend: A ? (w) => {
          var C, p;
          return u(oe, null, [((C = t.label) == null ? void 0 : C.call(t, w)) ?? (e.label ? u(Hn, {
            id: w.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (p = t.prepend) == null ? void 0 : p.call(t, w)]);
        } : void 0,
        default: (w) => {
          let {
            id: C,
            messagesId: p
          } = w;
          return u("div", {
            class: "v-slider__container",
            onMousedown: S.value ? void 0 : f,
            onTouchstartPassive: S.value ? void 0 : m
          }, [u("input", {
            id: C.value,
            name: e.name || C.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(Yu, {
            ref: y,
            start: 0,
            stop: I.value
          }, {
            "tick-label": t["tick-label"]
          }), u(ql, {
            ref: l,
            "aria-describedby": p.value,
            focused: k.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (x) => r.value = x,
            position: I.value,
            elevation: e.elevation,
            onFocus: V,
            onBlur: _,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Bm = $({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...J()
}, "VColorPickerPreview"), pm = mt({
  name: "VColorPickerPreview",
  props: Bm(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    Sc(() => a.abort());
    async function l() {
      if (!oo) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: a.signal
        }), r = Sr(o.sRGBHex);
        t("update:color", {
          ...e.color ?? pn,
          ...r
        });
      } catch {
      }
    }
    return N(() => {
      var i, o;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [oo && u("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [u(be, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), u("div", {
        class: "v-color-picker-preview__dot"
      }, [u("div", {
        style: {
          background: yr(e.color ?? pn)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(Kl, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? pn,
          h: r
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && u(Kl, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? pn,
          a: r
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), Am = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, Tm = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, $m = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, Em = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, Dm = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, Mm = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, Lm = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, Om = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, Fm = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, Rm = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, Nm = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, zm = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, Hm = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, Wm = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, jm = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, Gm = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, Um = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, Ym = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, qm = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, Km = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Xm = {
  red: Am,
  pink: Tm,
  purple: $m,
  deepPurple: Em,
  indigo: Dm,
  blue: Mm,
  lightBlue: Lm,
  cyan: Om,
  teal: Fm,
  green: Rm,
  lightGreen: Nm,
  lime: zm,
  yellow: Hm,
  amber: Wm,
  orange: jm,
  deepOrange: Gm,
  brown: Um,
  blueGrey: Ym,
  grey: qm,
  shades: Km
}, Qm = $({
  swatches: {
    type: Array,
    default: () => Zm(Xm)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...J()
}, "VColorPickerSwatches");
function Zm(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const Jm = mt({
  name: "VColorPickerSwatches",
  props: Qm(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return N(() => u("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: K(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = zt(l), o = Ha(i), r = hr(i);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && t("update:color", o)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && It(e.color, o) ? u(Se, {
        size: "x-small",
        icon: "$success",
        color: Jc(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), il = $({
  color: String,
  ...it(),
  ...J(),
  ...Fe(),
  ...We(),
  ...Mt(),
  ...Nn(),
  ..._e(),
  ...ve(),
  ...ge()
}, "VSheet"), sn = F()({
  name: "VSheet",
  props: il(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = we(M(e, "color")), {
      borderClasses: o
    } = st(e), {
      dimensionStyles: r
    } = Re(e), {
      elevationClasses: s
    } = Ue(e), {
      locationStyles: c
    } = Cn(e), {
      positionClasses: d
    } = zn(e), {
      roundedClasses: v
    } = Ee(e);
    return N(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, s.value, d.value, v.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, t)), {};
  }
}), eg = $({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(ln).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(ln),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(ln).includes(n))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...Oe(il({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), tg = mt({
  name: "VColorPicker",
  props: eg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const n = ie(e, "mode"), t = j(null), a = ie(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = Ha(zt(s));
      } catch (d) {
        return xt(d), null;
      }
      return c;
    }, (s) => s ? ym(s, e.modelValue) : null), l = h(() => a.value ? {
      ...a.value,
      h: t.value ?? a.value.h
    } : null), {
      rtlClasses: i
    } = He();
    let o = !0;
    X(a, (s) => {
      if (!o) {
        o = !0;
        return;
      }
      s && (t.value = s.h);
    }, {
      immediate: !0
    });
    const r = (s) => {
      o = !1, t.value = s.h, a.value = s;
    };
    return ui(() => {
      e.modes.includes(n.value) || (n.value = e.modes[0]);
    }), Te({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), N(() => {
      const s = sn.filterProps(e);
      return u(sn, R({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": yr({
            ...l.value ?? pn,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(gm, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && u("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && u(pm, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !n.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(Vm, {
          key: "edit",
          modes: e.modes,
          mode: n.value,
          "onUpdate:mode": (c) => n.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Jm, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": r,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function ng(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? u(oe, null, [u("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, n)]), u("span", {
    class: "v-combobox__mask"
  }, [e.substr(n, t)]), u("span", {
    class: "v-combobox__unmask"
  }, [e.substr(n + t)])]) : e;
}
const ag = $({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...ma({
    filterKeys: ["title"]
  }),
  ...Ri({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Oe(tl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...wt({
    transition: !1
  })
}, "VCombobox"), lg = F()({
  name: "VCombobox",
  props: ag(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var fe;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = De(), i = j(), o = Y(!1), r = Y(!0), s = Y(!1), c = j(), d = j(), v = ie(e, "menu"), f = h({
      get: () => v.value,
      set: (G) => {
        var Z;
        v.value && !G && ((Z = c.value) != null && Z.ΨopenChildren.size) || (v.value = G);
      }
    }), m = Y(-1);
    let y = !1;
    const b = h(() => {
      var G;
      return (G = i.value) == null ? void 0 : G.color;
    }), g = h(() => f.value ? e.closeText : e.openText), {
      items: S,
      transformIn: k,
      transformOut: V
    } = $i(e), {
      textColorClasses: _,
      textColorStyles: I
    } = Ye(b), P = ie(e, "modelValue", [], (G) => k(Be(G)), (G) => {
      const Z = V(G);
      return e.multiple ? Z : Z[0] ?? null;
    }), A = Qa(e), w = h(() => !!(e.chips || a.chip)), C = h(() => w.value || !!a.selection), p = Y(!e.multiple && !C.value ? ((fe = P.value[0]) == null ? void 0 : fe.title) ?? "" : ""), x = h({
      get: () => p.value,
      set: (G) => {
        var Z;
        if (p.value = G ?? "", !e.multiple && !C.value && (P.value = [Rt(e, G)]), G && e.multiple && ((Z = e.delimiters) != null && Z.length)) {
          const ce = G.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          ce.length > 1 && (ce.forEach((ue) => {
            ue = ue.trim(), ue && re(Rt(e, ue));
          }), p.value = "");
        }
        G || (m.value = -1), r.value = !G;
      }
    }), B = h(() => typeof e.counterValue == "function" ? e.counterValue(P.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? P.value.length : x.value.length);
    X(p, (G) => {
      y ? Ce(() => y = !1) : o.value && !f.value && (f.value = !0), t("update:search", G);
    }), X(P, (G) => {
      var Z;
      !e.multiple && !C.value && (p.value = ((Z = G[0]) == null ? void 0 : Z.title) ?? "");
    });
    const {
      filteredItems: T,
      getMatches: E
    } = ga(e, S, () => r.value ? "" : x.value), z = h(() => e.hideSelected ? T.value.filter((G) => !P.value.some((Z) => Z.value === G.value)) : T.value), W = h(() => P.value.map((G) => G.value)), Q = h(() => {
      var Z;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && x.value === ((Z = z.value[0]) == null ? void 0 : Z.title)) && z.value.length > 0 && !r.value && !s.value;
    }), ee = h(() => e.hideNoData && !z.value.length || A.isReadonly.value || A.isDisabled.value), O = j(), D = Fi(O, i);
    function L(G) {
      y = !0, e.openOnClear && (f.value = !0);
    }
    function q() {
      ee.value || (f.value = !0);
    }
    function te(G) {
      ee.value || (o.value && (G.preventDefault(), G.stopPropagation()), f.value = !f.value);
    }
    function ne(G) {
      var Z;
      Aa(G) && ((Z = i.value) == null || Z.focus());
    }
    function se(G) {
      var ue;
      if (Bc(G) || A.isReadonly.value) return;
      const Z = i.value.selectionStart, ce = P.value.length;
      if ((m.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(G.key)) && G.preventDefault(), ["Enter", "ArrowDown"].includes(G.key) && (f.value = !0), ["Escape"].includes(G.key) && (f.value = !1), ["Enter", "Escape", "Tab"].includes(G.key) && (Q.value && ["Enter", "Tab"].includes(G.key) && !P.value.some((de) => {
        let {
          value: xe
        } = de;
        return xe === z.value[0].value;
      }) && re(T.value[0]), r.value = !0), G.key === "ArrowDown" && Q.value && ((ue = O.value) == null || ue.focus("next")), G.key === "Enter" && x.value && (re(Rt(e, x.value)), C.value && (p.value = "")), ["Backspace", "Delete"].includes(G.key)) {
        if (!e.multiple && C.value && P.value.length > 0 && !x.value) return re(P.value[0], !1);
        if (~m.value) {
          const de = m.value;
          re(P.value[m.value], !1), m.value = de >= ce - 1 ? ce - 2 : de;
        } else G.key === "Backspace" && !x.value && (m.value = ce - 1);
      }
      if (e.multiple) {
        if (G.key === "ArrowLeft") {
          if (m.value < 0 && Z > 0) return;
          const de = m.value > -1 ? m.value - 1 : ce - 1;
          P.value[de] ? m.value = de : (m.value = -1, i.value.setSelectionRange(x.value.length, x.value.length));
        }
        if (G.key === "ArrowRight") {
          if (m.value < 0) return;
          const de = m.value + 1;
          P.value[de] ? m.value = de : (m.value = -1, i.value.setSelectionRange(0, 0));
        }
      }
    }
    function H() {
      var G;
      e.eager && ((G = d.value) == null || G.calculateVisibleItems());
    }
    function ae() {
      var G;
      o.value && (r.value = !0, (G = i.value) == null || G.focus());
    }
    function re(G) {
      let Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!G || G.props.disabled))
        if (e.multiple) {
          const ce = P.value.findIndex((de) => e.valueComparator(de.value, G.value)), ue = Z ?? !~ce;
          if (~ce) {
            const de = ue ? [...P.value, G] : [...P.value];
            de.splice(ce, 1), P.value = de;
          } else ue && (P.value = [...P.value, G]);
          e.clearOnSelect && (x.value = "");
        } else {
          const ce = Z !== !1;
          P.value = ce ? [G] : [], p.value = ce && !C.value ? G.title : "", Ce(() => {
            f.value = !1, r.value = !0;
          });
        }
    }
    function Ve(G) {
      o.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function ye(G) {
      s.value = !1;
    }
    function U(G) {
      (G == null || G === "" && !e.multiple && !C.value) && (P.value = []);
    }
    return X(o, (G, Z) => {
      if (!(G || G === Z) && (m.value = -1, f.value = !1, x.value)) {
        if (e.multiple) {
          re(Rt(e, x.value));
          return;
        }
        if (!C.value) return;
        P.value.some((ce) => {
          let {
            title: ue
          } = ce;
          return ue === x.value;
        }) ? p.value = "" : re(Rt(e, x.value));
      }
    }), X(f, () => {
      if (!e.hideSelected && f.value && P.value.length) {
        const G = z.value.findIndex((Z) => P.value.some((ce) => e.valueComparator(ce.value, Z.value)));
        Ae && window.requestAnimationFrame(() => {
          var Z;
          G >= 0 && ((Z = d.value) == null || Z.scrollToIndex(G));
        });
      }
    }), X(() => e.items, (G, Z) => {
      f.value || o.value && !Z.length && G.length && (f.value = !0);
    }), N(() => {
      const G = !!(!e.hideNoData || z.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), Z = P.value.length > 0, ce = on.filterProps(e);
      return u(on, R({
        ref: i
      }, ce, {
        modelValue: x.value,
        "onUpdate:modelValue": [(ue) => x.value = ue, U],
        focused: o.value,
        "onUpdate:focused": (ue) => o.value = ue,
        validationValue: P.externalValue,
        counterValue: B.value,
        dirty: Z,
        class: ["v-combobox", {
          "v-combobox--active-menu": f.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!C.value,
          "v-combobox--selecting-index": m.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: A.isReadonly.value,
        placeholder: Z ? void 0 : e.placeholder,
        "onClick:clear": L,
        "onMousedown:control": q,
        onKeydown: se
      }), {
        ...a,
        default: () => u(oe, null, [u(Dn, R({
          ref: c,
          modelValue: f.value,
          "onUpdate:modelValue": (ue) => f.value = ue,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: ee.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: H,
          onAfterLeave: ae
        }, e.menuProps), {
          default: () => [G && u(Ja, R({
            ref: O,
            selected: W.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ue) => ue.preventDefault(),
            onKeydown: ne,
            onFocusin: Ve,
            onFocusout: ye,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, D, e.listProps), {
            default: () => {
              var ue, de, xe;
              return [(ue = a["prepend-item"]) == null ? void 0 : ue.call(a), !z.value.length && !e.hideNoData && (((de = a["no-data"]) == null ? void 0 : de.call(a)) ?? u(Dt, {
                title: l(e.noDataText)
              }, null)), u(nl, {
                ref: d,
                renderless: !0,
                items: z.value
              }, {
                default: (tt) => {
                  var Xt;
                  let {
                    item: Pe,
                    index: Vt,
                    itemRef: Qe
                  } = tt;
                  const Kt = R(Pe.props, {
                    ref: Qe,
                    key: Vt,
                    active: Q.value && Vt === 0 ? !0 : void 0,
                    onClick: () => re(Pe, null)
                  });
                  return ((Xt = a.item) == null ? void 0 : Xt.call(a, {
                    item: Pe,
                    index: Vt,
                    props: Kt
                  })) ?? u(Dt, R(Kt, {
                    role: "option"
                  }), {
                    prepend: (ya) => {
                      let {
                        isSelected: ba
                      } = ya;
                      return u(oe, null, [e.multiple && !e.hideSelected ? u(Et, {
                        key: Pe.value,
                        modelValue: ba,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Pe.props.prependAvatar && u(ft, {
                        image: Pe.props.prependAvatar
                      }, null), Pe.props.prependIcon && u(Se, {
                        icon: Pe.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var ya, ba;
                      return r.value ? Pe.title : ng(Pe.title, (ya = E(Pe)) == null ? void 0 : ya.title, ((ba = x.value) == null ? void 0 : ba.length) ?? 0);
                    }
                  });
                }
              }), (xe = a["append-item"]) == null ? void 0 : xe.call(a)];
            }
          })]
        }), P.value.map((ue, de) => {
          function xe(Qe) {
            Qe.stopPropagation(), Qe.preventDefault(), re(ue, !1);
          }
          const tt = {
            "onClick:close": xe,
            onKeydown(Qe) {
              Qe.key !== "Enter" && Qe.key !== " " || (Qe.preventDefault(), Qe.stopPropagation(), xe(Qe));
            },
            onMousedown(Qe) {
              Qe.preventDefault(), Qe.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Pe = w.value ? !!a.chip : !!a.selection, Vt = Pe ? Na(w.value ? a.chip({
            item: ue,
            index: de,
            props: tt
          }) : a.selection({
            item: ue,
            index: de
          })) : void 0;
          if (!(Pe && !Vt))
            return u("div", {
              key: ue.value,
              class: ["v-combobox__selection", de === m.value && ["v-combobox__selection--selected", _.value]],
              style: de === m.value ? I.value : {}
            }, [w.value ? a.chip ? u(me, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ue.title
                }
              }
            }, {
              default: () => [Vt]
            }) : u(Wn, R({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ue.title,
              disabled: ue.props.disabled
            }, tt), null) : Vt ?? u("span", {
              class: "v-combobox__selection-text"
            }, [ue.title, e.multiple && de < P.value.length - 1 && u("span", {
              class: "v-combobox__selection-comma"
            }, [St(",")])])]);
        })]),
        "append-inner": function() {
          var tt;
          for (var ue = arguments.length, de = new Array(ue), xe = 0; xe < ue; xe++)
            de[xe] = arguments[xe];
          return u(oe, null, [(tt = a["append-inner"]) == null ? void 0 : tt.call(a, ...de), (!e.hideNoData || e.items.length) && e.menuIcon ? u(Se, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: te,
            onClick: vr,
            "aria-label": l(g.value),
            title: l(g.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), yt({
      isFocused: o,
      isPristine: r,
      menu: f,
      search: x,
      selectionIndex: m,
      filteredItems: T,
      select: re
    }, i);
  }
}), ig = Symbol.for("vuetify:date-options");
function og(e, n) {
  const t = ct(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return X(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function ha() {
  const e = he(ig);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = De();
  return og(e, n);
}
function rg(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    t >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(t.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const ug = $({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), sg = F()({
  name: "VConfirmEdit",
  props: ug(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), i = j();
    ze(() => {
      i.value = structuredClone(Me(l.value));
    });
    const {
      t: o
    } = De(), r = h(() => It(l.value, i.value));
    function s() {
      l.value = i.value, t("save", i.value);
    }
    function c() {
      i.value = structuredClone(Me(l.value)), t("cancel");
    }
    function d(f) {
      return u(oe, null, [u(be, R({
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, f), null), u(be, R({
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: s,
        text: o(e.okText)
      }, f), null)]);
    }
    let v = !1;
    return N(() => {
      var f;
      return u(oe, null, [(f = a.default) == null ? void 0 : f.call(a, {
        model: i,
        save: s,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return v = !0, d;
        }
      }), !v && d()]);
    }), {
      save: s,
      cancel: c,
      isPristine: r
    };
  }
}), qu = $({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Ku = Symbol.for("vuetify:datatable:expanded");
function ol(e) {
  const n = M(e, "expandOnClick"), t = ie(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const c = new Set(t.value);
    s ? c.add(r.value) : c.delete(r.value), t.value = c;
  }
  function l(r) {
    return t.value.has(r.value);
  }
  function i(r) {
    a(r, !l(r));
  }
  const o = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: i
  };
  return Ie(Ku, o), o;
}
function Xu() {
  const e = he(Ku);
  if (!e) throw new Error("foo");
  return e;
}
const Wi = $({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Qu = Symbol.for("vuetify:data-table-group");
function ji(e) {
  return {
    groupBy: ie(e, "groupBy")
  };
}
function rl(e) {
  const {
    disableSort: n,
    groupBy: t,
    sortBy: a
  } = e, l = j(/* @__PURE__ */ new Set()), i = h(() => t.value.map((d) => ({
    ...d,
    order: d.order ?? !1
  })).concat(n != null && n.value ? [] : a.value));
  function o(d) {
    return l.value.has(d.id);
  }
  function r(d) {
    const v = new Set(l.value);
    o(d) ? v.delete(d.id) : v.add(d.id), l.value = v;
  }
  function s(d) {
    function v(f) {
      const m = [];
      for (const y of f.items)
        "type" in y && y.type === "group" ? m.push(...v(y)) : m.push(y);
      return m;
    }
    return v({
      type: "group",
      items: d,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: t,
    extractRows: s,
    isGroupOpen: o
  };
  return Ie(Qu, c), c;
}
function Zu() {
  const e = he(Qu);
  if (!e) throw new Error("Missing group!");
  return e;
}
function cg(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = Yn(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function Ju(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = cg(e, n[0]), i = [], o = n.slice(1);
  return l.forEach((r, s) => {
    const c = n[0], d = `${a}_${c}_${s}`;
    i.push({
      depth: t,
      id: d,
      key: c,
      value: s,
      items: o.length ? Ju(r, o, t + 1, d) : r,
      type: "group"
    });
  }), i;
}
function es(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...es(a.items, n))) : t.push(a);
  return t;
}
function ul(e, n, t) {
  return {
    flatItems: h(() => {
      if (!n.value.length) return e.value;
      const l = Ju(e.value, n.value.map((i) => i.key));
      return es(l, t.value);
    })
  };
}
function sl(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = $e("VDataTable"), r = h(() => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  }));
  let s = null;
  X(r, () => {
    It(s, r.value) || (s && s.search !== r.value.search && (n.value = 1), o.emit("update:options", r.value), s = r.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Gi = $({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), ts = Symbol.for("vuetify:data-table-pagination");
function Ui(e) {
  const n = ie(e, "page", void 0, (a) => +(a ?? 1)), t = ie(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function Yi(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = h(() => t.value === -1 ? 0 : t.value * (n.value - 1)), i = h(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), o = h(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  X([n, o], () => {
    n.value > o.value && (n.value = o.value);
  });
  function r(f) {
    t.value = f, n.value = 1;
  }
  function s() {
    n.value = Le(n.value + 1, 1, o.value);
  }
  function c() {
    n.value = Le(n.value - 1, 1, o.value);
  }
  function d(f) {
    n.value = Le(f, 1, o.value);
  }
  const v = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: d,
    setItemsPerPage: r
  };
  return Ie(ts, v), v;
}
function dg() {
  const e = he(ts);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function ns(e) {
  const n = $e("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = h(() => i.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return X(o, (r) => {
    n.emit("update:currentItems", r);
  }), {
    paginatedItems: o
  };
}
const vg = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, as = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return as.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, ls = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return ls.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, is = $({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: It
  }
}, "DataTable-select"), os = Symbol.for("vuetify:data-table-selection");
function cl(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = ie(e, "modelValue", e.modelValue, (S) => new Set(Be(S).map((k) => {
    var V;
    return ((V = t.value.find((_) => e.valueComparator(k, _.value))) == null ? void 0 : V.value) ?? k;
  })), (S) => [...S.values()]), i = h(() => t.value.filter((S) => S.selectable)), o = h(() => a.value.filter((S) => S.selectable)), r = h(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return vg;
      case "all":
        return ls;
      case "page":
      default:
        return as;
    }
  });
  function s(S) {
    return Be(S).every((k) => l.value.has(k.value));
  }
  function c(S) {
    return Be(S).some((k) => l.value.has(k.value));
  }
  function d(S, k) {
    const V = r.value.select({
      items: S,
      value: k,
      selected: new Set(l.value)
    });
    l.value = V;
  }
  function v(S) {
    d([S], !s([S]));
  }
  function f(S) {
    const k = r.value.selectAll({
      value: S,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = k;
  }
  const m = h(() => l.value.size > 0), y = h(() => {
    const S = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!S.length && s(S);
  }), b = h(() => r.value.showSelectAll), g = {
    toggleSelect: v,
    select: d,
    selectAll: f,
    isSelected: s,
    isSomeSelected: c,
    someSelected: m,
    allSelected: y,
    showSelectAll: b
  };
  return Ie(os, g), g;
}
function dl() {
  const e = he(os);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const rs = $({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), us = Symbol.for("vuetify:data-table-sort");
function vl(e) {
  const n = ie(e, "sortBy"), t = M(e, "mustSort"), a = M(e, "multiSort");
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function fl(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null) return;
    let c = n.value.map((v) => ({
      ...v
    })) ?? [];
    const d = c.find((v) => v.key === s.key);
    d ? d.order === "desc" ? t.value ? d.order = "asc" : c = c.filter((v) => v.key !== s.key) : d.order = "desc" : a.value ? c = [...c, {
      key: s.key,
      order: "asc"
    }] : c = [{
      key: s.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function o(s) {
    return !!n.value.find((c) => c.key === s.key);
  }
  const r = {
    sortBy: n,
    toggleSort: i,
    isSorted: o
  };
  return Ie(us, r), r;
}
function ss() {
  const e = he(us);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function qi(e, n, t, a) {
  const l = De();
  return {
    sortedItems: h(() => {
      var o, r;
      return t.value.length ? fg(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      }) : n.value;
    })
  };
}
function fg(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, r) => {
    var s, c;
    for (let d = 0; d < n.length; d++) {
      let v = !1;
      const f = n[d].key, m = n[d].order ?? "asc";
      if (m === !1) continue;
      let y = Yn(o[1], f), b = Yn(r[1], f), g = o[0].raw, S = r[0].raw;
      if (m === "desc" && ([y, b] = [b, y], [g, S] = [S, g]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[f]) {
        const k = a.sortRawFunctions[f](g, S);
        if (k == null) continue;
        if (v = !0, k) return k;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[f]) {
        const k = a.sortFunctions[f](y, b);
        if (k == null) continue;
        if (v = !0, k) return k;
      }
      if (!v) {
        if (y instanceof Date && b instanceof Date)
          return y.getTime() - b.getTime();
        if ([y, b] = [y, b].map((k) => k != null ? k.toString().toLocaleLowerCase() : k), y !== b)
          return ka(y) && ka(b) ? 0 : ka(y) ? -1 : ka(b) ? 1 : !isNaN(y) && !isNaN(b) ? Number(y) - Number(b) : l.compare(y, b);
      }
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const mg = $({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function gg(e, n) {
  const t = e.returnObject ? n : Ne(n, e.itemValue), a = Ne(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function hg(e, n) {
  const t = [];
  for (const a of n)
    t.push(gg(e, a));
  return t;
}
function yg(e) {
  return {
    items: h(() => hg(e, e.items))
  };
}
const bg = $({
  search: String,
  loading: Boolean,
  ...J(),
  ...mg(),
  ...is(),
  ...rs(),
  ...Gi({
    itemsPerPage: 5
  }),
  ...qu(),
  ...Wi(),
  ...ma(),
  ...ve(),
  ...wt({
    transition: {
      component: Qn,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), Sg = F()({
  name: "VDataIterator",
  props: bg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "groupBy"), l = M(e, "search"), {
      items: i
    } = yg(e), {
      filteredItems: o
    } = ga(e, i, l, {
      transform: (L) => L.raw
    }), {
      sortBy: r,
      multiSort: s,
      mustSort: c
    } = vl(e), {
      page: d,
      itemsPerPage: v
    } = Ui(e), {
      toggleSort: f
    } = fl({
      sortBy: r,
      multiSort: s,
      mustSort: c,
      page: d
    }), {
      sortByWithGroups: m,
      opened: y,
      extractRows: b,
      isGroupOpen: g,
      toggleGroup: S
    } = rl({
      groupBy: a,
      sortBy: r
    }), {
      sortedItems: k
    } = qi(e, o, m, {
      transform: (L) => L.raw
    }), {
      flatItems: V
    } = ul(k, a, y), _ = h(() => V.value.length), {
      startIndex: I,
      stopIndex: P,
      pageCount: A,
      prevPage: w,
      nextPage: C,
      setItemsPerPage: p,
      setPage: x
    } = Yi({
      page: d,
      itemsPerPage: v,
      itemsLength: _
    }), {
      paginatedItems: B
    } = ns({
      items: V,
      startIndex: I,
      stopIndex: P,
      itemsPerPage: v
    }), T = h(() => b(B.value)), {
      isSelected: E,
      select: z,
      selectAll: W,
      toggleSelect: Q
    } = cl(e, {
      allItems: i,
      currentPage: T
    }), {
      isExpanded: ee,
      toggleExpand: O
    } = ol(e);
    sl({
      page: d,
      itemsPerPage: v,
      sortBy: r,
      groupBy: a,
      search: l
    });
    const D = h(() => ({
      page: d.value,
      itemsPerPage: v.value,
      sortBy: r.value,
      pageCount: A.value,
      toggleSort: f,
      prevPage: w,
      nextPage: C,
      setPage: x,
      setItemsPerPage: p,
      isSelected: E,
      select: z,
      selectAll: W,
      toggleSelect: Q,
      isExpanded: ee,
      toggleExpand: O,
      isGroupOpen: g,
      toggleGroup: S,
      items: T.value,
      groupedItems: B.value
    }));
    return N(() => u(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var L, q;
        return [(L = t.header) == null ? void 0 : L.call(t, D.value), u(Ze, {
          transition: e.transition
        }, {
          default: () => {
            var te, ne;
            return [e.loading ? u(ra, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (se) => {
                var H;
                return (H = t.loader) == null ? void 0 : H.call(t, se);
              }
            }) : u("div", {
              key: "items"
            }, [B.value.length ? (ne = t.default) == null ? void 0 : ne.call(t, D.value) : (te = t["no-data"]) == null ? void 0 : te.call(t)])];
          }
        }), (q = t.footer) == null ? void 0 : q.call(t, D.value)];
      }
    })), {};
  }
});
function kg() {
  const e = j([]);
  kc(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const Cg = $({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: le,
    default: "$first"
  },
  prevIcon: {
    type: le,
    default: "$prev"
  },
  nextIcon: {
    type: le,
    default: "$next"
  },
  lastIcon: {
    type: le,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...it(),
  ...J(),
  ...je(),
  ...We(),
  ..._e(),
  ...pt(),
  ...ve({
    tag: "nav"
  }),
  ...ge(),
  ...gt({
    variant: "text"
  })
}, "VPagination"), Xl = F()({
  name: "VPagination",
  props: Cg(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = ie(e, "modelValue"), {
      t: i,
      n: o
    } = De(), {
      isRtl: r
    } = He(), {
      themeClasses: s
    } = ke(e), {
      width: c
    } = ht(), d = Y(-1);
    Te(void 0, {
      scoped: !0
    });
    const {
      resizeRef: v
    } = kt((w) => {
      if (!w.length) return;
      const {
        target: C,
        contentRect: p
      } = w[0], x = C.querySelector(".v-pagination__list > *");
      if (!x) return;
      const B = p.width, T = x.offsetWidth + parseFloat(getComputedStyle(x).marginRight) * 2;
      d.value = b(B, T);
    }), f = h(() => parseInt(e.length, 10)), m = h(() => parseInt(e.start, 10)), y = h(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : b(c.value, 58));
    function b(w, C) {
      const p = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((w - C * p) / C).toFixed(2)
      ));
    }
    const g = h(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
      if (y.value <= 0) return [];
      if (y.value === 1) return [l.value];
      if (f.value <= y.value)
        return Nt(f.value, m.value);
      const w = y.value % 2 === 0, C = w ? y.value / 2 : Math.floor(y.value / 2), p = w ? C : C + 1, x = f.value - C;
      if (p - l.value >= 0)
        return [...Nt(Math.max(1, y.value - 1), m.value), e.ellipsis, f.value];
      if (l.value - x >= (w ? 1 : 0)) {
        const B = y.value - 1, T = f.value - B + m.value;
        return [m.value, e.ellipsis, ...Nt(B, T)];
      } else {
        const B = Math.max(1, y.value - 3), T = B === 1 ? l.value : l.value - Math.ceil(B / 2) + m.value;
        return [m.value, e.ellipsis, ...Nt(B, T), e.ellipsis, f.value];
      }
    });
    function S(w, C, p) {
      w.preventDefault(), l.value = C, p && a(p, C);
    }
    const {
      refs: k,
      updateRef: V
    } = kg();
    Te({
      VPaginationBtn: {
        color: M(e, "color"),
        border: M(e, "border"),
        density: M(e, "density"),
        size: M(e, "size"),
        variant: M(e, "variant"),
        rounded: M(e, "rounded"),
        elevation: M(e, "elevation")
      }
    });
    const _ = h(() => g.value.map((w, C) => {
      const p = (x) => V(x, C);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${C}`,
          page: w,
          props: {
            ref: p,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const x = w === l.value;
        return {
          isActive: x,
          key: w,
          page: o(w),
          props: {
            ref: p,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: x ? e.activeColor : e.color,
            "aria-current": x,
            "aria-label": i(x ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (B) => S(B, w)
          }
        };
      }
    })), I = h(() => {
      const w = !!e.disabled || l.value <= m.value, C = !!e.disabled || l.value >= m.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (p) => S(p, m.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (p) => S(p, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (p) => S(p, l.value + 1, "next"),
          disabled: C,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": C
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (p) => S(p, m.value + f.value - 1, "last"),
          disabled: C,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": C
        } : void 0
      };
    });
    function P() {
      var C;
      const w = l.value - m.value;
      (C = k.value[w]) == null || C.$el.focus();
    }
    function A(w) {
      w.key === _l.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, Ce(P)) : w.key === _l.right && !e.disabled && l.value < m.value + f.value - 1 && (l.value = l.value + 1, Ce(P));
    }
    return N(() => u(e.tag, {
      ref: v,
      class: ["v-pagination", s.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: A,
      "data-test": "v-pagination-root"
    }, {
      default: () => [u("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && u("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(I.value.first) : u(be, R({
        _as: "VPaginationBtn"
      }, I.value.first), null)]), u("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(I.value.prev) : u(be, R({
        _as: "VPaginationBtn"
      }, I.value.prev), null)]), _.value.map((w, C) => u("li", {
        key: w.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }],
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(w) : u(be, R({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), u("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(I.value.next) : u(be, R({
        _as: "VPaginationBtn"
      }, I.value.next), null)]), e.showFirstLastPage && u("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(I.value.last) : u(be, R({
        _as: "VPaginationBtn"
      }, I.value.last), null)])])]
    })), {};
  }
}), Ki = $({
  prevIcon: {
    type: le,
    default: "$prev"
  },
  nextIcon: {
    type: le,
    default: "$next"
  },
  firstIcon: {
    type: le,
    default: "$first"
  },
  lastIcon: {
    type: le,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), aa = F()({
  name: "VDataTableFooter",
  props: Ki(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: d
    } = dg(), v = h(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? {
      value: f,
      title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f)
    } : {
      ...f,
      title: isNaN(Number(f.title)) ? a(f.title) : f.title
    }));
    return N(() => {
      var m;
      const f = Xl.filterProps(e);
      return u("div", {
        class: "v-data-table-footer"
      }, [(m = t.prepend) == null ? void 0 : m.call(t), u("div", {
        class: "v-data-table-footer__items-per-page"
      }, [u("span", null, [a(e.itemsPerPageText)]), u(Ni, {
        items: v.value,
        modelValue: c.value,
        "onUpdate:modelValue": (y) => d(Number(y)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), u("div", {
        class: "v-data-table-footer__info"
      }, [u("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), u("div", {
        class: "v-data-table-footer__pagination"
      }, [u(Xl, R({
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: i.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, f), null)])]);
    }), {};
  }
}), La = ld({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  let {
    slots: t
  } = n;
  const a = e.tag ?? "td";
  return u(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: K(e.height),
      width: K(e.width),
      maxWidth: K(e.maxWidth),
      left: K(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var l;
      return [(l = t.default) == null ? void 0 : l.call(t)];
    }
  });
}), wg = $({
  headers: Array
}, "DataTable-header"), cs = Symbol.for("vuetify:data-table-headers"), ds = {
  title: "",
  sortable: !1
}, Vg = {
  ...ds,
  width: 48
};
function xg() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].priority > a) {
          n.splice(i, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function Ql(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      Ql(t, n);
  return n;
}
function vs(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && vs(t.children, n);
  return n;
}
function Pg(e) {
  if (e.key) {
    if (e.key === "data-table-group") return ds;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Vg;
  }
}
function Xi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => Xi(t, n + 1))) : n;
}
function Ig(e) {
  let n = !1;
  function t(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (o && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let r = i.children.length - 1; r >= 0; r--)
            t(i.children[r], !0);
        else
          n ? isNaN(+i.width) && za(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.lastFixed = !0, n = !0;
      else if (i.children)
        for (let r = i.children.length - 1; r >= 0; r--)
          t(i.children[r]);
      else
        n = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    t(e[i]);
  function a(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i) return o;
    if (i.children) {
      i.fixedOffset = o;
      for (const r of i.children)
        o = a(r, o);
    } else i.fixed && (i.fixedOffset = o, o += parseFloat(i.width || "0") || 0);
    return o;
  }
  let l = 0;
  for (const i of e)
    l = a(i, l);
}
function _g(e, n) {
  const t = [];
  let a = 0;
  const l = xg(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: d
      } = l.dequeue(), v = n - a - Xi(c);
      if (r.push({
        ...c,
        rowspan: v ?? 1,
        colspan: c.children ? Ql(c).length : 1
      }), c.children)
        for (const f of c.children) {
          const m = d % 1 + s / Math.pow(10, a + 2);
          l.enqueue(f, a + v + m);
        }
      s += 1, o -= 1;
    }
    a += 1, t.push(r);
  }
  return {
    columns: e.map((o) => Ql(o)).flat(),
    headers: t
  };
}
function fs(e) {
  const n = [];
  for (const t of e) {
    const a = {
      ...Pg(t),
      ...t
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? fs(a.children) : void 0
    };
    n.push(o);
  }
  return n;
}
function Qi(e, n) {
  const t = j([]), a = j([]), l = j({}), i = j({}), o = j({});
  ze(() => {
    var b, g, S;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((k) => ({
      key: k,
      title: Ln(k)
    }))).slice(), d = vs(c);
    (b = n == null ? void 0 : n.groupBy) != null && b.value.length && !d.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (g = n == null ? void 0 : n.showSelect) != null && g.value && !d.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (S = n == null ? void 0 : n.showExpand) != null && S.value && !d.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const v = fs(c);
    Ig(v);
    const f = Math.max(...v.map((k) => Xi(k))) + 1, m = _g(v, f);
    t.value = m.headers, a.value = m.columns;
    const y = m.headers.flat(1);
    for (const k of y)
      k.key && (k.sortable && (k.sort && (l.value[k.key] = k.sort), k.sortRaw && (i.value[k.key] = k.sortRaw)), k.filter && (o.value[k.key] = k.filter));
  });
  const r = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Ie(cs, r), r;
}
function ml() {
  const e = he(cs);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const ms = $({
  color: String,
  sticky: Boolean,
  disableSort: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: le,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: le,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  ...wn(),
  ...qa()
}, "VDataTableHeaders"), cn = F()({
  name: "VDataTableHeaders",
  props: ms(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = ss(), {
      someSelected: r,
      allSelected: s,
      selectAll: c,
      showSelectAll: d
    } = dl(), {
      columns: v,
      headers: f
    } = ml(), {
      loaderClasses: m
    } = oa(e);
    function y(w, C) {
      if (!(!e.sticky && !w.fixed))
        return {
          position: "sticky",
          left: w.fixed ? K(w.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${C})` : void 0
        };
    }
    function b(w) {
      const C = i.value.find((p) => p.key === w.key);
      return C ? C.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: g,
      backgroundColorStyles: S
    } = we(e, "color"), {
      displayClasses: k,
      mobile: V
    } = ht(e), _ = h(() => ({
      headers: f.value,
      columns: v.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: b
    })), I = h(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky
    }, k.value, m.value]), P = (w) => {
      let {
        column: C,
        x: p,
        y: x
      } = w;
      const B = C.key === "data-table-select" || C.key === "data-table-expand", T = R(e.headerProps ?? {}, C.headerProps ?? {});
      return u(La, R({
        tag: "th",
        align: C.align,
        class: [{
          "v-data-table__th--sortable": C.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(C),
          "v-data-table__th--fixed": C.fixed
        }, ...I.value],
        style: {
          width: K(C.width),
          minWidth: K(C.minWidth),
          maxWidth: K(C.maxWidth),
          ...y(C, x)
        },
        colspan: C.colspan,
        rowspan: C.rowspan,
        onClick: C.sortable ? () => l(C) : void 0,
        fixed: C.fixed,
        nowrap: C.nowrap,
        lastFixed: C.lastFixed,
        noPadding: B
      }, T), {
        default: () => {
          var W;
          const E = `header.${C.key}`, z = {
            column: C,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: b
          };
          return t[E] ? t[E](z) : C.key === "data-table-select" ? ((W = t["header.data-table-select"]) == null ? void 0 : W.call(t, z)) ?? (d.value && u(Et, {
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : u("div", {
            class: "v-data-table-header__content"
          }, [u("span", null, [C.title]), C.sortable && !e.disableSort && u(Se, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: b(C)
          }, null), e.multiSort && o(C) && u("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...g.value],
            style: S.value
          }, [i.value.findIndex((Q) => Q.key === C.key) + 1])]);
        }
      });
    }, A = () => {
      const w = R(e.headerProps ?? {} ?? {}), C = h(() => v.value.filter((x) => (x == null ? void 0 : x.sortable) && !e.disableSort)), p = h(() => {
        if (v.value.find((B) => B.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return u(La, R({
        tag: "th",
        class: [...I.value],
        colspan: f.value.length + 1
      }, w), {
        default: () => [u("div", {
          class: "v-data-table-header__content"
        }, [u(Ni, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: C.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: p.value,
          "onClick:append": () => c(!s.value)
        }, {
          ...t,
          chip: (x) => {
            var B;
            return u(Wn, {
              onClick: (B = x.item.raw) != null && B.sortable ? () => l(x.item.raw) : void 0,
              onMousedown: (T) => {
                T.preventDefault(), T.stopPropagation();
              }
            }, {
              default: () => [x.item.title, u(Se, {
                class: ["v-data-table__td-sort-icon", o(x.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: b(x.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    N(() => V.value ? u("tr", null, [u(A, null, null)]) : u(oe, null, [t.headers ? t.headers(_.value) : f.value.map((w, C) => u("tr", null, [w.map((p, x) => u(P, {
      column: p,
      x,
      y: C
    }, null))])), e.loading && u("tr", {
      class: "v-data-table-progress"
    }, [u("th", {
      colspan: v.value.length
    }, [u(ra, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), Bg = $({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), pg = F()({
  name: "VDataTableGroupHeaderRow",
  props: Bg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = Zu(), {
      isSelected: o,
      isSomeSelected: r,
      select: s
    } = dl(), {
      columns: c
    } = ml(), d = h(() => i([e.item]));
    return () => u("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((v) => {
      var f, m;
      if (v.key === "data-table-group") {
        const y = a(e.item) ? "$expand" : "$next", b = () => l(e.item);
        return ((f = t["data-table-group"]) == null ? void 0 : f.call(t, {
          item: e.item,
          count: d.value.length,
          props: {
            icon: y,
            onClick: b
          }
        })) ?? u(La, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [u(be, {
            size: "small",
            variant: "text",
            icon: y,
            onClick: b
          }, null), u("span", null, [e.item.value]), u("span", null, [St("("), d.value.length, St(")")])]
        });
      }
      if (v.key === "data-table-select") {
        const y = o(d.value), b = r(d.value) && !y, g = (S) => s(d.value, S);
        return ((m = t["data-table-select"]) == null ? void 0 : m.call(t, {
          props: {
            modelValue: y,
            indeterminate: b,
            "onUpdate:modelValue": g
          }
        })) ?? u("td", null, [u(Et, {
          modelValue: y,
          indeterminate: b,
          "onUpdate:modelValue": g
        }, null)]);
      }
      return u("td", null, null);
    })]);
  }
}), Ag = $({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: Ge(),
  onContextmenu: Ge(),
  onDblclick: Ge(),
  ...wn()
}, "VDataTableRow"), Zi = F()({
  name: "VDataTableRow",
  props: Ag(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = ht(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: s,
      selectAll: c
    } = dl(), {
      isExpanded: d,
      toggleExpand: v
    } = Xu(), {
      toggleSort: f,
      sortBy: m,
      isSorted: y
    } = ss(), {
      columns: b
    } = ml();
    N(() => u("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && b.value.map((g, S) => {
      const k = e.item, V = `item.${g.key}`, _ = `header.${g.key}`, I = {
        index: e.index,
        item: k.raw,
        internalItem: k,
        value: Yn(k.columns, g.key),
        column: g,
        isSelected: i,
        toggleSelect: o,
        isExpanded: d,
        toggleExpand: v
      }, P = {
        column: g,
        selectAll: c,
        isSorted: y,
        toggleSort: f,
        sortBy: m.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, A = typeof e.cellProps == "function" ? e.cellProps({
        index: I.index,
        item: I.item,
        internalItem: I.internalItem,
        value: I.value,
        column: g
      }) : e.cellProps, w = typeof g.cellProps == "function" ? g.cellProps({
        index: I.index,
        item: I.item,
        internalItem: I.internalItem,
        value: I.value
      }) : g.cellProps;
      return u(La, R({
        align: g.align,
        class: {
          "v-data-table__td--expanded-row": g.key === "data-table-expand",
          "v-data-table__td--select-row": g.key === "data-table-select"
        },
        fixed: g.fixed,
        fixedOffset: g.fixedOffset,
        lastFixed: g.lastFixed,
        maxWidth: l.value ? void 0 : g.maxWidth,
        noPadding: g.key === "data-table-select" || g.key === "data-table-expand",
        nowrap: g.nowrap,
        width: l.value ? void 0 : g.width
      }, A, w), {
        default: () => {
          var p, x, B, T, E;
          if (t[V] && !l.value) return (p = t[V]) == null ? void 0 : p.call(t, I);
          if (g.key === "data-table-select")
            return ((x = t["item.data-table-select"]) == null ? void 0 : x.call(t, I)) ?? u(Et, {
              disabled: !k.selectable,
              modelValue: i([k]),
              onClick: io(() => o(k), ["stop"])
            }, null);
          if (g.key === "data-table-expand")
            return ((B = t["item.data-table-expand"]) == null ? void 0 : B.call(t, I)) ?? u(be, {
              icon: d(k) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: io(() => v(k), ["stop"])
            }, null);
          const C = en(I.value);
          return l.value ? u(oe, null, [u("div", {
            class: "v-data-table__td-title"
          }, [((T = t[_]) == null ? void 0 : T.call(t, P)) ?? g.title]), u("div", {
            class: "v-data-table__td-value"
          }, [((E = t[V]) == null ? void 0 : E.call(t, I)) ?? C])]) : C;
        }
      });
    })]));
  }
}), gs = $({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...wn()
}, "VDataTableRows"), dn = F()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: gs(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = ml(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = Xu(), {
      isSelected: s,
      toggleSelect: c
    } = dl(), {
      toggleGroup: d,
      isGroupOpen: v
    } = Zu(), {
      t: f
    } = De(), {
      mobile: m
    } = ht(e);
    return N(() => {
      var y, b;
      return e.loading && (!e.items.length || a.loading) ? u("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [u("td", {
        colspan: l.value.length
      }, [((y = a.loading) == null ? void 0 : y.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? u("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [u("td", {
        colspan: l.value.length
      }, [((b = a["no-data"]) == null ? void 0 : b.call(a)) ?? f(e.noDataText)])]) : u(oe, null, [e.items.map((g, S) => {
        var _;
        if (g.type === "group") {
          const I = {
            index: S,
            item: g,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: d,
            isGroupOpen: v
          };
          return a["group-header"] ? a["group-header"](I) : u(pg, R({
            key: `group-header_${g.id}`,
            item: g
          }, po(t, ":group-header", () => I)), a);
        }
        const k = {
          index: S,
          item: g.raw,
          internalItem: g,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: s,
          toggleSelect: c
        }, V = {
          ...k,
          props: R({
            key: `item_${g.key ?? g.index}`,
            onClick: i.value ? () => {
              o(g);
            } : void 0,
            index: S,
            item: g,
            cellProps: e.cellProps,
            mobile: m.value
          }, po(t, ":row", () => k), typeof e.rowProps == "function" ? e.rowProps({
            item: k.item,
            index: k.index,
            internalItem: k.internalItem
          }) : e.rowProps)
        };
        return u(oe, {
          key: V.props.key
        }, [a.item ? a.item(V) : u(Zi, V.props, a), r(g) && ((_ = a["expanded-row"]) == null ? void 0 : _.call(a, k))]);
      })]);
    }), {};
  }
}), hs = $({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...J(),
  ...je(),
  ...ve(),
  ...ge()
}, "VTable"), vn = F()({
  name: "VTable",
  props: hs(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      densityClasses: i
    } = et(e);
    return N(() => u(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var o, r, s;
        return [(o = t.top) == null ? void 0 : o.call(t), t.default ? u("div", {
          class: "v-table__wrapper",
          style: {
            height: K(e.height)
          }
        }, [u("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
      }
    })), {};
  }
}), Tg = $({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function $g(e, n, t, a) {
  const l = e.returnObject ? n : Ne(n, e.itemValue), i = Ne(n, e.itemSelectable, !0), o = a.reduce((r, s) => (s.key != null && (r[s.key] = Ne(n, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? Ne(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: i,
    columns: o,
    raw: n
  };
}
function Eg(e, n, t) {
  return n.map((a, l) => $g(e, a, l, t));
}
function Ji(e, n) {
  return {
    items: h(() => Eg(e, e.items, n.value))
  };
}
const eo = $({
  ...gs(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...qu(),
  ...Wi(),
  ...wg(),
  ...Tg(),
  ...is(),
  ...rs(),
  ...ms(),
  ...hs()
}, "DataTable"), Dg = $({
  ...Gi(),
  ...eo(),
  ...ma(),
  ...Ki()
}, "VDataTable"), Mg = F()({
  name: "VDataTable",
  props: Dg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = ji(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = vl(e), {
      page: s,
      itemsPerPage: c
    } = Ui(e), {
      disableSort: d
    } = Mn(e), {
      columns: v,
      headers: f,
      sortFunctions: m,
      sortRawFunctions: y,
      filterFunctions: b
    } = Qi(e, {
      groupBy: l,
      showSelect: M(e, "showSelect"),
      showExpand: M(e, "showExpand")
    }), {
      items: g
    } = Ji(e, v), S = M(e, "search"), {
      filteredItems: k
    } = ga(e, g, S, {
      transform: (ae) => ae.columns,
      customKeyFilter: b
    }), {
      toggleSort: V
    } = fl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      sortByWithGroups: _,
      opened: I,
      extractRows: P,
      isGroupOpen: A,
      toggleGroup: w
    } = rl({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      sortedItems: C
    } = qi(e, k, _, {
      transform: (ae) => ({
        ...ae.raw,
        ...ae.columns
      }),
      sortFunctions: m,
      sortRawFunctions: y
    }), {
      flatItems: p
    } = ul(C, l, I), x = h(() => p.value.length), {
      startIndex: B,
      stopIndex: T,
      pageCount: E,
      setItemsPerPage: z
    } = Yi({
      page: s,
      itemsPerPage: c,
      itemsLength: x
    }), {
      paginatedItems: W
    } = ns({
      items: p,
      startIndex: B,
      stopIndex: T,
      itemsPerPage: c
    }), Q = h(() => P(W.value)), {
      isSelected: ee,
      select: O,
      selectAll: D,
      toggleSelect: L,
      someSelected: q,
      allSelected: te
    } = cl(e, {
      allItems: g,
      currentPage: Q
    }), {
      isExpanded: ne,
      toggleExpand: se
    } = ol(e);
    sl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: S
    }), Te({
      VDataTableRows: {
        hideNoData: M(e, "hideNoData"),
        noDataText: M(e, "noDataText"),
        loading: M(e, "loading"),
        loadingText: M(e, "loadingText")
      }
    });
    const H = h(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: E.value,
      toggleSort: V,
      setItemsPerPage: z,
      someSelected: q.value,
      allSelected: te.value,
      isSelected: ee,
      select: O,
      selectAll: D,
      toggleSelect: L,
      isExpanded: ne,
      toggleExpand: se,
      isGroupOpen: A,
      toggleGroup: w,
      items: Q.value.map((ae) => ae.raw),
      internalItems: Q.value,
      groupedItems: W.value,
      columns: v.value,
      headers: f.value
    }));
    return N(() => {
      const ae = aa.filterProps(e), re = cn.filterProps(e), Ve = dn.filterProps(e), ye = vn.filterProps(e);
      return u(vn, R({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ye), {
        top: () => {
          var U;
          return (U = a.top) == null ? void 0 : U.call(a, H.value);
        },
        default: () => {
          var U, fe, G, Z, ce, ue;
          return a.default ? a.default(H.value) : u(oe, null, [(U = a.colgroup) == null ? void 0 : U.call(a, H.value), !e.hideDefaultHeader && u("thead", {
            key: "thead"
          }, [u(cn, re, a)]), (fe = a.thead) == null ? void 0 : fe.call(a, H.value), !e.hideDefaultBody && u("tbody", null, [(G = a["body.prepend"]) == null ? void 0 : G.call(a, H.value), a.body ? a.body(H.value) : u(dn, R(t, Ve, {
            items: W.value
          }), a), (Z = a["body.append"]) == null ? void 0 : Z.call(a, H.value)]), (ce = a.tbody) == null ? void 0 : ce.call(a, H.value), (ue = a.tfoot) == null ? void 0 : ue.call(a, H.value)]);
        },
        bottom: () => a.bottom ? a.bottom(H.value) : !e.hideDefaultFooter && u(oe, null, [u(da, null, null), u(aa, ae, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), Lg = $({
  ...eo(),
  ...Wi(),
  ...pu(),
  ...ma()
}, "VDataTableVirtual"), Og = F()({
  name: "VDataTableVirtual",
  props: Lg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = ji(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = vl(e), {
      disableSort: s
    } = Mn(e), {
      columns: c,
      headers: d,
      filterFunctions: v,
      sortFunctions: f,
      sortRawFunctions: m
    } = Qi(e, {
      groupBy: l,
      showSelect: M(e, "showSelect"),
      showExpand: M(e, "showExpand")
    }), {
      items: y
    } = Ji(e, c), b = M(e, "search"), {
      filteredItems: g
    } = ga(e, y, b, {
      transform: (re) => re.columns,
      customKeyFilter: v
    }), {
      toggleSort: S
    } = fl({
      sortBy: i,
      multiSort: o,
      mustSort: r
    }), {
      sortByWithGroups: k,
      opened: V,
      extractRows: _,
      isGroupOpen: I,
      toggleGroup: P
    } = rl({
      groupBy: l,
      sortBy: i,
      disableSort: s
    }), {
      sortedItems: A
    } = qi(e, g, k, {
      transform: (re) => ({
        ...re.raw,
        ...re.columns
      }),
      sortFunctions: f,
      sortRawFunctions: m
    }), {
      flatItems: w
    } = ul(A, l, V), C = h(() => _(w.value)), {
      isSelected: p,
      select: x,
      selectAll: B,
      toggleSelect: T,
      someSelected: E,
      allSelected: z
    } = cl(e, {
      allItems: C,
      currentPage: C
    }), {
      isExpanded: W,
      toggleExpand: Q
    } = ol(e), {
      containerRef: ee,
      markerRef: O,
      paddingTop: D,
      paddingBottom: L,
      computedItems: q,
      handleItemResize: te,
      handleScroll: ne,
      handleScrollend: se
    } = Au(e, w), H = h(() => q.value.map((re) => re.raw));
    sl({
      sortBy: i,
      page: Y(1),
      itemsPerPage: Y(-1),
      groupBy: l,
      search: b
    }), Te({
      VDataTableRows: {
        hideNoData: M(e, "hideNoData"),
        noDataText: M(e, "noDataText"),
        loading: M(e, "loading"),
        loadingText: M(e, "loadingText")
      }
    });
    const ae = h(() => ({
      sortBy: i.value,
      toggleSort: S,
      someSelected: E.value,
      allSelected: z.value,
      isSelected: p,
      select: x,
      selectAll: B,
      toggleSelect: T,
      isExpanded: W,
      toggleExpand: Q,
      isGroupOpen: I,
      toggleGroup: P,
      items: C.value.map((re) => re.raw),
      internalItems: C.value,
      groupedItems: w.value,
      columns: c.value,
      headers: d.value
    }));
    N(() => {
      const re = cn.filterProps(e), Ve = dn.filterProps(e), ye = vn.filterProps(e);
      return u(vn, R({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ye), {
        top: () => {
          var U;
          return (U = a.top) == null ? void 0 : U.call(a, ae.value);
        },
        wrapper: () => {
          var U, fe, G;
          return u("div", {
            ref: ee,
            onScrollPassive: ne,
            onScrollend: se,
            class: "v-table__wrapper",
            style: {
              height: K(e.height)
            }
          }, [u("table", null, [(U = a.colgroup) == null ? void 0 : U.call(a, ae.value), !e.hideDefaultHeader && u("thead", {
            key: "thead"
          }, [u(cn, R(re, {
            sticky: e.fixedHeader
          }), a)]), !e.hideDefaultBody && u("tbody", null, [u("tr", {
            ref: O,
            style: {
              height: K(D.value),
              border: 0
            }
          }, [u("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (fe = a["body.prepend"]) == null ? void 0 : fe.call(a, ae.value), u(dn, R(t, Ve, {
            items: H.value
          }), {
            ...a,
            item: (Z) => u(Bu, {
              key: Z.internalItem.index,
              renderless: !0,
              "onUpdate:height": (ce) => te(Z.internalItem.index, ce)
            }, {
              default: (ce) => {
                var de;
                let {
                  itemRef: ue
                } = ce;
                return ((de = a.item) == null ? void 0 : de.call(a, {
                  ...Z,
                  itemRef: ue
                })) ?? u(Zi, R(Z.props, {
                  ref: ue,
                  key: Z.internalItem.index,
                  index: Z.internalItem.index
                }), a);
              }
            })
          }), (G = a["body.append"]) == null ? void 0 : G.call(a, ae.value), u("tr", {
            style: {
              height: K(L.value),
              border: 0
            }
          }, [u("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var U;
          return (U = a.bottom) == null ? void 0 : U.call(a, ae.value);
        }
      });
    });
  }
}), Fg = $({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Gi(),
  ...eo(),
  ...Ki()
}, "VDataTableServer"), Rg = F()({
  name: "VDataTableServer",
  props: Fg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = ji(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = vl(e), {
      page: s,
      itemsPerPage: c
    } = Ui(e), {
      disableSort: d
    } = Mn(e), v = h(() => parseInt(e.itemsLength, 10)), {
      columns: f,
      headers: m
    } = Qi(e, {
      groupBy: l,
      showSelect: M(e, "showSelect"),
      showExpand: M(e, "showExpand")
    }), {
      items: y
    } = Ji(e, f), {
      toggleSort: b
    } = fl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      opened: g,
      isGroupOpen: S,
      toggleGroup: k,
      extractRows: V
    } = rl({
      groupBy: l,
      sortBy: i,
      disableSort: d
    }), {
      pageCount: _,
      setItemsPerPage: I
    } = Yi({
      page: s,
      itemsPerPage: c,
      itemsLength: v
    }), {
      flatItems: P
    } = ul(y, l, g), {
      isSelected: A,
      select: w,
      selectAll: C,
      toggleSelect: p,
      someSelected: x,
      allSelected: B
    } = cl(e, {
      allItems: y,
      currentPage: y
    }), {
      isExpanded: T,
      toggleExpand: E
    } = ol(e), z = h(() => V(y.value));
    sl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: M(e, "search")
    }), Ie("v-data-table", {
      toggleSort: b,
      sortBy: i
    }), Te({
      VDataTableRows: {
        hideNoData: M(e, "hideNoData"),
        noDataText: M(e, "noDataText"),
        loading: M(e, "loading"),
        loadingText: M(e, "loadingText")
      }
    });
    const W = h(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: _.value,
      toggleSort: b,
      setItemsPerPage: I,
      someSelected: x.value,
      allSelected: B.value,
      isSelected: A,
      select: w,
      selectAll: C,
      toggleSelect: p,
      isExpanded: T,
      toggleExpand: E,
      isGroupOpen: S,
      toggleGroup: k,
      items: z.value.map((Q) => Q.raw),
      internalItems: z.value,
      groupedItems: P.value,
      columns: f.value,
      headers: m.value
    }));
    N(() => {
      const Q = aa.filterProps(e), ee = cn.filterProps(e), O = dn.filterProps(e), D = vn.filterProps(e);
      return u(vn, R({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, D), {
        top: () => {
          var L;
          return (L = a.top) == null ? void 0 : L.call(a, W.value);
        },
        default: () => {
          var L, q, te, ne, se, H;
          return a.default ? a.default(W.value) : u(oe, null, [(L = a.colgroup) == null ? void 0 : L.call(a, W.value), !e.hideDefaultHeader && u("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [u(cn, R(ee, {
            sticky: e.fixedHeader
          }), a)]), (q = a.thead) == null ? void 0 : q.call(a, W.value), !e.hideDefaultBody && u("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(te = a["body.prepend"]) == null ? void 0 : te.call(a, W.value), a.body ? a.body(W.value) : u(dn, R(t, O, {
            items: P.value
          }), a), (ne = a["body.append"]) == null ? void 0 : ne.call(a, W.value)]), (se = a.tbody) == null ? void 0 : se.call(a, W.value), (H = a.tfoot) == null ? void 0 : H.call(a, W.value)]);
        },
        bottom: () => a.bottom ? a.bottom(W.value) : !e.hideDefaultFooter && u(oe, null, [u(da, null, null), u(aa, Q, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), Ng = $({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...J(),
  ...Fe(),
  ...ve()
}, "VContainer"), zg = F()({
  name: "VContainer",
  props: Ng(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = He(), {
      dimensionStyles: l
    } = Re(e);
    return N(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: [l.value, e.style]
    }, t)), {};
  }
}), ys = Za.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), bs = Za.reduce((e, n) => {
  const t = "offset" + Ln(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Ss = Za.reduce((e, n) => {
  const t = "order" + Ln(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Wo = {
  col: Object.keys(ys),
  offset: Object.keys(bs),
  order: Object.keys(Ss)
};
function Hg(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const Wg = ["auto", "start", "end", "center", "baseline", "stretch"], jg = $({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ys,
  offset: {
    type: [String, Number],
    default: null
  },
  ...bs,
  order: {
    type: [String, Number],
    default: null
  },
  ...Ss,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Wg.includes(e)
  },
  ...J(),
  ...ve()
}, "VCol"), Gg = F()({
  name: "VCol",
  props: jg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = h(() => {
      const l = [];
      let i;
      for (i in Wo)
        Wo[i].forEach((r) => {
          const s = e[r], c = Hg(i, r, s);
          c && l.push(c);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return fn(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), to = ["start", "end", "center"], ks = ["space-between", "space-around", "space-evenly"];
function no(e, n) {
  return Za.reduce((t, a) => {
    const l = e + Ln(a);
    return t[l] = n(), t;
  }, {});
}
const Ug = [...to, "baseline", "stretch"], Cs = (e) => Ug.includes(e), ws = no("align", () => ({
  type: String,
  default: null,
  validator: Cs
})), Yg = [...to, ...ks], Vs = (e) => Yg.includes(e), xs = no("justify", () => ({
  type: String,
  default: null,
  validator: Vs
})), qg = [...to, ...ks, "stretch"], Ps = (e) => qg.includes(e), Is = no("alignContent", () => ({
  type: String,
  default: null,
  validator: Ps
})), jo = {
  align: Object.keys(ws),
  justify: Object.keys(xs),
  alignContent: Object.keys(Is)
}, Kg = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Xg(e, n, t) {
  let a = Kg[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const Qg = $({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Cs
  },
  ...ws,
  justify: {
    type: String,
    default: null,
    validator: Vs
  },
  ...xs,
  alignContent: {
    type: String,
    default: null,
    validator: Ps
  },
  ...Is,
  ...J(),
  ...ve()
}, "VRow"), Zg = F()({
  name: "VRow",
  props: Qg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = h(() => {
      const l = [];
      let i;
      for (i in jo)
        jo[i].forEach((o) => {
          const r = e[o], s = Xg(i, o, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return fn(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), _s = Bt("v-spacer", "div", "VSpacer"), Bs = $({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: le,
    default: "$next"
  },
  prevIcon: {
    type: le,
    default: "$prev"
  },
  modeIcon: {
    type: le,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), Zl = F()({
  name: "VDatePickerControls",
  props: Bs(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = h(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = h(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = h(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = h(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function s() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function d() {
      t("click:month");
    }
    return N(() => u("div", {
      class: ["v-date-picker-controls"]
    }, [u(be, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), u(be, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), u(_s, {
      key: "mode-spacer"
    }, null), u("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [u(be, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), u(be, {
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), Jg = $({
  appendIcon: le,
  color: String,
  header: String,
  transition: String,
  onClick: Ge()
}, "VDatePickerHeader"), Jl = F()({
  name: "VDatePickerHeader",
  props: Jg(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = we(e, "color");
    function o() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return N(() => {
      const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return u("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [a.prepend && u("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && u(Ze, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d;
          return [u("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((d = a.default) == null ? void 0 : d.call(a)) ?? e.header])];
        }
      }), c && u("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? u(me, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var d;
          return [(d = a.append) == null ? void 0 : d.call(a)];
        }
      }) : u(be, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), eh = $({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function th(e) {
  const n = ha(), t = ie(e, "modelValue", [], (m) => Be(m)), a = h(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = ie(e, "year", void 0, (m) => {
    const y = m != null ? Number(m) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), y));
  }, (m) => n.getYear(m)), i = ie(e, "month", void 0, (m) => {
    const y = m != null ? Number(m) : n.getMonth(a.value), b = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(b, y);
  }, (m) => n.getMonth(m)), o = h(() => {
    const m = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((y) => (y + m) % 7);
  }), r = h(() => {
    const m = n.getWeekArray(i.value, e.firstDayOfWeek), y = m.flat(), b = 6 * 7;
    if (e.weeksInMonth === "static" && y.length < b) {
      const g = y[y.length - 1];
      let S = [];
      for (let k = 1; k <= b - y.length; k++)
        S.push(n.addDays(g, k)), k % 7 === 0 && (m.push(S), S = []);
    }
    return m;
  });
  function s(m, y) {
    return m.filter((b) => o.value.includes(n.toJsDate(b).getDay())).map((b, g) => {
      const S = n.toISO(b), k = !n.isSameMonth(b, i.value), V = n.isSameDay(b, n.startOfMonth(i.value)), _ = n.isSameDay(b, n.endOfMonth(i.value)), I = n.isSameDay(b, i.value);
      return {
        date: b,
        isoDate: S,
        formatted: n.format(b, "keyboardDate"),
        year: n.getYear(b),
        month: n.getMonth(b),
        isDisabled: f(b),
        isWeekStart: g % 7 === 0,
        isWeekEnd: g % 7 === 6,
        isToday: n.isSameDay(b, y),
        isAdjacent: k,
        isHidden: k && !e.showAdjacentMonths,
        isStart: V,
        isSelected: t.value.some((P) => n.isSameDay(b, P)),
        isEnd: _,
        isSame: I,
        localized: n.format(b, "dayOfMonth")
      };
    });
  }
  const c = h(() => {
    const m = n.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let g = 0; g <= 6; g++)
      y.push(n.addDays(m, g));
    const b = n.date();
    return s(y, b);
  }), d = h(() => {
    const m = r.value.flat(), y = n.date();
    return s(m, y);
  }), v = h(() => r.value.map((m) => m.length ? rg(n, m[0]) : null));
  function f(m) {
    if (e.disabled) return !0;
    const y = n.date(m);
    return e.min && n.isAfter(n.date(e.min), y) || e.max && n.isAfter(y, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((b) => n.isSameDay(n.date(b), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: d,
    daysInWeek: c,
    genDays: s,
    model: t,
    weeksInMonth: r,
    weekDays: o,
    weekNumbers: v
  };
}
const ps = $({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...eh()
}, "VDatePickerMonth"), ei = F()({
  name: "VDatePickerMonth",
  props: ps(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = j(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r
    } = th(e), s = ha(), c = Y(), d = Y(), v = Y(!1), f = h(() => v.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
    const m = h(() => {
      const S = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= S;
    });
    X(i, (S, k) => {
      k && (v.value = s.isBefore(S[0].date, k[0].date));
    });
    function y(S) {
      const k = s.startOfDay(S);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], d.value = void 0), !c.value)
        c.value = k, o.value = [c.value];
      else if (d.value)
        c.value = S, d.value = void 0, o.value = [c.value];
      else {
        if (s.isSameDay(k, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else s.isBefore(k, c.value) ? (d.value = s.endOfDay(c.value), c.value = k) : d.value = s.endOfDay(k);
        const V = s.getDiff(d.value, c.value, "days"), _ = [c.value];
        for (let I = 1; I < V; I++) {
          const P = s.addDays(c.value, I);
          _.push(P);
        }
        _.push(d.value), o.value = _;
      }
    }
    function b(S) {
      const k = o.value.findIndex((V) => s.isSameDay(V, S));
      if (k === -1)
        o.value = [...o.value, S];
      else {
        const V = [...o.value];
        V.splice(k, 1), o.value = V;
      }
    }
    function g(S) {
      e.multiple === "range" ? y(S) : e.multiple ? b(S) : o.value = [S];
    }
    return () => u("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && u("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && u("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [St(" ")]), r.value.map((S) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [S]))]), u(Ze, {
      name: f.value
    }, {
      default: () => {
        var S;
        return [u("div", {
          ref: l,
          key: (S = i.value[0].date) == null ? void 0 : S.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && s.getWeekdays(e.firstDayOfWeek).map((k) => u("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [k])), i.value.map((k, V) => {
          const _ = {
            props: {
              onClick: () => g(k.date)
            },
            item: k,
            i: V
          };
          return m.value && !k.isSelected && (k.isDisabled = !0), u("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": k.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": k.isHidden,
              "v-date-picker-month__day--selected": k.isSelected,
              "v-date-picker-month__day--week-end": k.isWeekEnd,
              "v-date-picker-month__day--week-start": k.isWeekStart
            }],
            "data-v-date": k.isDisabled ? void 0 : k.isoDate
          }, [(e.showAdjacentMonths || !k.isAdjacent) && u(me, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (k.isSelected || k.isToday) && !k.isDisabled ? e.color : void 0,
                disabled: k.isDisabled,
                icon: !0,
                ripple: !1,
                text: k.localized,
                variant: k.isDisabled ? k.isToday ? "outlined" : "text" : k.isToday && !k.isSelected ? "outlined" : "flat",
                onClick: () => g(k.date)
              }
            }
          }, {
            default: () => {
              var I;
              return [((I = a.day) == null ? void 0 : I.call(a, _)) ?? u(be, _.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), As = $({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), ti = F()({
  name: "VDatePickerMonths",
  props: As(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ha(), i = ie(e, "modelValue"), o = h(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), Nt(12).map((s) => {
        const c = l.format(r, "monthShort"), d = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: d,
          text: c,
          value: s
        };
      });
    });
    return ze(() => {
      i.value = i.value ?? l.getMonth(l.date());
    }), N(() => u("div", {
      class: "v-date-picker-months",
      style: {
        height: K(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((r, s) => {
      var v;
      const c = {
        active: i.value === s,
        color: i.value === s ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: i.value === r.value ? "flat" : "text",
        onClick: () => d(s)
      };
      function d(f) {
        if (i.value === f) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = f;
      }
      return ((v = a.month) == null ? void 0 : v.call(a, {
        month: r,
        i: s,
        props: c
      })) ?? u(be, R({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), Ts = $({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), ni = F()({
  name: "VDatePickerYears",
  props: Ts(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ha(), i = ie(e, "modelValue"), o = h(() => {
      const s = l.getYear(l.date());
      let c = s - 100, d = s + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
      let v = l.startOfYear(l.date());
      return v = l.setYear(v, c), Nt(d - c + 1, c).map((f) => {
        const m = l.format(v, "year");
        return v = l.setYear(v, l.getYear(v) + 1), {
          text: m,
          value: f
        };
      });
    });
    ze(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const r = pa();
    return lt(async () => {
      var s;
      await Ce(), (s = r.el) == null || s.scrollIntoView({
        block: "center"
      });
    }), N(() => u("div", {
      class: "v-date-picker-years",
      style: {
        height: K(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((s, c) => {
      var v;
      const d = {
        ref: i.value === s.value ? r : void 0,
        active: i.value === s.value,
        color: i.value === s.value ? e.color : void 0,
        rounded: !0,
        text: s.text,
        variant: i.value === s.value ? "flat" : "text",
        onClick: () => {
          if (i.value === s.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = s.value;
        }
      };
      return ((v = a.year) == null ? void 0 : v.call(a, {
        year: s,
        i: c,
        props: d
      })) ?? u(be, R({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), nh = Bt("v-picker-title"), $s = $({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...il()
}, "VPicker"), Go = F()({
  name: "VPicker",
  props: $s(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = we(M(e, "color"));
    return N(() => {
      const i = sn.filterProps(e), o = !!(e.title || t.title);
      return u(sn, R(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && u("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [o && u(nh, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
            }
          }), t.header && u("div", {
            class: "v-picker__header"
          }, [t.header()])]), u("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && u(me, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), ah = $({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...Bs(),
  ...ps({
    weeksInMonth: "static"
  }),
  ...Oe(As(), ["modelValue"]),
  ...Oe(Ts(), ["modelValue"]),
  ...$s({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), lh = F()({
  name: "VDatePicker",
  props: ah(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ha(), {
      t: i
    } = De(), o = ie(e, "modelValue", void 0, (C) => Be(C), (C) => e.multiple ? C : C[0]), r = ie(e, "viewMode"), s = h(() => {
      var p;
      const C = l.date((p = o.value) == null ? void 0 : p[0]);
      return C && l.isValid(C) ? C : l.date();
    }), c = j(Number(e.month ?? l.getMonth(l.startOfMonth(s.value)))), d = j(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(s.value, c.value))))), v = Y(!1), f = h(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), m = h(() => {
      let C = l.date();
      return C = l.setDate(C, 1), C = l.setMonth(C, c.value), C = l.setYear(C, d.value), l.format(C, "monthAndYear");
    }), y = h(() => `date-picker-header${v.value ? "-reverse" : ""}-transition`), b = h(() => {
      const C = l.date(e.min);
      return e.min && l.isValid(C) ? C : null;
    }), g = h(() => {
      const C = l.date(e.max);
      return e.max && l.isValid(C) ? C : null;
    }), S = h(() => {
      if (e.disabled) return !0;
      const C = [];
      if (r.value !== "month")
        C.push("prev", "next");
      else {
        let p = l.date();
        if (p = l.setYear(p, d.value), p = l.setMonth(p, c.value), b.value) {
          const x = l.addDays(l.startOfMonth(p), -1);
          l.isAfter(b.value, x) && C.push("prev");
        }
        if (g.value) {
          const x = l.addDays(l.endOfMonth(p), 1);
          l.isAfter(x, g.value) && C.push("next");
        }
      }
      return C;
    });
    function k() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0, w(d.value)), A(c.value);
    }
    function V() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11, w(d.value)), A(c.value);
    }
    function _() {
      r.value = "month";
    }
    function I() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function P() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function A(C) {
      r.value === "months" && I(), t("update:month", C);
    }
    function w(C) {
      r.value === "year" && P(), t("update:year", C);
    }
    return X(o, (C, p) => {
      const x = Be(p), B = Be(C);
      if (!B.length) return;
      const T = l.date(x[x.length - 1]), E = l.date(B[B.length - 1]), z = l.getMonth(E), W = l.getYear(E);
      z !== c.value && (c.value = z, A(c.value)), W !== d.value && (d.value = W, w(d.value)), v.value = l.isBefore(T, E);
    }), N(() => {
      const C = Go.filterProps(e), p = Zl.filterProps(e), x = Jl.filterProps(e), B = ei.filterProps(e), T = Oe(ti.filterProps(e), ["modelValue"]), E = Oe(ni.filterProps(e), ["modelValue"]), z = {
        header: f.value,
        transition: y.value
      };
      return u(Go, R(C, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var W;
          return ((W = a.title) == null ? void 0 : W.call(a)) ?? u("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? u(me, {
          defaults: {
            VDatePickerHeader: {
              ...z
            }
          }
        }, {
          default: () => {
            var W;
            return [(W = a.header) == null ? void 0 : W.call(a, z)];
          }
        }) : u(Jl, R({
          key: "header"
        }, x, z, {
          onClick: r.value !== "month" ? _ : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => u(oe, null, [u(Zl, R(p, {
          disabled: S.value,
          text: m.value,
          "onClick:next": k,
          "onClick:prev": V,
          "onClick:month": I,
          "onClick:year": P
        }), null), u(Qn, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? u(ti, R({
            key: "date-picker-months"
          }, T, {
            modelValue: c.value,
            "onUpdate:modelValue": [(W) => c.value = W, A],
            min: b.value,
            max: g.value,
            year: d.value
          }), null) : r.value === "year" ? u(ni, R({
            key: "date-picker-years"
          }, E, {
            modelValue: d.value,
            "onUpdate:modelValue": [(W) => d.value = W, w],
            min: b.value,
            max: g.value
          }), null) : u(ei, R({
            key: "date-picker-month"
          }, B, {
            modelValue: o.value,
            "onUpdate:modelValue": (W) => o.value = W,
            month: c.value,
            "onUpdate:month": [(W) => c.value = W, A],
            year: d.value,
            "onUpdate:year": [(W) => d.value = W, w],
            min: b.value,
            max: g.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), ih = $({
  actionText: String,
  bgColor: String,
  color: String,
  icon: le,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...J(),
  ...Fe(),
  ...pt({
    size: void 0
  }),
  ...ge()
}, "VEmptyState"), oh = F()({
  name: "VEmptyState",
  props: ih(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = we(M(e, "bgColor")), {
      dimensionStyles: r
    } = Re(e), {
      displayClasses: s
    } = ht();
    function c(d) {
      t("click:action", d);
    }
    return N(() => {
      var g, S, k;
      const d = !!(a.actions || e.actionText), v = !!(a.headline || e.headline), f = !!(a.title || e.title), m = !!(a.text || e.text), y = !!(a.media || e.image || e.icon), b = e.size || (e.image ? 200 : 96);
      return u("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, s.value, e.class],
        style: [o.value, r.value, e.style]
      }, [y && u("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? u(me, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: b
          },
          VIcon: {
            size: b,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : u(oe, null, [e.image ? u($t, {
        key: "image",
        src: e.image,
        height: b
      }, null) : e.icon ? u(Se, {
        key: "icon",
        color: e.color,
        size: b,
        icon: e.icon
      }, null) : void 0])]), v && u("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((g = a.headline) == null ? void 0 : g.call(a)) ?? e.headline]), f && u("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((S = a.title) == null ? void 0 : S.call(a)) ?? e.title]), m && u("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: K(e.textWidth)
        }
      }, [((k = a.text) == null ? void 0 : k.call(a)) ?? e.text]), a.default && u("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), d && u("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [u(me, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var V;
          return [((V = a.actions) == null ? void 0 : V.call(a, {
            props: {
              onClick: c
            }
          })) ?? u(be, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), la = Symbol.for("vuetify:v-expansion-panel"), Es = $({
  ...J(),
  ...Mi()
}, "VExpansionPanelText"), ai = F()({
  name: "VExpansionPanelText",
  props: Es(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = he(la);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = Li(e, a.isSelected);
    return N(() => u(ja, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [pe(u("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && u("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[Ct, a.isSelected.value]])];
      }
    })), {};
  }
}), Ds = $({
  color: String,
  expandIcon: {
    type: le,
    default: "$expand"
  },
  collapseIcon: {
    type: le,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...J(),
  ...Fe()
}, "VExpansionPanelTitle"), li = F()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: Lt
  },
  props: Ds(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = he(la);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = we(e, "color"), {
      dimensionStyles: o
    } = Re(e), r = h(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = h(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return N(() => {
      var c;
      return pe(u("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, o.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [u("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, r.value), !e.hideActions && u(me, {
        defaults: {
          VIcon: {
            icon: s.value
          }
        }
      }, {
        default: () => {
          var d;
          return [u("span", {
            class: "v-expansion-panel-title__icon"
          }, [((d = t.actions) == null ? void 0 : d.call(t, r.value)) ?? u(Se, null, null)])];
        }
      })]), [[rt("ripple"), e.ripple]]);
    }), {};
  }
}), Ms = $({
  title: String,
  text: String,
  bgColor: String,
  ...We(),
  ...Sn(),
  ..._e(),
  ...ve(),
  ...Ds(),
  ...Es()
}, "VExpansionPanel"), rh = F()({
  name: "VExpansionPanel",
  props: Ms(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = kn(e, la), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = we(e, "bgColor"), {
      elevationClasses: o
    } = Ue(e), {
      roundedClasses: r
    } = Ee(e), s = h(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = h(() => a.group.items.value.reduce((f, m, y) => (a.group.selected.value.includes(m.id) && f.push(y), f), [])), d = h(() => {
      const f = a.group.items.value.findIndex((m) => m.id === a.id);
      return !a.isSelected.value && c.value.some((m) => m - f === 1);
    }), v = h(() => {
      const f = a.group.items.value.findIndex((m) => m.id === a.id);
      return !a.isSelected.value && c.value.some((m) => m - f === -1);
    });
    return Ie(la, a), N(() => {
      const f = !!(t.text || e.text), m = !!(t.title || e.title), y = li.filterProps(e), b = ai.filterProps(e);
      return u(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": v.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [u("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), u(me, {
          defaults: {
            VExpansionPanelTitle: {
              ...y
            },
            VExpansionPanelText: {
              ...b
            }
          }
        }, {
          default: () => {
            var g;
            return [m && u(li, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), f && u(ai, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (g = t.default) == null ? void 0 : g.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), uh = ["default", "accordion", "inset", "popout"], sh = $({
  flat: Boolean,
  ...bn(),
  ...fi(Ms(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ge(),
  ...J(),
  ...ve(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => uh.includes(e)
  }
}, "VExpansionPanels"), ch = F()({
  name: "VExpansionPanels",
  props: sh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = qt(e, la), {
      themeClasses: i
    } = ke(e), o = h(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return Te({
      VExpansionPanel: {
        bgColor: M(e, "bgColor"),
        collapseIcon: M(e, "collapseIcon"),
        color: M(e, "color"),
        eager: M(e, "eager"),
        elevation: M(e, "elevation"),
        expandIcon: M(e, "expandIcon"),
        focusable: M(e, "focusable"),
        hideActions: M(e, "hideActions"),
        readonly: M(e, "readonly"),
        ripple: M(e, "ripple"),
        rounded: M(e, "rounded"),
        static: M(e, "static")
      }
    }), N(() => u(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), dh = $({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Oe(Ka({
    active: !0
  }), ["location"]),
  ...mn(),
  ...Mt(),
  ...wt({
    transition: "fab-transition"
  })
}, "VFab"), vh = F()({
  name: "VFab",
  props: dh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = Y(56), i = j(), {
      resizeRef: o
    } = kt((v) => {
      v.length && (l.value = v[0].target.clientHeight);
    }), r = h(() => e.app || e.absolute), s = h(() => {
      var v;
      return r.value ? ((v = e.location) == null ? void 0 : v.split(" ").shift()) ?? "bottom" : !1;
    }), c = h(() => {
      var v;
      return r.value ? ((v = e.location) == null ? void 0 : v.split(" ")[1]) ?? "end" : !1;
    });
    at(() => e.app, () => {
      const v = gn({
        id: e.name,
        order: h(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: h(() => e.layout ? l.value + 24 : 0),
        elementSize: h(() => l.value + 24),
        active: h(() => e.app && a.value),
        absolute: M(e, "absolute")
      });
      ze(() => {
        i.value = v.layoutItemStyles.value;
      });
    });
    const d = j();
    return N(() => {
      const v = be.filterProps(e);
      return u("div", {
        ref: d,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class],
        style: [e.app ? {
          ...i.value
        } : {
          height: "inherit",
          width: void 0
        }, e.style]
      }, [u("div", {
        class: "v-fab__container"
      }, [u(Ze, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [pe(u(be, R({
          ref: o
        }, v, {
          active: void 0,
          location: void 0
        }), t), [[Ct, e.active]])]
      })])]);
    }), {};
  }
}), fh = $({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...Ft({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Be(e).every((n) => n != null && typeof n == "object")
  },
  ...fa({
    clearable: !0
  })
}, "VFileInput"), mh = F()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: fh(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = De(), o = ie(e, "modelValue", e.modelValue, (C) => Be(C), (C) => !e.multiple && Array.isArray(C) ? C[0] : C), {
      isFocused: r,
      focus: s,
      blur: c
    } = Ot(e), d = h(() => typeof e.showSize != "boolean" ? e.showSize : void 0), v = h(() => (o.value ?? []).reduce((C, p) => {
      let {
        size: x = 0
      } = p;
      return C + x;
    }, 0)), f = h(() => fo(v.value, d.value)), m = h(() => (o.value ?? []).map((C) => {
      const {
        name: p = "",
        size: x = 0
      } = C;
      return e.showSize ? `${p} (${fo(x, d.value)})` : p;
    })), y = h(() => {
      var p;
      const C = ((p = o.value) == null ? void 0 : p.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, C, f.value) : i(e.counterString, C);
    }), b = j(), g = j(), S = j(), k = h(() => r.value || e.active), V = h(() => ["plain", "underlined"].includes(e.variant));
    function _() {
      var C;
      S.value !== document.activeElement && ((C = S.value) == null || C.focus()), r.value || s();
    }
    function I(C) {
      var p;
      (p = S.value) == null || p.click();
    }
    function P(C) {
      a("mousedown:control", C);
    }
    function A(C) {
      var p;
      (p = S.value) == null || p.click(), a("click:control", C);
    }
    function w(C) {
      C.stopPropagation(), _(), Ce(() => {
        o.value = [], gi(e["onClick:clear"], C);
      });
    }
    return X(o, (C) => {
      (!Array.isArray(C) || !C.length) && S.value && (S.value.value = "");
    }), N(() => {
      const C = !!(l.counter || e.counter), p = !!(C || l.details), [x, B] = Ut(t), {
        modelValue: T,
        ...E
      } = qe.filterProps(e), z = Oi(e);
      return u(qe, R({
        ref: b,
        modelValue: o.value,
        "onUpdate:modelValue": (W) => o.value = W,
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": V.value
        }, e.class],
        style: e.style,
        "onClick:prepend": I
      }, x, E, {
        centerAffix: !V.value,
        focused: r.value
      }), {
        ...l,
        default: (W) => {
          let {
            id: Q,
            isDisabled: ee,
            isDirty: O,
            isReadonly: D,
            isValid: L
          } = W;
          return u(jn, R({
            ref: g,
            "prepend-icon": e.prependIcon,
            onMousedown: P,
            onClick: A,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, z, {
            id: Q.value,
            active: k.value || O.value,
            dirty: O.value || e.dirty,
            disabled: ee.value,
            focused: r.value,
            error: L.value === !1
          }), {
            ...l,
            default: (q) => {
              var se;
              let {
                props: {
                  class: te,
                  ...ne
                }
              } = q;
              return u(oe, null, [u("input", R({
                ref: S,
                type: "file",
                readonly: D.value,
                disabled: ee.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (H) => {
                  H.stopPropagation(), D.value && H.preventDefault(), _();
                },
                onChange: (H) => {
                  if (!H.target) return;
                  const ae = H.target;
                  o.value = [...ae.files ?? []];
                },
                onFocus: _,
                onBlur: c
              }, ne, B), null), u("div", {
                class: te
              }, [!!((se = o.value) != null && se.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: m.value,
                totalBytes: v.value,
                totalBytesReadable: f.value
              }) : e.chips ? m.value.map((H) => u(Wn, {
                key: H,
                size: "small",
                text: H
              }, null)) : m.value.join(", "))])]);
            }
          });
        },
        details: p ? (W) => {
          var Q, ee;
          return u(oe, null, [(Q = l.details) == null ? void 0 : Q.call(l, W), C && u(oe, null, [u("span", null, null), u(el, {
            active: !!((ee = o.value) != null && ee.length),
            value: y.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), yt({}, b, g, S);
  }
}), gh = $({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...it(),
  ...J(),
  ...We(),
  ...mn(),
  ..._e(),
  ...ve({
    tag: "footer"
  }),
  ...ge()
}, "VFooter"), hh = F()({
  name: "VFooter",
  props: gh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), {
      themeClasses: l
    } = ke(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = we(M(e, "color")), {
      borderClasses: r
    } = st(e), {
      elevationClasses: s
    } = Ue(e), {
      roundedClasses: c
    } = Ee(e), d = Y(32), {
      resizeRef: v
    } = kt((m) => {
      m.length && (d.value = m[0].target.clientHeight);
    }), f = h(() => e.height === "auto" ? d.value : parseInt(e.height, 10));
    return at(() => e.app, () => {
      const m = gn({
        id: e.name,
        order: h(() => parseInt(e.order, 10)),
        position: h(() => "bottom"),
        layoutSize: f,
        elementSize: h(() => e.height === "auto" ? void 0 : f.value),
        active: h(() => e.app),
        absolute: M(e, "absolute")
      });
      ze(() => {
        a.value = m.layoutItemStyles.value;
      });
    }), N(() => u(e.tag, {
      ref: v,
      class: ["v-footer", l.value, i.value, r.value, s.value, c.value, e.class],
      style: [o.value, e.app ? a.value : {
        height: K(e.height)
      }, e.style]
    }, t)), {};
  }
}), yh = $({
  ...J(),
  ...mv()
}, "VForm"), bh = F()({
  name: "VForm",
  props: yh(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = gv(e), i = j();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const c = s, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((v) => {
        var m;
        let {
          valid: f
        } = v;
        f && ((m = i.value) == null || m.submit());
      }), c.preventDefault();
    }
    return N(() => {
      var s;
      return u("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(s = t.default) == null ? void 0 : s.call(t, l)]);
    }), yt(l, i);
  }
}), Sh = $({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...Ei()
}, "VHover"), kh = F()({
  name: "VHover",
  props: Sh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = Di(e, (o) => !e.disabled && (a.value = o));
    return () => {
      var o;
      return (o = t.default) == null ? void 0 : o.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), Ch = $({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...Fe(),
  ...ve()
}, "VInfiniteScroll"), Uo = mt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ua();
    return X(l, async (i) => {
      t("intersect", e.side, i);
    }), N(() => u("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [St(" ")])), {};
  }
}), wh = F()({
  name: "VInfiniteScroll",
  props: Ch(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = Y("ok"), o = Y("ok"), r = h(() => K(e.margin)), s = Y(!1);
    function c(I) {
      if (!l.value) return;
      const P = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[P] = I;
    }
    function d() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[I];
    }
    function v() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[I];
    }
    function f() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[I];
    }
    lt(() => {
      l.value && (e.side === "start" ? c(v()) : e.side === "both" && c(v() / 2 - f() / 2));
    });
    function m(I, P) {
      I === "start" ? i.value = P : I === "end" && (o.value = P);
    }
    function y(I) {
      return I === "start" ? i.value : o.value;
    }
    let b = 0;
    function g(I, P) {
      s.value = P, s.value && S(I);
    }
    function S(I) {
      if (e.mode !== "manual" && !s.value) return;
      const P = y(I);
      if (!l.value || ["empty", "loading"].includes(P)) return;
      b = v(), m(I, "loading");
      function A(w) {
        m(I, w), Ce(() => {
          w === "empty" || w === "error" || (w === "ok" && I === "start" && c(v() - b + d()), e.mode !== "manual" && Ce(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  S(I);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: I,
        done: A
      });
    }
    const {
      t: k
    } = De();
    function V(I, P) {
      var C, p, x, B, T;
      if (e.side !== I && e.side !== "both") return;
      const A = () => S(I), w = {
        side: I,
        props: {
          onClick: A,
          color: e.color
        }
      };
      return P === "error" ? (C = t.error) == null ? void 0 : C.call(t, w) : P === "empty" ? ((p = t.empty) == null ? void 0 : p.call(t, w)) ?? u("div", null, [k(e.emptyText)]) : e.mode === "manual" ? P === "loading" ? ((x = t.loading) == null ? void 0 : x.call(t, w)) ?? u(En, {
        indeterminate: !0,
        color: e.color
      }, null) : ((B = t["load-more"]) == null ? void 0 : B.call(t, w)) ?? u(be, {
        variant: "outlined",
        color: e.color,
        onClick: A
      }, {
        default: () => [k(e.loadMoreText)]
      }) : ((T = t.loading) == null ? void 0 : T.call(t, w)) ?? u(En, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: _
    } = Re(e);
    N(() => {
      const I = e.tag, P = e.side === "start" || e.side === "both", A = e.side === "end" || e.side === "both", w = e.mode === "intersect";
      return u(I, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": P,
          "v-infinite-scroll--end": A
        }],
        style: _.value
      }, {
        default: () => {
          var C;
          return [u("div", {
            class: "v-infinite-scroll__side"
          }, [V("start", i.value)]), P && w && u(Uo, {
            key: "start",
            side: "start",
            onIntersect: g,
            rootMargin: r.value
          }, null), (C = t.default) == null ? void 0 : C.call(t), A && w && u(Uo, {
            key: "end",
            side: "end",
            onIntersect: g,
            rootMargin: r.value
          }, null), u("div", {
            class: "v-infinite-scroll__side"
          }, [V("end", o.value)])];
        }
      });
    });
  }
}), Ls = Symbol.for("vuetify:v-item-group"), Vh = $({
  ...J(),
  ...bn({
    selectedClass: "v-item--selected"
  }),
  ...ve(),
  ...ge()
}, "VItemGroup"), xh = F()({
  name: "VItemGroup",
  props: Vh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = qt(e, Ls);
    return () => u(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: s.value
        })];
      }
    });
  }
}), Ph = F()({
  name: "VItem",
  props: Sn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: s
    } = kn(e, Ls);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: s.value
      });
    };
  }
}), Ih = Bt("v-kbd", "kbd"), _h = $({
  ...J(),
  ...Fe(),
  ...xr()
}, "VLayout"), Bh = F()({
  name: "VLayout",
  props: _h(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = Ir(e), {
      dimensionStyles: s
    } = Re(e);
    return N(() => {
      var c;
      return u("div", {
        ref: r,
        class: [a.value, e.class],
        style: [s.value, l.value, e.style]
      }, [(c = t.default) == null ? void 0 : c.call(t)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), ph = $({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...J(),
  ...mn()
}, "VLayoutItem"), Ah = F()({
  name: "VLayoutItem",
  props: ph(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a
    } = gn({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: M(e, "position"),
      elementSize: M(e, "size"),
      layoutSize: M(e, "size"),
      active: M(e, "modelValue"),
      absolute: M(e, "absolute")
    });
    return () => {
      var l;
      return u("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), Th = $({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...J(),
  ...Fe(),
  ...ve(),
  ...wt({
    transition: "fade-transition"
  })
}, "VLazy"), $h = F()({
  name: "VLazy",
  directives: {
    intersect: ia
  },
  props: Th(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Re(e), l = ie(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return N(() => pe(u(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && u(Ze, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      })]
    }), [[rt("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), Eh = $({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...J()
}, "VLocaleProvider"), Dh = F()({
  name: "VLocaleProvider",
  props: Eh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = cd(e);
    return N(() => {
      var l;
      return u("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), Mh = $({
  scrollable: Boolean,
  ...J(),
  ...Fe(),
  ...ve({
    tag: "main"
  })
}, "VMain"), Lh = F()({
  name: "VMain",
  props: Mh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Re(e), {
      mainStyles: l
    } = Pr(), {
      ssrBootStyles: i
    } = hn();
    return N(() => u(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, a.value, e.style]
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? u("div", {
          class: "v-main__scroller"
        }, [(o = t.default) == null ? void 0 : o.call(t)]) : (r = t.default) == null ? void 0 : r.call(t)];
      }
    })), {};
  }
});
function Oh(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = Y(!1), i = Y(0), o = h(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: K(i.value)
    } : {
      top: a.value.top
    }];
  });
  lt(() => {
    X(t, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), Ke(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", d = n.value.getBoundingClientRect(), v = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, i.value - v), m = d.height + Math.max(i.value, v) - window.scrollY - window.innerHeight, y = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    d.height < window.innerHeight - v ? (l.value = "top", i.value = v) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + d.top - y, l.value = !0) : c === "down" && m <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && f <= 0 && (y ? l.value !== "top" && (i.value = -f + y + v, l.value = "top") : (i.value = d.top + f, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const Fh = 100, Rh = 20;
function Yo(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function qo(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = Yo(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return Yo(n) * 1e3;
}
function Nh() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new Tc(Rh))).push([l.timeStamp, i]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const d of i) {
      if (o[0] - d[0] > Fh) break;
      r.push({
        t: d[0],
        d: d[1].clientX
      }), s.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: qo(r),
      y: qo(s),
      get direction() {
        const {
          x: d,
          y: v
        } = this, [f, m] = [Math.abs(d), Math.abs(v)];
        return f > m && d >= 0 ? "right" : f > m && d <= 0 ? "left" : m > f && v >= 0 ? "down" : m > f && v <= 0 ? "up" : zh();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function zh() {
  throw new Error();
}
function Hh(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  lt(() => {
    window.addEventListener("touchstart", k, {
      passive: !0
    }), window.addEventListener("touchmove", V, {
      passive: !1
    }), window.addEventListener("touchend", _, {
      passive: !0
    });
  }), Ke(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", V), window.removeEventListener("touchend", _);
  });
  const r = h(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: d
  } = Nh();
  let v = !1;
  const f = Y(!1), m = Y(0), y = Y(0);
  let b;
  function g(P, A) {
    return (o.value === "left" ? P : o.value === "right" ? document.documentElement.clientWidth - P : o.value === "top" ? P : o.value === "bottom" ? document.documentElement.clientHeight - P : _n()) - (A ? l.value : 0);
  }
  function S(P) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (P - y.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - P - y.value) / l.value : o.value === "top" ? (P - y.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - P - y.value) / l.value : _n();
    return A ? Math.max(0, Math.min(1, w)) : w;
  }
  function k(P) {
    if (i.value) return;
    const A = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY, C = 25, p = o.value === "left" ? A < C : o.value === "right" ? A > document.documentElement.clientWidth - C : o.value === "top" ? w < C : o.value === "bottom" ? w > document.documentElement.clientHeight - C : _n(), x = t.value && (o.value === "left" ? A < l.value : o.value === "right" ? A > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : _n());
    (p || x || t.value && a.value) && (b = [A, w], y.value = g(r.value ? A : w, t.value), m.value = S(r.value ? A : w), v = y.value > -20 && y.value < 80, c(P), s(P));
  }
  function V(P) {
    const A = P.changedTouches[0].clientX, w = P.changedTouches[0].clientY;
    if (v) {
      if (!P.cancelable) {
        v = !1;
        return;
      }
      const p = Math.abs(A - b[0]), x = Math.abs(w - b[1]);
      (r.value ? p > x && p > 3 : x > p && x > 3) ? (f.value = !0, v = !1) : (r.value ? x : p) > 3 && (v = !1);
    }
    if (!f.value) return;
    P.preventDefault(), s(P);
    const C = S(r.value ? A : w, !1);
    m.value = Math.max(0, Math.min(1, C)), C > 1 ? y.value = g(r.value ? A : w, !0) : C < 0 && (y.value = g(r.value ? A : w, !1));
  }
  function _(P) {
    if (v = !1, !f.value) return;
    s(P), f.value = !1;
    const A = d(P.changedTouches[0].identifier), w = Math.abs(A.x), C = Math.abs(A.y);
    (r.value ? w > C && w > 400 : C > w && C > 3) ? t.value = A.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || _n()) : t.value = m.value > 0.5;
  }
  const I = h(() => f.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${m.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${m.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${m.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${m.value * l.value}px))` : _n(),
    transition: "none"
  } : void 0);
  return at(f, () => {
    var w, C;
    const P = ((w = n.value) == null ? void 0 : w.style.transform) ?? null, A = ((C = n.value) == null ? void 0 : C.style.transition) ?? null;
    ze(() => {
      var p, x, B, T;
      (x = n.value) == null || x.style.setProperty("transform", ((p = I.value) == null ? void 0 : p.transform) || "none"), (T = n.value) == null || T.style.setProperty("transition", ((B = I.value) == null ? void 0 : B.transition) || null);
    }), Je(() => {
      var p, x;
      (p = n.value) == null || p.style.setProperty("transform", P), (x = n.value) == null || x.style.setProperty("transition", A);
    });
  }), {
    isDragging: f,
    dragProgress: m,
    dragStyles: I
  };
}
function _n() {
  throw new Error();
}
const Wh = ["start", "end", "left", "right", "top", "bottom"], jh = $({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => Wh.includes(e)
  },
  sticky: Boolean,
  ...it(),
  ...J(),
  ...Ei(),
  ...wn({
    mobile: null
  }),
  ...We(),
  ...mn(),
  ..._e(),
  ...ve({
    tag: "nav"
  }),
  ...ge()
}, "VNavigationDrawer"), Gh = F()({
  name: "VNavigationDrawer",
  props: jh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: i
    } = He(), {
      themeClasses: o
    } = ke(e), {
      borderClasses: r
    } = st(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = we(M(e, "color")), {
      elevationClasses: d
    } = Ue(e), {
      displayClasses: v,
      mobile: f
    } = ht(e), {
      roundedClasses: m
    } = Ee(e), y = Fr(), b = ie(e, "modelValue", null, (L) => !!L), {
      ssrBootStyles: g
    } = hn(), {
      scopeId: S
    } = Vn(), k = j(), V = Y(!1), {
      runOpenDelay: _,
      runCloseDelay: I
    } = Di(e, (L) => {
      V.value = L;
    }), P = h(() => e.rail && e.expandOnHover && V.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), A = h(() => Al(e.location, i.value)), w = h(() => e.persistent), C = h(() => !e.permanent && (f.value || e.temporary)), p = h(() => e.sticky && !C.value && A.value !== "bottom");
    at(() => e.expandOnHover && e.rail != null, () => {
      X(V, (L) => a("update:rail", !L));
    }), at(() => !e.disableResizeWatcher, () => {
      X(C, (L) => !e.permanent && Ce(() => b.value = !L));
    }), at(() => !e.disableRouteWatcher && !!y, () => {
      X(y.currentRoute, () => C.value && (b.value = !1));
    }), X(() => e.permanent, (L) => {
      L && (b.value = !0);
    }), e.modelValue == null && !C.value && (b.value = e.permanent || !f.value);
    const {
      isDragging: x,
      dragProgress: B
    } = Hh({
      el: k,
      isActive: b,
      isTemporary: C,
      width: P,
      touchless: M(e, "touchless"),
      position: A
    }), T = h(() => {
      const L = C.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : P.value;
      return x.value ? L * B.value : L;
    }), E = h(() => ["top", "bottom"].includes(e.location) ? 0 : P.value), {
      layoutItemStyles: z,
      layoutItemScrimStyles: W
    } = gn({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: A,
      layoutSize: T,
      elementSize: E,
      active: h(() => b.value || x.value),
      disableTransitions: h(() => x.value),
      absolute: h(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || p.value && typeof Q.value != "string"
      ))
    }), {
      isStuck: Q,
      stickyStyles: ee
    } = Oh({
      rootEl: k,
      isSticky: p,
      layoutItemStyles: z
    }), O = we(h(() => typeof e.scrim == "string" ? e.scrim : null)), D = h(() => ({
      ...x.value ? {
        opacity: B.value * 0.2,
        transition: "none"
      } : void 0,
      ...W.value
    }));
    return Te({
      VList: {
        bgColor: "transparent"
      }
    }), N(() => {
      const L = l.image || e.image;
      return u(oe, null, [u(e.tag, R({
        ref: k,
        onMouseenter: _,
        onMouseleave: I,
        class: ["v-navigation-drawer", `v-navigation-drawer--${A.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": V.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": C.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": b.value,
          "v-navigation-drawer--sticky": p.value
        }, o.value, s.value, r.value, v.value, d.value, m.value, e.class],
        style: [c.value, z.value, g.value, ee.value, e.style, ["top", "bottom"].includes(A.value) ? {
          height: "auto"
        } : {}]
      }, S, t), {
        default: () => {
          var q, te, ne;
          return [L && u("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? u(me, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : u($t, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && u("div", {
            class: "v-navigation-drawer__prepend"
          }, [(q = l.prepend) == null ? void 0 : q.call(l)]), u("div", {
            class: "v-navigation-drawer__content"
          }, [(te = l.default) == null ? void 0 : te.call(l)]), l.append && u("div", {
            class: "v-navigation-drawer__append"
          }, [(ne = l.append) == null ? void 0 : ne.call(l)])];
        }
      }), u(Ht, {
        name: "fade-transition"
      }, {
        default: () => [C.value && (x.value || b.value) && !!e.scrim && u("div", R({
          class: ["v-navigation-drawer__scrim", O.backgroundColorClasses.value],
          style: [D.value, O.backgroundColorStyles.value],
          onClick: () => {
            w.value || (b.value = !1);
          }
        }, S), null)]
      })]);
    }), {
      isStuck: Q
    };
  }
}), Uh = mt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Vu();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), Yh = $({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...Fe(),
  ...ca(),
  ...Fa(fa({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), qh = F()({
  name: "VOtpInput",
  props: Yh(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: i
    } = Re(e), {
      isFocused: o,
      focus: r,
      blur: s
    } = Ot(e), c = ie(e, "modelValue", "", (w) => w == null ? [] : String(w).split(""), (w) => w.join("")), {
      t: d
    } = De(), v = h(() => Number(e.length)), f = h(() => Array(v.value).fill(0)), m = j(-1), y = j(), b = j([]), g = h(() => b.value[m.value]);
    function S() {
      if (A(g.value.value)) {
        g.value.value = "";
        return;
      }
      const w = c.value.slice(), C = g.value.value;
      w[m.value] = C;
      let p = null;
      m.value > c.value.length ? p = c.value.length + 1 : m.value + 1 !== v.value && (p = "next"), c.value = w, p && nn(y.value, p);
    }
    function k(w) {
      const C = c.value.slice(), p = m.value;
      let x = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(w.key) && (w.preventDefault(), w.key === "ArrowLeft" ? x = "prev" : w.key === "ArrowRight" ? x = "next" : ["Backspace", "Delete"].includes(w.key) && (C[m.value] = "", c.value = C, m.value > 0 && w.key === "Backspace" ? x = "prev" : requestAnimationFrame(() => {
        var B;
        (B = b.value[p]) == null || B.select();
      })), requestAnimationFrame(() => {
        x != null && nn(y.value, x);
      }));
    }
    function V(w, C) {
      var x, B;
      C.preventDefault(), C.stopPropagation();
      const p = ((x = C == null ? void 0 : C.clipboardData) == null ? void 0 : x.getData("Text").slice(0, v.value)) ?? "";
      A(p) || (c.value = p.split(""), (B = b.value) == null || B[w].blur());
    }
    function _() {
      c.value = [];
    }
    function I(w, C) {
      r(), m.value = C;
    }
    function P() {
      s(), m.value = -1;
    }
    function A(w) {
      return e.type === "number" && /[^0-9]/g.test(w);
    }
    return Te({
      VField: {
        color: h(() => e.color),
        bgColor: h(() => e.color),
        baseColor: h(() => e.baseColor),
        disabled: h(() => e.disabled),
        error: h(() => e.error),
        variant: h(() => e.variant)
      }
    }, {
      scoped: !0
    }), X(c, (w) => {
      w.length === v.value && a("finish", w.join(""));
    }, {
      deep: !0
    }), X(m, (w) => {
      w < 0 || Ce(() => {
        var C;
        (C = b.value[w]) == null || C.select();
      });
    }), N(() => {
      var p;
      const [w, C] = Ut(t);
      return u("div", R({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, w), [u("div", {
        ref: y,
        class: "v-otp-input__content",
        style: [i.value]
      }, [f.value.map((x, B) => u(oe, null, [e.divider && B !== 0 && u("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), u(jn, {
        focused: o.value && e.focusAll || m.value === B,
        key: B
      }, {
        ...l,
        loader: void 0,
        default: () => u("input", {
          ref: (T) => b.value[B] = T,
          "aria-label": d(e.label, B + 1),
          autofocus: B === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[B],
          onInput: S,
          onFocus: (T) => I(T, B),
          onBlur: P,
          onKeydown: k,
          onPaste: (T) => V(B, T)
        }, null)
      })])), u("input", R({
        class: "v-otp-input-input",
        type: "hidden"
      }, C, {
        value: c.value.join("")
      }), null), u(Pt, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var x;
          return [((x = l.loader) == null ? void 0 : x.call(l)) ?? u(En, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (p = l.default) == null ? void 0 : p.call(l)])]);
    }), {
      blur: () => {
        var w;
        (w = b.value) == null || w.some((C) => C.blur());
      },
      focus: () => {
        var w;
        (w = b.value) == null || w[0].focus();
      },
      reset: _,
      isFocused: o
    };
  }
});
function Kh(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const Xh = $({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...J()
}, "VParallax"), Qh = F()({
  name: "VParallax",
  props: Xh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ua(), {
      resizeRef: i,
      contentRect: o
    } = kt(), {
      height: r
    } = ht(), s = j();
    ze(() => {
      var m;
      a.value = i.value = (m = s.value) == null ? void 0 : m.$el;
    });
    let c;
    X(l, (m) => {
      m ? (c = Si(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", f, {
        passive: !0
      }), f()) : c.removeEventListener("scroll", f);
    }), Ke(() => {
      c == null || c.removeEventListener("scroll", f);
    }), X(r, f), X(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.height;
    }, f);
    const d = h(() => 1 - Le(+e.scale));
    let v = -1;
    function f() {
      l.value && (cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        var I;
        const m = ((I = s.value) == null ? void 0 : I.$el).querySelector(".v-img__img");
        if (!m) return;
        const y = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, b = c instanceof Document ? window.scrollY : c.scrollTop, g = a.value.getBoundingClientRect().top + b, S = o.value.height, k = g + (S - y) / 2, V = Kh((b - k) * d.value), _ = Math.max(1, (d.value * (y - S) + S) / S);
        m.style.setProperty("transform", `translateY(${V}px) scale(${_})`);
      }));
    }
    return N(() => u($t, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: s,
      cover: !0,
      onLoadstart: f,
      onLoad: f
    }, t)), {};
  }
}), Zh = $({
  ...Xa({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Jh = F()({
  name: "VRadio",
  props: Zh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      const a = jt.filterProps(e);
      return u(jt, R(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), ey = $({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Ft(),
  ...Oe(_i(), ["multiple"]),
  trueIcon: {
    type: le,
    default: "$radioOn"
  },
  falseIcon: {
    type: le,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), ty = F()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: ey(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = Xe(), i = h(() => e.id || `radio-group-${l}`), o = ie(e, "modelValue");
    return N(() => {
      const [r, s] = Ut(t), c = qe.filterProps(e), d = jt.filterProps(e), v = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return u(qe, R({
        class: ["v-radio-group", e.class],
        style: e.style
      }, r, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (f) => o.value = f,
        id: i.value
      }), {
        ...a,
        default: (f) => {
          let {
            id: m,
            messagesId: y,
            isDisabled: b,
            isReadonly: g
          } = f;
          return u(oe, null, [v && u(Hn, {
            id: m.value
          }, {
            default: () => [v]
          }), u(Kr, R(d, {
            id: m.value,
            "aria-describedby": y.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: b.value,
            readonly: g.value,
            "aria-labelledby": v ? m.value : void 0,
            multiple: !1
          }, s, {
            modelValue: o.value,
            "onUpdate:modelValue": (S) => o.value = S
          }), a)]);
        }
      });
    }), {};
  }
}), ny = $({
  ...ca(),
  ...Ft(),
  ...ju(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), ay = F()({
  name: "VRangeSlider",
  props: ny(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = j(), o = j(), {
      rtlClasses: r
    } = He();
    function s(p) {
      if (!l.value || !i.value) return;
      const x = Yl(p, l.value.$el, e.direction), B = Yl(p, i.value.$el, e.direction), T = Math.abs(x), E = Math.abs(B);
      return T < E || T === E && x < 0 ? l.value.$el : i.value.$el;
    }
    const c = Gu(e), d = ie(e, "modelValue", void 0, (p) => p != null && p.length ? p.map((x) => c.roundValue(x)) : [0, 0]), {
      activeThumbRef: v,
      hasLabels: f,
      max: m,
      min: y,
      mousePressed: b,
      onSliderMousedown: g,
      onSliderTouchstart: S,
      position: k,
      trackContainerRef: V,
      readonly: _
    } = Uu({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", d.value);
      },
      onSliderEnd: (p) => {
        var T;
        let {
          value: x
        } = p;
        const B = v.value === ((T = l.value) == null ? void 0 : T.$el) ? [x, d.value[1]] : [d.value[0], x];
        !e.strict && B[0] < B[1] && (d.value = B), a("end", d.value);
      },
      onSliderMove: (p) => {
        var E, z, W, Q;
        let {
          value: x
        } = p;
        const [B, T] = d.value;
        !e.strict && B === T && B !== y.value && (v.value = x > B ? (E = i.value) == null ? void 0 : E.$el : (z = l.value) == null ? void 0 : z.$el, (W = v.value) == null || W.focus()), v.value === ((Q = l.value) == null ? void 0 : Q.$el) ? d.value = [Math.min(x, T), T] : d.value = [B, Math.max(B, x)];
      },
      getActiveThumb: s
    }), {
      isFocused: I,
      focus: P,
      blur: A
    } = Ot(e), w = h(() => k(d.value[0])), C = h(() => k(d.value[1]));
    return N(() => {
      const p = qe.filterProps(e), x = !!(e.label || t.label || t.prepend);
      return u(qe, R({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || f.value,
          "v-slider--focused": I.value,
          "v-slider--pressed": b.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: o
      }, p, {
        focused: I.value
      }), {
        ...t,
        prepend: x ? (B) => {
          var T, E;
          return u(oe, null, [((T = t.label) == null ? void 0 : T.call(t, B)) ?? (e.label ? u(Hn, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (E = t.prepend) == null ? void 0 : E.call(t, B)]);
        } : void 0,
        default: (B) => {
          var z, W;
          let {
            id: T,
            messagesId: E
          } = B;
          return u("div", {
            class: "v-slider__container",
            onMousedown: _.value ? void 0 : g,
            onTouchstartPassive: _.value ? void 0 : S
          }, [u("input", {
            id: `${T.value}_start`,
            name: e.name || T.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[0]
          }, null), u("input", {
            id: `${T.value}_stop`,
            name: e.name || T.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[1]
          }, null), u(Yu, {
            ref: V,
            start: w.value,
            stop: C.value
          }, {
            "tick-label": t["tick-label"]
          }), u(ql, {
            ref: l,
            "aria-describedby": E.value,
            focused: I && v.value === ((z = l.value) == null ? void 0 : z.$el),
            modelValue: d.value[0],
            "onUpdate:modelValue": (Q) => d.value = [Q, d.value[1]],
            onFocus: (Q) => {
              var ee, O, D, L;
              P(), v.value = (ee = l.value) == null ? void 0 : ee.$el, d.value[0] === d.value[1] && d.value[1] === y.value && Q.relatedTarget !== ((O = i.value) == null ? void 0 : O.$el) && ((D = l.value) == null || D.$el.blur(), (L = i.value) == null || L.$el.focus());
            },
            onBlur: () => {
              A(), v.value = void 0;
            },
            min: y.value,
            max: d.value[1],
            position: w.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), u(ql, {
            ref: i,
            "aria-describedby": E.value,
            focused: I && v.value === ((W = i.value) == null ? void 0 : W.$el),
            modelValue: d.value[1],
            "onUpdate:modelValue": (Q) => d.value = [d.value[0], Q],
            onFocus: (Q) => {
              var ee, O, D, L;
              P(), v.value = (ee = i.value) == null ? void 0 : ee.$el, d.value[0] === d.value[1] && d.value[0] === m.value && Q.relatedTarget !== ((O = l.value) == null ? void 0 : O.$el) && ((D = i.value) == null || D.$el.blur(), (L = l.value) == null || L.$el.focus());
            },
            onBlur: () => {
              A(), v.value = void 0;
            },
            min: d.value[0],
            max: m.value,
            position: C.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), ly = $({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: le,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: le,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...J(),
  ...je(),
  ...pt(),
  ...ve(),
  ...ge()
}, "VRating"), iy = F()({
  name: "VRating",
  props: ly(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = De(), {
      themeClasses: l
    } = ke(e), i = ie(e, "modelValue"), o = h(() => Le(parseFloat(i.value), 0, +e.length)), r = h(() => Nt(Number(e.length), 1)), s = h(() => r.value.flatMap((b) => e.halfIncrements ? [b - 0.5, b] : [b])), c = Y(-1), d = h(() => s.value.map((b) => {
      const g = e.hover && c.value > -1, S = o.value >= b, k = c.value >= b, _ = (g ? k : S) ? e.fullIcon : e.emptyIcon, I = e.activeColor ?? e.color, P = S || k ? I : e.color;
      return {
        isFilled: S,
        isHovered: k,
        icon: _,
        color: P
      };
    })), v = h(() => [0, ...s.value].map((b) => {
      function g() {
        c.value = b;
      }
      function S() {
        c.value = -1;
      }
      function k() {
        e.disabled || e.readonly || (i.value = o.value === b && e.clearable ? 0 : b);
      }
      return {
        onMouseenter: e.hover ? g : void 0,
        onMouseleave: e.hover ? S : void 0,
        onClick: k
      };
    })), f = h(() => e.name ?? `v-rating-${Xe()}`);
    function m(b) {
      var w, C;
      let {
        value: g,
        index: S,
        showStar: k = !0
      } = b;
      const {
        onMouseenter: V,
        onMouseleave: _,
        onClick: I
      } = v.value[S + 1], P = `${f.value}-${String(g).replace(".", "-")}`, A = {
        color: (w = d.value[S]) == null ? void 0 : w.color,
        density: e.density,
        disabled: e.disabled,
        icon: (C = d.value[S]) == null ? void 0 : C.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return u(oe, null, [u("label", {
        for: P,
        class: {
          "v-rating__item--half": e.halfIncrements && g % 1 > 0,
          "v-rating__item--full": e.halfIncrements && g % 1 === 0
        },
        onMouseenter: V,
        onMouseleave: _,
        onClick: I
      }, [u("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, g, e.length)]), k ? t.item ? t.item({
        ...d.value[S],
        props: A,
        value: g,
        index: S,
        rating: o.value
      }) : u(be, R({
        "aria-label": a(e.itemAriaLabel, g, e.length)
      }, A), null) : void 0]), u("input", {
        class: "v-rating__hidden",
        name: f.value,
        id: P,
        type: "radio",
        value: g,
        checked: o.value === g,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function y(b) {
      return t["item-label"] ? t["item-label"](b) : b.label ? u("span", null, [b.label]) : u("span", null, [St(" ")]);
    }
    return N(() => {
      var g;
      const b = !!((g = e.itemLabels) != null && g.length) || t["item-label"];
      return u(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [u(m, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((S, k) => {
          var V, _;
          return u("div", {
            class: "v-rating__wrapper"
          }, [b && e.itemLabelPosition === "top" ? y({
            value: S,
            index: k,
            label: (V = e.itemLabels) == null ? void 0 : V[k]
          }) : void 0, u("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? u(oe, null, [u(m, {
            value: S - 0.5,
            index: k * 2
          }, null), u(m, {
            value: S,
            index: k * 2 + 1
          }, null)]) : u(m, {
            value: S,
            index: k
          }, null)]), b && e.itemLabelPosition === "bottom" ? y({
            value: S,
            index: k,
            label: (_ = e.itemLabels) == null ? void 0 : _[k]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), oy = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function ry(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return u("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [n]);
}
function Ko(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => gl(n));
}
function gl(e) {
  let n = [];
  if (!e) return n;
  const t = oy[e];
  if (e !== t) {
    if (e.includes(",")) return Xo(e);
    if (e.includes("@")) return Ko(e);
    t.includes(",") ? n = Xo(t) : t.includes("@") ? n = Ko(t) : t && n.push(gl(t));
  }
  return [ry(e, n)];
}
function Xo(e) {
  return e.replace(/\s/g, "").split(",").map(gl);
}
const uy = $({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...Fe(),
  ...We(),
  ...ge()
}, "VSkeletonLoader"), sy = F()({
  name: "VSkeletonLoader",
  props: uy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = we(M(e, "color")), {
      dimensionStyles: i
    } = Re(e), {
      elevationClasses: o
    } = Ue(e), {
      themeClasses: r
    } = ke(e), {
      t: s
    } = De(), c = h(() => gl(Be(e.type).join(",")));
    return N(() => {
      var f;
      const d = !t.default || e.loading, v = e.boilerplate || !d ? {} : {
        ariaLive: "polite",
        ariaLabel: s(e.loadingText),
        role: "alert"
      };
      return u("div", R({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, a.value, o.value],
        style: [l.value, d ? i.value : {}]
      }, v), [d ? c.value : (f = t.default) == null ? void 0 : f.call(t)]);
    }), {};
  }
}), cy = F()({
  name: "VSlideGroupItem",
  props: Sn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = kn(e, lu);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function dy(e) {
  const n = Y(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), Ce(() => n.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const d = performance.now() - c + s;
      n.value = Math.max(e() - d, 0), n.value <= 0 && a();
    }, s);
  }
  return Je(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const vy = $({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Mt({
    location: "bottom"
  }),
  ...Nn(),
  ..._e(),
  ...gt(),
  ...ge(),
  ...Oe(va({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), fy = F()({
  name: "VSnackbar",
  props: vy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      positionClasses: l
    } = zn(e), {
      scopeId: i
    } = Vn(), {
      themeClasses: o
    } = ke(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = yn(e), {
      roundedClasses: d
    } = Ee(e), v = dy(() => Number(e.timeout)), f = j(), m = j(), y = Y(!1), b = Y(0), g = j(), S = he(Xn, void 0);
    at(() => !!S, () => {
      const x = Pr();
      ze(() => {
        g.value = x.mainStyles.value;
      });
    }), X(a, V), X(() => e.timeout, V), lt(() => {
      a.value && V();
    });
    let k = -1;
    function V() {
      v.reset(), window.clearTimeout(k);
      const x = Number(e.timeout);
      if (!a.value || x === -1) return;
      const B = vi(m.value);
      v.start(B), k = window.setTimeout(() => {
        a.value = !1;
      }, x);
    }
    function _() {
      v.reset(), window.clearTimeout(k);
    }
    function I() {
      y.value = !0, _();
    }
    function P() {
      y.value = !1, V();
    }
    function A(x) {
      b.value = x.touches[0].clientY;
    }
    function w(x) {
      Math.abs(b.value - x.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function C() {
      y.value && P();
    }
    const p = h(() => e.location.split(" ").reduce((x, B) => (x[`v-snackbar--${B}`] = !0, x), {}));
    return N(() => {
      const x = Pt.filterProps(e), B = !!(t.default || t.text || e.text);
      return u(Pt, R({
        ref: f,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, p.value, l.value, e.class],
        style: [g.value, e.style]
      }, x, {
        modelValue: a.value,
        "onUpdate:modelValue": (T) => a.value = T,
        contentProps: R({
          class: ["v-snackbar__wrapper", o.value, r.value, d.value, c.value],
          style: [s.value],
          onPointerenter: I,
          onPointerleave: P
        }, x.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: A,
        onTouchend: w,
        onAfterLeave: C
      }, i), {
        default: () => {
          var T, E;
          return [Yt(!1, "v-snackbar"), e.timer && !y.value && u("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [u(Ya, {
            ref: m,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": v.time.value
          }, null)]), B && u("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((T = t.text) == null ? void 0 : T.call(t)) ?? e.text, (E = t.default) == null ? void 0 : E.call(t)]), t.actions && u(me, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), yt({}, f);
  }
}), Os = $({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: Boolean,
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), Fs = $({
  autoLineWidth: Boolean,
  ...Os()
}, "VBarline"), Qo = F()({
  name: "VBarline",
  props: Fs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Xe(), l = h(() => e.id || `barline-${a}`), i = h(() => Number(e.autoDrawDuration) || 500), o = h(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), r = h(() => parseFloat(e.lineWidth) || 4), s = h(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = h(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), d = h(() => e.modelValue.map((b) => Ne(b, e.itemValue, b)));
    function v(b, g) {
      const {
        minX: S,
        maxX: k,
        minY: V,
        maxY: _
      } = g, I = b.length;
      let P = e.max != null ? Number(e.max) : Math.max(...b), A = e.min != null ? Number(e.min) : Math.min(...b);
      A > 0 && e.min == null && (A = 0), P < 0 && e.max == null && (P = 0);
      const w = k / I, C = (_ - V) / (P - A || 1), p = _ - Math.abs(A * C);
      return b.map((x, B) => {
        const T = Math.abs(C * x);
        return {
          x: S + B * w,
          y: p - T + +(x < 0) * T,
          height: T,
          value: x
        };
      });
    }
    const f = h(() => {
      const b = [], g = v(d.value, c.value), S = g.length;
      for (let k = 0; b.length < S; k++) {
        const V = g[k];
        let _ = e.labels[k];
        _ || (_ = typeof V == "object" ? V.value : V), b.push({
          x: V.x,
          value: String(_)
        });
      }
      return b;
    }), m = h(() => v(d.value, c.value)), y = h(() => (Math.abs(m.value[0].x - m.value[1].x) - r.value) / 2);
    N(() => {
      const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return u("svg", {
        display: "block"
      }, [u("defs", null, [u("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [b.map((g, S) => u("stop", {
        offset: S / Math.max(b.length - 1, 1),
        "stop-color": g || "currentColor"
      }, null))])]), u("clipPath", {
        id: `${l.value}-clip`
      }, [m.value.map((g) => u("rect", {
        x: g.x + y.value,
        y: g.y,
        width: r.value,
        height: g.height,
        rx: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0,
        ry: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0
      }, [e.autoDraw && u(oe, null, [u("animate", {
        attributeName: "y",
        from: g.y + g.height,
        to: g.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), u("animate", {
        attributeName: "height",
        from: "0",
        to: g.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && u("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [f.value.map((g, S) => {
        var k;
        return u("text", {
          x: g.x + y.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((k = t.label) == null ? void 0 : k.call(t, {
          index: S,
          value: g.value
        })) ?? g.value]);
      })]), u("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [u("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function my(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const s = e[r + 1], c = e[r - 1] || l, d = s && gy(s, o, c);
    if (!s || d)
      return `L${o.x} ${o.y}`;
    const v = Math.min(Zo(c, o), Zo(s, o)), m = v / 2 < n ? v / 2 : n, y = Jo(c, o, m), b = Jo(s, o, m);
    return `L${y.x} ${y.y}S${o.x} ${o.y} ${b.x} ${b.y}`;
  }).join("") + (t ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function xa(e) {
  return parseInt(e, 10);
}
function gy(e, n, t) {
  return xa(e.x + t.x) === xa(2 * n.x) && xa(e.y + t.y) === xa(2 * n.y);
}
function Zo(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Jo(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + i.x * t,
    y: n.y + i.y * t
  };
}
const Rs = $({
  fill: Boolean,
  ...Os()
}, "VTrendline"), er = F()({
  name: "VTrendline",
  props: Rs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Xe(), l = h(() => e.id || `trendline-${a}`), i = h(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = j(0), r = j(null);
    function s(g, S) {
      const {
        minX: k,
        maxX: V,
        minY: _,
        maxY: I
      } = S, P = g.length, A = e.max != null ? Number(e.max) : Math.max(...g), w = e.min != null ? Number(e.min) : Math.min(...g), C = (V - k) / (P - 1), p = (I - _) / (A - w || 1);
      return g.map((x, B) => ({
        x: k + B * C,
        y: I - (x - w) * p,
        value: x
      }));
    }
    const c = h(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), d = h(() => parseFloat(e.lineWidth) || 4), v = h(() => Number(e.width)), f = h(() => {
      const g = Number(e.padding);
      return {
        minX: g,
        maxX: v.value - g,
        minY: g,
        maxY: parseInt(e.height, 10) - g
      };
    }), m = h(() => e.modelValue.map((g) => Ne(g, e.itemValue, g))), y = h(() => {
      const g = [], S = s(m.value, f.value), k = S.length;
      for (let V = 0; g.length < k; V++) {
        const _ = S[V];
        let I = e.labels[V];
        I || (I = typeof _ == "object" ? _.value : _), g.push({
          x: _.x,
          value: String(I)
        });
      }
      return g;
    });
    X(() => e.modelValue, async () => {
      if (await Ce(), !e.autoDraw || !r.value) return;
      const g = r.value, S = g.getTotalLength();
      e.fill ? (g.style.transformOrigin = "bottom center", g.style.transition = "none", g.style.transform = "scaleY(0)", g.getBoundingClientRect(), g.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, g.style.transform = "scaleY(1)") : (g.style.strokeDasharray = `${S}`, g.style.strokeDashoffset = `${S}`, g.getBoundingClientRect(), g.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, g.style.strokeDashoffset = "0"), o.value = S;
    }, {
      immediate: !0
    });
    function b(g) {
      return my(s(m.value, f.value), e.smooth ? 8 : Number(e.smooth), g, parseInt(e.height, 10));
    }
    N(() => {
      var S;
      const g = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return u("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [u("defs", null, [u("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [g.map((k, V) => u("stop", {
        offset: V / Math.max(g.length - 1, 1),
        "stop-color": k || "currentColor"
      }, null))])]), c.value && u("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [y.value.map((k, V) => {
        var _;
        return u("text", {
          x: k.x + d.value / 2 + d.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((_ = t.label) == null ? void 0 : _.call(t, {
          index: V,
          value: k.value
        })) ?? k.value]);
      })]), u("path", {
        ref: r,
        d: b(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && u("path", {
        d: b(!1),
        fill: "none",
        stroke: e.color ?? ((S = e.gradient) == null ? void 0 : S[0])
      }, null)]);
    });
  }
}), hy = $({
  type: {
    type: String,
    default: "trend"
  },
  ...Fs(),
  ...Rs()
}, "VSparkline"), yy = F()({
  name: "VSparkline",
  props: hy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ye(M(e, "color")), i = h(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), o = h(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    N(() => {
      const r = e.type === "trend" ? er : Qo, s = e.type === "trend" ? er.filterProps(e) : Qo.filterProps(e);
      return u(r, R({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, s), t);
    });
  }
}), by = $({
  ...J(),
  ..._u({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), Sy = F()({
  name: "VSpeedDial",
  props: by(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = j(), i = h(() => {
      var c;
      const [r, s = "center"] = ((c = e.location) == null ? void 0 : c.split(" ")) ?? [];
      return `${r} ${s}`;
    }), o = h(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return N(() => {
      const r = Dn.filterProps(e);
      return u(Dn, R(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...t,
        default: (s) => u(me, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [u(Ze, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
            }
          })]
        })
      });
    }), {};
  }
}), ao = Symbol.for("vuetify:v-stepper"), Ns = $({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), zs = F()({
  name: "VStepperActions",
  props: Ns(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = De();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return N(() => {
      const r = {
        onClick: i
      }, s = {
        onClick: o
      };
      return u("div", {
        class: "v-stepper-actions"
      }, [u(me, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) ?? u(be, r, null)];
        }
      }), u(me, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: s
          })) ?? u(be, s, null)];
        }
      })]);
    }), {};
  }
}), Hs = Bt("v-stepper-header"), ky = $({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: le,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: le,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: le,
    default: "$error"
  },
  icon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), Cy = $({
  ...ky(),
  ...Sn()
}, "VStepperItem"), Ws = F()({
  name: "VStepperItem",
  directives: {
    Ripple: Lt
  },
  props: Cy(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = kn(e, ao, !0), l = h(() => (a == null ? void 0 : a.value.value) ?? e.value), i = h(() => e.rules.every((f) => f() === !0)), o = h(() => !e.disabled && e.editable), r = h(() => !e.disabled && e.editable), s = h(() => e.error || !i.value), c = h(() => e.complete || e.rules.length > 0 && i.value), d = h(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), v = h(() => ({
      canEdit: r.value,
      hasError: s.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return N(() => {
      var g, S, k;
      const f = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled, m = !!(e.title != null || t.title), y = !!(e.subtitle != null || t.subtitle);
      function b() {
        a == null || a.toggle();
      }
      return pe(u("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        onClick: b
      }, [o.value && Yt(!0, "v-stepper-item"), u(ft, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: f ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var V;
          return [((V = t.icon) == null ? void 0 : V.call(t, v.value)) ?? (d.value ? u(Se, {
            icon: d.value
          }, null) : l.value)];
        }
      }), u("div", {
        class: "v-stepper-item__content"
      }, [m && u("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((g = t.title) == null ? void 0 : g.call(t, v.value)) ?? e.title]), y && u("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((S = t.subtitle) == null ? void 0 : S.call(t, v.value)) ?? e.subtitle]), (k = t.default) == null ? void 0 : k.call(t, v.value)])]), [[rt("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), wy = $({
  ...Oe(al(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), js = F()({
  name: "VStepperWindow",
  props: wy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = he(ao, null), l = ie(e, "modelValue"), i = h({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return N(() => {
      const o = rn.filterProps(e);
      return u(rn, R({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Vy = $({
  ...ll()
}, "VStepperWindowItem"), Gs = F()({
  name: "VStepperWindowItem",
  props: Vy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      const a = un.filterProps(e);
      return u(un, R({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), xy = $({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: le,
  editIcon: le,
  editable: Boolean,
  errorIcon: le,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...wn()
}, "Stepper"), Py = $({
  ...xy(),
  ...bn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...il(),
  ...Fa(Ns(), ["prevText", "nextText"])
}, "VStepper"), Iy = F()({
  name: "VStepper",
  props: Py(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = qt(e, ao), {
      displayClasses: r,
      mobile: s
    } = ht(e), {
      completeIcon: c,
      editIcon: d,
      errorIcon: v,
      color: f,
      editable: m,
      prevText: y,
      nextText: b
    } = Mn(e), g = h(() => e.items.map((V, _) => {
      const I = Ne(V, e.itemTitle, V), P = Ne(V, e.itemValue, _ + 1);
      return {
        title: I,
        value: P,
        raw: V
      };
    })), S = h(() => a.value.findIndex((V) => o.value.includes(V.id))), k = h(() => e.disabled ? e.disabled : S.value === 0 ? "prev" : S.value === a.value.length - 1 ? "next" : !1);
    return Te({
      VStepperItem: {
        editable: m,
        errorIcon: v,
        completeIcon: c,
        editIcon: d,
        prevText: y,
        nextText: b
      },
      VStepperActions: {
        color: f,
        disabled: k,
        prevText: y,
        nextText: b
      }
    }), N(() => {
      const V = sn.filterProps(e), _ = !!(t.header || e.items.length), I = e.items.length > 0, P = !e.hideActions && !!(I || t.actions);
      return u(sn, R(V, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var A, w;
          return [_ && u(Hs, {
            key: "stepper-header"
          }, {
            default: () => [g.value.map((C, p) => {
              let {
                raw: x,
                ...B
              } = C;
              return u(oe, null, [!!p && u(da, null, null), u(Ws, B, {
                default: t[`header-item.${B.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), I && u(js, {
            key: "stepper-window"
          }, {
            default: () => [g.value.map((C) => u(Gs, {
              value: C.value
            }, {
              default: () => {
                var p, x;
                return ((p = t[`item.${C.value}`]) == null ? void 0 : p.call(t, C)) ?? ((x = t.item) == null ? void 0 : x.call(t, C));
              }
            }))]
          }), (A = t.default) == null ? void 0 : A.call(t, {
            prev: i,
            next: l
          }), P && (((w = t.actions) == null ? void 0 : w.call(t, {
            next: l,
            prev: i
          })) ?? u(zs, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), _y = $({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...Ft(),
  ...Xa()
}, "VSwitch"), By = F()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: _y(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "indeterminate"), i = ie(e, "modelValue"), {
      loaderClasses: o
    } = oa(e), {
      isFocused: r,
      focus: s,
      blur: c
    } = Ot(e), d = j(), v = Ae && window.matchMedia("(forced-colors: active)").matches, f = h(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), m = Xe(), y = h(() => e.id || `switch-${m}`);
    function b() {
      l.value && (l.value = !1);
    }
    function g(S) {
      var k, V;
      S.stopPropagation(), S.preventDefault(), (V = (k = d.value) == null ? void 0 : k.input) == null || V.click();
    }
    return N(() => {
      const [S, k] = Ut(t), V = qe.filterProps(e), _ = jt.filterProps(e);
      return u(qe, R({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, S, V, {
        modelValue: i.value,
        "onUpdate:modelValue": (I) => i.value = I,
        id: y.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (I) => {
          let {
            id: P,
            messagesId: A,
            isDisabled: w,
            isReadonly: C,
            isValid: p
          } = I;
          const x = {
            model: i,
            isValid: p
          };
          return u(jt, R({
            ref: d
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(B) => i.value = B, b],
            id: P.value,
            "aria-describedby": A.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: w.value,
            readonly: C.value,
            onFocus: s,
            onBlur: c
          }, k), {
            ...a,
            default: (B) => {
              let {
                backgroundColorClasses: T,
                backgroundColorStyles: E
              } = B;
              return u("div", {
                class: ["v-switch__track", v ? void 0 : T.value],
                style: E.value,
                onClick: g
              }, [a["track-true"] && u("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](x)]), a["track-false"] && u("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](x)])]);
            },
            input: (B) => {
              let {
                inputNode: T,
                icon: E,
                backgroundColorClasses: z,
                backgroundColorStyles: W
              } = B;
              return u(oe, null, [T, u("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": E || e.loading
                }, e.inset || v ? void 0 : z.value],
                style: e.inset ? void 0 : W.value
              }, [a.thumb ? u(me, {
                defaults: {
                  VIcon: {
                    icon: E,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...x,
                  icon: E
                })]
              }) : u(wi, null, {
                default: () => [e.loading ? u(ra, {
                  name: "v-switch",
                  active: !0,
                  color: p.value === !1 ? void 0 : f.value
                }, {
                  default: (Q) => a.loader ? a.loader(Q) : u(En, {
                    active: Q.isActive,
                    color: Q.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : E && u(Se, {
                  key: String(E),
                  icon: E,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), py = $({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...J(),
  ...We(),
  ...mn(),
  ..._e(),
  ...ve(),
  ...ge()
}, "VSystemBar"), Ay = F()({
  name: "VSystemBar",
  props: py(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = we(M(e, "color")), {
      elevationClasses: o
    } = Ue(e), {
      roundedClasses: r
    } = Ee(e), {
      ssrBootStyles: s
    } = hn(), c = h(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: d
    } = gn({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: Y("top"),
      layoutSize: c,
      elementSize: c,
      active: h(() => !0),
      absolute: M(e, "absolute")
    });
    return N(() => u(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, r.value, e.class],
      style: [i.value, d.value, s.value, e.style]
    }, t)), {};
  }
}), lo = Symbol.for("vuetify:v-tabs"), Ty = $({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Oe(Ka({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), Us = F()({
  name: "VTab",
  props: Ty(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = Ye(e, "sliderColor"), o = j(), r = j(), s = h(() => e.direction === "horizontal"), c = h(() => {
      var v, f;
      return ((f = (v = o.value) == null ? void 0 : v.group) == null ? void 0 : f.isSelected.value) ?? !1;
    });
    function d(v) {
      var m, y;
      let {
        value: f
      } = v;
      if (f) {
        const b = (y = (m = o.value) == null ? void 0 : m.$el.parentElement) == null ? void 0 : y.querySelector(".v-tab--selected .v-tab__slider"), g = r.value;
        if (!b || !g) return;
        const S = getComputedStyle(b).color, k = b.getBoundingClientRect(), V = g.getBoundingClientRect(), _ = s.value ? "x" : "y", I = s.value ? "X" : "Y", P = s.value ? "right" : "bottom", A = s.value ? "width" : "height", w = k[_], C = V[_], p = w > C ? k[P] - V[P] : k[_] - V[_], x = Math.sign(p) > 0 ? s.value ? "right" : "bottom" : Math.sign(p) < 0 ? s.value ? "left" : "top" : "center", T = (Math.abs(p) + (Math.sign(p) < 0 ? k[A] : V[A])) / Math.max(k[A], V[A]) || 0, E = k[A] / V[A] || 0, z = 1.5;
        Jt(g, {
          backgroundColor: [S, "currentcolor"],
          transform: [`translate${I}(${p}px) scale${I}(${E})`, `translate${I}(${p / z}px) scale${I}(${(T - 1) / z + 1})`, "none"],
          transformOrigin: Array(3).fill(x)
        }, {
          duration: 225,
          easing: Kn
        });
      }
    }
    return N(() => {
      const v = be.filterProps(e);
      return u(be, R({
        symbol: lo,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, v, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": d
      }), {
        ...t,
        default: () => {
          var f;
          return u(oe, null, [((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, !e.hideSlider && u("div", {
            ref: r,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      });
    }), yt({}, o);
  }
}), $y = $({
  ...Oe(al(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), Ys = F()({
  name: "VTabsWindow",
  props: $y(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = he(lo, null), l = ie(e, "modelValue"), i = h({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return N(() => {
      const o = rn.filterProps(e);
      return u(rn, R({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Ey = $({
  ...ll()
}, "VTabsWindowItem"), qs = F()({
  name: "VTabsWindowItem",
  props: Ey(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return N(() => {
      const a = un.filterProps(e);
      return u(un, R({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function Dy(e) {
  return e ? e.map((n) => di(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const My = $({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...pi({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...je(),
  ...ve()
}, "VTabs"), Ly = F()({
  name: "VTabs",
  props: My(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), i = h(() => Dy(e.items)), {
      densityClasses: o
    } = et(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = we(M(e, "bgColor")), {
      scopeId: c
    } = Vn();
    return Te({
      VTab: {
        color: M(e, "color"),
        direction: M(e, "direction"),
        stacked: M(e, "stacked"),
        fixed: M(e, "fixedTabs"),
        sliderColor: M(e, "sliderColor"),
        hideSlider: M(e, "hideSlider")
      }
    }), N(() => {
      const d = ta.filterProps(e), v = !!(a.window || e.items.length > 0);
      return u(oe, null, [u(ta, R(d, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": K(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: lo
      }, c, t), {
        default: () => {
          var f;
          return [((f = a.default) == null ? void 0 : f.call(a)) ?? i.value.map((m) => {
            var y;
            return ((y = a.tab) == null ? void 0 : y.call(a, {
              item: m
            })) ?? u(Us, R(m, {
              key: m.text,
              value: m.value
            }), {
              default: a[`tab.${m.value}`] ? () => {
                var b;
                return (b = a[`tab.${m.value}`]) == null ? void 0 : b.call(a, {
                  item: m
                });
              } : void 0
            });
          })];
        }
      }), v && u(Ys, R({
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        key: "tabs-window"
      }, c), {
        default: () => {
          var f;
          return [i.value.map((m) => {
            var y;
            return ((y = a.item) == null ? void 0 : y.call(a, {
              item: m
            })) ?? u(qs, {
              value: m.value
            }, {
              default: () => {
                var b;
                return (b = a[`item.${m.value}`]) == null ? void 0 : b.call(a, {
                  item: m
                });
              }
            });
          }), (f = a.window) == null ? void 0 : f.call(a)];
        }
      })]);
    }), {};
  }
}), Oy = $({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...Ft(),
  ...fa()
}, "VTextarea"), Fy = F()({
  name: "VTextarea",
  directives: {
    Intersect: ia
  },
  inheritAttrs: !1,
  props: Oy(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = ie(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = Ot(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = h(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function v(x, B) {
      var T, E;
      !e.autofocus || !x || (E = (T = B[0].target) == null ? void 0 : T.focus) == null || E.call(T);
    }
    const f = j(), m = j(), y = Y(""), b = j(), g = h(() => e.persistentPlaceholder || o.value || e.active);
    function S() {
      var x;
      b.value !== document.activeElement && ((x = b.value) == null || x.focus()), o.value || r();
    }
    function k(x) {
      S(), a("click:control", x);
    }
    function V(x) {
      a("mousedown:control", x);
    }
    function _(x) {
      x.stopPropagation(), S(), Ce(() => {
        i.value = "", gi(e["onClick:clear"], x);
      });
    }
    function I(x) {
      var T;
      const B = x.target;
      if (i.value = B.value, (T = e.modelModifiers) != null && T.trim) {
        const E = [B.selectionStart, B.selectionEnd];
        Ce(() => {
          B.selectionStart = E[0], B.selectionEnd = E[1];
        });
      }
    }
    const P = j(), A = j(+e.rows), w = h(() => ["plain", "underlined"].includes(e.variant));
    ze(() => {
      e.autoGrow || (A.value = +e.rows);
    });
    function C() {
      e.autoGrow && Ce(() => {
        if (!P.value || !m.value) return;
        const x = getComputedStyle(P.value), B = getComputedStyle(m.value.$el), T = parseFloat(x.getPropertyValue("--v-field-padding-top")) + parseFloat(x.getPropertyValue("--v-input-padding-top")) + parseFloat(x.getPropertyValue("--v-field-padding-bottom")), E = P.value.scrollHeight, z = parseFloat(x.lineHeight), W = Math.max(parseFloat(e.rows) * z + T, parseFloat(B.getPropertyValue("--v-input-control-height"))), Q = parseFloat(e.maxRows) * z + T || 1 / 0, ee = Le(E ?? 0, W, Q);
        A.value = Math.floor((ee - T) / z), y.value = K(ee);
      });
    }
    lt(C), X(i, C), X(() => e.rows, C), X(() => e.maxRows, C), X(() => e.density, C);
    let p;
    return X(P, (x) => {
      x ? (p = new ResizeObserver(C), p.observe(P.value)) : p == null || p.disconnect();
    }), Ke(() => {
      p == null || p.disconnect();
    }), N(() => {
      const x = !!(l.counter || e.counter || e.counterValue), B = !!(x || l.details), [T, E] = Ut(t), {
        modelValue: z,
        ...W
      } = qe.filterProps(e), Q = Oi(e);
      return u(qe, R({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": (ee) => i.value = ee,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": w.value
        }, e.class],
        style: e.style
      }, T, W, {
        centerAffix: A.value === 1 && !w.value,
        focused: o.value
      }), {
        ...l,
        default: (ee) => {
          let {
            id: O,
            isDisabled: D,
            isDirty: L,
            isReadonly: q,
            isValid: te
          } = ee;
          return u(jn, R({
            ref: m,
            style: {
              "--v-textarea-control-height": y.value
            },
            onClick: k,
            onMousedown: V,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, Q, {
            id: O.value,
            active: g.value || L.value,
            centerAffix: A.value === 1 && !w.value,
            dirty: L.value || e.dirty,
            disabled: D.value,
            focused: o.value,
            error: te.value === !1
          }), {
            ...l,
            default: (ne) => {
              let {
                props: {
                  class: se,
                  ...H
                }
              } = ne;
              return u(oe, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), pe(u("textarea", R({
                ref: b,
                class: se,
                value: i.value,
                onInput: I,
                autofocus: e.autofocus,
                readonly: q.value,
                disabled: D.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: S,
                onBlur: s
              }, H, E), null), [[rt("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]), e.autoGrow && pe(u("textarea", {
                class: [se, "v-textarea__sizer"],
                id: `${H.id}-sizer`,
                "onUpdate:modelValue": (ae) => i.value = ae,
                ref: P,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Cc, i.value]]), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: B ? (ee) => {
          var O;
          return u(oe, null, [(O = l.details) == null ? void 0 : O.call(l, ee), x && u(oe, null, [u("span", null, null), u(el, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), yt({}, f, m, b);
  }
}), Ry = $({
  withBackground: Boolean,
  ...J(),
  ...ge(),
  ...ve()
}, "VThemeProvider"), Ny = F()({
  name: "VThemeProvider",
  props: Ry(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e);
    return () => {
      var l;
      return e.withBackground ? u(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), zy = $({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: le,
  iconColor: String,
  lineColor: String,
  ...J(),
  ..._e(),
  ...pt(),
  ...We()
}, "VTimelineDivider"), Hy = F()({
  name: "VTimelineDivider",
  props: zy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = Rn(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = we(M(e, "dotColor")), {
      roundedClasses: r
    } = Ee(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = Ue(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: d
    } = we(M(e, "lineColor"));
    return N(() => u("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [u("div", {
      class: ["v-timeline-divider__before", c.value],
      style: d.value
    }, null), !e.hideDot && u("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, r.value, a.value],
      style: l.value
    }, [u("div", {
      class: ["v-timeline-divider__inner-dot", o.value, r.value],
      style: i.value
    }, [t.default ? u(me, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : u(Se, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), u("div", {
      class: ["v-timeline-divider__after", c.value],
      style: d.value
    }, null)])), {};
  }
}), Ks = $({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: le,
  iconColor: String,
  lineInset: [Number, String],
  ...J(),
  ...Fe(),
  ...We(),
  ..._e(),
  ...pt(),
  ...ve()
}, "VTimelineItem"), Wy = F()({
  name: "VTimelineItem",
  props: Ks(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = Re(e), l = Y(0), i = j();
    return X(i, (o) => {
      var r;
      o && (l.value = ((r = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), N(() => {
      var o, r;
      return u("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": K(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${K(e.lineInset)})` : K(0)
        }, e.style]
      }, [u("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(o = t.default) == null ? void 0 : o.call(t)]), u(Hy, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && u("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t))])]);
    }), {};
  }
}), jy = $({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...Fa(Ks({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...J(),
  ...je(),
  ...ve(),
  ...ge()
}, "VTimeline"), Gy = F()({
  name: "VTimeline",
  props: jy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ke(e), {
      densityClasses: l
    } = et(e), {
      rtlClasses: i
    } = He();
    Te({
      VTimelineDivider: {
        lineColor: M(e, "lineColor")
      },
      VTimelineItem: {
        density: M(e, "density"),
        dotColor: M(e, "dotColor"),
        fillDot: M(e, "fillDot"),
        hideOpposite: M(e, "hideOpposite"),
        iconColor: M(e, "iconColor"),
        lineColor: M(e, "lineColor"),
        lineInset: M(e, "lineInset"),
        size: M(e, "size")
      }
    });
    const o = h(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = h(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return N(() => u(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, o.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": K(e.lineThickness)
      }, e.style]
    }, t)), {};
  }
}), Uy = $({
  ...J(),
  ...gt({
    variant: "text"
  })
}, "VToolbarItems"), Yy = F()({
  name: "VToolbarItems",
  props: Uy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Te({
      VBtn: {
        color: M(e, "color"),
        height: "inherit",
        variant: M(e, "variant")
      }
    }), N(() => {
      var a;
      return u("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), qy = $({
  id: String,
  text: String,
  ...Oe(va({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), Xs = F()({
  name: "VTooltip",
  props: qy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      scopeId: l
    } = Vn(), i = Xe(), o = h(() => e.id || `v-tooltip-${i}`), r = j(), s = h(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = h(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = h(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), v = h(() => R({
      "aria-describedby": o.value
    }, e.activatorProps));
    return N(() => {
      const f = Pt.filterProps(e);
      return u(Pt, R({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (m) => a.value = m,
        transition: d.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: v.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var g;
          for (var m = arguments.length, y = new Array(m), b = 0; b < m; b++)
            y[b] = arguments[b];
          return ((g = t.default) == null ? void 0 : g.call(t, ...y)) ?? e.text;
        }
      });
    }), yt({}, r);
  }
}), Ky = F()({
  name: "VValidation",
  props: eu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = tu(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
}), Xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: uv,
  VAlertTitle: Yr,
  VApp: fd,
  VAppBar: Ed,
  VAppBarNavIcon: lv,
  VAppBarTitle: iv,
  VAutocomplete: Of,
  VAvatar: ft,
  VBadge: Rf,
  VBanner: Hf,
  VBannerActions: Tu,
  VBannerText: $u,
  VBottomNavigation: jf,
  VBottomSheet: Uf,
  VBreadcrumbs: Xf,
  VBreadcrumbsDivider: Du,
  VBreadcrumbsItem: Mu,
  VBtn: be,
  VBtnGroup: Ml,
  VBtnToggle: Rd,
  VCard: tm,
  VCardActions: Lu,
  VCardItem: Ru,
  VCardSubtitle: Ou,
  VCardText: Nu,
  VCardTitle: Fu,
  VCarousel: cm,
  VCarouselItem: vm,
  VCheckbox: yv,
  VCheckboxBtn: Et,
  VChip: Wn,
  VChipGroup: Bv,
  VClassIcon: Hd,
  VCode: fm,
  VCol: Gg,
  VColorPicker: tg,
  VCombobox: lg,
  VComponentIcon: Ll,
  VConfirmEdit: sg,
  VContainer: zg,
  VCounter: el,
  VDataIterator: Sg,
  VDataTable: Mg,
  VDataTableFooter: aa,
  VDataTableHeaders: cn,
  VDataTableRow: Zi,
  VDataTableRows: dn,
  VDataTableServer: Rg,
  VDataTableVirtual: Og,
  VDatePicker: lh,
  VDatePickerControls: Zl,
  VDatePickerHeader: Jl,
  VDatePickerMonth: ei,
  VDatePickerMonths: ti,
  VDatePickerYears: ni,
  VDefaultsProvider: me,
  VDialog: jl,
  VDialogBottomTransition: yd,
  VDialogTopTransition: bd,
  VDialogTransition: Wa,
  VDivider: da,
  VEmptyState: oh,
  VExpandTransition: ja,
  VExpandXTransition: xi,
  VExpansionPanel: rh,
  VExpansionPanelText: ai,
  VExpansionPanelTitle: li,
  VExpansionPanels: ch,
  VFab: vh,
  VFabTransition: hd,
  VFadeTransition: Qn,
  VField: jn,
  VFieldLabel: Un,
  VFileInput: mh,
  VFooter: hh,
  VForm: bh,
  VHover: kh,
  VIcon: Se,
  VImg: $t,
  VInfiniteScroll: wh,
  VInput: qe,
  VItem: Ph,
  VItemGroup: xh,
  VKbd: Ih,
  VLabel: Hn,
  VLayout: Bh,
  VLayoutItem: Ah,
  VLazy: $h,
  VLigatureIcon: zd,
  VList: Ja,
  VListGroup: Nl,
  VListImg: Qv,
  VListItem: Dt,
  VListItemAction: Jv,
  VListItemMedia: tf,
  VListItemSubtitle: fu,
  VListItemTitle: mu,
  VListSubheader: gu,
  VLocaleProvider: Dh,
  VMain: Lh,
  VMenu: Dn,
  VMessages: Zr,
  VNavigationDrawer: Gh,
  VNoSsr: Uh,
  VOtpInput: qh,
  VOverlay: Pt,
  VPagination: Xl,
  VParallax: Qh,
  VProgressCircular: En,
  VProgressLinear: Ya,
  VRadio: Jh,
  VRadioGroup: ty,
  VRangeSlider: ay,
  VRating: iy,
  VResponsive: El,
  VRow: Zg,
  VScaleTransition: wi,
  VScrollXReverseTransition: kd,
  VScrollXTransition: Sd,
  VScrollYReverseTransition: wd,
  VScrollYTransition: Cd,
  VSelect: Ni,
  VSelectionControl: jt,
  VSelectionControlGroup: Kr,
  VSheet: sn,
  VSkeletonLoader: sy,
  VSlideGroup: ta,
  VSlideGroupItem: cy,
  VSlideXReverseTransition: xd,
  VSlideXTransition: Vd,
  VSlideYReverseTransition: Pd,
  VSlideYTransition: Vi,
  VSlider: Kl,
  VSnackbar: fy,
  VSpacer: _s,
  VSparkline: yy,
  VSpeedDial: Sy,
  VStepper: Iy,
  VStepperActions: zs,
  VStepperHeader: Hs,
  VStepperItem: Ws,
  VStepperWindow: js,
  VStepperWindowItem: Gs,
  VSvgIcon: Or,
  VSwitch: By,
  VSystemBar: Ay,
  VTab: Us,
  VTable: vn,
  VTabs: Ly,
  VTabsWindow: Ys,
  VTabsWindowItem: qs,
  VTextField: on,
  VTextarea: Fy,
  VThemeProvider: Ny,
  VTimeline: Gy,
  VTimelineItem: Wy,
  VToolbar: Dl,
  VToolbarItems: Yy,
  VToolbarTitle: Ci,
  VTooltip: Xs,
  VValidation: Ky,
  VVirtualScroll: nl,
  VWindow: rn,
  VWindowItem: un
}, Symbol.toStringTag, { value: "Module" }));
function Qy(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: i,
    ...o
  } = t, r = !Object.keys(o).length, {
    handler: s,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? r,
      characterData: (o == null ? void 0 : o.char) ?? r,
      childList: (o == null ? void 0 : o.child) ?? r,
      subtree: (o == null ? void 0 : o.sub) ?? r
    }
  }, d = new MutationObserver(function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(v, f), l && Qs(e, n);
  });
  i && (s == null || s([], d)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: d
  }, d.observe(e, c);
}
function Qs(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const Zy = {
  mounted: Qy,
  unmounted: Qs
};
function Jy(e, n) {
  var l, i;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (i = n.modifiers) != null && i.quiet || t();
}
function eb(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const tb = {
  mounted: Jy,
  unmounted: eb
};
function Zs(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = t ? e : n.arg ? document.querySelector(n.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: t ? void 0 : o
  });
}
function Js(e, n) {
  var i;
  if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function nb(e, n) {
  n.value !== n.oldValue && (Js(e, n), Zs(e, n));
}
const ab = {
  mounted: Zs,
  unmounted: Js,
  updated: nb
};
function lb(e, n) {
  const t = typeof e == "string" ? Wt(e) : e, a = ib(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      lr(null, l);
    }
  };
}
function ib(e, n) {
  return function(t, a, l) {
    var v, f, m;
    const i = typeof n == "function" ? n(a) : n, o = ((v = a.value) == null ? void 0 : v.text) ?? a.value ?? (i == null ? void 0 : i.text), r = di(a.value) ? a.value : {}, s = () => o ?? t.textContent, c = (l.ctx === a.instance.$ ? (f = ob(l, a.instance.$)) == null ? void 0 : f.provides : (m = l.ctx) == null ? void 0 : m.provides) ?? a.instance.$.provides, d = fn(e, R(i, r), s);
    d.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), lr(d, t);
  };
}
function ob(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (i) => {
    var o, r;
    for (const s of i) {
      if (!s) continue;
      if (s === e || s.el && e.el && s.el === e.el)
        return !0;
      t.add(s);
      let c;
      if (s.suspense ? c = a([s.ssContent]) : Array.isArray(s.children) ? c = a(s.children) : (o = s.component) != null && o.vnode && (c = a([(r = s.component) == null ? void 0 : r.subTree])), c)
        return c;
      t.delete(s);
    }
    return !1;
  };
  if (!a([n.subTree]))
    return za("Could not find original vnode, component will not inherit provides"), n;
  const l = Array.from(t).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return n;
}
const rb = lb(Xs, (e) => {
  var n;
  return {
    activator: "parent",
    location: (n = e.arg) == null ? void 0 : n.replace("-", " "),
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), ub = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: Iu,
  Intersect: ia,
  Mutate: Zy,
  Resize: tb,
  Ripple: Lt,
  Scroll: ab,
  Tooltip: rb,
  Touch: zi
}, Symbol.toStringTag, { value: "Module" })), sb = Gt({
  name: "MyButton",
  components: { QBtn: tc },
  props: {
    label: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => ["solid", "outlined", "text"].includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info"
      ].includes(e)
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    startIcon: {
      type: String,
      default: ""
    },
    endIcon: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = h(() => ({
      primary: "primary",
      secondary: "secondary",
      success: "positive",
      error: "negative",
      warning: "warning",
      info: "info"
    })[e.color]), a = h(() => ({
      small: "sm",
      medium: "md",
      large: "lg"
    })[e.size]);
    return {
      mapVariantToQuasar: t,
      mapSizeToQuasar: a,
      onClick: (i) => {
        !e.disabled && !e.loading && n("click", i);
      }
    };
  }
}), xn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
};
function cb(e, n, t, a, l, i) {
  const o = Wt("q-btn");
  return dt(), On(o, {
    label: e.label,
    color: e.mapVariantToQuasar,
    flat: e.variant === "text",
    outline: e.variant === "outlined",
    size: e.mapSizeToQuasar,
    icon: e.startIcon,
    "icon-right": e.endIcon,
    loading: e.loading,
    disabled: e.disabled,
    class: Fn(["my-button", [
      `my-button--${e.variant}`,
      `my-button--${e.size}`,
      e.className
    ]]),
    onClick: n[0] || (n[0] = (r) => e.onClick(r))
  }, {
    default: bt(() => [
      vt(e.$slots, "startIcon", {}, void 0, !0),
      vt(e.$slots, "default", {}, () => [
        St(en(e.label), 1)
      ], !0),
      vt(e.$slots, "endIcon", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["label", "color", "flat", "outline", "size", "icon", "icon-right", "loading", "disabled", "class"]);
}
const ec = /* @__PURE__ */ xn(sb, [["render", cb], ["__scopeId", "data-v-f1803702"]]), db = Gt({
  name: "MySelect",
  components: { QSelect: nc },
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "outlined",
      validator: (e) => ["solid", "outlined", "text"].includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info"
      ].includes(e)
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    className: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const t = h(() => ({
      primary: "primary",
      secondary: "secondary",
      success: "positive",
      error: "negative",
      warning: "warning",
      info: "info"
    })[e.color]), a = h(() => ({
      small: "sm",
      medium: "md",
      large: "lg"
    })[e.size]);
    return {
      mapColorToQuasar: t,
      mapSizeToQuasar: a,
      onSelect: (i) => {
        n("update:modelValue", i), n("change", i);
      }
    };
  }
});
function vb(e, n, t, a, l, i) {
  const o = Wt("q-select");
  return dt(), On(o, {
    modelValue: e.modelValue,
    options: e.options,
    label: e.label,
    color: e.mapColorToQuasar,
    outlined: e.variant === "outlined",
    borderless: e.variant === "text",
    size: e.mapSizeToQuasar,
    disable: e.disabled,
    loading: e.loading,
    class: Fn(["my-select", [
      `my-select--${e.variant}`,
      `my-select--${e.size}`,
      e.className
    ]]),
    "onUpdate:modelValue": e.onSelect
  }, si({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: bt(() => [
        vt(e.$slots, "prepend", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: bt(() => [
        vt(e.$slots, "append", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0
  ]), 1032, ["modelValue", "options", "label", "color", "outlined", "borderless", "size", "disable", "loading", "class", "onUpdate:modelValue"]);
}
const fb = /* @__PURE__ */ xn(db, [["render", vb], ["__scopeId", "data-v-663659fa"]]), mb = Gt({
  name: "MyBadge",
  components: { QBadge: ac },
  props: {
    label: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => ["solid", "outlined"].includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info"
      ].includes(e)
    },
    floating: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return {
      mapColorToQuasar: h(() => ({
        primary: "primary",
        secondary: "secondary",
        success: "positive",
        error: "negative",
        warning: "warning",
        info: "info"
      })[e.color])
    };
  }
});
function gb(e, n, t, a, l, i) {
  const o = Wt("q-badge");
  return dt(), On(o, {
    color: e.mapColorToQuasar,
    floating: e.floating,
    rounded: e.rounded,
    outline: e.variant === "outlined",
    class: Fn(["my-badge", [
      `my-badge--${e.variant}`,
      e.className
    ]])
  }, {
    default: bt(() => [
      vt(e.$slots, "default", {}, () => [
        St(en(e.label), 1)
      ], !0)
    ]),
    _: 3
  }, 8, ["color", "floating", "rounded", "outline", "class"]);
}
const hb = /* @__PURE__ */ xn(mb, [["render", gb], ["__scopeId", "data-v-8f733c7a"]]), yb = Gt({
  name: "MyBanner",
  components: { QBanner: lc, QIcon: ic },
  props: {
    message: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "info",
      validator: (e) => ["info", "success", "warning", "error"].includes(e)
    },
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium"].includes(e)
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    inlineActions: {
      type: Boolean,
      default: !1
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return {
      mapColorToQuasar: h(() => ({
        info: "info",
        success: "positive",
        warning: "warning",
        error: "negative"
      })[e.variant])
    };
  }
});
function bb(e, n, t, a, l, i) {
  const o = Wt("q-icon"), r = Wt("q-banner");
  return dt(), On(r, {
    class: Fn([
      "my-banner",
      `my-banner--${e.variant}`,
      e.className
    ]),
    rounded: e.rounded,
    dense: e.size === "small",
    "inline-actions": e.inlineActions
  }, si({
    default: bt(() => [
      vt(e.$slots, "default", {}, () => [
        St(en(e.message), 1)
      ], !0)
    ]),
    _: 2
  }, [
    e.icon ? {
      name: "avatar",
      fn: bt(() => [
        u(o, {
          name: e.icon,
          color: e.mapColorToQuasar
        }, null, 8, ["name", "color"])
      ]),
      key: "0"
    } : void 0,
    e.$slots.action ? {
      name: "action",
      fn: bt(() => [
        vt(e.$slots, "action", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0
  ]), 1032, ["class", "rounded", "dense", "inline-actions"]);
}
const Sb = /* @__PURE__ */ xn(yb, [["render", bb], ["__scopeId", "data-v-5a892ed7"]]), kb = Gt({
  name: "MySkeleton",
  props: {
    lines: {
      type: Number,
      default: 3,
      validator: (e) => e > 0 && e <= 10
    },
    className: {
      type: String,
      default: ""
    },
    speed: {
      type: String,
      default: "normal",
      validator: (e) => ["slow", "normal", "fast"].includes(e)
    }
  },
  setup(e) {
    return {
      getLineWidth: (t) => t === 0 ? "70%" : t === e.lines - 1 ? "40%" : t % 2 === 0 ? "100%" : "80%"
    };
  }
});
function Cb(e, n, t, a, l, i) {
  return dt(), An("div", {
    class: Fn([
      "skeleton-loader",
      e.className
    ])
  }, [
    (dt(!0), An(oe, null, wc(e.lines, (o, r) => (dt(), An("div", {
      key: r,
      class: "skeleton-line",
      style: Vc({
        width: e.getLineWidth(r)
      })
    }, null, 4))), 128))
  ], 2);
}
const wb = /* @__PURE__ */ xn(kb, [["render", Cb], ["__scopeId", "data-v-6d55602e"]]), Vb = Gt({
  name: "MyInputText",
  components: {
    QInput: oc
  },
  props: {
    // Model value
    modelValue: { type: [String, Number], default: "" },
    // Basic input properties
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: void 0 },
    type: {
      type: String,
      default: "text"
    },
    // Styling properties
    color: { type: String, default: "primary" },
    bgColor: { type: String, default: void 0 },
    outlined: { type: Boolean, default: !1 },
    borderless: { type: Boolean, default: !1 },
    standout: {
      type: [Boolean, String],
      default: !1
    },
    rounded: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    // State properties
    loading: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    clearIcon: { type: String, default: void 0 },
    disable: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    // Validation properties
    error: { type: Boolean, default: !1 },
    errorMessage: { type: String, default: void 0 },
    hint: { type: String, default: void 0 },
    // Addon properties
    prefix: { type: String, default: void 0 },
    suffix: { type: String, default: void 0 },
    // Advanced properties
    mask: { type: String, default: void 0 },
    rules: {
      type: Array,
      default: () => []
    },
    validateOnBlur: { type: Boolean, default: !1 },
    maxlength: { type: [Number, String], default: void 0 },
    counter: { type: Boolean, default: !1 },
    bottomSlots: { type: Boolean, default: !1 }
  },
  emits: [
    "update:model-value",
    "blur",
    "focus",
    "clear"
  ],
  setup(e, { emit: n }) {
    return {
      updateValue: (o) => {
        n("update:model-value", o);
      },
      onBlur: (o) => {
        n("blur", o);
      },
      onFocus: (o) => {
        n("focus", o);
      },
      onClear: () => {
        n("clear");
      }
    };
  }
});
function xb(e, n, t, a, l, i) {
  const o = Wt("q-input");
  return dt(), On(o, {
    "model-value": e.modelValue,
    label: e.label,
    placeholder: e.placeholder,
    type: e.type,
    color: e.color,
    "bg-color": e.bgColor,
    outlined: e.outlined,
    borderless: e.borderless,
    standout: e.standout,
    rounded: e.rounded,
    square: e.square,
    loading: e.loading,
    clearable: e.clearable,
    "clear-icon": e.clearIcon,
    disable: e.disable,
    readonly: e.readonly,
    autofocus: e.autofocus,
    error: e.error,
    "error-message": e.errorMessage,
    hint: e.hint,
    prefix: e.prefix,
    suffix: e.suffix,
    mask: e.mask,
    rules: e.rules,
    "validate-on-blur": e.validateOnBlur,
    maxlength: e.maxlength,
    counter: e.counter,
    "bottom-slots": e.bottomSlots,
    "onUpdate:modelValue": e.updateValue,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onClear: e.onClear
  }, si({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: bt(() => [
        vt(e.$slots, "prepend", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: bt(() => [
        vt(e.$slots, "append", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0,
    e.$slots.before ? {
      name: "before",
      fn: bt(() => [
        vt(e.$slots, "before", {}, void 0, !0)
      ]),
      key: "2"
    } : void 0,
    e.$slots.after ? {
      name: "after",
      fn: bt(() => [
        vt(e.$slots, "after", {}, void 0, !0)
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["model-value", "label", "placeholder", "type", "color", "bg-color", "outlined", "borderless", "standout", "rounded", "square", "loading", "clearable", "clear-icon", "disable", "readonly", "autofocus", "error", "error-message", "hint", "prefix", "suffix", "mask", "rules", "validate-on-blur", "maxlength", "counter", "bottom-slots", "onUpdate:modelValue", "onBlur", "onFocus", "onClear"]);
}
const Pb = /* @__PURE__ */ xn(Vb, [["render", xb], ["__scopeId", "data-v-878bae5e"]]), Ib = Gt({
  name: "MyCard",
  components: {
    MyButton: ec
  },
  props: {
    imageUrl: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: ""
    },
    date: {
      type: [Date, String],
      default: null
    },
    title: {
      type: String,
      required: !0
    },
    excerpt: {
      type: String,
      required: !0
    },
    ctaLabel: {
      type: String,
      default: ""
    },
    ctaVariant: {
      type: String,
      default: "solid"
    },
    ctaColor: {
      type: String,
      default: "primary"
    },
    rounded: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["cta-click"],
  setup() {
    return {
      formatDate: (n) => {
        const t = new Date(n);
        return new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: !0
        }).format(t);
      }
    };
  }
}), _b = ["src", "alt"], Bb = { class: "ds-card__content" }, pb = {
  key: 0,
  class: "ds-card__date"
}, Ab = { class: "ds-card__title" }, Tb = { class: "ds-card__excerpt" };
function $b(e, n, t, a, l, i) {
  const o = Wt("MyButton");
  return dt(), An("div", {
    class: Fn(["ds-card", {
      "ds-card--rounded": e.rounded,
      "ds-card--with-image": e.imageUrl
    }])
  }, [
    e.imageUrl ? (dt(), An("img", {
      key: 0,
      src: e.imageUrl,
      alt: e.imageAlt || e.title,
      class: "ds-card__image"
    }, null, 8, _b)) : hl("", !0),
    yl("div", Bb, [
      e.date ? (dt(), An("span", pb, en(e.formatDate(e.date)), 1)) : hl("", !0),
      yl("h3", Ab, en(e.title), 1),
      yl("p", Tb, en(e.excerpt), 1),
      e.ctaLabel ? (dt(), On(o, {
        key: 1,
        label: e.ctaLabel,
        variant: e.ctaVariant,
        color: e.ctaColor,
        class: "ds-card__cta",
        onClick: n[0] || (n[0] = (r) => e.$emit("cta-click"))
      }, null, 8, ["label", "variant", "color"])) : hl("", !0)
    ])
  ], 2);
}
const Eb = /* @__PURE__ */ xn(Ib, [["render", $b]]), Db = uc({
  components: Xy,
  directives: ub
}), Fb = {
  install: (e) => {
    e.use(rc, {
      config: {}
    }), e.use(Db), e.component("MyButton", ec), e.component("MySelect", fb), e.component("MyBadge", hb), e.component("MyBanner", Sb), e.component("MySkeleton", wb), e.component("MyInputText", Pb), e.component("MyCard", Eb);
  }
};
export {
  hb as MyBadge,
  Sb as MyBanner,
  ec as MyButton,
  Eb as MyCard,
  Pb as MyInputText,
  fb as MySelect,
  wb as MySkeleton,
  Fb as default
};
//# sourceMappingURL=rqst-design-system.es.js.map
