(self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || []).push([["settings-users"],{

/***/ "./apps/settings/src/mixins/UserRowMixin.js":
/*!**************************************************!*\
  !*** ./apps/settings/src/mixins/UserRowMixin.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Greta Doci <gretadoci@gmail.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    groups: {
      type: Array,
      default: () => []
    },
    subAdminsGroups: {
      type: Array,
      default: () => []
    },
    quotaOptions: {
      type: Array,
      default: () => []
    },
    languages: {
      type: Array,
      required: true
    },
    externalActions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    /* GROUPS MANAGEMENT */
    userGroups() {
      const userGroups = this.groups.filter(group => this.user.groups.includes(group.id));
      return userGroups;
    },
    userSubAdminsGroups() {
      const userSubAdminsGroups = this.subAdminsGroups.filter(group => this.user.subadmin.includes(group.id));
      return userSubAdminsGroups;
    },
    availableGroups() {
      return this.groups.map(group => {
        // clone object because we don't want
        // to edit the original groups
        const groupClone = Object.assign({}, group);

        // two settings here:
        // 1. user NOT in group but no permission to add
        // 2. user is in group but no permission to remove
        groupClone.$isDisabled = group.canAdd === false && !this.user.groups.includes(group.id) || group.canRemove === false && this.user.groups.includes(group.id);
        return groupClone;
      });
    },
    /* QUOTA MANAGEMENT */
    usedSpace() {
      if (this.user.quota.used) {
        return t('settings', '{size} used', {
          size: OC.Util.humanFileSize(this.user.quota.used)
        });
      }
      return t('settings', '{size} used', {
        size: OC.Util.humanFileSize(0)
      });
    },
    usedQuota() {
      let quota = this.user.quota.quota;
      if (quota > 0) {
        quota = Math.min(100, Math.round(this.user.quota.used / quota * 100));
      } else {
        const usedInGB = this.user.quota.used / (10 * Math.pow(2, 30));
        // asymptotic curve approaching 50% at 10GB to visualize used stace with infinite quota
        quota = 95 * (1 - 1 / (usedInGB + 1));
      }
      return isNaN(quota) ? 0 : quota;
    },
    // Mapping saved values to objects
    userQuota() {
      if (this.user.quota.quota >= 0) {
        // if value is valid, let's map the quotaOptions or return custom quota
        const humanQuota = OC.Util.humanFileSize(this.user.quota.quota);
        const userQuota = this.quotaOptions.find(quota => quota.id === humanQuota);
        return userQuota || {
          id: humanQuota,
          label: humanQuota
        };
      } else if (this.user.quota.quota === 'default') {
        // default quota is replaced by the proper value on load
        return this.quotaOptions[0];
      }
      return this.quotaOptions[1]; // unlimited
    },

    /* PASSWORD POLICY? */
    minPasswordLength() {
      return this.$store.getters.getPasswordPolicyMinLength;
    },
    /* LANGUAGE */
    userLanguage() {
      const availableLanguages = this.languages[0].languages.concat(this.languages[1].languages);
      const userLang = availableLanguages.find(lang => lang.code === this.user.language);
      if (typeof userLang !== 'object' && this.user.language !== '') {
        return {
          code: this.user.language,
          name: this.user.language
        };
      } else if (this.user.language === '') {
        return false;
      }
      return userLang;
    },
    /* LAST LOGIN */
    userLastLoginTooltip() {
      if (this.user.lastLogin > 0) {
        return OC.Util.formatDate(this.user.lastLogin);
      }
      return '';
    },
    userLastLogin() {
      if (this.user.lastLogin > 0) {
        return OC.Util.relativeModifiedDate(this.user.lastLogin);
      }
      return t('settings', 'Never');
    }
  }
});

/***/ }),

/***/ "./apps/settings/src/utils/userUtils.ts":
/*!**********************************************!*\
  !*** ./apps/settings/src/utils/userUtils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultQuota: () => (/* binding */ defaultQuota),
/* harmony export */   isObfuscated: () => (/* binding */ isObfuscated),
/* harmony export */   unlimitedQuota: () => (/* binding */ unlimitedQuota)
/* harmony export */ });
/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
const unlimitedQuota = {
  id: 'none',
  label: t('settings', 'Unlimited')
};
const defaultQuota = {
  id: 'default',
  label: t('settings', 'Default quota')
};
/**
 * Return `true` if the logged in user does not have permissions to view the
 * data of `user`
 * @param user
 * @param user.id
 */
const isObfuscated = user => {
  const keys = Object.keys(user);
  return keys.length === 1 && keys.at(0) === 'id';
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "../nextcloud-vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'UserListFooter',
  components: {
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    filteredUsers: {
      type: Array,
      required: true
    }
  },
  computed: {
    userCount() {
      if (this.loading) {
        return this.n('settings', '{userCount} user …', '{userCount} users …', this.filteredUsers.length, {
          userCount: this.filteredUsers.length
        });
      }
      return this.n('settings', '{userCount} user', '{userCount} users', this.filteredUsers.length, {
        userCount: this.filteredUsers.length
      });
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate,
    n: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translatePlural
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  name: 'UserListHeader',
  props: {
    hasObfuscated: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    showConfig() {
      // @ts-expect-error: allow untyped $store
      return this.$store.getters.getShowConfig;
    },
    settings() {
      // @ts-expect-error: allow untyped $store
      return this.$store.getters.getServerData;
    },
    subAdminsGroups() {
      // @ts-expect-error: allow untyped $store
      return this.$store.getters.getSubadminGroups;
    },
    passwordLabel() {
      if (this.hasObfuscated) {
        // TRANSLATORS This string is for a column header labelling either a password or a message that the current user has insufficient permissions
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Password or insufficient permissions message');
      }
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Password');
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "../nextcloud-vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "../nextcloud-vue/dist/Components/NcActions.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "../nextcloud-vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _mdi_svg_svg_check_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/check.svg?raw */ "./node_modules/@mdi/svg/svg/check.svg?raw");
/* harmony import */ var _mdi_svg_svg_pencil_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/pencil.svg?raw */ "./node_modules/@mdi/svg/svg/pencil.svg?raw");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  components: {
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcActions: _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    /**
     * Array of user actions
     */
    actions: {
      type: Array,
      required: true
    },
    /**
     * The state whether the row is currently disabled
     */
    disabled: {
      type: Boolean,
      required: true
    },
    /**
     * The state whether the row is currently edited
     */
    edit: {
      type: Boolean,
      required: true
    },
    /**
     * Target of this actions
     */
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    /**
     * Current MDI logo to show for edit toggle
     */
    editSvg() {
      return this.edit ? _mdi_svg_svg_check_svg_raw__WEBPACK_IMPORTED_MODULE_3__ : _mdi_svg_svg_pencil_svg_raw__WEBPACK_IMPORTED_MODULE_4__;
    }
  },
  methods: {
    /**
     * Toggle edit mode by emitting the update event
     */
    toggleEdit() {
      this.$emit('update:edit', !this.edit);
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _vueuse_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueuse/components */ "./node_modules/@vueuse/components/index.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger.js */ "./apps/settings/src/logger.js");




vue__WEBPACK_IMPORTED_MODULE_2__["default"].directive('elementVisibility', _vueuse_components__WEBPACK_IMPORTED_MODULE_3__.vElementVisibility);
// Items to render before and after the visible area
const bufferItems = 3;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'VirtualList',
  props: {
    dataComponent: {
      type: [Object, Function],
      required: true
    },
    dataKey: {
      type: String,
      required: true
    },
    dataSources: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number,
      required: true
    },
    extraProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      bufferItems,
      index: 0,
      headerHeight: 0,
      tableHeight: 0,
      resizeObserver: null
    };
  },
  computed: {
    startIndex() {
      return Math.max(0, this.index - bufferItems);
    },
    shownItems() {
      return Math.ceil((this.tableHeight - this.headerHeight) / this.itemHeight) + bufferItems * 2;
    },
    renderedItems() {
      return this.dataSources.slice(this.startIndex, this.startIndex + this.shownItems);
    },
    tbodyStyle() {
      const isOverScrolled = this.startIndex + this.shownItems > this.dataSources.length;
      const lastIndex = this.dataSources.length - this.startIndex - this.shownItems;
      const hiddenAfterItems = Math.min(this.dataSources.length - this.startIndex, lastIndex);
      return {
        paddingTop: `${this.startIndex * this.itemHeight}px`,
        paddingBottom: isOverScrolled ? 0 : `${hiddenAfterItems * this.itemHeight}px`
      };
    }
  },
  mounted() {
    const root = this.$el;
    const tfoot = this.$refs?.tfoot;
    const thead = this.$refs?.thead;
    this.resizeObserver = new ResizeObserver((0,debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
      this.headerHeight = thead?.clientHeight ?? 0;
      this.tableHeight = root?.clientHeight ?? 0;
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('VirtualList resizeObserver updated');
      this.onScroll();
    }, 100, false));
    this.resizeObserver.observe(root);
    this.resizeObserver.observe(tfoot);
    this.resizeObserver.observe(thead);
    this.$el.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    handleFooterVisibility(visible) {
      if (visible) {
        this.$emit('scroll-end');
      }
    },
    onScroll() {
      // Max 0 to prevent negative index
      this.index = Math.max(0, Math.round(this.$el.scrollTop / this.itemHeight));
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "../nextcloud-vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionInput.js */ "../nextcloud-vue/dist/Components/NcActionInput.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationItem.js */ "../nextcloud-vue/dist/Components/NcAppNavigationItem.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCounterBubble.js */ "../nextcloud-vue/dist/Components/NcCounterBubble.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "../nextcloud-vue/dist/Components/NcModal.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "../nextcloud-vue/dist/Components/NcNoteCard.mjs");
/* harmony import */ var vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/AccountGroup.vue */ "./node_modules/vue-material-design-icons/AccountGroup.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GroupListItem',
  components: {
    AccountGroup: vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcActionInput: _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcAppNavigationItem: _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcCounterBubble: _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcModal: _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcNoteCard: _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    Pencil: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    /**
     * If this group is currently selected
     */
    active: {
      type: Boolean,
      required: true
    },
    /**
     * Number of members within this group
     */
    count: {
      type: Number,
      default: null
    },
    /**
     * Identifier of this group
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Name of this group
     */
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loadingRenameGroup: false,
      openGroupMenu: false,
      showRemoveGroupModal: false
    };
  },
  computed: {
    settings() {
      return this.$store.getters.getServerData;
    }
  },
  methods: {
    handleGroupMenuOpen() {
      this.openGroupMenu = true;
    },
    async renameGroup(gid) {
      // check if group id is valid
      if (gid.trim() === '') {
        return;
      }
      const displayName = this.$refs.displayNameInput.$el.querySelector('input[type="text"]').value;

      // check if group name is valid
      if (displayName.trim() === '') {
        return;
      }
      try {
        this.openGroupMenu = false;
        this.loadingRenameGroup = true;
        await this.$store.dispatch('renameGroup', {
          groupid: gid.trim(),
          displayName: displayName.trim()
        });
        this.loadingRenameGroup = false;
      } catch {
        this.openGroupMenu = true;
        this.loadingRenameGroup = false;
      }
    },
    async removeGroup() {
      try {
        await this.$store.dispatch('removeGroup', this.id);
        this.showRemoveGroupModal = false;
      } catch (error) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_11__.showError)(t('settings', 'Failed to remove group "{group}"', {
          group: this.name
        }));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "../nextcloud-vue/dist/Components/NcEmptyContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "../nextcloud-vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "../nextcloud-vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _Users_VirtualList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Users/VirtualList.vue */ "./apps/settings/src/components/Users/VirtualList.vue");
/* harmony import */ var _Users_NewUserModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Users/NewUserModal.vue */ "./apps/settings/src/components/Users/NewUserModal.vue");
/* harmony import */ var _Users_UserListFooter_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Users/UserListFooter.vue */ "./apps/settings/src/components/Users/UserListFooter.vue");
/* harmony import */ var _Users_UserListHeader_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Users/UserListHeader.vue */ "./apps/settings/src/components/Users/UserListHeader.vue");
/* harmony import */ var _Users_UserRow_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Users/UserRow.vue */ "./apps/settings/src/components/Users/UserRow.vue");
/* harmony import */ var _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/userUtils.ts */ "./apps/settings/src/utils/userUtils.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logger.js */ "./apps/settings/src/logger.js");
/* harmony import */ var _img_users_svg_raw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/users.svg?raw */ "./apps/settings/img/users.svg?raw");















