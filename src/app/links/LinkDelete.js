'use client';
import { deleteLink } from "@/api/linksapi";
import { Button } from "@/components/ui/button"
import { DeleteIcon } from "lucide-react"

export default function LinkDelete({id}){

    async function handleSubmit(e) {
        e.preventDefault();
        try {
        await deleteLink(id);
        } catch (error) {
        console.error("Failed to delete the task:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Button variant="delete" type="submit"><DeleteIcon/></Button>
        </form>
    )
}