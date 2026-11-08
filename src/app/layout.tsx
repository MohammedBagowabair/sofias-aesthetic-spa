import type { Metadata } from "next";
import { Bodoni_Moda, Figtree } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${display.variable} ${body.variable}`}>
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
