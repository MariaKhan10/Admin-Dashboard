"use client";

import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // ✅ Import usePathname
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import Footer from "./(DashboardLayout)/layout/footer/page";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen,] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current path

  // ✅ Agar admin login page hai, to sirf login page render karein
  // ✅ Agar page "/admin" ya "/" (home) hai, to sidebar/header/footer hata do
  if (pathname === "/admin" || pathname === "/") {
    return (
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainWrapper>
          {/* Sidebar */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
          {/* Main Content */}
          <PageWrapper>
            {/* Header */}
            <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
            {/* Page Content */}
            <Container sx={{ paddingTop: "20px", maxWidth: "1200px" }}>
              <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
              {/* Footer */}
              <Footer />
            </Container>
          </PageWrapper>
        </MainWrapper>
      </body>
    </html>
  );
}
