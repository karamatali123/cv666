import Link from "next/link";
import PageSchema from "./PageSchema";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SkipLink from "./SkipLink";

type ContentPageLayoutProps = {
  title: string;
  description?: string;
  path?: string;
  children: React.ReactNode;
};

export default function ContentPageLayout({
  title,
  description,
  path,
  children,
}: ContentPageLayoutProps) {
  const schemaDescription = description ?? title;

  return (
    <>
      {path && (
        <PageSchema title={title} description={schemaDescription} path={path} />
      )}
      <SkipLink />
      <SiteHeader />

      <main id="main-content" className="min-h-[60vh]">
        <div className="section-container">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-600">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-700" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          <header className="mb-8 border-b border-slate-200 pb-6">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {description}
              </p>
            )}
          </header>

          <div className="prose-content max-w-none pb-12">{children}</div>

          <p className="border-t border-slate-200 pt-6 text-sm text-slate-500">
            <Link href="/" className="font-medium text-brand-700 hover:underline">
              ← Back to 666rs Game Download Guide
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
