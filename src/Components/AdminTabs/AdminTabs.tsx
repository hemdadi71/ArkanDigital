import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
function AdminTabs() {
  const router = useRouter()
  console.log(router.route.includes('price'))
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
                selected || router.route.includes('price')
                  ? 'bg-purple text-white'
                  : 'bg-white text-black'
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
                selected || router.route.includes('orders')
                  ? 'bg-purple text-white'
                  : 'bg-white text-black'
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
