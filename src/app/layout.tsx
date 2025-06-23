import type { Metadata } from "next";
import "./globals.css";
import { AnalysisProvider } from "@/lib/context/AnalysisContext";
import UserDataProtectionPopup from "@/components/UserDataProtectionPopup";

export const metadata: Metadata = {
  title: "THUNDERBOLT 13 - CV Analysis & Course Recommendations",
  description:
    "Analyze your CV and get personalized course recommendations for your career development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <UserDataProtectionPopup />
        <AnalysisProvider>{children}</AnalysisProvider>
      </body>
    </html>
  );
}
