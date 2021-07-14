/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { combineReducers } from "redux";

import {
  DIALOG_EXPORT_APP_DETAILS_CLOSE,
  DIALOG_EXPORT_APP_DETAILS_OPEN
} from "../../constants/actions";

const open = function(state = false, action) {
  switch (action.type) {
    case DIALOG_EXPORT_APP_DETAILS_CLOSE:
      return false;
    case DIALOG_EXPORT_APP_DETAILS_OPEN:
      return true;
    default:
      return state;
  }
};

export default combineReducers({ open });
