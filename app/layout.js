import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/style.css";
import "./style/lenis.css";
import Providers from "./providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prozen",
    template: "%s | Prozen",
  },
  description:
    "Prozen — business, consulting, and insurance website template with multiple home layouts.",
  openGraph: {
    title: "Prozen",
    description:
      "Prozen — business, consulting, and insurance website template with multiple home layouts.",
    url: siteUrl,
    siteName: "Prozen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prozen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prozen",
    description:
      "Prozen — business, consulting, and insurance website template with multiple home layouts.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="body-color">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
