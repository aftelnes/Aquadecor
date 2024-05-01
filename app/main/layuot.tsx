import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аквадекор",
  description: "Аквадекор",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
