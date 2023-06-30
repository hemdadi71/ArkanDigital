
import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import Input from '../Input/Input'
import { MdOutlineLocationOn } from 'react-icons/md'
import TextArea from '../TextArea'
import { SlCalender } from 'react-icons/sl'
import {  DateInput } from 'mantine-datepicker-jalali'
import 'dayjs/locale/fa'
import { Controller } from 'react-hook-form'
import {  addDays } from 'date-fns'
function OrderForm({ user, errors, register, control }: any) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <div className="border rounded-md w-[45%] bg-white">
            <div className="border-b">
              <div className="py-2 px-4 flex gap-2">
                <div className="bg-purple rounded-full p-1 text-white">
                  <HiOutlineUser size={18} />
                </div>
                <p className="text-gray-500">مشخصات تحویل گیرنده</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1 w-[45%]">
                  <Input
                    defaultValue={user.firstname}
                    name="firstname"
                    register={{ ...register('firstname') }}
                    type="text"
                    label="نام:"
                    errorTxt={errors.firstname?.message}
                  />
                </div>
                <div className="flex flex-col gap-1 w-[45%]">
                  <Input
                    defaultValue={user.lastname}
                    name="lastname"
                    register={{ ...register('lastname') }}
                    type="text"
                    label=" نام خانوادگی:"
                    errorTxt={errors.lastname?.message}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col gap-1 w-[45%]">
                  <Input
                    defaultValue={String(user.phonenumber).padStart(11, '0')}
                    name="phonenumber"
                    register={{ ...register('phonenumber') }}
                    type="text"
                    label="شماره موبایل:"
                    errorTxt={errors.phonenumber?.message}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%] bg-white">
            <div className="border rounded-md">
              <div className="border-b">
                <div className="py-2 px-4 flex gap-2">
                  <div className="bg-purple rounded-full p-1 text-white">
                    <MdOutlineLocationOn size={18} />
                  </div>
                  <p className="text-gray-500">آدرس تحویل سفارش</p>
                </div>
              </div>
              <div className="p-3">
                <div className="flex flex-col gap-1 w-full">
                  <TextArea
                    defaultValue={user.address}
                    name="address"
                    register={{ ...register('address') }}
                    type="text"
                    label="آدرس:"
                    errorTxt={errors.address?.message}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[40%] bg-white rounded-md border">
            <div className="border-b">
              <div className="py-2 px-4 flex gap-2">
                <div className="bg-purple rounded-full p-1 text-white">
                  <SlCalender size={14} />
                </div>
                <p className="text-gray-500">تاریخ تحویل سفارش</p>
              </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <Controller
                control={control}
                name="deliveryDate"
                render={({ field: { onChange, value } }) => {
                  const minDate = addDays(new Date(), 5)
                  return (
                    <DateInput
                      onChange={onChange}
                      minDate={minDate}
                      value={value}
                      label="تاریخ:"
                      placeholder="تاریخ را وارد کنید"
                      style={{ direction: 'rtl' }}
                      locale="fa"
                      firstDayOfWeek={6}
                      weekendDays={[5]}
                    />
                  )
                }}
              />
              <p className="text-red-500 text-[14px]">
                {errors.deliveryDate?.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderForm
