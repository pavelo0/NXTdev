import { cases } from '@/lib/content';

function formatPublicUrl(url: string): string {
	try {
		return new URL(url).hostname.replace(/^www\./, '');
	} catch {
		return url;
	}
}

export function Cases() {
	return (
		<section id="cases" className="border-t border-white/5 py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="max-w-2xl">
					<p className="text-sm font-medium text-emerald-400">Портфолио</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
						Кейсы
					</h2>
					<p className="mt-4 text-zinc-400">
						Реальные проекты. Живые кейсы — со ссылками на deploy.
					</p>
				</div>

				<ul className="mt-14 grid gap-4 sm:grid-cols-2">
					{cases.map(item => (
						<li
							key={item.title}
							className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10"
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<p className="text-xs uppercase tracking-wider text-zinc-600">
										{item.category}
									</p>
									<h3 className="mt-2 text-lg font-medium text-white">
										{item.title}
									</h3>
								</div>
								<span
									className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
										item.status === 'live'
											? 'bg-emerald-500/10 text-emerald-400'
											: 'bg-zinc-800 text-zinc-500'
									}`}
								>
									{item.status === 'live' ? 'В проде' : 'Скоро'}
								</span>
							</div>
							<p className="mt-4 flex-1 text-sm text-zinc-500">
								{item.description}
							</p>
							{item.status === 'live' && item.href && (
								<a
									href={item.href}
									target={item.href.startsWith('http') ? '_blank' : undefined}
									rel={
										item.href.startsWith('http')
											? 'noopener noreferrer'
											: undefined
									}
									className="mt-6 cursor-pointer text-sm text-emerald-400 transition-colors hover:text-emerald-300"
								>
									{formatPublicUrl(item.href)} →
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
