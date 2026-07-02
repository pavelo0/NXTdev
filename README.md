# NXT Dev — сайт-визитка студии

[![Repo](https://img.shields.io/github/stars/pavelo0/NXTdev?style=social)](https://github.com/pavelo0/NXTdev)

Одностраничный сайт digital-студии **NXT Dev**: оффер, услуги, процесс работы, портфолио и контакт.

**Репозиторий:** [github.com/pavelo0/NXTdev](https://github.com/pavelo0/NXTdev)

Позиционирование — **AI-assisted, developer-validated**: быстрая сборка продуктов без «сырого vibe coding».

---

## О проекте

- **Hero** — бренд, слоган, CTA
- **Услуги** — лендинги, MVP, Telegram, e-commerce, mobile UI
- **Процесс** — обсуждение → сборка и демо → сдача
- **Кейсы** — живой кейс (этот сайт) + заготовки под будущие работы
- **Контакт** — Telegram, email, подсказки для первого сообщения

**Стек:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Vercel

---

## Быстрый старт

```bash
git clone git@github.com:pavelo0/NXTdev.git
cd NXTdev
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run start
npm run lint
```

---

## Настройка контента

Файл `src/lib/content.ts` — название, контакты, услуги, кейсы, процесс.

После деплоя:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

---

## Deploy (Vercel)

1. Import [github.com/pavelo0/NXTdev](https://github.com/pavelo0/NXTdev)
2. Root Directory: **`.`** (корень репозитория)
3. Environment Variable: `NEXT_PUBLIC_SITE_URL`
4. Deploy

```bash
npx vercel login
npx vercel --prod
```

---

## Структура

```
├── src/
│   ├── app/
│   ├── components/
│   └── lib/content.ts
├── public/
├── .env.example
└── vercel.json
```

---

## Контакт

- Telegram и email — в `src/lib/content.ts`
- Email: `nxtdevvv@gmail.com`

**NXT Dev** — быстрый запуск сайтов, MVP и автоматизации с инженерной проверкой.
