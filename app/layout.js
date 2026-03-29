import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/style.css";
import "./style/lenis.css";
import Providers from "./providers";

export const metadata = {
  title: {
    default: "Prozen",
    template: "%s | Prozen",
  },
  description:
    "Prozen — business, consulting, and insurance website template with multiple home layouts.",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
