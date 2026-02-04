import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

// ✅ Clerk imports
import {
  ClerkProvider,
  SignedOut,
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SirenX | Emergency Response",
  description: "Real-time Emergency Response Coordination System",
  manifest: "/manifest.json",
  themeColor: "#dc2626",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SirenX",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" href="/icon-192.png" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          {/* 🔐 Auth Buttons in Top Right */}
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
                <SignInButton mode="redirect" redirectUrl="/login" />
                <SignUpButton mode="redirect" redirectUrl="/signup">
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-4">
                    Sign Up
                  </button>
                </SignUpButton>
            </SignedOut>
          </header>

          <ServiceWorkerRegistration />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
