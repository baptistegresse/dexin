// app/layout.tsx
 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WagmiProviderComp from "@/lib/wagmi-provider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/config";
import favicon from "@/public/logo_favicon.png"
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Dexin App",
  description: "Dexin App",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
 
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={inter.className}>
        <WagmiProviderComp initialState={initialState}>
          {children}
        </WagmiProviderComp>
      </body>
    </html>
  );
}