"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { useState } from "react";
import { metadata } from "./metadata"; // Import metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1">
            <Header toggleSidebar={toggleSidebar} />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
