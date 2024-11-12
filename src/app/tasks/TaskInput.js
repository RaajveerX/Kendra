'use client';
import {useForm} from "react-hook-form"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import {Textarea} from "@/components/ui/textarea"
import {format} from "date-fns"
import {Popover,PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {Calendar} from "@/components/ui/calendar"
import {Calendar as CalendarIcon} from "lucide-react"
import { postTask } from "@/api/tasksapi";
import { Plus } from "lucide-react";


export default function TaskInput() {

  const form = useForm({
    defaultValues: {
        "name":"",
        "due_date": new Date().toDateString(),
        "duetime":"",
        "completed":false
    },
  })

  function onSubmit(values) {
    try {
        postTask(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex items-center justify-center space-x-4 p-4">
                    <FormField 
                    control={form.control} 
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex-grow place-self-auto">
                        <FormControl>
                            <Textarea
                            placeholder="Enter your task"
                            className="flex-grow"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    
                <FormField
                control={form.control}
                name="due_date"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                
                    <FormMessage />
                    </FormItem>
                )}
                />
                    
                    <FormField
                    control={form.control}
                    name="duetime"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Textarea
                            placeholder="Due at"
                            className="h-10 "
                            {...field}
                            />
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="h-9 rounded"><Plus/>Add</Button>
                </form>
        </Form>
  )
}

