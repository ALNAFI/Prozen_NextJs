import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/style.css";
import "./style/lenis.css";
import {
  fontOswald,
  fontPlusJakartaSans,
  fontSpaceGrotesk,
} from "./fonts";
import { LenisProvider } from "./contexts/LenisContext";
import { OffcanvasProvider } from "./contexts/OffcanvasContext";
import AOSInit from "./components/ui/AOSInit";
import GlobalClientChrome from "./components/shell/GlobalClientChrome";
import { themeOptions } from "./data/themeOptions";

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
  const o = themeOptions;
  const chrome = {
    offcanvas: o.offcanvas,
    scrollToTop: o.scrollToTop,
    backToTop: o.backToTop,
    cursor: o.cursor,
  };

  const appTree = (
    <>
      {o.aos && <AOSInit />}
      <main>{children}</main>
      <GlobalClientChrome chrome={chrome} />
    </>
  );

  const fontVars = `${fontPlusJakartaSans.variable} ${fontOswald.variable} ${fontSpaceGrotesk.variable}`;

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${fontVars} body-color`}>
        {o.lenis ? (
          <LenisProvider>
            <OffcanvasProvider>{appTree}</OffcanvasProvider>
          </LenisProvider>
        ) : (
          <OffcanvasProvider>{appTree}</OffcanvasProvider>
        )}
      </body>
    </html>
  );
}
