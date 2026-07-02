import { heroStats, siteConfig } from '@/lib/content';

export function Hero() {
	return (
		<section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
			<div
				className="pointer-events-none absolute inset-0 opacity-40"
				aria-hidden
				style={{
					background:
						'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(52, 211, 153, 0.15), transparent)'
				}}
			/>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

			<div className="relative mx-auto max-w-6xl px-6">
				<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-400">
					<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
					Проекты под ключ · с инженерной проверкой
				</div>

				<h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.08]">
					{siteConfig.name}
					<span className="block text-zinc-500 md:mt-2 md:text-3xl md:font-normal">
						{siteConfig.tagline}
					</span>
				</h1>

				<p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
					{siteConfig.description} Быстро собираем, проверяем и отдаём рабочий
					продукт — без сырого AI-черновика.
				</p>

				<div className="mt-10 flex flex-col gap-4 sm:flex-row">
					<a
						href="#contact"
						className="cursor-pointer inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-8 text-sm font-medium text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(52,211,153,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
					>
						Обсудить задачу
					</a>
					<a
						href="#cases"
						className="cursor-pointer inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
					>
						Смотреть кейсы
					</a>
				</div>

				<dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4">
					{heroStats.map(item => (
						<div key={item.label}>
							<dt className="text-xs uppercase tracking-wider text-zinc-600">
								{item.label}
							</dt>
							<dd className="mt-1 text-sm font-medium text-zinc-200">
								{item.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
