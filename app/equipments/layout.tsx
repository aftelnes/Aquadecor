import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оборудование",
  description: "Насосы, станции",
};

export default function EquipmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
