"use strict";
(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["nextcloud-vue_dist_chunks_NcEmojiPicker-3a6zzJ7g_mjs"],{

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcColorPicker-M--PpM56.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcColorPicker-M--PpM56.css ***!
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
.material-design-icon[data-v-ced724c4] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.color-picker[data-v-ced724c4] {
  display: flex;
  overflow: hidden;
  align-content: flex-end;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box !important;
  width: 176px;
  padding: 8px;
  border-radius: 3px;
}
.color-picker--advanced-fields[data-v-ced724c4] {
  width: 264px;
}
.color-picker__simple[data-v-ced724c4] {
  display: grid;
  grid-template-columns: repeat(auto-fit, 44px);
  grid-auto-rows: 44px;
}
.color-picker__simple-color-circle[data-v-ced724c4] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  min-height: 34px;
  margin: auto;
  padding: 0;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  font-size: 16px;
}
.color-picker__simple-color-circle[data-v-ced724c4]:focus-within {
  outline: 2px solid var(--color-main-text);
}
.color-picker__simple-color-circle[data-v-ced724c4]:hover {
  opacity: 0.6;
}
.color-picker__simple-color-circle--active[data-v-ced724c4] {
  width: 38px;
  height: 38px;
  min-height: 38px;
  transition: all 100ms ease-in-out;
  opacity: 1 !important;
}
.color-picker__advanced[data-v-ced724c4] {
  box-shadow: none !important;
}
.color-picker__navigation[data-v-ced724c4] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
[data-v-ced724c4]  .vc-chrome {
  width: unset;
  background-color: var(--color-main-background);
}
[data-v-ced724c4]  .vc-chrome-color-wrap {
  width: 30px;
  height: 30px;
}
[data-v-ced724c4]  .vc-chrome-active-color {
  width: 34px;
  height: 34px;
  border-radius: 17px;
}
[data-v-ced724c4]  .vc-chrome-body {
  padding: 14px 0 0 0;
  background-color: var(--color-main-background);
}
[data-v-ced724c4]  .vc-chrome-body .vc-input__input {
  box-shadow: none;
}
[data-v-ced724c4]  .vc-chrome-toggle-btn {
  filter: var(--background-invert-if-dark);
}
[data-v-ced724c4]  .vc-chrome-saturation-wrap {
  border-radius: 3px;
}
[data-v-ced724c4]  .vc-chrome-saturation-circle {
  width: 20px;
  height: 20px;
}
.slide-enter[data-v-ced724c4] {
  transform: translateX(-50%);
  opacity: 0;
}
.slide-enter-to[data-v-ced724c4] {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave[data-v-ced724c4] {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to[data-v-ced724c4] {
  transform: translateX(-50%);
  opacity: 0;
}
.slide-enter-active[data-v-ced724c4], .slide-leave-active[data-v-ced724c4] {
  transition: all 50ms ease-in-out;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcEmojiPicker-_q5-c3iK.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcEmojiPicker-_q5-c3iK.css ***!
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
.emoji-mart,
.emoji-mart * {
  box-sizing: border-box;
  line-height: 1.15;
}
.emoji-mart {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  font-size: 16px;
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  height: 420px;
  color: #222427;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: #fff;
}
.emoji-mart-emoji {
  padding: 6px;
  position: relative;
  display: inline-block;
  font-size: 0;
  border: none;
  background: none;
  box-shadow: none;
}
.emoji-mart-emoji span {
  display: inline-block;
}
.emoji-mart-preview-emoji .emoji-mart-emoji span {
  width: 38px;
  height: 38px;
  font-size: 32px;
}
.emoji-type-native {
  font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI',
    'Apple Color Emoji', 'Twemoji Mozilla', 'Noto Color Emoji', 'EmojiOne Color',
    'Android Emoji';
  word-break: keep-all;
}
.emoji-type-image {
  /* Emoji sheet has 56 columns, see also utils/emoji-data.js, SHEET_COLUMNS variable */
  /* Here we use (56+1) * 100% to avoid visible edges of nearby icons when scaling for different
   * screen sizes */
  background-size: 6100%;
}
.emoji-type-image.emoji-set-apple {
  background-image: url('https://unpkg.com/emoji-datasource-apple@15.0.1/img/apple/sheets-256/64.png');
}
.emoji-type-image.emoji-set-facebook {
  background-image: url('https://unpkg.com/emoji-datasource-facebook@15.0.1/img/facebook/sheets-256/64.png');
}
.emoji-type-image.emoji-set-google {
  background-image: url('https://unpkg.com/emoji-datasource-google@15.0.1/img/google/sheets-256/64.png');
}
.emoji-type-image.emoji-set-twitter {
  background-image: url('https://unpkg.com/emoji-datasource-twitter@15.0.1/img/twitter/sheets-256/64.png');
}
.emoji-mart-bar {
  border: 0 solid #d9d9d9;
}
.emoji-mart-bar:first-child {
  border-bottom-width: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.emoji-mart-bar:last-child {
  border-top-width: 1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.emoji-mart-scroll {
  position: relative;
  overflow-y: scroll;
  flex: 1;
  padding: 0 6px 6px 6px;
  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */
  will-change: transform; /* avoids "repaints on scroll" in mobile Chrome */
  -webkit-overflow-scrolling: touch;
}
.emoji-mart-anchors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 6px;
  color: #858585;
  line-height: 0;
}
.emoji-mart-anchor {
  position: relative;
  display: block;
  flex: 1 1 auto;
  text-align: center;
  padding: 12px 4px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  border: none;
  background: none;
  box-shadow: none;
}
.emoji-mart-anchor:hover,
.emoji-mart-anchor-selected {
  color: #464646;
}
.emoji-mart-anchor-selected .emoji-mart-anchor-bar {
  bottom: 0;
}
.emoji-mart-anchor-bar {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #464646;
}
.emoji-mart-anchors i {
  display: inline-block;
  width: 100%;
  max-width: 22px;
}
.emoji-mart-anchors svg {
  fill: currentColor;
  max-height: 18px;
}
.emoji-mart .scroller {
  height: 250px;
  position: relative;
  flex: 1;
  padding: 0 6px 6px 6px;
  z-index: 0; /* Fix for rendering sticky positioned category labels on Chrome */
  will-change: transform; /* avoids "repaints on scroll" in mobile Chrome */
  -webkit-overflow-scrolling: touch;
}
.emoji-mart-search {
  margin-top: 6px;
  padding: 0 6px;
}
.emoji-mart-search input {
  font-size: 16px;
  display: block;
  width: 100%;
  padding: 0.2em 0.6em;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  outline: 0;
}
.emoji-mart-search-results {
  height: 250px;
  overflow-y: scroll;
}
.emoji-mart-category {
  position: relative;
}
.emoji-mart-category .emoji-mart-emoji span {
  z-index: 1;
  position: relative;
  text-align: center;
  cursor: default;
}
.emoji-mart-category .emoji-mart-emoji:hover:before,
.emoji-mart-emoji-selected:before {
  z-index: 0;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 100%;
  opacity: 0;
}
.emoji-mart-category .emoji-mart-emoji:hover:before,
.emoji-mart-emoji-selected:before {
  opacity: 1;
}
.emoji-mart-category-label {
  position: sticky;
  top: 0;
}
.emoji-mart-static .emoji-mart-category-label {
  z-index: 2;
  position: relative;
  /* position: sticky; */
  /* position: -webkit-sticky; */
}
.emoji-mart-category-label h3 {
  display: block;
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  padding: 5px 6px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.95);
}
.emoji-mart-emoji {
  position: relative;
  display: inline-block;
  font-size: 0;
}
.emoji-mart-no-results {
  font-size: 14px;
  text-align: center;
  padding-top: 70px;
  color: #858585;
}
.emoji-mart-no-results .emoji-mart-category-label {
  display: none;
}
.emoji-mart-no-results .emoji-mart-no-results-label {
  margin-top: 0.2em;
}
.emoji-mart-no-results .emoji-mart-emoji:hover:before {
  content: none;
}
.emoji-mart-preview {
  position: relative;
  height: 70px;
}
.emoji-mart-preview-emoji,
.emoji-mart-preview-data,
.emoji-mart-preview-skins {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.emoji-mart-preview-emoji {
  left: 12px;
}
.emoji-mart-preview-data {
  left: 68px;
  right: 12px;
  word-break: break-all;
}
.emoji-mart-preview-skins {
  right: 30px;
  text-align: right;
}
.emoji-mart-preview-name {
  font-size: 14px;
}
.emoji-mart-preview-shortname {
  font-size: 12px;
  color: #888;
}
.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,
.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,
.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {
  margin-left: 0.5em;
}
.emoji-mart-preview-emoticon {
  font-size: 11px;
  color: #bbb;
}
.emoji-mart-title span {
  display: inline-block;
  vertical-align: middle;
}
.emoji-mart-title .emoji-mart-emoji {
  padding: 0;
}
.emoji-mart-title-label {
  color: #999a9c;
  font-size: 21px;
  font-weight: 300;
}
.emoji-mart-skin-swatches {
  font-size: 0;
  padding: 2px 0;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  background-color: #fff;
}
.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch {
  width: 16px;
  padding: 0 2px;
}
.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch-selected:after {
  opacity: 0.75;
}
.emoji-mart-skin-swatch {
  display: inline-block;
  width: 0;
  vertical-align: middle;
  transition-property: width, padding;
  transition-duration: 0.125s;
  transition-timing-function: ease-out;
}
.emoji-mart-skin-swatch:nth-child(1) {
  transition-delay: 0s;
}
.emoji-mart-skin-swatch:nth-child(2) {
  transition-delay: 0.03s;
}
.emoji-mart-skin-swatch:nth-child(3) {
  transition-delay: 0.06s;
}
.emoji-mart-skin-swatch:nth-child(4) {
  transition-delay: 0.09s;
}
.emoji-mart-skin-swatch:nth-child(5) {
  transition-delay: 0.12s;
}
.emoji-mart-skin-swatch:nth-child(6) {
  transition-delay: 0.15s;
}
.emoji-mart-skin-swatch-selected {
  position: relative;
  width: 16px;
  padding: 0 2px;
}
.emoji-mart-skin-swatch-selected:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  margin: -2px 0 0 -2px;
  background-color: #fff;
  border-radius: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
.emoji-mart-skin {
  display: inline-block;
  width: 100%;
  padding-top: 100%;
  max-width: 12px;
  border-radius: 100%;
}
.emoji-mart-skin-tone-1 {
  background-color: #ffc93a;
}
.emoji-mart-skin-tone-2 {
  background-color: #fadcbc;
}
.emoji-mart-skin-tone-3 {
  background-color: #e0bb95;
}
.emoji-mart-skin-tone-4 {
  background-color: #bf8f68;
}
.emoji-mart-skin-tone-5 {
  background-color: #9b643d;
}
.emoji-mart-skin-tone-6 {
  background-color: #594539;
}
/* vue-virtual-scroller/dist/vue-virtual-scroller.css */
.emoji-mart .vue-recycle-scroller {
  position: relative;
}
.emoji-mart .vue-recycle-scroller.direction-vertical:not(.page-mode) {
  overflow-y: auto;
}
.emoji-mart .vue-recycle-scroller.direction-horizontal:not(.page-mode) {
  overflow-x: auto;
}
.emoji-mart .vue-recycle-scroller.direction-horizontal {
  display: flex;
}
.emoji-mart .vue-recycle-scroller__slot {
  flex: auto 0 0;
}
.emoji-mart .vue-recycle-scroller__item-wrapper {
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.emoji-mart .vue-recycle-scroller.ready .vue-recycle-scroller__item-view {
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
}
.emoji-mart
  .vue-recycle-scroller.direction-vertical
  .vue-recycle-scroller__item-wrapper {
  width: 100%;
}
.emoji-mart
  .vue-recycle-scroller.direction-horizontal
  .vue-recycle-scroller__item-wrapper {
  height: 100%;
}
.emoji-mart
  .vue-recycle-scroller.ready.direction-vertical
  .vue-recycle-scroller__item-view {
  width: 100%;
}
.emoji-mart
  .vue-recycle-scroller.ready.direction-horizontal
  .vue-recycle-scroller__item-view {
  height: 100%;
}
.emoji-mart .resize-observer[data-v-b329ee4c] {
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
.emoji-mart .resize-observer[data-v-b329ee4c] object {
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
.emoji-mart-search .hidden {
  display: none;
  visibility: hidden;
}
.material-design-icon {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.emoji-mart {
  background-color: var(--color-main-background) !important;
  border: 0;
  color: var(--color-main-text) !important;
}
.emoji-mart button {
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font-size: inherit;
  height: 36px;
  width: auto;
}
.emoji-mart button * {
  cursor: pointer !important;
}
.emoji-mart .emoji-mart-bar,
.emoji-mart .emoji-mart-anchors,
.emoji-mart .emoji-mart-search,
.emoji-mart .emoji-mart-search input,
.emoji-mart .emoji-mart-category,
.emoji-mart .emoji-mart-category-label,
.emoji-mart .emoji-mart-category-label span,
.emoji-mart .emoji-mart-skin-swatches {
  background-color: transparent !important;
  border-color: var(--color-border) !important;
  color: inherit !important;
}
.emoji-mart .emoji-mart-search input:focus-visible {
  box-shadow: inset 0 0 0 2px var(--color-primary-element);
  outline: none;
}
.emoji-mart .emoji-mart-bar:first-child {
  border-top-left-radius: var(--border-radius) !important;
  border-top-right-radius: var(--border-radius) !important;
}
.emoji-mart .emoji-mart-anchors button {
  border-radius: 0;
  padding: 12px 4px;
  height: auto;
}
.emoji-mart .emoji-mart-anchors button:focus-visible {
  /* box-shadow: inset 0 0 0 2px var(--color-primary-element); */
  outline: 2px solid var(--color-primary-element);
}
.emoji-mart .emoji-mart-category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
}
.emoji-mart .emoji-mart-category .emoji-mart-category-label,
.emoji-mart .emoji-mart-category .emoji-mart-emoji {
  user-select: none;
  flex-grow: 0;
  flex-shrink: 0;
}
.emoji-mart .emoji-mart-category .emoji-mart-category-label {
  flex-basis: 100%;
  margin: 0;
}
.emoji-mart .emoji-mart-category .emoji-mart-emoji {
  flex-basis: 12.5%;
  text-align: center;
}
.emoji-mart .emoji-mart-category .emoji-mart-emoji:hover::before, .emoji-mart .emoji-mart-category .emoji-mart-emoji.emoji-mart-emoji-selected::before {
  background-color: var(--color-background-hover) !important;
  outline: 2px solid var(--color-primary-element);
}
.emoji-mart .emoji-mart-category button:focus-visible {
  background-color: var(--color-background-hover);
  border: 2px solid var(--color-primary-element) !important;
  border-radius: 50%;
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
.material-design-icon[data-v-2075d0ec] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.search__wrapper[data-v-2075d0ec] {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: end;
  padding: 4px 8px;
}
.row-selected button[data-v-2075d0ec], .row-selected span[data-v-2075d0ec] {
  vertical-align: middle;
}
.emoji-delete[data-v-2075d0ec] {
  vertical-align: top;
  margin-left: -21px;
  margin-top: -3px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcColorPicker-M--PpM56.css":
/*!***************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcColorPicker-M--PpM56.css ***!
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcColorPicker_M_PpM56_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcColorPicker-M--PpM56.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcColorPicker-M--PpM56.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcColorPicker_M_PpM56_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcColorPicker_M_PpM56_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcColorPicker_M_PpM56_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcColorPicker_M_PpM56_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/assets/NcEmojiPicker-_q5-c3iK.css":
/*!***************************************************************!*\
  !*** ../nextcloud-vue/dist/assets/NcEmojiPicker-_q5-c3iK.css ***!
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
/* harmony import */ var _server_node_modules_css_loader_dist_cjs_js_NcEmojiPicker_q5_c3iK_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../server/node_modules/css-loader/dist/cjs.js!./NcEmojiPicker-_q5-c3iK.css */ "./node_modules/css-loader/dist/cjs.js!../nextcloud-vue/dist/assets/NcEmojiPicker-_q5-c3iK.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_server_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_server_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _server_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_server_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_server_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _server_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_server_node_modules_css_loader_dist_cjs_js_NcEmojiPicker_q5_c3iK_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_server_node_modules_css_loader_dist_cjs_js_NcEmojiPicker_q5_c3iK_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _server_node_modules_css_loader_dist_cjs_js_NcEmojiPicker_q5_c3iK_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _server_node_modules_css_loader_dist_cjs_js_NcEmojiPicker_q5_c3iK_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcColorPicker-1hvkwYyV.mjs":
/*!***************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcColorPicker-1hvkwYyV.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcColorPicker)
/* harmony export */ });
/* harmony import */ var _assets_NcColorPicker_M_PpM56_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcColorPicker-M--PpM56.css */ "../nextcloud-vue/dist/assets/NcColorPicker-M--PpM56.css");
/* harmony import */ var _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NcButton.mjs */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NcPopover-bHEdiq4K.mjs */ "../nextcloud-vue/dist/chunks/NcPopover-bHEdiq4K.mjs");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GenColors-PD5Mmtr4.mjs */ "../nextcloud-vue/dist/chunks/GenColors-PD5Mmtr4.mjs");
/* harmony import */ var _GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GenRandomId-bekVfSd8.mjs */ "../nextcloud-vue/dist/chunks/GenRandomId-bekVfSd8.mjs");
/* harmony import */ var _ArrowLeft_CEBdpMA3_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArrowLeft-CEBdpMA3.mjs */ "../nextcloud-vue/dist/chunks/ArrowLeft-CEBdpMA3.mjs");
/* harmony import */ var _Check_0ovJb_fA_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Check-0ovJb_fA.mjs */ "../nextcloud-vue/dist/chunks/Check-0ovJb_fA.mjs");
/* harmony import */ var _DotsHorizontal_Zd3Cm1TN_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DotsHorizontal-Zd3Cm1TN.mjs */ "../nextcloud-vue/dist/chunks/DotsHorizontal-Zd3Cm1TN.mjs");
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-color */ "../nextcloud-vue/node_modules/vue-color/dist/vue-color.min.js");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");











