import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import Heading from './Heading'
import Image from 'next/image'

export const CallToActionBlock: React.FC<CTABlockProps> = (props) => {
  return (
    <div className="container">
      <Heading />
      {/* Image and Text */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
          <Image
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
            width={500}
            height={300}
          />
          <Image
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
            width={500}
            height={300}
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let&apos;s create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people who share your
              interests. Connecting with your friends and family as well as discovering new ones is
              easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary-foreground bg-foreground hover:bg-foreground/70 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Text and Image */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let&apos;s create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people who share your
              interests. Connecting with your friends and family as well as discovering new ones is
              easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary-foreground bg-primary hover:bg-foreground/70 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <Image
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
            width={500}
            height={300}
          />
          <Image
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
            width={500}
            height={300}
          />
        </div>
      </section>
    </div>
  )
}
