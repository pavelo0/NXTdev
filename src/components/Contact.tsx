import { contactExpectations, siteConfig } from '@/lib/content';

export function Contact() {
	return (
		<section
			id="contact"
			className="border-t border-white/5 py-24"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent p-8 md:p-12">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<p className="text-sm font-medium text-emerald-400">Контакт</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
								Обсудим ваш проект
							</h2>
							<p className="mt-4 text-zinc-400">
								Расскажите о задаче - предложим scope, сроки и формат работы.
								Без шаблонных КП: сначала разберёмся, что вам действительно
								нужно.
							</p>

							<div className="mt-10 flex flex-col gap-4 sm:flex-row">
								<a
									href={siteConfig.telegram}
									target="_blank"
									rel="noopener noreferrer"
									className="cursor-pointer inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
								>
									Написать в Telegram
								</a>
								<a
									href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Проект - NXT Dev')}`}
									className="cursor-pointer inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm font-medium text-white transition-colors hover:bg-white/5"
								>
									{siteConfig.email}
								</a>
							</div>

							<p className="mt-6 text-sm text-zinc-600">
								Отвечаем в течение 12 часов
							</p>
						</div>

						<div className="rounded-2xl border border-white/5 bg-black/40 p-6 md:p-8">
							<p className="text-sm font-medium text-white">
								Что написать в первом сообщении
							</p>
							<ul className="mt-6 space-y-4">
								{contactExpectations.map(item => (
									<li
										key={item.title}
										className="flex gap-4"
									>
										<span
											className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-500/5 text-xs font-medium text-emerald-400"
											aria-hidden
										>
											{item.step}
										</span>
										<div>
											<p className="text-sm font-medium text-zinc-200">
												{item.title}
											</p>
											<p className="mt-1 text-sm leading-relaxed text-zinc-500">
												{item.description}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
