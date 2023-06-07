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
  thumbnail: string
  images: [string]
  category: string
  subcategory: string
}
export interface ProductState {
  products: ProductProps
}
export interface RegisterModalState {
  isOpen: boolean
}
export interface RoleState {
  role: string
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
