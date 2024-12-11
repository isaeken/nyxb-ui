import { ChevronDown, Circle, Plus, Star } from 'lucide-react'

import { Button } from '~/registry/miami/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '~/registry/miami/ui/card'
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'
import { Separator } from '~/registry/miami/ui/separator'

export function DemoGithub() {
   return (
      <Card>
         <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
            <div className="space-y-1">
               <CardTitle>shadcn/ui</CardTitle>
               <CardDescription>
                  Beautifully designed components that you can copy and paste into
                  your apps. Accessible. Customizable. Open Source.
               </CardDescription>
            </div>
            <div className="bg-secondary text-secondary-foreground flex items-center space-x-1 rounded-md">
               <Button variant="secondary" className="px-3 shadow-none">
                  <Star />
                  Star
               </Button>
               <Separator orientation="vertical" className="h-[20px]" />
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="secondary" className="px-2 shadow-none">
                        <ChevronDown className="text-secondary-foreground" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                     align="end"
                     alignOffset={-5}
                     className="w-[200px]"
                     forceMount
                  >
                     <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                     <DropdownMenuCheckboxItem checked>
                        Future Ideas
                     </DropdownMenuCheckboxItem>
                     <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                     <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>
                        <Plus />
                        {' '}
                        Create List
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </CardHeader>
         <CardContent>
            <div className="text-muted-foreground flex space-x-4 text-sm">
               <div className="flex items-center">
                  <Circle className="mr-1 size-3 fill-sky-400 text-sky-400" />
                  TypeScript
               </div>
               <div className="flex items-center">
                  <Star className="mr-1 size-3" />
                  20k
               </div>
               <div>Updated April 2023</div>
            </div>
         </CardContent>
      </Card>
   )
}
