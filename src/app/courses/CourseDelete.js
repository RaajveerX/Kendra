'use client'
import { deleteCourse } from "@/api/coursesapi";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function CourseDelete({id}){

    async function handleSubmit(e) {
        e.preventDefault();
        try {
        await deleteCourse(id);
        } catch (error) {
        console.error("Failed to delete the task:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Button className="rounded-lg p-2" variant="outline" size="small" type="submit"><Trash2/></Button>
        </form>
    )
}