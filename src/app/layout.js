import "./globals.css";
import NavBar from "./(components)/NavBar";
import { Calendar } from "@/components/ui/calendar"
import NoteCard from "./(components)/NoteCard";


// RootLayout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="grid grid-rows-layout grid-cols-layout gap-4 h-full pl-4 pr-4 pb-4">
          {/* AppBar */}
          <div className="col-span-2">
            <NavBar/>
          </div>

          {/* Calendar */}
          <div className="border flex items-center justify-center w-full h-full ">
            <Calendar/>
          </div>

          {/* Route Specific Container */}
          <div className="border items-start justify-center col-span-1 row-span-2 overflow-x-scroll">
            {children}
          </div>

          {/* NoteCard */}
          <div className="flex items-center justify-center">
            <NoteCard/>
          </div>

        </div>
      </body>
    </html>
  );
}
