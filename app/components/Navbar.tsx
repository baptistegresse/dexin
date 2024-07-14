import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoImage from "@/public/logo_dexin.png"
import Image from 'next/image'
import ConnectButton from '@/lib/wallet-modal'


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#181A1E] px-36">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex  items-center">
              <Image 
                alt="Your Company"
                src={LogoImage}
                className="h-12 w-auto"
                width={140}
                height={140}
              />
                  <a className='text-gray-300 mt-6 m-4 underline' href="https://github.com/pinky-io/OnchainIndex" rel="noopener noreferrer" target="_blank">
                    github
                  </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
            </div>
          </div>
          <div className="absolute flex justify-center inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative pr-10">
              <ConnectButton />
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
