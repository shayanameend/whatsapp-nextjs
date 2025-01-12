import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { PhoneCallIcon, SearchIcon, User2Icon, VideoIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface ChatPageParams {
  params: { id: string };
}

export default async function ChatPage({ params }: Readonly<ChatPageParams>) {
  const { id } = await params;

  return (
    <>
      <header
        className={cn("py-3 px-6 flex justify-between items-center gap-4")}
      >
        <div className="flex items-center gap-4">
          <Avatar
            className={cn(
              "rounded-full w-10 h-10 flex justify-center items-center bg-gray-200",
            )}
          >
            <AvatarFallback className={"m-2 block"}>
              <User2Icon />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className={cn("text-sm font-semibold")}>FYP</h3>
            <p className={cn("text-xs text-gray-500")}>Shayan, Neha</p>
          </div>
        </div>
        <div className={cn("flex items-center gap-2")}>
          <Button variant={"ghost"} size={"icon"}>
            <VideoIcon />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <PhoneCallIcon />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <SearchIcon />
          </Button>
        </div>
      </header>
      <section>
        <h2>Chat {id} Page</h2>
      </section>
    </>
  );
}
