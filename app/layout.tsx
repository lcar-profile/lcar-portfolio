import type { Metadata } from "next";
import { Google_Sans_Code, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./components/footer";
import Background from "./components/background";

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-google-sans-code",
  fallback: ["Arial", "Times New Roman"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  fallback: ["Arial", "Times New Roman"],
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
      <body
        className={`${manrope.className} ${googleSansCode.variable} antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background>
            <div className="min-h-dvh flex flex-col">
              <NavBar></NavBar>
              <main className="flex flex-1 px-5 md:px-10 py-6 mt-16 justify-center">
                {children}
              </main>
              <Toaster></Toaster>
              <Footer></Footer>
            </div>
          </Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
