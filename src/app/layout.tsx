import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/section/Header";
import Footer from "@/section/Footer";
import { AuthProvider } from "./auth/auth-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acortador de URL",
  description: "Genera URLs cortas para compartir en redes sociales",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <div>{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
