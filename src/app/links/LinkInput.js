'use client';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { postLink } from "@/api/linksapi";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ButtonLoading } from "../(components)/ButtonLoading";

export default function LinkInput() {

    const [loading, setLoading] = useState(false);
            
    const form = useForm({
        defaultValues:{
            "tag":"",
            "url":""
    }})

    async function onSubmit(data) {
        setLoading(true);
        try {
            await postLink(data);
            form.reset();
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setLoading(false);
        }
    }
  
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4 flex flex-row items-center w-full gap-x-5">
            <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="Describe this link"
                        className="resize-none"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}/>
            
            <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="URL"
                        className="resize-none flex-grow"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}/>

            {
                loading? <ButtonLoading title={"Adding"}/> : <Button type="submit" className="rounded h-9"><Plus/>Add</Button>
            }
            </form>
        </Form>
    )
}