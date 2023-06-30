import Loading from '@/Components/Loading'
import { getUser } from '@/Components/api'
import { orderModalState, orderModalUserProps } from '@/Types/types'
import React from 'react'
import { useQuery } from 'react-query'

function UserData({ orderData }: orderModalUserProps) {
  const { data, isLoading } = useQuery('getUser', () => getUser(orderData.user))
  const deliveryDate = orderData.deliveryDate.split('T')[0].replace(/-/g, '/')
  const createdAt = orderData.createdAt.split('T')[0].replace(/-/g, '/')
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <p>نام مشتری:</p>
            <p className="flex items-center gap-1">
              <span>{data.firstname}</span>
              <span>{data.lastname}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>آدرس مشتری:</p>
            <p className="flex items-center gap-1">{data.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>تلفن تماس:</p>
            <p className="flex items-center gap-1">
              {String(data.phonenumber).padStart(11, '0')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>زمان تحویل:</p>
            <p className="flex items-center gap-1">{deliveryDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>زمان سفارش:</p>
            <p className="flex items-center gap-1">{createdAt}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default UserData
