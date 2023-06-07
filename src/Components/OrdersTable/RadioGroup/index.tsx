import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { MdRadioButtonUnchecked } from 'react-icons/md'
const plans = ['سفارش های تحویل شده', 'سفارش های در انتضار ارسال']

function OrdersStatusPlan() {
  const [plan, setPlan] = useState(plans[1])

  return (
    <RadioGroup className="flex list-none gap-5" value={plan} onChange={setPlan}>
      {plans.map(plan => (
        <RadioGroup.Option key={plan} value={plan} as={Fragment}>
          {({ active, checked }) => (
            <li
              className=''>
              <div className="flex items-center gap-2">
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
