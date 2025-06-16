# 🚀 Acme Dashboard

The **Acme Dashboard** is a full-stack admin panel built with modern web technologies like **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **NextAuth.js** for authentication, and **PostgreSQL** for persistent data storage.

This project demonstrates secure credential-based login, protected routes, form actions, dynamic UI with Suspense, and proper error handling using modern best practices.

---

## 📦 Tech Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Auth**: NextAuth.js (with Credentials Provider)
- **Database**: PostgreSQL (via [`postgres`](https://www.npmjs.com/package/postgres))
- **Validation**: Zod
- **Icons**: Heroicons

---

## 🧾 Features

- 🔐 Secure login with Credentials Provider
- 🧠 Server-side validation using Zod
- 📄 Dynamic protected routing with Middleware
- 🧩 Fully type-safe backend + frontend
- 🎨 Responsive UI using Tailwind CSS
- 💡 Suspense and async rendering support

---

## 📁 Folder Structure

<pre><code>📁 Acme-dashboard ├── 📂 app │ ├── 📂 dashboard │ │ ├── 📂 (overview) │ │ │ ├── loading.tsx │ │ │ └── page.tsx │ │ ├── 📂 customers │ │ │ └── page.tsx │ │ ├── 📂 invoices │ │ │ ├── 📂 create │ │ │ │ └── page.tsx │ │ │ ├── 📂 [id]/edit │ │ │ │ ├── not-found.tsx │ │ │ │ └── page.tsx │ │ │ ├── error.tsx │ │ │ └── page.tsx │ │ └── layout.tsx │ ├── 📂 login │ │ └── page.tsx │ ├── 📂 query │ │ └── route.ts │ ├── 📂 seed │ ├── 📂 ui │ │ ├── acme-logo.tsx │ │ ├── button.tsx │ │ ├── fonts.ts │ │ ├── global.css │ │ ├── home.module.css │ │ ├── login-form.tsx │ │ ├── search.tsx │ │ ├── skeletons.tsx │ │ ├── 📂 customers │ │ │ └── table.tsx │ │ ├── 📂 dashboard │ │ │ ├── cards.tsx │ │ │ ├── latest-invoices.tsx │ │ │ ├── nav-links.tsx │ │ │ ├── revenue-chart.tsx │ │ │ └── sidenav.tsx │ │ └── 📂 invoices │ │ ├── breadcrumbs.tsx │ │ ├── buttons.tsx │ │ ├── create-form.tsx │ │ ├── edit-form.tsx │ │ ├── pagination.tsx │ │ ├── status.tsx │ │ └── table.tsx │ ├── 📂 lib │ │ ├── actions.ts │ │ ├── data.ts │ │ ├── definitions.ts │ │ ├── placeholder-data.ts │ │ └── utils.ts │ ├── layout.tsx │ ├── page.tsx │ ├── favicon.ico │ └── opengraph-image.png ├── 📂 public │ ├── 📂 customers │ │ ├── amy-burns.png │ │ ├── balazs-orban.png │ │ ├── delba-de-oliveira.png │ │ ├── evil-rabbit.png │ │ ├── lee-robinson.png │ │ └── michael-novotny.png │ ├── hero-desktop.png │ └── hero-mobile.png ├── auth.config.ts ├── auth.ts ├── middleware.ts ├── next.config.ts ├── postcss.config.js ├── tailwind.config.ts ├── tsconfig.json ├── package.json ├── pnpm-lock.yaml └── README.md </code></pre>

This project is based on Next.js official docs and custom built using modern frontend and backend concepts for learning and real-world app development.
