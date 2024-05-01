import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наши работы",
  description: "Бассейны перелевные, скиммерные",
};

export default function OurWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
