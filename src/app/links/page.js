import LinkInput from "./LinkInput"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LinkDelete from "./LinkDelete";


function LinkCard({ tag,url,id }) {
    return (
      <Card className="p-0 rounded-lg shadow-md border">
        <CardHeader>
            <div className="flex ">
                <CardTitle className="text-lg font-bold flex-grow">{tag}</CardTitle>
                <LinkDelete id={id}/>
            </div>
        </CardHeader>
        <CardFooter className="pt-0">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-lg" variant="secondary">Go To Link</Button>
            </a>
        </CardFooter>
      </Card>
    );
}



export default async function Links(){

    const data = await fetch(process.env.LINKSURL)
    const links = await data.json()


    return (
        <div className="flex flex-col w-full p-5 gap-y-2" >
            <LinkInput/>
            <div className="grid grid-cols-4 p-4 w-full max-h-screen gap-x-5 gap-y-5">
                {
                    links.map((link)=>{
                        return <LinkCard {...link} key={link.id}/>
                    })
                }
            </div>
        </div>
    )
}