const newUser = {
  id: '',
  displayName: '',
  password: '',
  mailAddress: '',
  groups: [],
  manager: '',
  subAdminsGroups: [],
  quota: _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.defaultQuota,
  language: {
    code: 'en',
    name: t('settings', 'Default language')
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserList',
  components: {
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    NcEmptyContent: _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NewUserModal: _Users_NewUserModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    UserListFooter: _Users_UserListFooter_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    UserListHeader: _Users_UserListHeader_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    VirtualList: _Users_VirtualList_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    selectedGroup: {
      type: String,
      default: null
    },
    externalActions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      UserRow: _Users_UserRow_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
      loading: {
        all: false,
        groups: false,
        users: false
      },
      isInitialLoad: true,
      rowHeight: 55,
      usersSvg: _img_users_svg_raw__WEBPACK_IMPORTED_MODULE_13__,
      searchQuery: '',
      newUser: Object.assign({}, newUser)
    };
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    style() {
      return {
        '--row-height': `${this.rowHeight}px`
      };
    },
    hasObfuscated() {
      return this.filteredUsers.some(user => (0,_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.isObfuscated)(user));
    },
    users() {
      return this.$store.getters.getUsers;
    },
    filteredUsers() {
      if (this.selectedGroup === 'disabled') {
        return this.users.filter(user => user.enabled === false);
      }
      if (!this.settings.isAdmin) {
        // we don't want subadmins to edit themselves
        return this.users.filter(user => user.enabled !== false);
      }
      return this.users.filter(user => user.enabled !== false);
    },
    groups() {
      // data provided php side + remove the disabled group
      return this.$store.getters.getGroups.filter(group => group.id !== 'disabled').sort((a, b) => a.name.localeCompare(b.name));
    },
    subAdminsGroups() {
      // data provided php side
      return this.$store.getters.getSubadminGroups;
    },
    quotaOptions() {
      // convert the preset array into objects
      const quotaPreset = this.settings.quotaPreset.reduce((acc, cur) => acc.concat({
        id: cur,
        label: cur
      }), []);
      // add default presets
      if (this.settings.allowUnlimitedQuota) {
        quotaPreset.unshift(_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.unlimitedQuota);
      }
      quotaPreset.unshift(_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_11__.defaultQuota);
      return quotaPreset;
    },
    usersOffset() {
      return this.$store.getters.getUsersOffset;
    },
    usersLimit() {
      return this.$store.getters.getUsersLimit;
    },
    disabledUsersOffset() {
      return this.$store.getters.getDisabledUsersOffset;
    },
    disabledUsersLimit() {
      return this.$store.getters.getDisabledUsersLimit;
    },
    usersCount() {
      return this.users.length;
    },
    /* LANGUAGES */
    languages() {
      return [{
        label: t('settings', 'Common languages'),
        languages: this.settings.languages.commonLanguages
      }, {
        label: t('settings', 'Other languages'),
        languages: this.settings.languages.otherLanguages
      }];
    }
  },
  watch: {
    // watch url change and group select
    async selectedGroup(val, old) {
      this.isInitialLoad = true;
      // if selected is the disabled group but it's empty
      await this.redirectIfDisabled();
      this.$store.commit('resetUsers');
      await this.loadUsers();
      this.setNewUserDefaultGroup(val);
    },
    filteredUsers(filteredUsers) {
      _logger_js__WEBPACK_IMPORTED_MODULE_12__["default"].debug(`${filteredUsers.length} filtered user(s)`);
    }
  },
  async created() {
    await this.loadUsers();
  },
  async mounted() {
    if (!this.settings.canChangePassword) {
      OC.Notification.showTemporary(t('settings', 'Password change is disabled because the master key is disabled'));
    }

    /**
     * Reset and init new user form
     */
    this.resetForm();

    /**
     * Register search
     */
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.subscribe)('nextcloud:unified-search.search', this.search);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.subscribe)('nextcloud:unified-search.reset', this.resetSearch);

    /**
     * If disabled group but empty, redirect
     */
    await this.redirectIfDisabled();
  },
  beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.unsubscribe)('nextcloud:unified-search.search', this.search);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_4__.unsubscribe)('nextcloud:unified-search.reset', this.resetSearch);
  },
  methods: {
    async handleScrollEnd() {
      await this.loadUsers();
    },
    async loadUsers() {
      this.loading.users = true;
      try {
        if (this.selectedGroup === 'disabled') {
          await this.$store.dispatch('getDisabledUsers', {
            offset: this.disabledUsersOffset,
            limit: this.disabledUsersLimit
          });
        } else {
          await this.$store.dispatch('getUsers', {
            offset: this.usersOffset,
            limit: this.usersLimit,
            group: this.selectedGroup,
            search: this.searchQuery
          });
        }
        _logger_js__WEBPACK_IMPORTED_MODULE_12__["default"].debug(`${this.users.length} total user(s) loaded`);
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_12__["default"].error('Failed to load users', {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__.showError)('Failed to load users');
      }
      this.loading.users = false;
      this.isInitialLoad = false;
    },
    closeModal() {
      this.$store.commit('setShowConfig', {
        key: 'showNewUserForm',
        value: false
      });
    },
    async search(_ref) {
      let {
        query
      } = _ref;
      this.searchQuery = query;
      this.$store.commit('resetUsers');
      await this.loadUsers();
    },
    resetSearch() {
      this.search({
        query: ''
      });
    },
    resetForm() {
      // revert form to original state
      this.newUser = Object.assign({}, newUser);

      /**
       * Init default language from server data. The use of this.settings
       * requires a computed variable, which break the v-model binding of the form,
       * this is a much easier solution than getter and setter on a computed var
       */
      if (this.settings.defaultLanguage) {
        vue__WEBPACK_IMPORTED_MODULE_14__["default"].set(this.newUser.language, 'code', this.settings.defaultLanguage);
      }

      /**
       * In case the user directly loaded the user list within a group
       * the watch won't be triggered. We need to initialize it.
       */
      this.setNewUserDefaultGroup(this.selectedGroup);
      this.loading.all = false;
    },
    setNewUserDefaultGroup(value) {
      if (value && value.length > 0) {
        // setting new user default group to the current selected one
        const currentGroup = this.groups.find(group => group.id === value);
        if (currentGroup) {
          this.newUser.groups = [currentGroup];
          return;
        }
      }
      // fallback, empty selected group
      this.newUser.groups = [];
    },
    /**
     * If the selected group is the disabled group but the count is 0
     * redirect to the all users page.
     * we only check for 0 because we don't have the count on ldap
     * and we therefore set the usercount to -1 in this specific case
     */
    async redirectIfDisabled() {
      const allGroups = this.$store.getters.getGroups;
      if (this.selectedGroup === 'disabled' && allGroups.findIndex(group => group.id === 'disabled' && group.usercount === 0) > -1) {
        // disabled group is empty, redirection to all users
        this.$router.push({
          name: 'users'
        });
        await this.loadUsers();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "../nextcloud-vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "../nextcloud-vue/dist/Components/NcModal.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcPasswordField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcPasswordField.js */ "../nextcloud-vue/dist/Components/NcPasswordField.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "../nextcloud-vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "../nextcloud-vue/dist/Components/NcTextField.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NewUserModal',
  components: {
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    NcModal: _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcPasswordField: _nextcloud_vue_dist_Components_NcPasswordField_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcSelect: _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    loading: {
      type: Object,
      required: true
    },
    newUser: {
      type: Object,
      required: true
    },
    quotaOptions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      possibleManagers: [],
      // TRANSLATORS This string describes a manager in the context of an organization
      managerLabel: t('settings', 'Set user manager')
    };
  },
  computed: {
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    usernameLabel() {
      if (this.settings.newUserGenerateUserID) {
        return t('settings', 'Username will be autogenerated');
      }
      return t('settings', 'Username (required)');
    },
    minPasswordLength() {
      return this.$store.getters.getPasswordPolicyMinLength;
    },
    groups() {
      // data provided php side + remove the disabled group
      return this.$store.getters.getGroups.filter(group => group.id !== 'disabled').sort((a, b) => a.name.localeCompare(b.name));
    },
    subAdminsGroups() {
      // data provided php side
      return this.$store.getters.getSubadminGroups;
    },
    canAddGroups() {
      // disabled if no permission to add new users to group
      return this.groups.map(group => {
        // clone object because we don't want
        // to edit the original groups
        group = Object.assign({}, group);
        group.$isDisabled = group.canAdd === false;
        return group;
      });
    },
    languages() {
      return [{
        name: t('settings', 'Common languages'),
        languages: this.settings.languages.commonLanguages
      }, ...this.settings.languages.commonLanguages, {
        name: t('settings', 'Other languages'),
        languages: this.settings.languages.otherLanguages
      }, ...this.settings.languages.otherLanguages];
    }
  },
  async beforeMount() {
    await this.searchUserManager();
  },
  methods: {
    async createUser() {
      this.loading.all = true;
      try {
        await this.$store.dispatch('addUser', {
          userid: this.newUser.id,
          password: this.newUser.password,
          displayName: this.newUser.displayName,
          email: this.newUser.mailAddress,
          groups: this.newUser.groups.map(group => group.id),
          subadmin: this.newUser.subAdminsGroups.map(group => group.id),
          quota: this.newUser.quota.id,
          language: this.newUser.language.code,
          manager: this.newUser.manager.id
        });
        this.$emit('reset');
        this.$refs.username?.$refs?.inputField?.$refs?.input?.focus?.();
        this.$emit('close');
      } catch (error) {
        this.loading.all = false;
        if (error.response && error.response.data && error.response.data.ocs && error.response.data.ocs.meta) {
          const statuscode = error.response.data.ocs.meta.statuscode;
          if (statuscode === 102) {
            // wrong username
            this.$refs.username?.$refs?.inputField?.$refs?.input?.focus?.();
          } else if (statuscode === 107) {
            // wrong password
            this.$refs.password?.$refs?.inputField?.$refs?.input?.focus?.();
          }
        }
      }
    },
    handleGroupInput(groups) {
      /**
       * Filter out groups with no id to prevent duplicate selected options
       *
       * Created groups are added programmatically by `createGroup()`
       */
      this.newUser.groups = groups.filter(group => Boolean(group.id));
    },
    /**
     * Create a new group
     *
     * @param {any} group Group
     * @param {string} group.name Group id
     */
    async createGroup(_ref) {
      let {
        name: gid
      } = _ref;
      this.loading.groups = true;
      try {
        await this.$store.dispatch('addGroup', gid);
        this.newUser.groups.push(this.groups.find(group => group.id === gid));
        this.loading.groups = false;
      } catch (error) {
        this.loading.groups = false;
      }
    },
    /**
     * Validate quota string to make sure it's a valid human file size
     *
     * @param {string} quota Quota in readable format '5 GB'
     * @return {object}
     */
    validateQuota(quota) {
      // only used for new presets sent through @Tag
      const validQuota = OC.Util.computerFileSize(quota);
      if (validQuota !== null && validQuota >= 0) {
        // unify format output
        quota = OC.Util.humanFileSize(OC.Util.computerFileSize(quota));
        this.newUser.quota = {
          id: quota,
          label: quota
        };
        return this.newUser.quota;
      }
      // Default is unlimited
      this.newUser.quota = this.quotaOptions[0];
      return this.quotaOptions[0];
    },
    languageFilterBy(option, label, search) {
      // Show group header of the language
      if (option.languages) {
        return option.languages.some(_ref2 => {
          let {
            name
          } = _ref2;
          return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
      }
      return (label || '').toLocaleLowerCase().includes(search.toLocaleLowerCase());
    },
    async searchUserManager(query) {
      await this.$store.dispatch('searchUsers', {
        offset: 0,
        limit: 10,
        search: query
      }).then(response => {
        const users = response?.data ? Object.values(response?.data.ocs.data.users) : [];
        if (users.length > 0) {
          this.possibleManagers = users;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAvatar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAvatar.js */ "../nextcloud-vue/dist/Components/NcAvatar.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "../nextcloud-vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcProgressBar.js */ "../nextcloud-vue/dist/Components/NcProgressBar.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "../nextcloud-vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "../nextcloud-vue/dist/Components/NcTextField.mjs");
/* harmony import */ var _UserRowActions_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserRowActions.vue */ "./apps/settings/src/components/Users/UserRowActions.vue");
/* harmony import */ var _mixins_UserRowMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/UserRowMixin.js */ "./apps/settings/src/mixins/UserRowMixin.js");
/* harmony import */ var _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/userUtils.ts */ "./apps/settings/src/utils/userUtils.ts");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserRow',
  components: {
    NcAvatar: _nextcloud_vue_dist_Components_NcAvatar_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcProgressBar: _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcSelect: _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    UserRowActions: _UserRowActions_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_mixins_UserRowMixin_js__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    user: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    users: {
      type: Array,
      required: true
    },
    hasObfuscated: {
      type: Boolean,
      required: true
    },
    groups: {
      type: Array,
      default: () => []
    },
    subAdminsGroups: {
      type: Array,
      required: true
    },
    quotaOptions: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    settings: {
      type: Object,
      required: true
    },
    externalActions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedQuota: false,
      rand: Math.random().toString(36).substring(2),
      loadingPossibleManagers: false,
      possibleManagers: [],
      currentManager: '',
      editing: false,
      loading: {
        all: false,
        displayName: false,
        password: false,
        mailAddress: false,
        groups: false,
        subadmins: false,
        quota: false,
        delete: false,
        disable: false,
        languages: false,
        wipe: false,
        manager: false
      },
      editedDisplayName: this.user.displayname,
      editedPassword: '',
      editedMail: this.user.email ?? ''
    };
  },
  computed: {
    managerLabel() {
      // TRANSLATORS This string describes a manager in the context of an organization
      return t('settings', 'Set user manager');
    },
    isObfuscated() {
      return (0,_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_10__.isObfuscated)(this.user);
    },
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    isLoadingUser() {
      return this.loading.delete || this.loading.disable || this.loading.wipe;
    },
    isLoadingField() {
      return this.loading.delete || this.loading.disable || this.loading.all;
    },
    uniqueId() {
      return encodeURIComponent(this.user.id + this.rand);
    },
    userGroupsLabels() {
      return this.userGroups.map(group => group.name).join(', ');
    },
    userSubAdminsGroupsLabels() {
      return this.userSubAdminsGroups.map(group => group.name).join(', ');
    },
    usedSpace() {
      if (this.user.quota?.used) {
        return t('settings', '{size} used', {
          size: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)(this.user.quota?.used)
        });
      }
      return t('settings', '{size} used', {
        size: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)(0)
      });
    },
    canEdit() {
      return (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid !== this.user.id || this.settings.isAdmin;
    },
    userQuota() {
      let quota = this.user.quota?.quota;
      if (quota === 'default') {
        quota = this.settings.defaultQuota;
        if (quota !== 'none') {
          // convert to numeric value to match what the server would usually return
          quota = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.parseFileSize)(quota, true);
        }
      }

      // when the default quota is unlimited, the server returns -3 here, map it to "none"
      if (quota === 'none' || quota === -3) {
        return t('settings', 'Unlimited');
      } else if (quota >= 0) {
        return (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)(quota);
      }
      return (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)(0);
    },
    userActions() {
      const actions = [{
        icon: 'icon-delete',
        text: t('settings', 'Delete user'),
        action: this.deleteUser
      }, {
        icon: 'icon-delete',
        text: t('settings', 'Wipe all devices'),
        action: this.wipeUserDevices
      }, {
        icon: this.user.enabled ? 'icon-close' : 'icon-add',
        text: this.user.enabled ? t('settings', 'Disable user') : t('settings', 'Enable user'),
        action: this.enableDisableUser
      }];
      if (this.user.email !== null && this.user.email !== '') {
        actions.push({
          icon: 'icon-mail',
          text: t('settings', 'Resend welcome email'),
          action: this.sendWelcomeMail
        });
      }
      return actions.concat(this.externalActions);
    },
    // mapping saved values to objects
    editedUserQuota: {
      get() {
        if (this.selectedQuota !== false) {
          return this.selectedQuota;
        }
        if (this.settings.defaultQuota !== _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_10__.unlimitedQuota.id && (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.parseFileSize)(this.settings.defaultQuota, true) >= 0) {
          // if value is valid, let's map the quotaOptions or return custom quota
          return {
            id: this.settings.defaultQuota,
            label: this.settings.defaultQuota
          };
        }
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_10__.unlimitedQuota; // unlimited
      },

      set(quota) {
        this.selectedQuota = quota;
      }
    },
    availableLanguages() {
      return this.languages[0].languages.concat(this.languages[1].languages);
    }
  },
  async beforeMount() {
    if (this.user.manager) {
      await this.initManager(this.user.manager);
    }
  },
  methods: {
    wipeUserDevices() {
      const userid = this.user.id;
      OC.dialogs.confirmDestructive(t('settings', 'In case of lost device or exiting the organization, this can remotely wipe the Nextcloud data from all devices associated with {userid}. Only works if the devices are connected to the internet.', {
        userid
      }), t('settings', 'Remote wipe of devices'), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: t('settings', 'Wipe {userid}\'s devices', {
          userid
        }),
        confirmClasses: 'error',
        cancel: t('settings', 'Cancel')
      }, result => {
        if (result) {
          this.loading.wipe = true;
          this.loading.all = true;
          this.$store.dispatch('wipeUserDevices', userid).then(() => (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('settings', 'Wiped {userid}\'s devices', {
            userid
          })), {
            timeout: 2000
          }).finally(() => {
            this.loading.wipe = false;
            this.loading.all = false;
          });
        }
      }, true);
    },
    filterManagers(managers) {
      return managers.filter(manager => manager.id !== this.user.id);
    },
    async initManager(userId) {
      await this.$store.dispatch('getUser', userId).then(response => {
        this.currentManager = response?.data.ocs.data;
      });
    },
    async searchInitialUserManager() {
      this.loadingPossibleManagers = true;
      await this.searchUserManager();
      this.loadingPossibleManagers = false;
    },
    async searchUserManager(query) {
      await this.$store.dispatch('searchUsers', {
        offset: 0,
        limit: 10,
        search: query
      }).then(response => {
        const users = response?.data ? this.filterManagers(Object.values(response?.data.ocs.data.users)) : [];
        if (users.length > 0) {
          this.possibleManagers = users;
        }
      });
    },
    async updateUserManager(manager) {
      if (manager === null) {
        this.currentManager = '';
      }
      this.loading.manager = true;
      try {
        await this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'manager',
          value: this.currentManager ? this.currentManager.id : ''
        });
      } catch (error) {
        // TRANSLATORS This string describes a manager in the context of an organization
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('setting', 'Failed to update user manager'));
        console.error(error);
      } finally {
        this.loading.manager = false;
      }
    },
    deleteUser() {
      const userid = this.user.id;
      OC.dialogs.confirmDestructive(t('settings', 'Fully delete {userid}\'s account including all their personal files, app data, etc.', {
        userid
      }), t('settings', 'Account deletion'), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: t('settings', 'Delete {userid}\'s account', {
          userid
        }),
        confirmClasses: 'error',
        cancel: t('settings', 'Cancel')
      }, result => {
        if (result) {
          this.loading.delete = true;
          this.loading.all = true;
          return this.$store.dispatch('deleteUser', userid).then(() => {
            this.loading.delete = false;
            this.loading.all = false;
          });
        }
      }, true);
    },
    enableDisableUser() {
      this.loading.delete = true;
      this.loading.all = true;
      const userid = this.user.id;
      const enabled = !this.user.enabled;
      return this.$store.dispatch('enableDisableUser', {
        userid,
        enabled
      }).then(() => {
        this.loading.delete = false;
        this.loading.all = false;
      });
    },
    /**
     * Set user displayName
     *
     * @param {string} displayName The display name
     */
    updateDisplayName() {
      this.loading.displayName = true;
      this.$store.dispatch('setUserData', {
        userid: this.user.id,
        key: 'displayname',
        value: this.editedDisplayName
      }).then(() => {
        this.loading.displayName = false;
        if (this.editedDisplayName === this.user.displayname) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('setting', 'Display name was successfully changed'));
        }
      });
    },
    /**
     * Set user password
     *
     * @param {string} password The email address
     */
    updatePassword() {
      this.loading.password = true;
      if (this.editedPassword.length === 0) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('setting', "Password can't be empty"));
        this.loading.password = false;
      } else {
        this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'password',
          value: this.editedPassword
        }).then(() => {
          this.loading.password = false;
          this.editedPassword = '';
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('setting', 'Password was successfully changed'));
        });
      }
    },
    /**
     * Set user mailAddress
     *
     * @param {string} mailAddress The email address
     */
    updateEmail() {
      this.loading.mailAddress = true;
      if (this.editedMail === '') {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('setting', "Email can't be empty"));
        this.loading.mailAddress = false;
        this.editedMail = this.user.email;
      } else {
        this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'email',
          value: this.editedMail
        }).then(() => {
          this.loading.mailAddress = false;
          if (this.editedMail === this.user.email) {
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('setting', 'Email was successfully changed'));
          }
        });
      }
    },
    /**
     * Create a new group and add user to it
     *
     * @param {string} gid Group id
     */
    async createGroup(_ref) {
      let {
        name: gid
      } = _ref;
      this.loading = {
        groups: true,
        subadmins: true
      };
      try {
        await this.$store.dispatch('addGroup', gid);
        const userid = this.user.id;
        await this.$store.dispatch('addUserGroup', {
          userid,
          gid
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = {
          groups: false,
          subadmins: false
        };
      }
      return this.$store.getters.getGroups[this.groups.length];
    },
    /**
     * Add user to group
     *
     * @param {object} group Group object
     */
    async addUserGroup(group) {
      if (group.isCreating) {
        // This is NcSelect's internal value for a new inputted group name
        // Ignore
        return;
      }
      this.loading.groups = true;
      const userid = this.user.id;
      const gid = group.id;
      if (group.canAdd === false) {
        return false;
      }
      try {
        await this.$store.dispatch('addUserGroup', {
          userid,
          gid
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.groups = false;
      }
    },
    /**
     * Remove user from group
     *
     * @param {object} group Group object
     */
    async removeUserGroup(group) {
      if (group.canRemove === false) {
        return false;
      }
      this.loading.groups = true;
      const userid = this.user.id;
      const gid = group.id;
      try {
        await this.$store.dispatch('removeUserGroup', {
          userid,
          gid
        });
        this.loading.groups = false;
        // remove user from current list if current list is the removed group
        if (this.$route.params.selectedGroup === gid) {
          this.$store.commit('deleteUser', userid);
        }
      } catch {
        this.loading.groups = false;
      }
    },
    /**
     * Add user to group
     *
     * @param {object} group Group object
     */
    async addUserSubAdmin(group) {
      this.loading.subadmins = true;
      const userid = this.user.id;
      const gid = group.id;
      try {
        await this.$store.dispatch('addUserSubAdmin', {
          userid,
          gid
        });
        this.loading.subadmins = false;
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * Remove user from group
     *
     * @param {object} group Group object
     */
    async removeUserSubAdmin(group) {
      this.loading.subadmins = true;
      const userid = this.user.id;
      const gid = group.id;
      try {
        await this.$store.dispatch('removeUserSubAdmin', {
          userid,
          gid
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.subadmins = false;
      }
    },
    /**
     * Dispatch quota set request
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     * @return {string}
     */
    async setUserQuota() {
      let quota = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
      // Make sure correct label is set for unlimited quota
      if (quota === 'none') {
        quota = _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_10__.unlimitedQuota;
      }
      this.loading.quota = true;

      // ensure we only send the preset id
      quota = quota.id ? quota.id : quota;
      try {
        // If human readable format, convert to raw float format
        // Else just send the raw string
        const value = ((0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.parseFileSize)(quota, true) || quota).toString();
        await this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'quota',
          value
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.quota = false;
      }
      return quota;
    },
    /**
     * Validate quota string to make sure it's a valid human file size
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     * @return {object} The validated quota object or unlimited quota if input is invalid
     */
    validateQuota(quota) {
      if (typeof quota === 'object') {
        quota = quota?.id || quota.label;
      }
      // only used for new presets sent through @Tag
      const validQuota = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.parseFileSize)(quota, true);
      if (validQuota === null) {
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_10__.unlimitedQuota;
      } else {
        // unify format output
        quota = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.formatFileSize)((0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.parseFileSize)(quota, true));
        return {
          id: quota,
          label: quota
        };
      }
    },
    /**
     * Dispatch language set request
     *
     * @param {object} lang language object {code:'en', name:'English'}
     * @return {object}
     */
    async setUserLanguage(lang) {
      this.loading.languages = true;
      // ensure we only send the preset id
      try {
        await this.$store.dispatch('setUserData', {
          userid: this.user.id,
          key: 'language',
          value: lang.code
        });
        this.loading.languages = false;
      } catch (error) {
        console.error(error);
      }
      return lang;
    },
    /**
     * Dispatch new welcome mail request
     */
    sendWelcomeMail() {
      this.loading.all = true;
      this.$store.dispatch('sendWelcomeMail', this.user.id).then(() => (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)(t('setting', 'Welcome mail sent!'), {
        timeout: 2000
      })).finally(() => {
        this.loading.all = false;
      });
    },
    async toggleEdit() {
      this.editing = !this.editing;
      if (this.editing) {
        await this.$nextTick();
        this.$refs.displayNameField?.$refs?.inputField?.$refs?.input?.focus();
      }
      if (this.editedDisplayName !== this.user.displayname) {
        this.editedDisplayName = this.user.displayname;
      } else if (this.editedMail !== this.user.email) {
        this.editedMail = this.user.email ?? '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppSettingsDialog.js */ "../nextcloud-vue/dist/Components/NcAppSettingsDialog.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppSettingsSection.js */ "../nextcloud-vue/dist/Components/NcAppSettingsSection.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "../nextcloud-vue/dist/Components/NcCheckboxRadioSwitch.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "../nextcloud-vue/dist/Components/NcSelect.mjs");
/* harmony import */ var _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/userUtils.ts */ "./apps/settings/src/utils/userUtils.ts");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserSettingsDialog',
  components: {
    NcAppSettingsDialog: _nextcloud_vue_dist_Components_NcAppSettingsDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcAppSettingsSection: _nextcloud_vue_dist_Components_NcAppSettingsSection_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcCheckboxRadioSwitch: _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcSelect: _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedQuota: false,
      loadingSendMail: false
    };
  },
  computed: {
    isModalOpen: {
      get() {
        return this.open;
      },
      set(open) {
        this.$emit('update:open', open);
      }
    },
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    showLanguages: {
      get() {
        return this.getLocalstorage('showLanguages');
      },
      set(status) {
        this.setLocalStorage('showLanguages', status);
      }
    },
    showLastLogin: {
      get() {
        return this.getLocalstorage('showLastLogin');
      },
      set(status) {
        this.setLocalStorage('showLastLogin', status);
      }
    },
    showUserBackend: {
      get() {
        return this.getLocalstorage('showUserBackend');
      },
      set(status) {
        this.setLocalStorage('showUserBackend', status);
      }
    },
    showStoragePath: {
      get() {
        return this.getLocalstorage('showStoragePath');
      },
      set(status) {
        this.setLocalStorage('showStoragePath', status);
      }
    },
    quotaOptions() {
      // convert the preset array into objects
      const quotaPreset = this.settings.quotaPreset.reduce((acc, cur) => acc.concat({
        id: cur,
        label: cur
      }), []);
      // add default presets
      if (this.settings.allowUnlimitedQuota) {
        quotaPreset.unshift(_utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota);
      }
      return quotaPreset;
    },
    defaultQuota: {
      get() {
        if (this.selectedQuota !== false) {
          return this.selectedQuota;
        }
        if (this.settings.defaultQuota !== _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota.id && OC.Util.computerFileSize(this.settings.defaultQuota) >= 0) {
          // if value is valid, let's map the quotaOptions or return custom quota
          return {
            id: this.settings.defaultQuota,
            label: this.settings.defaultQuota
          };
        }
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota; // unlimited
      },

      set(quota) {
        this.selectedQuota = quota;
      }
    },
    sendWelcomeMail: {
      get() {
        return this.settings.newUserSendEmail;
      },
      async set(value) {
        try {
          this.loadingSendMail = true;
          this.$store.commit('setServerData', {
            ...this.settings,
            newUserSendEmail: value
          });
          await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/settings/users/preferences/newUser.sendEmail'), {
            value: value ? 'yes' : 'no'
          });
        } catch (e) {
          console.error('could not update newUser.sendEmail preference: ' + e.message, e);
        } finally {
          this.loadingSendMail = false;
        }
      }
    }
  },
  methods: {
    getLocalstorage(key) {
      // force initialization
      const localConfig = this.$localStorage.get(key);
      // if localstorage is null, fallback to original values
      this.$store.commit('setShowConfig', {
        key,
        value: localConfig !== null ? localConfig === 'true' : this.showConfig[key]
      });
      return this.showConfig[key];
    },
    setLocalStorage(key, status) {
      this.$store.commit('setShowConfig', {
        key,
        value: status
      });
      this.$localStorage.set(key, status);
      return status;
    },
    /**
     * Validate quota string to make sure it's a valid human file size
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     * @return {object} The validated quota object or unlimited quota if input is invalid
     */
    validateQuota(quota) {
      if (typeof quota === 'object') {
        quota = quota?.id || quota.label;
      }
      // only used for new presets sent through @Tag
      const validQuota = OC.Util.computerFileSize(quota);
      if (validQuota === null) {
        return _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota;
      } else {
        // unify format output
        quota = OC.Util.humanFileSize(OC.Util.computerFileSize(quota));
        return {
          id: quota,
          label: quota
        };
      }
    },
    /**
     * Dispatch default quota set request
     *
     * @param {string | object} quota Quota in readable format '5 GB' or Object {id: '5 GB', label: '5GB'}
     */
    setDefaultQuota() {
      let quota = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'none';
      // Make sure correct label is set for unlimited quota
      if (quota === 'none') {
        quota = _utils_userUtils_ts__WEBPACK_IMPORTED_MODULE_6__.unlimitedQuota;
      }
      this.$store.dispatch('setAppConfig', {
        app: 'files',
        key: 'default_quota',
        // ensure we only send the preset id
        value: quota.id ? quota.id : quota
      }).then(() => {
        if (typeof quota !== 'object') {
          quota = {
            id: quota,
            label: quota
          };
        }
        this.defaultQuota = quota;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-localstorage */ "./node_modules/vue-localstorage/dist/vue-local-storage.js");
/* harmony import */ var vue_localstorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_localstorage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionInput.js */ "../nextcloud-vue/dist/Components/NcActionInput.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionText_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionText.js */ "../nextcloud-vue/dist/Components/NcActionText.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppContent.js */ "../nextcloud-vue/dist/Components/NcAppContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigation.js */ "../nextcloud-vue/dist/Components/NcAppNavigation.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationCaption_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationCaption.js */ "../nextcloud-vue/dist/Components/NcAppNavigationCaption.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationItem.js */ "../nextcloud-vue/dist/Components/NcAppNavigationItem.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcAppNavigationNew_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcAppNavigationNew.js */ "../nextcloud-vue/dist/Components/NcAppNavigationNew.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcContent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcContent.js */ "../nextcloud-vue/dist/Components/NcContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCounterBubble.js */ "../nextcloud-vue/dist/Components/NcCounterBubble.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "../nextcloud-vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/AccountGroup.vue */ "./node_modules/vue-material-design-icons/AccountGroup.vue");
/* harmony import */ var vue_material_design_icons_AccountOff_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-material-design-icons/AccountOff.vue */ "./node_modules/vue-material-design-icons/AccountOff.vue");
/* harmony import */ var vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-material-design-icons/Cog.vue */ "./node_modules/vue-material-design-icons/Cog.vue");
/* harmony import */ var vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-material-design-icons/Plus.vue */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var vue_material_design_icons_ShieldAccount_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue-material-design-icons/ShieldAccount.vue */ "./node_modules/vue-material-design-icons/ShieldAccount.vue");
/* harmony import */ var _components_GroupListItem_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/GroupListItem.vue */ "./apps/settings/src/components/GroupListItem.vue");
/* harmony import */ var _components_UserList_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/UserList.vue */ "./apps/settings/src/components/UserList.vue");
/* harmony import */ var _components_Users_UserSettingsDialog_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Users/UserSettingsDialog.vue */ "./apps/settings/src/components/Users/UserSettingsDialog.vue");























