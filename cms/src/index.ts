import type { Core } from '@strapi/strapi';

/** Read-only endpoints the website needs from the Public role. */
const PUBLIC_ACTIONS = [
  'api::article.article.find',
  'api::article.article.findOne',
];

/**
 * Grant the Public role read access to articles.
 *
 * Done here rather than clicked in the admin so a fresh deploy — a new
 * Railway database, a rebuilt environment — serves the blog immediately
 * instead of returning 403 until someone remembers to tick the boxes.
 * Only ever adds; nothing is revoked, so permissions set by hand survive.
 */
async function grantPublicReadAccess(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    strapi.log.warn('[bootstrap] No public role found; skipped article permissions.');
    return;
  }

  for (const action of PUBLIC_ACTIONS) {
    const existing = await strapi
      .query('plugin::users-permissions.permission')
      .findOne({ where: { action, role: publicRole.id } });

    if (existing) continue;

    await strapi.query('plugin::users-permissions.permission').create({
      data: { action, role: publicRole.id },
    });
    strapi.log.info(`[bootstrap] Public role granted ${action}`);
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await grantPublicReadAccess(strapi);
  },
};
