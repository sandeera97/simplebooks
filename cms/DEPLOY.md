# Deploying the CMS

Strapi 5. Lives in this repo under `cms/`, deploys as its own Railway service
from the same GitHub repo — Railway is told to use `cms` as the root directory,
so the website service and this one build independently.

## Railway, once

1. **New Service → GitHub Repo →** this repo.
2. **Settings → Root Directory:** `cms`
3. **New → Database → PostgreSQL** in the same project. Railway injects
   `DATABASE_URL`; Strapi's `config/database.ts` already reads it, so there is
   nothing to change in code.
4. Set the variables below.
5. Deploy. Open `/admin` on the service URL and create the first admin user —
   that one step is deliberately not automated, since it sets a password.

## Variables

| Variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `DATABASE_CLIENT` | `postgres` |
| `DATABASE_URL` | injected by Railway's Postgres |
| `DATABASE_SSL` | `true` |
| `APP_KEYS` | four random strings, comma separated |
| `API_TOKEN_SALT` | random string |
| `ADMIN_JWT_SECRET` | random string |
| `TRANSFER_TOKEN_SALT` | random string |
| `JWT_SECRET` | random string |
| `ENCRYPTION_KEY` | random string |

Generate them all at once:

```bash
node -e "const r=()=>require('crypto').randomBytes(16).toString('base64');console.log('APP_KEYS='+[r(),r(),r(),r()].join(','));['API_TOKEN_SALT','ADMIN_JWT_SECRET','TRANSFER_TOKEN_SALT','JWT_SECRET','ENCRYPTION_KEY'].forEach(k=>console.log(k+'='+r()))"
```

Then point the website at it by setting `STRAPI_URL` on the **website** service
to this service's public URL — no trailing slash.

## Uploads

Covers upload to the container's disk by default, which Railway wipes on every
deploy. Before real content goes in, either attach a Railway volume at
`/app/public/uploads` or switch the upload provider to S3/Cloudinary. Worth
settling before the client starts writing posts.

## Day to day

Write the post in the admin panel, set a category and cover, press **Publish**.
It appears on the website within a minute — the blog revalidates every 60s, so
no redeploy is needed.

`npm run seed` adds one example article; it is safe to re-run and skips if the
article already exists.
