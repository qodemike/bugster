import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import { GeistSans } from "geist/font/sans";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import AuthProvider from "./context/authProvider";
import QueryClientProvider from "./context/QueryClientProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import SideBar from "./components/SideBar";
import MiniNavBar from "./components/MiniNavBar";

export const metadata: Metadata = {
  title: "Bugster",
  description: "A way to track issues and assign",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <QueryClientProvider>
            <AuthProvider>
              <div className="grid grid-cols-[230px_1fr]">
                <aside>
                  <SideBar />
                </aside>
                <div>
                  <main className={"px-5 pt-[20px] md:px-7  "}>
                    <MiniNavBar/>
                    {children}
                  </main>
                </div>
              </div>
              <Toaster />
            </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