(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.i);
const HEX_REGEX = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i;
const _sfc_main = {
  name: "NcColorPicker",
  components: {
    ArrowLeft: _ArrowLeft_CEBdpMA3_mjs__WEBPACK_IMPORTED_MODULE_6__.A,
    Check: _Check_0ovJb_fA_mjs__WEBPACK_IMPORTED_MODULE_7__.C,
    Chrome: vue_color__WEBPACK_IMPORTED_MODULE_9__.Chrome,
    DotsHorizontal: _DotsHorizontal_Zd3Cm1TN_mjs__WEBPACK_IMPORTED_MODULE_8__.D,
    NcButton: _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcPopover: _NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_2__.N
  },
  props: {
    /**
     * A HEX color that represents the initial value of the picker
     */
    value: {
      type: String,
      required: true
    },
    /**
     * Set to `true` to enable advanced fields including HEX, RGB, and HSL
     */
    advancedFields: {
      type: Boolean,
      default: false
    },
    /**
     * Limit selectable colors to only the provided palette
     */
    paletteOnly: {
      type: Boolean,
      default: false
    },
    /**
     * Provide a custom array of colors to show.
     * Can be either an array of string hexadecimal colors,
     * or an array of object with a `color` property with hexadecimal color string,
     * and a `name` property for accessibility.
     *
     * @type {string[] | {color: string, name: string}[]}
     */
    palette: {
      type: Array,
      default: () => [..._GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.d],
      validator: (palette) => palette.every(
        (item) => typeof item === "string" && HEX_REGEX.test(item) || typeof item === "object" && item.color && HEX_REGEX.test(item.color)
      )
    },
    /**
     * Selector for the popover container
     */
    container: {
      type: [String, Object, Element, Boolean],
      default: "body"
    }
  },
  emits: [
    "submit",
    "close",
    "update:open",
    "update:value",
    "input"
  ],
  data() {
    return {
      currentColor: this.value,
      advanced: false,
      ariaBack: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("Back"),
      ariaMore: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("More options")
    };
  },
  computed: {
    normalizedPalette() {
      return this.palette.map((item) => ({
        color: typeof item === "object" ? item.color : item,
        name: typeof item === "object" && item.name ? item.name : (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a)("A color with a HEX value {hex}", { hex: item.color })
      }));
    },
    uid() {
      return (0,_GenRandomId_bekVfSd8_mjs__WEBPACK_IMPORTED_MODULE_5__.G)();
    },
    contrastColor() {
      const black = "#000000";
      const white = "#FFFFFF";
      return this.calculateLuma(this.currentColor) > 0.5 ? black : white;
    }
  },
  watch: {
    value(color) {
      this.currentColor = color;
    }
  },
  methods: {
    t: _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_3__.a,
    /**
     * Submit a picked colour and close picker
     */
    handleConfirm() {
      this.$emit("submit", this.currentColor);
      this.handleClose();
      this.advanced = false;
    },
    handleClose() {
      this.$emit("close");
      this.$emit("update:open", false);
    },
    /**
     * Inner navigations
     */
    handleBack() {
      this.advanced = false;
    },
    handleMoreSettings() {
      this.advanced = true;
    },
    /**
     * Pick a colour
     *
     * @param {string} color the picked color
     */
    pickColor(color) {
      if (typeof color !== "string") {
        color = this.currentColor.hex;
      }
      this.currentColor = color;
      this.$emit("update:value", color);
      this.$emit("input", color);
    },
    /**
     * Calculate luminance of provided hex color
     *
     * @param {string} color the hex color
     */
    calculateLuma(color) {
      const [red, green, blue] = this.hexToRGB(color);
      return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
    },
    /**
     * Convert hex color to RGB
     *
     * @param {string} hex the hex color
     */
    hexToRGB(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcPopover", _vm._g(_vm._b({ attrs: { "popup-role": "dialog", "container": _vm.container }, on: { "apply-hide": _vm.handleClose }, scopedSlots: _vm._u([{ key: "trigger", fn: function(slotProps) {
    return [_vm._t("default", null, null, slotProps)];
  } }], null, true) }, "NcPopover", _vm.$attrs, false), _vm.$listeners), [_c("div", { staticClass: "color-picker", class: { "color-picker--advanced-fields": _vm.advanced && _vm.advancedFields }, attrs: { "role": "dialog", "aria-label": _vm.t("Color picker") } }, [_c("Transition", { attrs: { "name": "slide", "mode": "out-in" } }, [!_vm.advanced ? _c("div", { staticClass: "color-picker__simple" }, _vm._l(_vm.normalizedPalette, function({ color, name }, index) {
    return _c("label", { key: index, staticClass: "color-picker__simple-color-circle", class: { "color-picker__simple-color-circle--active": color === _vm.currentColor }, style: { backgroundColor: color } }, [color === _vm.currentColor ? _c("Check", { attrs: { "size": 20, "fill-color": _vm.contrastColor } }) : _vm._e(), _c("input", { staticClass: "hidden-visually", attrs: { "type": "radio", "aria-label": name, "name": `color-picker-${_vm.uid}` }, domProps: { "checked": color === _vm.currentColor }, on: { "click": function($event) {
      return _vm.pickColor(color);
    } } })], 1);
  }), 0) : _c("Chrome", { staticClass: "color-picker__advanced", attrs: { "disable-alpha": true, "disable-fields": !_vm.advancedFields }, on: { "input": _vm.pickColor }, model: { value: _vm.currentColor, callback: function($$v) {
    _vm.currentColor = $$v;
  }, expression: "currentColor" } })], 1), !_vm.paletteOnly ? _c("div", { staticClass: "color-picker__navigation" }, [_vm.advanced ? _c("NcButton", { attrs: { "type": "tertiary", "aria-label": _vm.ariaBack }, on: { "click": _vm.handleBack }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("ArrowLeft", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 1821202730) }) : _vm._e(), !_vm.advanced ? _c("NcButton", { attrs: { "type": "tertiary", "aria-label": _vm.ariaMore }, on: { "click": _vm.handleMoreSettings }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("DotsHorizontal", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 1056868794) }) : _vm._e(), _vm.advanced ? _c("NcButton", { attrs: { "type": "primary" }, on: { "click": _vm.handleConfirm } }, [_vm._v(" " + _vm._s(_vm.t("Choose")) + " ")]) : _vm._e()], 1) : _vm._e()], 1)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_10__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "ced724c4",
  null,
  null
);
const NcColorPicker = __component__.exports;

