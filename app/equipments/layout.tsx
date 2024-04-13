import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оснащение",
  description: "Насосы, станции",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
