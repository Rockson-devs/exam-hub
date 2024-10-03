// /app/layout.tsx

"use client"; // Mark as a Client Component

import { usePathname } from "next/navigation"; // Import for routing
import "../styles/globals.css"; // Global styles
import Sidebar from "./components/Sidebar"; // Sidebar component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Render the sidebar only if not on the login page */}
          {pathname !== "/" && <Sidebar />} {/* Update this condition */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
