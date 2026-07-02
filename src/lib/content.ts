export const siteConfig = {
	name: 'NXT Dev',
	tagline: 'Быстрый запуск digital-продуктов - с инженерной проверкой',
	description:
		'AI-assisted, developer-validated студия: лендинги, MVP, Telegram и автоматизация под ключ.',
	url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
	telegram: 'https://t.me/',
	email: 'hello@nxtdev.dev'
};

export const services = [
	{
		title: 'Лендинги',
		description:
			'Conversion-focused страницы для SaaS, fintech и сервисов. Premium UI, адаптив, быстрый deploy.'
	},
	{
		title: 'Сайты-визитки',
		description:
			'Чёткий бренд, понятный оффер и контакт. Быстрый старт для фрилансера или небольшой команды.'
	},
	{
		title: 'MVP и веб-приложения',
		description:
			'Админки, дашборды, прототипы с auth и API. Не черновик - рабочая база под рост.'
	},
	{
		title: 'Telegram-решения',
		description:
			'Боты, mini-apps, автоматизация. Сильный угол команды - быстрый запуск и интеграции.'
	},
	{
		title: 'Интернет-магазины',
		description:
			'Каталог, корзина, checkout-flow. Demo или production-ready под ваш scope.'
	},
	{
		title: 'Мобильные UI-кейсы',
		description:
			'iOS/Android интерфейсы premium-класса. UI-only или full stack - по задаче.'
	}
];

export const processSteps = [
	{
		step: '01',
		title: 'Обсуждение',
		description: 'Потребность, бюджет, сроки. Предлагаем решение под ваш scope.'
	},
	{
		step: '02',
		title: 'Сборка и демо',
		description:
			'Согласование дизайна, предоплата, промежуточные показы и итерации.'
	},
	{
		step: '03',
		title: 'Сдача',
		description:
			'Финальная приёмка, deploy, документация. Запрос отзыва - по желанию.'
	}
];

export const cases = [
	{
		title: 'NXT Dev Site',
		category: 'Сайт-визитка',
		description: 'Бренд студии, оффер, процесс и портфолио. Next.js + Vercel.',
		status: 'live' as const,
		href: siteConfig.url
	},
	{
		title: 'Fintech Landing',
		category: 'Лендинг',
		description: 'Premium dark UI для SaaS / crypto-adjacent продукта.',
		status: 'soon' as const
	},
	{
		title: 'Telegram Bot Demo',
		category: 'Автоматизация',
		description: 'Бот с onboarding, уведомлениями и admin-панелью.',
		status: 'soon' as const
	},
	{
		title: 'CryptoCard UI',
		category: 'Mobile',
		description: 'Fintech iOS UI - quiet luxury, mock flows для портфолио.',
		status: 'soon' as const
	}
];

export const contactExpectations = [
	{
		step: '1',
		title: 'Суть задачи',
		description:
			'Лендинг, MVP, бот, магазин - что нужно и зачем. Достаточно пары предложений.'
	},
	{
		step: '2',
		title: 'Сроки и бюджет',
		description:
			'Если есть дедлайн или вилка по бюджету - укажите. Подстроим предложение под scope.'
	},
	{
		step: '3',
		title: 'Референсы',
		description:
			'Ссылки на сайты, скрины или ТЗ - по желанию. Помогает быстрее попасть в ожидания.'
	}
];
