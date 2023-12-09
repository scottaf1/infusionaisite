'use strict';

/**
 * start-your-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::start-your-project.start-your-project');
