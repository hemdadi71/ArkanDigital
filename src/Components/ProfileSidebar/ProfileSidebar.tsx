import Cookies from 'js-cookie'
import React from 'react'
import { HiOutlineWallet } from 'react-icons/hi2'
import ProfileTabs from './Tabs/ProfileTabs'
function ProfileSidebar() {
  const data = JSON.parse(Cookies.get('token'))
  const { user } = data
  return (
    <>
      <aside className="w-[30%] h-[100vh]">
        <div className="bg-[#5D108B]  py-5 px-10 flex flex-col gap-10 h-full">
          <div className="bg-black bg-opacity-40 rounded-md py-2 px-4 text-xl text-white">
            سلام {`${user.firstname} ${user.lastname}`}
          </div>
          <div className="bg-white rounded-md p-1 flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-2">
              <HiOutlineWallet size={27} className="text-purple-800" />
              <p className="font-semibold">اعتبار کیف پول:</p>
            </div>
            <p>0 تومان</p>
          </div>
          <ProfileTabs />
        </div>
      </aside>
    </>
  )
}

export default ProfileSidebar
