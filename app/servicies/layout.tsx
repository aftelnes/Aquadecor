import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бассейны",
  description: "Бассейны, изготовление чаш, купелей",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
