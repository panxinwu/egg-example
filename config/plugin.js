'use strict';

// had enabled by egg
// exports.static = true;
exports.view = {
  enable: true,
  package: 'egg-view-nunjucks'
};
exports.development = {
  enable: true,
  package: 'egg-development',
};