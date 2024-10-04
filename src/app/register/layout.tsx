import React from "react";
import "../globals.css";

export default function RegistrationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
          {children}
        </main>
      </body>
    </html>
  );
}
