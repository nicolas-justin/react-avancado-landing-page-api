'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');

const vercelDeployWebhook = strapi.config.get('custom.vercelDeployWebhook');

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      vercelDeployWebhook && axios.post(vercelDeployWebhook);
    },
    async afterUpdate(_, __, ___) {
      vercelDeployWebhook && axios.post(vercelDeployWebhook);
    }
  }
};
