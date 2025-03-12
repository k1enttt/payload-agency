import React from 'react'

import type { GalleryContentBlock as GalleryContentBlockProps } from '@/payload-types'

export const SocialProofBlock: React.FC<GalleryContentBlockProps> = (props) => {
  return (
    <div className="my-16">
      <section className="bg-white dark:bg-gray-900">
        <div className="container py-8 text-center lg:py-16">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">organizations</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
