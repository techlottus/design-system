/**
 * Fix based on https://github.com/ui-router/react/pull/34
 * The `classname` package cannot export by default this uses a namespace and exec the function on browser
 * for this reason is necessary create another variable related with `_classname` namespace from `classnames` package.
 */
import * as _classnames from 'classnames';
const classnames = _classnames;

export default classnames;
