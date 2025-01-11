"use client";

import { useSidebar } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";

export default function DashboardPage() {
  const { open, openMobile } = useSidebar();

  return (
    <>
      <section
        className={cn(
          "h-screen flex flex-col justify-center items-center",
          open && !openMobile ? "w-[calc(100vw_-_16rem)]" : "w-screen",
        )}
      >
        <h2>Dashboard</h2>
      </section>
    </>
  );
}
