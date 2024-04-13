import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
