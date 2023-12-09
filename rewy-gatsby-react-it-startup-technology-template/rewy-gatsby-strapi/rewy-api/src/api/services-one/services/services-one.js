'use strict';

/**
 * services-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::services-one.services-one');
