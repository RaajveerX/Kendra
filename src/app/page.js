import { cn } from "@/lib/utils"; 

export default function HomePage() {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      {/* Title with Gradient */}
      <h1
        className={cn(
          "text-6xl font-thin bg-gradient-to-r from-white via-gray-400 to-gray-800",
          "bg-clip-text text-transparent tracking-wide"
        )}
      >
        KENDRA
      </h1>

      {/* Description */}
      <h6 className="mt-8 font-thin white text-center max-w-xl">
        Next.js | React.js | Tailwind CSS | ShadCN Components
        <br/> <br/>
        AWS Lambda | AWS RDS (PostgreSQL)
      </h6>
    </div>
  );
}