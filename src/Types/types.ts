import { GridColDef } from '@mui/x-data-grid'

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
}
export interface ProductProps {
  src: string
  name: string
  price: string
  _id: string
  thumbnail:  string
  images:  [string]
  category: string
  subcategory: string
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
export interface ProductsModalState {
  productModal: {
    isOpen: boolean
  }
}
export interface ProductsModal {
  isOpen: boolean
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
}
