import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import AuthProvider from "./context/authProvider";
import QueryClientProvider from "./context/QueryClientProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
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
              <div className=" grid grid-cols-1 lg:grid-cols-[230px_1fr]">
                <aside className="hidden lg:block">
                  <SideBar />
                </aside>
                <div className="">
                  <NavBar />
                  <main className="  pt-[80px]  lg:pt-[20px] px-5 md:px-7 ">{children}</main>
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
