import { Sidebar } from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vantage Analytics | Performance Dashboard",
  description: "Advanced A/B test tracking and performance analytics for direct response funnels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
