/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/logger.js":
/*!**********************************!*\
  !*** ./apps/files/src/logger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
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
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files').detectUser().build());

/***/ }),

/***/ "./apps/files/src/services/Files.ts":
/*!******************************************!*\
  !*** ./apps/files/src/services/Files.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents),
/* harmony export */   resultToNode: () => (/* binding */ resultToNode)
/* harmony export */ });
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cancelable-promise */ "./node_modules/cancelable-promise/umd/CancelablePromise.js");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cancelable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _WebdavClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebdavClient */ "./apps/files/src/services/WebdavClient.ts");
/* harmony import */ var _utils_hashUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hashUtils */ "./apps/files/src/utils/hashUtils.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.js");







const client = (0,_WebdavClient__WEBPACK_IMPORTED_MODULE_4__.getClient)();
const resultToNode = function (node) {
  const props = node.props;
  const permissions = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davParsePermissions)(props?.permissions);
  const owner = props['owner-id'] || (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)()?.uid;
  const source = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateRemoteUrl)('dav' + _WebdavClient__WEBPACK_IMPORTED_MODULE_4__.rootPath + node.filename);
  const id = props?.fileid < 0 ? (0,_utils_hashUtils__WEBPACK_IMPORTED_MODULE_5__.hashCode)(source) : props?.fileid || 0;
  const nodeData = {
    id,
    source,
    mtime: new Date(node.lastmod),
    mime: node.mime,
    size: props?.size || 0,
    permissions,
    owner,
    root: _WebdavClient__WEBPACK_IMPORTED_MODULE_4__.rootPath,
    attributes: {
      ...node,
      ...props,
      hasPreview: props?.['has-preview'],
      failed: props?.fileid < 0
    }
  };
  delete nodeData.attributes.props;
  return node.type === 'file' ? new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.File(nodeData) : new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Folder(nodeData);
};
const getContents = function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  const controller = new AbortController();
  const propfindPayload = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davGetDefaultPropfind)();
  return new cancelable_promise__WEBPACK_IMPORTED_MODULE_0__.CancelablePromise(async (resolve, reject, onCancel) => {
    onCancel(() => controller.abort());
    try {
      const contentsResponse = await client.getDirectoryContents(path, {
        details: true,
        data: propfindPayload,
        includeSelf: true,
        signal: controller.signal
      });
      const root = contentsResponse.data[0];
      const contents = contentsResponse.data.slice(1);
      if (root.filename !== path) {
        throw new Error('Root node does not match requested path');
      }
      resolve({
        folder: resultToNode(root),
        contents: contents.map(result => {
          try {
            return resultToNode(result);
          } catch (error) {
            _logger__WEBPACK_IMPORTED_MODULE_6__["default"].error(`Invalid node detected '${result.basename}'`, {
              error
            });
            return null;
          }
        }).filter(Boolean)
      });
    } catch (error) {
      reject(error);
    }
  });
};

/***/ }),

/***/ "./apps/files/src/services/WebdavClient.ts":
/*!*************************************************!*\
  !*** ./apps/files/src/services/WebdavClient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRootUrl: () => (/* binding */ defaultRootUrl),
/* harmony export */   getClient: () => (/* binding */ getClient),
/* harmony export */   rootPath: () => (/* binding */ rootPath)
/* harmony export */ });
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var webdav_dist_node_request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webdav/dist/node/request.js */ "./node_modules/webdav/dist/node/request.js");




const rootPath = `/files/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid}`;
const defaultRootUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav' + rootPath);
const getClient = function () {
  let rootUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRootUrl;
  const client = (0,webdav__WEBPACK_IMPORTED_MODULE_0__.createClient)(rootUrl, {
    headers: {
      requesttoken: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)() || ''
    }
  });
  /**
   * Allow to override the METHOD to support dav REPORT
   *
   * @see https://github.com/perry-mitchell/webdav-client/blob/8d9694613c978ce7404e26a401c39a41f125f87f/source/request.ts
   */
  const patcher = (0,webdav__WEBPACK_IMPORTED_MODULE_0__.getPatcher)();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // https://github.com/perry-mitchell/hot-patcher/issues/6
  patcher.patch('request', options => {
    if (options.headers?.method) {
      options.method = options.headers.method;
      delete options.headers.method;
    }
    return (0,webdav_dist_node_request_js__WEBPACK_IMPORTED_MODULE_3__.request)(options);
  });
  return client;
};

/***/ }),

/***/ "./apps/files/src/utils/hashUtils.ts":
/*!*******************************************!*\
  !*** ./apps/files/src/utils/hashUtils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashCode: () => (/* binding */ hashCode)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
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
const hashCode = function (str) {
  return str.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

/***/ }),

/***/ "./apps/systemtags/src/actions/inlineSystemTagsAction.ts":
/*!***************************************************************!*\
  !*** ./apps/systemtags/src/actions/inlineSystemTagsAction.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _css_fileEntryInlineSystemTags_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/fileEntryInlineSystemTags.scss */ "./apps/systemtags/src/css/fileEntryInlineSystemTags.scss");
/**
 * @copyright Copyright (c) 2023 Lucas Azevedo <lhs_azevedo@hotmail.com>
 *
 * @author Lucas Azevedo <lhs_azevedo@hotmail.com>
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



const getNodeSystemTags = function (node) {
  const tags = node.attributes?.['system-tags']?.['system-tag'];
  if (tags === undefined) {
    return [];
  }
  return [tags].flat();
};
const renderTag = function (tag) {
  let isMore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const tagElement = document.createElement('li');
  tagElement.classList.add('files-list__system-tag');
  tagElement.textContent = tag;
  if (isMore) {
    tagElement.classList.add('files-list__system-tag--more');
  }
  return tagElement;
};
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileAction({
  id: 'system-tags',
  displayName: () => '',
  iconSvgInline: () => '',
  enabled(nodes) {
    // Only show the action on single nodes
    if (nodes.length !== 1) {
      return false;
    }
    const node = nodes[0];
    const tags = getNodeSystemTags(node);
    // Only show the action if the node has system tags
    if (tags.length === 0) {
      return false;
    }
    return true;
  },
  exec: async () => null,
  async renderInline(node) {
    // Ensure we have the system tags as an array
    const tags = getNodeSystemTags(node);
    if (tags.length === 0) {
      return null;
    }
    const systemTagsElement = document.createElement('ul');
    systemTagsElement.classList.add('files-list__system-tags');
    if (tags.length === 1) {
      systemTagsElement.setAttribute('aria-label', (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'This file has the tag {tag}', {
        tag: tags[0]
      }));
    } else {
      const firstTags = tags.slice(0, -1).join(', ');
      const lastTag = tags[tags.length - 1];
      systemTagsElement.setAttribute('aria-label', (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'This file has the tags {firstTags} and {lastTag}', {
        firstTags,
        lastTag
      }));
    }
    systemTagsElement.append(renderTag(tags[0]));
    // More tags than the one we're showing
    if (tags.length > 1) {
      const moreTagElement = renderTag('+' + (tags.length - 1), true);
      moreTagElement.setAttribute('title', tags.slice(1).join(', '));
      systemTagsElement.append(moreTagElement);
    }
    return systemTagsElement;
  },
  order: 0
});
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerDavProperty)('nc:system-tags');
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(action);

/***/ }),

