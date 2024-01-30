"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nextcloud-vue_dist_Components_NcActionText_mjs-nextcloud-vue_dist_chunks_NcActionInput-Z-VZ4WYV_mjs"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionInput-WCqiV7c1.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionInput-WCqiV7c1.css ***!
  \*****************************************************************************************************/
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
.material-design-icon[data-v-f55526ee] {
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
/**
 * color-text-lighter		normal state
 * color-text-lighter		active state
 * color-text-maxcontrast 	disabled state
 */
/* Default global values */
button[data-v-f55526ee]:not(.button-vue),
input[data-v-f55526ee]:not([type=range]),
textarea[data-v-f55526ee] {
  margin: 0;
  padding: 7px 6px;
  cursor: text;
  color: var(--color-text-lighter);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--color-main-background);
  font-size: 13px;
  /* Primary action button, use sparingly */
}
button[data-v-f55526ee]:not(.button-vue):not(:disabled):not(.primary):hover, button[data-v-f55526ee]:not(.button-vue):not(:disabled):not(.primary):focus, button:not(.button-vue):not(:disabled):not(.primary).active[data-v-f55526ee],
input[data-v-f55526ee]:not([type=range]):not(:disabled):not(.primary):hover,
input[data-v-f55526ee]:not([type=range]):not(:disabled):not(.primary):focus,
input:not([type=range]):not(:disabled):not(.primary).active[data-v-f55526ee],
textarea[data-v-f55526ee]:not(:disabled):not(.primary):hover,
textarea[data-v-f55526ee]:not(:disabled):not(.primary):focus,
textarea:not(:disabled):not(.primary).active[data-v-f55526ee] {
  /* active class used for multiselect */
  border-color: var(--color-primary-element);
  outline: none;
}
button[data-v-f55526ee]:not(.button-vue):not(:disabled):not(.primary):active,
input[data-v-f55526ee]:not([type=range]):not(:disabled):not(.primary):active,
textarea[data-v-f55526ee]:not(:disabled):not(.primary):active {
  color: var(--color-text-light);
  outline: none;
  background-color: var(--color-main-background);
}
button[data-v-f55526ee]:not(.button-vue):disabled,
input[data-v-f55526ee]:not([type=range]):disabled,
textarea[data-v-f55526ee]:disabled {
  cursor: default;
  opacity: 0.5;
  color: var(--color-text-maxcontrast);
  background-color: var(--color-background-dark);
}
button[data-v-f55526ee]:not(.button-vue):required,
input[data-v-f55526ee]:not([type=range]):required,
textarea[data-v-f55526ee]:required {
  box-shadow: none;
}
button[data-v-f55526ee]:not(.button-vue):invalid,
input[data-v-f55526ee]:not([type=range]):invalid,
textarea[data-v-f55526ee]:invalid {
  border-color: var(--color-error);
  box-shadow: none !important;
}
button:not(.button-vue).primary[data-v-f55526ee],
input:not([type=range]).primary[data-v-f55526ee],
textarea.primary[data-v-f55526ee] {
  cursor: pointer;
  color: var(--color-primary-element-text);
  border-color: var(--color-primary-element);
  background-color: var(--color-primary-element);
}
button:not(.button-vue).primary[data-v-f55526ee]:not(:disabled):hover, button:not(.button-vue).primary[data-v-f55526ee]:not(:disabled):focus, button:not(.button-vue).primary[data-v-f55526ee]:not(:disabled):active,
input:not([type=range]).primary[data-v-f55526ee]:not(:disabled):hover,
input:not([type=range]).primary[data-v-f55526ee]:not(:disabled):focus,
input:not([type=range]).primary[data-v-f55526ee]:not(:disabled):active,
textarea.primary[data-v-f55526ee]:not(:disabled):hover,
textarea.primary[data-v-f55526ee]:not(:disabled):focus,
textarea.primary[data-v-f55526ee]:not(:disabled):active {
  border-color: var(--color-primary-element-light);
  background-color: var(--color-primary-element-light);
}
button:not(.button-vue).primary[data-v-f55526ee]:not(:disabled):active,
input:not([type=range]).primary[data-v-f55526ee]:not(:disabled):active,
textarea.primary[data-v-f55526ee]:not(:disabled):active {
  color: var(--color-primary-element-text-dark);
}
button:not(.button-vue).primary[data-v-f55526ee]:disabled,
input:not([type=range]).primary[data-v-f55526ee]:disabled,
textarea.primary[data-v-f55526ee]:disabled {
  cursor: default;
  color: var(--color-primary-element-text-dark);
  background-color: var(--color-primary-element);
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
li.action.active[data-v-f55526ee] {
  background-color: var(--color-background-hover);
  border-radius: 6px;
  padding: 0;
}
.action--disabled[data-v-f55526ee] {
  pointer-events: none;
  opacity: 0.5;
}
.action--disabled[data-v-f55526ee]:hover, .action--disabled[data-v-f55526ee]:focus {
  cursor: default;
  opacity: 0.5;
}
.action--disabled *[data-v-f55526ee] {
  opacity: 1 !important;
}
.action-input[data-v-f55526ee] {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  cursor: pointer;
  white-space: nowrap;
  color: var(--color-main-text);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  font-weight: normal;
}
.action-input__icon-wrapper[data-v-f55526ee] {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.action-input__icon-wrapper[data-v-f55526ee] .material-design-icon {
  width: 44px;
  height: 44px;
  opacity: 1;
}
.action-input__icon-wrapper[data-v-f55526ee] .material-design-icon .material-design-icon__svg {
  vertical-align: middle;
}
.action-input > span[data-v-f55526ee] {
  cursor: pointer;
  white-space: nowrap;
}
.action-input__icon[data-v-f55526ee] {
  min-width: 0; /* Overwrite icons*/
  min-height: 0;
  /* Keep padding to define the width to
  	assure correct position of a possible text */
  padding: 22px 0 22px 44px;
  background-position: 14px center;
  background-size: 16px;
}
.action-input__form[data-v-f55526ee] {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  margin: 4px 0;
  padding-right: 14px;
}
.action-input__container[data-v-f55526ee] {
  width: 100%;
}
.action-input__input-container[data-v-f55526ee] {
  display: flex;
}
.action-input__input-container .colorpicker__trigger[data-v-f55526ee], .action-input__input-container .colorpicker__preview[data-v-f55526ee] {
  width: 100%;
}
.action-input__input-container .colorpicker__preview[data-v-f55526ee] {
  width: 100%;
  height: 36px;
  border-radius: var(--border-radius-large);
  border: 2px solid var(--color-border-maxcontrast);
  box-shadow: none !important;
}
.action-input__text-label[data-v-f55526ee] {
  padding: 4px 0;
  display: block;
}
.action-input__text-label--hidden[data-v-f55526ee] {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.action-input__datetimepicker[data-v-f55526ee] {
  width: 100%;
}
.action-input__datetimepicker[data-v-f55526ee] .mx-input {
  margin: 0;
}
.action-input__multi[data-v-f55526ee] {
  width: 100%;
}
li:last-child > .action-input[data-v-f55526ee] {
  padding-bottom: 10px;
}
li:first-child > .action-input[data-v-f55526ee]:not(.action-input--visible-label) {
  padding-top: 10px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionText-nofPH8vP.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionText-nofPH8vP.css ***!
  \****************************************************************************************************/
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
.material-design-icon[data-v-34d9a49c] {
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
li.action.active[data-v-34d9a49c] {
  background-color: var(--color-background-hover);
  border-radius: 6px;
  padding: 0;
}
.action-text[data-v-34d9a49c] {
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
.action-text > span[data-v-34d9a49c] {
  cursor: pointer;
  white-space: nowrap;
}
.action-text__icon[data-v-34d9a49c] {
  width: 44px;
  height: 44px;
  opacity: 1;
  background-position: 14px center;
  background-size: 16px;
  background-repeat: no-repeat;
}
.action-text[data-v-34d9a49c] .material-design-icon {
  width: 44px;
  height: 44px;
  opacity: 1;
}
.action-text[data-v-34d9a49c] .material-design-icon .material-design-icon__svg {
  vertical-align: middle;
}
.action-text__longtext-wrapper[data-v-34d9a49c], .action-text__longtext[data-v-34d9a49c] {
  max-width: 220px;
  line-height: 1.6em;
  padding: 10.8px 0;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.action-text__longtext[data-v-34d9a49c] {
  cursor: pointer;
  white-space: pre-wrap !important;
}
.action-text__name[data-v-34d9a49c] {
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  display: inline-block;
}
.action-text__menu-icon[data-v-34d9a49c] {
  margin-left: auto;
  margin-right: -14px;
}
.action--disabled[data-v-34d9a49c] {
  pointer-events: none;
  opacity: 0.5;
}
.action--disabled[data-v-34d9a49c]:hover, .action--disabled[data-v-34d9a49c]:focus {
  cursor: default;
  opacity: 0.5;
}
.action--disabled *[data-v-34d9a49c] {
  opacity: 1 !important;
}
.action-text[data-v-34d9a49c],
.action-text span[data-v-34d9a49c] {
  cursor: default;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcDateTimePicker-4sy-xRbR.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcDateTimePicker-4sy-xRbR.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _server_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_server_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _server_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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
.mx-icon-left:before,
.mx-icon-right:before,
.mx-icon-double-left:before,
.mx-icon-double-right:before,
.mx-icon-double-left:after,
.mx-icon-double-right:after {
  content: "";
  position: relative;
  top: -1px;
  display: inline-block;
  width: 10px;
  height: 10px;
  vertical-align: middle;
  border-style: solid;
  border-color: currentColor;
  border-width: 2px 0 0 2px;
  border-radius: 1px;
  box-sizing: border-box;
  transform-origin: center;
  transform: rotate(-45deg) scale(0.7);
}
.mx-icon-double-left:after {
  left: -4px;
}
.mx-icon-double-right:before {
  left: 4px;
}
.mx-icon-right:before,
.mx-icon-double-right:before,
.mx-icon-double-right:after {
  transform: rotate(135deg) scale(0.7);
}
.mx-btn {
  box-sizing: border-box;
  line-height: 1;
  font-size: 14px;
  font-weight: 500;
  padding: 7px 15px;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #73879c;
  white-space: nowrap;
}
.mx-btn:hover {
  border-color: #1284e7;
  color: #1284e7;
}
.mx-btn:disabled, .mx-btn.disabled {
  color: #ccc;
  cursor: not-allowed;
}
.mx-btn-text {
  border: 0;
  padding: 0 4px;
  text-align: left;
  line-height: inherit;
}
.mx-scrollbar {
  height: 100%;
}
.mx-scrollbar:hover .mx-scrollbar-track {
  opacity: 1;
}
.mx-scrollbar-wrap {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.mx-scrollbar-track {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  z-index: 1;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.24s ease-out;
}
.mx-scrollbar-track .mx-scrollbar-thumb {
  position: absolute;
  width: 100%;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgba(144, 147, 153, 0.3);
  transition: background-color 0.3s;
}
.mx-zoom-in-down-enter-active,
.mx-zoom-in-down-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.mx-zoom-in-down-enter,
.mx-zoom-in-down-enter-from,
.mx-zoom-in-down-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
.mx-datepicker {
  position: relative;
  display: inline-block;
  width: 210px;
}
.mx-datepicker svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.mx-datepicker-range {
  width: 320px;
}
.mx-datepicker-inline {
  width: auto;
}
.mx-input-wrapper {
  position: relative;
}
.mx-input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding: 6px 30px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.mx-input:hover, .mx-input:focus {
  border-color: #409aff;
}
.mx-input:disabled, .mx-input.disabled {
  color: #ccc;
  background-color: #f3f3f3;
  border-color: #ccc;
  cursor: not-allowed;
}
.mx-input:focus {
  outline: none;
}
.mx-input::-ms-clear {
  display: none;
}
.mx-icon-calendar,
.mx-icon-clear {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  vertical-align: middle;
}
.mx-icon-clear {
  cursor: pointer;
}
.mx-icon-clear:hover {
  color: rgba(0, 0, 0, 0.8);
}
.mx-datepicker-main {
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", sans-serif;
  color: #73879c;
  background-color: #fff;
  border: 1px solid #e8e8e8;
}
.mx-datepicker-popup {
  position: absolute;
  margin-top: 1px;
  margin-bottom: 1px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  z-index: 2001;
}
.mx-datepicker-sidebar {
  float: left;
  box-sizing: border-box;
  width: 100px;
  padding: 6px;
  overflow: auto;
}
.mx-datepicker-sidebar + .mx-datepicker-content {
  margin-left: 100px;
  border-left: 1px solid #e8e8e8;
}
.mx-datepicker-body {
  position: relative;
  user-select: none;
}
.mx-btn-shortcut {
  display: block;
  padding: 0 6px;
  line-height: 24px;
}
.mx-range-wrapper {
  display: flex;
}
@media (max-width: 750px) {
  .mx-range-wrapper {
    flex-direction: column;
  }
}
.mx-datepicker-header {
  padding: 6px 8px;
  border-bottom: 1px solid #e8e8e8;
}
.mx-datepicker-footer {
  padding: 6px 8px;
  text-align: right;
  border-top: 1px solid #e8e8e8;
}
.mx-calendar {
  box-sizing: border-box;
  width: 248px;
  padding: 6px 12px;
}
.mx-calendar + .mx-calendar {
  border-left: 1px solid #e8e8e8;
}
.mx-calendar-header, .mx-time-header {
  box-sizing: border-box;
  height: 34px;
  line-height: 34px;
  text-align: center;
  overflow: hidden;
}
.mx-btn-icon-left,
.mx-btn-icon-double-left {
  float: left;
}
.mx-btn-icon-right,
.mx-btn-icon-double-right {
  float: right;
}
.mx-calendar-header-label {
  font-size: 14px;
}
.mx-calendar-decade-separator {
  margin: 0 2px;
}
.mx-calendar-decade-separator:after {
  content: "~";
}
.mx-calendar-content {
  position: relative;
  height: 224px;
  box-sizing: border-box;
}
.mx-calendar-content .cell {
  cursor: pointer;
}
.mx-calendar-content .cell:hover {
  color: #73879c;
  background-color: #f3f9fe;
}
.mx-calendar-content .cell.active {
  color: #fff;
  background-color: #1284e7;
}
.mx-calendar-content .cell.in-range, .mx-calendar-content .cell.hover-in-range {
  color: #73879c;
  background-color: #dbedfb;
}
.mx-calendar-content .cell.disabled {
  cursor: not-allowed;
  color: #ccc;
  background-color: #f3f3f3;
}
.mx-calendar-week-mode .mx-date-row {
  cursor: pointer;
}
.mx-calendar-week-mode .mx-date-row:hover {
  background-color: #f3f9fe;
}
.mx-calendar-week-mode .mx-date-row.mx-active-week {
  background-color: #dbedfb;
}
.mx-calendar-week-mode .mx-date-row .cell:hover {
  color: inherit;
  background-color: transparent;
}
.mx-calendar-week-mode .mx-date-row .cell.active {
  color: inherit;
  background-color: transparent;
}
.mx-week-number {
  opacity: 0.5;
}
.mx-table {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
}
.mx-table th {
  padding: 0;
  font-weight: 500;
  vertical-align: middle;
}
.mx-table td {
  padding: 0;
  vertical-align: middle;
}
.mx-table-date td,
.mx-table-date th {
  height: 32px;
  font-size: 12px;
}
.mx-table-date .today {
  color: #2a90e9;
}
.mx-table-date .cell.not-current-month {
  color: #ccc;
  background: none;
}
.mx-time {
  flex: 1;
  width: 224px;
  background: #fff;
}
.mx-time + .mx-time {
  border-left: 1px solid #e8e8e8;
}
.mx-calendar-time {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mx-time-header {
  border-bottom: 1px solid #e8e8e8;
}
.mx-time-content {
  height: 224px;
  box-sizing: border-box;
  overflow: hidden;
}
.mx-time-columns {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mx-time-column {
  flex: 1;
  position: relative;
  border-left: 1px solid #e8e8e8;
  text-align: center;
}
.mx-time-column:first-child {
  border-left: 0;
}
.mx-time-column .mx-time-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.mx-time-column .mx-time-list::after {
  content: "";
  display: block;
  height: 192px;
}
.mx-time-column .mx-time-item {
  cursor: pointer;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
}
.mx-time-column .mx-time-item:hover {
  color: #73879c;
  background-color: #f3f9fe;
}
.mx-time-column .mx-time-item.active {
  color: #1284e7;
  background-color: transparent;
  font-weight: 700;
}
.mx-time-column .mx-time-item.disabled {
  cursor: not-allowed;
  color: #ccc;
  background-color: #f3f3f3;
}
.mx-time-option {
  cursor: pointer;
  padding: 8px 10px;
  font-size: 14px;
  line-height: 20px;
}
.mx-time-option:hover {
  color: #73879c;
  background-color: #f3f9fe;
}
.mx-time-option.active {
  color: #1284e7;
  background-color: transparent;
  font-weight: 700;
}
.mx-time-option.disabled {
  cursor: not-allowed;
  color: #ccc;
  background-color: #f3f3f3;
}
.mx-datepicker[data-v-d0ee684] {
  user-select: none;
  color: var(--color-main-text);
  /* INPUT CONTAINER */
}
.mx-datepicker[data-v-d0ee684] svg {
  fill: var(--color-main-text);
}
.mx-datepicker[data-v-d0ee684] .mx-input-wrapper .mx-input {
  width: 100%;
  border: 2px solid var(--color-border-maxcontrast);
  background-color: var(--color-main-background);
  background-clip: content-box;
}
.mx-datepicker[data-v-d0ee684] .mx-input-wrapper .mx-input:active:not(.disabled), .mx-datepicker[data-v-d0ee684] .mx-input-wrapper .mx-input:hover:not(.disabled), .mx-datepicker[data-v-d0ee684] .mx-input-wrapper .mx-input:focus:not(.disabled) {
  border-color: var(--color-primary-element);
}
.mx-datepicker[data-v-d0ee684] .mx-input-wrapper:disabled, .mx-datepicker[data-v-d0ee684] .mx-input-wrapper.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
.mx-datepicker[data-v-d0ee684] .mx-input-wrapper .mx-icon-calendar,
.mx-datepicker[data-v-d0ee684] .mx-input-wrapper .mx-icon-clear {
  color: var(--color-text-lighter);
}
.mx-datepicker-main {
  color: var(--color-main-text);
  border: 1px solid var(--color-border);
  background-color: var(--color-main-background);
  font-family: var(--font-face) !important;
  line-height: 1.5;
}
.mx-datepicker-main svg {
  fill: var(--color-main-text);
}
.mx-datepicker-main.mx-datepicker-popup {
  z-index: 2000;
  box-shadow: none;
}
.mx-datepicker-main.mx-datepicker-popup .mx-datepicker-sidebar + .mx-datepicker-content {
  border-left: 1px solid var(--color-border);
}
.mx-datepicker-main.show-week-number .mx-calendar {
  width: 296px;
}
.mx-datepicker-main .mx-datepicker-header {
  border-bottom: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-datepicker-footer {
  border-top: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-datepicker-btn-confirm {
  background-color: var(--color-primary-element);
  border-color: var(--color-primary-element);
  color: var(--color-primary-element-text) !important;
  opacity: 1 !important;
}
.mx-datepicker-main .mx-datepicker-btn-confirm:hover {
  background-color: var(--color-primary-element-light) !important;
  border-color: var(--color-primary-element-light) !important;
}
.mx-datepicker-main .mx-calendar {
  width: 264px;
  padding: 5px;
}
.mx-datepicker-main .mx-calendar.mx-calendar-week-mode {
  width: 296px;
}
.mx-datepicker-main .mx-time + .mx-time,
.mx-datepicker-main .mx-calendar + .mx-calendar {
  border-left: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-range-wrapper {
  display: flex;
  overflow: hidden;
}
.mx-datepicker-main .mx-range-wrapper .mx-calendar-content .mx-table-date .cell.active {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}
.mx-datepicker-main .mx-range-wrapper .mx-calendar-content .mx-table-date .cell.in-range + .cell.active {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}
.mx-datepicker-main .mx-table {
  text-align: center;
}
.mx-datepicker-main .mx-table thead > tr > th {
  text-align: center;
  opacity: 0.5;
  color: var(--color-text-lighter);
}
.mx-datepicker-main .mx-table tr:focus,
.mx-datepicker-main .mx-table tr:hover,
.mx-datepicker-main .mx-table tr:active {
  background-color: transparent;
}
.mx-datepicker-main .mx-table .cell {
  transition: all 100ms ease-in-out;
  text-align: center;
  opacity: 0.7;
  border-radius: 50px;
}
.mx-datepicker-main .mx-table .cell > * {
  cursor: pointer;
}
.mx-datepicker-main .mx-table .cell.today {
  opacity: 1;
  color: var(--color-primary-element);
  font-weight: bold;
}
.mx-datepicker-main .mx-table .cell.today:hover, .mx-datepicker-main .mx-table .cell.today:focus {
  color: var(--color-primary-element-text);
}
.mx-datepicker-main .mx-table .cell.in-range, .mx-datepicker-main .mx-table .cell.disabled {
  border-radius: 0;
  font-weight: normal;
}
.mx-datepicker-main .mx-table .cell.in-range {
  opacity: 0.7;
}
.mx-datepicker-main .mx-table .cell.not-current-month {
  opacity: 0.5;
  color: var(--color-text-lighter);
}
.mx-datepicker-main .mx-table .cell.not-current-month:hover, .mx-datepicker-main .mx-table .cell.not-current-month:focus {
  opacity: 1;
}
.mx-datepicker-main .mx-table .cell:hover, .mx-datepicker-main .mx-table .cell:focus, .mx-datepicker-main .mx-table .cell.actived, .mx-datepicker-main .mx-table .cell.active, .mx-datepicker-main .mx-table .cell.in-range {
  opacity: 1;
  color: var(--color-primary-element-text);
  background-color: var(--color-primary-element);
  font-weight: bold;
}
.mx-datepicker-main .mx-table .cell.disabled {
  opacity: 0.5;
  color: var(--color-text-lighter);
  border-radius: 0;
  background-color: var(--color-background-darker);
}
.mx-datepicker-main .mx-table .mx-week-number {
  text-align: center;
  opacity: 0.7;
  border-radius: 50px;
}
.mx-datepicker-main .mx-table span.mx-week-number,
.mx-datepicker-main .mx-table li.mx-week-number,
.mx-datepicker-main .mx-table span.cell,
.mx-datepicker-main .mx-table li.cell {
  min-height: 32px;
}
.mx-datepicker-main .mx-table.mx-table-date thead, .mx-datepicker-main .mx-table.mx-table-date tbody, .mx-datepicker-main .mx-table.mx-table-year, .mx-datepicker-main .mx-table.mx-table-month {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.mx-datepicker-main .mx-table.mx-table-date thead tr, .mx-datepicker-main .mx-table.mx-table-date tbody tr, .mx-datepicker-main .mx-table.mx-table-year tr, .mx-datepicker-main .mx-table.mx-table-month tr {
  display: inline-flex;
  align-items: center;
  flex: 1 1 32px;
  justify-content: space-around;
  min-height: 32px;
}
.mx-datepicker-main .mx-table.mx-table-date thead th,
.mx-datepicker-main .mx-table.mx-table-date thead td, .mx-datepicker-main .mx-table.mx-table-date tbody th,
.mx-datepicker-main .mx-table.mx-table-date tbody td, .mx-datepicker-main .mx-table.mx-table-year th,
.mx-datepicker-main .mx-table.mx-table-year td, .mx-datepicker-main .mx-table.mx-table-month th,
.mx-datepicker-main .mx-table.mx-table-month td {
  display: flex;
  align-items: center;
  flex: 0 1 32%;
  justify-content: center;
  min-width: 32px;
  height: 95%;
  min-height: 32px;
  transition: background 100ms ease-in-out;
}
.mx-datepicker-main .mx-table.mx-table-year tr th,
.mx-datepicker-main .mx-table.mx-table-year tr td {
  flex-basis: 48%;
}
.mx-datepicker-main .mx-table.mx-table-date tr th,
.mx-datepicker-main .mx-table.mx-table-date tr td {
  flex-basis: 32px;
}
.mx-datepicker-main .mx-btn {
  min-width: 32px;
  height: 32px;
  margin: 0 2px !important;
  padding: 7px 10px;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.5;
  color: var(--color-text-lighter);
  border-radius: 32px;
  line-height: 20px;
}
.mx-datepicker-main .mx-btn:hover, .mx-datepicker-main .mx-btn:focus {
  opacity: 1;
  color: var(--color-main-text);
  background-color: var(--color-background-darker);
}
.mx-datepicker-main .mx-calendar-header, .mx-datepicker-main .mx-time-header {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  margin-bottom: 4px;
}
.mx-datepicker-main .mx-calendar-header button, .mx-datepicker-main .mx-time-header button {
  min-width: 32px;
  min-height: 32px;
  margin: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  opacity: 0.7;
  color: var(--color-main-text);
  border-radius: 32px;
  line-height: 20px;
}
.mx-datepicker-main .mx-calendar-header button:hover, .mx-datepicker-main .mx-time-header button:hover, .mx-datepicker-main .mx-calendar-header button:focus, .mx-datepicker-main .mx-time-header button:focus {
  opacity: 1;
  color: var(--color-main-text);
  background-color: var(--color-background-darker);
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right {
  align-items: center;
  justify-content: center;
  width: 32px;
  padding: 0;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left > i, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left > i, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right > i, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right > i, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right > i {
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  filter: var(--background-invert-if-dark);
  display: inline-block;
  width: 32px;
  height: 32px;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left > i::before, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left > i::before, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right > i::before, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right > i::after, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right > i::after, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right > i::before, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right > i::before {
  content: none;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-text, .mx-datepicker-main .mx-time-header button.mx-btn-text {
  line-height: initial;
}
.mx-datepicker-main .mx-calendar-header .mx-calendar-header-label, .mx-datepicker-main .mx-time-header .mx-calendar-header-label {
  display: flex;
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-double-left > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-double-left > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-left > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-left > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-right > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-right > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.mx-datepicker-main .mx-calendar-header .mx-btn-icon-double-right > i, .mx-datepicker-main .mx-time-header .mx-btn-icon-double-right > i {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right {
  order: 2;
}
.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right {
  order: 3;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row .mx-week-number {
  font-weight: bold;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week {
  opacity: 1;
  border-radius: 50px;
  background-color: var(--color-background-dark);
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td {
  background-color: transparent;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td:hover, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row:hover td:focus, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td:hover, .mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td:focus {
  color: inherit;
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week {
  color: var(--color-primary-element-text);
  background-color: var(--color-primary-element);
}
.mx-datepicker-main .mx-calendar-week-mode .mx-date-row.mx-active-week td {
  opacity: 0.7;
  font-weight: normal;
}
.mx-datepicker-main .mx-time {
  background-color: var(--color-main-background);
}
.mx-datepicker-main .mx-time .mx-time-header {
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-time .mx-time-column {
  border-left: 1px solid var(--color-border);
}
.mx-datepicker-main .mx-time .mx-time-option.active, .mx-datepicker-main .mx-time .mx-time-option:hover,
.mx-datepicker-main .mx-time .mx-time-item.active,
.mx-datepicker-main .mx-time .mx-time-item:hover {
  color: var(--color-primary-element-text);
  background-color: var(--color-primary-element);
}
.mx-datepicker-main .mx-time .mx-time-option.disabled,
.mx-datepicker-main .mx-time .mx-time-item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  color: var(--color-main-text);
  background-color: var(--color-main-background);
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
.material-design-icon[data-v-e1e1644e] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.mx-datepicker[data-v-e1e1644e] .mx-input-wrapper .mx-input {
  background-clip: border-box;
}
.datetime-picker-inline-icon[data-v-e1e1644e] {
  opacity: 0.3;
  border: none;
  background-color: transparent;
  border-radius: 0;
  padding: 0 !important;
  margin: 0;
}
.datetime-picker-inline-icon--highlighted[data-v-e1e1644e] {
  opacity: 0.7;
}
.datetime-picker-inline-icon[data-v-e1e1644e]:focus, .datetime-picker-inline-icon[data-v-e1e1644e]:hover {
  opacity: 1;
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
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper {
  border-radius: var(--border-radius-large);
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner {
  padding: 4px;
  border-radius: var(--border-radius-large);
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__label {
  padding: 4px 0;
  padding-left: 14px;
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__timezone-select.v-select .vs__dropdown-toggle {
  border-radius: calc(var(--border-radius-large) - 4px);
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__timezone-select.v-select.vs--open .vs__dropdown-toggle {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.v-popper--theme-dropdown.v-popper__popper.timezone-select__popper .v-popper__wrapper .v-popper__inner .timezone-popover-wrapper__timezone-select.v-select.vs--open.select--drop-up .vs__dropdown-toggle {
  border-radius: 0 0 calc(var(--border-radius-large) - 4px) calc(var(--border-radius-large) - 4px);
}
.vs__dropdown-menu--floating {
  z-index: 100001;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcDateTimePickerNative-TxgsjO-i.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcDateTimePickerNative-TxgsjO-i.css ***!
  \**************************************************************************************************************/
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
.material-design-icon[data-v-992a6e31] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.native-datetime-picker[data-v-992a6e31] {
  display: flex;
  flex-direction: column;
}
.native-datetime-picker .native-datetime-picker--input[data-v-992a6e31] {
  width: 100%;
  flex: 0 0 auto;
  padding-right: 4px;
}
[data-theme-light] .native-datetime-picker--input[data-v-992a6e31],
[data-themes*=light] .native-datetime-picker--input[data-v-992a6e31] {
  color-scheme: light;
}
[data-theme-dark] .native-datetime-picker--input[data-v-992a6e31],
[data-themes*=dark] .native-datetime-picker--input[data-v-992a6e31] {
  color-scheme: dark;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcActionInput-WCqiV7c1.css":
/*!***************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcActionInput-WCqiV7c1.css ***!
  \***************************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcActionInput_WCqiV7c1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcActionInput-WCqiV7c1.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionInput-WCqiV7c1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcActionInput_WCqiV7c1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcActionInput_WCqiV7c1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcActionInput_WCqiV7c1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcActionInput_WCqiV7c1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcActionText-nofPH8vP.css":
/*!**************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcActionText-nofPH8vP.css ***!
  \**************************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcActionText_nofPH8vP_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcActionText-nofPH8vP.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcActionText-nofPH8vP.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcActionText_nofPH8vP_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcActionText_nofPH8vP_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcActionText_nofPH8vP_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcActionText_nofPH8vP_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcDateTimePicker-4sy-xRbR.css":
/*!******************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcDateTimePicker-4sy-xRbR.css ***!
  \******************************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_4sy_xRbR_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcDateTimePicker-4sy-xRbR.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcDateTimePicker-4sy-xRbR.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_4sy_xRbR_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_4sy_xRbR_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_4sy_xRbR_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcDateTimePicker_4sy_xRbR_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcDateTimePickerNative-TxgsjO-i.css":
/*!************************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcDateTimePickerNative-TxgsjO-i.css ***!
  \************************************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcDateTimePickerNative_TxgsjO_i_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcDateTimePickerNative-TxgsjO-i.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcDateTimePickerNative-TxgsjO-i.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcDateTimePickerNative_TxgsjO_i_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcDateTimePickerNative_TxgsjO_i_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcDateTimePickerNative_TxgsjO_i_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcDateTimePickerNative_TxgsjO_i_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcActionText.mjs":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcActionText.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcActionText)
/* harmony export */ });
/* harmony import */ var _assets_NcActionText_nofPH8vP_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionText-nofPH8vP.css */ "../nextcloud-vue/dist/assets/NcActionText-nofPH8vP.css");
/* harmony import */ var _chunks_actionText_5BmUMmYJ_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/actionText-5BmUMmYJ.mjs */ "../nextcloud-vue/dist/chunks/actionText-5BmUMmYJ.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");



const _sfc_main = {
  name: "NcActionText",
  mixins: [_chunks_actionText_5BmUMmYJ_mjs__WEBPACK_IMPORTED_MODULE_1__.A],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("span", { staticClass: "action-text", on: { "click": _vm.onClick } }, [_vm._t("icon", function() {
    return [_vm.icon !== "" ? _c("span", { staticClass: "action-text__icon", class: [_vm.isIconUrl ? "action-text__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } }) : _vm._e()];
  }), _vm.name ? _c("span", { staticClass: "action-text__longtext-wrapper" }, [_c("strong", { staticClass: "action-text__name" }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _c("br"), _c("span", { staticClass: "action-text__longtext", domProps: { "textContent": _vm._s(_vm.text) } })]) : _vm.isLongText ? _c("span", { staticClass: "action-text__longtext", domProps: { "textContent": _vm._s(_vm.text) } }) : _c("span", { staticClass: "action-text__text" }, [_vm._v(_vm._s(_vm.text))]), _vm._e()], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "34d9a49c",
  null,
  null
);
const NcActionText = __component__.exports;

//# sourceMappingURL=NcActionText.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcDateTimePicker.mjs":
/*!*************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcDateTimePicker.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcDateTimePicker)
/* harmony export */ });
/* harmony import */ var _assets_NcDateTimePicker_4sy_xRbR_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcDateTimePicker-4sy-xRbR.css */ "../nextcloud-vue/dist/assets/NcDateTimePicker-4sy-xRbR.css");
/* harmony import */ var _chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _chunks_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _chunks_NcTimezonePicker_0reZFtNA_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/NcTimezonePicker-0reZFtNA.mjs */ "../nextcloud-vue/dist/chunks/NcTimezonePicker-0reZFtNA.mjs");
/* harmony import */ var _chunks_NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/NcPopover-bHEdiq4K.mjs */ "../nextcloud-vue/dist/chunks/NcPopover-bHEdiq4K.mjs");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/l10n */ "../nextcloud-vue/node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-datepicker */ "../nextcloud-vue/node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _chunks_ScopeComponent_f6Z_CQtX_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chunks/ScopeComponent-f6Z-CQtX.mjs */ "../nextcloud-vue/dist/chunks/ScopeComponent-f6Z-CQtX.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");









(0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.H);
const _sfc_main$2 = {
  name: "CalendarBlankIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon calendar-blank-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null,
  null,
  null
);
const CalendarBlank = __component__$2.exports;
const _sfc_main$1 = {
  name: "WebIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon web-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const Web = __component__$1.exports;
const formatMap = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD H:mm:ss",
  year: "YYYY",
  month: "YYYY-MM",
  time: "H:mm:ss",
  week: "w"
};
const _sfc_main = {
  name: "NcDateTimePicker",
  components: {
    CalendarBlank,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcPopover: _chunks_NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_4__.N,
    NcTimezonePicker: _chunks_NcTimezonePicker_0reZFtNA_mjs__WEBPACK_IMPORTED_MODULE_3__.N,
    Web
  },
  inheritAttrs: false,
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 10
    },
    type: {
      type: String,
      default: "date"
    },
    format: {
      type: String,
      default: null
    },
    formatter: {
      type: Object,
      default: null
    },
    lang: {
      type: Object,
      default: null
    },
    /**
     * The value to initialize, but also two-way bind the selected date. The date is – like the `Date` object in
     * JavaScript – tied to UTC. The selected time zone does not have an influence of the selected time and date
     * value. You have to translate the time yourself when you want to factor in time zones.
     */
    // eslint-disable-next-line
    value: {
      default: () => /* @__PURE__ */ new Date()
    },
    /**
     * The preselected IANA time zone ID for the time zone picker, only relevant in combination with `:show-timezone-select="true"`. Example: `Europe/Berlin`. The prop supports two-way binding through the .sync modifier.
     */
    timezoneId: {
      type: String,
      default: "UTC"
    },
    showTimezoneSelect: {
      type: Boolean,
      default: false
    },
    highlightTimezone: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: [
    "update:value",
    "update:timezone-id"
  ],
  setup() {
    return {
      timezoneDialogHeaderId: `timezone-dialog-header-${(0,_chunks_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_2__.G)()}`
    };
  },
  data() {
    return {
      showTimezonePopover: false,
      tzVal: this.timezoneId
    };
  },
  computed: {
    /**
     * Datepicker language
     * https://github.com/mengxiong10/vue2-datepicker/blob/master/locale.md
     *
     * @return {object}
     */
    defaultLang() {
      return {
        formatLocale: {
          months: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getMonthNames)(),
          monthsShort: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getMonthNamesShort)(),
          weekdays: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getDayNames)(),
          weekdaysShort: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getDayNamesShort)(),
          weekdaysMin: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getDayNamesMin)(),
          // 0 = sunday, 1 = monday
          firstDayOfWeek: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_6__.getFirstDay)()
        },
        monthFormat: "MMM"
      };
    },
    /**
     * Translated placeholder
     *
     * @return {string}
     */
    defaultPlaceholder() {
      if (this.type === "time") {
        return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a time");
      }
      if (this.type === "month") {
        return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a month");
      }
      if (this.type === "year") {
        return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a year");
      }
      if (this.type === "week") {
        return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a week");
      }
      if (this.type === "date") {
        return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a date");
      }
      return (0,_chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a)("Pick a date and a time");
    },
    /**
     * If format is not provided, try to match the type
     * or fallback to 'date'
     *
     * @return {string}
     */
    formatTypeMap() {
      return formatMap[this.type] ?? formatMap.date;
    },
    /**
     * The formatter used for the vue-datepicker to fix nextcloud-libraries/nextcloud-vue#5044
     */
    internalFormatter() {
      const getWeek = (date) => {
        const firstThursday = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        firstThursday.setUTCDate(firstThursday.getUTCDate() + 4 - (firstThursday.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(firstThursday.getUTCFullYear(), 0, 1));
        return Math.ceil(((firstThursday - yearStart) / 864e5 + 1) / 7);
      };
      return {
        getWeek,
        // allow to override it by users using the `formatter` prop
        ...this.formatter ?? {}
      };
    }
  },
  methods: {
    t: _chunks_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.a,
    handleSelectYear(year) {
      const value = this.$refs.datepicker.currentValue;
      if (value) {
        try {
          const date = new Date(new Date(value).setFullYear(year));
          this.$refs.datepicker.selectDate(date);
        } catch (error) {
          console.error("Invalid value", value, year);
        }
      }
    },
    handleSelectMonth(month) {
      const value = this.$refs.datepicker.currentValue;
      if (value) {
        try {
          const date = new Date(new Date(value).setMonth(month));
          this.$refs.datepicker.selectDate(date);
        } catch (error) {
          console.error("Invalid value", value, month);
        }
      }
    },
    /**
     * Toggles the visibility of the time zone popover
     */
    toggleTimezonePopover() {
      if (!this.showTimezoneSelect) {
        return;
      }
      this.showTimezonePopover = !this.showTimezonePopover;
    }
  }
};
var _sfc_render = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("DatePicker", _vm._g(_vm._b({ ref: "datepicker", attrs: { "append-to-body": _vm.appendToBody, "clearable": _vm.clearable, "format": _vm.format ? _vm.format : _vm.formatTypeMap, "formatter": _vm.internalFormatter, "lang": _vm.lang ? _vm.lang : _vm.defaultLang, "minute-step": _vm.minuteStep, "placeholder": _vm.placeholder ? _vm.placeholder : _vm.defaultPlaceholder, "popup-class": { "show-week-number": _vm.showWeekNumber }, "show-week-number": _vm.showWeekNumber, "type": _vm.type, "value": _vm.value }, on: { "select-year": _vm.handleSelectYear, "select-month": _vm.handleSelectMonth, "update:value": function($event) {
    return _vm.$emit("update:value", _vm.value);
  } }, scopedSlots: _vm._u([{ key: "icon-calendar", fn: function() {
    return [_vm.showTimezoneSelect ? _c("NcPopover", { attrs: { "popup-role": "dialog", "shown": _vm.showTimezonePopover, "popover-base-class": "timezone-select__popper" }, on: { "update:shown": function($event) {
      _vm.showTimezonePopover = $event;
    } }, scopedSlots: _vm._u([{ key: "trigger", fn: function({ attrs }) {
      return [_c("button", _vm._b({ staticClass: "datetime-picker-inline-icon", class: { "datetime-picker-inline-icon--highlighted": _vm.highlightTimezone }, on: { "mousedown": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return (() => {
        }).apply(null, arguments);
      } } }, "button", attrs, false), [_c("Web", { attrs: { "size": 20 } })], 1)];
    } }], null, false, 270852355) }, [_c("div", { attrs: { "role": "dialog", "aria-labelledby": _vm.timezoneDialogHeaderId } }, [_c("div", { staticClass: "timezone-popover-wrapper__label" }, [_c("strong", { attrs: { "id": _vm.timezoneDialogHeaderId } }, [_vm._v(" " + _vm._s(_vm.t("Please select a time zone:")) + " ")])]), _c("NcTimezonePicker", { staticClass: "timezone-popover-wrapper__timezone-select", on: { "input": function($event) {
      return _vm.$emit("update:timezone-id", arguments[0]);
    } }, model: { value: _vm.tzVal, callback: function($$v) {
      _vm.tzVal = $$v;
    }, expression: "tzVal" } })], 1)]) : _c("CalendarBlank", { attrs: { "size": 20 } })];
  }, proxy: true }, _vm._l(_vm.$scopedSlots, function(_, slot) {
    return { key: slot, fn: function(scope) {
      return [_vm._t(slot, null, null, scope)];
    } };
  })], null, true) }, "DatePicker", _vm.$attrs, false), _vm.$listeners));
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "e1e1644e",
  null,
  null
);
const NcDateTimePicker = __component__.exports;
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
(0,_chunks_ScopeComponent_f6Z_CQtX_mjs__WEBPACK_IMPORTED_MODULE_8__.S)(NcDateTimePicker);

//# sourceMappingURL=NcDateTimePicker.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcDateTimePickerNative.mjs":
/*!*******************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcDateTimePickerNative.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NcDateTimePickerNative)
/* harmony export */ });
/* harmony import */ var _assets_NcDateTimePickerNative_TxgsjO_i_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcDateTimePickerNative-TxgsjO-i.css */ "../nextcloud-vue/dist/assets/NcDateTimePickerNative-TxgsjO-i.css");
/* harmony import */ var _chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _chunks_ScopeComponent_f6Z_CQtX_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/ScopeComponent-f6Z-CQtX.mjs */ "../nextcloud-vue/dist/chunks/ScopeComponent-f6Z-CQtX.mjs");



const inputDateTypes = ["date", "datetime-local", "month", "time", "week"];
const _sfc_main = {
  name: "NcDateTimePickerNative",
  inheritAttrs: false,
  props: {
    /**
     * The date is – like the `Date` object in JavaScript – tied to UTC.
     * The selected time zone does not have an influence of the selected time and date value.
     * You have to translate the time yourself when you want to factor in time zones.
     * Pass null to clear the input field.
     */
    value: {
      type: Date,
      default: null
    },
    /**
     * id attribute of the input field
     */
    id: {
      type: String,
      required: true
    },
    /**
     * type attribute of the input field
     * default type: String
     * The type of the input element, it can be `date`, `datetime-local`, `month`, `time`, `week`
     */
    type: {
      type: String,
      default: "date",
      validate: (name) => inputDateTypes.includes(name)
    },
    /**
     * text inside the label element
     * default type: String
     */
    label: {
      type: String,
      default: "Please choose a date"
    },
    /**
     * min attribute of the input field
     * default type: null
     */
    min: {
      type: [Date, Boolean],
      default: null
    },
    /**
     * max attribute of the input field
     * default type: null
     */
    max: {
      type: [Date, Boolean],
      default: null
    },
    /**
     * Flag to hide the label
     * default type: String
     * The hidden input label for accessibility purposes.
     */
    hideLabel: {
      type: Boolean,
      default: false
    },
    /**
     * Class to add to the input field.
     * Necessary to use NcDateTimePickerNative in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    }
  },
  emits: [
    "input"
  ],
  computed: {
    formattedValue() {
      return this.formatValue(this.value);
    },
    formattedMin() {
      if (this.min) {
        return this.formatValue(this.min);
      }
      return false;
    },
    formattedMax() {
      if (this.max) {
        return this.formatValue(this.max);
      }
      return false;
    },
    listeners() {
      return {
        ...this.$listeners,
        /**
         * Handle the input event
         *
         * @param {InputEvent} $event input event payload
         * @return {Date|string} new chosen Date() or an empty string
         */
        input: ($event) => {
          if (isNaN($event.target.valueAsNumber)) {
            return this.$emit("input", null);
          }
          if (this.type === "time") {
            const time = $event.target.value;
            if (this.value === "") {
              const { yyyy: yyyy2, MM: MM2, dd: dd2 } = this.getReadableDate(/* @__PURE__ */ new Date());
              return this.$emit("input", /* @__PURE__ */ new Date(`${yyyy2}-${MM2}-${dd2}T${time}`));
            }
            const { yyyy, MM, dd } = this.getReadableDate(this.value);
            return this.$emit("input", /* @__PURE__ */ new Date(`${yyyy}-${MM}-${dd}T${time}`));
          } else if (this.type === "month") {
            const MM = (new Date($event.target.value).getMonth() + 1).toString().padStart(2, "0");
            if (this.value === "") {
              const { yyyy: yyyy2, dd: dd2, hh: hh2, mm: mm2 } = this.getReadableDate(/* @__PURE__ */ new Date());
              return this.$emit("input", /* @__PURE__ */ new Date(`${yyyy2}-${MM}-${dd2}T${hh2}:${mm2}`));
            }
            const { yyyy, dd, hh, mm } = this.getReadableDate(this.value);
            return this.$emit("input", /* @__PURE__ */ new Date(`${yyyy}-${MM}-${dd}T${hh}:${mm}`));
          }
          const timezoneOffsetSeconds = new Date($event.target.valueAsNumber).getTimezoneOffset() * 1e3 * 60;
          const inputDateWithTimezone = $event.target.valueAsNumber + timezoneOffsetSeconds;
          return this.$emit("input", new Date(inputDateWithTimezone));
        }
      };
    }
  },
  methods: {
    /**
     * Returns Object with string values of a Date
     *
     * @param {Date} value The selected value
     * @return {object|undefined}
     */
    getReadableDate(value) {
      if (value instanceof Date) {
        const yyyy = value.getFullYear().toString().padStart(4, "0");
        const MM = (value.getMonth() + 1).toString().padStart(2, "0");
        const dd = value.getDate().toString().padStart(2, "0");
        const hh = value.getHours().toString().padStart(2, "0");
        const mm = value.getMinutes().toString().padStart(2, "0");
        return { yyyy, MM, dd, hh, mm };
      }
    },
    /**
     * Returns preformatted value for the input field
     *
     * @param {Date} value The selected value
     * @return {string|undefined}
     */
    formatValue(value) {
      if (value instanceof Date) {
        const { yyyy, MM, dd, hh, mm } = this.getReadableDate(value);
        if (this.type === "datetime-local") {
          return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
        } else if (this.type === "date") {
          return `${yyyy}-${MM}-${dd}`;
        } else if (this.type === "month") {
          return `${yyyy}-${MM}`;
        } else if (this.type === "time") {
          return `${hh}:${mm}`;
        } else if (this.type === "week") {
          const startDate = new Date(yyyy, 0, 1);
          const daysSinceBeginningOfYear = Math.floor((value - startDate) / (24 * 60 * 60 * 1e3));
          const weekNumber = Math.ceil(daysSinceBeginningOfYear / 7);
          return `${yyyy}-W${weekNumber}`;
        }
      } else {
        return "";
      }
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "native-datetime-picker" }, [_c("label", { class: { "hidden-visually": _vm.hideLabel }, attrs: { "for": _vm.id } }, [_vm._v(_vm._s(_vm.label))]), _c("input", _vm._g(_vm._b({ staticClass: "native-datetime-picker--input", class: _vm.inputClass, attrs: { "id": _vm.id, "type": _vm.type, "min": _vm.formattedMin, "max": _vm.formattedMax }, domProps: { "value": _vm.formattedValue } }, "input", _vm.$attrs, false), _vm.listeners))]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_chunks_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "992a6e31",
  null,
  null
);
const NcDateTimePickerNative = __component__.exports;
/**
 * @copyright Copyright (c) 2022 Julia Kirschenheuter <julia.kirschenheuter@nextcloud.com>
 *
 * @author Julia Kirschenheuter <julia.kirschenheuter@nextcloud.com>
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
(0,_chunks_ScopeComponent_f6Z_CQtX_mjs__WEBPACK_IMPORTED_MODULE_2__.S)(NcDateTimePickerNative);

//# sourceMappingURL=NcDateTimePickerNative.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcActionInput-Z-VZ4WYV.mjs":
/*!***************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcActionInput-Z-VZ4WYV.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcActionInput)
/* harmony export */ });
/* harmony import */ var _assets_NcActionInput_WCqiV7c1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcActionInput-WCqiV7c1.css */ "../nextcloud-vue/dist/assets/NcActionInput-WCqiV7c1.css");
/* harmony import */ var _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NcDateTimePicker.mjs */ "../nextcloud-vue/dist/Components/NcDateTimePicker.mjs");
/* harmony import */ var _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NcDateTimePickerNative.mjs */ "../nextcloud-vue/dist/Components/NcDateTimePickerNative.mjs");
/* harmony import */ var _NcPasswordField_ebuH_Hkx_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NcPasswordField-ebuH_Hkx.mjs */ "../nextcloud-vue/dist/chunks/NcPasswordField-ebuH_Hkx.mjs");
/* harmony import */ var _NcSelect_jC7ShD5p_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NcSelect-jC7ShD5p.mjs */ "../nextcloud-vue/dist/chunks/NcSelect-jC7ShD5p.mjs");
/* harmony import */ var _NcTextField_CyPkfdPA_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NcTextField-CyPkfdPA.mjs */ "../nextcloud-vue/dist/chunks/NcTextField-CyPkfdPA.mjs");
/* harmony import */ var _actionGlobal_Tng9AMrk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionGlobal-Tng9AMrk.mjs */ "../nextcloud-vue/dist/chunks/actionGlobal-Tng9AMrk.mjs");
/* harmony import */ var _GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");










(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_8__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_8__.f);
const _sfc_main = {
  name: "NcActionInput",
  components: {
    NcDateTimePicker: _Components_NcDateTimePicker_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcDateTimePickerNative: _Components_NcDateTimePickerNative_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcPasswordField: _NcPasswordField_ebuH_Hkx_mjs__WEBPACK_IMPORTED_MODULE_3__.N,
    NcSelect: _NcSelect_jC7ShD5p_mjs__WEBPACK_IMPORTED_MODULE_4__.N,
    NcTextField: _NcTextField_CyPkfdPA_mjs__WEBPACK_IMPORTED_MODULE_5__.N
  },
  mixins: [_actionGlobal_Tng9AMrk_mjs__WEBPACK_IMPORTED_MODULE_6__.A],
  props: {
    /**
     * id attribute of the checkbox element
     */
    id: {
      type: String,
      default: () => "action-" + (0,_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_7__.G)(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * id attribute of the text input element
     */
    inputId: {
      type: String,
      default: () => "action-input-" + (0,_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_7__.G)(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * type attribute of the input field
     */
    type: {
      type: String,
      default: "text",
      validator(type) {
        return [
          "date",
          "datetime-local",
          "month",
          "multiselect",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "time",
          "url",
          "week",
          "color",
          "email"
        ].indexOf(type) > -1;
      }
    },
    /**
     * id attribute for the native date time picker
     */
    idNativeDateTimePicker: {
      type: String,
      default: "date-time-picker_id"
    },
    /**
     * Flag to use a native date time picker
     */
    isNativePicker: {
      type: Boolean,
      default: false
    },
    /**
     * The visible input label for accessibility purposes.
     */
    label: {
      type: String,
      default: null
    },
    /**
     * If you want to show the label just above the
     * input field, pass in `true` to this prop.
     */
    labelOutside: {
      type: Boolean,
      default: true
    },
    /**
     * value attribute of the input field
     */
    value: {
      type: [String, Date, Number, Array],
      default: ""
    },
    /**
     * disabled state of the input field
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * aria-label attribute of the input field
     */
    ariaLabel: {
      type: String,
      default: ""
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
     * Attribute forwarded to the underlying NcPasswordField and NcTextField
     */
    showTrailingButton: {
      type: Boolean,
      default: true
    },
    /**
     * Trailing button label forwarded to the underlying NcTextField
     */
    trailingButtonLabel: {
      type: String,
      default: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_8__.a)("Submit")
    }
  },
  emits: [
    "input",
    "submit",
    "change",
    "update:value"
  ],
  computed: {
    isIconUrl() {
      try {
        return new URL(this.icon);
      } catch (error) {
        return false;
      }
    },
    isMultiselectType() {
      return this.type === "multiselect";
    },
    nativeDatePickerType() {
      switch (this.type) {
        case "date":
        case "month":
        case "time":
        case "week":
        case "datetime-local":
          return this.type;
      }
      return false;
    },
    datePickerType() {
      if (!this.isNativePicker) {
        switch (this.type) {
          case "date":
          case "month":
          case "time":
            return this.type;
          case "datetime-local":
            return "datetime";
        }
      }
      return false;
    },
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    }
  },
  methods: {
    // closing datepicker popup on mouseleave = unfocus
    onLeave() {
      if (this.$refs.datetimepicker && this.$refs.datetimepicker.$refs.datepicker) {
        this.$refs.datetimepicker.$refs.datepicker.closePopup();
      }
    },
    onInput(event) {
      this.$emit("input", event);
      this.$emit("update:value", event.target ? event.target.value : event);
    },
    onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.disabled) {
        this.$emit("submit", event);
      } else {
        return false;
      }
    },
    onChange(event) {
      this.$emit("change", event);
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled } }, [_c("span", { staticClass: "action-input", class: {
    "action-input-picker--disabled": _vm.disabled,
    "action-input--visible-label": _vm.labelOutside && _vm.label
  }, on: { "mouseleave": _vm.onLeave } }, [_c("span", { staticClass: "action-input__icon-wrapper" }, [_vm._t("icon", function() {
    return [_c("span", { staticClass: "action-input__icon", class: [_vm.isIconUrl ? "action-input__icon--url" : _vm.icon], style: { backgroundImage: _vm.isIconUrl ? `url(${_vm.icon})` : null }, attrs: { "aria-hidden": "true" } })];
  })], 2), _c("form", { ref: "form", staticClass: "action-input__form", attrs: { "disabled": _vm.disabled }, on: { "submit": function($event) {
    $event.preventDefault();
    return _vm.onSubmit.apply(null, arguments);
  } } }, [_c("div", { staticClass: "action-input__container" }, [_vm.label && _vm.labelOutside ? _c("label", { staticClass: "action-input__text-label", class: { "action-input__text-label--hidden": !_vm.labelOutside }, attrs: { "for": _vm.inputId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { staticClass: "action-input__input-container" }, [_vm.datePickerType ? _c("NcDateTimePicker", _vm._b({ ref: "datetimepicker", staticClass: "action-input__datetimepicker", staticStyle: { "z-index": "99999999999" }, attrs: { "value": _vm.value, "placeholder": _vm.text, "disabled": _vm.disabled, "type": _vm.datePickerType, "input-class": ["mx-input", { focusable: _vm.isFocusable }] }, on: { "input": _vm.onInput, "change": _vm.onChange } }, "NcDateTimePicker", _vm.$attrs, false)) : _vm.isNativePicker ? _c("NcDateTimePickerNative", _vm._b({ staticClass: "action-input__datetimepicker", attrs: { "id": _vm.idNativeDateTimePicker, "value": _vm.value, "type": _vm.nativeDatePickerType, "input-class": { focusable: _vm.isFocusable } }, on: { "input": function($event) {
    return _vm.$emit("input", $event);
  }, "change": function($event) {
    return _vm.$emit("change", $event);
  } } }, "NcDateTimePickerNative", _vm.$attrs, false)) : _vm.isMultiselectType ? _c("NcSelect", _vm._g(_vm._b({ staticClass: "action-input__multi", attrs: { "value": _vm.value, "placeholder": _vm.text, "disabled": _vm.disabled, "append-to-body": _vm.$attrs.appendToBody || _vm.$attrs["append-to-body"] || false, "input-class": { focusable: _vm.isFocusable } } }, "NcSelect", _vm.$attrs, false), _vm.$listeners)) : _vm.type === "password" ? _c("NcPasswordField", _vm._g(_vm._b({ attrs: { "id": _vm.inputId, "value": _vm.value, "label": _vm.label, "label-outside": !_vm.label || _vm.labelOutside, "placeholder": _vm.text, "disabled": _vm.disabled, "input-class": { focusable: _vm.isFocusable }, "show-trailing-button": _vm.showTrailingButton && !_vm.disabled }, on: { "input": _vm.onInput, "change": _vm.onChange } }, "NcPasswordField", _vm.$attrs, false), _vm.$listeners)) : _vm.type === "color" ? _c("div", { staticClass: "action-input__container" }, [_vm.label && _vm.type === "color" ? _c("label", { staticClass: "action-input__text-label", class: { "action-input__text-label--hidden": !_vm.labelOutside }, attrs: { "for": _vm.inputId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { staticClass: "action-input__input-container" }, [_c("NcColorPicker", _vm._g(_vm._b({ staticClass: "colorpicker__trigger", attrs: { "id": "inputId", "value": _vm.value }, on: { "input": _vm.onInput, "submit": function($event) {
    return _vm.$refs.form.requestSubmit();
  } } }, "NcColorPicker", _vm.$attrs, false), _vm.$listeners), [_c("button", { staticClass: "colorpicker__preview", class: { focusable: _vm.isFocusable }, style: { "background-color": _vm.value } })])], 1)]) : _c("NcTextField", _vm._g(_vm._b({ attrs: { "id": _vm.inputId, "value": _vm.value, "label": _vm.label, "label-outside": !_vm.label || _vm.labelOutside, "placeholder": _vm.text, "disabled": _vm.disabled, "input-class": { focusable: _vm.isFocusable }, "type": _vm.type, "trailing-button-icon": "arrowRight", "trailing-button-label": _vm.trailingButtonLabel, "show-trailing-button": _vm.showTrailingButton && !_vm.disabled }, on: { "trailing-button-click": function($event) {
    return _vm.$refs.form.requestSubmit();
  }, "input": _vm.onInput, "change": _vm.onChange } }, "NcTextField", _vm.$attrs, false), _vm.$listeners))], 1)])])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_9__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "f55526ee",
  null,
  null
);
const NcActionInput = __component__.exports;

//# sourceMappingURL=NcActionInput-Z-VZ4WYV.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcTextField-CyPkfdPA.mjs":
/*!*************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcTextField-CyPkfdPA.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcTextField)
/* harmony export */ });
/* harmony import */ var _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/NcInputField.mjs */ "../nextcloud-vue/dist/Components/NcInputField.mjs");
/* harmony import */ var _Close_x3DvlfYA_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Close-x3DvlfYA.mjs */ "../nextcloud-vue/dist/chunks/Close-x3DvlfYA.mjs");
/* harmony import */ var _ArrowRight_I5_Rr76L_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowRight-I5-Rr76L.mjs */ "../nextcloud-vue/dist/chunks/ArrowRight-I5-Rr76L.mjs");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");





const _sfc_main$1 = {
  name: "UndoVariantIcon",
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
var _sfc_render$1 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon undo-variant-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
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
const Undo = __component__$1.exports;
(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__.d, _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__.c);
const NcInputFieldProps = new Set(Object.keys(_Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].props));
const _sfc_main = {
  name: "NcTextField",
  components: {
    NcInputField: _Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    Close: _Close_x3DvlfYA_mjs__WEBPACK_IMPORTED_MODULE_1__.C,
    ArrowRight: _ArrowRight_I5_Rr76L_mjs__WEBPACK_IMPORTED_MODULE_2__.A,
    Undo
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
    ..._Components_NcInputField_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].props,
    /**
     * The `aria-label` to set on the trailing button
     * If no explicit value is set it will default to the one matching the `trailingButtonIcon`:
     * @default 'Clear text'|'Save changes'|'Undo changes'
     */
    trailingButtonLabel: {
      type: String,
      default: ""
    },
    // Custom props
    /**
     * Specifies which material design icon should be used for the trailing
     * button.
     * @type {'close'|'arrowRight'|'undo'}
     */
    trailingButtonIcon: {
      type: String,
      default: "close",
      validator: (value) => [
        "close",
        "arrowRight",
        "undo"
      ].includes(value)
    }
  },
  emits: [
    "update:value"
  ],
  computed: {
    propsAndAttrsToForward() {
      const predefinedLabels = {
        undo: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__.a)("Undo changes"),
        close: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__.a)("Clear text"),
        arrowRight: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_4__.a)("Save changes")
      };
      return {
        // Proxy all the HTML attributes
        ...this.$attrs,
        // Proxy original NcInputField's props
        ...Object.fromEntries(
          Object.entries(this.$props).filter(([key]) => NcInputFieldProps.has(key))
        ),
        // Adjust aria-label for predefined trailing buttons
        trailingButtonLabel: this.trailingButtonLabel || predefinedLabels[this.trailingButtonIcon]
      };
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
    }
  }
};
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcInputField", _vm._g(_vm._b({ ref: "inputField", on: { "input": _vm.handleInput }, scopedSlots: _vm._u([_vm.type !== "search" ? { key: "trailing-button-icon", fn: function() {
    return [_vm.trailingButtonIcon === "close" ? _c("Close", { attrs: { "size": 20 } }) : _vm.trailingButtonIcon === "arrowRight" ? _c("ArrowRight", { attrs: { "size": 20 } }) : _vm.trailingButtonIcon === "undo" ? _c("Undo", { attrs: { "size": 20 } }) : _vm._e()];
  }, proxy: true } : null], null, true) }, "NcInputField", _vm.propsAndAttrsToForward, false), _vm.$listeners), [_vm._t("default")], 2);
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
const NcTextField = __component__.exports;

