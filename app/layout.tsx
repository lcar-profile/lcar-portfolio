import type { Metadata } from "next";
import { Lekton, Space_Mono, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${manrope.className} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar></NavBar>
          <div className="flex px-5 md:px-10 py-6 mt-16 justify-center">
            {children}
          </div>
          <Toaster></Toaster>
        </ThemeProvider>
      </body>
    </html>
  );
}
