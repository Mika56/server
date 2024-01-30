/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./core/src/logger.js":
/*!****************************!*\
  !*** ./core/src/logger.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



const getLogger = user => {
  if (user === null) {
    return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').build();
  }
  return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').setUid(user.uid).build();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogger((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()));

/***/ }),

/***/ "./core/src/recommendedapps.js":
/*!*************************************!*\
  !*** ./core/src/recommendedapps.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.js */ "./core/src/logger.js");
/* harmony import */ var _components_setup_RecommendedApps_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setup/RecommendedApps.vue */ "./core/src/components/setup/RecommendedApps.vue");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */







// eslint-disable-next-line camelcase
__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getRequestToken)());
vue__WEBPACK_IMPORTED_MODULE_4__["default"].mixin({
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
});
const View = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_components_setup_RecommendedApps_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
new View().$mount('#recommended-apps');
_logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].debug('recommended apps view rendered');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var p_limit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p-limit */ "./node_modules/p-limit/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logger.js */ "./core/src/logger.js");







const recommended = {
  calendar: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Schedule work & meetings, synced with all your devices.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'places/calendar.svg')
  },
  contacts: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Keep your colleagues and friends in one place without leaking their private info.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'places/contacts.svg')
  },
  mail: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Simple email app nicely integrated with Files, Contacts and Calendar.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'actions/mail.svg')
  },
  spreed: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Chatting, video calls, screensharing, online meetings and web conferencing – in your browser and with mobile apps.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'apps/spreed.svg')
  },
  richdocuments: {
    name: 'Nextcloud Office',
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Collaborative documents, spreadsheets and presentations, built on Collabora Online.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'apps/richdocuments.svg')
  },
  notes: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Distraction free note taking app.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'apps/notes.svg')
  },
  richdocumentscode: {
    hidden: true
  }
};
const recommendedIds = Object.keys(recommended);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RecommendedApps',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data() {
    return {
      showInstallButton: false,
      installingApps: false,
      loadingApps: true,
      loadingAppsError: false,
      apps: [],
      defaultPageUrl: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('core', 'defaultPageUrl')
    };
  },
  computed: {
    recommendedApps() {
      return this.apps.filter(app => recommendedIds.includes(app.id));
    }
  },
  async mounted() {
    try {
      const {
        data
      } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/list'));
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].info(`${data.apps.length} apps fetched`);
      this.apps = data.apps.map(app => Object.assign(app, {
        loading: false,
        installationError: false
      }));
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].debug(`${this.recommendedApps.length} recommended apps found`, {
        apps: this.recommendedApps
      });
      this.showInstallButton = true;
    } catch (error) {
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].error('could not fetch app list', {
        error
      });
      this.loadingAppsError = true;
    } finally {
      this.loadingApps = false;
    }
  },
  methods: {
    installApps() {
      this.showInstallButton = false;
      this.installingApps = true;
      const limit = (0,p_limit__WEBPACK_IMPORTED_MODULE_3__["default"])(1);
      const installing = this.recommendedApps.filter(app => !app.active && app.isCompatible && app.canInstall).map(app => limit(() => {
        _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].info(`installing ${app.id}`);
        app.loading = true;
        return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/enable'), {
          appIds: [app.id],
          groups: []
        }).catch(error => {
          _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].error(`could not install ${app.id}`, {
            error
          });
          app.installationError = true;
        }).then(() => {
          _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].info(`installed ${app.id}`);
          app.loading = false;
        });
      }));
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].debug(`installing ${installing.length} recommended apps`);
      Promise.all(installing).then(() => {
        _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].info('all recommended apps installed, redirecting …');
        window.location = this.defaultPageUrl;
      }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].error('could not install recommended apps', {
        error
      }));
    },
    customIcon(appId) {
      if (!(appId in recommended) || !recommended[appId].icon) {
        _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].warn(`no app icon for recommended app ${appId}`);
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'places/default-app-icon.svg');
      }
      return recommended[appId].icon;
    },
    customName(app) {
      if (!(app.id in recommended)) {
        return app.name;
      }
      return recommended[app.id].name || app.name;
    },
    customDescription(appId) {
      if (!(appId in recommended)) {
        _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].warn(`no app description for recommended app ${appId}`);
        return '';
      }
      return recommended[appId].description;
    },
    isHidden(appId) {
      if (!(appId in recommended)) {
        return false;
      }
      return !!recommended[appId].hidden;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "guest-box"
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("core", "Recommended apps")))]), _vm._v(" "), _vm.loadingApps ? _c("p", {
    staticClass: "loading text-center"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("core", "Loading apps …")) + "\n\t")]) : _vm.loadingAppsError ? _c("p", {
    staticClass: "loading-error text-center"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("core", "Could not fetch list of apps from the App Store.")) + "\n\t")]) : _vm.installingApps ? _c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("core", "Installing apps …")) + "\n\t")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.recommendedApps, function (app) {
    return _c("div", {
      key: app.id,
      staticClass: "app"
    }, [!_vm.isHidden(app.id) ? [_c("img", {
      attrs: {
        src: _vm.customIcon(app.id),
        alt: ""
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "info"
    }, [_c("h3", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.customName(app)) + "\n\t\t\t\t\t"), app.loading ? _c("span", {
      staticClass: "icon icon-loading-small-dark"
    }) : app.active ? _c("span", {
      staticClass: "icon icon-checkmark-white"
    }) : _vm._e()]), _vm._v(" "), _c("p", {
      domProps: {
        innerHTML: _vm._s(_vm.customDescription(app.id))
      }
    }), _vm._v(" "), app.installationError ? _c("p", [_c("strong", [_vm._v(_vm._s(_vm.t("core", "App download or installation failed")))])]) : !app.isCompatible ? _c("p", [_c("strong", [_vm._v(_vm._s(_vm.t("core", "Cannot install this app because it is not compatible")))])]) : !app.canInstall ? _c("p", [_c("strong", [_vm._v(_vm._s(_vm.t("core", "Cannot install this app")))])]) : _vm._e()])] : _vm._e()], 2);
  }), _vm._v(" "), _c("div", {
    staticClass: "dialog-row"
  }, [_vm.showInstallButton ? _c("NcButton", {
    attrs: {
      type: "tertiary",
      role: "link",
      href: _vm.defaultPageUrl
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("core", "Skip")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.showInstallButton ? _c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.installApps.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("core", "Install recommended apps")) + "\n\t\t")]) : _vm._e()], 1)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-fe3b5af5] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.button-vue[data-v-fe3b5af5] {
  position: relative;
  width: fit-content;
  overflow: hidden;
  border: 0;
  padding: 0;
  font-size: var(--default-font-size);
  font-weight: bold;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 22px;
  transition-property: color, border-color, background-color;
  transition-duration: 0.1s;
  transition-timing-function: linear;
  color: var(--color-primary-element-light-text);
  background-color: var(--color-primary-element-light);
}
.button-vue *[data-v-fe3b5af5],
.button-vue span[data-v-fe3b5af5] {
  cursor: pointer;
}
.button-vue[data-v-fe3b5af5]:focus {
  outline: none;
}
.button-vue[data-v-fe3b5af5]:disabled {
  cursor: default;
  opacity: 0.5;
  filter: saturate(0.7);
}
.button-vue:disabled *[data-v-fe3b5af5] {
  cursor: default;
}
.button-vue[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: var(--color-primary-element-light-hover);
}
.button-vue[data-v-fe3b5af5]:active {
  background-color: var(--color-primary-element-light);
}
.button-vue__wrapper[data-v-fe3b5af5] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.button-vue--end .button-vue__wrapper[data-v-fe3b5af5] {
  justify-content: end;
}
.button-vue--start .button-vue__wrapper[data-v-fe3b5af5] {
  justify-content: start;
}
.button-vue--reverse .button-vue__wrapper[data-v-fe3b5af5] {
  flex-direction: row-reverse;
}
.button-vue--reverse.button-vue--icon-and-text[data-v-fe3b5af5] {
  padding-inline: calc(var(--default-grid-baseline) * 4) var(--default-grid-baseline);
}
.button-vue__icon[data-v-fe3b5af5] {
  height: 44px;
  width: 44px;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-vue__text[data-v-fe3b5af5] {
  font-weight: bold;
  margin-bottom: 1px;
  padding: 2px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.button-vue--icon-only[data-v-fe3b5af5] {
  width: 44px !important;
}
.button-vue--text-only[data-v-fe3b5af5] {
  padding: 0 12px;
}
.button-vue--text-only .button-vue__text[data-v-fe3b5af5] {
  margin-left: 4px;
  margin-right: 4px;
}
.button-vue--icon-and-text[data-v-fe3b5af5] {
  padding-block: 0;
  padding-inline: var(--default-grid-baseline) calc(var(--default-grid-baseline) * 4);
}
.button-vue--wide[data-v-fe3b5af5] {
  width: 100%;
}
.button-vue[data-v-fe3b5af5]:focus-visible {
  outline: 2px solid var(--color-main-text) !important;
  box-shadow: 0 0 0 4px var(--color-main-background) !important;
}
.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-fe3b5af5] {
  outline: 2px solid var(--color-primary-element-text);
  border-radius: var(--border-radius);
  background-color: transparent;
}
.button-vue--vue-primary[data-v-fe3b5af5] {
  background-color: var(--color-primary-element);
  color: var(--color-primary-element-text);
}
.button-vue--vue-primary[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: var(--color-primary-element-hover);
}
.button-vue--vue-primary[data-v-fe3b5af5]:active {
  background-color: var(--color-primary-element);
}
.button-vue--vue-secondary[data-v-fe3b5af5] {
  color: var(--color-primary-element-light-text);
  background-color: var(--color-primary-element-light);
}
.button-vue--vue-secondary[data-v-fe3b5af5]:hover:not(:disabled) {
  color: var(--color-primary-element-light-text);
  background-color: var(--color-primary-element-light-hover);
}
.button-vue--vue-tertiary[data-v-fe3b5af5] {
  color: var(--color-main-text);
  background-color: transparent;
}
.button-vue--vue-tertiary[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: var(--color-background-hover);
}
.button-vue--vue-tertiary-no-background[data-v-fe3b5af5] {
  color: var(--color-main-text);
  background-color: transparent;
}
.button-vue--vue-tertiary-no-background[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: transparent;
}
.button-vue--vue-tertiary-on-primary[data-v-fe3b5af5] {
  color: var(--color-primary-element-text);
  background-color: transparent;
}
.button-vue--vue-tertiary-on-primary[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: transparent;
}
.button-vue--vue-success[data-v-fe3b5af5] {
  background-color: var(--color-success);
  color: white;
}
.button-vue--vue-success[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: var(--color-success-hover);
}
.button-vue--vue-success[data-v-fe3b5af5]:active {
  background-color: var(--color-success);
}
.button-vue--vue-warning[data-v-fe3b5af5] {
  background-color: var(--color-warning);
  color: white;
}
.button-vue--vue-warning[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: var(--color-warning-hover);
}
.button-vue--vue-warning[data-v-fe3b5af5]:active {
  background-color: var(--color-warning);
}
.button-vue--vue-error[data-v-fe3b5af5] {
  background-color: var(--color-error);
  color: white;
}
.button-vue--vue-error[data-v-fe3b5af5]:hover:not(:disabled) {
  background-color: var(--color-error-hover);
}
.button-vue--vue-error[data-v-fe3b5af5]:active {
  background-color: var(--color-error);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dialog-row[data-v-0530d6c2] {
  display: flex;
  justify-content: end;
  margin-top: 8px;
}
p.loading[data-v-0530d6c2], p.loading-error[data-v-0530d6c2] {
  height: 100px;
}
p[data-v-0530d6c2]:last-child {
  margin-top: 10px;
}
.text-center[data-v-0530d6c2] {
  text-align: center;
}
.app[data-v-0530d6c2] {
  display: flex;
  flex-direction: row;
}
.app img[data-v-0530d6c2] {
  height: 50px;
  width: 50px;
  filter: var(--background-invert-if-dark);
}
.app img[data-v-0530d6c2], .app .info[data-v-0530d6c2] {
  padding: 12px;
}
.app .info h3[data-v-0530d6c2], .app .info p[data-v-0530d6c2] {
  text-align: left;
}
.app .info h3[data-v-0530d6c2] {
  margin-top: 0;
}
.app .info h3 > span.icon[data-v-0530d6c2] {
  display: inline-block;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css":
/*!**********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../server/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcButton_B8Z7HCp_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcButton--B8Z7HCp.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcButton_B8Z7HCp_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcButton_B8Z7HCp_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcButton_B8Z7HCp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcButton_B8Z7HCp_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue":
/*!*******************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true */ "./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true");
/* harmony import */ var _RecommendedApps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecommendedApps.vue?vue&type=script&lang=js */ "./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js");
/* harmony import */ var _RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true */ "./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecommendedApps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0530d6c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/components/setup/RecommendedApps.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true");


