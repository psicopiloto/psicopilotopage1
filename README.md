# Psicopiloto - Ready for Vercel (Next.js + Tailwind)

This project is prepared to be deployed on Vercel. **Important**: Vercel requires a `pages/` or `app/` directory at the repository root. This repo has `pages/` at the root.

## Quick checklist before deploying to Vercel
1. Extract the ZIP and make sure files like `package.json`, `pages/`, `components/` are at the project root (not nested inside another folder).
2. Initialize a Git repo and push to GitHub (instructions below) OR upload the project folder directly to a new GitHub repo (use the web UI 'Upload files' and upload the contents of the project root).
3. In Vercel, Import Project → select the GitHub repo.
4. Add Environment Variables in Vercel (Project Settings > Environment Variables):
   - `FORMSPREE_URL` = https://formspree.io/f/YOUR_ENDPOINT (see Formspree setup)
   - `GAS_URL` = https://script.google.com/macros/s/YOUR_ID/exec (see Google Apps Script setup)
5. Deploy. Vercel will run `npm install` and `npm run build` automatically.

## If you get the error "Couldn't find any `pages` or `app` directory"
This means your repo root doesn't contain the `pages/` folder. Common reasons:
- You zipped a parent folder (e.g. `psicopiloto_v2/psicopiloto/`) so GitHub/Vercel sees only that parent instead of the inner files.
- You uploaded the ZIP contents as a single top-level folder into GitHub. Fix: ensure files are at the root of the repo (package.json and pages/ should be top-level).

### How to check locally (macOS)
In Terminal, inside the project folder run:
```
ls -la
```
You should see `package.json` and a `pages` directory in the output.

## How to push to GitHub (simple steps)
1. Open Terminal and `cd` to the folder where you extracted the ZIP.
2. Run these commands (replace with your repo URL):
```
git init
git add .
git commit -m "Initial commit - Psicopiloto site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```
If you don't have git installed on your iMac, you can upload via GitHub web UI: create a new repo and use "Upload files" then drag & drop the project files (not the parent folder).

## Formspree setup (email)
1. Create account at https://formspree.io
2. Create a form and copy the endpoint (https://formspree.io/f/xxxxx)
3. Paste that URL in Vercel as `FORMSPREE_URL` (Environment Variables).

## Google Sheets (save submissions)
Follow the instructions in the original README included in the ZIP. The Apps Script `doPost` endpoint returns /exec URL to set as `GAS_URL` in Vercel.

## Notes
- You can leave `FORMSPREE_URL` and `GAS_URL` empty while deploying; the site will render fine, but the contact form will respond with an error message explaining the missing env vars.
- If Vercel build fails, check the build logs: they show `ls` of the repo root and the error messages.

