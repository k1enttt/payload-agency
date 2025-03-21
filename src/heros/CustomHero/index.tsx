'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

type CustomHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const CustomHero: React.FC<CustomHeroType> = ({ richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative -mt-[7.75rem] text-white" data-theme="dark">
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
        <div className="relative container text-white py-16 lg:py-28 z-1">
          <div className="mb-6 max-w-screen-lg lg:mb-0">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              We invest in the world’s potential
            </h1>
            <p className="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              The need for energy is universal. That&apos;s why Flowbite scientists and engineers
              are pioneering new research and pursuing new technologies to reduce emissions while
              creating more efficient fuels. We&apos;re committed to responsibly meeting the
              world&apos;s energy needs.
            </p>
            <a
              href="#"
              className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Learn more about the plan
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="mb-1 text-lg font-bold">Fourth quarter 2021</h2>
              <p className="mb-1 text-sm text-gray-400">We announced fourth quarter 2021 results</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-bold">Zero emissions</h2>
              <p className="mb-1 text-sm text-gray-400">
                Flowbite aims to achieve net-zero emissions
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-bold">New York</h2>
              <p className="mb-1 text-sm text-gray-400">
                Plans for net zero emissions in New York{' '}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-bold">2022 plans</h2>
              <p className="mb-1 text-sm text-gray-400">Investing in the future of Africa</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline"
              >
                Read more
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
