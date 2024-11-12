'use server';
import { revalidatePath } from "next/cache";

const URL = process.env.COURSESURL;

export async function getCourses(){

    try{
        const res = await fetch(URL, {cache: 'no-store'});
        const data = await res.json();
        return data;

    }catch(err){
        console.log("Error fetching courses:",error);
    }
}

export async function postCourse(data){

    try{
        await fetch(URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application.json',
            },
            body: JSON.stringify(data),
        });
        
    } catch(error) {
        console.error("Error posting course:", error);
    } finally {
        revalidatePath('/courses');
    }

}

export async function deleteCourse(id){
    try {
        await fetch(`${URL}?id=${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application.json',
            }
        });

    } catch(error) { 
        console.error("Error deleting course:",error)
    } finally {
        revalidatePath('/courses')
    }
}


