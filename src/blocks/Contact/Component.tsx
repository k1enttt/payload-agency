import React from 'react'

import type { ContactBlock as ContactBlockProps } from '@/payload-types'

export const ContactBlock: React.FC<ContactBlockProps> = (props) => {
  return (
    <div className="my-16">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-6 text-center sm:gap-16 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Company information:
                </h3>
                <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  Flowbite LLC
                  <br />
                  Tax id: USXXXXXX
                </p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Address:</h3>
                <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  SILVER LAKE, United States
                  <br />
                  1941 Late Avenue
                  <br />
                  Zip Code/Postal code: 03875
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact us:</h3>
                <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  Email us htmlFor general queries, including marketing and partnership
                  opportunities.
                </p>
                <a
                  href="#"
                  title=""
                  className="block mt-1 text-base font-semibold text-gray-900 dark:text-white hover:underline"
                >
                  hello@flowbite.com
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8 lg:mt-24">
            <form
              action="#"
              className="grid max-w-screen-md grid-cols-1 mx-auto gap-x-8 gap-y-6 sm:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Bonnie"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Green"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone-number"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="+(12) 345 6789"
                  required
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Country
                  </label>
                  <button
                    type="button"
                    data-popover-target="country-description"
                    className="w-4 h-4"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Show information</span>
                  </button>
                  <div
                    data-popover
                    id="country-description"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                  >
                    <div className="p-3 space-y-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Country based on fiscal residency
                      </h3>
                      <p>
                        Report helps navigate cumulative growth of community activities. Ideally,
                        the chart should have a growing trend, as stagnating chart signifies a
                        significant decrease of community activity.
                      </p>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Double citizenship
                      </h3>
                      <p>
                        htmlFor each date bucket, the all-time volume of activities is calculated.
                        This means that activities in period n contain all activities up to period
                        n, plus the activities generated by your community in period.
                      </p>
                      <a
                        href="#"
                        className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700"
                      >
                        Read more{' '}
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </div>
                <select
                  id="country"
                  defaultValue="US"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option>Select a country</option>
                  <option value="US">United States</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="GB">United Kingdom</option>
                  <option value="ES">Spain</option>
                  <option value="CA">Canada</option>
                  <option value="JP">Japan</option>
                  <option value="CN">People&apos;s Republic of China</option>
                </select>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Language
                  </label>
                  <button
                    type="button"
                    data-popover-target="language-description"
                    className="w-4 h-4"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Show information</span>
                  </button>
                  <div
                    data-popover
                    id="language-description"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                  >
                    <div className="p-3 space-y-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Choosing an international language
                      </h3>
                      <p>
                        Report helps navigate cumulative growth of community activities. Ideally,
                        the chart should have a growing trend, as stagnating chart signifies a
                        significant decrease of community activity.
                      </p>
                      <a
                        href="#"
                        className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700"
                      >
                        Read more{' '}
                        <svg
                          className="w-4 h-4 ml-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </div>
                <select
                  id="language"
                  defaultValue="US"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option>Select a language</option>
                  <option value="US">English (US)</option>
                  <option value="DE">German</option>
                  <option value="FR">French</option>
                  <option value="ES">Spanish</option>
                  <option value="JP">Japanese</option>
                  <option value="NL">Dutch</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                ></textarea>
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    value=""
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    I confirm that you have read and agreed to
                    <a
                      href="#"
                      title=""
                      className="font-medium text-gray-900 hover:no-underline underline dark:text-white"
                    >
                      Flowbite&apos;s Terms of Service
                    </a>
                    and
                    <a
                      href="#"
                      title=""
                      className="font-medium text-gray-900 hover:no-underline underline dark:text-white"
                    >
                      Privacy Statement
                    </a>
                    .
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
