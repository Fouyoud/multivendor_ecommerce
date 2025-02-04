import { Button } from "@/components/ui/button";
import ThemeToggle from "./shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div className="p-6">
    <div className="w-100 flex gap-x-5 justify-end">
      <UserButton/>
      <ThemeToggle />
    </div>
    <h1 className="font-bold text-blue-500 font-barlow">Welcome to the course !</h1>
    <Button>Click Here !</Button>
  </div>
  );
}
