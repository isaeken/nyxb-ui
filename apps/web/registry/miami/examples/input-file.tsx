import { Input } from "~/registry/miami/ui/input"
import { Label } from "~/registry/miami/ui/label"

export default function InputFile() {
   return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
         <Label htmlFor="picture">Picture</Label>
         <Input id="picture" type="file" />
      </div>
   )
}
