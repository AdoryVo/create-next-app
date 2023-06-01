'use client'

import GitHub from '@/components/icons/github'
import useScroll from '@/lib/hooks/use-scroll'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const scrolled = useScroll(50)

  return (
    <>
      <div
        className={`fixed top-0 z-30 w-full ${
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
            : 'bg-white/0'
        } transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center text-2xl">
            <Image
              src="/favicon.ico"
              alt="Site logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Acme</p>
          </Link>

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