//# sourceMappingURL=NcColorPicker-1hvkwYyV.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/chunks/NcEmojiPicker-3a6zzJ7g.mjs":
/*!***************************************************************!*\
  !*** ../nextcloud-vue/dist/chunks/NcEmojiPicker-3a6zzJ7g.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcEmojiPicker)
/* harmony export */ });
/* harmony import */ var _assets_NcEmojiPicker_q5_c3iK_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/NcEmojiPicker-_q5-c3iK.css */ "../nextcloud-vue/dist/assets/NcEmojiPicker-_q5-c3iK.css");
/* harmony import */ var emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emoji-mart-vue-fast */ "../nextcloud-vue/node_modules/emoji-mart-vue-fast/dist/emoji-mart.js");
/* harmony import */ var _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_l10n-Au_T0Ikx.mjs */ "../nextcloud-vue/dist/chunks/_l10n-Au_T0Ikx.mjs");
/* harmony import */ var _emoji_OxwGqnHH_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emoji-OxwGqnHH.mjs */ "../nextcloud-vue/dist/chunks/emoji-OxwGqnHH.mjs");
/* harmony import */ var _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GenColors-PD5Mmtr4.mjs */ "../nextcloud-vue/dist/chunks/GenColors-PD5Mmtr4.mjs");
/* harmony import */ var emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emoji-mart-vue-fast/data/all.json */ "../nextcloud-vue/node_modules/emoji-mart-vue-fast/data/all.json");
/* harmony import */ var _plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_plugin-vue2_normalizer-Ewhtj4Do.mjs */ "../nextcloud-vue/dist/chunks/_plugin-vue2_normalizer-Ewhtj4Do.mjs");
/* harmony import */ var _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/NcButton.mjs */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _NcColorPicker_1hvkwYyV_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NcColorPicker-1hvkwYyV.mjs */ "../nextcloud-vue/dist/chunks/NcColorPicker-1hvkwYyV.mjs");
/* harmony import */ var _NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NcPopover-bHEdiq4K.mjs */ "../nextcloud-vue/dist/chunks/NcPopover-bHEdiq4K.mjs");
/* harmony import */ var _NcTextField_CyPkfdPA_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NcTextField-CyPkfdPA.mjs */ "../nextcloud-vue/dist/chunks/NcTextField-CyPkfdPA.mjs");











