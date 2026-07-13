# Contributing — Simplebooks (team workflow)

Two people work on this repo. `main` is **production** — every push/merge to `main`
auto-deploys to Vercel. So **nobody commits directly to `main`.** We use short-lived
branches + Pull Requests.

---

## 1. One-time setup (each person, on their own machine)

```bash
# clone
git clone https://github.com/sandeera97/simplebooks.git
cd simplebooks

# use Node 22 (see .nvmrc). If you use nvm:  nvm install && nvm use
node -v        # should be v22.x

# install deps
npm install

# run the dev server (http://localhost:3002)
npm run dev
```

Set your git identity once (use your own name/email):

```bash
git config user.name  "Your Name"
git config user.email "you@example.com"
```

---

## 2. The workflow for EVERY change (GitHub Flow)

```bash
# 1. Start from the latest main
git checkout main
git pull origin main

# 2. Create a branch named <yourname>/<what-you-do>
git checkout -b dileepa/contact-page      # e.g. dileepa/... or friend/...

# 3. Do your work. Commit as you go.
git add .
git commit -m "Add contact page"

# 4. Push your branch
git push -u origin dileepa/contact-page

# 5. Open a Pull Request on GitHub (base: main  <-  compare: your branch)
#    Vercel automatically builds a PREVIEW URL for the PR — click it to see
#    your changes live before merging.

# 6. When the preview looks good and the build check is green, click "Merge".
#    Merging to main = auto-deploy to production. Then delete the branch.

# 7. Back to main for the next task
git checkout main
git pull origin main
```

**Rule of thumb:** small, frequent PRs. One page / one fix per branch.

---

## 3. Avoiding conflicts (important with 2 people)

- **Agree who works on what** (different pages/files) before starting.
- **`git pull origin main` often** — at least before creating a branch and before opening a PR.
- If a PR shows conflicts, update your branch:
  ```bash
  git checkout your-branch
  git pull origin main        # brings main's changes into your branch
  # fix any conflict markers <<<<<<< ======= >>>>>>>, then:
  git add . && git commit -m "Merge main"
  git push
  ```
- Never `git push --force` to `main` or to a branch someone else is on.

---

## 4. Before you open a PR — verify locally

```bash
npm run build      # must succeed (this is what Vercel runs)
```

If you changed `app/globals.css`, the dev server can serve **stale CSS**. Fix:

```bash
rm -rf .next
npm run dev
```

---

## 5. Project conventions (keep the site consistent)

- **Reuse shared components:** `@/components/layout/{Header,Footer,ChatWidget}`,
  form components under `@/components/services` and `@/components/dashboard`.
- **CSS class prefix:** every class is `sim_bk_...` (plain CSS in `app/globals.css`,
  not Tailwind utilities).
- **Section padding:** sections are a **1250px centered column with ZERO horizontal
  padding** on desktop. Full-width section pattern:
  `<section style={{ padding: "Tpx 0 Bpx" }}><div style={{ maxWidth: 1250, margin: "0 auto" }}>…</div></section>`.
  Never add 56px (or any) left/right padding to a section — it breaks alignment.
- **Routes = exact WordPress slugs** (e.g. `/srilanka/services/payroll-managment`).
- **Page pattern:** a page is a server component (`app/<route>/page.tsx`); anything
  interactive (tabs, accordions, forms) is a small `"use client"` component next to it.
- **Fonts/colours are global** (Poppins; navy `#11144d`; orange `#f15f2c`).

---

## 6. Deploys

- Merging to `main` → Vercel builds from GitHub and deploys to production (~1–2 min).
- Every branch/PR gets its own **preview** deploy (safe to test, not public prod).
- Do **not** run `vercel --prod` from a laptop for this project — deploy only via
  `git push` → PR → merge.
