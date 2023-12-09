'use strict';

/**
 * our-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-feature.our-feature');