(0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.r)(_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.w, _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.v, _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.u);
const _sfc_main$1 = {
  name: "CircleIcon",
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
  return _c("span", _vm._b({ staticClass: "material-design-icon circle-icon", attrs: { "aria-hidden": !_vm.title, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_6__.n)(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null,
  null,
  null
);
const IconCircle = __component__$1.exports;
let emojiIndex;
const i18n = {
  search: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Search emoji"),
  notfound: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("No emoji found"),
  categories: {
    search: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Search results"),
    recent: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Frequently used"),
    smileys: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Smileys & Emotion"),
    people: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("People & Body"),
    nature: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Animals & Nature"),
    foods: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Food & Drink"),
    activity: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Activities"),
    places: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Travel & Places"),
    objects: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Objects"),
    symbols: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Symbols"),
    flags: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Flags"),
    custom: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Custom")
  }
};
const skinTonePalette = [
  new _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.C(255, 222, 52, (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Neutral skin color")),
  new _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.C(228, 205, 166, (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Light skin tone")),
  new _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.C(250, 221, 192, (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Medium light skin tone")),
  new _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.C(174, 129, 87, (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Medium skin tone")),
  new _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.C(158, 113, 88, (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Medium dark skin tone")),
  new _GenColors_PD5Mmtr4_mjs__WEBPACK_IMPORTED_MODULE_4__.C(96, 79, 69, (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Dark skin tone"))
];
const _sfc_main = {
  name: "NcEmojiPicker",
  components: {
    Emoji: emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__.Emoji,
    IconCircle,
    NcButton: _Components_NcButton_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcColorPicker: _NcColorPicker_1hvkwYyV_mjs__WEBPACK_IMPORTED_MODULE_8__.N,
    NcPopover: _NcPopover_bHEdiq4K_mjs__WEBPACK_IMPORTED_MODULE_9__.N,
    NcTextField: _NcTextField_CyPkfdPA_mjs__WEBPACK_IMPORTED_MODULE_10__.N,
    Picker: emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__.Picker
  },
  props: {
    /**
     * The emoji-set
     */
    activeSet: {
      type: String,
      default: "native"
    },
    /**
     * Show preview section when hovering emoji
     */
    showPreview: {
      type: Boolean,
      default: false
    },
    /**
     * Allow unselecting the selected emoji
     */
    allowUnselect: {
      type: Boolean,
      default: false
    },
    /**
     * Selected emoji to allow unselecting
     */
    selectedEmoji: {
      type: String,
      default: ""
    },
    /**
     * The fallback emoji in the preview section
     */
    previewFallbackEmoji: {
      type: String,
      default: "grinning"
    },
    /**
     * The fallback text in the preview section
     */
    previewFallbackName: {
      type: String,
      default: (0,_l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a)("Pick an emoji")
    },
    /**
     * Whether to close the emoji picker after picking one
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Selector for the popover container
     */
    container: {
      type: [String, Object, Element, Boolean],
      default: "body"
    }
  },
  emits: [
    "select",
    "select-data",
    "unselect"
  ],
  setup() {
    if (!emojiIndex) {
      emojiIndex = new emoji_mart_vue_fast__WEBPACK_IMPORTED_MODULE_1__.EmojiIndex(emoji_mart_vue_fast_data_all_json__WEBPACK_IMPORTED_MODULE_5__);
    }
    return {
      // Non-reactive constants
      emojiIndex,
      skinTonePalette,
      i18n
    };
  },
  data() {
    const currentSkinTone = (0,_emoji_OxwGqnHH_mjs__WEBPACK_IMPORTED_MODULE_3__.g)();
    return {
      /**
       * The current active color from the skin tone palette
       */
      currentColor: skinTonePalette[currentSkinTone - 1],
      /**
       * The current active skin tone
       * @type {1|2|3|4|5|6}
       */
      currentSkinTone,
      search: "",
      open: false
    };
  },
  computed: {
    native() {
      return this.activeSet === "native";
    }
  },
  methods: {
    t: _l10n_Au_T0Ikx_mjs__WEBPACK_IMPORTED_MODULE_2__.a,
    clearSearch() {
      this.search = "";
      const input = this.$refs.search?.$refs.inputField?.$refs.input;
      if (input) {
        input.focus();
      }
    },
    /**
     * Update the current skin tone by the result of the color picker
     * @param {string} color Color set
     */
    onChangeSkinTone(color) {
      const index = this.skinTonePalette.findIndex((tone) => tone.color.toLowerCase() === color.toLowerCase());
      if (index > -1) {
        this.currentSkinTone = index + 1;
        this.currentColor = this.skinTonePalette[index];
        (0,_emoji_OxwGqnHH_mjs__WEBPACK_IMPORTED_MODULE_3__.s)(this.currentSkinTone);
      }
    },
    select(emojiObject) {
      this.$emit("select", emojiObject.native);
      this.$emit("select-data", emojiObject);
      if (this.closeOnSelect) {
        this.open = false;
      }
    },
    unselect() {
      this.$emit("unselect");
    },
    afterShow() {
      const picker = this.$refs.picker;
      picker.$el.addEventListener("keydown", this.checkKeyEvent);
      const input = this.$refs.search?.$refs.inputField?.$refs.input;
      if (input) {
        input.focus();
      }
    },
    afterHide() {
      const picker = this.$refs.picker;
      picker.$el.removeEventListener("keydown", this.checkKeyEvent);
    },
    checkKeyEvent(event) {
      if (event.key !== "Tab") {
        return;
      }
      const picker = this.$refs.picker;
      const focusableList = picker.$el.querySelectorAll(
        "button, input"
      );
      const last = focusableList.length - 1;
      if (focusableList.length <= 1) {
        event.preventDefault();
        return;
      }
      if (event.shiftKey === false && event.target === focusableList[last]) {
        event.preventDefault();
        focusableList[0].focus();
      } else if (event.shiftKey === true && event.target === focusableList[0]) {
        event.preventDefault();
        focusableList[last].focus();
      }
    }
  }
};
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcPopover", _vm._g(_vm._b({ attrs: { "shown": _vm.open, "container": _vm.container, "popup-role": "dialog" }, on: { "update:shown": function($event) {
    _vm.open = $event;
  }, "after-show": _vm.afterShow, "after-hide": _vm.afterHide }, scopedSlots: _vm._u([{ key: "trigger", fn: function(slotProps) {
    return [_vm._t("default", null, null, slotProps)];
  } }], null, true) }, "NcPopover", _vm.$attrs, false), _vm.$listeners), [_c("Picker", _vm._b({ ref: "picker", attrs: { "auto-focus": false, "color": "var(--color-primary-element)", "data": _vm.emojiIndex, "emoji": _vm.previewFallbackEmoji, "i18n": _vm.i18n, "native": _vm.native, "emoji-size": 20, "per-line": 8, "picker-styles": { width: "320px" }, "show-preview": _vm.showPreview, "skin": _vm.currentSkinTone, "show-skin-tones": false, "title": _vm.previewFallbackName, "role": "dialog", "aria-label": _vm.t("Emoji picker") }, on: { "select": _vm.select }, scopedSlots: _vm._u([{ key: "searchTemplate", fn: function(slotProps) {
    return [_c("div", { staticClass: "search__wrapper" }, [_c("NcTextField", { ref: "search", staticClass: "search", attrs: { "value": _vm.search, "label": _vm.t("Search"), "label-visible": true, "placeholder": _vm.i18n.search, "trailing-button-icon": "close", "trailing-button-label": _vm.t("Clear search"), "show-trailing-button": _vm.search !== "" }, on: { "update:value": [function($event) {
      _vm.search = $event;
    }, function($event) {
      return slotProps.onSearch(_vm.search);
    }], "trailing-button-click": function($event) {
      _vm.clearSearch();
      slotProps.onSearch(_vm.search);
    } } }), _c("NcColorPicker", { attrs: { "palette-only": "", "container": _vm.container, "palette": _vm.skinTonePalette, "value": _vm.currentColor.color }, on: { "update:value": _vm.onChangeSkinTone } }, [_c("NcButton", { attrs: { "aria-label": _vm.t("Skin tone"), "type": "tertiary-no-background" }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c("IconCircle", { style: { color: _vm.currentColor.color }, attrs: { "title": _vm.currentColor.name, "size": 20 } })];
    }, proxy: true }], null, true) })], 1)], 1)];
  } }, _vm.allowUnselect && _vm.selectedEmoji ? { key: "customCategory", fn: function() {
    return [_c("div", { staticClass: "emoji-mart-category-label" }, [_c("h3", { staticClass: "emoji-mart-category-label" }, [_vm._v(" " + _vm._s(_vm.t("Selected")) + " ")])]), _c("Emoji", { staticClass: "emoji-selected", attrs: { "data": _vm.emojiIndex, "emoji": _vm.selectedEmoji, "native": true, "size": 32 }, on: { "click": _vm.unselect } }), _c("Emoji", { staticClass: "emoji-delete", attrs: { "data": _vm.emojiIndex, "emoji": ":x:", "native": true, "size": 10 }, on: { "click": _vm.unselect } })];
  }, proxy: true } : null], null, true) }, "Picker", _vm.$attrs, false))], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ (0,_plugin_vue2_normalizer_Ewhtj4Do_mjs__WEBPACK_IMPORTED_MODULE_6__.n)(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "2075d0ec",
  null,
  null
);
const NcEmojiPicker = __component__.exports;

//# sourceMappingURL=NcEmojiPicker-3a6zzJ7g.mjs.map


/***/ })

}]);
//# sourceMappingURL=nextcloud-vue_dist_chunks_NcEmojiPicker-3a6zzJ7g_mjs-nextcloud-vue_dist_chunks_NcEmojiPicker-3a6zzJ7g_mjs.js.map?v=f470facec78530d6a3ae