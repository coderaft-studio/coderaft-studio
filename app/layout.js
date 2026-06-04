import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Coderaft Studio — Web Developer & Digital Solutions",
  description: "Jasa pembuatan website, landing page, dan web application profesional. Fast delivery, clean code, harga transparan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
