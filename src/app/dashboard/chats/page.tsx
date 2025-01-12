import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { LockIcon } from "lucide-react";

import { cn } from "~/lib/utils";

export default function ChatPage() {
  return (
    <>
      <section
        className={cn(
          "p-12 h-screen flex flex-col justify-center items-center",
        )}
      >
        <article
          className={cn(
            "flex-1 flex flex-col justify-center items-center gap-8",
          )}
        >
          <SiWhatsapp size={64} />
          <h3 className={cn("text-2xl")}>WhatsApp for Mac</h3>
        </article>
        <p className={cn("flex items-center gap-1 text-sm")}>
          <span>
            <LockIcon size={14} />
          </span>
          <span>Your personal messages are</span>
          <span className={cn("text-green-700")}>end to end encrypted</span>
        </p>
      </section>
    </>
  );
}
