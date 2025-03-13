import React from 'react'

import type { BlogBlock as BlogBlockProps } from '@/payload-types'

import Image from 'next/image'

export const BlogBlock: React.FC<BlogBlockProps> = (props) => {
  return (
    <div className="my-16">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blog
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              We use an agile approach to test assumptions and connect with the needs of your
              audience early and often.
            </p>
          </div>
          <div className="grid gap-8 mb-16 lg:divide-x lg:divide-gray-200 dark:lg:divide-gray-700 lg:grid-cols-3">
            <article>
              <a href="#">
                <Image
                  className="mb-5 rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                  alt="blog image"
                  width={400}
                  height={200}
                />
              </a>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">SEO Basics: Beginner&apos;s Guide to SEO Success</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After months of preparation
                and some hard work, we moved to our new office.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </article>
            <div className="space-y-8 lg:pl-8">
              <article>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">How to quickly deploy a static website</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After months of
                  preparation and some hard work, we moved to our new office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </article>
              <article>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">What is SEO? Search Engine Optimization Explained</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After months of
                  preparation and some hard work, we moved to our new office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </article>
              <article>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Spotify&apos;s Car Thing available to all premium users</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After months of
                  preparation and some hard work, we moved to our new office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </article>
            </div>
            <div className="space-y-8 lg:pl-8">
              <article>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">How to Rank Higher on Google (6 Easy Steps)</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After months of
                  preparation and some hard work, we moved to our new office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </article>
              <article>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">12 SEO Best Practices That Everyone Should Follow</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After months of
                  preparation and some hard work, we moved to our new office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </article>
              <article>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">How to schedule your Tweets to send later</a>
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After months of
                  preparation and some hard work, we moved to our new office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
