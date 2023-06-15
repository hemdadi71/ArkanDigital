import { getProducts } from '@/Components/api'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

export const AllProducts = () => {
  const router = useRouter()
  const category: any = router.query.category
  const { data: allProducts } = useQuery(
    ['getProducts', router.query.category],
    () => getProducts(0, 1, category, '')
  )
  return allProducts
}
export const AllSubcategoryProducts = () => {
  const router = useRouter()
  const subcategory: any = router.query.subcategory
  const { data: allProducts } = useQuery(
    ['getProducts', router.query.category],
    () => getProducts(0, 1, '', subcategory)
  )
  return allProducts
}
