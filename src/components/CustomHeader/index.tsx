'use client'
import Image from 'next/image'
import ThemeModeButton from '../ThemeModeButton'
import { useEffect, useRef, useState } from 'react'

const CustomHeader = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const textColorStyle = isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
  const linkColorStyle = isScrolled ? 'hover:text-black' : 'hover:text-white'

  const navRef = useRef<HTMLDivElement>(null)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
    if (navRef.current) {
      if (isNavOpen && window.innerWidth < 1024) {
        navRef.current.classList.add('hidden')
        navRef.current.classList.remove('absolute', 'top-14', 'left-0', 'bg-black/80')
      } else {
        navRef.current.classList.remove('hidden')
        navRef.current.classList.add('absolute', 'top-14', 'left-0', 'bg-black/80')
      }
    }
  }

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          if (headerRef.current) {
            if (window.scrollY > 0) {
              setIsScrolled(true)
            } else {
              setIsScrolled(false)
            }
          }
          throttleTimeout = null
        }, 50)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav ref={headerRef} className={`${textColorStyle} py-2.5`}>
      <div className="container flex flex-wrap justify-between items-center">
        {/* LOGO */}
        <a href="https://flowbite.com" className="flex items-center">
          <Image
            width={32}
            height={32}
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9 w-auto"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        {/* RIGHT ACTION BUTTON */}
        <div className="flex items-center lg:order-2">
          <div className="p-2 mx-2 hover:bg-white/50 rounded-lg">
            <ThemeModeButton />
          </div>
          <a
            href="#"
            className="bg-primary-700 hover:bg-blue-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            View pages
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* NAVIGATIONS */}
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
          ref={navRef}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 ${isScrolled ? 'text-black' : 'text-white'} rounded bg-primary/50 lg:bg-transparent lg:text-primary lg:p-0 ${linkColorStyle}`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 ${linkColorStyle}`}
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 ${linkColorStyle}`}
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 ${linkColorStyle}`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 ${linkColorStyle}`}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 ${linkColorStyle}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default CustomHeader
