import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
// .......................................................
function AdminTabs() {
  const router = useRouter()
  return (
    <Tab.Group>
      <Tab.List className="flex gap-4">
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/admin/products"
              className={`${
                selected && router.route.includes('products')
                  ? 'bg-purple text-white'
                  : 'bg-white text-black'
              } py-1 px-6 rounded-md outline-none border text-center`}>
              کالاها
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/admin/price&quantity"
              className={`${
                selected || router.route.includes('price')
                  ? 'bg-purple text-white'
                  : 'bg-white text-black'
              } py-1 px-6 rounded-md outline-none border text-center`}>
              موجودی و قیمت ها
            </Link>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <Link
              href="/admin/orders"
              className={`${
                selected || router.route.includes('orders')
                  ? 'bg-purple text-white'
                  : 'bg-white text-black'
              } py-1 px-6 rounded-md outline-none border text-center`}>
              سفارش ها
            </Link>
          )}
        </Tab>
      </Tab.List>
    </Tab.Group>
  )
}
export default AdminTabs
