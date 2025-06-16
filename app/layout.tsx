import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Acme Dashboard", default: "Acme Dashboard" },
  description: "This is Acme dashboard using nextjs",
  metadataBase: new URL("https://acme-dashboard-nextjs1.vercel.app/"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
