import type { Metadata } from "next";
import "@fontsource/bodoni-moda/latin-400.css";
import "@fontsource/bodoni-moda/latin-400-italic.css";
import "@fontsource/bodoni-moda/latin-500.css";
import "@fontsource/bodoni-moda/latin-500-italic.css";
import "@fontsource/figtree/latin-400.css";
import "@fontsource/figtree/latin-500.css";
import "@fontsource/figtree/latin-600.css";
import "@fontsource/figtree/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofia's Aesthetic Spa",
  description:
    "Cupping, skin brightening, Rejuran, laser, HiRF, and brow embroidery. Book Sofia's Aesthetic Spa on WhatsApp, +65 8766 6949.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener("click",(e)=>{const a=e.target.closest&&e.target.closest(".side-menu a");if(!a)return;const box=document.getElementById("nav-toggle");if(box)box.checked=false;});`,
          }}
        />
      </body>
    </html>
  );
}
