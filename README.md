# Magic Minds — Next.js

Pixel-faithful Next.js / React / Tailwind port of the Magic Minds marketing site.  
Deployable on Vercel (auto-detected as a standard Next.js App Router project).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, Cosmo, partners, FAQ, waitlist |
| `/studio` | Studio — animation & production |
| `/lab` | Lab — research papers |
| `/mag` | Le Mag — articles, AI search (Cosmo), reader overlay |
| `/serie` | Série animée — coming-soon, character lineup |
| `/about` | À propos — team, board, values, mission |
| `/legal` | Légal — hash-driven document viewer (mentions/confidentialité/cookies/CGU/CGV) |

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Set up env (see .env.example)
cp .env.example .env.local
# → edit .env.local and add your GROQ_API_KEY

# 3. Start dev server
npm run dev
# Open http://localhost:3000
```

## Build (Vercel readiness check)

```bash
npm run build
```

All 7 routes should compile with zero errors. `/api/ask` is built as a Next.js route handler.

## Deploy to Vercel

1. Push this folder (`magic-minds-next/`) to a GitHub / GitLab / Bitbucket repository.
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no `vercel.json` needed.
4. **Add the environment variable** in Vercel:  
   Project → Settings → Environment Variables → `GROQ_API_KEY` = `<your key>`
5. Deploy.

## ⚠️ Security — rotate the Groq API key

The original Magic Minds design file contained a hardcoded Groq API key.  
That key is stored in `.env.local` for convenience but **must be rotated**:

1. Go to [console.groq.com](https://console.groq.com) → API Keys → revoke the old key → create a new one.
2. Update `.env.local` locally.
3. Set the new key in Vercel environment variables.

Never commit `.env.local` — it is covered by `.gitignore`.

## Tech stack

- **Next.js** 14.2.5 (App Router)
- **React** 18.3.1
- **Tailwind CSS** 3.4.7
- **@rive-app/canvas** 2.30.4 (Cosmo character)
- **Groq** llama-3.3-70b-versatile (AI search — server-side only via `/api/ask`)
- FR / EN i18n via React Context (`LanguageProvider`)
