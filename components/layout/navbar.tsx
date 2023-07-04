'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import useScroll from '@/lib/hooks/use-scroll'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import GitHub from '@/components/icons/github'

const foundationDocs: { title: string; href: string; description: string }[] = [
  {
    title: 'React',
    href: 'https://react.dev/learn',
    description: 'The library for web and native user interfaces.',
  },
  {
    title: 'Next.js App Router',
    href: 'https://nextjs.org/docs',
    description: `Next.js' and React's latest features including Layouts, Server Components, Suspense, and more.`,
  },
  {
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/docs/utility-first',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
  },
  {
    title: 'shadcn/ui',
    href: 'https://ui.shadcn.com/docs/components',
    description:
      'Beautifully designed components built with Radix UI and Tailwind CSS. ',
  },
]

export default function Navbar() {
  const scrolled = useScroll(50)

  return (
    <>
      <div
        className={clsx(
          'fixed top-0 z-30 w-full',
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
            : 'bg-white/0',
          'transition-all'
        )}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <div className="flex">
            <Link href="/" className="flex items-center text-2xl">
              <Image
                src="/favicon.ico"
                alt="Site logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <p className="me-5">Acme</p>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
                    Foundation Docs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {foundationDocs.map((library) => (
                        <ListItem
                          key={library.title}
                          title={library.title}
                          href={library.href}
                        >
                          {library.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div>
            <Link
              href="https://github.com/AdoryVo/create-next-app"
              target="_blank"
            >
              <GitHub className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          target="_blank"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
