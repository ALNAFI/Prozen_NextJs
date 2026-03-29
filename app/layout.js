import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/style.css";
import "./style/lenis.css";
import Providers from "./providers";

export const metadata = {
  title: "Prozen Next JS Template",
  description: "Prozen business template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body-color">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
