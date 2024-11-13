'use client';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { postCourse } from "@/api/coursesapi";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ButtonLoading } from "../(components)/ButtonLoading";


export default function MyForm() {

    const [loading, setLoading] = useState(false);

    const form = useForm({
        defaultValues:{
            "name":"",
            "section":"",
            "instructor":"",
            "room":"",
            "time":""
        }})

    async function onSubmit(data) {
        try {
            setLoading(true);
            await postCourse(data);
            form.reset();
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4 flex flex-row items-center gap-x-5">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="Course Name"
                        className="resize-none"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}/>
            
            <FormField
                control={form.control}
                name="section"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="Section"
                        className="resize-none"
                        {...field}
                    />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>
                )}/>
            
            <FormField
                control={form.control}
                name="instructor"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="Instructor"
                        className="resize-none"
                        {...field}
                    />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>
                )}/>
            
            <FormField
                control={form.control}
                name="room"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="Room"
                        className="resize-none"
                        {...field}
                    />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>
                )}/>
            
            <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                <FormItem className="flex-grow">
                    <FormControl>
                    <Textarea
                        placeholder="Time"
                        className="resize-none"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}/>

            {
                loading? <ButtonLoading title="Adding"/>: <Button type="submit" className="rounded h-9"><Plus/>Add</Button>
            }
            </form>
        </Form>
    )
}