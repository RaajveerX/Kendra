import { Button } from "../../components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between p-4 shadow-lg border-b">
      <div className="text-lg font-semibold">
        Kendra
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/tasks"><Button variant="ghost">Tasks</Button></Link>
        <Link href="courses"><Button variant="ghost">Courses</Button></Link>
        <Link href="/links"><Button variant="ghost">Links</Button></Link>
        <Link href="/">
          <Button variant="ghost" className="flex items-center space-x-2">
            <HomeIcon className="w-5 h-5"/>Home
          </Button>
        </Link>
      </div>
    </header>
  );
}