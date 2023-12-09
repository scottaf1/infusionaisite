'use strict';

/**
 * services-two service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::services-two.services-two');
