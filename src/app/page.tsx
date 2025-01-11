import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <>
      <section
        className={cn("h-screen flex flex-col justify-center items-center")}
      >
        <Button variant={"destructive"}>Click Me!</Button>
      </section>
    </>
  );
}
