'use strict';
const path = require('path');
const fs = require('fs');
const commonDir = require('commondir');
const pkgDir = require('pkg-dir');

const {cwd} = process;

const isWritable = path => {
  try {
    fs.accessSync(path, fs.constants.W_OK);
    return true;
  } catch (_) {
    return false;
  }
};

function getNodeModuleDirectory(directory) {
  const nodeModules = path.join(directory, 'node_modules');

  if (
    !isWritable(nodeModules) &&
    (fs.existsSync(nodeModules) || !isWritable(path.join(directory)))
  ) {
    return;
  }

  return nodeModules;
}

module.exports = (options = {}) => {
  let {cwd: directory = cwd()} = options;

  if (options.files) {
    directory = commonDir(directory, options.files);
  }

  directory = pkgDir.sync(directory);

  if (!directory) {
    return;
  }

  const nodeModules = getNodeModuleDirectory(directory);
  if (!nodeModules) {
    return undefined;
  }
  return nodeModules;
};
