import { siteConfig } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-600 sm:flex-row">
        <p>
          © {year} {siteConfig.name}. Не просто vibe-coded.
        </p>
        <p className="text-zinc-700">Next.js · Tailwind · Vercel</p>
      </div>
    </footer>
  );
}