/***/ "./apps/systemtags/src/init.ts":
/*!*************************************!*\
  !*** ./apps/systemtags/src/init.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_inlineSystemTagsAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/inlineSystemTagsAction.js */ "./apps/systemtags/src/actions/inlineSystemTagsAction.ts");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_tag_multiple_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/tag-multiple.svg?raw */ "./node_modules/@mdi/svg/svg/tag-multiple.svg?raw");
/* harmony import */ var _services_systemtags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/systemtags.js */ "./apps/systemtags/src/services/systemtags.ts");
/**
 * @copyright Copyright (c) 2016 Roeland Jago Douma <roeland@famdouma.nl>
 *
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





const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.getNavigation)();
Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.View({
  id: 'tags',
  name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('systemtags', 'Tags'),
  caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('systemtags', 'List of tags and their associated files and folders.'),
  emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('systemtags', 'No tags found'),
  emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('systemtags', 'Tags you have created will show up here.'),
  icon: _mdi_svg_svg_tag_multiple_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
  order: 25,
  getContents: _services_systemtags_js__WEBPACK_IMPORTED_MODULE_4__.getContents
}));

/***/ }),

/***/ "./apps/systemtags/src/logger.ts":
/*!***************************************!*\
  !*** ./apps/systemtags/src/logger.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
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

const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('systemtags').detectUser().build();

/***/ }),

/***/ "./apps/systemtags/src/services/api.ts":
/*!*********************************************!*\
  !*** ./apps/systemtags/src/services/api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTag: () => (/* binding */ createTag),
/* harmony export */   deleteTag: () => (/* binding */ deleteTag),
/* harmony export */   fetchLastUsedTagIds: () => (/* binding */ fetchLastUsedTagIds),
/* harmony export */   fetchTags: () => (/* binding */ fetchTags),
/* harmony export */   fetchTagsPayload: () => (/* binding */ fetchTagsPayload),
/* harmony export */   updateTag: () => (/* binding */ updateTag)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _davClient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./davClient.js */ "./apps/systemtags/src/services/davClient.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./apps/systemtags/src/utils.ts");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger.js */ "./apps/systemtags/src/logger.ts");
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






const fetchTagsPayload = `<?xml version="1.0"?>
<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
	<d:prop>
		<oc:id />
		<oc:display-name />
		<oc:user-visible />
		<oc:user-assignable />
		<oc:can-assign />
	</d:prop>
</d:propfind>`;
const fetchTags = async () => {
  const path = '/systemtags';
  try {
    const {
      data: tags
    } = await _davClient_js__WEBPACK_IMPORTED_MODULE_3__.davClient.getDirectoryContents(path, {
      data: fetchTagsPayload,
      details: true,
      glob: '/systemtags/*' // Filter out first empty tag
    });

    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.parseTags)(tags);
  } catch (error) {
    _logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to load tags'), {
      error
    });
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to load tags'));
  }
};
const fetchLastUsedTagIds = async () => {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/systemtags/lastused');
  try {
    const {
      data: lastUsedTagIds
    } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    return lastUsedTagIds.map(Number);
  } catch (error) {
    _logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to load last used tags'), {
      error
    });
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to load last used tags'));
  }
};
/**
 * @return created tag id
 */
const createTag = async tag => {
  const path = '/systemtags';
  const tagToPost = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.formatTag)(tag);
  try {
    const {
      headers
    } = await _davClient_js__WEBPACK_IMPORTED_MODULE_3__.davClient.customRequest(path, {
      method: 'POST',
      data: tagToPost
    });
    const contentLocation = headers.get('content-location');
    if (contentLocation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.parseIdFromLocation)(contentLocation);
    }
    _logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Missing "Content-Location" header'));
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Missing "Content-Location" header'));
  } catch (error) {
    _logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to create tag'), {
      error
    });
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to create tag'));
  }
};
const updateTag = async tag => {
  const path = '/systemtags/' + tag.id;
  const data = `<?xml version="1.0"?>
	<d:propertyupdate  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
		<d:set>
			<d:prop>
				<oc:display-name>${tag.displayName}</oc:display-name>
				<oc:user-visible>${tag.userVisible}</oc:user-visible>
				<oc:user-assignable>${tag.userAssignable}</oc:user-assignable>
			</d:prop>
		</d:set>
	</d:propertyupdate>`;
  try {
    await _davClient_js__WEBPACK_IMPORTED_MODULE_3__.davClient.customRequest(path, {
      method: 'PROPPATCH',
      data
    });
  } catch (error) {
    _logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to update tag'), {
      error
    });
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to update tag'));
  }
};
const deleteTag = async tag => {
  const path = '/systemtags/' + tag.id;
  try {
    await _davClient_js__WEBPACK_IMPORTED_MODULE_3__.davClient.deleteFile(path);
  } catch (error) {
    _logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to delete tag'), {
      error
    });
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('systemtags', 'Failed to delete tag'));
  }
};

/***/ }),

/***/ "./apps/systemtags/src/services/davClient.ts":
/*!***************************************************!*\
  !*** ./apps/systemtags/src/services/davClient.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   davClient: () => (/* binding */ davClient)
/* harmony export */ });
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
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



const rootUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav');
const davClient = (0,webdav__WEBPACK_IMPORTED_MODULE_0__.createClient)(rootUrl, {
  headers: {
    requesttoken: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)() ?? ''
  }
});

/***/ }),

/***/ "./apps/systemtags/src/services/systemtags.ts":
/*!****************************************************!*\
  !*** ./apps/systemtags/src/services/systemtags.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./apps/systemtags/src/services/api.ts");
/* harmony import */ var _files_src_services_WebdavClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../files/src/services/WebdavClient */ "./apps/files/src/services/WebdavClient.ts");
/* harmony import */ var _files_src_services_Files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/src/services/Files */ "./apps/files/src/services/Files.ts");






