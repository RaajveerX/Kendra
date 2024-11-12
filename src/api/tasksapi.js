'use server';

import { revalidatePath } from "next/cache";

const URL = process.env.TASKSURL

export async function getTasks(){

    try{
        const res = await fetch(URL, {cache: 'no-store'});
        const data = await res.json();
        return data;

    }catch(err){
        console.log("Error fetching tasks:",error)
    }
}

export async function postTask(data){

    console.log(data)

    try{
        await fetch(URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application.json',
            },
            body: JSON.stringify(data),
        });
        
    } catch(error) {
        console.error("Error posting task:", error);
    } finally {
        revalidatePath('/tasks')
    }

}

export async function deleteTask(id){
    try {
        await fetch(`${URL}?id=${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application.json',
            }
        });

    } catch(error) { 
        console.error("Error deleting task:",error)
    } finally {
        revalidatePath('/tasks')
    }
}


