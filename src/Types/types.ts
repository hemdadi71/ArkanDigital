import { GridColDef } from '@mui/x-data-grid'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface LayoutProps {
  children: any
}
export interface ProductCartProps {
  src: string
  category: string
  subcategory: string
  name: string
  price: string
  id: string
  images: string
}
export interface ProductCart {
  item: ProductProps
  id: string
}
export interface ProductProps {
  src: string
  name: string
  price: string
  _id: string
  thumbnail: string
  images: [string]
  category: string
  subcategory: string
  slugname: string
  brand: string
  quantity: string
  description: string
  id: string
  product: any
}
export interface removeCartModalState {
  removeCartModal: {
    product: string
    isOpen: boolean
  }
}
export interface ProductTableRow {
  row: ProductProps
}
export interface ProductState {
  products: ProductProps
}
export interface RegisterModalState {
  registerModal: {
    isOpen: boolean
  }
}
export interface registerModal {
  isOpen: boolean
}
export interface Loading {
  isLoading: boolean
}
export interface removeModal {
  isOpen: boolean
  id: string
}
export interface removeCartModal {
  isOpen: boolean
  product: string
}
export interface ProductsModalState {
  productModal: {
    isOpen: boolean
  }
}
export interface LoadingState {
  loading: {
    isLoading: boolean
  }
}
export interface removeModalState {
  removeModal: {
    isOpen: boolean
    id: string
  }
}
export interface ProductsModal {
  isOpen: boolean
}
export interface isEditing {
  isEditing: boolean
  rowData: ProductProps | {}
}
export interface isEditnigState {
  editingData: {
    isEditing: boolean
    rowData: ProductProps
  }
}
export interface RoleState {
  role: {
    name: string
  }
}
export interface loginData {
  username: string
  password: string
}

export interface SignUpFormInputs {
  username: string
  firstname: string
  lastname: string
  email: string
  password: string
  reenterPassword: string
}
export interface UserData {
  username: string
  firstname: string
  lastname: string
  email: string
  password: string
  _id: string
}
export interface OrdersRadioGroup {
  setPlan: React.Dispatch<React.SetStateAction<string>>
  plan: string
}
export interface OrderTableProps {
  allOrdersLength: number
  userData: UserData[]
  status: boolean
}
export interface ProductsColumns {
  columns: GridColDef[]
  productsLength: number
}
export interface categoryData {
  [x: string]: any
  category?: any
  subCategory?: string
  _id?: string
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
export interface PhoneMenuProps {
  data: categoryData
  setIsShowPhoneMenu?: React.Dispatch<React.SetStateAction<boolean>>
}
export interface SpinnerProps {
  className: string
}
export interface ImagePreviewProps {
  imageSrc: string[]
  setImageSrc: Dispatch<SetStateAction<any>>
}
export interface CartProps {
  product: string
  name: string
  price: number
  count: number
  id?: string
}
export interface orderModal {
  isOpen: boolean
  row: any
}
export interface orderModalState {
  orderModal: {
    isOpen: boolean
    row: any
  }
}
export interface orderModalUserProps {
  orderData: any
}
export interface CartState {
  CartState: CartProps
}
export interface RemoveCartModalProps {
  setRows: React.Dispatch<React.SetStateAction<never[]>>
}
export interface Cart {
  CartState: {
    user: string
    reduce?: undefined
    length?: undefined
    products: {
      reduce?: any
      length?: any
      id: string
      count: number
      name: string
      price: number
    }
  }
}
export interface SearchProduct {
  _id: string
  name: string
  thumbnail: string
}
