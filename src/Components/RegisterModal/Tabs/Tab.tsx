import Login from '@/Components/Login/login'
import SignUpForm from '@/Components/SignUp'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
function ModalTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-3 py-1 justify-center w-fit mx-auto px-1 rounded-md">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`${
                selected ? 'bg-purple text-white' : 'bg-gray-100 text-black'
              } px-8 py-1 rounded-md`}>
              <p>ورود</p>
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`${
                selected ? 'bg-purple text-white' : 'bg-gray-100 text-black'
              } px-6 py-1 rounded-md`}>
              <p>ثبت نام</p>
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Login />
        </Tab.Panel>
        <Tab.Panel>
          <SignUpForm />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
export default ModalTabs
