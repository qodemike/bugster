import type { Metadata } from "next";
import NavBar from "./NavBar";
import { Inter } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import "./theme-config.css";
import AuthProvider from "./context/authProvider";
import QueryClientProvider from "./context/QueryClientProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter'});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
        <QueryClientProvider>
        <AuthProvider>
            <NavBar />
            <main className={" p-7"}>
              <Container>
                {children}  
              </Container>
              </main>
        </AuthProvider>
        </QueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
