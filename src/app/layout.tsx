import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "~/app/globals.css";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-100 text-gray-900 font-medium")}>
        {children}
      </body>
    </html>
  );
}
