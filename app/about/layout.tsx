import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
  description: "О нас",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
