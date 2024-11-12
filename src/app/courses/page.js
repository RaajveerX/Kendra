import CourseInput from "./CourseInput";
import { Card, CardHeader, CardContent, CardTitle, } from "@/components/ui/card";
import CourseDelete from "./CourseDelete";
import { getCourses } from "@/api/coursesapi";

function Course({ name, section, instructor, room, time, id }) {
    return (
      <Card className="rounded-lg shadow-md border">
        <CardHeader>
            <div className="flex ">
                <CardTitle className="text-lg font-bold flex-grow">{name}</CardTitle>
                <CourseDelete id={id}/>
            </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">Section: {section}</p>
          <p className="text-sm text-gray-500">Instructor: {instructor}</p>
          <p className="text-sm text-gray-500">Room: {room}</p>
          <p className="mt-2 text-sm">{time}</p>
        </CardContent>
      </Card>
    );
}

export default async function Courses(){

    const data = await fetch(process.env.COURSESURL)
    const courses = await data.json()

    return (

        <div className="flex flex-col w-full p-5 gap-y-2" >
            <CourseInput />
            <div className="flex w-full">
                <div className="grid grid-cols-4 p-4 w-full max-h-screen gap-x-5 gap-y-5">
                    {
                        courses?.map((course)=>{
                            return <Course {...course} key={course.id}/>
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}