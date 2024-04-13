import { MantineProvider } from "@mantine/core";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./animation.css";

import "@mantine/core/styles.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Аквадекор",
  description: "Лучшие бассейны в краснодарском крае",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