/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true");


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcButton.mjs":
/*!*****************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcButton.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcButton)
/* harmony export */ });
/* harmony import */ var _assets_NcButton_B8Z7HCp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcButton--B8Z7HCp.css */ "../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


const _sfc_main = {
  name: "NcButton",
  inject: {
    getNcPopoverTriggerAttrs: {
      from: "NcPopover:trigger:attrs",
      default: () => () => ({})
    }
  },
  props: {
    /**
     * Set the text and icon alignment
     *
     * @default 'center'
     */
    alignment: {
      type: String,
      default: "center",
      validator: (alignment) => ["start", "start-reverse", "center", "center-reverse", "end", "end-reverse"].includes(alignment)
    },
    /**
     * Toggles the disabled state of the button on and off.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies the button type
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success. If left empty,
     * the default button style will be applied.
     */
    type: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].indexOf(value) !== -1;
      },
      default: "secondary"
    },
    /**
     * Specifies the button native type
     * Accepted values: submit, reset, button. If left empty,
     * the default "button" type will be used.
     */
    nativeType: {
      type: String,
      validator(value) {
        return ["submit", "reset", "button"].indexOf(value) !== -1;
      },
      default: "button"
    },
    /**
     * Specifies whether the button should span all the available width.
     * By default, buttons span the whole width of the container.
     */
    wide: {
      type: Boolean,
      default: false
    },
    /**
     * Always try to provide an aria-label to your button. Make it more
     * specific than the button's name by provide some more context. E.g. if
     * the name of the button is "send" in the Mail app, the aria label could
     * be "Send email".
     */
    ariaLabel: {
      type: String,
      default: null
    },
    /**
     * Providing the href attribute turns the button component into an `a`
     * element.
     */
    href: {
      type: String,
      default: null
    },
    /**
     * Providing the download attribute with href downloads file when clicking.
     */
    download: {
      type: String,
      default: null
    },
    /**
     * Providing the to attribute turns the button component into a `router-link`
     * element. Takes precedence over the href attribute.
     */
    to: {
      type: [String, Object],
      default: null
    },
    /**
     * Pass in `true` if you want the matching behaviour of `router-link` to
     * be non-inclusive: https://router.vuejs.org/api/#exact
     */
    exact: {
      type: Boolean,
      default: false
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    },
    /**
     * The pressed state of the button if it has a checked state
     * This will add the `aria-pressed` attribute and for the button to have the primary style in checked state.
     *
     * Pressed state is not supported for links
     */
    pressed: {
      type: Boolean,
      default: null
    }
  },
  emits: ["update:pressed", "click"],
  computed: {
    /**
     * The real type to be used for the button, enforces `primary` for pressed state and, if stateful button, any other type for not pressed state
     * Otherwise the type property is used.
     */
    realType() {
      if (this.pressed) {
        return "primary";
      }
      if (this.pressed === false && this.type === "primary") {
        return "secondary";
      }
      return this.type;
    },
    /**
     * The flexbox alignment of the button content
     */
    flexAlignment() {
      return this.alignment.split("-")[0];
    },
    /**
     * If the button content should be reversed (icon on the end)
     */
    isReverseAligned() {
      return this.alignment.includes("-");
    },
    ncPopoverTriggerAttrs() {
      return this.getNcPopoverTriggerAttrs();
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object|undefined} The created VNode
   */
  render(h) {
    const hasText = !!this.$slots.default;
    const hasIcon = this.$slots?.icon;
    if (!hasText && !this.ariaLabel) {
      console.warn(
        "You need to fill either the text or the ariaLabel props in the button component.",
        {
          text: this.$slots.default?.[0]?.text,
          ariaLabel: this.ariaLabel
        },
        this
      );
    }
    const isLink = this.to || this.href;
    const hasPressed = !isLink && typeof this.pressed === "boolean";
    const renderButton = ({ href, navigate, isActive, isExactActive } = {}) => h(
      isLink ? "a" : "button",
      {
        class: [
          "button-vue",
          {
            "button-vue--icon-only": hasIcon && !hasText,
            "button-vue--text-only": hasText && !hasIcon,
            "button-vue--icon-and-text": hasIcon && hasText,
            [`button-vue--vue-${this.realType}`]: this.realType,
            "button-vue--wide": this.wide,
            [`button-vue--${this.flexAlignment}`]: this.flexAlignment !== "center",
            "button-vue--reverse": this.isReverseAligned,
            active: isActive,
            "router-link-exact-active": isExactActive
          }
        ],
        attrs: {
          "aria-label": this.ariaLabel,
          "aria-pressed": hasPressed ? this.pressed.toString() : void 0,
          disabled: this.disabled,
          type: isLink ? null : this.nativeType,
          role: isLink ? "button" : null,
          href: this.to ? href : this.href || null,
          target: isLink ? "_self" : null,
          rel: isLink ? "nofollow noreferrer noopener" : null,
          download: !this.to && this.href && this.download ? this.download : null,
          // If this button is used as a popover trigger, we need to apply trigger attrs, e.g. aria attributes
          ...this.ncPopoverTriggerAttrs,
          // Inherit all the component attrs
          ...this.$attrs
        },
        on: {
          ...this.$listeners,
          click: ($event) => {
            if (hasPressed) {
              this.$emit("update:pressed", !this.pressed);
            }
            this.$emit("click", $event);
            navigate?.($event);
          }
        }
      },
      [
        h("span", { class: "button-vue__wrapper" }, [
          hasIcon ? h(
            "span",
            {
              class: "button-vue__icon",
              attrs: {
                "aria-hidden": "true"
              }
            },
            [this.$slots.icon]
          ) : null,
          hasText ? h("span", { class: "button-vue__text" }, [this.$slots.default]) : null
        ])
      ]
    );
    if (this.to) {
      return h("router-link", {
        props: {
          custom: true,
          to: this.to,
          exact: this.exact
        },
        scopedSlots: {
          default: renderButton
        }
      });
    }
    return renderButton();
  }
};
const _sfc_render = null;
const _sfc_staticRenderFns = null;
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "fe3b5af5",
  null,
  null
);
const NcButton = __component__.exports;

