'use client';
import { deleteTask } from "@/api/tasksapi"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon } from "lucide-react"


export default function TaskDelete({id}){

    // Handle the delete action
    async function handleSubmit(e) {
        e.preventDefault();
        try {
        await deleteTask(id);
        } catch (error) {
        console.error("Failed to delete the task:", error);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <Button variant="secondary" type="submit"><CheckCircleIcon/></Button>
        </form>
    )
}