const formatReportPayload = tagId => `<?xml version="1.0"?>
<oc:filter-files ${(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.getDavNameSpaces)()}>
	<d:prop>
		${(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.getDavProperties)()}
	</d:prop>
    <oc:filter-rules>
        <oc:systemtag>${tagId}</oc:systemtag>
    </oc:filter-rules>
</oc:filter-files>`;
const tagToNode = function (tag) {
  return new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Folder({
    id: tag.id,
    source: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav/systemtags/' + tag.id),
    owner: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid,
    root: '/systemtags',
    permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.READ,
    attributes: {
      ...tag,
      'is-tag': true
    }
  });
};
const getContents = async function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  // List tags in the root
  const tagsCache = (await (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchTags)()).filter(tag => tag.userVisible);
  if (path === '/') {
    return {
      folder: new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Folder({
        id: 0,
        source: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav/systemtags'),
        owner: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid,
        root: '/systemtags',
        permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.NONE
      }),
      contents: tagsCache.map(tagToNode)
    };
  }
  const tagId = parseInt(path.replace('/', ''), 10);
  const tag = tagsCache.find(tag => tag.id === tagId);
  if (!tag) {
    throw new Error('Tag not found');
  }
  const folder = tagToNode(tag);
  const contentsResponse = await (0,_files_src_services_WebdavClient__WEBPACK_IMPORTED_MODULE_4__.getClient)().getDirectoryContents('/', {
    details: true,
    // Only filter favorites if we're at the root
    data: formatReportPayload(tagId),
    headers: {
      // Patched in WebdavClient.ts
      method: 'REPORT'
    }
  });
  return {
    folder,
    contents: contentsResponse.data.map(_files_src_services_Files__WEBPACK_IMPORTED_MODULE_5__.resultToNode)
  };
};

/***/ }),

/***/ "./apps/systemtags/src/utils.ts":
/*!**************************************!*\
  !*** ./apps/systemtags/src/utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBaseTag: () => (/* binding */ defaultBaseTag),
/* harmony export */   formatTag: () => (/* binding */ formatTag),
/* harmony export */   parseIdFromLocation: () => (/* binding */ parseIdFromLocation),
/* harmony export */   parseTags: () => (/* binding */ parseTags)
/* harmony export */ });
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
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

const defaultBaseTag = {
  userVisible: true,
  userAssignable: true,
  canAssign: true
};
const parseTags = tags => {
  return tags.map(_ref => {
    let {
      props
    } = _ref;
    return Object.fromEntries(Object.entries(props).map(_ref2 => {
      let [key, value] = _ref2;
      return [(0,camelcase__WEBPACK_IMPORTED_MODULE_0__["default"])(key), (0,camelcase__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === 'displayName' ? String(value) : value];
    }));
  });
};
/**
 * Parse id from `Content-Location` header
 * @param url URL to parse
 */
const parseIdFromLocation = url => {
  const queryPos = url.indexOf('?');
  if (queryPos > 0) {
    url = url.substring(0, queryPos);
  }
  const parts = url.split('/');
  let result;
  do {
    result = parts[parts.length - 1];
    parts.pop();
    // note: first result can be empty when there is a trailing slash,
    // so we take the part before that
  } while (!result && parts.length > 0);
  return Number(result);
};
const formatTag = initialTag => {
  const tag = {
    ...initialTag
  };
  if (tag.name && !tag.displayName) {
    return tag;
  }
  tag.name = tag.displayName;
  delete tag.displayName;
  return tag;
};

/***/ }),

/***/ "./node_modules/builtin-status-codes/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/builtin-status-codes/browser.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}


/***/ }),

