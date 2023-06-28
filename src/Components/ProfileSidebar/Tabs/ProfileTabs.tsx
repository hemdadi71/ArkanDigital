import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { BiMapAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'
export default function ProfileTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const { pathname } = router
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex flex-col w-full gap-5">
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/profile"
              className={`${
                pathname === '/profile' && selected
                  ? 'bg-white text-purple-800'
                  : ' text-white bg-transparent'
              } font-semibold flex items-center gap-2 w-full outline-none rounded-md py-2 px-4`}>
              <div
                className={`rounded-md ${
                  selectedIndex === 0 || pathname === '/profile'
                    ? 'bg-[#5D108B]'
                    : 'bg-black bg-opacity-25'
                }  text-white p-[5px]`}>
                <AiOutlineUser size={30} />
              </div>
              <p>حساب کاربری</p>
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/profile/orders"
              className={`${
                selected || pathname === '/profile/orders'
                  ? 'bg-white text-purple-800'
                  : ' text-white bg-transparent'
              } font-semibold flex items-center gap-2 w-full outline-none rounded-md py-2 px-4`}>
              <div
                className={`rounded-md ${
                  selectedIndex === 1 || pathname === '/profile/orders'
                    ? 'bg-[#5D108B]'
                    : 'bg-black bg-opacity-25'
                }  text-white p-[5px]`}>
                <RiShoppingCart2Line size={30} />
              </div>
              <p>سفارشات</p>
            </Link>
          )}
        </Tab>
        {/* <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/profile/addresses"
              className={`${
                selected || pathname === '/profile/addresses'
                  ? 'bg-white text-purple-800'
                  : ' text-white bg-transparent'
              } font-semibold flex items-center gap-2 w-full outline-none rounded-md py-2 px-4`}>
              <div
                className={`rounded-md ${
                  selectedIndex === 2 || pathname === '/profile/addresses'
                    ? 'bg-[#5D108B]'
                    : 'bg-black bg-opacity-25'
                }  text-white p-[5px]`}>
                <BiMapAlt size={30} />
              </div>
              <p>آدرس های شما</p>
            </Link>
          )}
        </Tab> */}
      </Tab.List>
    </Tab.Group>
  )
}
