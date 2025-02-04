import { AppSidebar } from "~/registry/miami/block/sidebar-10/components/app-sidebar"
import { NavActions } from "~/registry/miami/block/sidebar-10/components/nav-actions"
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbList,
   BreadcrumbPage,
} from "~/registry/miami/ui/breadcrumb"
import { Separator } from "~/registry/miami/ui/separator"
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from "~/registry/miami/ui/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar in a popover."

export default function Page() {
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <header className="flex h-14 shrink-0 items-center gap-2">
               <div className="flex flex-1 items-center gap-2 px-3">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                     <BreadcrumbList>
                        <BreadcrumbItem>
                           <BreadcrumbPage className="line-clamp-1">
                              Project Management & Task Tracking
                           </BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
               </div>
               <div className="ml-auto px-3">
                  <NavActions />
               </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 px-4 py-10">
               <div className="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" />
               <div className="bg-muted/50 mx-auto size-full max-w-3xl rounded-xl" />
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}
