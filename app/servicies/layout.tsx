import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бассейны",
  description: "Бассейны перелевные, скиммерные",
};

export default function ServiciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
