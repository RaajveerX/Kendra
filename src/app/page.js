import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; 
import GitHub from "./(components)/GitHub";



export default function HomePage() {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <h1
        className={cn(
          "text-6xl font-thin bg-gradient-to-r from-white via-gray-400 to-gray-800",
          "bg-clip-text text-transparent tracking-wide"
        )}>

        KENDRA</h1>
        
      <h6 className="mt-8 font-thin white text-center max-w-xl">
        Next.js | React.js | Tailwind CSS | ShadCN Components
        <br/> <br/>
        AWS Lambda | AWS RDS (PostgreSQL)
      </h6>
      <a href="https://github.com/RaajveerX/Kendra" target="_blank" rel="noopener noreferrer">
        <Button  className="mt-8 rounded" variant="ghost"><GitHub/>Code for this App</Button>
      </a>
    </div>
  );
}