# NXT Dev — сайт-визитка студии

Одностраничный сайт digital-студии **NXT Dev**: оффер, услуги, процесс работы, портфолио и контакт.  
Позиционирование — **AI-assisted, developer-validated**: быстрая сборка продуктов без «сырого vibe coding».

---

## О проекте

Это не шаблон ради шаблона, а рабочая визитка под заказную разработку:

- **Hero** — бренд, слоган, CTA
- **Услуги** — лендинги, MVP, Telegram, e-commerce, mobile UI
- **Процесс** — обсуждение → сборка и демо → сдача
- **Кейсы** — живой кейс (этот сайт) + заготовки под будущие работы
- **Контакт** — Telegram, email, подсказки для первого сообщения клиента

**Стек:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Vercel

**Дизайн:** тёмная premium-тема, emerald-акценты, адаптив от 375px, `prefers-reduced-motion`.

---

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

### Сборка и проверка

```bash
npm run build
npm run start
npm run lint
```

---

## Настройка контента

Весь текст и ссылки — в одном файле:

```
src/lib/content.ts
```

| Поле | Назначение |
|------|------------|
| `siteConfig.name` | Название студии |
| `siteConfig.tagline` | Подзаголовок в hero |
| `siteConfig.telegram` | Ссылка на Telegram |
| `siteConfig.email` | Email для связи |
| `services` | Блок «Услуги» |
| `processSteps` | Блок «Процесс» |
| `cases` | Портфолио-кейсы |
| `contactExpectations` | Подсказки в форме контакта |

После деплоя задайте публичный URL:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Без этой переменной ссылка «NXT Dev Site» в кейсах ведёт на `localhost`.

---

## Deploy

### Vercel (рекомендуется)

1. Импортируйте репозиторий на [vercel.com/new](https://vercel.com/new)
2. Root Directory: **`site`** (если репо монорепо) или корень, если публикуете только этот проект
3. Добавьте `NEXT_PUBLIC_SITE_URL` в Environment Variables
4. Deploy

CLI:

```bash
npx vercel login
npx vercel --prod
```

---

## Структура

```
site/
├── src/
│   ├── app/              # layout, globals, page
│   ├── components/       # Header, Hero, Services, Process, Cases, Contact, Footer
│   └── lib/content.ts    # контент сайта
├── public/
├── .env.example
└── vercel.json
```

Компоненты разбиты по секциям — правки UI локальны, контент правится без копания в JSX.

---

## Для кого этот репозиторий

- **Клиентам** — понять, что делает NXT Dev и как начать диалог
- **Нам** — первый кейс в портфолио и база под следующие лендинги
- **Разработчикам** — пример чистого one-page на Next.js App Router без лишних зависимостей

---

## Контакт

- Telegram: настраивается в `content.ts`
- Email: `hello@nxtdev.dev` (замените на рабочий)

**NXT Dev** — быстрый запуск сайтов, MVP и автоматизации с инженерной проверкой.
