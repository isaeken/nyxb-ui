'use client'

import type { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu'
import * as React from 'react'
import { CheckIcon, ClipboardIcon } from 'lucide-react'
import type { NpmCommands } from 'types/unist'

import type { Event } from '~/lib/events'
import { trackEvent } from '~/lib/events'
import { ny } from '~/lib/utils'
import type { ButtonProps } from '~/components/ui/button'
import { Button } from '~/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

interface CopyButtonProps extends ButtonProps {
   value: string
   src?: string
   event?: Event['name']
   variant?: 'ghost' | 'outline' // Ensuring variant includes "outline"
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
   navigator.clipboard.writeText(value)
   if (event)
      trackEvent(event)
}

export function CopyButton({
   value,
   className,
   src,
   variant = 'ghost', // Default value set to "ghost"
   event,
   ...props
}: CopyButtonProps) {
   const [hasCopied, setHasCopied] = React.useState(false)

   React.useEffect(() => {
      setTimeout(() => {
         setHasCopied(false)
      }, 2000)
   }, [hasCopied])

   return (
      <Button
         size="icon"
         variant={variant}
         className={ny(
            'relative z-10 h-6 w-6 text-zinc-50 hover:bg-background/70 hover:text-zinc-50',
            className,
         )}
         onClick={() => {
            copyToClipboardWithMeta(
               value,
               event
                  ? {
                        name: event,
                        properties: {
                           name: src!,
                           code: value,
                        },
                     }
                  : undefined,
            )
            setHasCopied(true)
         }}
         {...props}
      >
         <span className="sr-only">Copy</span>
         {hasCopied
            ? (
               <CheckIcon className="h-3 w-3" />
               )
            : (
               <ClipboardIcon className="h-3 w-3" />
               )}
      </Button>
   )
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
   value: string
   classNames: string
   className?: string
}

export function CopyWithClassNames({
   value,
   classNames,
   className,
   ...props
}: CopyWithClassNamesProps) {
   const [hasCopied, setHasCopied] = React.useState(false)

   React.useEffect(() => {
      setTimeout(() => {
         setHasCopied(false)
      }, 2000)
   }, [hasCopied])

   const copyToClipboard = React.useCallback((value: string) => {
      copyToClipboardWithMeta(value)
      setHasCopied(true)
   }, [])

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               size="icon"
               variant="ghost"
               className={ny(
                  'relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
                  className,
               )}
            >
               {hasCopied
                  ? (
                     <CheckIcon className="h-3 w-3" />
                     )
                  : (
                     <ClipboardIcon className="h-3 w-3" />
                     )}
               <span className="sr-only">Copy</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => copyToClipboard(value)}>
               Component
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copyToClipboard(classNames)}>
               Classname
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
   commands: Required<NpmCommands>
}

export function CopyNpmCommandButton({
   commands,
   className,
   ...props
}: CopyNpmCommandButtonProps) {
   const [hasCopied, setHasCopied] = React.useState(false)

   React.useEffect(() => {
      setTimeout(() => {
         setHasCopied(false)
      }, 2000)
   }, [hasCopied])

   const copyCommand = React.useCallback(
      (value: string, pm: 'npm' | 'pnpm' | 'yarn' | 'bun') => {
         copyToClipboardWithMeta(value, {
            name: 'copy_npm_command',
            properties: {
               command: value,
               pm,
            },
         })
         setHasCopied(true)
      },
      [],
   )

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               size="icon"
               variant="ghost"
               className={ny(
                  'relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
                  className,
               )}
            >
               {hasCopied
                  ? (
                     <CheckIcon className="h-3 w-3" />
                     )
                  : (
                     <ClipboardIcon className="h-3 w-3" />
                     )}
               <span className="sr-only">Copy</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem
               onClick={() => copyCommand(commands.__npmCommand__, 'npm')}
            >
               npm
            </DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => copyCommand(commands.__yarnCommand__, 'yarn')}
            >
               yarn
            </DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => copyCommand(commands.__pnpmCommand__, 'pnpm')}
            >
               pnpm
            </DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => copyCommand(commands.__bunCommand__, 'bun')}
            >
               bun
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
