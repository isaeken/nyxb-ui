import { allShowcases } from 'content-collections'

import { ShowcaseCard } from '~/components/sections/showcase'
import BlurFade from '~/registry/miami/ui/blur-fade'

export default async function Page() {
   return (
      <article className="container max-w-[120ch] py-14">
         <h2 className="text-foreground mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter">
            Showcase
         </h2>
         <h3 className="text-foreground/80 mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight">
            Nyxb UI examples.
         </h3>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allShowcases.map((showcase, idx) => (
               <BlurFade key={idx} delay={0.25 + idx * 0.05}>
                  <ShowcaseCard {...showcase} href={showcase.slug} />
               </BlurFade>
            ))}
         </div>
      </article>
   )
}
