const DEFAULT_PRODUCTION_URL = 'https://nxtdev.vercel.app';

function resolveSiteUrl(): string {
	if (process.env.NEXT_PUBLIC_SITE_URL) {
		return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
	}

	if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
		return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`.replace(
			/\/$/,
			''
		);
	}

	if (process.env.NODE_ENV === 'production') {
		return DEFAULT_PRODUCTION_URL;
	}

	return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl();

export const isPublicSite =
	!siteUrl.includes('localhost') && !siteUrl.includes('127.0.0.1');

export const siteConfig = {
	name: 'NXT Dev',
	tagline: 'Быстрый запуск digital-продуктов — с инженерной проверкой',
	description:
		'Студия digital-разработки: лендинги, MVP, Telegram и автоматизация под ключ.',
	url: siteUrl,
	telegram: 'https://t.me/',
	email: 'hello@nxtdev.dev'
};

export const heroStats = [
	{ label: 'Фокус', value: 'Web & Mobile' },
	{ label: 'Сроки', value: 'От 3–5 дней' },
	{ label: 'Формат', value: 'Под ключ' },
	{ label: 'Качество', value: 'Production-ready' }
];

export const services = [
	{
		title: 'Лендинги',
		description:
			'Страницы под заявки и продажи для SaaS, fintech и сервисов. Premium UI, адаптив, быстрая публикация.'
	},
	{
		title: 'Сайты-визитки',
		description:
			'Чёткий бренд, понятный оффер и контакт. Быстрый старт для бизнеса и экспертов.'
	},
	{
		title: 'MVP и веб-приложения',
		description:
			'Админки, дашборды, прототипы с auth и API. Рабочая база под рост, не черновик.'
	},
	{
		title: 'Telegram-решения',
		description:
			'Боты, mini-apps, автоматизация. Быстрый запуск и интеграции под ваш процесс.'
	},
	{
		title: 'Интернет-магазины',
		description:
			'Каталог, корзина, checkout. Demo или production-ready — по задаче.'
	},
	{
		title: 'Мобильные интерфейсы',
		description:
			'iOS и Android UI premium-класса. Прототип или полноценное приложение.'
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
			'Финальная приёмка, запуск на домене, документация. Отзыв — по желанию.'
	}
];

export const cases = [
	{
		title: 'NXT Dev',
		category: 'Сайт-визитка',
		description:
			'Бренд студии, услуги, процесс работы и портфолио. Premium dark UI.',
		status: 'live' as const,
		href: siteUrl
	},
	{
		title: 'Fintech Landing',
		category: 'Лендинг',
		description: 'Premium UI для SaaS и fintech-продуктов.',
		status: 'soon' as const
	},
	{
		title: 'Telegram Bot',
		category: 'Автоматизация',
		description: 'Бот с onboarding, уведомлениями и admin-панелью.',
		status: 'soon' as const
	},
	{
		title: 'CryptoCard UI',
		category: 'Mobile',
		description: 'Fintech iOS — quiet luxury, полные user flows.',
		status: 'soon' as const
	}
];

export const contactExpectations = [
	{
		step: '1',
		title: 'Суть задачи',
		description:
			'Лендинг, MVP, бот, магазин — что нужно и зачем. Достаточно пары предложений.'
	},
	{
		step: '2',
		title: 'Сроки и бюджет',
		description:
			'Если есть дедлайн или вилка по бюджету — укажите. Подстроим предложение под scope.'
	},
	{
		step: '3',
		title: 'Референсы',
		description:
			'Ссылки на сайты, скрины или ТЗ — по желанию. Помогает быстрее попасть в ожидания.'
	}
];
