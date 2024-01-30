"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nextcloud-vue_dist_chunks_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_scoped_2603be83_la-c9fae2"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcCheckboxRadioSwitch-UGQye7An.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcCheckboxRadioSwitch-UGQye7An.css ***!
  \*************************************************************************************************************/
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
.material-design-icon[data-v-2672ad1a] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.checkbox-content[data-v-2672ad1a] {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  user-select: none;
  min-height: 44px;
  border-radius: 44px;
  padding: 4px calc((44px - var(--icon-height)) / 2);
  width: 100%;
  max-width: fit-content;
}
.checkbox-content__text[data-v-2672ad1a] {
  flex: 1 0;
  display: flex;
  align-items: center;
}
.checkbox-content__text[data-v-2672ad1a]:empty {
  display: none;
}
.checkbox-content__icon > *[data-v-2672ad1a] {
  width: var(--icon-size);
  height: var(--icon-size);
}
.checkbox-content--button-variant .checkbox-content__icon:not(.checkbox-content__icon--checked) > *[data-v-2672ad1a] {
  color: var(--color-primary-element);
}
.checkbox-content--button-variant .checkbox-content__icon--checked > *[data-v-2672ad1a] {
  color: var(--color-primary-element-text);
}
.checkbox-content--has-text[data-v-2672ad1a] {
  padding-right: 14px;
}
.checkbox-content:not(.checkbox-content--button-variant) .checkbox-content__icon > *[data-v-2672ad1a] {
  color: var(--color-primary-element);
}
.checkbox-content[data-v-2672ad1a], .checkbox-content *[data-v-2672ad1a] {
  cursor: pointer;
  flex-shrink: 0;
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
.material-design-icon[data-v-2603be83] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.checkbox-radio-switch[data-v-2603be83] {
  display: flex;
  align-items: center;
  color: var(--color-main-text);
  background-color: transparent;
  font-size: var(--default-font-size);
  line-height: var(--default-line-height);
  padding: 0;
  position: relative;
  /* Special rules for vertical button groups */
  /* Special rules for horizontal button groups */
}
.checkbox-radio-switch__input[data-v-2603be83] {
  position: absolute;
  z-index: -1;
  opacity: 0 !important;
  width: var(--icon-size);
  height: var(--icon-size);
  margin: 4px 14px;
}
.checkbox-radio-switch__input:focus-visible + .checkbox-radio-switch__content[data-v-2603be83], .checkbox-radio-switch__input[data-v-2603be83]:focus-visible {
  outline: 2px solid var(--color-main-text);
  border-color: var(--color-main-background);
  outline-offset: -2px;
}
.checkbox-radio-switch--disabled .checkbox-radio-switch__content[data-v-2603be83] {
  opacity: 0.5;
}
.checkbox-radio-switch--disabled .checkbox-radio-switch__content[data-v-2603be83] .checkbox-radio-switch__icon > * {
  color: var(--color-main-text);
}
.checkbox-radio-switch:not(.checkbox-radio-switch--disabled, .checkbox-radio-switch--checked):focus-within .checkbox-radio-switch__content[data-v-2603be83], .checkbox-radio-switch:not(.checkbox-radio-switch--disabled, .checkbox-radio-switch--checked) .checkbox-radio-switch__content[data-v-2603be83]:hover {
  background-color: var(--color-background-hover);
}
.checkbox-radio-switch--checked:not(.checkbox-radio-switch--disabled):focus-within .checkbox-radio-switch__content[data-v-2603be83], .checkbox-radio-switch--checked:not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__content[data-v-2603be83]:hover {
  background-color: var(--color-primary-element-hover);
}
.checkbox-radio-switch--checked:not(.checkbox-radio-switch--button-variant):not(.checkbox-radio-switch--disabled):focus-within .checkbox-radio-switch__content[data-v-2603be83], .checkbox-radio-switch--checked:not(.checkbox-radio-switch--button-variant):not(.checkbox-radio-switch--disabled) .checkbox-radio-switch__content[data-v-2603be83]:hover {
  background-color: var(--color-primary-element-light-hover);
}
.checkbox-radio-switch-switch[data-v-2603be83]:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon > * {
  color: var(--color-text-maxcontrast);
}
.checkbox-radio-switch-switch.checkbox-radio-switch--disabled.checkbox-radio-switch--checked[data-v-2603be83] .checkbox-radio-switch__icon > * {
  color: var(--color-primary-element-light);
}
.checkbox-radio-switch--button-variant.checkbox-radio-switch[data-v-2603be83] {
  border: 2px solid var(--color-border-maxcontrast);
  overflow: hidden;
}
.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked[data-v-2603be83] {
  font-weight: bold;
}
.checkbox-radio-switch--button-variant.checkbox-radio-switch--checked .checkbox-radio-switch__content[data-v-2603be83] {
  background-color: var(--color-primary-element);
  color: var(--color-primary-element-text);
}
.checkbox-radio-switch--button-variant[data-v-2603be83] .checkbox-radio-switch__text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.checkbox-radio-switch--button-variant[data-v-2603be83]:not(.checkbox-radio-switch--checked) .checkbox-radio-switch__icon > * {
  color: var(--color-main-text);
}
.checkbox-radio-switch--button-variant[data-v-2603be83] .checkbox-radio-switch__icon:empty {
  display: none;
}
.checkbox-radio-switch--button-variant[data-v-2603be83]:not(.checkbox-radio-switch--button-variant-v-grouped):not(.checkbox-radio-switch--button-variant-h-grouped), .checkbox-radio-switch--button-variant .checkbox-radio-switch__content[data-v-2603be83] {
  border-radius: calc(var(--default-clickable-area) / 2);
}
.checkbox-radio-switch--button-variant-v-grouped .checkbox-radio-switch__content[data-v-2603be83] {
  flex-basis: 100%;
  max-width: unset;
}
.checkbox-radio-switch--button-variant-v-grouped[data-v-2603be83]:first-of-type {
  border-top-left-radius: calc(var(--default-clickable-area) / 2 + 2px);
  border-top-right-radius: calc(var(--default-clickable-area) / 2 + 2px);
}
.checkbox-radio-switch--button-variant-v-grouped[data-v-2603be83]:last-of-type {
  border-bottom-left-radius: calc(var(--default-clickable-area) / 2 + 2px);
  border-bottom-right-radius: calc(var(--default-clickable-area) / 2 + 2px);
}
.checkbox-radio-switch--button-variant-v-grouped[data-v-2603be83]:not(:last-of-type) {
  border-bottom: 0 !important;
}
.checkbox-radio-switch--button-variant-v-grouped:not(:last-of-type) .checkbox-radio-switch__content[data-v-2603be83] {
  margin-bottom: 2px;
}
.checkbox-radio-switch--button-variant-v-grouped[data-v-2603be83]:not(:first-of-type) {
  border-top: 0 !important;
}
.checkbox-radio-switch--button-variant-h-grouped[data-v-2603be83]:first-of-type {
  border-top-left-radius: calc(var(--default-clickable-area) / 2 + 2px);
  border-bottom-left-radius: calc(var(--default-clickable-area) / 2 + 2px);
}
.checkbox-radio-switch--button-variant-h-grouped[data-v-2603be83]:last-of-type {
  border-top-right-radius: calc(var(--default-clickable-area) / 2 + 2px);
  border-bottom-right-radius: calc(var(--default-clickable-area) / 2 + 2px);
}
.checkbox-radio-switch--button-variant-h-grouped[data-v-2603be83]:not(:last-of-type) {
  border-right: 0 !important;
}
.checkbox-radio-switch--button-variant-h-grouped:not(:last-of-type) .checkbox-radio-switch__content[data-v-2603be83] {
  margin-right: 2px;
}
.checkbox-radio-switch--button-variant-h-grouped[data-v-2603be83]:not(:first-of-type) {
  border-left: 0 !important;
}
.checkbox-radio-switch--button-variant-h-grouped[data-v-2603be83] .checkbox-radio-switch__text {
  text-align: center;
}
.checkbox-radio-switch--button-variant-h-grouped .checkbox-radio-switch__content[data-v-2603be83] {
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0;
  gap: 0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcCheckboxRadioSwitch-UGQye7An.css":
/*!***********************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcCheckboxRadioSwitch-UGQye7An.css ***!
  \***********************************************************************/
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcCheckboxRadioSwitch_UGQye7An_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcCheckboxRadioSwitch-UGQye7An.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcCheckboxRadioSwitch-UGQye7An.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcCheckboxRadioSwitch_UGQye7An_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcCheckboxRadioSwitch_UGQye7An_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcCheckboxRadioSwitch_UGQye7An_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcCheckboxRadioSwitch_UGQye7An_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcCheckboxRadioSwitch.vue_vue_type_style_index_0_scoped_2603be83_lang-FbYuuk3r.mjs":
/*!***********************************************************************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcCheckboxRadioSwitch.vue_vue_type_style_index_0_scoped_2603be83_lang-FbYuuk3r.mjs ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_NcCheckboxRadioSwitch_UGQye7An_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcCheckboxRadioSwitch-UGQye7An.css */ "../nextcloud-vue/dist/assets/NcCheckboxRadioSwitch-UGQye7An.css");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");


(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_1__.r)();
//# sourceMappingURL=NcCheckboxRadioSwitch.vue_vue_type_style_index_0_scoped_2603be83_lang-FbYuuk3r.mjs.map


/***/ })

}]);
//# sourceMappingURL=nextcloud-vue_dist_chunks_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_scoped_2603be83_la-c9fae2-nextcloud-vue_dist_chunks_NcCheckboxRadioSwitch_vue_vue_type_style_index_0_scoped_2603be83_la-c9fae2.js.map?v=205610168dec173d0fda