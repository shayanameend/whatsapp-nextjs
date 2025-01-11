import type { PropsWithChildren } from "react";

import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const cookieStore = await cookies();

  const sidebarState = cookieStore.get("sidebar:state")?.value && "true";

  const defaultOpen = sidebarState === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
