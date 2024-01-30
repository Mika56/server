"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nextcloud-vue_dist_chunks_NcDateTime-ZLuy33tl_mjs-nextcloud-vue_dist_chunks_index-8YtkNyV4_mjs"],{

/***/ "../nextcloud-vue/dist/chunks/Linkify-ayeUD6cV.mjs":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/Linkify-ayeUD6cV.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ Linkify)
/* harmony export */ });
/* harmony import */ var linkify_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linkify-string */ "../nextcloud-vue/node_modules/linkify-string/dist/linkify-string.es.js");

/**
 * @copyright Copyright (c) 2021 Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * @author Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const Linkify = (text) => {
  return (0,linkify_string__WEBPACK_IMPORTED_MODULE_0__["default"])(text, {
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  });
};

//# sourceMappingURL=Linkify-ayeUD6cV.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcDateTime-ZLuy33tl.mjs":
/*!************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcDateTime-ZLuy33tl.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcDateTime),
/* harmony export */   u: () => (/* binding */ useFormatDateTime)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "../nextcloud-vue/node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");




(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.j);
/**
 * @copyright Copyright (c) 2024 Ferdinand Thiessen <opensource@fthiessen.de>
 *
 * @author Ferdinand Thiessen <opensource@fthiessen.de>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const FEW_SECONDS_AGO = {
  long: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("a few seconds ago"),
  short: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("seconds ago"),
  // FOR TRANSLATORS: Shorter version of 'a few seconds ago'
  narrow: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("sec. ago")
  // FOR TRANSLATORS: If possible in your language an even shorter version of 'a few seconds ago'
};
function useFormatDateTime(timestamp = Date.now(), opts = {}) {
  const currentTime = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(Date.now());
  let intervalId = null;
  const options = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)({
    timeStyle: "medium",
    dateStyle: "short",
    relativeTime: "long",
    ignoreSeconds: false,
    ...(0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(opts)
  });
  const wrappedOptions = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => ({ ...(0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(opts), ...options.value }));
  const date = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => new Date((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(timestamp)));
  const formattedFullTime = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
    const formatter = new Intl.DateTimeFormat((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getCanonicalLocale)(), wrappedOptions.value.format);
    return formatter.format(date.value);
  });
  const formattedTime = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
    if (wrappedOptions.value.relativeTime !== false) {
      const formatter = new Intl.RelativeTimeFormat((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getCanonicalLocale)(), { numeric: "auto", style: wrappedOptions.value.relativeTime });
      const diff = date.value - currentTime.value;
      const seconds = diff / 1e3;
      if (Math.abs(seconds) <= 90) {
        if (wrappedOptions.value.ignoreSeconds) {
          return FEW_SECONDS_AGO[wrappedOptions.value.relativeTime];
        } else {
          return formatter.format(Math.round(seconds), "second");
        }
      }
      const minutes = seconds / 60;
      if (Math.abs(minutes) <= 90) {
        return formatter.format(Math.round(minutes), "minute");
      }
      const hours = minutes / 60;
      if (Math.abs(hours) <= 24) {
        return formatter.format(Math.round(hours), "hour");
      }
      const days = hours / 24;
      if (Math.abs(days) <= 6) {
        return formatter.format(Math.round(days), "day");
      }
      const weeks = days / 7;
      if (Math.abs(weeks) <= 4) {
        return formatter.format(Math.round(weeks), "week");
      }
      const months = days / 30;
      if (Math.abs(months) <= 12) {
        return formatter.format(Math.round(months), "month");
      }
      return formatter.format(Math.round(days / 365), "year");
    }
    return formattedFullTime;
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_3__.watch)([wrappedOptions], (opts2) => {
    window.clearInterval(intervalId);
    intervalId = void 0;
    if (opts2.relativeTime) {
      intervalId = window.setInterval(() => {
        currentTime.value = /* @__PURE__ */ new Date();
      }, 1e3);
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(() => {
    if (wrappedOptions.value.relativeTime !== false) {
      intervalId = window.setInterval(() => {
        currentTime.value = /* @__PURE__ */ new Date();
      }, 1e3);
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_3__.onUnmounted)(() => {
    window.clearInterval(intervalId);
  });
  return {
    formattedTime,
    formattedFullTime,
    options
  };
}
const _sfc_main = {
  name: "NcDateTime",
  props: {
    /**
     * The timestamp to display, either an unix timestamp (in milliseconds) or a Date object
     */
    timestamp: {
      type: [Date, Number],
      required: true
    },
    /**
     * The format used for displaying, or if relative time is used the format used for the title (optional)
     *
     * @type {Intl.DateTimeFormatOptions}
     */
    format: {
      type: Object,
      default: () => ({ timeStyle: "medium", dateStyle: "short" })
    },
    /**
     * Wether to display the timestamp as time from now (optional)
     *
     * - `false`: Disable relative time
     * - `'long'`: Long text, like *2 seconds ago* (default)
     * - `'short'`: Short text, like *2 sec. ago*
     * - `'narrow'`: Even shorter text (same as `'short'` on some languages)
     */
    relativeTime: {
      type: [Boolean, String],
      default: "long",
      validator: (v) => v === false || ["long", "short", "narrow"].includes(v)
    },
    /**
     * Ignore seconds when displaying the relative time and just show `a few seconds ago`
     */
    ignoreSeconds: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const timestamp = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => props.timestamp);
    const { formattedTime, formattedFullTime } = useFormatDateTime(timestamp, props);
    return {
      formattedTime,
      formattedFullTime
    };
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "nc-datetime", attrs: { "data-timestamp": _vm.timestamp, "title": _vm.formattedFullTime } }, [_vm._v(_vm._s(_vm.formattedTime))]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const NcDateTime = __component__.exports;

//# sourceMappingURL=NcDateTime-ZLuy33tl.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/index-8YtkNyV4.mjs":
/*!*******************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/index-8YtkNyV4.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcMentionBubble),
/* harmony export */   U: () => (/* binding */ USERID_REGEX),
/* harmony export */   a: () => (/* binding */ USERID_REGEX_WITH_SPACE),
/* harmony export */   r: () => (/* binding */ richEditor)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "../nextcloud-vue/node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _Linkify_ayeUD6cV_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Linkify-ayeUD6cV.mjs */ "../nextcloud-vue/dist/chunks/Linkify-ayeUD6cV.mjs");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! escape-html */ "../nextcloud-vue/node_modules/escape-html/index.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! striptags */ "../nextcloud-vue/node_modules/striptags/src/striptags.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

/* empty css                                                                          */





const _sfc_main = {
  name: "NcMentionBubble",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconUrl: {
      type: [String, null],
      default: null
    },
    source: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    avatarUrl() {
      if (this.iconUrl) {
        return this.iconUrl;
      }
      return this.id && this.source === "users" ? this.getAvatarUrl(this.id, 44) : null;
    },
    mentionText() {
      return !this.id.includes(" ") && !this.id.includes("/") ? `@${this.id}` : `@"${this.id}"`;
    }
  },
  methods: {
    getAvatarUrl(user, size) {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/avatar/{user}/{size}", {
        user,
        size
      });
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", { staticClass: "mention-bubble", class: { "mention-bubble--primary": _vm.primary }, attrs: { "contenteditable": "false" } }, [_c("span", { staticClass: "mention-bubble__wrapper" }, [_c("span", { staticClass: "mention-bubble__content" }, [_c("span", { staticClass: "mention-bubble__icon", class: [_vm.icon, `mention-bubble__icon--${_vm.avatarUrl ? "with-avatar" : ""}`], style: _vm.avatarUrl ? { backgroundImage: `url(${_vm.avatarUrl})` } : null }), _c("span", { staticClass: "mention-bubble__title", attrs: { "role": "heading", "title": _vm.title } })]), _c("span", { staticClass: "mention-bubble__select", attrs: { "role": "none" } }, [_vm._v(_vm._s(_vm.mentionText))])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "357e6d0e",
  null,
  null
);
const NcMentionBubble = __component__.exports;
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const MENTION_START = "(?:^|\\s)";
const MENTION_END = "(?:[^a-z]|$)";
const USERID_REGEX = new RegExp(`${MENTION_START}(@[a-zA-Z0-9_.@\\-']+)(${MENTION_END})`, "gi");
const USERID_REGEX_WITH_SPACE = new RegExp(`${MENTION_START}(@&quot;[a-zA-Z0-9 _.@\\-']+&quot;)(${MENTION_END})`, "gi");
const richEditor = {
  props: {
    userData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    /**
     * Convert the value string to html for the inner content
     *
     * @param {string} value the content without html
     * @return {string} rendered html
     */
    renderContent(value) {
      const sanitizedValue = escape_html__WEBPACK_IMPORTED_MODULE_3__(value);
      const splitValue = sanitizedValue.split(USERID_REGEX).map((part) => part.split(USERID_REGEX_WITH_SPACE)).flat();
      return splitValue.map((part) => {
        if (!part.startsWith("@")) {
          return (0,_Linkify_ayeUD6cV_mjs__WEBPACK_IMPORTED_MODULE_2__.L)(part);
        }
        const id = part.slice(1).replace(/&quot;/gi, "");
        return " " + this.genSelectTemplate(id);
      }).join("").replace(/\n/gmi, "<br>").replace(/&amp;/gmi, "&");
    },
    /**
     * Convert the innerHtml content to a string with mentions as text
     *
     * @param {string} content the content without html
     * @return {string}
     */
    parseContent(content) {
      let text = content.replace(/<br>/gmi, "\n");
      text = text.replace(/&nbsp;/gmi, " ");
      text = text.replace(/&amp;/gmi, "&");
      text = text.replace(/<\/div>/gmi, "\n");
      text = striptags__WEBPACK_IMPORTED_MODULE_4__(text, "<div>");
      text = striptags__WEBPACK_IMPORTED_MODULE_4__(text);
      return text;
    },
    /**
     * Generate an autocompletion popup entry template
     *
     * @param {string} value the value to match against the userData
     * @return {string}
     */
    genSelectTemplate(value) {
      if (typeof value === "undefined") {
        return `${this.autocompleteTribute.current.collection.trigger}${this.autocompleteTribute.current.mentionText}`;
      }
      const data = this.userData[value];
      if (!data) {
        return !value.includes(" ") && !value.includes("/") ? `@${value}` : `@"${value}"`;
      }
      return this.renderComponentHtml(data, NcMentionBubble).replace(/[\n\t]/gmi, "");
    },
    /**
     * Render a component and return its html content
     *
     * @param {object} propsData the props to pass to the component
     * @param {object} component the component to render
     * @return {string} the rendered html
     */
    renderComponentHtml(propsData, component) {
      const View = vue__WEBPACK_IMPORTED_MODULE_5__["default"].extend(component);
      const Item = new View({
        propsData
      });
      const wrapper = document.createElement("div");
      const mount = document.createElement("div");
      wrapper.style.display = "none";
      wrapper.appendChild(mount);
      document.body.appendChild(wrapper);
      Item.$mount(mount);
      const renderedHtml = wrapper.innerHTML;
      Item.$destroy();
      wrapper.remove();
      return renderedHtml;
    }
  }
};

//# sourceMappingURL=index-8YtkNyV4.mjs.map


/***/ })

}]);
//# sourceMappingURL=nextcloud-vue_dist_chunks_NcDateTime-ZLuy33tl_mjs-nextcloud-vue_dist_chunks_index-8YtkNyV4_mjs-nextcloud-vue_dist_chunks_NcDateTime-ZLuy33tl_mjs-nextcloud-vue_dist_chunks_index-8YtkNyV4_mjs.js.map?v=7931bb4b2752805efc74