//# sourceMappingURL=NcTextField-CyPkfdPA.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcTimezonePicker-0reZFtNA.mjs":
/*!******************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcTimezonePicker-0reZFtNA.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcTimezonePicker)
/* harmony export */ });
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _logger_NqlBlfJu_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger-NqlBlfJu.mjs */ "../nextcloud-vue/dist/chunks/logger-NqlBlfJu.mjs");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/calendar-js */ "../nextcloud-vue/node_modules/@nextcloud/calendar-js/dist/index.es.mjs");
/* harmony import */ var _GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _NcSelect_jC7ShD5p_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NcSelect-jC7ShD5p.mjs */ "../nextcloud-vue/dist/chunks/NcSelect-jC7ShD5p.mjs");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");






(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.z);
/**
 * @copyright Copyright (c) 2019 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
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
function getSortedTimezoneList(timezoneList = [], additionalTimezones = []) {
  const sortedByContinent = {};
  const sortedList = [];
  for (const timezoneId of timezoneList) {
    const components = timezoneId.split("/");
    let [continent, name] = [components.shift(), components.join("/")];
    if (!name) {
      name = continent;
      continent = (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.a)("Global");
    }
    sortedByContinent[continent] = sortedByContinent[continent] || {
      continent,
      regions: []
    };
    sortedByContinent[continent].regions.push({
      label: getReadableTimezoneName(name),
      cities: [],
      timezoneId
    });
  }
  for (const additionalTimezone of additionalTimezones) {
    const { continent, label, timezoneId } = additionalTimezone;
    sortedByContinent[continent] = sortedByContinent[continent] || {
      continent,
      regions: []
    };
    sortedByContinent[continent].regions.push({
      label,
      cities: [],
      timezoneId
    });
  }
  for (const continent in sortedByContinent) {
    if (!Object.prototype.hasOwnProperty.call(sortedByContinent, continent)) {
      continue;
    }
    sortedByContinent[continent].regions.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      return 1;
    });
    sortedList.push(sortedByContinent[continent]);
  }
  sortedList.sort((a, b) => {
    if (a.continent < b.continent) {
      return -1;
    }
    return 1;
  });
  return sortedList;
}
function getReadableTimezoneName(timezoneId) {
  return timezoneId.split("_").join(" ").replace("St ", "St. ").split("/").join(" - ");
}
const version = "2.2019c";
const aliases = {
  "AUS Central Standard Time": {
    aliasTo: "Australia/Darwin"
  },
  "AUS Eastern Standard Time": {
    aliasTo: "Australia/Sydney"
  },
  "Afghanistan Standard Time": {
    aliasTo: "Asia/Kabul"
  },
  "Africa/Asmera": {
    aliasTo: "Africa/Asmara"
  },
  "Africa/Timbuktu": {
    aliasTo: "Africa/Bamako"
  },
  "Alaskan Standard Time": {
    aliasTo: "America/Anchorage"
  },
  "America/Argentina/ComodRivadavia": {
    aliasTo: "America/Argentina/Catamarca"
  },
  "America/Buenos_Aires": {
    aliasTo: "America/Argentina/Buenos_Aires"
  },
  "America/Louisville": {
    aliasTo: "America/Kentucky/Louisville"
  },
  "America/Montreal": {
    aliasTo: "America/Toronto"
  },
  "America/Santa_Isabel": {
    aliasTo: "America/Tijuana"
  },
  "Arab Standard Time": {
    aliasTo: "Asia/Riyadh"
  },
  "Arabian Standard Time": {
    aliasTo: "Asia/Dubai"
  },
  "Arabic Standard Time": {
    aliasTo: "Asia/Baghdad"
  },
  "Argentina Standard Time": {
    aliasTo: "America/Argentina/Buenos_Aires"
  },
  "Asia/Calcutta": {
    aliasTo: "Asia/Kolkata"
  },
  "Asia/Katmandu": {
    aliasTo: "Asia/Kathmandu"
  },
  "Asia/Rangoon": {
    aliasTo: "Asia/Yangon"
  },
  "Asia/Saigon": {
    aliasTo: "Asia/Ho_Chi_Minh"
  },
  "Atlantic Standard Time": {
    aliasTo: "America/Halifax"
  },
  "Atlantic/Faeroe": {
    aliasTo: "Atlantic/Faroe"
  },
  "Atlantic/Jan_Mayen": {
    aliasTo: "Europe/Oslo"
  },
  "Azerbaijan Standard Time": {
    aliasTo: "Asia/Baku"
  },
  "Azores Standard Time": {
    aliasTo: "Atlantic/Azores"
  },
  "Bahia Standard Time": {
    aliasTo: "America/Bahia"
  },
  "Bangladesh Standard Time": {
    aliasTo: "Asia/Dhaka"
  },
  "Belarus Standard Time": {
    aliasTo: "Europe/Minsk"
  },
  "Canada Central Standard Time": {
    aliasTo: "America/Regina"
  },
  "Cape Verde Standard Time": {
    aliasTo: "Atlantic/Cape_Verde"
  },
  "Caucasus Standard Time": {
    aliasTo: "Asia/Yerevan"
  },
  "Cen. Australia Standard Time": {
    aliasTo: "Australia/Adelaide"
  },
  "Central America Standard Time": {
    aliasTo: "America/Guatemala"
  },
  "Central Asia Standard Time": {
    aliasTo: "Asia/Almaty"
  },
  "Central Brazilian Standard Time": {
    aliasTo: "America/Cuiaba"
  },
  "Central Europe Standard Time": {
    aliasTo: "Europe/Budapest"
  },
  "Central European Standard Time": {
    aliasTo: "Europe/Warsaw"
  },
  "Central Pacific Standard Time": {
    aliasTo: "Pacific/Guadalcanal"
  },
  "Central Standard Time": {
    aliasTo: "America/Chicago"
  },
  "Central Standard Time (Mexico)": {
    aliasTo: "America/Mexico_City"
  },
  "China Standard Time": {
    aliasTo: "Asia/Shanghai"
  },
  "E. Africa Standard Time": {
    aliasTo: "Africa/Nairobi"
  },
  "E. Australia Standard Time": {
    aliasTo: "Australia/Brisbane"
  },
  "E. South America Standard Time": {
    aliasTo: "America/Sao_Paulo"
  },
  "Eastern Standard Time": {
    aliasTo: "America/New_York"
  },
  "Egypt Standard Time": {
    aliasTo: "Africa/Cairo"
  },
  "Ekaterinburg Standard Time": {
    aliasTo: "Asia/Yekaterinburg"
  },
  "Etc/GMT": {
    aliasTo: "UTC"
  },
  "Etc/GMT+0": {
    aliasTo: "UTC"
  },
  "Etc/UCT": {
    aliasTo: "UTC"
  },
  "Etc/UTC": {
    aliasTo: "UTC"
  },
  "Etc/Unversal": {
    aliasTo: "UTC"
  },
  "Etc/Zulu": {
    aliasTo: "UTC"
  },
  "Europe/Belfast": {
    aliasTo: "Europe/London"
  },
  "FLE Standard Time": {
    aliasTo: "Europe/Kiev"
  },
  "Fiji Standard Time": {
    aliasTo: "Pacific/Fiji"
  },
  GMT: {
    aliasTo: "UTC"
  },
  "GMT Standard Time": {
    aliasTo: "Europe/London"
  },
  "GMT+0": {
    aliasTo: "UTC"
  },
  GMT0: {
    aliasTo: "UTC"
  },
  "GTB Standard Time": {
    aliasTo: "Europe/Bucharest"
  },
  "Georgian Standard Time": {
    aliasTo: "Asia/Tbilisi"
  },
  "Greenland Standard Time": {
    aliasTo: "America/Godthab"
  },
  Greenwich: {
    aliasTo: "UTC"
  },
  "Greenwich Standard Time": {
    aliasTo: "Atlantic/Reykjavik"
  },
  "Hawaiian Standard Time": {
    aliasTo: "Pacific/Honolulu"
  },
  "India Standard Time": {
    aliasTo: "Asia/Calcutta"
  },
  "Iran Standard Time": {
    aliasTo: "Asia/Tehran"
  },
  "Israel Standard Time": {
    aliasTo: "Asia/Jerusalem"
  },
  "Jordan Standard Time": {
    aliasTo: "Asia/Amman"
  },
  "Kaliningrad Standard Time": {
    aliasTo: "Europe/Kaliningrad"
  },
  "Korea Standard Time": {
    aliasTo: "Asia/Seoul"
  },
  "Libya Standard Time": {
    aliasTo: "Africa/Tripoli"
  },
  "Line Islands Standard Time": {
    aliasTo: "Pacific/Kiritimati"
  },
  "Magadan Standard Time": {
    aliasTo: "Asia/Magadan"
  },
  "Mauritius Standard Time": {
    aliasTo: "Indian/Mauritius"
  },
  "Middle East Standard Time": {
    aliasTo: "Asia/Beirut"
  },
  "Montevideo Standard Time": {
    aliasTo: "America/Montevideo"
  },
  "Morocco Standard Time": {
    aliasTo: "Africa/Casablanca"
  },
  "Mountain Standard Time": {
    aliasTo: "America/Denver"
  },
  "Mountain Standard Time (Mexico)": {
    aliasTo: "America/Chihuahua"
  },
  "Myanmar Standard Time": {
    aliasTo: "Asia/Rangoon"
  },
  "N. Central Asia Standard Time": {
    aliasTo: "Asia/Novosibirsk"
  },
  "Namibia Standard Time": {
    aliasTo: "Africa/Windhoek"
  },
  "Nepal Standard Time": {
    aliasTo: "Asia/Katmandu"
  },
  "New Zealand Standard Time": {
    aliasTo: "Pacific/Auckland"
  },
  "Newfoundland Standard Time": {
    aliasTo: "America/St_Johns"
  },
  "North Asia East Standard Time": {
    aliasTo: "Asia/Irkutsk"
  },
  "North Asia Standard Time": {
    aliasTo: "Asia/Krasnoyarsk"
  },
  "Pacific SA Standard Time": {
    aliasTo: "America/Santiago"
  },
  "Pacific Standard Time": {
    aliasTo: "America/Los_Angeles"
  },
  "Pacific Standard Time (Mexico)": {
    aliasTo: "America/Santa_Isabel"
  },
  "Pacific/Johnston": {
    aliasTo: "Pacific/Honolulu"
  },
  "Pakistan Standard Time": {
    aliasTo: "Asia/Karachi"
  },
  "Paraguay Standard Time": {
    aliasTo: "America/Asuncion"
  },
  "Romance Standard Time": {
    aliasTo: "Europe/Paris"
  },
  "Russia Time Zone 10": {
    aliasTo: "Asia/Srednekolymsk"
  },
  "Russia Time Zone 11": {
    aliasTo: "Asia/Kamchatka"
  },
  "Russia Time Zone 3": {
    aliasTo: "Europe/Samara"
  },
  "Russian Standard Time": {
    aliasTo: "Europe/Moscow"
  },
  "SA Eastern Standard Time": {
    aliasTo: "America/Cayenne"
  },
  "SA Pacific Standard Time": {
    aliasTo: "America/Bogota"
  },
  "SA Western Standard Time": {
    aliasTo: "America/La_Paz"
  },
  "SE Asia Standard Time": {
    aliasTo: "Asia/Bangkok"
  },
  "Samoa Standard Time": {
    aliasTo: "Pacific/Apia"
  },
  "Singapore Standard Time": {
    aliasTo: "Asia/Singapore"
  },
  "South Africa Standard Time": {
    aliasTo: "Africa/Johannesburg"
  },
  "Sri Lanka Standard Time": {
    aliasTo: "Asia/Colombo"
  },
  "Syria Standard Time": {
    aliasTo: "Asia/Damascus"
  },
  "Taipei Standard Time": {
    aliasTo: "Asia/Taipei"
  },
  "Tasmania Standard Time": {
    aliasTo: "Australia/Hobart"
  },
  "Tokyo Standard Time": {
    aliasTo: "Asia/Tokyo"
  },
  "Tonga Standard Time": {
    aliasTo: "Pacific/Tongatapu"
  },
  "Turkey Standard Time": {
    aliasTo: "Europe/Istanbul"
  },
  UCT: {
    aliasTo: "UTC"
  },
  "US Eastern Standard Time": {
    aliasTo: "America/Indiana/Indianapolis"
  },
  "US Mountain Standard Time": {
    aliasTo: "America/Phoenix"
  },
  "US/Central": {
    aliasTo: "America/Chicago"
  },
  "US/Eastern": {
    aliasTo: "America/New_York"
  },
  "US/Mountain": {
    aliasTo: "America/Denver"
  },
  "US/Pacific": {
    aliasTo: "America/Los_Angeles"
  },
  "US/Pacific-New": {
    aliasTo: "America/Los_Angeles"
  },
  "Ulaanbaatar Standard Time": {
    aliasTo: "Asia/Ulaanbaatar"
  },
  Universal: {
    aliasTo: "UTC"
  },
  "Venezuela Standard Time": {
    aliasTo: "America/Caracas"
  },
  "Vladivostok Standard Time": {
    aliasTo: "Asia/Vladivostok"
  },
  "W. Australia Standard Time": {
    aliasTo: "Australia/Perth"
  },
  "W. Central Africa Standard Time": {
    aliasTo: "Africa/Lagos"
  },
  "W. Europe Standard Time": {
    aliasTo: "Europe/Berlin"
  },
  "West Asia Standard Time": {
    aliasTo: "Asia/Tashkent"
  },
  "West Pacific Standard Time": {
    aliasTo: "Pacific/Port_Moresby"
  },
  "Yakutsk Standard Time": {
    aliasTo: "Asia/Yakutsk"
  },
  Z: {
    aliasTo: "UTC"
  },
  Zulu: {
    aliasTo: "UTC"
  },
  utc: {
    aliasTo: "UTC"
  }
};
const zones = {
  "Africa/Abidjan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0051900",
    longitude: "-0040200"
  },
  "Africa/Accra": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0053300",
    longitude: "+0001300"
  },
  "Africa/Addis_Ababa": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0090200",
    longitude: "+0384200"
  },
  "Africa/Algiers": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0364700",
    longitude: "+0030300"
  },
  "Africa/Asmara": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0152000",
    longitude: "+0385300"
  },
  "Africa/Bamako": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0123900",
    longitude: "-0080000"
  },
  "Africa/Bangui": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0042200",
    longitude: "+0183500"
  },
  "Africa/Banjul": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0132800",
    longitude: "-0163900"
  },
  "Africa/Bissau": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0115100",
    longitude: "-0153500"
  },
  "Africa/Blantyre": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0154700",
    longitude: "+0350000"
  },
  "Africa/Brazzaville": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0041600",
    longitude: "+0151700"
  },
  "Africa/Bujumbura": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0032300",
    longitude: "+0292200"
  },
  "Africa/Cairo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0300300",
    longitude: "+0311500"
  },
  "Africa/Casablanca": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:+01\r\nDTSTART:20180325T020000\r\nRDATE:20180325T020000\r\nRDATE:20180617T020000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:20180513T030000\r\nRDATE:20180513T030000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:+01\r\nDTSTART:20190609T020000\r\nRDATE:20190609T020000\r\nRDATE:20200524T020000\r\nRDATE:20210516T020000\r\nRDATE:20220508T020000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:+01\r\nDTSTART:20181028T030000\r\nRDATE:20181028T030000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:20190505T030000\r\nRDATE:20190505T030000\r\nRDATE:20200419T030000\r\nRDATE:20210411T030000\r\nRDATE:20220327T030000\r\nEND:DAYLIGHT"
    ],
    latitude: "+0333900",
    longitude: "-0073500"
  },
  "Africa/Ceuta": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0355300",
    longitude: "-0051900"
  },
  "Africa/Conakry": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0093100",
    longitude: "-0134300"
  },
  "Africa/Dakar": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0144000",
    longitude: "-0172600"
  },
  "Africa/Dar_es_Salaam": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0064800",
    longitude: "+0391700"
  },
  "Africa/Djibouti": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0113600",
    longitude: "+0430900"
  },
  "Africa/Douala": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0040300",
    longitude: "+0094200"
  },
  "Africa/El_Aaiun": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:+01\r\nDTSTART:20180325T020000\r\nRDATE:20180325T020000\r\nRDATE:20180617T020000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:20180513T030000\r\nRDATE:20180513T030000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:+01\r\nDTSTART:20181028T030000\r\nRDATE:20181028T030000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:20190505T030000\r\nRDATE:20190505T030000\r\nRDATE:20200419T030000\r\nRDATE:20210411T030000\r\nRDATE:20220327T030000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:+01\r\nDTSTART:20190609T020000\r\nRDATE:20190609T020000\r\nRDATE:20200524T020000\r\nRDATE:20210516T020000\r\nRDATE:20220508T020000\r\nEND:STANDARD"
    ],
    latitude: "+0270900",
    longitude: "-0131200"
  },
  "Africa/Freetown": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0083000",
    longitude: "-0131500"
  },
  "Africa/Gaborone": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0243900",
    longitude: "+0255500"
  },
  "Africa/Harare": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0175000",
    longitude: "+0310300"
  },
  "Africa/Johannesburg": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:SAST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0261500",
    longitude: "+0280000"
  },
  "Africa/Juba": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0045100",
    longitude: "+0313700"
  },
  "Africa/Kampala": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0001900",
    longitude: "+0322500"
  },
  "Africa/Khartoum": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0153600",
    longitude: "+0323200"
  },
  "Africa/Kigali": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0015700",
    longitude: "+0300400"
  },
  "Africa/Kinshasa": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0041800",
    longitude: "+0151800"
  },
  "Africa/Lagos": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0062700",
    longitude: "+0032400"
  },
  "Africa/Libreville": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0002300",
    longitude: "+0092700"
  },
  "Africa/Lome": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0060800",
    longitude: "+0011300"
  },
  "Africa/Luanda": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0084800",
    longitude: "+0131400"
  },
  "Africa/Lubumbashi": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0114000",
    longitude: "+0272800"
  },
  "Africa/Lusaka": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0152500",
    longitude: "+0281700"
  },
  "Africa/Malabo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0034500",
    longitude: "+0084700"
  },
  "Africa/Maputo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0255800",
    longitude: "+0323500"
  },
  "Africa/Maseru": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:SAST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0292800",
    longitude: "+0273000"
  },
  "Africa/Mbabane": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:SAST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0261800",
    longitude: "+0310600"
  },
  "Africa/Mogadishu": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0020400",
    longitude: "+0452200"
  },
  "Africa/Monrovia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0061800",
    longitude: "-0104700"
  },
  "Africa/Nairobi": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0011700",
    longitude: "+0364900"
  },
  "Africa/Ndjamena": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0120700",
    longitude: "+0150300"
  },
  "Africa/Niamey": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0133100",
    longitude: "+0020700"
  },
  "Africa/Nouakchott": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0180600",
    longitude: "-0155700"
  },
  "Africa/Ouagadougou": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0122200",
    longitude: "-0013100"
  },
  "Africa/Porto-Novo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0062900",
    longitude: "+0023700"
  },
  "Africa/Sao_Tome": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:WAT\r\nDTSTART:20180101T010000\r\nRDATE:20180101T010000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:20190101T020000\r\nRDATE:20190101T020000\r\nEND:STANDARD"
    ],
    latitude: "+0002000",
    longitude: "+0064400"
  },
  "Africa/Tripoli": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0325400",
    longitude: "+0131100"
  },
  "Africa/Tunis": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0364800",
    longitude: "+0101100"
  },
  "Africa/Windhoek": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:CAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0223400",
    longitude: "+0170600"
  },
  "America/Adak": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-1000\r\nTZOFFSETTO:-0900\r\nTZNAME:HDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-1000\r\nTZNAME:HST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0515248",
    longitude: "-1763929"
  },
  "America/Anchorage": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0800\r\nTZNAME:AKDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0611305",
    longitude: "-1495401"
  },
  "America/Anguilla": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0181200",
    longitude: "-0630400"
  },
  "America/Antigua": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0170300",
    longitude: "-0614800"
  },
  "America/Araguaina": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0071200",
    longitude: "-0481200"
  },
  "America/Argentina/Buenos_Aires": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0343600",
    longitude: "-0582700"
  },
  "America/Argentina/Catamarca": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0282800",
    longitude: "-0654700"
  },
  "America/Argentina/Cordoba": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0312400",
    longitude: "-0641100"
  },
  "America/Argentina/Jujuy": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0241100",
    longitude: "-0651800"
  },
  "America/Argentina/La_Rioja": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0292600",
    longitude: "-0665100"
  },
  "America/Argentina/Mendoza": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0325300",
    longitude: "-0684900"
  },
  "America/Argentina/Rio_Gallegos": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0513800",
    longitude: "-0691300"
  },
  "America/Argentina/Salta": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0244700",
    longitude: "-0652500"
  },
  "America/Argentina/San_Juan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0313200",
    longitude: "-0683100"
  },
  "America/Argentina/San_Luis": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0331900",
    longitude: "-0662100"
  },
  "America/Argentina/Tucuman": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0264900",
    longitude: "-0651300"
  },
  "America/Argentina/Ushuaia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0544800",
    longitude: "-0681800"
  },
  "America/Aruba": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0123000",
    longitude: "-0695800"
  },
  "America/Asuncion": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19701004T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700322T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=4SU\r\nEND:STANDARD"
    ],
    latitude: "-0251600",
    longitude: "-0574000"
  },
  "America/Atikokan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0484531",
    longitude: "-0913718"
  },
  "America/Bahia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0125900",
    longitude: "-0383100"
  },
  "America/Bahia_Banderas": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0204800",
    longitude: "-1051500"
  },
  "America/Barbados": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0130600",
    longitude: "-0593700"
  },
  "America/Belem": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0012700",
    longitude: "-0482900"
  },
  "America/Belize": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0173000",
    longitude: "-0881200"
  },
  "America/Blanc-Sablon": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0512500",
    longitude: "-0570700"
  },
  "America/Boa_Vista": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0024900",
    longitude: "-0604000"
  },
  "America/Bogota": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0043600",
    longitude: "-0740500"
  },
  "America/Boise": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0433649",
    longitude: "-1161209"
  },
  "America/Cambridge_Bay": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0690650",
    longitude: "-1050310"
  },
  "America/Campo_Grande": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:20181104T000000\r\nRDATE:20181104T000000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:20180218T000000\r\nRDATE:20180218T000000\r\nRDATE:20190217T000000\r\nEND:STANDARD"
    ],
    latitude: "-0202700",
    longitude: "-0543700"
  },
  "America/Cancun": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0210500",
    longitude: "-0864600"
  },
  "America/Caracas": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0103000",
    longitude: "-0665600"
  },
  "America/Cayenne": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0045600",
    longitude: "-0522000"
  },
  "America/Cayman": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0191800",
    longitude: "-0812300"
  },
  "America/Chicago": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0415100",
    longitude: "-0873900"
  },
  "America/Chihuahua": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0283800",
    longitude: "-1060500"
  },
  "America/Costa_Rica": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0095600",
    longitude: "-0840500"
  },
  "America/Creston": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0490600",
    longitude: "-1163100"
  },
  "America/Cuiaba": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:20181104T000000\r\nRDATE:20181104T000000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:20180218T000000\r\nRDATE:20180218T000000\r\nRDATE:20190217T000000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0153500",
    longitude: "-0560500"
  },
  "America/Curacao": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0121100",
    longitude: "-0690000"
  },
  "America/Danmarkshavn": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0764600",
    longitude: "-0184000"
  },
  "America/Dawson": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0700\r\nTZNAME:PDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0800\r\nTZNAME:PST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0640400",
    longitude: "-1392500"
  },
  "America/Dawson_Creek": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0594600",
    longitude: "-1201400"
  },
  "America/Denver": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0394421",
    longitude: "-1045903"
  },
  "America/Detroit": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0421953",
    longitude: "-0830245"
  },
  "America/Dominica": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0151800",
    longitude: "-0612400"
  },
  "America/Edmonton": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0533300",
    longitude: "-1132800"
  },
  "America/Eirunepe": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0064000",
    longitude: "-0695200"
  },
  "America/El_Salvador": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0134200",
    longitude: "-0891200"
  },
  "America/Fort_Nelson": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0584800",
    longitude: "-1224200"
  },
  "America/Fortaleza": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0034300",
    longitude: "-0383000"
  },
  "America/Glace_Bay": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:ADT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0461200",
    longitude: "-0595700"
  },
  "America/Godthab": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0200\r\nTZNAME:-02\r\nDTSTART:19700328T220000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0200\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19701024T230000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\r\nEND:STANDARD"
    ],
    latitude: "+0641100",
    longitude: "-0514400"
  },
  "America/Goose_Bay": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:ADT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0532000",
    longitude: "-0602500"
  },
  "America/Grand_Turk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:20181104T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:20190310T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:20180311T020000\r\nRDATE:20180311T020000\r\nEND:DAYLIGHT"
    ],
    latitude: "+0212800",
    longitude: "-0710800"
  },
  "America/Grenada": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0120300",
    longitude: "-0614500"
  },
  "America/Guadeloupe": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0161400",
    longitude: "-0613200"
  },
  "America/Guatemala": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0143800",
    longitude: "-0903100"
  },
  "America/Guayaquil": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0021000",
    longitude: "-0795000"
  },
  "America/Guyana": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0064800",
    longitude: "-0581000"
  },
  "America/Halifax": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:ADT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0443900",
    longitude: "-0633600"
  },
  "America/Havana": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:CST\r\nDTSTART:19701101T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:CDT\r\nDTSTART:19700308T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0230800",
    longitude: "-0822200"
  },
  "America/Hermosillo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0290400",
    longitude: "-1105800"
  },
  "America/Indiana/Indianapolis": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0394606",
    longitude: "-0860929"
  },
  "America/Indiana/Knox": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0411745",
    longitude: "-0863730"
  },
  "America/Indiana/Marengo": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0382232",
    longitude: "-0862041"
  },
  "America/Indiana/Petersburg": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0382931",
    longitude: "-0871643"
  },
  "America/Indiana/Tell_City": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0375711",
    longitude: "-0864541"
  },
  "America/Indiana/Vevay": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0384452",
    longitude: "-0850402"
  },
  "America/Indiana/Vincennes": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0384038",
    longitude: "-0873143"
  },
  "America/Indiana/Winamac": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0410305",
    longitude: "-0863611"
  },
  "America/Inuvik": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0682059",
    longitude: "-1334300"
  },
  "America/Iqaluit": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0634400",
    longitude: "-0682800"
  },
  "America/Jamaica": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0175805",
    longitude: "-0764736"
  },
  "America/Juneau": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0800\r\nTZNAME:AKDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0581807",
    longitude: "-1342511"
  },
  "America/Kentucky/Louisville": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0381515",
    longitude: "-0854534"
  },
  "America/Kentucky/Monticello": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0364947",
    longitude: "-0845057"
  },
  "America/Kralendijk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0120903",
    longitude: "-0681636"
  },
  "America/La_Paz": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0163000",
    longitude: "-0680900"
  },
  "America/Lima": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0120300",
    longitude: "-0770300"
  },
  "America/Los_Angeles": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0700\r\nTZNAME:PDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0800\r\nTZNAME:PST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0340308",
    longitude: "-1181434"
  },
  "America/Lower_Princes": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0180305",
    longitude: "-0630250"
  },
  "America/Maceio": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0094000",
    longitude: "-0354300"
  },
  "America/Managua": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0120900",
    longitude: "-0861700"
  },
  "America/Manaus": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0030800",
    longitude: "-0600100"
  },
  "America/Marigot": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0180400",
    longitude: "-0630500"
  },
  "America/Martinique": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0143600",
    longitude: "-0610500"
  },
  "America/Matamoros": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0255000",
    longitude: "-0973000"
  },
  "America/Mazatlan": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0231300",
    longitude: "-1062500"
  },
  "America/Menominee": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0450628",
    longitude: "-0873651"
  },
  "America/Merida": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0205800",
    longitude: "-0893700"
  },
  "America/Metlakatla": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0800\r\nTZNAME:AKDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:20191103T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0800\r\nTZNAME:PST\r\nDTSTART:20181104T020000\r\nRDATE:20181104T020000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:20190120T020000\r\nRDATE:20190120T020000\r\nEND:STANDARD"
    ],
    latitude: "+0550737",
    longitude: "-1313435"
  },
  "America/Mexico_City": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0192400",
    longitude: "-0990900"
  },
  "America/Miquelon": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0200\r\nTZNAME:-02\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0200\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0470300",
    longitude: "-0562000"
  },
  "America/Moncton": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:ADT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0460600",
    longitude: "-0644700"
  },
  "America/Monterrey": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0254000",
    longitude: "-1001900"
  },
  "America/Montevideo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0345433",
    longitude: "-0561245"
  },
  "America/Montserrat": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0164300",
    longitude: "-0621300"
  },
  "America/Nassau": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0250500",
    longitude: "-0772100"
  },
  "America/New_York": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0404251",
    longitude: "-0740023"
  },
  "America/Nipigon": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0490100",
    longitude: "-0881600"
  },
  "America/Nome": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0800\r\nTZNAME:AKDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0643004",
    longitude: "-1652423"
  },
  "America/Noronha": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0200\r\nTZOFFSETTO:-0200\r\nTZNAME:-02\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0035100",
    longitude: "-0322500"
  },
  "America/North_Dakota/Beulah": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0471551",
    longitude: "-1014640"
  },
  "America/North_Dakota/Center": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0470659",
    longitude: "-1011757"
  },
  "America/North_Dakota/New_Salem": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0465042",
    longitude: "-1012439"
  },
  "America/Ojinaga": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0293400",
    longitude: "-1042500"
  },
  "America/Panama": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0085800",
    longitude: "-0793200"
  },
  "America/Pangnirtung": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0660800",
    longitude: "-0654400"
  },
  "America/Paramaribo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0055000",
    longitude: "-0551000"
  },
  "America/Phoenix": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0332654",
    longitude: "-1120424"
  },
  "America/Port-au-Prince": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0183200",
    longitude: "-0722000"
  },
  "America/Port_of_Spain": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0103900",
    longitude: "-0613100"
  },
  "America/Porto_Velho": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0084600",
    longitude: "-0635400"
  },
  "America/Puerto_Rico": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0182806",
    longitude: "-0660622"
  },
  "America/Punta_Arenas": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0530900",
    longitude: "-0705500"
  },
  "America/Rainy_River": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0484300",
    longitude: "-0943400"
  },
  "America/Rankin_Inlet": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0624900",
    longitude: "-0920459"
  },
  "America/Recife": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0080300",
    longitude: "-0345400"
  },
  "America/Regina": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0502400",
    longitude: "-1043900"
  },
  "America/Resolute": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0744144",
    longitude: "-0944945"
  },
  "America/Rio_Branco": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0095800",
    longitude: "-0674800"
  },
  "America/Santarem": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0022600",
    longitude: "-0545200"
  },
  "America/Santiago": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:20190407T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=2,3,4,5,6,7,8;BYDAY=SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:20190908T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=2,3,4,5,6,7,8;BYDAY=SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:20180812T000000\r\nRDATE:20180812T000000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:-04\r\nDTSTART:20180513T000000\r\nRDATE:20180513T000000\r\nEND:STANDARD"
    ],
    latitude: "-0332700",
    longitude: "-0704000"
  },
  "America/Santo_Domingo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0182800",
    longitude: "-0695400"
  },
  "America/Sao_Paulo": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0200\r\nTZNAME:-02\r\nDTSTART:20181104T000000\r\nRDATE:20181104T000000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0200\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:20180218T000000\r\nRDATE:20180218T000000\r\nRDATE:20190217T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0200\r\nTZOFFSETTO:-0200\r\nTZNAME:-02\r\nDTSTART:19700101T000000\r\nEND:DAYLIGHT"
    ],
    latitude: "-0233200",
    longitude: "-0463700"
  },
  "America/Scoresbysund": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:19700329T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:-0100\r\nTZNAME:-01\r\nDTSTART:19701025T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0702900",
    longitude: "-0215800"
  },
  "America/Sitka": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0800\r\nTZNAME:AKDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0571035",
    longitude: "-1351807"
  },
  "America/St_Barthelemy": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0175300",
    longitude: "-0625100"
  },
  "America/St_Johns": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0230\r\nTZOFFSETTO:-0330\r\nTZNAME:NST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0330\r\nTZOFFSETTO:-0230\r\nTZNAME:NDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0473400",
    longitude: "-0524300"
  },
  "America/St_Kitts": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0171800",
    longitude: "-0624300"
  },
  "America/St_Lucia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0140100",
    longitude: "-0610000"
  },
  "America/St_Thomas": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0182100",
    longitude: "-0645600"
  },
  "America/St_Vincent": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0130900",
    longitude: "-0611400"
  },
  "America/Swift_Current": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0501700",
    longitude: "-1075000"
  },
  "America/Tegucigalpa": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0140600",
    longitude: "-0871300"
  },
  "America/Thule": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:ADT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0763400",
    longitude: "-0684700"
  },
  "America/Thunder_Bay": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0482300",
    longitude: "-0891500"
  },
  "America/Tijuana": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0700\r\nTZNAME:PDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0800\r\nTZNAME:PST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0323200",
    longitude: "-1170100"
  },
  "America/Toronto": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0400\r\nTZNAME:EDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0500\r\nTZNAME:EST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0433900",
    longitude: "-0792300"
  },
  "America/Tortola": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0182700",
    longitude: "-0643700"
  },
  "America/Vancouver": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0700\r\nTZNAME:PDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0800\r\nTZNAME:PST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0491600",
    longitude: "-1230700"
  },
  "America/Whitehorse": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0700\r\nTZNAME:PDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0800\r\nTZNAME:PST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0604300",
    longitude: "-1350300"
  },
  "America/Winnipeg": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:CDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:CST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0495300",
    longitude: "-0970900"
  },
  "America/Yakutat": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0800\r\nTZNAME:AKDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0900\r\nTZNAME:AKST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0593249",
    longitude: "-1394338"
  },
  "America/Yellowknife": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0700\r\nTZOFFSETTO:-0600\r\nTZNAME:MDT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0700\r\nTZNAME:MST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0622700",
    longitude: "-1142100"
  },
  "Antarctica/Casey": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:20180311T040000\r\nRDATE:20180311T040000\r\nEND:STANDARD"
    ],
    latitude: "-0661700",
    longitude: "+1103100"
  },
  "Antarctica/Davis": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0683500",
    longitude: "+0775800"
  },
  "Antarctica/DumontDUrville": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:+10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0664000",
    longitude: "+1400100"
  },
  "Antarctica/Macquarie": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0543000",
    longitude: "+1585700"
  },
  "Antarctica/Mawson": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0673600",
    longitude: "+0625300"
  },
  "Antarctica/McMurdo": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1300\r\nTZNAME:NZDT\r\nDTSTART:19700927T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1200\r\nTZNAME:NZST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "-0775000",
    longitude: "+1663600"
  },
  "Antarctica/Palmer": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0644800",
    longitude: "-0640600"
  },
  "Antarctica/Rothera": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0673400",
    longitude: "-0680800"
  },
  "Antarctica/Syowa": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0690022",
    longitude: "+0393524"
  },
  "Antarctica/Troll": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0200\r\nTZNAME:+02\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "-0720041",
    longitude: "+0023206"
  },
  "Antarctica/Vostok": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0782400",
    longitude: "+1065400"
  },
  "Arctic/Longyearbyen": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0780000",
    longitude: "+0160000"
  },
  "Asia/Aden": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0124500",
    longitude: "+0451200"
  },
  "Asia/Almaty": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0431500",
    longitude: "+0765700"
  },
  "Asia/Amman": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700326T235959\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1TH\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701030T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\r\nEND:STANDARD"
    ],
    latitude: "+0315700",
    longitude: "+0355600"
  },
  "Asia/Anadyr": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0644500",
    longitude: "+1772900"
  },
  "Asia/Aqtau": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0443100",
    longitude: "+0501600"
  },
  "Asia/Aqtobe": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0501700",
    longitude: "+0571000"
  },
  "Asia/Ashgabat": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0375700",
    longitude: "+0582300"
  },
  "Asia/Atyrau": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0470700",
    longitude: "+0515600"
  },
  "Asia/Baghdad": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0332100",
    longitude: "+0442500"
  },
  "Asia/Bahrain": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0262300",
    longitude: "+0503500"
  },
  "Asia/Baku": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0402300",
    longitude: "+0495100"
  },
  "Asia/Bangkok": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0134500",
    longitude: "+1003100"
  },
  "Asia/Barnaul": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0532200",
    longitude: "+0834500"
  },
  "Asia/Beirut": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0335300",
    longitude: "+0353000"
  },
  "Asia/Bishkek": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0425400",
    longitude: "+0743600"
  },
  "Asia/Brunei": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0045600",
    longitude: "+1145500"
  },
  "Asia/Chita": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:+09\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0520300",
    longitude: "+1132800"
  },
  "Asia/Choibalsan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0480400",
    longitude: "+1143000"
  },
  "Asia/Colombo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0530\r\nTZOFFSETTO:+0530\r\nTZNAME:+0530\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0065600",
    longitude: "+0795100"
  },
  "Asia/Damascus": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701030T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700327T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\r\nEND:DAYLIGHT"
    ],
    latitude: "+0333000",
    longitude: "+0361800"
  },
  "Asia/Dhaka": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0234300",
    longitude: "+0902500"
  },
  "Asia/Dili": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:+09\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0083300",
    longitude: "+1253500"
  },
  "Asia/Dubai": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0251800",
    longitude: "+0551800"
  },
  "Asia/Dushanbe": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0383500",
    longitude: "+0684800"
  },
  "Asia/Famagusta": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:20180325T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0350700",
    longitude: "+0335700"
  },
  "Asia/Gaza": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701031T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:20190329T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\r\nEND:DAYLIGHT",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:20180324T010000\r\nRDATE:20180324T010000\r\nEND:DAYLIGHT"
    ],
    latitude: "+0313000",
    longitude: "+0342800"
  },
  "Asia/Hebron": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701031T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:20190329T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\r\nEND:DAYLIGHT",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:20180324T010000\r\nRDATE:20180324T010000\r\nEND:DAYLIGHT"
    ],
    latitude: "+0313200",
    longitude: "+0350542"
  },
  "Asia/Ho_Chi_Minh": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0104500",
    longitude: "+1064000"
  },
  "Asia/Hong_Kong": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:HKT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0221700",
    longitude: "+1140900"
  },
  "Asia/Hovd": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0480100",
    longitude: "+0913900"
  },
  "Asia/Irkutsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0521600",
    longitude: "+1042000"
  },
  "Asia/Istanbul": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0410100",
    longitude: "+0285800"
  },
  "Asia/Jakarta": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:WIB\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0061000",
    longitude: "+1064800"
  },
  "Asia/Jayapura": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:WIT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0023200",
    longitude: "+1404200"
  },
  "Asia/Jerusalem": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:IDT\r\nDTSTART:19700327T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=23,24,25,26,27,28,29;BYDAY=FR\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:IST\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0314650",
    longitude: "+0351326"
  },
  "Asia/Kabul": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0430\r\nTZOFFSETTO:+0430\r\nTZNAME:+0430\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0343100",
    longitude: "+0691200"
  },
  "Asia/Kamchatka": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0530100",
    longitude: "+1583900"
  },
  "Asia/Karachi": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:PKT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0245200",
    longitude: "+0670300"
  },
  "Asia/Kathmandu": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0545\r\nTZOFFSETTO:+0545\r\nTZNAME:+0545\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0274300",
    longitude: "+0851900"
  },
  "Asia/Khandyga": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:+09\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0623923",
    longitude: "+1353314"
  },
  "Asia/Kolkata": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0530\r\nTZOFFSETTO:+0530\r\nTZNAME:IST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0223200",
    longitude: "+0882200"
  },
  "Asia/Krasnoyarsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0560100",
    longitude: "+0925000"
  },
  "Asia/Kuala_Lumpur": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0031000",
    longitude: "+1014200"
  },
  "Asia/Kuching": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0013300",
    longitude: "+1102000"
  },
  "Asia/Kuwait": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0292000",
    longitude: "+0475900"
  },
  "Asia/Macau": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0221150",
    longitude: "+1133230"
  },
  "Asia/Magadan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0593400",
    longitude: "+1504800"
  },
  "Asia/Makassar": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:WITA\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0050700",
    longitude: "+1192400"
  },
  "Asia/Manila": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:PST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0143500",
    longitude: "+1210000"
  },
  "Asia/Muscat": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0233600",
    longitude: "+0583500"
  },
  "Asia/Nicosia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0351000",
    longitude: "+0332200"
  },
  "Asia/Novokuznetsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0534500",
    longitude: "+0870700"
  },
  "Asia/Novosibirsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0550200",
    longitude: "+0825500"
  },
  "Asia/Omsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0550000",
    longitude: "+0732400"
  },
  "Asia/Oral": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0511300",
    longitude: "+0512100"
  },
  "Asia/Phnom_Penh": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0113300",
    longitude: "+1045500"
  },
  "Asia/Pontianak": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:WIB\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0000200",
    longitude: "+1092000"
  },
  "Asia/Pyongyang": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0830\r\nTZNAME:KST\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0830\r\nTZOFFSETTO:+0900\r\nTZNAME:KST\r\nDTSTART:20180504T233000\r\nRDATE:20180504T233000\r\nEND:STANDARD"
    ],
    latitude: "+0390100",
    longitude: "+1254500"
  },
  "Asia/Qatar": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0251700",
    longitude: "+0513200"
  },
  "Asia/Qostanay": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0531200",
    longitude: "+0633700"
  },
  "Asia/Qyzylorda": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:20181221T000000\r\nRDATE:20181221T000000\r\nEND:STANDARD"
    ],
    latitude: "+0444800",
    longitude: "+0652800"
  },
  "Asia/Riyadh": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0243800",
    longitude: "+0464300"
  },
  "Asia/Sakhalin": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0465800",
    longitude: "+1424200"
  },
  "Asia/Samarkand": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0394000",
    longitude: "+0664800"
  },
  "Asia/Seoul": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:KST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0373300",
    longitude: "+1265800"
  },
  "Asia/Shanghai": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0311400",
    longitude: "+1212800"
  },
  "Asia/Singapore": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0011700",
    longitude: "+1035100"
  },
  "Asia/Srednekolymsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0672800",
    longitude: "+1534300"
  },
  "Asia/Taipei": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:CST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0250300",
    longitude: "+1213000"
  },
  "Asia/Tashkent": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0412000",
    longitude: "+0691800"
  },
  "Asia/Tbilisi": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0414300",
    longitude: "+0444900"
  },
  "Asia/Tehran": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0330\r\nTZNAME:+0330\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0330\r\nTZOFFSETTO:+0430\r\nTZNAME:+0430\r\nDTSTART:20180321T235959\r\nRDATE:20180321T235959\r\nRDATE:20190321T235959\r\nRDATE:20200320T235959\r\nRDATE:20210321T235959\r\nRDATE:20220321T235959\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0430\r\nTZOFFSETTO:+0330\r\nTZNAME:+0330\r\nDTSTART:20180921T235959\r\nRDATE:20180921T235959\r\nRDATE:20190921T235959\r\nRDATE:20200920T235959\r\nRDATE:20210921T235959\r\nRDATE:20220921T235959\r\nEND:STANDARD"
    ],
    latitude: "+0354000",
    longitude: "+0512600"
  },
  "Asia/Thimphu": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0272800",
    longitude: "+0893900"
  },
  "Asia/Tokyo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:JST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0353916",
    longitude: "+1394441"
  },
  "Asia/Tomsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0563000",
    longitude: "+0845800"
  },
  "Asia/Ulaanbaatar": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:+08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0475500",
    longitude: "+1065300"
  },
  "Asia/Urumqi": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0434800",
    longitude: "+0873500"
  },
  "Asia/Ust-Nera": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:+10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0643337",
    longitude: "+1431336"
  },
  "Asia/Vientiane": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0175800",
    longitude: "+1023600"
  },
  "Asia/Vladivostok": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:+10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0431000",
    longitude: "+1315600"
  },
  "Asia/Yakutsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:+09\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0620000",
    longitude: "+1294000"
  },
  "Asia/Yangon": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0630\r\nTZOFFSETTO:+0630\r\nTZNAME:+0630\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0164700",
    longitude: "+0961000"
  },
  "Asia/Yekaterinburg": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0565100",
    longitude: "+0603600"
  },
  "Asia/Yerevan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0401100",
    longitude: "+0443000"
  },
  "Atlantic/Azores": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0100\r\nTZOFFSETTO:+0000\r\nTZNAME:+00\r\nDTSTART:19700329T000000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:-0100\r\nTZNAME:-01\r\nDTSTART:19701025T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0374400",
    longitude: "-0254000"
  },
  "Atlantic/Bermuda": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0400\r\nTZOFFSETTO:-0300\r\nTZNAME:ADT\r\nDTSTART:19700308T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0400\r\nTZNAME:AST\r\nDTSTART:19701101T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "+0321700",
    longitude: "-0644600"
  },
  "Atlantic/Canary": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:WEST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:WET\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0280600",
    longitude: "-0152400"
  },
  "Atlantic/Cape_Verde": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0100\r\nTZOFFSETTO:-0100\r\nTZNAME:-01\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0145500",
    longitude: "-0233100"
  },
  "Atlantic/Faroe": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:WEST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:WET\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0620100",
    longitude: "-0064600"
  },
  "Atlantic/Madeira": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:WEST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:WET\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0323800",
    longitude: "-0165400"
  },
  "Atlantic/Reykjavik": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0640900",
    longitude: "-0215100"
  },
  "Atlantic/South_Georgia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0200\r\nTZOFFSETTO:-0200\r\nTZNAME:-02\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0541600",
    longitude: "-0363200"
  },
  "Atlantic/St_Helena": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0155500",
    longitude: "-0054200"
  },
  "Atlantic/Stanley": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0514200",
    longitude: "-0575100"
  },
  "Australia/Adelaide": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1030\r\nTZOFFSETTO:+0930\r\nTZNAME:ACST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0930\r\nTZOFFSETTO:+1030\r\nTZNAME:ACDT\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "-0345500",
    longitude: "+1383500"
  },
  "Australia/Brisbane": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:AEST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0272800",
    longitude: "+1530200"
  },
  "Australia/Broken_Hill": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1030\r\nTZOFFSETTO:+0930\r\nTZNAME:ACST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0930\r\nTZOFFSETTO:+1030\r\nTZNAME:ACDT\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "-0315700",
    longitude: "+1412700"
  },
  "Australia/Currie": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1100\r\nTZNAME:AEDT\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1000\r\nTZNAME:AEST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "-0395600",
    longitude: "+1435200"
  },
  "Australia/Darwin": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0930\r\nTZOFFSETTO:+0930\r\nTZNAME:ACST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0122800",
    longitude: "+1305000"
  },
  "Australia/Eucla": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0845\r\nTZOFFSETTO:+0845\r\nTZNAME:+0845\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0314300",
    longitude: "+1285200"
  },
  "Australia/Hobart": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1100\r\nTZNAME:AEDT\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1000\r\nTZNAME:AEST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "-0425300",
    longitude: "+1471900"
  },
  "Australia/Lindeman": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:AEST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0201600",
    longitude: "+1490000"
  },
  "Australia/Lord_Howe": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1030\r\nTZNAME:+1030\r\nDTSTART:19700405T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1030\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "-0313300",
    longitude: "+1590500"
  },
  "Australia/Melbourne": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1000\r\nTZNAME:AEST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1100\r\nTZNAME:AEDT\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "-0374900",
    longitude: "+1445800"
  },
  "Australia/Perth": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0800\r\nTZOFFSETTO:+0800\r\nTZNAME:AWST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0315700",
    longitude: "+1155100"
  },
  "Australia/Sydney": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1000\r\nTZNAME:AEST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1100\r\nTZNAME:AEDT\r\nDTSTART:19701004T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "-0335200",
    longitude: "+1511300"
  },
  "Europe/Amsterdam": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0522200",
    longitude: "+0045400"
  },
  "Europe/Andorra": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0423000",
    longitude: "+0013100"
  },
  "Europe/Astrakhan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0462100",
    longitude: "+0480300"
  },
  "Europe/Athens": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0375800",
    longitude: "+0234300"
  },
  "Europe/Belgrade": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0445000",
    longitude: "+0203000"
  },
  "Europe/Berlin": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0523000",
    longitude: "+0132200"
  },
  "Europe/Bratislava": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0480900",
    longitude: "+0170700"
  },
  "Europe/Brussels": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0505000",
    longitude: "+0042000"
  },
  "Europe/Bucharest": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0442600",
    longitude: "+0260600"
  },
  "Europe/Budapest": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0473000",
    longitude: "+0190500"
  },
  "Europe/Busingen": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0474200",
    longitude: "+0084100"
  },
  "Europe/Chisinau": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0470000",
    longitude: "+0285000"
  },
  "Europe/Copenhagen": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0554000",
    longitude: "+0123500"
  },
  "Europe/Dublin": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:IST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0532000",
    longitude: "-0061500"
  },
  "Europe/Gibraltar": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0360800",
    longitude: "-0052100"
  },
  "Europe/Guernsey": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:BST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0492717",
    longitude: "-0023210"
  },
  "Europe/Helsinki": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0601000",
    longitude: "+0245800"
  },
  "Europe/Isle_of_Man": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:BST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0540900",
    longitude: "-0042800"
  },
  "Europe/Istanbul": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0410100",
    longitude: "+0285800"
  },
  "Europe/Jersey": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:BST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0491101",
    longitude: "-0020624"
  },
  "Europe/Kaliningrad": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0544300",
    longitude: "+0203000"
  },
  "Europe/Kiev": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0502600",
    longitude: "+0303100"
  },
  "Europe/Kirov": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0583600",
    longitude: "+0493900"
  },
  "Europe/Lisbon": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:WET\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:WEST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0384300",
    longitude: "-0090800"
  },
  "Europe/Ljubljana": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0460300",
    longitude: "+0143100"
  },
  "Europe/London": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:BST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:GMT\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0513030",
    longitude: "+0000731"
  },
  "Europe/Luxembourg": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0493600",
    longitude: "+0060900"
  },
  "Europe/Madrid": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0402400",
    longitude: "-0034100"
  },
  "Europe/Malta": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0355400",
    longitude: "+0143100"
  },
  "Europe/Mariehamn": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0600600",
    longitude: "+0195700"
  },
  "Europe/Minsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0535400",
    longitude: "+0273400"
  },
  "Europe/Monaco": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0434200",
    longitude: "+0072300"
  },
  "Europe/Moscow": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:MSK\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0554521",
    longitude: "+0373704"
  },
  "Europe/Nicosia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "+0351000",
    longitude: "+0332200"
  },
  "Europe/Oslo": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0595500",
    longitude: "+0104500"
  },
  "Europe/Paris": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0485200",
    longitude: "+0022000"
  },
  "Europe/Podgorica": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0422600",
    longitude: "+0191600"
  },
  "Europe/Prague": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0500500",
    longitude: "+0142600"
  },
  "Europe/Riga": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0565700",
    longitude: "+0240600"
  },
  "Europe/Rome": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0415400",
    longitude: "+0122900"
  },
  "Europe/Samara": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0531200",
    longitude: "+0500900"
  },
  "Europe/San_Marino": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0435500",
    longitude: "+0122800"
  },
  "Europe/Sarajevo": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0435200",
    longitude: "+0182500"
  },
  "Europe/Saratov": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0513400",
    longitude: "+0460200"
  },
  "Europe/Simferopol": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:MSK\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0445700",
    longitude: "+0340600"
  },
  "Europe/Skopje": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0415900",
    longitude: "+0212600"
  },
  "Europe/Sofia": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0424100",
    longitude: "+0231900"
  },
  "Europe/Stockholm": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0592000",
    longitude: "+0180300"
  },
  "Europe/Tallinn": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0592500",
    longitude: "+0244500"
  },
  "Europe/Tirane": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0412000",
    longitude: "+0195000"
  },
  "Europe/Ulyanovsk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0542000",
    longitude: "+0482400"
  },
  "Europe/Uzhgorod": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0483700",
    longitude: "+0221800"
  },
  "Europe/Vaduz": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0470900",
    longitude: "+0093100"
  },
  "Europe/Vatican": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0415408",
    longitude: "+0122711"
  },
  "Europe/Vienna": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0481300",
    longitude: "+0162000"
  },
  "Europe/Vilnius": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0544100",
    longitude: "+0251900"
  },
  "Europe/Volgograd": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:20181028T020000\r\nRDATE:20181028T020000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0300\r\nTZNAME:+03\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0484400",
    longitude: "+0442500"
  },
  "Europe/Warsaw": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0521500",
    longitude: "+0210000"
  },
  "Europe/Zagreb": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0454800",
    longitude: "+0155800"
  },
  "Europe/Zaporozhye": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0300\r\nTZNAME:EEST\r\nDTSTART:19700329T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0200\r\nTZNAME:EET\r\nDTSTART:19701025T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0475000",
    longitude: "+0351000"
  },
  "Europe/Zurich": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0200\r\nTZNAME:CEST\r\nDTSTART:19700329T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0200\r\nTZOFFSETTO:+0100\r\nTZNAME:CET\r\nDTSTART:19701025T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD"
    ],
    latitude: "+0472300",
    longitude: "+0083200"
  },
  "Indian/Antananarivo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0185500",
    longitude: "+0473100"
  },
  "Indian/Chagos": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0600\r\nTZOFFSETTO:+0600\r\nTZNAME:+06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0072000",
    longitude: "+0722500"
  },
  "Indian/Christmas": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0700\r\nTZOFFSETTO:+0700\r\nTZNAME:+07\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0102500",
    longitude: "+1054300"
  },
  "Indian/Cocos": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0630\r\nTZOFFSETTO:+0630\r\nTZNAME:+0630\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0121000",
    longitude: "+0965500"
  },
  "Indian/Comoro": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0114100",
    longitude: "+0431600"
  },
  "Indian/Kerguelen": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0492110",
    longitude: "+0701303"
  },
  "Indian/Mahe": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0044000",
    longitude: "+0552800"
  },
  "Indian/Maldives": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0500\r\nTZOFFSETTO:+0500\r\nTZNAME:+05\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0041000",
    longitude: "+0733000"
  },
  "Indian/Mauritius": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0201000",
    longitude: "+0573000"
  },
  "Indian/Mayotte": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0300\r\nTZOFFSETTO:+0300\r\nTZNAME:EAT\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0124700",
    longitude: "+0451400"
  },
  "Indian/Reunion": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0400\r\nTZOFFSETTO:+0400\r\nTZNAME:+04\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0205200",
    longitude: "+0552800"
  },
  "Pacific/Apia": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1400\r\nTZOFFSETTO:+1300\r\nTZNAME:+13\r\nDTSTART:19700405T040000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1400\r\nTZNAME:+14\r\nDTSTART:19700927T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r\nEND:DAYLIGHT"
    ],
    latitude: "-0135000",
    longitude: "-1714400"
  },
  "Pacific/Auckland": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1300\r\nTZNAME:NZDT\r\nDTSTART:19700927T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1200\r\nTZNAME:NZST\r\nDTSTART:19700405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "-0365200",
    longitude: "+1744600"
  },
  "Pacific/Bougainville": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0061300",
    longitude: "+1553400"
  },
  "Pacific/Chatham": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1245\r\nTZOFFSETTO:+1345\r\nTZNAME:+1345\r\nDTSTART:19700927T024500\r\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1345\r\nTZOFFSETTO:+1245\r\nTZNAME:+1245\r\nDTSTART:19700405T034500\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD"
    ],
    latitude: "-0435700",
    longitude: "-1763300"
  },
  "Pacific/Chuuk": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:+10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0072500",
    longitude: "+1514700"
  },
  "Pacific/Easter": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:-06\r\nDTSTART:20190406T220000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SA\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:20190907T220000\r\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=1SA\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:-06\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0500\r\nTZNAME:-05\r\nDTSTART:20180811T220000\r\nRDATE:20180811T220000\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0500\r\nTZOFFSETTO:-0600\r\nTZNAME:-06\r\nDTSTART:20180512T220000\r\nRDATE:20180512T220000\r\nEND:STANDARD"
    ],
    latitude: "-0270900",
    longitude: "-1092600"
  },
  "Pacific/Efate": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0174000",
    longitude: "+1682500"
  },
  "Pacific/Enderbury": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1300\r\nTZNAME:+13\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0030800",
    longitude: "-1710500"
  },
  "Pacific/Fakaofo": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1300\r\nTZNAME:+13\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0092200",
    longitude: "-1711400"
  },
  "Pacific/Fiji": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700118T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=12,13,14,15,16,17,18;BYDAY=SU\r\nEND:STANDARD",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1300\r\nTZNAME:+13\r\nDTSTART:20191110T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=2SU\r\nEND:DAYLIGHT",
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1300\r\nTZNAME:+13\r\nDTSTART:20181104T020000\r\nRDATE:20181104T020000\r\nEND:DAYLIGHT"
    ],
    latitude: "-0180800",
    longitude: "+1782500"
  },
  "Pacific/Funafuti": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0083100",
    longitude: "+1791300"
  },
  "Pacific/Galapagos": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0600\r\nTZOFFSETTO:-0600\r\nTZNAME:-06\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0005400",
    longitude: "-0893600"
  },
  "Pacific/Gambier": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0900\r\nTZOFFSETTO:-0900\r\nTZNAME:-09\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0230800",
    longitude: "-1345700"
  },
  "Pacific/Guadalcanal": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0093200",
    longitude: "+1601200"
  },
  "Pacific/Guam": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:ChST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0132800",
    longitude: "+1444500"
  },
  "Pacific/Honolulu": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-1000\r\nTZOFFSETTO:-1000\r\nTZNAME:HST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0211825",
    longitude: "-1575130"
  },
  "Pacific/Kiritimati": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1400\r\nTZOFFSETTO:+1400\r\nTZNAME:+14\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0015200",
    longitude: "-1572000"
  },
  "Pacific/Kosrae": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0051900",
    longitude: "+1625900"
  },
  "Pacific/Kwajalein": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0090500",
    longitude: "+1672000"
  },
  "Pacific/Majuro": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0070900",
    longitude: "+1711200"
  },
  "Pacific/Marquesas": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0930\r\nTZOFFSETTO:-0930\r\nTZNAME:-0930\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0090000",
    longitude: "-1393000"
  },
  "Pacific/Midway": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-1100\r\nTZOFFSETTO:-1100\r\nTZNAME:SST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0281300",
    longitude: "-1772200"
  },
  "Pacific/Nauru": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0003100",
    longitude: "+1665500"
  },
  "Pacific/Niue": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-1100\r\nTZOFFSETTO:-1100\r\nTZNAME:-11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0190100",
    longitude: "-1695500"
  },
  "Pacific/Norfolk": {
    ics: [
      "BEGIN:DAYLIGHT\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:20191006T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r\nEND:DAYLIGHT",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:20200405T030000\r\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1130\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD",
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:20190701T000000\r\nRDATE:20190701T000000\r\nEND:STANDARD"
    ],
    latitude: "-0290300",
    longitude: "+1675800"
  },
  "Pacific/Noumea": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0221600",
    longitude: "+1662700"
  },
  "Pacific/Pago_Pago": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-1100\r\nTZOFFSETTO:-1100\r\nTZNAME:SST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0141600",
    longitude: "-1704200"
  },
  "Pacific/Palau": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+0900\r\nTZOFFSETTO:+0900\r\nTZNAME:+09\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0072000",
    longitude: "+1342900"
  },
  "Pacific/Pitcairn": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-0800\r\nTZOFFSETTO:-0800\r\nTZNAME:-08\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0250400",
    longitude: "-1300500"
  },
  "Pacific/Pohnpei": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1100\r\nTZOFFSETTO:+1100\r\nTZNAME:+11\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0065800",
    longitude: "+1581300"
  },
  "Pacific/Port_Moresby": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:+10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0093000",
    longitude: "+1471000"
  },
  "Pacific/Rarotonga": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-1000\r\nTZOFFSETTO:-1000\r\nTZNAME:-10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0211400",
    longitude: "-1594600"
  },
  "Pacific/Saipan": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1000\r\nTZOFFSETTO:+1000\r\nTZNAME:ChST\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0151200",
    longitude: "+1454500"
  },
  "Pacific/Tahiti": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:-1000\r\nTZOFFSETTO:-1000\r\nTZNAME:-10\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0173200",
    longitude: "-1493400"
  },
  "Pacific/Tarawa": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0012500",
    longitude: "+1730000"
  },
  "Pacific/Tongatapu": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1300\r\nTZOFFSETTO:+1300\r\nTZNAME:+13\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0211000",
    longitude: "-1751000"
  },
  "Pacific/Wake": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "+0191700",
    longitude: "+1663700"
  },
  "Pacific/Wallis": {
    ics: [
      "BEGIN:STANDARD\r\nTZOFFSETFROM:+1200\r\nTZOFFSETTO:+1200\r\nTZNAME:+12\r\nDTSTART:19700101T000000\r\nEND:STANDARD"
    ],
    latitude: "-0131800",
    longitude: "-1761000"
  }
};
const tzData = {
  version,
  aliases,
  zones
};
/**
 * @copyright Copyright (c) 2019 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
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
const timezoneManager = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneManager)();
let initialized = false;
function getTimezoneManager() {
  if (!initialized) {
    initialize();
  }
  return timezoneManager;
}
function initialize() {
  _logger_NqlBlfJu_mjs__WEBPACK_IMPORTED_MODULE_1__.l.debug(`Using version ${tzData.version} of the timezone database`);
  for (const tzid in tzData.zones) {
    if (Object.prototype.hasOwnProperty.call(tzData.zones, [tzid])) {
      const ics = [
        "BEGIN:VTIMEZONE",
        "TZID:" + tzid,
        ...tzData.zones[tzid].ics,
        "END:VTIMEZONE"
      ].join("\r\n");
      timezoneManager.registerTimezoneFromICS(tzid, ics);
    }
  }
  for (const tzid in tzData.aliases) {
    if (Object.prototype.hasOwnProperty.call(tzData.aliases, [tzid])) {
      timezoneManager.registerAlias(tzid, tzData.aliases[tzid].aliasTo);
    }
  }
  initialized = true;
}
(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.A);
const _sfc_main = {
  name: "NcTimezonePicker",
  components: {
    NcSelect: _NcSelect_jC7ShD5p_mjs__WEBPACK_IMPORTED_MODULE_4__.N
  },
  props: {
    /**
     * An array of additional timezones to include with the standard database. Useful if there is a custom timezone, e.g. read from user data
     */
    additionalTimezones: {
      type: Array,
      default: () => []
    },
    /**
     * The selected timezone. Use v-model for two-way binding. The default timezone is floating, which means a time independent of timezone. See https://icalendar.org/CalDAV-Access-RFC-4791/7-3-date-and-floating-time.html for details.
     */
    value: {
      type: String,
      default: "floating"
    },
    /**
     * ID of the inner vue-select element, can be used for labels like: `vs-${uid}__combobox`
     */
    uid: {
      type: [String, Number],
      default: () => `tz-${(0,_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_3__.G)(5)}`
    }
  },
  emits: ["input"],
  computed: {
    placeholder() {
      return (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.a)("Type to search time zone");
    },
    selectedTimezone() {
      for (const additionalTimezone of this.additionalTimezones) {
        if (additionalTimezone.timezoneId === this.value) {
          return additionalTimezone;
        }
      }
      return {
        label: getReadableTimezoneName(this.value),
        timezoneId: this.value
      };
    },
    options() {
      const timezoneManager2 = getTimezoneManager();
      const timezoneList = getSortedTimezoneList(timezoneManager2.listAllTimezones(), this.additionalTimezones);
      let timezonesGrouped = [];
      Object.values(timezoneList).forEach((group) => {
        timezonesGrouped = timezonesGrouped.concat(group.regions);
      });
      return timezonesGrouped;
    }
  },
  methods: {
    t: _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_0__.a,
    change(newValue) {
      if (!newValue) {
        return;
      }
      this.$emit("input", newValue.timezoneId);
    },
    /**
     * Returns whether this is a continent label,
     * or an actual timezone. Continent labels are not selectable.
     *
     * @param {string} option The option
     * @return {boolean}
     */
    isSelectable(option) {
      return !option.timezoneId.startsWith("tz-group__");
    },
    /**
     * Function to filter the timezone list.
     * We search in the timezoneId, so both continent and region names can be matched.
     *
     * @param {object} option The timezone option
     * @param {string} label The label of the timezone
     * @param {string} search The search string
     * @return {boolean}
     */
    filterBy(option, label, search) {
      const terms = search.trim().split(" ");
      if (option.timezoneId.startsWith("tz-group__")) {
        return option.regions.some((region) => {
          return this.matchTimezoneId(region.timezoneId, terms);
        });
      }
      return this.matchTimezoneId(option.timezoneId, terms);
    },
    matchTimezoneId(timezoneId, terms) {
      return terms.every((term) => timezoneId.toLowerCase().includes(term.toLowerCase()));
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcSelect", { attrs: { "aria-label-combobox": _vm.t("Search for time zone"), "clearable": false, "filter-by": _vm.filterBy, "multiple": false, "options": _vm.options, "placeholder": _vm.placeholder, "selectable": _vm.isSelectable, "uid": _vm.uid, "value": _vm.selectedTimezone, "label": "label" }, on: { "option:selected": _vm.change } });
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_5__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const NcTimezonePicker = __component__.exports;

//# sourceMappingURL=NcTimezonePicker-0reZFtNA.mjs.map


/***/ })

}]);
//# sourceMappingURL=nextcloud-vue_dist_Components_NcActionText_mjs-nextcloud-vue_dist_chunks_NcActionInput-Z-VZ4WYV_mjs-nextcloud-vue_dist_Components_NcActionText_mjs-nextcloud-vue_dist_chunks_NcActionInput-Z-VZ4WYV_mjs.js.map?v=24d5530b786629356cb0