import LinkInput from "./LinkInput"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LinkDelete from "./LinkDelete";
import { getLinks } from "@/api/linksapi";


function Link({ tag,url,id }) {
    return (
      <Card className="p-0 rounded-lg shadow-md border">
        <CardHeader>
            <div className="flex ">
                <CardTitle className="text-lg font-bold flex-grow">{tag}</CardTitle>
                <LinkDelete id={id}/>
            </div>
        </CardHeader>
        <CardFooter className="pt-0">
            <a href={url} target="_blank">
                <Button className="rounded-lg" variant="secondary">Go To Link</Button>
            </a>
        </CardFooter>
      </Card>
    );
}



export default async function Links(){

    const links = await getLinks();


    return (
        <div className="flex flex-col w-full p-5 gap-y-2" >
            <LinkInput/>
            <div className="grid grid-cols-4 p-4 w-full max-h-screen gap-x-5 gap-y-5">
                {
                    links.map((link)=>{
                        return <Link {...link}/>
                    })
                }
            </div>
        </div>
    )
}