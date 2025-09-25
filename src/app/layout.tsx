import "~/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Pixor App",
  description:
    "A simple image sharing app built with Next.js, Clerk, and Tailwind CSS.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins  = Poppins({
  subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className={`${poppins.variable}`}>
        <body className="bg-black text-white">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
