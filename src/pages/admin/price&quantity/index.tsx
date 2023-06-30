import ProductsPricesTable from '@/Components/ProductsTable'
import { PriceColumns } from '@/Components/PriceTable/PriceColumns'
import { useQuery } from 'react-query'
import { getProducts } from '@/Components/api'

function Details() {
  const { data } = useQuery('getProducts', () => getProducts())
  const productsLength = data?.length
  return (
    <>
      <div className="flex flex-col md:p-10 p-2 gap-5 md:w-full">
        <div className="flex justify-between items-center relative">
          <p className="text-xl font-semibold">مدیریت موجودی و قیمت ها</p>
        </div>
        <div className="flex justify-end">
          <div className="w-full">
            <ProductsPricesTable
              className="flex"
              productsLength={productsLength}
              columns={PriceColumns}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