/***/ "./node_modules/cancelable-promise/umd/CancelablePromise.js":
/*!******************************************************************!*\
  !*** ./node_modules/cancelable-promise/umd/CancelablePromise.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CancelablePromise = void 0;
  _exports.cancelable = cancelable;
  _exports.default = void 0;
  _exports.isCancelablePromise = isCancelablePromise;

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

  function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

  function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

  function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

  function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

  var toStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : '@@toStringTag';

  var _internals = /*#__PURE__*/new WeakMap();

  var _promise = /*#__PURE__*/new WeakMap();

  var CancelablePromiseInternal = /*#__PURE__*/function () {
    function CancelablePromiseInternal(_ref) {
      var _ref$executor = _ref.executor,
          executor = _ref$executor === void 0 ? function () {} : _ref$executor,
          _ref$internals = _ref.internals,
          internals = _ref$internals === void 0 ? defaultInternals() : _ref$internals,
          _ref$promise = _ref.promise,
          promise = _ref$promise === void 0 ? new Promise(function (resolve, reject) {
        return executor(resolve, reject, function (onCancel) {
          internals.onCancelList.push(onCancel);
        });
      }) : _ref$promise;

      _classCallCheck(this, CancelablePromiseInternal);

      _classPrivateFieldInitSpec(this, _internals, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _promise, {
        writable: true,
        value: void 0
      });

      _defineProperty(this, toStringTag, 'CancelablePromise');

      this.cancel = this.cancel.bind(this);

      _classPrivateFieldSet(this, _internals, internals);

      _classPrivateFieldSet(this, _promise, promise || new Promise(function (resolve, reject) {
        return executor(resolve, reject, function (onCancel) {
          internals.onCancelList.push(onCancel);
        });
      }));
    }

    _createClass(CancelablePromiseInternal, [{
      key: "then",
      value: function then(onfulfilled, onrejected) {
        return makeCancelable(_classPrivateFieldGet(this, _promise).then(createCallback(onfulfilled, _classPrivateFieldGet(this, _internals)), createCallback(onrejected, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
      }
    }, {
      key: "catch",
      value: function _catch(onrejected) {
        return makeCancelable(_classPrivateFieldGet(this, _promise).catch(createCallback(onrejected, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
      }
    }, {
      key: "finally",
      value: function _finally(onfinally, runWhenCanceled) {
        var _this = this;

        if (runWhenCanceled) {
          _classPrivateFieldGet(this, _internals).onCancelList.push(onfinally);
        }

        return makeCancelable(_classPrivateFieldGet(this, _promise).finally(createCallback(function () {
          if (onfinally) {
            if (runWhenCanceled) {
              _classPrivateFieldGet(_this, _internals).onCancelList = _classPrivateFieldGet(_this, _internals).onCancelList.filter(function (callback) {
                return callback !== onfinally;
              });
            }

            return onfinally();
          }
        }, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
      }
    }, {
      key: "cancel",
      value: function cancel() {
        _classPrivateFieldGet(this, _internals).isCanceled = true;

        var callbacks = _classPrivateFieldGet(this, _internals).onCancelList;

        _classPrivateFieldGet(this, _internals).onCancelList = [];

        var _iterator = _createForOfIteratorHelper(callbacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;

            if (typeof callback === 'function') {
              try {
                callback();
              } catch (err) {
                console.error(err);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "isCanceled",
      value: function isCanceled() {
        return _classPrivateFieldGet(this, _internals).isCanceled === true;
      }
    }]);

    return CancelablePromiseInternal;
  }();

  var CancelablePromise = /*#__PURE__*/function (_CancelablePromiseInt) {
    _inherits(CancelablePromise, _CancelablePromiseInt);

    var _super = _createSuper(CancelablePromise);

    function CancelablePromise(executor) {
      _classCallCheck(this, CancelablePromise);

      return _super.call(this, {
        executor: executor
      });
    }

    return _createClass(CancelablePromise);
  }(CancelablePromiseInternal);

  _exports.CancelablePromise = CancelablePromise;

  _defineProperty(CancelablePromise, "all", function all(iterable) {
    return makeAllCancelable(iterable, Promise.all(iterable));
  });

  _defineProperty(CancelablePromise, "allSettled", function allSettled(iterable) {
    return makeAllCancelable(iterable, Promise.allSettled(iterable));
  });

  _defineProperty(CancelablePromise, "any", function any(iterable) {
    return makeAllCancelable(iterable, Promise.any(iterable));
  });

  _defineProperty(CancelablePromise, "race", function race(iterable) {
    return makeAllCancelable(iterable, Promise.race(iterable));
  });

  _defineProperty(CancelablePromise, "resolve", function resolve(value) {
    return cancelable(Promise.resolve(value));
  });

  _defineProperty(CancelablePromise, "reject", function reject(reason) {
    return cancelable(Promise.reject(reason));
  });

  _defineProperty(CancelablePromise, "isCancelable", isCancelablePromise);

  var _default = CancelablePromise;
  _exports.default = _default;

  function cancelable(promise) {
    return makeCancelable(promise, defaultInternals());
  }

  function isCancelablePromise(promise) {
    return promise instanceof CancelablePromise || promise instanceof CancelablePromiseInternal;
  }

  function createCallback(onResult, internals) {
    if (onResult) {
      return function (arg) {
        if (!internals.isCanceled) {
          var result = onResult(arg);

          if (isCancelablePromise(result)) {
            internals.onCancelList.push(result.cancel);
          }

          return result;
        }

        return arg;
      };
    }
  }

  function makeCancelable(promise, internals) {
    return new CancelablePromiseInternal({
      internals: internals,
      promise: promise
    });
  }

  function makeAllCancelable(iterable, promise) {
    var internals = defaultInternals();
    internals.onCancelList.push(function () {
      var _iterator2 = _createForOfIteratorHelper(iterable),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var resolvable = _step2.value;

          if (isCancelablePromise(resolvable)) {
            resolvable.cancel();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
    return new CancelablePromiseInternal({
      internals: internals,
      promise: promise
    });
  }

  function defaultInternals() {
    return {
      isCanceled: false,
      onCancelList: []
    };
  }
});
//# sourceMappingURL=CancelablePromise.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/systemtags/src/css/fileEntryInlineSystemTags.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/systemtags/src/css/fileEntryInlineSystemTags.scss ***!
  \*********************************************************************************************************************************************/
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
 * @copyright Copyright (c) 2023 Lucas Azevedo <lhs_azevedo@hotmail.com>
 *
 * @author Lucas Azevedo <lhs_azevedo@hotmail.com>
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
.files-list__system-tags {
  --min-size: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: calc(var(--min-size) * 2);
  max-width: 300px;
}

.files-list__system-tag {
  padding: 5px 10px;
  border: 1px solid;
  border-radius: var(--border-radius-pill);
  border-color: var(--color-border);
  color: var(--color-text-maxcontrast);
  height: var(--min-size);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  text-align: center;
}
.files-list__system-tag--more {
  overflow: visible;
  text-overflow: initial;
}
.files-list__system-tag + .files-list__system-tag {
  margin-left: 5px;
}

@media (min-width: 512px) {
  .files-list__system-tags {
    display: flex;
  }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/https-browserify/index.js":
/*!************************************************!*\
  !*** ./node_modules/https-browserify/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var http = __webpack_require__(/*! http */ "./node_modules/stream-http/index.js")
var url = __webpack_require__(/*! url */ "./node_modules/url/url.js")

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}


/***/ }),

/***/ "./node_modules/readable-stream/readable-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/readable-browser.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ "./node_modules/readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ "./node_modules/readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ "./node_modules/readable-stream/lib/_stream_passthrough.js");
exports.finished = __webpack_require__(/*! ./lib/internal/streams/end-of-stream.js */ "./node_modules/readable-stream/lib/internal/streams/end-of-stream.js");
exports.pipeline = __webpack_require__(/*! ./lib/internal/streams/pipeline.js */ "./node_modules/readable-stream/lib/internal/streams/pipeline.js");


/***/ }),

/***/ "./node_modules/stream-http/index.js":
/*!*******************************************!*\
  !*** ./node_modules/stream-http/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var ClientRequest = __webpack_require__(/*! ./lib/request */ "./node_modules/stream-http/lib/request.js")
var response = __webpack_require__(/*! ./lib/response */ "./node_modules/stream-http/lib/response.js")
var extend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var statusCodes = __webpack_require__(/*! builtin-status-codes */ "./node_modules/builtin-status-codes/browser.js")
var url = __webpack_require__(/*! url */ "./node_modules/url/url.js")

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = __webpack_require__.g.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.ClientRequest = ClientRequest
http.IncomingMessage = response.IncomingMessage

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.globalAgent = new http.Agent()

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]

/***/ }),

/***/ "./node_modules/stream-http/lib/capability.js":
/*!****************************************************!*\
  !*** ./node_modules/stream-http/lib/capability.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.fetch = isFunction(__webpack_require__.g.fetch) && isFunction(__webpack_require__.g.ReadableStream)

exports.writableStream = isFunction(__webpack_require__.g.WritableStream)

exports.abortController = isFunction(__webpack_require__.g.AbortController)

// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr
function getXHR () {
	// Cache the xhr value
	if (xhr !== undefined) return xhr

	if (__webpack_require__.g.XMLHttpRequest) {
		xhr = new __webpack_require__.g.XMLHttpRequest()
		// If XDomainRequest is available (ie only, where xhr might not work
		// cross domain), use the page location. Otherwise use example.com
		// Note: this doesn't actually make an http request.
		try {
			xhr.open('GET', __webpack_require__.g.XDomainRequest ? '/' : 'https://example.com')
		} catch(e) {
			xhr = null
		}
	} else {
		// Service workers don't have XHR
		xhr = null
	}
	return xhr
}

function checkTypeSupport (type) {
	var xhr = getXHR()
	if (!xhr) return false
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || checkTypeSupport('arraybuffer')

// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && checkTypeSupport('moz-chunked-arraybuffer')

// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)

function isFunction (value) {
	return typeof value === 'function'
}

xhr = null // Help gc


/***/ }),

/***/ "./node_modules/stream-http/lib/request.js":
/*!*************************************************!*\
  !*** ./node_modules/stream-http/lib/request.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
var capability = __webpack_require__(/*! ./capability */ "./node_modules/stream-http/lib/capability.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var response = __webpack_require__(/*! ./response */ "./node_modules/stream-http/lib/response.js")
var stream = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js")

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary, useFetch) {
	if (capability.fetch && useFetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + Buffer.from(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	var useFetch = true
	if (opts.mode === 'disable-fetch' || ('requestTimeout' in opts && !capability.abortController)) {
		// If the use of XHR should be preferred. Not typically needed.
		useFetch = false
		preferBinary = true
	} else if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary, useFetch)
	self._fetchTimer = null
	self._socketTimeout = null
	self._socketTimer = null

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var header = this._headers[name.toLowerCase()]
	if (header)
		return header.value
	return null
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	if ('timeout' in opts && opts.timeout !== 0) {
		self.setTimeout(opts.timeout)
	}

	var headersObj = self._headers
	var body = null
	if (opts.method !== 'GET' && opts.method !== 'HEAD') {
        body = new Blob(self._body, {
            type: (headersObj['content-type'] || {}).value || ''
        });
    }

	// create flattened list of headers
	var headersList = []
	Object.keys(headersObj).forEach(function (keyName) {
		var name = headersObj[keyName].name
		var value = headersObj[keyName].value
		if (Array.isArray(value)) {
			value.forEach(function (v) {
				headersList.push([name, v])
			})
		} else {
			headersList.push([name, value])
		}
	})

	if (self._mode === 'fetch') {
		var signal = null
		if (capability.abortController) {
			var controller = new AbortController()
			signal = controller.signal
			self._fetchAbortController = controller

			if ('requestTimeout' in opts && opts.requestTimeout !== 0) {
				self._fetchTimer = __webpack_require__.g.setTimeout(function () {
					self.emit('requestTimeout')
					if (self._fetchAbortController)
						self._fetchAbortController.abort()
				}, opts.requestTimeout)
			}
		}

		__webpack_require__.g.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headersList,
			body: body || undefined,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin',
			signal: signal
		}).then(function (response) {
			self._fetchResponse = response
			self._resetTimers(false)
			self._connect()
		}, function (reason) {
			self._resetTimers(true)
			if (!self._destroyed)
				self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new __webpack_require__.g.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		if ('requestTimeout' in opts) {
			xhr.timeout = opts.requestTimeout
			xhr.ontimeout = function () {
				self.emit('requestTimeout')
			}
		}

		headersList.forEach(function (header) {
			xhr.setRequestHeader(header[0], header[1])
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self._resetTimers(true)
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	self._resetTimers(false)

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress(self._resetTimers.bind(self))
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode, self._resetTimers.bind(self))
	self._response.on('error', function(err) {
		self.emit('error', err)
	})

	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype._resetTimers = function (done) {
	var self = this

	__webpack_require__.g.clearTimeout(self._socketTimer)
	self._socketTimer = null

	if (done) {
		__webpack_require__.g.clearTimeout(self._fetchTimer)
		self._fetchTimer = null
	} else if (self._socketTimeout) {
		self._socketTimer = __webpack_require__.g.setTimeout(function () {
			self.emit('timeout')
		}, self._socketTimeout)
	}
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function (err) {
	var self = this
	self._destroyed = true
	self._resetTimers(true)
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	else if (self._fetchAbortController)
		self._fetchAbortController.abort()

	if (err)
		self.emit('error', err)
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.setTimeout = function (timeout, cb) {
	var self = this

	if (cb)
		self.once('timeout', cb)

	self._socketTimeout = timeout
	self._resetTimers(false)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'via'
]


/***/ }),

/***/ "./node_modules/stream-http/lib/response.js":
/*!**************************************************!*\
  !*** ./node_modules/stream-http/lib/response.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js")["Buffer"];
var capability = __webpack_require__(/*! ./capability */ "./node_modules/stream-http/lib/capability.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var stream = __webpack_require__(/*! readable-stream */ "./node_modules/readable-stream/readable-browser.js")

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode, resetTimers) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		
		response.headers.forEach(function (header, key){
			self.headers[key.toLowerCase()] = header
			self.rawHeaders.push(key, header)
		})

		if (capability.writableStream) {
			var writable = new WritableStream({
				write: function (chunk) {
					resetTimers(false)
					return new Promise(function (resolve, reject) {
						if (self._destroyed) {
							reject()
						} else if(self.push(Buffer.from(chunk))) {
							resolve()
						} else {
							self._resumeFetch = resolve
						}
					})
				},
				close: function () {
					resetTimers(true)
					if (!self._destroyed)
						self.push(null)
				},
				abort: function (err) {
					resetTimers(true)
					if (!self._destroyed)
						self.emit('error', err)
				}
			})

			try {
				response.body.pipeTo(writable).catch(function (err) {
					resetTimers(true)
					if (!self._destroyed)
						self.emit('error', err)
				})
				return
			} catch (e) {} // pipeTo method isn't defined. Can't find a better way to feature test this
		}
		// fallback for when writableStream or pipeTo aren't available
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				resetTimers(result.done)
				if (result.done) {
					self.push(null)
					return
				}
				self.push(Buffer.from(result.value))
				read()
			}).catch(function (err) {
				resetTimers(true)
				if (!self._destroyed)
					self.emit('error', err)
			})
		}
		read()
	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {
	var self = this

	var resolve = self._resumeFetch
	if (resolve) {
		self._resumeFetch = null
		resolve()
	}
}

IncomingMessage.prototype._onXHRProgress = function (resetTimers) {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text':
			response = xhr.responseText
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = Buffer.alloc(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE || !xhr.response)
				break
			response = xhr.response
			self.push(Buffer.from(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(Buffer.from(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new __webpack_require__.g.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(Buffer.from(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				resetTimers(true)
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		resetTimers(true)
		self.push(null)
	}
}


/***/ }),

/***/ "./apps/systemtags/src/css/fileEntryInlineSystemTags.scss":
/*!****************************************************************!*\
  !*** ./apps/systemtags/src/css/fileEntryInlineSystemTags.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryInlineSystemTags_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./fileEntryInlineSystemTags.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./apps/systemtags/src/css/fileEntryInlineSystemTags.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryInlineSystemTags_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryInlineSystemTags_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryInlineSystemTags_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fileEntryInlineSystemTags_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/@mdi/svg/svg/tag-multiple.svg?raw":
/*!********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/tag-multiple.svg?raw ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-tag-multiple\" viewBox=\"0 0 24 24\"><path d=\"M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z\" /></svg>";

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@buttercup/fetch/dist/index.browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/@buttercup/fetch/dist/index.browser.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Headers: () => (/* binding */ Headers),
/* harmony export */   Request: () => (/* binding */ Request),
/* harmony export */   Response: () => (/* binding */ Response),
/* harmony export */   fetch: () => (/* binding */ fetch)
/* harmony export */ });
const inWebWorker = typeof WorkerGlobalScope !== "undefined" &&
    self instanceof WorkerGlobalScope;
const root = inWebWorker
    ? self
    : typeof window !== "undefined"
        ? window
        : globalThis;
const fetch = root.fetch.bind(root);
const Headers = root.Headers;
const Request = root.Request;
const Response = root.Response;


/***/ }),

