# free-tools — how it is wired into this site

**Do not edit anything else in this folder.** It is the tools team's repo,
vendored verbatim. The only file added by us is this README. Editing their code
here means the next drop they send silently overwrites the change.

## How it works

Their app is already built for this: `next.config.ts` sets `basePath: "/tools"`,
`trailingSlash: true` and `output: "export"`, and their sitemap is generated
against `https://simplebooks.com/tools/`. So it is a static export that is meant
to be mounted at `/tools` on this site — no proxying, no second deployment.

    external/free-tools/   their source, untouched (node_modules and out are gitignored)
    public/tools/          the built static export, committed and served
    scripts/update-free-tools.sh

`public/tools/` is generated. Never hand-edit it; it is replaced wholesale on
every update.

Two rewrites in the root `next.config.ts` make the export resolve. Their export
is directory-per-route (`tools/wht-calculator/index.html`) and Next serves
`public/` by exact path only, so a request for `/tools/wht-calculator` has to be
mapped onto its `index.html`. They sit in `afterFiles`, which means real files
are matched first and `/tools/_next/...` assets are never touched by them.

## Updating when the team sends a new version

    ./scripts/update-free-tools.sh ~/Downloads/free-tools-main.zip

That replaces the vendored source, installs, builds, and republishes
`public/tools/`. Then check the pages load and commit.

To rebuild what is already vendored, run it with no argument.

## Things to watch for in a future drop

- **`basePath` must stay `/tools`.** Without it every asset URL points at the
  site root and the pages render unstyled. The script warns if it disappears.
- **New or renamed calculators** do not appear in the header automatically. The
  menu is hand-listed in `components/layout/navData.ts` under Resources; the
  script prints the routes it published so they can be compared.
- **`output: "export"` must stay.** If they add a server feature (API route,
  server action, `next/image` optimisation) the export will fail, and the app
  would then need to be deployed separately and proxied instead.
