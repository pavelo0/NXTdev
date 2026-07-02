import { services } from '@/lib/content';

export function Services() {
	return (
		<section
			id="services"
			className="border-t border-white/5 py-24"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="max-w-2xl">
					<p className="text-sm font-medium text-emerald-400">Услуги</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
						Делаем под ключ
					</h2>
					<p className="mt-4 text-zinc-400">
						Широкий оффер, единый процесс производства - от визитки до MVP и
						Telegram-автоматизации.
					</p>
				</div>

				<ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{services.map(service => (
						<li
							key={service.title}
							className="group cursor-default rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/20 hover:bg-white/[0.04]"
						>
							<h3 className="text-lg font-medium text-white">
								{service.title}
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
								{service.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
