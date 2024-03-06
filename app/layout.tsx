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
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        >
          <QueryClientProvider>
            <AuthProvider>
              <NavBar />
              <main className={"px-5 pt-24 md:px-7 lg:px-9 "}>{children}</main>
              <Toaster/>
            </AuthProvider>
          </QueryClientProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
