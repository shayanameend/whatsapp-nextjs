import {
  MicIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  User2Icon,
  VideoIcon,
} from "lucide-react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";

interface ChatPageParams {
  params: { id: string };
}

export default async function ChatPage({ params }: Readonly<ChatPageParams>) {
  const { id } = await params;

  return (
    <main className={cn("h-screen flex flex-col")}>
      <header
        className={cn("py-3 px-6 flex justify-between items-center gap-4")}
      >
        <div className={cn("flex items-center gap-4")}>
          <Avatar>
            <AvatarFallback>
              <User2Icon />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className={cn("text-sm font-semibold")}>FYP</h3>
            <p className={cn("text-xs text-gray-500")}>Shayan, Neha</p>
          </div>
        </div>
        <div className={cn("flex items-center gap-2")}>
          <Button
            variant={"ghost"}
            size={"icon"}
            className={cn("text-gray-700")}
          >
            <VideoIcon size={20} />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className={cn("text-gray-700")}
          >
            <PhoneIcon size={18} />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className={cn("text-gray-700")}
          >
            <SearchIcon size={20} />
          </Button>
        </div>
      </header>
      <section className={cn("flex-1")}>
        <h2>Chat {id} Page</h2>
      </section>
      <footer
        className={cn("py-3 px-6 flex justify-between items-center gap-4")}
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn("rounded-full text-gray-700")}
        >
          <PlusIcon size={24} />
        </Button>
        <Textarea />
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn("rounded-full text-gray-700")}
        >
          <MicIcon size={24} />
        </Button>
      </footer>
    </main>
  );
}