//# sourceMappingURL=NcButton.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs":
/*!*************************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ normalizeComponent)
/* harmony export */ });
function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}

//# sourceMappingURL=_plugin-vue2_normalizer-Ewhtj4Do.mjs.map


/***/ }),

/***/ "./node_modules/p-limit/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-limit/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pLimit)
/* harmony export */ });
/* harmony import */ var yocto_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yocto-queue */ "./node_modules/yocto-queue/index.js");

function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError('Expected `concurrency` to be a number from 1 and up');
  }
  const queue = new yocto_queue__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      queue.dequeue()();
    }
  };
  const run = async (fn, resolve, args) => {
    activeCount++;
    const result = (async () => fn(...args))();
    resolve(result);
    try {
      await result;
    } catch {}
    next();
  };
  const enqueue = (fn, resolve, args) => {
    queue.enqueue(run.bind(undefined, fn, resolve, args));
    (async () => {
      // This function needs to wait until the next microtask before comparing
      // `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
      // when the run function is dequeued and called. The comparison in the if-statement
      // needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        queue.dequeue()();
      }
    })();
  };
  const generator = function (fn) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return new Promise(resolve => {
      enqueue(fn, resolve, args);
    });
  };
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value: () => {
        queue.clear();
      }
    }
  });
  return generator;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"core-recommendedapps": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./core/src/recommendedapps.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-recommendedapps.js.map?v=ea604e463a1621ac1428