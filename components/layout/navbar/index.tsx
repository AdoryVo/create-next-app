'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import useScroll from '@/lib/hooks/use-scroll'
import GitHub from '@/components/icons/github'

import NavbarMenu from './navbar-menu'

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

            <NavbarMenu />
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
