'use client';
import { deleteTask } from "@/api/tasksapi"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon } from "lucide-react"
import { useState } from "react";
import { ButtonLoading } from "../(components)/ButtonLoading";


export default function TaskDelete({id}){

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        try {
            await deleteTask(id);
        } catch (error) {
            console.error("Failed to delete the task:", error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {
                loading? <ButtonLoading title="" /> : <Button variant="secondary" type="submit"><CheckCircleIcon/></Button>
            }           
        </form>
    )
}