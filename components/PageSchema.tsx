import { SITE_URL, LAST_UPDATED } from "@/lib/constants";
import { SITE_NAME } from "@/lib/seo";

type PageSchemaProps = {
  title: string;
  description: string;
  path: string;
};

export default function PageSchema({
  title,
  description,
  path,
}: PageSchemaProps) {
  const url = `${SITE_URL}${path}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: url,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${title} | ${SITE_NAME}`,
        description,
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: LAST_UPDATED,
        inLanguage: "en-PK",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
