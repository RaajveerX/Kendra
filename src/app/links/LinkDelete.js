'use client';
import { deleteLink } from "@/api/linksapi";
import { Button } from "@/components/ui/button"
import { DeleteIcon } from "lucide-react"
import { useState } from "react";
import { ButtonLoading } from "../(components)/ButtonLoading";

export default function LinkDelete({id}){

    const [loading, setLoading] = useState(false);

    

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault(); 
        try {
            await deleteLink(id);
        } catch (error) {
            console.error("Failed to delete the task:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                loading? <ButtonLoading />: <Button variant="delete" type="submit"><DeleteIcon/></Button>
            }
        </form>
    )
}