vue__WEBPACK_IMPORTED_MODULE_22__["default"].use((vue_localstorage__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Users',
  components: {
    AccountGroup: vue_material_design_icons_AccountGroup_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    AccountOff: vue_material_design_icons_AccountOff_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    Cog: vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_1__.Fragment,
    GroupListItem: _components_GroupListItem_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    NcActionInput: _nextcloud_vue_dist_Components_NcActionInput_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcActionText: _nextcloud_vue_dist_Components_NcActionText_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcAppContent: _nextcloud_vue_dist_Components_NcAppContent_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcAppNavigation: _nextcloud_vue_dist_Components_NcAppNavigation_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcAppNavigationCaption: _nextcloud_vue_dist_Components_NcAppNavigationCaption_js__WEBPACK_IMPORTED_MODULE_8__["default"],
    NcAppNavigationItem: _nextcloud_vue_dist_Components_NcAppNavigationItem_js__WEBPACK_IMPORTED_MODULE_9__["default"],
    NcAppNavigationNew: _nextcloud_vue_dist_Components_NcAppNavigationNew_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    NcContent: _nextcloud_vue_dist_Components_NcContent_js__WEBPACK_IMPORTED_MODULE_11__["default"],
    NcCounterBubble: _nextcloud_vue_dist_Components_NcCounterBubble_js__WEBPACK_IMPORTED_MODULE_12__["default"],
    NcLoadingIcon: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_13__["default"],
    Plus: vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    ShieldAccount: vue_material_design_icons_ShieldAccount_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    UserList: _components_UserList_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    UserSettingsDialog: _components_Users_UserSettingsDialog_vue__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  props: {
    selectedGroup: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      // temporary value used for multiselect change
      externalActions: [],
      newGroupName: '',
      isAddGroupOpen: false,
      loadingAddGroup: false,
      hasAddGroupError: false,
      isDialogOpen: false
    };
  },
  computed: {
    pageHeading() {
      if (this.selectedGroupDecoded === null) {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('settings', 'Active users');
      }
      const matchHeading = {
        admin: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('settings', 'Admins'),
        disabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('settings', 'Disabled users')
      };
      return matchHeading[this.selectedGroupDecoded] ?? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('settings', 'User group: {group}', {
        group: this.selectedGroupDecoded
      });
    },
    showConfig() {
      return this.$store.getters.getShowConfig;
    },
    selectedGroupDecoded() {
      return this.selectedGroup ? decodeURIComponent(this.selectedGroup) : null;
    },
    users() {
      return this.$store.getters.getUsers;
    },
    groups() {
      return this.$store.getters.getGroups;
    },
    usersOffset() {
      return this.$store.getters.getUsersOffset;
    },
    usersLimit() {
      return this.$store.getters.getUsersLimit;
    },
    userCount() {
      return this.$store.getters.getUserCount;
    },
    settings() {
      return this.$store.getters.getServerData;
    },
    groupList() {
      const groups = Array.isArray(this.groups) ? this.groups : [];
      return groups
      // filter out disabled and admin
      .filter(group => group.id !== 'disabled' && group.id !== 'admin').map(group => this.formatGroupMenu(group));
    },
    adminGroupMenu() {
      return this.formatGroupMenu(this.groups.find(group => group.id === 'admin'));
    },
    disabledGroupMenu() {
      return this.formatGroupMenu(this.groups.find(group => group.id === 'disabled'));
    }
  },
  beforeMount() {
    this.$store.commit('initGroups', {
      groups: this.$store.getters.getServerData.groups,
      orderBy: this.$store.getters.getServerData.sortGroups,
      userCount: this.$store.getters.getServerData.userCount
    });
    this.$store.dispatch('getPasswordPolicyMinLength');
  },
  created() {
    // init the OCA.Settings.UserList object
    // and add the registerAction method
    Object.assign(OCA, {
      Settings: {
        UserList: {
          registerAction: this.registerAction
        }
      }
    });
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate,
    showNewUserMenu() {
      this.$store.commit('setShowConfig', {
        key: 'showNewUserForm',
        value: true
      });
    },
    /**
     * Register a new action for the user menu
     *
     * @param {string} icon the icon class
     * @param {string} text the text to display
     * @param {Function} action the function to run
     * @return {Array}
     */
    registerAction(icon, text, action) {
      this.externalActions.push({
        icon,
        text,
        action
      });
      return this.externalActions;
    },
    /**
     * Create a new group
     */
    async createGroup() {
      this.hasAddGroupError = false;
      const groupId = this.newGroupName.trim();
      if (groupId === '') {
        this.hasAddGroupError = true;
        return;
      }
      this.isAddGroupOpen = false;
      this.loadingAddGroup = true;
      try {
        await this.$store.dispatch('addGroup', groupId);
        await this.$router.push({
          name: 'group',
          params: {
            selectedGroup: encodeURIComponent(groupId)
          }
        });
        this.newGroupName = '';
      } catch {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('settings', 'Failed to create group'));
      }
      this.loadingAddGroup = false;
    },
    /**
     * Format a group to a menu entry
     *
     * @param {object} group the group
     * @return {object}
     */
    formatGroupMenu(group) {
      const item = {};
      if (typeof group === 'undefined') {
        return {};
      }
      item.id = group.id;
      item.title = group.name;
      item.usercount = group.usercount;

      // users count for all groups
      if (group.usercount - group.disabled > 0) {
        item.count = group.usercount - group.disabled;
      }
      return item;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_vm.showRemoveGroupModal ? _c("NcModal", {
    on: {
      close: function ($event) {
        _vm.showRemoveGroupModal = false;
      }
    }
  }, [_c("div", {
    staticClass: "modal__content"
  }, [_c("h2", {
    staticClass: "modal__header"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Please confirm the group removal")) + "\n\t\t\t")]), _vm._v(" "), _c("NcNoteCard", {
    attrs: {
      type: "warning",
      "show-alert": ""
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", 'You are about to remove the group "{group}". The users will NOT be deleted.', {
    group: _vm.name
  })) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "modal__button-row"
  }, [_c("NcButton", {
    attrs: {
      type: "secondary"
    },
    on: {
      click: function ($event) {
        _vm.showRemoveGroupModal = false;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("settings", "Cancel")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.removeGroup
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("settings", "Confirm")) + "\n\t\t\t\t")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c("NcAppNavigationItem", {
    key: _vm.id,
    attrs: {
      exact: true,
      name: _vm.name,
      to: {
        name: "group",
        params: {
          selectedGroup: encodeURIComponent(_vm.id)
        }
      },
      loading: _vm.loadingRenameGroup,
      "menu-open": _vm.openGroupMenu
    },
    on: {
      "update:menuOpen": _vm.handleGroupMenuOpen
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("AccountGroup", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }, {
      key: "counter",
      fn: function () {
        return [_vm.count ? _c("NcCounterBubble", {
          attrs: {
            type: _vm.active ? "highlighted" : undefined
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.count) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "actions",
      fn: function () {
        return [_vm.id !== "admin" && _vm.id !== "disabled" && _vm.settings.isAdmin ? _c("NcActionInput", {
          ref: "displayNameInput",
          attrs: {
            "trailing-button-label": _vm.t("settings", "Submit"),
            type: "text",
            value: _vm.name,
            label: _vm.t("settings", "Rename group")
          },
          on: {
            submit: function ($event) {
              return _vm.renameGroup(_vm.id);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Pencil", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }], null, false, 580569589)
        }) : _vm._e(), _vm._v(" "), _vm.id !== "admin" && _vm.id !== "disabled" && _vm.settings.isAdmin ? _c("NcActionButton", {
          on: {
            click: function ($event) {
              _vm.showRemoveGroupModal = true;
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Delete", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }], null, false, 2705356561)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Remove group")) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_vm.showConfig.showNewUserForm ? _c("NewUserModal", {
    attrs: {
      loading: _vm.loading,
      "new-user": _vm.newUser,
      "quota-options": _vm.quotaOptions
    },
    on: {
      reset: _vm.resetForm,
      close: _vm.closeModal
    }
  }) : _vm._e(), _vm._v(" "), _vm.filteredUsers.length === 0 ? _c("NcEmptyContent", {
    staticClass: "empty",
    attrs: {
      name: _vm.isInitialLoad && _vm.loading.users ? null : _vm.t("settings", "No users")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.isInitialLoad && _vm.loading.users ? _c("NcLoadingIcon", {
          attrs: {
            name: _vm.t("settings", "Loading users …"),
            size: 64
          }
        }) : _c("NcIconSvgWrapper", {
          attrs: {
            svg: _vm.usersSvg
          }
        })];
      },
      proxy: true
    }], null, false, 934871631)
  }) : _c("VirtualList", {
    style: _vm.style,
    attrs: {
      "data-component": _vm.UserRow,
      "data-sources": _vm.filteredUsers,
      "data-key": "id",
      "data-cy-user-list": "",
      "item-height": _vm.rowHeight,
      "extra-props": {
        users: _vm.users,
        settings: _vm.settings,
        hasObfuscated: _vm.hasObfuscated,
        groups: _vm.groups,
        subAdminsGroups: _vm.subAdminsGroups,
        quotaOptions: _vm.quotaOptions,
        languages: _vm.languages,
        externalActions: _vm.externalActions
      }
    },
    on: {
      "scroll-end": _vm.handleScrollEnd
    },
    scopedSlots: _vm._u([{
      key: "before",
      fn: function () {
        return [_c("caption", {
          staticClass: "hidden-visually"
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "List of users. This list is not fully rendered for performance reasons. The users will be rendered as you navigate through the list.")) + "\n\t\t\t")])];
      },
      proxy: true
    }, {
      key: "header",
      fn: function () {
        return [_c("UserListHeader", {
          attrs: {
            "has-obfuscated": _vm.hasObfuscated
          }
        })];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("UserListFooter", {
          attrs: {
            loading: _vm.loading.users,
            "filtered-users": _vm.filteredUsers
          }
        })];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true ***!
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
  return _c("NcModal", _vm._g({
    staticClass: "modal",
    attrs: {
      size: "small"
    }
  }, _vm.$listeners), [_c("form", {
    staticClass: "modal__form",
    attrs: {
      "data-test": "form",
      disabled: _vm.loading.all
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.createUser.apply(null, arguments);
      }
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("settings", "New user")))]), _vm._v(" "), _c("NcTextField", {
    ref: "username",
    staticClass: "modal__item",
    attrs: {
      "data-test": "username",
      value: _vm.newUser.id,
      disabled: _vm.settings.newUserGenerateUserID,
      label: _vm.usernameLabel,
      autocapitalize: "none",
      autocomplete: "off",
      spellcheck: "false",
      pattern: "[a-zA-Z0-9 _\\.@\\-']+",
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "id", $event);
      }
    }
  }), _vm._v(" "), _c("NcTextField", {
    staticClass: "modal__item",
    attrs: {
      "data-test": "displayName",
      value: _vm.newUser.displayName,
      label: _vm.t("settings", "Display name"),
      autocapitalize: "none",
      autocomplete: "off",
      spellcheck: "false"
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "displayName", $event);
      }
    }
  }), _vm._v(" "), !_vm.settings.newUserRequireEmail ? _c("span", {
    staticClass: "modal__hint",
    attrs: {
      id: "password-email-hint"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Either password or email is required")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _c("NcPasswordField", {
    ref: "password",
    staticClass: "modal__item",
    attrs: {
      "data-test": "password",
      value: _vm.newUser.password,
      minlength: _vm.minPasswordLength,
      maxlength: 469,
      "aria-describedby": "password-email-hint",
      label: _vm.newUser.mailAddress === "" ? _vm.t("settings", "Password (required)") : _vm.t("settings", "Password"),
      autocapitalize: "none",
      autocomplete: "new-password",
      spellcheck: "false",
      required: _vm.newUser.mailAddress === ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "password", $event);
      }
    }
  }), _vm._v(" "), _c("NcTextField", {
    staticClass: "modal__item",
    attrs: {
      "data-test": "email",
      type: "email",
      value: _vm.newUser.mailAddress,
      "aria-describedby": "password-email-hint",
      label: _vm.newUser.password === "" || _vm.settings.newUserRequireEmail ? _vm.t("settings", "Email (required)") : _vm.t("settings", "Email"),
      autocapitalize: "none",
      autocomplete: "off",
      spellcheck: "false",
      required: _vm.newUser.password === "" || _vm.settings.newUserRequireEmail
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.newUser, "mailAddress", $event);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal__item"
  }, [!_vm.settings.isAdmin ? _c("NcTextField", {
    class: {
      "icon-loading-small": _vm.loading.groups
    },
    attrs: {
      id: "new-user-groups-input",
      tabindex: "-1",
      value: _vm.newUser.groups,
      required: !_vm.settings.isAdmin
    }
  }) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-groups"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(!_vm.settings.isAdmin ? _vm.t("settings", "Groups (required)") : _vm.t("settings", "Groups")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-groups",
      placeholder: _vm.t("settings", "Set user groups"),
      disabled: _vm.loading.groups || _vm.loading.all,
      options: _vm.canAddGroups,
      value: _vm.newUser.groups,
      label: "name",
      "close-on-select": false,
      multiple: true,
      taggable: true
    },
    on: {
      input: _vm.handleGroupInput,
      "option:created": _vm.createGroup
    }
  })], 1), _vm._v(" "), _vm.subAdminsGroups.length > 0 && _vm.settings.isAdmin ? _c("div", {
    staticClass: "modal__item"
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-sub-admin"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Administered groups")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-sub-admin",
      placeholder: _vm.t("settings", "Set user as admin for …"),
      options: _vm.subAdminsGroups,
      "close-on-select": false,
      multiple: true,
      label: "name"
    },
    model: {
      value: _vm.newUser.subAdminsGroups,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "subAdminsGroups", $$v);
      },
      expression: "newUser.subAdminsGroups"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal__item"
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-quota"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Quota")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-quota",
      placeholder: _vm.t("settings", "Set user quota"),
      options: _vm.quotaOptions,
      clearable: false,
      taggable: true,
      "create-option": _vm.validateQuota
    },
    model: {
      value: _vm.newUser.quota,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "quota", $$v);
      },
      expression: "newUser.quota"
    }
  })], 1), _vm._v(" "), _vm.showConfig.showLanguages ? _c("div", {
    staticClass: "modal__item"
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-language"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Language")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-language",
      placeholder: _vm.t("settings", "Set default language"),
      clearable: false,
      selectable: option => !option.languages,
      "filter-by": _vm.languageFilterBy,
      options: _vm.languages,
      label: "name"
    },
    model: {
      value: _vm.newUser.language,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "language", $$v);
      },
      expression: "newUser.language"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    class: ["modal__item managers", {
      "icon-loading-small": _vm.loading.manager
    }]
  }, [_c("label", {
    staticClass: "modal__label",
    attrs: {
      for: "new-user-manager"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Manager")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "modal__select",
    attrs: {
      "input-id": "new-user-manager",
      placeholder: _vm.managerLabel,
      options: _vm.possibleManagers,
      "user-select": true,
      label: "displayname"
    },
    on: {
      search: _vm.searchUserManager
    },
    model: {
      value: _vm.newUser.manager,
      callback: function ($$v) {
        _vm.$set(_vm.newUser, "manager", $$v);
      },
      expression: "newUser.manager"
    }
  })], 1), _vm._v(" "), _c("NcButton", {
    staticClass: "modal__submit",
    attrs: {
      "data-test": "submit",
      type: "primary",
      "native-type": "submit"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Add new user")) + "\n\t\t")])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("tr", {
    staticClass: "footer"
  }, [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v(_vm._s(_vm.t("settings", "Total rows summary")))])]), _vm._v(" "), _c("td", {
    staticClass: "footer__cell footer__cell--loading"
  }, [_vm.loading ? _c("NcLoadingIcon", {
    attrs: {
      title: _vm.t("settings", "Loading users …"),
      size: 32
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("td", {
    staticClass: "footer__cell footer__cell--count footer__cell--multiline"
  }, [_c("span", {
    attrs: {
      "aria-describedby": "user-count-desc"
    }
  }, [_vm._v(_vm._s(_vm.userCount))]), _vm._v(" "), _c("span", {
    staticClass: "hidden-visually",
    attrs: {
      id: "user-count-desc"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Scroll to load more rows")) + "\n\t\t")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("tr", {
    staticClass: "header"
  }, [_c("th", {
    staticClass: "header__cell header__cell--avatar",
    attrs: {
      "data-cy-user-list-header-avatar": "",
      scope: "col"
    }
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Avatar")) + "\n\t\t")])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--displayname",
    attrs: {
      "data-cy-user-list-header-displayname": "",
      scope: "col"
    }
  }, [_c("strong", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Display name")) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "header__subtitle"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Username")) + "\n\t\t")])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell",
    class: {
      "header__cell--obfuscated": _vm.hasObfuscated
    },
    attrs: {
      "data-cy-user-list-header-password": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.passwordLabel))])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell",
    attrs: {
      "data-cy-user-list-header-email": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Email")))])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-groups": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Groups")))])]), _vm._v(" "), _vm.subAdminsGroups.length > 0 && _vm.settings.isAdmin ? _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-subadmins": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Group admin for")))])]) : _vm._e(), _vm._v(" "), _c("th", {
    staticClass: "header__cell",
    attrs: {
      "data-cy-user-list-header-quota": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Quota")))])]), _vm._v(" "), _vm.showConfig.showLanguages ? _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-languages": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Language")))])]) : _vm._e(), _vm._v(" "), _vm.showConfig.showUserBackend || _vm.showConfig.showStoragePath ? _c("th", {
    staticClass: "header__cell header__cell--large",
    attrs: {
      "data-cy-user-list-header-storage-location": "",
      scope: "col"
    }
  }, [_vm.showConfig.showUserBackend ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "User backend")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.showConfig.showStoragePath ? _c("span", {
    staticClass: "header__subtitle"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Storage location")) + "\n\t\t")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.showConfig.showLastLogin ? _c("th", {
    staticClass: "header__cell",
    attrs: {
      "data-cy-user-list-header-last-login": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Last login")))])]) : _vm._e(), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--large header__cell--fill",
    attrs: {
      "data-cy-user-list-header-manager": "",
      scope: "col"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.t("settings", "Manager")))])]), _vm._v(" "), _c("th", {
    staticClass: "header__cell header__cell--actions",
    attrs: {
      "data-cy-user-list-header-actions": "",
      scope: "col"
    }
  }, [_c("span", {
    staticClass: "hidden-visually"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "User actions")) + "\n\t\t")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("tr", {
    staticClass: "user-list__row",
    attrs: {
      "data-cy-user-row": _vm.user.id
    }
  }, [_c("td", {
    staticClass: "row__cell row__cell--avatar",
    attrs: {
      "data-cy-user-list-cell-avatar": ""
    }
  }, [_vm.isLoadingUser ? _c("NcLoadingIcon", {
    attrs: {
      name: _vm.t("settings", "Loading user …"),
      size: 32
    }
  }) : _vm.visible ? _c("NcAvatar", {
    attrs: {
      "disable-menu": "",
      "show-user-status": false,
      user: _vm.user.id
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--displayname",
    attrs: {
      "data-cy-user-list-cell-displayname": ""
    }
  }, [_vm.editing && _vm.user.backendCapabilities.setDisplayName ? [_c("NcTextField", {
    ref: "displayNameField",
    staticClass: "user-row-text-field",
    class: {
      "icon-loading-small": _vm.loading.displayName
    },
    attrs: {
      "data-cy-user-list-input-displayname": "",
      "data-loading": _vm.loading.displayName || undefined,
      "trailing-button-label": _vm.t("settings", "Submit"),
      "show-trailing-button": true,
      disabled: _vm.loading.displayName || _vm.isLoadingField,
      label: _vm.t("settings", "Change display name"),
      "trailing-button-icon": "arrowRight",
      value: _vm.editedDisplayName,
      autocapitalize: "off",
      autocomplete: "off",
      spellcheck: "false"
    },
    on: {
      "update:value": function ($event) {
        _vm.editedDisplayName = $event;
      },
      "trailing-button-click": _vm.updateDisplayName
    }
  })] : [!_vm.isObfuscated ? _c("strong", {
    attrs: {
      title: _vm.user.displayname?.length > 20 ? _vm.user.displayname : null
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.user.displayname) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "row__subtitle"
  }, [_vm._v(_vm._s(_vm.user.id))])]], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell",
    class: {
      "row__cell--obfuscated": _vm.hasObfuscated
    },
    attrs: {
      "data-cy-user-list-cell-password": ""
    }
  }, [_vm.editing && _vm.settings.canChangePassword && _vm.user.backendCapabilities.setPassword ? [_c("NcTextField", {
    staticClass: "user-row-text-field",
    class: {
      "icon-loading-small": _vm.loading.password
    },
    attrs: {
      "data-cy-user-list-input-password": "",
      "data-loading": _vm.loading.password || undefined,
      "trailing-button-label": _vm.t("settings", "Submit"),
      "show-trailing-button": true,
      disabled: _vm.loading.password || _vm.isLoadingField,
      minlength: _vm.minPasswordLength,
      maxlength: "469",
      label: _vm.t("settings", "Set new password"),
      "trailing-button-icon": "arrowRight",
      value: _vm.editedPassword,
      autocapitalize: "off",
      autocomplete: "new-password",
      required: "",
      spellcheck: "false",
      type: "password"
    },
    on: {
      "update:value": function ($event) {
        _vm.editedPassword = $event;
      },
      "trailing-button-click": _vm.updatePassword
    }
  })] : _vm.isObfuscated ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "You do not have permissions to see the details of this user")) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell",
    attrs: {
      "data-cy-user-list-cell-email": ""
    }
  }, [_vm.editing ? [_c("NcTextField", {
    staticClass: "user-row-text-field",
    class: {
      "icon-loading-small": _vm.loading.mailAddress
    },
    attrs: {
      "data-cy-user-list-input-email": "",
      "data-loading": _vm.loading.mailAddress || undefined,
      "show-trailing-button": true,
      "trailing-button-label": _vm.t("settings", "Submit"),
      label: _vm.t("settings", "Set new email address"),
      disabled: _vm.loading.mailAddress || _vm.isLoadingField,
      "trailing-button-icon": "arrowRight",
      value: _vm.editedMail,
      autocapitalize: "off",
      autocomplete: "email",
      spellcheck: "false",
      type: "email"
    },
    on: {
      "update:value": function ($event) {
        _vm.editedMail = $event;
      },
      "trailing-button-click": _vm.updateEmail
    }
  })] : !_vm.isObfuscated ? _c("span", {
    attrs: {
      title: _vm.user.email?.length > 20 ? _vm.user.email : null
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.user.email) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--large row__cell--multiline",
    attrs: {
      "data-cy-user-list-cell-groups": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "groups" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Add user to group")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "data-cy-user-list-input-groups": "",
      "data-loading": _vm.loading.groups || undefined,
      "input-id": "groups" + _vm.uniqueId,
      "close-on-select": false,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.groups,
      multiple: true,
      "append-to-body": false,
      options: _vm.availableGroups,
      placeholder: _vm.t("settings", "Add user to group"),
      taggable: _vm.settings.isAdmin,
      value: _vm.userGroups,
      label: "name",
      "no-wrap": true,
      "create-option": value => ({
        name: value,
        isCreating: true
      })
    },
    on: {
      "option:created": _vm.createGroup,
      "option:selected": options => _vm.addUserGroup(options.at(-1)),
      "option:deselected": _vm.removeUserGroup
    }
  })] : !_vm.isObfuscated ? _c("span", {
    attrs: {
      title: _vm.userGroupsLabels?.length > 40 ? _vm.userGroupsLabels : null
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.userGroupsLabels) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _vm.subAdminsGroups.length > 0 && _vm.settings.isAdmin ? _c("td", {
    staticClass: "row__cell row__cell--large row__cell--multiline",
    attrs: {
      "data-cy-user-list-cell-subadmins": ""
    }
  }, [_vm.editing && _vm.settings.isAdmin && _vm.subAdminsGroups.length > 0 ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "subadmins" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Set user as admin for")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "data-cy-user-list-input-subadmins": "",
      "data-loading": _vm.loading.subadmins || undefined,
      "input-id": "subadmins" + _vm.uniqueId,
      "close-on-select": false,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.subadmins,
      label: "name",
      "append-to-body": false,
      multiple: true,
      "no-wrap": true,
      options: _vm.subAdminsGroups,
      placeholder: _vm.t("settings", "Set user as admin for"),
      value: _vm.userSubAdminsGroups
    },
    on: {
      "option:deselected": _vm.removeUserSubAdmin,
      "option:selected": options => _vm.addUserSubAdmin(options.at(-1))
    }
  })] : !_vm.isObfuscated ? _c("span", {
    attrs: {
      title: _vm.userSubAdminsGroupsLabels?.length > 40 ? _vm.userSubAdminsGroupsLabels : null
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.userSubAdminsGroupsLabels) + "\n\t\t")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "row__cell",
    attrs: {
      "data-cy-user-list-cell-quota": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "quota" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Select user quota")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "close-on-select": true,
      "create-option": _vm.validateQuota,
      "data-cy-user-list-input-quota": "",
      "data-loading": _vm.loading.quota || undefined,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.quota,
      "append-to-body": false,
      clearable: false,
      "input-id": "quota" + _vm.uniqueId,
      options: _vm.quotaOptions,
      placeholder: _vm.t("settings", "Select user quota"),
      taggable: true
    },
    on: {
      "option:selected": _vm.setUserQuota
    },
    model: {
      value: _vm.editedUserQuota,
      callback: function ($$v) {
        _vm.editedUserQuota = $$v;
      },
      expression: "editedUserQuota"
    }
  })] : !_vm.isObfuscated ? [_c("span", {
    attrs: {
      id: "quota-progress" + _vm.uniqueId
    }
  }, [_vm._v(_vm._s(_vm.userQuota) + " (" + _vm._s(_vm.usedSpace) + ")")]), _vm._v(" "), _c("NcProgressBar", {
    staticClass: "row__progress",
    class: {
      "row__progress--warn": _vm.usedQuota > 80
    },
    attrs: {
      "aria-labelledby": "quota-progress" + _vm.uniqueId,
      value: _vm.usedQuota
    }
  })] : _vm._e()], 2), _vm._v(" "), _vm.showConfig.showLanguages ? _c("td", {
    staticClass: "row__cell row__cell--large",
    attrs: {
      "data-cy-user-list-cell-language": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "language" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("settings", "Set the language")) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      id: "language" + _vm.uniqueId,
      "data-cy-user-list-input-language": "",
      "data-loading": _vm.loading.languages || undefined,
      "allow-empty": false,
      disabled: _vm.isLoadingField,
      loading: _vm.loading.languages,
      clearable: false,
      "append-to-body": false,
      options: _vm.availableLanguages,
      placeholder: _vm.t("settings", "No language set"),
      value: _vm.userLanguage,
      label: "name"
    },
    on: {
      input: _vm.setUserLanguage
    }
  })] : !_vm.isObfuscated ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.userLanguage.name) + "\n\t\t")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.showConfig.showUserBackend || _vm.showConfig.showStoragePath ? _c("td", {
    staticClass: "row__cell row__cell--large",
    attrs: {
      "data-cy-user-list-cell-storage-location": ""
    }
  }, [!_vm.isObfuscated ? [_vm.showConfig.showUserBackend ? _c("span", [_vm._v(_vm._s(_vm.user.backend))]) : _vm._e(), _vm._v(" "), _vm.showConfig.showStoragePath ? _c("span", {
    staticClass: "row__subtitle",
    attrs: {
      title: _vm.user.storageLocation
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.user.storageLocation) + "\n\t\t\t")]) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.showConfig.showLastLogin ? _c("td", {
    staticClass: "row__cell",
    attrs: {
      title: _vm.userLastLoginTooltip,
      "data-cy-user-list-cell-last-login": ""
    }
  }, [!_vm.isObfuscated ? _c("span", [_vm._v(_vm._s(_vm.userLastLogin))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--large row__cell--fill",
    attrs: {
      "data-cy-user-list-cell-manager": ""
    }
  }, [_vm.editing ? [_c("label", {
    staticClass: "hidden-visually",
    attrs: {
      for: "manager" + _vm.uniqueId
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.managerLabel) + "\n\t\t\t")]), _vm._v(" "), _c("NcSelect", {
    staticClass: "select--fill",
    attrs: {
      "data-cy-user-list-input-manager": "",
      "data-loading": _vm.loading.manager || undefined,
      "input-id": "manager" + _vm.uniqueId,
      "close-on-select": true,
      disabled: _vm.isLoadingField,
      "append-to-body": false,
      loading: _vm.loadingPossibleManagers || _vm.loading.manager,
      label: "displayname",
      options: _vm.possibleManagers,
      placeholder: _vm.managerLabel
    },
    on: {
      open: _vm.searchInitialUserManager,
      search: _vm.searchUserManager,
      "option:selected": _vm.updateUserManager
    },
    model: {
      value: _vm.currentManager,
      callback: function ($$v) {
        _vm.currentManager = $$v;
      },
      expression: "currentManager"
    }
  })] : !_vm.isObfuscated ? _c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.user.manager) + "\n\t\t")]) : _vm._e()], 2), _vm._v(" "), _c("td", {
    staticClass: "row__cell row__cell--actions",
    attrs: {
      "data-cy-user-list-cell-actions": ""
    }
  }, [_vm.visible && !_vm.isObfuscated && _vm.canEdit && !_vm.loading.all ? _c("UserRowActions", {
    attrs: {
      actions: _vm.userActions,
      disabled: _vm.isLoadingField,
      edit: _vm.editing,
      user: _vm.user
    },
    on: {
      "update:edit": _vm.toggleEdit
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("NcActions", {
    attrs: {
      "aria-label": _vm.t("settings", "Toggle user actions menu"),
      disabled: _vm.disabled,
      inline: 1
    }
  }, [_c("NcActionButton", {
    attrs: {
      "data-cy-user-list-action-toggle-edit": `${_vm.edit}`,
      disabled: _vm.disabled
    },
    on: {
      click: _vm.toggleEdit
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("NcIconSvgWrapper", {
          key: _vm.editSvg,
          attrs: {
            svg: _vm.editSvg,
            "aria-hidden": "true"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t" + _vm._s(_vm.edit ? _vm.t("settings", "Done") : _vm.t("settings", "Edit")) + "\n\t\t")]), _vm._v(" "), _vm._l(_vm.actions, function (_ref, index) {
    let {
      action,
      icon,
      text
    } = _ref;
    return _c("NcActionButton", {
      key: index,
      attrs: {
        disabled: _vm.disabled,
        "aria-label": text,
        icon: icon
      },
      on: {
        click: event => action(event, {
          ..._vm.user
        })
      }
    }, [_vm._v("\n\t\t" + _vm._s(text) + "\n\t")]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("NcAppSettingsDialog", {
    attrs: {
      open: _vm.isModalOpen,
      "show-navigation": true,
      name: _vm.t("settings", "User management settings")
    },
    on: {
      "update:open": function ($event) {
        _vm.isModalOpen = $event;
      }
    }
  }, [_c("NcAppSettingsSection", {
    attrs: {
      id: "visibility-settings",
      name: _vm.t("settings", "Visibility")
    }
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showLanguages",
      checked: _vm.showLanguages
    },
    on: {
      "update:checked": function ($event) {
        _vm.showLanguages = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show language")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showUserBackend",
      checked: _vm.showUserBackend
    },
    on: {
      "update:checked": function ($event) {
        _vm.showUserBackend = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show user backend")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showStoragePath",
      checked: _vm.showStoragePath
    },
    on: {
      "update:checked": function ($event) {
        _vm.showStoragePath = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show storage path")) + "\n\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "showLastLogin",
      checked: _vm.showLastLogin
    },
    on: {
      "update:checked": function ($event) {
        _vm.showLastLogin = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Show last login")) + "\n\t\t")])], 1), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "email-settings",
      name: _vm.t("settings", "Send email")
    }
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      type: "switch",
      "data-test": "sendWelcomeMail",
      checked: _vm.sendWelcomeMail,
      disabled: _vm.loadingSendMail
    },
    on: {
      "update:checked": function ($event) {
        _vm.sendWelcomeMail = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Send welcome email to new users")) + "\n\t\t")])], 1), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "default-settings",
      name: _vm.t("settings", "Defaults")
    }
  }, [_c("label", {
    attrs: {
      for: "default-quota-select"
    }
  }, [_vm._v(_vm._s(_vm.t("settings", "Default quota")))]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      "input-id": "default-quota-select",
      placement: "top",
      taggable: true,
      options: _vm.quotaOptions,
      "create-option": _vm.validateQuota,
      placeholder: _vm.t("settings", "Select default quota"),
      clearable: false
    },
    on: {
      "option:selected": _vm.setDefaultQuota
    },
    model: {
      value: _vm.defaultQuota,
      callback: function ($$v) {
        _vm.defaultQuota = $$v;
      },
      expression: "defaultQuota"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("table", {
    staticClass: "user-list"
  }, [_vm._t("before"), _vm._v(" "), _c("thead", {
    ref: "thead",
    staticClass: "user-list__header",
    attrs: {
      role: "rowgroup"
    }
  }, [_vm._t("header")], 2), _vm._v(" "), _c("tbody", {
    staticClass: "user-list__body",
    style: _vm.tbodyStyle
  }, _vm._l(_vm.renderedItems, function (item, i) {
    return _c(_vm.dataComponent, _vm._b({
      key: item[_vm.dataKey],
      tag: "component",
      attrs: {
        user: item,
        visible: (i >= _vm.bufferItems || _vm.index <= _vm.bufferItems) && i < _vm.shownItems - _vm.bufferItems
      }
    }, "component", _vm.extraProps, false));
  }), 1), _vm._v(" "), _c("tfoot", {
    directives: [{
      name: "element-visibility",
      rawName: "v-element-visibility",
      value: _vm.handleFooterVisibility,
      expression: "handleFooterVisibility"
    }],
    ref: "tfoot",
    staticClass: "user-list__footer",
    attrs: {
      role: "rowgroup"
    }
  }, [_vm._t("footer")], 2)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_c("NcContent", {
    attrs: {
      "app-name": "settings"
    }
  }, [_c("NcAppNavigation", {
    attrs: {
      "aria-label": _vm.t("settings", "User management")
    },
    scopedSlots: _vm._u([{
      key: "list",
      fn: function () {
        return [_c("NcAppNavigationItem", {
          attrs: {
            id: "everyone",
            exact: true,
            name: _vm.t("settings", "Active users"),
            to: {
              name: "users"
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("AccountGroup", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, {
            key: "counter",
            fn: function () {
              return [_vm.userCount ? _c("NcCounterBubble", {
                attrs: {
                  type: !_vm.selectedGroupDecoded ? "highlighted" : undefined
                }
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.userCount) + "\n\t\t\t\t\t\t")]) : _vm._e()];
            },
            proxy: true
          }])
        }), _vm._v(" "), _vm.settings.isAdmin ? _c("NcAppNavigationItem", {
          attrs: {
            id: "admin",
            exact: true,
            name: _vm.t("settings", "Admins"),
            to: {
              name: "group",
              params: {
                selectedGroup: "admin"
              }
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("ShieldAccount", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, _vm.adminGroupMenu.count > 0 ? {
            key: "counter",
            fn: function () {
              return [_c("NcCounterBubble", {
                attrs: {
                  type: _vm.selectedGroupDecoded === "admin" ? "highlighted" : undefined
                }
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.adminGroupMenu.count) + "\n\t\t\t\t\t\t")])];
            },
            proxy: true
          } : null], null, true)
        }) : _vm._e(), _vm._v(" "), _vm.disabledGroupMenu.usercount > 0 || _vm.disabledGroupMenu.usercount === -1 ? _c("NcAppNavigationItem", {
          attrs: {
            id: "disabled",
            exact: true,
            name: _vm.t("settings", "Disabled users"),
            to: {
              name: "group",
              params: {
                selectedGroup: "disabled"
              }
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("AccountOff", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, _vm.disabledGroupMenu.usercount > 0 ? {
            key: "counter",
            fn: function () {
              return [_c("NcCounterBubble", {
                attrs: {
                  type: _vm.selectedGroupDecoded === "disabled" ? "highlighted" : undefined
                }
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.disabledGroupMenu.usercount) + "\n\t\t\t\t\t\t")])];
            },
            proxy: true
          } : null], null, true)
        }) : _vm._e(), _vm._v(" "), _c("NcAppNavigationCaption", {
          attrs: {
            name: _vm.t("settings", "Groups"),
            disabled: _vm.loadingAddGroup,
            "aria-label": _vm.loadingAddGroup ? _vm.t("settings", "Creating group …") : _vm.t("settings", "Create group"),
            "force-menu": "",
            open: _vm.isAddGroupOpen
          },
          on: {
            "update:open": function ($event) {
              _vm.isAddGroupOpen = $event;
            }
          },
          scopedSlots: _vm._u([{
            key: "actionsTriggerIcon",
            fn: function () {
              return [_vm.loadingAddGroup ? _c("NcLoadingIcon") : _c("Plus", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }, {
            key: "actions",
            fn: function () {
              return [_c("NcActionText", {
                scopedSlots: _vm._u([{
                  key: "icon",
                  fn: function () {
                    return [_c("AccountGroup", {
                      attrs: {
                        size: 20
                      }
                    })];
                  },
                  proxy: true
                }])
              }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("settings", "Create group")) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("NcActionInput", {
                attrs: {
                  label: _vm.t("settings", "Group name"),
                  "data-cy-settings-new-group-name": "",
                  "label-outside": false,
                  disabled: _vm.loadingAddGroup,
                  value: _vm.newGroupName,
                  error: _vm.hasAddGroupError,
                  "helper-text": _vm.hasAddGroupError ? _vm.t("settings", "Please enter a valid group name") : ""
                },
                on: {
                  "update:value": function ($event) {
                    _vm.newGroupName = $event;
                  },
                  submit: _vm.createGroup
                }
              })];
            },
            proxy: true
          }])
        }), _vm._v(" "), _vm._l(_vm.groupList, function (group) {
          return _c("GroupListItem", {
            key: group.id,
            attrs: {
              id: group.id,
              active: _vm.selectedGroupDecoded === group.id,
              name: group.title,
              count: group.count
            }
          });
        })];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("ul", {
          staticClass: "app-navigation-entry__settings"
        }, [_c("NcAppNavigationItem", {
          attrs: {
            name: _vm.t("settings", "User management settings")
          },
          on: {
            click: function ($event) {
              _vm.isDialogOpen = true;
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Cog", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }])
        })], 1)];
      },
      proxy: true
    }])
  }, [_c("NcAppNavigationNew", {
    attrs: {
      "button-id": "new-user-button",
      text: _vm.t("settings", "New user")
    },
    on: {
      click: _vm.showNewUserMenu,
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.showNewUserMenu.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        return _vm.showNewUserMenu.apply(null, arguments);
      }]
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Plus", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("NcAppContent", {
    attrs: {
      "page-heading": _vm.pageHeading
    }
  }, [_c("UserList", {
    attrs: {
      "selected-group": _vm.selectedGroupDecoded,
      "external-actions": _vm.externalActions
    }
  })], 1)], 1), _vm._v(" "), _c("UserSettingsDialog", {
    attrs: {
      open: _vm.isDialogOpen
    },
    on: {
      "update:open": function ($event) {
        _vm.isDialogOpen = $event;
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.modal__header[data-v-b3f9b202] {
  margin: 0;
}
.modal__content[data-v-b3f9b202] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 4px 0;
}
.modal__button-row[data-v-b3f9b202] {
  display: flex;
  width: 100%;
  justify-content: space-between;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.empty[data-v-6cba3aca] .icon-vue {
  width: 64px;
  height: 64px;
}
.empty[data-v-6cba3aca] .icon-vue svg {
  max-width: 64px;
  max-height: 64px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.modal__form[data-v-7b45e5ac] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 4px 0;
  /* fake input for groups validation */
}
.modal__form #new-user-groups-input[data-v-7b45e5ac] {
  position: absolute;
  opacity: 0;
  /* The "hidden" input is behind the NcSelect, so in general it does
  * not receives clicks. However, with Firefox, after the validation
  * fails, it will receive the first click done on it, so its width needs
  * to be set to 0 to prevent that ("pointer-events: none" does not
  * prevent it). */
  width: 0;
}
.modal__item[data-v-7b45e5ac] {
  width: 100%;
}
.modal__item[data-v-7b45e5ac]:not(:focus):not(:active) {
  border-color: var(--color-border-dark);
}
.modal__hint[data-v-7b45e5ac] {
  color: var(--color-text-maxcontrast);
  margin-top: 8px;
  align-self: flex-start;
}
.modal__label[data-v-7b45e5ac] {
  display: block;
  padding: 4px 0;
}
.modal__select[data-v-7b45e5ac] {
  width: 100%;
}
.modal__submit[data-v-7b45e5ac] {
  margin-top: 20px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.footer[data-v-97a6cb68] {
  position: relative;
  display: flex;
  min-width: 100%;
  width: fit-content;
  height: var(--row-height);
  background-color: var(--color-main-background);
}
.footer__cell[data-v-97a6cb68] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--cell-padding);
  min-width: var(--cell-width);
  width: var(--cell-width);
  color: var(--color-main-text);
}
.footer__cell strong[data-v-97a6cb68],
.footer__cell span[data-v-97a6cb68],
.footer__cell label[data-v-97a6cb68] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: anywhere;
}
@media (min-width: 670px) {
.footer__cell[data-v-97a6cb68] { /* Show one &--large column between stickied columns */
}
.footer__cell--avatar[data-v-97a6cb68], .footer__cell--displayname[data-v-97a6cb68] {
    position: sticky;
    z-index: var(--sticky-column-z-index);
    background-color: var(--color-main-background);
}
.footer__cell--avatar[data-v-97a6cb68] {
    left: 0;
}
.footer__cell--displayname[data-v-97a6cb68] {
    left: var(--avatar-cell-width);
    border-right: 1px solid var(--color-border);
}
}
.footer__cell--avatar[data-v-97a6cb68] {
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
  user-select: none;
}
.footer__cell--multiline span[data-v-97a6cb68] {
  line-height: 1.3em;
  white-space: unset;
}
@supports (-webkit-line-clamp: 2) {
.footer__cell--multiline span[data-v-97a6cb68] {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
}
.footer__cell--large[data-v-97a6cb68] {
  min-width: var(--cell-width-large);
  width: var(--cell-width-large);
}
.footer__cell--obfuscated[data-v-97a6cb68] {
  min-width: 400px;
  width: 400px;
}
.footer__cell--fill[data-v-97a6cb68] {
  min-width: var(--cell-width-large);
  width: 100%;
}
.footer__cell--actions[data-v-97a6cb68] {
  position: sticky;
  right: 0;
  z-index: var(--sticky-column-z-index);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  width: 110px;
  background-color: var(--color-main-background);
  border-left: 1px solid var(--color-border);
}
.footer__subtitle[data-v-97a6cb68] {
  color: var(--color-text-maxcontrast);
}
.footer__cell[data-v-97a6cb68] {
  position: sticky;
  color: var(--color-text-maxcontrast);
}
.footer__cell--loading[data-v-97a6cb68] {
  left: 0;
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
}
.footer__cell--count[data-v-97a6cb68] {
  left: var(--avatar-cell-width);
  min-width: var(--cell-width);
  width: var(--cell-width);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.header[data-v-55420384] {
  position: relative;
  display: flex;
  min-width: 100%;
  width: fit-content;
  height: var(--row-height);
  background-color: var(--color-main-background);
  border-bottom: 1px solid var(--color-border);
}
.header__cell[data-v-55420384] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--cell-padding);
  min-width: var(--cell-width);
  width: var(--cell-width);
  color: var(--color-main-text);
}
.header__cell strong[data-v-55420384],
.header__cell span[data-v-55420384],
.header__cell label[data-v-55420384] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: anywhere;
}
@media (min-width: 670px) {
.header__cell[data-v-55420384] { /* Show one &--large column between stickied columns */
}
.header__cell--avatar[data-v-55420384], .header__cell--displayname[data-v-55420384] {
    position: sticky;
    z-index: var(--sticky-column-z-index);
    background-color: var(--color-main-background);
}
.header__cell--avatar[data-v-55420384] {
    left: 0;
}
.header__cell--displayname[data-v-55420384] {
    left: var(--avatar-cell-width);
    border-right: 1px solid var(--color-border);
}
}
.header__cell--avatar[data-v-55420384] {
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
  user-select: none;
}
.header__cell--multiline span[data-v-55420384] {
  line-height: 1.3em;
  white-space: unset;
}
@supports (-webkit-line-clamp: 2) {
.header__cell--multiline span[data-v-55420384] {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
}
.header__cell--large[data-v-55420384] {
  min-width: var(--cell-width-large);
  width: var(--cell-width-large);
}
.header__cell--obfuscated[data-v-55420384] {
  min-width: 400px;
  width: 400px;
}
.header__cell--fill[data-v-55420384] {
  min-width: var(--cell-width-large);
  width: 100%;
}
.header__cell--actions[data-v-55420384] {
  position: sticky;
  right: 0;
  z-index: var(--sticky-column-z-index);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  width: 110px;
  background-color: var(--color-main-background);
  border-left: 1px solid var(--color-border);
}
.header__subtitle[data-v-55420384] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * @copyright 2023 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
.user-list__row[data-v-11563777] {
  position: relative;
  display: flex;
  min-width: 100%;
  width: fit-content;
  height: var(--row-height);
  background-color: var(--color-main-background);
}
.user-list__row[data-v-11563777]:hover {
  background-color: var(--color-background-hover);
}
.user-list__row:hover .row__cell[data-v-11563777]:not(.row__cell--actions) {
  background-color: var(--color-background-hover);
}
.user-list__row .select--fill[data-v-11563777] {
  max-width: calc(var(--cell-width-large) - 2 * var(--cell-padding));
}
.row__cell[data-v-11563777] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--cell-padding);
  min-width: var(--cell-width);
  width: var(--cell-width);
  color: var(--color-main-text);
}
.row__cell strong[data-v-11563777],
.row__cell span[data-v-11563777],
.row__cell label[data-v-11563777] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: anywhere;
}
@media (min-width: 670px) {
.row__cell[data-v-11563777] { /* Show one &--large column between stickied columns */
}
.row__cell--avatar[data-v-11563777], .row__cell--displayname[data-v-11563777] {
    position: sticky;
    z-index: var(--sticky-column-z-index);
    background-color: var(--color-main-background);
}
.row__cell--avatar[data-v-11563777] {
    left: 0;
}
.row__cell--displayname[data-v-11563777] {
    left: var(--avatar-cell-width);
    border-right: 1px solid var(--color-border);
}
}
.row__cell--avatar[data-v-11563777] {
  min-width: var(--avatar-cell-width);
  width: var(--avatar-cell-width);
  align-items: center;
  padding: 0;
  user-select: none;
}
.row__cell--multiline span[data-v-11563777] {
  line-height: 1.3em;
  white-space: unset;
}
@supports (-webkit-line-clamp: 2) {
.row__cell--multiline span[data-v-11563777] {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
}
.row__cell--large[data-v-11563777] {
  min-width: var(--cell-width-large);
  width: var(--cell-width-large);
}
.row__cell--obfuscated[data-v-11563777] {
  min-width: 400px;
  width: 400px;
}
.row__cell--fill[data-v-11563777] {
  min-width: var(--cell-width-large);
  width: 100%;
}
.row__cell--actions[data-v-11563777] {
  position: sticky;
  right: 0;
  z-index: var(--sticky-column-z-index);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  width: 110px;
  background-color: var(--color-main-background);
  border-left: 1px solid var(--color-border);
}
.row__subtitle[data-v-11563777] {
  color: var(--color-text-maxcontrast);
}
.row__cell[data-v-11563777] {
  border-bottom: 1px solid var(--color-border);
}
.row__cell[data-v-11563777] .v-select.select {
  min-width: var(--cell-min-width);
}
.row__progress[data-v-11563777] {
  margin-top: 4px;
}
.row__progress--warn[data-v-11563777]::-moz-progress-bar {
  background: var(--color-warning) !important;
}
.row__progress--warn[data-v-11563777]::-webkit-progress-value {
  background: var(--color-warning) !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `label[for=default-quota-select][data-v-3eb7c73e] {
  display: block;
  padding: 4px 0;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.user-list[data-v-51adeab1] {
  --avatar-cell-width: 48px;
  --cell-padding: 7px;
  --cell-width: 200px;
  --cell-width-large: 300px;
  --cell-min-width: calc(var(--cell-width) - (2 * var(--cell-padding)));
  --sticky-column-z-index: calc(var(--vs-dropdown-z-index) + 1);
  display: block;
  overflow: auto;
  height: 100%;
}
.user-list__header[data-v-51adeab1], .user-list__footer[data-v-51adeab1] {
  position: sticky;
  display: block;
}
.user-list__header[data-v-51adeab1] {
  top: 0;
  z-index: calc(var(--sticky-column-z-index) + 1);
}
.user-list__footer[data-v-51adeab1] {
  left: 0;
}
.user-list__body[data-v-51adeab1] {
  display: flex;
  flex-direction: column;
  width: 100%;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.app-content[data-v-889b7562] {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-height: 100%;
}
.app-navigation-entry__settings[data-v-889b7562] {
  height: auto !important;
  flex: 0 0 auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue":
/*!********************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true */ "./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true");
/* harmony import */ var _GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupListItem.vue?vue&type=script&lang=js */ "./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js");
/* harmony import */ var _GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true */ "./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b3f9b202",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/GroupListItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/UserList.vue":
/*!***************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=6cba3aca&scoped=true */ "./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js */ "./apps/settings/src/components/UserList.vue?vue&type=script&lang=js");
/* harmony import */ var _UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true */ "./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6cba3aca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/UserList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue":
/*!*************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true */ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true");
/* harmony import */ var _NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewUserModal.vue?vue&type=script&lang=js */ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js");
/* harmony import */ var _NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true */ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7b45e5ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/NewUserModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue":
/*!***************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true */ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true");
/* harmony import */ var _UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserListFooter.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts");
/* harmony import */ var _UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "97a6cb68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserListFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue":
/*!***************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserListHeader.vue?vue&type=template&id=55420384&scoped=true */ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true");
/* harmony import */ var _UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserListHeader.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts");
/* harmony import */ var _UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55420384",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserListHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue":
/*!********************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRow.vue?vue&type=template&id=11563777&scoped=true */ "./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true");
/* harmony import */ var _UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRow.vue?vue&type=script&lang=js */ "./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js");
/* harmony import */ var _UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11563777",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserRow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRowActions.vue":
/*!***************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRowActions.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRowActions.vue?vue&type=template&id=34f3ef36 */ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36");
/* harmony import */ var _UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRowActions.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserRowActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue":
/*!*******************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true */ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true");
/* harmony import */ var _UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsDialog.vue?vue&type=script&lang=js */ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js");
/* harmony import */ var _UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true */ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3eb7c73e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/UserSettingsDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue":
/*!************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualList.vue?vue&type=template&id=51adeab1&scoped=true */ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true");
/* harmony import */ var _VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VirtualList.vue?vue&type=script&lang=ts */ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts");
/* harmony import */ var _VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true */ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51adeab1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/Users/VirtualList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/views/Users.vue":
/*!*******************************************!*\
  !*** ./apps/settings/src/views/Users.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=889b7562&scoped=true */ "./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true");
/* harmony import */ var _Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js */ "./apps/settings/src/views/Users.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true */ "./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "889b7562",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/views/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/AccountOff.vue":
/*!***************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/AccountOff.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountOff.vue?vue&type=template&id=5a55962e */ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e");
/* harmony import */ var _AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountOff.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/AccountOff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AccountOffIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ShieldAccount.vue":
/*!******************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ShieldAccount.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShieldAccount.vue?vue&type=template&id=223b63f0 */ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0");
/* harmony import */ var _ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShieldAccount.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.render,
  _ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/ShieldAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ShieldAccountIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRowActions.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts":
/*!************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/UserList.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/views/Users.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./apps/settings/src/views/Users.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_template_id_b3f9b202_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=template&id=b3f9b202&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6cba3aca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=template&id=6cba3aca&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=template&id=6cba3aca&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_template_id_7b45e5ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=template&id=7b45e5ac&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_template_id_97a6cb68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=template&id=97a6cb68&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_template_id_55420384_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=template&id=55420384&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=template&id=55420384&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_template_id_11563777_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=template&id=11563777&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=template&id=11563777&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36":
/*!*********************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRowActions_vue_vue_type_template_id_34f3ef36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRowActions.vue?vue&type=template&id=34f3ef36 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRowActions.vue?vue&type=template&id=34f3ef36");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_template_id_3eb7c73e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=template&id=3eb7c73e&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_template_id_51adeab1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=template&id=51adeab1&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=template&id=51adeab1&scoped=true");


/***/ }),

/***/ "./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true":
/*!*************************************************************************************!*\
  !*** ./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_889b7562_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=889b7562&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=template&id=889b7562&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupListItem_vue_vue_type_style_index_0_id_b3f9b202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/GroupListItem.vue?vue&type=style&index=0&id=b3f9b202&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_6cba3aca_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/UserList.vue?vue&type=style&index=0&id=6cba3aca&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUserModal_vue_vue_type_style_index_0_id_7b45e5ac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/NewUserModal.vue?vue&type=style&index=0&id=7b45e5ac&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListFooter_vue_vue_type_style_index_0_id_97a6cb68_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListFooter.vue?vue&type=style&index=0&id=97a6cb68&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListHeader_vue_vue_type_style_index_0_id_55420384_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserListHeader.vue?vue&type=style&index=0&id=55420384&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRow_vue_vue_type_style_index_0_id_11563777_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserRow.vue?vue&type=style&index=0&id=11563777&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsDialog_vue_vue_type_style_index_0_id_3eb7c73e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/UserSettingsDialog.vue?vue&type=style&index=0&id=3eb7c73e&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VirtualList_vue_vue_type_style_index_0_id_51adeab1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/Users/VirtualList.vue?vue&type=style&index=0&id=51adeab1&lang=scss&scoped=true");


/***/ }),

/***/ "./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_889b7562_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/views/Users.vue?vue&type=style&index=0&id=889b7562&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./AccountOff.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./ShieldAccount.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_AccountOff_vue_vue_type_template_id_5a55962e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./AccountOff.vue?vue&type=template&id=5a55962e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ShieldAccount_vue_vue_type_template_id_223b63f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./ShieldAccount.vue?vue&type=template&id=223b63f0 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/AccountOff.vue?vue&type=template&id=5a55962e ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon account-off-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12.28,14L18.28,20L20,21.72L18.73,23L15.73,20H4V18C4,16.16 6.5,14.61 9.87,14.14L2.78,7.05L4.05,5.78L12.28,14M20,18V19.18L15.14,14.32C18,14.93 20,16.35 20,18Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ShieldAccount.vue?vue&type=template&id=223b63f0 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon shield-account-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-localstorage/dist/vue-local-storage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-localstorage/dist/vue-local-storage.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * vue-local-storage v0.6.0
 * (c) 2017 Alexander Avakov
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var VueLocalStorage = function VueLocalStorage () {
  this._properties = {};
  this._namespace = '';
  this._isSupported = true;
};

var prototypeAccessors = { namespace: {} };

/**
 * Namespace getter.
 *
 * @returns {string}
 */
prototypeAccessors.namespace.get = function () {
  return this._namespace
};

/**
 * Namespace setter.
 *
 * @param {string} value
 */
prototypeAccessors.namespace.set = function (value) {
  this._namespace = value ? (value + ".") : '';
};

/**
 * Concatenates localStorage key with namespace prefix.
 *
 * @param {string} lsKey
 * @returns {string}
 * @private
 */
VueLocalStorage.prototype._getLsKey = function _getLsKey (lsKey) {
  return ("" + (this._namespace) + lsKey)
};

/**
 * Set a value to localStorage giving respect to the namespace.
 *
 * @param {string} lsKey
 * @param {*} rawValue
 * @param {*} type
 * @private
 */
VueLocalStorage.prototype._lsSet = function _lsSet (lsKey, rawValue, type) {
  var key = this._getLsKey(lsKey);
  var value = type && [Array, Object].includes(type)
    ? JSON.stringify(rawValue)
    : rawValue;

  window.localStorage.setItem(key, value);
};

/**
 * Get value from localStorage giving respect to the namespace.
 *
 * @param {string} lsKey
 * @returns {any}
 * @private
 */
VueLocalStorage.prototype._lsGet = function _lsGet (lsKey) {
  var key = this._getLsKey(lsKey);

  return window.localStorage[key]
};

/**
 * Get value from localStorage
 *
 * @param {String} lsKey
 * @param {*} defaultValue
 * @param {*} defaultType
 * @returns {*}
 */
VueLocalStorage.prototype.get = function get (lsKey, defaultValue, defaultType) {
    var this$1 = this;
    if ( defaultValue === void 0 ) defaultValue = null;
    if ( defaultType === void 0 ) defaultType = String;

  if (!this._isSupported) {
    return null
  }

  if (this._lsGet(lsKey)) {
    var type = defaultType;

    for (var key in this$1._properties) {
      if (key === lsKey) {
        type = this$1._properties[key].type;
        break
      }
    }

    return this._process(type, this._lsGet(lsKey))
  }

  return defaultValue !== null ? defaultValue : null
};

/**
 * Set localStorage value
 *
 * @param {String} lsKey
 * @param {*} value
 * @returns {*}
 */
VueLocalStorage.prototype.set = function set (lsKey, value) {
    var this$1 = this;

  if (!this._isSupported) {
    return null
  }

  for (var key in this$1._properties) {
    var type = this$1._properties[key].type;

    if ((key === lsKey)) {
      this$1._lsSet(lsKey, value, type);

      return value
    }
  }

  this._lsSet(lsKey, value);

  return value
};

/**
 * Remove value from localStorage
 *
 * @param {String} lsKey
 */
VueLocalStorage.prototype.remove = function remove (lsKey) {
  if (!this._isSupported) {
    return null
  }

  return window.localStorage.removeItem(lsKey)
};

/**
 * Add new property to localStorage
 *
 * @param {String} key
 * @param {function} type
 * @param {*} defaultValue
 */
VueLocalStorage.prototype.addProperty = function addProperty (key, type, defaultValue) {
    if ( defaultValue === void 0 ) defaultValue = undefined;

  type = type || String;

  this._properties[key] = { type: type };

  if (!this._lsGet(key) && defaultValue !== null) {
    this._lsSet(key, defaultValue, type);
  }
};

/**
 * Process the value before return it from localStorage
 *
 * @param {String} type
 * @param {*} value
 * @returns {*}
 * @private
 */
VueLocalStorage.prototype._process = function _process (type, value) {
  switch (type) {
    case Boolean:
      return value === 'true'
    case Number:
      return parseFloat(value)
    case Array:
      try {
        var array = JSON.parse(value);

        return Array.isArray(array) ? array : []
      } catch (e) {
        return []
      }
    case Object:
      try {
        return JSON.parse(value)
      } catch (e) {
        return {}
      }
    default:
      return value
  }
};

Object.defineProperties( VueLocalStorage.prototype, prototypeAccessors );

var vueLocalStorage = new VueLocalStorage();

var index = {
  /**
   * Install vue-local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
  install: function (Vue, options) {
    if ( options === void 0 ) options = {};

    if (typeof process !== 'undefined' &&
      (
        process.server ||
        process.SERVER_BUILD ||
        (process.env && process.env.VUE_ENV === 'server')
      )
    ) {
      return
    }

    var isSupported = true;

    try {
      var test = '__vue-localstorage-test__';

      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
    } catch (e) {
      isSupported = false;
      vueLocalStorage._isSupported = false;

      console.error('Local storage is not supported');
    }

    var name = options.name || 'localStorage';
    var bind = options.bind;

    if (options.namespace) {
      vueLocalStorage.namespace = options.namespace;
    }

    Vue.mixin({
      beforeCreate: function beforeCreate () {
        var this$1 = this;

        if (!isSupported) {
          return
        }

        if (this.$options[name]) {
          Object.keys(this.$options[name]).forEach(function (key) {
            var config = this$1.$options[name][key];
            var ref = [config.type, config.default];
            var type = ref[0];
            var defaultValue = ref[1];

            vueLocalStorage.addProperty(key, type, defaultValue);

            var existingProp = Object.getOwnPropertyDescriptor(vueLocalStorage, key);

            if (!existingProp) {
              var prop = {
                get: function () { return Vue.localStorage.get(key, defaultValue); },
                set: function (val) { return Vue.localStorage.set(key, val); },
                configurable: true
              };

              Object.defineProperty(vueLocalStorage, key, prop);
              Vue.util.defineReactive(vueLocalStorage, key, defaultValue);
            } else if (!Vue.config.silent) {
              console.log((key + ": is already defined and will be reused"));
            }

            if ((bind || config.bind) && config.bind !== false) {
              this$1.$options.computed = this$1.$options.computed || {};

              if (!this$1.$options.computed[key]) {
                this$1.$options.computed[key] = {
                  get: function () { return Vue.localStorage[key]; },
                  set: function (val) { Vue.localStorage[key] = val; }
                };
              }
            }
          });
        }
      }
    });

    Vue[name] = vueLocalStorage;
    Vue.prototype[("$" + name)] = vueLocalStorage;
  }
};

return index;

})));


/***/ }),

/***/ "./apps/settings/img/users.svg?raw":
/*!*****************************************!*\
  !*** ./apps/settings/img/users.svg?raw ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewbox=\"0 0 16 16\"><path d=\"M10 1C8.25 1 7 2.43 7 3.8c0 1.4.1 2.4.8 3.5.2.29.5.35.7.6.135.5.24 1 .1 1.5-.28.1-.525.22-.8.33-.085-.15-.23-.2-.47-.4C6.6 8.89 5.77 8.58 5 8.29c-.1-.37-.1-.65 0-1 .156-.166.37-.27.5-.43.46-.6.5-1.654.5-2.37 0-1.06-.954-1.9-2-1.9-1.17 0-2 1-2 1.9 0 .93.034 1.64.5 2.37.13.2.367.26.5.43.1.33.1.654 0 1-.85.3-1.6.64-2.34 1.04-.57.4-.52.205-.66 1.53-.11 1.06 2.335 1.13 4 1.13h.17c-.054.274-.1.63-.17 1.3-.16 1.59 3.5 1.7 6 1.7s6.16-.1 6-1.7c-.215-2-.23-1.71-1-2.3-1.1-.654-2.45-1.17-3.6-1.6-.15-.56-.04-.97.1-1.5.235-.25.5-.36.7-.6.7-.885.8-2.425.8-3.5 0-1.6-1.43-2.8-3-2.8z\"/></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/check.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/check.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-check\" viewBox=\"0 0 24 24\"><path d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/pencil.svg?raw":
/*!**************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/pencil.svg?raw ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-pencil\" viewBox=\"0 0 24 24\"><path d=\"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z\" /></svg>";

/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcActionInput.mjs":
/*!**********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcActionInput.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcActionInput_Z_VZ4WYV_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcActionInput_Z_VZ4WYV_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcActionInput-Z-VZ4WYV.mjs */ "../nextcloud-vue/dist/chunks/NcActionInput-Z-VZ4WYV.mjs");


//# sourceMappingURL=NcActionInput.mjs.map


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

/***/ "../nextcloud-vue/dist/Components/NcAppContent.mjs":
/*!*********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcAppContent.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAppContent_kiPOnoI0_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAppContent_kiPOnoI0_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAppContent-kiPOnoI0.mjs */ "../nextcloud-vue/dist/chunks/NcAppContent-kiPOnoI0.mjs");


//# sourceMappingURL=NcAppContent.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcAppNavigation.mjs":
/*!************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcAppNavigation.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAppNavigation_vSapb_3p_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAppNavigation_vSapb_3p_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAppNavigation-vSapb_3p.mjs */ "../nextcloud-vue/dist/chunks/NcAppNavigation-vSapb_3p.mjs");


//# sourceMappingURL=NcAppNavigation.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcAppNavigationCaption.mjs":
/*!*******************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcAppNavigationCaption.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAppNavigationCaption_USD00vRS_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAppNavigationCaption_USD00vRS_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAppNavigationCaption-USD00vRS.mjs */ "../nextcloud-vue/dist/chunks/NcAppNavigationCaption-USD00vRS.mjs");


//# sourceMappingURL=NcAppNavigationCaption.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcAppNavigationItem.mjs":
/*!****************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcAppNavigationItem.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAppNavigationItem_lr6YiCBy_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAppNavigationItem_lr6YiCBy_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAppNavigationItem-lr6YiCBy.mjs */ "../nextcloud-vue/dist/chunks/NcAppNavigationItem-lr6YiCBy.mjs");


//# sourceMappingURL=NcAppNavigationItem.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcAppSettingsDialog.mjs":
/*!****************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcAppSettingsDialog.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAppSettingsDialog_5fMV9oL_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAppSettingsDialog_5fMV9oL_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAppSettingsDialog-5fMV9oL_.mjs */ "../nextcloud-vue/dist/chunks/NcAppSettingsDialog-5fMV9oL_.mjs");


//# sourceMappingURL=NcAppSettingsDialog.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcAvatar.mjs":
/*!*****************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcAvatar.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcAvatar_hzJg5uL9_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcAvatar_hzJg5uL9_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcAvatar-hzJg5uL9.mjs */ "../nextcloud-vue/dist/chunks/NcAvatar-hzJg5uL9.mjs");


//# sourceMappingURL=NcAvatar.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcCheckboxRadioSwitch.mjs":
/*!******************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcCheckboxRadioSwitch.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcCheckboxRadioSwitch_kFWeinsE_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcCheckboxRadioSwitch_kFWeinsE_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcCheckboxRadioSwitch-kFWeinsE.mjs */ "../nextcloud-vue/dist/chunks/NcCheckboxRadioSwitch-kFWeinsE.mjs");


//# sourceMappingURL=NcCheckboxRadioSwitch.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcContent.mjs":
/*!******************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcContent.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcContent_CZwORDt2_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcContent_CZwORDt2_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcContent-CZwORDt2.mjs */ "../nextcloud-vue/dist/chunks/NcContent-CZwORDt2.mjs");


//# sourceMappingURL=NcContent.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcIconSvgWrapper.mjs":
/*!*************************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcIconSvgWrapper.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcIconSvgWrapper_lx4sifIC_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcIconSvgWrapper_lx4sifIC_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcIconSvgWrapper-lx4sifIC.mjs */ "../nextcloud-vue/dist/chunks/NcIconSvgWrapper-lx4sifIC.mjs");


//# sourceMappingURL=NcIconSvgWrapper.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcProgressBar.mjs":
/*!**********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcProgressBar.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcProgressBar_wXhW6oA_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcProgressBar_wXhW6oA_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcProgressBar-wXhW6oA-.mjs */ "../nextcloud-vue/dist/chunks/NcProgressBar-wXhW6oA-.mjs");


//# sourceMappingURL=NcProgressBar.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcSelect.mjs":
/*!*****************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcSelect.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcSelect_jC7ShD5p_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcSelect_jC7ShD5p_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcSelect-jC7ShD5p.mjs */ "../nextcloud-vue/dist/chunks/NcSelect-jC7ShD5p.mjs");


//# sourceMappingURL=NcSelect.mjs.map


/***/ }),

/***/ "../nextcloud-vue/dist/Components/NcTextField.mjs":
/*!********************************************************!*\
  !*** ../nextcloud-vue/dist/Components/NcTextField.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcTextField_CyPkfdPA_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcTextField_CyPkfdPA_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcTextField-CyPkfdPA.mjs */ "../nextcloud-vue/dist/chunks/NcTextField-CyPkfdPA.mjs");


//# sourceMappingURL=NcTextField.mjs.map


/***/ }),

/***/ "./node_modules/@vueuse/components/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@vueuse/components/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnClickOutside: () => (/* binding */ OnClickOutside),
/* harmony export */   OnLongPress: () => (/* binding */ OnLongPress),
/* harmony export */   UseActiveElement: () => (/* binding */ UseActiveElement),
/* harmony export */   UseBattery: () => (/* binding */ UseBattery),
/* harmony export */   UseBrowserLocation: () => (/* binding */ UseBrowserLocation),
/* harmony export */   UseClipboard: () => (/* binding */ UseClipboard),
/* harmony export */   UseColorMode: () => (/* binding */ UseColorMode),
/* harmony export */   UseDark: () => (/* binding */ UseDark),
/* harmony export */   UseDeviceMotion: () => (/* binding */ UseDeviceMotion),
/* harmony export */   UseDeviceOrientation: () => (/* binding */ UseDeviceOrientation),
/* harmony export */   UseDevicePixelRatio: () => (/* binding */ UseDevicePixelRatio),
/* harmony export */   UseDevicesList: () => (/* binding */ UseDevicesList),
/* harmony export */   UseDocumentVisibility: () => (/* binding */ UseDocumentVisibility),
/* harmony export */   UseDraggable: () => (/* binding */ UseDraggable),
/* harmony export */   UseElementBounding: () => (/* binding */ UseElementBounding),
/* harmony export */   UseElementSize: () => (/* binding */ UseElementSize),
/* harmony export */   UseElementVisibility: () => (/* binding */ UseElementVisibility),
/* harmony export */   UseEyeDropper: () => (/* binding */ UseEyeDropper),
/* harmony export */   UseFullscreen: () => (/* binding */ UseFullscreen),
/* harmony export */   UseGeolocation: () => (/* binding */ UseGeolocation),
/* harmony export */   UseIdle: () => (/* binding */ UseIdle),
/* harmony export */   UseImage: () => (/* binding */ UseImage),
/* harmony export */   UseMouse: () => (/* binding */ UseMouse),
/* harmony export */   UseMouseInElement: () => (/* binding */ UseMouseInElement),
/* harmony export */   UseMousePressed: () => (/* binding */ UseMousePressed),
/* harmony export */   UseNetwork: () => (/* binding */ UseNetwork),
/* harmony export */   UseNow: () => (/* binding */ UseNow),
/* harmony export */   UseObjectUrl: () => (/* binding */ UseObjectUrl),
/* harmony export */   UseOffsetPagination: () => (/* binding */ UseOffsetPagination),
/* harmony export */   UseOnline: () => (/* binding */ UseOnline),
/* harmony export */   UsePageLeave: () => (/* binding */ UsePageLeave),
/* harmony export */   UsePointer: () => (/* binding */ UsePointer),
/* harmony export */   UsePointerLock: () => (/* binding */ UsePointerLock),
/* harmony export */   UsePreferredColorScheme: () => (/* binding */ UsePreferredColorScheme),
/* harmony export */   UsePreferredContrast: () => (/* binding */ UsePreferredContrast),
/* harmony export */   UsePreferredDark: () => (/* binding */ UsePreferredDark),
/* harmony export */   UsePreferredLanguages: () => (/* binding */ UsePreferredLanguages),
/* harmony export */   UsePreferredReducedMotion: () => (/* binding */ UsePreferredReducedMotion),
/* harmony export */   UseScreenSafeArea: () => (/* binding */ UseScreenSafeArea),
/* harmony export */   UseTimeAgo: () => (/* binding */ UseTimeAgo),
/* harmony export */   UseTimestamp: () => (/* binding */ UseTimestamp),
/* harmony export */   UseVirtualList: () => (/* binding */ UseVirtualList),
/* harmony export */   UseWindowFocus: () => (/* binding */ UseWindowFocus),
/* harmony export */   UseWindowSize: () => (/* binding */ UseWindowSize),
/* harmony export */   VOnClickOutside: () => (/* binding */ vOnClickOutside),
/* harmony export */   VOnLongPress: () => (/* binding */ vOnLongPress),
/* harmony export */   vElementHover: () => (/* binding */ vElementHover),
/* harmony export */   vElementSize: () => (/* binding */ vElementSize),
/* harmony export */   vElementVisibility: () => (/* binding */ vElementVisibility),
/* harmony export */   vInfiniteScroll: () => (/* binding */ vInfiniteScroll),
/* harmony export */   vIntersectionObserver: () => (/* binding */ vIntersectionObserver),
/* harmony export */   vOnClickOutside: () => (/* binding */ vOnClickOutside),
/* harmony export */   vOnKeyStroke: () => (/* binding */ vOnKeyStroke),
/* harmony export */   vOnLongPress: () => (/* binding */ vOnLongPress),
/* harmony export */   vScroll: () => (/* binding */ vScroll),
/* harmony export */   vScrollLock: () => (/* binding */ vScrollLock)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/components/node_modules/vue-demi/lib/index.mjs");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");
/* harmony import */ var _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueuse/shared */ "./node_modules/@vueuse/shared/index.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");




const OnClickOutside = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "OnClickOutside",
  props: ["as", "options"],
  emits: ["trigger"],
  setup(props, { slots, emit }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.onClickOutside)(target, (e) => {
      emit("trigger", e);
    }, props.options);
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default());
    };
  }
});

function unrefElement(elRef) {
  var _a;
  const plain = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isClient ? window : void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => [unrefElement(target), (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isObject)(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnScopeDispose)(stop);
  return stop;
}

let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop;
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop));
    window.document.documentElement.addEventListener("click", _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

const vOnClickOutside = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    const capture = !binding.modifiers.bubble;
    if (typeof binding.value === "function") {
      el.__onClickOutside_stop = onClickOutside(el, binding.value, { capture });
    } else {
      const [handler, options] = binding.value;
      el.__onClickOutside_stop = onClickOutside(el, handler, Object.assign({ capture }, options));
    }
  },
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.unmounted](el) {
    el.__onClickOutside_stop();
  }
};

function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}

const vOnKeyStroke = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    var _a, _b;
    const keys = (_b = (_a = binding.arg) == null ? void 0 : _a.split(",")) != null ? _b : true;
    if (typeof binding.value === "function") {
      onKeyStroke(keys, binding.value, {
        target: el
      });
    } else {
      const [handler, options] = binding.value;
      onKeyStroke(keys, handler, {
        target: el,
        ...options
      });
    }
  }
};

const DEFAULT_DELAY = 500;
const DEFAULT_THRESHOLD = 10;
function onLongPress(target, handler, options) {
  var _a, _b;
  const elementRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => unrefElement(target));
  let timeout;
  let posStart;
  function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    posStart = void 0;
  }
  function onDown(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    clear();
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    posStart = {
      x: ev.x,
      y: ev.y
    };
    timeout = setTimeout(
      () => handler(ev),
      (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY
    );
  }
  function onMove(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    if (!posStart || (options == null ? void 0 : options.distanceThreshold) === false)
      return;
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    const dx = ev.x - posStart.x;
    const dy = ev.y - posStart.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance >= ((_d = options == null ? void 0 : options.distanceThreshold) != null ? _d : DEFAULT_THRESHOLD))
      clear();
  }
  const listenerOptions = {
    capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
    once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
  };
  const cleanup = [
    useEventListener(elementRef, "pointerdown", onDown, listenerOptions),
    useEventListener(elementRef, "pointermove", onMove, listenerOptions),
    useEventListener(elementRef, ["pointerup", "pointerleave"], clear, listenerOptions)
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

const OnLongPress = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "OnLongPress",
  props: ["as", "options"],
  emits: ["trigger"],
  setup(props, { slots, emit }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    onLongPress(
      target,
      (e) => {
        emit("trigger", e);
      },
      props.options
    );
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default());
    };
  }
});

const vOnLongPress = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function")
      onLongPress(el, binding.value, { modifiers: binding.modifiers });
    else
      onLongPress(el, ...binding.value);
  }
};

const UseActiveElement = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseActiveElement",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      element: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useActiveElement)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseBattery = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseBattery",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useBattery)(props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseBrowserLocation = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseBrowserLocation",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useBrowserLocation)());
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseClipboard = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseClipboard",
  props: [
    "source",
    "read",
    "navigator",
    "copiedDuring",
    "legacy"
  ],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useClipboard)(props));
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots, data);
    };
  }
});

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? vue_demi__WEBPACK_IMPORTED_MODULE_0__.shallowRef : vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.pausableWatch)(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window && listenToStorageChanges) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnMounted)(() => {
      useEventListener(window, "storage", update);
      useEventListener(window, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window) {
            window.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(resumeWatch);
      else
        resumeWatch();
    }
  }
}

function useMounted() {
  const isMounted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
  let mediaQuery;
  const matches = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnScopeDispose)(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = usePreferredDark({ window });
  const system = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toRef)(initialValue) : useStorage(storageKey, initialValue, storage, { window, listenToStorageChanges }));
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window == null ? void 0 : window.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString));
        window.document.head.appendChild(style);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute2, value);
      }
      if (disableTransition) {
        window.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(state, onChanged, { flush: "post", immediate: true });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnMounted)(() => onChanged(state.value));
  const auto = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e) {
    return auto;
  }
}

const UseColorMode = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseColorMode",
  props: ["selector", "attribute", "modes", "onChanged", "storageKey", "storage", "emitAuto"],
  setup(props, { slots }) {
    const mode = useColorMode(props);
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      mode,
      system: mode.system,
      store: mode.store
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDark = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDark",
  props: ["selector", "attribute", "valueDark", "valueLight", "onChanged", "storageKey", "storage"],
  setup(props, { slots }) {
    const isDark = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDark)(props);
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isDark,
      toggleDark: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.useToggle)(isDark)
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDeviceMotion = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDeviceMotion",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDeviceMotion)());
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDeviceOrientation = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDeviceOrientation",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDeviceOrientation)());
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDevicePixelRatio = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDevicePixelRatio",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      pixelRatio: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDevicePixelRatio)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDevicesList = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDevicesList",
  props: ["onUpdated", "requestPermissions", "constraints"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDevicesList)(props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDocumentVisibility = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDocumentVisibility",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      visibility: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDocumentVisibility)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseDraggable = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseDraggable",
  props: [
    "storageKey",
    "storageType",
    "initialValue",
    "exact",
    "preventDefault",
    "stopPropagation",
    "pointerTypes",
    "as",
    "handle",
    "axis",
    "onStart",
    "onMove",
    "onEnd"
  ],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const handle = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var _a;
      return (_a = props.handle) != null ? _a : target.value;
    });
    const storageValue = props.storageKey && (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useStorage)(
      props.storageKey,
      (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(props.initialValue) || { x: 0, y: 0 },
      _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isClient ? props.storageType === "session" ? sessionStorage : localStorage : void 0
    );
    const initialValue = storageValue || props.initialValue || { x: 0, y: 0 };
    const onEnd = (position, event) => {
      var _a;
      (_a = props.onEnd) == null ? void 0 : _a.call(props, position, event);
      if (!storageValue)
        return;
      storageValue.value.x = position.x;
      storageValue.value.y = position.y;
    };
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useDraggable)(target, {
      ...props,
      handle,
      initialValue,
      onEnd
    }));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target, style: `touch-action:none;${data.style}` }, slots.default(data));
    };
  }
});

const UseElementBounding = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseElementBounding",
  props: ["box", "as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useElementBounding)(target));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

function useElementHover(el, options = {}) {
  const {
    delayEnter = 0,
    delayLeave = 0,
    window = defaultWindow
  } = options;
  const isHovered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    if (delay)
      timer = setTimeout(() => isHovered.value = entering, delay);
    else
      isHovered.value = entering;
  };
  if (!window)
    return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  return isHovered;
}

const vElementHover = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function") {
      const isHovered = useElementHover(el);
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(isHovered, (v) => binding.value(v));
    }
  }
};

const UseElementSize = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseElementSize",
  props: ["width", "height", "box", "as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useElementSize)(target, { width: props.width, height: props.height }, { box: props.box }));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

function useResizeObserver(target, callback, options = {}) {
  const { window = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]);
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post", deep: true }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window = defaultWindow, box = "content-box" } = options;
  const isSVG = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    var _a, _b;
    return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialSize.width);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const styles = window.getComputedStyle($elem);
          width.value = Number.parseFloat(styles.width);
          height.value = Number.parseFloat(styles.height);
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnMounted)(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}

const vElementSize = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    var _a;
    const handler = typeof binding.value === "function" ? binding.value : (_a = binding.value) == null ? void 0 : _a[0];
    const options = typeof binding.value === "function" ? [] : binding.value.slice(1);
    const { width, height } = useElementSize(el, ...options);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)([width, height], ([width2, height2]) => handler({ width: width2, height: height2 }));
  }
};

const UseElementVisibility = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseElementVisibility",
  props: ["as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isVisible: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useElementVisibility)(target)
    });
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  const targets = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const _target = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.notNullish);
  });
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(immediate);
  const stopWatch = isSupported.value ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop;
      };
    },
    { immediate, flush: "post" }
  ) : _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}

function useElementVisibility(element, options = {}) {
  const { window = defaultWindow, scrollTarget } = options;
  const elementIsVisible = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  useIntersectionObserver(
    element,
    (intersectionObserverEntries) => {
      let isIntersecting = elementIsVisible.value;
      let latestTime = 0;
      for (const entry of intersectionObserverEntries) {
        if (entry.time >= latestTime) {
          latestTime = entry.time;
          isIntersecting = entry.isIntersecting;
        }
      }
      elementIsVisible.value = isIntersecting;
    },
    {
      root: scrollTarget,
      window,
      threshold: 0
    }
  );
  return elementIsVisible;
}

const vElementVisibility = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function") {
      const handler = binding.value;
      const isVisible = useElementVisibility(el);
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(isVisible, (v) => handler(v), { immediate: true });
    } else {
      const [handler, options] = binding.value;
      const isVisible = useElementVisibility(el, options);
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(isVisible, (v) => handler(v), { immediate: true });
    }
  }
};

const UseEyeDropper = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseEyeDropper",
  props: {
    sRGBHex: String
  },
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useEyeDropper)());
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseFullscreen = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseFullscreen",
  props: ["as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useFullscreen)(target));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

const UseGeolocation = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseGeolocation",
  props: ["enableHighAccuracy", "maximumAge", "timeout", "navigator"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)(props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseIdle = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseIdle",
  props: ["timeout", "events", "listenForVisibilityChange", "initialState"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useIdle)(props.timeout, props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop,
    onSuccess = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options != null ? options : {};
  const state = shallow ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.shallowRef)(initialState) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialState);
  const isReady = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const isLoading = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.shallowRef)(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.promiseTimeout)(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
      onSuccess(data);
    } catch (e) {
      error.value = e;
      onError(e);
      if (throwError)
        throw e;
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  const shell = {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
  function waitUntilIsLoaded() {
    return new Promise((resolve, reject) => {
      (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.until)(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
    });
  }
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded().then(onFulfilled, onRejected);
    }
  };
}

async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy } = options;
    img.src = src;
    if (srcset)
      img.srcset = srcset;
    if (sizes)
      img.sizes = sizes;
    if (clazz)
      img.className = clazz;
    if (loading)
      img.loading = loading;
    if (crossorigin)
      img.crossOrigin = crossorigin;
    if (referrerPolicy)
      img.referrerPolicy = referrerPolicy;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
function useImage(options, asyncStateOptions = {}) {
  const state = useAsyncState(
    () => loadImage((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(options)),
    void 0,
    {
      resetOnExecute: true,
      ...asyncStateOptions
    }
  );
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(options),
    () => state.execute(asyncStateOptions.delay),
    { deep: true }
  );
  return state;
}

const UseImage = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseImage",
  props: [
    "src",
    "srcset",
    "sizes",
    "as",
    "alt",
    "class",
    "loading",
    "crossorigin",
    "referrerPolicy"
  ],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(useImage(props));
    return () => {
      if (data.isLoading && slots.loading)
        return slots.loading(data);
      else if (data.error && slots.error)
        return slots.error(data.error);
      if (slots.default)
        return slots.default(data);
      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "img", props);
    };
  }
});

const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop,
    onScroll = _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    },
    behavior = "auto",
    window = defaultWindow
  } = options;
  const internalX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const internalY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo(x2, void 0);
    }
  });
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo(void 0, y2);
    }
  });
  function scrollTo(_x, _y) {
    var _a, _b, _c;
    if (!window)
      return;
    const _element = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(element);
    if (!_element)
      return;
    (_c = _element instanceof Document ? window.document.body : _element) == null ? void 0 : _c.scrollTo({
      top: (_a = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(_y)) != null ? _a : y.value,
      left: (_b = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(_x)) != null ? _b : x.value,
      behavior: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(behavior)
    });
  }
  const isScrolling = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const arrivedState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value)
      return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.useDebounceFn)(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    var _a;
    if (!window)
      return;
    const el = target.document ? target.document.documentElement : (_a = target.documentElement) != null ? _a : target;
    const { display, flexDirection } = getComputedStyle(el);
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft) <= 0 + (offset.left || 0);
    const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window.document && !scrollTop)
      scrollTop = window.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= 0 + (offset.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _a;
    if (!window)
      return;
    const eventTarget = (_a = e.target.documentElement) != null ? _a : e.target;
    setArrivedState(eventTarget);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(
    element,
    "scroll",
    throttle ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.useThrottleFn)(onScrollHandler, throttle, true, false) : onScrollHandler,
    eventListenerOptions
  );
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnMounted)(() => {
    const _element = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(element);
    if (!_element)
      return;
    setArrivedState(_element);
  });
  useEventListener(
    element,
    "scrollend",
    onScrollEnd,
    eventListenerOptions
  );
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(element);
      if (window && _element)
        setArrivedState(_element);
    }
  };
}

function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}

function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a;
  const {
    direction = "bottom",
    interval = 100,
    canLoadMore = () => true
  } = options;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(useScroll(
    element,
    {
      ...options,
      offset: {
        [direction]: (_a = options.distance) != null ? _a : 0,
        ...options.offset
      }
    }
  ));
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
  const isLoading = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !!promise.value);
  const observedElement = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(element));
  });
  const isElementVisible = useElementVisibility(observedElement);
  function checkAndLoad() {
    state.measure();
    if (!observedElement.value || !isElementVisible.value || !canLoadMore(observedElement.value))
      return;
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value;
    const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
    if (state.arrivedState[direction] || isNarrower) {
      if (!promise.value) {
        promise.value = Promise.all([
          onLoadMore(state),
          new Promise((resolve) => setTimeout(resolve, interval))
        ]).finally(() => {
          promise.value = null;
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => checkAndLoad());
        });
      }
    }
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => [state.arrivedState[direction], isElementVisible.value],
    checkAndLoad,
    { immediate: true }
  );
  return {
    isLoading
  };
}

const vInfiniteScroll = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function")
      useInfiniteScroll(el, binding.value);
    else
      useInfiniteScroll(el, ...binding.value);
  }
};

const vIntersectionObserver = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function")
      useIntersectionObserver(el, binding.value);
    else
      useIntersectionObserver(el, ...binding.value);
  }
};

const UseMouse = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseMouse",
  props: ["touch", "resetOnTouchEnds", "initialValue"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useMouse)(props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseMouseInElement = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseMouseElement",
  props: ["handleOutside", "as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useMouseInElement)(target, props));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

const UseMousePressed = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseMousePressed",
  props: ["touch", "initialValue", "as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useMousePressed)({ ...props, target }));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

const UseNetwork = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseNetwork",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useNetwork)());
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseNow = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseNow",
  props: ["interval"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useNow)({ ...props, controls: true }));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseObjectUrl = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseObjectUrl",
  props: [
    "object"
  ],
  setup(props, { slots }) {
    const object = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toRef)(props, "object");
    const url = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useObjectUrl)(object);
    return () => {
      if (slots.default && url.value)
        return slots.default(url);
    };
  }
});

const UseOffsetPagination = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseOffsetPagination",
  props: [
    "total",
    "page",
    "pageSize",
    "onPageChange",
    "onPageSizeChange",
    "onPageCountChange"
  ],
  emits: [
    "page-change",
    "page-size-change",
    "page-count-change"
  ],
  setup(props, { slots, emit }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useOffsetPagination)({
      ...props,
      onPageChange(...args) {
        var _a;
        (_a = props.onPageChange) == null ? void 0 : _a.call(props, ...args);
        emit("page-change", ...args);
      },
      onPageSizeChange(...args) {
        var _a;
        (_a = props.onPageSizeChange) == null ? void 0 : _a.call(props, ...args);
        emit("page-size-change", ...args);
      },
      onPageCountChange(...args) {
        var _a;
        (_a = props.onPageCountChange) == null ? void 0 : _a.call(props, ...args);
        emit("page-count-change", ...args);
      }
    }));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseOnline = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseOnline",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isOnline: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useOnline)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UsePageLeave = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePageLeave",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isLeft: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePageLeave)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UsePointer = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePointer",
  props: [
    "pointerTypes",
    "initialValue",
    "target"
  ],
  setup(props, { slots }) {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePointer)({
      ...props,
      target: props.target === "self" ? el : defaultWindow
    }));
    return () => {
      if (slots.default)
        return slots.default(data, { ref: el });
    };
  }
});

const UsePointerLock = /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePointerLock",
  props: ["as"],
  setup(props, { slots }) {
    const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePointerLock)(target));
    return () => {
      if (slots.default)
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)(props.as || "div", { ref: target }, slots.default(data));
    };
  }
});

const UsePreferredColorScheme = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePreferredColorScheme",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      colorScheme: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePreferredColorScheme)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UsePreferredContrast = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePreferredContrast",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      contrast: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePreferredContrast)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UsePreferredDark = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePreferredDark",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      prefersDark: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePreferredDark)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UsePreferredLanguages = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePreferredLanguages",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      languages: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePreferredLanguages)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UsePreferredReducedMotion = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UsePreferredReducedMotion",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      motion: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.usePreferredReducedMotion)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

function useMutationObserver(target, callback, options = {}) {
  const { window = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window && "MutationObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => unrefElement(target),
    (el) => {
      cleanup();
      if (isSupported.value && window && el) {
        observer = new MutationObserver(callback);
        observer.observe(el, mutationOptions);
      }
    },
    { immediate: true }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}

function useCssVar(prop, target, options = {}) {
  const { window = defaultWindow, initialValue = "", observe = false } = options;
  const variable = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
  const elRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  function updateCssVar() {
    var _a;
    const key = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(prop);
    const el = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(elRef);
    if (el && window) {
      const value = (_a = window.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim();
      variable.value = value || initialValue;
    }
  }
  if (observe) {
    useMutationObserver(elRef, updateCssVar, {
      attributeFilter: ["style", "class"],
      window
    });
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    [elRef, () => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(prop)],
    updateCssVar,
    { immediate: true }
  );
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(
    variable,
    (val) => {
      var _a;
      if ((_a = elRef.value) == null ? void 0 : _a.style)
        elRef.value.style.setProperty((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(prop), val);
    }
  );
  return variable;
}

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  const right = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  const bottom = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  const left = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.useDebounceFn)(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

const UseScreenSafeArea = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseScreenSafeArea",
  props: {
    top: Boolean,
    right: Boolean,
    bottom: Boolean,
    left: Boolean
  },
  setup(props, { slots }) {
    const {
      top,
      right,
      bottom,
      left
    } = useScreenSafeArea();
    return () => {
      if (slots.default) {
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          style: {
            paddingTop: props.top ? top.value : "",
            paddingRight: props.right ? right.value : "",
            paddingBottom: props.bottom ? bottom.value : "",
            paddingLeft: props.left ? left.value : "",
            boxSizing: "border-box",
            maxHeight: "100vh",
            maxWidth: "100vw",
            overflow: "auto"
          }
        }, slots.default());
      }
    };
  }
});

const vScroll = {
  [_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.directiveHooks.mounted](el, binding) {
    if (typeof binding.value === "function") {
      const handler = binding.value;
      const state = useScroll(el, {
        onScroll() {
          handler(state);
        },
        onStop() {
          handler(state);
        }
      });
    } else {
      const [handler, options] = binding.value;
      const state = useScroll(el, {
        ...options,
        onScroll(e) {
          var _a;
          (_a = options.onScroll) == null ? void 0 : _a.call(options, e);
          handler(state);
        },
        onStop(e) {
          var _a;
          (_a = options.onStop) == null ? void 0 : _a.call(options, e);
          handler(state);
        }
      });
    }
  }
};

function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toRef)(element), (el) => {
    const target = resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, initialOverflow);
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(element));
    if (!el || isLocked.value)
      return;
    if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    var _a;
    const el = resolveElement((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.toValue)(element));
    if (!el || !isLocked.value)
      return;
    _vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = (_a = elInitialOverflow.get(el)) != null ? _a : "";
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_2__.tryOnScopeDispose)(unlock);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function onScrollLock() {
  let isMounted = false;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  return (el, binding) => {
    state.value = binding.value;
    if (isMounted)
      return;
    isMounted = true;
    const isLocked = useScrollLock(el, binding.value);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(state, (v) => isLocked.value = v);
  };
}
const vScrollLock = onScrollLock();

const UseTimeAgo = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseTimeAgo",
  props: ["time", "updateInterval", "max", "fullDateFormatter", "messages", "showSecond"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useTimeAgo)(() => props.time, { ...props, controls: true }));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseTimestamp = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseTimestamp",
  props: ["immediate", "interval", "offset"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useTimestamp)({ ...props, controls: true }));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseVirtualList = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseVirtualList",
  props: [
    "list",
    "options",
    "height"
  ],
  setup(props, { slots, expose }) {
    const { list: listRef } = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);
    const { list, containerProps, wrapperProps, scrollTo } = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useVirtualList)(listRef, props.options);
    expose({ scrollTo });
    if (containerProps.style && typeof containerProps.style === "object" && !Array.isArray(containerProps.style))
      containerProps.style.height = props.height || "300px";
    return () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ...containerProps }, [
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ...wrapperProps.value }, list.value.map((item) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { overflow: "hidden", height: item.height } }, slots.default ? slots.default(item) : "Please set content!")))
    ]);
  }
});

const UseWindowFocus = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseWindowFocus",
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      focused: (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useWindowFocus)()
    });
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});

const UseWindowSize = /* @__PURE__ */ /* #__PURE__ */ (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UseWindowSize",
  props: ["initialWidth", "initialHeight"],
  setup(props, { slots }) {
    const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_1__.useWindowSize)(props));
    return () => {
      if (slots.default)
        return slots.default(data);
    };
  }
});




/***/ }),

/***/ "./node_modules/@vueuse/components/node_modules/vue-demi/lib/index.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vueuse/components/node_modules/vue-demi/lib/index.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   KeepAlive: () => (/* binding */ KeepAlive),
/* harmony export */   Suspense: () => (/* binding */ Suspense),
/* harmony export */   Teleport: () => (/* binding */ Teleport),
/* harmony export */   Transition: () => (/* binding */ Transition),
/* harmony export */   TransitionGroup: () => (/* binding */ TransitionGroup),
/* harmony export */   Vue: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Vue2: () => (/* binding */ Vue2),
/* harmony export */   computed: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   createApp: () => (/* binding */ createApp),
/* harmony export */   customRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   del: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.del),
/* harmony export */   effectScope: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   h: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   hasInjectionContext: () => (/* binding */ hasInjectionContext),
/* harmony export */   inject: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   install: () => (/* binding */ install),
/* harmony export */   isProxy: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isShallow: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVue2: () => (/* binding */ isVue2),
/* harmony export */   isVue3: () => (/* binding */ isVue3),
/* harmony export */   markRaw: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   nextTick: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   onActivated: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   onBeforeMount: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   onMounted: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   onRenderTracked: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   onUpdated: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   provide: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   reactive: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   set: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.set),
/* harmony export */   shallowReactive: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   toRaw: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   triggerRef: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   useCssModule: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   useCssVars: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   useListeners: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useListeners),
/* harmony export */   useSlots: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   version: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   watch: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   watchEffect: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   watchPostEffect: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");



var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__["default"]
var warn = vue__WEBPACK_IMPORTED_MODULE_0__["default"].util.warn

function install() {}

// createApp polyfill
function createApp(rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: vue__WEBPACK_IMPORTED_MODULE_0__["default"].config,
    use: vue__WEBPACK_IMPORTED_MODULE_0__["default"].use.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mixin: vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    component: vue__WEBPACK_IMPORTED_MODULE_0__["default"].component.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name, dir)
        return app
      } else {
        return vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}



// Vue 3 components mock
function createMockComponent(name) {
  return {
    setup() {
      throw new Error('[vue-demi] ' + name + ' is not supported in Vue 2. It\'s provided to avoid compiler errors.')
    }
  }
}
var Fragment = /*#__PURE__*/ createMockComponent('Fragment')
var Transition = /*#__PURE__*/ createMockComponent('Transition')
var TransitionGroup = /*#__PURE__*/ createMockComponent('TransitionGroup')
var Teleport = /*#__PURE__*/ createMockComponent('Teleport')
var Suspense = /*#__PURE__*/ createMockComponent('Suspense')
var KeepAlive = /*#__PURE__*/ createMockComponent('KeepAlive')



// Not implemented https://github.com/vuejs/core/pull/8111, falls back to getCurrentInstance()
function hasInjectionContext() {
  return !!(0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()
}


/***/ })

}]);
//# sourceMappingURL=settings-users-settings-users.js.map?v=33b9aa376c4bd98d5338