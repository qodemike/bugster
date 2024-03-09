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
import BottomBar from "./components/BottomBar";
import DateRangeProvider from "./context/dateRange/DateProvider";


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
        <ThemeProvider attribute="class" defaultTheme="light">
          <QueryClientProvider>
            <AuthProvider>
              <DateRangeProvider>
              <div className=" grid grid-cols-1 lg:grid-cols-[230px_1fr]">
                <aside className="hidden lg:block">
                  <SideBar />
                </aside>
                <aside className=" lg:hidden">
                  <BottomBar/>
                </aside>
                <div className="">
                  <NavBar />
                  <main className=" py-[80px] lg:py-[20px] px-5 md:px-7 ">{children}</main>
                </div>
              </div>
              <Toaster />
              </DateRangeProvider>
            </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
