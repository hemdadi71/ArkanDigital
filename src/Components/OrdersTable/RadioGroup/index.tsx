import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { OrdersRadioGroup } from '@/Types/types'
// .........................................................................
export const plans = ['سفارش های تحویل شده', 'سفارش های در انتظار ارسال']

function OrdersStatusPlan({ plan, setPlan }: OrdersRadioGroup) {
  return (
    <RadioGroup
      className="flex list-none gap-5"
      value={plan}
      onChange={setPlan}>
      {plans.map(plan => (
        <RadioGroup.Option key={plan} value={plan} as={Fragment}>
          {({ active, checked }) => (
            <li className="cursor-pointer hover:text-purple">
              <div className="flex items-center gap-2 text-center">
                {plan}
                {checked ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
              </div>
            </li>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}
export default OrdersStatusPlan
