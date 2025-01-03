import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Momentum",
  description: "Your daily dose of productivity, delivered with a touch of inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex`}>
        <ToasterProvider />
        <div className="w-[300px]">
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}
