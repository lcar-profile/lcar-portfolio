import type { Metadata } from "next";
import { Lekton, Space_Mono, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const lekton = Lekton({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lai Carson",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu></Menu>
          <div className="flex px-10 py-6 justify-center">{children}</div>
          <Toaster></Toaster>
        </ThemeProvider>
      </body>
    </html>
  );
}
