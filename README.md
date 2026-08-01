# The Session Notes

Your interview site. Built with Astro. Every interview is one Markdown text file — you never touch HTML.

---

## Part 1 — Run it on your own computer (one-time setup)

1. Install **Node.js** (the LTS version) from https://nodejs.org — this lets the site build.
2. Download and unzip this project somewhere you'll find it.
3. Open a terminal (Mac: Terminal app · Windows: PowerShell), and type:
   ```
   cd path/to/session-notes
   npm install
   npm run dev
   ```
4. It'll print a local address like `http://localhost:4321`. Open that in your browser — that's your site, live and updating as you edit.

Press `Ctrl + C` in the terminal to stop it.

---

## Part 2 — Add a new interview (this is the whole workflow)

1. Go to the folder `src/content/interviews/`.
2. Copy one of the existing `.md` files and rename it, e.g. `07-warner-anr.md`.
   (Numbering the filename keeps them tidy — it does not have to match anything.)
3. Open it in any text editor. The top part between the `---` lines is the info card.
   Fill it in:
   ```
   ---
   number: 7
   title: The headline for this interview
   role: A&R, Warner Records
   date: August 2026
   intro: One or two sentences that appear under the title and on the archive card.
   pullquote: The single best quote from the conversation.
   pullquoteBy: Their name, their job
   featured: true      # true = this one shows in the big hero on the homepage. Only set ONE to true.
   ---
   ```
4. Below the second `---`, write the interview. The format:
   - `**Your question in bold**` then a normal paragraph for their answer.
   - Start a line with `>` to make a big amber pull-quote.
5. Save. The site updates automatically. Done.

When you add a new one, set `featured: true` on it and change the old one to `featured: false`
so the newest interview is the one in the hero.

---

## Part 3 — Put it online (free, fast, no server)

**Option: Cloudflare Pages (or Netlify — same idea)**

1. Make a free account at https://github.com and create a new repository.
2. Upload this whole project folder to it (GitHub has a drag-and-drop "upload files" button,
   or use GitHub Desktop if you prefer clicking to typing).
3. Make a free account at https://pages.cloudflare.com (or https://netlify.com).
4. Click "Create project" → connect your GitHub → pick this repository.
5. When it asks for build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
6. Click deploy. In ~1 minute you get a live URL like `the-session-notes.pages.dev`.

**From then on:** whenever you add an interview file and save it to GitHub, the site
rebuilds and republishes itself automatically in under a minute. Your visitors never
wait for a build — they just get finished pages instantly from a global network.

Later, you can connect a custom domain (like `thesessionnotes.com`) in the host's settings.

---

## Part 4 — Turn on the email list (2 minutes, optional)

1. Make a free account at https://buttondown.com (or https://mailerlite.com).
2. Open `src/pages/subscribe.astro` and follow the comment inside — replace
   `YOUR_USERNAME` with your Buttondown username.
3. Save. Now the Subscribe form collects real subscribers.

---

## Where things live

- `src/content/interviews/` — your interviews (the only folder you touch regularly)
- `src/pages/about.astro` — your About page text
- `src/styles/global.css` — all the colors and design (change `--amber` to change the accent color)
- `src/layouts/Base.astro` — the masthead title, tagline, and footer
