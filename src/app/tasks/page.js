import TaskInput from "./TaskInput";
import { getTasks } from "@/api/tasksapi";
import moment from "moment"
import TaskDelete from "./TaskDelete"

function Task({name, due_date, duetime,id}){


    return (
        <div className="flex w-full p-3 border space-x-5 items-center rounded-2xl">
            <div className="flex-grow">
                <p>{name}</p>
            </div>
            <p>Due Date:</p>
            <p className="border p-2 mr-5"> {moment(due_date).format('MM-DD-YYYY')}</p>
            <p>Due Time:</p>
            <p className="border p-2 to w-[120px] h-10">{duetime}</p>
            <TaskDelete id={id}/>
        </div>
    )
}



export default async function Tasks(){

    const tasks = await getTasks()
    console.log(tasks)

    return (
        <div className="flex flex-col w-full p-5 gap-y-2" >
            <TaskInput/>
            <br/>
            {
                tasks.map((task)=>{
                    return <Task {...task} key={task.id}/>
                })
            }
        </div>
    )
}