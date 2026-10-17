/**
 * Seeds one example article so a fresh install has something to show.
 *
 * Runs through Strapi itself rather than the REST API, because the Public role
 * deliberately has no create permission.
 *
 *   npm run seed
 */
const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'error';

  const existing = await app.documents('api::article.article').findMany({
    filters: { slug: 'welcome-to-the-simplebooks-blog' },
  });

  if (existing.length) {
    console.log('Example article already present — nothing to do.');
  } else {
    await app.documents('api::article.article').create({
      data: {
        title: 'Welcome to the Simplebooks blog',
        slug: 'welcome-to-the-simplebooks-blog',
        excerpt:
          'This post was published from Strapi. Edit or delete it from the admin panel — it is only here to prove the connection works.',
        body: [
          '## Publishing from Strapi',
          'Anything published here appears on the website within a minute, with no redeploy. Write the post in the admin panel, set a category and a cover image, then hit Publish.',
          '## What the fields do',
          'Title and Slug set the URL. Excerpt is the summary shown on the blog listing card. Cover is the card thumbnail and the image at the top of the post. SEO title and description override what search engines show, and fall back to the title and excerpt when left blank.',
        ].join('\n\n'),
        category: 'Other',
        authorName: 'Simplebooks',
        authorRole: 'Team',
        readTime: '2 min read',
      },
      status: 'published',
    });
    console.log('Seeded the example article.');
  }

  await app.destroy();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