/***/ "./node_modules/hot-patcher/dist/functions.js":
/*!****************************************************!*\
  !*** ./node_modules/hot-patcher/dist/functions.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sequence: () => (/* binding */ sequence)
/* harmony export */ });
function sequence(...methods) {
    if (methods.length === 0) {
        throw new Error("Failed creating sequence: No functions provided");
    }
    return function __executeSequence(...args) {
        let result = args;
        const _this = this;
        while (methods.length > 0) {
            const method = methods.shift();
            result = [method.apply(_this, result)];
        }
        return result[0];
    };
}


/***/ }),

/***/ "./node_modules/hot-patcher/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/hot-patcher/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotPatcher: () => (/* reexport safe */ _patcher_js__WEBPACK_IMPORTED_MODULE_0__.HotPatcher)
/* harmony export */ });
/* harmony import */ var _patcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patcher.js */ "./node_modules/hot-patcher/dist/patcher.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/hot-patcher/dist/types.js");




/***/ }),

/***/ "./node_modules/hot-patcher/dist/patcher.js":
/*!**************************************************!*\
  !*** ./node_modules/hot-patcher/dist/patcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotPatcher: () => (/* binding */ HotPatcher)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./node_modules/hot-patcher/dist/functions.js");

const HOT_PATCHER_TYPE = "@@HOTPATCHER";
const NOOP = () => { };
function createNewItem(method) {
    return {
        original: method,
        methods: [method],
        final: false
    };
}
/**
 * Hot patching manager class
 */
