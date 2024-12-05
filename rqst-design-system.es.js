import { QBtn as B, QSelect as M, QBadge as k, QBanner as h, QIcon as C, QInput as z, Quasar as Q } from "quasar";
import { defineComponent as c, computed as p, resolveComponent as f, openBlock as u, createBlock as y, normalizeClass as g, withCtx as s, renderSlot as r, createTextVNode as b, toDisplayString as $, createSlots as S, createVNode as V, createElementBlock as v, Fragment as I, renderList as T, normalizeStyle as q } from "vue";
const N = c({
  name: "MyButton",
  components: { QBtn: B },
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
  setup(e, { emit: o }) {
    const a = p(() => ({
      primary: "primary",
      secondary: "secondary",
      success: "positive",
      error: "negative",
      warning: "warning",
      info: "info"
    })[e.color]), t = p(() => ({
      small: "sm",
      medium: "md",
      large: "lg"
    })[e.size]);
    return {
      mapVariantToQuasar: a,
      mapSizeToQuasar: t,
      onClick: (l) => {
        !e.disabled && !e.loading && o("click", l);
      }
    };
  }
}), m = (e, o) => {
  const a = e.__vccOpts || e;
  for (const [t, i] of o)
    a[t] = i;
  return a;
};
function w(e, o, a, t, i, l) {
  const n = f("q-btn");
  return u(), y(n, {
    label: e.label,
    color: e.mapVariantToQuasar,
    flat: e.variant === "text",
    outline: e.variant === "outlined",
    size: e.mapSizeToQuasar,
    icon: e.startIcon,
    "icon-right": e.endIcon,
    loading: e.loading,
    disabled: e.disabled,
    class: g(["my-button", [
      `my-button--${e.variant}`,
      `my-button--${e.size}`,
      e.className
    ]]),
    onClick: o[0] || (o[0] = (d) => e.onClick(d))
  }, {
    default: s(() => [
      r(e.$slots, "startIcon", {}, void 0, !0),
      r(e.$slots, "default", {}, () => [
        b($(e.label), 1)
      ], !0),
      r(e.$slots, "endIcon", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["label", "color", "flat", "outline", "size", "icon", "icon-right", "loading", "disabled", "class"]);
}
const F = /* @__PURE__ */ m(N, [["render", w], ["__scopeId", "data-v-f1803702"]]), A = c({
  name: "MySelect",
  components: { QSelect: M },
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
  setup(e, { emit: o }) {
    const a = p(() => ({
      primary: "primary",
      secondary: "secondary",
      success: "positive",
      error: "negative",
      warning: "warning",
      info: "info"
    })[e.color]), t = p(() => ({
      small: "sm",
      medium: "md",
      large: "lg"
    })[e.size]);
    return {
      mapColorToQuasar: a,
      mapSizeToQuasar: t,
      onSelect: (l) => {
        o("update:modelValue", l), o("change", l);
      }
    };
  }
});
function L(e, o, a, t, i, l) {
  const n = f("q-select");
  return u(), y(n, {
    modelValue: e.modelValue,
    "onUpdate:modelValue": [
      o[0] || (o[0] = (d) => e.modelValue = d),
      e.onSelect
    ],
    options: e.options,
    label: e.label,
    color: e.mapColorToQuasar,
    outlined: e.variant === "outlined",
    borderless: e.variant === "text",
    size: e.mapSizeToQuasar,
    disable: e.disabled,
    loading: e.loading,
    class: g(["my-select", [
      `my-select--${e.variant}`,
      `my-select--${e.size}`,
      e.className
    ]])
  }, S({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: s(() => [
        r(e.$slots, "prepend", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: s(() => [
        r(e.$slots, "append", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0
  ]), 1032, ["modelValue", "options", "label", "color", "outlined", "borderless", "size", "disable", "loading", "class", "onUpdate:modelValue"]);
}
const O = /* @__PURE__ */ m(A, [["render", L], ["__scopeId", "data-v-4901f43d"]]), U = c({
  name: "MyBadge",
  components: { QBadge: k },
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
      mapColorToQuasar: p(() => ({
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
function W(e, o, a, t, i, l) {
  const n = f("q-badge");
  return u(), y(n, {
    color: e.mapColorToQuasar,
    floating: e.floating,
    rounded: e.rounded,
    outline: e.variant === "outlined",
    class: g(["my-badge", [
      `my-badge--${e.variant}`,
      e.className
    ]])
  }, {
    default: s(() => [
      r(e.$slots, "default", {}, () => [
        b($(e.label), 1)
      ], !0)
    ]),
    _: 3
  }, 8, ["color", "floating", "rounded", "outline", "class"]);
}
const j = /* @__PURE__ */ m(U, [["render", W], ["__scopeId", "data-v-053c7116"]]), D = c({
  name: "MyBanner",
  components: { QBanner: h, QIcon: C },
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
      mapColorToQuasar: p(() => ({
        info: "info",
        success: "positive",
        warning: "warning",
        error: "negative"
      })[e.variant])
    };
  }
});
function E(e, o, a, t, i, l) {
  const n = f("q-icon"), d = f("q-banner");
  return u(), y(d, {
    class: g([
      "my-banner",
      `my-banner--${e.variant}`,
      e.className
    ]),
    rounded: e.rounded,
    dense: e.size === "small",
    "inline-actions": e.inlineActions
  }, S({
    default: s(() => [
      r(e.$slots, "default", {}, () => [
        b($(e.message), 1)
      ], !0)
    ]),
    _: 2
  }, [
    e.icon ? {
      name: "avatar",
      fn: s(() => [
        V(n, {
          name: e.icon,
          color: e.mapColorToQuasar
        }, null, 8, ["name", "color"])
      ]),
      key: "0"
    } : void 0,
    e.$slots.action ? {
      name: "action",
      fn: s(() => [
        r(e.$slots, "action", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0
  ]), 1032, ["class", "rounded", "dense", "inline-actions"]);
}
const G = /* @__PURE__ */ m(D, [["render", E], ["__scopeId", "data-v-4b3b4eee"]]), H = c({
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
      getLineWidth: (a) => a === 0 ? "70%" : a === e.lines - 1 ? "40%" : a % 2 === 0 ? "100%" : "80%"
    };
  }
});
function J(e, o, a, t, i, l) {
  return u(), v("div", {
    class: g([
      "skeleton-loader",
      e.className
    ])
  }, [
    (u(!0), v(I, null, T(e.lines, (n, d) => (u(), v("div", {
      key: d,
      class: "skeleton-line",
      style: q({
        width: e.getLineWidth(d)
      })
    }, null, 4))), 128))
  ], 2);
}
const K = /* @__PURE__ */ m(H, [["render", J], ["__scopeId", "data-v-6d55602e"]]), P = c({
  name: "MyInputText",
  components: {
    QInput: z
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
  setup(e, { emit: o }) {
    return {
      updateValue: (n) => {
        o("update:model-value", n);
      },
      onBlur: (n) => {
        o("blur", n);
      },
      onFocus: (n) => {
        o("focus", n);
      },
      onClear: () => {
        o("clear");
      }
    };
  }
});
function R(e, o, a, t, i, l) {
  const n = f("q-input");
  return u(), y(n, {
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
  }, S({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: s(() => [
        r(e.$slots, "prepend", {}, void 0, !0)
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: s(() => [
        r(e.$slots, "append", {}, void 0, !0)
      ]),
      key: "1"
    } : void 0,
    e.$slots.before ? {
      name: "before",
      fn: s(() => [
        r(e.$slots, "before", {}, void 0, !0)
      ]),
      key: "2"
    } : void 0,
    e.$slots.after ? {
      name: "after",
      fn: s(() => [
        r(e.$slots, "after", {}, void 0, !0)
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["model-value", "label", "placeholder", "type", "color", "bg-color", "outlined", "borderless", "standout", "rounded", "square", "loading", "clearable", "clear-icon", "disable", "readonly", "autofocus", "error", "error-message", "hint", "prefix", "suffix", "mask", "rules", "validate-on-blur", "maxlength", "counter", "bottom-slots", "onUpdate:modelValue", "onBlur", "onFocus", "onClear"]);
}
const X = /* @__PURE__ */ m(P, [["render", R], ["__scopeId", "data-v-878bae5e"]]), _ = {
  install: (e) => {
    e.use(Q, {
      config: {}
    }), e.component("MyButton", F), e.component("MySelect", O), e.component("MyBadge", j), e.component("MyBanner", G), e.component("MySkeleton", K), e.component("MyInputText", X);
  }
};
export {
  j as MyBadge,
  G as MyBanner,
  F as MyButton,
  X as MyInputText,
  O as MySelect,
  K as MySkeleton,
  _ as default
};
//# sourceMappingURL=rqst-design-system.es.js.map
