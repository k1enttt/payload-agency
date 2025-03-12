import React from 'react'

import type { GalleryContentBlock as GalleryContentBlockProps } from '@/payload-types'

import Image from 'next/image'

export const GalleryContentBLock: React.FC<GalleryContentBlockProps> = (props) => {
  return (
    <div className="my-16">
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-8 sm:text-center lg:py-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn&apos;t reinvent the wheel
          </h2>
          <p className="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
            We are strategists, designers and developers. Innovators and problem solvers. Small
            enough to be simple and quick, but big enough to deliver the scope you want at the pace
            you need.
          </p>
          <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12 h-[420px]">
            <div className="relative col-span-2 mb-4 sm:mb-0">
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
                alt="content gallery 1"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative hidden col-span-1 sm:block">
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png"
                alt="content gallery 2"
                fill
                objectFit="cover"
              />
            </div>

            <div className="relative hidden col-span-1 sm:block ">
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="content gallery 3"
                fill
                objectFit="cover"
              />
            </div>

            <div className="relative hidden col-span-1 sm:block ">
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png"
                alt="content gallery 4"
                fill
                objectFit="cover"
              />
            </div>

            <div className="relative col-span-2 ">
              <Image
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png"
                alt="content gallery 5"
                fill
                objectFit="cover"
              />
            </div>

            <div className="relative hidden col-span-1 sm:block">
              <Image
                className=" rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png"
                alt="content gallery 6"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
