import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'NXT Dev — digital-студия под ключ',
	description:
		'Лендинги, MVP, Telegram и автоматизация под ключ. Быстрый запуск с инженерной проверкой.',
	openGraph: {
		title: 'NXT Dev',
		description:
			'Digital-студия: сайты, MVP и автоматизация — проекты под ключ.',
		type: 'website'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ru"
			className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
		>
			<body className="min-h-screen bg-[#0A0A0A] font-sans text-zinc-100 antialiased">
				{children}
			</body>
		</html>
	);
}
