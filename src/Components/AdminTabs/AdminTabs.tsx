import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
function AdminTabs() {
  return (
    <Tab.Group>
      <Tab.List className='flex gap-4'>
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/admin/products"
              className={`${
                selected ? 'bg-purple text-white' : 'bg-white text-black'
              } py-1 px-6 rounded-md outline-none border`}>
              کالاها
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/admin/price&quantity"
              className={`${
                selected ? 'bg-purple text-white' : 'bg-white text-black'
              } py-1 px-6 rounded-md outline-none border`}>
              موجودی و قیمت ها
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/admin/orders"
              className={`${
                selected ? 'bg-purple text-white' : 'bg-white text-black'
              } py-1 px-6 rounded-md outline-none border`}>
              سفارش ها
            </Link>
          )}
        </Tab>
      </Tab.List>
    </Tab.Group>
  )
}
export default AdminTabs
