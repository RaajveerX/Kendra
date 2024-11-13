'use client'
import { deleteCourse } from "@/api/coursesapi";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { ButtonLoading } from "../(components)/ButtonLoading";

export default function CourseDelete({id}){

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await deleteCourse(id);
        } catch (error) {
            console.error("Failed to delete the task:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                loading? <ButtonLoading className="small"/>: <Button className="rounded-lg p-2" variant="outline" size="small" type="submit"><Trash2/></Button>
            }
        </form>
    )
}