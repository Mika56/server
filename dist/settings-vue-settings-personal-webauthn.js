/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/logger.js":
/*!*************************************!*\
  !*** ./apps/settings/src/logger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('settings').detectUser().build());

/***/ }),

/***/ "./apps/settings/src/main-personal-webauth.js":
/*!****************************************************!*\
  !*** ./apps/settings/src/main-personal-webauth.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _components_WebAuthn_Section_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/WebAuthn/Section.vue */ "./apps/settings/src/components/WebAuthn/Section.vue");
/**
 * @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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
__webpack_require__.nc = btoa(OC.requestToken);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_components_WebAuthn_Section_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
const devices = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'webauthn-devices');
new View({
  propsData: {
    initialDevices: devices,
    isHttps: window.location.protocol === 'https:',
    isLocalhost: window.location.hostname === 'localhost',
    hasPublicKeyCredential: typeof window.PublicKeyCredential !== 'undefined'
  }
}).$mount('#security-webauthn');

/***/ }),

/***/ "./apps/settings/src/service/WebAuthnRegistrationSerice.js":
/*!*****************************************************************!*\
  !*** ./apps/settings/src/service/WebAuthnRegistrationSerice.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finishRegistration: () => (/* binding */ finishRegistration),
/* harmony export */   removeRegistration: () => (/* binding */ removeRegistration),
/* harmony export */   startRegistration: () => (/* binding */ startRegistration)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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




/**
 *
 */
async function startRegistration() {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/settings/api/personal/webauthn/registration');
  const resp = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
  return resp.data;
}

/**
 * @param {any} name -
 * @param {any} data -
 */
async function finishRegistration(name, data) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/settings/api/personal/webauthn/registration');
  const resp = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
    name,
    data
  });
  return resp.data;
}

/**
 * @param {any} id -
 */
async function removeRegistration(id) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)(`/settings/api/personal/webauthn/registration/${id}`);
  await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].delete(url);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_password_confirmation_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/password-confirmation/dist/style.css */ "./node_modules/@nextcloud/password-confirmation/dist/style.css");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logger.js */ "./apps/settings/src/logger.js");
/* harmony import */ var _service_WebAuthnRegistrationSerice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/WebAuthnRegistrationSerice.js */ "./apps/settings/src/service/WebAuthnRegistrationSerice.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");





const logAndPass = text => data => {
  _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug(text);
  return data;
};
const RegistrationSteps = Object.freeze({
  READY: 1,
  REGISTRATION: 2,
  NAMING: 3,
  PERSIST: 4
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddDevice',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    httpWarning: Boolean,
    isHttps: {
      type: Boolean,
      default: false
    },
    isLocalhost: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: '',
      credential: {},
      RegistrationSteps,
      step: RegistrationSteps.READY
    };
  },
  methods: {
    arrayToBase64String(a) {
      return btoa(String.fromCharCode(...a));
    },
    start() {
      this.step = RegistrationSteps.REGISTRATION;
      console.debug('Starting WebAuthn registration');
      return (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__.confirmPassword)().then(this.getRegistrationData).then(this.register.bind(this)).then(() => {
        this.step = RegistrationSteps.NAMING;
      }).catch(err => {
        console.error(err.name, err.message);
        this.step = RegistrationSteps.READY;
      });
    },
    getRegistrationData() {
      console.debug('Fetching webauthn registration data');
      const base64urlDecode = function (input) {
        // Replace non-url compatible chars with base64 standard chars
        input = input.replace(/-/g, '+').replace(/_/g, '/');

        // Pad out with standard base64 required padding characters
        const pad = input.length % 4;
        if (pad) {
          if (pad === 1) {
            throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
          }
          input += new Array(5 - pad).join('=');
        }
        return window.atob(input);
      };
      return (0,_service_WebAuthnRegistrationSerice_js__WEBPACK_IMPORTED_MODULE_4__.startRegistration)().then(publicKey => {
        console.debug(publicKey);
        publicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0));
        publicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0));
        return publicKey;
      }).catch(err => {
        console.error('Error getting webauthn registration data from server', err);
        throw new Error(t('settings', 'Server error while trying to add WebAuthn device'));
      });
    },
    register(publicKey) {
      console.debug('starting webauthn registration');
      return navigator.credentials.create({
        publicKey
      }).then(data => {
        this.credential = {
          id: data.id,
          type: data.type,
          rawId: this.arrayToBase64String(new Uint8Array(data.rawId)),
          response: {
            clientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),
            attestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject))
          }
        };
      });
    },
    submit() {
      this.step = RegistrationSteps.PERSIST;
      return (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__.confirmPassword)().then(logAndPass('confirmed password')).then(this.saveRegistrationData).then(logAndPass('registration data saved')).then(() => this.reset()).then(logAndPass('app reset')).catch(console.error.bind(this));
    },
    async saveRegistrationData() {
      try {
        const device = await (0,_service_WebAuthnRegistrationSerice_js__WEBPACK_IMPORTED_MODULE_4__.finishRegistration)(this.name, JSON.stringify(this.credential));
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].info('new device added', {
          device
        });
        this.$emit('added', device);
      } catch (err) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('Error persisting webauthn registration', {
          error: err
        });
        throw new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'));
      }
    },
    reset() {
      this.name = '';
      this.registrationData = {};
      this.step = RegistrationSteps.READY;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "../nextcloud-vue/dist/Components/NcActions.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "../nextcloud-vue/dist/Components/NcActionButton.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Device',
  components: {
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcActions: _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "../nextcloud-vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var _nextcloud_password_confirmation_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/password-confirmation/dist/style.css */ "./node_modules/@nextcloud/password-confirmation/dist/style.css");
/* harmony import */ var lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/sortBy.js */ "./node_modules/lodash/fp/sortBy.js");
/* harmony import */ var lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AddDevice_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddDevice.vue */ "./apps/settings/src/components/WebAuthn/AddDevice.vue");
/* harmony import */ var _Device_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Device.vue */ "./apps/settings/src/components/WebAuthn/Device.vue");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logger.js */ "./apps/settings/src/logger.js");
/* harmony import */ var _service_WebAuthnRegistrationSerice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/WebAuthnRegistrationSerice.js */ "./apps/settings/src/service/WebAuthnRegistrationSerice.js");








const sortByName = lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3___default()('name');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddDevice: _AddDevice_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Device: _Device_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcNoteCard: _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    initialDevices: {
      type: Array,
      required: true
    },
    isHttps: {
      type: Boolean,
      default: false
    },
    isLocalhost: {
      type: Boolean,
      default: false
    },
    hasPublicKeyCredential: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      devices: this.initialDevices
    };
  },
  computed: {
    sortedDevices() {
      return sortByName(this.devices);
    }
  },
  methods: {
    deviceAdded(device) {
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].debug(`adding new device to the list ${device.id}`);
      this.devices.push(device);
    },
    async deleteDevice(id) {
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].info(`deleting webauthn device ${id}`);
      await (0,_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__.confirmPassword)();
      await (0,_service_WebAuthnRegistrationSerice_js__WEBPACK_IMPORTED_MODULE_7__.removeRegistration)(id);
      this.devices = this.devices.filter(d => d.id !== id);
      _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].info(`webauthn device ${id} removed successfully`);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.isHttps && !_vm.isLocalhost ? _c("div", [_vm._v("\n\t" + _vm._s(_vm.t("settings", "Passwordless authentication requires a secure connection.")) + "\n")]) : _c("div", [_vm.step === _vm.RegistrationSteps.READY ? _c("div", [_c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.start
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Add WebAuthn device")) + "\n\t\t")])], 1) : _vm.step === _vm.RegistrationSteps.REGISTRATION ? _c("div", {
    staticClass: "new-webauthn-device"
  }, [_c("span", {
    staticClass: "icon-loading-small webauthn-loading"
  }), _vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Please authorize your WebAuthn device.")) + "\n\t")]) : _vm.step === _vm.RegistrationSteps.NAMING ? _c("div", {
    staticClass: "new-webauthn-device"
  }, [_c("span", {
    staticClass: "icon-loading-small webauthn-loading"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    attrs: {
      type: "text",
      placeholder: _vm.t("settings", "Name your device")
    },
    domProps: {
      value: _vm.name
    },
    on: {
      ":keyup": function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.submit.apply(null, arguments);
      },
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Add")) + "\n\t\t")])], 1) : _vm.step === _vm.RegistrationSteps.PERSIST ? _c("div", {
    staticClass: "new-webauthn-device"
  }, [_c("span", {
    staticClass: "icon-loading-small webauthn-loading"
  }), _vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Adding your device …")) + "\n\t")]) : _c("div", [_vm._v("\n\t\tInvalid registration step. This should not have happened.\n\t")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "webauthn-device"
  }, [_c("span", {
    staticClass: "icon-webauthn-device"
  }), _vm._v("\n\t" + _vm._s(_vm.name || _vm.t("settings", "Unnamed device")) + "\n\t"), _c("NcActions", {
    attrs: {
      "force-menu": true
    }
  }, [_c("NcActionButton", {
    attrs: {
      icon: "icon-delete"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("delete");
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Delete")) + "\n\t\t")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section",
    attrs: {
      id: "security-webauthn"
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("settings", "Passwordless Authentication")))]), _vm._v(" "), _c("p", {
    staticClass: "settings-hint hidden-when-empty"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Set up your account for passwordless authentication following the FIDO2 standard.")) + "\n\t")]), _vm._v(" "), _vm.devices.length === 0 ? _c("NcNoteCard", {
    attrs: {
      type: "info"
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "No devices configured.")) + "\n\t")]) : _c("h3", [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "The following devices are configured for your account:")) + "\n\t")]), _vm._v(" "), _vm._l(_vm.sortedDevices, function (device) {
    return _c("Device", {
      key: device.id,
      attrs: {
        name: device.name
      },
      on: {
        delete: function ($event) {
          return _vm.deleteDevice(device.id);
        }
      }
    });
  }), _vm._v(" "), !_vm.hasPublicKeyCredential ? _c("NcNoteCard", {
    attrs: {
      type: "warning"
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Your browser does not support WebAuthn.")) + "\n\t")]) : _vm._e(), _vm._v(" "), _vm.hasPublicKeyCredential ? _c("AddDevice", {
    attrs: {
      "is-https": _vm.isHttps,
      "is-localhost": _vm.isLocalhost
    },
    on: {
      added: _vm.deviceAdded
    }
  }) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionButton-drGRj4p_.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionButton-drGRj4p_.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon[data-v-04ec546c] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Marco Ambrosini <marcoambrosini@icloud.com>
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
li.action.active[data-v-04ec546c] {
  background-color: var(--color-background-hover);
  border-radius: 6px;
  padding: 0;
}
.action--disabled[data-v-04ec546c] {
  pointer-events: none;
  opacity: 0.5;
}
.action--disabled[data-v-04ec546c]:hover, .action--disabled[data-v-04ec546c]:focus {
  cursor: default;
  opacity: 0.5;
}
.action--disabled *[data-v-04ec546c] {
  opacity: 1 !important;
}
.action-button[data-v-04ec546c] {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  padding-right: 14px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;
  color: var(--color-main-text);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  font-weight: normal;
  font-size: var(--default-font-size);
  line-height: 44px;
}
.action-button > span[data-v-04ec546c] {
  cursor: pointer;
  white-space: nowrap;
}
.action-button__icon[data-v-04ec546c] {
  width: 44px;
  height: 44px;
  opacity: 1;
  background-position: 14px center;
  background-size: 16px;
  background-repeat: no-repeat;
}
.action-button[data-v-04ec546c] .material-design-icon {
  width: 44px;
  height: 44px;
  opacity: 1;
}
.action-button[data-v-04ec546c] .material-design-icon .material-design-icon__svg {
  vertical-align: middle;
}
.action-button__longtext-wrapper[data-v-04ec546c], .action-button__longtext[data-v-04ec546c] {
  max-width: 220px;
  line-height: 1.6em;
  padding: 10.8px 0;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.action-button__longtext[data-v-04ec546c] {
  cursor: pointer;
  white-space: pre-wrap !important;
}
.action-button__name[data-v-04ec546c] {
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  display: inline-block;
}
.action-button__menu-icon[data-v-04ec546c] {
  margin-left: auto;
  margin-right: -14px;
}
.action-button__pressed-icon[data-v-04ec546c] {
  margin-left: auto;
  margin-right: -14px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActions-KraINfs1.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActions-KraINfs1.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon[data-v-0d636de9] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.action-items[data-v-0d636de9] {
  display: flex;
  align-items: center;
}
.action-items > button[data-v-0d636de9] {
  margin-right: 7px;
}
.action-item[data-v-0d636de9] {
  --open-background-color: var(--color-background-hover, \$action-background-hover);
  position: relative;
  display: inline-block;
}
.action-item.action-item--primary[data-v-0d636de9] {
  --open-background-color: var(--color-primary-element-hover);
}
.action-item.action-item--secondary[data-v-0d636de9] {
  --open-background-color: var(--color-primary-element-light-hover);
}
.action-item.action-item--error[data-v-0d636de9] {
  --open-background-color: var(--color-error-hover);
}
.action-item.action-item--warning[data-v-0d636de9] {
  --open-background-color: var(--color-warning-hover);
}
.action-item.action-item--success[data-v-0d636de9] {
  --open-background-color: var(--color-success-hover);
}
.action-item.action-item--tertiary-no-background[data-v-0d636de9] {
  --open-background-color: transparent;
}
.action-item.action-item--open .action-item__menutoggle[data-v-0d636de9] {
  background-color: var(--open-background-color);
}
.action-item__menutoggle__icon[data-v-0d636de9] {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
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
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper {
  border-radius: var(--border-radius-large);
  overflow: hidden;
}
.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper .v-popper__inner {
  border-radius: var(--border-radius-large);
  padding: 4px;
  max-height: calc(50vh - 16px);
  overflow: auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcInputField-Al6E6hfU.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcInputField-Al6E6hfU.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon[data-v-b312d183] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.input-field[data-v-b312d183] {
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-large);
  margin-block-start: 6px;
}
.input-field__main-wrapper[data-v-b312d183] {
  height: var(--default-clickable-area);
  position: relative;
}
.input-field--disabled[data-v-b312d183] {
  opacity: 0.4;
  filter: saturate(0.4);
}
.input-field__input[data-v-b312d183] {
  margin: 0;
  padding-inline: 12px 6px;
  height: var(--default-clickable-area) !important;
  width: 100%;
  font-size: var(--default-font-size);
  text-overflow: ellipsis;
  background-color: var(--color-main-background);
  color: var(--color-main-text);
  border: 2px solid var(--color-border-maxcontrast);
  border-radius: var(--border-radius-large);
  cursor: pointer;
  -webkit-appearance: textfield !important;
  -moz-appearance: textfield !important;
}
.input-field__input--label-outside[data-v-b312d183] {
  padding-block: 0;
}
.input-field__input[data-v-b312d183]:active:not([disabled]), .input-field__input[data-v-b312d183]:hover:not([disabled]), .input-field__input[data-v-b312d183]:focus:not([disabled]) {
  border-color: 2px solid var(--color-main-text) !important;
  box-shadow: 0 0 0 2px var(--color-main-background) !important;
}
.input-field__input:focus + .input-field__label[data-v-b312d183], .input-field__input:hover:not(:placeholder-shown) + .input-field__label[data-v-b312d183] {
  color: var(--color-main-text);
}
.input-field__input[data-v-b312d183]:not(:focus, .input-field__input--label-outside)::placeholder {
  opacity: 0;
}
.input-field__input[data-v-b312d183]:focus {
  cursor: text;
}
.input-field__input[data-v-b312d183]:disabled {
  cursor: default;
}
.input-field__input[data-v-b312d183]:focus-visible {
  box-shadow: unset !important;
}
.input-field__input--leading-icon[data-v-b312d183] {
  padding-inline-start: var(--default-clickable-area);
}
.input-field__input--trailing-icon[data-v-b312d183] {
  padding-inline-end: var(--default-clickable-area);
}
.input-field__input--success[data-v-b312d183] {
  border-color: var(--color-success) !important;
}
.input-field__input--success[data-v-b312d183]:focus-visible {
  box-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.input-field__input--error[data-v-b312d183] {
  border-color: var(--color-error) !important;
}
.input-field__input--error[data-v-b312d183]:focus-visible {
  box-shadow: rgb(248, 250, 252) 0px 0px 0px 2px, var(--color-primary-element) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.input-field__input--pill[data-v-b312d183] {
  border-radius: var(--border-radius-pill);
}
.input-field__label[data-v-b312d183] {
  position: absolute;
  margin-inline: 14px 0;
  max-width: fit-content;
  inset-block-start: 11px;
  inset-inline: 0;
  color: var(--color-text-maxcontrast);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  transition: height var(--animation-quick), inset-block-start var(--animation-quick), font-size var(--animation-quick), color var(--animation-quick), background-color var(--animation-quick) var(--animation-slow);
}
.input-field__label--leading-icon[data-v-b312d183] {
  margin-inline-start: var(--default-clickable-area);
}
.input-field__label--trailing-icon[data-v-b312d183] {
  margin-inline-end: var(--default-clickable-area);
}
.input-field__input:focus + .input-field__label[data-v-b312d183], .input-field__input:not(:placeholder-shown) + .input-field__label[data-v-b312d183] {
  inset-block-start: -10px;
  line-height: 1.5;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--default-grid-baseline) var(--default-grid-baseline) 0 0;
  background-color: var(--color-main-background);
  padding-inline: 5px;
  margin-inline-start: 9px;
  transition: height var(--animation-quick), inset-block-start var(--animation-quick), font-size var(--animation-quick), color var(--animation-quick);
}
.input-field__input:focus + .input-field__label--leading-icon[data-v-b312d183], .input-field__input:not(:placeholder-shown) + .input-field__label--leading-icon[data-v-b312d183] {
  margin-inline-start: 41px;
}
.input-field__icon[data-v-b312d183] {
  position: absolute;
  height: var(--default-clickable-area);
  width: var(--default-clickable-area);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
}
.input-field__icon--leading[data-v-b312d183] {
  inset-block-end: 0;
  inset-inline-start: 2px;
}
.input-field__icon--trailing[data-v-b312d183] {
  inset-block-end: 0;
  inset-inline-end: 2px;
}
.input-field__trailing-button.button-vue[data-v-b312d183] {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: var(--border-radius-large);
}
.input-field__trailing-button--pill.button-vue[data-v-b312d183] {
  border-radius: var(--border-radius-pill);
}
.input-field__helper-text-message[data-v-b312d183] {
  padding-block: 4px;
  display: flex;
  align-items: center;
}
.input-field__helper-text-message__icon[data-v-b312d183] {
  margin-inline-end: 8px;
}
.input-field__helper-text-message--error[data-v-b312d183] {
  color: var(--color-error-text);
}
.input-field__helper-text-message--success[data-v-b312d183] {
  color: var(--color-success-text);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon[data-v-bbeb5a25] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.modal-mask[data-v-bbeb5a25] {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-mask--dark[data-v-bbeb5a25] {
  background-color: rgba(0, 0, 0, 0.92);
}
.modal-header[data-v-bbeb5a25] {
  position: absolute;
  z-index: 10001;
  top: 0;
  right: 0;
  left: 0;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  overflow: hidden;
  transition: opacity 250ms, visibility 250ms;
}
.modal-header .modal-name[data-v-bbeb5a25] {
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 0 132px 0 12px;
  transition: padding ease 100ms;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  font-size: 14px;
  margin-bottom: 0;
}
@media only screen and (min-width: 1024px) {
.modal-header .modal-name[data-v-bbeb5a25] {
    padding-left: 132px;
    text-align: center;
}
}
.modal-header .icons-menu[data-v-bbeb5a25] {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.modal-header .icons-menu .header-close[data-v-bbeb5a25] {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 3px;
  padding: 0;
}
.modal-header .icons-menu .play-pause-icons[data-v-bbeb5a25] {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__play[data-v-bbeb5a25],
.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__pause[data-v-bbeb5a25], .modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__play[data-v-bbeb5a25],
.modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__pause[data-v-bbeb5a25] {
  opacity: 1;
  border-radius: 22px;
  background-color: rgba(127, 127, 127, 0.25);
}
.modal-header .icons-menu .play-pause-icons__play[data-v-bbeb5a25], .modal-header .icons-menu .play-pause-icons__pause[data-v-bbeb5a25] {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  margin: 3px;
  cursor: pointer;
  opacity: 0.7;
}
.modal-header .icons-menu .header-actions[data-v-bbeb5a25] {
  color: white;
}
.modal-header .icons-menu[data-v-bbeb5a25]  .action-item {
  margin: 3px;
}
.modal-header .icons-menu[data-v-bbeb5a25]  .action-item--single {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  cursor: pointer;
  background-position: center;
  background-size: 22px;
}
.modal-header .icons-menu[data-v-bbeb5a25] button {
  color: #fff;
}
.modal-header .icons-menu[data-v-bbeb5a25] .action-item__menutoggle {
  padding: 0;
}
.modal-header .icons-menu[data-v-bbeb5a25] .action-item__menutoggle span, .modal-header .icons-menu[data-v-bbeb5a25] .action-item__menutoggle svg {
  width: var(--icon-size);
  height: var(--icon-size);
}
.modal-wrapper[data-v-bbeb5a25] {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* Navigation buttons */
  /* Content */
}
.modal-wrapper .prev[data-v-bbeb5a25],
.modal-wrapper .next[data-v-bbeb5a25] {
  z-index: 10000;
  height: 35vh;
  min-height: 300px;
  position: absolute;
  transition: opacity 250ms;
  color: white;
}
.modal-wrapper .prev[data-v-bbeb5a25]:focus-visible,
.modal-wrapper .next[data-v-bbeb5a25]:focus-visible {
  box-shadow: 0 0 0 2px var(--color-primary-element-text);
  background-color: var(--color-box-shadow);
}
.modal-wrapper .prev[data-v-bbeb5a25] {
  left: 2px;
}
.modal-wrapper .next[data-v-bbeb5a25] {
  right: 2px;
}
.modal-wrapper .modal-container[data-v-bbeb5a25] {
  position: relative;
  display: flex;
  padding: 0;
  transition: transform 300ms ease;
  border-radius: var(--border-radius-large);
  background-color: var(--color-main-background);
  color: var(--color-main-text);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
}
.modal-wrapper .modal-container__close[data-v-bbeb5a25] {
  z-index: 1;
  position: absolute;
  top: 4px;
  right: 4px;
}
.modal-wrapper .modal-container__content[data-v-bbeb5a25] {
  width: 100%;
  min-height: 52px;
  overflow: auto;
}
.modal-wrapper--small .modal-container[data-v-bbeb5a25] {
  width: 400px;
  max-width: 90%;
  max-height: min(90%, 100% - 100px);
}
.modal-wrapper--normal .modal-container[data-v-bbeb5a25] {
  max-width: 90%;
  width: 600px;
  max-height: min(90%, 100% - 100px);
}
.modal-wrapper--large .modal-container[data-v-bbeb5a25] {
  max-width: 90%;
  width: 900px;
  max-height: min(90%, 100% - 100px);
}
.modal-wrapper--full .modal-container[data-v-bbeb5a25] {
  width: 100%;
  height: calc(100% - var(--header-height));
  position: absolute;
  top: 50px;
  border-radius: 0;
}
@media only screen and ((max-width: 512px) or (max-height: 400px)) {
.modal-wrapper .modal-container[data-v-bbeb5a25] {
    max-width: initial;
    width: 100%;
    max-height: initial;
    height: calc(100% - var(--header-height));
    position: absolute;
    top: 50px;
    border-radius: 0;
}
}

/* TRANSITIONS */
.fade-enter-active[data-v-bbeb5a25],
.fade-leave-active[data-v-bbeb5a25] {
  transition: opacity 250ms;
}
.fade-enter[data-v-bbeb5a25],
.fade-leave-to[data-v-bbeb5a25] {
  opacity: 0;
}
.fade-visibility-enter[data-v-bbeb5a25],
.fade-visibility-leave-to[data-v-bbeb5a25] {
  visibility: hidden;
  opacity: 0;
}
.modal-in-enter-active[data-v-bbeb5a25],
.modal-in-leave-active[data-v-bbeb5a25],
.modal-out-enter-active[data-v-bbeb5a25],
.modal-out-leave-active[data-v-bbeb5a25] {
  transition: opacity 250ms;
}
.modal-in-enter[data-v-bbeb5a25],
.modal-in-leave-to[data-v-bbeb5a25],
.modal-out-enter[data-v-bbeb5a25],
.modal-out-leave-to[data-v-bbeb5a25] {
  opacity: 0;
}
.modal-in-enter .modal-container[data-v-bbeb5a25],
.modal-in-leave-to .modal-container[data-v-bbeb5a25] {
  transform: scale(0.9);
}
.modal-out-enter .modal-container[data-v-bbeb5a25],
.modal-out-leave-to .modal-container[data-v-bbeb5a25] {
  transform: scale(1.1);
}
.modal-mask .play-pause-icons .progress-ring[data-v-bbeb5a25] {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
}
.modal-mask .play-pause-icons .progress-ring .progress-ring__circle[data-v-bbeb5a25] {
  transition: 100ms stroke-dashoffset;
  transform-origin: 50% 50%;
  animation: progressring-bbeb5a25 linear var(--slideshow-duration) infinite;
  stroke-linecap: round;
  stroke-dashoffset: 94.2477796077;
  stroke-dasharray: 94.2477796077;
}
.modal-mask .play-pause-icons--paused .icon-pause[data-v-bbeb5a25] {
  animation: breath-bbeb5a25 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.modal-mask .play-pause-icons--paused .progress-ring__circle[data-v-bbeb5a25] {
  animation-play-state: paused !important;
}
@keyframes progressring-bbeb5a25 {
from {
    stroke-dashoffset: 94.2477796077;
}
to {
    stroke-dashoffset: 0;
}
}
@keyframes breath-bbeb5a25 {
0% {
    opacity: 1;
}
50% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcNoteCard-Hu_gcYqP.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcNoteCard-Hu_gcYqP.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon[data-v-722d543a] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.notecard[data-v-722d543a] {
  color: var(--color-main-text) !important;
  background-color: var(--note-background) !important;
  border-inline-start: 4px solid var(--note-theme);
  border-radius: var(--border-radius);
  margin: 1rem 0;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.notecard__icon--heading[data-v-722d543a] {
  margin-bottom: auto;
  margin-top: 0.3rem;
}
.notecard--success[data-v-722d543a] {
  --note-background: rgba(var(--color-success-rgb), 0.1);
  --note-theme: var(--color-success);
}
.notecard--info[data-v-722d543a] {
  --note-background: rgba(var(--color-info-rgb), 0.1);
  --note-theme: var(--color-info);
}
.notecard--error[data-v-722d543a] {
  --note-background: rgba(var(--color-error-rgb), 0.1);
  --note-theme: var(--color-error);
}
.notecard--warning[data-v-722d543a] {
  --note-background: rgba(var(--color-warning-rgb), 0.1);
  --note-theme: var(--color-warning);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcPopover-cCNYT88q.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcPopover-cCNYT88q.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.resize-observer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  pointer-events: none;
  display: block;
  overflow: hidden;
  opacity: 0;
}
.resize-observer object {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}
.v-popper--theme-dropdown.v-popper__popper {
  z-index: 100000;
  top: 0;
  left: 0;
  display: block !important;
  filter: drop-shadow(0 1px 10px var(--color-box-shadow));
}
.v-popper--theme-dropdown.v-popper__popper .v-popper__inner {
  padding: 0;
  color: var(--color-main-text);
  border-radius: var(--border-radius-large);
  overflow: hidden;
  background: var(--color-main-background);
}
.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container {
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  border-width: 10px;
}
.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {
  bottom: -10px;
  border-bottom-width: 0;
  border-top-color: var(--color-main-background);
}
.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {
  top: -10px;
  border-top-width: 0;
  border-bottom-color: var(--color-main-background);
}
.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {
  left: -10px;
  border-left-width: 0;
  border-right-color: var(--color-main-background);
}
.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {
  right: -10px;
  border-right-width: 0;
  border-left-color: var(--color-main-background);
}
.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true] {
  visibility: hidden;
  transition: opacity var(--animation-quick), visibility var(--animation-quick);
  opacity: 0;
}
.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false] {
  visibility: visible;
  transition: opacity var(--animation-quick);
  opacity: 1;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}

/**
* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>
* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>
* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>
* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>
* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>
*
* Bootstrap (http://getbootstrap.com)
* SCSS copied from version 3.3.5
* Copyright 2011-2015 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
.v-popper--theme-tooltip.v-popper__popper {
  position: absolute;
  z-index: 100000;
  top: 0;
  right: auto;
  left: auto;
  display: block;
  margin: 0;
  padding: 0;
  text-align: left;
  text-align: start;
  opacity: 0;
  line-height: 1.6;
  line-break: auto;
  filter: drop-shadow(0 1px 10px var(--color-box-shadow));
}
.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container {
  bottom: -10px;
  border-bottom-width: 0;
  border-top-color: var(--color-main-background);
}
.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container {
  top: -10px;
  border-top-width: 0;
  border-bottom-color: var(--color-main-background);
}
.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container {
  right: 100%;
  border-left-width: 0;
  border-right-color: var(--color-main-background);
}
.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container {
  left: 100%;
  border-right-width: 0;
  border-left-color: var(--color-main-background);
}
.v-popper--theme-tooltip.v-popper__popper[aria-hidden=true] {
  visibility: hidden;
  transition: opacity 0.15s, visibility 0.15s;
  opacity: 0;
}
.v-popper--theme-tooltip.v-popper__popper[aria-hidden=false] {
  visibility: visible;
  transition: opacity 0.15s;
  opacity: 1;
}
.v-popper--theme-tooltip .v-popper__inner {
  max-width: 350px;
  padding: 5px 8px;
  text-align: center;
  color: var(--color-main-text);
  border-radius: var(--border-radius);
  background-color: var(--color-main-background);
}
.v-popper--theme-tooltip .v-popper__arrow-container {
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
  margin: 0;
  border-style: solid;
  border-color: transparent;
  border-width: 10px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.webauthn-loading[data-v-15f8a53b] {
	display: inline-block;
	vertical-align: sub;
	margin-left: 2px;
	margin-right: 2px;
}
.new-webauthn-device[data-v-15f8a53b] {
	line-height: 300%;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.webauthn-device[data-v-1b250cbc] {
	line-height: 300%;
	display: flex;
}
.icon-webauthn-device[data-v-1b250cbc] {
	display: inline-block;
	background-size: 100%;
	padding: 3px;
	margin: 3px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/_LazyWrapper.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_LazyWrapper.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js");

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),

/***/ "./node_modules/lodash/_LodashWrapper.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_LodashWrapper.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js");

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseLodash.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseLodash.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseOrderBy.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ "./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ "./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSetData.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseSetData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    metaMap = __webpack_require__(/*! ./_metaMap */ "./node_modules/lodash/_metaMap.js");

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseSortBy.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_compareAscending.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_compareMultiple.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ "./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/_composeArgs.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_composeArgs.js ***!
  \*********************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),

/***/ "./node_modules/lodash/_composeArgsRight.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_composeArgsRight.js ***!
  \**************************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),

/***/ "./node_modules/lodash/_countHolders.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_countHolders.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createBind.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createCurry.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createCurry.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    createHybrid = __webpack_require__(/*! ./_createHybrid */ "./node_modules/lodash/_createHybrid.js"),
    createRecurry = __webpack_require__(/*! ./_createRecurry */ "./node_modules/lodash/_createRecurry.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),

/***/ "./node_modules/lodash/_createHybrid.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_createHybrid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var composeArgs = __webpack_require__(/*! ./_composeArgs */ "./node_modules/lodash/_composeArgs.js"),
    composeArgsRight = __webpack_require__(/*! ./_composeArgsRight */ "./node_modules/lodash/_composeArgsRight.js"),
    countHolders = __webpack_require__(/*! ./_countHolders */ "./node_modules/lodash/_countHolders.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    createRecurry = __webpack_require__(/*! ./_createRecurry */ "./node_modules/lodash/_createRecurry.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    reorder = __webpack_require__(/*! ./_reorder */ "./node_modules/lodash/_reorder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),

/***/ "./node_modules/lodash/_createPartial.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createPartial.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_createRecurry.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createRecurry.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isLaziable = __webpack_require__(/*! ./_isLaziable */ "./node_modules/lodash/_isLaziable.js"),
    setData = __webpack_require__(/*! ./_setData */ "./node_modules/lodash/_setData.js"),
    setWrapToString = __webpack_require__(/*! ./_setWrapToString */ "./node_modules/lodash/_setWrapToString.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetData = __webpack_require__(/*! ./_baseSetData */ "./node_modules/lodash/_baseSetData.js"),
    createBind = __webpack_require__(/*! ./_createBind */ "./node_modules/lodash/_createBind.js"),
    createCurry = __webpack_require__(/*! ./_createCurry */ "./node_modules/lodash/_createCurry.js"),
    createHybrid = __webpack_require__(/*! ./_createHybrid */ "./node_modules/lodash/_createHybrid.js"),
    createPartial = __webpack_require__(/*! ./_createPartial */ "./node_modules/lodash/_createPartial.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    mergeData = __webpack_require__(/*! ./_mergeData */ "./node_modules/lodash/_mergeData.js"),
    setData = __webpack_require__(/*! ./_setData */ "./node_modules/lodash/_setData.js"),
    setWrapToString = __webpack_require__(/*! ./_setWrapToString */ "./node_modules/lodash/_setWrapToString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_getData.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_getData.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var metaMap = __webpack_require__(/*! ./_metaMap */ "./node_modules/lodash/_metaMap.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js");

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),

/***/ "./node_modules/lodash/_getFuncName.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_getFuncName.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var realNames = __webpack_require__(/*! ./_realNames */ "./node_modules/lodash/_realNames.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),

/***/ "./node_modules/lodash/_getWrapDetails.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_getWrapDetails.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_insertWrapDetails.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_insertWrapDetails.js ***!
  \***************************************************/
/***/ ((module) => {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isLaziable.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_isLaziable.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    getData = __webpack_require__(/*! ./_getData */ "./node_modules/lodash/_getData.js"),
    getFuncName = __webpack_require__(/*! ./_getFuncName */ "./node_modules/lodash/_getFuncName.js"),
    lodash = __webpack_require__(/*! ./wrapperLodash */ "./node_modules/lodash/wrapperLodash.js");

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),

/***/ "./node_modules/lodash/_mergeData.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_mergeData.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var composeArgs = __webpack_require__(/*! ./_composeArgs */ "./node_modules/lodash/_composeArgs.js"),
    composeArgsRight = __webpack_require__(/*! ./_composeArgsRight */ "./node_modules/lodash/_composeArgsRight.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),

/***/ "./node_modules/lodash/_metaMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_metaMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js");

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),

/***/ "./node_modules/lodash/_realNames.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_realNames.js ***!
  \*******************************************/
/***/ ((module) => {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),

/***/ "./node_modules/lodash/_reorder.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_reorder.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/***/ ((module) => {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),

/***/ "./node_modules/lodash/_setData.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_setData.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetData = __webpack_require__(/*! ./_baseSetData */ "./node_modules/lodash/_baseSetData.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),

/***/ "./node_modules/lodash/_setWrapToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_setWrapToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getWrapDetails = __webpack_require__(/*! ./_getWrapDetails */ "./node_modules/lodash/_getWrapDetails.js"),
    insertWrapDetails = __webpack_require__(/*! ./_insertWrapDetails */ "./node_modules/lodash/_insertWrapDetails.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js"),
    updateWrapDetails = __webpack_require__(/*! ./_updateWrapDetails */ "./node_modules/lodash/_updateWrapDetails.js");

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),

/***/ "./node_modules/lodash/_updateWrapDetails.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_updateWrapDetails.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),

/***/ "./node_modules/lodash/_wrapperClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_wrapperClone.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js");

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),

/***/ "./node_modules/lodash/ary.js":
/*!************************************!*\
  !*** ./node_modules/lodash/ary.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;


/***/ }),

/***/ "./node_modules/lodash/curry.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/curry.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/fp/_baseConvert.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/fp/_baseConvert.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapping = __webpack_require__(/*! ./_mapping */ "./node_modules/lodash/fp/_mapping.js"),
    fallbackHolder = __webpack_require__(/*! ./placeholder */ "./node_modules/lodash/fp/placeholder.js");

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function flatSpread(func, start) {
  return function() {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var defaultHolder = isLib ? func : fallbackHolder,
      forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : flatSpread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null &&
          !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func, placeholder) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;

    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  _.placeholder = _;

  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),

/***/ "./node_modules/lodash/fp/_mapping.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/fp/_mapping.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1],
  'reduceRight': [1, 0]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),

/***/ "./node_modules/lodash/fp/_util.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/fp/_util.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  'ary': __webpack_require__(/*! ../ary */ "./node_modules/lodash/ary.js"),
  'assign': __webpack_require__(/*! ../_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
  'clone': __webpack_require__(/*! ../clone */ "./node_modules/lodash/clone.js"),
  'curry': __webpack_require__(/*! ../curry */ "./node_modules/lodash/curry.js"),
  'forEach': __webpack_require__(/*! ../_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
  'isArray': __webpack_require__(/*! ../isArray */ "./node_modules/lodash/isArray.js"),
  'isError': __webpack_require__(/*! ../isError */ "./node_modules/lodash/isError.js"),
  'isFunction': __webpack_require__(/*! ../isFunction */ "./node_modules/lodash/isFunction.js"),
  'isWeakMap': __webpack_require__(/*! ../isWeakMap */ "./node_modules/lodash/isWeakMap.js"),
  'iteratee': __webpack_require__(/*! ../iteratee */ "./node_modules/lodash/iteratee.js"),
  'keys': __webpack_require__(/*! ../_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
  'rearg': __webpack_require__(/*! ../rearg */ "./node_modules/lodash/rearg.js"),
  'toInteger': __webpack_require__(/*! ../toInteger */ "./node_modules/lodash/toInteger.js"),
  'toPath': __webpack_require__(/*! ../toPath */ "./node_modules/lodash/toPath.js")
};


/***/ }),

/***/ "./node_modules/lodash/fp/convert.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/fp/convert.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseConvert = __webpack_require__(/*! ./_baseConvert */ "./node_modules/lodash/fp/_baseConvert.js"),
    util = __webpack_require__(/*! ./_util */ "./node_modules/lodash/fp/_util.js");

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert(name, func, options) {
  return baseConvert(util, name, func, options);
}

module.exports = convert;


/***/ }),

/***/ "./node_modules/lodash/fp/placeholder.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/fp/placeholder.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),

/***/ "./node_modules/lodash/fp/sortBy.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/fp/sortBy.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var convert = __webpack_require__(/*! ./convert */ "./node_modules/lodash/fp/convert.js"),
    func = convert('sortBy', __webpack_require__(/*! ../sortBy */ "./node_modules/lodash/sortBy.js"));

func.placeholder = __webpack_require__(/*! ./placeholder */ "./node_modules/lodash/fp/placeholder.js");
module.exports = func;


/***/ }),

/***/ "./node_modules/lodash/isError.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isError.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),

/***/ "./node_modules/lodash/isWeakMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/isWeakMap.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var weakMapTag = '[object WeakMap]';

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == weakMapTag;
}

module.exports = isWeakMap;


/***/ }),

/***/ "./node_modules/lodash/iteratee.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/iteratee.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
}

module.exports = iteratee;


/***/ }),

/***/ "./node_modules/lodash/rearg.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/rearg.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

module.exports = rearg;


/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/sortBy.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ "./node_modules/lodash/_baseOrderBy.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toPath.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/toPath.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),

/***/ "./node_modules/lodash/wrapperLodash.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/wrapperLodash.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var LazyWrapper = __webpack_require__(/*! ./_LazyWrapper */ "./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__(/*! ./_LodashWrapper */ "./node_modules/lodash/_LodashWrapper.js"),
    baseLodash = __webpack_require__(/*! ./_baseLodash */ "./node_modules/lodash/_baseLodash.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    wrapperClone = __webpack_require__(/*! ./_wrapperClone */ "./node_modules/lodash/_wrapperClone.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcActionButton-drGRj4p_.css":
/*!****************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcActionButton-drGRj4p_.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcActionButton_drGRj4p_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcActionButton-drGRj4p_.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionButton-drGRj4p_.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcActionButton_drGRj4p_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcActionButton_drGRj4p_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcActionButton_drGRj4p_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcActionButton_drGRj4p_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcActions-KraINfs1.css":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcActions-KraINfs1.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcActions_KraINfs1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcActions-KraINfs1.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActions-KraINfs1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcActions_KraINfs1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcActions_KraINfs1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcActions_KraINfs1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcActions_KraINfs1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css":
/*!**********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcButton--B8Z7HCp.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../nextcloud-vue/dist/assets/NcInputField-Al6E6hfU.css":
/*!**************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcInputField-Al6E6hfU.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcInputField_Al6E6hfU_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcInputField-Al6E6hfU.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcInputField-Al6E6hfU.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcInputField_Al6E6hfU_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcInputField_Al6E6hfU_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcInputField_Al6E6hfU_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcInputField_Al6E6hfU_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcModal_ecigA_hy_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcModal-ecigA_hy.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcModal_ecigA_hy_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcModal_ecigA_hy_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcModal_ecigA_hy_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcModal_ecigA_hy_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcNoteCard-Hu_gcYqP.css":
/*!************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcNoteCard-Hu_gcYqP.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcNoteCard_Hu_gcYqP_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcNoteCard-Hu_gcYqP.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcNoteCard-Hu_gcYqP.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcNoteCard_Hu_gcYqP_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcNoteCard_Hu_gcYqP_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcNoteCard_Hu_gcYqP_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcNoteCard_Hu_gcYqP_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcPopover-cCNYT88q.css":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcPopover-cCNYT88q.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcPopover_cCNYT88q_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcPopover-cCNYT88q.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcPopover-cCNYT88q.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcPopover_cCNYT88q_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcPopover_cCNYT88q_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcPopover_cCNYT88q_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcPopover_cCNYT88q_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_Tooltip_Ix4LeJvl_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./Tooltip-Ix4LeJvl.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_Tooltip_Ix4LeJvl_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_Tooltip_Ix4LeJvl_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_Tooltip_Ix4LeJvl_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_Tooltip_Ix4LeJvl_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue":
/*!*************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true */ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true");
/* harmony import */ var _AddDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDevice.vue?vue&type=script&lang=js */ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js");
/* harmony import */ var _AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css */ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "15f8a53b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/WebAuthn/AddDevice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue":
/*!**********************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Device_vue_vue_type_template_id_1b250cbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Device.vue?vue&type=template&id=1b250cbc&scoped=true */ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true");
/* harmony import */ var _Device_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Device.vue?vue&type=script&lang=js */ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js");
/* harmony import */ var _Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css */ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Device_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Device_vue_vue_type_template_id_1b250cbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Device_vue_vue_type_template_id_1b250cbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1b250cbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/WebAuthn/Device.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Section.vue":
/*!***********************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Section.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Section_vue_vue_type_template_id_47c82c6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section.vue?vue&type=template&id=47c82c6e&scoped=true */ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true");
/* harmony import */ var _Section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section.vue?vue&type=script&lang=js */ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Section_vue_vue_type_template_id_47c82c6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Section_vue_vue_type_template_id_47c82c6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47c82c6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/WebAuthn/Section.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Section.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_1b250cbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_1b250cbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_1b250cbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=template&id=1b250cbc&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_47c82c6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_47c82c6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_47c82c6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Section.vue?vue&type=template&id=47c82c6e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css");


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcActionButton.mjs":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcActionButton.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcActionButton)
/* harmony export */ });
/* harmony import */ var _assets_NcActionButton_drGRj4p_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionButton-drGRj4p_.css */ "../nextcloud-vue/dist/assets/NcActionButton-drGRj4p_.css");
/* harmony import */ var _chunks_Check_0ovJb_fA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/Check-0ovJb_fA.mjs */ "../nextcloud-vue/dist/chunks/Check-0ovJb_fA.mjs");
/* harmony import */ var _chunks_ChevronRight_BZsZ7HN_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/ChevronRight-BZsZ7HN-.mjs */ "../nextcloud-vue/dist/chunks/ChevronRight-BZsZ7HN-.mjs");
/* harmony import */ var _chunks_actionText_5BmUMmYJ_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/actionText-5BmUMmYJ.mjs */ "../nextcloud-vue/dist/chunks/actionText-5BmUMmYJ.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");





const _sfc_main = {
  name: "NcActionButton",
  components: {
    CheckIcon: _chunks_Check_0ovJb_fA_mjs__WEBPACK_IMPORTED_MODULE_1__.C,
    ChevronRightIcon: _chunks_ChevronRight_BZsZ7HN_mjs__WEBPACK_IMPORTED_MODULE_2__.C
  },
  mixins: [_chunks_actionText_5BmUMmYJ_mjs__WEBPACK_IMPORTED_MODULE_3__.A],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  props: {
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
     * disabled state of the action button
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * If this is a menu, a chevron icon will
     * be added at the end of the line
     */
    isMenu: {
      type: Boolean,
      default: false
    },
    /**
     * The button's behavior, by default the button acts like a normal button with optional toggle button behavior if `modelValue` is `true` or `false`.
     * But you can also set to checkbox button behavior with tri-state or radio button like behavior.
     * This extends the native HTML button type attribute.
     */
    type: {
      type: String,
      default: "button",
      validator: (behavior) => ["button", "checkbox", "radio", "reset", "submit"].includes(behavior)
    },
    /**
     * The buttons state if `type` is 'checkbox' or 'radio' (meaning if it is pressed / selected).
     * For checkbox and toggle button behavior - boolean value.
     * For radio button behavior - could be a boolean checked or a string with the value of the button.
     * Note: Unlike native radio buttons, NcActionButton are not grouped by name, so you need to connect them by bind correct modelValue.
     *
     *  **This is not availabe for `type='submit'` or `type='reset'`**
     *
     * If using `type='checkbox'` a `model-value` of `true` means checked, `false` means unchecked and `null` means indeterminate (tri-state)
     * For `type='radio'` `null` is equal to `false`
     */
    modelValue: {
      type: [Boolean, String],
      default: null
    },
    /**
     * The value used for the `modelValue` when this component is used with radio behavior
     * Similar to the `value` attribute of `<input type="radio">`
     */
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * The current "checked" or "pressed" state for the model behavior
     */
    isChecked() {
      if (this.type === "radio" && typeof this.modelValue !== "boolean") {
        return this.modelValue === this.value;
      }
      return this.modelValue;
    },
    /**
     * The native HTML type to set on the button
     */
    nativeType() {
      if (this.type === "submit" || this.type === "reset") {
        return this.type;
      }
      return "button";
    },
    /**
     * HTML attributes to bind to the <button>
     */
    buttonAttributes() {
      const attributes = {};
      if (this.isInSemanticMenu) {
        attributes.role = "menuitem";
        if (this.type === "radio") {
          attributes.role = "menuitemradio";
          attributes["aria-checked"] = this.isChecked ? "true" : "false";
        } else if (this.type === "checkbox" || this.nativeType === "button" && this.modelValue !== null) {
          attributes.role = "menuitemcheckbox";
          attributes["aria-checked"] = this.modelValue === null ? "mixed" : this.modelValue ? "true" : "false";
        }
      } else if (this.modelValue !== null && this.nativeType === "button") {
        attributes["aria-pressed"] = this.modelValue ? "true" : "false";
      }
      return attributes;
    }
  },
  methods: {
    /**
     * Forward click event, let mixin handle the close-after-click and emit new modelValue if needed
     * @param {MouseEvent} event The click event
     */
    handleClick(event) {
      this.onClick(event);
      if (this.modelValue !== null || this.type !== "button") {
        if (this.type === "radio") {
          if (typeof this.modelValue !== "boolean") {
            if (!this.isChecked) {
              this.$emit("update:modelValue", this.value);
            }
          } else {
            this.$emit("update:modelValue", !this.isChecked);
          }
        } else {
          this.$emit("update:modelValue", !this.isChecked);
        }
      }
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled }, attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("button", _vm._b({ class: ["action-button button-vue", {
    "action-button--active": _vm.isChecked,
    focusable: _vm.isFocusable
  }], attrs: { "aria-label": _vm.ariaLabel, "title": _vm.title, "type": _vm.nativeType }, on: { "click": _vm.handleClick } }, "button", _vm.buttonAttributes, false), [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-button__icon", class: [_vm.isIconUrl ? "action-button__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } })];
  }), _vm.name ? _c("span", { staticClass: "action-button__longtext-wrapper" }, [_c("strong", { staticClass: "action-button__name" }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _c("br"), _c("span", { staticClass: "action-button__longtext", domProps: { "textContent": _vm._s(_vm.text) } })]) : _vm.isLongText ? _c("span", { staticClass: "action-button__longtext", domProps: { "textContent": _vm._s(_vm.text) } }) : _c("span", { staticClass: "action-button__text" }, [_vm._v(_vm._s(_vm.text))]), _vm.isMenu ? _c("ChevronRightIcon", { staticClass: "action-button__menu-icon", attrs: { "size": 20 } }) : _vm.isChecked === true ? _c("CheckIcon", { staticClass: "action-button__pressed-icon", attrs: { "size": 20 } }) : _vm.isChecked === false ? _c("span", { staticClass: "action-button__pressed-icon material-design-icon" }) : _vm._e(), _vm._e()], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_4__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "04ec546c",
  null,
  null
);
const NcActionButton = __component__.exports;

//# sourceMappingURL=NcActionButton.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcActions.mjs":
/*!******************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcActions.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcActions_J2kuH7GX_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcActions_J2kuH7GX_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcActions-J2kuH7GX.mjs */ "../nextcloud-vue/dist/chunks/NcActions-J2kuH7GX.mjs");


//# sourceMappingURL=NcActions.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcButton.mjs":
/*!*****************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcButton.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../nextcloud-vue/dist/Components/NcInputField.mjs":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcInputField.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcInputField)
/* harmony export */ });
/* harmony import */ var _assets_NcInputField_Al6E6hfU_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcInputField-Al6E6hfU.css */ "../nextcloud-vue/dist/assets/NcInputField-Al6E6hfU.css");
/* harmony import */ var _NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NcButton.mjs */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _chunks_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _chunks_AlertCircleOutline_cfiE2eFa_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/AlertCircleOutline-cfiE2eFa.mjs */ "../nextcloud-vue/dist/chunks/AlertCircleOutline-cfiE2eFa.mjs");
/* harmony import */ var _chunks_Check_0ovJb_fA_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/Check-0ovJb_fA.mjs */ "../nextcloud-vue/dist/chunks/Check-0ovJb_fA.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");






const _sfc_main = {
  name: "NcInputField",
  components: {
    NcButton: _NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    AlertCircle: _chunks_AlertCircleOutline_cfiE2eFa_mjs__WEBPACK_IMPORTED_MODULE_3__.A,
    Check: _chunks_Check_0ovJb_fA_mjs__WEBPACK_IMPORTED_MODULE_4__.C
  },
  inheritAttrs: false,
  props: {
    /**
     * The value of the input field
     * If type is 'number' and a number is passed as value than the type of `update:value` will also be 'number'
     */
    value: {
      type: [String, Number],
      required: true
    },
    /**
     * The type of the input element
     */
    type: {
      type: String,
      default: "text",
      validator: (value) => [
        "text",
        "password",
        "email",
        "tel",
        "url",
        "search",
        "number"
      ].includes(value)
    },
    /**
     * The input label, always provide one for accessibility purposes.
     * This will also be used as a placeholder unless the placeholder
     * prop is populated with a different string.
     *
     * Note: If the background color is not `--color-main-background` consider using an external label instead (see `labelOutside`).
     */
    label: {
      type: String,
      default: void 0
    },
    /**
     * Pass in true if you want to use an external label. This is useful
     * if you need a label that looks different from the one provided by
     * this component
     */
    labelOutside: {
      type: Boolean,
      default: false
    },
    /**
     * The placeholder of the input. This defaults as the string that's
     * passed into the label prop. In order to remove the placeholder,
     * pass in an empty string.
     */
    placeholder: {
      type: String,
      default: void 0
    },
    /**
     * Controls whether to display the trailing button.
     */
    showTrailingButton: {
      type: Boolean,
      default: false
    },
    /**
     * Label of the trailing button
     *
     * Required when showTrailingButton is set
     */
    trailingButtonLabel: {
      type: String,
      default: ""
    },
    /**
     * Toggles the success state of the component. Adds a checkmark icon.
     * this cannot be used together with canClear.
     */
    success: {
      type: Boolean,
      default: false
    },
    /**
     * Toggles the error state of the component. Adds an error icon.
     * this cannot be used together with canClear.
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Additional helper text message
     *
     * This will be displayed beneath the input field. In case the field is
     * also marked as having an error, the text will be displayed in red.
     */
    helperText: {
      type: String,
      default: ""
    },
    /**
     * Disable the input field
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies whether the input should have a pill form.
     * By default, input has rounded corners.
     */
    pill: {
      type: Boolean,
      default: false
    },
    /**
     * Class to add to the input field.
     * Necessary to use NcInputField in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    }
  },
  emits: [
    "update:value",
    "trailing-button-click"
  ],
  computed: {
    computedId() {
      return this.$attrs.id && this.$attrs.id !== "" ? this.$attrs.id : this.inputName;
    },
    inputName() {
      return "input" + (0,_chunks_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_2__.G)();
    },
    hasLeadingIcon() {
      return this.$slots.default;
    },
    hasTrailingIcon() {
      return this.success;
    },
    hasPlaceholder() {
      return this.placeholder !== "" && this.placeholder !== void 0;
    },
    computedPlaceholder() {
      return this.hasPlaceholder ? this.placeholder : this.label;
    },
    isValidLabel() {
      const isValidLabel = this.label || this.labelOutside;
      if (!isValidLabel) {
        console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation.");
      }
      return isValidLabel;
    },
    ariaDescribedby() {
      const ariaDescribedby = [];
      if (this.helperText.length > 0) {
        ariaDescribedby.push(`${this.inputName}-helper-text`);
      }
      if (this.$attrs["aria-describedby"]) {
        ariaDescribedby.push(this.$attrs["aria-describedby"]);
      }
      return ariaDescribedby.join(" ") || null;
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.input.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.input.select();
    },
    handleInput(event) {
      this.$emit("update:value", this.type === "number" && typeof this.value === "number" ? parseFloat(event.target.value, 10) : event.target.value);
    },
    handleTrailingButtonClick(event) {
      this.$emit("trailing-button-click", event);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "input-field", class: { "input-field--disabled": _vm.disabled } }, [_c("div", { staticClass: "input-field__main-wrapper" }, [_c("input", _vm._g(_vm._b({ ref: "input", staticClass: "input-field__input", class: [
    _vm.inputClass,
    {
      "input-field__input--trailing-icon": _vm.showTrailingButton || _vm.hasTrailingIcon,
      "input-field__input--leading-icon": _vm.hasLeadingIcon,
      "input-field__input--label-outside": _vm.labelOutside,
      "input-field__input--success": _vm.success,
      "input-field__input--error": _vm.error,
      "input-field__input--pill": _vm.pill
    }
  ], attrs: { "id": _vm.computedId, "type": _vm.type, "disabled": _vm.disabled, "placeholder": _vm.computedPlaceholder, "aria-describedby": _vm.ariaDescribedby, "aria-live": "polite" }, domProps: { "value": _vm.value.toString() }, on: { "input": _vm.handleInput } }, "input", _vm.$attrs, false), _vm.$listeners)), !_vm.labelOutside && _vm.isValidLabel ? _c("label", { staticClass: "input-field__label", class: [{
    "input-field__label--trailing-icon": _vm.showTrailingButton || _vm.hasTrailingIcon,
    "input-field__label--leading-icon": _vm.hasLeadingIcon
  }], attrs: { "for": _vm.computedId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.hasLeadingIcon, expression: "hasLeadingIcon" }], staticClass: "input-field__icon input-field__icon--leading" }, [_vm._t("default")], 2), _vm.showTrailingButton ? _c("NcButton", { staticClass: "input-field__trailing-button", class: [{
    "input-field__trailing-button--pill": _vm.pill
  }], attrs: { "type": "tertiary-no-background", "aria-label": _vm.trailingButtonLabel, "disabled": _vm.disabled }, on: { "click": _vm.handleTrailingButtonClick }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("trailing-button-icon")];
  }, proxy: true }], null, true) }) : _vm.success || _vm.error ? _c("div", { staticClass: "input-field__icon input-field__icon--trailing" }, [_vm.success ? _c("Check", { staticStyle: { "color": "var(--color-success-text)" }, attrs: { "size": 20 } }) : _vm.error ? _c("AlertCircle", { staticStyle: { "color": "var(--color-error-text)" }, attrs: { "size": 20 } }) : _vm._e()], 1) : _vm._e()], 1), _vm.helperText.length > 0 ? _c("p", { staticClass: "input-field__helper-text-message", class: {
    "input-field__helper-text-message--error": _vm.error,
    "input-field__helper-text-message--success": _vm.success
  }, attrs: { "id": `${_vm.inputName}-helper-text` } }, [_vm.success ? _c("Check", { staticClass: "input-field__helper-text-message__icon", attrs: { "size": 18 } }) : _vm.error ? _c("AlertCircle", { staticClass: "input-field__helper-text-message__icon", attrs: { "size": 18 } }) : _vm._e(), _vm._v(" " + _vm._s(_vm.helperText) + " ")], 1) : _vm._e()]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "b312d183",
  null,
  null
);
const NcInputField = __component__.exports;

//# sourceMappingURL=NcInputField.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcModal.mjs":
/*!****************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcModal.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcModal)
/* harmony export */ });
/* harmony import */ var _assets_NcModal_ecigA_hy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcModal-ecigA_hy.css */ "../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css");
/* harmony import */ var _chunks_ScopeComponent_f6Z_CQtX_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/ScopeComponent-f6Z-CQtX.mjs */ "../nextcloud-vue/dist/chunks/ScopeComponent-f6Z-CQtX.mjs");
/* harmony import */ var _chunks_focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/focusTrap-Mgj6f-TI.mjs */ "../nextcloud-vue/dist/chunks/focusTrap-Mgj6f-TI.mjs");
/* harmony import */ var _chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _chunks_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _chunks_NcActions_J2kuH7GX_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/NcActions-J2kuH7GX.mjs */ "../nextcloud-vue/dist/chunks/NcActions-J2kuH7GX.mjs");
/* harmony import */ var _NcButton_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NcButton.mjs */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _Directives_Tooltip_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Directives/Tooltip.mjs */ "../nextcloud-vue/dist/Directives/Tooltip.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _chunks_ChevronRight_BZsZ7HN_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chunks/ChevronRight-BZsZ7HN-.mjs */ "../nextcloud-vue/dist/chunks/ChevronRight-BZsZ7HN-.mjs");
/* harmony import */ var _chunks_Close_x3DvlfYA_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chunks/Close-x3DvlfYA.mjs */ "../nextcloud-vue/dist/chunks/Close-x3DvlfYA.mjs");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! focus-trap */ "../nextcloud-vue/node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vueuse/core */ "../nextcloud-vue/node_modules/@vueuse/core/index.mjs");
/* harmony import */ var floating_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! floating-vue */ "../nextcloud-vue/node_modules/floating-vue/dist/floating-vue.es.js");














(0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.r)(_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.G, _chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.F);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
function timer(callback, delay) {
  let id;
  let started;
  let remaining = delay;
  let running;
  this.start = function() {
    running = true;
    started = /* @__PURE__ */ new Date();
    id = setTimeout(callback, remaining);
  };
  this.pause = function() {
    running = false;
    clearTimeout(id);
    remaining -= /* @__PURE__ */ new Date() - started;
  };
  this.clear = function() {
    running = false;
    clearTimeout(id);
    remaining = 0;
  };
  this.getTimeLeft = function() {
    if (running) {
      this.pause();
      this.start();
    }
    return remaining;
  };
  this.getStateRunning = function() {
    return running;
  };
  this.start();
}
const _sfc_main$3 = {
  name: "ChevronLeftIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$3 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon chevron-left-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_8__.n)(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null,
  null,
  null
);
const ChevronLeft = __component__$3.exports;
const _sfc_main$2 = {
  name: "PauseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon pause-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M14,19H18V5H14M6,19H10V5H6V19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_8__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const Pause = __component__$2.exports;
const _sfc_main$1 = {
  name: "PlayIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon play-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M8,5.14V19.14L19,12.14L8,5.14Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_8__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const Play = __component__$1.exports;
const _sfc_main = {
  name: "NcModal",
  components: {
    NcActions: _chunks_NcActions_J2kuH7GX_mjs__WEBPACK_IMPORTED_MODULE_5__.N,
    ChevronLeft,
    ChevronRight: _chunks_ChevronRight_BZsZ7HN_mjs__WEBPACK_IMPORTED_MODULE_9__.C,
    Close: _chunks_Close_x3DvlfYA_mjs__WEBPACK_IMPORTED_MODULE_10__.C,
    Pause,
    Play,
    NcButton: _NcButton_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: {
    tooltip: floating_vue__WEBPACK_IMPORTED_MODULE_11__.VTooltip
  },
  props: {
    /**
     * Name to be shown with the modal
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Declare if a previous slide is available
     */
    hasPrevious: {
      type: Boolean,
      default: false
    },
    /**
     * Declare if a next slide is available
     */
    hasNext: {
      type: Boolean,
      default: false
    },
    /**
     * Declare if hiding the modal should be animated
     */
    outTransition: {
      type: Boolean,
      default: false
    },
    /**
     * Declare if the slideshow functionality should be enabled
     */
    enableSlideshow: {
      type: Boolean,
      default: false
    },
    /**
     * Declare the slide interval
     */
    slideshowDelay: {
      type: Number,
      default: 5e3
    },
    /**
     * Allow to pause an ongoing slideshow
     */
    slideshowPaused: {
      type: Boolean,
      default: false
    },
    /**
     * Enable swipe between slides
     */
    enableSwipe: {
      type: Boolean,
      default: true
    },
    spreadNavigation: {
      type: Boolean,
      default: false
    },
    /**
     * Defines the modal size.
     * Default is 'normal'.
     * Available are 'small', 'normal', 'large' and 'full'.
     * All sizes except 'small' change automatically to full-screen on mobile.
     */
    size: {
      type: String,
      default: "normal",
      validator: (size) => {
        return ["small", "normal", "large", "full"].includes(size);
      }
    },
    /**
     * Declare if the modal can be closed
     */
    canClose: {
      type: Boolean,
      default: true
    },
    /**
     * Close the modal if the user clicked outside of the modal
     * Only relevant if `canClose` is set to true.
     */
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    /**
     * Makes the modal backdrop black if true
     * Will be overwritten if some buttons are shown outside
     */
    dark: {
      type: Boolean,
      default: false
    },
    /**
     * Selector for the modal container, pass `null` to prevent automatic container mounting
     */
    container: {
      type: [String, null],
      default: "body"
    },
    /**
     * Pass in false if you want the modal 'close' button to be displayed
     * outside the modal boundaries, in the top right corner of the window
     */
    closeButtonContained: {
      type: Boolean,
      default: true
    },
    /**
     * Additional elements to add to the focus trap
     */
    additionalTrapElements: {
      type: Array,
      default: () => []
    },
    /**
     * Display x items inline
     *
     * @see Actions component usage
     */
    inlineActions: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: void 0
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {import('focus-trap').FocusTargetValueOrFalse}
     */
    setReturnFocus: {
      default: void 0,
      type: [HTMLElement, SVGElement, String, Boolean]
    }
  },
  emits: [
    "previous",
    "next",
    "close",
    "update:show"
  ],
  data() {
    return {
      mc: null,
      playing: false,
      slideshowTimeout: null,
      iconSize: 24,
      focusTrap: null,
      randId: (0,_chunks_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_4__.G)(),
      internalShow: true
    };
  },
  computed: {
    showModal() {
      return this.show === void 0 ? this.internalShow : this.show;
    },
    modalTransitionName() {
      return `modal-${this.outTransition ? "out" : "in"}`;
    },
    playPauseName() {
      return this.playing ? (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("Pause slideshow") : (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("Start slideshow");
    },
    cssVariables() {
      return {
        "--slideshow-duration": this.slideshowDelay + "ms",
        "--icon-size": this.iconSize + "px"
      };
    },
    closeButtonAriaLabel() {
      return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("Close");
    },
    prevButtonAriaLabel() {
      return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("Previous");
    },
    nextButtonAriaLabel() {
      return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("Next");
    }
  },
  watch: {
    /**
     * Handle play/pause of an ongoing slideshow
     *
     * @param {boolean} paused is the player paused
     */
    slideshowPaused(paused) {
      if (this.slideshowTimeout) {
        if (paused) {
          this.slideshowTimeout.pause();
        } else {
          this.slideshowTimeout.start();
        }
      }
    },
    additionalTrapElements(elements) {
      if (this.focusTrap) {
        const contentContainer = this.$refs.mask;
        this.focusTrap.updateContainerElements([contentContainer, ...elements]);
      }
    }
  },
  beforeMount() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
    this.mc.stop();
  },
  mounted() {
    this.useFocusTrap();
    this.mc = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_12__.useSwipe)(this.$refs.mask, {
      onSwipeEnd: this.handleSwipe
    });
    if (this.container) {
      if (this.container === "body") {
        document.body.insertBefore(this.$el, document.body.lastChild);
      } else {
        const container = document.querySelector(this.container);
        container.appendChild(this.$el);
      }
    }
  },
  destroyed() {
    this.clearFocusTrap();
    this.$el.remove();
  },
  methods: {
    t: _chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a,
    // Events emitters
    previous(event) {
      if (this.hasPrevious) {
        if (event) {
          this.resetSlideshow();
        }
        this.$emit("previous", event);
      }
    },
    next(event) {
      if (this.hasNext) {
        if (event) {
          this.resetSlideshow();
        }
        this.$emit("next", event);
      }
    },
    close(data) {
      if (this.canClose) {
        this.internalShow = false;
        this.$emit("update:show", false);
        setTimeout(() => {
          this.$emit("close", data);
        }, 300);
      }
    },
    /**
     * Handle click on modal wrapper
     * If `closeOnClickOutside` is set the modal will be closed
     *
     * @param {MouseEvent} event The click event
     */
    handleClickModalWrapper(event) {
      if (this.closeOnClickOutside) {
        this.close(event);
      }
    },
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    handleKeydown(event) {
      if (event.key === "Escape") {
        const trapStack = (0,_chunks_focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_2__.g)();
        if (trapStack.length > 0 && trapStack[trapStack.length - 1] !== this.focusTrap) {
          return;
        }
        return this.close(event);
      }
      const arrowHandlers = {
        ArrowLeft: this.previous,
        ArrowRight: this.next
      };
      if (arrowHandlers[event.key]) {
        if (document.activeElement && !this.$el.contains(document.activeElement)) {
          return;
        }
        return arrowHandlers[event.key](event);
      }
    },
    /**
     * handle the swipe event
     *
     * @param {TouchEvent} e The touch event
     * @param {import('@vueuse/core').SwipeDirection} direction Swipe direction
     */
    handleSwipe(e, direction) {
      if (this.enableSwipe) {
        if (direction === "left") {
          this.next(e);
        } else if (direction === "right") {
          this.previous(e);
        }
      }
    },
    /**
     * Toggle the slideshow state
     */
    togglePlayPause() {
      this.playing = !this.playing;
      if (this.playing) {
        this.handleSlideshow();
      } else {
        this.clearSlideshowTimeout();
      }
    },
    /**
     * Reset the slideshow timer and keep going if it was on
     */
    resetSlideshow() {
      this.playing = !this.playing;
      this.clearSlideshowTimeout();
      this.$nextTick(function() {
        this.togglePlayPause();
      });
    },
    /**
     * Handle the slideshow timer and next event
     */
    handleSlideshow() {
      this.playing = true;
      if (this.hasNext) {
        this.slideshowTimeout = new timer(() => {
          this.next();
          this.handleSlideshow();
        }, this.slideshowDelay);
      } else {
        this.playing = false;
        this.clearSlideshowTimeout();
      }
    },
    /**
     * Clear slideshowTimeout if ongoing
     */
    clearSlideshowTimeout() {
      if (this.slideshowTimeout) {
        this.slideshowTimeout.clear();
      }
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      if (!this.showModal || this.focusTrap) {
        return;
      }
      const contentContainer = this.$refs.mask;
      await this.$nextTick();
      const options = {
        allowOutsideClick: true,
        fallbackFocus: contentContainer,
        trapStack: (0,_chunks_focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(),
        // Esc can be used without stop in content or additionalTrapElements where it should not deacxtivate modal's focus trap.
        // Focus trap is deactivated on modal close anyway.
        escapeDeactivates: false,
        setReturnFocus: this.setReturnFocus
      };
      this.focusTrap = (0,focus_trap__WEBPACK_IMPORTED_MODULE_13__.createFocusTrap)([contentContainer, ...this.additionalTrapElements], options);
      this.focusTrap.activate();
    },
    clearFocusTrap() {
      if (!this.focusTrap) {
        return;
      }
      this.focusTrap?.deactivate();
      this.focusTrap = null;
    }
  }
};
var _sfc_render = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("transition", { attrs: { "name": "fade", "appear": "" }, on: { "after-enter": _vm.useFocusTrap, "before-leave": _vm.clearFocusTrap } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.showModal, expression: "showModal" }], ref: "mask", staticClass: "modal-mask", class: { "modal-mask--dark": _vm.dark || !_vm.closeButtonContained || _vm.hasPrevious || _vm.hasNext }, style: _vm.cssVariables, attrs: { "role": "dialog", "aria-modal": "true", "aria-labelledby": "modal-name-" + _vm.randId, "aria-describedby": "modal-description-" + _vm.randId, "tabindex": "-1" } }, [_c("transition", { attrs: { "name": "fade-visibility", "appear": "" } }, [_c("div", { staticClass: "modal-header" }, [_vm.name.trim() !== "" ? _c("h2", { staticClass: "modal-name", attrs: { "id": "modal-name-" + _vm.randId } }, [_vm._v(" " + _vm._s(_vm.name) + " ")]) : _vm._e(), _c("div", { staticClass: "icons-menu" }, [_vm.hasNext && _vm.enableSlideshow ? _c("button", { directives: [{ name: "tooltip", rawName: "v-tooltip.auto", value: _vm.playPauseName, expression: "playPauseName", modifiers: { "auto": true } }], staticClass: "play-pause-icons", class: { "play-pause-icons--paused": _vm.slideshowPaused }, attrs: { "type": "button" }, on: { "click": _vm.togglePlayPause } }, [!_vm.playing ? _c("Play", { staticClass: "play-pause-icons__play", attrs: { "size": _vm.iconSize } }) : _c("Pause", { staticClass: "play-pause-icons__pause", attrs: { "size": _vm.iconSize } }), _c("span", { staticClass: "hidden-visually" }, [_vm._v(" " + _vm._s(_vm.playPauseName) + " ")]), _vm.playing ? _c("svg", { staticClass: "progress-ring", attrs: { "height": "50", "width": "50" } }, [_c("circle", { staticClass: "progress-ring__circle", attrs: { "stroke": "white", "stroke-width": "2", "fill": "transparent", "r": "15", "cx": "25", "cy": "25" } })]) : _vm._e()], 1) : _vm._e(), _c("NcActions", { staticClass: "header-actions", attrs: { "inline": _vm.inlineActions } }, [_vm._t("actions")], 2), _vm.canClose && !_vm.closeButtonContained ? _c("NcButton", { staticClass: "header-close", attrs: { "aria-label": _vm.closeButtonAriaLabel, "type": "tertiary" }, on: { "click": _vm.close }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("Close", { attrs: { "size": _vm.iconSize } })];
  }, proxy: true }], null, false, 1841713362) }) : _vm._e()], 1)])]), _c("transition", { attrs: { "name": _vm.modalTransitionName, "appear": "" } }, [_c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.showModal, expression: "showModal" }], staticClass: "modal-wrapper", class: [
    `modal-wrapper--${_vm.size}`,
    { "modal-wrapper--spread-navigation": _vm.spreadNavigation }
  ], on: { "mousedown": function($event) {
    if ($event.target !== $event.currentTarget)
      return null;
    return _vm.handleClickModalWrapper.apply(null, arguments);
  } } }, [_c("transition", { attrs: { "name": "fade-visibility", "appear": "" } }, [_c("NcButton", { directives: [{ name: "show", rawName: "v-show", value: _vm.hasPrevious, expression: "hasPrevious" }], staticClass: "prev", attrs: { "type": "tertiary-no-background", "aria-label": _vm.prevButtonAriaLabel }, on: { "click": _vm.previous }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("ChevronLeft", { attrs: { "size": 40 } })];
  }, proxy: true }]) })], 1), _c("div", { staticClass: "modal-container", attrs: { "id": "modal-description-" + _vm.randId } }, [_vm.canClose && _vm.closeButtonContained ? _c("NcButton", { staticClass: "modal-container__close", attrs: { "type": "tertiary", "aria-label": _vm.closeButtonAriaLabel }, on: { "click": _vm.close }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("Close", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 2121748766) }) : _vm._e(), _c("div", { staticClass: "modal-container__content" }, [_vm._t("default")], 2)], 1), _c("transition", { attrs: { "name": "fade-visibility", "appear": "" } }, [_c("NcButton", { directives: [{ name: "show", rawName: "v-show", value: _vm.hasNext, expression: "hasNext" }], staticClass: "next", attrs: { "type": "tertiary-no-background", "aria-label": _vm.nextButtonAriaLabel }, on: { "click": _vm.next }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("ChevronRight", { attrs: { "size": 40 } })];
  }, proxy: true }]) })], 1)], 1)])], 1)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_8__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "bbeb5a25",
  null,
  null
);
const NcModal = __component__.exports;
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
(0,_chunks_ScopeComponent_f6Z_CQtX_mjs__WEBPACK_IMPORTED_MODULE_1__.S)(NcModal);

//# sourceMappingURL=NcModal.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcNoteCard.mjs":
/*!*******************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcNoteCard.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcNoteCard)
/* harmony export */ });
/* harmony import */ var _assets_NcNoteCard_Hu_gcYqP_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcNoteCard-Hu_gcYqP.css */ "../nextcloud-vue/dist/assets/NcNoteCard-Hu_gcYqP.css");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");


const _sfc_main$4 = {
  name: "CheckboxMarkedCircleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$4 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon checkbox-marked-circle-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  null,
  null,
  null
);
const CheckboxMarkedCircle = __component__$4.exports;
const _sfc_main$3 = {
  name: "AlertDecagramIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$3 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-decagram-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null,
  null,
  null
);
const AlertDecagram = __component__$3.exports;
const _sfc_main$2 = {
  name: "AlertIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const Alert = __component__$2.exports;
const _sfc_main$1 = {
  name: "InformationIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon information-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const Information = __component__$1.exports;
const _sfc_main = {
  name: "NcNoteCard",
  props: {
    /**
     * Type of the attribute
     */
    type: {
      type: String,
      default: "warning",
      validator: (type) => ["success", "info", "warning", "error"].includes(type)
    },
    showAlert: {
      type: Boolean,
      default: false
    },
    heading: {
      type: String,
      default: ""
    }
  },
  computed: {
    shouldShowAlert() {
      return this.showAlert || this.type === "error";
    },
    icon() {
      switch (this.type) {
        case "error":
          return AlertDecagram;
        case "success":
          return CheckboxMarkedCircle;
        case "info":
          return Information;
        case "warning":
          return Alert;
        default:
          return Alert;
      }
    },
    color() {
      switch (this.type) {
        case "error":
          return "var(--color-error)";
        case "success":
          return "var(--color-success)";
        case "info":
          return "var(--color-info)";
        case "warning":
          return "var(--color-warning)";
        default:
          return "var(--color-warning)";
      }
    }
  }
};
var _sfc_render = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "notecard", class: `notecard--${_vm.type}`, attrs: { "role": _vm.shouldShowAlert ? "alert" : "note" } }, [_vm._t("icon", function() {
    return [_c(_vm.icon, { tag: "component", staticClass: "notecard__icon", class: { "notecard__icon--heading": _vm.heading }, attrs: { "fill-color": _vm.color } })];
  }), _c("div", [_vm.heading ? _c("h2", [_vm._v(" " + _vm._s(_vm.heading) + " ")]) : _vm._e(), _vm._t("default")], 2)], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "722d543a",
  null,
  null
);
const NcNoteCard = __component__.exports;

//# sourceMappingURL=NcNoteCard.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcPasswordField.mjs":
/*!************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcPasswordField.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcPasswordField_ebuH_Hkx_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcPasswordField_ebuH_Hkx_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcPasswordField-ebuH_Hkx.mjs */ "../nextcloud-vue/dist/chunks/NcPasswordField-ebuH_Hkx.mjs");


//# sourceMappingURL=NcPasswordField.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Directives/Tooltip.mjs":
/*!****************************************************!*\
  !*** ../nextcloud-vue/dist/Directives/Tooltip.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ floating_vue__WEBPACK_IMPORTED_MODULE_1__.VTooltip),
/* harmony export */   options: () => (/* reexport safe */ floating_vue__WEBPACK_IMPORTED_MODULE_1__.options)
/* harmony export */ });
/* harmony import */ var _assets_Tooltip_Ix4LeJvl_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Tooltip-Ix4LeJvl.css */ "../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css");
/* harmony import */ var floating_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! floating-vue */ "../nextcloud-vue/node_modules/floating-vue/dist/floating-vue.es.js");



/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
floating_vue__WEBPACK_IMPORTED_MODULE_1__.options.themes.tooltip.html = false;
floating_vue__WEBPACK_IMPORTED_MODULE_1__.options.themes.tooltip.delay = { show: 500, hide: 200 };
floating_vue__WEBPACK_IMPORTED_MODULE_1__.options.themes.tooltip.distance = 10;
floating_vue__WEBPACK_IMPORTED_MODULE_1__.options.themes.tooltip["arrow-padding"] = 3;

//# sourceMappingURL=Tooltip.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/AlertCircleOutline-cfiE2eFa.mjs":
/*!********************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/AlertCircleOutline-cfiE2eFa.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AlertCircle)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");

const _sfc_main = {
  name: "AlertCircleOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-circle-outline-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const AlertCircle = __component__.exports;

//# sourceMappingURL=AlertCircleOutline-cfiE2eFa.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/Check-0ovJb_fA.mjs":
/*!*******************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/Check-0ovJb_fA.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");

const _sfc_main = {
  name: "CheckIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon check-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Check = __component__.exports;

//# sourceMappingURL=Check-0ovJb_fA.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/ChevronRight-BZsZ7HN-.mjs":
/*!**************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/ChevronRight-BZsZ7HN-.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");

const _sfc_main = {
  name: "ChevronRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon chevron-right-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const ChevronRight = __component__.exports;

//# sourceMappingURL=ChevronRight-BZsZ7HN-.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/Close-x3DvlfYA.mjs":
/*!*******************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/Close-x3DvlfYA.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Close)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");

const _sfc_main = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon close-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Close = __component__.exports;

//# sourceMappingURL=Close-x3DvlfYA.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/DotsHorizontal-Zd3Cm1TN.mjs":
/*!****************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/DotsHorizontal-Zd3Cm1TN.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ DotsHorizontal)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");

const _sfc_main = {
  name: "DotsHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon dots-horizontal-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const DotsHorizontal = __component__.exports;

//# sourceMappingURL=DotsHorizontal-Zd3Cm1TN.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs":
/*!*************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ GenRandomId)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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
const GenRandomId = (length) => {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").slice(0, length || 5);
};

//# sourceMappingURL=GenRandomId-bekVfSd8.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcActions-J2kuH7GX.mjs":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcActions-J2kuH7GX.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcActions)
/* harmony export */ });
/* harmony import */ var _assets_NcActions_KraINfs1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActions-KraINfs1.css */ "../nextcloud-vue/dist/assets/NcActions-KraINfs1.css");
/* harmony import */ var _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NcButton.mjs */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NcPopover-bHEdiq4K.mjs */ "../nextcloud-vue/dist/chunks/NcPopover-bHEdiq4K.mjs");
/* harmony import */ var _GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focusTrap-Mgj6f-TI.mjs */ "../nextcloud-vue/dist/chunks/focusTrap-Mgj6f-TI.mjs");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _DotsHorizontal_Zd3Cm1TN_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DotsHorizontal-Zd3Cm1TN.mjs */ "../nextcloud-vue/dist/chunks/DotsHorizontal-Zd3Cm1TN.mjs");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");









(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.o);
const focusableSelector = ".focusable";
const _sfc_main = {
  name: "NcActions",
  components: {
    NcButton: _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    DotsHorizontal: _DotsHorizontal_Zd3Cm1TN_mjs__WEBPACK_IMPORTED_MODULE_6__.D,
    NcPopover: _NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_2__.N
  },
  provide() {
    return {
      /**
       * NcActions can be used as:
       * - Application menu (has menu role)
       * - Navigation (has no specific role, should be used an element with navigation role)
       * - Popover with plain text or text inputs (has no specific role)
       * Depending on the usage (used items), the menu and its items should have different roles for a11y.
       * Provide the role for NcAction* components in the NcActions content.
       * @type {import('vue').ComputedRef<boolean>}
       */
      "NcActions:isSemanticMenu": (0,vue__WEBPACK_IMPORTED_MODULE_8__.computed)(() => this.actionsMenuSemanticType === "menu")
    };
  },
  props: {
    /**
     * Specify the open state of the popover menu
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * This disables the internal open management,
     * so the actions menu only respects the `open` prop.
     * This is e.g. necessary for the NcAvatar component
     * to only open the actions menu after loading it's entries has finished.
     */
    manualOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Force the name to show for single actions
     */
    forceName: {
      type: Boolean,
      default: false
    },
    /**
     * Specify the menu name
     */
    menuName: {
      type: String,
      default: null
    },
    /**
     * Apply primary styling for this menu
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies the button type used for trigger and single actions buttons
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success. If left empty,
     * the default button style will be applied.
     */
    type: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].indexOf(value) !== -1;
      },
      default: null
    },
    /**
     * Icon to show for the toggle menu button
     * when more than one action is inside the actions component.
     * Only replace the default three-dot icon if really necessary.
     */
    defaultIcon: {
      type: String,
      default: ""
    },
    /**
     * Aria label for the actions menu.
     *
     * If `menuName` is defined this will not be used to prevent
     * any accessible name conflicts. This ensures that the
     * element can be activated via voice input.
     */
    ariaLabel: {
      type: String,
      default: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Actions")
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
     * Wanted direction of the menu
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * DOM element for the actions' popover boundaries
     */
    boundariesElement: {
      type: Element,
      default: () => document.querySelector("body")
    },
    /**
     * Selector for the actions' popover container
     */
    container: {
      type: [String, Object, Element, Boolean],
      default: "body"
    },
    /**
     * Disabled state of the main button (single action or menu toggle)
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Display x items inline out of the dropdown menu
     * Will be ignored if `forceMenu` is set
     */
    inline: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "open",
    "update:open",
    "close",
    "focus",
    "blur",
    "click"
  ],
  data() {
    return {
      opened: this.open,
      focusIndex: 0,
      randomId: `menu-${(0,_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_3__.G)()}`,
      /**
       * @type {'menu'|'navigation'|'dialog'|'tooltip'|''}
       */
      actionsMenuSemanticType: "",
      externalFocusTrapStack: []
    };
  },
  computed: {
    triggerBtnType() {
      return this.type || (this.primary ? "primary" : this.menuName ? "secondary" : "tertiary");
    },
    withFocusTrap() {
      return this.actionsMenuSemanticType === "dialog";
    }
  },
  watch: {
    // Watch parent prop
    open(state) {
      if (state === this.opened) {
        return;
      }
      this.opened = state;
    },
    opened() {
      this.intersectIntoCurrentFocusTrapStack();
    }
  },
  methods: {
    /**
     * Get the name of the action component
     *
     * @param {import('vue').VNode} action - a vnode with a NcAction* component instance
     * @return {string} the name of the action component
     */
    getActionName(action) {
      return action?.componentOptions?.Ctor?.extendOptions?.name ?? action?.componentOptions?.tag;
    },
    /**
     * When the component has its own focus trap, then it is managed by global trap stack by focus-trap.
     *
     * However if the component has no focus trap and is used inside another focus trap - there is an issue.
     * By default popover content is rendered in body or other container, which is likely outside the current focus trap containers.
     * It results in broken behavior from focus-trap.
     *
     * We need to pause all the focus traps for opening popover and then unpause them back after closing.
     */
    intersectIntoCurrentFocusTrapStack() {
      if (this.withFocusTrap) {
        return;
      }
      if (this.opened) {
        this.externalFocusTrapStack = [...(0,_focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_4__.g)()];
        for (const trap of this.externalFocusTrapStack) {
          trap.pause();
        }
      } else {
        for (const trap of this.externalFocusTrapStack) {
          trap.unpause();
        }
        this.externalFocusTrapStack = [];
      }
    },
    /**
     * Do we have exactly one Action and
     * is it allowed as a standalone element?
     *
     * @param {import('vue').VNode} action The action to check
     * @return {boolean}
     */
    isValidSingleAction(action) {
      return ["NcActionButton", "NcActionLink", "NcActionRouter"].includes(this.getActionName(action));
    },
    /**
     * Check whether a icon prop value is an URL or not
     * @param {string} url The icon prop value
     */
    isIconUrl(url) {
      try {
        return !!new URL(url, url.startsWith("/") ? window.location.origin : void 0);
      } catch (error) {
        return false;
      }
    },
    // MENU STATE MANAGEMENT
    openMenu(e) {
      if (this.opened) {
        return;
      }
      this.opened = true;
      this.$emit("update:open", true);
      this.$emit("open");
    },
    closeMenu(returnFocus = true) {
      if (!this.opened) {
        return;
      }
      this.opened = false;
      this.$refs.popover.clearFocusTrap({ returnFocus });
      this.$emit("update:open", false);
      this.$emit("close");
      this.focusIndex = 0;
      if (returnFocus) {
        this.$refs.menuButton.$el.focus();
      }
    },
    onOpen(event) {
      this.$nextTick(() => {
        this.focusFirstAction(event);
      });
    },
    // MENU KEYS & FOCUS MANAGEMENT
    // focus nearest focusable item on mouse move
    // DO NOT change the focus if the target is already focused
    // this will prevent issues with input being unfocused
    // on mouse move
    onMouseFocusAction(event) {
      if (document.activeElement === event.target) {
        return;
      }
      const menuItem = event.target.closest("li");
      if (menuItem && this.$refs.menu.contains(menuItem)) {
        const focusableItem = menuItem.querySelector(focusableSelector);
        if (focusableItem) {
          const focusList = this.$refs.menu.querySelectorAll(focusableSelector);
          const focusIndex = [...focusList].indexOf(focusableItem);
          if (focusIndex > -1) {
            this.focusIndex = focusIndex;
            this.focusAction();
          }
        }
      }
    },
    /**
     * Dispatches the keydown listener to different handlers
     *
     * @param {object} event The keydown event
     */
    onKeydown(event) {
      if (event.key === "Tab" && !this.withFocusTrap) {
        this.closeMenu(true);
      }
      if (event.key === "ArrowUp") {
        this.focusPreviousAction(event);
      }
      if (event.key === "ArrowDown") {
        this.focusNextAction(event);
      }
      if (event.key === "PageUp") {
        this.focusFirstAction(event);
      }
      if (event.key === "PageDown") {
        this.focusLastAction(event);
      }
      if (event.key === "Escape") {
        this.closeMenu();
        event.preventDefault();
      }
    },
    removeCurrentActive() {
      const currentActiveElement = this.$refs.menu.querySelector("li.active");
      if (currentActiveElement) {
        currentActiveElement.classList.remove("active");
      }
    },
    focusAction() {
      const focusElement = this.$refs.menu.querySelectorAll(focusableSelector)[this.focusIndex];
      if (focusElement) {
        this.removeCurrentActive();
        const liMenuParent = focusElement.closest("li.action");
        focusElement.focus();
        if (liMenuParent) {
          liMenuParent.classList.add("active");
        }
      }
    },
    focusPreviousAction(event) {
      if (this.opened) {
        if (this.focusIndex === 0) {
          this.focusLastAction(event);
        } else {
          this.preventIfEvent(event);
          this.focusIndex = this.focusIndex - 1;
        }
        this.focusAction();
      }
    },
    focusNextAction(event) {
      if (this.opened) {
        const indexLength = this.$refs.menu.querySelectorAll(focusableSelector).length - 1;
        if (this.focusIndex === indexLength) {
          this.focusFirstAction(event);
        } else {
          this.preventIfEvent(event);
          this.focusIndex = this.focusIndex + 1;
        }
        this.focusAction();
      }
    },
    focusFirstAction(event) {
      if (this.opened) {
        this.preventIfEvent(event);
        const firstSelectedIndex = [...this.$refs.menu.querySelectorAll(focusableSelector)].findIndex((button) => {
          return button.parentElement.getAttribute("aria-selected");
        });
        this.focusIndex = firstSelectedIndex > -1 ? firstSelectedIndex : 0;
        this.focusAction();
      }
    },
    focusLastAction(event) {
      if (this.opened) {
        this.preventIfEvent(event);
        this.focusIndex = this.$refs.menu.querySelectorAll(focusableSelector).length - 1;
        this.focusAction();
      }
    },
    preventIfEvent(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
      if (this.actionsMenuSemanticType === "tooltip") {
        if (this.$refs.menu && this.$refs.menu.querySelectorAll(focusableSelector).length === 0) {
          this.closeMenu(false);
        }
      }
    },
    onClick(event) {
      this.$emit("click", event);
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object|undefined} The created VNode
   */
  render(h) {
    const actions = (this.$slots.default || []).filter((action) => this.getActionName(action));
    if (actions.length === 0) {
      return;
    }
    let validInlineActions = actions.filter(this.isValidSingleAction);
    if (this.forceMenu && validInlineActions.length > 0 && this.inline > 0) {
      vue__WEBPACK_IMPORTED_MODULE_8__["default"].util.warn("Specifying forceMenu will ignore any inline actions rendering.");
      validInlineActions = [];
    }
    const inlineActions = validInlineActions.slice(0, this.inline);
    const menuActions = actions.filter((action) => !inlineActions.includes(action));
    const menuItemsActions = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"];
    const textInputActions = ["NcActionInput", "NcActionTextEditable"];
    const linkActions = ["NcActionLink", "NcActionRouter"];
    const hasTextInputAction = menuActions.some((action) => textInputActions.includes(this.getActionName(action)));
    const hasMenuItemAction = menuActions.some((action) => menuItemsActions.includes(this.getActionName(action)));
    const hasLinkAction = menuActions.some((action) => linkActions.includes(this.getActionName(action)));
    if (hasTextInputAction) {
      this.actionsMenuSemanticType = "dialog";
    } else if (hasMenuItemAction) {
      this.actionsMenuSemanticType = "menu";
    } else if (hasLinkAction) {
      this.actionsMenuSemanticType = "navigation";
    } else {
      const ncActions = actions.filter((action) => this.getActionName(action).startsWith("NcAction"));
      if (ncActions.length === actions.length) {
        this.actionsMenuSemanticType = "tooltip";
      } else {
        this.actionsMenuSemanticType = "dialog";
      }
    }
    const actionsRoleToHtmlPopupRole = {
      dialog: "dialog",
      menu: "menu",
      navigation: "true",
      tooltip: "true"
    };
    const popupRole = actionsRoleToHtmlPopupRole[this.actionsMenuSemanticType];
    const renderInlineAction = (action) => {
      const iconProp = action?.componentOptions?.propsData?.icon;
      const icon = action?.data?.scopedSlots?.icon()?.[0] ?? (this.isIconUrl(iconProp) ? h("img", { class: "action-item__menutoggle__icon", attrs: { src: iconProp, alt: "" } }) : h("span", { class: ["icon", iconProp] }));
      const attrs = action?.data?.attrs || {};
      const clickListener = action?.componentOptions?.listeners?.click;
      const text = action?.componentOptions?.children?.[0]?.text?.trim?.();
      const ariaLabel = action?.componentOptions?.propsData?.ariaLabel || text;
      const buttonText = this.forceName ? text : "";
      let title = action?.componentOptions?.propsData?.title;
      if (!(this.forceName || title)) {
        title = text;
      }
      const propsToForward = { ...action?.componentOptions?.propsData ?? {} };
      const nativeType = ["submit", "reset"].includes(propsToForward.type) ? propsToForward.modelValue : "button";
      delete propsToForward.modelValue;
      delete propsToForward.type;
      return h(
        "NcButton",
        {
          class: [
            "action-item action-item--single",
            action?.data?.staticClass,
            action?.data?.class
          ],
          attrs: {
            ...attrs,
            "aria-label": ariaLabel,
            title
          },
          ref: action?.data?.ref,
          props: {
            // If it has a menuName, we use a secondary button
            type: this.type || (buttonText ? "secondary" : "tertiary"),
            disabled: this.disabled || action?.componentOptions?.propsData?.disabled,
            pressed: action?.componentOptions?.propsData?.modelValue,
            nativeType,
            ...propsToForward
          },
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "update:pressed": action?.componentOptions?.listeners?.["update:modelValue"] ?? (() => {
            }),
            // If we have a click listener,
            // we bind it to execute on click and forward the click event
            ...!!clickListener && {
              click: (event) => {
                if (clickListener) {
                  clickListener(event);
                }
              }
            }
          }
        },
        [
          h("template", { slot: "icon" }, [icon]),
          buttonText
        ]
      );
    };
    const renderActionsPopover = (actions2) => {
      const triggerIcon = this.$slots.icon?.[0] || (this.defaultIcon ? h("span", { class: ["icon", this.defaultIcon] }) : h("DotsHorizontal", {
        props: {
          size: 20
        }
      }));
      return h(
        "NcPopover",
        {
          ref: "popover",
          props: {
            delay: 0,
            handleResize: true,
            shown: this.opened,
            placement: this.placement,
            boundary: this.boundariesElement,
            container: this.container,
            popoverBaseClass: "action-item__popper",
            popupRole,
            setReturnFocus: this.withFocusTrap ? this.$refs.menuButton?.$el : null,
            focusTrap: this.withFocusTrap
          },
          // For some reason the popover component
          // does not react to props given under the 'props' key,
          // so we use both 'attrs' and 'props'
          attrs: {
            delay: 0,
            handleResize: true,
            shown: this.opened,
            placement: this.placement,
            boundary: this.boundariesElement,
            container: this.container,
            ...this.manualOpen && { triggers: [] }
          },
          on: {
            show: this.openMenu,
            "after-show": this.onOpen,
            hide: this.closeMenu
          }
        },
        [
          h("NcButton", {
            class: "action-item__menutoggle",
            props: {
              type: this.triggerBtnType,
              disabled: this.disabled
            },
            slot: "trigger",
            ref: "menuButton",
            attrs: {
              "aria-label": this.menuName ? null : this.ariaLabel,
              "aria-controls": this.opened ? this.randomId : null
            },
            on: {
              focus: this.onFocus,
              blur: this.onBlur,
              click: this.onClick
            }
          }, [
            h("template", { slot: "icon" }, [triggerIcon]),
            this.menuName
          ]),
          h("div", {
            class: {
              open: this.opened
            },
            attrs: {
              tabindex: "-1"
            },
            on: {
              keydown: this.onKeydown,
              mousemove: this.onMouseFocusAction
            },
            ref: "menu"
          }, [
            h("ul", {
              attrs: {
                id: this.randomId,
                tabindex: "-1",
                role: popupRole !== "true" ? popupRole : void 0
                // TODO: allow to provide dialog aria-label
              }
            }, [
              actions2
            ])
          ])
        ]
      );
    };
    if (actions.length === 1 && validInlineActions.length === 1 && !this.forceMenu) {
      return renderInlineAction(actions[0]);
    }
    this.$nextTick(() => {
      if (this.opened && this.$refs.menu) {
        const isAnyActive = this.$refs.menu.querySelector("li.active") || [];
        if (isAnyActive.length === 0) {
          this.focusFirstAction();
        }
      }
    });
    if (inlineActions.length > 0 && this.inline > 0) {
      return h(
        "div",
        {
          class: [
            "action-items",
            `action-item--${this.triggerBtnType}`
          ]
        },
        [
          // Render inline actions
          ...inlineActions.map(renderInlineAction),
          // render the rest within the popover menu
          menuActions.length > 0 ? h(
            "div",
            {
              class: [
                "action-item",
                {
                  "action-item--open": this.opened
                }
              ]
            },
            [
              renderActionsPopover(menuActions)
            ]
          ) : null
        ]
      );
    }
    return h(
      "div",
      {
        class: [
          "action-item action-item--default-popover",
          `action-item--${this.triggerBtnType}`,
          {
            "action-item--open": this.opened
          }
        ]
      },
      [
        renderActionsPopover(actions)
      ]
    );
  }
};
const _sfc_render = null;
const _sfc_staticRenderFns = null;
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_7__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "0d636de9",
  null,
  null
);
const NcActions = __component__.exports;

//# sourceMappingURL=NcActions-J2kuH7GX.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcPasswordField-ebuH_Hkx.mjs":
/*!*****************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcPasswordField-ebuH_Hkx.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcPasswordField)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NcInputField.mjs */ "../nextcloud-vue/dist/Components/NcInputField.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debounce */ "../nextcloud-vue/node_modules/debounce/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "../nextcloud-vue/node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/initial-state */ "../nextcloud-vue/node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/router */ "../nextcloud-vue/node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _logger_NqlBlfJu_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger-NqlBlfJu.mjs */ "../nextcloud-vue/dist/chunks/logger-NqlBlfJu.mjs");








const _sfc_main$2 = {
  name: "EyeIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon eye-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const Eye = __component__$2.exports;
const _sfc_main$1 = {
  name: "EyeOffIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon eye-off-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const EyeOff = __component__$1.exports;
(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.q);
const passwordPolicy = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)("core", "capabilities", {}).password_policy || null;
const NcInputFieldProps = new Set(Object.keys(_Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].props));
const _sfc_main = {
  name: "NcPasswordField",
  components: {
    NcInputField: _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    Eye,
    EyeOff
  },
  // Allow forwarding all attributes
  inheritAttrs: false,
  props: {
    /**
     * Any [NcInputField](#/Components/NcFields?id=ncinputfield) props
     */
    // Not an actual prop but needed to show in vue-styleguidist docs
    // eslint-disable-next-line
    " ": {},
    // Reuse all the props from NcInputField for better typing and documentation
    ..._Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].props,
    // Redefined props
    /**
     * Controls whether to display the trailing button.
     */
    showTrailingButton: {
      type: Boolean,
      default: true
    },
    // Removed NcInputField props, defined only by this component
    trailingButtonLabel: void 0,
    // Custom props
    /**
     * Check if the user entered a valid password using the password_policy
     * app if available.
     *
     * Warning: this doesn't replace server side checking and will do nothing
     * if the password_policy app is disabled.
     */
    checkPasswordStrength: {
      type: Boolean,
      default: false
    },
    /**
     * The minlength property defines the minimum number of characters
     * (as UTF-16 code units) the user can enter
     */
    minlength: {
      type: Number,
      default: 0
    },
    /**
     * The maxlength property defines the maximum number of characters
     * (as UTF-16 code units) the user can enter
     */
    maxlength: {
      type: Number,
      default: null
    }
  },
  emits: [
    "valid",
    "invalid",
    "update:value"
  ],
  data() {
    return {
      isPasswordHidden: true,
      internalHelpMessage: "",
      isValid: null
    };
  },
  computed: {
    computedError() {
      return this.error || this.isValid === false;
    },
    computedSuccess() {
      return this.success || this.isValid === true;
    },
    computedHelperText() {
      if (this.helperText.length > 0) {
        return this.helperText;
      }
      return this.internalHelpMessage;
    },
    rules() {
      const { minlength } = this;
      return {
        minlength: minlength ?? passwordPolicy?.minLength
      };
    },
    trailingButtonLabelPassword() {
      return this.isPasswordHidden ? (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Show password") : (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Hide password");
    },
    propsAndAttrsToForward() {
      return {
        // Proxy all the HTML attributes
        ...this.$attrs,
        // Proxy original NcInputField's props
        ...Object.fromEntries(
          Object.entries(this.$props).filter(([key]) => NcInputFieldProps.has(key))
        )
      };
    }
  },
  watch: {
    value(newValue) {
      if (this.checkPasswordStrength) {
        if (passwordPolicy === null) {
          return;
        }
        this.checkPassword(newValue);
      }
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.inputField.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.inputField.select();
    },
    handleInput(event) {
      this.$emit("update:value", event.target.value);
    },
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden;
    },
    checkPassword: debounce__WEBPACK_IMPORTED_MODULE_7__(async function(password) {
      try {
        const { data } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_4__.generateOcsUrl)("apps/password_policy/api/v1/validate"), { password });
        this.isValid = data.ocs.data.passed;
        if (data.ocs.data.passed) {
          this.internalHelpMessage = (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_5__.a)("Password is secure");
          this.$emit("valid");
          return;
        }
        this.internalHelpMessage = data.ocs.data.reason;
        this.$emit("invalid");
      } catch (e) {
        _logger_NqlBlfJu_mjs__WEBPACK_IMPORTED_MODULE_6__.l.error("Password policy returned an error", e);
      }
    }, 500)
  }
};
var _sfc_render = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcInputField", _vm._g(_vm._b({ ref: "inputField", attrs: { "type": _vm.isPasswordHidden ? "password" : "text", "trailing-button-label": _vm.trailingButtonLabelPassword, "helper-text": _vm.computedHelperText, "error": _vm.computedError, "success": _vm.computedSuccess, "minlength": _vm.rules.minlength }, on: { "trailing-button-click": _vm.togglePasswordVisibility, "input": _vm.handleInput }, scopedSlots: _vm._u([{ key: "trailing-button-icon", fn: function() {
    return [_vm.isPasswordHidden ? _c("Eye", { attrs: { "size": 18 } }) : _c("EyeOff", { attrs: { "size": 18 } })];
  }, proxy: true }]) }, "NcInputField", _vm.propsAndAttrsToForward, false), _vm.$listeners), [_vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const NcPasswordField = __component__.exports;

//# sourceMappingURL=NcPasswordField-ebuH_Hkx.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcPopover-bHEdiq4K.mjs":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcPopover-bHEdiq4K.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcPopover)
/* harmony export */ });
/* harmony import */ var _assets_NcPopover_cCNYT88q_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcPopover-cCNYT88q.css */ "../nextcloud-vue/dist/assets/NcPopover-cCNYT88q.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var floating_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! floating-vue */ "../nextcloud-vue/node_modules/floating-vue/dist/floating-vue.es.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-trap */ "../nextcloud-vue/node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusTrap-Mgj6f-TI.mjs */ "../nextcloud-vue/dist/chunks/focusTrap-Mgj6f-TI.mjs");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");






const _sfc_main$1 = (0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  name: "NcPopoverTriggerProvider",
  provide() {
    return {
      "NcPopover:trigger:shown": () => this.shown,
      "NcPopover:trigger:attrs": () => this.triggerAttrs
    };
  },
  props: {
    shown: {
      type: Boolean,
      required: true
    },
    popupRole: {
      type: String,
      required: true
    }
  },
  computed: {
    triggerAttrs() {
      return {
        "aria-haspopup": this.popupRole,
        "aria-expanded": this.shown.toString()
      };
    }
  },
  render() {
    return this.$scopedSlots.default?.({
      attrs: this.triggerAttrs
    });
  }
});
const _sfc_render$1 = null;
const _sfc_staticRenderFns$1 = null;
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const NcPopoverTriggerProvider = __component__$1.exports;
const _sfc_main = {
  name: "NcPopover",
  components: {
    Dropdown: floating_vue__WEBPACK_IMPORTED_MODULE_1__.Dropdown,
    NcPopoverTriggerProvider
  },
  inheritAttrs: false,
  props: {
    /**
     * Show or hide the popper
     * @see https://floating-vue.starpad.dev/api/#shown
     */
    shown: {
      type: Boolean,
      default: false
    },
    /**
     * Popup role
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#values
     */
    popupRole: {
      type: String,
      default: "true",
      validator: (value) => ["menu", "listbox", "tree", "grid", "dialog", "true"].includes(value)
    },
    popoverBaseClass: {
      type: String,
      default: ""
    },
    /**
     * Enable popover focus trap
     */
    focusTrap: {
      type: Boolean,
      default: true
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {import('focus-trap').FocusTargetValueOrFalse}
     */
    setReturnFocus: {
      default: void 0,
      type: [HTMLElement, SVGElement, String, Boolean]
    }
  },
  emits: [
    "after-show",
    "after-hide",
    /**
     * @see https://floating-vue.starpad.dev/api/#update-shown
     */
    "update:shown"
  ],
  data() {
    return {
      internalShown: this.shown
    };
  },
  watch: {
    shown(value) {
      this.internalShown = value;
    },
    internalShown(value) {
      this.$emit("update:shown", value);
    }
  },
  mounted() {
    this.checkTriggerA11y();
  },
  beforeDestroy() {
    this.clearFocusTrap();
    this.clearEscapeStopPropagation();
  },
  methods: {
    /**
     * Check if the trigger has all required a11y attributes.
     * Important to check custom trigger button.
     */
    checkTriggerA11y() {
      if (window.OC?.debug) {
        const triggerContainer = this.$refs.popover.$refs.reference;
        const requiredTriggerButton = triggerContainer.querySelector("[aria-expanded][aria-haspopup]");
        if (!requiredTriggerButton) {
          vue__WEBPACK_IMPORTED_MODULE_4__["default"].util.warn("It looks like you are using a custom button as a <NcPopover> or other popover #trigger. If you are not using <NcButton> as a trigger, you need to bind attrs from the #trigger slot props to your custom button. See <NcPopover> docs for an example.");
        }
      }
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverContentElement() {
      return this.$refs.popover?.$refs.popperContent?.$el;
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      await this.$nextTick();
      if (!this.focusTrap) {
        return;
      }
      const el = this.getPopoverContentElement();
      if (!el) {
        return;
      }
      this.$focusTrap = (0,focus_trap__WEBPACK_IMPORTED_MODULE_5__.createFocusTrap)(el, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: false,
        allowOutsideClick: true,
        setReturnFocus: this.setReturnFocus,
        trapStack: (0,_focusTrap_Mgj6f_TI_mjs__WEBPACK_IMPORTED_MODULE_2__.g)()
      });
      this.$focusTrap.activate();
    },
    /**
     * Remove focus trap
     *
     * @param {object} options The configuration options for focusTrap
     */
    clearFocusTrap(options = {}) {
      try {
        this.$focusTrap?.deactivate(options);
        this.$focusTrap = null;
      } catch (err) {
        console.warn(err);
      }
    },
    /**
     * Add stopPropagation for Escape.
     * It prevents global Escape handling after closing popover.
     *
     * Manual event handling is used here instead of v-on because there is no direct access to the node.
     * Alternative - wrap <template #popover> in a div wrapper.
     */
    addEscapeStopPropagation() {
      const el = this.getPopoverContentElement();
      el?.addEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * Remove stop Escape handler
     */
    clearEscapeStopPropagation() {
      const el = this.getPopoverContentElement();
      el?.removeEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * @param {KeyboardEvent} event - native keydown event
     */
    stopKeydownEscapeHandler(event) {
      if (event.type === "keydown" && event.key === "Escape") {
        event.stopPropagation();
      }
    },
    afterShow() {
      this.$nextTick(() => {
        this.$emit("after-show");
        this.useFocusTrap();
        this.addEscapeStopPropagation();
      });
    },
    afterHide() {
      this.$emit("after-hide");
      this.clearFocusTrap();
      this.clearEscapeStopPropagation();
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("Dropdown", _vm._g(_vm._b({ ref: "popover", attrs: { "distance": 10, "arrow-padding": 10, "no-auto-focus": true, "popper-class": _vm.popoverBaseClass, "shown": _vm.internalShown }, on: { "update:shown": function($event) {
    _vm.internalShown = $event;
  }, "apply-show": _vm.afterShow, "apply-hide": _vm.afterHide }, scopedSlots: _vm._u([{ key: "popper", fn: function() {
    return [_vm._t("default")];
  }, proxy: true }], null, true) }, "Dropdown", _vm.$attrs, false), _vm.$listeners), [_c("NcPopoverTriggerProvider", { attrs: { "shown": _vm.internalShown, "popup-role": _vm.popupRole }, scopedSlots: _vm._u([{ key: "default", fn: function(slotProps) {
    return [_vm._t("trigger", null, null, slotProps)];
  } }], null, true) })], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_3__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const NcPopover = __component__.exports;

//# sourceMappingURL=NcPopover-bHEdiq4K.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/ScopeComponent-f6Z-CQtX.mjs":
/*!****************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/ScopeComponent-f6Z-CQtX.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ScopeComponent)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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
const ScopeComponent = (Component) => {
  if (!Component.mounted) {
    Component.mounted = [];
  } else if (!Array.isArray(Component.mounted)) {
    Component.mounted = [Component.mounted];
  }
  Component.mounted.push(function() {
    this.$el.setAttribute(`data-v-${"d0ee684"}`, "");
  });
};

//# sourceMappingURL=ScopeComponent-f6Z-CQtX.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs":
/*!*******************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t35),
/* harmony export */   B: () => (/* binding */ t27),
/* harmony export */   C: () => (/* binding */ t31),
/* harmony export */   D: () => (/* binding */ t8),
/* harmony export */   E: () => (/* binding */ t25),
/* harmony export */   F: () => (/* binding */ t29),
/* harmony export */   G: () => (/* binding */ t16),
/* harmony export */   H: () => (/* binding */ t32),
/* harmony export */   I: () => (/* binding */ t13),
/* harmony export */   J: () => (/* binding */ t10),
/* harmony export */   K: () => (/* binding */ t42),
/* harmony export */   L: () => (/* binding */ n),
/* harmony export */   M: () => (/* binding */ t18),
/* harmony export */   N: () => (/* binding */ t19),
/* harmony export */   O: () => (/* binding */ t7),
/* harmony export */   P: () => (/* binding */ t36),
/* harmony export */   Q: () => (/* binding */ t33),
/* harmony export */   R: () => (/* binding */ t20),
/* harmony export */   S: () => (/* binding */ t26),
/* harmony export */   T: () => (/* binding */ t11),
/* harmony export */   a: () => (/* binding */ t),
/* harmony export */   b: () => (/* binding */ t14),
/* harmony export */   c: () => (/* binding */ t41),
/* harmony export */   d: () => (/* binding */ t15),
/* harmony export */   e: () => (/* binding */ t40),
/* harmony export */   f: () => (/* binding */ t39),
/* harmony export */   g: () => (/* binding */ t0),
/* harmony export */   h: () => (/* binding */ t5),
/* harmony export */   i: () => (/* binding */ t1),
/* harmony export */   j: () => (/* binding */ t2),
/* harmony export */   k: () => (/* binding */ t28),
/* harmony export */   l: () => (/* binding */ t38),
/* harmony export */   m: () => (/* binding */ t12),
/* harmony export */   n: () => (/* binding */ t9),
/* harmony export */   o: () => (/* binding */ t4),
/* harmony export */   p: () => (/* binding */ t21),
/* harmony export */   q: () => (/* binding */ t24),
/* harmony export */   r: () => (/* binding */ register),
/* harmony export */   s: () => (/* binding */ t37),
/* harmony export */   t: () => (/* binding */ t3),
/* harmony export */   u: () => (/* binding */ t34),
/* harmony export */   v: () => (/* binding */ t30),
/* harmony export */   w: () => (/* binding */ t6),
/* harmony export */   x: () => (/* binding */ t17),
/* harmony export */   y: () => (/* binding */ t23),
/* harmony export */   z: () => (/* binding */ t22)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n_gettext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n/gettext */ "../nextcloud-vue/node_modules/@nextcloud/l10n/dist/gettext.mjs");

const gettext = (0,_nextcloud_l10n_gettext__WEBPACK_IMPORTED_MODULE_0__.getGettextBuilder)().detectLocale().build();
const n = gettext.ngettext.bind(gettext);
const t = gettext.gettext.bind(gettext);
const register = (...chunks) => {
  chunks.forEach((chunk) => {
    if (!chunk.registered) {
      chunk.forEach(({ l: locale, t: translations }) => {
        const decompressed = Object.fromEntries(
          Object.entries(translations).map(([id, value]) => [
            id,
            {
              msgid: id,
              msgid_plural: value.p,
              msgstr: value.v
            }
          ])
        );
        if (!gettext.gt.catalogs[locale]) {
          gettext.gt.catalogs[locale] = { messages: { translations: {} } };
        }
        gettext.gt.catalogs[locale].messages.translations[""] = { ...gettext.gt.catalogs[locale].messages.translations[""], ...decompressed };
      });
      chunk.registered = true;
    }
  });
};
const t0 = [{ "l": "af", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ar", "t": { "{tag} (restricted)": { "v": ["{tag} (مُقيّد)"] }, "Select a tag": { "v": ["إختَر سِمَةً tag"] } } }, { "l": "ast", "t": { "{tag} (restricted)": { "v": ["{tag} (restrinxóse)"] }, "Select a tag": { "v": ["Seleicionar una etiqueta"] } } }, { "l": "az", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "be", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "bg", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "bn_BD", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "br", "t": { "{tag} (restricted)": { "v": ["{tag} (bevennet)"] }, "Select a tag": { "v": ["Choaz ur c'hlav"] } } }, { "l": "bs", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ca", "t": { "{tag} (restricted)": { "v": ["{tag} (restringit)"] }, "Select a tag": { "v": ["Seleccioneu una etiqueta"] } } }, { "l": "cs", "t": { "{tag} (restricted)": { "v": ["{tag} (omezené)"] }, "Select a tag": { "v": ["Vybrat štítek"] } } }, { "l": "cs_CZ", "t": { "{tag} (restricted)": { "v": ["{tag} (omezené)"] }, "Select a tag": { "v": ["Vybrat štítek"] } } }, { "l": "cy_GB", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "da", "t": { "{tag} (restricted)": { "v": ["{tag} (begrænset)"] }, "Select a tag": { "v": ["Vælg et mærke"] } } }, { "l": "de", "t": { "{tag} (restricted)": { "v": ["{tag} (eingeschränkt)"] }, "Select a tag": { "v": ["Schlagwort auswählen"] } } }, { "l": "de_DE", "t": { "{tag} (restricted)": { "v": ["{tag} (eingeschränkt)"] }, "Select a tag": { "v": ["Schlagwort auswählen"] } } }, { "l": "el", "t": { "{tag} (restricted)": { "v": ["{tag} (περιορισμένο)"] }, "Select a tag": { "v": ["Επιλογή ετικέτας"] } } }, { "l": "en_GB", "t": { "{tag} (restricted)": { "v": ["{tag} (restricted)"] }, "Select a tag": { "v": ["Select a tag"] } } }, { "l": "eo", "t": { "{tag} (restricted)": { "v": ["{tag} (limigita)"] }, "Select a tag": { "v": ["Elektu etikedon"] } } }, { "l": "es", "t": { "{tag} (restricted)": { "v": ["{tag} (restringido)"] }, "Select a tag": { "v": ["Seleccione una etiqueta"] } } }, { "l": "es_419", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_AR", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_CL", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_CO", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_CR", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_DO", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_EC", "t": { "{tag} (restricted)": { "v": ["{tag} (restricted)"] }, "Select a tag": { "v": ["Seleccionar una etiqueta"] } } }, { "l": "es_GT", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_HN", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_MX", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_NI", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_PA", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_PE", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_PR", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_PY", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_SV", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "es_UY", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "et_EE", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "eu", "t": { "{tag} (restricted)": { "v": ["{tag} (mugatua)"] }, "Select a tag": { "v": ["Hautatu etiketa bat"] } } }, { "l": "fa", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "fi", "t": { "{tag} (restricted)": { "v": ["{tag} (rajoitettu)"] }, "Select a tag": { "v": ["Valitse tagi"] } } }, { "l": "fo", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "fr", "t": { "{tag} (restricted)": { "v": ["{tag} (restreint)"] }, "Select a tag": { "v": ["Sélectionnez une balise"] } } }, { "l": "gd", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "gl", "t": { "{tag} (restricted)": { "v": ["{tag} (restrinxido)"] }, "Select a tag": { "v": ["Seleccione unha etiqueta"] } } }, { "l": "he", "t": { "{tag} (restricted)": { "v": ["{tag} (מוגבל)"] }, "Select a tag": { "v": ["בחירת תגית"] } } }, { "l": "hi_IN", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "hr", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "hsb", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "hu", "t": { "{tag} (restricted)": { "v": ["{tag} (korlátozott)"] }, "Select a tag": { "v": ["Válasszon címkét"] } } }, { "l": "hy", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ia", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "id", "t": { "{tag} (restricted)": { "v": ["{tag} (dibatasi)"] }, "Select a tag": { "v": ["Pilih tag"] } } }, { "l": "ig", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "is", "t": { "{tag} (restricted)": { "v": ["{tag} (takmarkað)"] }, "Select a tag": { "v": ["Veldu merki"] } } }, { "l": "it", "t": { "{tag} (restricted)": { "v": ["{tag} (limitato)"] }, "Select a tag": { "v": ["Seleziona un'etichetta"] } } }, { "l": "ja", "t": { "{tag} (restricted)": { "v": ["{タグ} (制限付)"] }, "Select a tag": { "v": ["タグを選択"] } } }, { "l": "ka", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ka_GE", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "kab", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "kk", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "km", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "kn", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ko", "t": { "{tag} (restricted)": { "v": ["{tag}(제한)"] }, "Select a tag": { "v": [""] } } }, { "l": "la", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "lb", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "lo", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "lt_LT", "t": { "{tag} (restricted)": { "v": ["{tag} (apribota)"] }, "Select a tag": { "v": ["Pasirinkti žymę"] } } }, { "l": "lv", "t": { "{tag} (restricted)": { "v": ["{tag} (ierobežots)"] }, "Select a tag": { "v": ["Izvēlēties birku"] } } }, { "l": "mk", "t": { "{tag} (restricted)": { "v": ["{tag} (ограничено)"] }, "Select a tag": { "v": ["Избери ознака"] } } }, { "l": "mn", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "mr", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ms_MY", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "my", "t": { "{tag} (restricted)": { "v": ["{tag} (ကန့်သတ်)"] }, "Select a tag": { "v": ["tag ရွေးချယ်ရန်"] } } }, { "l": "nb", "t": { "{tag} (restricted)": { "v": ["{tag} (beskyttet)"] }, "Select a tag": { "v": ["Velg en merkelapp"] } } }, { "l": "ne", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "nl", "t": { "{tag} (restricted)": { "v": ["{tag} (beperkt)"] }, "Select a tag": { "v": ["Selecteer een label"] } } }, { "l": "nn_NO", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "oc", "t": { "{tag} (restricted)": { "v": ["{tag} (limit)"] }, "Select a tag": { "v": ["Seleccionar una etiqueta"] } } }, { "l": "pl", "t": { "{tag} (restricted)": { "v": ["{tag} (ograniczona)"] }, "Select a tag": { "v": ["Wybierz etykietę"] } } }, { "l": "ps", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "pt_BR", "t": { "{tag} (restricted)": { "v": ["{tag} (restrito) "] }, "Select a tag": { "v": ["Selecionar uma tag"] } } }, { "l": "pt_PT", "t": { "{tag} (restricted)": { "v": ["{tag} (restrito)"] }, "Select a tag": { "v": ["Selecionar uma etiqueta"] } } }, { "l": "ro", "t": { "{tag} (restricted)": { "v": ["{tag} (restricționat)"] }, "Select a tag": { "v": ["Selectați o etichetă"] } } }, { "l": "ru", "t": { "{tag} (restricted)": { "v": ["{tag} (ограниченное)"] }, "Select a tag": { "v": ["Выберите метку"] } } }, { "l": "sc", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "si", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "sk", "t": { "{tag} (restricted)": { "v": ["{tag} (obmedzený)"] }, "Select a tag": { "v": ["Vybrať štítok"] } } }, { "l": "sl", "t": { "{tag} (restricted)": { "v": ["{tag} (omejeno)"] }, "Select a tag": { "v": ["Izbor oznake"] } } }, { "l": "sq", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "sr", "t": { "{tag} (restricted)": { "v": ["{tag} (ограничено)"] }, "Select a tag": { "v": ["Изаберите ознаку"] } } }, { "l": "sr@latin", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "sv", "t": { "{tag} (restricted)": { "v": ["{tag} (begränsad)"] }, "Select a tag": { "v": ["Välj en tag"] } } }, { "l": "sw", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "ta", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "th", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "tk", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "tr", "t": { "{tag} (restricted)": { "v": ["{tag} (kısıtlı)"] }, "Select a tag": { "v": ["Bir etiket seçin"] } } }, { "l": "ug", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "uk", "t": { "{tag} (restricted)": { "v": ["{tag} (обмежений)"] }, "Select a tag": { "v": ["Виберіть позначку"] } } }, { "l": "ur_PK", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "uz", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "vi", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }, { "l": "zh_CN", "t": { "{tag} (restricted)": { "v": ["{tag} （受限）"] }, "Select a tag": { "v": ["选择一个标签"] } } }, { "l": "zh_HK", "t": { "{tag} (restricted)": { "v": ["{tag} (受限)"] }, "Select a tag": { "v": ["選擇標籤"] } } }, { "l": "zh_TW", "t": { "{tag} (restricted)": { "v": ["{tag}（受限）"] }, "Select a tag": { "v": ["選擇標籤"] } } }, { "l": "zu_ZA", "t": { "{tag} (restricted)": { "v": [""] }, "Select a tag": { "v": [""] } } }];
const t1 = [{ "l": "af", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ar", "t": { "A color with a HEX value {hex}": { "v": ["لون بالقيمة الست عشرية {hex}"] }, "Back": { "v": ["عودة"] }, "Choose": { "v": ["إختَر"] }, "More options": { "v": ["خيارات أخرى ..."] } } }, { "l": "ast", "t": { "A color with a HEX value {hex}": { "v": ["Un color con un valor HEX {hex}"] }, "Back": { "v": ["Atrás"] }, "Choose": { "v": ["Escoyer"] }, "More options": { "v": ["Más opciones"] } } }, { "l": "az", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "be", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "bg", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "bn_BD", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "br", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Dibab"] }, "More options": { "v": [""] } } }, { "l": "bs", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ca", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Tria"] }, "More options": { "v": [""] } } }, { "l": "cs", "t": { "Back": { "v": ["Zpět"] }, "Choose": { "v": ["Zvolit"] }, "More options": { "v": ["Další volby"] } } }, { "l": "cs_CZ", "t": { "A color with a HEX value {hex}": { "v": ["Barva vyjádřená HEX hodnotou {hex}"] }, "Back": { "v": ["Zpět"] }, "Choose": { "v": ["Zvolit"] }, "Color picker": { "v": ["Výběr barev"] }, "More options": { "v": ["Další volby"] } } }, { "l": "cy_GB", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "da", "t": { "Back": { "v": ["Tilbage"] }, "Choose": { "v": ["Vælg"] }, "More options": { "v": [""] } } }, { "l": "de", "t": { "A color with a HEX value {hex}": { "v": ["Eine Farbe mit einem HEX-Wert {hex}"] }, "Back": { "v": ["Zurück"] }, "Choose": { "v": ["Auswählen"] }, "More options": { "v": ["Weitere Optionen"] } } }, { "l": "de_DE", "t": { "A color with a HEX value {hex}": { "v": ["Eine Farbe mit einem HEX-Wert {hex}"] }, "Back": { "v": ["Zurück"] }, "Choose": { "v": ["Auswählen"] }, "Color picker": { "v": ["Farbauswahl"] }, "More options": { "v": ["Mehr Optionen"] } } }, { "l": "el", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Επιλογή"] }, "More options": { "v": [""] } } }, { "l": "en_GB", "t": { "Back": { "v": ["Back"] }, "Choose": { "v": ["Choose"] }, "More options": { "v": ["More options"] } } }, { "l": "eo", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Elektu"] }, "More options": { "v": [""] } } }, { "l": "es", "t": { "A color with a HEX value {hex}": { "v": ["Un color con un valor HEX {hex}"] }, "Back": { "v": ["Atrás"] }, "Choose": { "v": ["Escoger"] }, "Color picker": { "v": ["Selector de color"] }, "More options": { "v": ["Más opciones"] } } }, { "l": "es_419", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_AR", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_CL", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_CO", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_CR", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_DO", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_EC", "t": { "Back": { "v": ["Atrás"] }, "Choose": { "v": ["Elegir"] }, "More options": { "v": ["Más opciones"] } } }, { "l": "es_GT", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_HN", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_MX", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_NI", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_PA", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_PE", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_PR", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_PY", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_SV", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "es_UY", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "et_EE", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "eu", "t": { "Back": { "v": ["Atzera"] }, "Choose": { "v": ["Aukeratu"] }, "More options": { "v": ["Aukera gehiago"] } } }, { "l": "fa", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "fi", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Valitse"] }, "More options": { "v": [""] } } }, { "l": "fo", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "fr", "t": { "A color with a HEX value {hex}": { "v": ["Une couleur de valeur HEX {hex}"] }, "Back": { "v": ["Retour"] }, "Choose": { "v": ["Choisir"] }, "More options": { "v": ["Plus d'options"] } } }, { "l": "gd", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "gl", "t": { "A color with a HEX value {hex}": { "v": ["Unha cor cun valor HEX {hex}"] }, "Back": { "v": ["Atrás"] }, "Choose": { "v": ["Escoller"] }, "Color picker": { "v": ["Selector de cores"] }, "More options": { "v": ["Máis opcións"] } } }, { "l": "he", "t": { "Back": { "v": ["חזרה"] }, "Choose": { "v": ["בחירה"] }, "More options": { "v": ["אפשרויות נוספות"] } } }, { "l": "hi_IN", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "hr", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "hsb", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "hu", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Válassszon"] }, "More options": { "v": [""] } } }, { "l": "hy", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ia", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "id", "t": { "A color with a HEX value {hex}": { "v": ["Warna dengan nilai HEX {hex}"] }, "Back": { "v": ["Kembali"] }, "Choose": { "v": ["Pilih"] }, "More options": { "v": ["Opsi lainnya"] } } }, { "l": "ig", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "is", "t": { "A color with a HEX value {hex}": { "v": ["Litur með HEX-gildi {hex}"] }, "Back": { "v": ["Til baka"] }, "Choose": { "v": ["Velja"] }, "More options": { "v": ["Fleiri valkostir"] } } }, { "l": "it", "t": { "A color with a HEX value {hex}": { "v": ["Un colore con un valore HEX {hex}"] }, "Back": { "v": ["Indietro"] }, "Choose": { "v": ["Scegli"] }, "More options": { "v": ["Altre opzioni"] } } }, { "l": "ja", "t": { "Back": { "v": [""] }, "Choose": { "v": ["選択"] }, "More options": { "v": [""] } } }, { "l": "ka", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ka_GE", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "kab", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "kk", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "km", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "kn", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ko", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "la", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "lb", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "lo", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "lt_LT", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Pasirinkti"] }, "More options": { "v": [""] } } }, { "l": "lv", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Izvēlēties"] }, "More options": { "v": [""] } } }, { "l": "mk", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Избери"] }, "More options": { "v": [""] } } }, { "l": "mn", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "mr", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ms_MY", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "my", "t": { "Back": { "v": [""] }, "Choose": { "v": ["ရွေးချယ်ရန်"] }, "More options": { "v": [""] } } }, { "l": "nb", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Velg"] }, "More options": { "v": [""] } } }, { "l": "ne", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "nl", "t": { "Back": { "v": ["Terug"] }, "Choose": { "v": ["Kies"] }, "More options": { "v": ["Meer opties"] } } }, { "l": "nn_NO", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "oc", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Causir"] }, "More options": { "v": [""] } } }, { "l": "pl", "t": { "A color with a HEX value {hex}": { "v": ["Kolor o wartości HEX {hex}"] }, "Back": { "v": ["Wstecz"] }, "Choose": { "v": ["Wybierz"] }, "More options": { "v": ["Więcej opcji"] } } }, { "l": "ps", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "pt_BR", "t": { "A color with a HEX value {hex}": { "v": ["Uma cor com valor HEX {hex}"] }, "Back": { "v": ["Voltar"] }, "Choose": { "v": ["Escolher"] }, "More options": { "v": ["Mais opções"] } } }, { "l": "pt_PT", "t": { "Back": { "v": ["Voltar atrás"] }, "Choose": { "v": ["Escolher"] }, "More options": { "v": ["Mais opções"] } } }, { "l": "ro", "t": { "A color with a HEX value {hex}": { "v": ["O culoare în HEX value {hex}"] }, "Back": { "v": ["Înapoi"] }, "Choose": { "v": ["Alegeți"] }, "More options": { "v": ["Mai multe opțiuni"] } } }, { "l": "ru", "t": { "Back": { "v": ["Назад"] }, "Choose": { "v": ["Выберите"] }, "More options": { "v": ["Больше опций"] } } }, { "l": "sc", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "si", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "sk", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Vybrať"] }, "More options": { "v": [""] } } }, { "l": "sl", "t": { "Back": { "v": [""] }, "Choose": { "v": ["Izbor"] }, "More options": { "v": [""] } } }, { "l": "sq", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "sr", "t": { "A color with a HEX value {hex}": { "v": ["Боја са HEX вредности {hex}"] }, "Back": { "v": ["Назад"] }, "Choose": { "v": ["Изаберите"] }, "Color picker": { "v": ["Бирач боје"] }, "More options": { "v": ["Још опција"] } } }, { "l": "sr@latin", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "sv", "t": { "A color with a HEX value {hex}": { "v": ["En färg med ett HEX-värde {hex}"] }, "Back": { "v": ["Tillbaka"] }, "Choose": { "v": ["Välj"] }, "Color picker": { "v": ["Färgväljare"] }, "More options": { "v": ["Fler alternativ"] } } }, { "l": "sw", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "ta", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "th", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "tk", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "tr", "t": { "A color with a HEX value {hex}": { "v": ["{hex} onaltılık değeri ile bir renk "] }, "Back": { "v": ["Geri"] }, "Choose": { "v": ["Seçin"] }, "Color picker": { "v": ["Renk seçici"] }, "More options": { "v": ["Diğer seçenekler"] } } }, { "l": "ug", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "uk", "t": { "A color with a HEX value {hex}": { "v": ["Колір у форматі HEX {hex}"] }, "Back": { "v": ["Назад"] }, "Choose": { "v": ["Виберіть"] }, "More options": { "v": ["Більше об'єктів"] } } }, { "l": "ur_PK", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "uz", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "vi", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }, { "l": "zh_CN", "t": { "Back": { "v": [""] }, "Choose": { "v": ["选择"] }, "More options": { "v": [""] } } }, { "l": "zh_HK", "t": { "Back": { "v": ["返回"] }, "Choose": { "v": ["選擇"] }, "More options": { "v": ["更多選項"] } } }, { "l": "zh_TW", "t": { "Back": { "v": ["返回"] }, "Choose": { "v": ["選擇"] }, "More options": { "v": ["更多選項"] } } }, { "l": "zu_ZA", "t": { "Back": { "v": [""] }, "Choose": { "v": [""] }, "More options": { "v": [""] } } }];
const t2 = [{ "l": "af", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ar", "t": { "a few seconds ago": { "v": ["منذ عدة ثوانٍ مضت"] }, "sec. ago": { "v": ["ثانية مضت"] }, "seconds ago": { "v": ["ثوانٍ مضت"] } } }, { "l": "ast", "t": { "a few seconds ago": { "v": ["hai unos segundos"] }, "sec. ago": { "v": ["hai segs"] }, "seconds ago": { "v": ["hai segundos"] } } }, { "l": "az", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "be", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "bg", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "bn_BD", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "br", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "bs", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ca", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "cs", "t": { "a few seconds ago": { "v": ["před několika sekundami"] }, "sec. ago": { "v": ["sek. před"] }, "seconds ago": { "v": ["sekund předtím"] } } }, { "l": "cs_CZ", "t": { "a few seconds ago": { "v": ["před několika sekundami"] }, "sec. ago": { "v": ["sek. před"] }, "seconds ago": { "v": ["sekund předtím"] } } }, { "l": "cy_GB", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "da", "t": { "a few seconds ago": { "v": ["et par sekunder siden"] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "de", "t": { "a few seconds ago": { "v": ["vor ein paar Sekunden"] }, "sec. ago": { "v": ["Sek. zuvor"] }, "seconds ago": { "v": ["Sekunden zuvor"] } } }, { "l": "de_DE", "t": { "a few seconds ago": { "v": ["vor ein paar Sekunden"] }, "sec. ago": { "v": ["Sek. zuvor"] }, "seconds ago": { "v": ["Sekunden zuvor"] } } }, { "l": "el", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "en_GB", "t": { "a few seconds ago": { "v": ["a few seconds ago"] }, "sec. ago": { "v": ["sec. ago"] }, "seconds ago": { "v": ["seconds ago"] } } }, { "l": "eo", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es", "t": { "a few seconds ago": { "v": ["hace unos pocos segundos"] }, "sec. ago": { "v": ["hace segundos"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "es_419", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_AR", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_CL", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_CO", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_CR", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_DO", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_EC", "t": { "a few seconds ago": { "v": ["hace unos segundos"] }, "sec. ago": { "v": ["hace segundos"] }, "seconds ago": { "v": ["Segundos atrás"] } } }, { "l": "es_GT", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_HN", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_MX", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_NI", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PA", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PE", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PR", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_PY", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_SV", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "es_UY", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "et_EE", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "eu", "t": { "a few seconds ago": { "v": ["duela segundo batzuk"] }, "sec. ago": { "v": ["duela seg."] }, "seconds ago": { "v": ["duela segundo"] } } }, { "l": "fa", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "fi", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "fo", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "fr", "t": { "a few seconds ago": { "v": ["il y a quelques instants"] }, "sec. ago": { "v": ["il y a sec."] }, "seconds ago": { "v": ["il y a secondes"] } } }, { "l": "gd", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "gl", "t": { "a few seconds ago": { "v": ["hai uns segundos"] }, "sec. ago": { "v": ["segs. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "he", "t": { "a few seconds ago": { "v": ["לפני מספר שניות"] }, "sec. ago": { "v": ["לפני מספר שניות"] }, "seconds ago": { "v": ["לפני מס׳ שניות"] } } }, { "l": "hi_IN", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hr", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hsb", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hu", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "hy", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ia", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "id", "t": { "a few seconds ago": { "v": ["beberapa detik yang lalu"] }, "sec. ago": { "v": ["dtk. yang lalu"] }, "seconds ago": { "v": ["beberapa detik lalu"] } } }, { "l": "ig", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "is", "t": { "a few seconds ago": { "v": ["fyrir örfáum sekúndum síðan"] }, "sec. ago": { "v": ["sek. síðan"] }, "seconds ago": { "v": ["sekúndum síðan"] } } }, { "l": "it", "t": { "a few seconds ago": { "v": ["pochi secondi fa"] }, "sec. ago": { "v": ["sec. fa"] }, "seconds ago": { "v": ["secondi fa"] } } }, { "l": "ja", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ka", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ka_GE", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "kab", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "kk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "km", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "kn", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ko", "t": { "a few seconds ago": { "v": ["방금 전"] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "la", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lb", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lo", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lt_LT", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "lv", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "mk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "mn", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "mr", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ms_MY", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "my", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "nb", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ne", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "nl", "t": { "a few seconds ago": { "v": ["enkele seconden terug"] }, "sec. ago": { "v": ["sec. geleden"] }, "seconds ago": { "v": ["seconden geleden"] } } }, { "l": "nn_NO", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "oc", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "pl", "t": { "a few seconds ago": { "v": ["kilka sekund temu"] }, "sec. ago": { "v": ["sek. temu"] }, "seconds ago": { "v": ["sekund temu"] } } }, { "l": "ps", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "pt_BR", "t": { "a few seconds ago": { "v": ["Alguns segundos atrás"] }, "sec. ago": { "v": ["seg. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "pt_PT", "t": { "a few seconds ago": { "v": ["alguns segundos atrás"] }, "sec. ago": { "v": ["seg. atrás"] }, "seconds ago": { "v": ["segundos atrás"] } } }, { "l": "ro", "t": { "a few seconds ago": { "v": ["acum câteva secunde"] }, "sec. ago": { "v": ["sec. în urmă"] }, "seconds ago": { "v": ["secunde în urmă"] } } }, { "l": "ru", "t": { "a few seconds ago": { "v": ["несколько секунд назад"] }, "sec. ago": { "v": ["сек. назад"] }, "seconds ago": { "v": ["секунд назад"] } } }, { "l": "sc", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "si", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sl", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sq", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sr", "t": { "a few seconds ago": { "v": ["пре неколико секунди"] }, "sec. ago": { "v": ["сек. раније"] }, "seconds ago": { "v": ["секунди раније"] } } }, { "l": "sr@latin", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "sv", "t": { "a few seconds ago": { "v": ["några sekunder sedan"] }, "sec. ago": { "v": ["sek. sedan"] }, "seconds ago": { "v": ["sekunder sedan"] } } }, { "l": "sw", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "ta", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "th", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "tk", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "tr", "t": { "a few seconds ago": { "v": ["birkaç saniye önce"] }, "sec. ago": { "v": ["sn. önce"] }, "seconds ago": { "v": ["saniye önce"] } } }, { "l": "ug", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "uk", "t": { "a few seconds ago": { "v": ["декілька секунд тому"] }, "sec. ago": { "v": ["с тому"] }, "seconds ago": { "v": ["с тому"] } } }, { "l": "ur_PK", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "uz", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "vi", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "zh_CN", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }, { "l": "zh_HK", "t": { "a few seconds ago": { "v": ["幾秒前"] }, "sec. ago": { "v": ["秒前"] }, "seconds ago": { "v": ["秒前"] } } }, { "l": "zh_TW", "t": { "a few seconds ago": { "v": ["幾秒前"] }, "sec. ago": { "v": ["秒前"] }, "seconds ago": { "v": ["秒前"] } } }, { "l": "zu_ZA", "t": { "a few seconds ago": { "v": [""] }, "sec. ago": { "v": [""] }, "seconds ago": { "v": [""] } } }];
const t3 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Acapulco": { "v": ["بازلائي مطفي"] }, "Blue Violet": { "v": ["بنفسجي مشعشع"] }, "Boston Blue": { "v": ["سماوي مطفي"] }, "Deluge": { "v": ["بنفسجي مطفي"] }, "Feldspar": { "v": ["وردي صخري"] }, "Gold": { "v": ["ذهبي"] }, "Mariner": { "v": ["أزرق بحري"] }, "Nextcloud blue": { "v": ["أزرق نكست كلاود"] }, "Olivine": { "v": ["زيتي"] }, "Purple": { "v": ["بنفسجي"] }, "Rosy brown": { "v": ["بُنِّي زهري"] }, "Whiskey": { "v": ["نبيذي"] } } }, { "l": "ast", "t": { "Acapulco": { "v": ["Acapulcu"] }, "Blue Violet": { "v": ["Viola azulao"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Oru"] }, "Mariner": { "v": ["Marineru"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Moráu"] }, "Rosy brown": { "v": ["Marrón arrosao"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": {} }, { "l": "cs_CZ", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Modrofialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živicová"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námořnická"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivínová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Růžovohnědá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": {} }, { "l": "de", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blau Violett"] }, "Boston Blue": { "v": ["Boston-Blau"] }, "Deluge": { "v": ["Sintflut"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Seemann"] }, "Nextcloud blue": { "v": ["Nextcloud Blau"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosiges Braun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "de_DE", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blau Violett"] }, "Boston Blue": { "v": ["Boston-Blau"] }, "Deluge": { "v": ["Sintflut"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Seemann"] }, "Nextcloud blue": { "v": ["Nextcloud Blau"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosiges Braun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "el", "t": {} }, { "l": "en_GB", "t": {} }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": {} }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": {} }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": {} }, { "l": "eu", "t": {} }, { "l": "fa", "t": {} }, { "l": "fi", "t": {} }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Gold": { "v": ["Doré"] }, "Nextcloud blue": { "v": ["Bleu Nextcloud"] }, "Purple": { "v": ["Violet"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Azul violeta"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Marino"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Pardo rosado"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "Gold": { "v": ["Emas"] }, "Nextcloud blue": { "v": ["Biru Nextcloud"] }, "Purple": { "v": ["Ungu"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Gold": { "v": ["Gull"] }, "Nextcloud blue": { "v": ["Nextcloud blátt"] }, "Purple": { "v": ["Purpurablátt"] } } }, { "l": "it", "t": { "Gold": { "v": ["Oro"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Purple": { "v": ["Viola"] } } }, { "l": "ja", "t": {} }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": {} }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": {} }, { "l": "ne", "t": {} }, { "l": "nl", "t": {} }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Niebieski fiolet"] }, "Boston Blue": { "v": ["Błękit Bostonu"] }, "Deluge": { "v": ["Potop"] }, "Feldspar": { "v": ["Skaleń"] }, "Gold": { "v": ["Złote"] }, "Mariner": { "v": ["Marynarz"] }, "Nextcloud blue": { "v": ["Niebieskie Nextcloud"] }, "Olivine": { "v": ["Oliwin"] }, "Purple": { "v": ["Fioletowy"] }, "Rosy brown": { "v": ["Różowy brąz"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Violeta Azul"] }, "Deluge": { "v": ["Dilúvio"] }, "Feldspar": { "v": ["Feldspato"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Marinheiro"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Roxo"] }, "Rosy brown": { "v": ["Castanho rosado"] }, "Whiskey": { "v": ["Uísque"] } } }, { "l": "pt_PT", "t": {} }, { "l": "ro", "t": { "Gold": { "v": ["Aur"] }, "Nextcloud blue": { "v": ["Nextcloud albastru"] }, "Purple": { "v": ["Purpuriu"] } } }, { "l": "ru", "t": {} }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": {} }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Acapulco": { "v": ["Акапулко"] }, "Blue Violet": { "v": ["Плаво љубичаста"] }, "Boston Blue": { "v": ["Бостон плава"] }, "Deluge": { "v": ["Поплава"] }, "Feldspar": { "v": ["Фелдспар"] }, "Gold": { "v": ["Злато"] }, "Mariner": { "v": ["Морнар"] }, "Nextcloud blue": { "v": ["Nextcloud плава"] }, "Olivine": { "v": ["Маслинаста"] }, "Purple": { "v": ["Пурпурна"] }, "Rosy brown": { "v": ["Роси браон"] }, "Whiskey": { "v": ["Виски"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blåviolett"] }, "Boston Blue": { "v": ["Bostonblå"] }, "Deluge": { "v": ["Skyfallsblå"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Guld"] }, "Mariner": { "v": ["Marinblå"] }, "Nextcloud blue": { "v": ["Nextcloud-blå"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosabrun"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Mavi mor"] }, "Boston Blue": { "v": ["Boston mavisi"] }, "Deluge": { "v": ["Sel"] }, "Feldspar": { "v": ["Feldispat"] }, "Gold": { "v": ["Altın"] }, "Mariner": { "v": ["Denizci"] }, "Nextcloud blue": { "v": ["Nextcloud mavi"] }, "Olivine": { "v": ["Zeytinlik"] }, "Purple": { "v": ["Mor"] }, "Rosy brown": { "v": ["Kırmızımsı kahverengi"] }, "Whiskey": { "v": ["Viski"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Gold": { "v": ["Золотий"] }, "Nextcloud blue": { "v": ["Блакитний Nextcloud"] }, "Purple": { "v": ["Фіолетовий"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": {} }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": {} }, { "l": "zh_HK", "t": {} }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t4 = [{ "l": "af", "t": { "Actions": { "v": [""] } } }, { "l": "ar", "t": { "Actions": { "v": ["إجراءات"] } } }, { "l": "ast", "t": { "Actions": { "v": ["Aiciones"] } } }, { "l": "az", "t": { "Actions": { "v": [""] } } }, { "l": "be", "t": { "Actions": { "v": [""] } } }, { "l": "bg", "t": { "Actions": { "v": [""] } } }, { "l": "bn_BD", "t": { "Actions": { "v": [""] } } }, { "l": "br", "t": { "Actions": { "v": ["Oberioù"] } } }, { "l": "bs", "t": { "Actions": { "v": [""] } } }, { "l": "ca", "t": { "Actions": { "v": ["Accions"] } } }, { "l": "cs", "t": { "Actions": { "v": ["Akce"] } } }, { "l": "cs_CZ", "t": { "Actions": { "v": ["Akce"] } } }, { "l": "cy_GB", "t": { "Actions": { "v": [""] } } }, { "l": "da", "t": { "Actions": { "v": ["Handlinger"] } } }, { "l": "de", "t": { "Actions": { "v": ["Aktionen"] } } }, { "l": "de_DE", "t": { "Actions": { "v": ["Aktionen"] } } }, { "l": "el", "t": { "Actions": { "v": ["Ενέργειες"] } } }, { "l": "en_GB", "t": { "Actions": { "v": ["Actions"] } } }, { "l": "eo", "t": { "Actions": { "v": ["Agoj"] } } }, { "l": "es", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_419", "t": { "Actions": { "v": [""] } } }, { "l": "es_AR", "t": { "Actions": { "v": [""] } } }, { "l": "es_CL", "t": { "Actions": { "v": [""] } } }, { "l": "es_CO", "t": { "Actions": { "v": [""] } } }, { "l": "es_CR", "t": { "Actions": { "v": [""] } } }, { "l": "es_DO", "t": { "Actions": { "v": [""] } } }, { "l": "es_EC", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_GT", "t": { "Actions": { "v": [""] } } }, { "l": "es_HN", "t": { "Actions": { "v": [""] } } }, { "l": "es_MX", "t": { "Actions": { "v": [""] } } }, { "l": "es_NI", "t": { "Actions": { "v": [""] } } }, { "l": "es_PA", "t": { "Actions": { "v": [""] } } }, { "l": "es_PE", "t": { "Actions": { "v": [""] } } }, { "l": "es_PR", "t": { "Actions": { "v": [""] } } }, { "l": "es_PY", "t": { "Actions": { "v": [""] } } }, { "l": "es_SV", "t": { "Actions": { "v": [""] } } }, { "l": "es_UY", "t": { "Actions": { "v": [""] } } }, { "l": "et_EE", "t": { "Actions": { "v": [""] } } }, { "l": "eu", "t": { "Actions": { "v": ["Ekintzak"] } } }, { "l": "fa", "t": { "Actions": { "v": [""] } } }, { "l": "fi", "t": { "Actions": { "v": ["Toiminnot"] } } }, { "l": "fo", "t": { "Actions": { "v": [""] } } }, { "l": "fr", "t": { "Actions": { "v": ["Actions"] } } }, { "l": "gd", "t": { "Actions": { "v": [""] } } }, { "l": "gl", "t": { "Actions": { "v": ["Accións"] } } }, { "l": "he", "t": { "Actions": { "v": ["פעולות"] } } }, { "l": "hi_IN", "t": { "Actions": { "v": [""] } } }, { "l": "hr", "t": { "Actions": { "v": [""] } } }, { "l": "hsb", "t": { "Actions": { "v": [""] } } }, { "l": "hu", "t": { "Actions": { "v": ["Műveletek"] } } }, { "l": "hy", "t": { "Actions": { "v": [""] } } }, { "l": "ia", "t": { "Actions": { "v": [""] } } }, { "l": "id", "t": { "Actions": { "v": ["Tindakan"] } } }, { "l": "ig", "t": { "Actions": { "v": [""] } } }, { "l": "is", "t": { "Actions": { "v": ["Aðgerðir"] } } }, { "l": "it", "t": { "Actions": { "v": ["Azioni"] } } }, { "l": "ja", "t": { "Actions": { "v": ["操作"] } } }, { "l": "ka", "t": { "Actions": { "v": [""] } } }, { "l": "ka_GE", "t": { "Actions": { "v": [""] } } }, { "l": "kab", "t": { "Actions": { "v": [""] } } }, { "l": "kk", "t": { "Actions": { "v": [""] } } }, { "l": "km", "t": { "Actions": { "v": [""] } } }, { "l": "kn", "t": { "Actions": { "v": [""] } } }, { "l": "ko", "t": { "Actions": { "v": [""] } } }, { "l": "la", "t": { "Actions": { "v": [""] } } }, { "l": "lb", "t": { "Actions": { "v": [""] } } }, { "l": "lo", "t": { "Actions": { "v": [""] } } }, { "l": "lt_LT", "t": { "Actions": { "v": ["Veiksmai"] } } }, { "l": "lv", "t": { "Actions": { "v": [""] } } }, { "l": "mk", "t": { "Actions": { "v": ["Акции"] } } }, { "l": "mn", "t": { "Actions": { "v": [""] } } }, { "l": "mr", "t": { "Actions": { "v": [""] } } }, { "l": "ms_MY", "t": { "Actions": { "v": [""] } } }, { "l": "my", "t": { "Actions": { "v": ["လုပ်ဆောင်ချက်များ"] } } }, { "l": "nb", "t": { "Actions": { "v": ["Handlinger"] } } }, { "l": "ne", "t": { "Actions": { "v": [""] } } }, { "l": "nl", "t": { "Actions": { "v": ["Acties"] } } }, { "l": "nn_NO", "t": { "Actions": { "v": [""] } } }, { "l": "oc", "t": { "Actions": { "v": ["Accions"] } } }, { "l": "pl", "t": { "Actions": { "v": ["Działania"] } } }, { "l": "ps", "t": { "Actions": { "v": [""] } } }, { "l": "pt_BR", "t": { "Actions": { "v": ["Ações"] } } }, { "l": "pt_PT", "t": { "Actions": { "v": ["Ações"] } } }, { "l": "ro", "t": { "Actions": { "v": ["Acțiuni"] } } }, { "l": "ru", "t": { "Actions": { "v": ["Действия "] } } }, { "l": "sc", "t": { "Actions": { "v": [""] } } }, { "l": "si", "t": { "Actions": { "v": [""] } } }, { "l": "sk", "t": { "Actions": { "v": ["Akcie"] } } }, { "l": "sl", "t": { "Actions": { "v": ["Dejanja"] } } }, { "l": "sq", "t": { "Actions": { "v": [""] } } }, { "l": "sr", "t": { "Actions": { "v": ["Радње"] } } }, { "l": "sr@latin", "t": { "Actions": { "v": [""] } } }, { "l": "sv", "t": { "Actions": { "v": ["Åtgärder"] } } }, { "l": "sw", "t": { "Actions": { "v": [""] } } }, { "l": "ta", "t": { "Actions": { "v": [""] } } }, { "l": "th", "t": { "Actions": { "v": [""] } } }, { "l": "tk", "t": { "Actions": { "v": [""] } } }, { "l": "tr", "t": { "Actions": { "v": ["İşlemler"] } } }, { "l": "ug", "t": { "Actions": { "v": [""] } } }, { "l": "uk", "t": { "Actions": { "v": ["Дії"] } } }, { "l": "ur_PK", "t": { "Actions": { "v": [""] } } }, { "l": "uz", "t": { "Actions": { "v": [""] } } }, { "l": "vi", "t": { "Actions": { "v": [""] } } }, { "l": "zh_CN", "t": { "Actions": { "v": ["行为"] } } }, { "l": "zh_HK", "t": { "Actions": { "v": ["動作"] } } }, { "l": "zh_TW", "t": { "Actions": { "v": ["動作"] } } }, { "l": "zu_ZA", "t": { "Actions": { "v": [""] } } }];
const t5 = [{ "l": "af", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ar", "t": { 'Actions for item with name "{name}"': { "v": ['إجراءات على العنصر المُسمَّى "{name}"'] } } }, { "l": "ast", "t": { 'Actions for item with name "{name}"': { "v": ["Aiciones pal elementu col nome «{name}»"] } } }, { "l": "az", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "be", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "bg", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "bn_BD", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "br", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "bs", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ca", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "cs", "t": { 'Actions for item with name "{name}"': { "v": ["Akce pro položku s názvem „{name}“"] } } }, { "l": "cs_CZ", "t": { 'Actions for item with name "{name}"': { "v": ["Akce pro položku s názvem „{name}“"] } } }, { "l": "cy_GB", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "da", "t": { 'Actions for item with name "{name}"': { "v": ['Handlinger for element med navnet "{name}"'] } } }, { "l": "de", "t": { 'Actions for item with name "{name}"': { "v": ['Aktionen für das Element "{name}“'] } } }, { "l": "de_DE", "t": { 'Actions for item with name "{name}"': { "v": ['Aktionen für Element mit dem Namen "{name}“'] } } }, { "l": "el", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "en_GB", "t": { 'Actions for item with name "{name}"': { "v": ['Actions for item with name "{name}"'] } } }, { "l": "eo", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es", "t": { 'Actions for item with name "{name}"': { "v": ['Acciones para el ítem con nombre "{name}"'] } } }, { "l": "es_419", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_AR", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_CL", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_CO", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_CR", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_DO", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_EC", "t": { 'Actions for item with name "{name}"': { "v": ['Acciones para el elemento con nombre "{name}"'] } } }, { "l": "es_GT", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_HN", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_MX", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_NI", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_PA", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_PE", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_PR", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_PY", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_SV", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "es_UY", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "et_EE", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "eu", "t": { 'Actions for item with name "{name}"': { "v": ['"{name}" izeneko elementuaren ekintzak'] } } }, { "l": "fa", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "fi", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "fo", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "fr", "t": { 'Actions for item with name "{name}"': { "v": [`Actions de l'entrée avec le nom "{name}"`] } } }, { "l": "gd", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "gl", "t": { 'Actions for item with name "{name}"': { "v": ["Accións para o elemento co nome «{name}»"] } } }, { "l": "he", "t": { 'Actions for item with name "{name}"': { "v": ["פעולות לפריט בשם „{name}”"] } } }, { "l": "hi_IN", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "hr", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "hsb", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "hu", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "hy", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ia", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "id", "t": { 'Actions for item with name "{name}"': { "v": ['Tindakan untuk item dengan nama "{name}"'] } } }, { "l": "ig", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "is", "t": { 'Actions for item with name "{name}"': { "v": ['Aðgerð fyrir atriði með heitið "{name}"'] } } }, { "l": "it", "t": { 'Actions for item with name "{name}"': { "v": [`Azioni per l'elemento con il nome "{nome}"`] } } }, { "l": "ja", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ka", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ka_GE", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "kab", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "kk", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "km", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "kn", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ko", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "la", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "lb", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "lo", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "lt_LT", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "lv", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "mk", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "mn", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "mr", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ms_MY", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "my", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "nb", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ne", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "nl", "t": { 'Actions for item with name "{name}"': { "v": ['Actie voor item met naam "{name}"'] } } }, { "l": "nn_NO", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "oc", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "pl", "t": { 'Actions for item with name "{name}"': { "v": ['Akcje dla elementu o nazwie "{name}"'] } } }, { "l": "ps", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "pt_BR", "t": { 'Actions for item with name "{name}"': { "v": ['Ações para item com nome "{name}"'] } } }, { "l": "pt_PT", "t": { 'Actions for item with name "{name}"': { "v": ['Ações para objeto com o nome "[name]"'] } } }, { "l": "ro", "t": { 'Actions for item with name "{name}"': { "v": ['Acțiuni pentru elementul cu numele "{name}"'] } } }, { "l": "ru", "t": { 'Actions for item with name "{name}"': { "v": ['Действия для элемента с названием "{name}"'] } } }, { "l": "sc", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "si", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "sk", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "sl", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "sq", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "sr", "t": { 'Actions for item with name "{name}"': { "v": ["Радње за ставку под називом „{name}”"] } } }, { "l": "sr@latin", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "sv", "t": { 'Actions for item with name "{name}"': { "v": ['Åtgärder för objekt med namn "{name}"'] } } }, { "l": "sw", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "ta", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "th", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "tk", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "tr", "t": { 'Actions for item with name "{name}"': { "v": ["{name} adındaki öge için işlemler"] } } }, { "l": "ug", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "uk", "t": { 'Actions for item with name "{name}"': { "v": [`Дії для об'єкту "{name}"`] } } }, { "l": "ur_PK", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "uz", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "vi", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "zh_CN", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }, { "l": "zh_HK", "t": { 'Actions for item with name "{name}"': { "v": ["名稱為「{name}」項目的操作"] } } }, { "l": "zh_TW", "t": { 'Actions for item with name "{name}"': { "v": ["名稱為「{name}」項目的動作"] } } }, { "l": "zu_ZA", "t": { 'Actions for item with name "{name}"': { "v": [""] } } }];
const t6 = [{ "l": "af", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ar", "t": { "Activities": { "v": ["سجل الحركات"] }, "Animals & Nature": { "v": ["الحيوانات والطبيعة"] }, "Clear search": { "v": ["مَحْوُ البحث"] }, "Custom": { "v": ["مُخصَّص"] }, "Flags": { "v": ["الأعلام"] }, "Food & Drink": { "v": ["الطعام والشراب"] }, "Frequently used": { "v": ["شائعة الاستعمال"] }, "Objects": { "v": ["أشياء"] }, "People & Body": { "v": ["أشخاص و أجسام"] }, "Pick an emoji": { "v": ["إختَر رمز إيموجي emoji"] }, "Search emoji": { "v": ["البحث عن إيموجي emoji"] }, "Search results": { "v": ["نتائج البحث"] }, "Selected": { "v": ["مُحدّدة"] }, "Smileys & Emotion": { "v": ["وجوهٌ ضاحكة و مشاعر"] }, "Symbols": { "v": ["رموز"] }, "Travel & Places": { "v": ["سفر و أماكن"] } } }, { "l": "ast", "t": { "Activities": { "v": ["Actividaes"] }, "Animals & Nature": { "v": ["Animales y natura"] }, "Clear search": { "v": ["Borrar la busca"] }, "Custom": { "v": ["Personalizar"] }, "Flags": { "v": ["Banderes"] }, "Food & Drink": { "v": ["Cómida y bébora"] }, "Frequently used": { "v": ["D'usu frecuente"] }, "Objects": { "v": ["Oxetos"] }, "People & Body": { "v": ["Persones y cuerpu"] }, "Pick an emoji": { "v": ["Escueyi un fustaxe"] }, "Search emoji": { "v": ["Buscar nos fustaxes"] }, "Search results": { "v": ["Resultaos de la busca"] }, "Selected": { "v": ["Na seleición"] }, "Smileys & Emotion": { "v": ["Sorrises y emociones"] }, "Symbols": { "v": ["Símbolos"] }, "Travel & Places": { "v": ["Viaxes y llugares"] } } }, { "l": "az", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "be", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "bg", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "bn_BD", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "br", "t": { "Activities": { "v": ["Oberiantizoù"] }, "Animals & Nature": { "v": ["Loened & Natur"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Personelañ"] }, "Flags": { "v": ["Bannieloù"] }, "Food & Drink": { "v": ["Boued & Evajoù"] }, "Frequently used": { "v": ["Implijet alies"] }, "Objects": { "v": ["Traoù"] }, "People & Body": { "v": ["Tud & Korf"] }, "Pick an emoji": { "v": ["Choaz un emoji"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Disoc'hoù an enklask"] }, "Smileys & Emotion": { "v": ["Smileyioù & Fromoù"] }, "Symbols": { "v": ["Arouezioù"] }, "Travel & Places": { "v": ["Beaj & Lec'hioù"] } } }, { "l": "bs", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ca", "t": { "Activities": { "v": ["Activitats"] }, "Animals & Nature": { "v": ["Animals i natura"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Personalitzat"] }, "Flags": { "v": ["Marques"] }, "Food & Drink": { "v": ["Menjar i begudes"] }, "Frequently used": { "v": ["Utilitzats recentment"] }, "Objects": { "v": ["Objectes"] }, "People & Body": { "v": ["Persones i cos"] }, "Pick an emoji": { "v": ["Trieu un emoji"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Resultats de cerca"] }, "Smileys & Emotion": { "v": ["Cares i emocions"] }, "Symbols": { "v": ["Símbols"] }, "Travel & Places": { "v": ["Viatges i llocs"] } } }, { "l": "cs", "t": { "Activities": { "v": ["Aktivity"] }, "Animals & Nature": { "v": ["Zvířata a příroda"] }, "Clear search": { "v": ["Vyčistit vyhledávání"] }, "Custom": { "v": ["Uživatelsky určené"] }, "Flags": { "v": ["Příznaky"] }, "Food & Drink": { "v": ["Jídlo a pití"] }, "Frequently used": { "v": ["Často používané"] }, "Objects": { "v": ["Objekty"] }, "People & Body": { "v": ["Lidé a tělo"] }, "Pick an emoji": { "v": ["Vybrat emoji"] }, "Search emoji": { "v": ["Hledat emoji"] }, "Search results": { "v": ["Výsledky hledání"] }, "Smileys & Emotion": { "v": ["Úsměvy a emoce"] }, "Symbols": { "v": ["Symboly"] }, "Travel & Places": { "v": ["Cestování a místa"] } } }, { "l": "cs_CZ", "t": { "Activities": { "v": ["Aktivity"] }, "Animals & Nature": { "v": ["Zvířata a příroda"] }, "Clear search": { "v": ["Vyčistit vyhledávání"] }, "Custom": { "v": ["Uživatelsky určené"] }, "Dark skin tone": { "v": ["Tmavý tělový tón"] }, "Emoji picker": { "v": ["Výběr emotikon"] }, "Flags": { "v": ["Příznaky"] }, "Food & Drink": { "v": ["Jídlo a pití"] }, "Frequently used": { "v": ["Často používané"] }, "Light skin tone": { "v": ["Světlý tělový tón"] }, "Medium dark skin tone": { "v": ["Středně tmavý tělový tón"] }, "Medium light skin tone": { "v": ["Středně světlý tělový tón"] }, "Medium skin tone": { "v": ["Střední tělový tón"] }, "Neutral skin color": { "v": ["Neutřální tělová barva"] }, "Objects": { "v": ["Objekty"] }, "People & Body": { "v": ["Lidé a tělo"] }, "Pick an emoji": { "v": ["Vybrat emoji"] }, "Search emoji": { "v": ["Hledat emoji"] }, "Search results": { "v": ["Výsledky hledání"] }, "Selected": { "v": ["Vybráno"] }, "Skin tone": { "v": ["Tělový tón"] }, "Smileys & Emotion": { "v": ["Úsměvy a emoce"] }, "Symbols": { "v": ["Symboly"] }, "Travel & Places": { "v": ["Cestování a místa"] } } }, { "l": "cy_GB", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "da", "t": { "Activities": { "v": ["Aktiviteter"] }, "Animals & Nature": { "v": ["Dyr & Natur"] }, "Clear search": { "v": ["Ryd søgning"] }, "Custom": { "v": ["Brugerdefineret"] }, "Flags": { "v": ["Flag"] }, "Food & Drink": { "v": ["Mad & Drikke"] }, "Frequently used": { "v": ["Ofte brugt"] }, "Objects": { "v": ["Objekter"] }, "People & Body": { "v": ["Mennesker & Menneskekroppen"] }, "Pick an emoji": { "v": ["Vælg en emoji"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Søgeresultater"] }, "Smileys & Emotion": { "v": ["Smileys & Emotion"] }, "Symbols": { "v": ["Symboler"] }, "Travel & Places": { "v": ["Rejser & Rejsemål"] } } }, { "l": "de", "t": { "Activities": { "v": ["Aktivitäten"] }, "Animals & Nature": { "v": ["Tiere & Natur"] }, "Clear search": { "v": ["Suche leeren"] }, "Custom": { "v": ["Benutzerdefiniert"] }, "Flags": { "v": ["Flaggen"] }, "Food & Drink": { "v": ["Essen & Trinken"] }, "Frequently used": { "v": ["Häufig verwendet"] }, "Objects": { "v": ["Gegenstände"] }, "People & Body": { "v": ["Menschen & Körper"] }, "Pick an emoji": { "v": ["Ein Emoji auswählen"] }, "Search emoji": { "v": ["Emoji suchen"] }, "Search results": { "v": ["Suchergebnisse"] }, "Selected": { "v": ["Ausgewählt"] }, "Smileys & Emotion": { "v": ["Smileys & Emotionen"] }, "Symbols": { "v": ["Symbole"] }, "Travel & Places": { "v": ["Reisen & Orte"] } } }, { "l": "de_DE", "t": { "Activities": { "v": ["Aktivitäten"] }, "Animals & Nature": { "v": ["Tiere & Natur"] }, "Clear search": { "v": ["Suche leeren"] }, "Custom": { "v": ["Benutzerdefiniert"] }, "Dark skin tone": { "v": ["Dunkler Skin-Farbton"] }, "Emoji picker": { "v": ["Emoji-Auswahl"] }, "Flags": { "v": ["Flaggen"] }, "Food & Drink": { "v": ["Essen & Trinken"] }, "Frequently used": { "v": ["Häufig verwendet"] }, "Light skin tone": { "v": ["Heller Skin-Farbton"] }, "Medium dark skin tone": { "v": ["Mitteldunkler Skin-Farbton"] }, "Medium light skin tone": { "v": ["Mittelheller Skin-Farbton"] }, "Medium skin tone": { "v": ["Mittlerer Skin-Farbton"] }, "Neutral skin color": { "v": ["Neutraler Skin-Farbton"] }, "Objects": { "v": ["Objekte"] }, "People & Body": { "v": ["Menschen & Körper"] }, "Pick an emoji": { "v": ["Ein Emoji auswählen"] }, "Search emoji": { "v": ["Emoji suchen"] }, "Search results": { "v": ["Suchergebnisse"] }, "Selected": { "v": ["Ausgewählt"] }, "Skin tone": { "v": ["Skin-Farbton"] }, "Smileys & Emotion": { "v": ["Smileys & Emotionen"] }, "Symbols": { "v": ["Symbole"] }, "Travel & Places": { "v": ["Reisen & Orte"] } } }, { "l": "el", "t": { "Activities": { "v": ["Δραστηριότητες"] }, "Animals & Nature": { "v": ["Ζώα & Φύση"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Προσαρμογή"] }, "Flags": { "v": ["Σημαίες"] }, "Food & Drink": { "v": ["Φαγητό & Ποτό"] }, "Frequently used": { "v": ["Συχνά χρησιμοποιούμενο"] }, "Objects": { "v": ["Αντικείμενα"] }, "People & Body": { "v": ["Άνθρωποι & Σώμα"] }, "Pick an emoji": { "v": ["Επιλέξτε ένα emoji"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Αποτελέσματα αναζήτησης"] }, "Smileys & Emotion": { "v": ["Φατσούλες & Συναίσθημα"] }, "Symbols": { "v": ["Σύμβολα"] }, "Travel & Places": { "v": ["Ταξίδια & Τοποθεσίες"] } } }, { "l": "en_GB", "t": { "Activities": { "v": ["Activities"] }, "Animals & Nature": { "v": ["Animals & Nature"] }, "Clear search": { "v": ["Clear search"] }, "Custom": { "v": ["Custom"] }, "Flags": { "v": ["Flags"] }, "Food & Drink": { "v": ["Food & Drink"] }, "Frequently used": { "v": ["Frequently used"] }, "Objects": { "v": ["Objects"] }, "People & Body": { "v": ["People & Body"] }, "Pick an emoji": { "v": ["Pick an emoji"] }, "Search emoji": { "v": ["Search emoji"] }, "Search results": { "v": ["Search results"] }, "Selected": { "v": ["Selected"] }, "Smileys & Emotion": { "v": ["Smileys & Emotion"] }, "Symbols": { "v": ["Symbols"] }, "Travel & Places": { "v": ["Travel & Places"] } } }, { "l": "eo", "t": { "Activities": { "v": ["Aktiveco"] }, "Animals & Nature": { "v": ["Bestoj & Naturo"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Propra"] }, "Flags": { "v": ["Flagoj"] }, "Food & Drink": { "v": ["Manĝaĵo & Trinkaĵo"] }, "Frequently used": { "v": ["Ofte uzataj"] }, "Objects": { "v": ["Objektoj"] }, "People & Body": { "v": ["Homoj & Korpo"] }, "Pick an emoji": { "v": ["Elekti emoĝion "] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Serĉrezultoj"] }, "Smileys & Emotion": { "v": ["Ridoj kaj Emocioj"] }, "Symbols": { "v": ["Signoj"] }, "Travel & Places": { "v": ["Vojaĵoj & Lokoj"] } } }, { "l": "es", "t": { "Activities": { "v": ["Actividades"] }, "Animals & Nature": { "v": ["Animales y naturaleza"] }, "Clear search": { "v": ["Limpiar búsqueda"] }, "Custom": { "v": ["Personalizado"] }, "Emoji picker": { "v": ["Selector de emojis"] }, "Flags": { "v": ["Banderas"] }, "Food & Drink": { "v": ["Comida y bebida"] }, "Frequently used": { "v": ["Usado con frecuencia"] }, "Objects": { "v": ["Objetos"] }, "People & Body": { "v": ["Personas y Cuerpo"] }, "Pick an emoji": { "v": ["Elegir un emoji"] }, "Search emoji": { "v": ["Buscar emoji"] }, "Search results": { "v": ["Resultados de la búsqueda"] }, "Selected": { "v": ["Seleccionado"] }, "Smileys & Emotion": { "v": ["Smileys y emoticonos"] }, "Symbols": { "v": ["Símbolos"] }, "Travel & Places": { "v": ["Viajes y lugares"] } } }, { "l": "es_419", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_AR", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_CL", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_CO", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_CR", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_DO", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_EC", "t": { "Activities": { "v": ["Actividades"] }, "Animals & Nature": { "v": ["Animales y Naturaleza"] }, "Clear search": { "v": ["Limpiar búsqueda"] }, "Custom": { "v": ["Personalizado"] }, "Flags": { "v": ["Marcas"] }, "Food & Drink": { "v": ["Comida y Bebida"] }, "Frequently used": { "v": ["Frecuentemente utilizado"] }, "Objects": { "v": ["Objetos"] }, "People & Body": { "v": ["Personas y Cuerpo"] }, "Pick an emoji": { "v": ["Seleccionar un emoji"] }, "Search emoji": { "v": ["Buscar emoji"] }, "Search results": { "v": ["Resultados de búsqueda"] }, "Selected": { "v": [""] }, "Smileys & Emotion": { "v": ["Caritas y Emociones"] }, "Symbols": { "v": ["Símbolos"] }, "Travel & Places": { "v": ["Viajes y Lugares"] } } }, { "l": "es_GT", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_HN", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_MX", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_NI", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_PA", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_PE", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_PR", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_PY", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_SV", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "es_UY", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "et_EE", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "eu", "t": { "Activities": { "v": ["Jarduerak"] }, "Animals & Nature": { "v": ["Animaliak eta Natura"] }, "Clear search": { "v": ["Garbitu bilaketa"] }, "Custom": { "v": ["Pertsonalizatua"] }, "Flags": { "v": ["Banderak"] }, "Food & Drink": { "v": ["Janaria eta edariak"] }, "Frequently used": { "v": ["Askotan erabilia"] }, "Objects": { "v": ["Objektuak"] }, "People & Body": { "v": ["Jendea eta gorputza"] }, "Pick an emoji": { "v": ["Hautatu emoji bat"] }, "Search emoji": { "v": ["Bilatu emojiak"] }, "Search results": { "v": ["Bilaketa emaitzak"] }, "Selected": { "v": ["Hautatuta"] }, "Smileys & Emotion": { "v": ["Smileyak eta emozioa"] }, "Symbols": { "v": ["Sinboloak"] }, "Travel & Places": { "v": ["Bidaiak eta lekuak"] } } }, { "l": "fa", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "fi", "t": { "Activities": { "v": ["Aktiviteetit"] }, "Animals & Nature": { "v": ["Eläimet & luonto"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Mukautettu"] }, "Flags": { "v": ["Liput"] }, "Food & Drink": { "v": ["Ruoka & juoma"] }, "Frequently used": { "v": ["Usein käytetyt"] }, "Objects": { "v": ["Esineet & asiat"] }, "People & Body": { "v": ["Ihmiset & keho"] }, "Pick an emoji": { "v": ["Valitse emoji"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Hakutulokset"] }, "Smileys & Emotion": { "v": ["Hymiöt & tunteet"] }, "Symbols": { "v": ["Symbolit"] }, "Travel & Places": { "v": ["Matkustus & kohteet"] } } }, { "l": "fo", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "fr", "t": { "Activities": { "v": ["Activités"] }, "Animals & Nature": { "v": ["Animaux & Nature"] }, "Clear search": { "v": ["Effacer la recherche"] }, "Custom": { "v": ["Personnalisé"] }, "Flags": { "v": ["Drapeaux"] }, "Food & Drink": { "v": ["Nourriture & Boissons"] }, "Frequently used": { "v": ["Utilisés fréquemment"] }, "Objects": { "v": ["Objets"] }, "People & Body": { "v": ["Personnes & Corps"] }, "Pick an emoji": { "v": ["Choisissez un émoji"] }, "Search emoji": { "v": ["Rechercher un emoji"] }, "Search results": { "v": ["Résultats de recherche"] }, "Selected": { "v": ["sélectionné"] }, "Smileys & Emotion": { "v": ["Smileys & Émotions"] }, "Symbols": { "v": ["Symboles"] }, "Travel & Places": { "v": ["Voyage & Lieux"] } } }, { "l": "gd", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "gl", "t": { "Activities": { "v": ["Actividades"] }, "Animals & Nature": { "v": ["Animais e natureza"] }, "Clear search": { "v": ["Limpar a busca"] }, "Custom": { "v": ["Personalizado"] }, "Dark skin tone": { "v": ["Ton de pel escuro"] }, "Emoji picker": { "v": ["Selector de «emojis»"] }, "Flags": { "v": ["Bandeiras"] }, "Food & Drink": { "v": ["Comida e bebida"] }, "Frequently used": { "v": ["Usado con frecuencia"] }, "Light skin tone": { "v": ["Ton de pel claro"] }, "Medium dark skin tone": { "v": ["Ton de pel medio escuro"] }, "Medium light skin tone": { "v": ["Ton de pel medio claro"] }, "Medium skin tone": { "v": ["Ton de pel medio"] }, "Neutral skin color": { "v": ["Cor de pel neutra"] }, "Objects": { "v": ["Obxectos"] }, "People & Body": { "v": ["Persoas e corpo"] }, "Pick an emoji": { "v": ["Escolla un «emoji»"] }, "Search emoji": { "v": ["Buscar «emoji»"] }, "Search results": { "v": ["Resultados da busca"] }, "Selected": { "v": ["Seleccionado"] }, "Skin tone": { "v": ["Ton de pel"] }, "Smileys & Emotion": { "v": ["Sorrisos e emocións"] }, "Symbols": { "v": ["Símbolos"] }, "Travel & Places": { "v": ["Viaxes e lugares"] } } }, { "l": "he", "t": { "Activities": { "v": ["פעילויות"] }, "Animals & Nature": { "v": ["חיות וטבע"] }, "Clear search": { "v": ["פינוי חיפוש"] }, "Custom": { "v": ["בהתאמה אישית"] }, "Flags": { "v": ["דגלים"] }, "Food & Drink": { "v": ["מזון ומשקאות"] }, "Frequently used": { "v": ["בשימוש תדיר"] }, "Objects": { "v": ["חפצים"] }, "People & Body": { "v": ["אנשים וגוף"] }, "Pick an emoji": { "v": ["נא לבחור אמוג׳י"] }, "Search emoji": { "v": ["חיפוש אמוג׳י"] }, "Search results": { "v": ["תוצאות חיפוש"] }, "Selected": { "v": [""] }, "Smileys & Emotion": { "v": ["חייכנים ורגשונים"] }, "Symbols": { "v": ["סמלים"] }, "Travel & Places": { "v": ["טיולים ומקומות"] } } }, { "l": "hi_IN", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "hr", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "hsb", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "hu", "t": { "Activities": { "v": ["Tevékenységek"] }, "Animals & Nature": { "v": ["Állatok és természet"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Egyéni"] }, "Flags": { "v": ["Zászlók"] }, "Food & Drink": { "v": ["Étel és ital"] }, "Frequently used": { "v": ["Gyakran használt"] }, "Objects": { "v": ["Tárgyak"] }, "People & Body": { "v": ["Emberek és test"] }, "Pick an emoji": { "v": ["Válasszon egy emodzsit"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Találatok"] }, "Smileys & Emotion": { "v": ["Mosolyok és érzelmek"] }, "Symbols": { "v": ["Szimbólumok"] }, "Travel & Places": { "v": ["Utazás és helyek"] } } }, { "l": "hy", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ia", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "id", "t": { "Activities": { "v": ["Aktivitas"] }, "Animals & Nature": { "v": ["Satwa dan Alam"] }, "Clear search": { "v": ["Bersihkan pencarian"] }, "Custom": { "v": ["Khusus"] }, "Flags": { "v": ["Tanda"] }, "Food & Drink": { "v": ["Makanan dan Minuman"] }, "Frequently used": { "v": ["Sering digunakan"] }, "Objects": { "v": ["Objek"] }, "People & Body": { "v": ["Orang & Badan"] }, "Pick an emoji": { "v": ["Pilih emoji"] }, "Search emoji": { "v": ["Cari emoji"] }, "Search results": { "v": ["Hasil pencarian"] }, "Selected": { "v": ["Dipilih"] }, "Smileys & Emotion": { "v": ["Senyuman & Perasaan"] }, "Symbols": { "v": ["Simbol"] }, "Travel & Places": { "v": ["Perjalanan & Tempat"] } } }, { "l": "ig", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "is", "t": { "Activities": { "v": ["Aðgerðir"] }, "Animals & Nature": { "v": ["Dýr og náttúra"] }, "Clear search": { "v": ["Hreinsa leit"] }, "Custom": { "v": ["Sérsniðið"] }, "Flags": { "v": ["Flögg"] }, "Food & Drink": { "v": ["Matur og drykkur"] }, "Frequently used": { "v": ["Oftast notað"] }, "Objects": { "v": ["Hlutir"] }, "People & Body": { "v": ["Fólk og líkami"] }, "Pick an emoji": { "v": ["Veldu tjáningartákn"] }, "Search emoji": { "v": ["Leita að tjáningartákni"] }, "Search results": { "v": ["Leitarniðurstöður"] }, "Selected": { "v": ["Valið"] }, "Smileys & Emotion": { "v": ["Broskallar og tilfinningar"] }, "Symbols": { "v": ["Tákn"] }, "Travel & Places": { "v": ["Staðir og ferðalög"] } } }, { "l": "it", "t": { "Activities": { "v": ["Attività"] }, "Animals & Nature": { "v": ["Animali e natura"] }, "Clear search": { "v": ["online"] }, "Custom": { "v": ["Personalizzato"] }, "Flags": { "v": ["Bandiere"] }, "Food & Drink": { "v": ["Cibo e bevande"] }, "Frequently used": { "v": ["Usati di frequente"] }, "Objects": { "v": ["Oggetti"] }, "People & Body": { "v": ["Persone e corpo"] }, "Pick an emoji": { "v": ["Scegli un emoji"] }, "Search emoji": { "v": ["Ricerca emoji"] }, "Search results": { "v": ["Risultati di ricerca"] }, "Selected": { "v": ["Selezionato"] }, "Smileys & Emotion": { "v": ["Faccine ed emozioni"] }, "Symbols": { "v": ["Simboli"] }, "Travel & Places": { "v": ["Viaggi e luoghi"] } } }, { "l": "ja", "t": { "Activities": { "v": ["アクティビティ"] }, "Animals & Nature": { "v": ["動物と自然"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["カスタム"] }, "Flags": { "v": ["国旗"] }, "Food & Drink": { "v": ["食べ物と飲み物"] }, "Frequently used": { "v": ["よく使うもの"] }, "Objects": { "v": ["物"] }, "People & Body": { "v": ["様々な人と体の部位"] }, "Pick an emoji": { "v": ["絵文字を選択"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["検索結果"] }, "Smileys & Emotion": { "v": ["感情表現"] }, "Symbols": { "v": ["記号"] }, "Travel & Places": { "v": ["旅行と場所"] } } }, { "l": "ka", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ka_GE", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "kab", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "kk", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "km", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "kn", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ko", "t": { "Activities": { "v": ["활동"] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "la", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "lb", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "lo", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "lt_LT", "t": { "Activities": { "v": ["Veiklos"] }, "Animals & Nature": { "v": ["Gyvūnai ir gamta"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Tinkinti"] }, "Flags": { "v": ["Vėliavos"] }, "Food & Drink": { "v": ["Maistas ir gėrimai"] }, "Frequently used": { "v": ["Dažniausiai naudoti"] }, "Objects": { "v": ["Objektai"] }, "People & Body": { "v": ["Žmonės ir kūnas"] }, "Pick an emoji": { "v": ["Pasirinkti jaustuką"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Paieškos rezultatai"] }, "Smileys & Emotion": { "v": ["Šypsenos ir emocijos"] }, "Symbols": { "v": ["Simboliai"] }, "Travel & Places": { "v": ["Kelionės ir vietos"] } } }, { "l": "lv", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "mk", "t": { "Activities": { "v": ["Активности"] }, "Animals & Nature": { "v": ["Животни & Природа"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Прилагодени"] }, "Flags": { "v": ["Знамиња"] }, "Food & Drink": { "v": ["Храна & Пијалоци"] }, "Frequently used": { "v": ["Најчесто користени"] }, "Objects": { "v": ["Објекти"] }, "People & Body": { "v": ["Луѓе & Тело"] }, "Pick an emoji": { "v": ["Избери емотикон"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Резултати од барувањето"] }, "Smileys & Emotion": { "v": ["Смешковци & Емотикони"] }, "Symbols": { "v": ["Симболи"] }, "Travel & Places": { "v": ["Патувања & Места"] } } }, { "l": "mn", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "mr", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ms_MY", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "my", "t": { "Activities": { "v": ["ပြုလုပ်ဆောင်တာများ"] }, "Animals & Nature": { "v": ["တိရစ္ဆာန်များနှင့် သဘာဝ"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["အလိုကျချိန်ညှိမှု"] }, "Flags": { "v": ["အလံများ"] }, "Food & Drink": { "v": ["အစားအသောက်"] }, "Frequently used": { "v": ["မကြာခဏအသုံးပြုသော"] }, "Objects": { "v": ["အရာဝတ္ထုများ"] }, "People & Body": { "v": ["လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်"] }, "Pick an emoji": { "v": ["အီမိုဂျီရွေးရန်"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["ရှာဖွေမှု ရလဒ်များ"] }, "Smileys & Emotion": { "v": ["စမိုင်လီများနှင့် အီမိုရှင်း"] }, "Symbols": { "v": ["သင်္ကေတများ"] }, "Travel & Places": { "v": ["ခရီးသွားလာခြင်းနှင့် နေရာများ"] } } }, { "l": "nb", "t": { "Activities": { "v": ["Aktiviteter"] }, "Animals & Nature": { "v": ["Dyr og natur"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Tilpasset"] }, "Flags": { "v": ["Flagg"] }, "Food & Drink": { "v": ["Mat og drikke"] }, "Frequently used": { "v": ["Ofte brukt"] }, "Objects": { "v": ["Objekter"] }, "People & Body": { "v": ["Mennesker og kropp"] }, "Pick an emoji": { "v": ["Velg en emoji"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Søkeresultater"] }, "Smileys & Emotion": { "v": ["Smilefjes og følelser"] }, "Symbols": { "v": ["Symboler"] }, "Travel & Places": { "v": ["Reise og steder"] } } }, { "l": "ne", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "nl", "t": { "Activities": { "v": ["Activiteiten"] }, "Animals & Nature": { "v": ["Dieren & Natuur"] }, "Clear search": { "v": ["Wis zoekopdracht"] }, "Custom": { "v": ["Aangepast"] }, "Flags": { "v": ["Vlaggen"] }, "Food & Drink": { "v": ["Eten & Drinken"] }, "Frequently used": { "v": ["Vaak gebruikt"] }, "Objects": { "v": ["Objecten"] }, "People & Body": { "v": ["Mensen & Lichaam"] }, "Pick an emoji": { "v": ["Kies een emoji"] }, "Search emoji": { "v": ["Zoek emoji"] }, "Search results": { "v": ["Zoekresultaten"] }, "Selected": { "v": ["Geselecteerd"] }, "Smileys & Emotion": { "v": ["Smileys & Emotie"] }, "Symbols": { "v": ["Symbolen"] }, "Travel & Places": { "v": ["Reizen & Plaatsen"] } } }, { "l": "nn_NO", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "oc", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "pl", "t": { "Activities": { "v": ["Aktywność"] }, "Animals & Nature": { "v": ["Zwierzęta i natura"] }, "Clear search": { "v": ["Wyczyść wyszukiwanie"] }, "Custom": { "v": ["Zwyczajne"] }, "Flags": { "v": ["Flagi"] }, "Food & Drink": { "v": ["Jedzenie i picie"] }, "Frequently used": { "v": ["Często używane"] }, "Objects": { "v": ["Obiekty"] }, "People & Body": { "v": ["Ludzie i ciało"] }, "Pick an emoji": { "v": ["Wybierz emoji"] }, "Search emoji": { "v": ["Szukaj emoji"] }, "Search results": { "v": ["Wyniki wyszukiwania"] }, "Selected": { "v": ["Wybrane"] }, "Smileys & Emotion": { "v": ["Buźki i emotikony"] }, "Symbols": { "v": ["Symbole"] }, "Travel & Places": { "v": ["Podróże i miejsca"] } } }, { "l": "ps", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "pt_BR", "t": { "Activities": { "v": ["Atividades"] }, "Animals & Nature": { "v": ["Animais & Natureza"] }, "Clear search": { "v": ["Limpar pesquisa"] }, "Custom": { "v": ["Personalizado"] }, "Flags": { "v": ["Bandeiras"] }, "Food & Drink": { "v": ["Comida & Bebida"] }, "Frequently used": { "v": ["Mais usados"] }, "Objects": { "v": ["Objetos"] }, "People & Body": { "v": ["Pessoas & Corpo"] }, "Pick an emoji": { "v": ["Escolha um emoji"] }, "Search emoji": { "v": ["Pesquisar emoticons"] }, "Search results": { "v": ["Resultados da pesquisa"] }, "Selected": { "v": ["Selecionado"] }, "Smileys & Emotion": { "v": ["Smiles & Emoções"] }, "Symbols": { "v": ["Símbolo"] }, "Travel & Places": { "v": ["Viagem & Lugares"] } } }, { "l": "pt_PT", "t": { "Activities": { "v": ["Atividades"] }, "Animals & Nature": { "v": ["Animais e Natureza"] }, "Clear search": { "v": ["Limpar a pesquisa"] }, "Custom": { "v": ["Personalizado"] }, "Flags": { "v": ["Bandeiras"] }, "Food & Drink": { "v": ["Comida e Bebida"] }, "Frequently used": { "v": ["Mais utilizados"] }, "Objects": { "v": ["Objetos"] }, "People & Body": { "v": ["Pessoas e Corpo"] }, "Pick an emoji": { "v": ["Escolha um emoji"] }, "Search emoji": { "v": ["Pesquisar emoji"] }, "Search results": { "v": ["Resultados da pesquisa"] }, "Selected": { "v": [""] }, "Smileys & Emotion": { "v": ["Sorrisos e Emoções"] }, "Symbols": { "v": ["Símbolos"] }, "Travel & Places": { "v": ["Viagem e Lugares"] } } }, { "l": "ro", "t": { "Activities": { "v": ["Activități"] }, "Animals & Nature": { "v": ["Animale și natură"] }, "Clear search": { "v": ["Șterge căutarea"] }, "Custom": { "v": ["Personalizat"] }, "Flags": { "v": ["Marcaje"] }, "Food & Drink": { "v": ["Alimente și băuturi"] }, "Frequently used": { "v": ["Utilizate frecvent"] }, "Objects": { "v": ["Obiecte"] }, "People & Body": { "v": ["Oameni și corp"] }, "Pick an emoji": { "v": ["Alege un emoji"] }, "Search emoji": { "v": ["Căutare emoji"] }, "Search results": { "v": ["Rezultatele căutării"] }, "Selected": { "v": ["Selectat"] }, "Smileys & Emotion": { "v": ["Zâmbete și emoții"] }, "Symbols": { "v": ["Simboluri"] }, "Travel & Places": { "v": ["Călătorii și locuri"] } } }, { "l": "ru", "t": { "Activities": { "v": ["События"] }, "Animals & Nature": { "v": ["Животные и природа "] }, "Clear search": { "v": ["Очистить поиск"] }, "Custom": { "v": ["Пользовательское"] }, "Flags": { "v": ["Флаги"] }, "Food & Drink": { "v": ["Еда, напиток"] }, "Frequently used": { "v": ["Часто используемый"] }, "Objects": { "v": ["Объекты"] }, "People & Body": { "v": ["Люди и тело"] }, "Pick an emoji": { "v": ["Выберите эмодзи"] }, "Search emoji": { "v": ["Поиск эмодзи"] }, "Search results": { "v": ["Результаты поиска"] }, "Selected": { "v": ["Выбрано"] }, "Smileys & Emotion": { "v": ["Смайлики и эмоции"] }, "Symbols": { "v": ["Символы"] }, "Travel & Places": { "v": ["Путешествия и места"] } } }, { "l": "sc", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "si", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "sk", "t": { "Activities": { "v": ["Aktivity"] }, "Animals & Nature": { "v": ["Zvieratá a príroda"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Zvyk"] }, "Flags": { "v": ["Vlajky"] }, "Food & Drink": { "v": ["Jedlo a nápoje"] }, "Frequently used": { "v": ["Často používané"] }, "Objects": { "v": ["Objekty"] }, "People & Body": { "v": ["Ľudia a telo"] }, "Pick an emoji": { "v": ["Vyberte si emodži"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Výsledky vyhľadávania"] }, "Smileys & Emotion": { "v": ["Smajlíky a emócie"] }, "Symbols": { "v": ["Symboly"] }, "Travel & Places": { "v": ["Cestovanie a miesta"] } } }, { "l": "sl", "t": { "Activities": { "v": ["Dejavnosti"] }, "Animals & Nature": { "v": ["Živali in Narava"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["Po meri"] }, "Flags": { "v": ["Zastavice"] }, "Food & Drink": { "v": ["Hrana in Pijača"] }, "Frequently used": { "v": ["Pogostost uporabe"] }, "Objects": { "v": ["Predmeti"] }, "People & Body": { "v": ["Ljudje in Telo"] }, "Pick an emoji": { "v": ["Izbor izrazne ikone"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["Zadetki iskanja"] }, "Smileys & Emotion": { "v": ["Izrazne ikone"] }, "Symbols": { "v": ["Simboli"] }, "Travel & Places": { "v": ["Potovanja in Kraji"] } } }, { "l": "sq", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "sr", "t": { "Activities": { "v": ["Активности"] }, "Animals & Nature": { "v": ["Животиње и природа"] }, "Clear search": { "v": ["Обриши претрагу"] }, "Custom": { "v": ["Произвољно"] }, "Emoji picker": { "v": ["Бирач емођија"] }, "Flags": { "v": ["Заставе"] }, "Food & Drink": { "v": ["Храна и пиће"] }, "Frequently used": { "v": ["Често коришћено"] }, "Objects": { "v": ["Предмети"] }, "People & Body": { "v": ["Људи и тело"] }, "Pick an emoji": { "v": ["Изаберите емођи"] }, "Search emoji": { "v": ["Претражи емођи"] }, "Search results": { "v": ["Резултати претраге"] }, "Selected": { "v": ["Изабрано"] }, "Smileys & Emotion": { "v": ["Смајлији и емоције"] }, "Symbols": { "v": ["Симболи"] }, "Travel & Places": { "v": ["Путовање и места"] } } }, { "l": "sr@latin", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "sv", "t": { "Activities": { "v": ["Aktiviteter"] }, "Animals & Nature": { "v": ["Djur & Natur"] }, "Clear search": { "v": ["Rensa sökning"] }, "Custom": { "v": ["Anpassad"] }, "Dark skin tone": { "v": ["Mörk hudton"] }, "Emoji picker": { "v": ["Emoji-väljare"] }, "Flags": { "v": ["Flaggor"] }, "Food & Drink": { "v": ["Mat & Dryck"] }, "Frequently used": { "v": ["Används ofta"] }, "Light skin tone": { "v": ["Ljus hudton"] }, "Medium dark skin tone": { "v": ["Medium mörk hudton"] }, "Medium light skin tone": { "v": ["Medium ljus hudton"] }, "Medium skin tone": { "v": ["Medium hudton"] }, "Neutral skin color": { "v": ["Neutral hudfärg"] }, "Objects": { "v": ["Objekt"] }, "People & Body": { "v": ["Kropp & Själ"] }, "Pick an emoji": { "v": ["Välj en emoji"] }, "Search emoji": { "v": ["Sök emoji"] }, "Search results": { "v": ["Sökresultat"] }, "Selected": { "v": ["Vald"] }, "Skin tone": { "v": ["Hudton"] }, "Smileys & Emotion": { "v": ["Selfies & Känslor"] }, "Symbols": { "v": ["Symboler"] }, "Travel & Places": { "v": ["Resor & Sevärdigheter"] } } }, { "l": "sw", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "ta", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "th", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "tk", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "tr", "t": { "Activities": { "v": ["Etkinlikler"] }, "Animals & Nature": { "v": ["Hayvanlar ve Doğa"] }, "Clear search": { "v": ["Aramayı temizle"] }, "Custom": { "v": ["Özel"] }, "Dark skin tone": { "v": ["Koyu deri rengi"] }, "Emoji picker": { "v": ["Emoji seçici"] }, "Flags": { "v": ["Bayraklar"] }, "Food & Drink": { "v": ["Yeme ve içme"] }, "Frequently used": { "v": ["Sık kullanılanlar"] }, "Light skin tone": { "v": ["Açık deri rengi"] }, "Medium dark skin tone": { "v": ["Orta koyu deri rengi"] }, "Medium light skin tone": { "v": ["Orta açık deri rengi"] }, "Medium skin tone": { "v": ["Orta deri rengi"] }, "Neutral skin color": { "v": ["Nötr deri rengi"] }, "Objects": { "v": ["Nesneler"] }, "People & Body": { "v": ["İnsanlar ve beden"] }, "Pick an emoji": { "v": ["Bir emoji seçin"] }, "Search emoji": { "v": ["Emoji ara"] }, "Search results": { "v": ["Arama sonuçları"] }, "Selected": { "v": ["Seçilmiş"] }, "Skin tone": { "v": ["Deri rengi"] }, "Smileys & Emotion": { "v": ["İfadeler ve duygular"] }, "Symbols": { "v": ["Simgeler"] }, "Travel & Places": { "v": ["Gezi ve yerler"] } } }, { "l": "ug", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "uk", "t": { "Activities": { "v": ["Діяльність"] }, "Animals & Nature": { "v": ["Тварини та природа"] }, "Clear search": { "v": ["Очистити пошук"] }, "Custom": { "v": ["Власне"] }, "Flags": { "v": ["Прапори"] }, "Food & Drink": { "v": ["Їжа та напої"] }, "Frequently used": { "v": ["Найчастіші"] }, "Objects": { "v": ["Об'єкти"] }, "People & Body": { "v": ["Люди та жести"] }, "Pick an emoji": { "v": ["Виберіть емоційку"] }, "Search emoji": { "v": ["Шукати емоційки"] }, "Search results": { "v": ["Результати пошуку"] }, "Selected": { "v": ["Вибрано"] }, "Smileys & Emotion": { "v": ["Смайли та емоції"] }, "Symbols": { "v": ["Символи"] }, "Travel & Places": { "v": ["Поїздки та місця"] } } }, { "l": "ur_PK", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "uz", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "vi", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }, { "l": "zh_CN", "t": { "Activities": { "v": ["活动"] }, "Animals & Nature": { "v": ["动物 & 自然"] }, "Clear search": { "v": [""] }, "Custom": { "v": ["自定义"] }, "Flags": { "v": ["旗帜"] }, "Food & Drink": { "v": ["食物 & 饮品"] }, "Frequently used": { "v": ["经常使用"] }, "Objects": { "v": ["物体"] }, "People & Body": { "v": ["人 & 身体"] }, "Pick an emoji": { "v": ["选择一个表情"] }, "Search emoji": { "v": [""] }, "Search results": { "v": ["搜索结果"] }, "Smileys & Emotion": { "v": ["笑脸 & 情感"] }, "Symbols": { "v": ["符号"] }, "Travel & Places": { "v": ["旅游 & 地点"] } } }, { "l": "zh_HK", "t": { "Activities": { "v": ["活動"] }, "Animals & Nature": { "v": ["動物與自然"] }, "Clear search": { "v": ["清除搜索"] }, "Custom": { "v": ["自定義"] }, "Flags": { "v": ["旗幟"] }, "Food & Drink": { "v": ["食物與飲料"] }, "Frequently used": { "v": ["經常使用"] }, "Objects": { "v": ["物件"] }, "People & Body": { "v": ["人物"] }, "Pick an emoji": { "v": ["選擇表情符號"] }, "Search emoji": { "v": ["搜尋表情符號"] }, "Search results": { "v": ["搜尋結果"] }, "Selected": { "v": ["已選"] }, "Smileys & Emotion": { "v": ["表情"] }, "Symbols": { "v": ["標誌"] }, "Travel & Places": { "v": ["旅遊與景點"] } } }, { "l": "zh_TW", "t": { "Activities": { "v": ["活動"] }, "Animals & Nature": { "v": ["動物與自然"] }, "Clear search": { "v": ["清除搜尋"] }, "Custom": { "v": ["自定義"] }, "Flags": { "v": ["旗幟"] }, "Food & Drink": { "v": ["食物與飲料"] }, "Frequently used": { "v": ["最近使用"] }, "Objects": { "v": ["物件"] }, "People & Body": { "v": ["人物"] }, "Pick an emoji": { "v": ["選擇表情符號"] }, "Search emoji": { "v": ["搜尋表情符號"] }, "Search results": { "v": ["搜尋結果"] }, "Selected": { "v": ["已選取"] }, "Smileys & Emotion": { "v": ["表情"] }, "Symbols": { "v": ["標誌"] }, "Travel & Places": { "v": ["旅遊與景點"] } } }, { "l": "zu_ZA", "t": { "Activities": { "v": [""] }, "Animals & Nature": { "v": [""] }, "Clear search": { "v": [""] }, "Custom": { "v": [""] }, "Flags": { "v": [""] }, "Food & Drink": { "v": [""] }, "Frequently used": { "v": [""] }, "Objects": { "v": [""] }, "People & Body": { "v": [""] }, "Pick an emoji": { "v": [""] }, "Search emoji": { "v": [""] }, "Search results": { "v": [""] }, "Smileys & Emotion": { "v": [""] }, "Symbols": { "v": [""] }, "Travel & Places": { "v": [""] } } }];
const t7 = [{ "l": "af", "t": { "Any link": { "v": [""] } } }, { "l": "ar", "t": { "Any link": { "v": ["أيَّ رابطٍ"] } } }, { "l": "ast", "t": { "Any link": { "v": ["Cualesquier enllaz"] } } }, { "l": "az", "t": { "Any link": { "v": [""] } } }, { "l": "be", "t": { "Any link": { "v": [""] } } }, { "l": "bg", "t": { "Any link": { "v": [""] } } }, { "l": "bn_BD", "t": { "Any link": { "v": [""] } } }, { "l": "br", "t": { "Any link": { "v": [""] } } }, { "l": "bs", "t": { "Any link": { "v": [""] } } }, { "l": "ca", "t": { "Any link": { "v": [""] } } }, { "l": "cs", "t": { "Any link": { "v": ["Jakýkoli odkaz"] } } }, { "l": "cs_CZ", "t": { "Any link": { "v": ["Jakýkoli odkaz"] } } }, { "l": "cy_GB", "t": { "Any link": { "v": [""] } } }, { "l": "da", "t": { "Any link": { "v": ["Ethvert link"] } } }, { "l": "de", "t": { "Any link": { "v": ["Irgendein Link"] } } }, { "l": "de_DE", "t": { "Any link": { "v": ["Irgendein Link"] } } }, { "l": "el", "t": { "Any link": { "v": [""] } } }, { "l": "en_GB", "t": { "Any link": { "v": ["Any link"] } } }, { "l": "eo", "t": { "Any link": { "v": [""] } } }, { "l": "es", "t": { "Any link": { "v": ["Cualquier enlace"] } } }, { "l": "es_419", "t": { "Any link": { "v": [""] } } }, { "l": "es_AR", "t": { "Any link": { "v": [""] } } }, { "l": "es_CL", "t": { "Any link": { "v": [""] } } }, { "l": "es_CO", "t": { "Any link": { "v": [""] } } }, { "l": "es_CR", "t": { "Any link": { "v": [""] } } }, { "l": "es_DO", "t": { "Any link": { "v": [""] } } }, { "l": "es_EC", "t": { "Any link": { "v": ["Cualquier enlace"] } } }, { "l": "es_GT", "t": { "Any link": { "v": [""] } } }, { "l": "es_HN", "t": { "Any link": { "v": [""] } } }, { "l": "es_MX", "t": { "Any link": { "v": [""] } } }, { "l": "es_NI", "t": { "Any link": { "v": [""] } } }, { "l": "es_PA", "t": { "Any link": { "v": [""] } } }, { "l": "es_PE", "t": { "Any link": { "v": [""] } } }, { "l": "es_PR", "t": { "Any link": { "v": [""] } } }, { "l": "es_PY", "t": { "Any link": { "v": [""] } } }, { "l": "es_SV", "t": { "Any link": { "v": [""] } } }, { "l": "es_UY", "t": { "Any link": { "v": [""] } } }, { "l": "et_EE", "t": { "Any link": { "v": [""] } } }, { "l": "eu", "t": { "Any link": { "v": ["Edozein esteka"] } } }, { "l": "fa", "t": { "Any link": { "v": [""] } } }, { "l": "fi", "t": { "Any link": { "v": [""] } } }, { "l": "fo", "t": { "Any link": { "v": [""] } } }, { "l": "fr", "t": { "Any link": { "v": ["N'importe quel lien"] } } }, { "l": "gd", "t": { "Any link": { "v": [""] } } }, { "l": "gl", "t": { "Any link": { "v": ["Calquera ligazón"] } } }, { "l": "he", "t": { "Any link": { "v": ["קישור כלשהו"] } } }, { "l": "hi_IN", "t": { "Any link": { "v": [""] } } }, { "l": "hr", "t": { "Any link": { "v": [""] } } }, { "l": "hsb", "t": { "Any link": { "v": [""] } } }, { "l": "hu", "t": { "Any link": { "v": [""] } } }, { "l": "hy", "t": { "Any link": { "v": [""] } } }, { "l": "ia", "t": { "Any link": { "v": [""] } } }, { "l": "id", "t": { "Any link": { "v": ["Semua tautan"] } } }, { "l": "ig", "t": { "Any link": { "v": [""] } } }, { "l": "is", "t": { "Any link": { "v": ["Einhver tengill"] } } }, { "l": "it", "t": { "Any link": { "v": ["Qualsiasi link"] } } }, { "l": "ja", "t": { "Any link": { "v": [""] } } }, { "l": "ka", "t": { "Any link": { "v": [""] } } }, { "l": "ka_GE", "t": { "Any link": { "v": [""] } } }, { "l": "kab", "t": { "Any link": { "v": [""] } } }, { "l": "kk", "t": { "Any link": { "v": [""] } } }, { "l": "km", "t": { "Any link": { "v": [""] } } }, { "l": "kn", "t": { "Any link": { "v": [""] } } }, { "l": "ko", "t": { "Any link": { "v": [""] } } }, { "l": "la", "t": { "Any link": { "v": [""] } } }, { "l": "lb", "t": { "Any link": { "v": [""] } } }, { "l": "lo", "t": { "Any link": { "v": [""] } } }, { "l": "lt_LT", "t": { "Any link": { "v": [""] } } }, { "l": "lv", "t": { "Any link": { "v": [""] } } }, { "l": "mk", "t": { "Any link": { "v": [""] } } }, { "l": "mn", "t": { "Any link": { "v": [""] } } }, { "l": "mr", "t": { "Any link": { "v": [""] } } }, { "l": "ms_MY", "t": { "Any link": { "v": [""] } } }, { "l": "my", "t": { "Any link": { "v": [""] } } }, { "l": "nb", "t": { "Any link": { "v": [""] } } }, { "l": "ne", "t": { "Any link": { "v": [""] } } }, { "l": "nl", "t": { "Any link": { "v": ["Elke link"] } } }, { "l": "nn_NO", "t": { "Any link": { "v": [""] } } }, { "l": "oc", "t": { "Any link": { "v": [""] } } }, { "l": "pl", "t": { "Any link": { "v": ["Dowolny link"] } } }, { "l": "ps", "t": { "Any link": { "v": [""] } } }, { "l": "pt_BR", "t": { "Any link": { "v": ["Qualquer link"] } } }, { "l": "pt_PT", "t": { "Any link": { "v": ["Qualquer link"] } } }, { "l": "ro", "t": { "Any link": { "v": ["Orice link"] } } }, { "l": "ru", "t": { "Any link": { "v": ["Любая ссылка"] } } }, { "l": "sc", "t": { "Any link": { "v": [""] } } }, { "l": "si", "t": { "Any link": { "v": [""] } } }, { "l": "sk", "t": { "Any link": { "v": [""] } } }, { "l": "sl", "t": { "Any link": { "v": [""] } } }, { "l": "sq", "t": { "Any link": { "v": [""] } } }, { "l": "sr", "t": { "Any link": { "v": ["Било који линк"] } } }, { "l": "sr@latin", "t": { "Any link": { "v": [""] } } }, { "l": "sv", "t": { "Any link": { "v": ["Vilken länk som helst"] } } }, { "l": "sw", "t": { "Any link": { "v": [""] } } }, { "l": "ta", "t": { "Any link": { "v": [""] } } }, { "l": "th", "t": { "Any link": { "v": [""] } } }, { "l": "tk", "t": { "Any link": { "v": [""] } } }, { "l": "tr", "t": { "Any link": { "v": ["Herhangi bir bağlantı"] } } }, { "l": "ug", "t": { "Any link": { "v": [""] } } }, { "l": "uk", "t": { "Any link": { "v": ["Будь-яке посилання"] } } }, { "l": "ur_PK", "t": { "Any link": { "v": [""] } } }, { "l": "uz", "t": { "Any link": { "v": [""] } } }, { "l": "vi", "t": { "Any link": { "v": [""] } } }, { "l": "zh_CN", "t": { "Any link": { "v": [""] } } }, { "l": "zh_HK", "t": { "Any link": { "v": ["任何連結"] } } }, { "l": "zh_TW", "t": { "Any link": { "v": ["任何連結"] } } }, { "l": "zu_ZA", "t": { "Any link": { "v": [""] } } }];
const t8 = [{ "l": "af", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ar", "t": { "Anything shared with the same group of people will show up here": { "v": ["أيّ مادة تمت مشاركتها مع نفس المجموعة من الأشخاص سيتم عرضها هنا"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["خطأ في الحصول على الموارد ذات الصلة. يرجى الاتصال بمشرف النظام عندك إذا كان لديك أيّ أسئلة."] }, "Related resources": { "v": ["مصادر ذات صلة"] } } }, { "l": "ast", "t": { "Anything shared with the same group of people will show up here": { "v": ["Equí va apaecer tolo que compartas col mesmu grupu de persones"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Hebo un error al consiguir los recursos rellacionaos. Ponte en contautu col alministrador del sistema si tienes dalguna entruga."] }, "Related resources": { "v": ["Recursos rellacionao"] } } }, { "l": "az", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "be", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "bg", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "bn_BD", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "br", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "bs", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ca", "t": { "Anything shared with the same group of people will show up here": { "v": ["Qualsevol cosa compartida amb el mateix grup de persones es mostrarà aquí"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["Recursos relacionats"] } } }, { "l": "cs", "t": { "Anything shared with the same group of people will show up here": { "v": ["Cokoli nasdíleného stejné skupině lidí se zobrazí zde"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Chyba při získávání souvisejících prostředků. Pokud máte jakékoli dotazy, obraťte se na správce vámi využívaného systému."] }, "Related resources": { "v": ["Související prostředky"] } } }, { "l": "cs_CZ", "t": { "Anything shared with the same group of people will show up here": { "v": ["Cokoli nasdíleného stejné skupině lidí se zobrazí zde"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Chyba při získávání souvisejících prostředků. Pokud máte jakékoli dotazy, obraťte se na správce vámi využívaného systému."] }, "Related resources": { "v": ["Související prostředky"] } } }, { "l": "cy_GB", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "da", "t": { "Anything shared with the same group of people will show up here": { "v": ["Alt der deles med samme gruppe af personer vil vises her"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["Relaterede emner"] } } }, { "l": "de", "t": { "Anything shared with the same group of people will show up here": { "v": ["Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Fehler beim Abrufen verwandter Ressourcen. Bei Fragen wende dich bitte an deinen Systemadministrator."] }, "Related resources": { "v": ["Verwandte Ressourcen"] } } }, { "l": "de_DE", "t": { "Anything shared with the same group of people will show up here": { "v": ["Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Fehler beim Abrufen verwandter Ressourcen. Bei Fragen wenden Sie sich bitte an Ihre Systemadministration."] }, "Related resources": { "v": ["Verwandte Ressourcen"] } } }, { "l": "el", "t": { "Anything shared with the same group of people will show up here": { "v": ["Οτιδήποτε μοιράζεται με την ίδια ομάδα ατόμων θα εμφανίζεται εδώ"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["Σχετικοί πόροι"] } } }, { "l": "en_GB", "t": { "Anything shared with the same group of people will show up here": { "v": ["Anything shared with the same group of people will show up here"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Error getting related resources. Please contact your system administrator if you have any questions."] }, "Related resources": { "v": ["Related resources"] } } }, { "l": "eo", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es", "t": { "Anything shared with the same group of people will show up here": { "v": ["Cualquier cosa que esté compartida con el mismo grupo de personas se mostrará aquí"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Error al obtener recursos relacionados. Por favor, contacte a su administrador del sistema si tiene alguna pregunta."] }, "Related resources": { "v": ["Recursos relacionados"] } } }, { "l": "es_419", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_AR", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_CL", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_CO", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_CR", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_DO", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_EC", "t": { "Anything shared with the same group of people will show up here": { "v": ["Cualquier cosa compartida con el mismo grupo de personas aparecerá aquí."] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Error al obtener recursos relacionados. Por favor, contacta a tu administrador del sistema si tienes alguna pregunta."] }, "Related resources": { "v": ["Recursos relacionados"] } } }, { "l": "es_GT", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_HN", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_MX", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_NI", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_PA", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_PE", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_PR", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_PY", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_SV", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "es_UY", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "et_EE", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "eu", "t": { "Anything shared with the same group of people will show up here": { "v": ["Pertsona-talde berarekin partekatutako edozer agertuko da hemen"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Errore bat gertatu da erlazionatutako baliabideak eskuratzean. Jarri harremanetan zure sistemaren administratzailearekin galderarik baduzu."] }, "Related resources": { "v": ["Erlazionatutako baliabideak"] } } }, { "l": "fa", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "fi", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "fo", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "fr", "t": { "Anything shared with the same group of people will show up here": { "v": ["Tout ce qui est partagé avec le même groupe de personnes apparaîtra ici"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Erreur lors de la récupération des ressources liées. Contactez votre administrateur système pour répondre à vos éventuelles questions."] }, "Related resources": { "v": ["Ressources liées"] } } }, { "l": "gd", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "gl", "t": { "Anything shared with the same group of people will show up here": { "v": ["Todo o que se comparta co mesmo grupo de persoas aparecerá aquí"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Produciuse un erro ao obter os recursos relacionados. Póñase en contacto coa administración do seu sistema se ten algunha dúbida."] }, "Related resources": { "v": ["Recursos relacionados"] } } }, { "l": "he", "t": { "Anything shared with the same group of people will show up here": { "v": ["כל מה שמשותף עם אותה קבוצת האנשים יופיע כאן"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["שגיאה בקבלת המשאבים הקשורים. נא ליצור קשר עם הנהלת המערכת אם יש לך שאלות."] }, "Related resources": { "v": ["משאבים קשורים"] } } }, { "l": "hi_IN", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "hr", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "hsb", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "hu", "t": { "Anything shared with the same group of people will show up here": { "v": ["Minden, amit ugyanazzal a csoporttal oszt meg, itt fog megjelenni"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["Kapcsolódó erőforrások"] } } }, { "l": "hy", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ia", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "id", "t": { "Anything shared with the same group of people will show up here": { "v": ["Apa pun yang dibagikan dengan grup orang yang sama akan muncul di sini"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Kesalahan saat mengambil sumber daya terkait. Hubungi administrator sistem Anda jika ada pertanyaan."] }, "Related resources": { "v": ["Sumber daya terkait"] } } }, { "l": "ig", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "is", "t": { "Anything shared with the same group of people will show up here": { "v": ["Allt sem deilt er með sama hópi fólks mun birtast hér"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Villa við að sækja tengd tilföng. Hafðu samband við kerfisstjórann þinn ef þú ert með einhverjar spurningar."] }, "Related resources": { "v": ["Tengd tilföng"] } } }, { "l": "it", "t": { "Anything shared with the same group of people will show up here": { "v": ["Tutto ciò che è stato condiviso con lo stesso gruppo di persone viene visualizzato qui"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Errore nell'ottenere le risorse correlate. Per qualsiasi domanda, contattare l'amministratore di sistema."] }, "Related resources": { "v": ["Risorse correlate"] } } }, { "l": "ja", "t": { "Anything shared with the same group of people will show up here": { "v": ["同じグループで共有しているものは、全てここに表示されます"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["関連リソース"] } } }, { "l": "ka", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ka_GE", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "kab", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "kk", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "km", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "kn", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ko", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "la", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "lb", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "lo", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "lt_LT", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "lv", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "mk", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "mn", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "mr", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ms_MY", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "my", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "nb", "t": { "Anything shared with the same group of people will show up here": { "v": ["Alt som er delt med den samme gruppen vil vises her"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["Relaterte ressurser"] } } }, { "l": "ne", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "nl", "t": { "Anything shared with the same group of people will show up here": { "v": ["Alles dat gedeeld is met dezelfde groep mensen zal hier getoond worden"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Fout bij het verkrijgen van resources. Neem a.u.b. contact op met uw systeembeheerder als u vragen heeft."] }, "Related resources": { "v": ["Gerelateerde bronnen"] } } }, { "l": "nn_NO", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "oc", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "pl", "t": { "Anything shared with the same group of people will show up here": { "v": ["Tutaj pojawi się wszystko, co zostało udostępnione tej samej grupie osób"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Błąd podczas pobierania powiązanych zasobów. Jeśli masz jakiekolwiek pytania, skontaktuj się z administratorem systemu."] }, "Related resources": { "v": ["Powiązane zasoby"] } } }, { "l": "ps", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "pt_BR", "t": { "Anything shared with the same group of people will show up here": { "v": ["Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Erro ao obter recursos relacionados. Por favor entre em contato com o administrador do sistema se tiver alguma dúvida."] }, "Related resources": { "v": ["Recursos relacionados"] } } }, { "l": "pt_PT", "t": { "Anything shared with the same group of people will show up here": { "v": ["Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Erro em obter info relacionadas. Por favor contacte o administrador do sistema para esclarecimentos adicionais."] }, "Related resources": { "v": ["Recursos relacionados"] } } }, { "l": "ro", "t": { "Anything shared with the same group of people will show up here": { "v": ["Tot ceea ce este partajat cu același grup de persoane va fi afișat aici"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Eroare la preluarea resurselor adiționale. Vă rugăm să contactați administratorul pentru întrebări."] }, "Related resources": { "v": ["Resurse legate"] } } }, { "l": "ru", "t": { "Anything shared with the same group of people will show up here": { "v": ["Всё, чем поделились с той же группой людей, будет отображаться здесь"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Ошибка при получении связанных ресурсов. Если у вас есть какие-либо вопросы, обратитесь к системному администратору."] }, "Related resources": { "v": ["Связанные ресурсы"] } } }, { "l": "sc", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "si", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "sk", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "sl", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["Povezani viri"] } } }, { "l": "sq", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "sr", "t": { "Anything shared with the same group of people will show up here": { "v": ["Све што се дели са истом групом људи ће се појавити овде"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Грешка код прибављања везаних ресурса. Молимо вас да се обратите администратору ако имате питања."] }, "Related resources": { "v": ["Повезани ресурси"] } } }, { "l": "sr@latin", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "sv", "t": { "Anything shared with the same group of people will show up here": { "v": ["Något som delats med samma grupp av personer kommer att visas här"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Det gick inte att hämta relaterade resurser. Kontakta din systemadministratör om du har några frågor."] }, "Related resources": { "v": ["Relaterade resurser"] } } }, { "l": "sw", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "ta", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "th", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "tk", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "tr", "t": { "Anything shared with the same group of people will show up here": { "v": ["Aynı kişi grubu ile paylaşılan herşey burada görüntülenir"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["İlgili kaynaklara ulaşılırken sorun çıktı. Herhangi bir sorunuz varsa lütfen sistem yöneticiniz ile görüşün "] }, "Related resources": { "v": ["İlgili kaynaklar"] } } }, { "l": "ug", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "uk", "t": { "Anything shared with the same group of people will show up here": { "v": ["Будь-що доступне для цієї же групи людей буде показано тут"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["Помилка під час отримання пов'язаних ресурсів. Будь ласка, сконтактуйте з системним адміністратором, якщо у вас виникли запитання."] }, "Related resources": { "v": ["Пов'язані ресурси"] } } }, { "l": "ur_PK", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "uz", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "vi", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }, { "l": "zh_CN", "t": { "Anything shared with the same group of people will show up here": { "v": ["与同组用户分享的所有内容都会显示于此"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": ["相关资源"] } } }, { "l": "zh_HK", "t": { "Anything shared with the same group of people will show up here": { "v": ["與同一組人共享的任何內容都會顯示在此處"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["取得相關資源時發生錯誤。如果有任何問題，請聯絡系統管理員。"] }, "Related resources": { "v": ["相關資源"] } } }, { "l": "zh_TW", "t": { "Anything shared with the same group of people will show up here": { "v": ["與相同群組分享的所有內容都會顯示於此"] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": ["取得相關資源時發生錯誤。如果有任何問題，請聯絡系統管理員。"] }, "Related resources": { "v": ["相關資源"] } } }, { "l": "zu_ZA", "t": { "Anything shared with the same group of people will show up here": { "v": [""] }, "Error getting related resources. Please contact your system administrator if you have any questions.": { "v": [""] }, "Related resources": { "v": [""] } } }];
const t9 = [{ "l": "af", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ar", "t": { "Avatar of {displayName}": { "v": ["الرمز التجسيدي avatar لــ {displayName}  "] }, "Avatar of {displayName}, {status}": { "v": ["الرمز التجسيدي  avatar لــ {displayName}، {status}"] } } }, { "l": "ast", "t": { "Avatar of {displayName}": { "v": ["Avatar de: {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de: {displayName}, {status}"] } } }, { "l": "az", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "be", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bg", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bn_BD", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "br", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bs", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ca", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "cs", "t": { "Avatar of {displayName}": { "v": ["Zástupný obrázek uživatele {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Zástupný obrázek uživatele {displayName}, {status}"] } } }, { "l": "cs_CZ", "t": { "Avatar of {displayName}": { "v": ["Zástupný obrázek uživatele {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Zástupný obrázek uživatele {displayName}, {status}"] } } }, { "l": "cy_GB", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "da", "t": { "Avatar of {displayName}": { "v": ["Avatar af {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar af {displayName}, {status}"] } } }, { "l": "de", "t": { "Avatar of {displayName}": { "v": ["Avatar von {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar von {displayName}, {status}"] } } }, { "l": "de_DE", "t": { "Avatar of {displayName}": { "v": ["Avatar von {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar von {displayName}, {status}"] } } }, { "l": "el", "t": { "Avatar of {displayName}": { "v": ["Άβαταρ του {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Άβαταρ του {displayName}, {status}"] } } }, { "l": "en_GB", "t": { "Avatar of {displayName}": { "v": ["Avatar of {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar of {displayName}, {status}"] } } }, { "l": "eo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_419", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_AR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CL", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_DO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_EC", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_GT", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_HN", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_MX", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_NI", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PA", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_SV", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_UY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "et_EE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "eu", "t": { "Avatar of {displayName}": { "v": ["{displayName}-(e)n irudia"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} -(e)n irudia, {status}"] } } }, { "l": "fa", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "fi", "t": { "Avatar of {displayName}": { "v": ["Käyttäjän {displayName} avatar"] }, "Avatar of {displayName}, {status}": { "v": ["Käyttäjän {displayName} avatar, {status}"] } } }, { "l": "fo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "fr", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "gd", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "gl", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "he", "t": { "Avatar of {displayName}": { "v": ["תמונה ייצוגית של {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["תמונה ייצוגית של {displayName}, {status}"] } } }, { "l": "hi_IN", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hr", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hsb", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hu", "t": { "Avatar of {displayName}": { "v": ["{displayName} profilképe"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} profilképe, {status}"] } } }, { "l": "hy", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ia", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "id", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "ig", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "is", "t": { "Avatar of {displayName}": { "v": ["Auðkennismynd fyrir {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Auðkennismynd fyrir {displayName}, {status}"] } } }, { "l": "it", "t": { "Avatar of {displayName}": { "v": ["Avatar di {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar di {displayName}, {status}"] } } }, { "l": "ja", "t": { "Avatar of {displayName}": { "v": ["{displayName} のアバター"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} のアバター"] } } }, { "l": "ka", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ka_GE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kab", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kk", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "km", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kn", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ko", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "la", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lb", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lt_LT", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lv", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "mk", "t": { "Avatar of {displayName}": { "v": ["Аватар на {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Аватар на {displayName}, {status}"] } } }, { "l": "mn", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "mr", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ms_MY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "my", "t": { "Avatar of {displayName}": { "v": ["{displayName} ၏ ကိုယ်ပွား"] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "nb", "t": { "Avatar of {displayName}": { "v": ["Avataren til {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}'s avatar, {status}"] } } }, { "l": "ne", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "nl", "t": { "Avatar of {displayName}": { "v": ["Avatar van {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar van {displayName}, {status}"] } } }, { "l": "nn_NO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "oc", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "pl", "t": { "Avatar of {displayName}": { "v": ["Awatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Awatar {displayName}, {status}"] } } }, { "l": "ps", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "pt_BR", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "pt_PT", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "ro", "t": { "Avatar of {displayName}": { "v": ["Avatarul lui {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatarul lui {displayName}, {status}"] } } }, { "l": "ru", "t": { "Avatar of {displayName}": { "v": ["Аватар {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Фотография {displayName}, {status}"] } } }, { "l": "sc", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "si", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sk", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "sl", "t": { "Avatar of {displayName}": { "v": ["Podoba {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Prikazna slika {displayName}, {status}"] } } }, { "l": "sq", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sr", "t": { "Avatar of {displayName}": { "v": ["Аватар за {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar za {displayName}, {status}"] } } }, { "l": "sr@latin", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sv", "t": { "Avatar of {displayName}": { "v": ["{displayName}s avatar"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}s avatar, {status}"] } } }, { "l": "sw", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ta", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "th", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "tk", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "tr", "t": { "Avatar of {displayName}": { "v": ["{displayName} avatarı"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} avatarı"] } } }, { "l": "ug", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "uk", "t": { "Avatar of {displayName}": { "v": ["Аватар {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Аватар {displayName}, {status}"] } } }, { "l": "ur_PK", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "uz", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "vi", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "zh_CN", "t": { "Avatar of {displayName}": { "v": ["{displayName}的头像"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}的头像，{status}"] } } }, { "l": "zh_HK", "t": { "Avatar of {displayName}": { "v": ["{displayName} 的頭像"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} 的頭像，{status}"] } } }, { "l": "zh_TW", "t": { "Avatar of {displayName}": { "v": ["{displayName} 的大頭照"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} 的大頭照"] } } }, { "l": "zu_ZA", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }];
const t10 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "away": { "v": ["غير موجود"] }, "do not disturb": { "v": ["يُرجى عدم الإزعاج"] }, "invisible": { "v": ["غير مرئي"] }, "offline": { "v": ["غير متصل"] }, "online": { "v": ["مُتّصِلٌ"] } } }, { "l": "ast", "t": { "away": { "v": ["ausente"] }, "do not disturb": { "v": ["nun molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["desconectáu"] }, "online": { "v": ["en llinia"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": {} }, { "l": "cs_CZ", "t": { "away": { "v": ["pryč"] }, "busy": { "v": ["zaneprádněn(a)"] }, "do not disturb": { "v": ["nerušit"] }, "invisible": { "v": ["neviditelné"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": {} }, { "l": "de", "t": { "away": { "v": ["Abwesend"] }, "busy": { "v": ["Beschäftigt"] }, "do not disturb": { "v": ["Bitte nicht stören"] }, "invisible": { "v": ["Unsichtbar"] }, "offline": { "v": ["Offline"] }, "online": { "v": ["Online"] } } }, { "l": "de_DE", "t": { "away": { "v": ["Abwesend"] }, "busy": { "v": ["Beschäftigt"] }, "do not disturb": { "v": ["Bitte nicht stören"] }, "invisible": { "v": ["Unsichtbar"] }, "offline": { "v": ["Offline"] }, "online": { "v": ["Online"] } } }, { "l": "el", "t": {} }, { "l": "en_GB", "t": { "away": { "v": ["away"] }, "do not disturb": { "v": ["do not disturb"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["fuera de línea"] }, "online": { "v": ["en línea"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": {} }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": {} }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": {} }, { "l": "eu", "t": {} }, { "l": "fa", "t": {} }, { "l": "fi", "t": {} }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "away": { "v": ["absent"] }, "do not disturb": { "v": ["ne pas déranger"] }, "offline": { "v": ["hors ligne"] }, "online": { "v": ["en ligne"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["non molestar"] }, "invisible": { "v": ["invisíbel"] }, "offline": { "v": ["desconectado"] }, "online": { "v": ["conectado"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "away": { "v": ["tidak tersedia"] }, "do not disturb": { "v": ["jangan ganggu"] }, "offline": { "v": ["luring"] }, "online": { "v": ["daring"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "away": { "v": ["í burtu"] }, "do not disturb": { "v": ["ekki ónáða"] }, "offline": { "v": ["ónettengt"] }, "online": { "v": ["nettengt"] } } }, { "l": "it", "t": { "away": { "v": ["via"] }, "do not disturb": { "v": ["non disturbare"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ja", "t": {} }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": {} }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": {} }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "away": { "v": ["weg"] }, "do not disturb": { "v": ["niet storen"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "away": { "v": ["stąd"] }, "do not disturb": { "v": ["nie przeszkadzać"] }, "invisible": { "v": ["niewidzialny"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "away": { "v": ["ausente"] }, "do not disturb": { "v": ["não perturbe"] }, "invisible": { "v": ["invisível"] }, "offline": { "v": ["desligada"] }, "online": { "v": ["ligado"] } } }, { "l": "pt_PT", "t": {} }, { "l": "ro", "t": { "away": { "v": ["plecat"] }, "do not disturb": { "v": ["nu deranjați"] }, "offline": { "v": ["deconectat"] }, "online": { "v": ["online"] } } }, { "l": "ru", "t": { "away": { "v": ["отсутствие"] }, "do not disturb": { "v": ["не беспокоить"] }, "offline": { "v": ["офлайн"] }, "online": { "v": ["онлайн"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": {} }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "away": { "v": ["одсутан"] }, "busy": { "v": ["заузет"] }, "do not disturb": { "v": ["не узнемиравај"] }, "invisible": { "v": ["невидљиво"] }, "offline": { "v": ["ван мреже"] }, "online": { "v": ["на мрежи"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "away": { "v": ["borta"] }, "busy": { "v": ["upptagen"] }, "do not disturb": { "v": ["stör ej"] }, "invisible": { "v": ["osynlig"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "away": { "v": ["Uzakta"] }, "busy": { "v": ["meşgul"] }, "do not disturb": { "v": ["Rahatsız etmeyin"] }, "invisible": { "v": ["görünmez"] }, "offline": { "v": ["Çevrim dışı"] }, "online": { "v": ["Çevrim içi"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "away": { "v": ["відсутній"] }, "do not disturb": { "v": ["не турбувати"] }, "offline": { "v": ["не в мережі"] }, "online": { "v": ["в мережі"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": {} }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": {} }, { "l": "zh_HK", "t": { "away": { "v": ["離開"] }, "do not disturb": { "v": ["請勿打擾"] }, "offline": { "v": ["離線"] }, "online": { "v": ["在線"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t11 = [{ "l": "af", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ar", "t": { "Back to provider selection": { "v": ["عودة إلى اختيار المُزوِّد"] }, "Close Smart Picker": { "v": ["أغلِق اللاقط الذكي Smart Picker"] }, "Smart Picker": { "v": ["اللاقط الذكي smart picker"] } } }, { "l": "ast", "t": { "Back to provider selection": { "v": ["Volver a la seleición de fornidores"] }, "Close Smart Picker": { "v": ["Zarrar la seleición intelixente"] }, "Smart Picker": { "v": ["Selector intelixente"] } } }, { "l": "az", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "be", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "bg", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "bn_BD", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "br", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "bs", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ca", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "cs", "t": { "Back to provider selection": { "v": ["Zpět na výběr poskytovatele"] }, "Close Smart Picker": { "v": ["Zavřít inteligentní výběr"] }, "Smart Picker": { "v": ["Inteligentní výběr"] } } }, { "l": "cs_CZ", "t": { "Back to provider selection": { "v": ["Zpět na výběr poskytovatele"] }, "Close Smart Picker": { "v": ["Zavřít inteligentní výběr"] }, "Smart Picker": { "v": ["Inteligentní výběr"] } } }, { "l": "cy_GB", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "da", "t": { "Back to provider selection": { "v": ["Tilbage til udbydervalg"] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "de", "t": { "Back to provider selection": { "v": ["Zurück zur Anbieterauswahl"] }, "Close Smart Picker": { "v": ["Smart Picker schließen"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "de_DE", "t": { "Back to provider selection": { "v": ["Zurück zur Anbieterauswahl"] }, "Close Smart Picker": { "v": ["Smart Picker schließen"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "el", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "en_GB", "t": { "Back to provider selection": { "v": ["Back to provider selection"] }, "Close Smart Picker": { "v": ["Close Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "eo", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es", "t": { "Back to provider selection": { "v": ["Volver a la selección de proveedor"] }, "Close Smart Picker": { "v": ["Cerrar selector inteligente"] }, "Smart Picker": { "v": ["Selector inteligente"] } } }, { "l": "es_419", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_AR", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_CL", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_CO", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_CR", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_DO", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_EC", "t": { "Back to provider selection": { "v": ["Volver a la selección de proveedor"] }, "Close Smart Picker": { "v": ["Cerrar selector inteligente"] }, "Smart Picker": { "v": ["Selector inteligente"] } } }, { "l": "es_GT", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_HN", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_MX", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_NI", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PA", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PE", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PR", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_PY", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_SV", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "es_UY", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "et_EE", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "eu", "t": { "Back to provider selection": { "v": ["Itzuli hornitzaileen hautapenera"] }, "Close Smart Picker": { "v": ["Itxi hautatzaile adimenduna"] }, "Smart Picker": { "v": ["Hautatzaile adimenduna"] } } }, { "l": "fa", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "fi", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "fo", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "fr", "t": { "Back to provider selection": { "v": ["Revenir à la sélection du fournisseur"] }, "Close Smart Picker": { "v": ["Fermer le sélecteur intelligent"] }, "Smart Picker": { "v": ["Sélecteur intelligent"] } } }, { "l": "gd", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "gl", "t": { "Back to provider selection": { "v": ["Volver á selección do provedor"] }, "Close Smart Picker": { "v": ["Pechar o Selector intelixente"] }, "Smart Picker": { "v": ["Selector intelixente"] } } }, { "l": "he", "t": { "Back to provider selection": { "v": ["חזרה לבחירת ספק"] }, "Close Smart Picker": { "v": ["סגירת הבורר החכם"] }, "Smart Picker": { "v": ["בורר חכם"] } } }, { "l": "hi_IN", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hr", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hsb", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hu", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "hy", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ia", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "id", "t": { "Back to provider selection": { "v": ["Kembali ke pemilihan penyedia"] }, "Close Smart Picker": { "v": ["Tutup Pemilih Cerdas"] }, "Smart Picker": { "v": ["Pemilih Cerdas"] } } }, { "l": "ig", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "is", "t": { "Back to provider selection": { "v": ["Til baka í val á þjónustuveitu"] }, "Close Smart Picker": { "v": ["Loka snjall-veljara"] }, "Smart Picker": { "v": ["Snjall-veljari"] } } }, { "l": "it", "t": { "Back to provider selection": { "v": ["Torna alla selezione del provider"] }, "Close Smart Picker": { "v": ["Chiudere lo Smart Picker"] }, "Smart Picker": { "v": ["Picker intelligente"] } } }, { "l": "ja", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ka", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ka_GE", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "kab", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "kk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "km", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "kn", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ko", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "la", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lb", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lo", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lt_LT", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "lv", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "mk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "mn", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "mr", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ms_MY", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "my", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "nb", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ne", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "nl", "t": { "Back to provider selection": { "v": ["Terug naar provider selectie"] }, "Close Smart Picker": { "v": ["Sluit Slimme Kiezer"] }, "Smart Picker": { "v": ["Slimme Kiezer"] } } }, { "l": "nn_NO", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "oc", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "pl", "t": { "Back to provider selection": { "v": ["Powrót do wyboru dostawcy"] }, "Close Smart Picker": { "v": ["Zamknij inteligentny selektor"] }, "Smart Picker": { "v": ["Inteligentny Picker"] } } }, { "l": "ps", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "pt_BR", "t": { "Back to provider selection": { "v": ["Voltar para seleção de provedor"] }, "Close Smart Picker": { "v": ["Fechar Seletor Inteligente"] }, "Smart Picker": { "v": ["Seletor Inteligente"] } } }, { "l": "pt_PT", "t": { "Back to provider selection": { "v": ["Voltar à seleção de fornecedor"] }, "Close Smart Picker": { "v": ['Fechar "Smart Picker"'] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "ro", "t": { "Back to provider selection": { "v": ["Înapoi la selecția providerului"] }, "Close Smart Picker": { "v": ["Închide Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "ru", "t": { "Back to provider selection": { "v": ["Вернуться к выбору провайдера"] }, "Close Smart Picker": { "v": ["Закрыть интеллектуальный выбор"] }, "Smart Picker": { "v": ["Умный выбор"] } } }, { "l": "sc", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "si", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sl", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sq", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sr", "t": { "Back to provider selection": { "v": ["Назад на избор пружаоца"] }, "Close Smart Picker": { "v": ["Затвори паметни бирач"] }, "Smart Picker": { "v": ["Паметни бирач"] } } }, { "l": "sr@latin", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "sv", "t": { "Back to provider selection": { "v": ["Tillbaka till leverantörsval"] }, "Close Smart Picker": { "v": ["Stäng Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "sw", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "ta", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "th", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "tk", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "tr", "t": { "Back to provider selection": { "v": ["Sağlayıcı seçimine dön"] }, "Close Smart Picker": { "v": ["Akıllı seçimi kapat"] }, "Smart Picker": { "v": ["Akıllı seçim"] } } }, { "l": "ug", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "uk", "t": { "Back to provider selection": { "v": ["Назад до вибору постачальника"] }, "Close Smart Picker": { "v": ["Закрити асистент вибору"] }, "Smart Picker": { "v": ["Асистент вибору"] } } }, { "l": "ur_PK", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "uz", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "vi", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "zh_CN", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }, { "l": "zh_HK", "t": { "Back to provider selection": { "v": ["回到提供者選擇"] }, "Close Smart Picker": { "v": ["關閉 Smart Picker"] }, "Smart Picker": { "v": ["Smart Picker"] } } }, { "l": "zh_TW", "t": { "Back to provider selection": { "v": ["回到提供者選擇"] }, "Close Smart Picker": { "v": ["關閉智慧型挑選器"] }, "Smart Picker": { "v": ["智慧型挑選器"] } } }, { "l": "zu_ZA", "t": { "Back to provider selection": { "v": [""] }, "Close Smart Picker": { "v": [""] }, "Smart Picker": { "v": [""] } } }];
const t12 = [{ "l": "af", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ar", "t": { "Cancel changes": { "v": ["إلغاء التغييرات"] }, "Confirm changes": { "v": ["تأكيد التغييرات"] } } }, { "l": "ast", "t": { "Cancel changes": { "v": ["Encaboxar los cambeos"] }, "Confirm changes": { "v": ["Confirmar los cambeos"] } } }, { "l": "az", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "be", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "bg", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "bn_BD", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "br", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "bs", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ca", "t": { "Cancel changes": { "v": ["Cancel·la els canvis"] }, "Confirm changes": { "v": ["Confirmeu els canvis"] } } }, { "l": "cs", "t": { "Cancel changes": { "v": ["Zrušit změny"] }, "Confirm changes": { "v": ["Potvrdit změny"] } } }, { "l": "cs_CZ", "t": { "Cancel changes": { "v": ["Zrušit změny"] }, "Confirm changes": { "v": ["Potvrdit změny"] } } }, { "l": "cy_GB", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "da", "t": { "Cancel changes": { "v": ["Annuller ændringer"] }, "Confirm changes": { "v": ["Bekræft ændringer"] } } }, { "l": "de", "t": { "Cancel changes": { "v": ["Änderungen verwerfen"] }, "Confirm changes": { "v": ["Änderungen bestätigen"] } } }, { "l": "de_DE", "t": { "Cancel changes": { "v": ["Änderungen verwerfen"] }, "Confirm changes": { "v": ["Änderungen bestätigen"] } } }, { "l": "el", "t": { "Cancel changes": { "v": ["Ακύρωση αλλαγών"] }, "Confirm changes": { "v": ["Επιβεβαίωση αλλαγών"] } } }, { "l": "en_GB", "t": { "Cancel changes": { "v": ["Cancel changes"] }, "Confirm changes": { "v": ["Confirm changes"] } } }, { "l": "eo", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es", "t": { "Cancel changes": { "v": ["Cancelar cambios"] }, "Confirm changes": { "v": ["Confirmar cambios"] } } }, { "l": "es_419", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_AR", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_CL", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_CO", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_CR", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_DO", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_EC", "t": { "Cancel changes": { "v": ["Cancelar cambios"] }, "Confirm changes": { "v": ["Confirmar cambios"] } } }, { "l": "es_GT", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_HN", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_MX", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_NI", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PA", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PE", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PR", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_PY", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_SV", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "es_UY", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "et_EE", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "eu", "t": { "Cancel changes": { "v": ["Ezeztatu aldaketak"] }, "Confirm changes": { "v": ["Baieztatu aldaketak"] } } }, { "l": "fa", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "fi", "t": { "Cancel changes": { "v": ["Peruuta muutokset"] }, "Confirm changes": { "v": ["Vahvista muutokset"] } } }, { "l": "fo", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "fr", "t": { "Cancel changes": { "v": ["Annuler les modifications"] }, "Confirm changes": { "v": ["Confirmer les modifications"] } } }, { "l": "gd", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "gl", "t": { "Cancel changes": { "v": ["Cancelar os cambios"] }, "Confirm changes": { "v": ["Confirma os cambios"] } } }, { "l": "he", "t": { "Cancel changes": { "v": ["ביטול שינויים"] }, "Confirm changes": { "v": ["אישור השינויים"] } } }, { "l": "hi_IN", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "hr", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "hsb", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "hu", "t": { "Cancel changes": { "v": ["Változtatások elvetése"] }, "Confirm changes": { "v": ["Változtatások megerősítése"] } } }, { "l": "hy", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ia", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "id", "t": { "Cancel changes": { "v": ["Batalkan perubahan"] }, "Confirm changes": { "v": ["Konfirmasikan perubahan"] } } }, { "l": "ig", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "is", "t": { "Cancel changes": { "v": ["Hætta við breytingar"] }, "Confirm changes": { "v": ["Staðfesta breytingar"] } } }, { "l": "it", "t": { "Cancel changes": { "v": ["Annulla modifiche"] }, "Confirm changes": { "v": ["Conferma modifiche"] } } }, { "l": "ja", "t": { "Cancel changes": { "v": ["変更をキャンセル"] }, "Confirm changes": { "v": ["変更を承認"] } } }, { "l": "ka", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ka_GE", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "kab", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "kk", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "km", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "kn", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ko", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "la", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lb", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lo", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lt_LT", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "lv", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "mk", "t": { "Cancel changes": { "v": ["Откажи ги промените"] }, "Confirm changes": { "v": ["Потврди ги промените"] } } }, { "l": "mn", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "mr", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ms_MY", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "my", "t": { "Cancel changes": { "v": ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { "v": ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { "l": "nb", "t": { "Cancel changes": { "v": ["Avbryt endringer"] }, "Confirm changes": { "v": ["Bekreft endringer"] } } }, { "l": "ne", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "nl", "t": { "Cancel changes": { "v": ["Wijzigingen annuleren"] }, "Confirm changes": { "v": ["Wijzigingen bevestigen"] } } }, { "l": "nn_NO", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "oc", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "pl", "t": { "Cancel changes": { "v": ["Anuluj zmiany"] }, "Confirm changes": { "v": ["Potwierdź zmiany"] } } }, { "l": "ps", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "pt_BR", "t": { "Cancel changes": { "v": ["Cancelar alterações"] }, "Confirm changes": { "v": ["Confirmar alterações"] } } }, { "l": "pt_PT", "t": { "Cancel changes": { "v": ["Cancelar alterações"] }, "Confirm changes": { "v": ["Confirmar alterações"] } } }, { "l": "ro", "t": { "Cancel changes": { "v": ["Anulează modificările"] }, "Confirm changes": { "v": ["Confirmați modificările"] } } }, { "l": "ru", "t": { "Cancel changes": { "v": ["Отменить изменения"] }, "Confirm changes": { "v": ["Подтвердить изменения"] } } }, { "l": "sc", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "si", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "sk", "t": { "Cancel changes": { "v": ["Zrušiť zmeny"] }, "Confirm changes": { "v": ["Potvrdiť zmeny"] } } }, { "l": "sl", "t": { "Cancel changes": { "v": ["Prekliči spremembe"] }, "Confirm changes": { "v": ["Potrdi spremembe"] } } }, { "l": "sq", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "sr", "t": { "Cancel changes": { "v": ["Откажи измене"] }, "Confirm changes": { "v": ["Потврдите измене"] } } }, { "l": "sr@latin", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "sv", "t": { "Cancel changes": { "v": ["Avbryt ändringar"] }, "Confirm changes": { "v": ["Bekräfta ändringar"] } } }, { "l": "sw", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "ta", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "th", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "tk", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "tr", "t": { "Cancel changes": { "v": ["Değişiklikleri iptal et"] }, "Confirm changes": { "v": ["Değişiklikleri onayla"] } } }, { "l": "ug", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "uk", "t": { "Cancel changes": { "v": ["Скасувати зміни"] }, "Confirm changes": { "v": ["Підтвердити зміни"] } } }, { "l": "ur_PK", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "uz", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "vi", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }, { "l": "zh_CN", "t": { "Cancel changes": { "v": ["取消更改"] }, "Confirm changes": { "v": ["确认更改"] } } }, { "l": "zh_HK", "t": { "Cancel changes": { "v": ["取消更改"] }, "Confirm changes": { "v": ["確認更改"] } } }, { "l": "zh_TW", "t": { "Cancel changes": { "v": ["取消變更"] }, "Confirm changes": { "v": ["確認變更"] } } }, { "l": "zu_ZA", "t": { "Cancel changes": { "v": [""] }, "Confirm changes": { "v": [""] } } }];
const t13 = [{ "l": "af", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ar", "t": { "Change name": { "v": ["تغيير الاسم"] }, "Close sidebar": { "v": ["قفل الشريط الجانبي"] }, "Favorite": { "v": ["المُفضَّلة"] } } }, { "l": "ast", "t": { "Change name": { "v": ["Camudar el nome"] }, "Close sidebar": { "v": ["Zarrar la barra llateral"] }, "Favorite": { "v": ["Favoritu"] } } }, { "l": "az", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "be", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "bg", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "bn_BD", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "br", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "bs", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ca", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["Tancar la barra lateral"] }, "Favorite": { "v": ["Preferit"] } } }, { "l": "cs", "t": { "Change name": { "v": ["Změnit název"] }, "Close sidebar": { "v": ["Zavřít postranní panel"] }, "Favorite": { "v": ["Oblíbené"] } } }, { "l": "cs_CZ", "t": { "Change name": { "v": ["Změnit název"] }, "Close sidebar": { "v": ["Zavřít postranní panel"] }, "Favorite": { "v": ["Oblíbené"] } } }, { "l": "cy_GB", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "da", "t": { "Change name": { "v": ["Ændre navn"] }, "Close sidebar": { "v": ["Luk sidepanel"] }, "Favorite": { "v": ["Favorit"] } } }, { "l": "de", "t": { "Change name": { "v": ["Namen ändern"] }, "Close sidebar": { "v": ["Seitenleiste schließen"] }, "Favorite": { "v": ["Favorit"] } } }, { "l": "de_DE", "t": { "Change name": { "v": ["Namen ändern"] }, "Close sidebar": { "v": ["Seitenleiste schließen"] }, "Favorite": { "v": ["Favorit"] } } }, { "l": "el", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["Κλείσιμο πλευρικής μπάρας"] }, "Favorite": { "v": ["Αγαπημένα"] } } }, { "l": "en_GB", "t": { "Change name": { "v": ["Change name"] }, "Close sidebar": { "v": ["Close sidebar"] }, "Favorite": { "v": ["Favourite"] } } }, { "l": "eo", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es", "t": { "Change name": { "v": ["Cambiar nombre"] }, "Close sidebar": { "v": ["Cerrar barra lateral"] }, "Favorite": { "v": ["Favorito"] } } }, { "l": "es_419", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_AR", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_CL", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_CO", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_CR", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_DO", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_EC", "t": { "Change name": { "v": ["Cambiar nombre"] }, "Close sidebar": { "v": ["Cerrar barra lateral"] }, "Favorite": { "v": ["Favorito"] } } }, { "l": "es_GT", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_HN", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_MX", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_NI", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_PA", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_PE", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_PR", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_PY", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_SV", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "es_UY", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "et_EE", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "eu", "t": { "Change name": { "v": ["Aldatu izena"] }, "Close sidebar": { "v": ["Itxi albo-barra"] }, "Favorite": { "v": ["Gogokoa"] } } }, { "l": "fa", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "fi", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "fo", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "fr", "t": { "Change name": { "v": ["Modifier le nom"] }, "Close sidebar": { "v": ["Fermer la barre latérale"] }, "Favorite": { "v": ["Favori"] } } }, { "l": "gd", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "gl", "t": { "Change name": { "v": ["Cambiar o nome"] }, "Close sidebar": { "v": ["Pechar a barra lateral"] }, "Favorite": { "v": ["Favorito"] } } }, { "l": "he", "t": { "Change name": { "v": ["החלפת שם"] }, "Close sidebar": { "v": ["סגירת סרגל הצד"] }, "Favorite": { "v": ["למועדפים"] } } }, { "l": "hi_IN", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "hr", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "hsb", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "hu", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["Oldalsáv bezárása"] }, "Favorite": { "v": ["Kedvenc"] } } }, { "l": "hy", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ia", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "id", "t": { "Change name": { "v": ["Ubah nama"] }, "Close sidebar": { "v": ["Tutup bilah sisi"] }, "Favorite": { "v": ["Favorit"] } } }, { "l": "ig", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "is", "t": { "Change name": { "v": ["Breyta nafni"] }, "Close sidebar": { "v": ["Loka hliðarstiku"] }, "Favorite": { "v": ["Eftirlæti"] } } }, { "l": "it", "t": { "Change name": { "v": ["Cambia nome"] }, "Close sidebar": { "v": ["Chiudi la barra laterale"] }, "Favorite": { "v": ["Preferito"] } } }, { "l": "ja", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["サイドバーを閉じる"] }, "Favorite": { "v": ["お気に入り"] } } }, { "l": "ka", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ka_GE", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "kab", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "kk", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "km", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "kn", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ko", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "la", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "lb", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "lo", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "lt_LT", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "lv", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "mk", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": ["Фаворити"] } } }, { "l": "mn", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "mr", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ms_MY", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "my", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "nb", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["Lukk sidepanel"] }, "Favorite": { "v": ["Favoritt"] } } }, { "l": "ne", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "nl", "t": { "Change name": { "v": ["Verander naam"] }, "Close sidebar": { "v": ["Sluit sidebar"] }, "Favorite": { "v": ["Favoriet"] } } }, { "l": "nn_NO", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "oc", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "pl", "t": { "Change name": { "v": ["Zmień nazwę"] }, "Close sidebar": { "v": ["Zamknij pasek boczny"] }, "Favorite": { "v": ["Ulubiony"] } } }, { "l": "ps", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "pt_BR", "t": { "Change name": { "v": ["Mude o nome"] }, "Close sidebar": { "v": ["Fechar barra lateral"] }, "Favorite": { "v": ["Favorito"] } } }, { "l": "pt_PT", "t": { "Change name": { "v": ["Alterar nome"] }, "Close sidebar": { "v": ["Fechar barra lateral"] }, "Favorite": { "v": ["Favorito"] } } }, { "l": "ro", "t": { "Change name": { "v": ["Modifică numele"] }, "Close sidebar": { "v": ["Închide bara laterală"] }, "Favorite": { "v": ["Favorit"] } } }, { "l": "ru", "t": { "Change name": { "v": ["Изменить имя"] }, "Close sidebar": { "v": ["Закрыть сайдбар"] }, "Favorite": { "v": ["Избранное"] } } }, { "l": "sc", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "si", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "sk", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "sl", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["Zapri stransko vrstico"] }, "Favorite": { "v": ["Priljubljeno"] } } }, { "l": "sq", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "sr", "t": { "Change name": { "v": ["Измени назив"] }, "Close sidebar": { "v": ["Затвори бочну траку"] }, "Favorite": { "v": ["Омиљени"] } } }, { "l": "sr@latin", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "sv", "t": { "Change name": { "v": ["Ändra namn"] }, "Close sidebar": { "v": ["Stäng sidopanel"] }, "Favorite": { "v": ["Favorit"] } } }, { "l": "sw", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "ta", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "th", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "tk", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "tr", "t": { "Change name": { "v": ["Adı değiştir"] }, "Close sidebar": { "v": ["Yan çubuğu kapat"] }, "Favorite": { "v": ["Sık kullanılanlara ekle"] } } }, { "l": "ug", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "uk", "t": { "Change name": { "v": ["Змінити назву"] }, "Close sidebar": { "v": ["Закрити бічну панель"] }, "Favorite": { "v": ["Із зірочкою"] } } }, { "l": "ur_PK", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "uz", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "vi", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }, { "l": "zh_CN", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": ["关闭侧边栏"] }, "Favorite": { "v": ["喜爱"] } } }, { "l": "zh_HK", "t": { "Change name": { "v": ["更改名稱"] }, "Close sidebar": { "v": ["關閉側邊欄"] }, "Favorite": { "v": ["喜愛"] } } }, { "l": "zh_TW", "t": { "Change name": { "v": ["變更名稱"] }, "Close sidebar": { "v": ["關閉側邊欄"] }, "Favorite": { "v": ["最愛"] } } }, { "l": "zu_ZA", "t": { "Change name": { "v": [""] }, "Close sidebar": { "v": [""] }, "Favorite": { "v": [""] } } }];
const t14 = [{ "l": "af", "t": { "No results": { "v": [""] } } }, { "l": "ar", "t": { "Clear selected": { "v": ["مَحْوُ المُحدّد"] }, "Deselect {option}": { "v": ["إلغاء تحديد {option}"] }, "No results": { "v": ["ليس هناك أية نتيجة"] } } }, { "l": "ast", "t": { "Clear selected": { "v": ["Borrar lo seleicionao"] }, "Deselect {option}": { "v": ["Deseleicionar «{option}»"] }, "No results": { "v": ["Nun hai nengún resultáu"] } } }, { "l": "az", "t": { "No results": { "v": [""] } } }, { "l": "be", "t": { "No results": { "v": [""] } } }, { "l": "bg", "t": { "No results": { "v": [""] } } }, { "l": "bn_BD", "t": { "No results": { "v": [""] } } }, { "l": "br", "t": { "No results": { "v": ["Disoc'h ebet"] } } }, { "l": "bs", "t": { "No results": { "v": [""] } } }, { "l": "ca", "t": { "No results": { "v": ["Sense resultats"] } } }, { "l": "cs", "t": { "No results": { "v": ["Nic nenalezeno"] } } }, { "l": "cs_CZ", "t": { "Clear selected": { "v": ["Vyčistit vybrané"] }, "Deselect {option}": { "v": ["Zrušit výběr {option}"] }, "No results": { "v": ["Nic nenalezeno"] }, "Options": { "v": ["Možnosti"] } } }, { "l": "cy_GB", "t": { "No results": { "v": [""] } } }, { "l": "da", "t": { "No results": { "v": ["Ingen resultater"] } } }, { "l": "de", "t": { "Clear selected": { "v": ["Auswahl leeren"] }, "Deselect {option}": { "v": ["{option} abwählen"] }, "No results": { "v": ["Keine Ergebnisse"] }, "Options": { "v": ["Optionen"] } } }, { "l": "de_DE", "t": { "Clear selected": { "v": ["Auswahl leeren"] }, "Deselect {option}": { "v": ["{option} abwählen"] }, "No results": { "v": ["Keine Ergebnisse"] }, "Options": { "v": ["Optionen"] } } }, { "l": "el", "t": { "No results": { "v": ["Κανένα αποτέλεσμα"] } } }, { "l": "en_GB", "t": { "No results": { "v": ["No results"] } } }, { "l": "eo", "t": { "No results": { "v": ["La rezulto forestas"] } } }, { "l": "es", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "No results": { "v": [" Ningún resultado"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_419", "t": { "No results": { "v": [""] } } }, { "l": "es_AR", "t": { "No results": { "v": [""] } } }, { "l": "es_CL", "t": { "No results": { "v": [""] } } }, { "l": "es_CO", "t": { "No results": { "v": [""] } } }, { "l": "es_CR", "t": { "No results": { "v": [""] } } }, { "l": "es_DO", "t": { "No results": { "v": [""] } } }, { "l": "es_EC", "t": { "No results": { "v": ["Sin resultados"] } } }, { "l": "es_GT", "t": { "No results": { "v": [""] } } }, { "l": "es_HN", "t": { "No results": { "v": [""] } } }, { "l": "es_MX", "t": { "No results": { "v": [""] } } }, { "l": "es_NI", "t": { "No results": { "v": [""] } } }, { "l": "es_PA", "t": { "No results": { "v": [""] } } }, { "l": "es_PE", "t": { "No results": { "v": [""] } } }, { "l": "es_PR", "t": { "No results": { "v": [""] } } }, { "l": "es_PY", "t": { "No results": { "v": [""] } } }, { "l": "es_SV", "t": { "No results": { "v": [""] } } }, { "l": "es_UY", "t": { "No results": { "v": [""] } } }, { "l": "et_EE", "t": { "No results": { "v": [""] } } }, { "l": "eu", "t": { "No results": { "v": ["Emaitzarik ez"] } } }, { "l": "fa", "t": { "No results": { "v": [""] } } }, { "l": "fi", "t": { "No results": { "v": ["Ei tuloksia"] } } }, { "l": "fo", "t": { "No results": { "v": [""] } } }, { "l": "fr", "t": { "Clear selected": { "v": ["Vider la sélection"] }, "Deselect {option}": { "v": ["Désélectionner {option}"] }, "No results": { "v": ["Aucun résultat"] } } }, { "l": "gd", "t": { "No results": { "v": [""] } } }, { "l": "gl", "t": { "Clear selected": { "v": ["Limpar o seleccionado"] }, "Deselect {option}": { "v": ["Desmarcar {opción}"] }, "No results": { "v": ["Sen resultados"] }, "Options": { "v": ["Opcións"] } } }, { "l": "he", "t": { "No results": { "v": ["אין תוצאות"] } } }, { "l": "hi_IN", "t": { "No results": { "v": [""] } } }, { "l": "hr", "t": { "No results": { "v": [""] } } }, { "l": "hsb", "t": { "No results": { "v": [""] } } }, { "l": "hu", "t": { "No results": { "v": ["Nincs találat"] } } }, { "l": "hy", "t": { "No results": { "v": [""] } } }, { "l": "ia", "t": { "No results": { "v": [""] } } }, { "l": "id", "t": { "Clear selected": { "v": ["Hapus terpilih"] }, "Deselect {option}": { "v": ["Batalkan pemilihan {option}"] }, "No results": { "v": ["Tidak ada hasil"] } } }, { "l": "ig", "t": { "No results": { "v": [""] } } }, { "l": "is", "t": { "Clear selected": { "v": ["Hreinsa valið"] }, "Deselect {option}": { "v": ["Afvelja {option}"] }, "No results": { "v": ["Engar niðurstöður"] } } }, { "l": "it", "t": { "Clear selected": { "v": ["Cancella selezionati"] }, "Deselect {option}": { "v": ["Deselezionare {option}"] }, "No results": { "v": ["Nessun risultato"] } } }, { "l": "ja", "t": { "No results": { "v": ["なし"] } } }, { "l": "ka", "t": { "No results": { "v": [""] } } }, { "l": "ka_GE", "t": { "No results": { "v": [""] } } }, { "l": "kab", "t": { "No results": { "v": [""] } } }, { "l": "kk", "t": { "No results": { "v": [""] } } }, { "l": "km", "t": { "No results": { "v": [""] } } }, { "l": "kn", "t": { "No results": { "v": [""] } } }, { "l": "ko", "t": { "No results": { "v": [""] } } }, { "l": "la", "t": { "No results": { "v": [""] } } }, { "l": "lb", "t": { "No results": { "v": [""] } } }, { "l": "lo", "t": { "No results": { "v": [""] } } }, { "l": "lt_LT", "t": { "No results": { "v": ["Nėra rezultatų"] } } }, { "l": "lv", "t": { "No results": { "v": ["Nav rezultātu"] } } }, { "l": "mk", "t": { "No results": { "v": ["Нема резултати"] } } }, { "l": "mn", "t": { "No results": { "v": [""] } } }, { "l": "mr", "t": { "No results": { "v": [""] } } }, { "l": "ms_MY", "t": { "No results": { "v": [""] } } }, { "l": "my", "t": { "No results": { "v": ["ရလဒ်မရှိပါ"] } } }, { "l": "nb", "t": { "No results": { "v": ["Ingen resultater"] } } }, { "l": "ne", "t": { "No results": { "v": [""] } } }, { "l": "nl", "t": { "No results": { "v": ["Geen resultaten"] } } }, { "l": "nn_NO", "t": { "No results": { "v": [""] } } }, { "l": "oc", "t": { "No results": { "v": ["Cap de resultat"] } } }, { "l": "pl", "t": { "Clear selected": { "v": ["Wyczyść wybrane"] }, "Deselect {option}": { "v": ["Odznacz {option}"] }, "No results": { "v": ["Brak wyników"] }, "Options": { "v": ["Opcje"] } } }, { "l": "ps", "t": { "No results": { "v": [""] } } }, { "l": "pt_BR", "t": { "Clear selected": { "v": ["Limpar selecionado"] }, "Deselect {option}": { "v": ["Desmarque {option}"] }, "No results": { "v": ["Sem resultados"] } } }, { "l": "pt_PT", "t": { "No results": { "v": ["Sem resultados"] } } }, { "l": "ro", "t": { "Clear selected": { "v": ["Șterge selecția"] }, "Deselect {option}": { "v": ["Deselctează {option}"] }, "No results": { "v": ["Nu există rezultate"] } } }, { "l": "ru", "t": { "No results": { "v": ["Результаты отсуствуют"] } } }, { "l": "sc", "t": { "No results": { "v": [""] } } }, { "l": "si", "t": { "No results": { "v": [""] } } }, { "l": "sk", "t": { "No results": { "v": ["Žiadne výsledky"] } } }, { "l": "sl", "t": { "No results": { "v": ["Ni zadetkov"] } } }, { "l": "sq", "t": { "No results": { "v": [""] } } }, { "l": "sr", "t": { "Clear selected": { "v": ["Обриши изабрано"] }, "Deselect {option}": { "v": ["Уклони избор {option}"] }, "No results": { "v": ["Нема резултата"] }, "Options": { "v": ["Опције"] } } }, { "l": "sr@latin", "t": { "No results": { "v": [""] } } }, { "l": "sv", "t": { "Clear selected": { "v": ["Rensa val"] }, "Deselect {option}": { "v": ["Avmarkera {option}"] }, "No results": { "v": ["Inga resultat"] }, "Options": { "v": ["Alternativ"] } } }, { "l": "sw", "t": { "No results": { "v": [""] } } }, { "l": "ta", "t": { "No results": { "v": [""] } } }, { "l": "th", "t": { "No results": { "v": [""] } } }, { "l": "tk", "t": { "No results": { "v": [""] } } }, { "l": "tr", "t": { "Clear selected": { "v": ["Seçilmişleri temizle"] }, "Deselect {option}": { "v": ["{option} bırak"] }, "No results": { "v": ["Herhangi bir sonuç bulunamadı"] }, "Options": { "v": ["Seçenekler"] } } }, { "l": "ug", "t": { "No results": { "v": [""] } } }, { "l": "uk", "t": { "Clear selected": { "v": ["Очистити вибране"] }, "Deselect {option}": { "v": ["Зняти вибір {option}"] }, "No results": { "v": ["Відсутні результати"] } } }, { "l": "ur_PK", "t": { "No results": { "v": [""] } } }, { "l": "uz", "t": { "No results": { "v": [""] } } }, { "l": "vi", "t": { "No results": { "v": [""] } } }, { "l": "zh_CN", "t": { "No results": { "v": ["无结果"] } } }, { "l": "zh_HK", "t": { "No results": { "v": ["無結果"] } } }, { "l": "zh_TW", "t": { "No results": { "v": ["無結果"] } } }, { "l": "zu_ZA", "t": { "No results": { "v": [""] } } }];
const t15 = [{ "l": "af", "t": { "Clear text": { "v": [""] } } }, { "l": "ar", "t": { "Clear text": { "v": ["مَحْوُ النص"] }, "Save changes": { "v": ["حفظ التغييرات"] } } }, { "l": "ast", "t": { "Clear text": { "v": ["Borrar el testu"] }, "Save changes": { "v": ["Guardar los cambeos"] } } }, { "l": "az", "t": { "Clear text": { "v": [""] } } }, { "l": "be", "t": { "Clear text": { "v": [""] } } }, { "l": "bg", "t": { "Clear text": { "v": [""] } } }, { "l": "bn_BD", "t": { "Clear text": { "v": [""] } } }, { "l": "br", "t": { "Clear text": { "v": [""] } } }, { "l": "bs", "t": { "Clear text": { "v": [""] } } }, { "l": "ca", "t": { "Clear text": { "v": ["Netejar text"] } } }, { "l": "cs", "t": { "Clear text": { "v": ["Čitelný text"] } } }, { "l": "cs_CZ", "t": { "Clear text": { "v": ["Čitelný text"] }, "Save changes": { "v": ["Uložit změny"] } } }, { "l": "cy_GB", "t": { "Clear text": { "v": [""] } } }, { "l": "da", "t": { "Clear text": { "v": ["Ryd tekst"] } } }, { "l": "de", "t": { "Clear text": { "v": ["Klartext"] }, "Save changes": { "v": ["Änderungen speichern"] } } }, { "l": "de_DE", "t": { "Clear text": { "v": ["Klartext"] }, "Save changes": { "v": ["Änderungen speichern"] } } }, { "l": "el", "t": { "Clear text": { "v": ["Εκκαθάριση κειμένου"] } } }, { "l": "en_GB", "t": { "Clear text": { "v": ["Clear text"] } } }, { "l": "eo", "t": { "Clear text": { "v": [""] } } }, { "l": "es", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_419", "t": { "Clear text": { "v": [""] } } }, { "l": "es_AR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CL", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CO", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_DO", "t": { "Clear text": { "v": [""] } } }, { "l": "es_EC", "t": { "Clear text": { "v": ["Limpiar texto"] } } }, { "l": "es_GT", "t": { "Clear text": { "v": [""] } } }, { "l": "es_HN", "t": { "Clear text": { "v": [""] } } }, { "l": "es_MX", "t": { "Clear text": { "v": [""] } } }, { "l": "es_NI", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PA", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PE", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PY", "t": { "Clear text": { "v": [""] } } }, { "l": "es_SV", "t": { "Clear text": { "v": [""] } } }, { "l": "es_UY", "t": { "Clear text": { "v": [""] } } }, { "l": "et_EE", "t": { "Clear text": { "v": [""] } } }, { "l": "eu", "t": { "Clear text": { "v": ["Garbitu testua"] } } }, { "l": "fa", "t": { "Clear text": { "v": [""] } } }, { "l": "fi", "t": { "Clear text": { "v": [""] } } }, { "l": "fo", "t": { "Clear text": { "v": [""] } } }, { "l": "fr", "t": { "Clear text": { "v": ["Effacer le texte"] }, "Save changes": { "v": ["Sauvegarder les changements"] } } }, { "l": "gd", "t": { "Clear text": { "v": [""] } } }, { "l": "gl", "t": { "Clear text": { "v": ["Limpar o texto"] }, "Save changes": { "v": ["Gardar os cambios"] } } }, { "l": "he", "t": { "Clear text": { "v": ["פינוי טקסט"] } } }, { "l": "hi_IN", "t": { "Clear text": { "v": [""] } } }, { "l": "hr", "t": { "Clear text": { "v": [""] } } }, { "l": "hsb", "t": { "Clear text": { "v": [""] } } }, { "l": "hu", "t": { "Clear text": { "v": ["Szöveg törlése"] } } }, { "l": "hy", "t": { "Clear text": { "v": [""] } } }, { "l": "ia", "t": { "Clear text": { "v": [""] } } }, { "l": "id", "t": { "Clear text": { "v": ["Bersihkan teks"] }, "Save changes": { "v": ["Simpan perubahan"] } } }, { "l": "ig", "t": { "Clear text": { "v": [""] } } }, { "l": "is", "t": { "Clear text": { "v": ["Hreinsa texta"] }, "Save changes": { "v": ["Vista breytingar"] } } }, { "l": "it", "t": { "Clear text": { "v": ["Cancella il testo"] }, "Save changes": { "v": ["Salva le modifiche"] } } }, { "l": "ja", "t": { "Clear text": { "v": ["テキストをクリア"] } } }, { "l": "ka", "t": { "Clear text": { "v": [""] } } }, { "l": "ka_GE", "t": { "Clear text": { "v": [""] } } }, { "l": "kab", "t": { "Clear text": { "v": [""] } } }, { "l": "kk", "t": { "Clear text": { "v": [""] } } }, { "l": "km", "t": { "Clear text": { "v": [""] } } }, { "l": "kn", "t": { "Clear text": { "v": [""] } } }, { "l": "ko", "t": { "Clear text": { "v": [""] } } }, { "l": "la", "t": { "Clear text": { "v": [""] } } }, { "l": "lb", "t": { "Clear text": { "v": [""] } } }, { "l": "lo", "t": { "Clear text": { "v": [""] } } }, { "l": "lt_LT", "t": { "Clear text": { "v": [""] } } }, { "l": "lv", "t": { "Clear text": { "v": [""] } } }, { "l": "mk", "t": { "Clear text": { "v": [""] } } }, { "l": "mn", "t": { "Clear text": { "v": [""] } } }, { "l": "mr", "t": { "Clear text": { "v": [""] } } }, { "l": "ms_MY", "t": { "Clear text": { "v": [""] } } }, { "l": "my", "t": { "Clear text": { "v": [""] } } }, { "l": "nb", "t": { "Clear text": { "v": ["Fjern tekst"] } } }, { "l": "ne", "t": { "Clear text": { "v": [""] } } }, { "l": "nl", "t": { "Clear text": { "v": ["Wis tekst"] } } }, { "l": "nn_NO", "t": { "Clear text": { "v": [""] } } }, { "l": "oc", "t": { "Clear text": { "v": [""] } } }, { "l": "pl", "t": { "Clear text": { "v": ["Wyczyść tekst"] }, "Save changes": { "v": ["Zapisz zmiany"] } } }, { "l": "ps", "t": { "Clear text": { "v": [""] } } }, { "l": "pt_BR", "t": { "Clear text": { "v": ["Limpar texto"] }, "Save changes": { "v": ["Salvar alterações"] } } }, { "l": "pt_PT", "t": { "Clear text": { "v": ["Limpar texto"] } } }, { "l": "ro", "t": { "Clear text": { "v": ["Șterge textul"] }, "Save changes": { "v": ["Salvează modificările"] } } }, { "l": "ru", "t": { "Clear text": { "v": ["Очистить текст"] } } }, { "l": "sc", "t": { "Clear text": { "v": [""] } } }, { "l": "si", "t": { "Clear text": { "v": [""] } } }, { "l": "sk", "t": { "Clear text": { "v": [""] } } }, { "l": "sl", "t": { "Clear text": { "v": ["Počisti besedilo"] } } }, { "l": "sq", "t": { "Clear text": { "v": [""] } } }, { "l": "sr", "t": { "Clear text": { "v": ["Обриши текст"] }, "Save changes": { "v": ["Сачувај измене"] } } }, { "l": "sr@latin", "t": { "Clear text": { "v": [""] } } }, { "l": "sv", "t": { "Clear text": { "v": ["Ta bort text"] }, "Save changes": { "v": ["Spara ändringar"] } } }, { "l": "sw", "t": { "Clear text": { "v": [""] } } }, { "l": "ta", "t": { "Clear text": { "v": [""] } } }, { "l": "th", "t": { "Clear text": { "v": [""] } } }, { "l": "tk", "t": { "Clear text": { "v": [""] } } }, { "l": "tr", "t": { "Clear text": { "v": ["Metni temizle"] }, "Save changes": { "v": ["Değişiklikleri kaydet"] } } }, { "l": "ug", "t": { "Clear text": { "v": [""] } } }, { "l": "uk", "t": { "Clear text": { "v": ["Очистити текст"] }, "Save changes": { "v": ["Зберегти зміни"] } } }, { "l": "ur_PK", "t": { "Clear text": { "v": [""] } } }, { "l": "uz", "t": { "Clear text": { "v": [""] } } }, { "l": "vi", "t": { "Clear text": { "v": [""] } } }, { "l": "zh_CN", "t": { "Clear text": { "v": ["清除文本"] } } }, { "l": "zh_HK", "t": { "Clear text": { "v": ["清除文本"] } } }, { "l": "zh_TW", "t": { "Clear text": { "v": ["清除文字"] } } }, { "l": "zu_ZA", "t": { "Clear text": { "v": [""] } } }];
const t16 = [{ "l": "af", "t": { "Close": { "v": [""] } } }, { "l": "ar", "t": { "Close": { "v": ["أغلِق"] } } }, { "l": "ast", "t": { "Close": { "v": ["Zarrar"] } } }, { "l": "az", "t": { "Close": { "v": [""] } } }, { "l": "be", "t": { "Close": { "v": [""] } } }, { "l": "bg", "t": { "Close": { "v": [""] } } }, { "l": "bn_BD", "t": { "Close": { "v": [""] } } }, { "l": "br", "t": { "Close": { "v": ["Serriñ"] } } }, { "l": "bs", "t": { "Close": { "v": [""] } } }, { "l": "ca", "t": { "Close": { "v": ["Tanca"] } } }, { "l": "cs", "t": { "Close": { "v": ["Zavřít"] } } }, { "l": "cs_CZ", "t": { "Close": { "v": ["Zavřít"] } } }, { "l": "cy_GB", "t": { "Close": { "v": [""] } } }, { "l": "da", "t": { "Close": { "v": ["Luk"] } } }, { "l": "de", "t": { "Close": { "v": ["Schließen"] } } }, { "l": "de_DE", "t": { "Close": { "v": ["Schließen"] } } }, { "l": "el", "t": { "Close": { "v": ["Κλείσιμο"] } } }, { "l": "en_GB", "t": { "Close": { "v": ["Close"] } } }, { "l": "eo", "t": { "Close": { "v": ["Fermu"] } } }, { "l": "es", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_419", "t": { "Close": { "v": [""] } } }, { "l": "es_AR", "t": { "Close": { "v": [""] } } }, { "l": "es_CL", "t": { "Close": { "v": [""] } } }, { "l": "es_CO", "t": { "Close": { "v": [""] } } }, { "l": "es_CR", "t": { "Close": { "v": [""] } } }, { "l": "es_DO", "t": { "Close": { "v": [""] } } }, { "l": "es_EC", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_GT", "t": { "Close": { "v": [""] } } }, { "l": "es_HN", "t": { "Close": { "v": [""] } } }, { "l": "es_MX", "t": { "Close": { "v": [""] } } }, { "l": "es_NI", "t": { "Close": { "v": [""] } } }, { "l": "es_PA", "t": { "Close": { "v": [""] } } }, { "l": "es_PE", "t": { "Close": { "v": [""] } } }, { "l": "es_PR", "t": { "Close": { "v": [""] } } }, { "l": "es_PY", "t": { "Close": { "v": [""] } } }, { "l": "es_SV", "t": { "Close": { "v": [""] } } }, { "l": "es_UY", "t": { "Close": { "v": [""] } } }, { "l": "et_EE", "t": { "Close": { "v": [""] } } }, { "l": "eu", "t": { "Close": { "v": ["Itxi"] } } }, { "l": "fa", "t": { "Close": { "v": [""] } } }, { "l": "fi", "t": { "Close": { "v": ["Sulje"] } } }, { "l": "fo", "t": { "Close": { "v": [""] } } }, { "l": "fr", "t": { "Close": { "v": ["Fermer"] } } }, { "l": "gd", "t": { "Close": { "v": [""] } } }, { "l": "gl", "t": { "Close": { "v": ["Pechar"] } } }, { "l": "he", "t": { "Close": { "v": ["סגירה"] } } }, { "l": "hi_IN", "t": { "Close": { "v": [""] } } }, { "l": "hr", "t": { "Close": { "v": [""] } } }, { "l": "hsb", "t": { "Close": { "v": [""] } } }, { "l": "hu", "t": { "Close": { "v": ["Bezárás"] } } }, { "l": "hy", "t": { "Close": { "v": [""] } } }, { "l": "ia", "t": { "Close": { "v": [""] } } }, { "l": "id", "t": { "Close": { "v": ["Tutup"] } } }, { "l": "ig", "t": { "Close": { "v": [""] } } }, { "l": "is", "t": { "Close": { "v": ["Loka"] } } }, { "l": "it", "t": { "Close": { "v": ["Chiudi"] } } }, { "l": "ja", "t": { "Close": { "v": ["閉じる"] } } }, { "l": "ka", "t": { "Close": { "v": [""] } } }, { "l": "ka_GE", "t": { "Close": { "v": [""] } } }, { "l": "kab", "t": { "Close": { "v": [""] } } }, { "l": "kk", "t": { "Close": { "v": [""] } } }, { "l": "km", "t": { "Close": { "v": [""] } } }, { "l": "kn", "t": { "Close": { "v": [""] } } }, { "l": "ko", "t": { "Close": { "v": [""] } } }, { "l": "la", "t": { "Close": { "v": [""] } } }, { "l": "lb", "t": { "Close": { "v": [""] } } }, { "l": "lo", "t": { "Close": { "v": [""] } } }, { "l": "lt_LT", "t": { "Close": { "v": ["Užverti"] } } }, { "l": "lv", "t": { "Close": { "v": ["Aizvērt"] } } }, { "l": "mk", "t": { "Close": { "v": ["Затвори"] } } }, { "l": "mn", "t": { "Close": { "v": [""] } } }, { "l": "mr", "t": { "Close": { "v": [""] } } }, { "l": "ms_MY", "t": { "Close": { "v": [""] } } }, { "l": "my", "t": { "Close": { "v": ["ပိတ်ရန်"] } } }, { "l": "nb", "t": { "Close": { "v": ["Lukk"] } } }, { "l": "ne", "t": { "Close": { "v": [""] } } }, { "l": "nl", "t": { "Close": { "v": ["Sluiten"] } } }, { "l": "nn_NO", "t": { "Close": { "v": [""] } } }, { "l": "oc", "t": { "Close": { "v": ["Tampar"] } } }, { "l": "pl", "t": { "Close": { "v": ["Zamknij"] } } }, { "l": "ps", "t": { "Close": { "v": [""] } } }, { "l": "pt_BR", "t": { "Close": { "v": ["Fechar"] } } }, { "l": "pt_PT", "t": { "Close": { "v": ["Fechar"] } } }, { "l": "ro", "t": { "Close": { "v": ["Închideți"] } } }, { "l": "ru", "t": { "Close": { "v": ["Закрыть"] } } }, { "l": "sc", "t": { "Close": { "v": [""] } } }, { "l": "si", "t": { "Close": { "v": [""] } } }, { "l": "sk", "t": { "Close": { "v": ["Zatvoriť"] } } }, { "l": "sl", "t": { "Close": { "v": ["Zapri"] } } }, { "l": "sq", "t": { "Close": { "v": [""] } } }, { "l": "sr", "t": { "Close": { "v": ["Затвори"] } } }, { "l": "sr@latin", "t": { "Close": { "v": [""] } } }, { "l": "sv", "t": { "Close": { "v": ["Stäng"] } } }, { "l": "sw", "t": { "Close": { "v": [""] } } }, { "l": "ta", "t": { "Close": { "v": [""] } } }, { "l": "th", "t": { "Close": { "v": [""] } } }, { "l": "tk", "t": { "Close": { "v": [""] } } }, { "l": "tr", "t": { "Close": { "v": ["Kapat"] } } }, { "l": "ug", "t": { "Close": { "v": [""] } } }, { "l": "uk", "t": { "Close": { "v": ["Закрити"] } } }, { "l": "ur_PK", "t": { "Close": { "v": [""] } } }, { "l": "uz", "t": { "Close": { "v": [""] } } }, { "l": "vi", "t": { "Close": { "v": [""] } } }, { "l": "zh_CN", "t": { "Close": { "v": ["关闭"] } } }, { "l": "zh_HK", "t": { "Close": { "v": ["關閉"] } } }, { "l": "zh_TW", "t": { "Close": { "v": ["關閉"] } } }, { "l": "zu_ZA", "t": { "Close": { "v": [""] } } }];
const t17 = [{ "l": "af", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ar", "t": { "Close navigation": { "v": ["أغلِق المُتصفِّح"] }, "Open navigation": { "v": ["إفتَح المتصفح"] } } }, { "l": "ast", "t": { "Close navigation": { "v": ["Zarrar la navegación"] }, "Open navigation": { "v": ["Abrir la navegación"] } } }, { "l": "az", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "be", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "bg", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "bn_BD", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "br", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "bs", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ca", "t": { "Close navigation": { "v": ["Tanca la navegació"] }, "Open navigation": { "v": ["Obre la navegació"] } } }, { "l": "cs", "t": { "Close navigation": { "v": ["Zavřít navigaci"] }, "Open navigation": { "v": ["Otevřít navigaci"] } } }, { "l": "cs_CZ", "t": { "Close navigation": { "v": ["Zavřít navigaci"] }, "Open navigation": { "v": ["Otevřít navigaci"] } } }, { "l": "cy_GB", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "da", "t": { "Close navigation": { "v": ["Luk navigation"] }, "Open navigation": { "v": ["Åbn navigation"] } } }, { "l": "de", "t": { "Close navigation": { "v": ["Navigation schließen"] }, "Open navigation": { "v": ["Navigation öffnen"] } } }, { "l": "de_DE", "t": { "Close navigation": { "v": ["Navigation schließen"] }, "Open navigation": { "v": ["Navigation öffnen"] } } }, { "l": "el", "t": { "Close navigation": { "v": ["Κλείσιμο πλοήγησης"] }, "Open navigation": { "v": ["Άνοιγμα πλοήγησης"] } } }, { "l": "en_GB", "t": { "Close navigation": { "v": ["Close navigation"] }, "Open navigation": { "v": ["Open navigation"] } } }, { "l": "eo", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es", "t": { "Close navigation": { "v": ["Cerrar navegación"] }, "Open navigation": { "v": ["Abrir navegación"] } } }, { "l": "es_419", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_AR", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_CL", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_CO", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_CR", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_DO", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_EC", "t": { "Close navigation": { "v": ["Cerrar navegación"] }, "Open navigation": { "v": ["Abrir navegación"] } } }, { "l": "es_GT", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_HN", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_MX", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_NI", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PA", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PE", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PR", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_PY", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_SV", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "es_UY", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "et_EE", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "eu", "t": { "Close navigation": { "v": ["Itxi nabigazioa"] }, "Open navigation": { "v": ["Ireki nabigazioa"] } } }, { "l": "fa", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "fi", "t": { "Close navigation": { "v": ["Sulje navigaatio"] }, "Open navigation": { "v": ["Avaa navigaatio"] } } }, { "l": "fo", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "fr", "t": { "Close navigation": { "v": ["Fermer la navigation"] }, "Open navigation": { "v": ["Ouvrir la navigation"] } } }, { "l": "gd", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "gl", "t": { "Close navigation": { "v": ["Pechar a navegación"] }, "Open navigation": { "v": ["Abrir a navegación"] } } }, { "l": "he", "t": { "Close navigation": { "v": ["סגירת הניווט"] }, "Open navigation": { "v": ["פתיחת ניווט"] } } }, { "l": "hi_IN", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "hr", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "hsb", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "hu", "t": { "Close navigation": { "v": ["Navigáció bezárása"] }, "Open navigation": { "v": ["Navigáció megnyitása"] } } }, { "l": "hy", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ia", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "id", "t": { "Close navigation": { "v": ["Tutup navigasi"] }, "Open navigation": { "v": ["Buka navigasi"] } } }, { "l": "ig", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "is", "t": { "Close navigation": { "v": ["Loka leiðsagnarsleða"] }, "Open navigation": { "v": ["Opna leiðsagnarsleða"] } } }, { "l": "it", "t": { "Close navigation": { "v": ["Chiudi la navigazione"] }, "Open navigation": { "v": ["Apri la navigazione"] } } }, { "l": "ja", "t": { "Close navigation": { "v": ["ナビゲーションを閉じる"] }, "Open navigation": { "v": ["ナビゲーションを開く"] } } }, { "l": "ka", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ka_GE", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "kab", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "kk", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "km", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "kn", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ko", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "la", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lb", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lo", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lt_LT", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "lv", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "mk", "t": { "Close navigation": { "v": ["Затвори навигација"] }, "Open navigation": { "v": ["Отвори навигација"] } } }, { "l": "mn", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "mr", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ms_MY", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "my", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "nb", "t": { "Close navigation": { "v": ["Lukk navigasjon"] }, "Open navigation": { "v": ["Åpne navigasjon"] } } }, { "l": "ne", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "nl", "t": { "Close navigation": { "v": ["Navigatie sluiten"] }, "Open navigation": { "v": ["Navigatie openen"] } } }, { "l": "nn_NO", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "oc", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "pl", "t": { "Close navigation": { "v": ["Zamknij nawigację"] }, "Open navigation": { "v": ["Otwórz nawigację"] } } }, { "l": "ps", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "pt_BR", "t": { "Close navigation": { "v": ["Fechar navegação"] }, "Open navigation": { "v": ["Abrir navegação"] } } }, { "l": "pt_PT", "t": { "Close navigation": { "v": ["Fechar navegação"] }, "Open navigation": { "v": ["Abrir navegação"] } } }, { "l": "ro", "t": { "Close navigation": { "v": ["Închideți navigarea"] }, "Open navigation": { "v": ["Deschideți navigația"] } } }, { "l": "ru", "t": { "Close navigation": { "v": ["Закрыть навигацию"] }, "Open navigation": { "v": ["Открыть навигацию"] } } }, { "l": "sc", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "si", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "sk", "t": { "Close navigation": { "v": ["Zavrieť navigáciu"] }, "Open navigation": { "v": ["Otvoriť navigáciu"] } } }, { "l": "sl", "t": { "Close navigation": { "v": ["Zapri krmarjenje"] }, "Open navigation": { "v": ["Odpri krmarjenje"] } } }, { "l": "sq", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "sr", "t": { "Close navigation": { "v": ["Затвори навигацију"] }, "Open navigation": { "v": ["Отвори навигацију"] } } }, { "l": "sr@latin", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "sv", "t": { "Close navigation": { "v": ["Stäng navigering"] }, "Open navigation": { "v": ["Öppna navigering"] } } }, { "l": "sw", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "ta", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "th", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "tk", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "tr", "t": { "Close navigation": { "v": ["Gezinmeyi kapat"] }, "Open navigation": { "v": ["Gezinmeyi aç"] } } }, { "l": "ug", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "uk", "t": { "Close navigation": { "v": ["Закрити навігацію"] }, "Open navigation": { "v": ["Відкрити навігацію"] } } }, { "l": "ur_PK", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "uz", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "vi", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }, { "l": "zh_CN", "t": { "Close navigation": { "v": ["关闭导航"] }, "Open navigation": { "v": ["开启导航"] } } }, { "l": "zh_HK", "t": { "Close navigation": { "v": ["關閉導航"] }, "Open navigation": { "v": ["開啟導航"] } } }, { "l": "zh_TW", "t": { "Close navigation": { "v": ["關閉導航"] }, "Open navigation": { "v": ["開啟導航"] } } }, { "l": "zu_ZA", "t": { "Close navigation": { "v": [""] }, "Open navigation": { "v": [""] } } }];
const t18 = [{ "l": "af", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ar", "t": { "Collapse menu": { "v": ["طَيُّ القائمة"] }, "Open menu": { "v": ["إفتَح القائمة"] } } }, { "l": "ast", "t": { "Collapse menu": { "v": ["Recoyer el menú"] }, "Open menu": { "v": ["Abrir le menú"] } } }, { "l": "az", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "be", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "bg", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "bn_BD", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "br", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "bs", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ca", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "cs", "t": { "Collapse menu": { "v": ["Sbalit nabídku"] }, "Open menu": { "v": ["Otevřít nabídku"] } } }, { "l": "cs_CZ", "t": { "Collapse menu": { "v": ["Sbalit nabídku"] }, "Open menu": { "v": ["Otevřít nabídku"] } } }, { "l": "cy_GB", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "da", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "de", "t": { "Collapse menu": { "v": ["Menü einklappen"] }, "Open menu": { "v": ["Menü öffnen"] } } }, { "l": "de_DE", "t": { "Collapse menu": { "v": ["Menü einklappen"] }, "Open menu": { "v": ["Menü öffnen"] } } }, { "l": "el", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "en_GB", "t": { "Collapse menu": { "v": ["Collapse menu"] }, "Open menu": { "v": ["Open menu"] } } }, { "l": "eo", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es", "t": { "Collapse menu": { "v": ["Ocultar menú"] }, "Open menu": { "v": ["Abrir menú"] } } }, { "l": "es_419", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_AR", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_CL", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_CO", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_CR", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_DO", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_EC", "t": { "Collapse menu": { "v": ["Ocultar menú"] }, "Open menu": { "v": ["Abrir menú"] } } }, { "l": "es_GT", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_HN", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_MX", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_NI", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PA", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PE", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PR", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_PY", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_SV", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "es_UY", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "et_EE", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "eu", "t": { "Collapse menu": { "v": ["Tolestu menua"] }, "Open menu": { "v": ["Ireki menua"] } } }, { "l": "fa", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "fi", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "fo", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "fr", "t": { "Collapse menu": { "v": ["Réduire le menu"] }, "Open menu": { "v": ["Ouvrir le menu"] } } }, { "l": "gd", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "gl", "t": { "Collapse menu": { "v": ["Contraer o menú"] }, "Open menu": { "v": ["Abrir o menú"] } } }, { "l": "he", "t": { "Collapse menu": { "v": ["צמצום התפריט"] }, "Open menu": { "v": ["פתיחת תפריט"] } } }, { "l": "hi_IN", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hr", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hsb", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hu", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "hy", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ia", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "id", "t": { "Collapse menu": { "v": ["Ciutkan menu"] }, "Open menu": { "v": ["Buka menu"] } } }, { "l": "ig", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "is", "t": { "Collapse menu": { "v": ["Fella valmynd saman"] }, "Open menu": { "v": ["Opna valmynd"] } } }, { "l": "it", "t": { "Collapse menu": { "v": ["Chiudi Menu"] }, "Open menu": { "v": ["Apri il menu"] } } }, { "l": "ja", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ka", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ka_GE", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "kab", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "kk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "km", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "kn", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ko", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "la", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lb", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lo", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lt_LT", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "lv", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "mk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "mn", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "mr", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ms_MY", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "my", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "nb", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ne", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "nl", "t": { "Collapse menu": { "v": ["Klap menu in"] }, "Open menu": { "v": ["Open menu"] } } }, { "l": "nn_NO", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "oc", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "pl", "t": { "Collapse menu": { "v": ["Zwiń menu"] }, "Open menu": { "v": ["Otwórz menu"] } } }, { "l": "ps", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "pt_BR", "t": { "Collapse menu": { "v": ["Recolher menu"] }, "Open menu": { "v": ["Abrir menu"] } } }, { "l": "pt_PT", "t": { "Collapse menu": { "v": ["Comprimir menu"] }, "Open menu": { "v": ["Abrir menu"] } } }, { "l": "ro", "t": { "Collapse menu": { "v": ["Restrânge meniul"] }, "Open menu": { "v": ["Deschide meniul"] } } }, { "l": "ru", "t": { "Collapse menu": { "v": ["Свернуть меню"] }, "Open menu": { "v": ["Открыть меню"] } } }, { "l": "sc", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "si", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sl", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sq", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sr", "t": { "Collapse menu": { "v": ["Сажми мени"] }, "Open menu": { "v": ["Отвори мени"] } } }, { "l": "sr@latin", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "sv", "t": { "Collapse menu": { "v": ["Komprimera menyn"] }, "Open menu": { "v": ["Öppna menyn"] } } }, { "l": "sw", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "ta", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "th", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "tk", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "tr", "t": { "Collapse menu": { "v": ["Menüyü daralt"] }, "Open menu": { "v": ["Menüyü aç"] } } }, { "l": "ug", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "uk", "t": { "Collapse menu": { "v": ["Згорнути меню"] }, "Open menu": { "v": ["Відкрити меню"] } } }, { "l": "ur_PK", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "uz", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "vi", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "zh_CN", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }, { "l": "zh_HK", "t": { "Collapse menu": { "v": ["折疊選單"] }, "Open menu": { "v": ["開啟選單"] } } }, { "l": "zh_TW", "t": { "Collapse menu": { "v": ["折疊選單"] }, "Open menu": { "v": ["開啟選單"] } } }, { "l": "zu_ZA", "t": { "Collapse menu": { "v": [""] }, "Open menu": { "v": [""] } } }];
const t19 = [{ "l": "af", "t": { "Edit item": { "v": [""] } } }, { "l": "ar", "t": { "Edit item": { "v": ["تعديل عنصر"] } } }, { "l": "ast", "t": { "Edit item": { "v": ["Editar l'elementu"] } } }, { "l": "az", "t": { "Edit item": { "v": [""] } } }, { "l": "be", "t": { "Edit item": { "v": [""] } } }, { "l": "bg", "t": { "Edit item": { "v": [""] } } }, { "l": "bn_BD", "t": { "Edit item": { "v": [""] } } }, { "l": "br", "t": { "Edit item": { "v": [""] } } }, { "l": "bs", "t": { "Edit item": { "v": [""] } } }, { "l": "ca", "t": { "Edit item": { "v": ["Edita l'element"] } } }, { "l": "cs", "t": { "Edit item": { "v": ["Upravit položku"] } } }, { "l": "cs_CZ", "t": { "Edit item": { "v": ["Upravit položku"] } } }, { "l": "cy_GB", "t": { "Edit item": { "v": [""] } } }, { "l": "da", "t": { "Edit item": { "v": ["Rediger emne"] } } }, { "l": "de", "t": { "Edit item": { "v": ["Objekt bearbeiten"] } } }, { "l": "de_DE", "t": { "Edit item": { "v": ["Element bearbeiten"] } } }, { "l": "el", "t": { "Edit item": { "v": ["Επεξεργασία"] } } }, { "l": "en_GB", "t": { "Edit item": { "v": ["Edit item"] } } }, { "l": "eo", "t": { "Edit item": { "v": [""] } } }, { "l": "es", "t": { "Edit item": { "v": ["Editar elemento"] } } }, { "l": "es_419", "t": { "Edit item": { "v": [""] } } }, { "l": "es_AR", "t": { "Edit item": { "v": [""] } } }, { "l": "es_CL", "t": { "Edit item": { "v": [""] } } }, { "l": "es_CO", "t": { "Edit item": { "v": [""] } } }, { "l": "es_CR", "t": { "Edit item": { "v": [""] } } }, { "l": "es_DO", "t": { "Edit item": { "v": [""] } } }, { "l": "es_EC", "t": { "Edit item": { "v": ["Editar elemento"] } } }, { "l": "es_GT", "t": { "Edit item": { "v": [""] } } }, { "l": "es_HN", "t": { "Edit item": { "v": [""] } } }, { "l": "es_MX", "t": { "Edit item": { "v": [""] } } }, { "l": "es_NI", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PA", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PE", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PR", "t": { "Edit item": { "v": [""] } } }, { "l": "es_PY", "t": { "Edit item": { "v": [""] } } }, { "l": "es_SV", "t": { "Edit item": { "v": [""] } } }, { "l": "es_UY", "t": { "Edit item": { "v": [""] } } }, { "l": "et_EE", "t": { "Edit item": { "v": [""] } } }, { "l": "eu", "t": { "Edit item": { "v": ["Editatu elementua"] } } }, { "l": "fa", "t": { "Edit item": { "v": [""] } } }, { "l": "fi", "t": { "Edit item": { "v": ["Muokkaa kohdetta"] } } }, { "l": "fo", "t": { "Edit item": { "v": [""] } } }, { "l": "fr", "t": { "Edit item": { "v": ["Éditer l'élément"] } } }, { "l": "gd", "t": { "Edit item": { "v": [""] } } }, { "l": "gl", "t": { "Edit item": { "v": ["Editar o elemento"] } } }, { "l": "he", "t": { "Edit item": { "v": ["עריכת פריט"] } } }, { "l": "hi_IN", "t": { "Edit item": { "v": [""] } } }, { "l": "hr", "t": { "Edit item": { "v": [""] } } }, { "l": "hsb", "t": { "Edit item": { "v": [""] } } }, { "l": "hu", "t": { "Edit item": { "v": ["Elem szerkesztése"] } } }, { "l": "hy", "t": { "Edit item": { "v": [""] } } }, { "l": "ia", "t": { "Edit item": { "v": [""] } } }, { "l": "id", "t": { "Edit item": { "v": ["Edit item"] } } }, { "l": "ig", "t": { "Edit item": { "v": [""] } } }, { "l": "is", "t": { "Edit item": { "v": ["Breyta atriði"] } } }, { "l": "it", "t": { "Edit item": { "v": ["Modifica l'elemento"] } } }, { "l": "ja", "t": { "Edit item": { "v": ["編集"] } } }, { "l": "ka", "t": { "Edit item": { "v": [""] } } }, { "l": "ka_GE", "t": { "Edit item": { "v": [""] } } }, { "l": "kab", "t": { "Edit item": { "v": [""] } } }, { "l": "kk", "t": { "Edit item": { "v": [""] } } }, { "l": "km", "t": { "Edit item": { "v": [""] } } }, { "l": "kn", "t": { "Edit item": { "v": [""] } } }, { "l": "ko", "t": { "Edit item": { "v": [""] } } }, { "l": "la", "t": { "Edit item": { "v": [""] } } }, { "l": "lb", "t": { "Edit item": { "v": [""] } } }, { "l": "lo", "t": { "Edit item": { "v": [""] } } }, { "l": "lt_LT", "t": { "Edit item": { "v": [""] } } }, { "l": "lv", "t": { "Edit item": { "v": [""] } } }, { "l": "mk", "t": { "Edit item": { "v": ["Уреди"] } } }, { "l": "mn", "t": { "Edit item": { "v": [""] } } }, { "l": "mr", "t": { "Edit item": { "v": [""] } } }, { "l": "ms_MY", "t": { "Edit item": { "v": [""] } } }, { "l": "my", "t": { "Edit item": { "v": [""] } } }, { "l": "nb", "t": { "Edit item": { "v": ["Rediger"] } } }, { "l": "ne", "t": { "Edit item": { "v": [""] } } }, { "l": "nl", "t": { "Edit item": { "v": ["Item bewerken"] } } }, { "l": "nn_NO", "t": { "Edit item": { "v": [""] } } }, { "l": "oc", "t": { "Edit item": { "v": [""] } } }, { "l": "pl", "t": { "Edit item": { "v": ["Edytuj element"] } } }, { "l": "ps", "t": { "Edit item": { "v": [""] } } }, { "l": "pt_BR", "t": { "Edit item": { "v": ["Editar item"] } } }, { "l": "pt_PT", "t": { "Edit item": { "v": ["Editar item"] } } }, { "l": "ro", "t": { "Edit item": { "v": ["Editați elementul"] } } }, { "l": "ru", "t": { "Edit item": { "v": ["Изменить элемент"] } } }, { "l": "sc", "t": { "Edit item": { "v": [""] } } }, { "l": "si", "t": { "Edit item": { "v": [""] } } }, { "l": "sk", "t": { "Edit item": { "v": ["Upraviť položku"] } } }, { "l": "sl", "t": { "Edit item": { "v": ["Uredi predmet"] } } }, { "l": "sq", "t": { "Edit item": { "v": [""] } } }, { "l": "sr", "t": { "Edit item": { "v": ["Уреди ставку"] } } }, { "l": "sr@latin", "t": { "Edit item": { "v": [""] } } }, { "l": "sv", "t": { "Edit item": { "v": ["Ändra"] } } }, { "l": "sw", "t": { "Edit item": { "v": [""] } } }, { "l": "ta", "t": { "Edit item": { "v": [""] } } }, { "l": "th", "t": { "Edit item": { "v": [""] } } }, { "l": "tk", "t": { "Edit item": { "v": [""] } } }, { "l": "tr", "t": { "Edit item": { "v": ["Ögeyi düzenle"] } } }, { "l": "ug", "t": { "Edit item": { "v": [""] } } }, { "l": "uk", "t": { "Edit item": { "v": ["Редагувати елемент"] } } }, { "l": "ur_PK", "t": { "Edit item": { "v": [""] } } }, { "l": "uz", "t": { "Edit item": { "v": [""] } } }, { "l": "vi", "t": { "Edit item": { "v": [""] } } }, { "l": "zh_CN", "t": { "Edit item": { "v": ["编辑项目"] } } }, { "l": "zh_HK", "t": { "Edit item": { "v": ["編輯項目"] } } }, { "l": "zh_TW", "t": { "Edit item": { "v": ["編輯項目"] } } }, { "l": "zu_ZA", "t": { "Edit item": { "v": [""] } } }];
const t20 = [{ "l": "af", "t": { "Enter link": { "v": [""] } } }, { "l": "ar", "t": { "Enter link": { "v": ["أدخِل الرابط"] } } }, { "l": "ast", "t": { "Enter link": { "v": ["Introducir l'enllaz"] } } }, { "l": "az", "t": { "Enter link": { "v": [""] } } }, { "l": "be", "t": { "Enter link": { "v": [""] } } }, { "l": "bg", "t": { "Enter link": { "v": [""] } } }, { "l": "bn_BD", "t": { "Enter link": { "v": [""] } } }, { "l": "br", "t": { "Enter link": { "v": [""] } } }, { "l": "bs", "t": { "Enter link": { "v": [""] } } }, { "l": "ca", "t": { "Enter link": { "v": [""] } } }, { "l": "cs", "t": { "Enter link": { "v": ["Zadat odkaz"] } } }, { "l": "cs_CZ", "t": { "Enter link": { "v": ["Zadat odkaz"] } } }, { "l": "cy_GB", "t": { "Enter link": { "v": [""] } } }, { "l": "da", "t": { "Enter link": { "v": [""] } } }, { "l": "de", "t": { "Enter link": { "v": ["Link eingeben"] } } }, { "l": "de_DE", "t": { "Enter link": { "v": ["Link eingeben"] } } }, { "l": "el", "t": { "Enter link": { "v": [""] } } }, { "l": "en_GB", "t": { "Enter link": { "v": ["Enter link"] } } }, { "l": "eo", "t": { "Enter link": { "v": [""] } } }, { "l": "es", "t": { "Enter link": { "v": ["Ingrese enlace"] } } }, { "l": "es_419", "t": { "Enter link": { "v": [""] } } }, { "l": "es_AR", "t": { "Enter link": { "v": [""] } } }, { "l": "es_CL", "t": { "Enter link": { "v": [""] } } }, { "l": "es_CO", "t": { "Enter link": { "v": [""] } } }, { "l": "es_CR", "t": { "Enter link": { "v": [""] } } }, { "l": "es_DO", "t": { "Enter link": { "v": [""] } } }, { "l": "es_EC", "t": { "Enter link": { "v": ["Ingresar enlace"] } } }, { "l": "es_GT", "t": { "Enter link": { "v": [""] } } }, { "l": "es_HN", "t": { "Enter link": { "v": [""] } } }, { "l": "es_MX", "t": { "Enter link": { "v": [""] } } }, { "l": "es_NI", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PA", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PE", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PR", "t": { "Enter link": { "v": [""] } } }, { "l": "es_PY", "t": { "Enter link": { "v": [""] } } }, { "l": "es_SV", "t": { "Enter link": { "v": [""] } } }, { "l": "es_UY", "t": { "Enter link": { "v": [""] } } }, { "l": "et_EE", "t": { "Enter link": { "v": [""] } } }, { "l": "eu", "t": { "Enter link": { "v": ["Sartu esteka"] } } }, { "l": "fa", "t": { "Enter link": { "v": [""] } } }, { "l": "fi", "t": { "Enter link": { "v": [""] } } }, { "l": "fo", "t": { "Enter link": { "v": [""] } } }, { "l": "fr", "t": { "Enter link": { "v": ["Saisissez le lien"] } } }, { "l": "gd", "t": { "Enter link": { "v": [""] } } }, { "l": "gl", "t": { "Enter link": { "v": ["Introducir a ligazón"] } } }, { "l": "he", "t": { "Enter link": { "v": ["מילוי קישור"] } } }, { "l": "hi_IN", "t": { "Enter link": { "v": [""] } } }, { "l": "hr", "t": { "Enter link": { "v": [""] } } }, { "l": "hsb", "t": { "Enter link": { "v": [""] } } }, { "l": "hu", "t": { "Enter link": { "v": [""] } } }, { "l": "hy", "t": { "Enter link": { "v": [""] } } }, { "l": "ia", "t": { "Enter link": { "v": [""] } } }, { "l": "id", "t": { "Enter link": { "v": ["Masukkan tautan"] } } }, { "l": "ig", "t": { "Enter link": { "v": [""] } } }, { "l": "is", "t": { "Enter link": { "v": ["Settu inn tengil"] } } }, { "l": "it", "t": { "Enter link": { "v": ["Inserire il link"] } } }, { "l": "ja", "t": { "Enter link": { "v": [""] } } }, { "l": "ka", "t": { "Enter link": { "v": [""] } } }, { "l": "ka_GE", "t": { "Enter link": { "v": [""] } } }, { "l": "kab", "t": { "Enter link": { "v": [""] } } }, { "l": "kk", "t": { "Enter link": { "v": [""] } } }, { "l": "km", "t": { "Enter link": { "v": [""] } } }, { "l": "kn", "t": { "Enter link": { "v": [""] } } }, { "l": "ko", "t": { "Enter link": { "v": [""] } } }, { "l": "la", "t": { "Enter link": { "v": [""] } } }, { "l": "lb", "t": { "Enter link": { "v": [""] } } }, { "l": "lo", "t": { "Enter link": { "v": [""] } } }, { "l": "lt_LT", "t": { "Enter link": { "v": [""] } } }, { "l": "lv", "t": { "Enter link": { "v": [""] } } }, { "l": "mk", "t": { "Enter link": { "v": [""] } } }, { "l": "mn", "t": { "Enter link": { "v": [""] } } }, { "l": "mr", "t": { "Enter link": { "v": [""] } } }, { "l": "ms_MY", "t": { "Enter link": { "v": [""] } } }, { "l": "my", "t": { "Enter link": { "v": [""] } } }, { "l": "nb", "t": { "Enter link": { "v": [""] } } }, { "l": "ne", "t": { "Enter link": { "v": [""] } } }, { "l": "nl", "t": { "Enter link": { "v": ["Voer link in"] } } }, { "l": "nn_NO", "t": { "Enter link": { "v": [""] } } }, { "l": "oc", "t": { "Enter link": { "v": [""] } } }, { "l": "pl", "t": { "Enter link": { "v": ["Wprowadź link"] } } }, { "l": "ps", "t": { "Enter link": { "v": [""] } } }, { "l": "pt_BR", "t": { "Enter link": { "v": ["Insira o link"] } } }, { "l": "pt_PT", "t": { "Enter link": { "v": ["Introduzir link"] } } }, { "l": "ro", "t": { "Enter link": { "v": ["Introduceți link-ul"] } } }, { "l": "ru", "t": { "Enter link": { "v": ["Введите ссылку"] } } }, { "l": "sc", "t": { "Enter link": { "v": [""] } } }, { "l": "si", "t": { "Enter link": { "v": [""] } } }, { "l": "sk", "t": { "Enter link": { "v": [""] } } }, { "l": "sl", "t": { "Enter link": { "v": [""] } } }, { "l": "sq", "t": { "Enter link": { "v": [""] } } }, { "l": "sr", "t": { "Enter link": { "v": ["Унесите линк"] } } }, { "l": "sr@latin", "t": { "Enter link": { "v": [""] } } }, { "l": "sv", "t": { "Enter link": { "v": ["Ange länk"] } } }, { "l": "sw", "t": { "Enter link": { "v": [""] } } }, { "l": "ta", "t": { "Enter link": { "v": [""] } } }, { "l": "th", "t": { "Enter link": { "v": [""] } } }, { "l": "tk", "t": { "Enter link": { "v": [""] } } }, { "l": "tr", "t": { "Enter link": { "v": ["Bağlantıyı yazın"] } } }, { "l": "ug", "t": { "Enter link": { "v": [""] } } }, { "l": "uk", "t": { "Enter link": { "v": ["Зазначте посилання"] } } }, { "l": "ur_PK", "t": { "Enter link": { "v": [""] } } }, { "l": "uz", "t": { "Enter link": { "v": [""] } } }, { "l": "vi", "t": { "Enter link": { "v": [""] } } }, { "l": "zh_CN", "t": { "Enter link": { "v": [""] } } }, { "l": "zh_HK", "t": { "Enter link": { "v": ["輸入連結"] } } }, { "l": "zh_TW", "t": { "Enter link": { "v": ["輸入連結"] } } }, { "l": "zu_ZA", "t": { "Enter link": { "v": [""] } } }];
const t21 = [{ "l": "af", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ar", "t": { "External documentation for {name}": { "v": ["التوثيق الخارجي لـ {name}"] } } }, { "l": "ast", "t": { "External documentation for {name}": { "v": ["Documentación esterna pa: {name}"] } } }, { "l": "az", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "be", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bg", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bn_BD", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "br", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bs", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ca", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "cs", "t": { "External documentation for {name}": { "v": ["Externí dokumentace pro {name}"] } } }, { "l": "cs_CZ", "t": { "External documentation for {name}": { "v": ["Externí dokumentace pro {name}"] } } }, { "l": "cy_GB", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "da", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "de", "t": { "External documentation for {name}": { "v": ["Externe Dokumentation für {name}"] } } }, { "l": "de_DE", "t": { "External documentation for {name}": { "v": ["Externe Dokumentation für {name}"] } } }, { "l": "el", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "en_GB", "t": { "External documentation for {name}": { "v": ["External documentation for {name}"] } } }, { "l": "eo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_419", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_AR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CL", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_DO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_EC", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_GT", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_HN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_MX", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_NI", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PA", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_SV", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_UY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "et_EE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "eu", "t": { "External documentation for {name}": { "v": ["{name}-ren kanpoko dokumentazioa"] } } }, { "l": "fa", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "fi", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "fo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "fr", "t": { "External documentation for {name}": { "v": ["Documentation externe pour {name}"] } } }, { "l": "gd", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "gl", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "he", "t": { "External documentation for {name}": { "v": ["תיעוד חיצוני עבור {name}"] } } }, { "l": "hi_IN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hr", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hsb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hu", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hy", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ia", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "id", "t": { "External documentation for {name}": { "v": ["Dokumentasi eksternal untuk {name}"] } } }, { "l": "ig", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "is", "t": { "External documentation for {name}": { "v": ["Utanaðkomandi leiðbeiningar fyrir {name}"] } } }, { "l": "it", "t": { "External documentation for {name}": { "v": ["Documentazione esterna per {name}"] } } }, { "l": "ja", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ka", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ka_GE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kab", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "km", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kn", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ko", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "la", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lt_LT", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lv", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mn", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mr", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ms_MY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "my", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "nb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ne", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "nl", "t": { "External documentation for {name}": { "v": ["Externe documentatie voor {name}"] } } }, { "l": "nn_NO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "oc", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "pl", "t": { "External documentation for {name}": { "v": ["Dokumentacja zewnętrzna dla {name}"] } } }, { "l": "ps", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "pt_BR", "t": { "External documentation for {name}": { "v": ["Documentação externa para {name}"] } } }, { "l": "pt_PT", "t": { "External documentation for {name}": { "v": ["Documentação externa para {name}"] } } }, { "l": "ro", "t": { "External documentation for {name}": { "v": ["Documentație externă pentru {name}"] } } }, { "l": "ru", "t": { "External documentation for {name}": { "v": ["Внешняя документация для {name}"] } } }, { "l": "sc", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "si", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sl", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sq", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sr", "t": { "External documentation for {name}": { "v": ["Спољна документација за {name}"] } } }, { "l": "sr@latin", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sv", "t": { "External documentation for {name}": { "v": ["Extern dokumentation för {name}"] } } }, { "l": "sw", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ta", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "th", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "tk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "tr", "t": { "External documentation for {name}": { "v": ["{name} için dış belgeler"] } } }, { "l": "ug", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "uk", "t": { "External documentation for {name}": { "v": ["Зовнішня документація для {name}"] } } }, { "l": "ur_PK", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "uz", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "vi", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "zh_CN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "zh_HK", "t": { "External documentation for {name}": { "v": ["{name} 的外部文件"] } } }, { "l": "zh_TW", "t": { "External documentation for {name}": { "v": ["{name} 的外部文件"] } } }, { "l": "zu_ZA", "t": { "External documentation for {name}": { "v": [""] } } }];
const t22 = [{ "l": "af", "t": { "Global": { "v": [""] } } }, { "l": "ar", "t": { "Global": { "v": ["شامل"] } } }, { "l": "ast", "t": { "Global": { "v": ["Global"] } } }, { "l": "az", "t": { "Global": { "v": [""] } } }, { "l": "be", "t": { "Global": { "v": [""] } } }, { "l": "bg", "t": { "Global": { "v": [""] } } }, { "l": "bn_BD", "t": { "Global": { "v": [""] } } }, { "l": "br", "t": { "Global": { "v": [""] } } }, { "l": "bs", "t": { "Global": { "v": [""] } } }, { "l": "ca", "t": { "Global": { "v": ["Global"] } } }, { "l": "cs", "t": { "Global": { "v": ["Globální"] } } }, { "l": "cs_CZ", "t": { "Global": { "v": ["Globální"] } } }, { "l": "cy_GB", "t": { "Global": { "v": [""] } } }, { "l": "da", "t": { "Global": { "v": ["Global"] } } }, { "l": "de", "t": { "Global": { "v": ["Global"] } } }, { "l": "de_DE", "t": { "Global": { "v": ["Global"] } } }, { "l": "el", "t": { "Global": { "v": ["Καθολικό"] } } }, { "l": "en_GB", "t": { "Global": { "v": ["Global"] } } }, { "l": "eo", "t": { "Global": { "v": [""] } } }, { "l": "es", "t": { "Global": { "v": ["Global"] } } }, { "l": "es_419", "t": { "Global": { "v": [""] } } }, { "l": "es_AR", "t": { "Global": { "v": [""] } } }, { "l": "es_CL", "t": { "Global": { "v": [""] } } }, { "l": "es_CO", "t": { "Global": { "v": [""] } } }, { "l": "es_CR", "t": { "Global": { "v": [""] } } }, { "l": "es_DO", "t": { "Global": { "v": [""] } } }, { "l": "es_EC", "t": { "Global": { "v": ["Global"] } } }, { "l": "es_GT", "t": { "Global": { "v": [""] } } }, { "l": "es_HN", "t": { "Global": { "v": [""] } } }, { "l": "es_MX", "t": { "Global": { "v": [""] } } }, { "l": "es_NI", "t": { "Global": { "v": [""] } } }, { "l": "es_PA", "t": { "Global": { "v": [""] } } }, { "l": "es_PE", "t": { "Global": { "v": [""] } } }, { "l": "es_PR", "t": { "Global": { "v": [""] } } }, { "l": "es_PY", "t": { "Global": { "v": [""] } } }, { "l": "es_SV", "t": { "Global": { "v": [""] } } }, { "l": "es_UY", "t": { "Global": { "v": [""] } } }, { "l": "et_EE", "t": { "Global": { "v": [""] } } }, { "l": "eu", "t": { "Global": { "v": ["Globala"] } } }, { "l": "fa", "t": { "Global": { "v": [""] } } }, { "l": "fi", "t": { "Global": { "v": ["Yleinen"] } } }, { "l": "fo", "t": { "Global": { "v": [""] } } }, { "l": "fr", "t": { "Global": { "v": ["Global"] } } }, { "l": "gd", "t": { "Global": { "v": [""] } } }, { "l": "gl", "t": { "Global": { "v": ["Global"] } } }, { "l": "he", "t": { "Global": { "v": ["כללי"] } } }, { "l": "hi_IN", "t": { "Global": { "v": [""] } } }, { "l": "hr", "t": { "Global": { "v": [""] } } }, { "l": "hsb", "t": { "Global": { "v": [""] } } }, { "l": "hu", "t": { "Global": { "v": ["Globális"] } } }, { "l": "hy", "t": { "Global": { "v": [""] } } }, { "l": "ia", "t": { "Global": { "v": [""] } } }, { "l": "id", "t": { "Global": { "v": ["Global"] } } }, { "l": "ig", "t": { "Global": { "v": [""] } } }, { "l": "is", "t": { "Global": { "v": ["Almennt"] } } }, { "l": "it", "t": { "Global": { "v": ["Globale"] } } }, { "l": "ja", "t": { "Global": { "v": ["全体"] } } }, { "l": "ka", "t": { "Global": { "v": [""] } } }, { "l": "ka_GE", "t": { "Global": { "v": [""] } } }, { "l": "kab", "t": { "Global": { "v": [""] } } }, { "l": "kk", "t": { "Global": { "v": [""] } } }, { "l": "km", "t": { "Global": { "v": [""] } } }, { "l": "kn", "t": { "Global": { "v": [""] } } }, { "l": "ko", "t": { "Global": { "v": [""] } } }, { "l": "la", "t": { "Global": { "v": [""] } } }, { "l": "lb", "t": { "Global": { "v": [""] } } }, { "l": "lo", "t": { "Global": { "v": [""] } } }, { "l": "lt_LT", "t": { "Global": { "v": [""] } } }, { "l": "lv", "t": { "Global": { "v": [""] } } }, { "l": "mk", "t": { "Global": { "v": ["Глобално"] } } }, { "l": "mn", "t": { "Global": { "v": [""] } } }, { "l": "mr", "t": { "Global": { "v": [""] } } }, { "l": "ms_MY", "t": { "Global": { "v": [""] } } }, { "l": "my", "t": { "Global": { "v": ["ကမ္ဘာလုံးဆိုင်ရာ"] } } }, { "l": "nb", "t": { "Global": { "v": ["Global"] } } }, { "l": "ne", "t": { "Global": { "v": [""] } } }, { "l": "nl", "t": { "Global": { "v": ["Globaal"] } } }, { "l": "nn_NO", "t": { "Global": { "v": [""] } } }, { "l": "oc", "t": { "Global": { "v": [""] } } }, { "l": "pl", "t": { "Global": { "v": ["Globalnie"] } } }, { "l": "ps", "t": { "Global": { "v": [""] } } }, { "l": "pt_BR", "t": { "Global": { "v": ["Global"] } } }, { "l": "pt_PT", "t": { "Global": { "v": ["Global"] } } }, { "l": "ro", "t": { "Global": { "v": ["Global"] } } }, { "l": "ru", "t": { "Global": { "v": ["Глобальный"] } } }, { "l": "sc", "t": { "Global": { "v": [""] } } }, { "l": "si", "t": { "Global": { "v": [""] } } }, { "l": "sk", "t": { "Global": { "v": ["Globálne"] } } }, { "l": "sl", "t": { "Global": { "v": ["Splošno"] } } }, { "l": "sq", "t": { "Global": { "v": [""] } } }, { "l": "sr", "t": { "Global": { "v": ["Глобално"] } } }, { "l": "sr@latin", "t": { "Global": { "v": [""] } } }, { "l": "sv", "t": { "Global": { "v": ["Global"] } } }, { "l": "sw", "t": { "Global": { "v": [""] } } }, { "l": "ta", "t": { "Global": { "v": [""] } } }, { "l": "th", "t": { "Global": { "v": [""] } } }, { "l": "tk", "t": { "Global": { "v": [""] } } }, { "l": "tr", "t": { "Global": { "v": ["Evrensel"] } } }, { "l": "ug", "t": { "Global": { "v": [""] } } }, { "l": "uk", "t": { "Global": { "v": ["Глобальний"] } } }, { "l": "ur_PK", "t": { "Global": { "v": [""] } } }, { "l": "uz", "t": { "Global": { "v": [""] } } }, { "l": "vi", "t": { "Global": { "v": [""] } } }, { "l": "zh_CN", "t": { "Global": { "v": ["全局"] } } }, { "l": "zh_HK", "t": { "Global": { "v": ["全球的"] } } }, { "l": "zh_TW", "t": { "Global": { "v": ["全域"] } } }, { "l": "zu_ZA", "t": { "Global": { "v": [""] } } }];
const t23 = [{ "l": "af", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ar", "t": { "Go back to the list": { "v": ["عودة إلى القائمة"] } } }, { "l": "ast", "t": { "Go back to the list": { "v": ["Volver a la llista"] } } }, { "l": "az", "t": { "Go back to the list": { "v": [""] } } }, { "l": "be", "t": { "Go back to the list": { "v": [""] } } }, { "l": "bg", "t": { "Go back to the list": { "v": [""] } } }, { "l": "bn_BD", "t": { "Go back to the list": { "v": [""] } } }, { "l": "br", "t": { "Go back to the list": { "v": [""] } } }, { "l": "bs", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ca", "t": { "Go back to the list": { "v": ["Torna a la llista"] } } }, { "l": "cs", "t": { "Go back to the list": { "v": ["Jít zpět na seznam"] } } }, { "l": "cs_CZ", "t": { "Go back to the list": { "v": ["Jít zpět na seznam"] } } }, { "l": "cy_GB", "t": { "Go back to the list": { "v": [""] } } }, { "l": "da", "t": { "Go back to the list": { "v": ["Tilbage til listen"] } } }, { "l": "de", "t": { "Go back to the list": { "v": ["Zurück zur Liste"] } } }, { "l": "de_DE", "t": { "Go back to the list": { "v": ["Zurück zur Liste"] } } }, { "l": "el", "t": { "Go back to the list": { "v": ["Επιστροφή στην αρχική λίστα "] } } }, { "l": "en_GB", "t": { "Go back to the list": { "v": ["Go back to the list"] } } }, { "l": "eo", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es", "t": { "Go back to the list": { "v": ["Volver a la lista"] } } }, { "l": "es_419", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_AR", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_CL", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_CO", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_CR", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_DO", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_EC", "t": { "Go back to the list": { "v": ["Volver a la lista"] } } }, { "l": "es_GT", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_HN", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_MX", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_NI", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_PA", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_PE", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_PR", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_PY", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_SV", "t": { "Go back to the list": { "v": [""] } } }, { "l": "es_UY", "t": { "Go back to the list": { "v": [""] } } }, { "l": "et_EE", "t": { "Go back to the list": { "v": [""] } } }, { "l": "eu", "t": { "Go back to the list": { "v": ["Bueltatu zerrendara"] } } }, { "l": "fa", "t": { "Go back to the list": { "v": [""] } } }, { "l": "fi", "t": { "Go back to the list": { "v": ["Siirry takaisin listaan"] } } }, { "l": "fo", "t": { "Go back to the list": { "v": [""] } } }, { "l": "fr", "t": { "Go back to the list": { "v": ["Retourner à la liste"] } } }, { "l": "gd", "t": { "Go back to the list": { "v": [""] } } }, { "l": "gl", "t": { "Go back to the list": { "v": ["Volver á lista"] } } }, { "l": "he", "t": { "Go back to the list": { "v": ["חזרה לרשימה"] } } }, { "l": "hi_IN", "t": { "Go back to the list": { "v": [""] } } }, { "l": "hr", "t": { "Go back to the list": { "v": [""] } } }, { "l": "hsb", "t": { "Go back to the list": { "v": [""] } } }, { "l": "hu", "t": { "Go back to the list": { "v": ["Ugrás vissza a listához"] } } }, { "l": "hy", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ia", "t": { "Go back to the list": { "v": [""] } } }, { "l": "id", "t": { "Go back to the list": { "v": ["Kembali ke daftar"] } } }, { "l": "ig", "t": { "Go back to the list": { "v": [""] } } }, { "l": "is", "t": { "Go back to the list": { "v": ["Fara til baka í listann"] } } }, { "l": "it", "t": { "Go back to the list": { "v": ["Torna all'elenco"] } } }, { "l": "ja", "t": { "Go back to the list": { "v": ["リストに戻る"] } } }, { "l": "ka", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ka_GE", "t": { "Go back to the list": { "v": [""] } } }, { "l": "kab", "t": { "Go back to the list": { "v": [""] } } }, { "l": "kk", "t": { "Go back to the list": { "v": [""] } } }, { "l": "km", "t": { "Go back to the list": { "v": [""] } } }, { "l": "kn", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ko", "t": { "Go back to the list": { "v": [""] } } }, { "l": "la", "t": { "Go back to the list": { "v": [""] } } }, { "l": "lb", "t": { "Go back to the list": { "v": [""] } } }, { "l": "lo", "t": { "Go back to the list": { "v": [""] } } }, { "l": "lt_LT", "t": { "Go back to the list": { "v": [""] } } }, { "l": "lv", "t": { "Go back to the list": { "v": [""] } } }, { "l": "mk", "t": { "Go back to the list": { "v": ["Врати се на листата"] } } }, { "l": "mn", "t": { "Go back to the list": { "v": [""] } } }, { "l": "mr", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ms_MY", "t": { "Go back to the list": { "v": [""] } } }, { "l": "my", "t": { "Go back to the list": { "v": [""] } } }, { "l": "nb", "t": { "Go back to the list": { "v": ["Gå tilbake til listen"] } } }, { "l": "ne", "t": { "Go back to the list": { "v": [""] } } }, { "l": "nl", "t": { "Go back to the list": { "v": ["Ga terug naar de lijst"] } } }, { "l": "nn_NO", "t": { "Go back to the list": { "v": [""] } } }, { "l": "oc", "t": { "Go back to the list": { "v": [""] } } }, { "l": "pl", "t": { "Go back to the list": { "v": ["Powrót do listy"] } } }, { "l": "ps", "t": { "Go back to the list": { "v": [""] } } }, { "l": "pt_BR", "t": { "Go back to the list": { "v": ["Volte para a lista"] } } }, { "l": "pt_PT", "t": { "Go back to the list": { "v": ["Voltar para a lista"] } } }, { "l": "ro", "t": { "Go back to the list": { "v": ["Întoarceți-vă la listă"] } } }, { "l": "ru", "t": { "Go back to the list": { "v": ["Вернуться к списку"] } } }, { "l": "sc", "t": { "Go back to the list": { "v": [""] } } }, { "l": "si", "t": { "Go back to the list": { "v": [""] } } }, { "l": "sk", "t": { "Go back to the list": { "v": ["Naspäť na zoznam"] } } }, { "l": "sl", "t": { "Go back to the list": { "v": ["Vrni se na seznam"] } } }, { "l": "sq", "t": { "Go back to the list": { "v": [""] } } }, { "l": "sr", "t": { "Go back to the list": { "v": ["Назад на листу"] } } }, { "l": "sr@latin", "t": { "Go back to the list": { "v": [""] } } }, { "l": "sv", "t": { "Go back to the list": { "v": ["Gå tillbaka till listan"] } } }, { "l": "sw", "t": { "Go back to the list": { "v": [""] } } }, { "l": "ta", "t": { "Go back to the list": { "v": [""] } } }, { "l": "th", "t": { "Go back to the list": { "v": [""] } } }, { "l": "tk", "t": { "Go back to the list": { "v": [""] } } }, { "l": "tr", "t": { "Go back to the list": { "v": ["Listeye dön"] } } }, { "l": "ug", "t": { "Go back to the list": { "v": [""] } } }, { "l": "uk", "t": { "Go back to the list": { "v": ["Повернутися до списку"] } } }, { "l": "ur_PK", "t": { "Go back to the list": { "v": [""] } } }, { "l": "uz", "t": { "Go back to the list": { "v": [""] } } }, { "l": "vi", "t": { "Go back to the list": { "v": [""] } } }, { "l": "zh_CN", "t": { "Go back to the list": { "v": ["返回至列表"] } } }, { "l": "zh_HK", "t": { "Go back to the list": { "v": ["返回清單"] } } }, { "l": "zh_TW", "t": { "Go back to the list": { "v": ["回到清單"] } } }, { "l": "zu_ZA", "t": { "Go back to the list": { "v": [""] } } }];
const t24 = [{ "l": "af", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ar", "t": { "Hide password": { "v": ["إخفاء كلمة المرور"] }, "Password is secure": { "v": ["كلمة المرور مُؤمّنة"] }, "Show password": { "v": ["أظهِر كلمة المرور"] } } }, { "l": "ast", "t": { "Hide password": { "v": ["Anubrir la contraseña"] }, "Password is secure": { "v": ["La contraseña ye segura"] }, "Show password": { "v": ["Amosar la contraseña"] } } }, { "l": "az", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "be", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "bg", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "bn_BD", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "br", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "bs", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ca", "t": { "Hide password": { "v": ["Amagar contrasenya"] }, "Password is secure": { "v": ["Contrasenya segura<br>"] }, "Show password": { "v": ["Mostrar contrasenya"] } } }, { "l": "cs", "t": { "Hide password": { "v": ["Skrýt heslo"] }, "Password is secure": { "v": ["Heslo je bezpečné"] }, "Show password": { "v": ["Zobrazit heslo"] } } }, { "l": "cs_CZ", "t": { "Hide password": { "v": ["Skrýt heslo"] }, "Password is secure": { "v": ["Heslo je bezpečné"] }, "Show password": { "v": ["Zobrazit heslo"] } } }, { "l": "cy_GB", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "da", "t": { "Hide password": { "v": ["Skjul kodeord"] }, "Password is secure": { "v": ["Kodeordet er sikkert"] }, "Show password": { "v": ["Vis kodeord"] } } }, { "l": "de", "t": { "Hide password": { "v": ["Passwort verbergen"] }, "Password is secure": { "v": ["Passwort ist sicher"] }, "Show password": { "v": ["Passwort anzeigen"] } } }, { "l": "de_DE", "t": { "Hide password": { "v": ["Passwort verbergen"] }, "Password is secure": { "v": ["Passwort ist sicher"] }, "Show password": { "v": ["Passwort anzeigen"] } } }, { "l": "el", "t": { "Hide password": { "v": ["Απόκρυψη κωδικού πρόσβασης"] }, "Password is secure": { "v": ["Ο κωδικός πρόσβασης είναι ασφαλής"] }, "Show password": { "v": ["Εμφάνιση κωδικού πρόσβασης"] } } }, { "l": "en_GB", "t": { "Hide password": { "v": ["Hide password"] }, "Password is secure": { "v": ["Password is secure"] }, "Show password": { "v": ["Show password"] } } }, { "l": "eo", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es", "t": { "Hide password": { "v": ["Ocultar contraseña"] }, "Password is secure": { "v": ["La contraseña es segura"] }, "Show password": { "v": ["Mostrar contraseña"] } } }, { "l": "es_419", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_AR", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_CL", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_CO", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_CR", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_DO", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_EC", "t": { "Hide password": { "v": ["Ocultar contraseña"] }, "Password is secure": { "v": ["La contraseña es segura"] }, "Show password": { "v": ["Mostrar contraseña"] } } }, { "l": "es_GT", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_HN", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_MX", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_NI", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PA", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PE", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PR", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PY", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_SV", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_UY", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "et_EE", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "eu", "t": { "Hide password": { "v": ["Ezkutatu pasahitza"] }, "Password is secure": { "v": ["Pasahitza segurua da"] }, "Show password": { "v": ["Erakutsi pasahitza"] } } }, { "l": "fa", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "fi", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "fo", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "fr", "t": { "Hide password": { "v": ["Cacher le mot de passe"] }, "Password is secure": { "v": ["Le mot de passe est sécurisé"] }, "Show password": { "v": ["Afficher le mot de passe"] } } }, { "l": "gd", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "gl", "t": { "Hide password": { "v": ["Agochar o contrasinal"] }, "Password is secure": { "v": ["O contrasinal é seguro"] }, "Show password": { "v": ["Amosar o contrasinal"] } } }, { "l": "he", "t": { "Hide password": { "v": ["הסתרת סיסמה"] }, "Password is secure": { "v": ["הסיסמה מאובטחת"] }, "Show password": { "v": ["הצגת סיסמה"] } } }, { "l": "hi_IN", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "hr", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "hsb", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "hu", "t": { "Hide password": { "v": ["Jelszó elrejtése"] }, "Password is secure": { "v": ["A jelszó biztonságos"] }, "Show password": { "v": ["Jelszó megjelenítése"] } } }, { "l": "hy", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ia", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "id", "t": { "Hide password": { "v": ["Sembunyikan sandi"] }, "Password is secure": { "v": ["Kata sandi sudah aman"] }, "Show password": { "v": ["Tampilkan sandi"] } } }, { "l": "ig", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "is", "t": { "Hide password": { "v": ["Fela lykilorð"] }, "Password is secure": { "v": ["Lykilorðið er öruggt"] }, "Show password": { "v": ["Birta lykilorð"] } } }, { "l": "it", "t": { "Hide password": { "v": ["Nascondi la password"] }, "Password is secure": { "v": ["La password è sicura"] }, "Show password": { "v": ["Mostra la password"] } } }, { "l": "ja", "t": { "Hide password": { "v": ["パスワードを非表示"] }, "Password is secure": { "v": ["パスワードは保護されています"] }, "Show password": { "v": ["パスワードを表示"] } } }, { "l": "ka", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ka_GE", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "kab", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "kk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "km", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "kn", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ko", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "la", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lb", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lo", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lt_LT", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lv", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "mk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "mn", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "mr", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ms_MY", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "my", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "nb", "t": { "Hide password": { "v": ["Skjul passord"] }, "Password is secure": { "v": ["Passordet er sikkert"] }, "Show password": { "v": ["Vis passord"] } } }, { "l": "ne", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "nl", "t": { "Hide password": { "v": ["Verberg wachtwoord"] }, "Password is secure": { "v": ["Wachtwoord is veilig"] }, "Show password": { "v": ["Toon wachtwoord"] } } }, { "l": "nn_NO", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "oc", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "pl", "t": { "Hide password": { "v": ["Ukryj hasło"] }, "Password is secure": { "v": ["Hasło jest bezpieczne"] }, "Show password": { "v": ["Pokaż hasło"] } } }, { "l": "ps", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "pt_BR", "t": { "Hide password": { "v": ["Ocultar a senha"] }, "Password is secure": { "v": ["A senha é segura"] }, "Show password": { "v": ["Mostrar senha"] } } }, { "l": "pt_PT", "t": { "Hide password": { "v": ["Ocultar a senha"] }, "Password is secure": { "v": ["A senha é segura"] }, "Show password": { "v": ["Mostrar senha"] } } }, { "l": "ro", "t": { "Hide password": { "v": ["Ascunde parola"] }, "Password is secure": { "v": ["Parola este sigură"] }, "Show password": { "v": ["Arată parola"] } } }, { "l": "ru", "t": { "Hide password": { "v": ["Скрыть пароль"] }, "Password is secure": { "v": ["Пароль надежный"] }, "Show password": { "v": ["Показать пароль"] } } }, { "l": "sc", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "si", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sl", "t": { "Hide password": { "v": ["Skrij geslo"] }, "Password is secure": { "v": ["Geslo je varno"] }, "Show password": { "v": ["Pokaži geslo"] } } }, { "l": "sq", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sr", "t": { "Hide password": { "v": ["Сакриј лозинку"] }, "Password is secure": { "v": ["Лозинка је безбедна"] }, "Show password": { "v": ["Прикажи лозинку"] } } }, { "l": "sr@latin", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sv", "t": { "Hide password": { "v": ["Göm lössenordet"] }, "Password is secure": { "v": ["Lössenordet är säkert"] }, "Show password": { "v": ["Visa lössenordet"] } } }, { "l": "sw", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ta", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "th", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "tk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "tr", "t": { "Hide password": { "v": ["Parolayı gizle"] }, "Password is secure": { "v": ["Parola güvenli"] }, "Show password": { "v": ["Parolayı görüntüle"] } } }, { "l": "ug", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "uk", "t": { "Hide password": { "v": ["Приховати пароль"] }, "Password is secure": { "v": ["Пароль безпечний"] }, "Show password": { "v": ["Показати пароль"] } } }, { "l": "ur_PK", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "uz", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "vi", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "zh_CN", "t": { "Hide password": { "v": ["隐藏密码"] }, "Password is secure": { "v": ["密码安全"] }, "Show password": { "v": ["显示密码"] } } }, { "l": "zh_HK", "t": { "Hide password": { "v": ["隱藏密碼"] }, "Password is secure": { "v": ["密碼是安全的"] }, "Show password": { "v": ["顯示密碼"] } } }, { "l": "zh_TW", "t": { "Hide password": { "v": ["隱藏密碼"] }, "Password is secure": { "v": ["密碼安全"] }, "Show password": { "v": ["顯示密碼"] } } }, { "l": "zu_ZA", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }];
const t25 = [{ "l": "af", "t": {} }, { "l": "ar", "t": {} }, { "l": "ast", "t": {} }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": {} }, { "l": "cs_CZ", "t": { "Keyboard navigation help": { "v": ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { "v": ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { "v": ["Přeskočit na hlavní obsah"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": {} }, { "l": "de", "t": {} }, { "l": "de_DE", "t": { "Keyboard navigation help": { "v": ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { "v": ["Zur App-Navigation springen"] }, "Skip to main content": { "v": ["Zum Hauptinhalt springen"] } } }, { "l": "el", "t": {} }, { "l": "en_GB", "t": {} }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Keyboard navigation help": { "v": ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { "v": ["Saltar a la navegación de apps"] }, "Skip to main content": { "v": ["Saltar al contenido principal"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": {} }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": {} }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": {} }, { "l": "eu", "t": {} }, { "l": "fa", "t": {} }, { "l": "fi", "t": {} }, { "l": "fo", "t": {} }, { "l": "fr", "t": {} }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Keyboard navigation help": { "v": ["Axuda á navegación co teclado"] }, "Skip to app navigation": { "v": ["Ir á navegación da aplicación"] }, "Skip to main content": { "v": ["Ir ao contido principal"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": {} }, { "l": "ig", "t": {} }, { "l": "is", "t": {} }, { "l": "it", "t": {} }, { "l": "ja", "t": {} }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": {} }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": {} }, { "l": "ne", "t": {} }, { "l": "nl", "t": {} }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": {} }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": {} }, { "l": "pt_PT", "t": {} }, { "l": "ro", "t": {} }, { "l": "ru", "t": {} }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": {} }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Keyboard navigation help": { "v": ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { "v": ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { "v": ["Прескочи на главни садржај"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Keyboard navigation help": { "v": ["Hjälp med tangentbordsnavigering"] }, "Skip to app navigation": { "v": ["Hoppa till appnavigering"] }, "Skip to main content": { "v": ["Hoppa till huvudinnehåll"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Keyboard navigation help": { "v": ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { "v": ["Uygulama gezinmesine git"] }, "Skip to main content": { "v": ["Ana içeriğe git"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": {} }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": {} }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": {} }, { "l": "zh_HK", "t": {} }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t26 = [{ "l": "af", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ar", "t": { 'Load more "{options}"': { "v": ['تحميل المزيد من "{options}" '] }, "Raw link {options}": { "v": [" الرابط الخام raw link ـ {options}"] }, "Start typing to search": { "v": ["إبدإ كتابة مفردات البحث"] } } }, { "l": "ast", "t": { 'Load more "{options}"': { "v": ["Cargar más «{options}»"] }, "Raw link {options}": { "v": ["Enllaz en bruto {optiones}"] }, "Start typing to search": { "v": ["Comienza a escribir pa buscar"] } } }, { "l": "az", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "be", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "bg", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "bn_BD", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "br", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "bs", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ca", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "cs", "t": { "Raw link {options}": { "v": ["Holý odkaz {options}"] }, "Start typing to search": { "v": ["Vyhledávejte psaním"] } } }, { "l": "cs_CZ", "t": { 'Load more "{options}"': { "v": ["Načíst další „{options}“"] }, "Raw link {options}": { "v": ["Holý odkaz {options}"] }, "Start typing to search": { "v": ["Vyhledávejte psaním"] } } }, { "l": "cy_GB", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "da", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "de", "t": { 'Load more "{options}"': { "v": ['Weitere "{options}" laden'] }, "Raw link {options}": { "v": ["Unverarbeiteter Link {Optionen}"] }, "Start typing to search": { "v": ["Beginne mit der Eingabe, um zu suchen"] } } }, { "l": "de_DE", "t": { 'Load more "{options}"': { "v": ['Weitere "{options}" laden'] }, "Raw link {options}": { "v": ["Unverarbeiteter Link {Optionen}"] }, "Start typing to search": { "v": ["Mit der Eingabe beginnen, um zu suchen"] } } }, { "l": "el", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "en_GB", "t": { 'Load more "{options}"': { "v": ['Load more "{options}"'] }, "Raw link {options}": { "v": ["Raw link {options}"] }, "Start typing to search": { "v": ["Start typing to search"] } } }, { "l": "eo", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es", "t": { 'Load more "{options}"': { "v": ['Cargar más "{options}"'] }, "Raw link {options}": { "v": ["Enlace directo {options}"] }, "Start typing to search": { "v": ["Comience a escribir para buscar"] } } }, { "l": "es_419", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_AR", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_CL", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_CO", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_CR", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_DO", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_EC", "t": { 'Load more "{options}"': { "v": [""] }, "Raw link {options}": { "v": ["Enlace directo {options}"] }, "Start typing to search": { "v": ["Comienza a escribir para buscar"] } } }, { "l": "es_GT", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_HN", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_MX", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_NI", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PA", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PE", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PR", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_PY", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_SV", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "es_UY", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "et_EE", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "eu", "t": { 'Load more "{options}"': { "v": ['Kargatu "{options}" gehiago'] }, "Raw link {options}": { "v": ["Formaturik gabeko esteka {aukerak}"] }, "Start typing to search": { "v": ["Hasi idazten bilatzeko"] } } }, { "l": "fa", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "fi", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "fo", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "fr", "t": { 'Load more "{options}"': { "v": [`Charger d'avantage "{options}"`] }, "Raw link {options}": { "v": ["Lien brut {options}"] }, "Start typing to search": { "v": ["Commencez à écrire pour rechercher"] } } }, { "l": "gd", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "gl", "t": { 'Load more "{options}"': { "v": ["Cargar máis «{options}»"] }, "Raw link {options}": { "v": ["Ligazón sen procesar {options}"] }, "Start typing to search": { "v": ["Comece a escribir para buscar"] } } }, { "l": "he", "t": { 'Load more "{options}"': { "v": [""] }, "Raw link {options}": { "v": ["קישור גולמי {options}"] }, "Start typing to search": { "v": ["התחלת הקלדה מחפשת"] } } }, { "l": "hi_IN", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hr", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hsb", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hu", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "hy", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ia", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "id", "t": { 'Load more "{options}"': { "v": ['Muat "{options}" lainnya'] }, "Raw link {options}": { "v": ["Tautan mentah {options}"] }, "Start typing to search": { "v": ["Ketik untuk mulai mencari"] } } }, { "l": "ig", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "is", "t": { 'Load more "{options}"': { "v": ['Hlaða inn fleiri "{options}"'] }, "Raw link {options}": { "v": ["Hrár tengill {options}"] }, "Start typing to search": { "v": ["Byrjaðu að skrifa til að leita"] } } }, { "l": "it", "t": { 'Load more "{options}"': { "v": ['Carica più "{options}"'] }, "Raw link {options}": { "v": ["Raw link {options}"] }, "Start typing to search": { "v": ["Iniziare a digitare per effettuare la ricerca"] } } }, { "l": "ja", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ka", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ka_GE", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "kab", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "kk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "km", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "kn", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ko", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "la", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lb", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lo", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lt_LT", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "lv", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "mk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "mn", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "mr", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ms_MY", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "my", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "nb", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ne", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "nl", "t": { 'Load more "{options}"': { "v": ['Laad meer "{options}"'] }, "Raw link {options}": { "v": ["Basis link {options}"] }, "Start typing to search": { "v": ["Start met typen om te zoeken"] } } }, { "l": "nn_NO", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "oc", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "pl", "t": { 'Load more "{options}"': { "v": ['Załaduj więcej "{options}"'] }, "Raw link {options}": { "v": ["Link Raw {options}"] }, "Start typing to search": { "v": ["Zacznij pisać, aby wyszukać"] } } }, { "l": "ps", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "pt_BR", "t": { 'Load more "{options}"': { "v": ['Carregue mais "{options}"'] }, "Raw link {options}": { "v": ["Link bruto {options}"] }, "Start typing to search": { "v": ["Comece a digitar para pesquisar"] } } }, { "l": "pt_PT", "t": { 'Load more "{options}"': { "v": [""] }, "Raw link {options}": { "v": ["Link inicial {options}"] }, "Start typing to search": { "v": ["Comece a digitar para pesquisar"] } } }, { "l": "ro", "t": { 'Load more "{options}"': { "v": ['Încarcă mai multe "{options}"'] }, "Raw link {options}": { "v": ["Link brut {options}"] }, "Start typing to search": { "v": ["Tastați pentru căutare"] } } }, { "l": "ru", "t": { 'Load more "{options}"': { "v": ['Загрузить больше "{options}""'] }, "Raw link {options}": { "v": ["Необработанная ссылка {options}"] }, "Start typing to search": { "v": ["Начните вводить текст для поиска"] } } }, { "l": "sc", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "si", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sl", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sq", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sr", "t": { 'Load more "{options}"': { "v": ["Учитај још „{options}”"] }, "Raw link {options}": { "v": ["Сирови линк {options}"] }, "Start typing to search": { "v": ["Покрените претрагу куцањем"] } } }, { "l": "sr@latin", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "sv", "t": { 'Load more "{options}"': { "v": ['Ladda fler "{options}"'] }, "Raw link {options}": { "v": ["Oformaterad länk {options}"] }, "Start typing to search": { "v": ["Börja skriva för att söka"] } } }, { "l": "sw", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "ta", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "th", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "tk", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "tr", "t": { 'Load more "{options}"': { "v": ['Diğer "{options}"'] }, "Raw link {options}": { "v": ["Ham bağlantı {options}"] }, "Start typing to search": { "v": ["Aramak için yazmaya başlayın"] } } }, { "l": "ug", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "uk", "t": { 'Load more "{options}"': { "v": ['Завантажити більше "{options}"'] }, "Raw link {options}": { "v": ["Пряме посилання {options}"] }, "Start typing to search": { "v": ["Почніть вводити для пошуку"] } } }, { "l": "ur_PK", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "uz", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "vi", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "zh_CN", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }, { "l": "zh_HK", "t": { 'Load more "{options}"': { "v": ['載入更多 "{options}"'] }, "Raw link {options}": { "v": ["原始連結 {options}"] }, "Start typing to search": { "v": ["開始輸入以進行搜尋"] } } }, { "l": "zh_TW", "t": { 'Load more "{options}"': { "v": ["載入更多「{options}」"] }, "Raw link {options}": { "v": ["原始連結 {options}"] }, "Start typing to search": { "v": ["開始輸入以進行搜尋"] } } }, { "l": "zu_ZA", "t": { "Raw link {options}": { "v": [""] }, "Start typing to search": { "v": [""] } } }];
const t27 = [{ "l": "af", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ar", "t": { "Message limit of {count} characters reached": { "v": ["تمّ الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف"] }, "No link provider found": { "v": ["لا يوجد أيّ مزود روابط link provider"] }, "Write a message …": { "v": ["أكتُب رسالةً ..."] } } }, { "l": "ast", "t": { "Message limit of {count} characters reached": { "v": ["Algamóse la llende del mensaxe con {count} caráuteres"] }, "No link provider found": { "v": ["Nun s'atopó nengún fornidor d'enllaces"] }, "Write a message …": { "v": ["Escribi un mensaxe…"] } } }, { "l": "az", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "be", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "bg", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "bn_BD", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "br", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "bs", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ca", "t": { "Message limit of {count} characters reached": { "v": ["S'ha arribat al límit de {count} caràcters per missatge"] }, "No link provider found": { "v": [""] } } }, { "l": "cs", "t": { "Message limit of {count} characters reached": { "v": ["Dosaženo limitu počtu ({count}) znaků zprávy"] }, "No link provider found": { "v": ["Nenalezen žádný poskytovatel odkazů"] } } }, { "l": "cs_CZ", "t": { "Message limit of {count} characters reached": { "v": ["Dosaženo limitu počtu ({count}) znaků zprávy"] }, "No link provider found": { "v": ["Nenalezen žádný poskytovatel odkazů"] }, "Write a message …": { "v": ["Napsat zprávu…"] } } }, { "l": "cy_GB", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "da", "t": { "Message limit of {count} characters reached": { "v": ["Begrænsning på {count} tegn er nået"] }, "No link provider found": { "v": [""] } } }, { "l": "de", "t": { "Message limit of {count} characters reached": { "v": ["Nachrichtenlimit von {count} Zeichen erreicht."] }, "No link provider found": { "v": ["Kein Linkanbieter gefunden"] }, "Write a message …": { "v": ["Nachricht schreiben …"] } } }, { "l": "de_DE", "t": { "Message limit of {count} characters reached": { "v": ["Nachrichtenlimit von {count} Zeichen erreicht"] }, "No link provider found": { "v": ["Kein Linkanbieter gefunden"] }, "Write a message …": { "v": ["Nachricht schreiben …"] } } }, { "l": "el", "t": { "Message limit of {count} characters reached": { "v": ["Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος"] }, "No link provider found": { "v": [""] } } }, { "l": "en_GB", "t": { "Message limit of {count} characters reached": { "v": ["Message limit of {count} characters reached"] }, "No link provider found": { "v": ["No link provider found"] }, "Write a message …": { "v": ["Write a message …"] } } }, { "l": "eo", "t": { "Message limit of {count} characters reached": { "v": ["La limo je {count} da literoj atingita"] }, "No link provider found": { "v": [""] } } }, { "l": "es", "t": { "Message limit of {count} characters reached": { "v": ["Se ha alcanzado el límite de {count} caracteres en el mensaje"] }, "No link provider found": { "v": ["No se encontró ningún proveedor de enlaces"] }, "Write a message …": { "v": ["Escriba un mensaje ..."] } } }, { "l": "es_419", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_AR", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_CL", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_CO", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_CR", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_DO", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_EC", "t": { "Message limit of {count} characters reached": { "v": ["Se ha alcanzado el límite de caracteres del mensaje {count}"] }, "No link provider found": { "v": ["No se encontró ningún proveedor de enlaces"] }, "Write a message …": { "v": [""] } } }, { "l": "es_GT", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_HN", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_MX", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_NI", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_PA", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_PE", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_PR", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_PY", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_SV", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "es_UY", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "et_EE", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "eu", "t": { "Message limit of {count} characters reached": { "v": ["Mezuaren {count} karaketere-limitera heldu zara"] }, "No link provider found": { "v": ["Ez da aurkitu esteka-hornitzailerik"] }, "Write a message …": { "v": ["Idatzi mezu bat…"] } } }, { "l": "fa", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "fi", "t": { "Message limit of {count} characters reached": { "v": ["Viestin merkken enimmäisimäärä {count} täynnä "] }, "No link provider found": { "v": [""] } } }, { "l": "fo", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "fr", "t": { "Message limit of {count} characters reached": { "v": ["Limite de messages de {count} caractères atteinte"] }, "No link provider found": { "v": ["Aucun fournisseur de lien trouvé"] }, "Write a message …": { "v": ["Ecrire un message..."] } } }, { "l": "gd", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "gl", "t": { "Message limit of {count} characters reached": { "v": ["Acadouse o límite de {count} caracteres por mensaxe"] }, "No link provider found": { "v": ["Non se atopou ningún provedor de ligazóns"] }, "Write a message …": { "v": ["Escribir unha mensaxe…"] } } }, { "l": "he", "t": { "Message limit of {count} characters reached": { "v": ["הגעת למגבלה של {count} תווים"] }, "No link provider found": { "v": ["לא נמצא ספק קישורים"] }, "Write a message …": { "v": [""] } } }, { "l": "hi_IN", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "hr", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "hsb", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "hu", "t": { "Message limit of {count} characters reached": { "v": ["{count} karakteres üzenetkorlát elérve"] }, "No link provider found": { "v": [""] } } }, { "l": "hy", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ia", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "id", "t": { "Message limit of {count} characters reached": { "v": ["Batas jumlah karakter pesan ({count} karakter) tercapai"] }, "No link provider found": { "v": ["Tidak ada penyedia tautan yang ditemukan"] }, "Write a message …": { "v": ["Tulis pesan ..."] } } }, { "l": "ig", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "is", "t": { "Message limit of {count} characters reached": { "v": ["Takmörkum {count} stafa náð"] }, "No link provider found": { "v": ["Engin tenglaveita fannst"] }, "Write a message …": { "v": ["Skrifaðu skilaboð …"] } } }, { "l": "it", "t": { "Message limit of {count} characters reached": { "v": ["Limite dei messaggi di {count} caratteri raggiunto"] }, "No link provider found": { "v": ["Nessun fornitore di link trovato"] }, "Write a message …": { "v": ["Scrivi un messaggio ..."] } } }, { "l": "ja", "t": { "Message limit of {count} characters reached": { "v": ["{count} 文字のメッセージ上限に達しています"] }, "No link provider found": { "v": [""] } } }, { "l": "ka", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ka_GE", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "kab", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "kk", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "km", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "kn", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ko", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "la", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "lb", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "lo", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "lt_LT", "t": { "Message limit of {count} characters reached": { "v": ["Pasiekta {count} simbolių žinutės riba"] }, "No link provider found": { "v": [""] } } }, { "l": "lv", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "mk", "t": { "Message limit of {count} characters reached": { "v": ["Ограничувањето на должината на пораката од {count} карактери е надминато"] }, "No link provider found": { "v": [""] } } }, { "l": "mn", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "mr", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ms_MY", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "my", "t": { "Message limit of {count} characters reached": { "v": ["ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ"] }, "No link provider found": { "v": [""] } } }, { "l": "nb", "t": { "Message limit of {count} characters reached": { "v": ["Karakter begrensing {count} nådd i melding"] }, "No link provider found": { "v": [""] } } }, { "l": "ne", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "nl", "t": { "Message limit of {count} characters reached": { "v": ["Berichtlimiet van {count} karakters bereikt"] }, "No link provider found": { "v": ["Geen link provider gevonden"] }, "Write a message …": { "v": ["Schrijf een bericht..."] } } }, { "l": "nn_NO", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "oc", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "pl", "t": { "Message limit of {count} characters reached": { "v": ["Przekroczono limit wiadomości wynoszący {count} znaków"] }, "No link provider found": { "v": ["Nie znaleziono dostawcy linków"] }, "Write a message …": { "v": ["Napisać wiadomość…"] } } }, { "l": "ps", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "pt_BR", "t": { "Message limit of {count} characters reached": { "v": ["Limite de mensagem de {count} caracteres atingido"] }, "No link provider found": { "v": ["Nenhum provedor de link encontrado"] }, "Write a message …": { "v": ["Escreve uma mensagem …"] } } }, { "l": "pt_PT", "t": { "Message limit of {count} characters reached": { "v": ["Atingido o limite de {count} carateres da mensagem."] }, "No link provider found": { "v": ["Nenhum fornecedor de link encontrado"] }, "Write a message …": { "v": [""] } } }, { "l": "ro", "t": { "Message limit of {count} characters reached": { "v": ["Limita mesajului de {count} caractere a fost atinsă"] }, "No link provider found": { "v": ["Nu s-a găsit un provider pentru linkuri"] }, "Write a message …": { "v": ["Scrieți un mesaj ..."] } } }, { "l": "ru", "t": { "Message limit of {count} characters reached": { "v": ["Достигнуто ограничение на количество символов в {count}"] }, "No link provider found": { "v": ["Поставщик ссылок не найден"] }, "Write a message …": { "v": ["Напиши сообщение …"] } } }, { "l": "sc", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "si", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "sk", "t": { "Message limit of {count} characters reached": { "v": ["Limit správy na {count} znakov dosiahnutý"] }, "No link provider found": { "v": [""] } } }, { "l": "sl", "t": { "Message limit of {count} characters reached": { "v": ["Dosežena omejitev {count} znakov na sporočilo."] }, "No link provider found": { "v": [""] } } }, { "l": "sq", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "sr", "t": { "Message limit of {count} characters reached": { "v": ["Достигнуто је ограничење величине поруке од {count} карактера"] }, "No link provider found": { "v": ["Није пронађен ниједан пружалац линка"] }, "Write a message …": { "v": ["Напишите поруку…"] } } }, { "l": "sr@latin", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "sv", "t": { "Message limit of {count} characters reached": { "v": ["Meddelandegräns {count} tecken används"] }, "No link provider found": { "v": ["Ingen länkleverantör hittades"] }, "Write a message …": { "v": ["Skriv ett meddelande …"] } } }, { "l": "sw", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "ta", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "th", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "tk", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "tr", "t": { "Message limit of {count} characters reached": { "v": ["{count} karakter ileti sınırına ulaşıldı"] }, "No link provider found": { "v": ["Bağlantı sağlayıcısı bulunamadı"] }, "Write a message …": { "v": ["Bir ileti yazın…"] } } }, { "l": "ug", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "uk", "t": { "Message limit of {count} characters reached": { "v": ["Вичерпано ліміт у {count} символів для повідомлення"] }, "No link provider found": { "v": ["Не наведено посилання"] }, "Write a message …": { "v": ["Написати повідомлення ..."] } } }, { "l": "ur_PK", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "uz", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "vi", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }, { "l": "zh_CN", "t": { "Message limit of {count} characters reached": { "v": ["已达到 {count} 个字符的消息限制"] }, "No link provider found": { "v": [""] } } }, { "l": "zh_HK", "t": { "Message limit of {count} characters reached": { "v": ["已達到訊息最多 {count} 字元限制"] }, "No link provider found": { "v": ["找不到連結提供者"] }, "Write a message …": { "v": ["編寫訊息 …"] } } }, { "l": "zh_TW", "t": { "Message limit of {count} characters reached": { "v": ["已達到訊息最多 {count} 字元限制"] }, "No link provider found": { "v": ["找不到連結提供者"] }, "Write a message …": { "v": ["編寫訊息……"] } } }, { "l": "zu_ZA", "t": { "Message limit of {count} characters reached": { "v": [""] }, "No link provider found": { "v": [""] } } }];
const t28 = [{ "l": "af", "t": { "More items …": { "v": [""] } } }, { "l": "ar", "t": { "More items …": { "v": ["عناصر أخرى ..."] } } }, { "l": "ast", "t": { "More items …": { "v": ["Más elementos…"] } } }, { "l": "az", "t": { "More items …": { "v": [""] } } }, { "l": "be", "t": { "More items …": { "v": [""] } } }, { "l": "bg", "t": { "More items …": { "v": [""] } } }, { "l": "bn_BD", "t": { "More items …": { "v": [""] } } }, { "l": "br", "t": { "More items …": { "v": [""] } } }, { "l": "bs", "t": { "More items …": { "v": [""] } } }, { "l": "ca", "t": { "More items …": { "v": ["Més artícles..."] } } }, { "l": "cs", "t": { "More items …": { "v": ["Další položky…"] } } }, { "l": "cs_CZ", "t": { "More items …": { "v": ["Další položky…"] } } }, { "l": "cy_GB", "t": { "More items …": { "v": [""] } } }, { "l": "da", "t": { "More items …": { "v": ["Mere ..."] } } }, { "l": "de", "t": { "More items …": { "v": ["Weitere Elemente …"] } } }, { "l": "de_DE", "t": { "More items …": { "v": ["Weitere Elemente …"] } } }, { "l": "el", "t": { "More items …": { "v": ["Περισσότερα στοιχεία …"] } } }, { "l": "en_GB", "t": { "More items …": { "v": ["More items …"] } } }, { "l": "eo", "t": { "More items …": { "v": [""] } } }, { "l": "es", "t": { "More items …": { "v": ["Más ítems ..."] } } }, { "l": "es_419", "t": { "More items …": { "v": [""] } } }, { "l": "es_AR", "t": { "More items …": { "v": [""] } } }, { "l": "es_CL", "t": { "More items …": { "v": [""] } } }, { "l": "es_CO", "t": { "More items …": { "v": [""] } } }, { "l": "es_CR", "t": { "More items …": { "v": [""] } } }, { "l": "es_DO", "t": { "More items …": { "v": [""] } } }, { "l": "es_EC", "t": { "More items …": { "v": ["Más elementos..."] } } }, { "l": "es_GT", "t": { "More items …": { "v": [""] } } }, { "l": "es_HN", "t": { "More items …": { "v": [""] } } }, { "l": "es_MX", "t": { "More items …": { "v": [""] } } }, { "l": "es_NI", "t": { "More items …": { "v": [""] } } }, { "l": "es_PA", "t": { "More items …": { "v": [""] } } }, { "l": "es_PE", "t": { "More items …": { "v": [""] } } }, { "l": "es_PR", "t": { "More items …": { "v": [""] } } }, { "l": "es_PY", "t": { "More items …": { "v": [""] } } }, { "l": "es_SV", "t": { "More items …": { "v": [""] } } }, { "l": "es_UY", "t": { "More items …": { "v": [""] } } }, { "l": "et_EE", "t": { "More items …": { "v": [""] } } }, { "l": "eu", "t": { "More items …": { "v": ["Elementu gehiago …"] } } }, { "l": "fa", "t": { "More items …": { "v": [""] } } }, { "l": "fi", "t": { "More items …": { "v": [""] } } }, { "l": "fo", "t": { "More items …": { "v": [""] } } }, { "l": "fr", "t": { "More items …": { "v": ["Plus d'éléments..."] } } }, { "l": "gd", "t": { "More items …": { "v": [""] } } }, { "l": "gl", "t": { "More items …": { "v": ["Máis elementos…"] } } }, { "l": "he", "t": { "More items …": { "v": ["פריטים נוספים…"] } } }, { "l": "hi_IN", "t": { "More items …": { "v": [""] } } }, { "l": "hr", "t": { "More items …": { "v": [""] } } }, { "l": "hsb", "t": { "More items …": { "v": [""] } } }, { "l": "hu", "t": { "More items …": { "v": ["További elemek..."] } } }, { "l": "hy", "t": { "More items …": { "v": [""] } } }, { "l": "ia", "t": { "More items …": { "v": [""] } } }, { "l": "id", "t": { "More items …": { "v": ["Item lainnya…"] } } }, { "l": "ig", "t": { "More items …": { "v": [""] } } }, { "l": "is", "t": { "More items …": { "v": ["Fleiri atriði …"] } } }, { "l": "it", "t": { "More items …": { "v": ["Più elementi ..."] } } }, { "l": "ja", "t": { "More items …": { "v": ["他のアイテム"] } } }, { "l": "ka", "t": { "More items …": { "v": [""] } } }, { "l": "ka_GE", "t": { "More items …": { "v": [""] } } }, { "l": "kab", "t": { "More items …": { "v": [""] } } }, { "l": "kk", "t": { "More items …": { "v": [""] } } }, { "l": "km", "t": { "More items …": { "v": [""] } } }, { "l": "kn", "t": { "More items …": { "v": [""] } } }, { "l": "ko", "t": { "More items …": { "v": [""] } } }, { "l": "la", "t": { "More items …": { "v": [""] } } }, { "l": "lb", "t": { "More items …": { "v": [""] } } }, { "l": "lo", "t": { "More items …": { "v": [""] } } }, { "l": "lt_LT", "t": { "More items …": { "v": [""] } } }, { "l": "lv", "t": { "More items …": { "v": [""] } } }, { "l": "mk", "t": { "More items …": { "v": [""] } } }, { "l": "mn", "t": { "More items …": { "v": [""] } } }, { "l": "mr", "t": { "More items …": { "v": [""] } } }, { "l": "ms_MY", "t": { "More items …": { "v": [""] } } }, { "l": "my", "t": { "More items …": { "v": [""] } } }, { "l": "nb", "t": { "More items …": { "v": ["Flere gjenstander..."] } } }, { "l": "ne", "t": { "More items …": { "v": [""] } } }, { "l": "nl", "t": { "More items …": { "v": ["Meer items..."] } } }, { "l": "nn_NO", "t": { "More items …": { "v": [""] } } }, { "l": "oc", "t": { "More items …": { "v": [""] } } }, { "l": "pl", "t": { "More items …": { "v": ["Więcej pozycji…"] } } }, { "l": "ps", "t": { "More items …": { "v": [""] } } }, { "l": "pt_BR", "t": { "More items …": { "v": ["Mais itens …"] } } }, { "l": "pt_PT", "t": { "More items …": { "v": ["Mais itens …"] } } }, { "l": "ro", "t": { "More items …": { "v": ["Mai multe articole ..."] } } }, { "l": "ru", "t": { "More items …": { "v": ["Больше элементов..."] } } }, { "l": "sc", "t": { "More items …": { "v": [""] } } }, { "l": "si", "t": { "More items …": { "v": [""] } } }, { "l": "sk", "t": { "More items …": { "v": [""] } } }, { "l": "sl", "t": { "More items …": { "v": ["Več predmetov ..."] } } }, { "l": "sq", "t": { "More items …": { "v": [""] } } }, { "l": "sr", "t": { "More items …": { "v": ["Још ставки..."] } } }, { "l": "sr@latin", "t": { "More items …": { "v": [""] } } }, { "l": "sv", "t": { "More items …": { "v": ["Fler objekt"] } } }, { "l": "sw", "t": { "More items …": { "v": [""] } } }, { "l": "ta", "t": { "More items …": { "v": [""] } } }, { "l": "th", "t": { "More items …": { "v": [""] } } }, { "l": "tk", "t": { "More items …": { "v": [""] } } }, { "l": "tr", "t": { "More items …": { "v": ["Diğer ögeler…"] } } }, { "l": "ug", "t": { "More items …": { "v": [""] } } }, { "l": "uk", "t": { "More items …": { "v": ["Більше об'єктів..."] } } }, { "l": "ur_PK", "t": { "More items …": { "v": [""] } } }, { "l": "uz", "t": { "More items …": { "v": [""] } } }, { "l": "vi", "t": { "More items …": { "v": [""] } } }, { "l": "zh_CN", "t": { "More items …": { "v": ["更多项目…"] } } }, { "l": "zh_HK", "t": { "More items …": { "v": ["更多項目 …"] } } }, { "l": "zh_TW", "t": { "More items …": { "v": ["更多項目……"] } } }, { "l": "zu_ZA", "t": { "More items …": { "v": [""] } } }];
const t29 = [{ "l": "af", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ar", "t": { "Next": { "v": ["التالي"] }, "Pause slideshow": { "v": ["تجميد عرض الشرائح"] }, "Previous": { "v": ["السابق"] }, "Start slideshow": { "v": ["إبدإ العرض"] } } }, { "l": "ast", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Posar la presentación de diapositives"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Aniciar la presentación de diapositives"] } } }, { "l": "az", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "be", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "bg", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "bn_BD", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "br", "t": { "Next": { "v": ["Da heul"] }, "Pause slideshow": { "v": ["Arsav an diaporama"] }, "Previous": { "v": ["A-raok"] }, "Start slideshow": { "v": ["Kregiñ an diaporama"] } } }, { "l": "bs", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ca", "t": { "Next": { "v": ["Següent"] }, "Pause slideshow": { "v": ["Atura la presentació"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Inicia la presentació"] } } }, { "l": "cs", "t": { "Next": { "v": ["Následující"] }, "Pause slideshow": { "v": ["Pozastavit prezentaci"] }, "Previous": { "v": ["Předchozí"] }, "Start slideshow": { "v": ["Spustit prezentaci"] } } }, { "l": "cs_CZ", "t": { "Next": { "v": ["Následující"] }, "Pause slideshow": { "v": ["Pozastavit prezentaci"] }, "Previous": { "v": ["Předchozí"] }, "Start slideshow": { "v": ["Spustit prezentaci"] } } }, { "l": "cy_GB", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "da", "t": { "Next": { "v": ["Videre"] }, "Pause slideshow": { "v": ["Suspender fremvisning"] }, "Previous": { "v": ["Forrige"] }, "Start slideshow": { "v": ["Start fremvisning"] } } }, { "l": "de", "t": { "Next": { "v": ["Weiter"] }, "Pause slideshow": { "v": ["Diashow pausieren"] }, "Previous": { "v": ["Vorherige"] }, "Start slideshow": { "v": ["Diashow starten"] } } }, { "l": "de_DE", "t": { "Next": { "v": ["Weiter"] }, "Pause slideshow": { "v": ["Diashow pausieren"] }, "Previous": { "v": ["Vorherige"] }, "Start slideshow": { "v": ["Diashow starten"] } } }, { "l": "el", "t": { "Next": { "v": ["Επόμενο"] }, "Pause slideshow": { "v": ["Παύση προβολής διαφανειών"] }, "Previous": { "v": ["Προηγούμενο"] }, "Start slideshow": { "v": ["Έναρξη προβολής διαφανειών"] } } }, { "l": "en_GB", "t": { "Next": { "v": ["Next"] }, "Pause slideshow": { "v": ["Pause slideshow"] }, "Previous": { "v": ["Previous"] }, "Start slideshow": { "v": ["Start slideshow"] } } }, { "l": "eo", "t": { "Next": { "v": ["Sekva"] }, "Pause slideshow": { "v": ["Payzi bildprezenton"] }, "Previous": { "v": ["Antaŭa"] }, "Start slideshow": { "v": ["Komenci bildprezenton"] } } }, { "l": "es", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar la presentación "] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar la presentación"] } } }, { "l": "es_419", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_AR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CL", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_DO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_EC", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar presentación de diapositivas"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar presentación de diapositivas"] } } }, { "l": "es_GT", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_HN", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_MX", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_NI", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PA", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_SV", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_UY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "et_EE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "eu", "t": { "Next": { "v": ["Hurrengoa"] }, "Pause slideshow": { "v": ["Pausatu diaporama"] }, "Previous": { "v": ["Aurrekoa"] }, "Start slideshow": { "v": ["Hasi diaporama"] } } }, { "l": "fa", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "fi", "t": { "Next": { "v": ["Seuraava"] }, "Pause slideshow": { "v": ["Keskeytä diaesitys"] }, "Previous": { "v": ["Edellinen"] }, "Start slideshow": { "v": ["Aloita diaesitys"] } } }, { "l": "fo", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "fr", "t": { "Next": { "v": ["Suivant"] }, "Pause slideshow": { "v": ["Mettre le diaporama en pause"] }, "Previous": { "v": ["Précédent"] }, "Start slideshow": { "v": ["Démarrer le diaporama"] } } }, { "l": "gd", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "gl", "t": { "Next": { "v": ["Seguinte"] }, "Pause slideshow": { "v": ["Pausar o diaporama"] }, "Previous": { "v": ["Anterir"] }, "Start slideshow": { "v": ["Iniciar o diaporama"] } } }, { "l": "he", "t": { "Next": { "v": ["הבא"] }, "Pause slideshow": { "v": ["השהיית מצגת"] }, "Previous": { "v": ["הקודם"] }, "Start slideshow": { "v": ["התחלת המצגת"] } } }, { "l": "hi_IN", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hr", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hsb", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hu", "t": { "Next": { "v": ["Következő"] }, "Pause slideshow": { "v": ["Diavetítés szüneteltetése"] }, "Previous": { "v": ["Előző"] }, "Start slideshow": { "v": ["Diavetítés indítása"] } } }, { "l": "hy", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ia", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "id", "t": { "Next": { "v": ["Selanjutnya"] }, "Pause slideshow": { "v": ["Jeda tayangan slide"] }, "Previous": { "v": ["Sebelumnya"] }, "Start slideshow": { "v": ["Mulai salindia"] } } }, { "l": "ig", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "is", "t": { "Next": { "v": ["Næsta"] }, "Pause slideshow": { "v": ["Gera hlé á skyggnusýningu"] }, "Previous": { "v": ["Fyrri"] }, "Start slideshow": { "v": ["Byrja skyggnusýningu"] } } }, { "l": "it", "t": { "Next": { "v": ["Successivo"] }, "Pause slideshow": { "v": ["Presentazione in pausa"] }, "Previous": { "v": ["Precedente"] }, "Start slideshow": { "v": ["Avvia presentazione"] } } }, { "l": "ja", "t": { "Next": { "v": ["次"] }, "Pause slideshow": { "v": ["スライドショーを一時停止"] }, "Previous": { "v": ["前"] }, "Start slideshow": { "v": ["スライドショーを開始"] } } }, { "l": "ka", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ka_GE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kab", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kk", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "km", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kn", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ko", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "la", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lb", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lo", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lt_LT", "t": { "Next": { "v": ["Kitas"] }, "Pause slideshow": { "v": ["Pristabdyti skaidrių rodymą"] }, "Previous": { "v": ["Ankstesnis"] }, "Start slideshow": { "v": ["Pradėti skaidrių rodymą"] } } }, { "l": "lv", "t": { "Next": { "v": ["Nākamais"] }, "Pause slideshow": { "v": ["Pauzēt slaidrādi"] }, "Previous": { "v": ["Iepriekšējais"] }, "Start slideshow": { "v": ["Sākt slaidrādi"] } } }, { "l": "mk", "t": { "Next": { "v": ["Следно"] }, "Pause slideshow": { "v": ["Пузирај слајдшоу"] }, "Previous": { "v": ["Предходно"] }, "Start slideshow": { "v": ["Стартувај слајдшоу"] } } }, { "l": "mn", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "mr", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ms_MY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "my", "t": { "Next": { "v": ["နောက်သို့ဆက်ရန်"] }, "Pause slideshow": { "v": ["စလိုက်ရှိုး ခေတ္တရပ်ရန်"] }, "Previous": { "v": ["ယခင်"] }, "Start slideshow": { "v": ["စလိုက်ရှိုးအား စတင်ရန်"] } } }, { "l": "nb", "t": { "Next": { "v": ["Neste"] }, "Pause slideshow": { "v": ["Pause lysbildefremvisning"] }, "Previous": { "v": ["Forrige"] }, "Start slideshow": { "v": ["Start lysbildefremvisning"] } } }, { "l": "ne", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "nl", "t": { "Next": { "v": ["Volgende"] }, "Pause slideshow": { "v": ["Pauzeer diavoorstelling"] }, "Previous": { "v": ["Vorige"] }, "Start slideshow": { "v": ["Start diavoorstelling"] } } }, { "l": "nn_NO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "oc", "t": { "Next": { "v": ["Seguent"] }, "Pause slideshow": { "v": ["Metre en pausa lo diaporama"] }, "Previous": { "v": ["Precedent"] }, "Start slideshow": { "v": ["Lançar lo diaporama"] } } }, { "l": "pl", "t": { "Next": { "v": ["Następny"] }, "Pause slideshow": { "v": ["Wstrzymaj pokaz slajdów"] }, "Previous": { "v": ["Poprzedni"] }, "Start slideshow": { "v": ["Rozpocznij pokaz slajdów"] } } }, { "l": "ps", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "pt_BR", "t": { "Next": { "v": ["Próximo"] }, "Pause slideshow": { "v": ["Pausar apresentação de slides"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar apresentação de slides"] } } }, { "l": "pt_PT", "t": { "Next": { "v": ["Seguinte"] }, "Pause slideshow": { "v": ["Pausar diaporama"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar diaporama"] } } }, { "l": "ro", "t": { "Next": { "v": ["Următorul"] }, "Pause slideshow": { "v": ["Pauză prezentare de diapozitive"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Începeți prezentarea de diapozitive"] } } }, { "l": "ru", "t": { "Next": { "v": ["Следующее"] }, "Pause slideshow": { "v": ["Приостановить показ слйдов"] }, "Previous": { "v": ["Предыдущее"] }, "Start slideshow": { "v": ["Начать показ слайдов"] } } }, { "l": "sc", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "si", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sk", "t": { "Next": { "v": ["Ďalší"] }, "Pause slideshow": { "v": ["Pozastaviť prezentáciu"] }, "Previous": { "v": ["Predchádzajúci"] }, "Start slideshow": { "v": ["Začať prezentáciu"] } } }, { "l": "sl", "t": { "Next": { "v": ["Naslednji"] }, "Pause slideshow": { "v": ["Ustavi predstavitev"] }, "Previous": { "v": ["Predhodni"] }, "Start slideshow": { "v": ["Začni predstavitev"] } } }, { "l": "sq", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sr", "t": { "Next": { "v": ["Следеће"] }, "Pause slideshow": { "v": ["Паузирај слајд шоу"] }, "Previous": { "v": ["Претходно"] }, "Start slideshow": { "v": ["Покрени слајд шоу"] } } }, { "l": "sr@latin", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sv", "t": { "Next": { "v": ["Nästa"] }, "Pause slideshow": { "v": ["Pausa bildspelet"] }, "Previous": { "v": ["Föregående"] }, "Start slideshow": { "v": ["Starta bildspelet"] } } }, { "l": "sw", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ta", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "th", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "tk", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "tr", "t": { "Next": { "v": ["Sonraki"] }, "Pause slideshow": { "v": ["Slayt sunumunu duraklat"] }, "Previous": { "v": ["Önceki"] }, "Start slideshow": { "v": ["Slayt sunumunu başlat"] } } }, { "l": "ug", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "uk", "t": { "Next": { "v": ["Вперед"] }, "Pause slideshow": { "v": ["Пауза у показі слайдів"] }, "Previous": { "v": ["Назад"] }, "Start slideshow": { "v": ["Почати показ слайдів"] } } }, { "l": "ur_PK", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "uz", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "vi", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "zh_CN", "t": { "Next": { "v": ["下一个"] }, "Pause slideshow": { "v": ["暂停幻灯片"] }, "Previous": { "v": ["上一个"] }, "Start slideshow": { "v": ["开始幻灯片"] } } }, { "l": "zh_HK", "t": { "Next": { "v": ["下一個"] }, "Pause slideshow": { "v": ["暫停幻燈片"] }, "Previous": { "v": ["上一個"] }, "Start slideshow": { "v": ["開始幻燈片"] } } }, { "l": "zh_TW", "t": { "Next": { "v": ["下一個"] }, "Pause slideshow": { "v": ["暫停幻燈片"] }, "Previous": { "v": ["上一個"] }, "Start slideshow": { "v": ["開始幻燈片"] } } }, { "l": "zu_ZA", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }];
const t30 = [{ "l": "af", "t": { "No emoji found": { "v": [""] } } }, { "l": "ar", "t": { "No emoji found": { "v": ["لم يتم العثور على أي إيموجي emoji"] } } }, { "l": "ast", "t": { "No emoji found": { "v": ["Nun s'atopó nengún fustaxe"] } } }, { "l": "az", "t": { "No emoji found": { "v": [""] } } }, { "l": "be", "t": { "No emoji found": { "v": [""] } } }, { "l": "bg", "t": { "No emoji found": { "v": [""] } } }, { "l": "bn_BD", "t": { "No emoji found": { "v": [""] } } }, { "l": "br", "t": { "No emoji found": { "v": ["Emoji ebet kavet"] } } }, { "l": "bs", "t": { "No emoji found": { "v": [""] } } }, { "l": "ca", "t": { "No emoji found": { "v": ["No s'ha trobat cap emoji"] } } }, { "l": "cs", "t": { "No emoji found": { "v": ["Nenalezeno žádné emoji"] } } }, { "l": "cs_CZ", "t": { "No emoji found": { "v": ["Nenalezeno žádné emoji"] } } }, { "l": "cy_GB", "t": { "No emoji found": { "v": [""] } } }, { "l": "da", "t": { "No emoji found": { "v": ["Ingen emoji fundet"] } } }, { "l": "de", "t": { "No emoji found": { "v": ["Kein Emoji gefunden"] } } }, { "l": "de_DE", "t": { "No emoji found": { "v": ["Kein Emoji gefunden"] } } }, { "l": "el", "t": { "No emoji found": { "v": ["Δεν βρέθηκε emoji"] } } }, { "l": "en_GB", "t": { "No emoji found": { "v": ["No emoji found"] } } }, { "l": "eo", "t": { "No emoji found": { "v": ["La emoĝio forestas"] } } }, { "l": "es", "t": { "No emoji found": { "v": ["No se encontró ningún emoji"] } } }, { "l": "es_419", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_AR", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_CL", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_CO", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_CR", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_DO", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_EC", "t": { "No emoji found": { "v": ["No se encontró ningún emoji"] } } }, { "l": "es_GT", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_HN", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_MX", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_NI", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_PA", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_PE", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_PR", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_PY", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_SV", "t": { "No emoji found": { "v": [""] } } }, { "l": "es_UY", "t": { "No emoji found": { "v": [""] } } }, { "l": "et_EE", "t": { "No emoji found": { "v": [""] } } }, { "l": "eu", "t": { "No emoji found": { "v": ["Ez da emojirik aurkitu"] } } }, { "l": "fa", "t": { "No emoji found": { "v": [""] } } }, { "l": "fi", "t": { "No emoji found": { "v": ["Emojia ei löytynyt"] } } }, { "l": "fo", "t": { "No emoji found": { "v": [""] } } }, { "l": "fr", "t": { "No emoji found": { "v": ["Pas d’émoji trouvé"] } } }, { "l": "gd", "t": { "No emoji found": { "v": [""] } } }, { "l": "gl", "t": { "No emoji found": { "v": ["Non se atopou ningún «emoji»"] } } }, { "l": "he", "t": { "No emoji found": { "v": ["לא נמצא אמוג׳י"] } } }, { "l": "hi_IN", "t": { "No emoji found": { "v": [""] } } }, { "l": "hr", "t": { "No emoji found": { "v": [""] } } }, { "l": "hsb", "t": { "No emoji found": { "v": [""] } } }, { "l": "hu", "t": { "No emoji found": { "v": ["Nem található emodzsi"] } } }, { "l": "hy", "t": { "No emoji found": { "v": [""] } } }, { "l": "ia", "t": { "No emoji found": { "v": [""] } } }, { "l": "id", "t": { "No emoji found": { "v": ["Tidak ada emoji yang ditemukan"] } } }, { "l": "ig", "t": { "No emoji found": { "v": [""] } } }, { "l": "is", "t": { "No emoji found": { "v": ["Ekkert tjáningartákn fannst"] } } }, { "l": "it", "t": { "No emoji found": { "v": ["Nessun emoji trovato"] } } }, { "l": "ja", "t": { "No emoji found": { "v": ["絵文字が見つかりません"] } } }, { "l": "ka", "t": { "No emoji found": { "v": [""] } } }, { "l": "ka_GE", "t": { "No emoji found": { "v": [""] } } }, { "l": "kab", "t": { "No emoji found": { "v": [""] } } }, { "l": "kk", "t": { "No emoji found": { "v": [""] } } }, { "l": "km", "t": { "No emoji found": { "v": [""] } } }, { "l": "kn", "t": { "No emoji found": { "v": [""] } } }, { "l": "ko", "t": { "No emoji found": { "v": [""] } } }, { "l": "la", "t": { "No emoji found": { "v": [""] } } }, { "l": "lb", "t": { "No emoji found": { "v": [""] } } }, { "l": "lo", "t": { "No emoji found": { "v": [""] } } }, { "l": "lt_LT", "t": { "No emoji found": { "v": ["Nerasta jaustukų"] } } }, { "l": "lv", "t": { "No emoji found": { "v": [""] } } }, { "l": "mk", "t": { "No emoji found": { "v": ["Не се пронајдени емотикони"] } } }, { "l": "mn", "t": { "No emoji found": { "v": [""] } } }, { "l": "mr", "t": { "No emoji found": { "v": [""] } } }, { "l": "ms_MY", "t": { "No emoji found": { "v": [""] } } }, { "l": "my", "t": { "No emoji found": { "v": ["အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ"] } } }, { "l": "nb", "t": { "No emoji found": { "v": ["Fant ingen emoji"] } } }, { "l": "ne", "t": { "No emoji found": { "v": [""] } } }, { "l": "nl", "t": { "No emoji found": { "v": ["Geen emoji gevonden"] } } }, { "l": "nn_NO", "t": { "No emoji found": { "v": [""] } } }, { "l": "oc", "t": { "No emoji found": { "v": [""] } } }, { "l": "pl", "t": { "No emoji found": { "v": ["Nie znaleziono emoji"] } } }, { "l": "ps", "t": { "No emoji found": { "v": [""] } } }, { "l": "pt_BR", "t": { "No emoji found": { "v": ["Nenhum emoji encontrado"] } } }, { "l": "pt_PT", "t": { "No emoji found": { "v": ["Nenhum emoji encontrado"] } } }, { "l": "ro", "t": { "No emoji found": { "v": ["Nu s-a găsit niciun emoji"] } } }, { "l": "ru", "t": { "No emoji found": { "v": ["Эмодзи не найдено"] } } }, { "l": "sc", "t": { "No emoji found": { "v": [""] } } }, { "l": "si", "t": { "No emoji found": { "v": [""] } } }, { "l": "sk", "t": { "No emoji found": { "v": ["Nenašli sa žiadne emodži"] } } }, { "l": "sl", "t": { "No emoji found": { "v": ["Ni najdenih izraznih ikon"] } } }, { "l": "sq", "t": { "No emoji found": { "v": [""] } } }, { "l": "sr", "t": { "No emoji found": { "v": ["Није пронађен ниједан емођи"] } } }, { "l": "sr@latin", "t": { "No emoji found": { "v": [""] } } }, { "l": "sv", "t": { "No emoji found": { "v": ["Hittade inga emojis"] } } }, { "l": "sw", "t": { "No emoji found": { "v": [""] } } }, { "l": "ta", "t": { "No emoji found": { "v": [""] } } }, { "l": "th", "t": { "No emoji found": { "v": [""] } } }, { "l": "tk", "t": { "No emoji found": { "v": [""] } } }, { "l": "tr", "t": { "No emoji found": { "v": ["Herhangi bir emoji bulunamadı"] } } }, { "l": "ug", "t": { "No emoji found": { "v": [""] } } }, { "l": "uk", "t": { "No emoji found": { "v": ["Емоційки відсутні"] } } }, { "l": "ur_PK", "t": { "No emoji found": { "v": [""] } } }, { "l": "uz", "t": { "No emoji found": { "v": [""] } } }, { "l": "vi", "t": { "No emoji found": { "v": [""] } } }, { "l": "zh_CN", "t": { "No emoji found": { "v": ["表情未找到"] } } }, { "l": "zh_HK", "t": { "No emoji found": { "v": ["未找到表情符號"] } } }, { "l": "zh_TW", "t": { "No emoji found": { "v": ["未找到表情符號"] } } }, { "l": "zu_ZA", "t": { "No emoji found": { "v": [""] } } }];
const t31 = [{ "l": "af", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ar", "t": { 'Open link to "{resourceName}"': { "v": ['إفتَح الرابط إلى "{resourceName}"'] } } }, { "l": "ast", "t": { 'Open link to "{resourceName}"': { "v": ["Abrir l'enllaz a «{resourceName}»"] } } }, { "l": "az", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "be", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "bg", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "bn_BD", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "br", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "bs", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ca", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "cs", "t": { 'Open link to "{resourceName}"': { "v": ["Otevřít odkaz na „{resourceName}“"] } } }, { "l": "cs_CZ", "t": { 'Open link to "{resourceName}"': { "v": ["Otevřít odkaz na „{resourceName}“"] } } }, { "l": "cy_GB", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "da", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "de", "t": { 'Open link to "{resourceName}"': { "v": ['Link zu "{resourceName}“ öffnen'] } } }, { "l": "de_DE", "t": { 'Open link to "{resourceName}"': { "v": ['Link zu "{resourceName}“ öffnen'] } } }, { "l": "el", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "en_GB", "t": { 'Open link to "{resourceName}"': { "v": ['Open link to "{resourceName}"'] } } }, { "l": "eo", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es", "t": { 'Open link to "{resourceName}"': { "v": ['Abrir enlace a "{resourceName}"'] } } }, { "l": "es_419", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_AR", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_CL", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_CO", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_CR", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_DO", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_EC", "t": { 'Open link to "{resourceName}"': { "v": ['Abrir enlace a "{resourceName}"'] } } }, { "l": "es_GT", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_HN", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_MX", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_NI", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_PA", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_PE", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_PR", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_PY", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_SV", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "es_UY", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "et_EE", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "eu", "t": { 'Open link to "{resourceName}"': { "v": ['Ireki "{resourceName}" esteka'] } } }, { "l": "fa", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "fi", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "fo", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "fr", "t": { 'Open link to "{resourceName}"': { "v": ['Ouvrir le lien vers "{resourceName}"'] } } }, { "l": "gd", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "gl", "t": { 'Open link to "{resourceName}"': { "v": ["Abrir a ligazón a «{resourceName}»"] } } }, { "l": "he", "t": { 'Open link to "{resourceName}"': { "v": ["פתיחת קישור אל „{resourceName}”"] } } }, { "l": "hi_IN", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "hr", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "hsb", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "hu", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "hy", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ia", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "id", "t": { 'Open link to "{resourceName}"': { "v": ['Buka tautan ke "{resourceName}"'] } } }, { "l": "ig", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "is", "t": { 'Open link to "{resourceName}"': { "v": ['Opna tengil í "{resourceName}"'] } } }, { "l": "it", "t": { 'Open link to "{resourceName}"': { "v": ['Apri il link a "{resourceName}"'] } } }, { "l": "ja", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ka", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ka_GE", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "kab", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "kk", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "km", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "kn", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ko", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "la", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "lb", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "lo", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "lt_LT", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "lv", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "mk", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "mn", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "mr", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ms_MY", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "my", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "nb", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ne", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "nl", "t": { 'Open link to "{resourceName}"': { "v": ['Open link naar "{resourceName}"'] } } }, { "l": "nn_NO", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "oc", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "pl", "t": { 'Open link to "{resourceName}"': { "v": ['Otwórz link do "{resourceName}"'] } } }, { "l": "ps", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "pt_BR", "t": { 'Open link to "{resourceName}"': { "v": ['Abrir i link para "{resourceName}"'] } } }, { "l": "pt_PT", "t": { 'Open link to "{resourceName}"': { "v": ['Abrir link para "{resourceName}"'] } } }, { "l": "ro", "t": { 'Open link to "{resourceName}"': { "v": ['Deschide linkul la  "{resourceName}"'] } } }, { "l": "ru", "t": { 'Open link to "{resourceName}"': { "v": ['Открыть ссылку на "{resourceName}"'] } } }, { "l": "sc", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "si", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "sk", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "sl", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "sq", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "sr", "t": { 'Open link to "{resourceName}"': { "v": ["Отвори линк на „{resourceName}”"] } } }, { "l": "sr@latin", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "sv", "t": { 'Open link to "{resourceName}"': { "v": ['Öppna länken till "{resourceName}"'] } } }, { "l": "sw", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "ta", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "th", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "tk", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "tr", "t": { 'Open link to "{resourceName}"': { "v": ["{resourceName} bağlantısını aç"] } } }, { "l": "ug", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "uk", "t": { 'Open link to "{resourceName}"': { "v": ['Відкрити посилання на "{resourceName}"'] } } }, { "l": "ur_PK", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "uz", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "vi", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "zh_CN", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }, { "l": "zh_HK", "t": { 'Open link to "{resourceName}"': { "v": ["開啟到「{resourceName}」的連結"] } } }, { "l": "zh_TW", "t": { 'Open link to "{resourceName}"': { "v": ["開啟到「{resourceName}」的連結"] } } }, { "l": "zu_ZA", "t": { 'Open link to "{resourceName}"': { "v": [""] } } }];
const t32 = [{ "l": "af", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ar", "t": { "Pick a date": { "v": ["إختَر التاريخ"] }, "Pick a date and a time": { "v": ["إختَر التاريخ و الوقت"] }, "Pick a month": { "v": ["إختَر الشهر"] }, "Pick a time": { "v": ["إختَر الوقت"] }, "Pick a week": { "v": ["إختَر الأسبوع"] }, "Pick a year": { "v": ["إختَر السنة"] }, "Please select a time zone:": { "v": ["الرجاء تحديد المنطقة الزمنية:"] } } }, { "l": "ast", "t": { "Pick a date": { "v": ["Escueyi una data"] }, "Pick a date and a time": { "v": ["Escueyi una data y hora"] }, "Pick a month": { "v": ["Escueyi un mes"] }, "Pick a time": { "v": ["Escueyi una hora"] }, "Pick a week": { "v": ["Escueyi una selmana"] }, "Pick a year": { "v": ["Escueyi un añu"] }, "Please select a time zone:": { "v": ["Seleiciona un fusu horariu:"] } } }, { "l": "az", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "be", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "bg", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "bn_BD", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "br", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "bs", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ca", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Seleccioneu una zona horària:"] } } }, { "l": "cs", "t": { "Pick a date": { "v": ["Vybrat datum"] }, "Pick a date and a time": { "v": ["Vybrat datum a čas"] }, "Pick a month": { "v": ["Vybrat měsíc"] }, "Pick a time": { "v": ["Vybrat čas"] }, "Pick a week": { "v": ["Vybrat týden"] }, "Pick a year": { "v": ["Vybrat rok"] }, "Please select a time zone:": { "v": ["Vyberte časovou zónu:"] } } }, { "l": "cs_CZ", "t": { "Pick a date": { "v": ["Vybrat datum"] }, "Pick a date and a time": { "v": ["Vybrat datum a čas"] }, "Pick a month": { "v": ["Vybrat měsíc"] }, "Pick a time": { "v": ["Vybrat čas"] }, "Pick a week": { "v": ["Vybrat týden"] }, "Pick a year": { "v": ["Vybrat rok"] }, "Please select a time zone:": { "v": ["Vyberte časovou zónu:"] } } }, { "l": "cy_GB", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "da", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Vælg venligst en tidszone:"] } } }, { "l": "de", "t": { "Pick a date": { "v": ["Ein Datum auswählen"] }, "Pick a date and a time": { "v": ["Datum und Uhrzeit auswählen"] }, "Pick a month": { "v": ["Einen Monat auswählen"] }, "Pick a time": { "v": ["Eine Uhrzeit auswählen"] }, "Pick a week": { "v": ["Eine Woche auswählen"] }, "Pick a year": { "v": ["Ein Jahr auswählen"] }, "Please select a time zone:": { "v": ["Bitte wähle eine Zeitzone:"] } } }, { "l": "de_DE", "t": { "Pick a date": { "v": ["Ein Datum auswählen"] }, "Pick a date and a time": { "v": ["Datum und Uhrzeit auswählen"] }, "Pick a month": { "v": ["Einen Monat auswählen"] }, "Pick a time": { "v": ["Eine Uhrzeit auswählen"] }, "Pick a week": { "v": ["Eine Woche auswählen"] }, "Pick a year": { "v": ["Ein Jahr auswählen"] }, "Please select a time zone:": { "v": ["Bitte eine Zeitzone auswählen:"] } } }, { "l": "el", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Παρακαλούμε επιλέξτε μια ζώνη ώρας:"] } } }, { "l": "en_GB", "t": { "Pick a date": { "v": ["Pick a date"] }, "Pick a date and a time": { "v": ["Pick a date and a time"] }, "Pick a month": { "v": ["Pick a month"] }, "Pick a time": { "v": ["Pick a time"] }, "Pick a week": { "v": ["Pick a week"] }, "Pick a year": { "v": ["Pick a year"] }, "Please select a time zone:": { "v": ["Please select a time zone:"] } } }, { "l": "eo", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es", "t": { "Pick a date": { "v": ["Seleccione una fecha"] }, "Pick a date and a time": { "v": ["Seleccione una fecha y hora"] }, "Pick a month": { "v": ["Seleccione un mes"] }, "Pick a time": { "v": ["Seleccione una hora"] }, "Pick a week": { "v": ["Seleccione una semana"] }, "Pick a year": { "v": ["Seleccione un año"] }, "Please select a time zone:": { "v": ["Por favor elija un huso horario:"] } } }, { "l": "es_419", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_AR", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_CL", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_CO", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_CR", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_DO", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_EC", "t": { "Pick a date": { "v": ["Seleccionar una fecha"] }, "Pick a date and a time": { "v": ["Seleccionar una fecha y una hora"] }, "Pick a month": { "v": ["Seleccionar un mes"] }, "Pick a time": { "v": ["Seleccionar una semana"] }, "Pick a week": { "v": ["Seleccionar una semana"] }, "Pick a year": { "v": ["Seleccionar un año"] }, "Please select a time zone:": { "v": ["Por favor, selecciona una zona horaria:"] } } }, { "l": "es_GT", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_HN", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_MX", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_NI", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_PA", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_PE", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_PR", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_PY", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_SV", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "es_UY", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "et_EE", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "eu", "t": { "Pick a date": { "v": ["Aukeratu data bat"] }, "Pick a date and a time": { "v": ["Aukeratu data eta ordu bat"] }, "Pick a month": { "v": ["Aukeratu hilabete bat"] }, "Pick a time": { "v": ["Aukeratu ordu bat"] }, "Pick a week": { "v": ["Aukeratu aste bat"] }, "Pick a year": { "v": ["Aukeratu urte bat"] }, "Please select a time zone:": { "v": ["Mesedez hautatu ordu-zona bat:"] } } }, { "l": "fa", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "fi", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Valitse aikavyöhyke:"] } } }, { "l": "fo", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "fr", "t": { "Pick a date": { "v": ["Sélectionner une date"] }, "Pick a date and a time": { "v": ["Sélectionner une date et une heure"] }, "Pick a month": { "v": ["Sélectionner un mois"] }, "Pick a time": { "v": ["Sélectionner une heure"] }, "Pick a week": { "v": ["Sélectionner une semaine"] }, "Pick a year": { "v": ["Sélectionner une année"] }, "Please select a time zone:": { "v": ["Sélectionnez un fuseau horaire : "] } } }, { "l": "gd", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "gl", "t": { "Pick a date": { "v": ["Escolla unha data"] }, "Pick a date and a time": { "v": ["Escolle unha data e unha hora"] }, "Pick a month": { "v": ["Escolla un mes"] }, "Pick a time": { "v": ["Escolla unha hora"] }, "Pick a week": { "v": ["Escolla unha semana"] }, "Pick a year": { "v": ["Escolla un ano"] }, "Please select a time zone:": { "v": ["Escolla un fuso horario:"] } } }, { "l": "he", "t": { "Pick a date": { "v": ["נא לבחור תאריך"] }, "Pick a date and a time": { "v": ["נא לבחור תאריך ושעה"] }, "Pick a month": { "v": ["נא לבחור חודש"] }, "Pick a time": { "v": ["נא לבחור שעה"] }, "Pick a week": { "v": ["נא לבחור שבוע"] }, "Pick a year": { "v": ["נא לבחור שנה"] }, "Please select a time zone:": { "v": ["נא לבחור אזור זמן:"] } } }, { "l": "hi_IN", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "hr", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "hsb", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "hu", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Válasszon időzónát:"] } } }, { "l": "hy", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ia", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "id", "t": { "Pick a date": { "v": ["Pilih tanggal"] }, "Pick a date and a time": { "v": ["Pilih tanggal dan waktu"] }, "Pick a month": { "v": ["Pilih bulan"] }, "Pick a time": { "v": ["Pilih waktu"] }, "Pick a week": { "v": ["Pilih pekan"] }, "Pick a year": { "v": ["Pilih tahun"] }, "Please select a time zone:": { "v": ["Mohon pilih zona waktu"] } } }, { "l": "ig", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "is", "t": { "Pick a date": { "v": ["Veldu dagsetningu"] }, "Pick a date and a time": { "v": ["Veldu dagsetningu og tíma"] }, "Pick a month": { "v": ["Veldu mánuð"] }, "Pick a time": { "v": ["Veldu tíma"] }, "Pick a week": { "v": ["Veldu viku"] }, "Pick a year": { "v": ["Veldu ár"] }, "Please select a time zone:": { "v": ["Veldu tímabelti:"] } } }, { "l": "it", "t": { "Pick a date": { "v": ["Scegli una data"] }, "Pick a date and a time": { "v": ["Scegli una data e un orario"] }, "Pick a month": { "v": ["Scegli un mese"] }, "Pick a time": { "v": ["Scegli un momento"] }, "Pick a week": { "v": ["Scegli una settimana"] }, "Pick a year": { "v": ["Scegli un anno"] }, "Please select a time zone:": { "v": ["Si prega di selezionare un fuso orario:"] } } }, { "l": "ja", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["タイムゾーンを選んで下さい："] } } }, { "l": "ka", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ka_GE", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "kab", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "kk", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "km", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "kn", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ko", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "la", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "lb", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "lo", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "lt_LT", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "lv", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "mk", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Изберете временска зона:"] } } }, { "l": "mn", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "mr", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ms_MY", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "my", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ"] } } }, { "l": "nb", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Vennligst velg tidssone"] } } }, { "l": "ne", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "nl", "t": { "Pick a date": { "v": ["Selecteer een datum"] }, "Pick a date and a time": { "v": ["Selecteer een datum en tijd"] }, "Pick a month": { "v": ["Selecteer een maand"] }, "Pick a time": { "v": ["Selecteer een tijd"] }, "Pick a week": { "v": ["Selecteer een week"] }, "Pick a year": { "v": ["Selecteer een jaar"] }, "Please select a time zone:": { "v": ["Selecteer een tijdzone:"] } } }, { "l": "nn_NO", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "oc", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "pl", "t": { "Pick a date": { "v": ["Wybierz datę"] }, "Pick a date and a time": { "v": ["Wybierz datę i godzinę"] }, "Pick a month": { "v": ["Wybierz miesiąc"] }, "Pick a time": { "v": ["Wybierz czas"] }, "Pick a week": { "v": ["Wybierz tydzień"] }, "Pick a year": { "v": ["Wybierz rok"] }, "Please select a time zone:": { "v": ["Wybierz strefę czasową:"] } } }, { "l": "ps", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "pt_BR", "t": { "Pick a date": { "v": ["Escolha uma data"] }, "Pick a date and a time": { "v": ["Escolha uma data e um horário"] }, "Pick a month": { "v": ["Escolha um mês"] }, "Pick a time": { "v": ["Escolha um horário"] }, "Pick a week": { "v": ["Escolha uma semana"] }, "Pick a year": { "v": ["Escolha um ano"] }, "Please select a time zone:": { "v": ["Selecione um fuso horário: "] } } }, { "l": "pt_PT", "t": { "Pick a date": { "v": ["Escolha uma data"] }, "Pick a date and a time": { "v": ["Escolha uma data e um horário"] }, "Pick a month": { "v": ["Escolha um mês"] }, "Pick a time": { "v": ["Escolha um horário"] }, "Pick a week": { "v": ["Escolha uma semana"] }, "Pick a year": { "v": ["Escolha um ano"] }, "Please select a time zone:": { "v": ["Por favor, selecione um fuso horário: "] } } }, { "l": "ro", "t": { "Pick a date": { "v": ["Selectați o dată"] }, "Pick a date and a time": { "v": ["Selectați data și timpul"] }, "Pick a month": { "v": ["Selectați o lună"] }, "Pick a time": { "v": ["Selectați timpul"] }, "Pick a week": { "v": ["Selectați o săptămână"] }, "Pick a year": { "v": ["Selectați anul"] }, "Please select a time zone:": { "v": ["Vă rugăm să selectați un fus orar:"] } } }, { "l": "ru", "t": { "Pick a date": { "v": ["Выберите дату"] }, "Pick a date and a time": { "v": ["Выберите дату и время"] }, "Pick a month": { "v": ["Выберите месяц"] }, "Pick a time": { "v": ["Выберите время"] }, "Pick a week": { "v": ["Выберите неделю"] }, "Pick a year": { "v": ["Выберите год"] }, "Please select a time zone:": { "v": ["Пожалуйста, выберите часовой пояс:"] } } }, { "l": "sc", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "si", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "sk", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["Prosím vyberte časovú zónu:"] } } }, { "l": "sl", "t": { "Pick a date": { "v": ["Izbor datuma"] }, "Pick a date and a time": { "v": ["Izbor datuma in časa"] }, "Pick a month": { "v": ["Izbor meseca"] }, "Pick a time": { "v": ["Izbor časa"] }, "Pick a week": { "v": ["Izbor tedna"] }, "Pick a year": { "v": ["Izbor leta"] }, "Please select a time zone:": { "v": ["Izbor časovnega pasu:"] } } }, { "l": "sq", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "sr", "t": { "Pick a date": { "v": ["Изаберите датум"] }, "Pick a date and a time": { "v": ["Изаберите датум и време"] }, "Pick a month": { "v": ["Изаберите месец"] }, "Pick a time": { "v": ["Изаберите време"] }, "Pick a week": { "v": ["Изаберите недељу"] }, "Pick a year": { "v": ["Изаберите годину"] }, "Please select a time zone:": { "v": ["Молимо вас да изаберете временску зону:"] } } }, { "l": "sr@latin", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "sv", "t": { "Pick a date": { "v": ["Välj datum"] }, "Pick a date and a time": { "v": ["Välj datum och tid"] }, "Pick a month": { "v": ["Välj månad"] }, "Pick a time": { "v": ["Välj tid"] }, "Pick a week": { "v": ["Välj vecka"] }, "Pick a year": { "v": ["Välj år"] }, "Please select a time zone:": { "v": ["Välj tidszon:"] } } }, { "l": "sw", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "ta", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "th", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "tk", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "tr", "t": { "Pick a date": { "v": ["Bir tarih seçin"] }, "Pick a date and a time": { "v": ["Bir tarih ve saat seçin"] }, "Pick a month": { "v": ["Bir ay seçin"] }, "Pick a time": { "v": ["Bir saat seçin"] }, "Pick a week": { "v": ["Bir hafta seçin"] }, "Pick a year": { "v": ["Bir yıl seçin"] }, "Please select a time zone:": { "v": ["Lütfen bir saat dilimi seçin:"] } } }, { "l": "ug", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "uk", "t": { "Pick a date": { "v": ["Вибрати дату"] }, "Pick a date and a time": { "v": ["Виберіть дату та час"] }, "Pick a month": { "v": ["Виберіть місяць"] }, "Pick a time": { "v": ["Виберіть час"] }, "Pick a week": { "v": ["Виберіть тиждень"] }, "Pick a year": { "v": ["Виберіть рік"] }, "Please select a time zone:": { "v": ["Виберіть часовий пояс:"] } } }, { "l": "ur_PK", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "uz", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "vi", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }, { "l": "zh_CN", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": ["请选择一个时区："] } } }, { "l": "zh_HK", "t": { "Pick a date": { "v": ["挑選日期"] }, "Pick a date and a time": { "v": ["挑選日期與時間"] }, "Pick a month": { "v": ["挑選月份"] }, "Pick a time": { "v": ["挑選時間"] }, "Pick a week": { "v": ["挑選星期"] }, "Pick a year": { "v": ["挑選年份"] }, "Please select a time zone:": { "v": ["請選擇時區："] } } }, { "l": "zh_TW", "t": { "Pick a date": { "v": ["挑選日期"] }, "Pick a date and a time": { "v": ["挑選日期與時間"] }, "Pick a month": { "v": ["挑選月份"] }, "Pick a time": { "v": ["挑選時間"] }, "Pick a week": { "v": ["挑選星期"] }, "Pick a year": { "v": ["挑選年份"] }, "Please select a time zone:": { "v": ["請選取時區："] } } }, { "l": "zu_ZA", "t": { "Pick a date": { "v": [""] }, "Pick a date and a time": { "v": [""] }, "Pick a month": { "v": [""] }, "Pick a time": { "v": [""] }, "Pick a week": { "v": [""] }, "Pick a year": { "v": [""] }, "Please select a time zone:": { "v": [""] } } }];
const t33 = [{ "l": "af", "t": { "Provider icon": { "v": [""] } } }, { "l": "ar", "t": { "Provider icon": { "v": ["أيقونة المُزوِّد"] } } }, { "l": "ast", "t": { "Provider icon": { "v": ["Iconu del fornidor"] } } }, { "l": "az", "t": { "Provider icon": { "v": [""] } } }, { "l": "be", "t": { "Provider icon": { "v": [""] } } }, { "l": "bg", "t": { "Provider icon": { "v": [""] } } }, { "l": "bn_BD", "t": { "Provider icon": { "v": [""] } } }, { "l": "br", "t": { "Provider icon": { "v": [""] } } }, { "l": "bs", "t": { "Provider icon": { "v": [""] } } }, { "l": "ca", "t": { "Provider icon": { "v": [""] } } }, { "l": "cs", "t": { "Provider icon": { "v": ["Ikona poskytovatele"] } } }, { "l": "cs_CZ", "t": { "Provider icon": { "v": ["Ikona poskytovatele"] } } }, { "l": "cy_GB", "t": { "Provider icon": { "v": [""] } } }, { "l": "da", "t": { "Provider icon": { "v": [""] } } }, { "l": "de", "t": { "Provider icon": { "v": ["Anbietersymbol"] } } }, { "l": "de_DE", "t": { "Provider icon": { "v": ["Anbietersymbol"] } } }, { "l": "el", "t": { "Provider icon": { "v": [""] } } }, { "l": "en_GB", "t": { "Provider icon": { "v": ["Provider icon"] } } }, { "l": "eo", "t": { "Provider icon": { "v": [""] } } }, { "l": "es", "t": { "Provider icon": { "v": ["Ícono del proveedor"] } } }, { "l": "es_419", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_AR", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_CL", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_CO", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_CR", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_DO", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_EC", "t": { "Provider icon": { "v": ["Ícono del proveedor"] } } }, { "l": "es_GT", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_HN", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_MX", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_NI", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PA", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PE", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PR", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_PY", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_SV", "t": { "Provider icon": { "v": [""] } } }, { "l": "es_UY", "t": { "Provider icon": { "v": [""] } } }, { "l": "et_EE", "t": { "Provider icon": { "v": [""] } } }, { "l": "eu", "t": { "Provider icon": { "v": ["Hornitzailearen ikonoa"] } } }, { "l": "fa", "t": { "Provider icon": { "v": [""] } } }, { "l": "fi", "t": { "Provider icon": { "v": [""] } } }, { "l": "fo", "t": { "Provider icon": { "v": [""] } } }, { "l": "fr", "t": { "Provider icon": { "v": ["Icône du fournisseur"] } } }, { "l": "gd", "t": { "Provider icon": { "v": [""] } } }, { "l": "gl", "t": { "Provider icon": { "v": ["Icona do provedor"] } } }, { "l": "he", "t": { "Provider icon": { "v": ["סמל ספק"] } } }, { "l": "hi_IN", "t": { "Provider icon": { "v": [""] } } }, { "l": "hr", "t": { "Provider icon": { "v": [""] } } }, { "l": "hsb", "t": { "Provider icon": { "v": [""] } } }, { "l": "hu", "t": { "Provider icon": { "v": [""] } } }, { "l": "hy", "t": { "Provider icon": { "v": [""] } } }, { "l": "ia", "t": { "Provider icon": { "v": [""] } } }, { "l": "id", "t": { "Provider icon": { "v": ["Ikon penyedia"] } } }, { "l": "ig", "t": { "Provider icon": { "v": [""] } } }, { "l": "is", "t": { "Provider icon": { "v": ["Táknmynd þjónustuveitu"] } } }, { "l": "it", "t": { "Provider icon": { "v": ["Icona del provider"] } } }, { "l": "ja", "t": { "Provider icon": { "v": [""] } } }, { "l": "ka", "t": { "Provider icon": { "v": [""] } } }, { "l": "ka_GE", "t": { "Provider icon": { "v": [""] } } }, { "l": "kab", "t": { "Provider icon": { "v": [""] } } }, { "l": "kk", "t": { "Provider icon": { "v": [""] } } }, { "l": "km", "t": { "Provider icon": { "v": [""] } } }, { "l": "kn", "t": { "Provider icon": { "v": [""] } } }, { "l": "ko", "t": { "Provider icon": { "v": [""] } } }, { "l": "la", "t": { "Provider icon": { "v": [""] } } }, { "l": "lb", "t": { "Provider icon": { "v": [""] } } }, { "l": "lo", "t": { "Provider icon": { "v": [""] } } }, { "l": "lt_LT", "t": { "Provider icon": { "v": [""] } } }, { "l": "lv", "t": { "Provider icon": { "v": [""] } } }, { "l": "mk", "t": { "Provider icon": { "v": [""] } } }, { "l": "mn", "t": { "Provider icon": { "v": [""] } } }, { "l": "mr", "t": { "Provider icon": { "v": [""] } } }, { "l": "ms_MY", "t": { "Provider icon": { "v": [""] } } }, { "l": "my", "t": { "Provider icon": { "v": [""] } } }, { "l": "nb", "t": { "Provider icon": { "v": [""] } } }, { "l": "ne", "t": { "Provider icon": { "v": [""] } } }, { "l": "nl", "t": { "Provider icon": { "v": ["Provider icon"] } } }, { "l": "nn_NO", "t": { "Provider icon": { "v": [""] } } }, { "l": "oc", "t": { "Provider icon": { "v": [""] } } }, { "l": "pl", "t": { "Provider icon": { "v": ["Dostawca ikony"] } } }, { "l": "ps", "t": { "Provider icon": { "v": [""] } } }, { "l": "pt_BR", "t": { "Provider icon": { "v": ["Ícone do provedor"] } } }, { "l": "pt_PT", "t": { "Provider icon": { "v": ["Icon do fornecedor"] } } }, { "l": "ro", "t": { "Provider icon": { "v": ["Provider pentru icon"] } } }, { "l": "ru", "t": { "Provider icon": { "v": ["Значок поставщика"] } } }, { "l": "sc", "t": { "Provider icon": { "v": [""] } } }, { "l": "si", "t": { "Provider icon": { "v": [""] } } }, { "l": "sk", "t": { "Provider icon": { "v": [""] } } }, { "l": "sl", "t": { "Provider icon": { "v": [""] } } }, { "l": "sq", "t": { "Provider icon": { "v": [""] } } }, { "l": "sr", "t": { "Provider icon": { "v": ["Икона пружаоца"] } } }, { "l": "sr@latin", "t": { "Provider icon": { "v": [""] } } }, { "l": "sv", "t": { "Provider icon": { "v": ["Leverantörsikon"] } } }, { "l": "sw", "t": { "Provider icon": { "v": [""] } } }, { "l": "ta", "t": { "Provider icon": { "v": [""] } } }, { "l": "th", "t": { "Provider icon": { "v": [""] } } }, { "l": "tk", "t": { "Provider icon": { "v": [""] } } }, { "l": "tr", "t": { "Provider icon": { "v": ["Sağlayıcı simgesi"] } } }, { "l": "ug", "t": { "Provider icon": { "v": [""] } } }, { "l": "uk", "t": { "Provider icon": { "v": ["Піктограма постачальника"] } } }, { "l": "ur_PK", "t": { "Provider icon": { "v": [""] } } }, { "l": "uz", "t": { "Provider icon": { "v": [""] } } }, { "l": "vi", "t": { "Provider icon": { "v": [""] } } }, { "l": "zh_CN", "t": { "Provider icon": { "v": [""] } } }, { "l": "zh_HK", "t": { "Provider icon": { "v": ["提供者圖示"] } } }, { "l": "zh_TW", "t": { "Provider icon": { "v": ["提供者圖示"] } } }, { "l": "zu_ZA", "t": { "Provider icon": { "v": [""] } } }];
const t34 = [{ "l": "af", "t": { "Search": { "v": [""] } } }, { "l": "ar", "t": { "Search": { "v": ["بحث"] } } }, { "l": "ast", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "az", "t": { "Search": { "v": [""] } } }, { "l": "be", "t": { "Search": { "v": [""] } } }, { "l": "bg", "t": { "Search": { "v": [""] } } }, { "l": "bn_BD", "t": { "Search": { "v": [""] } } }, { "l": "br", "t": { "Search": { "v": ["Klask"] } } }, { "l": "bs", "t": { "Search": { "v": [""] } } }, { "l": "ca", "t": { "Search": { "v": ["Cerca"] } } }, { "l": "cs", "t": { "Search": { "v": ["Hledat"] } } }, { "l": "cs_CZ", "t": { "Search": { "v": ["Hledat"] } } }, { "l": "cy_GB", "t": { "Search": { "v": [""] } } }, { "l": "da", "t": { "Search": { "v": ["Søg"] } } }, { "l": "de", "t": { "Search": { "v": ["Suche"] } } }, { "l": "de_DE", "t": { "Search": { "v": ["Suche"] } } }, { "l": "el", "t": { "Search": { "v": ["Αναζήτηση"] } } }, { "l": "en_GB", "t": { "Search": { "v": ["Search"] } } }, { "l": "eo", "t": { "Search": { "v": ["Serĉi"] } } }, { "l": "es", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "es_419", "t": { "Search": { "v": [""] } } }, { "l": "es_AR", "t": { "Search": { "v": [""] } } }, { "l": "es_CL", "t": { "Search": { "v": [""] } } }, { "l": "es_CO", "t": { "Search": { "v": [""] } } }, { "l": "es_CR", "t": { "Search": { "v": [""] } } }, { "l": "es_DO", "t": { "Search": { "v": [""] } } }, { "l": "es_EC", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "es_GT", "t": { "Search": { "v": [""] } } }, { "l": "es_HN", "t": { "Search": { "v": [""] } } }, { "l": "es_MX", "t": { "Search": { "v": [""] } } }, { "l": "es_NI", "t": { "Search": { "v": [""] } } }, { "l": "es_PA", "t": { "Search": { "v": [""] } } }, { "l": "es_PE", "t": { "Search": { "v": [""] } } }, { "l": "es_PR", "t": { "Search": { "v": [""] } } }, { "l": "es_PY", "t": { "Search": { "v": [""] } } }, { "l": "es_SV", "t": { "Search": { "v": [""] } } }, { "l": "es_UY", "t": { "Search": { "v": [""] } } }, { "l": "et_EE", "t": { "Search": { "v": [""] } } }, { "l": "eu", "t": { "Search": { "v": ["Bilatu"] } } }, { "l": "fa", "t": { "Search": { "v": [""] } } }, { "l": "fi", "t": { "Search": { "v": ["Etsi"] } } }, { "l": "fo", "t": { "Search": { "v": [""] } } }, { "l": "fr", "t": { "Search": { "v": ["Chercher"] } } }, { "l": "gd", "t": { "Search": { "v": [""] } } }, { "l": "gl", "t": { "Search": { "v": ["Buscar"] } } }, { "l": "he", "t": { "Search": { "v": ["חיפוש"] } } }, { "l": "hi_IN", "t": { "Search": { "v": [""] } } }, { "l": "hr", "t": { "Search": { "v": [""] } } }, { "l": "hsb", "t": { "Search": { "v": [""] } } }, { "l": "hu", "t": { "Search": { "v": ["Keresés"] } } }, { "l": "hy", "t": { "Search": { "v": [""] } } }, { "l": "ia", "t": { "Search": { "v": [""] } } }, { "l": "id", "t": { "Search": { "v": ["Cari"] } } }, { "l": "ig", "t": { "Search": { "v": [""] } } }, { "l": "is", "t": { "Search": { "v": ["Leita"] } } }, { "l": "it", "t": { "Search": { "v": ["Cerca"] } } }, { "l": "ja", "t": { "Search": { "v": ["検索"] } } }, { "l": "ka", "t": { "Search": { "v": [""] } } }, { "l": "ka_GE", "t": { "Search": { "v": [""] } } }, { "l": "kab", "t": { "Search": { "v": [""] } } }, { "l": "kk", "t": { "Search": { "v": [""] } } }, { "l": "km", "t": { "Search": { "v": [""] } } }, { "l": "kn", "t": { "Search": { "v": [""] } } }, { "l": "ko", "t": { "Search": { "v": [""] } } }, { "l": "la", "t": { "Search": { "v": [""] } } }, { "l": "lb", "t": { "Search": { "v": [""] } } }, { "l": "lo", "t": { "Search": { "v": [""] } } }, { "l": "lt_LT", "t": { "Search": { "v": ["Ieškoti"] } } }, { "l": "lv", "t": { "Search": { "v": [""] } } }, { "l": "mk", "t": { "Search": { "v": ["Барај"] } } }, { "l": "mn", "t": { "Search": { "v": [""] } } }, { "l": "mr", "t": { "Search": { "v": [""] } } }, { "l": "ms_MY", "t": { "Search": { "v": [""] } } }, { "l": "my", "t": { "Search": { "v": ["ရှာဖွေရန်"] } } }, { "l": "nb", "t": { "Search": { "v": ["Søk"] } } }, { "l": "ne", "t": { "Search": { "v": [""] } } }, { "l": "nl", "t": { "Search": { "v": ["Zoeken"] } } }, { "l": "nn_NO", "t": { "Search": { "v": [""] } } }, { "l": "oc", "t": { "Search": { "v": [""] } } }, { "l": "pl", "t": { "Search": { "v": ["Szukaj"] } } }, { "l": "ps", "t": { "Search": { "v": [""] } } }, { "l": "pt_BR", "t": { "Search": { "v": ["Pesquisar"] } } }, { "l": "pt_PT", "t": { "Search": { "v": ["Pesquisar"] } } }, { "l": "ro", "t": { "Search": { "v": ["Căutare"] } } }, { "l": "ru", "t": { "Search": { "v": ["Поиск"] } } }, { "l": "sc", "t": { "Search": { "v": [""] } } }, { "l": "si", "t": { "Search": { "v": [""] } } }, { "l": "sk", "t": { "Search": { "v": ["Hľadať"] } } }, { "l": "sl", "t": { "Search": { "v": ["Iskanje"] } } }, { "l": "sq", "t": { "Search": { "v": [""] } } }, { "l": "sr", "t": { "Search": { "v": ["Претражи"] } } }, { "l": "sr@latin", "t": { "Search": { "v": [""] } } }, { "l": "sv", "t": { "Search": { "v": ["Sök"] } } }, { "l": "sw", "t": { "Search": { "v": [""] } } }, { "l": "ta", "t": { "Search": { "v": [""] } } }, { "l": "th", "t": { "Search": { "v": [""] } } }, { "l": "tk", "t": { "Search": { "v": [""] } } }, { "l": "tr", "t": { "Search": { "v": ["Arama"] } } }, { "l": "ug", "t": { "Search": { "v": [""] } } }, { "l": "uk", "t": { "Search": { "v": ["Пошук"] } } }, { "l": "ur_PK", "t": { "Search": { "v": [""] } } }, { "l": "uz", "t": { "Search": { "v": [""] } } }, { "l": "vi", "t": { "Search": { "v": [""] } } }, { "l": "zh_CN", "t": { "Search": { "v": ["搜索"] } } }, { "l": "zh_HK", "t": { "Search": { "v": ["搜尋"] } } }, { "l": "zh_TW", "t": { "Search": { "v": ["搜尋"] } } }, { "l": "zu_ZA", "t": { "Search": { "v": [""] } } }];
const t35 = [{ "l": "af", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ar", "t": { "Search for time zone": { "v": ["البحث عن منطقة زمنية"] }, "Type to search time zone": { "v": ["أكتُب للبحث عن منطقة زمنية"] } } }, { "l": "ast", "t": { "Search for time zone": { "v": ["Buscar fusos horarios"] }, "Type to search time zone": { "v": ["Escribi pa buscar un fusu horariu"] } } }, { "l": "az", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "be", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "bg", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "bn_BD", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "br", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "bs", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ca", "t": { "Type to search time zone": { "v": ["Escriviu per cercar la zona horària"] } } }, { "l": "cs", "t": { "Type to search time zone": { "v": ["Psaním vyhledejte časovou zónu"] } } }, { "l": "cs_CZ", "t": { "Search for time zone": { "v": ["Vyhledat časové pásmo"] }, "Type to search time zone": { "v": ["Psaním vyhledejte časovou zónu"] } } }, { "l": "cy_GB", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "da", "t": { "Type to search time zone": { "v": ["Indtast for at søge efter tidszone"] } } }, { "l": "de", "t": { "Search for time zone": { "v": ["Nach Zeitzone suchen"] }, "Type to search time zone": { "v": ["Tippen, um Zeitzone zu suchen"] } } }, { "l": "de_DE", "t": { "Search for time zone": { "v": ["Nach Zeitzone suchen"] }, "Type to search time zone": { "v": ["Tippen, um eine Zeitzone zu suchen"] } } }, { "l": "el", "t": { "Type to search time zone": { "v": ["Πληκτρολογήστε για αναζήτηση ζώνης ώρας"] } } }, { "l": "en_GB", "t": { "Type to search time zone": { "v": ["Type to search time zone"] } } }, { "l": "eo", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es", "t": { "Search for time zone": { "v": ["Buscar huso horario"] }, "Type to search time zone": { "v": ["Escriba para buscar un huso horario"] } } }, { "l": "es_419", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_AR", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_CL", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_CO", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_CR", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_DO", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_EC", "t": { "Type to search time zone": { "v": ["Escribe para buscar la zona horaria"] } } }, { "l": "es_GT", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_HN", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_MX", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_NI", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_PA", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_PE", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_PR", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_PY", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_SV", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "es_UY", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "et_EE", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "eu", "t": { "Type to search time zone": { "v": ["Idatzi ordu-zona bat bilatzeko"] } } }, { "l": "fa", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "fi", "t": { "Type to search time zone": { "v": ["Kirjoita etsiäksesi aikavyöhyke"] } } }, { "l": "fo", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "fr", "t": { "Search for time zone": { "v": ["Rechercher le fuseau horaire"] }, "Type to search time zone": { "v": ["Saisissez les premiers lettres pour rechercher un fuseau horaire"] } } }, { "l": "gd", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "gl", "t": { "Search for time zone": { "v": ["Buscar por fuso horario"] }, "Type to search time zone": { "v": ["Escriba para buscar o fuso horario"] } } }, { "l": "he", "t": { "Type to search time zone": { "v": ["יש להקליד כדי לחפש אזור זמן"] } } }, { "l": "hi_IN", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "hr", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "hsb", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "hu", "t": { "Type to search time zone": { "v": ["Gépeljen az időzóna kereséséhez"] } } }, { "l": "hy", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ia", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "id", "t": { "Search for time zone": { "v": ["Cari zona waktu"] }, "Type to search time zone": { "v": ["Ketik untuk mencari zona waktu"] } } }, { "l": "ig", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "is", "t": { "Search for time zone": { "v": ["Leita að tímabelti"] }, "Type to search time zone": { "v": ["Skrifaðu til að leita að tímabelti"] } } }, { "l": "it", "t": { "Search for time zone": { "v": ["Ricerca del fuso orario"] }, "Type to search time zone": { "v": ["Digita per cercare un fuso orario"] } } }, { "l": "ja", "t": { "Type to search time zone": { "v": ["タイムゾーン検索のため入力してください"] } } }, { "l": "ka", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ka_GE", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "kab", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "kk", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "km", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "kn", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ko", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "la", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "lb", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "lo", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "lt_LT", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "lv", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "mk", "t": { "Type to search time zone": { "v": ["Напишете за да пребарате временска зона"] } } }, { "l": "mn", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "mr", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ms_MY", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "my", "t": { "Type to search time zone": { "v": ["ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ"] } } }, { "l": "nb", "t": { "Type to search time zone": { "v": ["Tast for å søke etter tidssone"] } } }, { "l": "ne", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "nl", "t": { "Type to search time zone": { "v": ["Type om een tijdzone te zoeken"] } } }, { "l": "nn_NO", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "oc", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "pl", "t": { "Search for time zone": { "v": ["Szukaj strefy czasowej"] }, "Type to search time zone": { "v": ["Wpisz, aby wyszukać strefę czasową"] } } }, { "l": "ps", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "pt_BR", "t": { "Search for time zone": { "v": ["Pesquisar fuso horário"] }, "Type to search time zone": { "v": ["Digite para pesquisar o fuso horário "] } } }, { "l": "pt_PT", "t": { "Type to search time zone": { "v": ["Digite para pesquisar o fuso horário "] } } }, { "l": "ro", "t": { "Search for time zone": { "v": ["Căutare zonă de timp"] }, "Type to search time zone": { "v": ["Tastați pentru a căuta fusul orar"] } } }, { "l": "ru", "t": { "Type to search time zone": { "v": ["Введите для поиска часового пояса"] } } }, { "l": "sc", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "si", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "sk", "t": { "Type to search time zone": { "v": ["Začníte písať pre vyhľadávanie časovej zóny"] } } }, { "l": "sl", "t": { "Type to search time zone": { "v": ["Vpišite niz za iskanje časovnega pasu"] } } }, { "l": "sq", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "sr", "t": { "Search for time zone": { "v": ["Претрага временске зоне"] }, "Type to search time zone": { "v": ["Куцајте да претражите временске зоне"] } } }, { "l": "sr@latin", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "sv", "t": { "Search for time zone": { "v": ["Sök efter tidszon"] }, "Type to search time zone": { "v": ["Skriv för att välja tidszon"] } } }, { "l": "sw", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "ta", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "th", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "tk", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "tr", "t": { "Search for time zone": { "v": ["Saat dilimi ara"] }, "Type to search time zone": { "v": ["Saat dilimi aramak için yazmaya başlayın"] } } }, { "l": "ug", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "uk", "t": { "Search for time zone": { "v": ["Шукати часові зони"] }, "Type to search time zone": { "v": ["Введіть для пошуку часовий пояс"] } } }, { "l": "ur_PK", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "uz", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "vi", "t": { "Type to search time zone": { "v": [""] } } }, { "l": "zh_CN", "t": { "Type to search time zone": { "v": ["打字以搜索时区"] } } }, { "l": "zh_HK", "t": { "Type to search time zone": { "v": ["鍵入以搜索時區"] } } }, { "l": "zh_TW", "t": { "Type to search time zone": { "v": ["輸入以搜尋時區"] } } }, { "l": "zu_ZA", "t": { "Type to search time zone": { "v": [""] } } }];
const t36 = [{ "l": "af", "t": { "Select provider": { "v": [""] } } }, { "l": "ar", "t": { "Select provider": { "v": ["إختَر مٌزوِّداً"] } } }, { "l": "ast", "t": { "Select provider": { "v": ["Seleicionar el fornidor"] } } }, { "l": "az", "t": { "Select provider": { "v": [""] } } }, { "l": "be", "t": { "Select provider": { "v": [""] } } }, { "l": "bg", "t": { "Select provider": { "v": [""] } } }, { "l": "bn_BD", "t": { "Select provider": { "v": [""] } } }, { "l": "br", "t": { "Select provider": { "v": [""] } } }, { "l": "bs", "t": { "Select provider": { "v": [""] } } }, { "l": "ca", "t": { "Select provider": { "v": [""] } } }, { "l": "cs", "t": { "Select provider": { "v": ["Vybrat poskytovatele"] } } }, { "l": "cs_CZ", "t": { "Select provider": { "v": ["Vybrat poskytovatele"] } } }, { "l": "cy_GB", "t": { "Select provider": { "v": [""] } } }, { "l": "da", "t": { "Select provider": { "v": [""] } } }, { "l": "de", "t": { "Select provider": { "v": ["Anbieter auswählen"] } } }, { "l": "de_DE", "t": { "Select provider": { "v": ["Anbieter auswählen"] } } }, { "l": "el", "t": { "Select provider": { "v": [""] } } }, { "l": "en_GB", "t": { "Select provider": { "v": ["Select provider"] } } }, { "l": "eo", "t": { "Select provider": { "v": [""] } } }, { "l": "es", "t": { "Select provider": { "v": ["Seleccione proveedor"] } } }, { "l": "es_419", "t": { "Select provider": { "v": [""] } } }, { "l": "es_AR", "t": { "Select provider": { "v": [""] } } }, { "l": "es_CL", "t": { "Select provider": { "v": [""] } } }, { "l": "es_CO", "t": { "Select provider": { "v": [""] } } }, { "l": "es_CR", "t": { "Select provider": { "v": [""] } } }, { "l": "es_DO", "t": { "Select provider": { "v": [""] } } }, { "l": "es_EC", "t": { "Select provider": { "v": ["Seleccionar proveedor"] } } }, { "l": "es_GT", "t": { "Select provider": { "v": [""] } } }, { "l": "es_HN", "t": { "Select provider": { "v": [""] } } }, { "l": "es_MX", "t": { "Select provider": { "v": [""] } } }, { "l": "es_NI", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PA", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PE", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PR", "t": { "Select provider": { "v": [""] } } }, { "l": "es_PY", "t": { "Select provider": { "v": [""] } } }, { "l": "es_SV", "t": { "Select provider": { "v": [""] } } }, { "l": "es_UY", "t": { "Select provider": { "v": [""] } } }, { "l": "et_EE", "t": { "Select provider": { "v": [""] } } }, { "l": "eu", "t": { "Select provider": { "v": ["Hautatu hornitzailea"] } } }, { "l": "fa", "t": { "Select provider": { "v": [""] } } }, { "l": "fi", "t": { "Select provider": { "v": [""] } } }, { "l": "fo", "t": { "Select provider": { "v": [""] } } }, { "l": "fr", "t": { "Select provider": { "v": ["Sélectionner un fournisseur"] } } }, { "l": "gd", "t": { "Select provider": { "v": [""] } } }, { "l": "gl", "t": { "Select provider": { "v": ["Seleccionar provedor"] } } }, { "l": "he", "t": { "Select provider": { "v": ["בחירת ספק"] } } }, { "l": "hi_IN", "t": { "Select provider": { "v": [""] } } }, { "l": "hr", "t": { "Select provider": { "v": [""] } } }, { "l": "hsb", "t": { "Select provider": { "v": [""] } } }, { "l": "hu", "t": { "Select provider": { "v": [""] } } }, { "l": "hy", "t": { "Select provider": { "v": [""] } } }, { "l": "ia", "t": { "Select provider": { "v": [""] } } }, { "l": "id", "t": { "Select provider": { "v": ["Pilih penyedia"] } } }, { "l": "ig", "t": { "Select provider": { "v": [""] } } }, { "l": "is", "t": { "Select provider": { "v": ["Veldu þjónustuveitu"] } } }, { "l": "it", "t": { "Select provider": { "v": ["Selezionare il provider"] } } }, { "l": "ja", "t": { "Select provider": { "v": [""] } } }, { "l": "ka", "t": { "Select provider": { "v": [""] } } }, { "l": "ka_GE", "t": { "Select provider": { "v": [""] } } }, { "l": "kab", "t": { "Select provider": { "v": [""] } } }, { "l": "kk", "t": { "Select provider": { "v": [""] } } }, { "l": "km", "t": { "Select provider": { "v": [""] } } }, { "l": "kn", "t": { "Select provider": { "v": [""] } } }, { "l": "ko", "t": { "Select provider": { "v": [""] } } }, { "l": "la", "t": { "Select provider": { "v": [""] } } }, { "l": "lb", "t": { "Select provider": { "v": [""] } } }, { "l": "lo", "t": { "Select provider": { "v": [""] } } }, { "l": "lt_LT", "t": { "Select provider": { "v": [""] } } }, { "l": "lv", "t": { "Select provider": { "v": [""] } } }, { "l": "mk", "t": { "Select provider": { "v": [""] } } }, { "l": "mn", "t": { "Select provider": { "v": [""] } } }, { "l": "mr", "t": { "Select provider": { "v": [""] } } }, { "l": "ms_MY", "t": { "Select provider": { "v": [""] } } }, { "l": "my", "t": { "Select provider": { "v": [""] } } }, { "l": "nb", "t": { "Select provider": { "v": [""] } } }, { "l": "ne", "t": { "Select provider": { "v": [""] } } }, { "l": "nl", "t": { "Select provider": { "v": ["Selecteer provider"] } } }, { "l": "nn_NO", "t": { "Select provider": { "v": [""] } } }, { "l": "oc", "t": { "Select provider": { "v": [""] } } }, { "l": "pl", "t": { "Select provider": { "v": ["Wybierz dostawcę"] } } }, { "l": "ps", "t": { "Select provider": { "v": [""] } } }, { "l": "pt_BR", "t": { "Select provider": { "v": ["Selecione o provedor"] } } }, { "l": "pt_PT", "t": { "Select provider": { "v": ["Escolha de fornecedor"] } } }, { "l": "ro", "t": { "Select provider": { "v": ["Selectați providerul"] } } }, { "l": "ru", "t": { "Select provider": { "v": ["Выбрать поставщика"] } } }, { "l": "sc", "t": { "Select provider": { "v": [""] } } }, { "l": "si", "t": { "Select provider": { "v": [""] } } }, { "l": "sk", "t": { "Select provider": { "v": [""] } } }, { "l": "sl", "t": { "Select provider": { "v": [""] } } }, { "l": "sq", "t": { "Select provider": { "v": [""] } } }, { "l": "sr", "t": { "Select provider": { "v": ["Изаберите пружаоца"] } } }, { "l": "sr@latin", "t": { "Select provider": { "v": [""] } } }, { "l": "sv", "t": { "Select provider": { "v": ["Välj leverantör"] } } }, { "l": "sw", "t": { "Select provider": { "v": [""] } } }, { "l": "ta", "t": { "Select provider": { "v": [""] } } }, { "l": "th", "t": { "Select provider": { "v": [""] } } }, { "l": "tk", "t": { "Select provider": { "v": [""] } } }, { "l": "tr", "t": { "Select provider": { "v": ["Sağlayıcı seçin"] } } }, { "l": "ug", "t": { "Select provider": { "v": [""] } } }, { "l": "uk", "t": { "Select provider": { "v": ["Виберіть постачальника"] } } }, { "l": "ur_PK", "t": { "Select provider": { "v": [""] } } }, { "l": "uz", "t": { "Select provider": { "v": [""] } } }, { "l": "vi", "t": { "Select provider": { "v": [""] } } }, { "l": "zh_CN", "t": { "Select provider": { "v": [""] } } }, { "l": "zh_HK", "t": { "Select provider": { "v": ["選擇提供者"] } } }, { "l": "zh_TW", "t": { "Select provider": { "v": ["選取提供者"] } } }, { "l": "zu_ZA", "t": { "Select provider": { "v": [""] } } }];
const t37 = [{ "l": "af", "t": { "Settings": { "v": [""] } } }, { "l": "ar", "t": { "Settings": { "v": ["الإعدادات"] } } }, { "l": "ast", "t": { "Settings": { "v": ["Configuración"] } } }, { "l": "az", "t": { "Settings": { "v": [""] } } }, { "l": "be", "t": { "Settings": { "v": [""] } } }, { "l": "bg", "t": { "Settings": { "v": [""] } } }, { "l": "bn_BD", "t": { "Settings": { "v": [""] } } }, { "l": "br", "t": { "Settings": { "v": ["Arventennoù"] } } }, { "l": "bs", "t": { "Settings": { "v": [""] } } }, { "l": "ca", "t": { "Settings": { "v": ["Paràmetres"] } } }, { "l": "cs", "t": { "Settings": { "v": ["Nastavení"] } } }, { "l": "cs_CZ", "t": { "Settings": { "v": ["Nastavení"] } } }, { "l": "cy_GB", "t": { "Settings": { "v": [""] } } }, { "l": "da", "t": { "Settings": { "v": ["Indstillinger"] } } }, { "l": "de", "t": { "Settings": { "v": ["Einstellungen"] } } }, { "l": "de_DE", "t": { "Settings": { "v": ["Einstellungen"] } } }, { "l": "el", "t": { "Settings": { "v": ["Ρυθμίσεις"] } } }, { "l": "en_GB", "t": { "Settings": { "v": ["Settings"] } } }, { "l": "eo", "t": { "Settings": { "v": ["Agordo"] } } }, { "l": "es", "t": { "Settings": { "v": ["Ajustes"] } } }, { "l": "es_419", "t": { "Settings": { "v": [""] } } }, { "l": "es_AR", "t": { "Settings": { "v": [""] } } }, { "l": "es_CL", "t": { "Settings": { "v": [""] } } }, { "l": "es_CO", "t": { "Settings": { "v": [""] } } }, { "l": "es_CR", "t": { "Settings": { "v": [""] } } }, { "l": "es_DO", "t": { "Settings": { "v": [""] } } }, { "l": "es_EC", "t": { "Settings": { "v": ["Configuraciones"] } } }, { "l": "es_GT", "t": { "Settings": { "v": [""] } } }, { "l": "es_HN", "t": { "Settings": { "v": [""] } } }, { "l": "es_MX", "t": { "Settings": { "v": [""] } } }, { "l": "es_NI", "t": { "Settings": { "v": [""] } } }, { "l": "es_PA", "t": { "Settings": { "v": [""] } } }, { "l": "es_PE", "t": { "Settings": { "v": [""] } } }, { "l": "es_PR", "t": { "Settings": { "v": [""] } } }, { "l": "es_PY", "t": { "Settings": { "v": [""] } } }, { "l": "es_SV", "t": { "Settings": { "v": [""] } } }, { "l": "es_UY", "t": { "Settings": { "v": [""] } } }, { "l": "et_EE", "t": { "Settings": { "v": [""] } } }, { "l": "eu", "t": { "Settings": { "v": ["Ezarpenak"] } } }, { "l": "fa", "t": { "Settings": { "v": [""] } } }, { "l": "fi", "t": { "Settings": { "v": ["Asetukset"] } } }, { "l": "fo", "t": { "Settings": { "v": [""] } } }, { "l": "fr", "t": { "Settings": { "v": ["Paramètres"] } } }, { "l": "gd", "t": { "Settings": { "v": [""] } } }, { "l": "gl", "t": { "Settings": { "v": ["Axustes"] } } }, { "l": "he", "t": { "Settings": { "v": ["הגדרות"] } } }, { "l": "hi_IN", "t": { "Settings": { "v": [""] } } }, { "l": "hr", "t": { "Settings": { "v": [""] } } }, { "l": "hsb", "t": { "Settings": { "v": [""] } } }, { "l": "hu", "t": { "Settings": { "v": ["Beállítások"] } } }, { "l": "hy", "t": { "Settings": { "v": [""] } } }, { "l": "ia", "t": { "Settings": { "v": [""] } } }, { "l": "id", "t": { "Settings": { "v": ["Pengaturan"] } } }, { "l": "ig", "t": { "Settings": { "v": [""] } } }, { "l": "is", "t": { "Settings": { "v": ["Stillingar"] } } }, { "l": "it", "t": { "Settings": { "v": ["Impostazioni"] } } }, { "l": "ja", "t": { "Settings": { "v": ["設定"] } } }, { "l": "ka", "t": { "Settings": { "v": [""] } } }, { "l": "ka_GE", "t": { "Settings": { "v": [""] } } }, { "l": "kab", "t": { "Settings": { "v": [""] } } }, { "l": "kk", "t": { "Settings": { "v": [""] } } }, { "l": "km", "t": { "Settings": { "v": [""] } } }, { "l": "kn", "t": { "Settings": { "v": [""] } } }, { "l": "ko", "t": { "Settings": { "v": [""] } } }, { "l": "la", "t": { "Settings": { "v": [""] } } }, { "l": "lb", "t": { "Settings": { "v": [""] } } }, { "l": "lo", "t": { "Settings": { "v": [""] } } }, { "l": "lt_LT", "t": { "Settings": { "v": ["Nustatymai"] } } }, { "l": "lv", "t": { "Settings": { "v": ["Iestatījumi"] } } }, { "l": "mk", "t": { "Settings": { "v": ["Параметри"] } } }, { "l": "mn", "t": { "Settings": { "v": [""] } } }, { "l": "mr", "t": { "Settings": { "v": [""] } } }, { "l": "ms_MY", "t": { "Settings": { "v": [""] } } }, { "l": "my", "t": { "Settings": { "v": ["ချိန်ညှိချက်များ"] } } }, { "l": "nb", "t": { "Settings": { "v": ["Innstillinger"] } } }, { "l": "ne", "t": { "Settings": { "v": [""] } } }, { "l": "nl", "t": { "Settings": { "v": ["Instellingen"] } } }, { "l": "nn_NO", "t": { "Settings": { "v": [""] } } }, { "l": "oc", "t": { "Settings": { "v": ["Paramètres"] } } }, { "l": "pl", "t": { "Settings": { "v": ["Ustawienia"] } } }, { "l": "ps", "t": { "Settings": { "v": [""] } } }, { "l": "pt_BR", "t": { "Settings": { "v": ["Configurações"] } } }, { "l": "pt_PT", "t": { "Settings": { "v": ["Definições"] } } }, { "l": "ro", "t": { "Settings": { "v": ["Setări"] } } }, { "l": "ru", "t": { "Settings": { "v": ["Параметры"] } } }, { "l": "sc", "t": { "Settings": { "v": [""] } } }, { "l": "si", "t": { "Settings": { "v": [""] } } }, { "l": "sk", "t": { "Settings": { "v": ["Nastavenia"] } } }, { "l": "sl", "t": { "Settings": { "v": ["Nastavitve"] } } }, { "l": "sq", "t": { "Settings": { "v": [""] } } }, { "l": "sr", "t": { "Settings": { "v": ["Поставке"] } } }, { "l": "sr@latin", "t": { "Settings": { "v": [""] } } }, { "l": "sv", "t": { "Settings": { "v": ["Inställningar"] } } }, { "l": "sw", "t": { "Settings": { "v": [""] } } }, { "l": "ta", "t": { "Settings": { "v": [""] } } }, { "l": "th", "t": { "Settings": { "v": [""] } } }, { "l": "tk", "t": { "Settings": { "v": [""] } } }, { "l": "tr", "t": { "Settings": { "v": ["Ayarlar"] } } }, { "l": "ug", "t": { "Settings": { "v": [""] } } }, { "l": "uk", "t": { "Settings": { "v": ["Налаштування"] } } }, { "l": "ur_PK", "t": { "Settings": { "v": [""] } } }, { "l": "uz", "t": { "Settings": { "v": [""] } } }, { "l": "vi", "t": { "Settings": { "v": [""] } } }, { "l": "zh_CN", "t": { "Settings": { "v": ["设置"] } } }, { "l": "zh_HK", "t": { "Settings": { "v": ["設定"] } } }, { "l": "zh_TW", "t": { "Settings": { "v": ["設定"] } } }, { "l": "zu_ZA", "t": { "Settings": { "v": [""] } } }];
const t38 = [{ "l": "af", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ar", "t": { "Settings navigation": { "v": ["إعدادات التّصفُّح"] } } }, { "l": "ast", "t": { "Settings navigation": { "v": ["Navegación pela configuración"] } } }, { "l": "az", "t": { "Settings navigation": { "v": [""] } } }, { "l": "be", "t": { "Settings navigation": { "v": [""] } } }, { "l": "bg", "t": { "Settings navigation": { "v": [""] } } }, { "l": "bn_BD", "t": { "Settings navigation": { "v": [""] } } }, { "l": "br", "t": { "Settings navigation": { "v": [""] } } }, { "l": "bs", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ca", "t": { "Settings navigation": { "v": ["Navegació d'opcions"] } } }, { "l": "cs", "t": { "Settings navigation": { "v": ["Pohyb po nastavení"] } } }, { "l": "cs_CZ", "t": { "Settings navigation": { "v": ["Pohyb po nastavení"] } } }, { "l": "cy_GB", "t": { "Settings navigation": { "v": [""] } } }, { "l": "da", "t": { "Settings navigation": { "v": ["Naviger i indstillinger"] } } }, { "l": "de", "t": { "Settings navigation": { "v": ["Einstellungen für die Navigation"] } } }, { "l": "de_DE", "t": { "Settings navigation": { "v": ["Einstellungen für die Navigation"] } } }, { "l": "el", "t": { "Settings navigation": { "v": ["Πλοήγηση ρυθμίσεων"] } } }, { "l": "en_GB", "t": { "Settings navigation": { "v": ["Settings navigation"] } } }, { "l": "eo", "t": { "Settings navigation": { "v": ["Agorda navigado"] } } }, { "l": "es", "t": { "Settings navigation": { "v": ["Navegación de ajustes"] } } }, { "l": "es_419", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_AR", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_CL", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_CO", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_CR", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_DO", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_EC", "t": { "Settings navigation": { "v": ["Navegación de configuraciones"] } } }, { "l": "es_GT", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_HN", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_MX", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_NI", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_PA", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_PE", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_PR", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_PY", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_SV", "t": { "Settings navigation": { "v": [""] } } }, { "l": "es_UY", "t": { "Settings navigation": { "v": [""] } } }, { "l": "et_EE", "t": { "Settings navigation": { "v": [""] } } }, { "l": "eu", "t": { "Settings navigation": { "v": ["Nabigazio ezarpenak"] } } }, { "l": "fa", "t": { "Settings navigation": { "v": [""] } } }, { "l": "fi", "t": { "Settings navigation": { "v": ["Asetusnavigaatio"] } } }, { "l": "fo", "t": { "Settings navigation": { "v": [""] } } }, { "l": "fr", "t": { "Settings navigation": { "v": ["Navigation dans les paramètres"] } } }, { "l": "gd", "t": { "Settings navigation": { "v": [""] } } }, { "l": "gl", "t": { "Settings navigation": { "v": ["Navegación polos axustes"] } } }, { "l": "he", "t": { "Settings navigation": { "v": ["ניווט בהגדרות"] } } }, { "l": "hi_IN", "t": { "Settings navigation": { "v": [""] } } }, { "l": "hr", "t": { "Settings navigation": { "v": [""] } } }, { "l": "hsb", "t": { "Settings navigation": { "v": [""] } } }, { "l": "hu", "t": { "Settings navigation": { "v": ["Navigáció a beállításokban"] } } }, { "l": "hy", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ia", "t": { "Settings navigation": { "v": [""] } } }, { "l": "id", "t": { "Settings navigation": { "v": ["Navigasi pengaturan"] } } }, { "l": "ig", "t": { "Settings navigation": { "v": [""] } } }, { "l": "is", "t": { "Settings navigation": { "v": ["Flakk um stillingar"] } } }, { "l": "it", "t": { "Settings navigation": { "v": ["Navigazione delle impostazioni"] } } }, { "l": "ja", "t": { "Settings navigation": { "v": ["ナビゲーション設定"] } } }, { "l": "ka", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ka_GE", "t": { "Settings navigation": { "v": [""] } } }, { "l": "kab", "t": { "Settings navigation": { "v": [""] } } }, { "l": "kk", "t": { "Settings navigation": { "v": [""] } } }, { "l": "km", "t": { "Settings navigation": { "v": [""] } } }, { "l": "kn", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ko", "t": { "Settings navigation": { "v": [""] } } }, { "l": "la", "t": { "Settings navigation": { "v": [""] } } }, { "l": "lb", "t": { "Settings navigation": { "v": [""] } } }, { "l": "lo", "t": { "Settings navigation": { "v": [""] } } }, { "l": "lt_LT", "t": { "Settings navigation": { "v": ["Naršymas nustatymuose"] } } }, { "l": "lv", "t": { "Settings navigation": { "v": [""] } } }, { "l": "mk", "t": { "Settings navigation": { "v": ["Параметри за навигација"] } } }, { "l": "mn", "t": { "Settings navigation": { "v": [""] } } }, { "l": "mr", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ms_MY", "t": { "Settings navigation": { "v": [""] } } }, { "l": "my", "t": { "Settings navigation": { "v": ["ချိန်ညှိချက်အညွှန်း"] } } }, { "l": "nb", "t": { "Settings navigation": { "v": ["Navigasjonsinstillinger"] } } }, { "l": "ne", "t": { "Settings navigation": { "v": [""] } } }, { "l": "nl", "t": { "Settings navigation": { "v": ["Instellingen navigatie"] } } }, { "l": "nn_NO", "t": { "Settings navigation": { "v": [""] } } }, { "l": "oc", "t": { "Settings navigation": { "v": [""] } } }, { "l": "pl", "t": { "Settings navigation": { "v": ["Ustawienia nawigacji"] } } }, { "l": "ps", "t": { "Settings navigation": { "v": [""] } } }, { "l": "pt_BR", "t": { "Settings navigation": { "v": ["Navegação de configurações"] } } }, { "l": "pt_PT", "t": { "Settings navigation": { "v": ["Navegação de configurações"] } } }, { "l": "ro", "t": { "Settings navigation": { "v": ["Navigare setări"] } } }, { "l": "ru", "t": { "Settings navigation": { "v": ["Навигация по настройкам"] } } }, { "l": "sc", "t": { "Settings navigation": { "v": [""] } } }, { "l": "si", "t": { "Settings navigation": { "v": [""] } } }, { "l": "sk", "t": { "Settings navigation": { "v": ["Navigácia v nastaveniach"] } } }, { "l": "sl", "t": { "Settings navigation": { "v": ["Krmarjenje nastavitev"] } } }, { "l": "sq", "t": { "Settings navigation": { "v": [""] } } }, { "l": "sr", "t": { "Settings navigation": { "v": ["Кретање по подешавањима"] } } }, { "l": "sr@latin", "t": { "Settings navigation": { "v": [""] } } }, { "l": "sv", "t": { "Settings navigation": { "v": ["Inställningsmeny"] } } }, { "l": "sw", "t": { "Settings navigation": { "v": [""] } } }, { "l": "ta", "t": { "Settings navigation": { "v": [""] } } }, { "l": "th", "t": { "Settings navigation": { "v": [""] } } }, { "l": "tk", "t": { "Settings navigation": { "v": [""] } } }, { "l": "tr", "t": { "Settings navigation": { "v": ["Gezinme ayarları"] } } }, { "l": "ug", "t": { "Settings navigation": { "v": [""] } } }, { "l": "uk", "t": { "Settings navigation": { "v": ["Навігація у налаштуваннях"] } } }, { "l": "ur_PK", "t": { "Settings navigation": { "v": [""] } } }, { "l": "uz", "t": { "Settings navigation": { "v": [""] } } }, { "l": "vi", "t": { "Settings navigation": { "v": [""] } } }, { "l": "zh_CN", "t": { "Settings navigation": { "v": ["设置向导"] } } }, { "l": "zh_HK", "t": { "Settings navigation": { "v": ["設定值導覽"] } } }, { "l": "zh_TW", "t": { "Settings navigation": { "v": ["設定值導覽"] } } }, { "l": "zu_ZA", "t": { "Settings navigation": { "v": [""] } } }];
const t39 = [{ "l": "af", "t": { "Submit": { "v": [""] } } }, { "l": "ar", "t": { "Submit": { "v": ["إرسال"] } } }, { "l": "ast", "t": { "Submit": { "v": ["Unviar"] } } }, { "l": "az", "t": { "Submit": { "v": [""] } } }, { "l": "be", "t": { "Submit": { "v": [""] } } }, { "l": "bg", "t": { "Submit": { "v": [""] } } }, { "l": "bn_BD", "t": { "Submit": { "v": [""] } } }, { "l": "br", "t": { "Submit": { "v": [""] } } }, { "l": "bs", "t": { "Submit": { "v": [""] } } }, { "l": "ca", "t": { "Submit": { "v": ["Envia"] } } }, { "l": "cs", "t": { "Submit": { "v": ["Odeslat"] } } }, { "l": "cs_CZ", "t": { "Submit": { "v": ["Odeslat"] } } }, { "l": "cy_GB", "t": { "Submit": { "v": [""] } } }, { "l": "da", "t": { "Submit": { "v": ["Send"] } } }, { "l": "de", "t": { "Submit": { "v": ["Einreichen"] } } }, { "l": "de_DE", "t": { "Submit": { "v": ["Einreichen"] } } }, { "l": "el", "t": { "Submit": { "v": ["Υποβολή"] } } }, { "l": "en_GB", "t": { "Submit": { "v": ["Submit"] } } }, { "l": "eo", "t": { "Submit": { "v": [""] } } }, { "l": "es", "t": { "Submit": { "v": ["Enviar"] } } }, { "l": "es_419", "t": { "Submit": { "v": [""] } } }, { "l": "es_AR", "t": { "Submit": { "v": [""] } } }, { "l": "es_CL", "t": { "Submit": { "v": [""] } } }, { "l": "es_CO", "t": { "Submit": { "v": [""] } } }, { "l": "es_CR", "t": { "Submit": { "v": [""] } } }, { "l": "es_DO", "t": { "Submit": { "v": [""] } } }, { "l": "es_EC", "t": { "Submit": { "v": ["Enviar"] } } }, { "l": "es_GT", "t": { "Submit": { "v": [""] } } }, { "l": "es_HN", "t": { "Submit": { "v": [""] } } }, { "l": "es_MX", "t": { "Submit": { "v": [""] } } }, { "l": "es_NI", "t": { "Submit": { "v": [""] } } }, { "l": "es_PA", "t": { "Submit": { "v": [""] } } }, { "l": "es_PE", "t": { "Submit": { "v": [""] } } }, { "l": "es_PR", "t": { "Submit": { "v": [""] } } }, { "l": "es_PY", "t": { "Submit": { "v": [""] } } }, { "l": "es_SV", "t": { "Submit": { "v": [""] } } }, { "l": "es_UY", "t": { "Submit": { "v": [""] } } }, { "l": "et_EE", "t": { "Submit": { "v": [""] } } }, { "l": "eu", "t": { "Submit": { "v": ["Bidali"] } } }, { "l": "fa", "t": { "Submit": { "v": [""] } } }, { "l": "fi", "t": { "Submit": { "v": ["Lähetä"] } } }, { "l": "fo", "t": { "Submit": { "v": [""] } } }, { "l": "fr", "t": { "Submit": { "v": ["Valider"] } } }, { "l": "gd", "t": { "Submit": { "v": [""] } } }, { "l": "gl", "t": { "Submit": { "v": ["Enviar"] } } }, { "l": "he", "t": { "Submit": { "v": ["הגשה"] } } }, { "l": "hi_IN", "t": { "Submit": { "v": [""] } } }, { "l": "hr", "t": { "Submit": { "v": [""] } } }, { "l": "hsb", "t": { "Submit": { "v": [""] } } }, { "l": "hu", "t": { "Submit": { "v": ["Beküldés"] } } }, { "l": "hy", "t": { "Submit": { "v": [""] } } }, { "l": "ia", "t": { "Submit": { "v": [""] } } }, { "l": "id", "t": { "Submit": { "v": ["Kirimkan"] } } }, { "l": "ig", "t": { "Submit": { "v": [""] } } }, { "l": "is", "t": { "Submit": { "v": ["Senda inn"] } } }, { "l": "it", "t": { "Submit": { "v": ["Invia"] } } }, { "l": "ja", "t": { "Submit": { "v": ["提出"] } } }, { "l": "ka", "t": { "Submit": { "v": [""] } } }, { "l": "ka_GE", "t": { "Submit": { "v": [""] } } }, { "l": "kab", "t": { "Submit": { "v": [""] } } }, { "l": "kk", "t": { "Submit": { "v": [""] } } }, { "l": "km", "t": { "Submit": { "v": [""] } } }, { "l": "kn", "t": { "Submit": { "v": [""] } } }, { "l": "ko", "t": { "Submit": { "v": [""] } } }, { "l": "la", "t": { "Submit": { "v": [""] } } }, { "l": "lb", "t": { "Submit": { "v": [""] } } }, { "l": "lo", "t": { "Submit": { "v": [""] } } }, { "l": "lt_LT", "t": { "Submit": { "v": ["Pateikti"] } } }, { "l": "lv", "t": { "Submit": { "v": [""] } } }, { "l": "mk", "t": { "Submit": { "v": ["Испрати"] } } }, { "l": "mn", "t": { "Submit": { "v": [""] } } }, { "l": "mr", "t": { "Submit": { "v": [""] } } }, { "l": "ms_MY", "t": { "Submit": { "v": [""] } } }, { "l": "my", "t": { "Submit": { "v": ["တင်သွင်းရန်"] } } }, { "l": "nb", "t": { "Submit": { "v": ["Send"] } } }, { "l": "ne", "t": { "Submit": { "v": [""] } } }, { "l": "nl", "t": { "Submit": { "v": ["Verwerken"] } } }, { "l": "nn_NO", "t": { "Submit": { "v": [""] } } }, { "l": "oc", "t": { "Submit": { "v": [""] } } }, { "l": "pl", "t": { "Submit": { "v": ["Wyślij"] } } }, { "l": "ps", "t": { "Submit": { "v": [""] } } }, { "l": "pt_BR", "t": { "Submit": { "v": ["Enviar"] } } }, { "l": "pt_PT", "t": { "Submit": { "v": ["Submeter"] } } }, { "l": "ro", "t": { "Submit": { "v": ["Trimiteți"] } } }, { "l": "ru", "t": { "Submit": { "v": ["Утвердить"] } } }, { "l": "sc", "t": { "Submit": { "v": [""] } } }, { "l": "si", "t": { "Submit": { "v": [""] } } }, { "l": "sk", "t": { "Submit": { "v": ["Odoslať"] } } }, { "l": "sl", "t": { "Submit": { "v": ["Pošlji"] } } }, { "l": "sq", "t": { "Submit": { "v": [""] } } }, { "l": "sr", "t": { "Submit": { "v": ["Поднеси"] } } }, { "l": "sr@latin", "t": { "Submit": { "v": [""] } } }, { "l": "sv", "t": { "Submit": { "v": ["Skicka"] } } }, { "l": "sw", "t": { "Submit": { "v": [""] } } }, { "l": "ta", "t": { "Submit": { "v": [""] } } }, { "l": "th", "t": { "Submit": { "v": [""] } } }, { "l": "tk", "t": { "Submit": { "v": [""] } } }, { "l": "tr", "t": { "Submit": { "v": ["Gönder"] } } }, { "l": "ug", "t": { "Submit": { "v": [""] } } }, { "l": "uk", "t": { "Submit": { "v": ["Надіслати"] } } }, { "l": "ur_PK", "t": { "Submit": { "v": [""] } } }, { "l": "uz", "t": { "Submit": { "v": [""] } } }, { "l": "vi", "t": { "Submit": { "v": [""] } } }, { "l": "zh_CN", "t": { "Submit": { "v": ["提交"] } } }, { "l": "zh_HK", "t": { "Submit": { "v": ["提交"] } } }, { "l": "zh_TW", "t": { "Submit": { "v": ["遞交"] } } }, { "l": "zu_ZA", "t": { "Submit": { "v": [""] } } }];
const t40 = [{ "l": "af", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ar", "t": { "Unable to search the group": { "v": ["تعذّر البحث في المجموعة"] } } }, { "l": "ast", "t": { "Unable to search the group": { "v": ["Nun ye posible buscar el grupu"] } } }, { "l": "az", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "be", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "bg", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "bn_BD", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "br", "t": { "Unable to search the group": { "v": ["Dibosupl eo klask ar strollad"] } } }, { "l": "bs", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ca", "t": { "Unable to search the group": { "v": ["No es pot cercar el grup"] } } }, { "l": "cs", "t": { "Unable to search the group": { "v": ["Nedaří se hledat skupinu"] } } }, { "l": "cs_CZ", "t": { "Unable to search the group": { "v": ["Nedaří se hledat skupinu"] } } }, { "l": "cy_GB", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "da", "t": { "Unable to search the group": { "v": ["Kan ikke søge på denne gruppe"] } } }, { "l": "de", "t": { "Unable to search the group": { "v": ["Die Gruppe konnte nicht durchsucht werden."] } } }, { "l": "de_DE", "t": { "Unable to search the group": { "v": ["Die Gruppe kann nicht durchsucht werden"] } } }, { "l": "el", "t": { "Unable to search the group": { "v": ["Δεν είναι δυνατή η αναζήτηση της ομάδας"] } } }, { "l": "en_GB", "t": { "Unable to search the group": { "v": ["Unable to search the group"] } } }, { "l": "eo", "t": { "Unable to search the group": { "v": ["Ne eblas serĉi en la grupo"] } } }, { "l": "es", "t": { "Unable to search the group": { "v": ["No es posible buscar en el grupo"] } } }, { "l": "es_419", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_AR", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_CL", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_CO", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_CR", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_DO", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_EC", "t": { "Unable to search the group": { "v": ["No se puede buscar en el grupo"] } } }, { "l": "es_GT", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_HN", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_MX", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_NI", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_PA", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_PE", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_PR", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_PY", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_SV", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "es_UY", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "et_EE", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "eu", "t": { "Unable to search the group": { "v": ["Ezin izan da taldea bilatu"] } } }, { "l": "fa", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "fi", "t": { "Unable to search the group": { "v": ["Ryhmää ei voi hakea"] } } }, { "l": "fo", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "fr", "t": { "Unable to search the group": { "v": ["Impossible de chercher le groupe"] } } }, { "l": "gd", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "gl", "t": { "Unable to search the group": { "v": ["Non foi posíbel buscar o grupo"] } } }, { "l": "he", "t": { "Unable to search the group": { "v": ["לא ניתן לחפש בקבוצה"] } } }, { "l": "hi_IN", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "hr", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "hsb", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "hu", "t": { "Unable to search the group": { "v": ["A csoport nem kereshető"] } } }, { "l": "hy", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ia", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "id", "t": { "Unable to search the group": { "v": ["Tidak dapat mencari dalam grup"] } } }, { "l": "ig", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "is", "t": { "Unable to search the group": { "v": ["Get ekki leitað í hópnum"] } } }, { "l": "it", "t": { "Unable to search the group": { "v": ["Impossibile cercare il gruppo"] } } }, { "l": "ja", "t": { "Unable to search the group": { "v": ["グループを検索できません"] } } }, { "l": "ka", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ka_GE", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "kab", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "kk", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "km", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "kn", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ko", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "la", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "lb", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "lo", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "lt_LT", "t": { "Unable to search the group": { "v": ["Nepavyko atlikti paiešką grupėje"] } } }, { "l": "lv", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "mk", "t": { "Unable to search the group": { "v": ["Неможе да се принајде групата"] } } }, { "l": "mn", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "mr", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ms_MY", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "my", "t": { "Unable to search the group": { "v": ["အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ"] } } }, { "l": "nb", "t": { "Unable to search the group": { "v": ["Kunne ikke søke i gruppen"] } } }, { "l": "ne", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "nl", "t": { "Unable to search the group": { "v": ["Kan niet zoeken in de groep"] } } }, { "l": "nn_NO", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "oc", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "pl", "t": { "Unable to search the group": { "v": ["Nie można przeszukać grupy"] } } }, { "l": "ps", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "pt_BR", "t": { "Unable to search the group": { "v": ["Não foi possível pesquisar o grupo"] } } }, { "l": "pt_PT", "t": { "Unable to search the group": { "v": ["Não é possível pesquisar o grupo"] } } }, { "l": "ro", "t": { "Unable to search the group": { "v": ["Imposibilitatea de a căuta în grup"] } } }, { "l": "ru", "t": { "Unable to search the group": { "v": ["Невозможно найти группу"] } } }, { "l": "sc", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "si", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "sk", "t": { "Unable to search the group": { "v": ["Skupinu sa nepodarilo nájsť"] } } }, { "l": "sl", "t": { "Unable to search the group": { "v": ["Ni mogoče iskati po skupini"] } } }, { "l": "sq", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "sr", "t": { "Unable to search the group": { "v": ["Група не може да се претражи"] } } }, { "l": "sr@latin", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "sv", "t": { "Unable to search the group": { "v": ["Kunde inte söka i gruppen"] } } }, { "l": "sw", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "ta", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "th", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "tk", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "tr", "t": { "Unable to search the group": { "v": ["Grupta arama yapılamadı"] } } }, { "l": "ug", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "uk", "t": { "Unable to search the group": { "v": ["Неможливо шукати в групі"] } } }, { "l": "ur_PK", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "uz", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "vi", "t": { "Unable to search the group": { "v": [""] } } }, { "l": "zh_CN", "t": { "Unable to search the group": { "v": ["无法搜索分组"] } } }, { "l": "zh_HK", "t": { "Unable to search the group": { "v": ["無法搜尋群組"] } } }, { "l": "zh_TW", "t": { "Unable to search the group": { "v": ["無法搜尋群組"] } } }, { "l": "zu_ZA", "t": { "Unable to search the group": { "v": [""] } } }];
const t41 = [{ "l": "af", "t": { "Undo changes": { "v": [""] } } }, { "l": "ar", "t": { "Undo changes": { "v": ["تراجَع عن التغييرات"] } } }, { "l": "ast", "t": { "Undo changes": { "v": ["Desfacer los cambeos"] } } }, { "l": "az", "t": { "Undo changes": { "v": [""] } } }, { "l": "be", "t": { "Undo changes": { "v": [""] } } }, { "l": "bg", "t": { "Undo changes": { "v": [""] } } }, { "l": "bn_BD", "t": { "Undo changes": { "v": [""] } } }, { "l": "br", "t": { "Undo changes": { "v": [""] } } }, { "l": "bs", "t": { "Undo changes": { "v": [""] } } }, { "l": "ca", "t": { "Undo changes": { "v": ["Desfés els canvis"] } } }, { "l": "cs", "t": { "Undo changes": { "v": ["Vzít změny zpět"] } } }, { "l": "cs_CZ", "t": { "Undo changes": { "v": ["Vzít změny zpět"] } } }, { "l": "cy_GB", "t": { "Undo changes": { "v": [""] } } }, { "l": "da", "t": { "Undo changes": { "v": ["Fortryd ændringer"] } } }, { "l": "de", "t": { "Undo changes": { "v": ["Änderungen rückgängig machen"] } } }, { "l": "de_DE", "t": { "Undo changes": { "v": ["Änderungen rückgängig machen"] } } }, { "l": "el", "t": { "Undo changes": { "v": ["Αναίρεση Αλλαγών"] } } }, { "l": "en_GB", "t": { "Undo changes": { "v": ["Undo changes"] } } }, { "l": "eo", "t": { "Undo changes": { "v": [""] } } }, { "l": "es", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_419", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_AR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CL", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CO", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_DO", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_EC", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_GT", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_HN", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_MX", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_NI", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PA", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PE", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PY", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_SV", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_UY", "t": { "Undo changes": { "v": [""] } } }, { "l": "et_EE", "t": { "Undo changes": { "v": [""] } } }, { "l": "eu", "t": { "Undo changes": { "v": ["Aldaketak desegin"] } } }, { "l": "fa", "t": { "Undo changes": { "v": [""] } } }, { "l": "fi", "t": { "Undo changes": { "v": ["Kumoa muutokset"] } } }, { "l": "fo", "t": { "Undo changes": { "v": [""] } } }, { "l": "fr", "t": { "Undo changes": { "v": ["Annuler les changements"] } } }, { "l": "gd", "t": { "Undo changes": { "v": [""] } } }, { "l": "gl", "t": { "Undo changes": { "v": ["Desfacer os cambios"] } } }, { "l": "he", "t": { "Undo changes": { "v": ["ביטול שינויים"] } } }, { "l": "hi_IN", "t": { "Undo changes": { "v": [""] } } }, { "l": "hr", "t": { "Undo changes": { "v": [""] } } }, { "l": "hsb", "t": { "Undo changes": { "v": [""] } } }, { "l": "hu", "t": { "Undo changes": { "v": ["Változtatások visszavonása"] } } }, { "l": "hy", "t": { "Undo changes": { "v": [""] } } }, { "l": "ia", "t": { "Undo changes": { "v": [""] } } }, { "l": "id", "t": { "Undo changes": { "v": ["Urungkan perubahan"] } } }, { "l": "ig", "t": { "Undo changes": { "v": [""] } } }, { "l": "is", "t": { "Undo changes": { "v": ["Afturkalla breytingar"] } } }, { "l": "it", "t": { "Undo changes": { "v": ["Cancella i cambiamenti"] } } }, { "l": "ja", "t": { "Undo changes": { "v": ["変更を取り消し"] } } }, { "l": "ka", "t": { "Undo changes": { "v": [""] } } }, { "l": "ka_GE", "t": { "Undo changes": { "v": [""] } } }, { "l": "kab", "t": { "Undo changes": { "v": [""] } } }, { "l": "kk", "t": { "Undo changes": { "v": [""] } } }, { "l": "km", "t": { "Undo changes": { "v": [""] } } }, { "l": "kn", "t": { "Undo changes": { "v": [""] } } }, { "l": "ko", "t": { "Undo changes": { "v": [""] } } }, { "l": "la", "t": { "Undo changes": { "v": [""] } } }, { "l": "lb", "t": { "Undo changes": { "v": [""] } } }, { "l": "lo", "t": { "Undo changes": { "v": [""] } } }, { "l": "lt_LT", "t": { "Undo changes": { "v": [""] } } }, { "l": "lv", "t": { "Undo changes": { "v": [""] } } }, { "l": "mk", "t": { "Undo changes": { "v": ["Врати ги промените"] } } }, { "l": "mn", "t": { "Undo changes": { "v": [""] } } }, { "l": "mr", "t": { "Undo changes": { "v": [""] } } }, { "l": "ms_MY", "t": { "Undo changes": { "v": [""] } } }, { "l": "my", "t": { "Undo changes": { "v": [""] } } }, { "l": "nb", "t": { "Undo changes": { "v": ["Tilbakestill endringer"] } } }, { "l": "ne", "t": { "Undo changes": { "v": [""] } } }, { "l": "nl", "t": { "Undo changes": { "v": ["Wijzigingen ongedaan maken"] } } }, { "l": "nn_NO", "t": { "Undo changes": { "v": [""] } } }, { "l": "oc", "t": { "Undo changes": { "v": [""] } } }, { "l": "pl", "t": { "Undo changes": { "v": ["Cofnij zmiany"] } } }, { "l": "ps", "t": { "Undo changes": { "v": [""] } } }, { "l": "pt_BR", "t": { "Undo changes": { "v": ["Desfazer modificações"] } } }, { "l": "pt_PT", "t": { "Undo changes": { "v": ["Anular alterações"] } } }, { "l": "ro", "t": { "Undo changes": { "v": ["Anularea modificărilor"] } } }, { "l": "ru", "t": { "Undo changes": { "v": ["Отменить изменения"] } } }, { "l": "sc", "t": { "Undo changes": { "v": [""] } } }, { "l": "si", "t": { "Undo changes": { "v": [""] } } }, { "l": "sk", "t": { "Undo changes": { "v": ["Vrátiť zmeny"] } } }, { "l": "sl", "t": { "Undo changes": { "v": ["Razveljavi spremembe"] } } }, { "l": "sq", "t": { "Undo changes": { "v": [""] } } }, { "l": "sr", "t": { "Undo changes": { "v": ["Поништи измене"] } } }, { "l": "sr@latin", "t": { "Undo changes": { "v": [""] } } }, { "l": "sv", "t": { "Undo changes": { "v": ["Ångra ändringar"] } } }, { "l": "sw", "t": { "Undo changes": { "v": [""] } } }, { "l": "ta", "t": { "Undo changes": { "v": [""] } } }, { "l": "th", "t": { "Undo changes": { "v": [""] } } }, { "l": "tk", "t": { "Undo changes": { "v": [""] } } }, { "l": "tr", "t": { "Undo changes": { "v": ["Değişiklikleri geri al"] } } }, { "l": "ug", "t": { "Undo changes": { "v": [""] } } }, { "l": "uk", "t": { "Undo changes": { "v": ["Скасувати зміни"] } } }, { "l": "ur_PK", "t": { "Undo changes": { "v": [""] } } }, { "l": "uz", "t": { "Undo changes": { "v": [""] } } }, { "l": "vi", "t": { "Undo changes": { "v": [""] } } }, { "l": "zh_CN", "t": { "Undo changes": { "v": ["撤销更改"] } } }, { "l": "zh_HK", "t": { "Undo changes": { "v": ["取消更改"] } } }, { "l": "zh_TW", "t": { "Undo changes": { "v": ["還原變更"] } } }, { "l": "zu_ZA", "t": { "Undo changes": { "v": [""] } } }];
const t42 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "User status: {status}": { "v": ["حالة المستخدِم: {status}"] } } }, { "l": "ast", "t": { "User status: {status}": { "v": ["Estáu del usuariu: {status}"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": {} }, { "l": "cs_CZ", "t": { "User status: {status}": { "v": ["Stav uživatele: {status}"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": {} }, { "l": "de", "t": { "User status: {status}": { "v": ["Benutzerstatus: {status}"] } } }, { "l": "de_DE", "t": { "User status: {status}": { "v": ["Benutzerstatus: {status}"] } } }, { "l": "el", "t": {} }, { "l": "en_GB", "t": { "User status: {status}": { "v": ["User status: {status}"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "User status: {status}": { "v": ["Estatus del usuario: {status}"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": {} }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": {} }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": {} }, { "l": "eu", "t": {} }, { "l": "fa", "t": {} }, { "l": "fi", "t": {} }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "User status: {status}": { "v": ["Statut de l'utilisateur : {status}"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "User status: {status}": { "v": ["Estado do usuario: {status}"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "User status: {status}": { "v": ["Status pengguna: {status}"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "User status: {status}": { "v": ["Staða notanda: {status}"] } } }, { "l": "it", "t": { "User status: {status}": { "v": ["Stato dell'utente: {status}"] } } }, { "l": "ja", "t": {} }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": {} }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": {} }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "User status: {status}": { "v": ["Gebruikers status: {status}"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "User status: {status}": { "v": ["Status użytkownika: {status}"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "User status: {status}": { "v": ["Status do usuário: {status}"] } } }, { "l": "pt_PT", "t": {} }, { "l": "ro", "t": { "User status: {status}": { "v": ["Status utilizator: {status}"] } } }, { "l": "ru", "t": { "User status: {status}": { "v": ["Статус пользователя: {status}"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": {} }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "User status: {status}": { "v": ["Статус корисника: {status}"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "User status: {status}": { "v": ["Användarstatus: {status}"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "User status: {status}": { "v": ["Kullanıcı durumu: {status}"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "User status: {status}": { "v": ["Статус користувача: {status}"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": {} }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": {} }, { "l": "zh_HK", "t": { "User status: {status}": { "v": ["用戶狀態：{status}"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];

//# sourceMappingURL=_l10n-Au_T0Ikx.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs":
/*!*************************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../nextcloud-vue/dist/chunks/actionGlobal-Tng9AMrk.mjs":
/*!**************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/actionGlobal-Tng9AMrk.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ActionGlobalMixin)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const ActionGlobalMixin = {
  beforeUpdate() {
    this.text = this.getText();
  },
  data() {
    return {
      // $slots are not reactive.
      // We need to update  the content manually
      text: this.getText()
    };
  },
  computed: {
    isLongText() {
      return this.text && this.text.trim().length > 20;
    }
  },
  methods: {
    getText() {
      return this.$scopedSlots.default ? this.$scopedSlots.default()?.[0].text.trim() : "";
    }
  }
};

//# sourceMappingURL=actionGlobal-Tng9AMrk.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/actionText-5BmUMmYJ.mjs":
/*!************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/actionText-5BmUMmYJ.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ActionTextMixin)
/* harmony export */ });
/* harmony import */ var _actionGlobal_Tng9AMrk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionGlobal-Tng9AMrk.mjs */ "../nextcloud-vue/dist/chunks/actionGlobal-Tng9AMrk.mjs");

/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
const GetParent = function(context, name) {
  let parent = context.$parent;
  while (parent) {
    if (parent.$options.name === name) {
      return parent;
    }
    parent = parent.$parent;
  }
};
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const ActionTextMixin = {
  mixins: [_actionGlobal_Tng9AMrk_mjs__WEBPACK_IMPORTED_MODULE_0__.A],
  props: {
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Whether we close the Actions menu after the click
     */
    closeAfterClick: {
      type: Boolean,
      default: false
    },
    /**
     * Aria label for the button. Not needed if the button has text.
     */
    ariaLabel: {
      type: String,
      default: null
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "click"
  ],
  computed: {
    /**
     * Check if icon prop is an URL
     * @return {boolean} Whether the icon prop is an URL
     */
    isIconUrl() {
      try {
        return !!new URL(this.icon, this.icon.startsWith("/") ? window.location.origin : void 0);
      } catch (error) {
        return false;
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
      if (this.closeAfterClick) {
        const parent = GetParent(this, "NcActions");
        if (parent && parent.closeMenu) {
          parent.closeMenu(false);
        }
      }
    }
  }
};

//# sourceMappingURL=actionText-5BmUMmYJ.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/focusTrap-Mgj6f-TI.mjs":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/focusTrap-Mgj6f-TI.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getTrapStack)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
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
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const getTrapStack = function() {
  Object.assign(window, { _nc_focus_trap: window._nc_focus_trap || [] });
  return window._nc_focus_trap;
};

//# sourceMappingURL=focusTrap-Mgj6f-TI.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/logger-NqlBlfJu.mjs":
/*!********************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/logger-NqlBlfJu.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "../nextcloud-vue/node_modules/@nextcloud/logger/dist/index.js");

/**
 * @copyright 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2021 Christoph Wurst <christoph@winzerhof-wurst.at>
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().detectUser().setApp("@nextcloud/vue").build();

//# sourceMappingURL=logger-NqlBlfJu.mjs.map


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
/******/ 			"settings-vue-settings-personal-webauthn": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-personal-webauth.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=f849040ffb2804d64e5b