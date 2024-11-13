import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonLoading({title}) {
    return (
        <Button disabled className="h-9 rounded">
            <Loader2 className="animate-spin"/> {title}
        </Button>
    )
}