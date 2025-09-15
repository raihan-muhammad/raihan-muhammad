import { Metadata } from "next";

type PageMetaType = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  publishedTime?: string;
  section?: string;
  keywords?: string[];
  canonicalUrl?: string;
};

export default function formatMetadata(pageMeta: PageMetaType) {
  const siteURL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://raihanmuhammad.my.id";
  const siteTitle = "Raihan Muhammad";
  const metadata: Metadata = {
    metadataBase: new URL(siteURL),
    description:
      pageMeta.description ||
      "Raihan Muhammad is Your Reliable Frontend Developer Partner With 6 Years of Experience, Specializing in Front-End Development Using Next.js, TypeScript, Styled Components, and React.js",
    title: (pageMeta.title || "") + ` | ${siteTitle}`,
    manifest: "/manifest.json",
    alternates: {
      canonical: pageMeta.canonicalUrl,
    },
    openGraph: {
      title: (pageMeta.title || "") + ` | ${siteTitle}`,
      description:
        pageMeta.description ||
        "Raihan Muhammad is Your Reliable Frontend Developer Partner With 6 Years of Experience, Specializing in Front-End Development Using Next.js, TypeScript, Styled Components, and React.js",
      siteName: "iHome",
      images: [
        {
          url: pageMeta.image || siteURL + "/images/og-image.webp",
          width: 1200,
          height: 627,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    icons: [
      { rel: "apple-touch-icon", url: "icons/128x128.webp" },
      { rel: "icon", url: "icons/128x128.webp" },
    ],
    keywords: pageMeta.keywords || ["Raihan", "Frontend Developer"],
    // verification: {
    //     google: '',
    // },
  };
  return metadata;
}
