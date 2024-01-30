"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nextcloud-vue_dist_Components_NcModal_mjs-nextcloud-vue_dist_chunks_ArrowLeft-CEBdpMA3_mjs-ne-b8d0bb"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css ***!
  \***********************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css ***!
  \***********************************************************************************************/
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

/***/ "../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcModal-ecigA_hy.css ***!
  \*********************************************************/
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

/***/ "../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/assets/Tooltip-Ix4LeJvl.css ***!
  \*********************************************************/
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

/***/ "../nextcloud-vue/dist/Components/NcModal.mjs":
/*!****************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcModal.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "../nextcloud-vue/dist/Directives/Tooltip.mjs":
/*!****************************************************!*\
  !*** ../nextcloud-vue/dist/Directives/Tooltip.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "../nextcloud-vue/dist/chunks/ArrowLeft-CEBdpMA3.mjs":
/*!***********************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/ArrowLeft-CEBdpMA3.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");

const _sfc_main = {
  name: "ArrowLeftIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon arrow-left-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
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
const ArrowLeft = __component__.exports;

//# sourceMappingURL=ArrowLeft-CEBdpMA3.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/emoji-OxwGqnHH.mjs":
/*!*******************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/emoji-OxwGqnHH.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ EmojiSkinTone),
/* harmony export */   a: () => (/* binding */ emojiAddRecent),
/* harmony export */   e: () => (/* binding */ emojiSearch),
/* harmony export */   g: () => (/* binding */ getCurrentSkinTone),
/* harmony export */   s: () => (/* binding */ setCurrentSkinTone)
/* harmony export */ });
/* harmony import */ var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/browser-storage */ "../nextcloud-vue/node_modules/@nextcloud/browser-storage/dist/index.js");
/* harmony import */ var emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emoji-mart-vue-fast */ "../nextcloud-vue/node_modules/emoji-mart-vue-fast/dist/emoji-mart.js");
/* harmony import */ var emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emoji-mart-vue-fast/data/all.json */ "../nextcloud-vue/node_modules/emoji-mart-vue-fast/data/all.json");



/**
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
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
const storage = (0,_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__.getBuilder)("nextcloud-vue").persist(true).build();
var EmojiSkinTone = /* @__PURE__ */ ((EmojiSkinTone2) => {
  EmojiSkinTone2[EmojiSkinTone2["Neutral"] = 1] = "Neutral";
  EmojiSkinTone2[EmojiSkinTone2["Light"] = 2] = "Light";
  EmojiSkinTone2[EmojiSkinTone2["MediumLight"] = 3] = "MediumLight";
  EmojiSkinTone2[EmojiSkinTone2["Medium"] = 4] = "Medium";
  EmojiSkinTone2[EmojiSkinTone2["MediumDark"] = 5] = "MediumDark";
  EmojiSkinTone2[EmojiSkinTone2["Dark"] = 6] = "Dark";
  return EmojiSkinTone2;
})(EmojiSkinTone || {});
const emojiSearch = (query, maxResults = 10) => {
  const index = new emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__.EmojiIndex(emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_2__);
  const currentSkinTone = getCurrentSkinTone();
  let results;
  if (query) {
    results = index.search(`:${query}`, maxResults);
    if (results.length < maxResults) {
      results = results.concat(index.search(query, maxResults - results.length));
    }
  } else {
    results = emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__.frequently.get(maxResults).map((id) => index.emoji(id)) || [];
  }
  return results.map((emoji) => emoji.getSkin(currentSkinTone));
};
const emojiAddRecent = function(id) {
  emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__.frequently.add(id);
};
const getCurrentSkinTone = () => {
  const skinTone = Number.parseInt(storage.getItem("NcEmojiPicker::currentSkinTone") ?? "1");
  return Math.min(
    Math.max(
      skinTone,
      1
      /* Neutral */
    ),
    6
    /* Dark */
  );
};
const setCurrentSkinTone = (skinTone) => {
  skinTone = Math.min(
    Math.max(
      skinTone,
      1
      /* Neutral */
    ),
    6
    /* Dark */
  );
  storage.setItem("NcEmojiPicker::currentSkinTone", skinTone.toString());
};

//# sourceMappingURL=emoji-OxwGqnHH.mjs.map


/***/ })

}]);
//# sourceMappingURL=nextcloud-vue_dist_Components_NcModal_mjs-nextcloud-vue_dist_chunks_ArrowLeft-CEBdpMA3_mjs-ne-b8d0bb-nextcloud-vue_dist_Components_NcModal_mjs-nextcloud-vue_dist_chunks_ArrowLeft-CEBdpMA3_mjs-ne-b8d0bb.js.map?v=3e8e97da99163f7888b4