class HotPatcher {
    constructor() {
        this._configuration = {
            registry: {},
            getEmptyAction: "null"
        };
        this.__type__ = HOT_PATCHER_TYPE;
    }
    /**
     * Configuration object reference
     * @readonly
     */
    get configuration() {
        return this._configuration;
    }
    /**
     * The action to take when a non-set method is requested
     * Possible values: null/throw
     */
    get getEmptyAction() {
        return this.configuration.getEmptyAction;
    }
    set getEmptyAction(newAction) {
        this.configuration.getEmptyAction = newAction;
    }
    /**
     * Control another hot-patcher instance
     * Force the remote instance to use patched methods from calling instance
     * @param target The target instance to control
     * @param allowTargetOverrides Allow the target to override patched methods on
     * the controller (default is false)
     * @returns Returns self
     * @throws {Error} Throws if the target is invalid
     */
    control(target, allowTargetOverrides = false) {
        if (!target || target.__type__ !== HOT_PATCHER_TYPE) {
            throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
        }
        Object.keys(target.configuration.registry).forEach(foreignKey => {
            if (this.configuration.registry.hasOwnProperty(foreignKey)) {
                if (allowTargetOverrides) {
                    this.configuration.registry[foreignKey] = Object.assign({}, target.configuration.registry[foreignKey]);
                }
            }
            else {
                this.configuration.registry[foreignKey] = Object.assign({}, target.configuration.registry[foreignKey]);
            }
        });
        target._configuration = this.configuration;
        return this;
    }
    /**
     * Execute a patched method
     * @param key The method key
     * @param args Arguments to pass to the method (optional)
     * @see HotPatcher#get
     * @returns The output of the called method
     */
    execute(key, ...args) {
        const method = this.get(key) || NOOP;
        return method(...args);
    }
    /**
     * Get a method for a key
     * @param key The method key
     * @returns Returns the requested function or null if the function
     * does not exist and the host is configured to return null (and not throw)
     * @throws {Error} Throws if the configuration specifies to throw and the method
     * does not exist
     * @throws {Error} Throws if the `getEmptyAction` value is invalid
     */
    get(key) {
        const item = this.configuration.registry[key];
        if (!item) {
            switch (this.getEmptyAction) {
                case "null":
                    return null;
                case "throw":
                    throw new Error(`Failed handling method request: No method provided for override: ${key}`);
                default:
                    throw new Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`);
            }
        }
        return (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.sequence)(...item.methods);
    }
    /**
     * Check if a method has been patched
     * @param key The function key
     * @returns True if already patched
     */
    isPatched(key) {
        return !!this.configuration.registry[key];
    }
    /**
     * Patch a method name
     * @param key The method key to patch
     * @param method The function to set
     * @param opts Patch options
     * @returns Returns self
     */
    patch(key, method, opts = {}) {
        const { chain = false } = opts;
        if (this.configuration.registry[key] && this.configuration.registry[key].final) {
            throw new Error(`Failed patching '${key}': Method marked as being final`);
        }
        if (typeof method !== "function") {
            throw new Error(`Failed patching '${key}': Provided method is not a function`);
        }
        if (chain) {
            // Add new method to the chain
            if (!this.configuration.registry[key]) {
                // New key, create item
                this.configuration.registry[key] = createNewItem(method);
            }
            else {
                // Existing, push the method
                this.configuration.registry[key].methods.push(method);
            }
        }
        else {
            // Replace the original
            if (this.isPatched(key)) {
                const { original } = this.configuration.registry[key];
                this.configuration.registry[key] = Object.assign(createNewItem(method), {
                    original
                });
            }
            else {
                this.configuration.registry[key] = createNewItem(method);
            }
        }
        return this;
    }
    /**
     * Patch a method inline, execute it and return the value
     * Used for patching contents of functions. This method will not apply a patched
     * function if it has already been patched, allowing for external overrides to
     * function. It also means that the function is cached so that it is not
     * instantiated every time the outer function is invoked.
     * @param key The function key to use
     * @param method The function to patch (once, only if not patched)
     * @param args Arguments to pass to the function
     * @returns The output of the patched function
     * @example
     *  function mySpecialFunction(a, b) {
     *      return hotPatcher.patchInline("func", (a, b) => {
     *          return a + b;
     *      }, a, b);
     *  }
     */
    patchInline(key, method, ...args) {
        if (!this.isPatched(key)) {
            this.patch(key, method);
        }
        return this.execute(key, ...args);
    }
    /**
     * Patch a method (or methods) in sequential-mode
     * See `patch()` with the option `chain: true`
     * @see patch
     * @param key The key to patch
     * @param methods The methods to patch
     * @returns Returns self
     */
    plugin(key, ...methods) {
        methods.forEach(method => {
            this.patch(key, method, { chain: true });
        });
        return this;
    }
    /**
     * Restore a patched method if it has been overridden
     * @param key The method key
     * @returns Returns self
     */
    restore(key) {
        if (!this.isPatched(key)) {
            throw new Error(`Failed restoring method: No method present for key: ${key}`);
        }
        else if (typeof this.configuration.registry[key].original !== "function") {
            throw new Error(`Failed restoring method: Original method not found or of invalid type for key: ${key}`);
        }
        this.configuration.registry[key].methods = [this.configuration.registry[key].original];
        return this;
    }
    /**
     * Set a method as being final
     * This sets a method as having been finally overridden. Attempts at overriding
     * again will fail with an error.
     * @param key The key to make final
     * @returns Returns self
     */
    setFinal(key) {
        if (!this.configuration.registry.hasOwnProperty(key)) {
            throw new Error(`Failed marking '${key}' as final: No method found for key`);
        }
        this.configuration.registry[key].final = true;
        return this;
    }
}


/***/ }),

/***/ "./node_modules/hot-patcher/dist/types.js":
/*!************************************************!*\
  !*** ./node_modules/hot-patcher/dist/types.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/webdav/dist/node/auth/digest.js":
/*!******************************************************!*\
  !*** ./node_modules/webdav/dist/node/auth/digest.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDigestContext: () => (/* binding */ createDigestContext),
/* harmony export */   generateDigestAuthHeader: () => (/* binding */ generateDigestAuthHeader),
/* harmony export */   parseDigestAuth: () => (/* binding */ parseDigestAuth)
/* harmony export */ });
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var _tools_crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/crypto.js */ "./node_modules/webdav/dist/node/tools/crypto.js");


const NONCE_CHARS = "abcdef0123456789";
const NONCE_SIZE = 32;
function createDigestContext(username, password, ha1) {
    return { username, password, ha1, nc: 0, algorithm: "md5", hasDigestAuth: false };
}
function generateDigestAuthHeader(options, digest) {
    const url = options.url.replace("//", "");
    const uri = url.indexOf("/") == -1 ? "/" : url.slice(url.indexOf("/"));
    const method = options.method ? options.method.toUpperCase() : "GET";
    const qop = /(^|,)\s*auth\s*($|,)/.test(digest.qop) ? "auth" : false;
    const ncString = `00000000${digest.nc}`.slice(-8);
    const ha1 = (0,_tools_crypto_js__WEBPACK_IMPORTED_MODULE_1__.ha1Compute)(digest.algorithm, digest.username, digest.realm, digest.password, digest.nonce, digest.cnonce, digest.ha1);
    const ha2 = md5__WEBPACK_IMPORTED_MODULE_0__(`${method}:${uri}`);
    const digestResponse = qop
        ? md5__WEBPACK_IMPORTED_MODULE_0__(`${ha1}:${digest.nonce}:${ncString}:${digest.cnonce}:${qop}:${ha2}`)
        : md5__WEBPACK_IMPORTED_MODULE_0__(`${ha1}:${digest.nonce}:${ha2}`);
    const authValues = {
        username: digest.username,
        realm: digest.realm,
        nonce: digest.nonce,
        uri,
        qop,
        response: digestResponse,
        nc: ncString,
        cnonce: digest.cnonce,
        algorithm: digest.algorithm,
        opaque: digest.opaque
    };
    const authHeader = [];
    for (const k in authValues) {
        if (authValues[k]) {
            if (k === "qop" || k === "nc" || k === "algorithm") {
                authHeader.push(`${k}=${authValues[k]}`);
            }
            else {
                authHeader.push(`${k}="${authValues[k]}"`);
            }
        }
    }
    return `Digest ${authHeader.join(", ")}`;
}
function makeNonce() {
    let uid = "";
    for (let i = 0; i < NONCE_SIZE; ++i) {
        uid = `${uid}${NONCE_CHARS[Math.floor(Math.random() * NONCE_CHARS.length)]}`;
    }
    return uid;
}
function parseDigestAuth(response, _digest) {
    const authHeader = (response.headers && response.headers.get("www-authenticate")) || "";
    if (authHeader.split(/\s/)[0].toLowerCase() !== "digest") {
        return false;
    }
    const re = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
    for (;;) {
        const match = re.exec(authHeader);
        if (!match) {
            break;
        }
        _digest[match[1]] = match[2] || match[3];
    }
    _digest.nc += 1;
    _digest.cnonce = makeNonce();
    return true;
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/compat/arrayBuffer.js":
/*!*************************************************************!*\
  !*** ./node_modules/webdav/dist/node/compat/arrayBuffer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const hasArrayBuffer = typeof ArrayBuffer === "function";
const { toString: objToString } = Object.prototype;
// Taken from: https://github.com/fengyuanchen/is-array-buffer/blob/master/src/index.js
function isArrayBuffer(value) {
    return (hasArrayBuffer &&
        (value instanceof ArrayBuffer || objToString.call(value) === "[object ArrayBuffer]"));
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/compat/buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/webdav/dist/node/compat/buffer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBuffer: () => (/* binding */ isBuffer)
/* harmony export */ });
function isBuffer(value) {
    return (value != null &&
        value.constructor != null &&
        typeof value.constructor.isBuffer === "function" &&
        value.constructor.isBuffer(value));
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/compat/patcher.js":
/*!*********************************************************!*\
  !*** ./node_modules/webdav/dist/node/compat/patcher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPatcher: () => (/* binding */ getPatcher)
/* harmony export */ });
/* harmony import */ var hot_patcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hot-patcher */ "./node_modules/hot-patcher/dist/index.js");

let __patcher = null;
function getPatcher() {
    if (!__patcher) {
        __patcher = new hot_patcher__WEBPACK_IMPORTED_MODULE_0__.HotPatcher();
    }
    return __patcher;
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/request.js":
/*!**************************************************!*\
  !*** ./node_modules/webdav/dist/node/request.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareRequestOptions: () => (/* binding */ prepareRequestOptions),
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "./node_modules/stream-http/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var _buttercup_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @buttercup/fetch */ "./node_modules/@buttercup/fetch/dist/index.browser.js");
/* harmony import */ var _compat_patcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compat/patcher.js */ "./node_modules/webdav/dist/node/compat/patcher.js");
/* harmony import */ var _compat_env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compat/env.js */ "./node_modules/webdav/dist/node/compat/env.js");
/* harmony import */ var _auth_digest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/digest.js */ "./node_modules/webdav/dist/node/auth/digest.js");
/* harmony import */ var _tools_merge_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/merge.js */ "./node_modules/webdav/dist/node/tools/merge.js");
/* harmony import */ var _tools_headers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/headers.js */ "./node_modules/webdav/dist/node/tools/headers.js");
/* harmony import */ var _tools_body_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/body.js */ "./node_modules/webdav/dist/node/tools/body.js");









function _request(requestOptions) {
    const patcher = (0,_compat_patcher_js__WEBPACK_IMPORTED_MODULE_3__.getPatcher)();
    return patcher.patchInline("request", (options) => patcher.patchInline("fetch", _buttercup_fetch__WEBPACK_IMPORTED_MODULE_2__.fetch, options.url, getFetchOptions(options)), requestOptions);
}
function getFetchOptions(requestOptions) {
    let headers = {};
    // Handle standard options
    const opts = {
        method: requestOptions.method
    };
    if (requestOptions.headers) {
        headers = (0,_tools_headers_js__WEBPACK_IMPORTED_MODULE_7__.mergeHeaders)(headers, requestOptions.headers);
    }
    if (typeof requestOptions.data !== "undefined") {
        const [body, newHeaders] = (0,_tools_body_js__WEBPACK_IMPORTED_MODULE_8__.requestDataToFetchBody)(requestOptions.data);
        opts.body = body;
        headers = (0,_tools_headers_js__WEBPACK_IMPORTED_MODULE_7__.mergeHeaders)(headers, newHeaders);
    }
    if (requestOptions.signal) {
        opts.signal = requestOptions.signal;
    }
    if (requestOptions.withCredentials) {
        opts.credentials = "include";
    }
    // Check for node-specific options
    if (!(0,_compat_env_js__WEBPACK_IMPORTED_MODULE_4__.isWeb)()) {
        if (requestOptions.httpAgent || requestOptions.httpsAgent) {
            opts.agent = (parsedURL) => {
                if (parsedURL.protocol === "http:") {
                    return requestOptions.httpAgent || new http__WEBPACK_IMPORTED_MODULE_0__.Agent();
                }
                return requestOptions.httpsAgent || new https__WEBPACK_IMPORTED_MODULE_1__.Agent();
            };
        }
    }
    // Attach headers
    opts.headers = headers;
    return opts;
}
function prepareRequestOptions(requestOptions, context, userOptions) {
    const finalOptions = (0,_tools_merge_js__WEBPACK_IMPORTED_MODULE_6__.cloneShallow)(requestOptions);
    finalOptions.headers = (0,_tools_headers_js__WEBPACK_IMPORTED_MODULE_7__.mergeHeaders)(context.headers, finalOptions.headers || {}, userOptions.headers || {});
    if (typeof userOptions.data !== "undefined") {
        finalOptions.data = userOptions.data;
    }
    if (userOptions.signal) {
        finalOptions.signal = userOptions.signal;
    }
    if (context.httpAgent) {
        finalOptions.httpAgent = context.httpAgent;
    }
    if (context.httpsAgent) {
        finalOptions.httpsAgent = context.httpsAgent;
    }
    if (context.digest) {
        finalOptions._digest = context.digest;
    }
    if (typeof context.withCredentials === "boolean") {
        finalOptions.withCredentials = context.withCredentials;
    }
    return finalOptions;
}
async function request(requestOptions) {
    // Client not configured for digest authentication
    if (!requestOptions._digest) {
        return _request(requestOptions);
    }
    // Remove client's digest authentication object from request options
    const _digest = requestOptions._digest;
    delete requestOptions._digest;
    // If client is already using digest authentication, include the digest authorization header
    if (_digest.hasDigestAuth) {
        requestOptions = (0,_tools_merge_js__WEBPACK_IMPORTED_MODULE_6__.merge)(requestOptions, {
            headers: {
                Authorization: (0,_auth_digest_js__WEBPACK_IMPORTED_MODULE_5__.generateDigestAuthHeader)(requestOptions, _digest)
            }
        });
    }
    // Perform digest request + check
    const response = await _request(requestOptions);
    if (response.status == 401) {
        _digest.hasDigestAuth = (0,_auth_digest_js__WEBPACK_IMPORTED_MODULE_5__.parseDigestAuth)(response, _digest);
        if (_digest.hasDigestAuth) {
            requestOptions = (0,_tools_merge_js__WEBPACK_IMPORTED_MODULE_6__.merge)(requestOptions, {
                headers: {
                    Authorization: (0,_auth_digest_js__WEBPACK_IMPORTED_MODULE_5__.generateDigestAuthHeader)(requestOptions, _digest)
                }
            });
            const response2 = await _request(requestOptions);
            if (response2.status == 401) {
                _digest.hasDigestAuth = false;
            }
            else {
                _digest.nc++;
            }
            return response2;
        }
    }
    else {
        _digest.nc++;
    }
    return response;
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/tools/body.js":
/*!*****************************************************!*\
  !*** ./node_modules/webdav/dist/node/tools/body.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestDataToFetchBody: () => (/* binding */ requestDataToFetchBody)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stream */ "./node_modules/stream-browserify/index.js");
/* harmony import */ var _compat_arrayBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compat/arrayBuffer.js */ "./node_modules/webdav/dist/node/compat/arrayBuffer.js");
/* harmony import */ var _compat_buffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compat/buffer.js */ "./node_modules/webdav/dist/node/compat/buffer.js");
/* harmony import */ var _compat_env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compat/env.js */ "./node_modules/webdav/dist/node/compat/env.js");




function requestDataToFetchBody(data) {
    if (!(0,_compat_env_js__WEBPACK_IMPORTED_MODULE_3__.isWeb)() && data instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
        // @ts-ignore
        return [data, {}];
    }
    if (typeof data === "string") {
        return [data, {}];
    }
    else if ((0,_compat_buffer_js__WEBPACK_IMPORTED_MODULE_2__.isBuffer)(data)) {
        return [data, {}];
    }
    else if ((0,_compat_arrayBuffer_js__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(data)) {
        return [data, {}];
    }
    else if (data && typeof data === "object") {
        return [
            JSON.stringify(data),
            {
                "content-type": "application/json"
            }
        ];
    }
    throw new Error(`Unable to convert request body: Unexpected body type: ${typeof data}`);
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/tools/crypto.js":
/*!*******************************************************!*\
  !*** ./node_modules/webdav/dist/node/tools/crypto.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ha1Compute: () => (/* binding */ ha1Compute)
/* harmony export */ });
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");

function ha1Compute(algorithm, user, realm, pass, nonce, cnonce, ha1) {
    const ha1Hash = ha1 || md5__WEBPACK_IMPORTED_MODULE_0__(`${user}:${realm}:${pass}`);
    if (algorithm && algorithm.toLowerCase() === "md5-sess") {
        return md5__WEBPACK_IMPORTED_MODULE_0__(`${ha1Hash}:${nonce}:${cnonce}`);
    }
    return ha1Hash;
}


/***/ }),

/***/ "./node_modules/webdav/dist/node/tools/merge.js":
/*!******************************************************!*\
  !*** ./node_modules/webdav/dist/node/tools/merge.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneShallow: () => (/* binding */ cloneShallow),
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
function cloneShallow(obj) {
    return isPlainObject(obj)
        ? Object.assign({}, obj)
        : Object.setPrototypeOf(Object.assign({}, obj), Object.getPrototypeOf(obj));
}
function isPlainObject(obj) {
    if (typeof obj !== "object" ||
        obj === null ||
        Object.prototype.toString.call(obj) != "[object Object]") {
        // Not an object
        return false;
    }
    if (Object.getPrototypeOf(obj) === null) {
        return true;
    }
    let proto = obj;
    // Find the prototype
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}
function merge(...args) {
    let output = null, items = [...args];
    while (items.length > 0) {
        const nextItem = items.shift();
        if (!output) {
            output = cloneShallow(nextItem);
        }
        else {
            output = mergeObjects(output, nextItem);
        }
    }
    return output;
}
function mergeObjects(obj1, obj2) {
    const output = cloneShallow(obj1);
    Object.keys(obj2).forEach(key => {
        if (!output.hasOwnProperty(key)) {
            output[key] = obj2[key];
            return;
        }
        if (Array.isArray(obj2[key])) {
            output[key] = Array.isArray(output[key])
                ? [...output[key], ...obj2[key]]
                : [...obj2[key]];
        }
        else if (typeof obj2[key] === "object" && !!obj2[key]) {
            output[key] =
                typeof output[key] === "object" && !!output[key]
                    ? mergeObjects(output[key], obj2[key])
                    : cloneShallow(obj2[key]);
        }
        else {
            output[key] = obj2[key];
        }
    });
    return output;
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
/******/ 			"systemtags-init": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/systemtags/src/init.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=systemtags-init.js.map?v=b37a2b059fd7c12e8638